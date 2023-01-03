import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class templateSpecs extends ArmResource<templateSpecsComponentInputs> implements templateSpecsComponentOutputs {
	constructor(entity: ADKEntity, options: templateSpecsComponentInputs) {
		super(entity, options.name, "Microsoft.Resources/templateSpecs", "2019-06-01-preview", options);
	}
	public readonly apiVersion: "2019-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Resources/templateSpecs";
}
export interface templateSpecsComponentOutputs {
	readonly apiVersion: "2019-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Resources/templateSpecs";
}
export interface templateSpecsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: TemplateSpecProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TemplateSpecTags | undefined;
}
export class templateSpecs_versions
	extends ArmResource<templateSpecs_versionsComponentInputs>
	implements templateSpecs_versionsComponentOutputs
{
	constructor(entity: ADKEntity, options: templateSpecs_versionsComponentInputs) {
		super(entity, options.name, "Microsoft.Resources/templateSpecs/versions", "2019-06-01-preview", options);
	}
	public readonly apiVersion: "2019-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Resources/templateSpecs/versions";
}
export interface templateSpecs_versionsComponentOutputs {
	readonly apiVersion: "2019-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Resources/templateSpecs/versions";
}
export interface templateSpecs_versionsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: TemplateSpecVersionProperties;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TemplateSpecVersionTags | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TemplateSpecArtifact {
	readonly path: string;
}
export interface TemplateSpecProperties {
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly versions?: TemplateSpecPropertiesVersions | undefined;
}
export interface TemplateSpecPropertiesVersions {
	readonly "[ key: string ]"?: TemplateSpecVersionInfo | undefined;
}
export interface TemplateSpecTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface TemplateSpecVersionInfo {
	readonly description?: string | undefined;
	readonly timeCreated?: string | undefined;
	readonly timeModified?: string | undefined;
}
export interface TemplateSpecVersionProperties {
	readonly artifacts?: TemplateSpecArtifact[] | undefined;
	readonly description?: string | undefined;
	readonly template?: any | undefined;
}
export interface TemplateSpecVersionTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	templateSpecs: templateSpecs,
	"templateSpecs/versions": templateSpecs_versions,
};
