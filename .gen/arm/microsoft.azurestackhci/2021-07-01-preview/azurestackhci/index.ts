import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class galleryimages extends ArmResource<galleryimagesComponentInputs> implements galleryimagesComponentOutputs {
	constructor(entity: ADKEntity, options: galleryimagesComponentInputs) {
		super(entity, options.name, "Microsoft.AzureStackHCI/galleryimages", "2021-07-01-preview", options);
	}
	public readonly apiVersion: "2021-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStackHCI/galleryimages";
}
export interface galleryimagesComponentOutputs {
	readonly apiVersion: "2021-07-01-preview";
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
export class networkinterfaces
	extends ArmResource<networkinterfacesComponentInputs>
	implements networkinterfacesComponentOutputs
{
	constructor(entity: ADKEntity, options: networkinterfacesComponentInputs) {
		super(entity, options.name, "Microsoft.AzureStackHCI/networkinterfaces", "2021-07-01-preview", options);
	}
	public readonly apiVersion: "2021-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStackHCI/networkinterfaces";
}
export interface networkinterfacesComponentOutputs {
	readonly apiVersion: "2021-07-01-preview";
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
export class virtualharddisks
	extends ArmResource<virtualharddisksComponentInputs>
	implements virtualharddisksComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualharddisksComponentInputs) {
		super(entity, options.name, "Microsoft.AzureStackHCI/virtualharddisks", "2021-07-01-preview", options);
	}
	public readonly apiVersion: "2021-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStackHCI/virtualharddisks";
}
export interface virtualharddisksComponentOutputs {
	readonly apiVersion: "2021-07-01-preview";
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
		super(entity, options.name, "Microsoft.AzureStackHCI/virtualmachines", "2021-07-01-preview", options);
	}
	public readonly apiVersion: "2021-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStackHCI/virtualmachines";
}
export interface virtualmachinesComponentOutputs {
	readonly apiVersion: "2021-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AzureStackHCI/virtualmachines";
}
export interface virtualmachinesComponentInputs {
	readonly extendedLocation?: ExtendedLocation;
	readonly location: string;
	readonly name: string;
	readonly properties?: VirtualmachinesProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class virtualnetworks
	extends ArmResource<virtualnetworksComponentInputs>
	implements virtualnetworksComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualnetworksComponentInputs) {
		super(entity, options.name, "Microsoft.AzureStackHCI/virtualnetworks", "2021-07-01-preview", options);
	}
	public readonly apiVersion: "2021-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStackHCI/virtualnetworks";
}
export interface virtualnetworksComponentOutputs {
	readonly apiVersion: "2021-07-01-preview";
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
export interface ExtendedLocation {
	readonly name?: string;
	readonly type?: "CustomLocation";
}
export interface GalleryimagesProperties {
	readonly containerName?: string;
	readonly imagePath?: string;
	readonly osType?: "Linux";
	readonly provisioningState?: "Accepted" | "Deleting" | "Failed" | "InProgress" | "Succeeded";
	readonly resourceName?: string;
	readonly status?: GalleryImageStatus;
}
export interface GalleryImageStatus {
	readonly errorCode?: string;
	readonly errorMessage?: string;
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
export interface NetworkinterfacesProperties {
	readonly dnsSettings?: InterfaceDNSSettings;
	readonly ipConfigurations?: IpConfiguration[];
	readonly macAddress?: string;
	readonly provisioningState?: "Accepted" | "Deleting" | "Failed" | "InProgress" | "Succeeded";
	readonly resourceName?: string;
	readonly status?: NetworkInterfaceStatus;
}
export interface NetworkInterfaceStatus {
	readonly errorCode?: string;
	readonly errorMessage?: string;
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
	readonly diskSizeBytes?: number;
	readonly dynamic?: boolean;
	readonly logicalSectorBytes?: number;
	readonly physicalSectorBytes?: number;
	readonly provisioningState?: "Accepted" | "Deleting" | "Failed" | "InProgress" | "Succeeded";
	readonly resourceName?: string;
	readonly status?: VirtualHardDiskStatus;
}
export interface VirtualHardDiskStatus {
	readonly errorCode?: string;
	readonly errorMessage?: string;
}
export interface VirtualmachinesProperties {
	readonly hardwareProfile?: VirtualmachinesPropertiesHardwareProfile;
	readonly networkProfile?: VirtualmachinesPropertiesNetworkProfile;
	readonly osProfile?: VirtualmachinesPropertiesOsProfile;
	readonly provisioningState?: "Accepted" | "Deleting" | "Failed" | "InProgress" | "Succeeded";
	readonly resourceName?: string;
	readonly securityProfile?: VirtualmachinesPropertiesSecurityProfile;
	readonly status?: VirtualMachineStatus;
	readonly storageProfile?: VirtualmachinesPropertiesStorageProfile;
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
}
export interface VirtualmachinesPropertiesStorageProfile {
	readonly dataDisks?: VirtualmachinesPropertiesStorageProfileDataDisksItem[];
	readonly imageReference?: VirtualmachinesPropertiesStorageProfileImageReference;
}
export interface VirtualmachinesPropertiesStorageProfileDataDisksItem {
	readonly name?: string;
}
export interface VirtualmachinesPropertiesStorageProfileImageReference {
	readonly name?: string;
}
export interface VirtualMachineStatus {
	readonly errorCode?: string;
	readonly errorMessage?: string;
	readonly powerState?: "Deallocated" | "Deallocating" | "Running" | "Starting" | "Stopped" | "Stopping" | "Unknown";
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
	readonly provisioningState?: "Accepted" | "Deleting" | "Failed" | "InProgress" | "Succeeded";
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
}
export default {
	galleryimages: galleryimages,
	networkinterfaces: networkinterfaces,
	virtualharddisks: virtualharddisks,
	virtualmachines: virtualmachines,
	virtualnetworks: virtualnetworks,
};
