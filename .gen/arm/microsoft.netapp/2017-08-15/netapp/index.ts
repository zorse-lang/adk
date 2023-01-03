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
	readonly tags?: any | undefined;
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
	readonly tags?: any | undefined;
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
	readonly tags?: any | undefined;
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
	readonly tags?: any | undefined;
}
export interface AccountProperties {
	readonly activeDirectories?: ActiveDirectory[] | undefined;
	readonly provisioningState?: string | undefined;
}
export interface ActiveDirectory {
	readonly activeDirectoryId?: string | undefined;
	readonly dNS?: string | undefined;
	readonly domain?: string | undefined;
	readonly organizationalUnit?: string | undefined;
	readonly password?: string | undefined;
	readonly sMBServerName?: string | undefined;
	readonly status?: string | undefined;
	readonly username?: string | undefined;
}
export interface ExportPolicyRule {
	readonly allowedClients?: string | undefined;
	readonly cifs?: boolean | undefined;
	readonly nfsv3?: boolean | undefined;
	readonly nfsv4?: boolean | undefined;
	readonly ruleIndex?: number | undefined;
	readonly unixReadOnly?: boolean | undefined;
	readonly unixReadWrite?: boolean | undefined;
}
export interface PoolProperties {
	readonly poolId?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly serviceLevel?: ("Premium" | "Standard" | "Ultra") | undefined;
	readonly size?: number | undefined;
}
export interface SnapshotProperties {
	readonly creationDate?: string | undefined;
	readonly fileSystemId: string;
	readonly provisioningState?: string | undefined;
	readonly snapshotId?: string | undefined;
}
export interface VolumeProperties {
	readonly creationToken: string;
	readonly exportPolicy?: VolumePropertiesExportPolicy | undefined;
	readonly fileSystemId?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly serviceLevel: "Premium" | "Standard" | "Ultra";
	readonly subnetId?: string | undefined;
	readonly usageThreshold?: number | undefined;
}
export interface VolumePropertiesExportPolicy {
	readonly rules?: ExportPolicyRule[] | undefined;
}
export default {
	netAppAccounts: netAppAccounts,
	"netAppAccounts/capacityPools": netAppAccounts_capacityPools,
	"netAppAccounts/capacityPools/volumes": netAppAccounts_capacityPools_volumes,
	"netAppAccounts/capacityPools/volumes/snapshots": netAppAccounts_capacityPools_volumes_snapshots,
};
