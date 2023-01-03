import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class RegionSslPolicies
	extends GdmResource<RegionSslPoliciesComponentInputs>
	implements RegionSslPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: RegionSslPoliciesComponentInputs) {
		super(entity, options.name, "compute.alpha.RegionSslPolicies", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly enabledFeatures?: string[] | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly selfLinkWithId?: string | undefined;
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
	readonly selfLinkWithId?: string | undefined;
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
	readonly tlsSettings?: ServerTlsSettings | undefined;
	readonly type: string;
}
export interface CallCredentials {
	readonly callCredentialType?: string | undefined;
	readonly fromPlugin?: MetadataCredentialsFromPlugin | undefined;
}
export interface ChannelCredentials {
	readonly certificates?: TlsCertificatePaths | undefined;
	readonly channelCredentialType?: string | undefined;
}
export interface GrpcServiceConfig {
	readonly callCredentials?: CallCredentials | undefined;
	readonly channelCredentials?: ChannelCredentials | undefined;
	readonly targetUri?: string | undefined;
}
export interface MetadataCredentialsFromPlugin {
	readonly name?: string | undefined;
	readonly structConfig?: string | undefined;
}
export interface SdsConfig {
	readonly grpcServiceConfig?: GrpcServiceConfig | undefined;
}
export interface ServerTlsSettings {
	readonly proxyTlsContext?: TlsContext | undefined;
	readonly subjectAltNames?: string[] | undefined;
	readonly tlsMode?: string | undefined;
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
	readonly selfLinkWithId?: string | undefined;
	readonly tlsSettings?: ServerTlsSettings | undefined;
	readonly warnings?:
		| Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>
		| undefined;
}
export interface TlsCertificateContext {
	readonly certificatePaths?: TlsCertificatePaths | undefined;
	readonly certificateSource?: string | undefined;
	readonly sdsConfig?: SdsConfig | undefined;
}
export interface TlsCertificatePaths {
	readonly certificatePath?: string | undefined;
	readonly privateKeyPath?: string | undefined;
}
export interface TlsContext {
	readonly certificateContext?: TlsCertificateContext | undefined;
	readonly validationContext?: TlsValidationContext | undefined;
}
export interface TlsValidationContext {
	readonly certificatePath?: string | undefined;
	readonly sdsConfig?: SdsConfig | undefined;
	readonly validationSource?: string | undefined;
}
export default {
	RegionSslPolicies: RegionSslPolicies,
};
