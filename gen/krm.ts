import { DEFAULT_API_VERSION, ImportKubernetesApiOptions } from "../git_modules/krm-generator-util/src/import/k8s";
import { GeneratedModule, PropertyKind } from "./common/types";
import { InterfaceDeclaration, SyntaxKind } from "typescript";
import { parseApiTypeName, safeParseJsonSchema } from "../git_modules/krm-generator-util/src/import/k8s-util";

import { CodeMaker } from "codemaker";
import { ImportBase } from "../git_modules/krm-generator-util/src/import/base";
import { ImportSpec } from "../git_modules/krm-generator-util/src/config";
import { JSONSchema4 } from "json-schema";
import { TypeGenerator } from "../git_modules/krm-generator-util/node_modules/json2jsii/lib";
import { download } from "../git_modules/krm-generator-util/src/util";
import path from "path";
import { tsquery } from "@phenomnomnominal/tsquery";
import { write } from "./common/writer";

interface ApiObjectDefinition {
	readonly fqn: string;
	readonly group: string;
	readonly version: string;
	readonly kind: string;
	readonly schema: JSONSchema4;
}

const PROP_HACK = "_X";

const MOD: GeneratedModule = {
	baseResource: "KrmResource",
	code: new CodeMaker({ indentationLevel: 2 }),
	fileName: "index.ts",
	constructs: [],
	functions: [],
	interfaces: [],
	unions: [],
};
const toPascalCase = (s: string) => s.replace(/(?:^|[-_])(\w)/g, (_, c) => (c ? c.toUpperCase() : ""));

function getTypeName(custom: boolean, kind: string, version: string) {
	const postfix = custom || version === "v1" ? "" : toPascalCase(version);
	return `${kind}${postfix}`;
}

function getConstructTypeName(def: ApiObjectDefinition) {
	return TypeGenerator.normalizeTypeName(`${getTypeName(false, def.kind, def.version)}`);
}

function getPropsTypeName(def: ApiObjectDefinition) {
	const constructName = getConstructTypeName(def);
	return TypeGenerator.normalizeTypeName(`${constructName}${PROP_HACK}`);
}

function generateConstruct(typegen: TypeGenerator, def: ApiObjectDefinition) {
	const constructName = getConstructTypeName(def);
	typegen.emitCustomType(constructName, () => {
		const schema = def.schema;

		// `propsTypeName` could also be "any" if we can't parse the schema for some reason
		const propsTypeName = emitPropsStruct();
		const groupPrefix = def.group ? `${def.group}/` : "";
		const apiVersion = `${groupPrefix}${def.version}`;
		const kind = def.kind;
		MOD.constructs.push({
			name: constructName,
			properties: [],
			initializer: `super(entity, "${apiVersion}", "${kind}", options);`,
		});

		function emitPropsStruct() {
			const propsSchema = createPropsStructSchema();
			const propsStructName = getPropsTypeName(def);
			return typegen.emitType(propsStructName, propsSchema, def.fqn);
		}

		function createPropsStructSchema() {
			const copy: JSONSchema4 = { ...(def.schema || {}) };
			const props = (copy.properties = copy.properties || {});
			delete props.apiVersion;
			delete props.kind;
			delete props.status;
			delete copy["x-kubernetes-group-version-kind"];
			copy.required = copy.required || [];
			if (Array.isArray(copy.required)) {
				copy.required = copy.required.filter((x) => x !== "apiVersion" && x !== "kind" && x !== "status");
			}
			return copy;
		}
	});
}

class ImportKubernetesApi extends ImportBase {
	public static async match(importSpec: ImportSpec, argv: any): Promise<ImportKubernetesApiOptions | undefined> {
		const { source } = importSpec;
		if (source !== "k8s" && !source.startsWith("k8s@")) {
			return undefined;
		}

		const k8sVersion = source.split("@")[1] ?? DEFAULT_API_VERSION;

		const k8sVersionRegex = /^\d+\.\d+\.\d+$/;
		if (!k8sVersionRegex.test(k8sVersion)) {
			throw new Error(`Expected k8s version "${k8sVersion}" to match format "<major>.<minor>.<patch>".`);
		}

		console.error(`Importing k8s v${k8sVersion}...`);

		return {
			apiVersion: k8sVersion,
			exclude: argv.exclude,
		};
	}

	constructor(private readonly options: ImportKubernetesApiOptions) {
		super();
	}

	public get moduleNames() {
		return ["k8s"];
	}

	public async generateTypeScript() {
		const schema = await downloadSchema(this.options.apiVersion);

		const topLevelObjects = findApiObjectDefinitions(schema);

		const typeGenerator = new TypeGenerator({
			definitions: schema.definitions,
			exclude: this.options.exclude,
			renderTypeName: (def: string) => {
				const parsed = parseApiTypeName(def);
				if (!parsed.version) {
					// not a versioned api type. return basename
					return parsed.basename;
				}
				return getTypeName(false, parsed.basename, parsed.version.raw);
			},
		});

		// emit construct types (recursive)
		for (const o of topLevelObjects) {
			generateConstruct(typeGenerator, o);
		}

		// @ts-expect-error - this is a private API
		typeGenerator.toJson = false;
		let output = typeGenerator.render();
		// remove all comments
		output = output.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, "");
		// remove all empty lines
		output = output.replace(/^\s*[\r\n]/gm, "");
		// we have all interfaces, now we need to generate the actual constructs
		// parse typescript interfaces back to memory
		const interfaces = tsquery(output, "InterfaceDeclaration");
		for (const i of interfaces) {
			const iface = i as InterfaceDeclaration;
			const name = (i as InterfaceDeclaration).name.text;
			const properties = iface.members.map((x: any) => {
				return {
					name: x.name.getText(),
					type: x.type
						.getText()
						.replace("Quantity", "string")
						.replace("IntOrString", "string | number")
						.replace("IoK8SApimachineryPkgApisMetaV1DeleteOptionsKind", "any"),
					kind: PropertyKind.Input,
					required: x.modifiers?.some((x: any) => x.kind | SyntaxKind.QuestionToken) ? false : true,
				};
			});
			if (name.endsWith(PROP_HACK)) {
				const construct = MOD.constructs.find((x) => x.name === name.replace(PROP_HACK, ""));
				if (!construct) {
					continue;
				}
				construct.properties.push(...properties);
			} else {
				MOD.interfaces.push({ name, properties });
			}
		}
		const code = write(MOD);
		await code.save(path.resolve(__dirname, "../.gen/krm"));
	}
}

/**
 * Returns a map of all API objects in the spec (objects that have the
 * 'x-kubernetes-group-version-kind' annotation).
 *
 * The key is the base name of the type (i.e. `Deployment`). Since API objects
 * may have multiple versions, each value in the map is an array of type definitions
 * along with version information.
 *
 * @see https://kubernetes.io/docs/concepts/overview/kubernetes-api/#api-versioning
 */
function findApiObjectDefinitions(schema: JSONSchema4): ApiObjectDefinition[] {
	const result = new Array<ApiObjectDefinition>();

	for (const [typename, apischema] of Object.entries(schema.definitions || {})) {
		const objectName = tryGetObjectName(apischema);
		if (!objectName) {
			continue;
		}

		const type = parseApiTypeName(typename);
		if (!type.version) {
			throw new Error(`Unable to parse version for type: ${typename}`);
		}
		result.push({
			fqn: type.fullname,
			group: objectName.group,
			kind: objectName.kind,
			version: objectName.version,
			schema: apischema,
		});
	}

	return result;
}

function tryGetObjectName(def: JSONSchema4): GroupVersionKind | undefined {
	const objectNames = def[X_GROUP_VERSION_KIND] as GroupVersionKind[];
	if (!objectNames) {
		return undefined;
	}

	const objectName = objectNames[0];
	if (!objectName) {
		return undefined;
	}

	// skip definitions without "metadata". they are not API objects that can be defined
	// in manifests (example: io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions)
	// they will be treated as data types
	if (!def.properties?.metadata) {
		return undefined;
	}

	return objectName;
}

interface GroupVersionKind {
	readonly group: string;
	readonly kind: string;
	readonly version: string;
}

const X_GROUP_VERSION_KIND = "x-kubernetes-group-version-kind";

async function downloadSchema(apiVersion: string) {
	const url = `https://raw.githubusercontent.com/cdk8s-team/cdk8s/master/kubernetes-schemas/v${apiVersion}/_definitions.json`;
	let output;
	try {
		output = await download(url);
	} catch (e) {
		console.error(
			`Could not find a schema for k8s version ${apiVersion}. The current list of available schemas is at https://github.com/cdk8s-team/cdk8s/tree/master/kubernetes-schemas.`,
		);
		throw e;
	}
	try {
		return safeParseJsonSchema(output) as JSONSchema4;
	} catch (e) {
		throw new Error(`Unable to parse schema at ${url}: ${e}`);
	}
}

(async () => {
	const gen = new ImportKubernetesApi({ apiVersion: DEFAULT_API_VERSION });
	await gen.generateTypeScript();
})();
