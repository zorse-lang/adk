import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export interface AuthenticationPolicy {
	readonly origins?: OriginAuthenticationMethod[] | undefined;
	readonly peers?: PeerAuthenticationMethod[] | undefined;
	readonly principalBinding?: string | undefined;
	readonly serverTlsContext?: TlsContext | undefined;
}
export interface AuthorizationConfig {
	readonly policies?: RbacPolicy[] | undefined;
}
export interface AWSV4Signature {
	readonly accessKey?: string | undefined;
	readonly accessKeyId?: string | undefined;
	readonly accessKeyVersion?: string | undefined;
	readonly originRegion?: string | undefined;
}
export interface Backend {
	readonly balancingMode?: string | undefined;
	readonly capacityScaler?: number | undefined;
	readonly description?: string | undefined;
	readonly failover?: boolean | undefined;
	readonly group?: string | undefined;
	readonly maxConnections?: number | undefined;
	readonly maxConnectionsPerEndpoint?: number | undefined;
	readonly maxConnectionsPerInstance?: number | undefined;
	readonly maxRate?: number | undefined;
	readonly maxRatePerEndpoint?: number | undefined;
	readonly maxRatePerInstance?: number | undefined;
	readonly maxUtilization?: number | undefined;
}
export interface BackendService {
	readonly affinityCookieTtlSec?: number | undefined;
	readonly backends?: Backend[] | undefined;
	readonly cdnPolicy?: BackendServiceCdnPolicy | undefined;
	readonly circuitBreakers?: CircuitBreakers | undefined;
	readonly compressionMode?: string | undefined;
	readonly connectionDraining?: ConnectionDraining | undefined;
	readonly connectionTrackingPolicy?: BackendServiceConnectionTrackingPolicy | undefined;
	readonly consistentHash?: ConsistentHashLoadBalancerSettings | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly customRequestHeaders?: string[] | undefined;
	readonly customResponseHeaders?: string[] | undefined;
	readonly description?: string | undefined;
	readonly edgeSecurityPolicy?: string | undefined;
	readonly enableCDN?: boolean | undefined;
	readonly failoverPolicy?: BackendServiceFailoverPolicy | undefined;
	readonly fingerprint?: string | undefined;
	readonly healthChecks?: string[] | undefined;
	readonly iap?: BackendServiceIAP | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly loadBalancingScheme?: string | undefined;
	readonly localityLbPolicies?: BackendServiceLocalityLoadBalancingPolicyConfig[] | undefined;
	readonly localityLbPolicy?: string | undefined;
	readonly logConfig?: BackendServiceLogConfig | undefined;
	readonly maxStreamDuration?: Duration | undefined;
	readonly name?: string | undefined;
	readonly network?: string | undefined;
	readonly outlierDetection?: OutlierDetection | undefined;
	readonly port?: number | undefined;
	readonly portName?: string | undefined;
	readonly protocol?: string | undefined;
	readonly region?: string | undefined;
	readonly securityPolicy?: string | undefined;
	readonly securitySettings?: SecuritySettings | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly serviceBindings?: string[] | undefined;
	readonly serviceLbPolicy?: string | undefined;
	readonly sessionAffinity?: string | undefined;
	readonly subsetting?: Subsetting | undefined;
	readonly timeoutSec?: number | undefined;
	readonly vpcNetworkScope?: string | undefined;
}
export interface BackendServiceCdnPolicy {
	readonly bypassCacheOnRequestHeaders?: BackendServiceCdnPolicyBypassCacheOnRequestHeader[] | undefined;
	readonly cacheKeyPolicy?: CacheKeyPolicy | undefined;
	readonly cacheMode?: string | undefined;
	readonly clientTtl?: number | undefined;
	readonly defaultTtl?: number | undefined;
	readonly maxTtl?: number | undefined;
	readonly negativeCaching?: boolean | undefined;
	readonly negativeCachingPolicy?: BackendServiceCdnPolicyNegativeCachingPolicy[] | undefined;
	readonly requestCoalescing?: boolean | undefined;
	readonly serveWhileStale?: number | undefined;
	readonly signedUrlCacheMaxAgeSec?: string | undefined;
	readonly signedUrlKeyNames?: string[] | undefined;
}
export interface BackendServiceCdnPolicyBypassCacheOnRequestHeader {
	readonly headerName?: string | undefined;
}
export interface BackendServiceCdnPolicyNegativeCachingPolicy {
	readonly code?: number | undefined;
	readonly ttl?: number | undefined;
}
export interface BackendServiceConnectionTrackingPolicy {
	readonly connectionPersistenceOnUnhealthyBackends?: string | undefined;
	readonly enableStrongAffinity?: boolean | undefined;
	readonly idleTimeoutSec?: number | undefined;
	readonly trackingMode?: string | undefined;
}
export interface BackendServiceFailoverPolicy {
	readonly disableConnectionDrainOnFailover?: boolean | undefined;
	readonly dropTrafficIfUnhealthy?: boolean | undefined;
	readonly failoverRatio?: number | undefined;
}
export interface BackendServiceIAP {
	readonly enabled?: boolean | undefined;
	readonly oauth2ClientId?: string | undefined;
	readonly oauth2ClientInfo?: BackendServiceIAPOAuth2ClientInfo | undefined;
	readonly oauth2ClientSecret?: string | undefined;
	readonly oauth2ClientSecretSha256?: string | undefined;
}
export interface BackendServiceIAPOAuth2ClientInfo {
	readonly applicationName?: string | undefined;
	readonly clientName?: string | undefined;
	readonly developerEmailAddress?: string | undefined;
}
export interface BackendServiceLocalityLoadBalancingPolicyConfig {
	readonly customPolicy?: BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy | undefined;
	readonly policy?: BackendServiceLocalityLoadBalancingPolicyConfigPolicy | undefined;
}
export interface BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy {
	readonly data?: string | undefined;
	readonly name?: string | undefined;
}
export interface BackendServiceLocalityLoadBalancingPolicyConfigPolicy {
	readonly name?: string | undefined;
}
export interface BackendServiceLogConfig {
	readonly enable?: boolean | undefined;
	readonly optional?: string | undefined;
	readonly optionalFields?: string[] | undefined;
	readonly optionalMode?: string | undefined;
	readonly sampleRate?: number | undefined;
}
export interface CacheKeyPolicy {
	readonly includeHost?: boolean | undefined;
	readonly includeHttpHeaders?: string[] | undefined;
	readonly includeNamedCookies?: string[] | undefined;
	readonly includeProtocol?: boolean | undefined;
	readonly includeQueryString?: boolean | undefined;
	readonly queryStringBlacklist?: string[] | undefined;
	readonly queryStringWhitelist?: string[] | undefined;
}
export interface CallCredentials {
	readonly callCredentialType?: string | undefined;
	readonly fromPlugin?: MetadataCredentialsFromPlugin | undefined;
}
export interface ChannelCredentials {
	readonly certificates?: TlsCertificatePaths | undefined;
	readonly channelCredentialType?: string | undefined;
}
export interface CircuitBreakers {
	readonly connectTimeout?: Duration | undefined;
	readonly maxConnections?: number | undefined;
	readonly maxPendingRequests?: number | undefined;
	readonly maxRequests?: number | undefined;
	readonly maxRequestsPerConnection?: number | undefined;
	readonly maxRetries?: number | undefined;
}
export interface ClientTlsSettings {
	readonly clientTlsContext?: TlsContext | undefined;
	readonly mode?: string | undefined;
	readonly sni?: string | undefined;
	readonly subjectAltNames?: string[] | undefined;
}
export interface ConnectionDraining {
	readonly drainingTimeoutSec?: number | undefined;
}
export interface ConsistentHashLoadBalancerSettings {
	readonly httpCookie?: ConsistentHashLoadBalancerSettingsHttpCookie | undefined;
	readonly httpHeaderName?: string | undefined;
	readonly minimumRingSize?: string | undefined;
}
export interface ConsistentHashLoadBalancerSettingsHttpCookie {
	readonly name?: string | undefined;
	readonly path?: string | undefined;
	readonly ttl?: Duration | undefined;
}
export interface Duration {
	readonly nanos?: number | undefined;
	readonly seconds?: string | undefined;
}
export interface GrpcServiceConfig {
	readonly callCredentials?: CallCredentials | undefined;
	readonly channelCredentials?: ChannelCredentials | undefined;
	readonly targetUri?: string | undefined;
}
export interface Jwt {
	readonly audiences?: string[] | undefined;
	readonly issuer?: string | undefined;
	readonly jwksPublicKeys?: string | undefined;
	readonly jwtHeaders?: JwtHeader[] | undefined;
	readonly jwtParams?: string[] | undefined;
}
export interface JwtHeader {
	readonly name?: string | undefined;
	readonly valuePrefix?: string | undefined;
}
export interface MetadataCredentialsFromPlugin {
	readonly name?: string | undefined;
	readonly structConfig?: string | undefined;
}
export interface MutualTls {
	readonly mode?: string | undefined;
}
export interface OriginAuthenticationMethod {
	readonly jwt?: Jwt | undefined;
}
export interface OutlierDetection {
	readonly baseEjectionTime?: Duration | undefined;
	readonly consecutiveErrors?: number | undefined;
	readonly consecutiveGatewayFailure?: number | undefined;
	readonly enforcingConsecutiveErrors?: number | undefined;
	readonly enforcingConsecutiveGatewayFailure?: number | undefined;
	readonly enforcingSuccessRate?: number | undefined;
	readonly interval?: Duration | undefined;
	readonly maxEjectionPercent?: number | undefined;
	readonly successRateMinimumHosts?: number | undefined;
	readonly successRateRequestVolume?: number | undefined;
	readonly successRateStdevFactor?: number | undefined;
}
export interface PeerAuthenticationMethod {
	readonly mtls?: MutualTls | undefined;
}
export interface Permission {
	readonly constraints?: PermissionConstraint[] | undefined;
	readonly hosts?: string[] | undefined;
	readonly methods?: string[] | undefined;
	readonly notHosts?: string[] | undefined;
	readonly notMethods?: string[] | undefined;
	readonly notPaths?: string[] | undefined;
	readonly notPorts?: string[] | undefined;
	readonly paths?: string[] | undefined;
	readonly ports?: string[] | undefined;
}
export interface PermissionConstraint {
	readonly key?: string | undefined;
	readonly values?: string[] | undefined;
}
export interface Principal {
	readonly condition?: string | undefined;
	readonly groups?: string[] | undefined;
	readonly ips?: string[] | undefined;
	readonly namespaces?: string[] | undefined;
	readonly notGroups?: string[] | undefined;
	readonly notIps?: string[] | undefined;
	readonly notNamespaces?: string[] | undefined;
	readonly notUsers?: string[] | undefined;
	readonly properties?: { [P in string]: string } | undefined;
	readonly users?: string[] | undefined;
}
export interface RbacPolicy {
	readonly name?: string | undefined;
	readonly permissions?: Permission[] | undefined;
	readonly principals?: Principal[] | undefined;
}
export interface SdsConfig {
	readonly grpcServiceConfig?: GrpcServiceConfig | undefined;
}
export interface SecuritySettings {
	readonly authentication?: string | undefined;
	readonly authenticationPolicy?: AuthenticationPolicy | undefined;
	readonly authorizationConfig?: AuthorizationConfig | undefined;
	readonly awsV4Authentication?: AWSV4Signature | undefined;
	readonly clientTlsPolicy?: string | undefined;
	readonly clientTlsSettings?: ClientTlsSettings | undefined;
	readonly subjectAltNames?: string[] | undefined;
}
export interface Subsetting {
	readonly policy?: string | undefined;
	readonly subsetSize?: number | undefined;
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
export default {};
