import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class diskPools extends ArmResource<diskPoolsComponentInputs> implements diskPoolsComponentOutputs {
	constructor(entity: ADKEntity, options: diskPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.StoragePool/diskPools", "2021-04-01-preview", options);
	}
	public readonly apiVersion: "2021-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.StoragePool/diskPools";
}
export interface diskPoolsComponentOutputs {
	readonly apiVersion: "2021-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.StoragePool/diskPools";
}
export interface diskPoolsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: DiskPoolCreatePropertiesOrDiskPoolProperties;
	readonly sku: Sku;
	readonly systemData?: SystemMetadata | undefined;
	readonly tags?: DiskPoolCreateTags | undefined;
}
export class diskPools_iscsiTargets
	extends ArmResource<diskPools_iscsiTargetsComponentInputs>
	implements diskPools_iscsiTargetsComponentOutputs
{
	constructor(entity: ADKEntity, options: diskPools_iscsiTargetsComponentInputs) {
		super(entity, options.name, "Microsoft.StoragePool/diskPools/iscsiTargets", "2021-04-01-preview", options);
	}
	public readonly apiVersion: "2021-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.StoragePool/diskPools/iscsiTargets";
}
export interface diskPools_iscsiTargetsComponentOutputs {
	readonly apiVersion: "2021-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.StoragePool/diskPools/iscsiTargets";
}
export interface diskPools_iscsiTargetsComponentInputs {
	readonly name: string;
	readonly properties: IscsiTargetCreatePropertiesOrIscsiTargetProperties;
	readonly systemData?: SystemMetadata | undefined;
}
export interface Acl {
	readonly initiatorIqn: string;
	readonly mappedLuns: string[];
}
export interface Disk {
	readonly id: string;
}
export interface DiskPoolCreatePropertiesOrDiskPoolProperties {
	readonly additionalCapabilities?: string[] | undefined;
	readonly availabilityZones?: string[] | undefined;
	readonly disks?: Disk[] | undefined;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "Invalid" | "Pending" | "Succeeded" | "Updating")
		| undefined;
	readonly status?: ("Healthy" | "Invalid" | "Running") | undefined;
	readonly subnetId: string;
}
export interface DiskPoolCreateTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface IscsiLun {
	readonly lun?: number | undefined;
	readonly managedDiskAzureResourceId: string;
	readonly name: string;
}
export interface IscsiTargetCreatePropertiesOrIscsiTargetProperties {
	readonly aclMode: "Dynamic" | "Static";
	readonly endpoints?: string[] | undefined;
	readonly luns?: IscsiLun[] | undefined;
	readonly port?: number | undefined;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "Invalid" | "Pending" | "Succeeded" | "Updating")
		| undefined;
	readonly staticAcls?: Acl[] | undefined;
	readonly status?: ("Healthy" | "Invalid" | "Running") | undefined;
	readonly targetIqn?: string | undefined;
}
export interface Sku {
	readonly name: string;
	readonly tier?: string | undefined;
}
export interface SystemMetadata {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export default {
	diskPools: diskPools,
	"diskPools/iscsiTargets": diskPools_iscsiTargets,
};
