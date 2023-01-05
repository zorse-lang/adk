import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class clusters extends ArmResource<clustersComponentInputs> implements clustersComponentOutputs {
	constructor(entity: ADKEntity, options: clustersComponentInputs) {
		super(entity, options.name, "Microsoft.AzureStackHCI/clusters", "2020-10-01", options);
	}
	public readonly apiVersion: "2020-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStackHCI/clusters";
}
export interface clustersComponentOutputs {
	readonly apiVersion: "2020-10-01";
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
export interface ClusterNode {
	readonly coreCount?: number;
	readonly id?: number;
	readonly manufacturer?: string;
	readonly memoryInGiB?: number;
	readonly model?: string;
	readonly name?: string;
	readonly osName?: string;
	readonly osVersion?: string;
	readonly serialNumber?: string;
}
export interface ClusterProperties {
	readonly aadClientId: string;
	readonly aadTenantId: string;
	readonly billingModel?: string;
	readonly cloudId?: string;
	readonly lastBillingTimestamp?: string;
	readonly lastSyncTimestamp?: string;
	readonly provisioningState?: "Accepted" | "Canceled" | "Failed" | "Provisioning" | "Succeeded";
	readonly registrationTimestamp?: string;
	readonly reportedProperties?: ClusterReportedProperties;
	readonly status?: "ConnectedRecently" | "Disconnected" | "Error" | "NotConnectedRecently" | "NotYetRegistered";
	readonly trialDaysRemaining?: number;
}
export interface ClusterReportedProperties {
	readonly clusterId?: string;
	readonly clusterName?: string;
	readonly clusterVersion?: string;
	readonly lastUpdated?: string;
	readonly nodes?: ClusterNode[];
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
};
