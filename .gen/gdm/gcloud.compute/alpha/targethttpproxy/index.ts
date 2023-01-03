import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class TargetHttpProxy
	extends GdmResource<TargetHttpProxyComponentInputs>
	implements TargetHttpProxyComponentOutputs
{
	constructor(entity: ADKEntity, options: TargetHttpProxyComponentInputs) {
		super(entity, options.name, "compute.alpha.targetHttpProxy", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly selfLinkWithId?: string | undefined;
}
export interface TargetHttpProxyComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
}
export interface TargetHttpProxyComponentInputs {
	readonly description?: string | undefined;
	readonly fingerprint?: string | undefined;
	readonly httpFilters?: string[] | undefined;
	readonly name: string;
	readonly proxyBind?: boolean | undefined;
	readonly urlMap?: string | undefined;
	readonly type: string;
}
export default {
	TargetHttpProxy: TargetHttpProxy,
};
