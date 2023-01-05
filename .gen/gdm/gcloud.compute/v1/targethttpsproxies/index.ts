import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class TargetHttpsProxies
	extends GdmResource<TargetHttpsProxiesComponentInputs>
	implements TargetHttpsProxiesComponentOutputs
{
	constructor(entity: ADKEntity, options: TargetHttpsProxiesComponentInputs) {
		super(entity, options.name, "compute.v1.TargetHttpsProxies", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
}
export interface TargetHttpsProxiesComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly selfLink?: string;
}
export interface TargetHttpsProxiesComponentInputs {
	readonly authorizationPolicy?: string;
	readonly certificateMap?: string;
	readonly description?: string;
	readonly fingerprint?: string;
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
	readonly authorizationPolicy?: string;
	readonly certificateMap?: string;
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly fingerprint?: string;
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
	TargetHttpsProxies: TargetHttpsProxies,
};
