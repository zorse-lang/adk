import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class deployments extends ArmResource<deploymentsComponentInputs> implements deploymentsComponentOutputs {
	constructor(entity: ADKEntity, options: deploymentsComponentInputs) {
		super(entity, options.name, "Microsoft.Resources/deployments", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Resources/deployments";
}
export interface deploymentsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Resources/deployments";
}
export interface deploymentsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties: DeploymentPropertiesOrDeploymentPropertiesExtended;
	readonly tags?: DeploymentTags;
}
export class resourceGroups extends ArmResource<resourceGroupsComponentInputs> implements resourceGroupsComponentOutputs {
	constructor(entity: ADKEntity, options: resourceGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Resources/resourceGroups", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Resources/resourceGroups";
}
export interface resourceGroupsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Resources/resourceGroups";
}
export interface resourceGroupsComponentInputs {
	readonly location: string;
	readonly managedBy?: string;
	readonly name: string;
	readonly properties?: ResourceGroupProperties;
	readonly tags?: ResourceGroupTags;
}
export class tags extends ArmResource<tagsComponentInputs> implements tagsComponentOutputs {
	constructor(entity: ADKEntity, options: tagsComponentInputs) {
		super(entity, options.name, "Microsoft.Resources/tags", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Resources/tags";
}
export interface tagsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Resources/tags";
}
export interface tagsComponentInputs {
	readonly name: string;
	readonly properties: Tags;
}
export interface Alias {
	readonly defaultMetadata?: AliasPathMetadata;
	readonly defaultPath?: string;
	readonly defaultPattern?: AliasPattern;
	readonly name?: string;
	readonly paths?: AliasPath[];
	readonly type?: "Mask" | "NotSpecified";
}
export interface AliasPath {
	readonly apiVersions?: string[];
	readonly metadata?: AliasPathMetadata;
	readonly path?: string;
	readonly pattern?: AliasPattern;
}
export interface AliasPathMetadata {
	readonly attributes?: "Modifiable" | "None";
	readonly type?: "any" | "Array" | "Boolean" | "Integer" | "NotSpecified" | "Number" | "Object" | "String";
}
export interface AliasPattern {
	readonly phrase?: string;
	readonly type?: "Extract";
	readonly variable?: string;
}
export interface ApiProfile {
	readonly apiVersion?: string;
	readonly profileVersion?: string;
}
export interface BasicDependency {
	readonly id?: string;
	readonly resourceName?: string;
	readonly resourceType?: string;
}
export interface DebugSetting {
	readonly detailLevel?: string;
}
export interface Dependency {
	readonly dependsOn?: BasicDependency[];
	readonly id?: string;
	readonly resourceName?: string;
	readonly resourceType?: string;
}
export interface DeploymentPropertiesOrDeploymentPropertiesExtended {
	readonly correlationId?: string;
	readonly debugSetting?: DebugSetting;
	readonly dependencies?: Dependency[];
	readonly duration?: string;
	readonly error?: ErrorResponse;
	readonly expressionEvaluationOptions?: ExpressionEvaluationOptions;
	readonly mode: "Complete";
	readonly onErrorDeployment?: OnErrorDeploymentOrOnErrorDeploymentExtended;
	readonly outputResources?: ResourceReference[];
	readonly outputs?: any;
	readonly parameters?: any;
	readonly parametersLink?: ParametersLink;
	readonly providers?: Provider[];
	readonly provisioningState?:
		| "Accepted"
		| "Canceled"
		| "Created"
		| "Creating"
		| "Deleted"
		| "Deleting"
		| "Failed"
		| "NotSpecified"
		| "Ready"
		| "Running"
		| "Succeeded"
		| "Updating";
	readonly template?: any;
	readonly templateHash?: string;
	readonly templateLink?: TemplateLink;
	readonly timestamp?: string;
	readonly validatedResources?: ResourceReference[];
}
export interface DeploymentTags {
	readonly [key: string]: string;
}
export interface ErrorAdditionalInfo {
	readonly info?: any;
	readonly type?: string;
}
export interface ErrorResponse {
	readonly additionalInfo?: ErrorAdditionalInfo[];
	readonly code?: string;
	readonly details?: ErrorResponse[];
	readonly message?: string;
	readonly target?: string;
}
export interface ExpressionEvaluationOptions {
	readonly scope?: "Inner" | "NotSpecified" | "Outer";
}
export interface OnErrorDeploymentOrOnErrorDeploymentExtended {
	readonly deploymentName?: string;
	readonly provisioningState?: string;
	readonly type?: "LastSuccessful";
}
export interface ParametersLink {
	readonly contentVersion?: string;
	readonly uri: string;
}
export interface Provider {
	readonly id?: string;
	readonly namespace?: string;
	readonly registrationPolicy?: string;
	readonly registrationState?: string;
	readonly resourceTypes?: ProviderResourceType[];
}
export interface ProviderResourceType {
	readonly aliases?: Alias[];
	readonly apiProfiles?: ApiProfile[];
	readonly apiVersions?: string[];
	readonly capabilities?: string;
	readonly defaultApiVersion?: string;
	readonly locations?: string[];
	readonly properties?: ProviderResourceTypeProperties;
	readonly resourceType?: string;
	readonly zoneMappings?: ZoneMapping[];
}
export interface ProviderResourceTypeProperties {
	readonly [key: string]: string;
}
export interface ResourceGroupProperties {
	readonly provisioningState?: string;
}
export interface ResourceGroupTags {
	readonly [key: string]: string;
}
export interface ResourceReference {
	readonly id?: string;
}
export interface Tags {
	readonly tags?: Tags;
}
export interface TemplateLink {
	readonly contentVersion?: string;
	readonly id?: string;
	readonly relativePath?: string;
	readonly uri?: string;
}
export interface ZoneMapping {
	readonly location?: string;
	readonly zones?: string[];
}
export default {
	deployments: deployments,
	resourceGroups: resourceGroups,
	tags: tags,
};
