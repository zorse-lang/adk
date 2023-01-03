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
	readonly properties?: ClusterProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: ArcSettingProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: ExtensionProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: GalleryimagesProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: MarketplacegalleryimagesProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: NetworkinterfacesProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly extendedLocation?: StoragecontainersExtendedLocation | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: StoragecontainersProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: StoragecontainersTags | undefined;
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
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: VirtualharddisksProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly identity?: Identity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: VirtualmachinesProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: MachineExtensionProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: MachineExtensionTags | undefined;
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
	readonly systemData?: SystemData | undefined;
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
	readonly systemData?: SystemData | undefined;
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
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: VirtualnetworksProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface ArcSettingProperties {
	readonly aggregateState?:
		| (
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
				| "Updating"
		  )
		| undefined;
	readonly arcInstanceResourceGroup?: string | undefined;
	readonly perNodeDetails?: PerNodeState[] | undefined;
	readonly provisioningState?: ("Accepted" | "Canceled" | "Failed" | "Provisioning" | "Succeeded") | undefined;
}
export interface ClusterDesiredProperties {
	readonly diagnosticLevel?: ("Basic" | "Enhanced" | "Off") | undefined;
	readonly windowsServerSubscription?: ("Disabled" | "Enabled") | undefined;
}
export interface ClusterNode {
	readonly coreCount?: number | undefined;
	readonly id?: number | undefined;
	readonly manufacturer?: string | undefined;
	readonly memoryInGiB?: number | undefined;
	readonly model?: string | undefined;
	readonly name?: string | undefined;
	readonly osName?: string | undefined;
	readonly osVersion?: string | undefined;
	readonly serialNumber?: string | undefined;
	readonly windowsServerSubscription?: ("Disabled" | "Enabled") | undefined;
}
export interface ClusterProperties {
	readonly aadClientId: string;
	readonly aadTenantId: string;
	readonly billingModel?: string | undefined;
	readonly cloudId?: string | undefined;
	readonly cloudManagementEndpoint?: string | undefined;
	readonly desiredProperties?: ClusterDesiredProperties | undefined;
	readonly lastBillingTimestamp?: string | undefined;
	readonly lastSyncTimestamp?: string | undefined;
	readonly provisioningState?: ("Accepted" | "Canceled" | "Failed" | "Provisioning" | "Succeeded") | undefined;
	readonly registrationTimestamp?: string | undefined;
	readonly reportedProperties?: ClusterReportedProperties | undefined;
	readonly status?:
		| ("ConnectedRecently" | "Disconnected" | "Error" | "NotConnectedRecently" | "NotYetRegistered")
		| undefined;
	readonly trialDaysRemaining?: number | undefined;
}
export interface ClusterReportedProperties {
	readonly clusterId?: string | undefined;
	readonly clusterName?: string | undefined;
	readonly clusterVersion?: string | undefined;
	readonly diagnosticLevel?: ("Basic" | "Enhanced" | "Off") | undefined;
	readonly imdsAttestation?: ("Disabled" | "Enabled") | undefined;
	readonly lastUpdated?: string | undefined;
	readonly nodes?: ClusterNode[] | undefined;
}
export interface ComponentsL15GkaSchemasVirtualnetworkspropertiesPropertiesSubnetsItemsPropertiesRoutetable {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?:
		| ComponentsOycd2YSchemasVirtualnetworkspropertiesPropertiesSubnetsItemsPropertiesRoutetableProperties
		| undefined;
	readonly type?: string | undefined;
}
export interface ComponentsOycd2YSchemasVirtualnetworkspropertiesPropertiesSubnetsItemsPropertiesRoutetableProperties {
	readonly routes?: VirtualnetworksPropertiesSubnetsPropertiesItemsItem[] | undefined;
}
export interface ComponentsVqks9HSchemasVirtualnetworkspropertiesPropertiesSubnetsItemsPropertiesIpconfigurationreferencesItems {
	readonly ID?: string | undefined;
}
export interface ErrorAdditionalInfo {
	readonly info?: any | undefined;
	readonly type?: string | undefined;
}
export interface ErrorDetail {
	readonly additionalInfo?: ErrorAdditionalInfo[] | undefined;
	readonly code?: string | undefined;
	readonly details?: ErrorDetail[] | undefined;
	readonly message?: string | undefined;
	readonly target?: string | undefined;
}
export interface ExtendedLocation {
	readonly name?: string | undefined;
	readonly type?: "CustomLocation" | undefined;
}
export interface ExtensionParameters {
	readonly autoUpgradeMinorVersion?: boolean | undefined;
	readonly forceUpdateTag?: string | undefined;
	readonly protectedSettings?: any | undefined;
	readonly publisher?: string | undefined;
	readonly settings?: any | undefined;
	readonly type?: string | undefined;
	readonly typeHandlerVersion?: string | undefined;
}
export interface ExtensionProperties {
	readonly aggregateState?:
		| (
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
				| "Updating"
		  )
		| undefined;
	readonly extensionParameters?: ExtensionParameters | undefined;
	readonly perNodeExtensionDetails?: PerNodeExtensionState[] | undefined;
	readonly provisioningState?: ("Accepted" | "Canceled" | "Failed" | "Provisioning" | "Succeeded") | undefined;
}
export interface GalleryImageIdentifier {
	readonly offer: string;
	readonly publisher: string;
	readonly sku: string;
}
export interface GalleryimagesProperties {
	readonly cloudInitDataSource?: ("Azure" | "NoCloud") | undefined;
	readonly containerName?: string | undefined;
	readonly hyperVGeneration?: ("V1" | "V2") | undefined;
	readonly identifier?: GalleryImageIdentifier | undefined;
	readonly imagePath?: string | undefined;
	readonly osType?: "Linux" | undefined;
	readonly provisioningState?:
		| ("Accepted" | "Canceled" | "Deleting" | "Failed" | "InProgress" | "Succeeded")
		| undefined;
	readonly resourceName?: string | undefined;
	readonly status?: GalleryImageStatus | undefined;
	readonly version?: GalleryImageVersion | undefined;
}
export interface GalleryImageStatus {
	readonly downloadStatus?: GalleryImageStatusDownloadStatus | undefined;
	readonly errorCode?: string | undefined;
	readonly errorMessage?: string | undefined;
	readonly progressPercentage?: number | undefined;
	readonly provisioningStatus?: GalleryImageStatusProvisioningStatus | undefined;
}
export interface GalleryImageStatusDownloadStatus {
	readonly downloadSizeInMB?: number | undefined;
}
export interface GalleryImageStatusProvisioningStatus {
	readonly operationId?: string | undefined;
	readonly status?: ("Failed" | "InProgress" | "Succeeded") | undefined;
}
export interface GalleryImageVersion {
	readonly name?: string | undefined;
	readonly properties?: GalleryImageVersionProperties | undefined;
}
export interface GalleryImageVersionProperties {
	readonly storageProfile: GalleryImageVersionStorageProfile;
}
export interface GalleryImageVersionStorageProfile {
	readonly osDiskImage?: GalleryOSDiskImage | undefined;
}
export interface GalleryOSDiskImage {
	readonly sizeInMB?: number | undefined;
}
export interface GuestAgentProfile {
	readonly agentVersion?: string | undefined;
	readonly errorDetails?: ErrorDetail[] | undefined;
	readonly lastStatusChange?: string | undefined;
	readonly status?: ("Connected" | "Disconnected" | "Error") | undefined;
	readonly vmUuid?: string | undefined;
}
export interface GuestAgentProperties {
	readonly credentials?: GuestCredential | undefined;
	readonly httpProxyConfig?: HttpProxyConfiguration | undefined;
	readonly provisioningAction?: ("install" | "repair" | "uninstall") | undefined;
	readonly provisioningState?: string | undefined;
	readonly status?: string | undefined;
}
export interface GuestCredential {
	readonly password?: string | undefined;
	readonly username?: string | undefined;
}
export interface HttpProxyConfiguration {
	readonly httpsProxy?: string | undefined;
}
export interface HybridIdentityMetadataProperties {
	readonly identity?: Identity | undefined;
	readonly provisioningState?: string | undefined;
	readonly publicKey?: string | undefined;
	readonly resourceUid?: string | undefined;
}
export interface Identity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: "SystemAssigned" | undefined;
}
export interface InterfaceDNSSettings {
	readonly dnsServers?: string[] | undefined;
}
export interface IpConfiguration {
	readonly name?: string | undefined;
	readonly properties?: IpConfigurationProperties | undefined;
}
export interface IpConfigurationProperties {
	readonly gateway?: string | undefined;
	readonly prefixLength?: string | undefined;
	readonly privateIPAddress?: string | undefined;
	readonly privateIPAllocationMethod?: ("Dynamic" | "Static") | undefined;
	readonly subnet?: IpConfigurationPropertiesSubnet | undefined;
}
export interface IpConfigurationPropertiesSubnet {
	readonly id?: string | undefined;
}
export interface IPPool {
	readonly end?: string | undefined;
	readonly info?: IPPoolInfo | undefined;
	readonly ipPoolType?: "vippool" | undefined;
	readonly start?: string | undefined;
}
export interface IPPoolInfo {
	readonly available?: string | undefined;
	readonly used?: string | undefined;
}
export interface MachineExtensionInstanceViewStatus {
	readonly code?: string | undefined;
	readonly displayStatus?: string | undefined;
	readonly level?: ("Error" | "Info" | "Warning") | undefined;
	readonly message?: string | undefined;
	readonly time?: string | undefined;
}
export interface MachineExtensionProperties {
	readonly autoUpgradeMinorVersion?: boolean | undefined;
	readonly forceUpdateTag?: string | undefined;
	readonly instanceView?: MachineExtensionPropertiesInstanceView | undefined;
	readonly protectedSettings?: any | undefined;
	readonly provisioningState?: string | undefined;
	readonly publisher?: string | undefined;
	readonly settings?: any | undefined;
	readonly type?: string | undefined;
	readonly typeHandlerVersion?: string | undefined;
}
export interface MachineExtensionPropertiesInstanceView {
	readonly name?: string | undefined;
	readonly status?: MachineExtensionInstanceViewStatus | undefined;
	readonly type?: string | undefined;
	readonly typeHandlerVersion?: string | undefined;
}
export interface MachineExtensionTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface MarketplacegalleryimagesProperties {
	readonly cloudInitDataSource?: ("Azure" | "NoCloud") | undefined;
	readonly containerName?: string | undefined;
	readonly hyperVGeneration?: ("V1" | "V2") | undefined;
	readonly identifier?: GalleryImageIdentifier | undefined;
	readonly osType?: "Linux" | undefined;
	readonly provisioningState?:
		| ("Accepted" | "Canceled" | "Deleting" | "Failed" | "InProgress" | "Succeeded")
		| undefined;
	readonly resourceName?: string | undefined;
	readonly status?: MarketplaceGalleryImageStatus | undefined;
	readonly version?: GalleryImageVersion | undefined;
}
export interface MarketplaceGalleryImageStatus {
	readonly downloadStatus?: MarketplaceGalleryImageStatusDownloadStatus | undefined;
	readonly errorCode?: string | undefined;
	readonly errorMessage?: string | undefined;
	readonly progressPercentage?: number | undefined;
	readonly provisioningStatus?: MarketplaceGalleryImageStatusProvisioningStatus | undefined;
}
export interface MarketplaceGalleryImageStatusDownloadStatus {
	readonly downloadSizeInMB?: number | undefined;
}
export interface MarketplaceGalleryImageStatusProvisioningStatus {
	readonly operationId?: string | undefined;
	readonly status?: ("Failed" | "InProgress" | "Succeeded") | undefined;
}
export interface NetworkinterfacesProperties {
	readonly dnsSettings?: InterfaceDNSSettings | undefined;
	readonly ipConfigurations?: IpConfiguration[] | undefined;
	readonly macAddress?: string | undefined;
	readonly provisioningState?:
		| ("Accepted" | "Canceled" | "Deleting" | "Failed" | "InProgress" | "Succeeded")
		| undefined;
	readonly resourceName?: string | undefined;
	readonly status?: NetworkInterfaceStatus | undefined;
}
export interface NetworkInterfaceStatus {
	readonly errorCode?: string | undefined;
	readonly errorMessage?: string | undefined;
	readonly provisioningStatus?: NetworkInterfaceStatusProvisioningStatus | undefined;
}
export interface NetworkInterfaceStatusProvisioningStatus {
	readonly operationId?: string | undefined;
	readonly status?: ("Failed" | "InProgress" | "Succeeded") | undefined;
}
export interface PerNodeExtensionState {
	readonly extension?: string | undefined;
	readonly name?: string | undefined;
	readonly state?:
		| (
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
				| "Updating"
		  )
		| undefined;
}
export interface PerNodeState {
	readonly arcInstance?: string | undefined;
	readonly name?: string | undefined;
	readonly state?:
		| (
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
				| "Updating"
		  )
		| undefined;
}
export interface StoragecontainersExtendedLocation {
	readonly name?: string | undefined;
	readonly type?: string | undefined;
}
export interface StoragecontainersProperties {
	readonly availableSizeMB?: number | undefined;
	readonly containerSizeMB?: number | undefined;
	readonly path?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly resourceName?: string | undefined;
	readonly status?: StorageContainerStatus | undefined;
}
export interface StoragecontainersTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface StorageContainerStatus {
	readonly availableSizeMB?: number | undefined;
	readonly containerSizeMB?: number | undefined;
	readonly errorCode?: string | undefined;
	readonly errorMessage?: string | undefined;
	readonly provisioningStatus?: StorageContainerStatusProvisioningStatus | undefined;
}
export interface StorageContainerStatusProvisioningStatus {
	readonly operationId?: string | undefined;
	readonly status?: ("Failed" | "InProgress" | "Succeeded") | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface VirtualharddisksProperties {
	readonly blockSizeBytes?: number | undefined;
	readonly containerId?: string | undefined;
	readonly diskFileFormat?: ("vhd" | "vhdx") | undefined;
	readonly diskSizeBytes?: number | undefined;
	readonly dynamic?: boolean | undefined;
	readonly hyperVGeneration?: ("V1" | "V2") | undefined;
	readonly logicalSectorBytes?: number | undefined;
	readonly physicalSectorBytes?: number | undefined;
	readonly provisioningState?:
		| ("Accepted" | "Canceled" | "Deleting" | "Failed" | "InProgress" | "Succeeded")
		| undefined;
	readonly resourceName?: string | undefined;
	readonly status?: VirtualHardDiskStatus | undefined;
}
export interface VirtualHardDiskStatus {
	readonly errorCode?: string | undefined;
	readonly errorMessage?: string | undefined;
	readonly provisioningStatus?: VirtualHardDiskStatusProvisioningStatus | undefined;
}
export interface VirtualHardDiskStatusProvisioningStatus {
	readonly operationId?: string | undefined;
	readonly status?: ("Failed" | "InProgress" | "Succeeded") | undefined;
}
export interface VirtualmachinesProperties {
	readonly guestAgentProfile?: GuestAgentProfile | undefined;
	readonly hardwareProfile?: VirtualmachinesPropertiesHardwareProfile | undefined;
	readonly networkProfile?: VirtualmachinesPropertiesNetworkProfile | undefined;
	readonly osProfile?: VirtualmachinesPropertiesOsProfile | undefined;
	readonly provisioningState?:
		| ("Accepted" | "Canceled" | "Deleting" | "Failed" | "InProgress" | "Succeeded")
		| undefined;
	readonly resourceName?: string | undefined;
	readonly securityProfile?: VirtualmachinesPropertiesSecurityProfile | undefined;
	readonly status?: VirtualMachineStatus | undefined;
	readonly storageProfile?: VirtualmachinesPropertiesStorageProfile | undefined;
	readonly vmId?: string | undefined;
}
export interface VirtualmachinesPropertiesHardwareProfile {
	readonly dynamicMemoryConfig?: VirtualmachinesPropertiesHardwareProfileDynamicMemoryConfig | undefined;
	readonly memoryGB?: number | undefined;
	readonly processors?: number | undefined;
	readonly vmSize?: string | undefined;
}
export interface VirtualmachinesPropertiesHardwareProfileDynamicMemoryConfig {
	readonly maximumMemoryGB?: number | undefined;
	readonly minimumMemoryGB?: number | undefined;
	readonly targetMemoryBuffer?: number | undefined;
}
export interface VirtualmachinesPropertiesNetworkProfile {
	readonly networkInterfaces?: VirtualmachinesPropertiesNetworkProfileNetworkInterfacesItem[] | undefined;
}
export interface VirtualmachinesPropertiesNetworkProfileNetworkInterfacesItem {
	readonly id?: string | undefined;
}
export interface VirtualmachinesPropertiesOsProfile {
	readonly adminPassword?: string | undefined;
	readonly adminUsername?: string | undefined;
	readonly computerName?: string | undefined;
	readonly linuxConfiguration?: VirtualmachinesPropertiesOsProfileLinuxConfiguration | undefined;
	readonly osType?: ("Linux" | "Windows") | undefined;
	readonly windowsConfiguration?: VirtualmachinesPropertiesOsProfileWindowsConfiguration | undefined;
}
export interface VirtualmachinesPropertiesOsProfileLinuxConfiguration {
	readonly disablePasswordAuthentication?: boolean | undefined;
	readonly provisionVMAgent?: boolean | undefined;
	readonly ssh?: VirtualmachinesPropertiesOsProfileLinuxConfigurationSsh | undefined;
}
export interface VirtualmachinesPropertiesOsProfileLinuxConfigurationSsh {
	readonly publicKeys?: VirtualmachinesPropertiesOsProfileLinuxConfigurationSshPublicKeysItem[] | undefined;
}
export interface VirtualmachinesPropertiesOsProfileLinuxConfigurationSshPublicKeysItem {
	readonly keyData?: string | undefined;
	readonly path?: string | undefined;
}
export interface VirtualmachinesPropertiesOsProfileWindowsConfiguration {
	readonly enableAutomaticUpdates?: boolean | undefined;
	readonly provisionVMAgent?: boolean | undefined;
	readonly ssh?: VirtualmachinesPropertiesOsProfileWindowsConfigurationSsh | undefined;
	readonly timeZone?: string | undefined;
}
export interface VirtualmachinesPropertiesOsProfileWindowsConfigurationSsh {
	readonly publicKeys?: VirtualmachinesPropertiesOsProfileWindowsConfigurationSshPublicKeysItem[] | undefined;
}
export interface VirtualmachinesPropertiesOsProfileWindowsConfigurationSshPublicKeysItem {
	readonly keyData?: string | undefined;
	readonly path?: string | undefined;
}
export interface VirtualmachinesPropertiesSecurityProfile {
	readonly enableTPM?: boolean | undefined;
	readonly uefiSettings?: VirtualmachinesPropertiesSecurityProfileUefiSettings | undefined;
}
export interface VirtualmachinesPropertiesSecurityProfileUefiSettings {
	readonly secureBootEnabled?: boolean | undefined;
}
export interface VirtualmachinesPropertiesStorageProfile {
	readonly dataDisks?: VirtualmachinesPropertiesStorageProfileDataDisksItem[] | undefined;
	readonly imageReference?: VirtualmachinesPropertiesStorageProfileImageReference | undefined;
	readonly osDisk?: VirtualmachinesPropertiesStorageProfileOsDisk | undefined;
	readonly vmConfigContainerName?: string | undefined;
}
export interface VirtualmachinesPropertiesStorageProfileDataDisksItem {
	readonly name?: string | undefined;
}
export interface VirtualmachinesPropertiesStorageProfileImageReference {
	readonly name?: string | undefined;
}
export interface VirtualmachinesPropertiesStorageProfileOsDisk {
	readonly id?: string | undefined;
}
export interface VirtualMachineStatus {
	readonly errorCode?: string | undefined;
	readonly errorMessage?: string | undefined;
	readonly powerState?:
		| ("Deallocated" | "Deallocating" | "Running" | "Starting" | "Stopped" | "Stopping" | "Unknown")
		| undefined;
	readonly provisioningStatus?: VirtualMachineStatusProvisioningStatus | undefined;
}
export interface VirtualMachineStatusProvisioningStatus {
	readonly operationId?: string | undefined;
	readonly status?: ("Failed" | "InProgress" | "Succeeded") | undefined;
}
export interface VirtualnetworksProperties {
	readonly networkType?:
		| ("ICS" | "Internal" | "L2Bridge" | "L2Tunnel" | "Mirrored" | "NAT" | "Overlay" | "Private" | "Transparent")
		| undefined;
	readonly provisioningState?:
		| ("Accepted" | "Canceled" | "Deleting" | "Failed" | "InProgress" | "Succeeded")
		| undefined;
	readonly resourceName?: string | undefined;
	readonly status?: VirtualNetworkStatus | undefined;
	readonly subnets?: VirtualnetworksPropertiesSubnetsItem[] | undefined;
}
export interface VirtualnetworksPropertiesSubnetsItem {
	readonly name?: string | undefined;
	readonly properties?: VirtualnetworksPropertiesSubnetsItemAutoGenerated | undefined;
}
export interface VirtualnetworksPropertiesSubnetsItemAutoGenerated {
	readonly addressPrefix?: string | undefined;
	readonly addressPrefixes?: string[] | undefined;
	readonly ipAllocationMethod?: ("Dynamic" | "Static") | undefined;
	readonly ipConfigurationReferences?:
		| ComponentsVqks9HSchemasVirtualnetworkspropertiesPropertiesSubnetsItemsPropertiesIpconfigurationreferencesItems[]
		| undefined;
	readonly ipPools?: IPPool[] | undefined;
	readonly routeTable?:
		| ComponentsL15GkaSchemasVirtualnetworkspropertiesPropertiesSubnetsItemsPropertiesRoutetable
		| undefined;
	readonly vlan?: number | undefined;
}
export interface VirtualnetworksPropertiesSubnetsItemRouteTableRoutesItem {
	readonly addressPrefix?: string | undefined;
	readonly nextHopIpAddress?: string | undefined;
}
export interface VirtualnetworksPropertiesSubnetsPropertiesItemsItem {
	readonly name?: string | undefined;
	readonly properties?: VirtualnetworksPropertiesSubnetsItemRouteTableRoutesItem | undefined;
}
export interface VirtualNetworkStatus {
	readonly errorCode?: string | undefined;
	readonly errorMessage?: string | undefined;
	readonly provisioningStatus?: VirtualNetworkStatusProvisioningStatus | undefined;
}
export interface VirtualNetworkStatusProvisioningStatus {
	readonly operationId?: string | undefined;
	readonly status?: ("Failed" | "InProgress" | "Succeeded") | undefined;
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
