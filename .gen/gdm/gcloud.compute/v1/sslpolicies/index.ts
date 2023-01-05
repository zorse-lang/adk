import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class SslPolicies extends GdmResource<SslPoliciesComponentInputs> implements SslPoliciesComponentOutputs {
	constructor(entity: ADKEntity, options: SslPoliciesComponentInputs) {
		super(entity, options.name, "compute.v1.SslPolicies", options);
	}
	public readonly creationTimestamp?: string;
	public readonly enabledFeatures?: string[];
	public readonly id?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
	public readonly warnings?: Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>;
}
export interface SslPoliciesComponentOutputs {
	readonly creationTimestamp?: string;
	readonly enabledFeatures?: string[];
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly warnings?: Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>;
}
export interface SslPoliciesComponentInputs {
	readonly customFeatures?: string[];
	readonly description?: string;
	readonly fingerprint?: string;
	readonly minTlsVersion?: string;
	readonly name: string;
	readonly profile?: string;
	readonly requestId?: string;
}
export interface SslPolicy {
	readonly creationTimestamp?: string;
	readonly customFeatures?: string[];
	readonly description?: string;
	readonly enabledFeatures?: string[];
	readonly fingerprint?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly minTlsVersion?: string;
	readonly name?: string;
	readonly profile?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly warnings?: Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>;
}
export default {
	SslPolicies: SslPolicies,
};
