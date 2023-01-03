import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class clusters extends ArmResource<clustersComponentInputs> implements clustersComponentOutputs {
	constructor(entity: ADKEntity, options: clustersComponentInputs) {
		super(entity, options.name, "Microsoft.ConnectedVMwarevSphere/clusters", "2022-01-10-preview", options);
	}
	public readonly apiVersion: "2022-01-10-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ConnectedVMwarevSphere/clusters";
}
export interface clustersComponentOutputs {
	readonly apiVersion: "2022-01-10-preview";
	readonly id: string;
	readonly type: "Microsoft.ConnectedVMwarevSphere/clusters";
}
export interface clustersComponentInputs {
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: ClusterProperties;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ClusterTags | undefined;
}
export class datastores extends ArmResource<datastoresComponentInputs> implements datastoresComponentOutputs {
	constructor(entity: ADKEntity, options: datastoresComponentInputs) {
		super(entity, options.name, "Microsoft.ConnectedVMwarevSphere/datastores", "2022-01-10-preview", options);
	}
	public readonly apiVersion: "2022-01-10-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ConnectedVMwarevSphere/datastores";
}
export interface datastoresComponentOutputs {
	readonly apiVersion: "2022-01-10-preview";
	readonly id: string;
	readonly type: "Microsoft.ConnectedVMwarevSphere/datastores";
}
export interface datastoresComponentInputs {
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: DatastoreProperties;
	readonly systemData?: SystemData | undefined;
	readonly tags?: DatastoreTags | undefined;
}
export class hosts extends ArmResource<hostsComponentInputs> implements hostsComponentOutputs {
	constructor(entity: ADKEntity, options: hostsComponentInputs) {
		super(entity, options.name, "Microsoft.ConnectedVMwarevSphere/hosts", "2022-01-10-preview", options);
	}
	public readonly apiVersion: "2022-01-10-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ConnectedVMwarevSphere/hosts";
}
export interface hostsComponentOutputs {
	readonly apiVersion: "2022-01-10-preview";
	readonly id: string;
	readonly type: "Microsoft.ConnectedVMwarevSphere/hosts";
}
export interface hostsComponentInputs {
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: HostProperties;
	readonly systemData?: SystemData | undefined;
	readonly tags?: HostTags | undefined;
}
export class resourcePools extends ArmResource<resourcePoolsComponentInputs> implements resourcePoolsComponentOutputs {
	constructor(entity: ADKEntity, options: resourcePoolsComponentInputs) {
		super(entity, options.name, "Microsoft.ConnectedVMwarevSphere/resourcePools", "2022-01-10-preview", options);
	}
	public readonly apiVersion: "2022-01-10-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ConnectedVMwarevSphere/resourcePools";
}
export interface resourcePoolsComponentOutputs {
	readonly apiVersion: "2022-01-10-preview";
	readonly id: string;
	readonly type: "Microsoft.ConnectedVMwarevSphere/resourcePools";
}
export interface resourcePoolsComponentInputs {
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: ResourcePoolProperties;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ResourcePoolTags | undefined;
}
export class vcenters extends ArmResource<vcentersComponentInputs> implements vcentersComponentOutputs {
	constructor(entity: ADKEntity, options: vcentersComponentInputs) {
		super(entity, options.name, "Microsoft.ConnectedVMwarevSphere/vcenters", "2022-01-10-preview", options);
	}
	public readonly apiVersion: "2022-01-10-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ConnectedVMwarevSphere/vcenters";
}
export interface vcentersComponentOutputs {
	readonly apiVersion: "2022-01-10-preview";
	readonly id: string;
	readonly type: "Microsoft.ConnectedVMwarevSphere/vcenters";
}
export interface vcentersComponentInputs {
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: VCenterProperties;
	readonly systemData?: SystemData | undefined;
	readonly tags?: VCenterTags | undefined;
}
export class vcenters_inventoryItems
	extends ArmResource<vcenters_inventoryItemsComponentInputs>
	implements vcenters_inventoryItemsComponentOutputs
{
	constructor(entity: ADKEntity, options: vcenters_inventoryItemsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ConnectedVMwarevSphere/vcenters/inventoryItems",
			"2022-01-10-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-01-10-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ConnectedVMwarevSphere/vcenters/inventoryItems";
}
export interface vcenters_inventoryItemsComponentOutputs {
	readonly apiVersion: "2022-01-10-preview";
	readonly id: string;
	readonly type: "Microsoft.ConnectedVMwarevSphere/vcenters/inventoryItems";
}
export interface vcenters_inventoryItemsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties: InventoryItemProperties;
	readonly systemData?: SystemData | undefined;
}
export class virtualMachines
	extends ArmResource<virtualMachinesComponentInputs>
	implements virtualMachinesComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualMachinesComponentInputs) {
		super(entity, options.name, "Microsoft.ConnectedVMwarevSphere/virtualMachines", "2022-01-10-preview", options);
	}
	public readonly apiVersion: "2022-01-10-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ConnectedVMwarevSphere/virtualMachines";
}
export interface virtualMachinesComponentOutputs {
	readonly apiVersion: "2022-01-10-preview";
	readonly id: string;
	readonly type: "Microsoft.ConnectedVMwarevSphere/virtualMachines";
}
export interface virtualMachinesComponentInputs {
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly identity?: Identity | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: VirtualMachineProperties;
	readonly systemData?: SystemData | undefined;
	readonly tags?: VirtualMachineTags | undefined;
}
export class virtualMachines_extensions
	extends ArmResource<virtualMachines_extensionsComponentInputs>
	implements virtualMachines_extensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualMachines_extensionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ConnectedVMwarevSphere/virtualMachines/extensions",
			"2022-01-10-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-01-10-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ConnectedVMwarevSphere/virtualMachines/extensions";
}
export interface virtualMachines_extensionsComponentOutputs {
	readonly apiVersion: "2022-01-10-preview";
	readonly id: string;
	readonly type: "Microsoft.ConnectedVMwarevSphere/virtualMachines/extensions";
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
		super(
			entity,
			options.name,
			"Microsoft.ConnectedVMwarevSphere/virtualMachines/guestAgents",
			"2022-01-10-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-01-10-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ConnectedVMwarevSphere/virtualMachines/guestAgents";
}
export interface virtualMachines_guestAgentsComponentOutputs {
	readonly apiVersion: "2022-01-10-preview";
	readonly id: string;
	readonly type: "Microsoft.ConnectedVMwarevSphere/virtualMachines/guestAgents";
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
			"Microsoft.ConnectedVMwarevSphere/virtualMachines/hybridIdentityMetadata",
			"2022-01-10-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-01-10-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ConnectedVMwarevSphere/virtualMachines/hybridIdentityMetadata";
}
export interface virtualMachines_hybridIdentityMetadataComponentOutputs {
	readonly apiVersion: "2022-01-10-preview";
	readonly id: string;
	readonly type: "Microsoft.ConnectedVMwarevSphere/virtualMachines/hybridIdentityMetadata";
}
export interface virtualMachines_hybridIdentityMetadataComponentInputs {
	readonly name: string;
	readonly properties: HybridIdentityMetadataProperties;
	readonly systemData?: SystemData | undefined;
}
export class virtualMachineTemplates
	extends ArmResource<virtualMachineTemplatesComponentInputs>
	implements virtualMachineTemplatesComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualMachineTemplatesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ConnectedVMwarevSphere/virtualMachineTemplates",
			"2022-01-10-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-01-10-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ConnectedVMwarevSphere/virtualMachineTemplates";
}
export interface virtualMachineTemplatesComponentOutputs {
	readonly apiVersion: "2022-01-10-preview";
	readonly id: string;
	readonly type: "Microsoft.ConnectedVMwarevSphere/virtualMachineTemplates";
}
export interface virtualMachineTemplatesComponentInputs {
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: VirtualMachineTemplateProperties;
	readonly systemData?: SystemData | undefined;
	readonly tags?: VirtualMachineTemplateTags | undefined;
}
export class virtualNetworks
	extends ArmResource<virtualNetworksComponentInputs>
	implements virtualNetworksComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualNetworksComponentInputs) {
		super(entity, options.name, "Microsoft.ConnectedVMwarevSphere/virtualNetworks", "2022-01-10-preview", options);
	}
	public readonly apiVersion: "2022-01-10-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ConnectedVMwarevSphere/virtualNetworks";
}
export interface virtualNetworksComponentOutputs {
	readonly apiVersion: "2022-01-10-preview";
	readonly id: string;
	readonly type: "Microsoft.ConnectedVMwarevSphere/virtualNetworks";
}
export interface virtualNetworksComponentInputs {
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: VirtualNetworkProperties;
	readonly systemData?: SystemData | undefined;
	readonly tags?: VirtualNetworkTags | undefined;
}
export interface ClusterProperties {
	readonly customResourceName?: string | undefined;
	readonly datastoreIds?: string[] | undefined;
	readonly inventoryItemId?: string | undefined;
	readonly moName?: string | undefined;
	readonly moRefId?: string | undefined;
	readonly networkIds?: string[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly statuses?: ResourceStatus[] | undefined;
	readonly uuid?: string | undefined;
	readonly vCenterId?: string | undefined;
}
export interface ClusterTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface DatastoreProperties {
	readonly customResourceName?: string | undefined;
	readonly inventoryItemId?: string | undefined;
	readonly moName?: string | undefined;
	readonly moRefId?: string | undefined;
	readonly provisioningState?:
		| ("Accepted" | "Canceled" | "Created" | "Deleting" | "Failed" | "Provisioning" | "Succeeded" | "Updating")
		| undefined;
	readonly statuses?: ResourceStatus[] | undefined;
	readonly uuid?: string | undefined;
	readonly vCenterId?: string | undefined;
}
export interface DatastoreTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ErrorDetail {
	readonly code: string;
	readonly details?: ErrorDetail[] | undefined;
	readonly message: string;
	readonly target?: string | undefined;
}
export interface ExtendedLocation {
	readonly name?: string | undefined;
	readonly type?: string | undefined;
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
	readonly customResourceName?: string | undefined;
	readonly httpProxyConfig?: HttpProxyConfiguration | undefined;
	readonly provisioningAction?: ("install" | "repair" | "uninstall") | undefined;
	readonly provisioningState?: string | undefined;
	readonly status?: string | undefined;
	readonly statuses?: ResourceStatus[] | undefined;
	readonly uuid?: string | undefined;
}
export interface GuestCredential {
	readonly password?: string | undefined;
	readonly username?: string | undefined;
}
export interface HardwareProfile {
	readonly cpuHotAddEnabled?: boolean | undefined;
	readonly cpuHotRemoveEnabled?: boolean | undefined;
	readonly memoryHotAddEnabled?: boolean | undefined;
	readonly memorySizeMB?: number | undefined;
	readonly numCoresPerSocket?: number | undefined;
	readonly numCPUs?: number | undefined;
}
export interface HostProperties {
	readonly customResourceName?: string | undefined;
	readonly inventoryItemId?: string | undefined;
	readonly moName?: string | undefined;
	readonly moRefId?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly statuses?: ResourceStatus[] | undefined;
	readonly uuid?: string | undefined;
	readonly vCenterId?: string | undefined;
}
export interface HostTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface HttpProxyConfiguration {
	readonly httpsProxy?: string | undefined;
}
export interface HybridIdentityMetadataProperties {
	readonly identity?: Identity | undefined;
	readonly provisioningState?: string | undefined;
	readonly publicKey?: string | undefined;
	readonly vmId?: string | undefined;
}
export interface Identity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type: "None" | "SystemAssigned";
}
export interface InventoryItemDetails {
	readonly inventoryItemId?: string | undefined;
	readonly moName?: string | undefined;
}
export interface InventoryItemProperties {
	readonly managedResourceId?: string | undefined;
	readonly moName?: string | undefined;
	readonly moRefId?: string | undefined;
	readonly provisioningState?: string | undefined;
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
	readonly enableAutomaticUpgrade?: boolean | undefined;
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
export interface NetworkInterface {
	readonly deviceKey?: number | undefined;
	readonly ipAddresses?: string[] | undefined;
	readonly ipSettings?: NicIPSettings | undefined;
	readonly label?: string | undefined;
	readonly macAddress?: string | undefined;
	readonly name?: string | undefined;
	readonly networkId?: string | undefined;
	readonly networkMoName?: string | undefined;
	readonly networkMoRefId?: string | undefined;
	readonly nicType?: ("e1000" | "e1000e" | "pcnet32" | "vmxnet" | "vmxnet2" | "vmxnet3") | undefined;
	readonly powerOnBoot?: ("disabled" | "enabled") | undefined;
}
export interface NetworkProfile {
	readonly networkInterfaces?: NetworkInterface[] | undefined;
}
export interface NicIPAddressSettings {
	readonly allocationMethod?: string | undefined;
	readonly ipAddress?: string | undefined;
	readonly subnetMask?: string | undefined;
}
export interface NicIPSettings {
	readonly allocationMethod?: ("dynamic" | "linklayer" | "other" | "random" | "static" | "unset") | undefined;
	readonly dnsServers?: string[] | undefined;
	readonly gateway?: string[] | undefined;
	readonly ipAddress?: string | undefined;
	readonly ipAddressInfo?: NicIPAddressSettings[] | undefined;
	readonly primaryWinsServer?: string | undefined;
	readonly secondaryWinsServer?: string | undefined;
	readonly subnetMask?: string | undefined;
}
export interface OsProfile {
	readonly adminPassword?: string | undefined;
	readonly adminUsername?: string | undefined;
	readonly allowExtensionOperations?: boolean | undefined;
	readonly computerName?: string | undefined;
	readonly guestId?: string | undefined;
	readonly linuxConfiguration?: OsProfileLinuxConfiguration | undefined;
	readonly osName?: string | undefined;
	readonly osType?: ("Linux" | "Other" | "Windows") | undefined;
	readonly toolsRunningStatus?: string | undefined;
	readonly toolsVersion?: string | undefined;
	readonly toolsVersionStatus?: string | undefined;
	readonly windowsConfiguration?: OsProfileWindowsConfiguration | undefined;
}
export interface OsProfileLinuxConfiguration {
	readonly patchSettings?: PatchSettings | undefined;
}
export interface OsProfileWindowsConfiguration {
	readonly patchSettings?: PatchSettings | undefined;
}
export interface PatchSettings {
	readonly assessmentMode?: string | undefined;
	readonly patchMode?: string | undefined;
}
export interface PlacementProfile {
	readonly clusterId?: string | undefined;
	readonly datastoreId?: string | undefined;
	readonly hostId?: string | undefined;
	readonly resourcePoolId?: string | undefined;
}
export interface ResourcePoolProperties {
	readonly cpuLimitMHz?: number | undefined;
	readonly cpuReservationMHz?: number | undefined;
	readonly cpuSharesLevel?: string | undefined;
	readonly customResourceName?: string | undefined;
	readonly inventoryItemId?: string | undefined;
	readonly memLimitMB?: number | undefined;
	readonly memReservationMB?: number | undefined;
	readonly memSharesLevel?: string | undefined;
	readonly moName?: string | undefined;
	readonly moRefId?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly statuses?: ResourceStatus[] | undefined;
	readonly uuid?: string | undefined;
	readonly vCenterId?: string | undefined;
}
export interface ResourcePoolTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ResourceStatus {
	readonly lastUpdatedAt?: string | undefined;
	readonly message?: string | undefined;
	readonly reason?: string | undefined;
	readonly severity?: string | undefined;
	readonly status?: string | undefined;
	readonly type?: string | undefined;
}
export interface SecurityProfile {
	readonly uefiSettings?: UefiSettings | undefined;
}
export interface StorageProfile {
	readonly disks?: VirtualDisk[] | undefined;
	readonly scsiControllers?: VirtualScsiController[] | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface UefiSettings {
	readonly secureBootEnabled?: boolean | undefined;
}
export interface VCenterProperties {
	readonly connectionStatus?: string | undefined;
	readonly credentials?: VICredential | undefined;
	readonly customResourceName?: string | undefined;
	readonly fqdn: string;
	readonly instanceUuid?: string | undefined;
	readonly port?: number | undefined;
	readonly provisioningState?: string | undefined;
	readonly statuses?: ResourceStatus[] | undefined;
	readonly uuid?: string | undefined;
	readonly version?: string | undefined;
}
export interface VCenterTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface VICredential {
	readonly password?: string | undefined;
	readonly username?: string | undefined;
}
export interface VirtualDisk {
	readonly controllerKey?: number | undefined;
	readonly deviceKey?: number | undefined;
	readonly deviceName?: string | undefined;
	readonly diskMode?: ("independent_nonpersistent" | "independent_persistent" | "persistent") | undefined;
	readonly diskObjectId?: string | undefined;
	readonly diskSizeGB?: number | undefined;
	readonly diskType?: ("flat" | "pmem" | "rawphysical" | "rawvirtual" | "sesparse" | "sparse" | "unknown") | undefined;
	readonly label?: string | undefined;
	readonly name?: string | undefined;
	readonly unitNumber?: number | undefined;
}
export interface VirtualMachineProperties {
	readonly customResourceName?: string | undefined;
	readonly firmwareType?: ("bios" | "efi") | undefined;
	readonly folderPath?: string | undefined;
	readonly guestAgentProfile?: GuestAgentProfile | undefined;
	readonly hardwareProfile?: HardwareProfile | undefined;
	readonly instanceUuid?: string | undefined;
	readonly inventoryItemId?: string | undefined;
	readonly moName?: string | undefined;
	readonly moRefId?: string | undefined;
	readonly networkProfile?: NetworkProfile | undefined;
	readonly osProfile?: OsProfile | undefined;
	readonly placementProfile?: PlacementProfile | undefined;
	readonly powerState?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly resourcePoolId?: string | undefined;
	readonly securityProfile?: SecurityProfile | undefined;
	readonly smbiosUuid?: string | undefined;
	readonly statuses?: ResourceStatus[] | undefined;
	readonly storageProfile?: StorageProfile | undefined;
	readonly templateId?: string | undefined;
	readonly uuid?: string | undefined;
	readonly vCenterId?: string | undefined;
	readonly vmId?: string | undefined;
}
export interface VirtualMachineTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface VirtualMachineTemplateProperties {
	readonly customResourceName?: string | undefined;
	readonly disks?: VirtualDisk[] | undefined;
	readonly firmwareType?: ("bios" | "efi") | undefined;
	readonly folderPath?: string | undefined;
	readonly inventoryItemId?: string | undefined;
	readonly memorySizeMB?: number | undefined;
	readonly moName?: string | undefined;
	readonly moRefId?: string | undefined;
	readonly networkInterfaces?: NetworkInterface[] | undefined;
	readonly numCoresPerSocket?: number | undefined;
	readonly numCPUs?: number | undefined;
	readonly osName?: string | undefined;
	readonly osType?: ("Linux" | "Other" | "Windows") | undefined;
	readonly provisioningState?: string | undefined;
	readonly statuses?: ResourceStatus[] | undefined;
	readonly toolsVersion?: string | undefined;
	readonly toolsVersionStatus?: string | undefined;
	readonly uuid?: string | undefined;
	readonly vCenterId?: string | undefined;
}
export interface VirtualMachineTemplateTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface VirtualNetworkProperties {
	readonly customResourceName?: string | undefined;
	readonly inventoryItemId?: string | undefined;
	readonly moName?: string | undefined;
	readonly moRefId?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly statuses?: ResourceStatus[] | undefined;
	readonly uuid?: string | undefined;
	readonly vCenterId?: string | undefined;
}
export interface VirtualNetworkTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface VirtualScsiController {
	readonly busNumber?: number | undefined;
	readonly controllerKey?: number | undefined;
	readonly scsiCtlrUnitNumber?: number | undefined;
	readonly sharing?: ("noSharing" | "physicalSharing" | "virtualSharing") | undefined;
	readonly type?: ("buslogic" | "lsilogic" | "lsilogicsas" | "pvscsi") | undefined;
}
export default {
	clusters: clusters,
	datastores: datastores,
	hosts: hosts,
	resourcePools: resourcePools,
	vcenters: vcenters,
	"vcenters/inventoryItems": vcenters_inventoryItems,
	virtualMachines: virtualMachines,
	"virtualMachines/extensions": virtualMachines_extensions,
	"virtualMachines/guestAgents": virtualMachines_guestAgents,
	"virtualMachines/hybridIdentityMetadata": virtualMachines_hybridIdentityMetadata,
	virtualMachineTemplates: virtualMachineTemplates,
	virtualNetworks: virtualNetworks,
};
