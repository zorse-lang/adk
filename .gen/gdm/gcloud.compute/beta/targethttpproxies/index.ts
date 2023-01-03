import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class TargetHttpProxies
	extends GdmResource<TargetHttpProxiesComponentInputs>
	implements TargetHttpProxiesComponentOutputs
{
	constructor(entity: ADKEntity, options: TargetHttpProxiesComponentInputs) {
		super(entity, options.name, "compute.beta.TargetHttpProxies", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
}
export interface TargetHttpProxiesComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
}
export interface TargetHttpProxiesComponentInputs {
	readonly description?: string | undefined;
	readonly fingerprint?: string | undefined;
	readonly httpFilters?: string[] | undefined;
	readonly name: string;
	readonly proxyBind?: boolean | undefined;
	readonly requestId?: string | undefined;
	readonly urlMap?: string | undefined;
	readonly type: string;
}
export interface TargetHttpProxy {
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly fingerprint?: string | undefined;
	readonly httpFilters?: string[] | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly proxyBind?: boolean | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly urlMap?: string | undefined;
}
export default {
	TargetHttpProxies: TargetHttpProxies,
};
