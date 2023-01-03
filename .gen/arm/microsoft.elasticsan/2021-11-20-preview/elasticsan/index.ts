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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: ElasticSanProperties;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ResourceTags | undefined;
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
	readonly properties?: VolumeGroupProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ResourceTags | undefined;
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
	readonly properties?: VolumeProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface ElasticSanProperties {
	readonly availabilityZones?: string[] | undefined;
	readonly baseSizeTiB: number;
	readonly extendedCapacitySizeTiB: number;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "Invalid" | "Pending" | "Succeeded" | "Updating")
		| undefined;
	readonly sku: Sku;
	readonly totalIops?: number | undefined;
	readonly totalMBps?: number | undefined;
	readonly totalSizeTiB?: number | undefined;
	readonly totalVolumeSizeGiB?: number | undefined;
	readonly volumeGroupCount?: number | undefined;
}
export interface IscsiTargetInfo {
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "Invalid" | "Pending" | "Succeeded" | "Updating")
		| undefined;
	readonly status?:
		| ("Healthy" | "Invalid" | "Running" | "Stopped (deallocated)" | "Stopped" | "Unhealthy" | "Unknown" | "Updating")
		| undefined;
	readonly targetIqn?: string | undefined;
	readonly targetPortalHostname?: string | undefined;
	readonly targetPortalPort?: number | undefined;
}
export interface NetworkRuleSet {
	readonly virtualNetworkRules?: VirtualNetworkRule[] | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Sku {
	readonly name: "Premium_LRS" | "Premium_ZRS";
	readonly tier?: "Premium" | undefined;
}
export interface SourceCreationData {
	readonly createSource?: "None" | undefined;
	readonly sourceUri?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface VirtualNetworkRule {
	readonly action?: "Allow" | undefined;
	readonly id: string;
	readonly state?: ("deprovisioning" | "failed" | "networkSourceDeleted" | "provisioning") | undefined;
}
export interface VolumeGroupProperties {
	readonly encryption?: "EncryptionAtRestWithPlatformKey" | undefined;
	readonly networkAcls?: NetworkRuleSet | undefined;
	readonly protocolType?: ("Iscsi" | "None") | undefined;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "Invalid" | "Pending" | "Succeeded" | "Updating")
		| undefined;
}
export interface VolumeProperties {
	readonly creationData?: SourceCreationData | undefined;
	readonly sizeGiB?: number | undefined;
	readonly storageTarget?: IscsiTargetInfo | undefined;
	readonly volumeId?: string | undefined;
}
export default {
	elasticSans: elasticSans,
	"elasticSans/volumegroups": elasticSans_volumegroups,
	"elasticSans/volumegroups/volumes": elasticSans_volumegroups_volumes,
};
