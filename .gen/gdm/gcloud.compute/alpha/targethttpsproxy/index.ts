import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class TargetHttpsProxy
	extends GdmResource<TargetHttpsProxyComponentInputs>
	implements TargetHttpsProxyComponentOutputs
{
	constructor(entity: ADKEntity, options: TargetHttpsProxyComponentInputs) {
		super(entity, options.name, "compute.alpha.targetHttpsProxy", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly selfLinkWithId?: string | undefined;
}
export interface TargetHttpsProxyComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
}
export interface TargetHttpsProxyComponentInputs {
	readonly authentication?: string | undefined;
	readonly authorization?: string | undefined;
	readonly authorizationPolicy?: string | undefined;
	readonly certificateMap?: string | undefined;
	readonly description?: string | undefined;
	readonly fingerprint?: string | undefined;
	readonly httpFilters?: string[] | undefined;
	readonly name: string;
	readonly proxyBind?: boolean | undefined;
	readonly quicOverride?: string | undefined;
	readonly serverTlsPolicy?: string | undefined;
	readonly sslCertificates?: string[] | undefined;
	readonly sslPolicy?: string | undefined;
	readonly urlMap?: string | undefined;
	readonly type: string;
}
export default {
	TargetHttpsProxy: TargetHttpsProxy,
};
