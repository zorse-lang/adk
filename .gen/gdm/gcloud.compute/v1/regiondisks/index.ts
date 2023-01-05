import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class RegionDisks extends GdmResource<RegionDisksComponentInputs> implements RegionDisksComponentOutputs {
	constructor(entity: ADKEntity, options: RegionDisksComponentInputs) {
		super(entity, options.name, "compute.v1.RegionDisks", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly lastAttachTimestamp?: string;
	public readonly lastDetachTimestamp?: string;
	public readonly region?: string;
	public readonly satisfiesPzs?: boolean;
	public readonly selfLink?: string;
	public readonly sourceDiskId?: string;
	public readonly sourceImageId?: string;
	public readonly sourceSnapshotId?: string;
	public readonly status?: string;
	public readonly users?: string[];
	public readonly zone?: string;
}
export interface RegionDisksComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly lastAttachTimestamp?: string;
	readonly lastDetachTimestamp?: string;
	readonly region?: string;
	readonly satisfiesPzs?: boolean;
	readonly selfLink?: string;
	readonly sourceDiskId?: string;
	readonly sourceImageId?: string;
	readonly sourceSnapshotId?: string;
	readonly status?: string;
	readonly users?: string[];
	readonly zone?: string;
}
export interface RegionDisksComponentInputs {
	readonly architecture?: string;
	readonly description?: string;
	readonly diskEncryptionKey?: CustomerEncryptionKey;
	readonly guestOsFeatures?: GuestOsFeature[];
	readonly labelFingerprint?: string;
	readonly labels?: { [P in string]: string };
	readonly licenseCodes?: string[];
	readonly licenses?: string[];
	readonly locationHint?: string;
	readonly name: string;
	readonly options?: string;
	readonly params?: DiskParams;
	readonly physicalBlockSizeBytes?: string;
	readonly provisionedIops?: string;
	readonly replicaZones?: string[];
	readonly requestId?: string;
	readonly resourcePolicies?: string[];
	readonly sizeGb?: string;
	readonly sourceDisk?: string;
	readonly sourceImage?: string;
	readonly sourceImageEncryptionKey?: CustomerEncryptionKey;
	readonly sourceSnapshot?: string;
	readonly sourceSnapshotEncryptionKey?: CustomerEncryptionKey;
	readonly sourceStorageObject?: string;
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
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly diskEncryptionKey?: CustomerEncryptionKey;
	readonly guestOsFeatures?: GuestOsFeature[];
	readonly id?: string;
	readonly kind?: string;
	readonly labelFingerprint?: string;
	readonly labels?: { [P in string]: string };
	readonly lastAttachTimestamp?: string;
	readonly lastDetachTimestamp?: string;
	readonly licenseCodes?: string[];
	readonly licenses?: string[];
	readonly locationHint?: string;
	readonly name?: string;
	readonly options?: string;
	readonly params?: DiskParams;
	readonly physicalBlockSizeBytes?: string;
	readonly provisionedIops?: string;
	readonly region?: string;
	readonly replicaZones?: string[];
	readonly resourcePolicies?: string[];
	readonly satisfiesPzs?: boolean;
	readonly selfLink?: string;
	readonly sizeGb?: string;
	readonly sourceDisk?: string;
	readonly sourceDiskId?: string;
	readonly sourceImage?: string;
	readonly sourceImageEncryptionKey?: CustomerEncryptionKey;
	readonly sourceImageId?: string;
	readonly sourceSnapshot?: string;
	readonly sourceSnapshotEncryptionKey?: CustomerEncryptionKey;
	readonly sourceSnapshotId?: string;
	readonly sourceStorageObject?: string;
	readonly status?: string;
	readonly type?: string;
	readonly users?: string[];
	readonly zone?: string;
}
export interface DiskParams {
	readonly resourceManagerTags?: { [P in string]: string };
}
export interface GuestOsFeature {
	readonly type?: string;
}
export default {
	RegionDisks: RegionDisks,
};
