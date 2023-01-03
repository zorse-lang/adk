import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class availabilitySets
	extends ArmResource<availabilitySetsComponentInputs>
	implements availabilitySetsComponentOutputs
{
	constructor(entity: ADKEntity, options: availabilitySetsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/availabilitySets", "2017-12-01", options);
	}
	public readonly apiVersion: "2017-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/availabilitySets";
}
export interface availabilitySetsComponentOutputs {
	readonly apiVersion: "2017-12-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/availabilitySets";
}
export interface availabilitySetsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: AvailabilitySetProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class images extends ArmResource<imagesComponentInputs> implements imagesComponentOutputs {
	constructor(entity: ADKEntity, options: imagesComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/images", "2017-12-01", options);
	}
	public readonly apiVersion: "2017-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/images";
}
export interface imagesComponentOutputs {
	readonly apiVersion: "2017-12-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/images";
}
export interface imagesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ImageProperties | undefined;
	readonly tags?: ResourceTags | undefined;
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
			"2017-12-01",
			options,
		);
	}
	public readonly apiVersion: "2017-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/locations/publishers/artifacttypes/offers/skus/versions";
}
export interface locations_publishers_artifacttypes_offers_skus_versionsComponentOutputs {
	readonly apiVersion: "2017-12-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/locations/publishers/artifacttypes/offers/skus/versions";
}
export interface locations_publishers_artifacttypes_offers_skus_versionsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: VirtualMachineImageProperties | undefined;
	readonly tags?: VirtualMachineImageResourceTags | undefined;
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
			"2017-12-01",
			options,
		);
	}
	public readonly apiVersion: "2017-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/locations/publishers/artifacttypes/types/versions";
}
export interface locations_publishers_artifacttypes_types_versionsComponentOutputs {
	readonly apiVersion: "2017-12-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/locations/publishers/artifacttypes/types/versions";
}
export interface locations_publishers_artifacttypes_types_versionsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: VirtualMachineExtensionImageProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class virtualMachines
	extends ArmResource<virtualMachinesComponentInputs>
	implements virtualMachinesComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualMachinesComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/virtualMachines", "2017-12-01", options);
	}
	public readonly apiVersion: "2017-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/virtualMachines";
}
export interface virtualMachinesComponentOutputs {
	readonly apiVersion: "2017-12-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/virtualMachines";
}
export interface virtualMachinesComponentInputs {
	readonly identity?: VirtualMachineIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly plan?: Plan | undefined;
	readonly properties?: VirtualMachineProperties | undefined;
	readonly resources?: VirtualMachineExtension[] | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly zones?: string[] | undefined;
}
export class virtualMachines_extensions
	extends ArmResource<virtualMachines_extensionsComponentInputs>
	implements virtualMachines_extensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualMachines_extensionsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/virtualMachines/extensions", "2017-12-01", options);
	}
	public readonly apiVersion: "2017-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/virtualMachines/extensions";
}
export interface virtualMachines_extensionsComponentOutputs {
	readonly apiVersion: "2017-12-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/virtualMachines/extensions";
}
export interface virtualMachines_extensionsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: VirtualMachineExtensionProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class virtualMachineScaleSets
	extends ArmResource<virtualMachineScaleSetsComponentInputs>
	implements virtualMachineScaleSetsComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualMachineScaleSetsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/virtualMachineScaleSets", "2017-12-01", options);
	}
	public readonly apiVersion: "2017-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/virtualMachineScaleSets";
}
export interface virtualMachineScaleSetsComponentOutputs {
	readonly apiVersion: "2017-12-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/virtualMachineScaleSets";
}
export interface virtualMachineScaleSetsComponentInputs {
	readonly identity?: VirtualMachineScaleSetIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly plan?: Plan | undefined;
	readonly properties?: VirtualMachineScaleSetProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly zones?: string[] | undefined;
}
export class virtualMachineScaleSets_extensions
	extends ArmResource<virtualMachineScaleSets_extensionsComponentInputs>
	implements virtualMachineScaleSets_extensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualMachineScaleSets_extensionsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/virtualMachineScaleSets/extensions", "2017-12-01", options);
	}
	public readonly apiVersion: "2017-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/virtualMachineScaleSets/extensions";
}
export interface virtualMachineScaleSets_extensionsComponentOutputs {
	readonly apiVersion: "2017-12-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/virtualMachineScaleSets/extensions";
}
export interface virtualMachineScaleSets_extensionsComponentInputs {
	readonly name: string;
	readonly properties?: VirtualMachineScaleSetExtensionProperties | undefined;
}
export class virtualMachineScaleSets_rollingUpgrades
	extends ArmResource<virtualMachineScaleSets_rollingUpgradesComponentInputs>
	implements virtualMachineScaleSets_rollingUpgradesComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualMachineScaleSets_rollingUpgradesComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/virtualMachineScaleSets/rollingUpgrades", "2017-12-01", options);
	}
	public readonly apiVersion: "2017-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/virtualMachineScaleSets/rollingUpgrades";
}
export interface virtualMachineScaleSets_rollingUpgradesComponentOutputs {
	readonly apiVersion: "2017-12-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/virtualMachineScaleSets/rollingUpgrades";
}
export interface virtualMachineScaleSets_rollingUpgradesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: RollingUpgradeStatusInfoProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class virtualMachineScaleSets_virtualmachines
	extends ArmResource<virtualMachineScaleSets_virtualmachinesComponentInputs>
	implements virtualMachineScaleSets_virtualmachinesComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualMachineScaleSets_virtualmachinesComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/virtualMachineScaleSets/virtualmachines", "2017-12-01", options);
	}
	public readonly apiVersion: "2017-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/virtualMachineScaleSets/virtualmachines";
}
export interface virtualMachineScaleSets_virtualmachinesComponentOutputs {
	readonly apiVersion: "2017-12-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/virtualMachineScaleSets/virtualmachines";
}
export interface virtualMachineScaleSets_virtualmachinesComponentInputs {
	readonly instanceId?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly plan?: Plan | undefined;
	readonly properties?: VirtualMachineScaleSetVMProperties | undefined;
	readonly resources?: VirtualMachineExtension[] | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface AdditionalUnattendContent {
	readonly componentName?: "Microsoft-Windows-Shell-Setup" | undefined;
	readonly content?: string | undefined;
	readonly passName?: "OobeSystem" | undefined;
	readonly settingName?: "AutoLogon" | undefined;
}
export interface ApiEntityReference {
	readonly id?: string | undefined;
}
export interface ApiError {
	readonly code?: string | undefined;
	readonly details?: ApiErrorBase[] | undefined;
	readonly innererror?: InnerError | undefined;
	readonly message?: string | undefined;
	readonly target?: string | undefined;
}
export interface ApiErrorBase {
	readonly code?: string | undefined;
	readonly message?: string | undefined;
	readonly target?: string | undefined;
}
export interface AutoOSUpgradePolicy {
	readonly disableAutoRollback?: boolean | undefined;
}
export interface AvailabilitySetProperties {
	readonly platformFaultDomainCount?: number | undefined;
	readonly platformUpdateDomainCount?: number | undefined;
	readonly statuses?: InstanceViewStatus[] | undefined;
	readonly virtualMachines?: SubResource[] | undefined;
}
export interface BootDiagnostics {
	readonly enabled?: boolean | undefined;
	readonly storageUri?: string | undefined;
}
export interface BootDiagnosticsInstanceView {
	readonly consoleScreenshotBlobUri?: string | undefined;
	readonly serialConsoleLogBlobUri?: string | undefined;
}
export interface DataDisk {
	readonly caching?: ("None" | "ReadOnly") | undefined;
	readonly createOption: "Attach" | "Empty" | "FromImage";
	readonly diskSizeGB?: number | undefined;
	readonly image?: VirtualHardDisk | undefined;
	readonly lun: number;
	readonly managedDisk?: ManagedDiskParameters | undefined;
	readonly name?: string | undefined;
	readonly vhd?: VirtualHardDisk | undefined;
	readonly writeAcceleratorEnabled?: boolean | undefined;
}
export interface DataDiskImage {
	readonly lun?: number | undefined;
}
export interface DiagnosticsProfile {
	readonly bootDiagnostics?: BootDiagnostics | undefined;
}
export interface DiskEncryptionSettings {
	readonly diskEncryptionKey?: KeyVaultSecretReference | undefined;
	readonly enabled?: boolean | undefined;
	readonly keyEncryptionKey?: KeyVaultKeyReference | undefined;
}
export interface DiskInstanceView {
	readonly encryptionSettings?: DiskEncryptionSettings[] | undefined;
	readonly name?: string | undefined;
	readonly statuses?: InstanceViewStatus[] | undefined;
}
export interface HardwareProfile {
	readonly vmSize?:
		| (
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
				| "Standard_NV6"
		  )
		| undefined;
}
export interface ImageDataDisk {
	readonly blobUri?: string | undefined;
	readonly caching?: ("None" | "ReadOnly") | undefined;
	readonly diskSizeGB?: number | undefined;
	readonly lun: number;
	readonly managedDisk?: SubResource | undefined;
	readonly snapshot?: SubResource | undefined;
	readonly storageAccountType?: ("Premium_LRS" | "Standard_LRS") | undefined;
}
export interface ImageOSDisk {
	readonly blobUri?: string | undefined;
	readonly caching?: ("None" | "ReadOnly") | undefined;
	readonly diskSizeGB?: number | undefined;
	readonly managedDisk?: SubResource | undefined;
	readonly osState: "Generalized";
	readonly osType: "Linux";
	readonly snapshot?: SubResource | undefined;
	readonly storageAccountType?: ("Premium_LRS" | "Standard_LRS") | undefined;
}
export interface ImageProperties {
	readonly provisioningState?: string | undefined;
	readonly sourceVirtualMachine?: SubResource | undefined;
	readonly storageProfile?: ImageStorageProfile | undefined;
}
export interface ImageReference {
	readonly id?: string | undefined;
	readonly offer?: string | undefined;
	readonly publisher?: string | undefined;
	readonly sku?: string | undefined;
	readonly version?: string | undefined;
}
export interface ImageStorageProfile {
	readonly dataDisks?: ImageDataDisk[] | undefined;
	readonly osDisk?: ImageOSDisk | undefined;
	readonly zoneResilient?: boolean | undefined;
}
export interface InnerError {
	readonly errordetail?: string | undefined;
	readonly exceptiontype?: string | undefined;
}
export interface InstanceViewStatus {
	readonly code?: string | undefined;
	readonly displayStatus?: string | undefined;
	readonly level?: ("Error" | "Info") | undefined;
	readonly message?: string | undefined;
	readonly time?: string | undefined;
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
	readonly disablePasswordAuthentication?: boolean | undefined;
	readonly ssh?: SshConfiguration | undefined;
}
export interface MaintenanceRedeployStatus {
	readonly isCustomerInitiatedMaintenanceAllowed?: boolean | undefined;
	readonly lastOperationMessage?: string | undefined;
	readonly lastOperationResultCode?: ("MaintenanceAborted" | "MaintenanceCompleted" | "None") | undefined;
	readonly maintenanceWindowEndTime?: string | undefined;
	readonly maintenanceWindowStartTime?: string | undefined;
	readonly preMaintenanceWindowEndTime?: string | undefined;
	readonly preMaintenanceWindowStartTime?: string | undefined;
}
export interface ManagedDiskParameters {
	readonly id?: string | undefined;
	readonly storageAccountType?: ("Premium_LRS" | "Standard_LRS") | undefined;
}
export interface NetworkInterfaceReference {
	readonly id?: string | undefined;
	readonly properties?: NetworkInterfaceReferenceProperties | undefined;
}
export interface NetworkInterfaceReferenceProperties {
	readonly primary?: boolean | undefined;
}
export interface NetworkProfile {
	readonly networkInterfaces?: NetworkInterfaceReference[] | undefined;
}
export interface OSDisk {
	readonly caching?: ("None" | "ReadOnly") | undefined;
	readonly createOption: "Attach" | "Empty" | "FromImage";
	readonly diskSizeGB?: number | undefined;
	readonly encryptionSettings?: DiskEncryptionSettings | undefined;
	readonly image?: VirtualHardDisk | undefined;
	readonly managedDisk?: ManagedDiskParameters | undefined;
	readonly name?: string | undefined;
	readonly osType?: "Linux" | undefined;
	readonly vhd?: VirtualHardDisk | undefined;
	readonly writeAcceleratorEnabled?: boolean | undefined;
}
export interface OSDiskImage {
	readonly operatingSystem: "Linux";
}
export interface OSProfile {
	readonly adminPassword?: string | undefined;
	readonly adminUsername?: string | undefined;
	readonly computerName?: string | undefined;
	readonly customData?: string | undefined;
	readonly linuxConfiguration?: LinuxConfiguration | undefined;
	readonly secrets?: VaultSecretGroup[] | undefined;
	readonly windowsConfiguration?: WindowsConfiguration | undefined;
}
export interface Plan {
	readonly name?: string | undefined;
	readonly product?: string | undefined;
	readonly promotionCode?: string | undefined;
	readonly publisher?: string | undefined;
}
export interface PurchasePlan {
	readonly name: string;
	readonly product: string;
	readonly publisher: string;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface RollingUpgradePolicy {
	readonly maxBatchInstancePercent?: number | undefined;
	readonly maxUnhealthyInstancePercent?: number | undefined;
	readonly maxUnhealthyUpgradedInstancePercent?: number | undefined;
	readonly pauseTimeBetweenBatches?: string | undefined;
}
export interface RollingUpgradeProgressInfo {
	readonly failedInstanceCount?: number | undefined;
	readonly inProgressInstanceCount?: number | undefined;
	readonly pendingInstanceCount?: number | undefined;
	readonly successfulInstanceCount?: number | undefined;
}
export interface RollingUpgradeRunningStatus {
	readonly code?: ("Cancelled" | "Completed" | "Faulted") | undefined;
	readonly lastAction?: "Cancel" | undefined;
	readonly lastActionTime?: string | undefined;
	readonly startTime?: string | undefined;
}
export interface RollingUpgradeStatusInfoProperties {
	readonly error?: ApiError | undefined;
	readonly policy?: RollingUpgradePolicy | undefined;
	readonly progress?: RollingUpgradeProgressInfo | undefined;
	readonly runningStatus?: RollingUpgradeRunningStatus | undefined;
}
export interface Sku {
	readonly capacity?: number | undefined;
	readonly name?: string | undefined;
	readonly tier?: string | undefined;
}
export interface SshConfiguration {
	readonly publicKeys?: SshPublicKey[] | undefined;
}
export interface SshPublicKey {
	readonly keyData?: string | undefined;
	readonly path?: string | undefined;
}
export interface StorageProfile {
	readonly dataDisks?: DataDisk[] | undefined;
	readonly imageReference?: ImageReference | undefined;
	readonly osDisk?: OSDisk | undefined;
}
export interface SubResource {
	readonly id?: string | undefined;
}
export interface UpgradePolicy {
	readonly automaticOSUpgrade?: boolean | undefined;
	readonly autoOSUpgradePolicy?: AutoOSUpgradePolicy | undefined;
	readonly mode?: ("Automatic" | "Manual") | undefined;
	readonly rollingUpgradePolicy?: RollingUpgradePolicy | undefined;
}
export interface VaultCertificate {
	readonly certificateStore?: string | undefined;
	readonly certificateUrl?: string | undefined;
}
export interface VaultSecretGroup {
	readonly sourceVault?: SubResource | undefined;
	readonly vaultCertificates?: VaultCertificate[] | undefined;
}
export interface VirtualHardDisk {
	readonly uri?: string | undefined;
}
export interface VirtualMachineAgentInstanceView {
	readonly extensionHandlers?: VirtualMachineExtensionHandlerInstanceView[] | undefined;
	readonly statuses?: InstanceViewStatus[] | undefined;
	readonly vmAgentVersion?: string | undefined;
}
export interface VirtualMachineExtension {
	readonly id?: string | undefined;
	readonly location: string;
	readonly name?: string | undefined;
	readonly properties?: VirtualMachineExtensionProperties | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface VirtualMachineExtensionHandlerInstanceView {
	readonly status?: InstanceViewStatus | undefined;
	readonly type?: string | undefined;
	readonly typeHandlerVersion?: string | undefined;
}
export interface VirtualMachineExtensionImageProperties {
	readonly computeRole: string;
	readonly handlerSchema: string;
	readonly operatingSystem: string;
	readonly supportsMultipleExtensions?: boolean | undefined;
	readonly vmScaleSetEnabled?: boolean | undefined;
}
export interface VirtualMachineExtensionInstanceView {
	readonly name?: string | undefined;
	readonly statuses?: InstanceViewStatus[] | undefined;
	readonly substatuses?: InstanceViewStatus[] | undefined;
	readonly type?: string | undefined;
	readonly typeHandlerVersion?: string | undefined;
}
export interface VirtualMachineExtensionProperties {
	readonly autoUpgradeMinorVersion?: boolean | undefined;
	readonly forceUpdateTag?: string | undefined;
	readonly instanceView?: VirtualMachineExtensionInstanceView | undefined;
	readonly protectedSettings?: any | undefined;
	readonly provisioningState?: string | undefined;
	readonly publisher?: string | undefined;
	readonly settings?: any | undefined;
	readonly type?: string | undefined;
	readonly typeHandlerVersion?: string | undefined;
}
export interface VirtualMachineHealthStatus {
	readonly status?: InstanceViewStatus | undefined;
}
export interface VirtualMachineIdentity {
	readonly identityIds?: string[] | undefined;
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned" | "SystemAssigned, UserAssigned") | undefined;
}
export interface VirtualMachineImageProperties {
	readonly dataDiskImages?: DataDiskImage[] | undefined;
	readonly osDiskImage?: OSDiskImage | undefined;
	readonly plan?: PurchasePlan | undefined;
}
export interface VirtualMachineImageResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface VirtualMachineInstanceView {
	readonly bootDiagnostics?: BootDiagnosticsInstanceView | undefined;
	readonly computerName?: string | undefined;
	readonly disks?: DiskInstanceView[] | undefined;
	readonly extensions?: VirtualMachineExtensionInstanceView[] | undefined;
	readonly maintenanceRedeployStatus?: MaintenanceRedeployStatus | undefined;
	readonly osName?: string | undefined;
	readonly osVersion?: string | undefined;
	readonly platformFaultDomain?: number | undefined;
	readonly platformUpdateDomain?: number | undefined;
	readonly rdpThumbPrint?: string | undefined;
	readonly statuses?: InstanceViewStatus[] | undefined;
	readonly vmAgent?: VirtualMachineAgentInstanceView | undefined;
}
export interface VirtualMachineProperties {
	readonly availabilitySet?: SubResource | undefined;
	readonly diagnosticsProfile?: DiagnosticsProfile | undefined;
	readonly hardwareProfile?: HardwareProfile | undefined;
	readonly instanceView?: VirtualMachineInstanceView | undefined;
	readonly licenseType?: string | undefined;
	readonly networkProfile?: NetworkProfile | undefined;
	readonly osProfile?: OSProfile | undefined;
	readonly provisioningState?: string | undefined;
	readonly storageProfile?: StorageProfile | undefined;
	readonly vmId?: string | undefined;
}
export interface VirtualMachineScaleSetDataDisk {
	readonly caching?: ("None" | "ReadOnly") | undefined;
	readonly createOption: "Attach" | "Empty" | "FromImage";
	readonly diskSizeGB?: number | undefined;
	readonly lun: number;
	readonly managedDisk?: VirtualMachineScaleSetManagedDiskParameters | undefined;
	readonly name?: string | undefined;
	readonly writeAcceleratorEnabled?: boolean | undefined;
}
export interface VirtualMachineScaleSetExtension {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: VirtualMachineScaleSetExtensionProperties | undefined;
}
export interface VirtualMachineScaleSetExtensionProfile {
	readonly extensions?: VirtualMachineScaleSetExtension[] | undefined;
}
export interface VirtualMachineScaleSetExtensionProperties {
	readonly autoUpgradeMinorVersion?: boolean | undefined;
	readonly forceUpdateTag?: string | undefined;
	readonly protectedSettings?: any | undefined;
	readonly provisioningState?: string | undefined;
	readonly publisher?: string | undefined;
	readonly settings?: any | undefined;
	readonly type?: string | undefined;
	readonly typeHandlerVersion?: string | undefined;
}
export interface VirtualMachineScaleSetIdentity {
	readonly identityIds?: string[] | undefined;
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned" | "SystemAssigned, UserAssigned") | undefined;
}
export interface VirtualMachineScaleSetIPConfiguration {
	readonly id?: string | undefined;
	readonly name: string;
	readonly properties?: VirtualMachineScaleSetIPConfigurationProperties | undefined;
}
export interface VirtualMachineScaleSetIPConfigurationProperties {
	readonly applicationGatewayBackendAddressPools?: SubResource[] | undefined;
	readonly loadBalancerBackendAddressPools?: SubResource[] | undefined;
	readonly loadBalancerInboundNatPools?: SubResource[] | undefined;
	readonly primary?: boolean | undefined;
	readonly privateIPAddressVersion?: ("IPv4" | "IPv6") | undefined;
	readonly publicIPAddressConfiguration?: VirtualMachineScaleSetPublicIPAddressConfiguration | undefined;
	readonly subnet?: ApiEntityReference | undefined;
}
export interface VirtualMachineScaleSetManagedDiskParameters {
	readonly storageAccountType?: ("Premium_LRS" | "Standard_LRS") | undefined;
}
export interface VirtualMachineScaleSetNetworkConfiguration {
	readonly id?: string | undefined;
	readonly name: string;
	readonly properties?: VirtualMachineScaleSetNetworkConfigurationProperties | undefined;
}
export interface VirtualMachineScaleSetNetworkConfigurationDnsSettings {
	readonly dnsServers?: string[] | undefined;
}
export interface VirtualMachineScaleSetNetworkConfigurationProperties {
	readonly dnsSettings?: VirtualMachineScaleSetNetworkConfigurationDnsSettings | undefined;
	readonly enableAcceleratedNetworking?: boolean | undefined;
	readonly enableIPForwarding?: boolean | undefined;
	readonly ipConfigurations: VirtualMachineScaleSetIPConfiguration[];
	readonly networkSecurityGroup?: SubResource | undefined;
	readonly primary?: boolean | undefined;
}
export interface VirtualMachineScaleSetNetworkProfile {
	readonly healthProbe?: ApiEntityReference | undefined;
	readonly networkInterfaceConfigurations?: VirtualMachineScaleSetNetworkConfiguration[] | undefined;
}
export interface VirtualMachineScaleSetOSDisk {
	readonly caching?: ("None" | "ReadOnly") | undefined;
	readonly createOption: "Attach" | "Empty" | "FromImage";
	readonly image?: VirtualHardDisk | undefined;
	readonly managedDisk?: VirtualMachineScaleSetManagedDiskParameters | undefined;
	readonly name?: string | undefined;
	readonly osType?: "Linux" | undefined;
	readonly vhdContainers?: string[] | undefined;
	readonly writeAcceleratorEnabled?: boolean | undefined;
}
export interface VirtualMachineScaleSetOSProfile {
	readonly adminPassword?: string | undefined;
	readonly adminUsername?: string | undefined;
	readonly computerNamePrefix?: string | undefined;
	readonly customData?: string | undefined;
	readonly linuxConfiguration?: LinuxConfiguration | undefined;
	readonly secrets?: VaultSecretGroup[] | undefined;
	readonly windowsConfiguration?: WindowsConfiguration | undefined;
}
export interface VirtualMachineScaleSetProperties {
	readonly overprovision?: boolean | undefined;
	readonly platformFaultDomainCount?: number | undefined;
	readonly provisioningState?: string | undefined;
	readonly singlePlacementGroup?: boolean | undefined;
	readonly uniqueId?: string | undefined;
	readonly upgradePolicy?: UpgradePolicy | undefined;
	readonly virtualMachineProfile?: VirtualMachineScaleSetVMProfile | undefined;
	readonly zoneBalance?: boolean | undefined;
}
export interface VirtualMachineScaleSetPublicIPAddressConfiguration {
	readonly name: string;
	readonly properties?: VirtualMachineScaleSetPublicIPAddressConfigurationProperties | undefined;
}
export interface VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings {
	readonly domainNameLabel: string;
}
export interface VirtualMachineScaleSetPublicIPAddressConfigurationProperties {
	readonly dnsSettings?: VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings | undefined;
	readonly idleTimeoutInMinutes?: number | undefined;
}
export interface VirtualMachineScaleSetStorageProfile {
	readonly dataDisks?: VirtualMachineScaleSetDataDisk[] | undefined;
	readonly imageReference?: ImageReference | undefined;
	readonly osDisk?: VirtualMachineScaleSetOSDisk | undefined;
}
export interface VirtualMachineScaleSetVMInstanceView {
	readonly bootDiagnostics?: BootDiagnosticsInstanceView | undefined;
	readonly disks?: DiskInstanceView[] | undefined;
	readonly extensions?: VirtualMachineExtensionInstanceView[] | undefined;
	readonly maintenanceRedeployStatus?: MaintenanceRedeployStatus | undefined;
	readonly placementGroupId?: string | undefined;
	readonly platformFaultDomain?: number | undefined;
	readonly platformUpdateDomain?: number | undefined;
	readonly rdpThumbPrint?: string | undefined;
	readonly statuses?: InstanceViewStatus[] | undefined;
	readonly vmAgent?: VirtualMachineAgentInstanceView | undefined;
	readonly vmHealth?: VirtualMachineHealthStatus | undefined;
}
export interface VirtualMachineScaleSetVMProfile {
	readonly diagnosticsProfile?: DiagnosticsProfile | undefined;
	readonly evictionPolicy?: ("Deallocate" | "Delete") | undefined;
	readonly extensionProfile?: VirtualMachineScaleSetExtensionProfile | undefined;
	readonly licenseType?: string | undefined;
	readonly networkProfile?: VirtualMachineScaleSetNetworkProfile | undefined;
	readonly osProfile?: VirtualMachineScaleSetOSProfile | undefined;
	readonly priority?: ("Low" | "Regular") | undefined;
	readonly storageProfile?: VirtualMachineScaleSetStorageProfile | undefined;
}
export interface VirtualMachineScaleSetVMProperties {
	readonly availabilitySet?: SubResource | undefined;
	readonly diagnosticsProfile?: DiagnosticsProfile | undefined;
	readonly hardwareProfile?: HardwareProfile | undefined;
	readonly instanceView?: VirtualMachineScaleSetVMInstanceView | undefined;
	readonly latestModelApplied?: boolean | undefined;
	readonly licenseType?: string | undefined;
	readonly networkProfile?: NetworkProfile | undefined;
	readonly osProfile?: OSProfile | undefined;
	readonly provisioningState?: string | undefined;
	readonly storageProfile?: StorageProfile | undefined;
	readonly vmId?: string | undefined;
}
export interface WindowsConfiguration {
	readonly additionalUnattendContent?: AdditionalUnattendContent[] | undefined;
	readonly enableAutomaticUpdates?: boolean | undefined;
	readonly provisionVMAgent?: boolean | undefined;
	readonly timeZone?: string | undefined;
	readonly winRM?: WinRMConfiguration | undefined;
}
export interface WinRMConfiguration {
	readonly listeners?: WinRMListener[] | undefined;
}
export interface WinRMListener {
	readonly certificateUrl?: string | undefined;
	readonly protocol?: "Http" | undefined;
}
export default {
	availabilitySets: availabilitySets,
	images: images,
	"locations/publishers/artifacttypes/offers/skus/versions": locations_publishers_artifacttypes_offers_skus_versions,
	"locations/publishers/artifacttypes/types/versions": locations_publishers_artifacttypes_types_versions,
	virtualMachines: virtualMachines,
	"virtualMachines/extensions": virtualMachines_extensions,
	virtualMachineScaleSets: virtualMachineScaleSets,
	"virtualMachineScaleSets/extensions": virtualMachineScaleSets_extensions,
	"virtualMachineScaleSets/rollingUpgrades": virtualMachineScaleSets_rollingUpgrades,
	"virtualMachineScaleSets/virtualmachines": virtualMachineScaleSets_virtualmachines,
};
