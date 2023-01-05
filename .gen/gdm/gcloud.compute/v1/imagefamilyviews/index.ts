import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ImageFamilyViews
	extends GdmResource<ImageFamilyViewsComponentInputs>
	implements ImageFamilyViewsComponentOutputs
{
	constructor(entity: ADKEntity, options: ImageFamilyViewsComponentInputs) {
		super(entity, options.name, "compute.v1.ImageFamilyViews", options);
	}
}
export interface ImageFamilyViewsComponentOutputs {}
export interface ImageFamilyViewsComponentInputs {
	readonly image?: Image;
	readonly name: string;
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
	readonly name?: string;
	readonly rawDisk?: { containerType?: string; sha1Checksum?: string; source?: string };
	readonly satisfiesPzs?: boolean;
	readonly selfLink?: string;
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
}
export interface ImageFamilyView {
	readonly image?: Image;
}
export interface InitialStateConfig {
	readonly dbs?: FileContentBuffer[];
	readonly dbxs?: FileContentBuffer[];
	readonly keks?: FileContentBuffer[];
	readonly pk?: FileContentBuffer;
}
export default {
	ImageFamilyViews: ImageFamilyViews,
};
