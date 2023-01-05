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
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ClusterProperties;
	readonly sku?: ClusterSku;
	readonly tags?: TrackedResourceTags;
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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: PrivateEndpointProperties;
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
	readonly id?: string;
	readonly jobState?:
		| "Created"
		| "Degraded"
		| "Deleting"
		| "Failed"
		| "Restarting"
		| "Running"
		| "Scaling"
		| "Starting"
		| "Stopped"
		| "Stopping";
	readonly streamingUnits?: number;
}
export interface ClusterJobListResult {
	readonly nextLink?: string;
	readonly value?: ClusterJob[];
}
export interface ClusterProperties {
	readonly capacityAllocated?: number;
	readonly capacityAssigned?: number;
	readonly clusterId?: string;
	readonly createdDate?: string;
	readonly provisioningState?: "Canceled" | "Failed" | "InProgress" | "Succeeded";
}
export interface ClusterSku {
	readonly capacity?: number;
	readonly name?: "Default";
}
export interface PrivateEndpointProperties {
	readonly createdDate?: string;
	readonly manualPrivateLinkServiceConnections?: PrivateLinkServiceConnection[];
}
export interface PrivateLinkConnectionState {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: string;
}
export interface PrivateLinkServiceConnection {
	readonly properties?: PrivateLinkServiceConnectionProperties;
}
export interface PrivateLinkServiceConnectionProperties {
	readonly groupIds?: string[];
	readonly privateLinkServiceConnectionState?: PrivateLinkConnectionState;
	readonly privateLinkServiceId?: string;
	readonly requestMessage?: string;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export default {
	clusters: clusters,
	"clusters/privateEndpoints": clusters_privateEndpoints,
};
