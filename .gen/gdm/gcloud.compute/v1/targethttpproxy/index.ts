import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class TargetHttpProxy
	extends GdmResource<TargetHttpProxyComponentInputs>
	implements TargetHttpProxyComponentOutputs
{
	constructor(entity: ADKEntity, options: TargetHttpProxyComponentInputs) {
		super(entity, options.name, "compute.v1.targetHttpProxy", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
}
export interface TargetHttpProxyComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly selfLink?: string;
}
export interface TargetHttpProxyComponentInputs {
	readonly description?: string;
	readonly fingerprint?: string;
	readonly name: string;
	readonly proxyBind?: boolean;
	readonly urlMap?: string;
}
export default {
	TargetHttpProxy: TargetHttpProxy,
};
