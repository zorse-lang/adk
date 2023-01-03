import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class locations_quotaLimits
	extends ArmResource<locations_quotaLimitsComponentInputs>
	implements locations_quotaLimitsComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_quotaLimitsComponentInputs) {
		super(entity, options.name, "Microsoft.NetApp/locations/quotaLimits", "2022-05-01", options);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/locations/quotaLimits";
}
export interface locations_quotaLimitsComponentOutputs {
	readonly apiVersion: "2022-05-01";
	readonly id: string;
	readonly type: "Microsoft.NetApp/locations/quotaLimits";
}
export interface locations_quotaLimitsComponentInputs {
	readonly name: string;
	readonly properties?: SubscriptionQuotaItemProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class netAppAccounts extends ArmResource<netAppAccountsComponentInputs> implements netAppAccountsComponentOutputs {
	constructor(entity: ADKEntity, options: netAppAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.NetApp/netAppAccounts", "2022-05-01", options);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts";
}
export interface netAppAccountsComponentOutputs {
	readonly apiVersion: "2022-05-01";
	readonly id: string;
	readonly type: "Microsoft.NetApp/netAppAccounts";
}
export interface netAppAccountsComponentInputs {
	readonly etag?: string | undefined;
	readonly identity?: Identity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: AccountProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class netAppAccounts_accountBackups
	extends ArmResource<netAppAccounts_accountBackupsComponentInputs>
	implements netAppAccounts_accountBackupsComponentOutputs
{
	constructor(entity: ADKEntity, options: netAppAccounts_accountBackupsComponentInputs) {
		super(entity, options.name, "Microsoft.NetApp/netAppAccounts/accountBackups", "2022-05-01", options);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts/accountBackups";
}
export interface netAppAccounts_accountBackupsComponentOutputs {
	readonly apiVersion: "2022-05-01";
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
		super(entity, options.name, "Microsoft.NetApp/netAppAccounts/backupPolicies", "2022-05-01", options);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts/backupPolicies";
}
export interface netAppAccounts_backupPoliciesComponentOutputs {
	readonly apiVersion: "2022-05-01";
	readonly id: string;
	readonly type: "Microsoft.NetApp/netAppAccounts/backupPolicies";
}
export interface netAppAccounts_backupPoliciesComponentInputs {
	readonly etag?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: BackupPolicyProperties;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class netAppAccounts_capacityPools
	extends ArmResource<netAppAccounts_capacityPoolsComponentInputs>
	implements netAppAccounts_capacityPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: netAppAccounts_capacityPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.NetApp/netAppAccounts/capacityPools", "2022-05-01", options);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools";
}
export interface netAppAccounts_capacityPoolsComponentOutputs {
	readonly apiVersion: "2022-05-01";
	readonly id: string;
	readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools";
}
export interface netAppAccounts_capacityPoolsComponentInputs {
	readonly etag?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: PoolProperties;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class netAppAccounts_capacityPools_volumes
	extends ArmResource<netAppAccounts_capacityPools_volumesComponentInputs>
	implements netAppAccounts_capacityPools_volumesComponentOutputs
{
	constructor(entity: ADKEntity, options: netAppAccounts_capacityPools_volumesComponentInputs) {
		super(entity, options.name, "Microsoft.NetApp/netAppAccounts/capacityPools/volumes", "2022-05-01", options);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools/volumes";
}
export interface netAppAccounts_capacityPools_volumesComponentOutputs {
	readonly apiVersion: "2022-05-01";
	readonly id: string;
	readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools/volumes";
}
export interface netAppAccounts_capacityPools_volumesComponentInputs {
	readonly etag?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: VolumeProperties;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
	readonly zones?: string[] | undefined;
}
export class netAppAccounts_capacityPools_volumes_backups
	extends ArmResource<netAppAccounts_capacityPools_volumes_backupsComponentInputs>
	implements netAppAccounts_capacityPools_volumes_backupsComponentOutputs
{
	constructor(entity: ADKEntity, options: netAppAccounts_capacityPools_volumes_backupsComponentInputs) {
		super(entity, options.name, "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/backups", "2022-05-01", options);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/backups";
}
export interface netAppAccounts_capacityPools_volumes_backupsComponentOutputs {
	readonly apiVersion: "2022-05-01";
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
			"2022-05-01",
			options,
		);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots";
}
export interface netAppAccounts_capacityPools_volumes_snapshotsComponentOutputs {
	readonly apiVersion: "2022-05-01";
	readonly id: string;
	readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots";
}
export interface netAppAccounts_capacityPools_volumes_snapshotsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: SnapshotProperties | undefined;
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
			"2022-05-01",
			options,
		);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/subvolumes";
}
export interface netAppAccounts_capacityPools_volumes_subvolumesComponentOutputs {
	readonly apiVersion: "2022-05-01";
	readonly id: string;
	readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/subvolumes";
}
export interface netAppAccounts_capacityPools_volumes_subvolumesComponentInputs {
	readonly name: string;
	readonly properties?: SubvolumeProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
			"2022-05-01",
			options,
		);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/volumeQuotaRules";
}
export interface netAppAccounts_capacityPools_volumes_volumeQuotaRulesComponentOutputs {
	readonly apiVersion: "2022-05-01";
	readonly id: string;
	readonly type: "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/volumeQuotaRules";
}
export interface netAppAccounts_capacityPools_volumes_volumeQuotaRulesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: VolumeQuotaRulesProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class netAppAccounts_snapshotPolicies
	extends ArmResource<netAppAccounts_snapshotPoliciesComponentInputs>
	implements netAppAccounts_snapshotPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: netAppAccounts_snapshotPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.NetApp/netAppAccounts/snapshotPolicies", "2022-05-01", options);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts/snapshotPolicies";
}
export interface netAppAccounts_snapshotPoliciesComponentOutputs {
	readonly apiVersion: "2022-05-01";
	readonly id: string;
	readonly type: "Microsoft.NetApp/netAppAccounts/snapshotPolicies";
}
export interface netAppAccounts_snapshotPoliciesComponentInputs {
	readonly etag?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: SnapshotPolicyProperties;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class netAppAccounts_volumeGroups
	extends ArmResource<netAppAccounts_volumeGroupsComponentInputs>
	implements netAppAccounts_volumeGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: netAppAccounts_volumeGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.NetApp/netAppAccounts/volumeGroups", "2022-05-01", options);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.NetApp/netAppAccounts/volumeGroups";
}
export interface netAppAccounts_volumeGroupsComponentOutputs {
	readonly apiVersion: "2022-05-01";
	readonly id: string;
	readonly type: "Microsoft.NetApp/netAppAccounts/volumeGroups";
}
export interface netAppAccounts_volumeGroupsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: VolumeGroupProperties | undefined;
}
export function listReplications(resource: netAppAccounts_capacityPools_volumes): ListReplications {
	if (resource.apiVersion !== "2022-05-01") {
		throw new Error(`listReplications is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.NetApp/netAppAccounts/capacityPools/volumes") {
		throw new Error(`listReplications is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AccountEncryption {
	readonly identity?: EncryptionIdentity | undefined;
	readonly keySource?: ("Microsoft.KeyVault" | "Microsoft.NetApp") | undefined;
	readonly keyVaultProperties?: KeyVaultProperties | undefined;
}
export interface AccountProperties {
	readonly activeDirectories?: ActiveDirectory[] | undefined;
	readonly disableShowmount?: boolean | undefined;
	readonly encryption?: AccountEncryption | undefined;
	readonly provisioningState?: string | undefined;
}
export interface ActiveDirectory {
	readonly activeDirectoryId?: string | undefined;
	readonly administrators?: string[] | undefined;
	readonly adName?: string | undefined;
	readonly aesEncryption?: boolean | undefined;
	readonly allowLocalNfsUsersWithLdap?: boolean | undefined;
	readonly backupOperators?: string[] | undefined;
	readonly dns?: string | undefined;
	readonly domain?: string | undefined;
	readonly encryptDCConnections?: boolean | undefined;
	readonly kdcIP?: string | undefined;
	readonly ldapOverTLS?: boolean | undefined;
	readonly ldapSearchScope?: LdapSearchScopeOpt | undefined;
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
	readonly backupPolicyId?: string | undefined;
	readonly dailyBackupsToKeep?: number | undefined;
	readonly enabled?: boolean | undefined;
	readonly monthlyBackupsToKeep?: number | undefined;
	readonly provisioningState?: string | undefined;
	readonly volumeBackups?: VolumeBackups[] | undefined;
	readonly volumesAssigned?: number | undefined;
	readonly weeklyBackupsToKeep?: number | undefined;
}
export interface BackupProperties {
	readonly backupId?: string | undefined;
	readonly backupType?: ("Manual" | "Scheduled") | undefined;
	readonly creationDate?: string | undefined;
	readonly failureReason?: string | undefined;
	readonly label?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly size?: number | undefined;
	readonly useExistingSnapshot?: boolean | undefined;
	readonly volumeName?: string | undefined;
}
export interface DailySchedule {
	readonly hour?: number | undefined;
	readonly minute?: number | undefined;
	readonly snapshotsToKeep?: number | undefined;
	readonly usedBytes?: number | undefined;
}
export interface EncryptionIdentity {
	readonly principalId?: string | undefined;
	readonly userAssignedIdentity?: string | undefined;
}
export interface ExportPolicyRule {
	readonly allowedClients?: string | undefined;
	readonly chownMode?: ("Restricted" | "Unrestricted") | undefined;
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
export interface Identity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type: "None" | "SystemAssigned" | "SystemAssigned,UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: IdentityUserAssignedIdentities | undefined;
}
export interface IdentityUserAssignedIdentities {
	readonly "[ key: string ]"?: UserAssignedIdentity | undefined;
}
export interface KeyVaultProperties {
	readonly keyName: string;
	readonly keyVaultId?: string | undefined;
	readonly keyVaultResourceId: string;
	readonly keyVaultUri: string;
	readonly status?: ("Created" | "Deleted" | "Error" | "InUse" | "Updating") | undefined;
}
export interface LdapSearchScopeOpt {
	readonly groupDN?: string | undefined;
	readonly groupMembershipFilter?: string | undefined;
	readonly userDN?: string | undefined;
}
export interface ListReplications {
	readonly value?: Replication[] | undefined;
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
export interface PlacementKeyValuePairs {
	readonly key: string;
	readonly value: string;
}
export interface PoolProperties {
	readonly coolAccess?: boolean | undefined;
	readonly encryptionType?: ("Double" | "Single") | undefined;
	readonly poolId?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly qosType?: ("Auto" | "Manual") | undefined;
	readonly serviceLevel: "Premium" | "Standard" | "StandardZRS" | "Ultra";
	readonly size: number;
	readonly totalThroughputMibps?: number | undefined;
	readonly utilizedThroughputMibps?: number | undefined;
}
export interface Replication {
	readonly endpointType?: ("dst" | "src") | undefined;
	readonly remoteVolumeRegion?: string | undefined;
	readonly remoteVolumeResourceId: string;
	readonly replicationSchedule?: ("_10minutely" | "daily" | "hourly") | undefined;
}
export interface ReplicationObject {
	readonly endpointType?: ("dst" | "src") | undefined;
	readonly remoteVolumeRegion?: string | undefined;
	readonly remoteVolumeResourceId: string;
	readonly replicationId?: string | undefined;
	readonly replicationSchedule?: ("_10minutely" | "daily" | "hourly") | undefined;
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
export interface SubscriptionQuotaItemProperties {
	readonly current?: number | undefined;
	readonly default?: number | undefined;
}
export interface SubvolumeProperties {
	readonly parentPath?: string | undefined;
	readonly path?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly size?: number | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface UserAssignedIdentity {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
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
export interface VolumeGroupMetaData {
	readonly applicationIdentifier?: string | undefined;
	readonly applicationType?: "SAP-HANA" | undefined;
	readonly deploymentSpecId?: string | undefined;
	readonly globalPlacementRules?: PlacementKeyValuePairs[] | undefined;
	readonly groupDescription?: string | undefined;
	readonly volumesCount?: number | undefined;
}
export interface VolumeGroupProperties {
	readonly groupMetaData?: VolumeGroupMetaData | undefined;
	readonly provisioningState?: string | undefined;
	readonly volumes?: VolumeGroupVolumeProperties[] | undefined;
}
export interface VolumeGroupVolumeProperties {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties: VolumeProperties;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface VolumeProperties {
	readonly avsDataStore?: ("Disabled" | "Enabled") | undefined;
	readonly backupId?: string | undefined;
	readonly baremetalTenantId?: string | undefined;
	readonly capacityPoolResourceId?: string | undefined;
	readonly cloneProgress?: number | undefined;
	readonly coolAccess?: boolean | undefined;
	readonly coolnessPeriod?: number | undefined;
	readonly creationToken: string;
	readonly dataProtection?: VolumePropertiesDataProtection | undefined;
	readonly defaultGroupQuotaInKiBs?: number | undefined;
	readonly defaultUserQuotaInKiBs?: number | undefined;
	readonly deleteBaseSnapshot?: boolean | undefined;
	readonly enableSubvolumes?: ("Disabled" | "Enabled") | undefined;
	readonly encrypted?: boolean | undefined;
	readonly encryptionKeySource?: ("Microsoft.KeyVault" | "Microsoft.NetApp") | undefined;
	readonly exportPolicy?: VolumePropertiesExportPolicy | undefined;
	readonly fileSystemId?: string | undefined;
	readonly isDefaultQuotaEnabled?: boolean | undefined;
	readonly isRestoring?: boolean | undefined;
	readonly kerberosEnabled?: boolean | undefined;
	readonly keyVaultPrivateEndpointResourceId?: string | undefined;
	readonly ldapEnabled?: boolean | undefined;
	readonly maximumNumberOfFiles?: number | undefined;
	readonly mountTargets?: MountTargetProperties[] | undefined;
	readonly networkFeatures?: ("Basic" | "Standard") | undefined;
	readonly networkSiblingSetId?: string | undefined;
	readonly placementRules?: PlacementKeyValuePairs[] | undefined;
	readonly protocolTypes?: string[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly proximityPlacementGroup?: string | undefined;
	readonly securityStyle?: ("ntfs" | "unix") | undefined;
	readonly serviceLevel?: ("Premium" | "Standard" | "StandardZRS" | "Ultra") | undefined;
	readonly smbAccessBasedEnumeration?: ("Disabled" | "Enabled") | undefined;
	readonly smbContinuouslyAvailable?: boolean | undefined;
	readonly smbEncryption?: boolean | undefined;
	readonly smbNonBrowsable?: ("Disabled" | "Enabled") | undefined;
	readonly snapshotDirectoryVisible?: boolean | undefined;
	readonly snapshotId?: string | undefined;
	readonly storageToNetworkProximity?: ("Default" | "T1" | "T2") | undefined;
	readonly subnetId: string;
	readonly t2Network?: string | undefined;
	readonly throughputMibps?: number | undefined;
	readonly unixPermissions?: string | undefined;
	readonly usageThreshold: number;
	readonly volumeGroupName?: string | undefined;
	readonly volumeSpecName?: string | undefined;
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
export interface VolumeQuotaRulesProperties {
	readonly provisioningState?: ("Accepted" | "Creating" | "Deleting" | "Failed" | "Moving" | "Patching") | undefined;
	readonly quotaSizeInKiBs?: number | undefined;
	readonly quotaTarget?: string | undefined;
	readonly quotaType?:
		| ("DefaultGroupQuota" | "DefaultUserQuota" | "IndividualGroupQuota" | "IndividualUserQuota")
		| undefined;
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
