import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Disks extends GdmResource<DisksComponentInputs> implements DisksComponentOutputs {
	constructor(entity: ADKEntity, options: DisksComponentInputs) {
		super(entity, options.name, "compute.alpha.Disks", options);
	}
	public readonly asyncSecondaryDisks?: { [P in string]: DiskAsyncReplicationList
	};
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly lastAttachTimestamp?: string;
	public readonly lastDetachTimestamp?: string;
	public readonly locked?: boolean;
	public readonly region?: string;
	public readonly resourceStatus?: DiskResourceStatus;
	public readonly satisfiesPzs?: boolean;
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
	public readonly sourceConsistencyGroupPolicy?: string;
	public readonly sourceConsistencyGroupPolicyId?: string;
	public readonly sourceDiskId?: string;
	public readonly sourceImageId?: string;
	public readonly sourceInstantSnapshotId?: string;
	public readonly sourceSnapshotId?: string;
	public readonly status?: string;
	public readonly users?: string[];
	public readonly zone?: string;
}
export interface DisksComponentOutputs {
	readonly asyncSecondaryDisks?: { [P in string]: DiskAsyncReplicationList };
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly lastAttachTimestamp?: string;
	readonly lastDetachTimestamp?: string;
	readonly locked?: boolean;
	readonly region?: string;
	readonly resourceStatus?: DiskResourceStatus;
	readonly satisfiesPzs?: boolean;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly sourceConsistencyGroupPolicy?: string;
	readonly sourceConsistencyGroupPolicyId?: string;
	readonly sourceDiskId?: string;
	readonly sourceImageId?: string;
	readonly sourceInstantSnapshotId?: string;
	readonly sourceSnapshotId?: string;
	readonly status?: string;
	readonly users?: string[];
	readonly zone?: string;
}
export interface DisksComponentInputs {
	readonly architecture?: string;
	readonly asyncPrimaryDisk?: DiskAsyncReplication;
	readonly description?: string;
	readonly diskEncryptionKey?: CustomerEncryptionKey;
	readonly eraseWindowsVssSignature?: boolean;
	readonly guestOsFeatures?: GuestOsFeature[];
	readonly interface?: string;
	readonly labelFingerprint?: string;
	readonly labels?: { [P in string]: string };
	readonly licenseCodes?: string[];
	readonly licenses?: string[];
	readonly locationHint?: string;
	readonly multiWriter?: boolean;
	readonly name: string;
	readonly options?: string;
	readonly params?: DiskParams;
	readonly physicalBlockSizeBytes?: string;
	readonly provisionedIops?: string;
	readonly provisionedThroughput?: string;
	readonly replicaZones?: string[];
	readonly requestId?: string;
	readonly resourcePolicies?: string[];
	readonly sizeGb?: string;
	readonly sourceDisk?: string;
	readonly sourceImage?: string;
	readonly sourceImageEncryptionKey?: CustomerEncryptionKey;
	readonly sourceInstantSnapshot?: string;
	readonly sourceSnapshot?: string;
	readonly sourceSnapshotEncryptionKey?: CustomerEncryptionKey;
	readonly sourceStorageObject?: string;
	readonly storageType?: string;
	readonly userLicenses?: string[];
}
export interface CustomerEncryptionKey {
	readonly kmsKeyName?: string;
	readonly kmsKeyServiceAccount?: string;
	readonly rawKey?: string;
	readonly rsaEncryptedKey?: string;
	readonly sha256?: string;
}
export interface Disk {
	readonly architecture?: string;
	readonly asyncPrimaryDisk?: DiskAsyncReplication;
	readonly asyncSecondaryDisks?: { [P in string]: DiskAsyncReplicationList };
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly diskEncryptionKey?: CustomerEncryptionKey;
	readonly eraseWindowsVssSignature?: boolean;
	readonly guestOsFeatures?: GuestOsFeature[];
	readonly id?: string;
	readonly interface?: string;
	readonly kind?: string;
	readonly labelFingerprint?: string;
	readonly labels?: { [P in string]: string };
	readonly lastAttachTimestamp?: string;
	readonly lastDetachTimestamp?: string;
	readonly licenseCodes?: string[];
	readonly licenses?: string[];
	readonly locationHint?: string;
	readonly locked?: boolean;
	readonly multiWriter?: boolean;
	readonly name?: string;
	readonly options?: string;
	readonly params?: DiskParams;
	readonly physicalBlockSizeBytes?: string;
	readonly provisionedIops?: string;
	readonly provisionedThroughput?: string;
	readonly region?: string;
	readonly replicaZones?: string[];
	readonly resourcePolicies?: string[];
	readonly resourceStatus?: DiskResourceStatus;
	readonly satisfiesPzs?: boolean;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly sizeGb?: string;
	readonly sourceConsistencyGroupPolicy?: string;
	readonly sourceConsistencyGroupPolicyId?: string;
	readonly sourceDisk?: string;
	readonly sourceDiskId?: string;
	readonly sourceImage?: string;
	readonly sourceImageEncryptionKey?: CustomerEncryptionKey;
	readonly sourceImageId?: string;
	readonly sourceInstantSnapshot?: string;
	readonly sourceInstantSnapshotId?: string;
	readonly sourceSnapshot?: string;
	readonly sourceSnapshotEncryptionKey?: CustomerEncryptionKey;
	readonly sourceSnapshotId?: string;
	readonly sourceStorageObject?: string;
	readonly status?: string;
	readonly storageType?: string;
	readonly type?: string;
	readonly userLicenses?: string[];
	readonly users?: string[];
	readonly zone?: string;
}
export interface DiskAsyncReplication {
	readonly disk?: string;
	readonly diskId?: string;
}
export interface DiskAsyncReplicationList {
	readonly asyncReplicationDisk?: DiskAsyncReplication;
}
export interface DiskParams {
	readonly resourceManagerTags?: { [P in string]: string };
}
export interface DiskResourceStatus {
	readonly asyncPrimaryDisk?: DiskResourceStatusAsyncReplicationStatus;
	readonly asyncSecondaryDisks?: { [P in string]: DiskResourceStatusAsyncReplicationStatus };
}
export interface DiskResourceStatusAsyncReplicationStatus {
	readonly state?: string;
}
export interface GuestOsFeature {
	readonly type?: string;
}
export default {
	Disks: Disks,
};
