import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class clusters extends ArmResource<clustersComponentInputs> implements clustersComponentOutputs {
	constructor(entity: ADKEntity, options: clustersComponentInputs) {
		super(entity, options.name, "Microsoft.ConnectedVMwarevSphere/clusters", "2020-10-01-preview", options);
	}
	public readonly apiVersion: "2020-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ConnectedVMwarevSphere/clusters";
}
export interface clustersComponentOutputs {
	readonly apiVersion: "2020-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ConnectedVMwarevSphere/clusters";
}
export interface clustersComponentInputs {
	readonly extendedLocation?: ExtendedLocation;
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties: ClusterProperties;
	readonly systemData?: SystemData;
	readonly tags?: ClusterTags;
}
export class datastores extends ArmResource<datastoresComponentInputs> implements datastoresComponentOutputs {
	constructor(entity: ADKEntity, options: datastoresComponentInputs) {
		super(entity, options.name, "Microsoft.ConnectedVMwarevSphere/datastores", "2020-10-01-preview", options);
	}
	public readonly apiVersion: "2020-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ConnectedVMwarevSphere/datastores";
}
export interface datastoresComponentOutputs {
	readonly apiVersion: "2020-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ConnectedVMwarevSphere/datastores";
}
export interface datastoresComponentInputs {
	readonly extendedLocation?: ExtendedLocation;
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties: DatastoreProperties;
	readonly systemData?: SystemData;
	readonly tags?: DatastoreTags;
}
export class hosts extends ArmResource<hostsComponentInputs> implements hostsComponentOutputs {
	constructor(entity: ADKEntity, options: hostsComponentInputs) {
		super(entity, options.name, "Microsoft.ConnectedVMwarevSphere/hosts", "2020-10-01-preview", options);
	}
	public readonly apiVersion: "2020-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ConnectedVMwarevSphere/hosts";
}
export interface hostsComponentOutputs {
	readonly apiVersion: "2020-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ConnectedVMwarevSphere/hosts";
}
export interface hostsComponentInputs {
	readonly extendedLocation?: ExtendedLocation;
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties: HostProperties;
	readonly systemData?: SystemData;
	readonly tags?: HostTags;
}
export class resourcePools extends ArmResource<resourcePoolsComponentInputs> implements resourcePoolsComponentOutputs {
	constructor(entity: ADKEntity, options: resourcePoolsComponentInputs) {
		super(entity, options.name, "Microsoft.ConnectedVMwarevSphere/resourcePools", "2020-10-01-preview", options);
	}
	public readonly apiVersion: "2020-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ConnectedVMwarevSphere/resourcePools";
}
export interface resourcePoolsComponentOutputs {
	readonly apiVersion: "2020-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ConnectedVMwarevSphere/resourcePools";
}
export interface resourcePoolsComponentInputs {
	readonly extendedLocation?: ExtendedLocation;
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties: ResourcePoolProperties;
	readonly systemData?: SystemData;
	readonly tags?: ResourcePoolTags;
}
export class vcenters extends ArmResource<vcentersComponentInputs> implements vcentersComponentOutputs {
	constructor(entity: ADKEntity, options: vcentersComponentInputs) {
		super(entity, options.name, "Microsoft.ConnectedVMwarevSphere/vcenters", "2020-10-01-preview", options);
	}
	public readonly apiVersion: "2020-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ConnectedVMwarevSphere/vcenters";
}
export interface vcentersComponentOutputs {
	readonly apiVersion: "2020-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ConnectedVMwarevSphere/vcenters";
}
export interface vcentersComponentInputs {
	readonly extendedLocation?: ExtendedLocation;
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties: VCenterProperties;
	readonly systemData?: SystemData;
	readonly tags?: VCenterTags;
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
			"2020-10-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ConnectedVMwarevSphere/vcenters/inventoryItems";
}
export interface vcenters_inventoryItemsComponentOutputs {
	readonly apiVersion: "2020-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ConnectedVMwarevSphere/vcenters/inventoryItems";
}
export interface vcenters_inventoryItemsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties: InventoryItemProperties;
	readonly systemData?: SystemData;
}
export class virtualMachines
	extends ArmResource<virtualMachinesComponentInputs>
	implements virtualMachinesComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualMachinesComponentInputs) {
		super(entity, options.name, "Microsoft.ConnectedVMwarevSphere/virtualMachines", "2020-10-01-preview", options);
	}
	public readonly apiVersion: "2020-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ConnectedVMwarevSphere/virtualMachines";
}
export interface virtualMachinesComponentOutputs {
	readonly apiVersion: "2020-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ConnectedVMwarevSphere/virtualMachines";
}
export interface virtualMachinesComponentInputs {
	readonly extendedLocation?: ExtendedLocation;
	readonly identity?: Identity;
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties: VirtualMachineProperties;
	readonly systemData?: SystemData;
	readonly tags?: VirtualMachineTags;
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
			"2020-10-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ConnectedVMwarevSphere/virtualMachines/extensions";
}
export interface virtualMachines_extensionsComponentOutputs {
	readonly apiVersion: "2020-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ConnectedVMwarevSphere/virtualMachines/extensions";
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
		super(
			entity,
			options.name,
			"Microsoft.ConnectedVMwarevSphere/virtualMachines/guestAgents",
			"2020-10-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ConnectedVMwarevSphere/virtualMachines/guestAgents";
}
export interface virtualMachines_guestAgentsComponentOutputs {
	readonly apiVersion: "2020-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ConnectedVMwarevSphere/virtualMachines/guestAgents";
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
			"Microsoft.ConnectedVMwarevSphere/virtualMachines/hybridIdentityMetadata",
			"2020-10-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ConnectedVMwarevSphere/virtualMachines/hybridIdentityMetadata";
}
export interface virtualMachines_hybridIdentityMetadataComponentOutputs {
	readonly apiVersion: "2020-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ConnectedVMwarevSphere/virtualMachines/hybridIdentityMetadata";
}
export interface virtualMachines_hybridIdentityMetadataComponentInputs {
	readonly name: string;
	readonly properties: HybridIdentityMetadataProperties;
	readonly systemData?: SystemData;
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
			"2020-10-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ConnectedVMwarevSphere/virtualMachineTemplates";
}
export interface virtualMachineTemplatesComponentOutputs {
	readonly apiVersion: "2020-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ConnectedVMwarevSphere/virtualMachineTemplates";
}
export interface virtualMachineTemplatesComponentInputs {
	readonly extendedLocation?: ExtendedLocation;
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties: VirtualMachineTemplateProperties;
	readonly systemData?: SystemData;
	readonly tags?: VirtualMachineTemplateTags;
}
export class virtualNetworks
	extends ArmResource<virtualNetworksComponentInputs>
	implements virtualNetworksComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualNetworksComponentInputs) {
		super(entity, options.name, "Microsoft.ConnectedVMwarevSphere/virtualNetworks", "2020-10-01-preview", options);
	}
	public readonly apiVersion: "2020-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ConnectedVMwarevSphere/virtualNetworks";
}
export interface virtualNetworksComponentOutputs {
	readonly apiVersion: "2020-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ConnectedVMwarevSphere/virtualNetworks";
}
export interface virtualNetworksComponentInputs {
	readonly extendedLocation?: ExtendedLocation;
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties: VirtualNetworkProperties;
	readonly systemData?: SystemData;
	readonly tags?: VirtualNetworkTags;
}
export interface ClusterProperties {
	readonly customResourceName?: string;
	readonly datastoreIds?: string[];
	readonly inventoryItemId?: string;
	readonly moName?: string;
	readonly moRefId?: string;
	readonly networkIds?: string[];
	readonly provisioningState?: string;
	readonly statuses?: ResourceStatus[];
	readonly uuid?: string;
	readonly vCenterId?: string;
}
export interface ClusterTags {
	readonly [key: string]: string;
}
export interface DatastoreProperties {
	readonly customResourceName?: string;
	readonly inventoryItemId?: string;
	readonly moName?: string;
	readonly moRefId?: string;
	readonly provisioningState?:
		| "Accepted"
		| "Canceled"
		| "Created"
		| "Deleting"
		| "Failed"
		| "Provisioning"
		| "Succeeded"
		| "Updating";
	readonly statuses?: ResourceStatus[];
	readonly uuid?: string;
	readonly vCenterId?: string;
}
export interface DatastoreTags {
	readonly [key: string]: string;
}
export interface ErrorDetail {
	readonly code: string;
	readonly details?: ErrorDetail[];
	readonly message: string;
	readonly target?: string;
}
export interface ExtendedLocation {
	readonly name?: string;
	readonly type?: string;
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
	readonly customResourceName?: string;
	readonly httpProxyConfig?: HttpProxyConfiguration;
	readonly provisioningAction?: "install" | "repair" | "uninstall";
	readonly provisioningState?: string;
	readonly status?: string;
	readonly statuses?: ResourceStatus[];
	readonly uuid?: string;
}
export interface GuestCredential {
	readonly password?: string;
	readonly username?: string;
}
export interface HardwareProfile {
	readonly cpuHotAddEnabled?: boolean;
	readonly cpuHotRemoveEnabled?: boolean;
	readonly memoryHotAddEnabled?: boolean;
	readonly memorySizeMB?: number;
	readonly numCoresPerSocket?: number;
	readonly numCPUs?: number;
}
export interface HostProperties {
	readonly customResourceName?: string;
	readonly inventoryItemId?: string;
	readonly moName?: string;
	readonly moRefId?: string;
	readonly provisioningState?: string;
	readonly statuses?: ResourceStatus[];
	readonly uuid?: string;
	readonly vCenterId?: string;
}
export interface HostTags {
	readonly [key: string]: string;
}
export interface HttpProxyConfiguration {
	readonly httpsProxy?: string;
}
export interface HybridIdentityMetadataProperties {
	readonly identity?: Identity;
	readonly provisioningState?: string;
	readonly publicKey?: string;
	readonly vmId?: string;
}
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type: "None" | "SystemAssigned";
}
export interface InventoryItemDetails {
	readonly inventoryItemId?: string;
	readonly moName?: string;
}
export interface InventoryItemProperties {
	readonly managedResourceId?: string;
	readonly moName?: string;
	readonly moRefId?: string;
	readonly provisioningState?: string;
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
export interface NetworkInterface {
	readonly deviceKey?: number;
	readonly ipAddresses?: string[];
	readonly ipSettings?: NicIPSettings;
	readonly label?: string;
	readonly macAddress?: string;
	readonly name?: string;
	readonly networkId?: string;
	readonly networkMoName?: string;
	readonly networkMoRefId?: string;
	readonly nicType?: "e1000" | "e1000e" | "pcnet32" | "vmxnet" | "vmxnet2" | "vmxnet3";
	readonly powerOnBoot?: "disabled" | "enabled";
}
export interface NetworkProfile {
	readonly networkInterfaces?: NetworkInterface[];
}
export interface NicIPAddressSettings {
	readonly allocationMethod?: string;
	readonly ipAddress?: string;
	readonly subnetMask?: string;
}
export interface NicIPSettings {
	readonly allocationMethod?: "dynamic" | "linklayer" | "other" | "random" | "static" | "unset";
	readonly dnsServers?: string[];
	readonly gateway?: string[];
	readonly ipAddress?: string;
	readonly ipAddressInfo?: NicIPAddressSettings[];
	readonly primaryWinsServer?: string;
	readonly secondaryWinsServer?: string;
	readonly subnetMask?: string;
}
export interface OsProfile {
	readonly adminPassword?: string;
	readonly adminUsername?: string;
	readonly computerName?: string;
	readonly osName?: string;
	readonly osType?: "Linux" | "Other" | "Windows";
	readonly toolsRunningStatus?: string;
	readonly toolsVersion?: string;
	readonly toolsVersionStatus?: string;
}
export interface PlacementProfile {
	readonly clusterId?: string;
	readonly datastoreId?: string;
	readonly hostId?: string;
	readonly resourcePoolId?: string;
}
export interface ResourcePoolProperties {
	readonly cpuLimitMHz?: number;
	readonly cpuReservationMHz?: number;
	readonly cpuSharesLevel?: string;
	readonly customResourceName?: string;
	readonly inventoryItemId?: string;
	readonly memLimitMB?: number;
	readonly memReservationMB?: number;
	readonly memSharesLevel?: string;
	readonly moName?: string;
	readonly moRefId?: string;
	readonly provisioningState?: string;
	readonly statuses?: ResourceStatus[];
	readonly uuid?: string;
	readonly vCenterId?: string;
}
export interface ResourcePoolTags {
	readonly [key: string]: string;
}
export interface ResourceStatus {
	readonly lastUpdatedAt?: string;
	readonly message?: string;
	readonly reason?: string;
	readonly severity?: string;
	readonly status?: string;
	readonly type?: string;
}
export interface StorageProfile {
	readonly disks?: VirtualDisk[];
	readonly scsiControllers?: VirtualScsiController[];
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface VCenterProperties {
	readonly connectionStatus?: string;
	readonly credentials?: VICredential;
	readonly customResourceName?: string;
	readonly fqdn: string;
	readonly instanceUuid?: string;
	readonly port?: number;
	readonly provisioningState?: string;
	readonly statuses?: ResourceStatus[];
	readonly uuid?: string;
	readonly version?: string;
}
export interface VCenterTags {
	readonly [key: string]: string;
}
export interface VICredential {
	readonly password?: string;
	readonly username?: string;
}
export interface VirtualDisk {
	readonly controllerKey?: number;
	readonly deviceKey?: number;
	readonly deviceName?: string;
	readonly diskMode?: "independent_nonpersistent" | "independent_persistent" | "persistent";
	readonly diskObjectId?: string;
	readonly diskSizeGB?: number;
	readonly diskType?: "flat" | "pmem" | "rawphysical" | "rawvirtual" | "sesparse" | "sparse" | "unknown";
	readonly label?: string;
	readonly name?: string;
	readonly unitNumber?: number;
}
export interface VirtualMachineProperties {
	readonly customResourceName?: string;
	readonly firmwareType?: "bios" | "efi";
	readonly folderPath?: string;
	readonly guestAgentProfile?: GuestAgentProfile;
	readonly hardwareProfile?: HardwareProfile;
	readonly instanceUuid?: string;
	readonly inventoryItemId?: string;
	readonly moName?: string;
	readonly moRefId?: string;
	readonly networkProfile?: NetworkProfile;
	readonly osProfile?: OsProfile;
	readonly placementProfile?: PlacementProfile;
	readonly powerState?: string;
	readonly provisioningState?: string;
	readonly resourcePoolId?: string;
	readonly smbiosUuid?: string;
	readonly statuses?: ResourceStatus[];
	readonly storageProfile?: StorageProfile;
	readonly templateId?: string;
	readonly uuid?: string;
	readonly vCenterId?: string;
	readonly vmId?: string;
}
export interface VirtualMachineTags {
	readonly [key: string]: string;
}
export interface VirtualMachineTemplateProperties {
	readonly customResourceName?: string;
	readonly disks?: VirtualDisk[];
	readonly firmwareType?: "bios" | "efi";
	readonly folderPath?: string;
	readonly inventoryItemId?: string;
	readonly memorySizeMB?: number;
	readonly moName?: string;
	readonly moRefId?: string;
	readonly networkInterfaces?: NetworkInterface[];
	readonly numCoresPerSocket?: number;
	readonly numCPUs?: number;
	readonly osName?: string;
	readonly osType?: "Linux" | "Other" | "Windows";
	readonly provisioningState?: string;
	readonly statuses?: ResourceStatus[];
	readonly toolsVersion?: string;
	readonly toolsVersionStatus?: string;
	readonly uuid?: string;
	readonly vCenterId?: string;
}
export interface VirtualMachineTemplateTags {
	readonly [key: string]: string;
}
export interface VirtualNetworkProperties {
	readonly customResourceName?: string;
	readonly inventoryItemId?: string;
	readonly moName?: string;
	readonly moRefId?: string;
	readonly provisioningState?: string;
	readonly statuses?: ResourceStatus[];
	readonly uuid?: string;
	readonly vCenterId?: string;
}
export interface VirtualNetworkTags {
	readonly [key: string]: string;
}
export interface VirtualScsiController {
	readonly busNumber?: number;
	readonly controllerKey?: number;
	readonly scsiCtlrUnitNumber?: number;
	readonly sharing?: "noSharing" | "physicalSharing" | "virtualSharing";
	readonly type?: "buslogic" | "lsilogic" | "lsilogicsas" | "pvscsi";
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
