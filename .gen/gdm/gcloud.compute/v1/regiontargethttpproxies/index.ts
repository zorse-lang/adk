import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class RegionTargetHttpProxies
	extends GdmResource<RegionTargetHttpProxiesComponentInputs>
	implements RegionTargetHttpProxiesComponentOutputs
{
	constructor(entity: ADKEntity, options: RegionTargetHttpProxiesComponentInputs) {
		super(entity, options.name, "compute.v1.RegionTargetHttpProxies", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
}
export interface RegionTargetHttpProxiesComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly selfLink?: string;
}
export interface RegionTargetHttpProxiesComponentInputs {
	readonly description?: string;
	readonly fingerprint?: string;
	readonly name: string;
	readonly proxyBind?: boolean;
	readonly requestId?: string;
	readonly urlMap?: string;
}
export interface TargetHttpProxy {
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly fingerprint?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly proxyBind?: boolean;
	readonly region?: string;
	readonly selfLink?: string;
	readonly urlMap?: string;
}
export default {
	RegionTargetHttpProxies: RegionTargetHttpProxies,
};
