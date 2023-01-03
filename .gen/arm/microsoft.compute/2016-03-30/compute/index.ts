import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class availabilitySets
	extends ArmResource<availabilitySetsComponentInputs>
	implements availabilitySetsComponentOutputs
{
	constructor(entity: ADKEntity, options: availabilitySetsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/availabilitySets", "2016-03-30", options);
	}
	public readonly apiVersion: "2016-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/availabilitySets";
}
export interface availabilitySetsComponentOutputs {
	readonly apiVersion: "2016-03-30";
	readonly id: string;
	readonly type: "Microsoft.Compute/availabilitySets";
}
export interface availabilitySetsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: AvailabilitySetProperties | undefined;
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
			"2016-03-30",
			options,
		);
	}
	public readonly apiVersion: "2016-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/locations/publishers/artifacttypes/offers/skus/versions";
}
export interface locations_publishers_artifacttypes_offers_skus_versionsComponentOutputs {
	readonly apiVersion: "2016-03-30";
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
			"2016-03-30",
			options,
		);
	}
	public readonly apiVersion: "2016-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/locations/publishers/artifacttypes/types/versions";
}
export interface locations_publishers_artifacttypes_types_versionsComponentOutputs {
	readonly apiVersion: "2016-03-30";
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
		super(entity, options.name, "Microsoft.Compute/virtualMachines", "2016-03-30", options);
	}
	public readonly apiVersion: "2016-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/virtualMachines";
}
export interface virtualMachinesComponentOutputs {
	readonly apiVersion: "2016-03-30";
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
}
export class virtualMachines_extensions
	extends ArmResource<virtualMachines_extensionsComponentInputs>
	implements virtualMachines_extensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualMachines_extensionsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/virtualMachines/extensions", "2016-03-30", options);
	}
	public readonly apiVersion: "2016-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/virtualMachines/extensions";
}
export interface virtualMachines_extensionsComponentOutputs {
	readonly apiVersion: "2016-03-30";
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
		super(entity, options.name, "Microsoft.Compute/virtualMachineScaleSets", "2016-03-30", options);
	}
	public readonly apiVersion: "2016-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/virtualMachineScaleSets";
}
export interface virtualMachineScaleSetsComponentOutputs {
	readonly apiVersion: "2016-03-30";
	readonly id: string;
	readonly type: "Microsoft.Compute/virtualMachineScaleSets";
}
export interface virtualMachineScaleSetsComponentInputs {
	readonly identity?: VirtualMachineScaleSetIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: VirtualMachineScaleSetProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class virtualMachineScaleSets_virtualmachines
	extends ArmResource<virtualMachineScaleSets_virtualmachinesComponentInputs>
	implements virtualMachineScaleSets_virtualmachinesComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualMachineScaleSets_virtualmachinesComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/virtualMachineScaleSets/virtualmachines", "2016-03-30", options);
	}
	public readonly apiVersion: "2016-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/virtualMachineScaleSets/virtualmachines";
}
export interface virtualMachineScaleSets_virtualmachinesComponentOutputs {
	readonly apiVersion: "2016-03-30";
	readonly id: string;
	readonly type: "Microsoft.Compute/virtualMachineScaleSets/virtualmachines";
}
export interface virtualMachineScaleSets_virtualmachinesComponentInputs {
	readonly instanceId?: string | undefined;
	readonly location?: string | undefined;
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
	readonly createOption: "Attach" | "Empty";
	readonly diskSizeGB?: number | undefined;
	readonly image?: VirtualHardDisk | undefined;
	readonly lun: number;
	readonly name: string;
	readonly vhd: VirtualHardDisk;
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
				| "Standard_A2"
				| "Standard_A3"
				| "Standard_A4"
				| "Standard_A5"
				| "Standard_A6"
				| "Standard_A7"
				| "Standard_A8"
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
		  )
		| undefined;
}
export interface ImageReference {
	readonly offer?: string | undefined;
	readonly publisher?: string | undefined;
	readonly sku?: string | undefined;
	readonly version?: string | undefined;
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
	readonly createOption: "Attach" | "Empty";
	readonly diskSizeGB?: number | undefined;
	readonly encryptionSettings?: DiskEncryptionSettings | undefined;
	readonly image?: VirtualHardDisk | undefined;
	readonly name: string;
	readonly osType?: "Linux" | undefined;
	readonly vhd: VirtualHardDisk;
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
	readonly mode?: "Automatic" | undefined;
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
export interface VirtualMachineIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: "SystemAssigned" | undefined;
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
	readonly disks?: DiskInstanceView[] | undefined;
	readonly extensions?: VirtualMachineExtensionInstanceView[] | undefined;
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
	readonly protectedSettings?: any | undefined;
	readonly provisioningState?: string | undefined;
	readonly publisher?: string | undefined;
	readonly settings?: any | undefined;
	readonly type?: string | undefined;
	readonly typeHandlerVersion?: string | undefined;
}
export interface VirtualMachineScaleSetIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: "SystemAssigned" | undefined;
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
	readonly subnet: ApiEntityReference;
}
export interface VirtualMachineScaleSetNetworkConfiguration {
	readonly id?: string | undefined;
	readonly name: string;
	readonly properties?: VirtualMachineScaleSetNetworkConfigurationProperties | undefined;
}
export interface VirtualMachineScaleSetNetworkConfigurationProperties {
	readonly ipConfigurations: VirtualMachineScaleSetIPConfiguration[];
	readonly primary?: boolean | undefined;
}
export interface VirtualMachineScaleSetNetworkProfile {
	readonly networkInterfaceConfigurations?: VirtualMachineScaleSetNetworkConfiguration[] | undefined;
}
export interface VirtualMachineScaleSetOSDisk {
	readonly caching?: ("None" | "ReadOnly") | undefined;
	readonly createOption: "Attach" | "Empty";
	readonly image?: VirtualHardDisk | undefined;
	readonly name: string;
	readonly osType?: "Linux" | undefined;
	readonly vhdContainers?: string[] | undefined;
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
	readonly overProvision?: boolean | undefined;
	readonly provisioningState?: string | undefined;
	readonly upgradePolicy?: UpgradePolicy | undefined;
	readonly virtualMachineProfile?: VirtualMachineScaleSetVMProfile | undefined;
}
export interface VirtualMachineScaleSetStorageProfile {
	readonly imageReference?: ImageReference | undefined;
	readonly osDisk?: VirtualMachineScaleSetOSDisk | undefined;
}
export interface VirtualMachineScaleSetVMInstanceView {
	readonly bootDiagnostics?: BootDiagnosticsInstanceView | undefined;
	readonly disks?: DiskInstanceView[] | undefined;
	readonly extensions?: VirtualMachineExtensionInstanceView[] | undefined;
	readonly platformFaultDomain?: number | undefined;
	readonly platformUpdateDomain?: number | undefined;
	readonly rdpThumbPrint?: string | undefined;
	readonly statuses?: InstanceViewStatus[] | undefined;
	readonly vmAgent?: VirtualMachineAgentInstanceView | undefined;
}
export interface VirtualMachineScaleSetVMProfile {
	readonly extensionProfile?: VirtualMachineScaleSetExtensionProfile | undefined;
	readonly networkProfile?: VirtualMachineScaleSetNetworkProfile | undefined;
	readonly osProfile?: VirtualMachineScaleSetOSProfile | undefined;
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
	"locations/publishers/artifacttypes/offers/skus/versions": locations_publishers_artifacttypes_offers_skus_versions,
	"locations/publishers/artifacttypes/types/versions": locations_publishers_artifacttypes_types_versions,
	virtualMachines: virtualMachines,
	"virtualMachines/extensions": virtualMachines_extensions,
	virtualMachineScaleSets: virtualMachineScaleSets,
	"virtualMachineScaleSets/virtualmachines": virtualMachineScaleSets_virtualmachines,
};
