import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class RegionDisks extends GdmResource<RegionDisksComponentInputs> implements RegionDisksComponentOutputs {
	constructor(entity: ADKEntity, options: RegionDisksComponentInputs) {
		super(entity, options.name, "compute.beta.RegionDisks", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly lastAttachTimestamp?: string | undefined;
	public readonly lastDetachTimestamp?: string | undefined;
	public readonly locked?: boolean | undefined;
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
export interface RegionDisksComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly lastAttachTimestamp?: string | undefined;
	readonly lastDetachTimestamp?: string | undefined;
	readonly locked?: boolean | undefined;
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
export interface RegionDisksComponentInputs {
	readonly architecture?: string | undefined;
	readonly description?: string | undefined;
	readonly diskEncryptionKey?: CustomerEncryptionKey | undefined;
	readonly eraseWindowsVssSignature?: boolean | undefined;
	readonly guestOsFeatures?: GuestOsFeature[] | undefined;
	readonly interface?: string | undefined;
	readonly labelFingerprint?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly licenseCodes?: string[] | undefined;
	readonly licenses?: string[] | undefined;
	readonly locationHint?: string | undefined;
	readonly multiWriter?: boolean | undefined;
	readonly name: string;
	readonly options?: string | undefined;
	readonly params?: DiskParams | undefined;
	readonly physicalBlockSizeBytes?: string | undefined;
	readonly provisionedIops?: string | undefined;
	readonly replicaZones?: string[] | undefined;
	readonly requestId?: string | undefined;
	readonly resourcePolicies?: string[] | undefined;
	readonly sizeGb?: string | undefined;
	readonly sourceDisk?: string | undefined;
	readonly sourceImage?: string | undefined;
	readonly sourceImageEncryptionKey?: CustomerEncryptionKey | undefined;
	readonly sourceSnapshot?: string | undefined;
	readonly sourceSnapshotEncryptionKey?: CustomerEncryptionKey | undefined;
	readonly sourceStorageObject?: string | undefined;
	readonly storageType?: string | undefined;
	readonly type: string;
	readonly userLicenses?: string[] | undefined;
}
export interface CustomerEncryptionKey {
	readonly kmsKeyName?: string | undefined;
	readonly kmsKeyServiceAccount?: string | undefined;
	readonly rawKey?: string | undefined;
	readonly rsaEncryptedKey?: string | undefined;
	readonly sha256?: string | undefined;
}
export interface Disk {
	readonly architecture?: string | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly diskEncryptionKey?: CustomerEncryptionKey | undefined;
	readonly eraseWindowsVssSignature?: boolean | undefined;
	readonly guestOsFeatures?: GuestOsFeature[] | undefined;
	readonly id?: string | undefined;
	readonly interface?: string | undefined;
	readonly kind?: string | undefined;
	readonly labelFingerprint?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly lastAttachTimestamp?: string | undefined;
	readonly lastDetachTimestamp?: string | undefined;
	readonly licenseCodes?: string[] | undefined;
	readonly licenses?: string[] | undefined;
	readonly locationHint?: string | undefined;
	readonly locked?: boolean | undefined;
	readonly multiWriter?: boolean | undefined;
	readonly name?: string | undefined;
	readonly options?: string | undefined;
	readonly params?: DiskParams | undefined;
	readonly physicalBlockSizeBytes?: string | undefined;
	readonly provisionedIops?: string | undefined;
	readonly region?: string | undefined;
	readonly replicaZones?: string[] | undefined;
	readonly resourcePolicies?: string[] | undefined;
	readonly satisfiesPzs?: boolean | undefined;
	readonly selfLink?: string | undefined;
	readonly sizeGb?: string | undefined;
	readonly sourceDisk?: string | undefined;
	readonly sourceDiskId?: string | undefined;
	readonly sourceImage?: string | undefined;
	readonly sourceImageEncryptionKey?: CustomerEncryptionKey | undefined;
	readonly sourceImageId?: string | undefined;
	readonly sourceSnapshot?: string | undefined;
	readonly sourceSnapshotEncryptionKey?: CustomerEncryptionKey | undefined;
	readonly sourceSnapshotId?: string | undefined;
	readonly sourceStorageObject?: string | undefined;
	readonly status?: string | undefined;
	readonly storageType?: string | undefined;
	readonly type?: string | undefined;
	readonly userLicenses?: string[] | undefined;
	readonly users?: string[] | undefined;
	readonly zone?: string | undefined;
}
export interface DiskParams {
	readonly resourceManagerTags?: { [P in string]: string } | undefined;
}
export interface GuestOsFeature {
	readonly type?: string | undefined;
}
export default {
	RegionDisks: RegionDisks,
};
