import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class galleries extends ArmResource<galleriesComponentInputs> implements galleriesComponentOutputs {
	constructor(entity: ADKEntity, options: galleriesComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/galleries", "2022-01-03", options);
	}
	public readonly apiVersion: "2022-01-03";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/galleries";
}
export interface galleriesComponentOutputs {
	readonly apiVersion: "2022-01-03";
	readonly id: string;
	readonly type: "Microsoft.Compute/galleries";
}
export interface galleriesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: GalleryProperties;
	readonly tags?: ResourceTags;
}
export class galleries_applications
	extends ArmResource<galleries_applicationsComponentInputs>
	implements galleries_applicationsComponentOutputs
{
	constructor(entity: ADKEntity, options: galleries_applicationsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/galleries/applications", "2022-01-03", options);
	}
	public readonly apiVersion: "2022-01-03";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/galleries/applications";
}
export interface galleries_applicationsComponentOutputs {
	readonly apiVersion: "2022-01-03";
	readonly id: string;
	readonly type: "Microsoft.Compute/galleries/applications";
}
export interface galleries_applicationsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: GalleryApplicationProperties;
	readonly tags?: ResourceTags;
}
export class galleries_applications_versions
	extends ArmResource<galleries_applications_versionsComponentInputs>
	implements galleries_applications_versionsComponentOutputs
{
	constructor(entity: ADKEntity, options: galleries_applications_versionsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/galleries/applications/versions", "2022-01-03", options);
	}
	public readonly apiVersion: "2022-01-03";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/galleries/applications/versions";
}
export interface galleries_applications_versionsComponentOutputs {
	readonly apiVersion: "2022-01-03";
	readonly id: string;
	readonly type: "Microsoft.Compute/galleries/applications/versions";
}
export interface galleries_applications_versionsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: GalleryApplicationVersionProperties;
	readonly tags?: ResourceTags;
}
export class galleries_images
	extends ArmResource<galleries_imagesComponentInputs>
	implements galleries_imagesComponentOutputs
{
	constructor(entity: ADKEntity, options: galleries_imagesComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/galleries/images", "2022-01-03", options);
	}
	public readonly apiVersion: "2022-01-03";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/galleries/images";
}
export interface galleries_imagesComponentOutputs {
	readonly apiVersion: "2022-01-03";
	readonly id: string;
	readonly type: "Microsoft.Compute/galleries/images";
}
export interface galleries_imagesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: GalleryImageProperties;
	readonly tags?: ResourceTags;
}
export class galleries_images_versions
	extends ArmResource<galleries_images_versionsComponentInputs>
	implements galleries_images_versionsComponentOutputs
{
	constructor(entity: ADKEntity, options: galleries_images_versionsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/galleries/images/versions", "2022-01-03", options);
	}
	public readonly apiVersion: "2022-01-03";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/galleries/images/versions";
}
export interface galleries_images_versionsComponentOutputs {
	readonly apiVersion: "2022-01-03";
	readonly id: string;
	readonly type: "Microsoft.Compute/galleries/images/versions";
}
export interface galleries_images_versionsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: GalleryImageVersionProperties;
	readonly tags?: ResourceTags;
}
export interface CommunityGalleryInfo {
	readonly communityGalleryEnabled?: boolean;
	readonly eula?: string;
	readonly publicNamePrefix?: string;
	readonly publicNames?: string[];
	readonly publisherContact?: string;
	readonly publisherUri?: string;
}
export interface DataDiskImageEncryption {
	readonly diskEncryptionSetId?: string;
	readonly lun: number;
}
export interface Disallowed {
	readonly diskTypes?: string[];
}
export interface EncryptionImages {
	readonly dataDiskImages?: DataDiskImageEncryption[];
	readonly osDiskImage?: OSDiskImageEncryption;
}
export interface GalleryApplicationProperties {
	readonly description?: string;
	readonly endOfLifeDate?: string;
	readonly eula?: string;
	readonly privacyStatementUri?: string;
	readonly releaseNoteUri?: string;
	readonly supportedOSType: "Linux";
}
export interface GalleryApplicationVersionProperties {
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Migrating" | "Succeeded" | "Updating";
	readonly publishingProfile: GalleryApplicationVersionPublishingProfile;
	readonly replicationStatus?: ReplicationStatus;
}
export interface GalleryApplicationVersionPublishingProfile {
	readonly advancedSettings?: GalleryApplicationVersionPublishingProfileAdvancedSettings;
	readonly enableHealthCheck?: boolean;
	readonly endOfLifeDate?: string;
	readonly excludeFromLatest?: boolean;
	readonly manageActions?: UserArtifactManage;
	readonly publishedDate?: string;
	readonly replicaCount?: number;
	readonly replicationMode?: "Full" | "Shallow";
	readonly settings?: UserArtifactSettings;
	readonly source: UserArtifactSource;
	readonly storageAccountType?: "Premium_LRS" | "Standard_LRS" | "Standard_ZRS";
	readonly targetExtendedLocations?: GalleryTargetExtendedLocation[];
	readonly targetRegions?: TargetRegion[];
}
export interface GalleryApplicationVersionPublishingProfileAdvancedSettings {
	readonly [key: string]: string;
}
export interface GalleryArtifactVersionSource {
	readonly id?: string;
	readonly uri?: string;
}
export interface GalleryDataDiskImage {
	readonly hostCaching?: "None" | "ReadOnly";
	readonly lun: number;
	readonly sizeInGB?: number;
	readonly source?: GalleryArtifactVersionSource;
}
export interface GalleryExtendedLocation {
	readonly name?: string;
	readonly type?: "EdgeZone" | "Unknown";
}
export interface GalleryIdentifier {
	readonly uniqueName?: string;
}
export interface GalleryImageFeature {
	readonly name?: string;
	readonly value?: string;
}
export interface GalleryImageIdentifier {
	readonly offer: string;
	readonly publisher: string;
	readonly sku: string;
}
export interface GalleryImageProperties {
	readonly architecture?: "Arm64" | "x64";
	readonly description?: string;
	readonly disallowed?: Disallowed;
	readonly endOfLifeDate?: string;
	readonly eula?: string;
	readonly features?: GalleryImageFeature[];
	readonly hyperVGeneration?: "V1" | "V2";
	readonly identifier: GalleryImageIdentifier;
	readonly osState: "Generalized";
	readonly osType: "Linux";
	readonly privacyStatementUri?: string;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Migrating" | "Succeeded" | "Updating";
	readonly purchasePlan?: ImagePurchasePlan;
	readonly recommended?: RecommendedMachineConfiguration;
	readonly releaseNoteUri?: string;
}
export interface GalleryImageVersionProperties {
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Migrating" | "Succeeded" | "Updating";
	readonly publishingProfile?: GalleryImageVersionPublishingProfile;
	readonly replicationStatus?: ReplicationStatus;
	readonly storageProfile: GalleryImageVersionStorageProfile;
}
export interface GalleryImageVersionPublishingProfile {
	readonly endOfLifeDate?: string;
	readonly excludeFromLatest?: boolean;
	readonly publishedDate?: string;
	readonly replicaCount?: number;
	readonly replicationMode?: "Full" | "Shallow";
	readonly storageAccountType?: "Premium_LRS" | "Standard_LRS" | "Standard_ZRS";
	readonly targetExtendedLocations?: GalleryTargetExtendedLocation[];
	readonly targetRegions?: TargetRegion[];
}
export interface GalleryImageVersionStorageProfile {
	readonly dataDiskImages?: GalleryDataDiskImage[];
	readonly osDiskImage?: GalleryOSDiskImage;
	readonly source?: GalleryArtifactVersionSource;
}
export interface GalleryOSDiskImage {
	readonly hostCaching?: "None" | "ReadOnly";
	readonly sizeInGB?: number;
	readonly source?: GalleryArtifactVersionSource;
}
export interface GalleryProperties {
	readonly description?: string;
	readonly identifier?: GalleryIdentifier;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Migrating" | "Succeeded" | "Updating";
	readonly sharingProfile?: SharingProfile;
	readonly sharingStatus?: SharingStatus;
	readonly softDeletePolicy?: SoftDeletePolicy;
}
export interface GalleryTargetExtendedLocation {
	readonly encryption?: EncryptionImages;
	readonly extendedLocation?: GalleryExtendedLocation;
	readonly extendedLocationReplicaCount?: number;
	readonly name?: string;
	readonly storageAccountType?: "Premium_LRS" | "Standard_LRS" | "Standard_ZRS";
}
export interface ImagePurchasePlan {
	readonly name?: string;
	readonly product?: string;
	readonly publisher?: string;
}
export interface OSDiskImageEncryption {
	readonly diskEncryptionSetId?: string;
	readonly securityProfile?: OSDiskImageSecurityProfile;
}
export interface OSDiskImageSecurityProfile {
	readonly confidentialVMEncryptionType?: "EncryptedVMGuestStateOnlyWithPmk" | "EncryptedWithCmk" | "EncryptedWithPmk";
	readonly secureVMDiskEncryptionSetId?: string;
}
export interface RecommendedMachineConfiguration {
	readonly memory?: ResourceRange;
	readonly vCPUs?: ResourceRange;
}
export interface RegionalReplicationStatus {
	readonly details?: string;
	readonly progress?: number;
	readonly region?: string;
	readonly state?: "Completed" | "Failed" | "Replicating" | "Unknown";
}
export interface RegionalSharingStatus {
	readonly details?: string;
	readonly region?: string;
	readonly state?: "Failed" | "InProgress" | "Succeeded" | "Unknown";
}
export interface ReplicationStatus {
	readonly aggregatedState?: "Completed" | "Failed" | "InProgress" | "Unknown";
	readonly summary?: RegionalReplicationStatus[];
}
export interface ResourceRange {
	readonly max?: number;
	readonly min?: number;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface SharingProfile {
	readonly communityGalleryInfo?: CommunityGalleryInfo;
	readonly groups?: SharingProfileGroup[];
	readonly permissions?: "Community" | "Groups" | "Private";
}
export interface SharingProfileGroup {
	readonly ids?: string[];
	readonly type?: "AADTenants" | "Subscriptions";
}
export interface SharingStatus {
	readonly aggregatedState?: "Failed" | "InProgress" | "Succeeded" | "Unknown";
	readonly summary?: RegionalSharingStatus[];
}
export interface SoftDeletePolicy {
	readonly isSoftDeleteEnabled?: boolean;
}
export interface TargetRegion {
	readonly encryption?: EncryptionImages;
	readonly name: string;
	readonly regionalReplicaCount?: number;
	readonly storageAccountType?: "Premium_LRS" | "Standard_LRS" | "Standard_ZRS";
}
export interface UserArtifactManage {
	readonly install: string;
	readonly remove: string;
	readonly update?: string;
}
export interface UserArtifactSettings {
	readonly configFileName?: string;
	readonly packageFileName?: string;
}
export interface UserArtifactSource {
	readonly defaultConfigurationLink?: string;
	readonly mediaLink: string;
}
export default {
	galleries: galleries,
	"galleries/applications": galleries_applications,
	"galleries/applications/versions": galleries_applications_versions,
	"galleries/images": galleries_images,
	"galleries/images/versions": galleries_images_versions,
};
