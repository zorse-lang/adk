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
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: AvailabilitySetProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: AvailabilitySetTags | undefined;
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
	readonly systemData?: SystemData | undefined;
	readonly tags?: CloudTags | undefined;
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
	readonly systemData?: SystemData | undefined;
	readonly tags?: VirtualMachineTags | undefined;
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
	readonly systemData?: SystemData | undefined;
	readonly tags?: VirtualMachineTemplateTags | undefined;
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
	readonly systemData?: SystemData | undefined;
	readonly tags?: VirtualNetworkTags | undefined;
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
	readonly systemData?: SystemData | undefined;
	readonly tags?: VMMServerTags | undefined;
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
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties: InventoryItemProperties;
	readonly systemData?: SystemData | undefined;
}
export interface AvailabilitySetListItem {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
}
export interface AvailabilitySetProperties {
	readonly availabilitySetName?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly vmmServerId?: string | undefined;
}
export interface AvailabilitySetTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Checkpoint {
	readonly checkpointID?: string | undefined;
	readonly description?: string | undefined;
	readonly name?: string | undefined;
	readonly parentCheckpointID?: string | undefined;
}
export interface CloudCapacity {
	readonly cpuCount?: number | undefined;
	readonly memoryMB?: number | undefined;
	readonly vmCount?: number | undefined;
}
export interface CloudProperties {
	readonly cloudCapacity?: CloudCapacity | undefined;
	readonly cloudName?: string | undefined;
	readonly inventoryItemId?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly storageQoSPolicies?: StorageQoSPolicy[] | undefined;
	readonly uuid?: string | undefined;
	readonly vmmServerId?: string | undefined;
}
export interface CloudTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ExtendedLocation {
	readonly name?: string | undefined;
	readonly type?: string | undefined;
}
export interface HardwareProfile {
	readonly cpuCount?: number | undefined;
	readonly dynamicMemoryEnabled?: ("false" | "true") | undefined;
	readonly dynamicMemoryMaxMB?: number | undefined;
	readonly dynamicMemoryMinMB?: number | undefined;
	readonly isHighlyAvailable?: string | undefined;
	readonly limitCpuForMigration?: ("false" | "true") | undefined;
	readonly memoryMB?: number | undefined;
}
export interface InventoryItemDetails {
	readonly inventoryItemId?: string | undefined;
	readonly inventoryItemName?: string | undefined;
}
export interface InventoryItemProperties {
	readonly inventoryItemName?: string | undefined;
	readonly managedResourceId?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly uuid?: string | undefined;
}
export interface NetworkInterfaces {
	readonly displayName?: string | undefined;
	readonly ipv4Addresses?: string[] | undefined;
	readonly ipv4AddressType?: ("Dynamic" | "Static") | undefined;
	readonly ipv6Addresses?: string[] | undefined;
	readonly ipv6AddressType?: ("Dynamic" | "Static") | undefined;
	readonly macAddress?: string | undefined;
	readonly macAddressType?: ("Dynamic" | "Static") | undefined;
	readonly name?: string | undefined;
	readonly networkName?: string | undefined;
	readonly nicId?: string | undefined;
	readonly virtualNetworkId?: string | undefined;
}
export interface NetworkProfile {
	readonly networkInterfaces?: NetworkInterfaces[] | undefined;
}
export interface OsProfile {
	readonly adminPassword?: string | undefined;
	readonly computerName?: string | undefined;
	readonly osName?: string | undefined;
	readonly osType?: ("Linux" | "Other" | "Windows") | undefined;
}
export interface StorageProfile {
	readonly disks?: VirtualDisk[] | undefined;
}
export interface StorageQoSPolicy {
	readonly bandwidthLimit?: number | undefined;
	readonly id?: string | undefined;
	readonly iopsMaximum?: number | undefined;
	readonly iopsMinimum?: number | undefined;
	readonly name?: string | undefined;
	readonly policyId?: string | undefined;
}
export interface StorageQoSPolicyDetails {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface VirtualDisk {
	readonly bus?: number | undefined;
	readonly busType?: string | undefined;
	readonly createDiffDisk?: ("false" | "true") | undefined;
	readonly diskId?: string | undefined;
	readonly diskSizeGB?: number | undefined;
	readonly displayName?: string | undefined;
	readonly lun?: number | undefined;
	readonly maxDiskSizeGB?: number | undefined;
	readonly name?: string | undefined;
	readonly storageQoSPolicy?: StorageQoSPolicyDetails | undefined;
	readonly templateDiskId?: string | undefined;
	readonly vhdFormatType?: string | undefined;
	readonly vhdType?: string | undefined;
	readonly volumeType?: string | undefined;
}
export interface VirtualMachineProperties {
	readonly availabilitySets?: AvailabilitySetListItem[] | undefined;
	readonly checkpoints?: Checkpoint[] | undefined;
	readonly checkpointType?: string | undefined;
	readonly cloudId?: string | undefined;
	readonly generation?: number | undefined;
	readonly hardwareProfile?: HardwareProfile | undefined;
	readonly inventoryItemId?: string | undefined;
	readonly networkProfile?: NetworkProfile | undefined;
	readonly osProfile?: OsProfile | undefined;
	readonly powerState?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly storageProfile?: StorageProfile | undefined;
	readonly templateId?: string | undefined;
	readonly uuid?: string | undefined;
	readonly vmmServerId?: string | undefined;
	readonly vmName?: string | undefined;
}
export interface VirtualMachineTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface VirtualMachineTemplateProperties {
	readonly computerName?: string | undefined;
	readonly cpuCount?: number | undefined;
	readonly disks?: VirtualDisk[] | undefined;
	readonly dynamicMemoryEnabled?: ("false" | "true") | undefined;
	readonly dynamicMemoryMaxMB?: number | undefined;
	readonly dynamicMemoryMinMB?: number | undefined;
	readonly generation?: number | undefined;
	readonly inventoryItemId?: string | undefined;
	readonly isCustomizable?: ("false" | "true") | undefined;
	readonly isHighlyAvailable?: string | undefined;
	readonly limitCpuForMigration?: ("false" | "true") | undefined;
	readonly memoryMB?: number | undefined;
	readonly networkInterfaces?: NetworkInterfaces[] | undefined;
	readonly osName?: string | undefined;
	readonly osType?: ("Linux" | "Other" | "Windows") | undefined;
	readonly provisioningState?: string | undefined;
	readonly uuid?: string | undefined;
	readonly vmmServerId?: string | undefined;
}
export interface VirtualMachineTemplateTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface VirtualNetworkProperties {
	readonly inventoryItemId?: string | undefined;
	readonly networkName?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly uuid?: string | undefined;
	readonly vmmServerId?: string | undefined;
}
export interface VirtualNetworkTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface VMMServerProperties {
	readonly connectionStatus?: string | undefined;
	readonly credentials?: VMMServerPropertiesCredentials | undefined;
	readonly errorMessage?: string | undefined;
	readonly fqdn: string;
	readonly port?: number | undefined;
	readonly provisioningState?: string | undefined;
	readonly uuid?: string | undefined;
	readonly version?: string | undefined;
}
export interface VMMServerPropertiesCredentials {
	readonly password?: string | undefined;
	readonly username?: string | undefined;
}
export interface VMMServerTags {
	readonly "[ key: string ]"?: string | undefined;
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
