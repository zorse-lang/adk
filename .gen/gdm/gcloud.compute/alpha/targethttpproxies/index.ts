import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class TargetHttpProxies
	extends GdmResource<TargetHttpProxiesComponentInputs>
	implements TargetHttpProxiesComponentOutputs
{
	constructor(entity: ADKEntity, options: TargetHttpProxiesComponentInputs) {
		super(entity, options.name, "compute.alpha.TargetHttpProxies", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
}
export interface TargetHttpProxiesComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
}
export interface TargetHttpProxiesComponentInputs {
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
	TargetHttpProxies: TargetHttpProxies,
};
