import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class RegionTargetHttpsProxies
	extends GdmResource<RegionTargetHttpsProxiesComponentInputs>
	implements RegionTargetHttpsProxiesComponentOutputs
{
	constructor(entity: ADKEntity, options: RegionTargetHttpsProxiesComponentInputs) {
		super(entity, options.name, "compute.beta.RegionTargetHttpsProxies", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
}
export interface RegionTargetHttpsProxiesComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly selfLink?: string;
}
export interface RegionTargetHttpsProxiesComponentInputs {
	readonly authentication?: string;
	readonly authorization?: string;
	readonly authorizationPolicy?: string;
	readonly certificateMap?: string;
	readonly description?: string;
	readonly fingerprint?: string;
	readonly httpFilters?: string[];
	readonly name: string;
	readonly proxyBind?: boolean;
	readonly quicOverride?: string;
	readonly requestId?: string;
	readonly serverTlsPolicy?: string;
	readonly sslCertificates?: string[];
	readonly sslPolicy?: string;
	readonly urlMap?: string;
}
export interface TargetHttpsProxy {
	readonly authentication?: string;
	readonly authorization?: string;
	readonly authorizationPolicy?: string;
	readonly certificateMap?: string;
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly fingerprint?: string;
	readonly httpFilters?: string[];
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly proxyBind?: boolean;
	readonly quicOverride?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly serverTlsPolicy?: string;
	readonly sslCertificates?: string[];
	readonly sslPolicy?: string;
	readonly urlMap?: string;
}
export default {
	RegionTargetHttpsProxies: RegionTargetHttpsProxies,
};
