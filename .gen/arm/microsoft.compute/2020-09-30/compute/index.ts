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
	readonly properties?: DiskAccessProperties | undefined;
	readonly tags?: ResourceTags | undefined;
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
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
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
	readonly identity?: EncryptionSetIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: EncryptionSetProperties | undefined;
	readonly tags?: ResourceTags | undefined;
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
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly location: string;
	readonly managedBy?: string | undefined;
	readonly managedByExtended?: string[] | undefined;
	readonly name: string;
	readonly properties?: DiskProperties | undefined;
	readonly sku?: DiskSku | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly zones?: string[] | undefined;
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
	readonly properties?: GalleryProperties | undefined;
	readonly tags?: ResourceTags | undefined;
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
	readonly properties?: GalleryApplicationProperties | undefined;
	readonly tags?: ResourceTags | undefined;
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
	readonly properties?: GalleryApplicationVersionProperties | undefined;
	readonly tags?: ResourceTags | undefined;
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
	readonly properties?: GalleryImageProperties | undefined;
	readonly tags?: ResourceTags | undefined;
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
	readonly properties?: GalleryImageVersionProperties | undefined;
	readonly tags?: ResourceTags | undefined;
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
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly location: string;
	readonly managedBy?: string | undefined;
	readonly name: string;
	readonly properties?: SnapshotProperties | undefined;
	readonly sku?: SnapshotSku | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface CreationData {
	readonly createOption: "Attach" | "Copy" | "Empty" | "FromImage" | "Import" | "Restore" | "Upload";
	readonly galleryImageReference?: ImageDiskReference | undefined;
	readonly imageReference?: ImageDiskReference | undefined;
	readonly logicalSectorSize?: number | undefined;
	readonly sourceResourceId?: string | undefined;
	readonly sourceUniqueId?: string | undefined;
	readonly sourceUri?: string | undefined;
	readonly storageAccountId?: string | undefined;
	readonly uploadSizeBytes?: number | undefined;
}
export interface DataDiskImageEncryption {
	readonly diskEncryptionSetId?: string | undefined;
	readonly lun: number;
}
export interface Disallowed {
	readonly diskTypes?: string[] | undefined;
}
export interface DiskAccessProperties {
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly timeCreated?: string | undefined;
}
export interface DiskProperties {
	readonly burstingEnabled?: boolean | undefined;
	readonly creationData: CreationData;
	readonly diskAccessId?: string | undefined;
	readonly diskIOPSReadOnly?: number | undefined;
	readonly diskIOPSReadWrite?: number | undefined;
	readonly diskMBpsReadOnly?: number | undefined;
	readonly diskMBpsReadWrite?: number | undefined;
	readonly diskSizeBytes?: number | undefined;
	readonly diskSizeGB?: number | undefined;
	readonly diskState?:
		| ("ActiveSAS" | "ActiveUpload" | "Attached" | "ReadyToUpload" | "Reserved" | "Unattached")
		| undefined;
	readonly encryption?: Encryption | undefined;
	readonly encryptionSettingsCollection?: EncryptionSettingsCollection | undefined;
	readonly hyperVGeneration?: ("V1" | "V2") | undefined;
	readonly maxShares?: number | undefined;
	readonly networkAccessPolicy?: ("AllowAll" | "AllowPrivate" | "DenyAll") | undefined;
	readonly osType?: "Linux" | undefined;
	readonly provisioningState?: string | undefined;
	readonly purchasePlan?: PurchasePlan | undefined;
	readonly shareInfo?: ShareInfoElement[] | undefined;
	readonly tier?: string | undefined;
	readonly timeCreated?: string | undefined;
	readonly uniqueId?: string | undefined;
}
export interface DiskSku {
	readonly name?: ("Premium_LRS" | "StandardSSD_LRS" | "Standard_LRS" | "UltraSSD_LRS") | undefined;
	readonly tier?: string | undefined;
}
export interface Encryption {
	readonly diskEncryptionSetId?: string | undefined;
	readonly type?:
		| (
				| "EncryptionAtRestWithCustomerKey"
				| "EncryptionAtRestWithPlatformAndCustomerKeys"
				| "EncryptionAtRestWithPlatformKey"
		  )
		| undefined;
}
export interface EncryptionImages {
	readonly dataDiskImages?: DataDiskImageEncryption[] | undefined;
	readonly osDiskImage?: OSDiskImageEncryption | undefined;
}
export interface EncryptionSetIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned") | undefined;
}
export interface EncryptionSetProperties {
	readonly activeKey?: KeyForDiskEncryptionSet | undefined;
	readonly encryptionType?:
		| ("EncryptionAtRestWithCustomerKey" | "EncryptionAtRestWithPlatformAndCustomerKeys")
		| undefined;
	readonly previousKeys?: KeyForDiskEncryptionSet[] | undefined;
	readonly provisioningState?: string | undefined;
}
export interface EncryptionSettingsCollection {
	readonly enabled: boolean;
	readonly encryptionSettings?: EncryptionSettingsElement[] | undefined;
	readonly encryptionSettingsVersion?: string | undefined;
}
export interface EncryptionSettingsElement {
	readonly diskEncryptionKey?: KeyVaultAndSecretReference | undefined;
	readonly keyEncryptionKey?: KeyVaultAndKeyReference | undefined;
}
export interface ExtendedLocation {
	readonly name?: string | undefined;
	readonly type?: "EdgeZone" | undefined;
}
export interface GalleryApplicationProperties {
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
}
export interface GalleryApplicationVersionPublishingProfile {
	readonly enableHealthCheck?: boolean | undefined;
	readonly endOfLifeDate?: string | undefined;
	readonly excludeFromLatest?: boolean | undefined;
	readonly manageActions?: UserArtifactManage | undefined;
	readonly publishedDate?: string | undefined;
	readonly replicaCount?: number | undefined;
	readonly source: UserArtifactSource;
	readonly storageAccountType?: ("Premium_LRS" | "Standard_LRS" | "Standard_ZRS") | undefined;
	readonly targetRegions?: TargetRegion[] | undefined;
}
export interface GalleryArtifactVersionSource {
	readonly id?: string | undefined;
	readonly uri?: string | undefined;
}
export interface GalleryDataDiskImage {
	readonly hostCaching?: ("None" | "ReadOnly") | undefined;
	readonly lun: number;
	readonly sizeInGB?: number | undefined;
	readonly source?: GalleryArtifactVersionSource | undefined;
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
	readonly storageProfile: GalleryImageVersionStorageProfile;
}
export interface GalleryImageVersionPublishingProfile {
	readonly endOfLifeDate?: string | undefined;
	readonly excludeFromLatest?: boolean | undefined;
	readonly publishedDate?: string | undefined;
	readonly replicaCount?: number | undefined;
	readonly storageAccountType?: ("Premium_LRS" | "Standard_LRS" | "Standard_ZRS") | undefined;
	readonly targetRegions?: TargetRegion[] | undefined;
}
export interface GalleryImageVersionStorageProfile {
	readonly dataDiskImages?: GalleryDataDiskImage[] | undefined;
	readonly osDiskImage?: GalleryOSDiskImage | undefined;
	readonly source?: GalleryArtifactVersionSource | undefined;
}
export interface GalleryOSDiskImage {
	readonly hostCaching?: ("None" | "ReadOnly") | undefined;
	readonly sizeInGB?: number | undefined;
	readonly source?: GalleryArtifactVersionSource | undefined;
}
export interface GalleryProperties {
	readonly description?: string | undefined;
	readonly identifier?: GalleryIdentifier | undefined;
	readonly provisioningState?:
		| ("Creating" | "Deleting" | "Failed" | "Migrating" | "Succeeded" | "Updating")
		| undefined;
	readonly sharingProfile?: SharingProfile | undefined;
}
export interface ImageDiskReference {
	readonly id: string;
	readonly lun?: number | undefined;
}
export interface ImagePurchasePlan {
	readonly name?: string | undefined;
	readonly product?: string | undefined;
	readonly publisher?: string | undefined;
}
export interface KeyForDiskEncryptionSet {
	readonly keyUrl: string;
	readonly sourceVault?: SourceVault | undefined;
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
	readonly diskEncryptionSetId?: string | undefined;
}
export interface PrivateEndpoint {
	readonly id?: string | undefined;
}
export interface PrivateEndpointConnection {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly type?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint | undefined;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded") | undefined;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string | undefined;
	readonly description?: string | undefined;
	readonly status?: ("Approved" | "Pending" | "Rejected") | undefined;
}
export interface PurchasePlan {
	readonly name: string;
	readonly product: string;
	readonly promotionCode?: string | undefined;
	readonly publisher: string;
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
export interface ShareInfoElement {
	readonly vmUri?: string | undefined;
}
export interface SharingProfile {
	readonly groups?: SharingProfileGroup[] | undefined;
	readonly permissions?: ("Groups" | "Private") | undefined;
}
export interface SharingProfileGroup {
	readonly ids?: string[] | undefined;
	readonly type?: ("AADTenants" | "Subscriptions") | undefined;
}
export interface SnapshotProperties {
	readonly creationData: CreationData;
	readonly diskAccessId?: string | undefined;
	readonly diskSizeBytes?: number | undefined;
	readonly diskSizeGB?: number | undefined;
	readonly diskState?:
		| ("ActiveSAS" | "ActiveUpload" | "Attached" | "ReadyToUpload" | "Reserved" | "Unattached")
		| undefined;
	readonly encryption?: Encryption | undefined;
	readonly encryptionSettingsCollection?: EncryptionSettingsCollection | undefined;
	readonly hyperVGeneration?: ("V1" | "V2") | undefined;
	readonly incremental?: boolean | undefined;
	readonly networkAccessPolicy?: ("AllowAll" | "AllowPrivate" | "DenyAll") | undefined;
	readonly osType?: "Linux" | undefined;
	readonly provisioningState?: string | undefined;
	readonly purchasePlan?: PurchasePlan | undefined;
	readonly timeCreated?: string | undefined;
	readonly uniqueId?: string | undefined;
}
export interface SnapshotSku {
	readonly name?: ("Premium_LRS" | "Standard_LRS" | "Standard_ZRS") | undefined;
	readonly tier?: string | undefined;
}
export interface SourceVault {
	readonly id?: string | undefined;
}
export interface TargetRegion {
	readonly encryption?: EncryptionImages | undefined;
	readonly name: string;
	readonly regionalReplicaCount?: number | undefined;
	readonly storageAccountType?: ("Premium_LRS" | "Standard_LRS" | "Standard_ZRS") | undefined;
}
export interface UserArtifactManage {
	readonly install: string;
	readonly remove: string;
	readonly update?: string | undefined;
}
export interface UserArtifactSource {
	readonly defaultConfigurationLink?: string | undefined;
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
