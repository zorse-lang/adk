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
	readonly properties?: AvailabilitySetProperties;
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
	readonly location?: string;
	readonly name: string;
	readonly properties?: VirtualMachineExtensionImageProperties;
	readonly tags?: ResourceTags;
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
	readonly identity?: VirtualMachineIdentity;
	readonly location: string;
	readonly name: string;
	readonly plan?: Plan;
	readonly properties?: VirtualMachineProperties;
	readonly resources?: VirtualMachineExtension[];
	readonly tags?: ResourceTags;
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
	readonly properties?: VirtualMachineExtensionProperties;
	readonly tags?: ResourceTags;
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
	readonly identity?: VirtualMachineScaleSetIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties?: VirtualMachineScaleSetProperties;
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
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
export interface DataDisk {
	readonly caching?: "None" | "ReadOnly";
	readonly createOption: "Attach" | "Empty";
	readonly diskSizeGB?: number;
	readonly image?: VirtualHardDisk;
	readonly lun: number;
	readonly name: string;
	readonly vhd: VirtualHardDisk;
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
	readonly name?: string;
	readonly statuses?: InstanceViewStatus[];
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
		| "Standard_GS5";
}
export interface ImageReference {
	readonly offer?: string;
	readonly publisher?: string;
	readonly sku?: string;
	readonly version?: string;
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
	readonly ssh?: SshConfiguration;
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
	readonly name: string;
	readonly osType?: "Linux";
	readonly vhd: VirtualHardDisk;
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
export interface StorageProfile {
	readonly dataDisks?: DataDisk[];
	readonly imageReference?: ImageReference;
	readonly osDisk?: OSDisk;
}
export interface SubResource {
	readonly id?: string;
}
export interface UpgradePolicy {
	readonly mode?: "Automatic";
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
	readonly subnet: ApiEntityReference;
}
export interface VirtualMachineScaleSetNetworkConfiguration {
	readonly id?: string;
	readonly name: string;
	readonly properties?: VirtualMachineScaleSetNetworkConfigurationProperties;
}
export interface VirtualMachineScaleSetNetworkConfigurationProperties {
	readonly ipConfigurations: VirtualMachineScaleSetIPConfiguration[];
	readonly primary?: boolean;
}
export interface VirtualMachineScaleSetNetworkProfile {
	readonly networkInterfaceConfigurations?: VirtualMachineScaleSetNetworkConfiguration[];
}
export interface VirtualMachineScaleSetOSDisk {
	readonly caching?: "None" | "ReadOnly";
	readonly createOption: "Attach" | "Empty";
	readonly image?: VirtualHardDisk;
	readonly name: string;
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
	readonly overProvision?: boolean;
	readonly provisioningState?: string;
	readonly upgradePolicy?: UpgradePolicy;
	readonly virtualMachineProfile?: VirtualMachineScaleSetVMProfile;
}
export interface VirtualMachineScaleSetStorageProfile {
	readonly imageReference?: ImageReference;
	readonly osDisk?: VirtualMachineScaleSetOSDisk;
}
export interface VirtualMachineScaleSetVMInstanceView {
	readonly bootDiagnostics?: BootDiagnosticsInstanceView;
	readonly disks?: DiskInstanceView[];
	readonly extensions?: VirtualMachineExtensionInstanceView[];
	readonly platformFaultDomain?: number;
	readonly platformUpdateDomain?: number;
	readonly rdpThumbPrint?: string;
	readonly statuses?: InstanceViewStatus[];
	readonly vmAgent?: VirtualMachineAgentInstanceView;
}
export interface VirtualMachineScaleSetVMProfile {
	readonly extensionProfile?: VirtualMachineScaleSetExtensionProfile;
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
	"locations/publishers/artifacttypes/offers/skus/versions": locations_publishers_artifacttypes_offers_skus_versions,
	"locations/publishers/artifacttypes/types/versions": locations_publishers_artifacttypes_types_versions,
	virtualMachines: virtualMachines,
	"virtualMachines/extensions": virtualMachines_extensions,
	virtualMachineScaleSets: virtualMachineScaleSets,
	"virtualMachineScaleSets/virtualmachines": virtualMachineScaleSets_virtualmachines,
};
