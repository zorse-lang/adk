import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class BackendBuckets extends GdmResource<BackendBucketsComponentInputs> implements BackendBucketsComponentOutputs {
	constructor(entity: ADKEntity, options: BackendBucketsComponentInputs) {
		super(entity, options.name, "compute.v1.BackendBuckets", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly edgeSecurityPolicy?: string | undefined;
	public readonly id?: string | undefined;
	public readonly selfLink?: string | undefined;
}
export interface BackendBucketsComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly edgeSecurityPolicy?: string | undefined;
	readonly id?: string | undefined;
	readonly selfLink?: string | undefined;
}
export interface BackendBucketsComponentInputs {
	readonly bucketName?: string | undefined;
	readonly cdnPolicy?: BackendBucketCdnPolicy | undefined;
	readonly compressionMode?: string | undefined;
	readonly customResponseHeaders?: string[] | undefined;
	readonly description?: string | undefined;
	readonly enableCdn?: boolean | undefined;
	readonly kind?: string | undefined;
	readonly name: string;
	readonly requestId?: string | undefined;
	readonly type: string;
}
export interface BackendBucket {
	readonly bucketName?: string | undefined;
	readonly cdnPolicy?: BackendBucketCdnPolicy | undefined;
	readonly compressionMode?: string | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly customResponseHeaders?: string[] | undefined;
	readonly description?: string | undefined;
	readonly edgeSecurityPolicy?: string | undefined;
	readonly enableCdn?: boolean | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly selfLink?: string | undefined;
}
export interface BackendBucketCdnPolicy {
	readonly bypassCacheOnRequestHeaders?: BackendBucketCdnPolicyBypassCacheOnRequestHeader[] | undefined;
	readonly cacheKeyPolicy?: BackendBucketCdnPolicyCacheKeyPolicy | undefined;
	readonly cacheMode?: string | undefined;
	readonly clientTtl?: number | undefined;
	readonly defaultTtl?: number | undefined;
	readonly maxTtl?: number | undefined;
	readonly negativeCaching?: boolean | undefined;
	readonly negativeCachingPolicy?: BackendBucketCdnPolicyNegativeCachingPolicy[] | undefined;
	readonly requestCoalescing?: boolean | undefined;
	readonly serveWhileStale?: number | undefined;
	readonly signedUrlCacheMaxAgeSec?: string | undefined;
	readonly signedUrlKeyNames?: string[] | undefined;
}
export interface BackendBucketCdnPolicyBypassCacheOnRequestHeader {
	readonly headerName?: string | undefined;
}
export interface BackendBucketCdnPolicyCacheKeyPolicy {
	readonly includeHttpHeaders?: string[] | undefined;
	readonly queryStringWhitelist?: string[] | undefined;
}
export interface BackendBucketCdnPolicyNegativeCachingPolicy {
	readonly code?: number | undefined;
	readonly ttl?: number | undefined;
}
export default {
	BackendBuckets: BackendBuckets,
};
