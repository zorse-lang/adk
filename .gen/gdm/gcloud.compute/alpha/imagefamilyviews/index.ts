import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ImageFamilyViews
	extends GdmResource<ImageFamilyViewsComponentInputs>
	implements ImageFamilyViewsComponentOutputs
{
	constructor(entity: ADKEntity, options: ImageFamilyViewsComponentInputs) {
		super(entity, options.name, "compute.alpha.ImageFamilyViews", options);
	}
}
export interface ImageFamilyViewsComponentOutputs {}
export interface ImageFamilyViewsComponentInputs {
	readonly image?: Image | undefined;
	readonly type: string;
	readonly name: string;
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
	readonly stateOverride?: RolloutPolicy | undefined;
}
export interface FileContentBuffer {
	readonly content?: string | undefined;
	readonly fileType?: string | undefined;
}
export interface GuestOsFeature {
	readonly type?: string | undefined;
}
export interface Image {
	readonly architecture?: string | undefined;
	readonly archiveSizeBytes?: string | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly deprecated?: DeprecationStatus | undefined;
	readonly description?: string | undefined;
	readonly diskSizeGb?: string | undefined;
	readonly family?: string | undefined;
	readonly guestOsFeatures?: GuestOsFeature[] | undefined;
	readonly id?: string | undefined;
	readonly imageEncryptionKey?: CustomerEncryptionKey | undefined;
	readonly kind?: string | undefined;
	readonly labelFingerprint?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly licenseCodes?: string[] | undefined;
	readonly licenses?: string[] | undefined;
	readonly locked?: boolean | undefined;
	readonly name?: string | undefined;
	readonly rawDisk?: { containerType?: string; sha1Checksum?: string; source?: string } | undefined;
	readonly rolloutOverride?: RolloutPolicy | undefined;
	readonly satisfiesPzs?: boolean | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly shieldedInstanceInitialState?: InitialStateConfig | undefined;
	readonly sourceDisk?: string | undefined;
	readonly sourceDiskEncryptionKey?: CustomerEncryptionKey | undefined;
	readonly sourceDiskId?: string | undefined;
	readonly sourceImage?: string | undefined;
	readonly sourceImageEncryptionKey?: CustomerEncryptionKey | undefined;
	readonly sourceImageId?: string | undefined;
	readonly sourceSnapshot?: string | undefined;
	readonly sourceSnapshotEncryptionKey?: CustomerEncryptionKey | undefined;
	readonly sourceSnapshotId?: string | undefined;
	readonly sourceType?: string | undefined;
	readonly status?: string | undefined;
	readonly storageLocations?: string[] | undefined;
	readonly userLicenses?: string[] | undefined;
}
export interface ImageFamilyView {
	readonly image?: Image | undefined;
}
export interface InitialStateConfig {
	readonly dbs?: FileContentBuffer[] | undefined;
	readonly dbxs?: FileContentBuffer[] | undefined;
	readonly keks?: FileContentBuffer[] | undefined;
	readonly pk?: FileContentBuffer | undefined;
}
export interface RolloutPolicy {
	readonly defaultRolloutTime?: string | undefined;
	readonly locationRolloutPolicies?: { [P in string]: string } | undefined;
}
export default {
	ImageFamilyViews: ImageFamilyViews,
};
