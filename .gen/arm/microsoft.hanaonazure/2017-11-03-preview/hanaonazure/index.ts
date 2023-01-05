import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class hanaInstances extends ArmResource<hanaInstancesComponentInputs> implements hanaInstancesComponentOutputs {
	constructor(entity: ADKEntity, options: hanaInstancesComponentInputs) {
		super(entity, options.name, "Microsoft.HanaOnAzure/hanaInstances", "2017-11-03-preview", options);
	}
	public readonly apiVersion: "2017-11-03-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HanaOnAzure/hanaInstances";
}
export interface hanaInstancesComponentOutputs {
	readonly apiVersion: "2017-11-03-preview";
	readonly id: string;
	readonly type: "Microsoft.HanaOnAzure/hanaInstances";
}
export interface hanaInstancesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: HanaInstanceProperties;
	readonly tags?: ResourceTags;
}
export interface Disk {
	readonly diskSizeGB?: number;
	readonly lun?: number;
	readonly name?: string;
}
export interface HanaInstanceProperties {
	readonly hanaInstanceId?: string;
	readonly hardwareProfile?: HardwareProfile;
	readonly hwRevision?: string;
	readonly networkProfile?: NetworkProfile;
	readonly osProfile?: OSProfile;
	readonly partnerNodeId?: string;
	readonly powerState?: "restarting" | "started" | "starting" | "stopped" | "stopping" | "unknown";
	readonly provisioningState?: "Accepted" | "Creating" | "Deleting" | "Failed" | "Migrating" | "Succeeded" | "Updating";
	readonly proximityPlacementGroup?: string;
	readonly storageProfile?: StorageProfile;
}
export interface HardwareProfile {
	readonly hanaInstanceSize?:
		| "S112"
		| "S144"
		| "S144m"
		| "S192"
		| "S192m"
		| "S192xm"
		| "S224"
		| "S224m"
		| "S224om"
		| "S224oo"
		| "S224oom"
		| "S224ooo"
		| "S384"
		| "S384m"
		| "S384xm"
		| "S384xxm"
		| "S448"
		| "S448m"
		| "S448om"
		| "S448oo"
		| "S448oom"
		| "S448ooo"
		| "S576m"
		| "S576xm"
		| "S672"
		| "S672m"
		| "S672om"
		| "S672oo"
		| "S672oom"
		| "S672ooo"
		| "S72"
		| "S72m"
		| "S768"
		| "S768m"
		| "S768xm"
		| "S896"
		| "S896m"
		| "S896om"
		| "S896oo"
		| "S896oom"
		| "S896ooo"
		| "S96"
		| "S960m";
	readonly hardwareType?: "Cisco_UCS" | "HPE";
}
export interface IpAddress {
	readonly ipAddress?: string;
}
export interface NetworkProfile {
	readonly circuitId?: string;
	readonly networkInterfaces?: IpAddress[];
}
export interface OSProfile {
	readonly computerName?: string;
	readonly osType?: string;
	readonly sshPublicKey?: string;
	readonly version?: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface SAPSystemID {
	readonly gid?: string;
	readonly memoryAllocation?: string;
	readonly sid?: string;
	readonly uid?: string;
	readonly username?: string;
}
export interface StorageProfile {
	readonly hanaSids?: SAPSystemID[];
	readonly nfsIpAddress?: string;
	readonly osDisks?: Disk[];
}
export default {
	hanaInstances: hanaInstances,
};
