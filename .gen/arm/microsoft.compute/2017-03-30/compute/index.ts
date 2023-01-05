import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class availabilitySets
	extends ArmResource<availabilitySetsComponentInputs>
	implements availabilitySetsComponentOutputs
{
	constructor(entity: ADKEntity, options: availabilitySetsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/availabilitySets", "2017-03-30", options);
	}
	public readonly apiVersion: "2017-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/availabilitySets";
}
export interface availabilitySetsComponentOutputs {
	readonly apiVersion: "2017-03-30";
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
export class disks extends ArmResource<disksComponentInputs> implements disksComponentOutputs {
	constructor(entity: ADKEntity, options: disksComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/disks", "2017-03-30", options);
	}
	public readonly apiVersion: "2017-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/disks";
}
export interface disksComponentOutputs {
	readonly apiVersion: "2017-03-30";
	readonly id: string;
	readonly type: "Microsoft.Compute/disks";
}
export interface disksComponentInputs {
	readonly location: string;
	readonly managedBy?: string;
	readonly name: string;
	readonly properties?: DiskProperties;
	readonly sku?: DiskSku;
	readonly tags?: ResourceTags;
	readonly zones?: string[];
}
export class images extends ArmResource<imagesComponentInputs> implements imagesComponentOutputs {
	constructor(entity: ADKEntity, options: imagesComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/images", "2017-03-30", options);
	}
	public readonly apiVersion: "2017-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/images";
}
export interface imagesComponentOutputs {
	readonly apiVersion: "2017-03-30";
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
			"2017-03-30",
			options,
		);
	}
	public readonly apiVersion: "2017-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/locations/publishers/artifacttypes/offers/skus/versions";
}
export interface locations_publishers_artifacttypes_offers_skus_versionsComponentOutputs {
	readonly apiVersion: "2017-03-30";
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
			"2017-03-30",
			options,
		);
	}
	public readonly apiVersion: "2017-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/locations/publishers/artifacttypes/types/versions";
}
export interface locations_publishers_artifacttypes_types_versionsComponentOutputs {
	readonly apiVersion: "2017-03-30";
	readonly id: string;
	readonly type: "Microsoft.Compute/locations/publishers/artifacttypes/types/versions";
}
export interface locations_publishers_artifacttypes_types_versionsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: VirtualMachineExtensionImageProperties;
	readonly tags?: ResourceTags;
}
export class snapshots extends ArmResource<snapshotsComponentInputs> implements snapshotsComponentOutputs {
	constructor(entity: ADKEntity, options: snapshotsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/snapshots", "2017-03-30", options);
	}
	public readonly apiVersion: "2017-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/snapshots";
}
export interface snapshotsComponentOutputs {
	readonly apiVersion: "2017-03-30";
	readonly id: string;
	readonly type: "Microsoft.Compute/snapshots";
}
export interface snapshotsComponentInputs {
	readonly location: string;
	readonly managedBy?: string;
	readonly name: string;
	readonly properties?: DiskProperties;
	readonly sku?: DiskSku;
	readonly tags?: ResourceTags;
}
export class virtualMachines
	extends ArmResource<virtualMachinesComponentInputs>
	implements virtualMachinesComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualMachinesComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/virtualMachines", "2017-03-30", options);
	}
	public readonly apiVersion: "2017-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/virtualMachines";
}
export interface virtualMachinesComponentOutputs {
	readonly apiVersion: "2017-03-30";
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
		super(entity, options.name, "Microsoft.Compute/virtualMachines/extensions", "2017-03-30", options);
	}
	public readonly apiVersion: "2017-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/virtualMachines/extensions";
}
export interface virtualMachines_extensionsComponentOutputs {
	readonly apiVersion: "2017-03-30";
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
		super(entity, options.name, "Microsoft.Compute/virtualMachineScaleSets", "2017-03-30", options);
	}
	public readonly apiVersion: "2017-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/virtualMachineScaleSets";
}
export interface virtualMachineScaleSetsComponentOutputs {
	readonly apiVersion: "2017-03-30";
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
		super(entity, options.name, "Microsoft.Compute/virtualMachineScaleSets/extensions", "2017-03-30", options);
	}
	public readonly apiVersion: "2017-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/virtualMachineScaleSets/extensions";
}
export interface virtualMachineScaleSets_extensionsComponentOutputs {
	readonly apiVersion: "2017-03-30";
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
		super(entity, options.name, "Microsoft.Compute/virtualMachineScaleSets/rollingUpgrades", "2017-03-30", options);
	}
	public readonly apiVersion: "2017-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/virtualMachineScaleSets/rollingUpgrades";
}
export interface virtualMachineScaleSets_rollingUpgradesComponentOutputs {
	readonly apiVersion: "2017-03-30";
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
		super(entity, options.name, "Microsoft.Compute/virtualMachineScaleSets/virtualmachines", "2017-03-30", options);
	}
	public readonly apiVersion: "2017-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/virtualMachineScaleSets/virtualmachines";
}
export interface virtualMachineScaleSets_virtualmachinesComponentOutputs {
	readonly apiVersion: "2017-03-30";
	readonly id: string;
	readonly type: "Microsoft.Compute/virtualMachineScaleSets/virtualmachines";
}
export interface virtualMachineScaleSets_virtualmachinesComponentInputs {
	readonly instanceId?: string;
	readonly location?: string;
	readonly name: string;
	readonly plan?: Plan;
	readonly properties?: VirtualMachineScaleSetVMProperties;
	readonly resources?: VirtualMachineExtension[];
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
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
export interface AvailabilitySetProperties {
	readonly platformFaultDomainCount?: number;
	readonly platformUpdateDomainCount?: number;
	readonly statuses?: InstanceViewStatus[];
	readonly virtualMachines?: SubResource[];
}
export interface BootDiagnostics {
	readonly enabled?: boolean;
	readonly storageUri?: string;
}
export interface BootDiagnosticsInstanceView {
	readonly consoleScreenshotBlobUri?: string;
	readonly serialConsoleLogBlobUri?: string;
}
export interface CreationData {
	readonly createOption: "Attach" | "Copy" | "Empty" | "FromImage";
	readonly imageReference?: ImageDiskReference;
	readonly sourceResourceId?: string;
	readonly sourceUri?: string;
	readonly storageAccountId?: string;
}
export interface DataDisk {
	readonly caching?: "None" | "ReadOnly";
	readonly createOption: "Attach" | "Empty";
	readonly diskSizeGB?: number;
	readonly image?: VirtualHardDisk;
	readonly lun: number;
	readonly managedDisk?: ManagedDiskParameters;
	readonly name?: string;
	readonly vhd?: VirtualHardDisk;
}
export interface DataDiskImage {
	readonly lun?: number;
}
export interface DiagnosticsProfile {
	readonly bootDiagnostics?: BootDiagnostics;
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
export interface DiskProperties {
	readonly creationData: CreationData;
	readonly diskSizeGB?: number;
	readonly encryptionSettings?: EncryptionSettings;
	readonly osType?: "Linux";
	readonly provisioningState?: string;
	readonly timeCreated?: string;
}
export interface DiskSku {
	readonly name?: "Premium_LRS" | "Standard_LRS";
	readonly tier?: string;
}
export interface EncryptionSettings {
	readonly diskEncryptionKey?: KeyVaultAndSecretReference;
	readonly enabled?: boolean;
	readonly keyEncryptionKey?: KeyVaultAndKeyReference;
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
		| "Standard_D1_v2"
		| "Standard_D2"
		| "Standard_D2_v2"
		| "Standard_D3"
		| "Standard_D3_v2"
		| "Standard_D4"
		| "Standard_D4_v2"
		| "Standard_D5_v2"
		| "Standard_DS1"
		| "Standard_DS11"
		| "Standard_DS11_v2"
		| "Standard_DS12"
		| "Standard_DS12_v2"
		| "Standard_DS13"
		| "Standard_DS13_v2"
		| "Standard_DS14"
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
		| "Standard_F1"
		| "Standard_F16"
		| "Standard_F16s"
		| "Standard_F1s"
		| "Standard_F2"
		| "Standard_F2s"
		| "Standard_F4"
		| "Standard_F4s"
		| "Standard_F8"
		| "Standard_F8s"
		| "Standard_G1"
		| "Standard_G2"
		| "Standard_G3"
		| "Standard_G4"
		| "Standard_G5"
		| "Standard_GS1"
		| "Standard_GS2"
		| "Standard_GS3"
		| "Standard_GS4"
		| "Standard_GS5"
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
		| "Standard_NC12"
		| "Standard_NC24"
		| "Standard_NC24r"
		| "Standard_NC6"
		| "Standard_NV12"
		| "Standard_NV24"
		| "Standard_NV6";
}
export interface ImageDataDisk {
	readonly blobUri?: string;
	readonly caching?: "None" | "ReadOnly";
	readonly diskSizeGB?: number;
	readonly lun: number;
	readonly managedDisk?: SubResource;
	readonly snapshot?: SubResource;
	readonly storageAccountType?: "Premium_LRS" | "Standard_LRS";
}
export interface ImageDiskReference {
	readonly id: string;
	readonly lun?: number;
}
export interface ImageOSDisk {
	readonly blobUri?: string;
	readonly caching?: "None" | "ReadOnly";
	readonly diskSizeGB?: number;
	readonly managedDisk?: SubResource;
	readonly osState: "Generalized";
	readonly osType: "Linux";
	readonly snapshot?: SubResource;
	readonly storageAccountType?: "Premium_LRS" | "Standard_LRS";
}
export interface ImageProperties {
	readonly provisioningState?: string;
	readonly sourceVirtualMachine?: SubResource;
	readonly storageProfile?: ImageStorageProfile;
}
export interface ImageReference {
	readonly id?: string;
	readonly offer?: string;
	readonly publisher?: string;
	readonly sku?: string;
	readonly version?: string;
}
export interface ImageStorageProfile {
	readonly dataDisks?: ImageDataDisk[];
	readonly osDisk: ImageOSDisk;
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
export interface KeyVaultAndKeyReference {
	readonly keyUrl: string;
	readonly sourceVault: SourceVault;
}
export interface KeyVaultAndSecretReference {
	readonly secretUrl: string;
	readonly sourceVault: SourceVault;
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
	readonly id?: string;
	readonly storageAccountType?: "Premium_LRS" | "Standard_LRS";
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
	readonly createOption: "Attach" | "Empty";
	readonly diskSizeGB?: number;
	readonly encryptionSettings?: DiskEncryptionSettings;
	readonly image?: VirtualHardDisk;
	readonly managedDisk?: ManagedDiskParameters;
	readonly name?: string;
	readonly osType?: "Linux";
	readonly vhd?: VirtualHardDisk;
}
export interface OSDiskImage {
	readonly operatingSystem: "Linux";
}
export interface OSProfile {
	readonly adminPassword?: string;
	readonly adminUsername?: string;
	readonly computerName?: string;
	readonly customData?: string;
	readonly linuxConfiguration?: LinuxConfiguration;
	readonly secrets?: VaultSecretGroup[];
	readonly windowsConfiguration?: WindowsConfiguration;
}
export interface Plan {
	readonly name?: string;
	readonly product?: string;
	readonly promotionCode?: string;
	readonly publisher?: string;
}
export interface PurchasePlan {
	readonly name: string;
	readonly product: string;
	readonly publisher: string;
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
export interface Sku {
	readonly capacity?: number;
	readonly name?: string;
	readonly tier?: string;
}
export interface SourceVault {
	readonly id?: string;
}
export interface SshConfiguration {
	readonly publicKeys?: SshPublicKey[];
}
export interface SshPublicKey {
	readonly keyData?: string;
	readonly path?: string;
}
export interface StorageProfile {
	readonly dataDisks?: DataDisk[];
	readonly imageReference?: ImageReference;
	readonly osDisk?: OSDisk;
}
export interface SubResource {
	readonly id?: string;
}
export interface UpgradePolicy {
	readonly automaticOSUpgrade?: boolean;
	readonly mode?: "Automatic" | "Manual";
	readonly rollingUpgradePolicy?: RollingUpgradePolicy;
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
	readonly type?: "SystemAssigned";
}
export interface VirtualMachineImageProperties {
	readonly dataDiskImages?: DataDiskImage[];
	readonly osDiskImage?: OSDiskImage;
	readonly plan?: PurchasePlan;
}
export interface VirtualMachineImageResourceTags {
	readonly [key: string]: string;
}
export interface VirtualMachineInstanceView {
	readonly bootDiagnostics?: BootDiagnosticsInstanceView;
	readonly disks?: DiskInstanceView[];
	readonly extensions?: VirtualMachineExtensionInstanceView[];
	readonly maintenanceRedeployStatus?: MaintenanceRedeployStatus;
	readonly platformFaultDomain?: number;
	readonly platformUpdateDomain?: number;
	readonly rdpThumbPrint?: string;
	readonly statuses?: InstanceViewStatus[];
	readonly vmAgent?: VirtualMachineAgentInstanceView;
}
export interface VirtualMachineProperties {
	readonly availabilitySet?: SubResource;
	readonly diagnosticsProfile?: DiagnosticsProfile;
	readonly hardwareProfile?: HardwareProfile;
	readonly instanceView?: VirtualMachineInstanceView;
	readonly licenseType?: string;
	readonly networkProfile?: NetworkProfile;
	readonly osProfile?: OSProfile;
	readonly provisioningState?: string;
	readonly storageProfile?: StorageProfile;
	readonly vmId?: string;
}
export interface VirtualMachineScaleSetDataDisk {
	readonly caching?: "None" | "ReadOnly";
	readonly createOption: "Attach" | "Empty";
	readonly diskSizeGB?: number;
	readonly lun: number;
	readonly managedDisk?: VirtualMachineScaleSetManagedDiskParameters;
	readonly name?: string;
}
export interface VirtualMachineScaleSetExtension {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: VirtualMachineScaleSetExtensionProperties;
}
export interface VirtualMachineScaleSetExtensionProfile {
	readonly extensions?: VirtualMachineScaleSetExtension[];
}
export interface VirtualMachineScaleSetExtensionProperties {
	readonly autoUpgradeMinorVersion?: boolean;
	readonly forceUpdateTag?: string;
	readonly protectedSettings?: any;
	readonly provisioningState?: string;
	readonly publisher?: string;
	readonly settings?: any;
	readonly type?: string;
	readonly typeHandlerVersion?: string;
}
export interface VirtualMachineScaleSetIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "SystemAssigned";
}
export interface VirtualMachineScaleSetIPConfiguration {
	readonly id?: string;
	readonly name: string;
	readonly properties?: VirtualMachineScaleSetIPConfigurationProperties;
}
export interface VirtualMachineScaleSetIPConfigurationProperties {
	readonly applicationGatewayBackendAddressPools?: SubResource[];
	readonly loadBalancerBackendAddressPools?: SubResource[];
	readonly loadBalancerInboundNatPools?: SubResource[];
	readonly primary?: boolean;
	readonly privateIPAddressVersion?: "IPv4" | "IPv6";
	readonly publicIPAddressConfiguration?: VirtualMachineScaleSetPublicIPAddressConfiguration;
	readonly subnet?: ApiEntityReference;
}
export interface VirtualMachineScaleSetManagedDiskParameters {
	readonly storageAccountType?: "Premium_LRS" | "Standard_LRS";
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
	readonly createOption: "Attach" | "Empty";
	readonly image?: VirtualHardDisk;
	readonly managedDisk?: VirtualMachineScaleSetManagedDiskParameters;
	readonly name?: string;
	readonly osType?: "Linux";
	readonly vhdContainers?: string[];
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
	readonly overprovision?: boolean;
	readonly provisioningState?: string;
	readonly singlePlacementGroup?: boolean;
	readonly uniqueId?: string;
	readonly upgradePolicy?: UpgradePolicy;
	readonly virtualMachineProfile?: VirtualMachineScaleSetVMProfile;
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
	readonly placementGroupId?: string;
	readonly platformFaultDomain?: number;
	readonly platformUpdateDomain?: number;
	readonly rdpThumbPrint?: string;
	readonly statuses?: InstanceViewStatus[];
	readonly vmAgent?: VirtualMachineAgentInstanceView;
	readonly vmHealth?: VirtualMachineHealthStatus;
}
export interface VirtualMachineScaleSetVMProfile {
	readonly diagnosticsProfile?: DiagnosticsProfile;
	readonly extensionProfile?: VirtualMachineScaleSetExtensionProfile;
	readonly licenseType?: string;
	readonly networkProfile?: VirtualMachineScaleSetNetworkProfile;
	readonly osProfile?: VirtualMachineScaleSetOSProfile;
	readonly storageProfile?: VirtualMachineScaleSetStorageProfile;
}
export interface VirtualMachineScaleSetVMProperties {
	readonly availabilitySet?: SubResource;
	readonly diagnosticsProfile?: DiagnosticsProfile;
	readonly hardwareProfile?: HardwareProfile;
	readonly instanceView?: VirtualMachineScaleSetVMInstanceView;
	readonly latestModelApplied?: boolean;
	readonly licenseType?: string;
	readonly networkProfile?: NetworkProfile;
	readonly osProfile?: OSProfile;
	readonly provisioningState?: string;
	readonly storageProfile?: StorageProfile;
	readonly vmId?: string;
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
	disks: disks,
	images: images,
	"locations/publishers/artifacttypes/offers/skus/versions": locations_publishers_artifacttypes_offers_skus_versions,
	"locations/publishers/artifacttypes/types/versions": locations_publishers_artifacttypes_types_versions,
	snapshots: snapshots,
	virtualMachines: virtualMachines,
	"virtualMachines/extensions": virtualMachines_extensions,
	virtualMachineScaleSets: virtualMachineScaleSets,
	"virtualMachineScaleSets/extensions": virtualMachineScaleSets_extensions,
	"virtualMachineScaleSets/rollingUpgrades": virtualMachineScaleSets_rollingUpgrades,
	"virtualMachineScaleSets/virtualmachines": virtualMachineScaleSets_virtualmachines,
};
