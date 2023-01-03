import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class RegionTargetHttpsProxies
	extends GdmResource<RegionTargetHttpsProxiesComponentInputs>
	implements RegionTargetHttpsProxiesComponentOutputs
{
	constructor(entity: ADKEntity, options: RegionTargetHttpsProxiesComponentInputs) {
		super(entity, options.name, "compute.alpha.RegionTargetHttpsProxies", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly selfLinkWithId?: string | undefined;
}
export interface RegionTargetHttpsProxiesComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
}
export interface RegionTargetHttpsProxiesComponentInputs {
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
	readonly requestId?: string | undefined;
	readonly serverTlsPolicy?: string | undefined;
	readonly sslCertificates?: string[] | undefined;
	readonly sslPolicy?: string | undefined;
	readonly urlMap?: string | undefined;
	readonly type: string;
}
export interface TargetHttpsProxy {
	readonly authentication?: string | undefined;
	readonly authorization?: string | undefined;
	readonly authorizationPolicy?: string | undefined;
	readonly certificateMap?: string | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly fingerprint?: string | undefined;
	readonly httpFilters?: string[] | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly proxyBind?: boolean | undefined;
	readonly quicOverride?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly serverTlsPolicy?: string | undefined;
	readonly sslCertificates?: string[] | undefined;
	readonly sslPolicy?: string | undefined;
	readonly urlMap?: string | undefined;
}
export default {
	RegionTargetHttpsProxies: RegionTargetHttpsProxies,
};
