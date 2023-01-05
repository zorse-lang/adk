import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class SslPolicies extends GdmResource<SslPoliciesComponentInputs> implements SslPoliciesComponentOutputs {
	constructor(entity: ADKEntity, options: SslPoliciesComponentInputs) {
		super(entity, options.name, "compute.alpha.SslPolicies", options);
	}
	public readonly creationTimestamp?: string;
	public readonly enabledFeatures?: string[];
	public readonly id?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
	public readonly warnings?: Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>;
}
export interface SslPoliciesComponentOutputs {
	readonly creationTimestamp?: string;
	readonly enabledFeatures?: string[];
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
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
	readonly tlsSettings?: ServerTlsSettings;
}
export interface CallCredentials {
	readonly callCredentialType?: string;
	readonly fromPlugin?: MetadataCredentialsFromPlugin;
}
export interface ChannelCredentials {
	readonly certificates?: TlsCertificatePaths;
	readonly channelCredentialType?: string;
}
export interface GrpcServiceConfig {
	readonly callCredentials?: CallCredentials;
	readonly channelCredentials?: ChannelCredentials;
	readonly targetUri?: string;
}
export interface MetadataCredentialsFromPlugin {
	readonly name?: string;
	readonly structConfig?: string;
}
export interface SdsConfig {
	readonly grpcServiceConfig?: GrpcServiceConfig;
}
export interface ServerTlsSettings {
	readonly proxyTlsContext?: TlsContext;
	readonly subjectAltNames?: string[];
	readonly tlsMode?: string;
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
	readonly selfLinkWithId?: string;
	readonly tlsSettings?: ServerTlsSettings;
	readonly warnings?: Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>;
}
export interface TlsCertificateContext {
	readonly certificatePaths?: TlsCertificatePaths;
	readonly certificateSource?: string;
	readonly sdsConfig?: SdsConfig;
}
export interface TlsCertificatePaths {
	readonly certificatePath?: string;
	readonly privateKeyPath?: string;
}
export interface TlsContext {
	readonly certificateContext?: TlsCertificateContext;
	readonly validationContext?: TlsValidationContext;
}
export interface TlsValidationContext {
	readonly certificatePath?: string;
	readonly sdsConfig?: SdsConfig;
	readonly validationSource?: string;
}
export default {
	SslPolicies: SslPolicies,
};
