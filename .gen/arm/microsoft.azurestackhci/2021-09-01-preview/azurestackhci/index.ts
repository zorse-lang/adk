import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class clusters extends ArmResource<clustersComponentInputs> implements clustersComponentOutputs {
	constructor(entity: ADKEntity, options: clustersComponentInputs) {
		super(entity, options.name, "Microsoft.AzureStackHCI/clusters", "2021-09-01-preview", options);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStackHCI/clusters";
}
export interface clustersComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AzureStackHCI/clusters";
}
export interface clustersComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ClusterProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class clusters_arcSettings
	extends ArmResource<clusters_arcSettingsComponentInputs>
	implements clusters_arcSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_arcSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.AzureStackHCI/clusters/arcSettings", "2021-09-01-preview", options);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStackHCI/clusters/arcSettings";
}
export interface clusters_arcSettingsComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AzureStackHCI/clusters/arcSettings";
}
export interface clusters_arcSettingsComponentInputs {
	readonly name: string;
	readonly properties?: ArcSettingProperties;
	readonly systemData?: SystemData;
}
export class clusters_arcSettings_extensions
	extends ArmResource<clusters_arcSettings_extensionsComponentInputs>
	implements clusters_arcSettings_extensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_arcSettings_extensionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.AzureStackHCI/clusters/arcSettings/extensions",
			"2021-09-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStackHCI/clusters/arcSettings/extensions";
}
export interface clusters_arcSettings_extensionsComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AzureStackHCI/clusters/arcSettings/extensions";
}
export interface clusters_arcSettings_extensionsComponentInputs {
	readonly name: string;
	readonly properties?: ExtensionProperties;
	readonly systemData?: SystemData;
}
export class galleryimages extends ArmResource<galleryimagesComponentInputs> implements galleryimagesComponentOutputs {
	constructor(entity: ADKEntity, options: galleryimagesComponentInputs) {
		super(entity, options.name, "Microsoft.AzureStackHCI/galleryimages", "2021-09-01-preview", options);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStackHCI/galleryimages";
}
export interface galleryimagesComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AzureStackHCI/galleryimages";
}
export interface galleryimagesComponentInputs {
	readonly extendedLocation?: ExtendedLocation;
	readonly location: string;
	readonly name: string;
	readonly properties?: GalleryimagesProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class marketplacegalleryimages
	extends ArmResource<marketplacegalleryimagesComponentInputs>
	implements marketplacegalleryimagesComponentOutputs
{
	constructor(entity: ADKEntity, options: marketplacegalleryimagesComponentInputs) {
		super(entity, options.name, "Microsoft.AzureStackHCI/marketplacegalleryimages", "2021-09-01-preview", options);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStackHCI/marketplacegalleryimages";
}
export interface marketplacegalleryimagesComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AzureStackHCI/marketplacegalleryimages";
}
export interface marketplacegalleryimagesComponentInputs {
	readonly extendedLocation?: ExtendedLocation;
	readonly location: string;
	readonly name: string;
	readonly properties?: MarketplacegalleryimagesProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class networkinterfaces
	extends ArmResource<networkinterfacesComponentInputs>
	implements networkinterfacesComponentOutputs
{
	constructor(entity: ADKEntity, options: networkinterfacesComponentInputs) {
		super(entity, options.name, "Microsoft.AzureStackHCI/networkinterfaces", "2021-09-01-preview", options);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStackHCI/networkinterfaces";
}
export interface networkinterfacesComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AzureStackHCI/networkinterfaces";
}
export interface networkinterfacesComponentInputs {
	readonly extendedLocation?: ExtendedLocation;
	readonly location: string;
	readonly name: string;
	readonly properties?: NetworkinterfacesProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class storagecontainers
	extends ArmResource<storagecontainersComponentInputs>
	implements storagecontainersComponentOutputs
{
	constructor(entity: ADKEntity, options: storagecontainersComponentInputs) {
		super(entity, options.name, "Microsoft.AzureStackHCI/storagecontainers", "2021-09-01-preview", options);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStackHCI/storagecontainers";
}
export interface storagecontainersComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AzureStackHCI/storagecontainers";
}
export interface storagecontainersComponentInputs {
	readonly extendedLocation?: StoragecontainersExtendedLocation;
	readonly location: string;
	readonly name: string;
	readonly properties?: StoragecontainersProperties;
	readonly systemData?: SystemData;
	readonly tags?: StoragecontainersTags;
}
export class virtualharddisks
	extends ArmResource<virtualharddisksComponentInputs>
	implements virtualharddisksComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualharddisksComponentInputs) {
		super(entity, options.name, "Microsoft.AzureStackHCI/virtualharddisks", "2021-09-01-preview", options);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStackHCI/virtualharddisks";
}
export interface virtualharddisksComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AzureStackHCI/virtualharddisks";
}
export interface virtualharddisksComponentInputs {
	readonly extendedLocation?: ExtendedLocation;
	readonly location: string;
	readonly name: string;
	readonly properties?: VirtualharddisksProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class virtualmachines
	extends ArmResource<virtualmachinesComponentInputs>
	implements virtualmachinesComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualmachinesComponentInputs) {
		super(entity, options.name, "Microsoft.AzureStackHCI/virtualmachines", "2021-09-01-preview", options);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStackHCI/virtualmachines";
}
export interface virtualmachinesComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AzureStackHCI/virtualmachines";
}
export interface virtualmachinesComponentInputs {
	readonly extendedLocation?: ExtendedLocation;
	readonly identity?: Identity;
	readonly location: string;
	readonly name: string;
	readonly properties?: VirtualmachinesProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class virtualMachines_extensions
	extends ArmResource<virtualMachines_extensionsComponentInputs>
	implements virtualMachines_extensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualMachines_extensionsComponentInputs) {
		super(entity, options.name, "Microsoft.AzureStackHCI/virtualMachines/extensions", "2021-09-01-preview", options);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStackHCI/virtualMachines/extensions";
}
export interface virtualMachines_extensionsComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AzureStackHCI/virtualMachines/extensions";
}
export interface virtualMachines_extensionsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: MachineExtensionProperties;
	readonly systemData?: SystemData;
	readonly tags?: MachineExtensionTags;
}
export class virtualMachines_guestAgents
	extends ArmResource<virtualMachines_guestAgentsComponentInputs>
	implements virtualMachines_guestAgentsComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualMachines_guestAgentsComponentInputs) {
		super(entity, options.name, "Microsoft.AzureStackHCI/virtualMachines/guestAgents", "2021-09-01-preview", options);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStackHCI/virtualMachines/guestAgents";
}
export interface virtualMachines_guestAgentsComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AzureStackHCI/virtualMachines/guestAgents";
}
export interface virtualMachines_guestAgentsComponentInputs {
	readonly name: string;
	readonly properties: GuestAgentProperties;
	readonly systemData?: SystemData;
}
export class virtualMachines_hybridIdentityMetadata
	extends ArmResource<virtualMachines_hybridIdentityMetadataComponentInputs>
	implements virtualMachines_hybridIdentityMetadataComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualMachines_hybridIdentityMetadataComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.AzureStackHCI/virtualMachines/hybridIdentityMetadata",
			"2021-09-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStackHCI/virtualMachines/hybridIdentityMetadata";
}
export interface virtualMachines_hybridIdentityMetadataComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AzureStackHCI/virtualMachines/hybridIdentityMetadata";
}
export interface virtualMachines_hybridIdentityMetadataComponentInputs {
	readonly name: string;
	readonly properties: HybridIdentityMetadataProperties;
	readonly systemData?: SystemData;
}
export class virtualnetworks
	extends ArmResource<virtualnetworksComponentInputs>
	implements virtualnetworksComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualnetworksComponentInputs) {
		super(entity, options.name, "Microsoft.AzureStackHCI/virtualnetworks", "2021-09-01-preview", options);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStackHCI/virtualnetworks";
}
export interface virtualnetworksComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AzureStackHCI/virtualnetworks";
}
export interface virtualnetworksComponentInputs {
	readonly extendedLocation?: ExtendedLocation;
	readonly location: string;
	readonly name: string;
	readonly properties?: VirtualnetworksProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export interface ArcSettingProperties {
	readonly aggregateState?:
		| "Canceled"
		| "Connected"
		| "Creating"
		| "Deleted"
		| "Deleting"
		| "Disconnected"
		| "Error"
		| "Failed"
		| "InProgress"
		| "Moving"
		| "NotSpecified"
		| "PartiallyConnected"
		| "PartiallySucceeded"
		| "Succeeded"
		| "Updating";
	readonly arcInstanceResourceGroup?: string;
	readonly perNodeDetails?: PerNodeState[];
	readonly provisioningState?: "Accepted" | "Canceled" | "Failed" | "Provisioning" | "Succeeded";
}
export interface ClusterDesiredProperties {
	readonly diagnosticLevel?: "Basic" | "Enhanced" | "Off";
	readonly windowsServerSubscription?: "Disabled" | "Enabled";
}
export interface ClusterNode {
	readonly coreCount?: number;
	readonly id?: number;
	readonly manufacturer?: string;
	readonly memoryInGiB?: number;
	readonly model?: string;
	readonly name?: string;
	readonly osName?: string;
	readonly osVersion?: string;
	readonly serialNumber?: string;
	readonly windowsServerSubscription?: "Disabled" | "Enabled";
}
export interface ClusterProperties {
	readonly aadClientId: string;
	readonly aadTenantId: string;
	readonly billingModel?: string;
	readonly cloudId?: string;
	readonly cloudManagementEndpoint?: string;
	readonly desiredProperties?: ClusterDesiredProperties;
	readonly lastBillingTimestamp?: string;
	readonly lastSyncTimestamp?: string;
	readonly provisioningState?: "Accepted" | "Canceled" | "Failed" | "Provisioning" | "Succeeded";
	readonly registrationTimestamp?: string;
	readonly reportedProperties?: ClusterReportedProperties;
	readonly status?: "ConnectedRecently" | "Disconnected" | "Error" | "NotConnectedRecently" | "NotYetRegistered";
	readonly trialDaysRemaining?: number;
}
export interface ClusterReportedProperties {
	readonly clusterId?: string;
	readonly clusterName?: string;
	readonly clusterVersion?: string;
	readonly diagnosticLevel?: "Basic" | "Enhanced" | "Off";
	readonly imdsAttestation?: "Disabled" | "Enabled";
	readonly lastUpdated?: string;
	readonly nodes?: ClusterNode[];
}
export interface ComponentsL15GkaSchemasVirtualnetworkspropertiesPropertiesSubnetsItemsPropertiesRoutetable {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ComponentsOycd2YSchemasVirtualnetworkspropertiesPropertiesSubnetsItemsPropertiesRoutetableProperties;
	readonly type?: string;
}
export interface ComponentsOycd2YSchemasVirtualnetworkspropertiesPropertiesSubnetsItemsPropertiesRoutetableProperties {
	readonly routes?: VirtualnetworksPropertiesSubnetsPropertiesItemsItem[];
}
export interface ComponentsVqks9HSchemasVirtualnetworkspropertiesPropertiesSubnetsItemsPropertiesIpconfigurationreferencesItems {
	readonly ID?: string;
}
export interface ErrorAdditionalInfo {
	readonly info?: any;
	readonly type?: string;
}
export interface ErrorDetail {
	readonly additionalInfo?: ErrorAdditionalInfo[];
	readonly code?: string;
	readonly details?: ErrorDetail[];
	readonly message?: string;
	readonly target?: string;
}
export interface ExtendedLocation {
	readonly name?: string;
	readonly type?: "CustomLocation";
}
export interface ExtensionParameters {
	readonly autoUpgradeMinorVersion?: boolean;
	readonly forceUpdateTag?: string;
	readonly protectedSettings?: any;
	readonly publisher?: string;
	readonly settings?: any;
	readonly type?: string;
	readonly typeHandlerVersion?: string;
}
export interface ExtensionProperties {
	readonly aggregateState?:
		| "Canceled"
		| "Connected"
		| "Creating"
		| "Deleted"
		| "Deleting"
		| "Disconnected"
		| "Error"
		| "Failed"
		| "InProgress"
		| "Moving"
		| "NotSpecified"
		| "PartiallyConnected"
		| "PartiallySucceeded"
		| "Succeeded"
		| "Updating";
	readonly extensionParameters?: ExtensionParameters;
	readonly perNodeExtensionDetails?: PerNodeExtensionState[];
	readonly provisioningState?: "Accepted" | "Canceled" | "Failed" | "Provisioning" | "Succeeded";
}
export interface GalleryImageIdentifier {
	readonly offer: string;
	readonly publisher: string;
	readonly sku: string;
}
export interface GalleryimagesProperties {
	readonly cloudInitDataSource?: "Azure" | "NoCloud";
	readonly containerName?: string;
	readonly hyperVGeneration?: "V1" | "V2";
	readonly identifier?: GalleryImageIdentifier;
	readonly imagePath?: string;
	readonly osType?: "Linux";
	readonly provisioningState?: "Accepted" | "Canceled" | "Deleting" | "Failed" | "InProgress" | "Succeeded";
	readonly resourceName?: string;
	readonly status?: GalleryImageStatus;
	readonly version?: GalleryImageVersion;
}
export interface GalleryImageStatus {
	readonly downloadStatus?: GalleryImageStatusDownloadStatus;
	readonly errorCode?: string;
	readonly errorMessage?: string;
	readonly progressPercentage?: number;
	readonly provisioningStatus?: GalleryImageStatusProvisioningStatus;
}
export interface GalleryImageStatusDownloadStatus {
	readonly downloadSizeInMB?: number;
}
export interface GalleryImageStatusProvisioningStatus {
	readonly operationId?: string;
	readonly status?: "Failed" | "InProgress" | "Succeeded";
}
export interface GalleryImageVersion {
	readonly name?: string;
	readonly properties?: GalleryImageVersionProperties;
}
export interface GalleryImageVersionProperties {
	readonly storageProfile: GalleryImageVersionStorageProfile;
}
export interface GalleryImageVersionStorageProfile {
	readonly osDiskImage?: GalleryOSDiskImage;
}
export interface GalleryOSDiskImage {
	readonly sizeInMB?: number;
}
export interface GuestAgentProfile {
	readonly agentVersion?: string;
	readonly errorDetails?: ErrorDetail[];
	readonly lastStatusChange?: string;
	readonly status?: "Connected" | "Disconnected" | "Error";
	readonly vmUuid?: string;
}
export interface GuestAgentProperties {
	readonly credentials?: GuestCredential;
	readonly httpProxyConfig?: HttpProxyConfiguration;
	readonly provisioningAction?: "install" | "repair" | "uninstall";
	readonly provisioningState?: string;
	readonly status?: string;
}
export interface GuestCredential {
	readonly password?: string;
	readonly username?: string;
}
export interface HttpProxyConfiguration {
	readonly httpsProxy?: string;
}
export interface HybridIdentityMetadataProperties {
	readonly identity?: Identity;
	readonly provisioningState?: string;
	readonly publicKey?: string;
	readonly resourceUid?: string;
}
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "SystemAssigned";
}
export interface InterfaceDNSSettings {
	readonly dnsServers?: string[];
}
export interface IpConfiguration {
	readonly name?: string;
	readonly properties?: IpConfigurationProperties;
}
export interface IpConfigurationProperties {
	readonly gateway?: string;
	readonly prefixLength?: string;
	readonly privateIPAddress?: string;
	readonly privateIPAllocationMethod?: "Dynamic" | "Static";
	readonly subnet?: IpConfigurationPropertiesSubnet;
}
export interface IpConfigurationPropertiesSubnet {
	readonly id?: string;
}
export interface IPPool {
	readonly end?: string;
	readonly info?: IPPoolInfo;
	readonly ipPoolType?: "vippool";
	readonly start?: string;
}
export interface IPPoolInfo {
	readonly available?: string;
	readonly used?: string;
}
export interface MachineExtensionInstanceViewStatus {
	readonly code?: string;
	readonly displayStatus?: string;
	readonly level?: "Error" | "Info" | "Warning";
	readonly message?: string;
	readonly time?: string;
}
export interface MachineExtensionProperties {
	readonly autoUpgradeMinorVersion?: boolean;
	readonly forceUpdateTag?: string;
	readonly instanceView?: MachineExtensionPropertiesInstanceView;
	readonly protectedSettings?: any;
	readonly provisioningState?: string;
	readonly publisher?: string;
	readonly settings?: any;
	readonly type?: string;
	readonly typeHandlerVersion?: string;
}
export interface MachineExtensionPropertiesInstanceView {
	readonly name?: string;
	readonly status?: MachineExtensionInstanceViewStatus;
	readonly type?: string;
	readonly typeHandlerVersion?: string;
}
export interface MachineExtensionTags {
	readonly [key: string]: string;
}
export interface MarketplacegalleryimagesProperties {
	readonly cloudInitDataSource?: "Azure" | "NoCloud";
	readonly containerName?: string;
	readonly hyperVGeneration?: "V1" | "V2";
	readonly identifier?: GalleryImageIdentifier;
	readonly osType?: "Linux";
	readonly provisioningState?: "Accepted" | "Canceled" | "Deleting" | "Failed" | "InProgress" | "Succeeded";
	readonly resourceName?: string;
	readonly status?: MarketplaceGalleryImageStatus;
	readonly version?: GalleryImageVersion;
}
export interface MarketplaceGalleryImageStatus {
	readonly downloadStatus?: MarketplaceGalleryImageStatusDownloadStatus;
	readonly errorCode?: string;
	readonly errorMessage?: string;
	readonly progressPercentage?: number;
	readonly provisioningStatus?: MarketplaceGalleryImageStatusProvisioningStatus;
}
export interface MarketplaceGalleryImageStatusDownloadStatus {
	readonly downloadSizeInMB?: number;
}
export interface MarketplaceGalleryImageStatusProvisioningStatus {
	readonly operationId?: string;
	readonly status?: "Failed" | "InProgress" | "Succeeded";
}
export interface NetworkinterfacesProperties {
	readonly dnsSettings?: InterfaceDNSSettings;
	readonly ipConfigurations?: IpConfiguration[];
	readonly macAddress?: string;
	readonly provisioningState?: "Accepted" | "Canceled" | "Deleting" | "Failed" | "InProgress" | "Succeeded";
	readonly resourceName?: string;
	readonly status?: NetworkInterfaceStatus;
}
export interface NetworkInterfaceStatus {
	readonly errorCode?: string;
	readonly errorMessage?: string;
	readonly provisioningStatus?: NetworkInterfaceStatusProvisioningStatus;
}
export interface NetworkInterfaceStatusProvisioningStatus {
	readonly operationId?: string;
	readonly status?: "Failed" | "InProgress" | "Succeeded";
}
export interface PerNodeExtensionState {
	readonly extension?: string;
	readonly name?: string;
	readonly state?:
		| "Canceled"
		| "Connected"
		| "Creating"
		| "Deleted"
		| "Deleting"
		| "Disconnected"
		| "Error"
		| "Failed"
		| "Moving"
		| "NotSpecified"
		| "Succeeded"
		| "Updating";
}
export interface PerNodeState {
	readonly arcInstance?: string;
	readonly name?: string;
	readonly state?:
		| "Canceled"
		| "Connected"
		| "Creating"
		| "Deleted"
		| "Deleting"
		| "Disconnected"
		| "Error"
		| "Failed"
		| "Moving"
		| "NotSpecified"
		| "Succeeded"
		| "Updating";
}
export interface StoragecontainersExtendedLocation {
	readonly name?: string;
	readonly type?: string;
}
export interface StoragecontainersProperties {
	readonly availableSizeMB?: number;
	readonly containerSizeMB?: number;
	readonly path?: string;
	readonly provisioningState?: string;
	readonly resourceName?: string;
	readonly status?: StorageContainerStatus;
}
export interface StoragecontainersTags {
	readonly [key: string]: string;
}
export interface StorageContainerStatus {
	readonly availableSizeMB?: number;
	readonly containerSizeMB?: number;
	readonly errorCode?: string;
	readonly errorMessage?: string;
	readonly provisioningStatus?: StorageContainerStatusProvisioningStatus;
}
export interface StorageContainerStatusProvisioningStatus {
	readonly operationId?: string;
	readonly status?: "Failed" | "InProgress" | "Succeeded";
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface VirtualharddisksProperties {
	readonly blockSizeBytes?: number;
	readonly containerId?: string;
	readonly diskFileFormat?: "vhd" | "vhdx";
	readonly diskSizeBytes?: number;
	readonly dynamic?: boolean;
	readonly hyperVGeneration?: "V1" | "V2";
	readonly logicalSectorBytes?: number;
	readonly physicalSectorBytes?: number;
	readonly provisioningState?: "Accepted" | "Canceled" | "Deleting" | "Failed" | "InProgress" | "Succeeded";
	readonly resourceName?: string;
	readonly status?: VirtualHardDiskStatus;
}
export interface VirtualHardDiskStatus {
	readonly errorCode?: string;
	readonly errorMessage?: string;
	readonly provisioningStatus?: VirtualHardDiskStatusProvisioningStatus;
}
export interface VirtualHardDiskStatusProvisioningStatus {
	readonly operationId?: string;
	readonly status?: "Failed" | "InProgress" | "Succeeded";
}
export interface VirtualmachinesProperties {
	readonly guestAgentProfile?: GuestAgentProfile;
	readonly hardwareProfile?: VirtualmachinesPropertiesHardwareProfile;
	readonly networkProfile?: VirtualmachinesPropertiesNetworkProfile;
	readonly osProfile?: VirtualmachinesPropertiesOsProfile;
	readonly provisioningState?: "Accepted" | "Canceled" | "Deleting" | "Failed" | "InProgress" | "Succeeded";
	readonly resourceName?: string;
	readonly securityProfile?: VirtualmachinesPropertiesSecurityProfile;
	readonly status?: VirtualMachineStatus;
	readonly storageProfile?: VirtualmachinesPropertiesStorageProfile;
	readonly vmId?: string;
}
export interface VirtualmachinesPropertiesHardwareProfile {
	readonly dynamicMemoryConfig?: VirtualmachinesPropertiesHardwareProfileDynamicMemoryConfig;
	readonly memoryGB?: number;
	readonly processors?: number;
	readonly vmSize?: string;
}
export interface VirtualmachinesPropertiesHardwareProfileDynamicMemoryConfig {
	readonly maximumMemoryGB?: number;
	readonly minimumMemoryGB?: number;
	readonly targetMemoryBuffer?: number;
}
export interface VirtualmachinesPropertiesNetworkProfile {
	readonly networkInterfaces?: VirtualmachinesPropertiesNetworkProfileNetworkInterfacesItem[];
}
export interface VirtualmachinesPropertiesNetworkProfileNetworkInterfacesItem {
	readonly id?: string;
}
export interface VirtualmachinesPropertiesOsProfile {
	readonly adminPassword?: string;
	readonly adminUsername?: string;
	readonly computerName?: string;
	readonly linuxConfiguration?: VirtualmachinesPropertiesOsProfileLinuxConfiguration;
	readonly osType?: "Linux" | "Windows";
	readonly windowsConfiguration?: VirtualmachinesPropertiesOsProfileWindowsConfiguration;
}
export interface VirtualmachinesPropertiesOsProfileLinuxConfiguration {
	readonly disablePasswordAuthentication?: boolean;
	readonly provisionVMAgent?: boolean;
	readonly ssh?: VirtualmachinesPropertiesOsProfileLinuxConfigurationSsh;
}
export interface VirtualmachinesPropertiesOsProfileLinuxConfigurationSsh {
	readonly publicKeys?: VirtualmachinesPropertiesOsProfileLinuxConfigurationSshPublicKeysItem[];
}
export interface VirtualmachinesPropertiesOsProfileLinuxConfigurationSshPublicKeysItem {
	readonly keyData?: string;
	readonly path?: string;
}
export interface VirtualmachinesPropertiesOsProfileWindowsConfiguration {
	readonly enableAutomaticUpdates?: boolean;
	readonly provisionVMAgent?: boolean;
	readonly ssh?: VirtualmachinesPropertiesOsProfileWindowsConfigurationSsh;
	readonly timeZone?: string;
}
export interface VirtualmachinesPropertiesOsProfileWindowsConfigurationSsh {
	readonly publicKeys?: VirtualmachinesPropertiesOsProfileWindowsConfigurationSshPublicKeysItem[];
}
export interface VirtualmachinesPropertiesOsProfileWindowsConfigurationSshPublicKeysItem {
	readonly keyData?: string;
	readonly path?: string;
}
export interface VirtualmachinesPropertiesSecurityProfile {
	readonly enableTPM?: boolean;
	readonly uefiSettings?: VirtualmachinesPropertiesSecurityProfileUefiSettings;
}
export interface VirtualmachinesPropertiesSecurityProfileUefiSettings {
	readonly secureBootEnabled?: boolean;
}
export interface VirtualmachinesPropertiesStorageProfile {
	readonly dataDisks?: VirtualmachinesPropertiesStorageProfileDataDisksItem[];
	readonly imageReference?: VirtualmachinesPropertiesStorageProfileImageReference;
	readonly osDisk?: VirtualmachinesPropertiesStorageProfileOsDisk;
	readonly vmConfigContainerName?: string;
}
export interface VirtualmachinesPropertiesStorageProfileDataDisksItem {
	readonly name?: string;
}
export interface VirtualmachinesPropertiesStorageProfileImageReference {
	readonly name?: string;
}
export interface VirtualmachinesPropertiesStorageProfileOsDisk {
	readonly id?: string;
}
export interface VirtualMachineStatus {
	readonly errorCode?: string;
	readonly errorMessage?: string;
	readonly powerState?: "Deallocated" | "Deallocating" | "Running" | "Starting" | "Stopped" | "Stopping" | "Unknown";
	readonly provisioningStatus?: VirtualMachineStatusProvisioningStatus;
}
export interface VirtualMachineStatusProvisioningStatus {
	readonly operationId?: string;
	readonly status?: "Failed" | "InProgress" | "Succeeded";
}
export interface VirtualnetworksProperties {
	readonly networkType?:
		| "ICS"
		| "Internal"
		| "L2Bridge"
		| "L2Tunnel"
		| "Mirrored"
		| "NAT"
		| "Overlay"
		| "Private"
		| "Transparent";
	readonly provisioningState?: "Accepted" | "Canceled" | "Deleting" | "Failed" | "InProgress" | "Succeeded";
	readonly resourceName?: string;
	readonly status?: VirtualNetworkStatus;
	readonly subnets?: VirtualnetworksPropertiesSubnetsItem[];
}
export interface VirtualnetworksPropertiesSubnetsItem {
	readonly name?: string;
	readonly properties?: VirtualnetworksPropertiesSubnetsItemAutoGenerated;
}
export interface VirtualnetworksPropertiesSubnetsItemAutoGenerated {
	readonly addressPrefix?: string;
	readonly addressPrefixes?: string[];
	readonly ipAllocationMethod?: "Dynamic" | "Static";
	readonly ipConfigurationReferences?: ComponentsVqks9HSchemasVirtualnetworkspropertiesPropertiesSubnetsItemsPropertiesIpconfigurationreferencesItems[];
	readonly ipPools?: IPPool[];
	readonly routeTable?: ComponentsL15GkaSchemasVirtualnetworkspropertiesPropertiesSubnetsItemsPropertiesRoutetable;
	readonly vlan?: number;
}
export interface VirtualnetworksPropertiesSubnetsItemRouteTableRoutesItem {
	readonly addressPrefix?: string;
	readonly nextHopIpAddress?: string;
}
export interface VirtualnetworksPropertiesSubnetsPropertiesItemsItem {
	readonly name?: string;
	readonly properties?: VirtualnetworksPropertiesSubnetsItemRouteTableRoutesItem;
}
export interface VirtualNetworkStatus {
	readonly errorCode?: string;
	readonly errorMessage?: string;
	readonly provisioningStatus?: VirtualNetworkStatusProvisioningStatus;
}
export interface VirtualNetworkStatusProvisioningStatus {
	readonly operationId?: string;
	readonly status?: "Failed" | "InProgress" | "Succeeded";
}
export default {
	clusters: clusters,
	"clusters/arcSettings": clusters_arcSettings,
	"clusters/arcSettings/extensions": clusters_arcSettings_extensions,
	galleryimages: galleryimages,
	marketplacegalleryimages: marketplacegalleryimages,
	networkinterfaces: networkinterfaces,
	storagecontainers: storagecontainers,
	virtualharddisks: virtualharddisks,
	virtualmachines: virtualmachines,
	"virtualMachines/extensions": virtualMachines_extensions,
	"virtualMachines/guestAgents": virtualMachines_guestAgents,
	"virtualMachines/hybridIdentityMetadata": virtualMachines_hybridIdentityMetadata,
	virtualnetworks: virtualnetworks,
};
