import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class netAppAccounts extends ArmResource<netAppAccountsComponentInputs> implements netAppAccountsComponentOutputs {
	constructor(entity: ADKEntity, options: netAppAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.NetApp/netAppAccounts", "2017-08-15", options);
	}
	public readonly apiVersion: "2017-08-15";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts";
}
export interface netAppAccountsComponentOutputs {
	readonly apiVersion: "2017-08-15";
	readonly id: string;
	readonly type: "Microsoft.NetApp/netAppAccounts";
}
export interface netAppAccountsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: AccountProperties;
	readonly tags?: any;
}
export class netAppAccounts_capacityPools
	extends ArmResource<netAppAccounts_capacityPoolsComponentInputs>
	implements netAppAccounts_capacityPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: netAppAccounts_capacityPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.NetApp/netAppAccounts/capacityPools", "2017-08-15", options);
	}
	public readonly apiVersion: "2017-08-15";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools";
}
export interface netAppAccounts_capacityPoolsComponentOutputs {
	readonly apiVersion: "2017-08-15";
	readonly id: string;
	readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools";
}
export interface netAppAccounts_capacityPoolsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: PoolProperties;
	readonly tags?: any;
}
export class netAppAccounts_capacityPools_volumes
	extends ArmResource<netAppAccounts_capacityPools_volumesComponentInputs>
	implements netAppAccounts_capacityPools_volumesComponentOutputs
{
	constructor(entity: ADKEntity, options: netAppAccounts_capacityPools_volumesComponentInputs) {
		super(entity, options.name, "Microsoft.NetApp/netAppAccounts/capacityPools/volumes", "2017-08-15", options);
	}
	public readonly apiVersion: "2017-08-15";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools/volumes";
}
export interface netAppAccounts_capacityPools_volumesComponentOutputs {
	readonly apiVersion: "2017-08-15";
	readonly id: string;
	readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools/volumes";
}
export interface netAppAccounts_capacityPools_volumesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: VolumeProperties;
	readonly tags?: any;
}
export class netAppAccounts_capacityPools_volumes_snapshots
	extends ArmResource<netAppAccounts_capacityPools_volumes_snapshotsComponentInputs>
	implements netAppAccounts_capacityPools_volumes_snapshotsComponentOutputs
{
	constructor(entity: ADKEntity, options: netAppAccounts_capacityPools_volumes_snapshotsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots",
			"2017-08-15",
			options,
		);
	}
	public readonly apiVersion: "2017-08-15";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots";
}
export interface netAppAccounts_capacityPools_volumes_snapshotsComponentOutputs {
	readonly apiVersion: "2017-08-15";
	readonly id: string;
	readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots";
}
export interface netAppAccounts_capacityPools_volumes_snapshotsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: SnapshotProperties;
	readonly tags?: any;
}
export interface AccountProperties {
	readonly activeDirectories?: ActiveDirectory[];
	readonly provisioningState?: string;
}
export interface ActiveDirectory {
	readonly activeDirectoryId?: string;
	readonly dNS?: string;
	readonly domain?: string;
	readonly organizationalUnit?: string;
	readonly password?: string;
	readonly sMBServerName?: string;
	readonly status?: string;
	readonly username?: string;
}
export interface ExportPolicyRule {
	readonly allowedClients?: string;
	readonly cifs?: boolean;
	readonly nfsv3?: boolean;
	readonly nfsv4?: boolean;
	readonly ruleIndex?: number;
	readonly unixReadOnly?: boolean;
	readonly unixReadWrite?: boolean;
}
export interface PoolProperties {
	readonly poolId?: string;
	readonly provisioningState?: string;
	readonly serviceLevel?: "Premium" | "Standard" | "Ultra";
	readonly size?: number;
}
export interface SnapshotProperties {
	readonly creationDate?: string;
	readonly fileSystemId: string;
	readonly provisioningState?: string;
	readonly snapshotId?: string;
}
export interface VolumeProperties {
	readonly creationToken: string;
	readonly exportPolicy?: VolumePropertiesExportPolicy;
	readonly fileSystemId?: string;
	readonly provisioningState?: string;
	readonly serviceLevel: "Premium" | "Standard" | "Ultra";
	readonly subnetId?: string;
	readonly usageThreshold?: number;
}
export interface VolumePropertiesExportPolicy {
	readonly rules?: ExportPolicyRule[];
}
export default {
	netAppAccounts: netAppAccounts,
	"netAppAccounts/capacityPools": netAppAccounts_capacityPools,
	"netAppAccounts/capacityPools/volumes": netAppAccounts_capacityPools_volumes,
	"netAppAccounts/capacityPools/volumes/snapshots": netAppAccounts_capacityPools_volumes_snapshots,
};
