import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class netAppAccounts extends ArmResource<netAppAccountsComponentInputs> implements netAppAccountsComponentOutputs {
	constructor(entity: ADKEntity, options: netAppAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.NetApp/netAppAccounts", "2020-11-01", options);
	}
	public readonly apiVersion: "2020-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts";
}
export interface netAppAccountsComponentOutputs {
	readonly apiVersion: "2020-11-01";
	readonly id: string;
	readonly type: "Microsoft.NetApp/netAppAccounts";
}
export interface netAppAccountsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: AccountProperties;
	readonly systemData?: SystemData;
	readonly tags?: ResourceTags;
}
export class netAppAccounts_accountBackups
	extends ArmResource<netAppAccounts_accountBackupsComponentInputs>
	implements netAppAccounts_accountBackupsComponentOutputs
{
	constructor(entity: ADKEntity, options: netAppAccounts_accountBackupsComponentInputs) {
		super(entity, options.name, "Microsoft.NetApp/netAppAccounts/accountBackups", "2020-11-01", options);
	}
	public readonly apiVersion: "2020-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts/accountBackups";
}
export interface netAppAccounts_accountBackupsComponentOutputs {
	readonly apiVersion: "2020-11-01";
	readonly id: string;
	readonly type: "Microsoft.NetApp/netAppAccounts/accountBackups";
}
export interface netAppAccounts_accountBackupsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: BackupProperties;
}
export class netAppAccounts_backupPolicies
	extends ArmResource<netAppAccounts_backupPoliciesComponentInputs>
	implements netAppAccounts_backupPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: netAppAccounts_backupPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.NetApp/netAppAccounts/backupPolicies", "2020-11-01", options);
	}
	public readonly apiVersion: "2020-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts/backupPolicies";
}
export interface netAppAccounts_backupPoliciesComponentOutputs {
	readonly apiVersion: "2020-11-01";
	readonly id: string;
	readonly type: "Microsoft.NetApp/netAppAccounts/backupPolicies";
}
export interface netAppAccounts_backupPoliciesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: BackupPolicyProperties;
	readonly tags?: ResourceTags;
}
export class netAppAccounts_capacityPools
	extends ArmResource<netAppAccounts_capacityPoolsComponentInputs>
	implements netAppAccounts_capacityPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: netAppAccounts_capacityPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.NetApp/netAppAccounts/capacityPools", "2020-11-01", options);
	}
	public readonly apiVersion: "2020-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools";
}
export interface netAppAccounts_capacityPoolsComponentOutputs {
	readonly apiVersion: "2020-11-01";
	readonly id: string;
	readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools";
}
export interface netAppAccounts_capacityPoolsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: PoolProperties;
	readonly tags?: ResourceTags;
}
export class netAppAccounts_capacityPools_volumes
	extends ArmResource<netAppAccounts_capacityPools_volumesComponentInputs>
	implements netAppAccounts_capacityPools_volumesComponentOutputs
{
	constructor(entity: ADKEntity, options: netAppAccounts_capacityPools_volumesComponentInputs) {
		super(entity, options.name, "Microsoft.NetApp/netAppAccounts/capacityPools/volumes", "2020-11-01", options);
	}
	public readonly apiVersion: "2020-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools/volumes";
}
export interface netAppAccounts_capacityPools_volumesComponentOutputs {
	readonly apiVersion: "2020-11-01";
	readonly id: string;
	readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools/volumes";
}
export interface netAppAccounts_capacityPools_volumesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: VolumeProperties;
	readonly tags?: ResourceTags;
}
export class netAppAccounts_capacityPools_volumes_backups
	extends ArmResource<netAppAccounts_capacityPools_volumes_backupsComponentInputs>
	implements netAppAccounts_capacityPools_volumes_backupsComponentOutputs
{
	constructor(entity: ADKEntity, options: netAppAccounts_capacityPools_volumes_backupsComponentInputs) {
		super(entity, options.name, "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/backups", "2020-11-01", options);
	}
	public readonly apiVersion: "2020-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/backups";
}
export interface netAppAccounts_capacityPools_volumes_backupsComponentOutputs {
	readonly apiVersion: "2020-11-01";
	readonly id: string;
	readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/backups";
}
export interface netAppAccounts_capacityPools_volumes_backupsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: BackupProperties;
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
			"2020-11-01",
			options,
		);
	}
	public readonly apiVersion: "2020-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots";
}
export interface netAppAccounts_capacityPools_volumes_snapshotsComponentOutputs {
	readonly apiVersion: "2020-11-01";
	readonly id: string;
	readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots";
}
export interface netAppAccounts_capacityPools_volumes_snapshotsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: SnapshotProperties;
}
export class netAppAccounts_snapshotPolicies
	extends ArmResource<netAppAccounts_snapshotPoliciesComponentInputs>
	implements netAppAccounts_snapshotPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: netAppAccounts_snapshotPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.NetApp/netAppAccounts/snapshotPolicies", "2020-11-01", options);
	}
	public readonly apiVersion: "2020-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts/snapshotPolicies";
}
export interface netAppAccounts_snapshotPoliciesComponentOutputs {
	readonly apiVersion: "2020-11-01";
	readonly id: string;
	readonly type: "Microsoft.NetApp/netAppAccounts/snapshotPolicies";
}
export interface netAppAccounts_snapshotPoliciesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: SnapshotPolicyProperties;
	readonly tags?: ResourceTags;
}
export interface AccountEncryption {
	readonly keySource?: "Microsoft.NetApp";
}
export interface AccountProperties {
	readonly activeDirectories?: ActiveDirectory[];
	readonly encryption?: AccountEncryption;
	readonly provisioningState?: string;
}
export interface ActiveDirectory {
	readonly activeDirectoryId?: string;
	readonly adName?: string;
	readonly aesEncryption?: boolean;
	readonly backupOperators?: string[];
	readonly dns?: string;
	readonly domain?: string;
	readonly kdcIP?: string;
	readonly ldapOverTLS?: boolean;
	readonly ldapSigning?: boolean;
	readonly organizationalUnit?: string;
	readonly password?: string;
	readonly securityOperators?: string[];
	readonly serverRootCACertificate?: string;
	readonly site?: string;
	readonly smbServerName?: string;
	readonly status?: "Created" | "Deleted" | "Error" | "InUse" | "Updating";
	readonly statusDetails?: string;
	readonly username?: string;
}
export interface BackupPolicyProperties {
	readonly dailyBackupsToKeep?: number;
	readonly enabled?: boolean;
	readonly monthlyBackupsToKeep?: number;
	readonly name?: string;
	readonly provisioningState?: string;
	readonly volumeBackups?: VolumeBackups[];
	readonly volumesAssigned?: number;
	readonly weeklyBackupsToKeep?: number;
	readonly yearlyBackupsToKeep?: number;
}
export interface BackupProperties {
	readonly backupId?: string;
	readonly backupType?: "Manual" | "Scheduled";
	readonly creationDate?: string;
	readonly failureReason?: string;
	readonly label?: string;
	readonly provisioningState?: string;
	readonly size?: number;
}
export interface DailySchedule {
	readonly hour?: number;
	readonly minute?: number;
	readonly snapshotsToKeep?: number;
	readonly usedBytes?: number;
}
export interface ExportPolicyRule {
	readonly allowedClients?: string;
	readonly cifs?: boolean;
	readonly hasRootAccess?: boolean;
	readonly kerberos5iReadOnly?: boolean;
	readonly kerberos5iReadWrite?: boolean;
	readonly kerberos5pReadOnly?: boolean;
	readonly kerberos5pReadWrite?: boolean;
	readonly kerberos5ReadOnly?: boolean;
	readonly kerberos5ReadWrite?: boolean;
	readonly nfsv3?: boolean;
	readonly nfsv41?: boolean;
	readonly ruleIndex?: number;
	readonly unixReadOnly?: boolean;
	readonly unixReadWrite?: boolean;
}
export interface HourlySchedule {
	readonly minute?: number;
	readonly snapshotsToKeep?: number;
	readonly usedBytes?: number;
}
export interface MonthlySchedule {
	readonly daysOfMonth?: string;
	readonly hour?: number;
	readonly minute?: number;
	readonly snapshotsToKeep?: number;
	readonly usedBytes?: number;
}
export interface MountTargetProperties {
	readonly fileSystemId: string;
	readonly ipAddress?: string;
	readonly mountTargetId?: string;
	readonly smbServerFqdn?: string;
}
export interface PoolProperties {
	readonly poolId?: string;
	readonly provisioningState?: string;
	readonly qosType?: "Auto" | "Manual";
	readonly serviceLevel: "Premium" | "Standard" | "Ultra";
	readonly size: number;
	readonly totalThroughputMibps?: number;
	readonly utilizedThroughputMibps?: number;
}
export interface ReplicationObject {
	readonly endpointType?: "dst" | "src";
	readonly remoteVolumeRegion?: string;
	readonly remoteVolumeResourceId: string;
	readonly replicationId?: string;
	readonly replicationSchedule: "_10minutely" | "daily" | "hourly";
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface SnapshotPolicyProperties {
	readonly dailySchedule?: DailySchedule;
	readonly enabled?: boolean;
	readonly hourlySchedule?: HourlySchedule;
	readonly monthlySchedule?: MonthlySchedule;
	readonly name?: string;
	readonly provisioningState?: string;
	readonly weeklySchedule?: WeeklySchedule;
}
export interface SnapshotProperties {
	readonly created?: string;
	readonly provisioningState?: string;
	readonly snapshotId?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface VolumeBackupProperties {
	readonly backupEnabled?: boolean;
	readonly backupPolicyId?: string;
	readonly policyEnforced?: boolean;
	readonly vaultId?: string;
}
export interface VolumeBackups {
	readonly backupsCount?: number;
	readonly policyEnabled?: boolean;
	readonly volumeName?: string;
}
export interface VolumeProperties {
	readonly backupId?: string;
	readonly baremetalTenantId?: string;
	readonly creationToken: string;
	readonly dataProtection?: VolumePropertiesDataProtection;
	readonly encryptionKeySource?: string;
	readonly exportPolicy?: VolumePropertiesExportPolicy;
	readonly fileSystemId?: string;
	readonly isRestoring?: boolean;
	readonly kerberosEnabled?: boolean;
	readonly mountTargets?: MountTargetProperties[];
	readonly protocolTypes?: string[];
	readonly provisioningState?: string;
	readonly securityStyle?: "ntfs" | "unix";
	readonly serviceLevel?: "Premium" | "Standard" | "Ultra";
	readonly smbContinuouslyAvailable?: boolean;
	readonly smbEncryption?: boolean;
	readonly snapshotDirectoryVisible?: boolean;
	readonly snapshotId?: string;
	readonly subnetId: string;
	readonly throughputMibps?: number;
	readonly usageThreshold: number;
	readonly volumeType?: string;
}
export interface VolumePropertiesDataProtection {
	readonly backup?: VolumeBackupProperties;
	readonly replication?: ReplicationObject;
	readonly snapshot?: VolumeSnapshotProperties;
}
export interface VolumePropertiesExportPolicy {
	readonly rules?: ExportPolicyRule[];
}
export interface VolumeSnapshotProperties {
	readonly snapshotPolicyId?: string;
}
export interface WeeklySchedule {
	readonly day?: string;
	readonly hour?: number;
	readonly minute?: number;
	readonly snapshotsToKeep?: number;
	readonly usedBytes?: number;
}
export default {
	netAppAccounts: netAppAccounts,
	"netAppAccounts/accountBackups": netAppAccounts_accountBackups,
	"netAppAccounts/backupPolicies": netAppAccounts_backupPolicies,
	"netAppAccounts/capacityPools": netAppAccounts_capacityPools,
	"netAppAccounts/capacityPools/volumes": netAppAccounts_capacityPools_volumes,
	"netAppAccounts/capacityPools/volumes/backups": netAppAccounts_capacityPools_volumes_backups,
	"netAppAccounts/capacityPools/volumes/snapshots": netAppAccounts_capacityPools_volumes_snapshots,
	"netAppAccounts/snapshotPolicies": netAppAccounts_snapshotPolicies,
};
