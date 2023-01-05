import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Buckets extends GdmResource<BucketsComponentInputs> implements BucketsComponentOutputs {
	constructor(entity: ADKEntity, options: BucketsComponentInputs) {
		super(entity, options.name, "storage.v1.Buckets", options);
	}
}
export interface BucketsComponentOutputs {}
export interface BucketsComponentInputs {
	readonly acl?: BucketAccessControl[];
	readonly autoclass?: { enabled?: boolean; toggleTime?: string };
	readonly billing?: { requesterPays?: boolean };
	readonly cors?: Array<{ maxAgeSeconds?: number; method?: string[]; origin?: string[]; responseHeader?: string[] }>;
	readonly customPlacementConfig?: { dataLocations?: string[] };
	readonly defaultEventBasedHold?: boolean;
	readonly defaultObjectAcl?: ObjectAccessControl[];
	readonly encryption?: { defaultKmsKeyName?: string };
	readonly etag?: string;
	readonly iamConfiguration?: {
		bucketPolicyOnly?: { enabled?: boolean; lockedTime?: string };
		publicAccessPrevention?: string;
		uniformBucketLevelAccess?: { enabled?: boolean; lockedTime?: string };
	};
	readonly id?: string;
	readonly kind?: string;
	readonly labels?: { [P in string]: string };
	readonly lifecycle?: {
		rule?: Array<{
			action?: { storageClass?: string; type?: string };
			condition?: {
				age?: number;
				createdBefore?: string;
				customTimeBefore?: string;
				daysSinceCustomTime?: number;
				daysSinceNoncurrentTime?: number;
				isLive?: boolean;
				matchesPattern?: string;
				matchesPrefix?: string[];
				matchesStorageClass?: string[];
				matchesSuffix?: string[];
				noncurrentTimeBefore?: string;
				numNewerVersions?: number;
			};
		}>;
	};
	readonly location?: string;
	readonly locationType?: string;
	readonly logging?: { logBucket?: string; logObjectPrefix?: string };
	readonly metageneration?: string;
	readonly name: string;
	readonly owner?: { entity?: string; entityId?: string };
	readonly predefinedAcl?: string;
	readonly predefinedDefaultObjectAcl?: string;
	readonly projection?: string;
	readonly projectNumber?: string;
	readonly retentionPolicy?: { effectiveTime?: string; isLocked?: boolean; retentionPeriod?: string };
	readonly rpo?: string;
	readonly satisfiesPZS?: boolean;
	readonly selfLink?: string;
	readonly storageClass?: string;
	readonly timeCreated?: string;
	readonly updated?: string;
	readonly userProject?: string;
	readonly versioning?: { enabled?: boolean };
	readonly website?: { mainPageSuffix?: string; notFoundPage?: string };
}
export interface Bucket {
	readonly acl?: BucketAccessControl[];
	readonly autoclass?: { enabled?: boolean; toggleTime?: string };
	readonly billing?: { requesterPays?: boolean };
	readonly cors?: Array<{ maxAgeSeconds?: number; method?: string[]; origin?: string[]; responseHeader?: string[] }>;
	readonly customPlacementConfig?: { dataLocations?: string[] };
	readonly defaultEventBasedHold?: boolean;
	readonly defaultObjectAcl?: ObjectAccessControl[];
	readonly encryption?: { defaultKmsKeyName?: string };
	readonly etag?: string;
	readonly iamConfiguration?: {
		bucketPolicyOnly?: { enabled?: boolean; lockedTime?: string };
		publicAccessPrevention?: string;
		uniformBucketLevelAccess?: { enabled?: boolean; lockedTime?: string };
	};
	readonly id?: string;
	readonly kind?: string;
	readonly labels?: { [P in string]: string };
	readonly lifecycle?: {
		rule?: Array<{
			action?: { storageClass?: string; type?: string };
			condition?: {
				age?: number;
				createdBefore?: string;
				customTimeBefore?: string;
				daysSinceCustomTime?: number;
				daysSinceNoncurrentTime?: number;
				isLive?: boolean;
				matchesPattern?: string;
				matchesPrefix?: string[];
				matchesStorageClass?: string[];
				matchesSuffix?: string[];
				noncurrentTimeBefore?: string;
				numNewerVersions?: number;
			};
		}>;
	};
	readonly location?: string;
	readonly locationType?: string;
	readonly logging?: { logBucket?: string; logObjectPrefix?: string };
	readonly metageneration?: string;
	readonly name?: string;
	readonly owner?: { entity?: string; entityId?: string };
	readonly projectNumber?: string;
	readonly retentionPolicy?: { effectiveTime?: string; isLocked?: boolean; retentionPeriod?: string };
	readonly rpo?: string;
	readonly satisfiesPZS?: boolean;
	readonly selfLink?: string;
	readonly storageClass?: string;
	readonly timeCreated?: string;
	readonly updated?: string;
	readonly versioning?: { enabled?: boolean };
	readonly website?: { mainPageSuffix?: string; notFoundPage?: string };
}
export interface BucketAccessControl {
	readonly bucket?: string;
	readonly domain?: string;
	readonly email?: string;
	readonly entity?: string;
	readonly entityId?: string;
	readonly etag?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly projectTeam?: { projectNumber?: string; team?: string };
	readonly role?: string;
	readonly selfLink?: string;
}
export interface ObjectAccessControl {
	readonly bucket?: string;
	readonly domain?: string;
	readonly email?: string;
	readonly entity?: string;
	readonly entityId?: string;
	readonly etag?: string;
	readonly generation?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly object?: string;
	readonly projectTeam?: { projectNumber?: string; team?: string };
	readonly role?: string;
	readonly selfLink?: string;
}
export default {
	Buckets: Buckets,
};
