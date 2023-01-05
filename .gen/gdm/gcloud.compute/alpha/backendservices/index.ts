import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class BackendServices
	extends GdmResource<BackendServicesComponentInputs>
	implements BackendServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: BackendServicesComponentInputs) {
		super(entity, options.name, "compute.alpha.BackendServices", options);
	}
	public readonly creationTimestamp?: string;
	public readonly edgeSecurityPolicy?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly securityPolicy?: string;
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
}
export interface BackendServicesComponentOutputs {
	readonly creationTimestamp?: string;
	readonly edgeSecurityPolicy?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly securityPolicy?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
}
export interface BackendServicesComponentInputs {
	readonly affinityCookieTtlSec?: number;
	readonly backends?: Backend[];
	readonly cdnPolicy?: BackendServiceCdnPolicy;
	readonly circuitBreakers?: CircuitBreakers;
	readonly compressionMode?: string;
	readonly connectionDraining?: ConnectionDraining;
	readonly connectionTrackingPolicy?: BackendServiceConnectionTrackingPolicy;
	readonly consistentHash?: ConsistentHashLoadBalancerSettings;
	readonly customRequestHeaders?: string[];
	readonly customResponseHeaders?: string[];
	readonly description?: string;
	readonly enableCDN?: boolean;
	readonly failoverPolicy?: BackendServiceFailoverPolicy;
	readonly fingerprint?: string;
	readonly healthChecks?: string[];
	readonly iap?: BackendServiceIAP;
	readonly loadBalancingScheme?: string;
	readonly localityLbPolicies?: BackendServiceLocalityLoadBalancingPolicyConfig[];
	readonly localityLbPolicy?: string;
	readonly logConfig?: BackendServiceLogConfig;
	readonly maxStreamDuration?: Duration;
	readonly name: string;
	readonly network?: string;
	readonly outlierDetection?: OutlierDetection;
	readonly port?: number;
	readonly portName?: string;
	readonly protocol?: string;
	readonly requestId?: string;
	readonly securitySettings?: SecuritySettings;
	readonly serviceBindings?: string[];
	readonly serviceLbPolicy?: string;
	readonly sessionAffinity?: string;
	readonly subsetting?: Subsetting;
	readonly timeoutSec?: number;
	readonly vpcNetworkScope?: string;
}
export interface AuthenticationPolicy {
	readonly origins?: OriginAuthenticationMethod[];
	readonly peers?: PeerAuthenticationMethod[];
	readonly principalBinding?: string;
	readonly serverTlsContext?: TlsContext;
}
export interface AuthorizationConfig {
	readonly policies?: RbacPolicy[];
}
export interface AWSV4Signature {
	readonly accessKey?: string;
	readonly accessKeyId?: string;
	readonly accessKeyVersion?: string;
	readonly originRegion?: string;
}
export interface Backend {
	readonly balancingMode?: string;
	readonly capacityScaler?: number;
	readonly description?: string;
	readonly failover?: boolean;
	readonly group?: string;
	readonly maxConnections?: number;
	readonly maxConnectionsPerEndpoint?: number;
	readonly maxConnectionsPerInstance?: number;
	readonly maxRate?: number;
	readonly maxRatePerEndpoint?: number;
	readonly maxRatePerInstance?: number;
	readonly maxUtilization?: number;
}
export interface BackendService {
	readonly affinityCookieTtlSec?: number;
	readonly backends?: Backend[];
	readonly cdnPolicy?: BackendServiceCdnPolicy;
	readonly circuitBreakers?: CircuitBreakers;
	readonly compressionMode?: string;
	readonly connectionDraining?: ConnectionDraining;
	readonly connectionTrackingPolicy?: BackendServiceConnectionTrackingPolicy;
	readonly consistentHash?: ConsistentHashLoadBalancerSettings;
	readonly creationTimestamp?: string;
	readonly customRequestHeaders?: string[];
	readonly customResponseHeaders?: string[];
	readonly description?: string;
	readonly edgeSecurityPolicy?: string;
	readonly enableCDN?: boolean;
	readonly failoverPolicy?: BackendServiceFailoverPolicy;
	readonly fingerprint?: string;
	readonly healthChecks?: string[];
	readonly iap?: BackendServiceIAP;
	readonly id?: string;
	readonly kind?: string;
	readonly loadBalancingScheme?: string;
	readonly localityLbPolicies?: BackendServiceLocalityLoadBalancingPolicyConfig[];
	readonly localityLbPolicy?: string;
	readonly logConfig?: BackendServiceLogConfig;
	readonly maxStreamDuration?: Duration;
	readonly name?: string;
	readonly network?: string;
	readonly outlierDetection?: OutlierDetection;
	readonly port?: number;
	readonly portName?: string;
	readonly protocol?: string;
	readonly region?: string;
	readonly securityPolicy?: string;
	readonly securitySettings?: SecuritySettings;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly serviceBindings?: string[];
	readonly serviceLbPolicy?: string;
	readonly sessionAffinity?: string;
	readonly subsetting?: Subsetting;
	readonly timeoutSec?: number;
	readonly vpcNetworkScope?: string;
}
export interface BackendServiceCdnPolicy {
	readonly bypassCacheOnRequestHeaders?: BackendServiceCdnPolicyBypassCacheOnRequestHeader[];
	readonly cacheKeyPolicy?: CacheKeyPolicy;
	readonly cacheMode?: string;
	readonly clientTtl?: number;
	readonly defaultTtl?: number;
	readonly maxTtl?: number;
	readonly negativeCaching?: boolean;
	readonly negativeCachingPolicy?: BackendServiceCdnPolicyNegativeCachingPolicy[];
	readonly requestCoalescing?: boolean;
	readonly serveWhileStale?: number;
	readonly signedUrlCacheMaxAgeSec?: string;
	readonly signedUrlKeyNames?: string[];
}
export interface BackendServiceCdnPolicyBypassCacheOnRequestHeader {
	readonly headerName?: string;
}
export interface BackendServiceCdnPolicyNegativeCachingPolicy {
	readonly code?: number;
	readonly ttl?: number;
}
export interface BackendServiceConnectionTrackingPolicy {
	readonly connectionPersistenceOnUnhealthyBackends?: string;
	readonly enableStrongAffinity?: boolean;
	readonly idleTimeoutSec?: number;
	readonly trackingMode?: string;
}
export interface BackendServiceFailoverPolicy {
	readonly disableConnectionDrainOnFailover?: boolean;
	readonly dropTrafficIfUnhealthy?: boolean;
	readonly failoverRatio?: number;
}
export interface BackendServiceIAP {
	readonly enabled?: boolean;
	readonly oauth2ClientId?: string;
	readonly oauth2ClientInfo?: BackendServiceIAPOAuth2ClientInfo;
	readonly oauth2ClientSecret?: string;
	readonly oauth2ClientSecretSha256?: string;
}
export interface BackendServiceIAPOAuth2ClientInfo {
	readonly applicationName?: string;
	readonly clientName?: string;
	readonly developerEmailAddress?: string;
}
export interface BackendServiceLocalityLoadBalancingPolicyConfig {
	readonly customPolicy?: BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy;
	readonly policy?: BackendServiceLocalityLoadBalancingPolicyConfigPolicy;
}
export interface BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy {
	readonly data?: string;
	readonly name?: string;
}
export interface BackendServiceLocalityLoadBalancingPolicyConfigPolicy {
	readonly name?: string;
}
export interface BackendServiceLogConfig {
	readonly enable?: boolean;
	readonly optional?: string;
	readonly optionalFields?: string[];
	readonly optionalMode?: string;
	readonly sampleRate?: number;
}
export interface CacheKeyPolicy {
	readonly includeHost?: boolean;
	readonly includeHttpHeaders?: string[];
	readonly includeNamedCookies?: string[];
	readonly includeProtocol?: boolean;
	readonly includeQueryString?: boolean;
	readonly queryStringBlacklist?: string[];
	readonly queryStringWhitelist?: string[];
}
export interface CallCredentials {
	readonly callCredentialType?: string;
	readonly fromPlugin?: MetadataCredentialsFromPlugin;
}
export interface ChannelCredentials {
	readonly certificates?: TlsCertificatePaths;
	readonly channelCredentialType?: string;
}
export interface CircuitBreakers {
	readonly connectTimeout?: Duration;
	readonly maxConnections?: number;
	readonly maxPendingRequests?: number;
	readonly maxRequests?: number;
	readonly maxRequestsPerConnection?: number;
	readonly maxRetries?: number;
}
export interface ClientTlsSettings {
	readonly clientTlsContext?: TlsContext;
	readonly mode?: string;
	readonly sni?: string;
	readonly subjectAltNames?: string[];
}
export interface ConnectionDraining {
	readonly drainingTimeoutSec?: number;
}
export interface ConsistentHashLoadBalancerSettings {
	readonly httpCookie?: ConsistentHashLoadBalancerSettingsHttpCookie;
	readonly httpHeaderName?: string;
	readonly minimumRingSize?: string;
}
export interface ConsistentHashLoadBalancerSettingsHttpCookie {
	readonly name?: string;
	readonly path?: string;
	readonly ttl?: Duration;
}
export interface Duration {
	readonly nanos?: number;
	readonly seconds?: string;
}
export interface GrpcServiceConfig {
	readonly callCredentials?: CallCredentials;
	readonly channelCredentials?: ChannelCredentials;
	readonly targetUri?: string;
}
export interface Jwt {
	readonly audiences?: string[];
	readonly issuer?: string;
	readonly jwksPublicKeys?: string;
	readonly jwtHeaders?: JwtHeader[];
	readonly jwtParams?: string[];
}
export interface JwtHeader {
	readonly name?: string;
	readonly valuePrefix?: string;
}
export interface MetadataCredentialsFromPlugin {
	readonly name?: string;
	readonly structConfig?: string;
}
export interface MutualTls {
	readonly mode?: string;
}
export interface OriginAuthenticationMethod {
	readonly jwt?: Jwt;
}
export interface OutlierDetection {
	readonly baseEjectionTime?: Duration;
	readonly consecutiveErrors?: number;
	readonly consecutiveGatewayFailure?: number;
	readonly enforcingConsecutiveErrors?: number;
	readonly enforcingConsecutiveGatewayFailure?: number;
	readonly enforcingSuccessRate?: number;
	readonly interval?: Duration;
	readonly maxEjectionPercent?: number;
	readonly successRateMinimumHosts?: number;
	readonly successRateRequestVolume?: number;
	readonly successRateStdevFactor?: number;
}
export interface PeerAuthenticationMethod {
	readonly mtls?: MutualTls;
}
export interface Permission {
	readonly constraints?: PermissionConstraint[];
	readonly hosts?: string[];
	readonly methods?: string[];
	readonly notHosts?: string[];
	readonly notMethods?: string[];
	readonly notPaths?: string[];
	readonly notPorts?: string[];
	readonly paths?: string[];
	readonly ports?: string[];
}
export interface PermissionConstraint {
	readonly key?: string;
	readonly values?: string[];
}
export interface Principal {
	readonly condition?: string;
	readonly groups?: string[];
	readonly ips?: string[];
	readonly namespaces?: string[];
	readonly notGroups?: string[];
	readonly notIps?: string[];
	readonly notNamespaces?: string[];
	readonly notUsers?: string[];
	readonly properties?: { [P in string]: string };
	readonly users?: string[];
}
export interface RbacPolicy {
	readonly name?: string;
	readonly permissions?: Permission[];
	readonly principals?: Principal[];
}
export interface SdsConfig {
	readonly grpcServiceConfig?: GrpcServiceConfig;
}
export interface SecuritySettings {
	readonly authentication?: string;
	readonly authenticationPolicy?: AuthenticationPolicy;
	readonly authorizationConfig?: AuthorizationConfig;
	readonly awsV4Authentication?: AWSV4Signature;
	readonly clientTlsPolicy?: string;
	readonly clientTlsSettings?: ClientTlsSettings;
	readonly subjectAltNames?: string[];
}
export interface Subsetting {
	readonly policy?: string;
	readonly subsetSize?: number;
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
	BackendServices: BackendServices,
};
