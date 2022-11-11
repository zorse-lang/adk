import * as cfnSpec from "@aws-cdk/cfnspec";
import * as genspec from "../git_modules/cfn-generator-util/tools/@aws-cdk/cfn2ts/lib/genspec";
import * as rosSpec from "@alicloud/ros-cdk-spec";

import { GeneratedModule, GeneratedProperty, PropertyKind, write } from "./common/writer";
import {
	PropertyAttributeName,
	SpecName,
	itemTypeNames,
	scalarTypeNames,
} from "../git_modules/cfn-generator-util/tools/@aws-cdk/cfn2ts/lib/spec-utils";

import { CodeMaker } from "codemaker";
import fs from "fs";

type CfnOrRosSpec = typeof cfnSpec | typeof rosSpec;

async function main() {
	for (const ns of cfnSpec.namespaces()) {
		// "2010-09-09" is static here, see:
		// "AWSTemplateFormatVersion":
		// https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/format-version-structure.html
		await generate(cfnSpec, ns, `.gen/cfn/${ns.replace(/::/g, ".").toLowerCase()}/2010-09-09`);
	}
}

export async function generate(
	spec: CfnOrRosSpec,
	scopes: string | string[],
	outPath: string,
	base: string = "CfnBaseResource",
): Promise<void> {
	fs.mkdirSync(outPath, { recursive: true });
	if (typeof scopes === "string") {
		scopes = [scopes];
	}
	for (const scope of scopes) {
		const filtered = spec.filteredSpecification((s) => s.startsWith(`${scope}::`));
		if (Object.keys(filtered.ResourceTypes).length === 0) {
			throw new Error(`No resource was found for scope ${scope}`);
		}
		const affix = computeAffix(scope, scopes);
		const generator = new CodeGenerator(filtered, affix, spec, base);
		generator.emitCode();
		await generator.save(outPath);
	}
}

function computeAffix(scope: string, allScopes: string[]): string {
	if (allScopes.length === 1) {
		return "";
	}
	const parts = scope.match(/^(.+)(V\d+)$/);
	if (!parts) {
		return "";
	}
	const [, root, version] = parts;
	if (allScopes.indexOf(root) !== -1) {
		return version;
	}
	return "";
}

function uncdkify(name: string): string {
	name = name.replace(/^Cfn/, "").replace(/^attr/, "").replace(/([^\(])Property(\)|\[|\s|$)/, "$1$2");
	return name;
}

export default class CodeGenerator {
	public readonly outputFile: string;
	private readonly mod: GeneratedModule = {
		baseResource: "",
		code: new CodeMaker({ indentationLevel: 2 }),
		fileName: "index.ts",
		interfaces: [],
		constructs: [],
		functions: [],
		unions: [],
	};
	constructor(
		private readonly spec: cfnSpec.schema.Specification | rosSpec.schema.Specification,
		private readonly affix: string,
		private readonly cfnOrRosSpec: CfnOrRosSpec,
		baseResource: string,
	) {
		this.mod.baseResource = baseResource;
	}

	public emitCode(): void {
		for (const name of Object.keys(this.spec.ResourceTypes).sort()) {
			const resourceType = this.spec.ResourceTypes[name];
			const cfnName = SpecName.parse(name);
			const resourceName = genspec.CodeName.forCfnResource(cfnName, this.affix);
			this.emitResourceType(resourceName, resourceType);
			this.emitPropertyTypes(name, resourceName);
		}
	}

	public async save(dir: string): Promise<void> {
		const code = write(this.mod);
		await code.save(dir);
	}

	private emitPropertyTypes(resourceName: string, resourceClass: genspec.CodeName): void {
		const prefix = `${resourceName}.`;
		for (const name of Object.keys(this.spec.PropertyTypes).sort()) {
			if (!name.startsWith(prefix)) {
				continue;
			}
			const cfnName = PropertyAttributeName.parse(name);
			const propTypeName = genspec.CodeName.forPropertyType(cfnName, resourceClass);
			const type = this.spec.PropertyTypes[name];
			// @ts-expect-error
			if (this.cfnOrRosSpec.schema.isRecordType(type)) {
				this.emitPropertyType(resourceClass, propTypeName, type);
			}
		}
	}

	private emitPropsType(
		resourceContext: genspec.CodeName,
		spec: cfnSpec.schema.ResourceType | rosSpec.schema.ResourceType,
	): GeneratedProperty[] | undefined {
		if (spec.Properties && Object.keys(spec.Properties).length !== 0) {
			return this.emitPropsTypeProperties(resourceContext, spec.Properties);
		}
	}

	private emitProperty(props: EmitPropertyProps) {
		const javascriptPropertyName = props.propName;
		const type = this.findNativeType(props.context, props.spec);
		const optional = props.spec.Required ? "" : " | undefined";
		return {
			name: javascriptPropertyName,
			type: `${uncdkify(type)}${optional}`,
		};
	}

	private emitPropsTypeProperties(
		resource: genspec.CodeName,
		propertiesSpec: {
			[name: string]: cfnSpec.schema.Property | rosSpec.schema.Property;
		},
	): GeneratedProperty[] {
		const propertyMap: GeneratedProperty[] = [];
		Object.keys(propertiesSpec)
			.sort(propertyComparator)
			.forEach((propName) => {
				const propSpec = propertiesSpec[propName];
				const { name: newName, type } = this.emitProperty({
					context: resource,
					propName,
					spec: propSpec,
				} as EmitPropertyProps);
				if (newName !== propName) {
					throw new Error(`Property name changed from ${propName} to ${newName}`);
				}
				propertyMap.push({
					kind: PropertyKind.Input,
					name: propName,
					required: !!propSpec.Required,
					type: uncdkify(type),
				});
			});
		return propertyMap;

		/**
		 * A comparator that places required properties before optional properties,
		 * and sorts properties alphabetically.
		 * @param l the left property name.
		 * @param r the right property name.
		 */
		function propertyComparator(l: string, r: string): number {
			const lp = propertiesSpec[l];
			const rp = propertiesSpec[r];
			if (lp.Required === rp.Required) {
				return l.localeCompare(r);
			} else if (lp.Required) {
				return -1;
			}
			return 1;
		}
	}

	private emitResourceType(
		resourceName: genspec.CodeName,
		spec: cfnSpec.schema.ResourceType | rosSpec.schema.ResourceType,
	): void {
		const cfnName = resourceName.specName!.fqn;
		const props = this.emitPropsType(resourceName, spec) || [];
		props.push({
			name: "LogicalId",
			type: "string",
			required: true,
			kind: PropertyKind.Input,
		});
		const cfnResourceTypeName = `${JSON.stringify(cfnName)}`;

		// if (spec.RequiredTransform) {
		//   this.code.line("/**");
		//   this.code.line(" * The `Transform` a template must use in order to use this resource");
		//   this.code.line(` * ${JSON.stringify(spec.RequiredTransform)};`);
		//   this.code.line(" */");
		// }

		const attributes = { ...spec.Attributes };

		this.mod.constructs.push({
			name: uncdkify(resourceName.className),
			initializer: `super(entity, options.LogicalId, ${cfnResourceTypeName}, options);`,
			properties: Object.keys(attributes)
				.map((attributeName) => {
					const attributeSpec = attributes[attributeName];
					const attr = genspec.attributeDefinition(attributeName, attributeSpec);
					const collusion = props.find((p) => p.name === uncdkify(attr.propertyName));
					if (collusion && attr.attributeType !== collusion.type) {
						const prevType = collusion.type.replace(" | undefined", "");
						const newType = attr.attributeType;
						if (prevType !== newType && newType !== "cdk.IResolvable") {
							const unionType = [prevType, newType].sort().join(" | ");
							props[props.indexOf(collusion)].type = unionType;
						} else {
							props[props.indexOf(collusion)].type = attr.attributeType;
						}
						return;
					}
					return {
						kind: PropertyKind.Output,
						name: uncdkify(attr.propertyName),
						type: uncdkify(attr.attributeType),
						required: true,
					} as GeneratedProperty;
				})
				.filter((x) => x !== undefined)
				.concat(props) as GeneratedProperty[],
		});
	}

	private emitPropertyType(
		resourceContext: genspec.CodeName,
		typeName: genspec.CodeName,
		propTypeSpec: cfnSpec.schema.RecordProperty | rosSpec.schema.RecordProperty,
	): void {
		this.mod.interfaces.push({
			name: uncdkify(typeName.className),
			properties: Object.keys(propTypeSpec.Properties).map((propName) => {
				const propSpec = propTypeSpec.Properties[propName];
				const { type } = this.emitProperty({
					context: resourceContext,
					propName,
					spec: propSpec,
				} as EmitPropertyProps);
				return {
					kind: PropertyKind.Input,
					name: propName,
					type: uncdkify(type),
					required: !!propSpec.Required,
				};
			}),
		});
	}

	private findNativeType(
		resourceContext: genspec.CodeName,
		propSpec: cfnSpec.schema.Property | rosSpec.schema.Property,
	): string {
		const alternatives: string[] = [];

		// @ts-expect-error
		if (this.cfnOrRosSpec.schema.isCollectionProperty(propSpec)) {
			const itemTypes = genspec.specTypesToCodeTypes(resourceContext, itemTypeNames(propSpec as any));
			const union = this.renderTypeUnion(resourceContext, itemTypes);

			// @ts-expect-error
			if (this.cfnOrRosSpec.schema.isMapProperty(propSpec)) {
				alternatives.push(`{ [key: string]: (${union}) }`);
			} else {
				// To make TSLint happy, we have to either emit: SingleType[] or Array<Alt1 | Alt2>
				if (union.indexOf("|") !== -1) {
					alternatives.push(`Array<${union}>`);
				} else {
					alternatives.push(`${union}[]`);
				}
			}
		}

		// Yes, some types can be both collection and scalar. Looking at you, SAM.
		// @ts-expect-error
		if (this.cfnOrRosSpec.schema.isScalarProperty(propSpec)) {
			// Scalar type
			const typeNames = scalarTypeNames(propSpec as any);
			const types = genspec.specTypesToCodeTypes(resourceContext, typeNames);
			alternatives.push(this.renderTypeUnion(resourceContext, types));
		}

		const nativeType = alternatives
			.map((a) => (a.includes(".") ? a.replace(/[^\.\(\<]+\./g, "") : a))
			.map((a) => a.replace("CfnTag", "{ key: string, value: string }"))
			.join(" | ");
		return nativeType;
	}

	/**
	 * Render a CodeName to a string representation of it in TypeScript
	 */
	private renderCodeName(context: genspec.CodeName, type: genspec.CodeName): string {
		const rel = type.relativeTo(context);
		const specType = rel.specName && this.spec.PropertyTypes[rel.specName.fqn];
		// @ts-expect-error
		if (!specType || this.cfnOrRosSpec.schema.isRecordType(specType)) {
			return rel.fqn;
		}
		return this.findNativeType(context, specType);
	}

	private renderTypeUnion(context: genspec.CodeName, types: genspec.CodeName[]): string {
		return types.map((t) => this.renderCodeName(context, t)).join(" | ");
	}
}

interface EmitPropertyProps {
	context: genspec.CodeName;
	propName: string;
	spec: cfnSpec.schema.Property | rosSpec.schema.Property;
	additionalDocs: string;
}

if (require.main === module) {
	main().catch((e) => {
		console.error(e);
		process.exit(1);
	});
}
