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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: DedicatedCloudNodeProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: Tags | undefined;
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
	readonly properties?: DedicatedCloudServiceProperties | undefined;
	readonly tags?: Tags | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: VirtualMachineProperties | undefined;
	readonly tags?: Tags | undefined;
}
export interface DedicatedCloudNodeProperties {
	readonly availabilityZoneId: string;
	readonly availabilityZoneName?: string | undefined;
	readonly cloudRackName?: string | undefined;
	readonly created?: string | undefined;
	readonly nodesCount: number;
	readonly placementGroupId: string;
	readonly placementGroupName?: string | undefined;
	readonly privateCloudId?: string | undefined;
	readonly privateCloudName?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly purchaseId: string;
	readonly skuDescription?: SkuDescription | undefined;
	readonly status?: "unused" | undefined;
	readonly vmwareClusterName?: string | undefined;
}
export interface DedicatedCloudServiceProperties {
	readonly gatewaySubnet: string;
	readonly isAccountOnboarded?: ("notOnBoarded" | "onBoarded" | "onBoarding") | undefined;
	readonly nodes?: number | undefined;
	readonly serviceURL?: string | undefined;
}
export interface GuestOSCustomization {
	readonly dnsServers?: string[] | undefined;
	readonly hostName?: string | undefined;
	readonly password?: string | undefined;
	readonly policyId?: string | undefined;
	readonly username?: string | undefined;
}
export interface GuestOsnicCustomization {
	readonly allocation?: ("dynamic" | "static") | undefined;
	readonly dnsServers?: string[] | undefined;
	readonly gateway?: string[] | undefined;
	readonly ipAddress?: string | undefined;
	readonly mask?: string | undefined;
	readonly primaryWinsServer?: string | undefined;
	readonly secondaryWinsServer?: string | undefined;
}
export interface ResourcePool {
	readonly id: string;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly privateCloudId?: string | undefined;
	readonly properties?: ResourcePoolProperties | undefined;
	readonly type?: string | undefined;
}
export interface ResourcePoolProperties {
	readonly fullName?: string | undefined;
}
export interface Sku {
	readonly capacity?: string | undefined;
	readonly description?: string | undefined;
	readonly family?: string | undefined;
	readonly name: string;
	readonly tier?: string | undefined;
}
export interface SkuDescription {
	readonly id: string;
	readonly name: string;
}
export interface Tags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface VirtualDisk {
	readonly controllerId: string;
	readonly independenceMode: "independent_nonpersistent" | "independent_persistent";
	readonly totalSize: number;
	readonly virtualDiskId?: string | undefined;
	readonly virtualDiskName?: string | undefined;
}
export interface VirtualDiskController {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly subType?: string | undefined;
	readonly type?: string | undefined;
}
export interface VirtualMachineProperties {
	readonly amountOfRam: number;
	readonly controllers?: VirtualDiskController[] | undefined;
	readonly customization?: GuestOSCustomization | undefined;
	readonly disks?: VirtualDisk[] | undefined;
	readonly dnsname?: string | undefined;
	readonly exposeToGuestVM?: boolean | undefined;
	readonly folder?: string | undefined;
	readonly guestOS?: string | undefined;
	readonly guestOSType?: ("linux" | "other") | undefined;
	readonly nics?: VirtualNic[] | undefined;
	readonly numberOfCores: number;
	readonly password?: string | undefined;
	readonly privateCloudId: string;
	readonly provisioningState?: string | undefined;
	readonly publicIP?: string | undefined;
	readonly resourcePool?: ResourcePool | undefined;
	readonly status?: ("deallocating" | "deleting" | "poweredoff" | "running" | "suspended") | undefined;
	readonly templateId?: string | undefined;
	readonly username?: string | undefined;
	readonly vmId?: string | undefined;
	readonly vmwaretools?: string | undefined;
	readonly vSphereNetworks?: string[] | undefined;
}
export interface VirtualNetwork {
	readonly assignable?: boolean | undefined;
	readonly id: string;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: VirtualNetworkProperties | undefined;
	readonly type?: string | undefined;
}
export interface VirtualNetworkProperties {
	readonly privateCloudId?: string | undefined;
}
export interface VirtualNic {
	readonly customization?: GuestOsnicCustomization | undefined;
	readonly ipAddresses?: string[] | undefined;
	readonly macAddress?: string | undefined;
	readonly network: VirtualNetwork;
	readonly nicType: "E1000" | "E1000E" | "PCNET32" | "VMXNET" | "VMXNET2";
	readonly powerOnBoot?: boolean | undefined;
	readonly virtualNicId?: string | undefined;
	readonly virtualNicName?: string | undefined;
}
export default {
	dedicatedCloudNodes: dedicatedCloudNodes,
	dedicatedCloudServices: dedicatedCloudServices,
	virtualMachines: virtualMachines,
};
