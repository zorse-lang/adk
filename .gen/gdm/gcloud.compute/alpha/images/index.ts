import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Images extends GdmResource<ImagesComponentInputs> implements ImagesComponentOutputs {
	constructor(entity: ADKEntity, options: ImagesComponentInputs) {
		super(entity, options.name, "compute.alpha.Images", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly satisfiesPzs?: boolean;
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
	public readonly sourceDiskId?: string;
	public readonly sourceImageId?: string;
	public readonly sourceSnapshotId?: string;
	public readonly status?: string;
}
export interface ImagesComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly satisfiesPzs?: boolean;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly sourceDiskId?: string;
	readonly sourceImageId?: string;
	readonly sourceSnapshotId?: string;
	readonly status?: string;
}
export interface ImagesComponentInputs {
	readonly architecture?: string;
	readonly archiveSizeBytes?: string;
	readonly deprecated?: DeprecationStatus;
	readonly description?: string;
	readonly diskSizeGb?: string;
	readonly family?: string;
	readonly forceCreate?: boolean;
	readonly guestOsFeatures?: GuestOsFeature[];
	readonly imageEncryptionKey?: CustomerEncryptionKey;
	readonly labelFingerprint?: string;
	readonly labels?: { [P in string]: string };
	readonly licenseCodes?: string[];
	readonly licenses?: string[];
	readonly locked?: boolean;
	readonly name: string;
	readonly rawDisk?: { containerType?: string; sha1Checksum?: string; source?: string };
	readonly requestId?: string;
	readonly rolloutOverride?: RolloutPolicy;
	readonly shieldedInstanceInitialState?: InitialStateConfig;
	readonly sourceDisk?: string;
	readonly sourceDiskEncryptionKey?: CustomerEncryptionKey;
	readonly sourceImage?: string;
	readonly sourceImageEncryptionKey?: CustomerEncryptionKey;
	readonly sourceSnapshot?: string;
	readonly sourceSnapshotEncryptionKey?: CustomerEncryptionKey;
	readonly sourceType?: string;
	readonly storageLocations?: string[];
	readonly userLicenses?: string[];
}
export interface CustomerEncryptionKey {
	readonly kmsKeyName?: string;
	readonly kmsKeyServiceAccount?: string;
	readonly rawKey?: string;
	readonly rsaEncryptedKey?: string;
	readonly sha256?: string;
}
export interface DeprecationStatus {
	readonly deleted?: string;
	readonly deprecated?: string;
	readonly obsolete?: string;
	readonly replacement?: string;
	readonly state?: string;
	readonly stateOverride?: RolloutPolicy;
}
export interface FileContentBuffer {
	readonly content?: string;
	readonly fileType?: string;
}
export interface GuestOsFeature {
	readonly type?: string;
}
export interface Image {
	readonly architecture?: string;
	readonly archiveSizeBytes?: string;
	readonly creationTimestamp?: string;
	readonly deprecated?: DeprecationStatus;
	readonly description?: string;
	readonly diskSizeGb?: string;
	readonly family?: string;
	readonly guestOsFeatures?: GuestOsFeature[];
	readonly id?: string;
	readonly imageEncryptionKey?: CustomerEncryptionKey;
	readonly kind?: string;
	readonly labelFingerprint?: string;
	readonly labels?: { [P in string]: string };
	readonly licenseCodes?: string[];
	readonly licenses?: string[];
	readonly locked?: boolean;
	readonly name?: string;
	readonly rawDisk?: { containerType?: string; sha1Checksum?: string; source?: string };
	readonly rolloutOverride?: RolloutPolicy;
	readonly satisfiesPzs?: boolean;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly shieldedInstanceInitialState?: InitialStateConfig;
	readonly sourceDisk?: string;
	readonly sourceDiskEncryptionKey?: CustomerEncryptionKey;
	readonly sourceDiskId?: string;
	readonly sourceImage?: string;
	readonly sourceImageEncryptionKey?: CustomerEncryptionKey;
	readonly sourceImageId?: string;
	readonly sourceSnapshot?: string;
	readonly sourceSnapshotEncryptionKey?: CustomerEncryptionKey;
	readonly sourceSnapshotId?: string;
	readonly sourceType?: string;
	readonly status?: string;
	readonly storageLocations?: string[];
	readonly userLicenses?: string[];
}
export interface InitialStateConfig {
	readonly dbs?: FileContentBuffer[];
	readonly dbxs?: FileContentBuffer[];
	readonly keks?: FileContentBuffer[];
	readonly pk?: FileContentBuffer;
}
export interface RolloutPolicy {
	readonly defaultRolloutTime?: string;
	readonly locationRolloutPolicies?: { [P in string]: string };
}
export default {
	Images: Images,
};
