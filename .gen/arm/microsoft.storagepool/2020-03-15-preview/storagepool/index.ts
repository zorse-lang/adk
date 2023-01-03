import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class diskPools extends ArmResource<diskPoolsComponentInputs> implements diskPoolsComponentOutputs {
	constructor(entity: ADKEntity, options: diskPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.StoragePool/diskPools", "2020-03-15-preview", options);
	}
	public readonly apiVersion: "2020-03-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.StoragePool/diskPools";
}
export interface diskPoolsComponentOutputs {
	readonly apiVersion: "2020-03-15-preview";
	readonly id: string;
	readonly type: "Microsoft.StoragePool/diskPools";
}
export interface diskPoolsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: DiskPoolCreatePropertiesOrDiskPoolProperties;
	readonly systemData?: SystemMetadata | undefined;
	readonly tags?: DiskPoolCreateTags | undefined;
}
export class diskPools_iscsiTargets
	extends ArmResource<diskPools_iscsiTargetsComponentInputs>
	implements diskPools_iscsiTargetsComponentOutputs
{
	constructor(entity: ADKEntity, options: diskPools_iscsiTargetsComponentInputs) {
		super(entity, options.name, "Microsoft.StoragePool/diskPools/iscsiTargets", "2020-03-15-preview", options);
	}
	public readonly apiVersion: "2020-03-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.StoragePool/diskPools/iscsiTargets";
}
export interface diskPools_iscsiTargetsComponentOutputs {
	readonly apiVersion: "2020-03-15-preview";
	readonly id: string;
	readonly type: "Microsoft.StoragePool/diskPools/iscsiTargets";
}
export interface diskPools_iscsiTargetsComponentInputs {
	readonly name: string;
	readonly properties: IscsiTargetCreatePropertiesOrIscsiTargetProperties;
}
export interface Acl {
	readonly credentials?: IscsiTargetCredentials | undefined;
	readonly initiatorIqn: string;
	readonly mappedLuns: string[];
}
export interface Attributes {
	readonly authentication: boolean;
	readonly prodModeWriteProtect: boolean;
}
export interface Disk {
	readonly id: string;
}
export interface DiskPoolCreatePropertiesOrDiskPoolProperties {
	readonly additionalCapabilities?: string[] | undefined;
	readonly availabilityZones: string[];
	readonly disks?: Disk[] | undefined;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "Invalid" | "Pending" | "Succeeded" | "Updating")
		| undefined;
	readonly status?: ("Healthy" | "Invalid" | "Running") | undefined;
	readonly subnetId: string;
	readonly tier: "Basic" | "Premium" | "Standard";
}
export interface DiskPoolCreateTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface IscsiLun {
	readonly managedDiskAzureResourceId: string;
	readonly name: string;
}
export interface IscsiTargetCreatePropertiesOrIscsiTargetProperties {
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "Invalid" | "Pending" | "Succeeded" | "Updating")
		| undefined;
	readonly status?: ("Healthy" | "Invalid" | "Running") | undefined;
	readonly targetIqn?: string | undefined;
	readonly tpgs: TargetPortalGroupCreateOrTargetPortalGroup[];
}
export interface IscsiTargetCredentials {
	readonly password: string;
	readonly username: string;
}
export interface SystemMetadata {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: string | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: string | undefined;
}
export interface TargetPortalGroupCreateOrTargetPortalGroup {
	readonly acls: Acl[];
	readonly attributes: Attributes;
	readonly endpoints?: string[] | undefined;
	readonly luns: IscsiLun[];
	readonly port?: number | undefined;
	readonly tag?: number | undefined;
}
export default {
	diskPools: diskPools,
	"diskPools/iscsiTargets": diskPools_iscsiTargets,
};
