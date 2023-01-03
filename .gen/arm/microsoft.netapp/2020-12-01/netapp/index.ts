import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class netAppAccounts extends ArmResource<netAppAccountsComponentInputs> implements netAppAccountsComponentOutputs {
	constructor(entity: ADKEntity, options: netAppAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.NetApp/netAppAccounts", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts";
}
export interface netAppAccountsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.NetApp/netAppAccounts";
}
export interface netAppAccountsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: AccountProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class netAppAccounts_accountBackups
	extends ArmResource<netAppAccounts_accountBackupsComponentInputs>
	implements netAppAccounts_accountBackupsComponentOutputs
{
	constructor(entity: ADKEntity, options: netAppAccounts_accountBackupsComponentInputs) {
		super(entity, options.name, "Microsoft.NetApp/netAppAccounts/accountBackups", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts/accountBackups";
}
export interface netAppAccounts_accountBackupsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.NetApp/netAppAccounts/accountBackups";
}
export interface netAppAccounts_accountBackupsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: BackupProperties | undefined;
}
export class netAppAccounts_backupPolicies
	extends ArmResource<netAppAccounts_backupPoliciesComponentInputs>
	implements netAppAccounts_backupPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: netAppAccounts_backupPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.NetApp/netAppAccounts/backupPolicies", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts/backupPolicies";
}
export interface netAppAccounts_backupPoliciesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.NetApp/netAppAccounts/backupPolicies";
}
export interface netAppAccounts_backupPoliciesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: BackupPolicyProperties;
	readonly tags?: ResourceTags | undefined;
}
export class netAppAccounts_capacityPools
	extends ArmResource<netAppAccounts_capacityPoolsComponentInputs>
	implements netAppAccounts_capacityPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: netAppAccounts_capacityPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.NetApp/netAppAccounts/capacityPools", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools";
}
export interface netAppAccounts_capacityPoolsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools";
}
export interface netAppAccounts_capacityPoolsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: PoolProperties;
	readonly tags?: ResourceTags | undefined;
}
export class netAppAccounts_capacityPools_volumes
	extends ArmResource<netAppAccounts_capacityPools_volumesComponentInputs>
	implements netAppAccounts_capacityPools_volumesComponentOutputs
{
	constructor(entity: ADKEntity, options: netAppAccounts_capacityPools_volumesComponentInputs) {
		super(entity, options.name, "Microsoft.NetApp/netAppAccounts/capacityPools/volumes", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools/volumes";
}
export interface netAppAccounts_capacityPools_volumesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools/volumes";
}
export interface netAppAccounts_capacityPools_volumesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: VolumeProperties;
	readonly tags?: ResourceTags | undefined;
}
export class netAppAccounts_capacityPools_volumes_backups
	extends ArmResource<netAppAccounts_capacityPools_volumes_backupsComponentInputs>
	implements netAppAccounts_capacityPools_volumes_backupsComponentOutputs
{
	constructor(entity: ADKEntity, options: netAppAccounts_capacityPools_volumes_backupsComponentInputs) {
		super(entity, options.name, "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/backups", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/backups";
}
export interface netAppAccounts_capacityPools_volumes_backupsComponentOutputs {
	readonly apiVersion: "2020-12-01";
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
			"2020-12-01",
			options,
		);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots";
}
export interface netAppAccounts_capacityPools_volumes_snapshotsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots";
}
export interface netAppAccounts_capacityPools_volumes_snapshotsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: SnapshotProperties | undefined;
}
export class netAppAccounts_snapshotPolicies
	extends ArmResource<netAppAccounts_snapshotPoliciesComponentInputs>
	implements netAppAccounts_snapshotPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: netAppAccounts_snapshotPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.NetApp/netAppAccounts/snapshotPolicies", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts/snapshotPolicies";
}
export interface netAppAccounts_snapshotPoliciesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.NetApp/netAppAccounts/snapshotPolicies";
}
export interface netAppAccounts_snapshotPoliciesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: SnapshotPolicyProperties;
	readonly tags?: ResourceTags | undefined;
}
export interface AccountEncryption {
	readonly keySource?: string | undefined;
}
export interface AccountProperties {
	readonly activeDirectories?: ActiveDirectory[] | undefined;
	readonly encryption?: AccountEncryption | undefined;
	readonly provisioningState?: string | undefined;
}
export interface ActiveDirectory {
	readonly activeDirectoryId?: string | undefined;
	readonly adName?: string | undefined;
	readonly aesEncryption?: boolean | undefined;
	readonly allowLocalNfsUsersWithLdap?: boolean | undefined;
	readonly backupOperators?: string[] | undefined;
	readonly dns?: string | undefined;
	readonly domain?: string | undefined;
	readonly kdcIP?: string | undefined;
	readonly ldapOverTLS?: boolean | undefined;
	readonly ldapSigning?: boolean | undefined;
	readonly organizationalUnit?: string | undefined;
	readonly password?: string | undefined;
	readonly securityOperators?: string[] | undefined;
	readonly serverRootCACertificate?: string | undefined;
	readonly site?: string | undefined;
	readonly smbServerName?: string | undefined;
	readonly status?: ("Created" | "Deleted" | "Error" | "InUse" | "Updating") | undefined;
	readonly statusDetails?: string | undefined;
	readonly username?: string | undefined;
}
export interface BackupPolicyProperties {
	readonly dailyBackupsToKeep?: number | undefined;
	readonly enabled?: boolean | undefined;
	readonly monthlyBackupsToKeep?: number | undefined;
	readonly name?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly volumeBackups?: VolumeBackups[] | undefined;
	readonly volumesAssigned?: number | undefined;
	readonly weeklyBackupsToKeep?: number | undefined;
	readonly yearlyBackupsToKeep?: number | undefined;
}
export interface BackupProperties {
	readonly backupId?: string | undefined;
	readonly backupType?: ("Manual" | "Scheduled") | undefined;
	readonly creationDate?: string | undefined;
	readonly failureReason?: string | undefined;
	readonly label?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly size?: number | undefined;
	readonly volumeName?: string | undefined;
}
export interface DailySchedule {
	readonly hour?: number | undefined;
	readonly minute?: number | undefined;
	readonly snapshotsToKeep?: number | undefined;
	readonly usedBytes?: number | undefined;
}
export interface ExportPolicyRule {
	readonly allowedClients?: string | undefined;
	readonly cifs?: boolean | undefined;
	readonly hasRootAccess?: boolean | undefined;
	readonly kerberos5iReadOnly?: boolean | undefined;
	readonly kerberos5iReadWrite?: boolean | undefined;
	readonly kerberos5pReadOnly?: boolean | undefined;
	readonly kerberos5pReadWrite?: boolean | undefined;
	readonly kerberos5ReadOnly?: boolean | undefined;
	readonly kerberos5ReadWrite?: boolean | undefined;
	readonly nfsv3?: boolean | undefined;
	readonly nfsv41?: boolean | undefined;
	readonly ruleIndex?: number | undefined;
	readonly unixReadOnly?: boolean | undefined;
	readonly unixReadWrite?: boolean | undefined;
}
export interface HourlySchedule {
	readonly minute?: number | undefined;
	readonly snapshotsToKeep?: number | undefined;
	readonly usedBytes?: number | undefined;
}
export interface MonthlySchedule {
	readonly daysOfMonth?: string | undefined;
	readonly hour?: number | undefined;
	readonly minute?: number | undefined;
	readonly snapshotsToKeep?: number | undefined;
	readonly usedBytes?: number | undefined;
}
export interface MountTargetProperties {
	readonly fileSystemId: string;
	readonly ipAddress?: string | undefined;
	readonly mountTargetId?: string | undefined;
	readonly smbServerFqdn?: string | undefined;
}
export interface PoolProperties {
	readonly poolId?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly qosType?: ("Auto" | "Manual") | undefined;
	readonly serviceLevel: "Premium" | "Standard" | "Ultra";
	readonly size: number;
	readonly totalThroughputMibps?: number | undefined;
	readonly utilizedThroughputMibps?: number | undefined;
}
export interface ReplicationObject {
	readonly endpointType?: ("dst" | "src") | undefined;
	readonly remoteVolumeRegion?: string | undefined;
	readonly remoteVolumeResourceId: string;
	readonly replicationId?: string | undefined;
	readonly replicationSchedule: "_10minutely" | "daily" | "hourly";
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SnapshotPolicyProperties {
	readonly dailySchedule?: DailySchedule | undefined;
	readonly enabled?: boolean | undefined;
	readonly hourlySchedule?: HourlySchedule | undefined;
	readonly monthlySchedule?: MonthlySchedule | undefined;
	readonly provisioningState?: string | undefined;
	readonly weeklySchedule?: WeeklySchedule | undefined;
}
export interface SnapshotProperties {
	readonly created?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly snapshotId?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface VolumeBackupProperties {
	readonly backupEnabled?: boolean | undefined;
	readonly backupPolicyId?: string | undefined;
	readonly policyEnforced?: boolean | undefined;
	readonly vaultId?: string | undefined;
}
export interface VolumeBackups {
	readonly backupsCount?: number | undefined;
	readonly policyEnabled?: boolean | undefined;
	readonly volumeName?: string | undefined;
}
export interface VolumeProperties {
	readonly backupId?: string | undefined;
	readonly baremetalTenantId?: string | undefined;
	readonly creationToken: string;
	readonly dataProtection?: VolumePropertiesDataProtection | undefined;
	readonly encryptionKeySource?: string | undefined;
	readonly exportPolicy?: VolumePropertiesExportPolicy | undefined;
	readonly fileSystemId?: string | undefined;
	readonly isRestoring?: boolean | undefined;
	readonly kerberosEnabled?: boolean | undefined;
	readonly ldapEnabled?: boolean | undefined;
	readonly mountTargets?: MountTargetProperties[] | undefined;
	readonly protocolTypes?: string[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly securityStyle?: ("ntfs" | "unix") | undefined;
	readonly serviceLevel?: ("Premium" | "Standard" | "Ultra") | undefined;
	readonly smbContinuouslyAvailable?: boolean | undefined;
	readonly smbEncryption?: boolean | undefined;
	readonly snapshotDirectoryVisible?: boolean | undefined;
	readonly snapshotId?: string | undefined;
	readonly subnetId: string;
	readonly throughputMibps?: number | undefined;
	readonly usageThreshold: number;
	readonly volumeType?: string | undefined;
}
export interface VolumePropertiesDataProtection {
	readonly backup?: VolumeBackupProperties | undefined;
	readonly replication?: ReplicationObject | undefined;
	readonly snapshot?: VolumeSnapshotProperties | undefined;
}
export interface VolumePropertiesExportPolicy {
	readonly rules?: ExportPolicyRule[] | undefined;
}
export interface VolumeSnapshotProperties {
	readonly snapshotPolicyId?: string | undefined;
}
export interface WeeklySchedule {
	readonly day?: string | undefined;
	readonly hour?: number | undefined;
	readonly minute?: number | undefined;
	readonly snapshotsToKeep?: number | undefined;
	readonly usedBytes?: number | undefined;
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
