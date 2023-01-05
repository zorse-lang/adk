import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class searchServices extends ArmResource<searchServicesComponentInputs> implements searchServicesComponentOutputs {
	constructor(entity: ADKEntity, options: searchServicesComponentInputs) {
		super(entity, options.name, "Microsoft.Search/searchServices", "2015-08-19", options);
	}
	public readonly apiVersion: "2015-08-19";
	public readonly id: string;
	public readonly type: "Microsoft.Search/searchServices";
}
export interface searchServicesComponentOutputs {
	readonly apiVersion: "2015-08-19";
	readonly id: string;
	readonly type: "Microsoft.Search/searchServices";
}
export interface searchServicesComponentInputs {
	readonly identity?: Identity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: SearchServiceProperties;
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
}
export function listAdminKeys(resource: searchServices): AdminKeyResult {
	if (resource.apiVersion !== "2015-08-19") {
		throw new Error(`listAdminKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Search/searchServices") {
		throw new Error(`listAdminKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listQueryKeys(resource: searchServices): ListQueryKeysResult {
	if (resource.apiVersion !== "2015-08-19") {
		throw new Error(`listQueryKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Search/searchServices") {
		throw new Error(`listQueryKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AdminKeyResult {
	readonly primaryKey?: string;
	readonly secondaryKey?: string;
}
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type: "None";
}
export interface ListQueryKeysResult {
	readonly value?: QueryKey[];
}
export interface QueryKey {
	readonly key?: string;
	readonly name?: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface SearchServiceProperties {
	readonly hostingMode?: "default";
	readonly partitionCount?: number;
	readonly provisioningState?: "failed" | "provisioning";
	readonly replicaCount?: number;
	readonly status?: "degraded" | "deleting" | "disabled" | "error" | "provisioning";
	readonly statusDetails?: string;
}
export interface Sku {
	readonly name?: "basic" | "free" | "standard" | "standard2" | "standard3" | "storage_optimized_l1";
}
export default {
	searchServices: searchServices,
};
