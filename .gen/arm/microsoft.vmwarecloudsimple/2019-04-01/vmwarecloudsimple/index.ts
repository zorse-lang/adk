import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class dedicatedCloudNodes
	extends ArmResource<dedicatedCloudNodesComponentInputs>
	implements dedicatedCloudNodesComponentOutputs
{
	constructor(entity: ADKEntity, options: dedicatedCloudNodesComponentInputs) {
		super(entity, options.name, "Microsoft.VMwareCloudSimple/dedicatedCloudNodes", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.VMwareCloudSimple/dedicatedCloudNodes";
}
export interface dedicatedCloudNodesComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.VMwareCloudSimple/dedicatedCloudNodes";
}
export interface dedicatedCloudNodesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: DedicatedCloudNodeProperties;
	readonly sku?: Sku;
	readonly tags?: Tags;
}
export class dedicatedCloudServices
	extends ArmResource<dedicatedCloudServicesComponentInputs>
	implements dedicatedCloudServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: dedicatedCloudServicesComponentInputs) {
		super(entity, options.name, "Microsoft.VMwareCloudSimple/dedicatedCloudServices", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.VMwareCloudSimple/dedicatedCloudServices";
}
export interface dedicatedCloudServicesComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.VMwareCloudSimple/dedicatedCloudServices";
}
export interface dedicatedCloudServicesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: DedicatedCloudServiceProperties;
	readonly tags?: Tags;
}
export class virtualMachines
	extends ArmResource<virtualMachinesComponentInputs>
	implements virtualMachinesComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualMachinesComponentInputs) {
		super(entity, options.name, "Microsoft.VMwareCloudSimple/virtualMachines", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.VMwareCloudSimple/virtualMachines";
}
export interface virtualMachinesComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.VMwareCloudSimple/virtualMachines";
}
export interface virtualMachinesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: VirtualMachineProperties;
	readonly tags?: Tags;
}
export interface DedicatedCloudNodeProperties {
	readonly availabilityZoneId: string;
	readonly availabilityZoneName?: string;
	readonly cloudRackName?: string;
	readonly created?: string;
	readonly nodesCount: number;
	readonly placementGroupId: string;
	readonly placementGroupName?: string;
	readonly privateCloudId?: string;
	readonly privateCloudName?: string;
	readonly provisioningState?: string;
	readonly purchaseId: string;
	readonly skuDescription?: SkuDescription;
	readonly status?: "unused";
	readonly vmwareClusterName?: string;
}
export interface DedicatedCloudServiceProperties {
	readonly gatewaySubnet: string;
	readonly isAccountOnboarded?: "notOnBoarded" | "onBoarded" | "onBoarding";
	readonly nodes?: number;
	readonly serviceURL?: string;
}
export interface GuestOSCustomization {
	readonly dnsServers?: string[];
	readonly hostName?: string;
	readonly password?: string;
	readonly policyId?: string;
	readonly username?: string;
}
export interface GuestOsnicCustomization {
	readonly allocation?: "dynamic" | "static";
	readonly dnsServers?: string[];
	readonly gateway?: string[];
	readonly ipAddress?: string;
	readonly mask?: string;
	readonly primaryWinsServer?: string;
	readonly secondaryWinsServer?: string;
}
export interface ResourcePool {
	readonly id: string;
	readonly location?: string;
	readonly name?: string;
	readonly privateCloudId?: string;
	readonly properties?: ResourcePoolProperties;
	readonly type?: string;
}
export interface ResourcePoolProperties {
	readonly fullName?: string;
}
export interface Sku {
	readonly capacity?: string;
	readonly description?: string;
	readonly family?: string;
	readonly name: string;
	readonly tier?: string;
}
export interface SkuDescription {
	readonly id: string;
	readonly name: string;
}
export interface Tags {
	readonly [key: string]: string;
}
export interface VirtualDisk {
	readonly controllerId: string;
	readonly independenceMode: "independent_nonpersistent" | "independent_persistent";
	readonly totalSize: number;
	readonly virtualDiskId?: string;
	readonly virtualDiskName?: string;
}
export interface VirtualDiskController {
	readonly id?: string;
	readonly name?: string;
	readonly subType?: string;
	readonly type?: string;
}
export interface VirtualMachineProperties {
	readonly amountOfRam: number;
	readonly controllers?: VirtualDiskController[];
	readonly customization?: GuestOSCustomization;
	readonly disks?: VirtualDisk[];
	readonly dnsname?: string;
	readonly exposeToGuestVM?: boolean;
	readonly folder?: string;
	readonly guestOS?: string;
	readonly guestOSType?: "linux" | "other";
	readonly nics?: VirtualNic[];
	readonly numberOfCores: number;
	readonly password?: string;
	readonly privateCloudId: string;
	readonly provisioningState?: string;
	readonly publicIP?: string;
	readonly resourcePool?: ResourcePool;
	readonly status?: "deallocating" | "deleting" | "poweredoff" | "running" | "suspended";
	readonly templateId?: string;
	readonly username?: string;
	readonly vmId?: string;
	readonly vmwaretools?: string;
	readonly vSphereNetworks?: string[];
}
export interface VirtualNetwork {
	readonly assignable?: boolean;
	readonly id: string;
	readonly location?: string;
	readonly name?: string;
	readonly properties?: VirtualNetworkProperties;
	readonly type?: string;
}
export interface VirtualNetworkProperties {
	readonly privateCloudId?: string;
}
export interface VirtualNic {
	readonly customization?: GuestOsnicCustomization;
	readonly ipAddresses?: string[];
	readonly macAddress?: string;
	readonly network: VirtualNetwork;
	readonly nicType: "E1000" | "E1000E" | "PCNET32" | "VMXNET" | "VMXNET2";
	readonly powerOnBoot?: boolean;
	readonly virtualNicId?: string;
	readonly virtualNicName?: string;
}
export default {
	dedicatedCloudNodes: dedicatedCloudNodes,
	dedicatedCloudServices: dedicatedCloudServices,
	virtualMachines: virtualMachines,
};
