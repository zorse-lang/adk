import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class locations_quotaLimits
	extends ArmResource<locations_quotaLimitsComponentInputs>
	implements locations_quotaLimitsComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_quotaLimitsComponentInputs) {
		super(entity, options.name, "Microsoft.NetApp/locations/quotaLimits", "2022-03-01", options);
	}
	public readonly apiVersion: "2022-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/locations/quotaLimits";
}
export interface locations_quotaLimitsComponentOutputs {
	readonly apiVersion: "2022-03-01";
	readonly id: string;
	readonly type: "Microsoft.NetApp/locations/quotaLimits";
}
export interface locations_quotaLimitsComponentInputs {
	readonly name: string;
	readonly properties?: SubscriptionQuotaItemProperties;
	readonly systemData?: SystemData;
}
export class netAppAccounts extends ArmResource<netAppAccountsComponentInputs> implements netAppAccountsComponentOutputs {
	constructor(entity: ADKEntity, options: netAppAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.NetApp/netAppAccounts", "2022-03-01", options);
	}
	public readonly apiVersion: "2022-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts";
}
export interface netAppAccountsComponentOutputs {
	readonly apiVersion: "2022-03-01";
	readonly id: string;
	readonly type: "Microsoft.NetApp/netAppAccounts";
}
export interface netAppAccountsComponentInputs {
	readonly etag?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: AccountProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class netAppAccounts_accountBackups
	extends ArmResource<netAppAccounts_accountBackupsComponentInputs>
	implements netAppAccounts_accountBackupsComponentOutputs
{
	constructor(entity: ADKEntity, options: netAppAccounts_accountBackupsComponentInputs) {
		super(entity, options.name, "Microsoft.NetApp/netAppAccounts/accountBackups", "2022-03-01", options);
	}
	public readonly apiVersion: "2022-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts/accountBackups";
}
export interface netAppAccounts_accountBackupsComponentOutputs {
	readonly apiVersion: "2022-03-01";
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
		super(entity, options.name, "Microsoft.NetApp/netAppAccounts/backupPolicies", "2022-03-01", options);
	}
	public readonly apiVersion: "2022-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts/backupPolicies";
}
export interface netAppAccounts_backupPoliciesComponentOutputs {
	readonly apiVersion: "2022-03-01";
	readonly id: string;
	readonly type: "Microsoft.NetApp/netAppAccounts/backupPolicies";
}
export interface netAppAccounts_backupPoliciesComponentInputs {
	readonly etag?: string;
	readonly location: string;
	readonly name: string;
	readonly properties: BackupPolicyProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class netAppAccounts_capacityPools
	extends ArmResource<netAppAccounts_capacityPoolsComponentInputs>
	implements netAppAccounts_capacityPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: netAppAccounts_capacityPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.NetApp/netAppAccounts/capacityPools", "2022-03-01", options);
	}
	public readonly apiVersion: "2022-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools";
}
export interface netAppAccounts_capacityPoolsComponentOutputs {
	readonly apiVersion: "2022-03-01";
	readonly id: string;
	readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools";
}
export interface netAppAccounts_capacityPoolsComponentInputs {
	readonly etag?: string;
	readonly location: string;
	readonly name: string;
	readonly properties: PoolProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class netAppAccounts_capacityPools_volumes
	extends ArmResource<netAppAccounts_capacityPools_volumesComponentInputs>
	implements netAppAccounts_capacityPools_volumesComponentOutputs
{
	constructor(entity: ADKEntity, options: netAppAccounts_capacityPools_volumesComponentInputs) {
		super(entity, options.name, "Microsoft.NetApp/netAppAccounts/capacityPools/volumes", "2022-03-01", options);
	}
	public readonly apiVersion: "2022-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools/volumes";
}
export interface netAppAccounts_capacityPools_volumesComponentOutputs {
	readonly apiVersion: "2022-03-01";
	readonly id: string;
	readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools/volumes";
}
export interface netAppAccounts_capacityPools_volumesComponentInputs {
	readonly etag?: string;
	readonly location: string;
	readonly name: string;
	readonly properties: VolumeProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
	readonly zones?: string[];
}
export class netAppAccounts_capacityPools_volumes_backups
	extends ArmResource<netAppAccounts_capacityPools_volumes_backupsComponentInputs>
	implements netAppAccounts_capacityPools_volumes_backupsComponentOutputs
{
	constructor(entity: ADKEntity, options: netAppAccounts_capacityPools_volumes_backupsComponentInputs) {
		super(entity, options.name, "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/backups", "2022-03-01", options);
	}
	public readonly apiVersion: "2022-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/backups";
}
export interface netAppAccounts_capacityPools_volumes_backupsComponentOutputs {
	readonly apiVersion: "2022-03-01";
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
			"2022-03-01",
			options,
		);
	}
	public readonly apiVersion: "2022-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots";
}
export interface netAppAccounts_capacityPools_volumes_snapshotsComponentOutputs {
	readonly apiVersion: "2022-03-01";
	readonly id: string;
	readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots";
}
export interface netAppAccounts_capacityPools_volumes_snapshotsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: SnapshotProperties;
}
export class netAppAccounts_capacityPools_volumes_subvolumes
	extends ArmResource<netAppAccounts_capacityPools_volumes_subvolumesComponentInputs>
	implements netAppAccounts_capacityPools_volumes_subvolumesComponentOutputs
{
	constructor(entity: ADKEntity, options: netAppAccounts_capacityPools_volumes_subvolumesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.NetApp/netAppAccounts/capacityPools/volumes/subvolumes",
			"2022-03-01",
			options,
		);
	}
	public readonly apiVersion: "2022-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/subvolumes";
}
export interface netAppAccounts_capacityPools_volumes_subvolumesComponentOutputs {
	readonly apiVersion: "2022-03-01";
	readonly id: string;
	readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/subvolumes";
}
export interface netAppAccounts_capacityPools_volumes_subvolumesComponentInputs {
	readonly name: string;
	readonly properties?: SubvolumeProperties;
	readonly systemData?: SystemData;
}
export class netAppAccounts_capacityPools_volumes_volumeQuotaRules
	extends ArmResource<netAppAccounts_capacityPools_volumes_volumeQuotaRulesComponentInputs>
	implements netAppAccounts_capacityPools_volumes_volumeQuotaRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: netAppAccounts_capacityPools_volumes_volumeQuotaRulesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.NetApp/netAppAccounts/capacityPools/volumes/volumeQuotaRules",
			"2022-03-01",
			options,
		);
	}
	public readonly apiVersion: "2022-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/volumeQuotaRules";
}
export interface netAppAccounts_capacityPools_volumes_volumeQuotaRulesComponentOutputs {
	readonly apiVersion: "2022-03-01";
	readonly id: string;
	readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/volumeQuotaRules";
}
export interface netAppAccounts_capacityPools_volumes_volumeQuotaRulesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: VolumeQuotaRulesProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class netAppAccounts_snapshotPolicies
	extends ArmResource<netAppAccounts_snapshotPoliciesComponentInputs>
	implements netAppAccounts_snapshotPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: netAppAccounts_snapshotPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.NetApp/netAppAccounts/snapshotPolicies", "2022-03-01", options);
	}
	public readonly apiVersion: "2022-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts/snapshotPolicies";
}
export interface netAppAccounts_snapshotPoliciesComponentOutputs {
	readonly apiVersion: "2022-03-01";
	readonly id: string;
	readonly type: "Microsoft.NetApp/netAppAccounts/snapshotPolicies";
}
export interface netAppAccounts_snapshotPoliciesComponentInputs {
	readonly etag?: string;
	readonly location: string;
	readonly name: string;
	readonly properties: SnapshotPolicyProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class netAppAccounts_volumeGroups
	extends ArmResource<netAppAccounts_volumeGroupsComponentInputs>
	implements netAppAccounts_volumeGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: netAppAccounts_volumeGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.NetApp/netAppAccounts/volumeGroups", "2022-03-01", options);
	}
	public readonly apiVersion: "2022-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts/volumeGroups";
}
export interface netAppAccounts_volumeGroupsComponentOutputs {
	readonly apiVersion: "2022-03-01";
	readonly id: string;
	readonly type: "Microsoft.NetApp/netAppAccounts/volumeGroups";
}
export interface netAppAccounts_volumeGroupsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: VolumeGroupProperties;
}
export function listReplications(resource: netAppAccounts_capacityPools_volumes): ListReplications {
	if (resource.apiVersion !== "2022-03-01") {
		throw new Error(`listReplications is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.NetApp/netAppAccounts/capacityPools/volumes") {
		throw new Error(`listReplications is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AccountEncryption {
	readonly keySource?: string;
}
export interface AccountProperties {
	readonly activeDirectories?: ActiveDirectory[];
	readonly encryption?: AccountEncryption;
	readonly provisioningState?: string;
}
export interface ActiveDirectory {
	readonly activeDirectoryId?: string;
	readonly administrators?: string[];
	readonly adName?: string;
	readonly aesEncryption?: boolean;
	readonly allowLocalNfsUsersWithLdap?: boolean;
	readonly backupOperators?: string[];
	readonly dns?: string;
	readonly domain?: string;
	readonly encryptDCConnections?: boolean;
	readonly kdcIP?: string;
	readonly ldapOverTLS?: boolean;
	readonly ldapSearchScope?: LdapSearchScopeOpt;
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
	readonly backupPolicyId?: string;
	readonly dailyBackupsToKeep?: number;
	readonly enabled?: boolean;
	readonly monthlyBackupsToKeep?: number;
	readonly provisioningState?: string;
	readonly volumeBackups?: VolumeBackups[];
	readonly volumesAssigned?: number;
	readonly weeklyBackupsToKeep?: number;
}
export interface BackupProperties {
	readonly backupId?: string;
	readonly backupType?: "Manual" | "Scheduled";
	readonly creationDate?: string;
	readonly failureReason?: string;
	readonly label?: string;
	readonly provisioningState?: string;
	readonly size?: number;
	readonly useExistingSnapshot?: boolean;
	readonly volumeName?: string;
}
export interface DailySchedule {
	readonly hour?: number;
	readonly minute?: number;
	readonly snapshotsToKeep?: number;
	readonly usedBytes?: number;
}
export interface ExportPolicyRule {
	readonly allowedClients?: string;
	readonly chownMode?: "Restricted" | "Unrestricted";
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
export interface LdapSearchScopeOpt {
	readonly groupDN?: string;
	readonly groupMembershipFilter?: string;
	readonly userDN?: string;
}
export interface ListReplications {
	readonly value?: Replication[];
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
export interface PlacementKeyValuePairs {
	readonly key: string;
	readonly value: string;
}
export interface PoolProperties {
	readonly coolAccess?: boolean;
	readonly encryptionType?: "Double" | "Single";
	readonly poolId?: string;
	readonly provisioningState?: string;
	readonly qosType?: "Auto" | "Manual";
	readonly serviceLevel: "Premium" | "Standard" | "StandardZRS" | "Ultra";
	readonly size: number;
	readonly totalThroughputMibps?: number;
	readonly utilizedThroughputMibps?: number;
}
export interface Replication {
	readonly endpointType?: "dst" | "src";
	readonly remoteVolumeRegion?: string;
	readonly remoteVolumeResourceId: string;
	readonly replicationSchedule?: "_10minutely" | "daily" | "hourly";
}
export interface ReplicationObject {
	readonly endpointType?: "dst" | "src";
	readonly remoteVolumeRegion?: string;
	readonly remoteVolumeResourceId: string;
	readonly replicationId?: string;
	readonly replicationSchedule?: "_10minutely" | "daily" | "hourly";
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface SnapshotPolicyProperties {
	readonly dailySchedule?: DailySchedule;
	readonly enabled?: boolean;
	readonly hourlySchedule?: HourlySchedule;
	readonly monthlySchedule?: MonthlySchedule;
	readonly provisioningState?: string;
	readonly weeklySchedule?: WeeklySchedule;
}
export interface SnapshotProperties {
	readonly created?: string;
	readonly provisioningState?: string;
	readonly snapshotId?: string;
}
export interface SubscriptionQuotaItemProperties {
	readonly current?: number;
	readonly default?: number;
}
export interface SubvolumeProperties {
	readonly parentPath?: string;
	readonly path?: string;
	readonly provisioningState?: string;
	readonly size?: number;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
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
export interface VolumeGroupMetaData {
	readonly applicationIdentifier?: string;
	readonly applicationType?: "SAP-HANA";
	readonly deploymentSpecId?: string;
	readonly globalPlacementRules?: PlacementKeyValuePairs[];
	readonly groupDescription?: string;
	readonly volumesCount?: number;
}
export interface VolumeGroupProperties {
	readonly groupMetaData?: VolumeGroupMetaData;
	readonly provisioningState?: string;
	readonly volumes?: VolumeGroupVolumeProperties[];
}
export interface VolumeGroupVolumeProperties {
	readonly id?: string;
	readonly name?: string;
	readonly properties: VolumeProperties;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface VolumeProperties {
	readonly avsDataStore?: "Disabled" | "Enabled";
	readonly backupId?: string;
	readonly baremetalTenantId?: string;
	readonly capacityPoolResourceId?: string;
	readonly cloneProgress?: number;
	readonly coolAccess?: boolean;
	readonly coolnessPeriod?: number;
	readonly creationToken: string;
	readonly dataProtection?: VolumePropertiesDataProtection;
	readonly defaultGroupQuotaInKiBs?: number;
	readonly defaultUserQuotaInKiBs?: number;
	readonly enableSubvolumes?: "Disabled" | "Enabled";
	readonly encrypted?: boolean;
	readonly encryptionKeySource?: "Microsoft.KeyVault" | "Microsoft.NetApp";
	readonly exportPolicy?: VolumePropertiesExportPolicy;
	readonly fileSystemId?: string;
	readonly isDefaultQuotaEnabled?: boolean;
	readonly isRestoring?: boolean;
	readonly kerberosEnabled?: boolean;
	readonly keyVaultPrivateEndpointResourceId?: string;
	readonly ldapEnabled?: boolean;
	readonly maximumNumberOfFiles?: number;
	readonly mountTargets?: MountTargetProperties[];
	readonly networkFeatures?: "Basic" | "Standard";
	readonly networkSiblingSetId?: string;
	readonly placementRules?: PlacementKeyValuePairs[];
	readonly protocolTypes?: string[];
	readonly provisioningState?: string;
	readonly proximityPlacementGroup?: string;
	readonly securityStyle?: "ntfs" | "unix";
	readonly serviceLevel?: "Premium" | "Standard" | "StandardZRS" | "Ultra";
	readonly smbContinuouslyAvailable?: boolean;
	readonly smbEncryption?: boolean;
	readonly snapshotDirectoryVisible?: boolean;
	readonly snapshotId?: string;
	readonly storageToNetworkProximity?: "Default" | "T1" | "T2";
	readonly subnetId: string;
	readonly t2Network?: string;
	readonly throughputMibps?: number;
	readonly unixPermissions?: string;
	readonly usageThreshold: number;
	readonly volumeGroupName?: string;
	readonly volumeSpecName?: string;
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
export interface VolumeQuotaRulesProperties {
	readonly provisioningState?: "Accepted" | "Creating" | "Deleting" | "Failed" | "Moving" | "Patching";
	readonly quotaSizeInKiBs?: number;
	readonly quotaTarget?: string;
	readonly quotaType?: "DefaultGroupQuota" | "DefaultUserQuota" | "IndividualGroupQuota" | "IndividualUserQuota";
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
	"locations/quotaLimits": locations_quotaLimits,
	netAppAccounts: netAppAccounts,
	"netAppAccounts/accountBackups": netAppAccounts_accountBackups,
	"netAppAccounts/backupPolicies": netAppAccounts_backupPolicies,
	"netAppAccounts/capacityPools": netAppAccounts_capacityPools,
	"netAppAccounts/capacityPools/volumes": netAppAccounts_capacityPools_volumes,
	"netAppAccounts/capacityPools/volumes/backups": netAppAccounts_capacityPools_volumes_backups,
	"netAppAccounts/capacityPools/volumes/snapshots": netAppAccounts_capacityPools_volumes_snapshots,
	"netAppAccounts/capacityPools/volumes/subvolumes": netAppAccounts_capacityPools_volumes_subvolumes,
	"netAppAccounts/capacityPools/volumes/volumeQuotaRules": netAppAccounts_capacityPools_volumes_volumeQuotaRules,
	"netAppAccounts/snapshotPolicies": netAppAccounts_snapshotPolicies,
	"netAppAccounts/volumeGroups": netAppAccounts_volumeGroups,
};
