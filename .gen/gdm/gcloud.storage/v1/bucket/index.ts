import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Bucket extends GdmResource<BucketComponentInputs> implements BucketComponentOutputs {
	constructor(entity: ADKEntity, options: BucketComponentInputs) {
		super(entity, options.name, "storage.v1.bucket", options);
	}
}
export interface BucketComponentOutputs {}
export interface BucketComponentInputs {
	readonly acl?: BucketAccessControl[] | undefined;
	readonly autoclass?: { enabled?: boolean; toggleTime?: string } | undefined;
	readonly billing?: { requesterPays?: boolean } | undefined;
	readonly cors?:
		| Array<{ maxAgeSeconds?: number; method?: string[]; origin?: string[]; responseHeader?: string[] }>
		| undefined;
	readonly customPlacementConfig?: { dataLocations?: string[] } | undefined;
	readonly defaultEventBasedHold?: boolean | undefined;
	readonly defaultObjectAcl?: ObjectAccessControl[] | undefined;
	readonly encryption?: { defaultKmsKeyName?: string } | undefined;
	readonly etag?: string | undefined;
	readonly iamConfiguration?:
		| {
				bucketPolicyOnly?: { enabled?: boolean; lockedTime?: string };
				publicAccessPrevention?: string;
				uniformBucketLevelAccess?: { enabled?: boolean; lockedTime?: string };
		  }
		| undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly lifecycle?:
		| {
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
		  }
		| undefined;
	readonly location?: string | undefined;
	readonly locationType?: string | undefined;
	readonly logging?: { logBucket?: string; logObjectPrefix?: string } | undefined;
	readonly metageneration?: string | undefined;
	readonly name: string;
	readonly owner?: { entity?: string; entityId?: string } | undefined;
	readonly projectNumber?: string | undefined;
	readonly retentionPolicy?: { effectiveTime?: string; isLocked?: boolean; retentionPeriod?: string } | undefined;
	readonly rpo?: string | undefined;
	readonly satisfiesPZS?: boolean | undefined;
	readonly selfLink?: string | undefined;
	readonly storageClass?: string | undefined;
	readonly timeCreated?: string | undefined;
	readonly updated?: string | undefined;
	readonly versioning?: { enabled?: boolean } | undefined;
	readonly website?: { mainPageSuffix?: string; notFoundPage?: string } | undefined;
	readonly type: string;
}
export interface BucketAccessControl {
	readonly bucket?: string | undefined;
	readonly domain?: string | undefined;
	readonly email?: string | undefined;
	readonly entity?: string | undefined;
	readonly entityId?: string | undefined;
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly projectTeam?: { projectNumber?: string; team?: string } | undefined;
	readonly role?: string | undefined;
	readonly selfLink?: string | undefined;
}
export interface ObjectAccessControl {
	readonly bucket?: string | undefined;
	readonly domain?: string | undefined;
	readonly email?: string | undefined;
	readonly entity?: string | undefined;
	readonly entityId?: string | undefined;
	readonly etag?: string | undefined;
	readonly generation?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly object?: string | undefined;
	readonly projectTeam?: { projectNumber?: string; team?: string } | undefined;
	readonly role?: string | undefined;
	readonly selfLink?: string | undefined;
}
export default {
	Bucket: Bucket,
};
