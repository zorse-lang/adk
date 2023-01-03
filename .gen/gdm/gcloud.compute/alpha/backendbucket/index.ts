import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class BackendBucket extends GdmResource<BackendBucketComponentInputs> implements BackendBucketComponentOutputs {
	constructor(entity: ADKEntity, options: BackendBucketComponentInputs) {
		super(entity, options.name, "compute.alpha.backendBucket", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly edgeSecurityPolicy?: string | undefined;
	public readonly id?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly selfLinkWithId?: string | undefined;
}
export interface BackendBucketComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly edgeSecurityPolicy?: string | undefined;
	readonly id?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
}
export interface BackendBucketComponentInputs {
	readonly bucketName?: string | undefined;
	readonly cdnPolicy?: BackendBucketCdnPolicy | undefined;
	readonly compressionMode?: string | undefined;
	readonly customResponseHeaders?: string[] | undefined;
	readonly description?: string | undefined;
	readonly enableCdn?: boolean | undefined;
	readonly kind?: string | undefined;
	readonly name: string;
	readonly type: string;
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
	BackendBucket: BackendBucket,
};
