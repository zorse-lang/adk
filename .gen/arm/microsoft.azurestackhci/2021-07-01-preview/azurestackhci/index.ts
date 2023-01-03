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
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: GalleryimagesProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: NetworkinterfacesProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: VirtualmachinesProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: VirtualnetworksProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
export interface ExtendedLocation {
	readonly name?: string | undefined;
	readonly type?: "CustomLocation" | undefined;
}
export interface GalleryimagesProperties {
	readonly containerName?: string | undefined;
	readonly imagePath?: string | undefined;
	readonly osType?: "Linux" | undefined;
	readonly provisioningState?: ("Accepted" | "Deleting" | "Failed" | "InProgress" | "Succeeded") | undefined;
	readonly resourceName?: string | undefined;
	readonly status?: GalleryImageStatus | undefined;
}
export interface GalleryImageStatus {
	readonly errorCode?: string | undefined;
	readonly errorMessage?: string | undefined;
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
export interface NetworkinterfacesProperties {
	readonly dnsSettings?: InterfaceDNSSettings | undefined;
	readonly ipConfigurations?: IpConfiguration[] | undefined;
	readonly macAddress?: string | undefined;
	readonly provisioningState?: ("Accepted" | "Deleting" | "Failed" | "InProgress" | "Succeeded") | undefined;
	readonly resourceName?: string | undefined;
	readonly status?: NetworkInterfaceStatus | undefined;
}
export interface NetworkInterfaceStatus {
	readonly errorCode?: string | undefined;
	readonly errorMessage?: string | undefined;
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
	readonly diskSizeBytes?: number | undefined;
	readonly dynamic?: boolean | undefined;
	readonly logicalSectorBytes?: number | undefined;
	readonly physicalSectorBytes?: number | undefined;
	readonly provisioningState?: ("Accepted" | "Deleting" | "Failed" | "InProgress" | "Succeeded") | undefined;
	readonly resourceName?: string | undefined;
	readonly status?: VirtualHardDiskStatus | undefined;
}
export interface VirtualHardDiskStatus {
	readonly errorCode?: string | undefined;
	readonly errorMessage?: string | undefined;
}
export interface VirtualmachinesProperties {
	readonly hardwareProfile?: VirtualmachinesPropertiesHardwareProfile | undefined;
	readonly networkProfile?: VirtualmachinesPropertiesNetworkProfile | undefined;
	readonly osProfile?: VirtualmachinesPropertiesOsProfile | undefined;
	readonly provisioningState?: ("Accepted" | "Deleting" | "Failed" | "InProgress" | "Succeeded") | undefined;
	readonly resourceName?: string | undefined;
	readonly securityProfile?: VirtualmachinesPropertiesSecurityProfile | undefined;
	readonly status?: VirtualMachineStatus | undefined;
	readonly storageProfile?: VirtualmachinesPropertiesStorageProfile | undefined;
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
}
export interface VirtualmachinesPropertiesStorageProfile {
	readonly dataDisks?: VirtualmachinesPropertiesStorageProfileDataDisksItem[] | undefined;
	readonly imageReference?: VirtualmachinesPropertiesStorageProfileImageReference | undefined;
}
export interface VirtualmachinesPropertiesStorageProfileDataDisksItem {
	readonly name?: string | undefined;
}
export interface VirtualmachinesPropertiesStorageProfileImageReference {
	readonly name?: string | undefined;
}
export interface VirtualMachineStatus {
	readonly errorCode?: string | undefined;
	readonly errorMessage?: string | undefined;
	readonly powerState?:
		| ("Deallocated" | "Deallocating" | "Running" | "Starting" | "Stopped" | "Stopping" | "Unknown")
		| undefined;
}
export interface VirtualnetworksProperties {
	readonly networkType?:
		| ("ICS" | "Internal" | "L2Bridge" | "L2Tunnel" | "Mirrored" | "NAT" | "Overlay" | "Private" | "Transparent")
		| undefined;
	readonly provisioningState?: ("Accepted" | "Deleting" | "Failed" | "InProgress" | "Succeeded") | undefined;
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
}
export default {
	galleryimages: galleryimages,
	networkinterfaces: networkinterfaces,
	virtualharddisks: virtualharddisks,
	virtualmachines: virtualmachines,
	virtualnetworks: virtualnetworks,
};
