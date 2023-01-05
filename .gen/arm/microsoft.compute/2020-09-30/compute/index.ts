import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class diskAccesses extends ArmResource<diskAccessesComponentInputs> implements diskAccessesComponentOutputs {
	constructor(entity: ADKEntity, options: diskAccessesComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/diskAccesses", "2020-09-30", options);
	}
	public readonly apiVersion: "2020-09-30";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/diskAccesses";
}
export interface diskAccessesComponentOutputs {
	readonly apiVersion: "2020-09-30";
	readonly id: string;
	readonly type: "Microsoft.Compute/diskAccesses";
}
export interface diskAccessesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: DiskAccessProperties;
	readonly tags?: ResourceTags;
}
export class diskAccesses_privateEndpointConnections
	extends ArmResource<diskAccesses_privateEndpointConnectionsComponentInputs>
	implements diskAccesses_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: diskAccesses_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/diskAccesses/privateEndpointConnections", "2020-09-30", options);
	}
	public readonly apiVersion: "2020-09-30";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/diskAccesses/privateEndpointConnections";
}
export interface diskAccesses_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2020-09-30";
	readonly id: string;
	readonly type: "Microsoft.Compute/diskAccesses/privateEndpointConnections";
}
export interface diskAccesses_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
}
export class diskEncryptionSets
	extends ArmResource<diskEncryptionSetsComponentInputs>
	implements diskEncryptionSetsComponentOutputs
{
	constructor(entity: ADKEntity, options: diskEncryptionSetsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/diskEncryptionSets", "2020-09-30", options);
	}
	public readonly apiVersion: "2020-09-30";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/diskEncryptionSets";
}
export interface diskEncryptionSetsComponentOutputs {
	readonly apiVersion: "2020-09-30";
	readonly id: string;
	readonly type: "Microsoft.Compute/diskEncryptionSets";
}
export interface diskEncryptionSetsComponentInputs {
	readonly identity?: EncryptionSetIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties?: EncryptionSetProperties;
	readonly tags?: ResourceTags;
}
export class disks extends ArmResource<disksComponentInputs> implements disksComponentOutputs {
	constructor(entity: ADKEntity, options: disksComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/disks", "2020-09-30", options);
	}
	public readonly apiVersion: "2020-09-30";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/disks";
}
export interface disksComponentOutputs {
	readonly apiVersion: "2020-09-30";
	readonly id: string;
	readonly type: "Microsoft.Compute/disks";
}
export interface disksComponentInputs {
	readonly extendedLocation?: ExtendedLocation;
	readonly location: string;
	readonly managedBy?: string;
	readonly managedByExtended?: string[];
	readonly name: string;
	readonly properties?: DiskProperties;
	readonly sku?: DiskSku;
	readonly tags?: ResourceTags;
	readonly zones?: string[];
}
export class galleries extends ArmResource<galleriesComponentInputs> implements galleriesComponentOutputs {
	constructor(entity: ADKEntity, options: galleriesComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/galleries", "2020-09-30", options);
	}
	public readonly apiVersion: "2020-09-30";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/galleries";
}
export interface galleriesComponentOutputs {
	readonly apiVersion: "2020-09-30";
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
		super(entity, options.name, "Microsoft.Compute/galleries/applications", "2020-09-30", options);
	}
	public readonly apiVersion: "2020-09-30";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/galleries/applications";
}
export interface galleries_applicationsComponentOutputs {
	readonly apiVersion: "2020-09-30";
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
		super(entity, options.name, "Microsoft.Compute/galleries/applications/versions", "2020-09-30", options);
	}
	public readonly apiVersion: "2020-09-30";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/galleries/applications/versions";
}
export interface galleries_applications_versionsComponentOutputs {
	readonly apiVersion: "2020-09-30";
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
		super(entity, options.name, "Microsoft.Compute/galleries/images", "2020-09-30", options);
	}
	public readonly apiVersion: "2020-09-30";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/galleries/images";
}
export interface galleries_imagesComponentOutputs {
	readonly apiVersion: "2020-09-30";
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
		super(entity, options.name, "Microsoft.Compute/galleries/images/versions", "2020-09-30", options);
	}
	public readonly apiVersion: "2020-09-30";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/galleries/images/versions";
}
export interface galleries_images_versionsComponentOutputs {
	readonly apiVersion: "2020-09-30";
	readonly id: string;
	readonly type: "Microsoft.Compute/galleries/images/versions";
}
export interface galleries_images_versionsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: GalleryImageVersionProperties;
	readonly tags?: ResourceTags;
}
export class snapshots extends ArmResource<snapshotsComponentInputs> implements snapshotsComponentOutputs {
	constructor(entity: ADKEntity, options: snapshotsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/snapshots", "2020-09-30", options);
	}
	public readonly apiVersion: "2020-09-30";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/snapshots";
}
export interface snapshotsComponentOutputs {
	readonly apiVersion: "2020-09-30";
	readonly id: string;
	readonly type: "Microsoft.Compute/snapshots";
}
export interface snapshotsComponentInputs {
	readonly extendedLocation?: ExtendedLocation;
	readonly location: string;
	readonly managedBy?: string;
	readonly name: string;
	readonly properties?: SnapshotProperties;
	readonly sku?: SnapshotSku;
	readonly tags?: ResourceTags;
}
export interface CreationData {
	readonly createOption: "Attach" | "Copy" | "Empty" | "FromImage" | "Import" | "Restore" | "Upload";
	readonly galleryImageReference?: ImageDiskReference;
	readonly imageReference?: ImageDiskReference;
	readonly logicalSectorSize?: number;
	readonly sourceResourceId?: string;
	readonly sourceUniqueId?: string;
	readonly sourceUri?: string;
	readonly storageAccountId?: string;
	readonly uploadSizeBytes?: number;
}
export interface DataDiskImageEncryption {
	readonly diskEncryptionSetId?: string;
	readonly lun: number;
}
export interface Disallowed {
	readonly diskTypes?: string[];
}
export interface DiskAccessProperties {
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly provisioningState?: string;
	readonly timeCreated?: string;
}
export interface DiskProperties {
	readonly burstingEnabled?: boolean;
	readonly creationData: CreationData;
	readonly diskAccessId?: string;
	readonly diskIOPSReadOnly?: number;
	readonly diskIOPSReadWrite?: number;
	readonly diskMBpsReadOnly?: number;
	readonly diskMBpsReadWrite?: number;
	readonly diskSizeBytes?: number;
	readonly diskSizeGB?: number;
	readonly diskState?: "ActiveSAS" | "ActiveUpload" | "Attached" | "ReadyToUpload" | "Reserved" | "Unattached";
	readonly encryption?: Encryption;
	readonly encryptionSettingsCollection?: EncryptionSettingsCollection;
	readonly hyperVGeneration?: "V1" | "V2";
	readonly maxShares?: number;
	readonly networkAccessPolicy?: "AllowAll" | "AllowPrivate" | "DenyAll";
	readonly osType?: "Linux";
	readonly provisioningState?: string;
	readonly purchasePlan?: PurchasePlan;
	readonly shareInfo?: ShareInfoElement[];
	readonly tier?: string;
	readonly timeCreated?: string;
	readonly uniqueId?: string;
}
export interface DiskSku {
	readonly name?: "Premium_LRS" | "StandardSSD_LRS" | "Standard_LRS" | "UltraSSD_LRS";
	readonly tier?: string;
}
export interface Encryption {
	readonly diskEncryptionSetId?: string;
	readonly type?:
		| "EncryptionAtRestWithCustomerKey"
		| "EncryptionAtRestWithPlatformAndCustomerKeys"
		| "EncryptionAtRestWithPlatformKey";
}
export interface EncryptionImages {
	readonly dataDiskImages?: DataDiskImageEncryption[];
	readonly osDiskImage?: OSDiskImageEncryption;
}
export interface EncryptionSetIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned";
}
export interface EncryptionSetProperties {
	readonly activeKey?: KeyForDiskEncryptionSet;
	readonly encryptionType?: "EncryptionAtRestWithCustomerKey" | "EncryptionAtRestWithPlatformAndCustomerKeys";
	readonly previousKeys?: KeyForDiskEncryptionSet[];
	readonly provisioningState?: string;
}
export interface EncryptionSettingsCollection {
	readonly enabled: boolean;
	readonly encryptionSettings?: EncryptionSettingsElement[];
	readonly encryptionSettingsVersion?: string;
}
export interface EncryptionSettingsElement {
	readonly diskEncryptionKey?: KeyVaultAndSecretReference;
	readonly keyEncryptionKey?: KeyVaultAndKeyReference;
}
export interface ExtendedLocation {
	readonly name?: string;
	readonly type?: "EdgeZone";
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
	readonly enableHealthCheck?: boolean;
	readonly endOfLifeDate?: string;
	readonly excludeFromLatest?: boolean;
	readonly manageActions?: UserArtifactManage;
	readonly publishedDate?: string;
	readonly replicaCount?: number;
	readonly source: UserArtifactSource;
	readonly storageAccountType?: "Premium_LRS" | "Standard_LRS" | "Standard_ZRS";
	readonly targetRegions?: TargetRegion[];
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
	readonly storageAccountType?: "Premium_LRS" | "Standard_LRS" | "Standard_ZRS";
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
}
export interface ImageDiskReference {
	readonly id: string;
	readonly lun?: number;
}
export interface ImagePurchasePlan {
	readonly name?: string;
	readonly product?: string;
	readonly publisher?: string;
}
export interface KeyForDiskEncryptionSet {
	readonly keyUrl: string;
	readonly sourceVault?: SourceVault;
}
export interface KeyVaultAndKeyReference {
	readonly keyUrl: string;
	readonly sourceVault: SourceVault;
}
export interface KeyVaultAndSecretReference {
	readonly secretUrl: string;
	readonly sourceVault: SourceVault;
}
export interface OSDiskImageEncryption {
	readonly diskEncryptionSetId?: string;
}
export interface PrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointConnection {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly type?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded";
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: "Approved" | "Pending" | "Rejected";
}
export interface PurchasePlan {
	readonly name: string;
	readonly product: string;
	readonly promotionCode?: string;
	readonly publisher: string;
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
export interface ShareInfoElement {
	readonly vmUri?: string;
}
export interface SharingProfile {
	readonly groups?: SharingProfileGroup[];
	readonly permissions?: "Groups" | "Private";
}
export interface SharingProfileGroup {
	readonly ids?: string[];
	readonly type?: "AADTenants" | "Subscriptions";
}
export interface SnapshotProperties {
	readonly creationData: CreationData;
	readonly diskAccessId?: string;
	readonly diskSizeBytes?: number;
	readonly diskSizeGB?: number;
	readonly diskState?: "ActiveSAS" | "ActiveUpload" | "Attached" | "ReadyToUpload" | "Reserved" | "Unattached";
	readonly encryption?: Encryption;
	readonly encryptionSettingsCollection?: EncryptionSettingsCollection;
	readonly hyperVGeneration?: "V1" | "V2";
	readonly incremental?: boolean;
	readonly networkAccessPolicy?: "AllowAll" | "AllowPrivate" | "DenyAll";
	readonly osType?: "Linux";
	readonly provisioningState?: string;
	readonly purchasePlan?: PurchasePlan;
	readonly timeCreated?: string;
	readonly uniqueId?: string;
}
export interface SnapshotSku {
	readonly name?: "Premium_LRS" | "Standard_LRS" | "Standard_ZRS";
	readonly tier?: string;
}
export interface SourceVault {
	readonly id?: string;
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
export interface UserArtifactSource {
	readonly defaultConfigurationLink?: string;
	readonly mediaLink: string;
}
export default {
	diskAccesses: diskAccesses,
	"diskAccesses/privateEndpointConnections": diskAccesses_privateEndpointConnections,
	diskEncryptionSets: diskEncryptionSets,
	disks: disks,
	galleries: galleries,
	"galleries/applications": galleries_applications,
	"galleries/applications/versions": galleries_applications_versions,
	"galleries/images": galleries_images,
	"galleries/images/versions": galleries_images_versions,
	snapshots: snapshots,
};
