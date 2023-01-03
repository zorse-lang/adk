import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class clusters extends ArmResource<clustersComponentInputs> implements clustersComponentOutputs {
	constructor(entity: ADKEntity, options: clustersComponentInputs) {
		super(entity, options.name, "Microsoft.AzureStackHCI/clusters", "2021-09-01", options);
	}
	public readonly apiVersion: "2021-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStackHCI/clusters";
}
export interface clustersComponentOutputs {
	readonly apiVersion: "2021-09-01";
	readonly id: string;
	readonly type: "Microsoft.AzureStackHCI/clusters";
}
export interface clustersComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ClusterProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class clusters_arcSettings
	extends ArmResource<clusters_arcSettingsComponentInputs>
	implements clusters_arcSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_arcSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.AzureStackHCI/clusters/arcSettings", "2021-09-01", options);
	}
	public readonly apiVersion: "2021-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStackHCI/clusters/arcSettings";
}
export interface clusters_arcSettingsComponentOutputs {
	readonly apiVersion: "2021-09-01";
	readonly id: string;
	readonly type: "Microsoft.AzureStackHCI/clusters/arcSettings";
}
export interface clusters_arcSettingsComponentInputs {
	readonly name: string;
	readonly properties?: ArcSettingProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class clusters_arcSettings_extensions
	extends ArmResource<clusters_arcSettings_extensionsComponentInputs>
	implements clusters_arcSettings_extensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_arcSettings_extensionsComponentInputs) {
		super(entity, options.name, "Microsoft.AzureStackHCI/clusters/arcSettings/extensions", "2021-09-01", options);
	}
	public readonly apiVersion: "2021-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStackHCI/clusters/arcSettings/extensions";
}
export interface clusters_arcSettings_extensionsComponentOutputs {
	readonly apiVersion: "2021-09-01";
	readonly id: string;
	readonly type: "Microsoft.AzureStackHCI/clusters/arcSettings/extensions";
}
export interface clusters_arcSettings_extensionsComponentInputs {
	readonly name: string;
	readonly properties?: ExtensionProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface ArcSettingProperties {
	readonly aggregateState?:
		| (
				| "Canceled"
				| "Connected"
				| "Creating"
				| "Deleted"
				| "Deleting"
				| "Disconnected"
				| "Error"
				| "Failed"
				| "InProgress"
				| "Moving"
				| "NotSpecified"
				| "PartiallyConnected"
				| "PartiallySucceeded"
				| "Succeeded"
				| "Updating"
		  )
		| undefined;
	readonly arcInstanceResourceGroup?: string | undefined;
	readonly perNodeDetails?: PerNodeState[] | undefined;
	readonly provisioningState?: ("Accepted" | "Canceled" | "Failed" | "Provisioning" | "Succeeded") | undefined;
}
export interface ClusterDesiredProperties {
	readonly diagnosticLevel?: ("Basic" | "Enhanced" | "Off") | undefined;
	readonly windowsServerSubscription?: ("Disabled" | "Enabled") | undefined;
}
export interface ClusterNode {
	readonly coreCount?: number | undefined;
	readonly id?: number | undefined;
	readonly manufacturer?: string | undefined;
	readonly memoryInGiB?: number | undefined;
	readonly model?: string | undefined;
	readonly name?: string | undefined;
	readonly osName?: string | undefined;
	readonly osVersion?: string | undefined;
	readonly serialNumber?: string | undefined;
	readonly windowsServerSubscription?: ("Disabled" | "Enabled") | undefined;
}
export interface ClusterProperties {
	readonly aadClientId: string;
	readonly aadTenantId: string;
	readonly billingModel?: string | undefined;
	readonly cloudId?: string | undefined;
	readonly cloudManagementEndpoint?: string | undefined;
	readonly desiredProperties?: ClusterDesiredProperties | undefined;
	readonly lastBillingTimestamp?: string | undefined;
	readonly lastSyncTimestamp?: string | undefined;
	readonly provisioningState?: ("Accepted" | "Canceled" | "Failed" | "Provisioning" | "Succeeded") | undefined;
	readonly registrationTimestamp?: string | undefined;
	readonly reportedProperties?: ClusterReportedProperties | undefined;
	readonly status?:
		| ("ConnectedRecently" | "Disconnected" | "Error" | "NotConnectedRecently" | "NotYetRegistered")
		| undefined;
	readonly trialDaysRemaining?: number | undefined;
}
export interface ClusterReportedProperties {
	readonly clusterId?: string | undefined;
	readonly clusterName?: string | undefined;
	readonly clusterVersion?: string | undefined;
	readonly diagnosticLevel?: ("Basic" | "Enhanced" | "Off") | undefined;
	readonly imdsAttestation?: ("Disabled" | "Enabled") | undefined;
	readonly lastUpdated?: string | undefined;
	readonly nodes?: ClusterNode[] | undefined;
}
export interface ExtensionParameters {
	readonly autoUpgradeMinorVersion?: boolean | undefined;
	readonly forceUpdateTag?: string | undefined;
	readonly protectedSettings?: any | undefined;
	readonly publisher?: string | undefined;
	readonly settings?: any | undefined;
	readonly type?: string | undefined;
	readonly typeHandlerVersion?: string | undefined;
}
export interface ExtensionProperties {
	readonly aggregateState?:
		| (
				| "Canceled"
				| "Connected"
				| "Creating"
				| "Deleted"
				| "Deleting"
				| "Disconnected"
				| "Error"
				| "Failed"
				| "InProgress"
				| "Moving"
				| "NotSpecified"
				| "PartiallyConnected"
				| "PartiallySucceeded"
				| "Succeeded"
				| "Updating"
		  )
		| undefined;
	readonly extensionParameters?: ExtensionParameters | undefined;
	readonly perNodeExtensionDetails?: PerNodeExtensionState[] | undefined;
	readonly provisioningState?: ("Accepted" | "Canceled" | "Failed" | "Provisioning" | "Succeeded") | undefined;
}
export interface PerNodeExtensionState {
	readonly extension?: string | undefined;
	readonly name?: string | undefined;
	readonly state?:
		| (
				| "Canceled"
				| "Connected"
				| "Creating"
				| "Deleted"
				| "Deleting"
				| "Disconnected"
				| "Error"
				| "Failed"
				| "Moving"
				| "NotSpecified"
				| "Succeeded"
				| "Updating"
		  )
		| undefined;
}
export interface PerNodeState {
	readonly arcInstance?: string | undefined;
	readonly name?: string | undefined;
	readonly state?:
		| (
				| "Canceled"
				| "Connected"
				| "Creating"
				| "Deleted"
				| "Deleting"
				| "Disconnected"
				| "Error"
				| "Failed"
				| "Moving"
				| "NotSpecified"
				| "Succeeded"
				| "Updating"
		  )
		| undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	clusters: clusters,
	"clusters/arcSettings": clusters_arcSettings,
	"clusters/arcSettings/extensions": clusters_arcSettings_extensions,
};
