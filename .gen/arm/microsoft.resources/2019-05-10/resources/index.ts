import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class deployments extends ArmResource<deploymentsComponentInputs> implements deploymentsComponentOutputs {
	constructor(entity: ADKEntity, options: deploymentsComponentInputs) {
		super(entity, options.name, "Microsoft.Resources/deployments", "2019-05-10", options);
	}
	public readonly apiVersion: "2019-05-10";
	public readonly id: string;
	public readonly type: "Microsoft.Resources/deployments";
}
export interface deploymentsComponentOutputs {
	readonly apiVersion: "2019-05-10";
	readonly id: string;
	readonly type: "Microsoft.Resources/deployments";
}
export interface deploymentsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: DeploymentPropertiesOrDeploymentPropertiesExtended;
}
export class resourceGroups extends ArmResource<resourceGroupsComponentInputs> implements resourceGroupsComponentOutputs {
	constructor(entity: ADKEntity, options: resourceGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Resources/resourceGroups", "2019-05-10", options);
	}
	public readonly apiVersion: "2019-05-10";
	public readonly id: string;
	public readonly type: "Microsoft.Resources/resourceGroups";
}
export interface resourceGroupsComponentOutputs {
	readonly apiVersion: "2019-05-10";
	readonly id: string;
	readonly type: "Microsoft.Resources/resourceGroups";
}
export interface resourceGroupsComponentInputs {
	readonly location: string;
	readonly managedBy?: string | undefined;
	readonly name: string;
	readonly properties?: ResourceGroupProperties | undefined;
	readonly tags?: ResourceGroupTags | undefined;
}
export interface AliasPathType {
	readonly apiVersions?: string[] | undefined;
	readonly path?: string | undefined;
}
export interface AliasType {
	readonly name?: string | undefined;
	readonly paths?: AliasPathType[] | undefined;
}
export interface BasicDependency {
	readonly id?: string | undefined;
	readonly resourceName?: string | undefined;
	readonly resourceType?: string | undefined;
}
export interface DebugSetting {
	readonly detailLevel?: string | undefined;
}
export interface Dependency {
	readonly dependsOn?: BasicDependency[] | undefined;
	readonly id?: string | undefined;
	readonly resourceName?: string | undefined;
	readonly resourceType?: string | undefined;
}
export interface DeploymentPropertiesOrDeploymentPropertiesExtended {
	readonly correlationId?: string | undefined;
	readonly debugSetting?: DebugSetting | undefined;
	readonly dependencies?: Dependency[] | undefined;
	readonly duration?: string | undefined;
	readonly error?: ErrorResponse | undefined;
	readonly mode: "Complete";
	readonly onErrorDeployment?: OnErrorDeploymentOrOnErrorDeploymentExtended | undefined;
	readonly outputs?: any | undefined;
	readonly parameters?: any | undefined;
	readonly parametersLink?: ParametersLink | undefined;
	readonly providers?: Provider[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly template?: any | undefined;
	readonly templateLink?: TemplateLink | undefined;
	readonly timestamp?: string | undefined;
}
export interface ErrorAdditionalInfo {
	readonly info?: any | undefined;
	readonly type?: string | undefined;
}
export interface ErrorResponse {
	readonly additionalInfo?: ErrorAdditionalInfo[] | undefined;
	readonly code?: string | undefined;
	readonly details?: ErrorResponse[] | undefined;
	readonly message?: string | undefined;
	readonly target?: string | undefined;
}
export interface OnErrorDeploymentOrOnErrorDeploymentExtended {
	readonly deploymentName?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly type?: "LastSuccessful" | undefined;
}
export interface ParametersLink {
	readonly contentVersion?: string | undefined;
	readonly uri: string;
}
export interface Provider {
	readonly id?: string | undefined;
	readonly namespace?: string | undefined;
	readonly registrationPolicy?: string | undefined;
	readonly registrationState?: string | undefined;
	readonly resourceTypes?: ProviderResourceType[] | undefined;
}
export interface ProviderResourceType {
	readonly aliases?: AliasType[] | undefined;
	readonly apiVersions?: string[] | undefined;
	readonly capabilities?: string | undefined;
	readonly locations?: string[] | undefined;
	readonly properties?: ProviderResourceTypeProperties | undefined;
	readonly resourceType?: string | undefined;
	readonly zoneMappings?: ZoneMapping[] | undefined;
}
export interface ProviderResourceTypeProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ResourceGroupProperties {
	readonly provisioningState?: string | undefined;
}
export interface ResourceGroupTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface TemplateLink {
	readonly contentVersion?: string | undefined;
	readonly uri: string;
}
export interface ZoneMapping {
	readonly location?: string | undefined;
	readonly zones?: string[] | undefined;
}
export default {
	deployments: deployments,
	resourceGroups: resourceGroups,
};
