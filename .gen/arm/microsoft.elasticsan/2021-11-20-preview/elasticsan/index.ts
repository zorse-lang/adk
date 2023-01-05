import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class elasticSans extends ArmResource<elasticSansComponentInputs> implements elasticSansComponentOutputs {
	constructor(entity: ADKEntity, options: elasticSansComponentInputs) {
		super(entity, options.name, "Microsoft.ElasticSan/elasticSans", "2021-11-20-preview", options);
	}
	public readonly apiVersion: "2021-11-20-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ElasticSan/elasticSans";
}
export interface elasticSansComponentOutputs {
	readonly apiVersion: "2021-11-20-preview";
	readonly id: string;
	readonly type: "Microsoft.ElasticSan/elasticSans";
}
export interface elasticSansComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties: ElasticSanProperties;
	readonly systemData?: SystemData;
	readonly tags?: ResourceTags;
}
export class elasticSans_volumegroups
	extends ArmResource<elasticSans_volumegroupsComponentInputs>
	implements elasticSans_volumegroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: elasticSans_volumegroupsComponentInputs) {
		super(entity, options.name, "Microsoft.ElasticSan/elasticSans/volumegroups", "2021-11-20-preview", options);
	}
	public readonly apiVersion: "2021-11-20-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ElasticSan/elasticSans/volumegroups";
}
export interface elasticSans_volumegroupsComponentOutputs {
	readonly apiVersion: "2021-11-20-preview";
	readonly id: string;
	readonly type: "Microsoft.ElasticSan/elasticSans/volumegroups";
}
export interface elasticSans_volumegroupsComponentInputs {
	readonly name: string;
	readonly properties?: VolumeGroupProperties;
	readonly systemData?: SystemData;
	readonly tags?: ResourceTags;
}
export class elasticSans_volumegroups_volumes
	extends ArmResource<elasticSans_volumegroups_volumesComponentInputs>
	implements elasticSans_volumegroups_volumesComponentOutputs
{
	constructor(entity: ADKEntity, options: elasticSans_volumegroups_volumesComponentInputs) {
		super(entity, options.name, "Microsoft.ElasticSan/elasticSans/volumegroups/volumes", "2021-11-20-preview", options);
	}
	public readonly apiVersion: "2021-11-20-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ElasticSan/elasticSans/volumegroups/volumes";
}
export interface elasticSans_volumegroups_volumesComponentOutputs {
	readonly apiVersion: "2021-11-20-preview";
	readonly id: string;
	readonly type: "Microsoft.ElasticSan/elasticSans/volumegroups/volumes";
}
export interface elasticSans_volumegroups_volumesComponentInputs {
	readonly name: string;
	readonly properties?: VolumeProperties;
	readonly systemData?: SystemData;
	readonly tags?: ResourceTags;
}
export interface ElasticSanProperties {
	readonly availabilityZones?: string[];
	readonly baseSizeTiB: number;
	readonly extendedCapacitySizeTiB: number;
	readonly provisioningState?:
		| "Canceled"
		| "Creating"
		| "Deleting"
		| "Failed"
		| "Invalid"
		| "Pending"
		| "Succeeded"
		| "Updating";
	readonly sku: Sku;
	readonly totalIops?: number;
	readonly totalMBps?: number;
	readonly totalSizeTiB?: number;
	readonly totalVolumeSizeGiB?: number;
	readonly volumeGroupCount?: number;
}
export interface IscsiTargetInfo {
	readonly provisioningState?:
		| "Canceled"
		| "Creating"
		| "Deleting"
		| "Failed"
		| "Invalid"
		| "Pending"
		| "Succeeded"
		| "Updating";
	readonly status?:
		| "Healthy"
		| "Invalid"
		| "Running"
		| "Stopped (deallocated)"
		| "Stopped"
		| "Unhealthy"
		| "Unknown"
		| "Updating";
	readonly targetIqn?: string;
	readonly targetPortalHostname?: string;
	readonly targetPortalPort?: number;
}
export interface NetworkRuleSet {
	readonly virtualNetworkRules?: VirtualNetworkRule[];
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface Sku {
	readonly name: "Premium_LRS" | "Premium_ZRS";
	readonly tier?: "Premium";
}
export interface SourceCreationData {
	readonly createSource?: "None";
	readonly sourceUri?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface VirtualNetworkRule {
	readonly action?: "Allow";
	readonly id: string;
	readonly state?: "deprovisioning" | "failed" | "networkSourceDeleted" | "provisioning";
}
export interface VolumeGroupProperties {
	readonly encryption?: "EncryptionAtRestWithPlatformKey";
	readonly networkAcls?: NetworkRuleSet;
	readonly protocolType?: "Iscsi" | "None";
	readonly provisioningState?:
		| "Canceled"
		| "Creating"
		| "Deleting"
		| "Failed"
		| "Invalid"
		| "Pending"
		| "Succeeded"
		| "Updating";
}
export interface VolumeProperties {
	readonly creationData?: SourceCreationData;
	readonly sizeGiB?: number;
	readonly storageTarget?: IscsiTargetInfo;
	readonly volumeId?: string;
}
export default {
	elasticSans: elasticSans,
	"elasticSans/volumegroups": elasticSans_volumegroups,
	"elasticSans/volumegroups/volumes": elasticSans_volumegroups_volumes,
};
