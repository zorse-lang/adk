import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class clusters extends ArmResource<clustersComponentInputs> implements clustersComponentOutputs {
	constructor(entity: ADKEntity, options: clustersComponentInputs) {
		super(entity, options.name, "Microsoft.AzureStackHCI/clusters", "2022-09-01", options);
	}
	public readonly apiVersion: "2022-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStackHCI/clusters";
}
export interface clustersComponentOutputs {
	readonly apiVersion: "2022-09-01";
	readonly id: string;
	readonly type: "Microsoft.AzureStackHCI/clusters";
}
export interface clustersComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ClusterProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class clusters_arcSettings
	extends ArmResource<clusters_arcSettingsComponentInputs>
	implements clusters_arcSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_arcSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.AzureStackHCI/clusters/arcSettings", "2022-09-01", options);
	}
	public readonly apiVersion: "2022-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStackHCI/clusters/arcSettings";
}
export interface clusters_arcSettingsComponentOutputs {
	readonly apiVersion: "2022-09-01";
	readonly id: string;
	readonly type: "Microsoft.AzureStackHCI/clusters/arcSettings";
}
export interface clusters_arcSettingsComponentInputs {
	readonly name: string;
	readonly properties?: ArcSettingProperties;
	readonly systemData?: SystemData;
}
export class clusters_arcSettings_extensions
	extends ArmResource<clusters_arcSettings_extensionsComponentInputs>
	implements clusters_arcSettings_extensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_arcSettings_extensionsComponentInputs) {
		super(entity, options.name, "Microsoft.AzureStackHCI/clusters/arcSettings/extensions", "2022-09-01", options);
	}
	public readonly apiVersion: "2022-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStackHCI/clusters/arcSettings/extensions";
}
export interface clusters_arcSettings_extensionsComponentOutputs {
	readonly apiVersion: "2022-09-01";
	readonly id: string;
	readonly type: "Microsoft.AzureStackHCI/clusters/arcSettings/extensions";
}
export interface clusters_arcSettings_extensionsComponentInputs {
	readonly name: string;
	readonly properties?: ExtensionProperties;
	readonly systemData?: SystemData;
}
export interface ArcSettingProperties {
	readonly aggregateState?:
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
		| "Updating";
	readonly arcApplicationClientId?: string;
	readonly arcApplicationObjectId?: string;
	readonly arcApplicationTenantId?: string;
	readonly arcInstanceResourceGroup?: string;
	readonly arcServicePrincipalObjectId?: string;
	readonly connectivityProperties?: any;
	readonly perNodeDetails?: PerNodeState[];
	readonly provisioningState?: "Accepted" | "Canceled" | "Failed" | "Provisioning" | "Succeeded";
}
export interface ClusterDesiredProperties {
	readonly diagnosticLevel?: "Basic" | "Enhanced" | "Off";
	readonly windowsServerSubscription?: "Disabled" | "Enabled";
}
export interface ClusterNode {
	readonly coreCount?: number;
	readonly id?: number;
	readonly manufacturer?: string;
	readonly memoryInGiB?: number;
	readonly model?: string;
	readonly name?: string;
	readonly nodeType?: "FirstParty" | "ThirdParty";
	readonly osDisplayVersion?: string;
	readonly osName?: string;
	readonly osVersion?: string;
	readonly serialNumber?: string;
	readonly windowsServerSubscription?: "Disabled" | "Enabled";
}
export interface ClusterProperties {
	readonly aadApplicationObjectId?: string;
	readonly aadClientId?: string;
	readonly aadServicePrincipalObjectId?: string;
	readonly aadTenantId?: string;
	readonly billingModel?: string;
	readonly cloudId?: string;
	readonly cloudManagementEndpoint?: string;
	readonly desiredProperties?: ClusterDesiredProperties;
	readonly lastBillingTimestamp?: string;
	readonly lastSyncTimestamp?: string;
	readonly provisioningState?: "Accepted" | "Canceled" | "Failed" | "Provisioning" | "Succeeded";
	readonly registrationTimestamp?: string;
	readonly reportedProperties?: ClusterReportedProperties;
	readonly serviceEndpoint?: string;
	readonly softwareAssuranceProperties?: SoftwareAssuranceProperties;
	readonly status?: "ConnectedRecently" | "Disconnected" | "Error" | "NotConnectedRecently" | "NotYetRegistered";
	readonly trialDaysRemaining?: number;
}
export interface ClusterReportedProperties {
	readonly clusterId?: string;
	readonly clusterName?: string;
	readonly clusterVersion?: string;
	readonly diagnosticLevel?: "Basic" | "Enhanced" | "Off";
	readonly imdsAttestation?: "Disabled" | "Enabled";
	readonly lastUpdated?: string;
	readonly nodes?: ClusterNode[];
}
export interface ExtensionParameters {
	readonly autoUpgradeMinorVersion?: boolean;
	readonly forceUpdateTag?: string;
	readonly protectedSettings?: any;
	readonly publisher?: string;
	readonly settings?: any;
	readonly type?: string;
	readonly typeHandlerVersion?: string;
}
export interface ExtensionProperties {
	readonly aggregateState?:
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
		| "Updating";
	readonly extensionParameters?: ExtensionParameters;
	readonly perNodeExtensionDetails?: PerNodeExtensionState[];
	readonly provisioningState?: "Accepted" | "Canceled" | "Failed" | "Provisioning" | "Succeeded";
}
export interface PerNodeExtensionState {
	readonly extension?: string;
	readonly name?: string;
	readonly state?:
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
		| "Updating";
}
export interface PerNodeState {
	readonly arcInstance?: string;
	readonly name?: string;
	readonly state?:
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
		| "Updating";
}
export interface SoftwareAssuranceProperties {
	readonly lastUpdated?: string;
	readonly softwareAssuranceIntent?: "Disable" | "Enable";
	readonly softwareAssuranceStatus?: "Disabled" | "Enabled";
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export default {
	clusters: clusters,
	"clusters/arcSettings": clusters_arcSettings,
	"clusters/arcSettings/extensions": clusters_arcSettings_extensions,
};
