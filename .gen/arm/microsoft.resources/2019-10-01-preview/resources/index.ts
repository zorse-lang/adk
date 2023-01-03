import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class deploymentScripts_AzureCLI
	extends ArmResource<deploymentScripts_AzureCLIComponentInputs>
	implements deploymentScripts_AzureCLIComponentOutputs
{
	constructor(entity: ADKEntity, options: deploymentScripts_AzureCLIComponentInputs) {
		super(entity, options.name, "Microsoft.Resources/deploymentScripts", "2019-10-01-preview", options);
	}
	public readonly apiVersion: "2019-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Resources/deploymentScripts";
}
export interface deploymentScripts_AzureCLIComponentOutputs {
	readonly apiVersion: "2019-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Resources/deploymentScripts";
}
export interface deploymentScripts_AzureCLIComponentInputs {
	readonly identity: ManagedServiceIdentity;
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
		super(entity, options.name, "Microsoft.Resources/deploymentScripts", "2019-10-01-preview", options);
	}
	public readonly apiVersion: "2019-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Resources/deploymentScripts";
}
export interface deploymentScripts_AzurePowerShellComponentOutputs {
	readonly apiVersion: "2019-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Resources/deploymentScripts";
}
export interface deploymentScripts_AzurePowerShellComponentInputs {
	readonly identity: ManagedServiceIdentity;
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
		super(entity, options.name, "Microsoft.Resources/deploymentScripts/logs", "2019-10-01-preview", options);
	}
	public readonly apiVersion: "2019-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Resources/deploymentScripts/logs";
}
export interface deploymentScripts_logsComponentOutputs {
	readonly apiVersion: "2019-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Resources/deploymentScripts/logs";
}
export interface deploymentScripts_logsComponentInputs {
	readonly name: string;
	readonly properties?: LogProperties | undefined;
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
export interface ContainerConfiguration {
	readonly containerGroupName?: string | undefined;
}
export interface DeploymentScriptPropertiesBaseOutputs {
	readonly "[ key: string ]"?: any | undefined;
}
export interface DeploymentScriptTags {
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
export interface UserAssignedIdentity {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export type deploymentScripts = deploymentScripts_AzureCLI | deploymentScripts_AzurePowerShell;
export default {
	"deploymentScripts/AzureCLI": deploymentScripts_AzureCLI,
	"deploymentScripts/AzurePowerShell": deploymentScripts_AzurePowerShell,
	"deploymentScripts/logs": deploymentScripts_logs,
};
