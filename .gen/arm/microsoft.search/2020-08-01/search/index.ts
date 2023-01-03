import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class searchServices extends ArmResource<searchServicesComponentInputs> implements searchServicesComponentOutputs {
	constructor(entity: ADKEntity, options: searchServicesComponentInputs) {
		super(entity, options.name, "Microsoft.Search/searchServices", "2020-08-01", options);
	}
	public readonly apiVersion: "2020-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Search/searchServices";
}
export interface searchServicesComponentOutputs {
	readonly apiVersion: "2020-08-01";
	readonly id: string;
	readonly type: "Microsoft.Search/searchServices";
}
export interface searchServicesComponentInputs {
	readonly identity?: Identity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: SearchServiceProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class searchServices_privateEndpointConnections
	extends ArmResource<searchServices_privateEndpointConnectionsComponentInputs>
	implements searchServices_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: searchServices_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Search/searchServices/privateEndpointConnections", "2020-08-01", options);
	}
	public readonly apiVersion: "2020-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Search/searchServices/privateEndpointConnections";
}
export interface searchServices_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2020-08-01";
	readonly id: string;
	readonly type: "Microsoft.Search/searchServices/privateEndpointConnections";
}
export interface searchServices_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
}
export class searchServices_sharedPrivateLinkResources
	extends ArmResource<searchServices_sharedPrivateLinkResourcesComponentInputs>
	implements searchServices_sharedPrivateLinkResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: searchServices_sharedPrivateLinkResourcesComponentInputs) {
		super(entity, options.name, "Microsoft.Search/searchServices/sharedPrivateLinkResources", "2020-08-01", options);
	}
	public readonly apiVersion: "2020-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Search/searchServices/sharedPrivateLinkResources";
}
export interface searchServices_sharedPrivateLinkResourcesComponentOutputs {
	readonly apiVersion: "2020-08-01";
	readonly id: string;
	readonly type: "Microsoft.Search/searchServices/sharedPrivateLinkResources";
}
export interface searchServices_sharedPrivateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: SharedPrivateLinkResourceProperties | undefined;
}
export function listAdminKeys(resource: searchServices): AdminKeyResult {
	if (resource.apiVersion !== "2020-08-01") {
		throw new Error(`listAdminKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Search/searchServices") {
		throw new Error(`listAdminKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listQueryKeys(resource: searchServices): ListQueryKeysResult {
	if (resource.apiVersion !== "2020-08-01") {
		throw new Error(`listQueryKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Search/searchServices") {
		throw new Error(`listQueryKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AdminKeyResult {
	readonly primaryKey?: string | undefined;
	readonly secondaryKey?: string | undefined;
}
export interface Identity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type: "None";
}
export interface IpRule {
	readonly value?: string | undefined;
}
export interface ListQueryKeysResult {
	readonly nextLink?: string | undefined;
	readonly value?: QueryKey[] | undefined;
}
export interface NetworkRuleSet {
	readonly ipRules?: IpRule[] | undefined;
}
export interface PrivateEndpointConnection {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly type?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpointConnectionPropertiesPrivateEndpoint | undefined;
	readonly privateLinkServiceConnectionState?:
		| PrivateEndpointConnectionPropertiesPrivateLinkServiceConnectionState
		| undefined;
}
export interface PrivateEndpointConnectionPropertiesPrivateEndpoint {
	readonly id?: string | undefined;
}
export interface PrivateEndpointConnectionPropertiesPrivateLinkServiceConnectionState {
	readonly actionsRequired?: string | undefined;
	readonly description?: string | undefined;
	readonly status?: ("Approved" | "Disconnected" | "Pending") | undefined;
}
export interface QueryKey {
	readonly key?: string | undefined;
	readonly name?: string | undefined;
}
export interface SearchServiceProperties {
	readonly hostingMode?: "default" | undefined;
	readonly networkRuleSet?: NetworkRuleSet | undefined;
	readonly partitionCount?: number | undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly provisioningState?: ("failed" | "provisioning") | undefined;
	readonly publicNetworkAccess?: "disabled" | undefined;
	readonly replicaCount?: number | undefined;
	readonly sharedPrivateLinkResources?: SharedPrivateLinkResource[] | undefined;
	readonly status?: ("degraded" | "deleting" | "disabled" | "error" | "provisioning") | undefined;
	readonly statusDetails?: string | undefined;
}
export interface SharedPrivateLinkResource {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: SharedPrivateLinkResourceProperties | undefined;
	readonly type?: string | undefined;
}
export interface SharedPrivateLinkResourceProperties {
	readonly groupId?: string | undefined;
	readonly privateLinkResourceId?: string | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Incomplete" | "Succeeded") | undefined;
	readonly requestMessage?: string | undefined;
	readonly resourceRegion?: string | undefined;
	readonly status?: ("Approved" | "Disconnected" | "Pending") | undefined;
}
export interface Sku {
	readonly name?: ("basic" | "free" | "standard" | "standard2" | "standard3" | "storage_optimized_l1") | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	searchServices: searchServices,
	"searchServices/privateEndpointConnections": searchServices_privateEndpointConnections,
	"searchServices/sharedPrivateLinkResources": searchServices_sharedPrivateLinkResources,
};
