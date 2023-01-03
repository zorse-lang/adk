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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: DeploymentPropertiesOrDeploymentPropertiesExtended;
	readonly tags?: DeploymentTags | undefined;
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
	readonly identity?: ManagedServiceIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly tags?: DeploymentScriptTags | undefined;
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
	readonly identity?: ManagedServiceIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly tags?: DeploymentScriptTags | undefined;
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
	readonly properties?: LogProperties | undefined;
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
	readonly managedBy?: string | undefined;
	readonly name: string;
	readonly properties?: ResourceGroupProperties | undefined;
	readonly tags?: ResourceGroupTags | undefined;
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
	readonly defaultMetadata?: AliasPathMetadata | undefined;
	readonly defaultPath?: string | undefined;
	readonly defaultPattern?: AliasPattern | undefined;
	readonly name?: string | undefined;
	readonly paths?: AliasPath[] | undefined;
	readonly type?: ("Mask" | "NotSpecified") | undefined;
}
export interface AliasPath {
	readonly apiVersions?: string[] | undefined;
	readonly metadata?: AliasPathMetadata | undefined;
	readonly path?: string | undefined;
	readonly pattern?: AliasPattern | undefined;
}
export interface AliasPathMetadata {
	readonly attributes?: ("Modifiable" | "None") | undefined;
	readonly type?:
		| ("any" | "Array" | "Boolean" | "Integer" | "NotSpecified" | "Number" | "Object" | "String")
		| undefined;
}
export interface AliasPattern {
	readonly phrase?: string | undefined;
	readonly type?: "Extract" | undefined;
	readonly variable?: string | undefined;
}
export interface ApiProfile {
	readonly apiVersion?: string | undefined;
	readonly profileVersion?: string | undefined;
}
export interface AzureCliScriptProperties {
	readonly arguments?: string | undefined;
	readonly azCliVersion: string;
	readonly cleanupPreference?: ("Always" | "OnExpiration" | "OnSuccess") | undefined;
	readonly containerSettings?: ContainerConfiguration | undefined;
	readonly environmentVariables?: EnvironmentVariable[] | undefined;
	readonly forceUpdateTag?: string | undefined;
	readonly outputs?: DeploymentScriptPropertiesBaseOutputs | undefined;
	readonly primaryScriptUri?: string | undefined;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Failed" | "ProvisioningResources" | "Running" | "Succeeded")
		| undefined;
	readonly retentionInterval: string;
	readonly scriptContent?: string | undefined;
	readonly status?: ScriptStatus | undefined;
	readonly storageAccountSettings?: StorageAccountConfiguration | undefined;
	readonly supportingScriptUris?: string[] | undefined;
	readonly timeout?: string | undefined;
}
export interface AzurePowerShellScriptProperties {
	readonly arguments?: string | undefined;
	readonly azPowerShellVersion: string;
	readonly cleanupPreference?: ("Always" | "OnExpiration" | "OnSuccess") | undefined;
	readonly containerSettings?: ContainerConfiguration | undefined;
	readonly environmentVariables?: EnvironmentVariable[] | undefined;
	readonly forceUpdateTag?: string | undefined;
	readonly outputs?: DeploymentScriptPropertiesBaseOutputs | undefined;
	readonly primaryScriptUri?: string | undefined;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Failed" | "ProvisioningResources" | "Running" | "Succeeded")
		| undefined;
	readonly retentionInterval: string;
	readonly scriptContent?: string | undefined;
	readonly status?: ScriptStatus | undefined;
	readonly storageAccountSettings?: StorageAccountConfiguration | undefined;
	readonly supportingScriptUris?: string[] | undefined;
	readonly timeout?: string | undefined;
}
export interface BasicDependency {
	readonly id?: string | undefined;
	readonly resourceName?: string | undefined;
	readonly resourceType?: string | undefined;
}
export interface ContainerConfiguration {
	readonly containerGroupName?: string | undefined;
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
	readonly expressionEvaluationOptions?: ExpressionEvaluationOptions | undefined;
	readonly mode: "Complete";
	readonly onErrorDeployment?: OnErrorDeploymentOrOnErrorDeploymentExtended | undefined;
	readonly outputResources?: ResourceReference[] | undefined;
	readonly outputs?: any | undefined;
	readonly parameters?: any | undefined;
	readonly parametersLink?: ParametersLink | undefined;
	readonly providers?: Provider[] | undefined;
	readonly provisioningState?:
		| (
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
				| "Updating"
		  )
		| undefined;
	readonly template?: any | undefined;
	readonly templateHash?: string | undefined;
	readonly templateLink?: TemplateLink | undefined;
	readonly timestamp?: string | undefined;
	readonly validatedResources?: ResourceReference[] | undefined;
}
export interface DeploymentScriptPropertiesBaseOutputs {
	readonly "[ key: string ]"?: any | undefined;
}
export interface DeploymentScriptTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface DeploymentTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface EnvironmentVariable {
	readonly name: string;
	readonly secureValue?: string | undefined;
	readonly value?: string | undefined;
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
export interface ExpressionEvaluationOptions {
	readonly scope?: ("Inner" | "NotSpecified" | "Outer") | undefined;
}
export interface LogProperties {
	readonly log?: string | undefined;
}
export interface ManagedServiceIdentity {
	readonly tenantId?: string | undefined;
	readonly type?: "UserAssigned" | undefined;
	readonly userAssignedIdentities?: ManagedServiceIdentityUserAssignedIdentities | undefined;
}
export interface ManagedServiceIdentityUserAssignedIdentities {
	readonly "[ key: string ]"?: UserAssignedIdentity | undefined;
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
export interface ProviderExtendedLocation {
	readonly extendedLocations?: string[] | undefined;
	readonly location?: string | undefined;
	readonly type?: string | undefined;
}
export interface ProviderResourceType {
	readonly aliases?: Alias[] | undefined;
	readonly apiProfiles?: ApiProfile[] | undefined;
	readonly apiVersions?: string[] | undefined;
	readonly capabilities?: string | undefined;
	readonly defaultApiVersion?: string | undefined;
	readonly locationMappings?: ProviderExtendedLocation[] | undefined;
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
export interface ResourceReference {
	readonly id?: string | undefined;
}
export interface ScriptStatus {
	readonly containerInstanceId?: string | undefined;
	readonly endTime?: string | undefined;
	readonly error?: ErrorResponse | undefined;
	readonly expirationTime?: string | undefined;
	readonly startTime?: string | undefined;
	readonly storageAccountId?: string | undefined;
}
export interface StorageAccountConfiguration {
	readonly storageAccountKey?: string | undefined;
	readonly storageAccountName?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface Tags {
	readonly tags?: Tags | undefined;
}
export interface TemplateLink {
	readonly contentVersion?: string | undefined;
	readonly id?: string | undefined;
	readonly queryString?: string | undefined;
	readonly relativePath?: string | undefined;
	readonly uri?: string | undefined;
}
export interface UserAssignedIdentity {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export interface ZoneMapping {
	readonly location?: string | undefined;
	readonly zones?: string[] | undefined;
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
