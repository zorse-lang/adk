import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class availabilitySets
	extends ArmResource<availabilitySetsComponentInputs>
	implements availabilitySetsComponentOutputs
{
	constructor(entity: ADKEntity, options: availabilitySetsComponentInputs) {
		super(entity, options.name, "Microsoft.ScVmm/availabilitySets", "2020-06-05-preview", options);
	}
	public readonly apiVersion: "2020-06-05-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ScVmm/availabilitySets";
}
export interface availabilitySetsComponentOutputs {
	readonly apiVersion: "2020-06-05-preview";
	readonly id: string;
	readonly type: "Microsoft.ScVmm/availabilitySets";
}
export interface availabilitySetsComponentInputs {
	readonly extendedLocation?: ExtendedLocation;
	readonly location?: string;
	readonly name: string;
	readonly properties?: AvailabilitySetProperties;
	readonly systemData?: SystemData;
	readonly tags?: AvailabilitySetTags;
}
export class clouds extends ArmResource<cloudsComponentInputs> implements cloudsComponentOutputs {
	constructor(entity: ADKEntity, options: cloudsComponentInputs) {
		super(entity, options.name, "Microsoft.ScVmm/clouds", "2020-06-05-preview", options);
	}
	public readonly apiVersion: "2020-06-05-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ScVmm/clouds";
}
export interface cloudsComponentOutputs {
	readonly apiVersion: "2020-06-05-preview";
	readonly id: string;
	readonly type: "Microsoft.ScVmm/clouds";
}
export interface cloudsComponentInputs {
	readonly extendedLocation: ExtendedLocation;
	readonly location: string;
	readonly name: string;
	readonly properties: CloudProperties;
	readonly systemData?: SystemData;
	readonly tags?: CloudTags;
}
export class virtualMachines
	extends ArmResource<virtualMachinesComponentInputs>
	implements virtualMachinesComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualMachinesComponentInputs) {
		super(entity, options.name, "Microsoft.ScVmm/virtualMachines", "2020-06-05-preview", options);
	}
	public readonly apiVersion: "2020-06-05-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ScVmm/virtualMachines";
}
export interface virtualMachinesComponentOutputs {
	readonly apiVersion: "2020-06-05-preview";
	readonly id: string;
	readonly type: "Microsoft.ScVmm/virtualMachines";
}
export interface virtualMachinesComponentInputs {
	readonly extendedLocation: ExtendedLocation;
	readonly location: string;
	readonly name: string;
	readonly properties: VirtualMachineProperties;
	readonly systemData?: SystemData;
	readonly tags?: VirtualMachineTags;
}
export class virtualMachineTemplates
	extends ArmResource<virtualMachineTemplatesComponentInputs>
	implements virtualMachineTemplatesComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualMachineTemplatesComponentInputs) {
		super(entity, options.name, "Microsoft.ScVmm/virtualMachineTemplates", "2020-06-05-preview", options);
	}
	public readonly apiVersion: "2020-06-05-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ScVmm/virtualMachineTemplates";
}
export interface virtualMachineTemplatesComponentOutputs {
	readonly apiVersion: "2020-06-05-preview";
	readonly id: string;
	readonly type: "Microsoft.ScVmm/virtualMachineTemplates";
}
export interface virtualMachineTemplatesComponentInputs {
	readonly extendedLocation: ExtendedLocation;
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
		super(entity, options.name, "Microsoft.ScVmm/virtualNetworks", "2020-06-05-preview", options);
	}
	public readonly apiVersion: "2020-06-05-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ScVmm/virtualNetworks";
}
export interface virtualNetworksComponentOutputs {
	readonly apiVersion: "2020-06-05-preview";
	readonly id: string;
	readonly type: "Microsoft.ScVmm/virtualNetworks";
}
export interface virtualNetworksComponentInputs {
	readonly extendedLocation: ExtendedLocation;
	readonly location: string;
	readonly name: string;
	readonly properties: VirtualNetworkProperties;
	readonly systemData?: SystemData;
	readonly tags?: VirtualNetworkTags;
}
export class vmmServers extends ArmResource<vmmServersComponentInputs> implements vmmServersComponentOutputs {
	constructor(entity: ADKEntity, options: vmmServersComponentInputs) {
		super(entity, options.name, "Microsoft.ScVmm/vmmServers", "2020-06-05-preview", options);
	}
	public readonly apiVersion: "2020-06-05-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ScVmm/vmmServers";
}
export interface vmmServersComponentOutputs {
	readonly apiVersion: "2020-06-05-preview";
	readonly id: string;
	readonly type: "Microsoft.ScVmm/vmmServers";
}
export interface vmmServersComponentInputs {
	readonly extendedLocation: ExtendedLocation;
	readonly location: string;
	readonly name: string;
	readonly properties: VMMServerProperties;
	readonly systemData?: SystemData;
	readonly tags?: VMMServerTags;
}
export class vmmServers_inventoryItems
	extends ArmResource<vmmServers_inventoryItemsComponentInputs>
	implements vmmServers_inventoryItemsComponentOutputs
{
	constructor(entity: ADKEntity, options: vmmServers_inventoryItemsComponentInputs) {
		super(entity, options.name, "Microsoft.ScVmm/vmmServers/inventoryItems", "2020-06-05-preview", options);
	}
	public readonly apiVersion: "2020-06-05-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ScVmm/vmmServers/inventoryItems";
}
export interface vmmServers_inventoryItemsComponentOutputs {
	readonly apiVersion: "2020-06-05-preview";
	readonly id: string;
	readonly type: "Microsoft.ScVmm/vmmServers/inventoryItems";
}
export interface vmmServers_inventoryItemsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties: InventoryItemProperties;
	readonly systemData?: SystemData;
}
export interface AvailabilitySetListItem {
	readonly id?: string;
	readonly name?: string;
}
export interface AvailabilitySetProperties {
	readonly availabilitySetName?: string;
	readonly provisioningState?: string;
	readonly vmmServerId?: string;
}
export interface AvailabilitySetTags {
	readonly [key: string]: string;
}
export interface Checkpoint {
	readonly checkpointID?: string;
	readonly description?: string;
	readonly name?: string;
	readonly parentCheckpointID?: string;
}
export interface CloudCapacity {
	readonly cpuCount?: number;
	readonly memoryMB?: number;
	readonly vmCount?: number;
}
export interface CloudProperties {
	readonly cloudCapacity?: CloudCapacity;
	readonly cloudName?: string;
	readonly inventoryItemId?: string;
	readonly provisioningState?: string;
	readonly storageQoSPolicies?: StorageQoSPolicy[];
	readonly uuid?: string;
	readonly vmmServerId?: string;
}
export interface CloudTags {
	readonly [key: string]: string;
}
export interface ExtendedLocation {
	readonly name?: string;
	readonly type?: string;
}
export interface HardwareProfile {
	readonly cpuCount?: number;
	readonly dynamicMemoryEnabled?: "false" | "true";
	readonly dynamicMemoryMaxMB?: number;
	readonly dynamicMemoryMinMB?: number;
	readonly isHighlyAvailable?: string;
	readonly limitCpuForMigration?: "false" | "true";
	readonly memoryMB?: number;
}
export interface InventoryItemDetails {
	readonly inventoryItemId?: string;
	readonly inventoryItemName?: string;
}
export interface InventoryItemProperties {
	readonly inventoryItemName?: string;
	readonly managedResourceId?: string;
	readonly provisioningState?: string;
	readonly uuid?: string;
}
export interface NetworkInterfaces {
	readonly displayName?: string;
	readonly ipv4Addresses?: string[];
	readonly ipv4AddressType?: "Dynamic" | "Static";
	readonly ipv6Addresses?: string[];
	readonly ipv6AddressType?: "Dynamic" | "Static";
	readonly macAddress?: string;
	readonly macAddressType?: "Dynamic" | "Static";
	readonly name?: string;
	readonly networkName?: string;
	readonly nicId?: string;
	readonly virtualNetworkId?: string;
}
export interface NetworkProfile {
	readonly networkInterfaces?: NetworkInterfaces[];
}
export interface OsProfile {
	readonly adminPassword?: string;
	readonly computerName?: string;
	readonly osName?: string;
	readonly osType?: "Linux" | "Other" | "Windows";
}
export interface StorageProfile {
	readonly disks?: VirtualDisk[];
}
export interface StorageQoSPolicy {
	readonly bandwidthLimit?: number;
	readonly id?: string;
	readonly iopsMaximum?: number;
	readonly iopsMinimum?: number;
	readonly name?: string;
	readonly policyId?: string;
}
export interface StorageQoSPolicyDetails {
	readonly id?: string;
	readonly name?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface VirtualDisk {
	readonly bus?: number;
	readonly busType?: string;
	readonly createDiffDisk?: "false" | "true";
	readonly diskId?: string;
	readonly diskSizeGB?: number;
	readonly displayName?: string;
	readonly lun?: number;
	readonly maxDiskSizeGB?: number;
	readonly name?: string;
	readonly storageQoSPolicy?: StorageQoSPolicyDetails;
	readonly templateDiskId?: string;
	readonly vhdFormatType?: string;
	readonly vhdType?: string;
	readonly volumeType?: string;
}
export interface VirtualMachineProperties {
	readonly availabilitySets?: AvailabilitySetListItem[];
	readonly checkpoints?: Checkpoint[];
	readonly checkpointType?: string;
	readonly cloudId?: string;
	readonly generation?: number;
	readonly hardwareProfile?: HardwareProfile;
	readonly inventoryItemId?: string;
	readonly networkProfile?: NetworkProfile;
	readonly osProfile?: OsProfile;
	readonly powerState?: string;
	readonly provisioningState?: string;
	readonly storageProfile?: StorageProfile;
	readonly templateId?: string;
	readonly uuid?: string;
	readonly vmmServerId?: string;
	readonly vmName?: string;
}
export interface VirtualMachineTags {
	readonly [key: string]: string;
}
export interface VirtualMachineTemplateProperties {
	readonly computerName?: string;
	readonly cpuCount?: number;
	readonly disks?: VirtualDisk[];
	readonly dynamicMemoryEnabled?: "false" | "true";
	readonly dynamicMemoryMaxMB?: number;
	readonly dynamicMemoryMinMB?: number;
	readonly generation?: number;
	readonly inventoryItemId?: string;
	readonly isCustomizable?: "false" | "true";
	readonly isHighlyAvailable?: string;
	readonly limitCpuForMigration?: "false" | "true";
	readonly memoryMB?: number;
	readonly networkInterfaces?: NetworkInterfaces[];
	readonly osName?: string;
	readonly osType?: "Linux" | "Other" | "Windows";
	readonly provisioningState?: string;
	readonly uuid?: string;
	readonly vmmServerId?: string;
}
export interface VirtualMachineTemplateTags {
	readonly [key: string]: string;
}
export interface VirtualNetworkProperties {
	readonly inventoryItemId?: string;
	readonly networkName?: string;
	readonly provisioningState?: string;
	readonly uuid?: string;
	readonly vmmServerId?: string;
}
export interface VirtualNetworkTags {
	readonly [key: string]: string;
}
export interface VMMServerProperties {
	readonly connectionStatus?: string;
	readonly credentials?: VMMServerPropertiesCredentials;
	readonly errorMessage?: string;
	readonly fqdn: string;
	readonly port?: number;
	readonly provisioningState?: string;
	readonly uuid?: string;
	readonly version?: string;
}
export interface VMMServerPropertiesCredentials {
	readonly password?: string;
	readonly username?: string;
}
export interface VMMServerTags {
	readonly [key: string]: string;
}
export default {
	availabilitySets: availabilitySets,
	clouds: clouds,
	virtualMachines: virtualMachines,
	virtualMachineTemplates: virtualMachineTemplates,
	virtualNetworks: virtualNetworks,
	vmmServers: vmmServers,
	"vmmServers/inventoryItems": vmmServers_inventoryItems,
};
