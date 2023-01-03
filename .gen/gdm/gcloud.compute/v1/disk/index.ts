import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Disk extends GdmResource<DiskComponentInputs> implements DiskComponentOutputs {
	constructor(entity: ADKEntity, options: DiskComponentInputs) {
		super(entity, options.name, "compute.v1.disk", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly lastAttachTimestamp?: string | undefined;
	public readonly lastDetachTimestamp?: string | undefined;
	public readonly region?: string | undefined;
	public readonly satisfiesPzs?: boolean | undefined;
	public readonly selfLink?: string | undefined;
	public readonly sourceDiskId?: string | undefined;
	public readonly sourceImageId?: string | undefined;
	public readonly sourceSnapshotId?: string | undefined;
	public readonly status?: string | undefined;
	public readonly users?: string[] | undefined;
	public readonly zone?: string | undefined;
}
export interface DiskComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly lastAttachTimestamp?: string | undefined;
	readonly lastDetachTimestamp?: string | undefined;
	readonly region?: string | undefined;
	readonly satisfiesPzs?: boolean | undefined;
	readonly selfLink?: string | undefined;
	readonly sourceDiskId?: string | undefined;
	readonly sourceImageId?: string | undefined;
	readonly sourceSnapshotId?: string | undefined;
	readonly status?: string | undefined;
	readonly users?: string[] | undefined;
	readonly zone?: string | undefined;
}
export interface DiskComponentInputs {
	readonly architecture?: string | undefined;
	readonly description?: string | undefined;
	readonly diskEncryptionKey?: CustomerEncryptionKey | undefined;
	readonly guestOsFeatures?: GuestOsFeature[] | undefined;
	readonly labelFingerprint?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly licenseCodes?: string[] | undefined;
	readonly licenses?: string[] | undefined;
	readonly locationHint?: string | undefined;
	readonly name: string;
	readonly options?: string | undefined;
	readonly params?: DiskParams | undefined;
	readonly physicalBlockSizeBytes?: string | undefined;
	readonly provisionedIops?: string | undefined;
	readonly replicaZones?: string[] | undefined;
	readonly resourcePolicies?: string[] | undefined;
	readonly sizeGb?: string | undefined;
	readonly sourceDisk?: string | undefined;
	readonly sourceImage?: string | undefined;
	readonly sourceImageEncryptionKey?: CustomerEncryptionKey | undefined;
	readonly sourceSnapshot?: string | undefined;
	readonly sourceSnapshotEncryptionKey?: CustomerEncryptionKey | undefined;
	readonly sourceStorageObject?: string | undefined;
	readonly type: string;
}
export interface CustomerEncryptionKey {
	readonly kmsKeyName?: string | undefined;
	readonly kmsKeyServiceAccount?: string | undefined;
	readonly rawKey?: string | undefined;
	readonly rsaEncryptedKey?: string | undefined;
	readonly sha256?: string | undefined;
}
export interface DiskParams {
	readonly resourceManagerTags?: { [P in string]: string } | undefined;
}
export interface GuestOsFeature {
	readonly type?: string | undefined;
}
export default {
	Disk: Disk,
};
