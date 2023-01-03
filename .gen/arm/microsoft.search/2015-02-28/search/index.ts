import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class searchServices extends ArmResource<searchServicesComponentInputs> implements searchServicesComponentOutputs {
	constructor(entity: ADKEntity, options: searchServicesComponentInputs) {
		super(entity, options.name, "Microsoft.Search/searchServices", "2015-02-28", options);
	}
	public readonly apiVersion: "2015-02-28";
	public readonly id: string;
	public readonly type: "Microsoft.Search/searchServices";
}
export interface searchServicesComponentOutputs {
	readonly apiVersion: "2015-02-28";
	readonly id: string;
	readonly type: "Microsoft.Search/searchServices";
}
export interface searchServicesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: SearchServiceProperties | undefined;
	readonly tags?: SearchServiceCreateOrUpdateParametersTags | undefined;
}
export function listAdminKeys(resource: searchServices): AdminKeyResult {
	if (resource.apiVersion !== "2015-02-28") {
		throw new Error(`listAdminKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Search/searchServices") {
		throw new Error(`listAdminKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AdminKeyResult {
	readonly primaryKey?: string | undefined;
	readonly secondaryKey?: string | undefined;
}
export interface SearchServiceCreateOrUpdateParametersTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SearchServiceProperties {
	readonly partitionCount?: number | undefined;
	readonly replicaCount?: number | undefined;
	readonly sku?: Sku | undefined;
}
export interface Sku {
	readonly name?: ("free" | "standard") | undefined;
}
export default {
	searchServices: searchServices,
};
