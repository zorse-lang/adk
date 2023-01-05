import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Snapshots extends GdmResource<SnapshotsComponentInputs> implements SnapshotsComponentOutputs {
	constructor(entity: ADKEntity, options: SnapshotsComponentInputs) {
		super(entity, options.name, "compute.v1.Snapshots", options);
	}
	public readonly architecture?: string;
	public readonly autoCreated?: boolean;
	public readonly creationSizeBytes?: string;
	public readonly creationTimestamp?: string;
	public readonly diskSizeGb?: string;
	public readonly downloadBytes?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly licenseCodes?: string[];
	public readonly licenses?: string[];
	public readonly satisfiesPzs?: boolean;
	public readonly selfLink?: string;
	public readonly sourceDiskId?: string;
	public readonly sourceSnapshotSchedulePolicy?: string;
	public readonly sourceSnapshotSchedulePolicyId?: string;
	public readonly status?: string;
	public readonly storageBytes?: string;
	public readonly storageBytesStatus?: string;
}
export interface SnapshotsComponentOutputs {
	readonly architecture?: string;
	readonly autoCreated?: boolean;
	readonly creationSizeBytes?: string;
	readonly creationTimestamp?: string;
	readonly diskSizeGb?: string;
	readonly downloadBytes?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly licenseCodes?: string[];
	readonly licenses?: string[];
	readonly satisfiesPzs?: boolean;
	readonly selfLink?: string;
	readonly sourceDiskId?: string;
	readonly sourceSnapshotSchedulePolicy?: string;
	readonly sourceSnapshotSchedulePolicyId?: string;
	readonly status?: string;
	readonly storageBytes?: string;
	readonly storageBytesStatus?: string;
}
export interface SnapshotsComponentInputs {
	readonly chainName?: string;
	readonly description?: string;
	readonly labelFingerprint?: string;
	readonly labels?: { [P in string]: string };
	readonly locationHint?: string;
	readonly name: string;
	readonly requestId?: string;
	readonly snapshotEncryptionKey?: CustomerEncryptionKey;
	readonly snapshotType?: string;
	readonly sourceDisk?: string;
	readonly sourceDiskEncryptionKey?: CustomerEncryptionKey;
	readonly storageLocations?: string[];
}
export interface CustomerEncryptionKey {
	readonly kmsKeyName?: string;
	readonly kmsKeyServiceAccount?: string;
	readonly rawKey?: string;
	readonly rsaEncryptedKey?: string;
	readonly sha256?: string;
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
	readonly id?: string;
	readonly kind?: string;
	readonly labelFingerprint?: string;
	readonly labels?: { [P in string]: string };
	readonly licenseCodes?: string[];
	readonly licenses?: string[];
	readonly locationHint?: string;
	readonly name?: string;
	readonly satisfiesPzs?: boolean;
	readonly selfLink?: string;
	readonly snapshotEncryptionKey?: CustomerEncryptionKey;
	readonly snapshotType?: string;
	readonly sourceDisk?: string;
	readonly sourceDiskEncryptionKey?: CustomerEncryptionKey;
	readonly sourceDiskId?: string;
	readonly sourceSnapshotSchedulePolicy?: string;
	readonly sourceSnapshotSchedulePolicyId?: string;
	readonly status?: string;
	readonly storageBytes?: string;
	readonly storageBytesStatus?: string;
	readonly storageLocations?: string[];
}
export default {
	Snapshots: Snapshots,
};
