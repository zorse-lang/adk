import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class bareMetalInstances
	extends ArmResource<bareMetalInstancesComponentInputs>
	implements bareMetalInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: bareMetalInstancesComponentInputs) {
		super(entity, options.name, "Microsoft.BareMetalInfrastructure/bareMetalInstances", "2021-08-09", options);
	}
	public readonly apiVersion: "2021-08-09";
	public readonly id: string;
	public readonly type: "Microsoft.BareMetalInfrastructure/bareMetalInstances";
}
export interface bareMetalInstancesComponentOutputs {
	readonly apiVersion: "2021-08-09";
	readonly id: string;
	readonly type: "Microsoft.BareMetalInfrastructure/bareMetalInstances";
}
export interface bareMetalInstancesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: AzureBareMetalInstanceProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export interface AzureBareMetalInstanceProperties {
	readonly azureBareMetalInstanceId?: string;
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
export interface Disk {
	readonly diskSizeGB?: number;
	readonly lun?: number;
	readonly name?: string;
}
export interface HardwareProfile {
	readonly azureBareMetalInstanceSize?:
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
export interface StorageProfile {
	readonly nfsIpAddress?: string;
	readonly osDisks?: Disk[];
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
export default {
	bareMetalInstances: bareMetalInstances,
};
