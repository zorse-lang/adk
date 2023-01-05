import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class TargetHttpsProxy
	extends GdmResource<TargetHttpsProxyComponentInputs>
	implements TargetHttpsProxyComponentOutputs
{
	constructor(entity: ADKEntity, options: TargetHttpsProxyComponentInputs) {
		super(entity, options.name, "compute.v1.targetHttpsProxy", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
}
export interface TargetHttpsProxyComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly selfLink?: string;
}
export interface TargetHttpsProxyComponentInputs {
	readonly authorizationPolicy?: string;
	readonly certificateMap?: string;
	readonly description?: string;
	readonly fingerprint?: string;
	readonly name: string;
	readonly proxyBind?: boolean;
	readonly quicOverride?: string;
	readonly serverTlsPolicy?: string;
	readonly sslCertificates?: string[];
	readonly sslPolicy?: string;
	readonly urlMap?: string;
}
export default {
	TargetHttpsProxy: TargetHttpsProxy,
};
