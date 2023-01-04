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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: AzureBareMetalInstanceProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface AzureBareMetalInstanceProperties {
	readonly azureBareMetalInstanceId?: string | undefined;
	readonly hardwareProfile?: HardwareProfile | undefined;
	readonly hwRevision?: string | undefined;
	readonly networkProfile?: NetworkProfile | undefined;
	readonly osProfile?: OSProfile | undefined;
	readonly partnerNodeId?: string | undefined;
	readonly powerState?: ("restarting" | "started" | "starting" | "stopped" | "stopping" | "unknown") | undefined;
	readonly provisioningState?:
		| ("Accepted" | "Creating" | "Deleting" | "Failed" | "Migrating" | "Succeeded" | "Updating")
		| undefined;
	readonly proximityPlacementGroup?: string | undefined;
	readonly storageProfile?: StorageProfile | undefined;
}
export interface Disk {
	readonly diskSizeGB?: number | undefined;
	readonly lun?: number | undefined;
	readonly name?: string | undefined;
}
export interface HardwareProfile {
	readonly azureBareMetalInstanceSize?:
		| (
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
				| "S960m"
		  )
		| undefined;
	readonly hardwareType?: ("Cisco_UCS" | "HPE") | undefined;
}
export interface IpAddress {
	readonly ipAddress?: string | undefined;
}
export interface NetworkProfile {
	readonly circuitId?: string | undefined;
	readonly networkInterfaces?: IpAddress[] | undefined;
}
export interface OSProfile {
	readonly computerName?: string | undefined;
	readonly osType?: string | undefined;
	readonly sshPublicKey?: string | undefined;
	readonly version?: string | undefined;
}
export interface StorageProfile {
	readonly nfsIpAddress?: string | undefined;
	readonly osDisks?: Disk[] | undefined;
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
export default {
	bareMetalInstances: bareMetalInstances,
};