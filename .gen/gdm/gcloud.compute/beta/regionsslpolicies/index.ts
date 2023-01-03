import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class RegionSslPolicies
	extends GdmResource<RegionSslPoliciesComponentInputs>
	implements RegionSslPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: RegionSslPoliciesComponentInputs) {
		super(entity, options.name, "compute.beta.RegionSslPolicies", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly enabledFeatures?: string[] | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly warnings?:
		| Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>
		| undefined;
}
export interface RegionSslPoliciesComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly enabledFeatures?: string[] | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly warnings?:
		| Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>
		| undefined;
}
export interface RegionSslPoliciesComponentInputs {
	readonly customFeatures?: string[] | undefined;
	readonly description?: string | undefined;
	readonly fingerprint?: string | undefined;
	readonly minTlsVersion?: string | undefined;
	readonly name: string;
	readonly profile?: string | undefined;
	readonly requestId?: string | undefined;
	readonly type: string;
}
export interface SslPolicy {
	readonly creationTimestamp?: string | undefined;
	readonly customFeatures?: string[] | undefined;
	readonly description?: string | undefined;
	readonly enabledFeatures?: string[] | undefined;
	readonly fingerprint?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly minTlsVersion?: string | undefined;
	readonly name?: string | undefined;
	readonly profile?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly warnings?:
		| Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>
		| undefined;
}
export default {
	RegionSslPolicies: RegionSslPolicies,
};
