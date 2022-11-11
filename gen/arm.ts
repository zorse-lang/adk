import type { Cheerio, CheerioAPI, Element } from "cheerio";
import { GeneratedModule, GeneratedProperty, PropertyKind, write } from "./common/writer";

import { CodeMaker } from "codemaker";
import assert from "assert";
import { load as cheerio } from "cheerio";
import fs from "fs";
import glob from "glob";
import { marked } from "marked";
import path from "path";
import { promisify } from "util";

const globAsync = promisify(glob);

function emit($: CheerioAPI, mod: GeneratedModule) {
	const [namespace, version] = $("h1")
		.text()
		.split("@")
		.map((x) => x.trim());

	const bicepTypeToTypeScriptType = (type: string) => {
		const arraySuffix = type.endsWith("[]") ? "[]" : "";
		const optionalSuffix = type.endsWith("?") ? "?" : "";
		type = type.replace("[]", "").replace("?", "");
		// if type is a string union, sanitize its values
		if (type.includes("|")) {
			assert(type.endsWith("string") || type.startsWith("'"), `unexpected type: ${type}`);
			type = type
				.split("|")
				// remove quotes
				.map((x) => x.replace(/[`'"]+/g, ""))
				.map((x) => x.trim())
				.map((x) => `'${x}'`)
				// remove last element
				.slice(0, -1)
				.join(" | ");
		}
		// map bicep types to typescript types
		switch (type) {
			case "string": {
				type = "string";
				break;
			}
			case "int": {
				type = "number";
				break;
			}
			case "bool": {
				type = "boolean";
				break;
			}
			case "object":
			case "secureObject":
			case "secureString":
				throw new Error(`unsupported type: ${type}`);
			default:
				break;
		}
		return `${type}${optionalSuffix}${arraySuffix}`;
	};

	const getProperties = ($properties: Cheerio<Element>) => {
		const properties: GeneratedProperty[] = [];
		const $props = $properties.next("ul");
		for (const prop of $props.children("li")) {
			const $prop = $(prop);
			const propText = $prop.text();
			const propParts = propText.split(": ");
			if (propParts.length < 2) {
				continue;
			}
			const name = propParts[0];
			const pattern = /(.+?)( \((.+)\))?$/;
			const [, type, , flags] = propParts[1].match(pattern) || [];
			const flagsArr = flags?.split(", ") || [];
			const isOutput = flagsArr.includes("ReadOnly") && flagsArr.includes("DeployTimeConstant");
			properties.push({
				name,
				type: bicepTypeToTypeScriptType(type),
				kind: isOutput ? PropertyKind.Output : PropertyKind.Input,
				required: flagsArr.includes("Required") || isOutput,
			});
		}
		return properties;
	};

	const getAdditionalProperties = ($additionalProperties: Cheerio<Element>) => {
		const properties: GeneratedProperty[] = [];
		const $props = $additionalProperties.next("ul");
		for (const prop of $props.children("li")) {
			const $prop = $(prop);
			const propText = $prop.text();
			const propParts = propText.split(": ");
			if (propParts.length < 2) {
				continue;
			}
			const type = propParts[1];
			properties.push({
				name: "[ key: string ]",
				type: bicepTypeToTypeScriptType(type),
				// AdditionalProperties are always in ObjectTypes, so they're inputs
				kind: PropertyKind.Input,
				// AdditionalProperties are always optional by definition
				required: false,
			});
		}
		return properties;
	};

	const getProps = ($data: Cheerio<Element>) => {
		const $findHeading = (heading: string) =>
			$(
				$data
					.filter("h3")
					.toArray()
					.find((x) => $(x).text() === heading),
			);
		const $properties = $findHeading("Properties");
		const $additionalProperties = $findHeading("Additional Properties");
		const props = [...getProperties($properties), ...getAdditionalProperties($additionalProperties)];
		return props;
	};

	for (const typeHeading of $("h2")) {
		const $typeHeading = $(typeHeading);
		const typeNameInfo = $typeHeading.text();
		const $data = $typeHeading.nextUntil("h2");

		if (typeNameInfo.startsWith("Resource ")) {
			const fullName = typeNameInfo.replace(/@[^@]+/g, "").replace("Resource ", "").replace(`${namespace}/`, "");
			if ($data.text().includes("Discriminator")) {
				const discriminatorField = $($typeHeading.next())
					.find("li")
					.toArray()
					.map((v) => $(v).text())
					.find((v) => v.startsWith("Discriminator"))
					?.split(": ")[1];
				assert(discriminatorField, `could not find discriminator field for ${fullName}`);
				const $subTypes = $(
					$data
						.filter("h3")
						.toArray()
						.filter((x) => $(x).text() && $(x).text() !== "Base Properties"),
				);
				assert($subTypes.length > 0, `could not find subtypes for ${fullName}`);
				const baseProperties = getProperties($data.filter("h3").first());
				const unionTypes: string[] = [];
				for (const subType of $subTypes) {
					const $subType = $(subType);
					const subProperties = getProperties($subType.next("h4"));
					const discriminatorValue = subProperties
						.find((x) => x.name === discriminatorField)
						?.type.replace(/['"`]/g, "");
					assert(discriminatorValue, `could not find discriminator value for ${fullName}`);
					const unionTypeName = `${fullName}/${discriminatorValue}`;
					unionTypes.push(unionTypeName);
					mod.constructs.push({
						name: unionTypeName,
						properties: [...baseProperties, ...subProperties],
						initializer: `super(entity, options.name, '${namespace}/${fullName}', '${version}', options);`,
					});
				}
				mod.unions.push({
					name: fullName,
					types: unionTypes,
				});
			} else {
				mod.constructs.push({
					name: fullName,
					properties: getProps($data),
					initializer: `super(entity, options.name, '${namespace}/${fullName}', '${version}', options);`,
				});
			}
		} else if (typeNameInfo.startsWith("Function ")) {
			const functionName = typeNameInfo.split(" ")[1];
			const $params = $data
				.find("ul li")
				.toArray()
				.map((v) => $(v).text());
			// https://learn.microsoft.com/en-us/azure/azure-resource-manager/templates/template-functions-resource#listkeys
			const Resource = $params.find((v) => v.startsWith("Resource: "));
			assert(Resource, `Resource not found in ${functionName}`);
			const ApiVersion = $params.find((v) => v.startsWith("ApiVersion: "));
			assert(ApiVersion, `ApiVersion not found in ${functionName}`);
			const Output = $params.find((v) => v.startsWith("Output: "));
			assert(Output, `Output not found in ${functionName}`);
			const Input = $params.find((v) => v.startsWith("Input: "));
			const resourceType = Resource.split(": ")[1].replace(`${namespace}/`, "");
			const parameters = [
				{
					name: "resource",
					type: mod.constructs.find((c) => c.name === resourceType)?.name || "ArmBaseResource",
				},
			];
			if (Input) {
				parameters.push({
					name: "input",
					type: bicepTypeToTypeScriptType(Input.split(": ")[1]),
				});
			}
			mod.functions.push({
				name: functionName,
				returns: bicepTypeToTypeScriptType(Output.split(": ")[1]),
				body: [
					`if (resource.apiVersion !== '${ApiVersion.split(": ")[1]}')`,
					`{throw new Error(\`${functionName} is not available for api version \${resource.apiVersion}\`);}`,
					`if (resource.type !== '${Resource.split(": ")[1]}')`,
					`{throw new Error(\`${functionName} is not available for resource type \${resource.type}\`);}`,
					`throw new Error('not implemented');`,
				].join("\n"),
				parameters,
			});
		} else if ($data.text().includes("Discriminator")) {
			const $subTypes = $(
				$data
					.filter("h3")
					.toArray()
					.filter((x) => $(x).text() && $(x).text() !== "Base Properties"),
			);
			const baseProperties = getProperties($data.filter("h3").first());
			if ($subTypes.empty()) {
				mod.interfaces.push({
					name: typeNameInfo,
					properties: [...baseProperties],
				});
			} else {
				for (const subType of $subTypes) {
					const $subType = $(subType);
					const subTypeName = $subType.text();
					const subProperties = getProperties($subType.next("h4"));
					mod.interfaces.push({
						name: subTypeName,
						properties: [...baseProperties, ...subProperties],
					});
				}
				mod.unions.push({
					name: typeNameInfo,
					types: $subTypes.toArray().map((x) => $(x).text()),
				});
			}
		} else {
			mod.interfaces.push({
				name: typeNameInfo,
				properties: getProps($data),
			});
		}
	}
}

interface SchemaData {
	namespace: string;
	category: string;
	version: string;
	schema: CheerioAPI;
	path: string;
}

async function processMarkdown(data: SchemaData) {
	const namespace = `${data.namespace}/${data.version}/${data.category}`;
	const genBase = `.gen/arm/${namespace}`;
	const genName = "index.ts";
	await fs.promises.mkdir(genBase, { recursive: true });
	const code = new CodeMaker({ indentationLevel: 2 });
	const mod: GeneratedModule = {
		code,
		baseResource: "ArmBaseResource",
		fileName: genName,
		constructs: [],
		interfaces: [],
		functions: [],
		unions: [],
	};
	emit(data.schema, mod);
	await write(mod).save(genBase);
}

async function main() {
	const markdowns = await globAsync(path.join(SCHEMAS_ROOT, "**/*.md"));
	for (const m of markdowns) {
		if (path.basename(m) === "index.md") {
			continue;
		}
		const relPath = path.relative(SCHEMAS_ROOT, m);
		const [category, namespace, version] = path.dirname(relPath).split("/");
		const schema = cheerio(marked.parse(fs.readFileSync(m, "utf-8")));
		await processMarkdown({ category, namespace, version, path: m, schema });
	}
}

const SCHEMAS_REPO = path.join(process.cwd(), "git_modules/arm-generator-util");
const SCHEMAS_ROOT = path.join(SCHEMAS_REPO, "generated");

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
