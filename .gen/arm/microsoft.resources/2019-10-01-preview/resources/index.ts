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
	readonly properties?: LogProperties;
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
export interface ContainerConfiguration {
	readonly containerGroupName?: string;
}
export interface DeploymentScriptPropertiesBaseOutputs {
	readonly [key: string]: any;
}
export interface DeploymentScriptTags {
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
export interface UserAssignedIdentity {
	readonly clientId?: string;
	readonly principalId?: string;
}
export type deploymentScripts = deploymentScripts_AzureCLI | deploymentScripts_AzurePowerShell;
export default {
	"deploymentScripts/AzureCLI": deploymentScripts_AzureCLI,
	"deploymentScripts/AzurePowerShell": deploymentScripts_AzurePowerShell,
	"deploymentScripts/logs": deploymentScripts_logs,
};
