import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Image extends GdmResource<ImageComponentInputs> implements ImageComponentOutputs {
	constructor(entity: ADKEntity, options: ImageComponentInputs) {
		super(entity, options.name, "compute.v1.image", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly satisfiesPzs?: boolean | undefined;
	public readonly selfLink?: string | undefined;
	public readonly sourceDiskId?: string | undefined;
	public readonly sourceImageId?: string | undefined;
	public readonly sourceSnapshotId?: string | undefined;
	public readonly status?: string | undefined;
}
export interface ImageComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly satisfiesPzs?: boolean | undefined;
	readonly selfLink?: string | undefined;
	readonly sourceDiskId?: string | undefined;
	readonly sourceImageId?: string | undefined;
	readonly sourceSnapshotId?: string | undefined;
	readonly status?: string | undefined;
}
export interface ImageComponentInputs {
	readonly architecture?: string | undefined;
	readonly archiveSizeBytes?: string | undefined;
	readonly deprecated?: DeprecationStatus | undefined;
	readonly description?: string | undefined;
	readonly diskSizeGb?: string | undefined;
	readonly family?: string | undefined;
	readonly guestOsFeatures?: GuestOsFeature[] | undefined;
	readonly imageEncryptionKey?: CustomerEncryptionKey | undefined;
	readonly labelFingerprint?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly licenseCodes?: string[] | undefined;
	readonly licenses?: string[] | undefined;
	readonly name: string;
	readonly rawDisk?: { containerType?: string; sha1Checksum?: string; source?: string } | undefined;
	readonly shieldedInstanceInitialState?: InitialStateConfig | undefined;
	readonly sourceDisk?: string | undefined;
	readonly sourceDiskEncryptionKey?: CustomerEncryptionKey | undefined;
	readonly sourceImage?: string | undefined;
	readonly sourceImageEncryptionKey?: CustomerEncryptionKey | undefined;
	readonly sourceSnapshot?: string | undefined;
	readonly sourceSnapshotEncryptionKey?: CustomerEncryptionKey | undefined;
	readonly sourceType?: string | undefined;
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
export interface DeprecationStatus {
	readonly deleted?: string | undefined;
	readonly deprecated?: string | undefined;
	readonly obsolete?: string | undefined;
	readonly replacement?: string | undefined;
	readonly state?: string | undefined;
}
export interface FileContentBuffer {
	readonly content?: string | undefined;
	readonly fileType?: string | undefined;
}
export interface GuestOsFeature {
	readonly type?: string | undefined;
}
export interface InitialStateConfig {
	readonly dbs?: FileContentBuffer[] | undefined;
	readonly dbxs?: FileContentBuffer[] | undefined;
	readonly keks?: FileContentBuffer[] | undefined;
	readonly pk?: FileContentBuffer | undefined;
}
export default {
	Image: Image,
};
