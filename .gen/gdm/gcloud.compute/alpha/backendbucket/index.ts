import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class BackendBucket extends GdmResource<BackendBucketComponentInputs> implements BackendBucketComponentOutputs {
	constructor(entity: ADKEntity, options: BackendBucketComponentInputs) {
		super(entity, options.name, "compute.alpha.backendBucket", options);
	}
	public readonly creationTimestamp?: string;
	public readonly edgeSecurityPolicy?: string;
	public readonly id?: string;
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
}
export interface BackendBucketComponentOutputs {
	readonly creationTimestamp?: string;
	readonly edgeSecurityPolicy?: string;
	readonly id?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
}
export interface BackendBucketComponentInputs {
	readonly bucketName?: string;
	readonly cdnPolicy?: BackendBucketCdnPolicy;
	readonly compressionMode?: string;
	readonly customResponseHeaders?: string[];
	readonly description?: string;
	readonly enableCdn?: boolean;
	readonly kind?: string;
	readonly name: string;
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
	BackendBucket: BackendBucket,
};
