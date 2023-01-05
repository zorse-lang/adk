import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class availabilitySets
	extends ArmResource<availabilitySetsComponentInputs>
	implements availabilitySetsComponentOutputs
{
	constructor(entity: ADKEntity, options: availabilitySetsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/availabilitySets", "2019-12-01", options);
	}
	public readonly apiVersion: "2019-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/availabilitySets";
}
export interface availabilitySetsComponentOutputs {
	readonly apiVersion: "2019-12-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/availabilitySets";
}
export interface availabilitySetsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: AvailabilitySetProperties;
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
}
export class galleries extends ArmResource<galleriesComponentInputs> implements galleriesComponentOutputs {
	constructor(entity: ADKEntity, options: galleriesComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/galleries", "2019-12-01", options);
	}
	public readonly apiVersion: "2019-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/galleries";
}
export interface galleriesComponentOutputs {
	readonly apiVersion: "2019-12-01";
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
		super(entity, options.name, "Microsoft.Compute/galleries/applications", "2019-12-01", options);
	}
	public readonly apiVersion: "2019-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/galleries/applications";
}
export interface galleries_applicationsComponentOutputs {
	readonly apiVersion: "2019-12-01";
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
		super(entity, options.name, "Microsoft.Compute/galleries/applications/versions", "2019-12-01", options);
	}
	public readonly apiVersion: "2019-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/galleries/applications/versions";
}
export interface galleries_applications_versionsComponentOutputs {
	readonly apiVersion: "2019-12-01";
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
		super(entity, options.name, "Microsoft.Compute/galleries/images", "2019-12-01", options);
	}
	public readonly apiVersion: "2019-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/galleries/images";
}
export interface galleries_imagesComponentOutputs {
	readonly apiVersion: "2019-12-01";
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
		super(entity, options.name, "Microsoft.Compute/galleries/images/versions", "2019-12-01", options);
	}
	public readonly apiVersion: "2019-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/galleries/images/versions";
}
export interface galleries_images_versionsComponentOutputs {
	readonly apiVersion: "2019-12-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/galleries/images/versions";
}
export interface galleries_images_versionsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: GalleryImageVersionProperties;
	readonly tags?: ResourceTags;
}
export class hostGroups extends ArmResource<hostGroupsComponentInputs> implements hostGroupsComponentOutputs {
	constructor(entity: ADKEntity, options: hostGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/hostGroups", "2019-12-01", options);
	}
	public readonly apiVersion: "2019-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/hostGroups";
}
export interface hostGroupsComponentOutputs {
	readonly apiVersion: "2019-12-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/hostGroups";
}
export interface hostGroupsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: DedicatedHostGroupProperties;
	readonly tags?: ResourceTags;
	readonly zones?: string[];
}
export class hostGroups_hosts
	extends ArmResource<hostGroups_hostsComponentInputs>
	implements hostGroups_hostsComponentOutputs
{
	constructor(entity: ADKEntity, options: hostGroups_hostsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/hostGroups/hosts", "2019-12-01", options);
	}
	public readonly apiVersion: "2019-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/hostGroups/hosts";
}
export interface hostGroups_hostsComponentOutputs {
	readonly apiVersion: "2019-12-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/hostGroups/hosts";
}
export interface hostGroups_hostsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: DedicatedHostProperties;
	readonly sku: Sku;
	readonly tags?: ResourceTags;
}
export class images extends ArmResource<imagesComponentInputs> implements imagesComponentOutputs {
	constructor(entity: ADKEntity, options: imagesComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/images", "2019-12-01", options);
	}
	public readonly apiVersion: "2019-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/images";
}
export interface imagesComponentOutputs {
	readonly apiVersion: "2019-12-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/images";
}
export interface imagesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ImageProperties;
	readonly tags?: ResourceTags;
}
export class locations_publishers_artifacttypes_offers_skus_versions
	extends ArmResource<locations_publishers_artifacttypes_offers_skus_versionsComponentInputs>
	implements locations_publishers_artifacttypes_offers_skus_versionsComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_publishers_artifacttypes_offers_skus_versionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Compute/locations/publishers/artifacttypes/offers/skus/versions",
			"2019-12-01",
			options,
		);
	}
	public readonly apiVersion: "2019-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/locations/publishers/artifacttypes/offers/skus/versions";
}
export interface locations_publishers_artifacttypes_offers_skus_versionsComponentOutputs {
	readonly apiVersion: "2019-12-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/locations/publishers/artifacttypes/offers/skus/versions";
}
export interface locations_publishers_artifacttypes_offers_skus_versionsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: VirtualMachineImageProperties;
	readonly tags?: VirtualMachineImageResourceTags;
}
export class locations_publishers_artifacttypes_types_versions
	extends ArmResource<locations_publishers_artifacttypes_types_versionsComponentInputs>
	implements locations_publishers_artifacttypes_types_versionsComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_publishers_artifacttypes_types_versionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Compute/locations/publishers/artifacttypes/types/versions",
			"2019-12-01",
			options,
		);
	}
	public readonly apiVersion: "2019-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/locations/publishers/artifacttypes/types/versions";
}
export interface locations_publishers_artifacttypes_types_versionsComponentOutputs {
	readonly apiVersion: "2019-12-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/locations/publishers/artifacttypes/types/versions";
}
export interface locations_publishers_artifacttypes_types_versionsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: VirtualMachineExtensionImageProperties;
	readonly tags?: ResourceTags;
}
export class proximityPlacementGroups
	extends ArmResource<proximityPlacementGroupsComponentInputs>
	implements proximityPlacementGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: proximityPlacementGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/proximityPlacementGroups", "2019-12-01", options);
	}
	public readonly apiVersion: "2019-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/proximityPlacementGroups";
}
export interface proximityPlacementGroupsComponentOutputs {
	readonly apiVersion: "2019-12-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/proximityPlacementGroups";
}
export interface proximityPlacementGroupsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ProximityPlacementGroupProperties;
	readonly tags?: ResourceTags;
}
export class sshPublicKeys extends ArmResource<sshPublicKeysComponentInputs> implements sshPublicKeysComponentOutputs {
	constructor(entity: ADKEntity, options: sshPublicKeysComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/sshPublicKeys", "2019-12-01", options);
	}
	public readonly apiVersion: "2019-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/sshPublicKeys";
}
export interface sshPublicKeysComponentOutputs {
	readonly apiVersion: "2019-12-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/sshPublicKeys";
}
export interface sshPublicKeysComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: SshPublicKeyResourceProperties;
	readonly tags?: ResourceTags;
}
export class virtualMachines
	extends ArmResource<virtualMachinesComponentInputs>
	implements virtualMachinesComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualMachinesComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/virtualMachines", "2019-12-01", options);
	}
	public readonly apiVersion: "2019-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/virtualMachines";
}
export interface virtualMachinesComponentOutputs {
	readonly apiVersion: "2019-12-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/virtualMachines";
}
export interface virtualMachinesComponentInputs {
	readonly identity?: VirtualMachineIdentity;
	readonly location: string;
	readonly name: string;
	readonly plan?: Plan;
	readonly properties?: VirtualMachineProperties;
	readonly resources?: VirtualMachineExtension[];
	readonly tags?: ResourceTags;
	readonly zones?: string[];
}
export class virtualMachines_extensions
	extends ArmResource<virtualMachines_extensionsComponentInputs>
	implements virtualMachines_extensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualMachines_extensionsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/virtualMachines/extensions", "2019-12-01", options);
	}
	public readonly apiVersion: "2019-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/virtualMachines/extensions";
}
export interface virtualMachines_extensionsComponentOutputs {
	readonly apiVersion: "2019-12-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/virtualMachines/extensions";
}
export interface virtualMachines_extensionsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: VirtualMachineExtensionProperties;
	readonly tags?: ResourceTags;
}
export class virtualMachineScaleSets
	extends ArmResource<virtualMachineScaleSetsComponentInputs>
	implements virtualMachineScaleSetsComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualMachineScaleSetsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/virtualMachineScaleSets", "2019-12-01", options);
	}
	public readonly apiVersion: "2019-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/virtualMachineScaleSets";
}
export interface virtualMachineScaleSetsComponentOutputs {
	readonly apiVersion: "2019-12-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/virtualMachineScaleSets";
}
export interface virtualMachineScaleSetsComponentInputs {
	readonly identity?: VirtualMachineScaleSetIdentity;
	readonly location: string;
	readonly name: string;
	readonly plan?: Plan;
	readonly properties?: VirtualMachineScaleSetProperties;
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
	readonly zones?: string[];
}
export class virtualMachineScaleSets_extensions
	extends ArmResource<virtualMachineScaleSets_extensionsComponentInputs>
	implements virtualMachineScaleSets_extensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualMachineScaleSets_extensionsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/virtualMachineScaleSets/extensions", "2019-12-01", options);
	}
	public readonly apiVersion: "2019-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/virtualMachineScaleSets/extensions";
}
export interface virtualMachineScaleSets_extensionsComponentOutputs {
	readonly apiVersion: "2019-12-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/virtualMachineScaleSets/extensions";
}
export interface virtualMachineScaleSets_extensionsComponentInputs {
	readonly name: string;
	readonly properties?: VirtualMachineScaleSetExtensionProperties;
}
export class virtualMachineScaleSets_rollingUpgrades
	extends ArmResource<virtualMachineScaleSets_rollingUpgradesComponentInputs>
	implements virtualMachineScaleSets_rollingUpgradesComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualMachineScaleSets_rollingUpgradesComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/virtualMachineScaleSets/rollingUpgrades", "2019-12-01", options);
	}
	public readonly apiVersion: "2019-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/virtualMachineScaleSets/rollingUpgrades";
}
export interface virtualMachineScaleSets_rollingUpgradesComponentOutputs {
	readonly apiVersion: "2019-12-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/virtualMachineScaleSets/rollingUpgrades";
}
export interface virtualMachineScaleSets_rollingUpgradesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: RollingUpgradeStatusInfoProperties;
	readonly tags?: ResourceTags;
}
export class virtualMachineScaleSets_virtualmachines
	extends ArmResource<virtualMachineScaleSets_virtualmachinesComponentInputs>
	implements virtualMachineScaleSets_virtualmachinesComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualMachineScaleSets_virtualmachinesComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/virtualMachineScaleSets/virtualmachines", "2019-12-01", options);
	}
	public readonly apiVersion: "2019-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/virtualMachineScaleSets/virtualmachines";
}
export interface virtualMachineScaleSets_virtualmachinesComponentOutputs {
	readonly apiVersion: "2019-12-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/virtualMachineScaleSets/virtualmachines";
}
export interface virtualMachineScaleSets_virtualmachinesComponentInputs {
	readonly instanceId?: string;
	readonly location: string;
	readonly name: string;
	readonly plan?: Plan;
	readonly properties?: VirtualMachineScaleSetVMProperties;
	readonly resources?: VirtualMachineExtension[];
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
	readonly zones?: string[];
}
export class virtualMachineScaleSets_virtualMachines_extensions
	extends ArmResource<virtualMachineScaleSets_virtualMachines_extensionsComponentInputs>
	implements virtualMachineScaleSets_virtualMachines_extensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualMachineScaleSets_virtualMachines_extensionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Compute/virtualMachineScaleSets/virtualMachines/extensions",
			"2019-12-01",
			options,
		);
	}
	public readonly apiVersion: "2019-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/virtualMachineScaleSets/virtualMachines/extensions";
}
export interface virtualMachineScaleSets_virtualMachines_extensionsComponentOutputs {
	readonly apiVersion: "2019-12-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/virtualMachineScaleSets/virtualMachines/extensions";
}
export interface virtualMachineScaleSets_virtualMachines_extensionsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: VirtualMachineExtensionProperties;
	readonly tags?: ResourceTags;
}
export interface AdditionalCapabilities {
	readonly ultraSSDEnabled?: boolean;
}
export interface AdditionalUnattendContent {
	readonly componentName?: "Microsoft-Windows-Shell-Setup";
	readonly content?: string;
	readonly passName?: "OobeSystem";
	readonly settingName?: "AutoLogon";
}
export interface ApiEntityReference {
	readonly id?: string;
}
export interface ApiError {
	readonly code?: string;
	readonly details?: ApiErrorBase[];
	readonly innererror?: InnerError;
	readonly message?: string;
	readonly target?: string;
}
export interface ApiErrorBase {
	readonly code?: string;
	readonly message?: string;
	readonly target?: string;
}
export interface AutomaticOSUpgradePolicy {
	readonly disableAutomaticRollback?: boolean;
	readonly enableAutomaticOSUpgrade?: boolean;
}
export interface AutomaticOSUpgradeProperties {
	readonly automaticOSUpgradeSupported: boolean;
}
export interface AutomaticRepairsPolicy {
	readonly enabled?: boolean;
	readonly gracePeriod?: string;
}
export interface AvailabilitySetProperties {
	readonly platformFaultDomainCount?: number;
	readonly platformUpdateDomainCount?: number;
	readonly proximityPlacementGroup?: SubResource;
	readonly statuses?: InstanceViewStatus[];
	readonly virtualMachines?: SubResource[];
}
export interface BillingProfile {
	readonly maxPrice?: number;
}
export interface BootDiagnostics {
	readonly enabled?: boolean;
	readonly storageUri?: string;
}
export interface BootDiagnosticsInstanceView {
	readonly consoleScreenshotBlobUri?: string;
	readonly serialConsoleLogBlobUri?: string;
	readonly status?: InstanceViewStatus;
}
export interface DataDisk {
	readonly caching?: "None" | "ReadOnly";
	readonly createOption: "Attach" | "Empty" | "FromImage";
	readonly diskIOPSReadWrite?: number;
	readonly diskMBpsReadWrite?: number;
	readonly diskSizeGB?: number;
	readonly image?: VirtualHardDisk;
	readonly lun: number;
	readonly managedDisk?: ManagedDiskParameters;
	readonly name?: string;
	readonly toBeDetached?: boolean;
	readonly vhd?: VirtualHardDisk;
	readonly writeAcceleratorEnabled?: boolean;
}
export interface DataDiskImage {
	readonly lun?: number;
}
export interface DataDiskImageEncryption {
	readonly diskEncryptionSetId?: string;
	readonly lun: number;
}
export interface DedicatedHostAllocatableVM {
	readonly count?: number;
	readonly vmSize?: string;
}
export interface DedicatedHostAvailableCapacity {
	readonly allocatableVMs?: DedicatedHostAllocatableVM[];
}
export interface DedicatedHostGroupProperties {
	readonly hosts?: SubResourceReadOnly[];
	readonly platformFaultDomainCount: number;
}
export interface DedicatedHostInstanceView {
	readonly assetId?: string;
	readonly availableCapacity?: DedicatedHostAvailableCapacity;
	readonly statuses?: InstanceViewStatus[];
}
export interface DedicatedHostProperties {
	readonly autoReplaceOnFailure?: boolean;
	readonly hostId?: string;
	readonly instanceView?: DedicatedHostInstanceView;
	readonly licenseType?: "None" | "Windows_Server_Hybrid";
	readonly platformFaultDomain?: number;
	readonly provisioningState?: string;
	readonly provisioningTime?: string;
	readonly virtualMachines?: SubResourceReadOnly[];
}
export interface DiagnosticsProfile {
	readonly bootDiagnostics?: BootDiagnostics;
}
export interface DiffDiskSettings {
	readonly option?: "Local";
	readonly placement?: "CacheDisk" | "ResourceDisk";
}
export interface Disallowed {
	readonly diskTypes?: string[];
}
export interface DiskEncryptionSetParameters {
	readonly id?: string;
}
export interface DiskEncryptionSettings {
	readonly diskEncryptionKey?: KeyVaultSecretReference;
	readonly enabled?: boolean;
	readonly keyEncryptionKey?: KeyVaultKeyReference;
}
export interface DiskInstanceView {
	readonly encryptionSettings?: DiskEncryptionSettings[];
	readonly name?: string;
	readonly statuses?: InstanceViewStatus[];
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
}
export interface HardwareProfile {
	readonly vmSize?:
		| "Basic_A0"
		| "Basic_A1"
		| "Basic_A2"
		| "Basic_A3"
		| "Basic_A4"
		| "Standard_A0"
		| "Standard_A1"
		| "Standard_A10"
		| "Standard_A11"
		| "Standard_A1_v2"
		| "Standard_A2"
		| "Standard_A2_v2"
		| "Standard_A2m_v2"
		| "Standard_A3"
		| "Standard_A4"
		| "Standard_A4_v2"
		| "Standard_A4m_v2"
		| "Standard_A5"
		| "Standard_A6"
		| "Standard_A7"
		| "Standard_A8"
		| "Standard_A8_v2"
		| "Standard_A8m_v2"
		| "Standard_A9"
		| "Standard_B1ms"
		| "Standard_B1s"
		| "Standard_B2ms"
		| "Standard_B2s"
		| "Standard_B4ms"
		| "Standard_B8ms"
		| "Standard_D1"
		| "Standard_D11"
		| "Standard_D11_v2"
		| "Standard_D12"
		| "Standard_D12_v2"
		| "Standard_D13"
		| "Standard_D13_v2"
		| "Standard_D14"
		| "Standard_D14_v2"
		| "Standard_D15_v2"
		| "Standard_D16_v3"
		| "Standard_D16s_v3"
		| "Standard_D1_v2"
		| "Standard_D2"
		| "Standard_D2_v2"
		| "Standard_D2_v3"
		| "Standard_D2s_v3"
		| "Standard_D3"
		| "Standard_D32_v3"
		| "Standard_D32s_v3"
		| "Standard_D3_v2"
		| "Standard_D4"
		| "Standard_D4_v2"
		| "Standard_D4_v3"
		| "Standard_D4s_v3"
		| "Standard_D5_v2"
		| "Standard_D64_v3"
		| "Standard_D64s_v3"
		| "Standard_D8_v3"
		| "Standard_D8s_v3"
		| "Standard_DS1"
		| "Standard_DS11"
		| "Standard_DS11_v2"
		| "Standard_DS12"
		| "Standard_DS12_v2"
		| "Standard_DS13"
		| "Standard_DS13-2_v2"
		| "Standard_DS13-4_v2"
		| "Standard_DS13_v2"
		| "Standard_DS14"
		| "Standard_DS14-4_v2"
		| "Standard_DS14-8_v2"
		| "Standard_DS14_v2"
		| "Standard_DS15_v2"
		| "Standard_DS1_v2"
		| "Standard_DS2"
		| "Standard_DS2_v2"
		| "Standard_DS3"
		| "Standard_DS3_v2"
		| "Standard_DS4"
		| "Standard_DS4_v2"
		| "Standard_DS5_v2"
		| "Standard_E16_v3"
		| "Standard_E16s_v3"
		| "Standard_E2_v3"
		| "Standard_E2s_v3"
		| "Standard_E32-16_v3"
		| "Standard_E32-8s_v3"
		| "Standard_E32_v3"
		| "Standard_E32s_v3"
		| "Standard_E4_v3"
		| "Standard_E4s_v3"
		| "Standard_E64-16s_v3"
		| "Standard_E64-32s_v3"
		| "Standard_E64_v3"
		| "Standard_E64s_v3"
		| "Standard_E8_v3"
		| "Standard_E8s_v3"
		| "Standard_F1"
		| "Standard_F16"
		| "Standard_F16s"
		| "Standard_F16s_v2"
		| "Standard_F1s"
		| "Standard_F2"
		| "Standard_F2s"
		| "Standard_F2s_v2"
		| "Standard_F32s_v2"
		| "Standard_F4"
		| "Standard_F4s"
		| "Standard_F4s_v2"
		| "Standard_F64s_v2"
		| "Standard_F72s_v2"
		| "Standard_F8"
		| "Standard_F8s"
		| "Standard_F8s_v2"
		| "Standard_G1"
		| "Standard_G2"
		| "Standard_G3"
		| "Standard_G4"
		| "Standard_G5"
		| "Standard_GS1"
		| "Standard_GS2"
		| "Standard_GS3"
		| "Standard_GS4"
		| "Standard_GS4-4"
		| "Standard_GS4-8"
		| "Standard_GS5"
		| "Standard_GS5-16"
		| "Standard_GS5-8"
		| "Standard_H16"
		| "Standard_H16m"
		| "Standard_H16mr"
		| "Standard_H16r"
		| "Standard_H8"
		| "Standard_H8m"
		| "Standard_L16s"
		| "Standard_L32s"
		| "Standard_L4s"
		| "Standard_L8s"
		| "Standard_M128-32ms"
		| "Standard_M128-64ms"
		| "Standard_M128ms"
		| "Standard_M128s"
		| "Standard_M64-16ms"
		| "Standard_M64-32ms"
		| "Standard_M64ms"
		| "Standard_M64s"
		| "Standard_NC12"
		| "Standard_NC12s_v2"
		| "Standard_NC12s_v3"
		| "Standard_NC24"
		| "Standard_NC24r"
		| "Standard_NC24rs_v2"
		| "Standard_NC24rs_v3"
		| "Standard_NC24s_v2"
		| "Standard_NC24s_v3"
		| "Standard_NC6"
		| "Standard_NC6s_v2"
		| "Standard_NC6s_v3"
		| "Standard_ND12s"
		| "Standard_ND24rs"
		| "Standard_ND24s"
		| "Standard_ND6s"
		| "Standard_NV12"
		| "Standard_NV24"
		| "Standard_NV6";
}
export interface ImageDataDisk {
	readonly blobUri?: string;
	readonly caching?: "None" | "ReadOnly";
	readonly diskEncryptionSet?: DiskEncryptionSetParameters;
	readonly diskSizeGB?: number;
	readonly lun: number;
	readonly managedDisk?: SubResource;
	readonly snapshot?: SubResource;
	readonly storageAccountType?: "Premium_LRS" | "StandardSSD_LRS" | "Standard_LRS" | "UltraSSD_LRS";
}
export interface ImageOSDisk {
	readonly blobUri?: string;
	readonly caching?: "None" | "ReadOnly";
	readonly diskEncryptionSet?: DiskEncryptionSetParameters;
	readonly diskSizeGB?: number;
	readonly managedDisk?: SubResource;
	readonly osState: "Generalized";
	readonly osType: "Linux";
	readonly snapshot?: SubResource;
	readonly storageAccountType?: "Premium_LRS" | "StandardSSD_LRS" | "Standard_LRS" | "UltraSSD_LRS";
}
export interface ImageProperties {
	readonly hyperVGeneration?: "V1" | "V2";
	readonly provisioningState?: string;
	readonly sourceVirtualMachine?: SubResource;
	readonly storageProfile?: ImageStorageProfile;
}
export interface ImagePurchasePlan {
	readonly name?: string;
	readonly product?: string;
	readonly publisher?: string;
}
export interface ImageReference {
	readonly exactVersion?: string;
	readonly id?: string;
	readonly offer?: string;
	readonly publisher?: string;
	readonly sku?: string;
	readonly version?: string;
}
export interface ImageStorageProfile {
	readonly dataDisks?: ImageDataDisk[];
	readonly osDisk?: ImageOSDisk;
	readonly zoneResilient?: boolean;
}
export interface InnerError {
	readonly errordetail?: string;
	readonly exceptiontype?: string;
}
export interface InstanceViewStatus {
	readonly code?: string;
	readonly displayStatus?: string;
	readonly level?: "Error" | "Info";
	readonly message?: string;
	readonly time?: string;
}
export interface KeyVaultKeyReference {
	readonly keyUrl: string;
	readonly sourceVault: SubResource;
}
export interface KeyVaultSecretReference {
	readonly secretUrl: string;
	readonly sourceVault: SubResource;
}
export interface LinuxConfiguration {
	readonly disablePasswordAuthentication?: boolean;
	readonly provisionVMAgent?: boolean;
	readonly ssh?: SshConfiguration;
}
export interface MaintenanceRedeployStatus {
	readonly isCustomerInitiatedMaintenanceAllowed?: boolean;
	readonly lastOperationMessage?: string;
	readonly lastOperationResultCode?: "MaintenanceAborted" | "MaintenanceCompleted" | "None";
	readonly maintenanceWindowEndTime?: string;
	readonly maintenanceWindowStartTime?: string;
	readonly preMaintenanceWindowEndTime?: string;
	readonly preMaintenanceWindowStartTime?: string;
}
export interface ManagedDiskParameters {
	readonly diskEncryptionSet?: DiskEncryptionSetParameters;
	readonly id?: string;
	readonly storageAccountType?: "Premium_LRS" | "StandardSSD_LRS" | "Standard_LRS" | "UltraSSD_LRS";
}
export interface NetworkInterfaceReference {
	readonly id?: string;
	readonly properties?: NetworkInterfaceReferenceProperties;
}
export interface NetworkInterfaceReferenceProperties {
	readonly primary?: boolean;
}
export interface NetworkProfile {
	readonly networkInterfaces?: NetworkInterfaceReference[];
}
export interface OSDisk {
	readonly caching?: "None" | "ReadOnly";
	readonly createOption: "Attach" | "Empty" | "FromImage";
	readonly diffDiskSettings?: DiffDiskSettings;
	readonly diskSizeGB?: number;
	readonly encryptionSettings?: DiskEncryptionSettings;
	readonly image?: VirtualHardDisk;
	readonly managedDisk?: ManagedDiskParameters;
	readonly name?: string;
	readonly osType?: "Linux";
	readonly vhd?: VirtualHardDisk;
	readonly writeAcceleratorEnabled?: boolean;
}
export interface OSDiskImage {
	readonly operatingSystem: "Linux";
}
export interface OSDiskImageEncryption {
	readonly diskEncryptionSetId?: string;
}
export interface OSProfile {
	readonly adminPassword?: string;
	readonly adminUsername?: string;
	readonly allowExtensionOperations?: boolean;
	readonly computerName?: string;
	readonly customData?: string;
	readonly linuxConfiguration?: LinuxConfiguration;
	readonly requireGuestProvisionSignal?: boolean;
	readonly secrets?: VaultSecretGroup[];
	readonly windowsConfiguration?: WindowsConfiguration;
}
export interface Plan {
	readonly name?: string;
	readonly product?: string;
	readonly promotionCode?: string;
	readonly publisher?: string;
}
export interface ProximityPlacementGroupProperties {
	readonly availabilitySets?: SubResourceWithColocationStatus[];
	readonly colocationStatus?: InstanceViewStatus;
	readonly proximityPlacementGroupType?: "Standard" | "Ultra";
	readonly virtualMachines?: SubResourceWithColocationStatus[];
	readonly virtualMachineScaleSets?: SubResourceWithColocationStatus[];
}
export interface PurchasePlan {
	readonly name: string;
	readonly product: string;
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
export interface RollingUpgradePolicy {
	readonly maxBatchInstancePercent?: number;
	readonly maxUnhealthyInstancePercent?: number;
	readonly maxUnhealthyUpgradedInstancePercent?: number;
	readonly pauseTimeBetweenBatches?: string;
}
export interface RollingUpgradeProgressInfo {
	readonly failedInstanceCount?: number;
	readonly inProgressInstanceCount?: number;
	readonly pendingInstanceCount?: number;
	readonly successfulInstanceCount?: number;
}
export interface RollingUpgradeRunningStatus {
	readonly code?: "Cancelled" | "Completed" | "Faulted";
	readonly lastAction?: "Cancel";
	readonly lastActionTime?: string;
	readonly startTime?: string;
}
export interface RollingUpgradeStatusInfoProperties {
	readonly error?: ApiError;
	readonly policy?: RollingUpgradePolicy;
	readonly progress?: RollingUpgradeProgressInfo;
	readonly runningStatus?: RollingUpgradeRunningStatus;
}
export interface ScaleInPolicy {
	readonly rules?: "Default" | "NewestVM" | "OldestVM"[];
}
export interface ScheduledEventsProfile {
	readonly terminateNotificationProfile?: TerminateNotificationProfile;
}
export interface Sku {
	readonly capacity?: number;
	readonly name?: string;
	readonly tier?: string;
}
export interface SshConfiguration {
	readonly publicKeys?: SshPublicKey[];
}
export interface SshPublicKey {
	readonly keyData?: string;
	readonly path?: string;
}
export interface SshPublicKeyResourceProperties {
	readonly publicKey?: string;
}
export interface StorageProfile {
	readonly dataDisks?: DataDisk[];
	readonly imageReference?: ImageReference;
	readonly osDisk?: OSDisk;
}
export interface SubResource {
	readonly id?: string;
}
export interface SubResourceReadOnly {
	readonly id?: string;
}
export interface SubResourceWithColocationStatus {
	readonly colocationStatus?: InstanceViewStatus;
	readonly id?: string;
}
export interface TargetRegion {
	readonly encryption?: EncryptionImages;
	readonly name: string;
	readonly regionalReplicaCount?: number;
	readonly storageAccountType?: "Premium_LRS" | "Standard_LRS" | "Standard_ZRS";
}
export interface TerminateNotificationProfile {
	readonly enable?: boolean;
	readonly notBeforeTimeout?: string;
}
export interface UpgradePolicy {
	readonly automaticOSUpgradePolicy?: AutomaticOSUpgradePolicy;
	readonly mode?: "Automatic" | "Manual";
	readonly rollingUpgradePolicy?: RollingUpgradePolicy;
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
export interface UserAssignedIdentitiesValue {
	readonly clientId?: string;
	readonly principalId?: string;
}
export interface VaultCertificate {
	readonly certificateStore?: string;
	readonly certificateUrl?: string;
}
export interface VaultSecretGroup {
	readonly sourceVault?: SubResource;
	readonly vaultCertificates?: VaultCertificate[];
}
export interface VirtualHardDisk {
	readonly uri?: string;
}
export interface VirtualMachineAgentInstanceView {
	readonly extensionHandlers?: VirtualMachineExtensionHandlerInstanceView[];
	readonly statuses?: InstanceViewStatus[];
	readonly vmAgentVersion?: string;
}
export interface VirtualMachineExtension {
	readonly id?: string;
	readonly location: string;
	readonly name?: string;
	readonly properties?: VirtualMachineExtensionProperties;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface VirtualMachineExtensionHandlerInstanceView {
	readonly status?: InstanceViewStatus;
	readonly type?: string;
	readonly typeHandlerVersion?: string;
}
export interface VirtualMachineExtensionImageProperties {
	readonly computeRole: string;
	readonly handlerSchema: string;
	readonly operatingSystem: string;
	readonly supportsMultipleExtensions?: boolean;
	readonly vmScaleSetEnabled?: boolean;
}
export interface VirtualMachineExtensionInstanceView {
	readonly name?: string;
	readonly statuses?: InstanceViewStatus[];
	readonly substatuses?: InstanceViewStatus[];
	readonly type?: string;
	readonly typeHandlerVersion?: string;
}
export interface VirtualMachineExtensionProperties {
	readonly autoUpgradeMinorVersion?: boolean;
	readonly forceUpdateTag?: string;
	readonly instanceView?: VirtualMachineExtensionInstanceView;
	readonly protectedSettings?: any;
	readonly provisioningState?: string;
	readonly publisher?: string;
	readonly settings?: any;
	readonly type?: string;
	readonly typeHandlerVersion?: string;
}
export interface VirtualMachineHealthStatus {
	readonly status?: InstanceViewStatus;
}
export interface VirtualMachineIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned" | "SystemAssigned, UserAssigned";
	readonly userAssignedIdentities?: VirtualMachineIdentityUserAssignedIdentities;
}
export interface VirtualMachineIdentityUserAssignedIdentities {
	readonly [key: string]: UserAssignedIdentitiesValue;
}
export interface VirtualMachineImageProperties {
	readonly automaticOSUpgradeProperties?: AutomaticOSUpgradeProperties;
	readonly dataDiskImages?: DataDiskImage[];
	readonly hyperVGeneration?: "V1" | "V2";
	readonly osDiskImage?: OSDiskImage;
	readonly plan?: PurchasePlan;
}
export interface VirtualMachineImageResourceTags {
	readonly [key: string]: string;
}
export interface VirtualMachineInstanceView {
	readonly bootDiagnostics?: BootDiagnosticsInstanceView;
	readonly computerName?: string;
	readonly disks?: DiskInstanceView[];
	readonly extensions?: VirtualMachineExtensionInstanceView[];
	readonly hyperVGeneration?: "V1" | "V2";
	readonly maintenanceRedeployStatus?: MaintenanceRedeployStatus;
	readonly osName?: string;
	readonly osVersion?: string;
	readonly platformFaultDomain?: number;
	readonly platformUpdateDomain?: number;
	readonly rdpThumbPrint?: string;
	readonly statuses?: InstanceViewStatus[];
	readonly vmAgent?: VirtualMachineAgentInstanceView;
}
export interface VirtualMachineProperties {
	readonly additionalCapabilities?: AdditionalCapabilities;
	readonly availabilitySet?: SubResource;
	readonly billingProfile?: BillingProfile;
	readonly diagnosticsProfile?: DiagnosticsProfile;
	readonly evictionPolicy?: "Deallocate" | "Delete";
	readonly hardwareProfile?: HardwareProfile;
	readonly host?: SubResource;
	readonly instanceView?: VirtualMachineInstanceView;
	readonly licenseType?: string;
	readonly networkProfile?: NetworkProfile;
	readonly osProfile?: OSProfile;
	readonly priority?: "Low" | "Regular" | "Spot";
	readonly provisioningState?: string;
	readonly proximityPlacementGroup?: SubResource;
	readonly storageProfile?: StorageProfile;
	readonly virtualMachineScaleSet?: SubResource;
	readonly vmId?: string;
}
export interface VirtualMachineScaleSetDataDisk {
	readonly caching?: "None" | "ReadOnly";
	readonly createOption: "Attach" | "Empty" | "FromImage";
	readonly diskIOPSReadWrite?: number;
	readonly diskMBpsReadWrite?: number;
	readonly diskSizeGB?: number;
	readonly lun: number;
	readonly managedDisk?: VirtualMachineScaleSetManagedDiskParameters;
	readonly name?: string;
	readonly writeAcceleratorEnabled?: boolean;
}
export interface VirtualMachineScaleSetExtension {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: VirtualMachineScaleSetExtensionProperties;
	readonly type?: string;
}
export interface VirtualMachineScaleSetExtensionProfile {
	readonly extensions?: VirtualMachineScaleSetExtension[];
}
export interface VirtualMachineScaleSetExtensionProperties {
	readonly autoUpgradeMinorVersion?: boolean;
	readonly forceUpdateTag?: string;
	readonly protectedSettings?: any;
	readonly provisionAfterExtensions?: string[];
	readonly provisioningState?: string;
	readonly publisher?: string;
	readonly settings?: any;
	readonly type?: string;
	readonly typeHandlerVersion?: string;
}
export interface VirtualMachineScaleSetIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned" | "SystemAssigned, UserAssigned";
	readonly userAssignedIdentities?: VirtualMachineScaleSetIdentityUserAssignedIdentities;
}
export interface VirtualMachineScaleSetIdentityUserAssignedIdentities {
	readonly [key: string]: VirtualMachineScaleSetIdentityUserAssignedIdentitiesValue;
}
export interface VirtualMachineScaleSetIdentityUserAssignedIdentitiesValue {
	readonly clientId?: string;
	readonly principalId?: string;
}
export interface VirtualMachineScaleSetIPConfiguration {
	readonly id?: string;
	readonly name: string;
	readonly properties?: VirtualMachineScaleSetIPConfigurationProperties;
}
export interface VirtualMachineScaleSetIPConfigurationProperties {
	readonly applicationGatewayBackendAddressPools?: SubResource[];
	readonly applicationSecurityGroups?: SubResource[];
	readonly loadBalancerBackendAddressPools?: SubResource[];
	readonly loadBalancerInboundNatPools?: SubResource[];
	readonly primary?: boolean;
	readonly privateIPAddressVersion?: "IPv4" | "IPv6";
	readonly publicIPAddressConfiguration?: VirtualMachineScaleSetPublicIPAddressConfiguration;
	readonly subnet?: ApiEntityReference;
}
export interface VirtualMachineScaleSetIpTag {
	readonly ipTagType?: string;
	readonly tag?: string;
}
export interface VirtualMachineScaleSetManagedDiskParameters {
	readonly diskEncryptionSet?: DiskEncryptionSetParameters;
	readonly storageAccountType?: "Premium_LRS" | "StandardSSD_LRS" | "Standard_LRS" | "UltraSSD_LRS";
}
export interface VirtualMachineScaleSetNetworkConfiguration {
	readonly id?: string;
	readonly name: string;
	readonly properties?: VirtualMachineScaleSetNetworkConfigurationProperties;
}
export interface VirtualMachineScaleSetNetworkConfigurationDnsSettings {
	readonly dnsServers?: string[];
}
export interface VirtualMachineScaleSetNetworkConfigurationProperties {
	readonly dnsSettings?: VirtualMachineScaleSetNetworkConfigurationDnsSettings;
	readonly enableAcceleratedNetworking?: boolean;
	readonly enableIPForwarding?: boolean;
	readonly ipConfigurations: VirtualMachineScaleSetIPConfiguration[];
	readonly networkSecurityGroup?: SubResource;
	readonly primary?: boolean;
}
export interface VirtualMachineScaleSetNetworkProfile {
	readonly healthProbe?: ApiEntityReference;
	readonly networkInterfaceConfigurations?: VirtualMachineScaleSetNetworkConfiguration[];
}
export interface VirtualMachineScaleSetOSDisk {
	readonly caching?: "None" | "ReadOnly";
	readonly createOption: "Attach" | "Empty" | "FromImage";
	readonly diffDiskSettings?: DiffDiskSettings;
	readonly diskSizeGB?: number;
	readonly image?: VirtualHardDisk;
	readonly managedDisk?: VirtualMachineScaleSetManagedDiskParameters;
	readonly name?: string;
	readonly osType?: "Linux";
	readonly vhdContainers?: string[];
	readonly writeAcceleratorEnabled?: boolean;
}
export interface VirtualMachineScaleSetOSProfile {
	readonly adminPassword?: string;
	readonly adminUsername?: string;
	readonly computerNamePrefix?: string;
	readonly customData?: string;
	readonly linuxConfiguration?: LinuxConfiguration;
	readonly secrets?: VaultSecretGroup[];
	readonly windowsConfiguration?: WindowsConfiguration;
}
export interface VirtualMachineScaleSetProperties {
	readonly additionalCapabilities?: AdditionalCapabilities;
	readonly automaticRepairsPolicy?: AutomaticRepairsPolicy;
	readonly doNotRunExtensionsOnOverprovisionedVMs?: boolean;
	readonly overprovision?: boolean;
	readonly platformFaultDomainCount?: number;
	readonly provisioningState?: string;
	readonly proximityPlacementGroup?: SubResource;
	readonly scaleInPolicy?: ScaleInPolicy;
	readonly singlePlacementGroup?: boolean;
	readonly uniqueId?: string;
	readonly upgradePolicy?: UpgradePolicy;
	readonly virtualMachineProfile?: VirtualMachineScaleSetVMProfile;
	readonly zoneBalance?: boolean;
}
export interface VirtualMachineScaleSetPublicIPAddressConfiguration {
	readonly name: string;
	readonly properties?: VirtualMachineScaleSetPublicIPAddressConfigurationProperties;
}
export interface VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings {
	readonly domainNameLabel: string;
}
export interface VirtualMachineScaleSetPublicIPAddressConfigurationProperties {
	readonly dnsSettings?: VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings;
	readonly idleTimeoutInMinutes?: number;
	readonly ipTags?: VirtualMachineScaleSetIpTag[];
	readonly publicIPAddressVersion?: "IPv4" | "IPv6";
	readonly publicIPPrefix?: SubResource;
}
export interface VirtualMachineScaleSetStorageProfile {
	readonly dataDisks?: VirtualMachineScaleSetDataDisk[];
	readonly imageReference?: ImageReference;
	readonly osDisk?: VirtualMachineScaleSetOSDisk;
}
export interface VirtualMachineScaleSetVMInstanceView {
	readonly bootDiagnostics?: BootDiagnosticsInstanceView;
	readonly disks?: DiskInstanceView[];
	readonly extensions?: VirtualMachineExtensionInstanceView[];
	readonly maintenanceRedeployStatus?: MaintenanceRedeployStatus;
	readonly placementGroupId?: string;
	readonly platformFaultDomain?: number;
	readonly platformUpdateDomain?: number;
	readonly rdpThumbPrint?: string;
	readonly statuses?: InstanceViewStatus[];
	readonly vmAgent?: VirtualMachineAgentInstanceView;
	readonly vmHealth?: VirtualMachineHealthStatus;
}
export interface VirtualMachineScaleSetVMNetworkProfileConfiguration {
	readonly networkInterfaceConfigurations?: VirtualMachineScaleSetNetworkConfiguration[];
}
export interface VirtualMachineScaleSetVMProfile {
	readonly billingProfile?: BillingProfile;
	readonly diagnosticsProfile?: DiagnosticsProfile;
	readonly evictionPolicy?: "Deallocate" | "Delete";
	readonly extensionProfile?: VirtualMachineScaleSetExtensionProfile;
	readonly licenseType?: string;
	readonly networkProfile?: VirtualMachineScaleSetNetworkProfile;
	readonly osProfile?: VirtualMachineScaleSetOSProfile;
	readonly priority?: "Low" | "Regular" | "Spot";
	readonly scheduledEventsProfile?: ScheduledEventsProfile;
	readonly storageProfile?: VirtualMachineScaleSetStorageProfile;
}
export interface VirtualMachineScaleSetVMProperties {
	readonly additionalCapabilities?: AdditionalCapabilities;
	readonly availabilitySet?: SubResource;
	readonly diagnosticsProfile?: DiagnosticsProfile;
	readonly hardwareProfile?: HardwareProfile;
	readonly instanceView?: VirtualMachineScaleSetVMInstanceView;
	readonly latestModelApplied?: boolean;
	readonly licenseType?: string;
	readonly modelDefinitionApplied?: string;
	readonly networkProfile?: NetworkProfile;
	readonly networkProfileConfiguration?: VirtualMachineScaleSetVMNetworkProfileConfiguration;
	readonly osProfile?: OSProfile;
	readonly protectionPolicy?: VirtualMachineScaleSetVMProtectionPolicy;
	readonly provisioningState?: string;
	readonly storageProfile?: StorageProfile;
	readonly vmId?: string;
}
export interface VirtualMachineScaleSetVMProtectionPolicy {
	readonly protectFromScaleIn?: boolean;
	readonly protectFromScaleSetActions?: boolean;
}
export interface WindowsConfiguration {
	readonly additionalUnattendContent?: AdditionalUnattendContent[];
	readonly enableAutomaticUpdates?: boolean;
	readonly provisionVMAgent?: boolean;
	readonly timeZone?: string;
	readonly winRM?: WinRMConfiguration;
}
export interface WinRMConfiguration {
	readonly listeners?: WinRMListener[];
}
export interface WinRMListener {
	readonly certificateUrl?: string;
	readonly protocol?: "Http";
}
export default {
	availabilitySets: availabilitySets,
	galleries: galleries,
	"galleries/applications": galleries_applications,
	"galleries/applications/versions": galleries_applications_versions,
	"galleries/images": galleries_images,
	"galleries/images/versions": galleries_images_versions,
	hostGroups: hostGroups,
	"hostGroups/hosts": hostGroups_hosts,
	images: images,
	"locations/publishers/artifacttypes/offers/skus/versions": locations_publishers_artifacttypes_offers_skus_versions,
	"locations/publishers/artifacttypes/types/versions": locations_publishers_artifacttypes_types_versions,
	proximityPlacementGroups: proximityPlacementGroups,
	sshPublicKeys: sshPublicKeys,
	virtualMachines: virtualMachines,
	"virtualMachines/extensions": virtualMachines_extensions,
	virtualMachineScaleSets: virtualMachineScaleSets,
	"virtualMachineScaleSets/extensions": virtualMachineScaleSets_extensions,
	"virtualMachineScaleSets/rollingUpgrades": virtualMachineScaleSets_rollingUpgrades,
	"virtualMachineScaleSets/virtualmachines": virtualMachineScaleSets_virtualmachines,
	"virtualMachineScaleSets/virtualMachines/extensions": virtualMachineScaleSets_virtualMachines_extensions,
};
