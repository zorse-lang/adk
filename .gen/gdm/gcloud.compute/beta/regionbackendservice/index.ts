import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

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
	readonly serviceBindings?: string[] | undefined;
	readonly sessionAffinity?: string | undefined;
	readonly subsetting?: Subsetting | undefined;
	readonly timeoutSec?: number | undefined;
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
	readonly oauth2ClientSecret?: string | undefined;
	readonly oauth2ClientSecretSha256?: string | undefined;
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
export interface CircuitBreakers {
	readonly connectTimeout?: Duration | undefined;
	readonly maxConnections?: number | undefined;
	readonly maxPendingRequests?: number | undefined;
	readonly maxRequests?: number | undefined;
	readonly maxRequestsPerConnection?: number | undefined;
	readonly maxRetries?: number | undefined;
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
export interface SecuritySettings {
	readonly authentication?: string | undefined;
	readonly awsV4Authentication?: AWSV4Signature | undefined;
	readonly clientTlsPolicy?: string | undefined;
	readonly subjectAltNames?: string[] | undefined;
}
export interface Subsetting {
	readonly policy?: string | undefined;
	readonly subsetSize?: number | undefined;
}
export default {};
