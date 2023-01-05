import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class RegionTargetHttpProxies
	extends GdmResource<RegionTargetHttpProxiesComponentInputs>
	implements RegionTargetHttpProxiesComponentOutputs
{
	constructor(entity: ADKEntity, options: RegionTargetHttpProxiesComponentInputs) {
		super(entity, options.name, "compute.alpha.RegionTargetHttpProxies", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
}
export interface RegionTargetHttpProxiesComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
}
export interface RegionTargetHttpProxiesComponentInputs {
	readonly description?: string;
	readonly fingerprint?: string;
	readonly httpFilters?: string[];
	readonly name: string;
	readonly proxyBind?: boolean;
	readonly requestId?: string;
	readonly urlMap?: string;
}
export interface TargetHttpProxy {
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly fingerprint?: string;
	readonly httpFilters?: string[];
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly proxyBind?: boolean;
	readonly region?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly urlMap?: string;
}
export default {
	RegionTargetHttpProxies: RegionTargetHttpProxies,
};
