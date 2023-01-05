import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class templateSpecs extends ArmResource<templateSpecsComponentInputs> implements templateSpecsComponentOutputs {
	constructor(entity: ADKEntity, options: templateSpecsComponentInputs) {
		super(entity, options.name, "Microsoft.Resources/templateSpecs", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Resources/templateSpecs";
}
export interface templateSpecsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Resources/templateSpecs";
}
export interface templateSpecsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: TemplateSpecProperties;
	readonly systemData?: SystemData;
	readonly tags?: TemplateSpecTags;
}
export class templateSpecs_versions
	extends ArmResource<templateSpecs_versionsComponentInputs>
	implements templateSpecs_versionsComponentOutputs
{
	constructor(entity: ADKEntity, options: templateSpecs_versionsComponentInputs) {
		super(entity, options.name, "Microsoft.Resources/templateSpecs/versions", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Resources/templateSpecs/versions";
}
export interface templateSpecs_versionsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Resources/templateSpecs/versions";
}
export interface templateSpecs_versionsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: TemplateSpecVersionProperties;
	readonly systemData?: SystemData;
	readonly tags?: TemplateSpecVersionTags;
}
export interface LinkedTemplateArtifact {
	readonly path: string;
	readonly template: any;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TemplateSpecProperties {
	readonly description?: string;
	readonly displayName?: string;
	readonly metadata?: any;
	readonly versions?: TemplateSpecPropertiesVersions;
}
export interface TemplateSpecPropertiesVersions {
	readonly [key: string]: TemplateSpecVersionInfo;
}
export interface TemplateSpecTags {
	readonly [key: string]: string;
}
export interface TemplateSpecVersionInfo {
	readonly description?: string;
	readonly timeCreated?: string;
	readonly timeModified?: string;
}
export interface TemplateSpecVersionProperties {
	readonly description?: string;
	readonly linkedTemplates?: LinkedTemplateArtifact[];
	readonly mainTemplate?: any;
	readonly metadata?: any;
	readonly uiFormDefinition?: any;
}
export interface TemplateSpecVersionTags {
	readonly [key: string]: string;
}
export default {
	templateSpecs: templateSpecs,
	"templateSpecs/versions": templateSpecs_versions,
};
