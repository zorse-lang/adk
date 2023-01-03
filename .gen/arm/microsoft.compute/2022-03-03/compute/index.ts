import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class galleries extends ArmResource<galleriesComponentInputs> implements galleriesComponentOutputs {
	constructor(entity: ADKEntity, options: galleriesComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/galleries", "2022-03-03", options);
	}
	public readonly apiVersion: "2022-03-03";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/galleries";
}
export interface galleriesComponentOutputs {
	readonly apiVersion: "2022-03-03";
	readonly id: string;
	readonly type: "Microsoft.Compute/galleries";
}
export interface galleriesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: GalleryProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class galleries_applications
	extends ArmResource<galleries_applicationsComponentInputs>
	implements galleries_applicationsComponentOutputs
{
	constructor(entity: ADKEntity, options: galleries_applicationsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/galleries/applications", "2022-03-03", options);
	}
	public readonly apiVersion: "2022-03-03";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/galleries/applications";
}
export interface galleries_applicationsComponentOutputs {
	readonly apiVersion: "2022-03-03";
	readonly id: string;
	readonly type: "Microsoft.Compute/galleries/applications";
}
export interface galleries_applicationsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: GalleryApplicationProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class galleries_applications_versions
	extends ArmResource<galleries_applications_versionsComponentInputs>
	implements galleries_applications_versionsComponentOutputs
{
	constructor(entity: ADKEntity, options: galleries_applications_versionsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/galleries/applications/versions", "2022-03-03", options);
	}
	public readonly apiVersion: "2022-03-03";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/galleries/applications/versions";
}
export interface galleries_applications_versionsComponentOutputs {
	readonly apiVersion: "2022-03-03";
	readonly id: string;
	readonly type: "Microsoft.Compute/galleries/applications/versions";
}
export interface galleries_applications_versionsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: GalleryApplicationVersionProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class galleries_images
	extends ArmResource<galleries_imagesComponentInputs>
	implements galleries_imagesComponentOutputs
{
	constructor(entity: ADKEntity, options: galleries_imagesComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/galleries/images", "2022-03-03", options);
	}
	public readonly apiVersion: "2022-03-03";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/galleries/images";
}
export interface galleries_imagesComponentOutputs {
	readonly apiVersion: "2022-03-03";
	readonly id: string;
	readonly type: "Microsoft.Compute/galleries/images";
}
export interface galleries_imagesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: GalleryImageProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class galleries_images_versions
	extends ArmResource<galleries_images_versionsComponentInputs>
	implements galleries_images_versionsComponentOutputs
{
	constructor(entity: ADKEntity, options: galleries_images_versionsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/galleries/images/versions", "2022-03-03", options);
	}
	public readonly apiVersion: "2022-03-03";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/galleries/images/versions";
}
export interface galleries_images_versionsComponentOutputs {
	readonly apiVersion: "2022-03-03";
	readonly id: string;
	readonly type: "Microsoft.Compute/galleries/images/versions";
}
export interface galleries_images_versionsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: GalleryImageVersionProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface CommunityGalleryInfo {
	readonly communityGalleryEnabled?: boolean | undefined;
	readonly eula?: string | undefined;
	readonly publicNamePrefix?: string | undefined;
	readonly publicNames?: string[] | undefined;
	readonly publisherContact?: string | undefined;
	readonly publisherUri?: string | undefined;
}
export interface DataDiskImageEncryption {
	readonly diskEncryptionSetId?: string | undefined;
	readonly lun: number;
}
export interface Disallowed {
	readonly diskTypes?: string[] | undefined;
}
export interface EncryptionImages {
	readonly dataDiskImages?: DataDiskImageEncryption[] | undefined;
	readonly osDiskImage?: OSDiskImageEncryption | undefined;
}
export interface GalleryApplicationCustomAction {
	readonly description?: string | undefined;
	readonly name: string;
	readonly parameters?: GalleryApplicationCustomActionParameter[] | undefined;
	readonly script: string;
}
export interface GalleryApplicationCustomActionParameter {
	readonly defaultValue?: string | undefined;
	readonly description?: string | undefined;
	readonly name: string;
	readonly required?: boolean | undefined;
	readonly type?: ("ConfigurationDataBlob" | "LogOutputBlob") | undefined;
}
export interface GalleryApplicationProperties {
	readonly customActions?: GalleryApplicationCustomAction[] | undefined;
	readonly description?: string | undefined;
	readonly endOfLifeDate?: string | undefined;
	readonly eula?: string | undefined;
	readonly privacyStatementUri?: string | undefined;
	readonly releaseNoteUri?: string | undefined;
	readonly supportedOSType: "Linux";
}
export interface GalleryApplicationVersionProperties {
	readonly provisioningState?:
		| ("Creating" | "Deleting" | "Failed" | "Migrating" | "Succeeded" | "Updating")
		| undefined;
	readonly publishingProfile: GalleryApplicationVersionPublishingProfile;
	readonly replicationStatus?: ReplicationStatus | undefined;
	readonly safetyProfile?: GalleryApplicationVersionSafetyProfile | undefined;
}
export interface GalleryApplicationVersionPublishingProfile {
	readonly advancedSettings?: GalleryApplicationVersionPublishingProfileAdvancedSettings | undefined;
	readonly customActions?: GalleryApplicationCustomAction[] | undefined;
	readonly enableHealthCheck?: boolean | undefined;
	readonly endOfLifeDate?: string | undefined;
	readonly excludeFromLatest?: boolean | undefined;
	readonly manageActions?: UserArtifactManage | undefined;
	readonly publishedDate?: string | undefined;
	readonly replicaCount?: number | undefined;
	readonly replicationMode?: ("Full" | "Shallow") | undefined;
	readonly settings?: UserArtifactSettings | undefined;
	readonly source: UserArtifactSource;
	readonly storageAccountType?: ("Premium_LRS" | "Standard_LRS" | "Standard_ZRS") | undefined;
	readonly targetExtendedLocations?: GalleryTargetExtendedLocation[] | undefined;
	readonly targetRegions?: TargetRegion[] | undefined;
}
export interface GalleryApplicationVersionPublishingProfileAdvancedSettings {
	readonly "[ key: string ]"?: string | undefined;
}
export interface GalleryApplicationVersionSafetyProfile {
	readonly allowDeletionOfReplicatedLocations?: boolean | undefined;
}
export interface GalleryArtifactVersionFullSource {
	readonly communityGalleryImageId?: string | undefined;
	readonly id?: string | undefined;
}
export interface GalleryDataDiskImage {
	readonly hostCaching?: ("None" | "ReadOnly") | undefined;
	readonly lun: number;
	readonly sizeInGB?: number | undefined;
	readonly source?: GalleryDiskImageSource | undefined;
}
export interface GalleryDiskImageSource {
	readonly id?: string | undefined;
	readonly storageAccountId?: string | undefined;
	readonly uri?: string | undefined;
}
export interface GalleryExtendedLocation {
	readonly name?: string | undefined;
	readonly type?: ("EdgeZone" | "Unknown") | undefined;
}
export interface GalleryIdentifier {
	readonly uniqueName?: string | undefined;
}
export interface GalleryImageFeature {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface GalleryImageIdentifier {
	readonly offer: string;
	readonly publisher: string;
	readonly sku: string;
}
export interface GalleryImageProperties {
	readonly architecture?: ("Arm64" | "x64") | undefined;
	readonly description?: string | undefined;
	readonly disallowed?: Disallowed | undefined;
	readonly endOfLifeDate?: string | undefined;
	readonly eula?: string | undefined;
	readonly features?: GalleryImageFeature[] | undefined;
	readonly hyperVGeneration?: ("V1" | "V2") | undefined;
	readonly identifier: GalleryImageIdentifier;
	readonly osState: "Generalized";
	readonly osType: "Linux";
	readonly privacyStatementUri?: string | undefined;
	readonly provisioningState?:
		| ("Creating" | "Deleting" | "Failed" | "Migrating" | "Succeeded" | "Updating")
		| undefined;
	readonly purchasePlan?: ImagePurchasePlan | undefined;
	readonly recommended?: RecommendedMachineConfiguration | undefined;
	readonly releaseNoteUri?: string | undefined;
}
export interface GalleryImageVersionProperties {
	readonly provisioningState?:
		| ("Creating" | "Deleting" | "Failed" | "Migrating" | "Succeeded" | "Updating")
		| undefined;
	readonly publishingProfile?: GalleryImageVersionPublishingProfile | undefined;
	readonly replicationStatus?: ReplicationStatus | undefined;
	readonly safetyProfile?: GalleryImageVersionSafetyProfile | undefined;
	readonly storageProfile: GalleryImageVersionStorageProfile;
}
export interface GalleryImageVersionPublishingProfile {
	readonly endOfLifeDate?: string | undefined;
	readonly excludeFromLatest?: boolean | undefined;
	readonly publishedDate?: string | undefined;
	readonly replicaCount?: number | undefined;
	readonly replicationMode?: ("Full" | "Shallow") | undefined;
	readonly storageAccountType?: ("Premium_LRS" | "Standard_LRS" | "Standard_ZRS") | undefined;
	readonly targetExtendedLocations?: GalleryTargetExtendedLocation[] | undefined;
	readonly targetRegions?: TargetRegion[] | undefined;
}
export interface GalleryImageVersionSafetyProfile {
	readonly allowDeletionOfReplicatedLocations?: boolean | undefined;
	readonly policyViolations?: PolicyViolation[] | undefined;
	readonly reportedForPolicyViolation?: boolean | undefined;
}
export interface GalleryImageVersionStorageProfile {
	readonly dataDiskImages?: GalleryDataDiskImage[] | undefined;
	readonly osDiskImage?: GalleryOSDiskImage | undefined;
	readonly source?: GalleryArtifactVersionFullSource | undefined;
}
export interface GalleryOSDiskImage {
	readonly hostCaching?: ("None" | "ReadOnly") | undefined;
	readonly sizeInGB?: number | undefined;
	readonly source?: GalleryDiskImageSource | undefined;
}
export interface GalleryProperties {
	readonly description?: string | undefined;
	readonly identifier?: GalleryIdentifier | undefined;
	readonly provisioningState?:
		| ("Creating" | "Deleting" | "Failed" | "Migrating" | "Succeeded" | "Updating")
		| undefined;
	readonly sharingProfile?: SharingProfile | undefined;
	readonly sharingStatus?: SharingStatus | undefined;
	readonly softDeletePolicy?: SoftDeletePolicy | undefined;
}
export interface GalleryTargetExtendedLocation {
	readonly encryption?: EncryptionImages | undefined;
	readonly extendedLocation?: GalleryExtendedLocation | undefined;
	readonly extendedLocationReplicaCount?: number | undefined;
	readonly name?: string | undefined;
	readonly storageAccountType?: ("Premium_LRS" | "Standard_LRS" | "Standard_ZRS") | undefined;
}
export interface ImagePurchasePlan {
	readonly name?: string | undefined;
	readonly product?: string | undefined;
	readonly publisher?: string | undefined;
}
export interface OSDiskImageEncryption {
	readonly diskEncryptionSetId?: string | undefined;
	readonly securityProfile?: OSDiskImageSecurityProfile | undefined;
}
export interface OSDiskImageSecurityProfile {
	readonly confidentialVMEncryptionType?:
		| ("EncryptedVMGuestStateOnlyWithPmk" | "EncryptedWithCmk" | "EncryptedWithPmk")
		| undefined;
	readonly secureVMDiskEncryptionSetId?: string | undefined;
}
export interface PolicyViolation {
	readonly category?: ("CopyrightValidation" | "ImageFlaggedUnsafe" | "IpTheft" | "Other") | undefined;
	readonly details?: string | undefined;
}
export interface RecommendedMachineConfiguration {
	readonly memory?: ResourceRange | undefined;
	readonly vCPUs?: ResourceRange | undefined;
}
export interface RegionalReplicationStatus {
	readonly details?: string | undefined;
	readonly progress?: number | undefined;
	readonly region?: string | undefined;
	readonly state?: ("Completed" | "Failed" | "Replicating" | "Unknown") | undefined;
}
export interface RegionalSharingStatus {
	readonly details?: string | undefined;
	readonly region?: string | undefined;
	readonly state?: ("Failed" | "InProgress" | "Succeeded" | "Unknown") | undefined;
}
export interface ReplicationStatus {
	readonly aggregatedState?: ("Completed" | "Failed" | "InProgress" | "Unknown") | undefined;
	readonly summary?: RegionalReplicationStatus[] | undefined;
}
export interface ResourceRange {
	readonly max?: number | undefined;
	readonly min?: number | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SharingProfile {
	readonly communityGalleryInfo?: CommunityGalleryInfo | undefined;
	readonly groups?: SharingProfileGroup[] | undefined;
	readonly permissions?: ("Community" | "Groups" | "Private") | undefined;
}
export interface SharingProfileGroup {
	readonly ids?: string[] | undefined;
	readonly type?: ("AADTenants" | "Subscriptions") | undefined;
}
export interface SharingStatus {
	readonly aggregatedState?: ("Failed" | "InProgress" | "Succeeded" | "Unknown") | undefined;
	readonly summary?: RegionalSharingStatus[] | undefined;
}
export interface SoftDeletePolicy {
	readonly isSoftDeleteEnabled?: boolean | undefined;
}
export interface TargetRegion {
	readonly encryption?: EncryptionImages | undefined;
	readonly excludeFromLatest?: boolean | undefined;
	readonly name: string;
	readonly regionalReplicaCount?: number | undefined;
	readonly storageAccountType?: ("Premium_LRS" | "Standard_LRS" | "Standard_ZRS") | undefined;
}
export interface UserArtifactManage {
	readonly install: string;
	readonly remove: string;
	readonly update?: string | undefined;
}
export interface UserArtifactSettings {
	readonly configFileName?: string | undefined;
	readonly packageFileName?: string | undefined;
}
export interface UserArtifactSource {
	readonly defaultConfigurationLink?: string | undefined;
	readonly mediaLink: string;
}
export default {
	galleries: galleries,
	"galleries/applications": galleries_applications,
	"galleries/applications/versions": galleries_applications_versions,
	"galleries/images": galleries_images,
	"galleries/images/versions": galleries_images_versions,
};
