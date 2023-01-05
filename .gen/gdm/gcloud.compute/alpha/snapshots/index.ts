import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Snapshots extends GdmResource<SnapshotsComponentInputs> implements SnapshotsComponentOutputs {
	constructor(entity: ADKEntity, options: SnapshotsComponentInputs) {
		super(entity, options.name, "compute.alpha.Snapshots", options);
	}
	public readonly architecture?: string;
	public readonly autoCreated?: boolean;
	public readonly creationSizeBytes?: string;
	public readonly creationTimestamp?: string;
	public readonly diskSizeGb?: string;
	public readonly downloadBytes?: string;
	public readonly guestOsFeatures?: GuestOsFeature[];
	public readonly id?: string;
	public readonly kind?: string;
	public readonly licenseCodes?: string[];
	public readonly licenses?: string[];
	public readonly satisfiesPzs?: boolean;
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
	public readonly sourceDiskId?: string;
	public readonly sourceInstantSnapshotId?: string;
	public readonly sourceSnapshotSchedulePolicy?: string;
	public readonly sourceSnapshotSchedulePolicyId?: string;
	public readonly status?: string;
	public readonly storageBytes?: string;
	public readonly storageBytesStatus?: string;
	public readonly userLicenses?: string[];
}
export interface SnapshotsComponentOutputs {
	readonly architecture?: string;
	readonly autoCreated?: boolean;
	readonly creationSizeBytes?: string;
	readonly creationTimestamp?: string;
	readonly diskSizeGb?: string;
	readonly downloadBytes?: string;
	readonly guestOsFeatures?: GuestOsFeature[];
	readonly id?: string;
	readonly kind?: string;
	readonly licenseCodes?: string[];
	readonly licenses?: string[];
	readonly satisfiesPzs?: boolean;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly sourceDiskId?: string;
	readonly sourceInstantSnapshotId?: string;
	readonly sourceSnapshotSchedulePolicy?: string;
	readonly sourceSnapshotSchedulePolicyId?: string;
	readonly status?: string;
	readonly storageBytes?: string;
	readonly storageBytesStatus?: string;
	readonly userLicenses?: string[];
}
export interface SnapshotsComponentInputs {
	readonly chainName?: string;
	readonly description?: string;
	readonly guestFlush?: boolean;
	readonly labelFingerprint?: string;
	readonly labels?: { [P in string]: string };
	readonly locationHint?: string;
	readonly maxRetentionDays?: number;
	readonly name: string;
	readonly requestId?: string;
	readonly snapshotEncryptionKey?: CustomerEncryptionKey;
	readonly snapshotType?: string;
	readonly sourceDisk?: string;
	readonly sourceDiskEncryptionKey?: CustomerEncryptionKey;
	readonly sourceInstantSnapshot?: string;
	readonly storageLocations?: string[];
}
export interface CustomerEncryptionKey {
	readonly kmsKeyName?: string;
	readonly kmsKeyServiceAccount?: string;
	readonly rawKey?: string;
	readonly rsaEncryptedKey?: string;
	readonly sha256?: string;
}
export interface GuestOsFeature {
	readonly type?: string;
}
export interface Snapshot {
	readonly architecture?: string;
	readonly autoCreated?: boolean;
	readonly chainName?: string;
	readonly creationSizeBytes?: string;
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly diskSizeGb?: string;
	readonly downloadBytes?: string;
	readonly guestFlush?: boolean;
	readonly guestOsFeatures?: GuestOsFeature[];
	readonly id?: string;
	readonly kind?: string;
	readonly labelFingerprint?: string;
	readonly labels?: { [P in string]: string };
	readonly licenseCodes?: string[];
	readonly licenses?: string[];
	readonly locationHint?: string;
	readonly maxRetentionDays?: number;
	readonly name?: string;
	readonly satisfiesPzs?: boolean;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly snapshotEncryptionKey?: CustomerEncryptionKey;
	readonly snapshotType?: string;
	readonly sourceDisk?: string;
	readonly sourceDiskEncryptionKey?: CustomerEncryptionKey;
	readonly sourceDiskId?: string;
	readonly sourceInstantSnapshot?: string;
	readonly sourceInstantSnapshotId?: string;
	readonly sourceSnapshotSchedulePolicy?: string;
	readonly sourceSnapshotSchedulePolicyId?: string;
	readonly status?: string;
	readonly storageBytes?: string;
	readonly storageBytesStatus?: string;
	readonly storageLocations?: string[];
	readonly userLicenses?: string[];
}
export default {
	Snapshots: Snapshots,
};
