import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class clusters extends ArmResource<clustersComponentInputs> implements clustersComponentOutputs {
	constructor(entity: ADKEntity, options: clustersComponentInputs) {
		super(entity, options.name, "Microsoft.StreamAnalytics/clusters", "2020-03-01-preview", options);
	}
	public readonly apiVersion: "2020-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.StreamAnalytics/clusters";
}
export interface clustersComponentOutputs {
	readonly apiVersion: "2020-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.StreamAnalytics/clusters";
}
export interface clustersComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ClusterProperties | undefined;
	readonly sku?: ClusterSku | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class clusters_privateEndpoints
	extends ArmResource<clusters_privateEndpointsComponentInputs>
	implements clusters_privateEndpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_privateEndpointsComponentInputs) {
		super(entity, options.name, "Microsoft.StreamAnalytics/clusters/privateEndpoints", "2020-03-01-preview", options);
	}
	public readonly apiVersion: "2020-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.StreamAnalytics/clusters/privateEndpoints";
}
export interface clusters_privateEndpointsComponentOutputs {
	readonly apiVersion: "2020-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.StreamAnalytics/clusters/privateEndpoints";
}
export interface clusters_privateEndpointsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: PrivateEndpointProperties | undefined;
}
export function listStreamingJobs(resource: clusters): ClusterJobListResult {
	if (resource.apiVersion !== "2020-03-01-preview") {
		throw new Error(`listStreamingJobs is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.StreamAnalytics/clusters") {
		throw new Error(`listStreamingJobs is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ClusterJob {
	readonly id?: string | undefined;
	readonly jobState?:
		| (
				| "Created"
				| "Degraded"
				| "Deleting"
				| "Failed"
				| "Restarting"
				| "Running"
				| "Scaling"
				| "Starting"
				| "Stopped"
				| "Stopping"
		  )
		| undefined;
	readonly streamingUnits?: number | undefined;
}
export interface ClusterJobListResult {
	readonly nextLink?: string | undefined;
	readonly value?: ClusterJob[] | undefined;
}
export interface ClusterProperties {
	readonly capacityAllocated?: number | undefined;
	readonly capacityAssigned?: number | undefined;
	readonly clusterId?: string | undefined;
	readonly createdDate?: string | undefined;
	readonly provisioningState?: ("Canceled" | "Failed" | "InProgress" | "Succeeded") | undefined;
}
export interface ClusterSku {
	readonly capacity?: number | undefined;
	readonly name?: "Default" | undefined;
}
export interface PrivateEndpointProperties {
	readonly createdDate?: string | undefined;
	readonly manualPrivateLinkServiceConnections?: PrivateLinkServiceConnection[] | undefined;
}
export interface PrivateLinkConnectionState {
	readonly actionsRequired?: string | undefined;
	readonly description?: string | undefined;
	readonly status?: string | undefined;
}
export interface PrivateLinkServiceConnection {
	readonly properties?: PrivateLinkServiceConnectionProperties | undefined;
}
export interface PrivateLinkServiceConnectionProperties {
	readonly groupIds?: string[] | undefined;
	readonly privateLinkServiceConnectionState?: PrivateLinkConnectionState | undefined;
	readonly privateLinkServiceId?: string | undefined;
	readonly requestMessage?: string | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	clusters: clusters,
	"clusters/privateEndpoints": clusters_privateEndpoints,
};
