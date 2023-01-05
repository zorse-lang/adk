import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class diskPools extends ArmResource<diskPoolsComponentInputs> implements diskPoolsComponentOutputs {
	constructor(entity: ADKEntity, options: diskPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.StoragePool/diskPools", "2021-08-01", options);
	}
	public readonly apiVersion: "2021-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.StoragePool/diskPools";
}
export interface diskPoolsComponentOutputs {
	readonly apiVersion: "2021-08-01";
	readonly id: string;
	readonly type: "Microsoft.StoragePool/diskPools";
}
export interface diskPoolsComponentInputs {
	readonly location: string;
	readonly managedBy?: string;
	readonly managedByExtended?: string[];
	readonly name: string;
	readonly properties: DiskPoolCreatePropertiesOrDiskPoolProperties;
	readonly sku: Sku;
	readonly systemData?: SystemMetadata;
	readonly tags?: DiskPoolCreateTags;
}
export class diskPools_iscsiTargets
	extends ArmResource<diskPools_iscsiTargetsComponentInputs>
	implements diskPools_iscsiTargetsComponentOutputs
{
	constructor(entity: ADKEntity, options: diskPools_iscsiTargetsComponentInputs) {
		super(entity, options.name, "Microsoft.StoragePool/diskPools/iscsiTargets", "2021-08-01", options);
	}
	public readonly apiVersion: "2021-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.StoragePool/diskPools/iscsiTargets";
}
export interface diskPools_iscsiTargetsComponentOutputs {
	readonly apiVersion: "2021-08-01";
	readonly id: string;
	readonly type: "Microsoft.StoragePool/diskPools/iscsiTargets";
}
export interface diskPools_iscsiTargetsComponentInputs {
	readonly managedBy?: string;
	readonly managedByExtended?: string[];
	readonly name: string;
	readonly properties: IscsiTargetCreatePropertiesOrIscsiTargetProperties;
	readonly systemData?: SystemMetadata;
}
export interface Acl {
	readonly initiatorIqn: string;
	readonly mappedLuns: string[];
}
export interface Disk {
	readonly id: string;
}
export interface DiskPoolCreatePropertiesOrDiskPoolProperties {
	readonly additionalCapabilities?: string[];
	readonly availabilityZones?: string[];
	readonly disks?: Disk[];
	readonly provisioningState?:
		| "Canceled"
		| "Creating"
		| "Deleting"
		| "Failed"
		| "Invalid"
		| "Pending"
		| "Succeeded"
		| "Updating";
	readonly status?: "Healthy" | "Invalid" | "Running";
	readonly subnetId: string;
}
export interface DiskPoolCreateTags {
	readonly [key: string]: string;
}
export interface IscsiLun {
	readonly lun?: number;
	readonly managedDiskAzureResourceId: string;
	readonly name: string;
}
export interface IscsiTargetCreatePropertiesOrIscsiTargetProperties {
	readonly aclMode: "Dynamic" | "Static";
	readonly endpoints?: string[];
	readonly luns?: IscsiLun[];
	readonly port?: number;
	readonly provisioningState?:
		| "Canceled"
		| "Creating"
		| "Deleting"
		| "Failed"
		| "Invalid"
		| "Pending"
		| "Succeeded"
		| "Updating";
	readonly sessions?: string[];
	readonly staticAcls?: Acl[];
	readonly status?: "Healthy" | "Invalid" | "Running";
	readonly targetIqn?: string;
}
export interface Sku {
	readonly name: string;
	readonly tier?: string;
}
export interface SystemMetadata {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export default {
	diskPools: diskPools,
	"diskPools/iscsiTargets": diskPools_iscsiTargets,
};
