import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class clusters extends ArmResource<clustersComponentInputs> implements clustersComponentOutputs {
	constructor(entity: ADKEntity, options: clustersComponentInputs) {
		super(entity, options.name, "Microsoft.AzureStackHCI/clusters", "2020-03-01-preview", options);
	}
	public readonly apiVersion: "2020-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStackHCI/clusters";
}
export interface clustersComponentOutputs {
	readonly apiVersion: "2020-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AzureStackHCI/clusters";
}
export interface clustersComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ClusterProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
}
export interface ClusterProperties {
	readonly aadClientId: string;
	readonly aadTenantId: string;
	readonly billingModel?: string | undefined;
	readonly cloudId?: string | undefined;
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
	readonly lastUpdated?: string | undefined;
	readonly nodes?: ClusterNode[] | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	clusters: clusters,
};
