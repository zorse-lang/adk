import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class BackendBuckets extends GdmResource<BackendBucketsComponentInputs> implements BackendBucketsComponentOutputs {
	constructor(entity: ADKEntity, options: BackendBucketsComponentInputs) {
		super(entity, options.name, "compute.v1.BackendBuckets", options);
	}
	public readonly creationTimestamp?: string;
	public readonly edgeSecurityPolicy?: string;
	public readonly id?: string;
	public readonly selfLink?: string;
}
export interface BackendBucketsComponentOutputs {
	readonly creationTimestamp?: string;
	readonly edgeSecurityPolicy?: string;
	readonly id?: string;
	readonly selfLink?: string;
}
export interface BackendBucketsComponentInputs {
	readonly bucketName?: string;
	readonly cdnPolicy?: BackendBucketCdnPolicy;
	readonly compressionMode?: string;
	readonly customResponseHeaders?: string[];
	readonly description?: string;
	readonly enableCdn?: boolean;
	readonly kind?: string;
	readonly name: string;
	readonly requestId?: string;
}
export interface BackendBucket {
	readonly bucketName?: string;
	readonly cdnPolicy?: BackendBucketCdnPolicy;
	readonly compressionMode?: string;
	readonly creationTimestamp?: string;
	readonly customResponseHeaders?: string[];
	readonly description?: string;
	readonly edgeSecurityPolicy?: string;
	readonly enableCdn?: boolean;
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly selfLink?: string;
}
export interface BackendBucketCdnPolicy {
	readonly bypassCacheOnRequestHeaders?: BackendBucketCdnPolicyBypassCacheOnRequestHeader[];
	readonly cacheKeyPolicy?: BackendBucketCdnPolicyCacheKeyPolicy;
	readonly cacheMode?: string;
	readonly clientTtl?: number;
	readonly defaultTtl?: number;
	readonly maxTtl?: number;
	readonly negativeCaching?: boolean;
	readonly negativeCachingPolicy?: BackendBucketCdnPolicyNegativeCachingPolicy[];
	readonly requestCoalescing?: boolean;
	readonly serveWhileStale?: number;
	readonly signedUrlCacheMaxAgeSec?: string;
	readonly signedUrlKeyNames?: string[];
}
export interface BackendBucketCdnPolicyBypassCacheOnRequestHeader {
	readonly headerName?: string;
}
export interface BackendBucketCdnPolicyCacheKeyPolicy {
	readonly includeHttpHeaders?: string[];
	readonly queryStringWhitelist?: string[];
}
export interface BackendBucketCdnPolicyNegativeCachingPolicy {
	readonly code?: number;
	readonly ttl?: number;
}
export default {
	BackendBuckets: BackendBuckets,
};
