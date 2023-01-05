import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

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
	readonly serviceBindings?: string[];
	readonly sessionAffinity?: string;
	readonly subsetting?: Subsetting;
	readonly timeoutSec?: number;
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
	readonly oauth2ClientSecret?: string;
	readonly oauth2ClientSecretSha256?: string;
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
export interface CircuitBreakers {
	readonly connectTimeout?: Duration;
	readonly maxConnections?: number;
	readonly maxPendingRequests?: number;
	readonly maxRequests?: number;
	readonly maxRequestsPerConnection?: number;
	readonly maxRetries?: number;
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
export interface SecuritySettings {
	readonly authentication?: string;
	readonly awsV4Authentication?: AWSV4Signature;
	readonly clientTlsPolicy?: string;
	readonly subjectAltNames?: string[];
}
export interface Subsetting {
	readonly policy?: string;
	readonly subsetSize?: number;
}
export default {};
