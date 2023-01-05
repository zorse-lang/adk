import {
	App,
	IndentedTextWriter,
	TypescriptWriterCallback,
	formatPropertyName,
	getType,
} from "../git_modules/gdm-generator-util/src/app";
import { GeneratedModule, PropertyKind, write } from "./common/writer";
import { isPlural, singular } from "pluralize";

import { CodeMaker } from "codemaker";
import FileStore from "axios-cache-adapter-fs";
import _ from "lodash";
import assert from "assert";
import { checkExists } from "../git_modules/gdm-generator-util/src/utils";
import childProcess from "child_process";
import fs from "fs";
import { setup } from "axios-cache-adapter";

const BREAK_PROMISE = Symbol.for("</3");
const axios = setup({
	cache: { maxAge: 365 * 24 * 60 * 1000, store: new FileStore() },
});

function createMemoryTextWriter() {
	let data = "";
	const writer = new IndentedTextWriter(
		{
			write: (chunk: string) => (data += chunk),
			end: async () => {},
		},
		"", // newLine
		"", // tabString
	);
	return { writer, data: () => data };
}

function createMemoryTypeScriptWriter() {
	const { writer, data } = createMemoryTextWriter();
	return { writer: new TypescriptTextWriter(writer, []), data };
}

const SHOULD_NOT_BE_CALLED = () => assert(false, "this should not be called");

export class TypescriptTextWriter {
	constructor(public readonly writer: IndentedTextWriter, public readonly bannedTypes: string[]) {}

	braces = SHOULD_NOT_BE_CALLED;
	namespace = SHOULD_NOT_BE_CALLED;
	interface = SHOULD_NOT_BE_CALLED;
	construct = SHOULD_NOT_BE_CALLED;
	newLine = SHOULD_NOT_BE_CALLED;
	endLine = SHOULD_NOT_BE_CALLED;
	scope = SHOULD_NOT_BE_CALLED;
	writeLine = SHOULD_NOT_BE_CALLED;
	writeNewLine = SHOULD_NOT_BE_CALLED;
	end = SHOULD_NOT_BE_CALLED;
	comment = () => {};

	property(name: string, type: string | TypescriptWriterCallback, required = true) {
		if (typeof type === "function") {
			this.write(`${formatPropertyName(name)}${required ? "" : "?"}: `);
			type(this);
			this.write(";");
		} else if (typeof type === "string") {
			this.writer.writeLine(`${formatPropertyName(name)}${required ? "" : "?"}: ${type};`);
		}
	}

	anonymousType(context: TypescriptWriterCallback) {
		this.write("{");
		context(this);
		this.write("}");
	}

	write(chunk: string | TypescriptWriterCallback = "") {
		if (typeof chunk === "string") {
			this.writer.write(chunk);
		} else if (typeof chunk === "function") {
			chunk(this);
		}
	}
}

process.on("unhandledRejection", (reason: Error) => {
	// the script fails for non existent IO errors?
	console.error(reason);
});

function findAllRefs(apiDoc: any, schema: any, refs: Set<string>) {
	const refRegExp = /"\$ref":\s*"([^"]+)"/g;
	let refMatch: any;
	while (null != (refMatch = refRegExp.exec(JSON.stringify(schema)))) {
		const ref = refMatch[1];
		if (refs.has(ref)) {
			continue;
		}
		refs.add(ref);
		findAllRefs(apiDoc, apiDoc.schemas[ref], refs);
	}
}

// @ts-expect-error hook into the gdm-generator-util package
App.prototype.processApi = async function (destinationDirectory: string, restDescription: any) {
	await fs.promises.rm(destinationDirectory, { recursive: true, force: true });
	destinationDirectory = destinationDirectory.split("/").slice(0, -1).join("/");
	const writerData = this.config.bannedTypes.writerData;
	const { category, version, name: typeName } = writerData.type;

	const mod: GeneratedModule = {
		baseResource: "GdmResource",
		code: new CodeMaker({ indentationLevel: 2 }),
		fileName: "index.ts",
		constructs: [],
		interfaces: [],
		functions: [],
		unions: [],
	};

	const schemas = checkExists(restDescription.schemas);
	Object.values(schemas).forEach((schema: any) => {
		const isConstruct = writerData.type.name.toLowerCase() === schema.id.toLowerCase();
		const IsOutputOnly = ({ description, readOnly }) => description?.toLowerCase().includes("output only") || readOnly;
		const isPropertyRequired = (key: string): boolean =>
			schema.properties[key].required || schema.properties[key].description?.toLowerCase().startsWith("required");

		const resolveGetType = (type: string | TypescriptWriterCallback) => {
			if (typeof type === "function") {
				const { writer, data } = createMemoryTypeScriptWriter();
				type(writer);
				return data();
			} else if (typeof type === "string") {
				return type;
			} else {
				throw new Error("Invalid type");
			}
		};

		const name = checkExists(schema.id);
		const properties = Object.keys(schema.properties).map((key) => ({
			name: key,
			type: resolveGetType(getType(schema.properties[key], schemas)),
			required: isPropertyRequired(key),
			kind: IsOutputOnly(schema.properties[key]) ? PropertyKind.Output : PropertyKind.Input,
		}));
		if (schema.additionalProperties) {
			properties.push({
				name: "[key: string]",
				type: resolveGetType(getType(schema.additionalProperties, schemas)),
				kind: PropertyKind.Input,
				required: false,
			});
		}

		if (isConstruct) {
			const propertiesProperty = properties.find((p) => ["properties"].includes(p.name));
			if (propertiesProperty) properties.splice(properties.indexOf(propertiesProperty), 1);
			const typeProperty = properties.find((p) => ["type"].includes(p.name));
			if (typeProperty) {
				properties.splice(properties.indexOf(typeProperty), 1);
			}
			const nameProperty = properties.find((p) => ["name"].includes(p.name));
			if (nameProperty) {
				nameProperty.required = true;
				nameProperty.kind = PropertyKind.Input;
			} else {
				properties.push({
					name: "name",
					type: "string",
					required: true,
					kind: PropertyKind.Input,
				});
			}
			mod.constructs.push({
				name,
				properties,
				initializer: `super(entity, options.name, "${category}.${version}.${typeName}", options);`,
			});
		} else {
			mod.interfaces.push({
				name,
				properties,
			});
		}
	});
	const code = write(mod);
	await code.save(destinationDirectory);
	throw BREAK_PROMISE;
};

const GEN_ROOT = ".gen/gdm";
fs.mkdirSync(GEN_ROOT, { recursive: true });

async function main() {
	fs.mkdirSync("cache", { recursive: true });
	const betaTypesList = getTypesList(
		"cache/gcp-types-beta.json",
		"gcloud beta deployment-manager types list --format=json",
	);
	// emit gcp-types
	for (const betaType of betaTypesList) {
		const { provider, types } = betaType;
		const [_, typeInfo] = provider.split("/");
		const [category, version] = typeInfo.split("-");
		for (const providerType of types) {
			const { input, output } = providerType.schema;
			const inputSchema = JSON.parse(input.replace(/#\/schemas\//g, ""));
			const outputSchema = JSON.parse(output.replace(/#\/schemas\//g, ""));
			const schema = inputSchema.mainSchema || inputSchema[inputSchema.methodName] || inputSchema;
			const schemas = inputSchema.schemas || {};
			schema.description = providerType.title;
			schema.name = providerType.name
				.replace(/-/g, ".")
				.split(".")
				.map((s: string) => s[0].toUpperCase() + s.slice(1))
				.join("");
			schema.id = schema.name;
			schema.properties = schema.properties || {};
			if (output !== "{}") {
				let refSchema = outputSchema.mainSchema || outputSchema[outputSchema.methodName] || outputSchema;
				refSchema = refSchema.$ref ? outputSchema.schemas[refSchema.$ref] : refSchema;
				assert(refSchema.type === "object");
				const propsToMerge = refSchema.properties || {};
				const schemasToMerge = outputSchema.schemas || {};
				Object.assign(schemas, schemasToMerge);
				Object.assign(schema.properties, propsToMerge);
			}
			// replace keys with "." in schema.properties with "_" to avoid invalid JS
			schema.properties = Object.keys(schema.properties).reduce((acc, key) => {
				acc[key.replace(/\./g, "_")] = schema.properties[key];
				return acc;
			}, {});
			schemas[schema.name] = schema;
			Object.keys(schemas).forEach((k) => {
				if (k.startsWith("#")) {
					// rome-ignore lint:
					delete schemas[k];
				} else {
					schemas[k].id = schemas[k].id.replace(/^#/, "");
				}
			});
			const apiDoc = {
				id: `${category}:${version}`,
				name: providerType.name,
				kind: providerType.kind,
				description: schema.description,
				documentationLink: providerType.documentationLink,
				revision: "beta",
				schemas,
			};
			const bannedTypes = [];
			// @ts-expect-error this is passed to the generator package
			bannedTypes.writerData = {
				type: { category, version, name: schema.name },
				apiDoc,
				refs: Object.keys(schemas),
			};
			const generator = new App({
				bannedTypes,
				maxLineLength: 120,
				typesDirectory: `${GEN_ROOT}/gcloud.${category}/${version.toLowerCase()}/${providerType.name.toLowerCase()}`,
				owners: [],
			});
			await generator.processService(apiDoc, new URL("https://cloud.google.com/deployment-manager")).catch((e) => {
				if (e !== BREAK_PROMISE) {
					throw e;
				}
			});
		}
	}
	// emit base types
	const baseTypesList = getTypesList("cache/gcp-types-base.json", "gcloud deployment-manager types list --format=json");
	const typeNames = baseTypesList
		.map(({ name }) => name.split("."))
		.map(([category, version, name]) => ({ category, version, name }));
	const { data: apis } = await axios.get("https://www.googleapis.com/discovery/v1/apis");
	const apiItems = apis.items;
	for (const type of typeNames) {
		const id = `${type.category}:${type.version}`;
		const fullId = `${id}/${type.name}`;
		const api = apiItems.find((api) => api.id === id);
		const discoUrl = Object.keys(KNOWN_URL_DISCREPANCIES).includes(fullId)
			? KNOWN_URL_DISCREPANCIES[fullId]
			: api.discoveryRestUrl;
		const { data: apiDoc } = await axios.get(discoUrl);
		const name = Object.keys(KNOWN_NAME_DISCREPANCIES).includes(fullId) ? KNOWN_NAME_DISCREPANCIES[fullId] : type.name;
		type.name = name;
		const schema = getSchemaWithKnownDiscrepancies(apiDoc.schemas, name);
		if (!schema) {
			console.log(`Schema not found: ${id}/${name}`);
			console.log(`Schema URL: ${discoUrl}`);
			console.log("  Choices:");
			Object.keys(apiDoc.schemas).forEach((k) => console.log(`    ${k}`));
			continue;
		}
		const refs: Set<string> = new Set();
		findAllRefs(apiDoc, schema, refs);
		const allSchemas = apiDoc.schemas;
		const bannedTypes = [];
		// @ts-expect-error this is passed to the generator package
		bannedTypes.writerData = {
			type,
			apiDoc,
			refs: [...Array.from(refs), schema.id],
		};
		const generator = new App({
			bannedTypes,
			maxLineLength: 120,
			typesDirectory: `${GEN_ROOT}/gcloud.${type.category}/${type.version.toLowerCase()}/${type.name.toLowerCase()}`,
			owners: [],
		});
		apiDoc.schemas = { [schema.id]: schema };
		for (const ref of refs) {
			apiDoc.schemas[ref] = allSchemas[ref];
		}
		await generator.processService(apiDoc, new URL(discoUrl)).catch((e) => {
			if (e !== BREAK_PROMISE) {
				throw e;
			}
		});
	}
}

const KNOWN_URL_DISCREPANCIES = {
	"logging:v2beta1/metric":
		"https://raw.githubusercontent.com/googleapis/google-api-go-client/main/logging/v2beta1/logging-api.json",
	"logging:v2beta1/sink":
		"https://raw.githubusercontent.com/googleapis/google-api-go-client/main/logging/v2beta1/logging-api.json",
	"replicapool:v1beta1/pool":
		"https://raw.githubusercontent.com/googleapis/google-api-go-client/main/replicapool/v1beta1/replicapool-api.json",
	"resourceviews:v1beta2/zoneView":
		"https://raw.githubusercontent.com/googleapis/google-api-go-client/883e6f8adc45ffdf56316364df064df49a5302c8/resourceviews/v1beta2/resourceviews-api.json",
};

const KNOWN_NAME_DISCREPANCIES = {
	"resourceviews:v1beta2/zoneView": "ResourceView",
	"runtimeconfig:v1beta1/config": "RuntimeConfig",
	"sqladmin:v1beta4/instance": "DatabaseInstance",
	"logging:v2beta1/metric": "LogMetric",
	"logging:v2beta1/sink": "LogSink",
	"logging:v2/metric": "LogMetric",
	"logging:v2/sink": "LogSink",
	"compute:alpha/xpnResource": "XpnResourceId",
	"compute:beta/xpnResource": "XpnResourceId",
	"compute:alpha/xpnHost": "XpnHostList",
	"compute:beta/xpnHost": "XpnHostList",
};

function getSchemaWithKnownDiscrepancies(obj: any, key: string) {
	let data = caseInsensitiveJsonGetter(obj, key);
	["region", "global", "default"].forEach((k) => {
		if (!data && key.startsWith(k)) {
			const actualKey = key.replace(k, "");
			data = caseInsensitiveJsonGetter(obj, actualKey);
		}
	});
	if (!data && isPlural(key)) {
		const actualKey = singular(key);
		data = caseInsensitiveJsonGetter(obj, actualKey);
	}
	return data;
}

function caseInsensitiveJsonGetter(obj: any, key: string) {
	assert(typeof obj === "object" && !!obj, "obj must be an object!");
	const lowerKey = key.toLowerCase();
	const actualKey = Object.keys(obj).find((k) => k.toLowerCase() === lowerKey);
	return actualKey ? obj[actualKey] : null;
}

function getTypesListCommand(gcloudCommand: string) {
	try {
		const typesList = JSON.parse(
			childProcess
				.execSync(gcloudCommand, {
					maxBuffer: 1024 * 1024 * 1024,
				})
				.toString(),
		);
		return typesList;
	} catch (e) {
		console.error("Error while fetching types list");
		throw e;
	}
}

function getTypesListAndCache(cacheFile: string, gcloudCommand: string) {
	const typesList = getTypesListCommand(gcloudCommand);
	fs.writeFileSync(cacheFile, JSON.stringify(typesList, null, 2));
	return typesList;
}

function getTypesListFromCache(cacheFile: string) {
	return JSON.parse(fs.readFileSync(cacheFile).toString());
}

function getTypesList(cacheFile: string, gcloudCommand: string) {
	if (fs.existsSync(cacheFile)) {
		return getTypesListFromCache(cacheFile);
	} else {
		return getTypesListAndCache(cacheFile, gcloudCommand);
	}
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
