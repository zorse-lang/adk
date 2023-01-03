import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Snapshots extends GdmResource<SnapshotsComponentInputs> implements SnapshotsComponentOutputs {
	constructor(entity: ADKEntity, options: SnapshotsComponentInputs) {
		super(entity, options.name, "compute.beta.Snapshots", options);
	}
	public readonly architecture?: string | undefined;
	public readonly autoCreated?: boolean | undefined;
	public readonly creationSizeBytes?: string | undefined;
	public readonly creationTimestamp?: string | undefined;
	public readonly diskSizeGb?: string | undefined;
	public readonly downloadBytes?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly licenseCodes?: string[] | undefined;
	public readonly licenses?: string[] | undefined;
	public readonly satisfiesPzs?: boolean | undefined;
	public readonly selfLink?: string | undefined;
	public readonly sourceDiskId?: string | undefined;
	public readonly sourceSnapshotSchedulePolicy?: string | undefined;
	public readonly sourceSnapshotSchedulePolicyId?: string | undefined;
	public readonly status?: string | undefined;
	public readonly storageBytes?: string | undefined;
	public readonly storageBytesStatus?: string | undefined;
	public readonly userLicenses?: string[] | undefined;
}
export interface SnapshotsComponentOutputs {
	readonly architecture?: string | undefined;
	readonly autoCreated?: boolean | undefined;
	readonly creationSizeBytes?: string | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly diskSizeGb?: string | undefined;
	readonly downloadBytes?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly licenseCodes?: string[] | undefined;
	readonly licenses?: string[] | undefined;
	readonly satisfiesPzs?: boolean | undefined;
	readonly selfLink?: string | undefined;
	readonly sourceDiskId?: string | undefined;
	readonly sourceSnapshotSchedulePolicy?: string | undefined;
	readonly sourceSnapshotSchedulePolicyId?: string | undefined;
	readonly status?: string | undefined;
	readonly storageBytes?: string | undefined;
	readonly storageBytesStatus?: string | undefined;
	readonly userLicenses?: string[] | undefined;
}
export interface SnapshotsComponentInputs {
	readonly chainName?: string | undefined;
	readonly description?: string | undefined;
	readonly guestFlush?: boolean | undefined;
	readonly labelFingerprint?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly locationHint?: string | undefined;
	readonly name: string;
	readonly requestId?: string | undefined;
	readonly snapshotEncryptionKey?: CustomerEncryptionKey | undefined;
	readonly snapshotType?: string | undefined;
	readonly sourceDisk?: string | undefined;
	readonly sourceDiskEncryptionKey?: CustomerEncryptionKey | undefined;
	readonly storageLocations?: string[] | undefined;
	readonly type: string;
}
export interface CustomerEncryptionKey {
	readonly kmsKeyName?: string | undefined;
	readonly kmsKeyServiceAccount?: string | undefined;
	readonly rawKey?: string | undefined;
	readonly rsaEncryptedKey?: string | undefined;
	readonly sha256?: string | undefined;
}
export interface Snapshot {
	readonly architecture?: string | undefined;
	readonly autoCreated?: boolean | undefined;
	readonly chainName?: string | undefined;
	readonly creationSizeBytes?: string | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly diskSizeGb?: string | undefined;
	readonly downloadBytes?: string | undefined;
	readonly guestFlush?: boolean | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly labelFingerprint?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly licenseCodes?: string[] | undefined;
	readonly licenses?: string[] | undefined;
	readonly locationHint?: string | undefined;
	readonly name?: string | undefined;
	readonly satisfiesPzs?: boolean | undefined;
	readonly selfLink?: string | undefined;
	readonly snapshotEncryptionKey?: CustomerEncryptionKey | undefined;
	readonly snapshotType?: string | undefined;
	readonly sourceDisk?: string | undefined;
	readonly sourceDiskEncryptionKey?: CustomerEncryptionKey | undefined;
	readonly sourceDiskId?: string | undefined;
	readonly sourceSnapshotSchedulePolicy?: string | undefined;
	readonly sourceSnapshotSchedulePolicyId?: string | undefined;
	readonly status?: string | undefined;
	readonly storageBytes?: string | undefined;
	readonly storageBytesStatus?: string | undefined;
	readonly storageLocations?: string[] | undefined;
	readonly userLicenses?: string[] | undefined;
}
export default {
	Snapshots: Snapshots,
};
