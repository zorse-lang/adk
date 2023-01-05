import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class deployments extends ArmResource<deploymentsComponentInputs> implements deploymentsComponentOutputs {
	constructor(entity: ADKEntity, options: deploymentsComponentInputs) {
		super(entity, options.name, "Microsoft.Resources/deployments", "2020-10-01", options);
	}
	public readonly apiVersion: "2020-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Resources/deployments";
}
export interface deploymentsComponentOutputs {
	readonly apiVersion: "2020-10-01";
	readonly id: string;
	readonly type: "Microsoft.Resources/deployments";
}
export interface deploymentsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties: DeploymentPropertiesOrDeploymentPropertiesExtended;
	readonly tags?: DeploymentTags;
}
export class deploymentScripts_AzureCLI
	extends ArmResource<deploymentScripts_AzureCLIComponentInputs>
	implements deploymentScripts_AzureCLIComponentOutputs
{
	constructor(entity: ADKEntity, options: deploymentScripts_AzureCLIComponentInputs) {
		super(entity, options.name, "Microsoft.Resources/deploymentScripts", "2020-10-01", options);
	}
	public readonly apiVersion: "2020-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Resources/deploymentScripts";
}
export interface deploymentScripts_AzureCLIComponentOutputs {
	readonly apiVersion: "2020-10-01";
	readonly id: string;
	readonly type: "Microsoft.Resources/deploymentScripts";
}
export interface deploymentScripts_AzureCLIComponentInputs {
	readonly identity?: ManagedServiceIdentity;
	readonly location: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly tags?: DeploymentScriptTags;
	readonly kind: "AzureCLI";
	readonly properties: AzureCliScriptProperties;
}
export class deploymentScripts_AzurePowerShell
	extends ArmResource<deploymentScripts_AzurePowerShellComponentInputs>
	implements deploymentScripts_AzurePowerShellComponentOutputs
{
	constructor(entity: ADKEntity, options: deploymentScripts_AzurePowerShellComponentInputs) {
		super(entity, options.name, "Microsoft.Resources/deploymentScripts", "2020-10-01", options);
	}
	public readonly apiVersion: "2020-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Resources/deploymentScripts";
}
export interface deploymentScripts_AzurePowerShellComponentOutputs {
	readonly apiVersion: "2020-10-01";
	readonly id: string;
	readonly type: "Microsoft.Resources/deploymentScripts";
}
export interface deploymentScripts_AzurePowerShellComponentInputs {
	readonly identity?: ManagedServiceIdentity;
	readonly location: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly tags?: DeploymentScriptTags;
	readonly kind: "AzurePowerShell";
	readonly properties: AzurePowerShellScriptProperties;
}
export class deploymentScripts_logs
	extends ArmResource<deploymentScripts_logsComponentInputs>
	implements deploymentScripts_logsComponentOutputs
{
	constructor(entity: ADKEntity, options: deploymentScripts_logsComponentInputs) {
		super(entity, options.name, "Microsoft.Resources/deploymentScripts/logs", "2020-10-01", options);
	}
	public readonly apiVersion: "2020-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Resources/deploymentScripts/logs";
}
export interface deploymentScripts_logsComponentOutputs {
	readonly apiVersion: "2020-10-01";
	readonly id: string;
	readonly type: "Microsoft.Resources/deploymentScripts/logs";
}
export interface deploymentScripts_logsComponentInputs {
	readonly name: string;
	readonly properties?: LogProperties;
}
export class resourceGroups extends ArmResource<resourceGroupsComponentInputs> implements resourceGroupsComponentOutputs {
	constructor(entity: ADKEntity, options: resourceGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Resources/resourceGroups", "2020-10-01", options);
	}
	public readonly apiVersion: "2020-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Resources/resourceGroups";
}
export interface resourceGroupsComponentOutputs {
	readonly apiVersion: "2020-10-01";
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
		super(entity, options.name, "Microsoft.Resources/tags", "2020-10-01", options);
	}
	public readonly apiVersion: "2020-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Resources/tags";
}
export interface tagsComponentOutputs {
	readonly apiVersion: "2020-10-01";
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
export interface AzureCliScriptProperties {
	readonly arguments?: string;
	readonly azCliVersion: string;
	readonly cleanupPreference?: "Always" | "OnExpiration" | "OnSuccess";
	readonly containerSettings?: ContainerConfiguration;
	readonly environmentVariables?: EnvironmentVariable[];
	readonly forceUpdateTag?: string;
	readonly outputs?: DeploymentScriptPropertiesBaseOutputs;
	readonly primaryScriptUri?: string;
	readonly provisioningState?: "Canceled" | "Creating" | "Failed" | "ProvisioningResources" | "Running" | "Succeeded";
	readonly retentionInterval: string;
	readonly scriptContent?: string;
	readonly status?: ScriptStatus;
	readonly storageAccountSettings?: StorageAccountConfiguration;
	readonly supportingScriptUris?: string[];
	readonly timeout?: string;
}
export interface AzurePowerShellScriptProperties {
	readonly arguments?: string;
	readonly azPowerShellVersion: string;
	readonly cleanupPreference?: "Always" | "OnExpiration" | "OnSuccess";
	readonly containerSettings?: ContainerConfiguration;
	readonly environmentVariables?: EnvironmentVariable[];
	readonly forceUpdateTag?: string;
	readonly outputs?: DeploymentScriptPropertiesBaseOutputs;
	readonly primaryScriptUri?: string;
	readonly provisioningState?: "Canceled" | "Creating" | "Failed" | "ProvisioningResources" | "Running" | "Succeeded";
	readonly retentionInterval: string;
	readonly scriptContent?: string;
	readonly status?: ScriptStatus;
	readonly storageAccountSettings?: StorageAccountConfiguration;
	readonly supportingScriptUris?: string[];
	readonly timeout?: string;
}
export interface BasicDependency {
	readonly id?: string;
	readonly resourceName?: string;
	readonly resourceType?: string;
}
export interface ContainerConfiguration {
	readonly containerGroupName?: string;
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
export interface DeploymentScriptPropertiesBaseOutputs {
	readonly [key: string]: any;
}
export interface DeploymentScriptTags {
	readonly [key: string]: string;
}
export interface DeploymentTags {
	readonly [key: string]: string;
}
export interface EnvironmentVariable {
	readonly name: string;
	readonly secureValue?: string;
	readonly value?: string;
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
export interface LogProperties {
	readonly log?: string;
}
export interface ManagedServiceIdentity {
	readonly tenantId?: string;
	readonly type?: "UserAssigned";
	readonly userAssignedIdentities?: ManagedServiceIdentityUserAssignedIdentities;
}
export interface ManagedServiceIdentityUserAssignedIdentities {
	readonly [key: string]: UserAssignedIdentity;
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
export interface ProviderExtendedLocation {
	readonly extendedLocations?: string[];
	readonly location?: string;
	readonly type?: string;
}
export interface ProviderResourceType {
	readonly aliases?: Alias[];
	readonly apiProfiles?: ApiProfile[];
	readonly apiVersions?: string[];
	readonly capabilities?: string;
	readonly defaultApiVersion?: string;
	readonly locationMappings?: ProviderExtendedLocation[];
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
export interface ScriptStatus {
	readonly containerInstanceId?: string;
	readonly endTime?: string;
	readonly error?: ErrorResponse;
	readonly expirationTime?: string;
	readonly startTime?: string;
	readonly storageAccountId?: string;
}
export interface StorageAccountConfiguration {
	readonly storageAccountKey?: string;
	readonly storageAccountName?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface Tags {
	readonly tags?: Tags;
}
export interface TemplateLink {
	readonly contentVersion?: string;
	readonly id?: string;
	readonly queryString?: string;
	readonly relativePath?: string;
	readonly uri?: string;
}
export interface UserAssignedIdentity {
	readonly clientId?: string;
	readonly principalId?: string;
}
export interface ZoneMapping {
	readonly location?: string;
	readonly zones?: string[];
}
export type deploymentScripts = deploymentScripts_AzureCLI | deploymentScripts_AzurePowerShell;
export default {
	deployments: deployments,
	"deploymentScripts/AzureCLI": deploymentScripts_AzureCLI,
	"deploymentScripts/AzurePowerShell": deploymentScripts_AzurePowerShell,
	"deploymentScripts/logs": deploymentScripts_logs,
	resourceGroups: resourceGroups,
	tags: tags,
};
