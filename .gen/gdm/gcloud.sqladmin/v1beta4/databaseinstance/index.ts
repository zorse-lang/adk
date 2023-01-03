import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class DatabaseInstance
	extends GdmResource<DatabaseInstanceComponentInputs>
	implements DatabaseInstanceComponentOutputs
{
	constructor(entity: ADKEntity, options: DatabaseInstanceComponentInputs) {
		super(entity, options.name, "sqladmin.v1beta4.DatabaseInstance", options);
	}
	public readonly createTime?: string | undefined;
	public readonly databaseInstalledVersion?: string | undefined;
}
export interface DatabaseInstanceComponentOutputs {
	readonly createTime?: string | undefined;
	readonly databaseInstalledVersion?: string | undefined;
}
export interface DatabaseInstanceComponentInputs {
	readonly availableMaintenanceVersions?: string[] | undefined;
	readonly backendType?: string | undefined;
	readonly connectionName?: string | undefined;
	readonly currentDiskSize?: string | undefined;
	readonly databaseVersion?: string | undefined;
	readonly diskEncryptionConfiguration?: DiskEncryptionConfiguration | undefined;
	readonly diskEncryptionStatus?: DiskEncryptionStatus | undefined;
	readonly etag?: string | undefined;
	readonly failoverReplica?: { available?: boolean; name?: string } | undefined;
	readonly gceZone?: string | undefined;
	readonly instanceType?: string | undefined;
	readonly ipAddresses?: IpMapping[] | undefined;
	readonly ipv6Address?: string | undefined;
	readonly kind?: string | undefined;
	readonly maintenanceVersion?: string | undefined;
	readonly masterInstanceName?: string | undefined;
	readonly maxDiskSize?: string | undefined;
	readonly name: string;
	readonly onPremisesConfiguration?: OnPremisesConfiguration | undefined;
	readonly outOfDiskReport?: SqlOutOfDiskReport | undefined;
	readonly project?: string | undefined;
	readonly region?: string | undefined;
	readonly replicaConfiguration?: ReplicaConfiguration | undefined;
	readonly replicaNames?: string[] | undefined;
	readonly rootPassword?: string | undefined;
	readonly satisfiesPzs?: boolean | undefined;
	readonly scheduledMaintenance?: SqlScheduledMaintenance | undefined;
	readonly secondaryGceZone?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly serverCaCert?: SslCert | undefined;
	readonly serviceAccountEmailAddress?: string | undefined;
	readonly settings?: Settings | undefined;
	readonly state?: string | undefined;
	readonly suspensionReason?: string[] | undefined;
	readonly type: string;
}
export interface AclEntry {
	readonly expirationTime?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface BackupConfiguration {
	readonly backupRetentionSettings?: BackupRetentionSettings | undefined;
	readonly binaryLogEnabled?: boolean | undefined;
	readonly enabled?: boolean | undefined;
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly pointInTimeRecoveryEnabled?: boolean | undefined;
	readonly replicationLogArchivingEnabled?: boolean | undefined;
	readonly startTime?: string | undefined;
	readonly transactionLogRetentionDays?: number | undefined;
}
export interface BackupRetentionSettings {
	readonly retainedBackups?: number | undefined;
	readonly retentionUnit?: string | undefined;
}
export interface DatabaseFlags {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface DenyMaintenancePeriod {
	readonly endDate?: string | undefined;
	readonly startDate?: string | undefined;
	readonly time?: string | undefined;
}
export interface DiskEncryptionConfiguration {
	readonly kind?: string | undefined;
	readonly kmsKeyName?: string | undefined;
}
export interface DiskEncryptionStatus {
	readonly kind?: string | undefined;
	readonly kmsKeyVersionName?: string | undefined;
}
export interface InsightsConfig {
	readonly queryInsightsEnabled?: boolean | undefined;
	readonly queryPlansPerMinute?: number | undefined;
	readonly queryStringLength?: number | undefined;
	readonly recordApplicationTags?: boolean | undefined;
	readonly recordClientAddress?: boolean | undefined;
}
export interface InstanceReference {
	readonly name?: string | undefined;
	readonly project?: string | undefined;
	readonly region?: string | undefined;
}
export interface IpConfiguration {
	readonly allocatedIpRange?: string | undefined;
	readonly authorizedNetworks?: AclEntry[] | undefined;
	readonly enablePrivatePathForGoogleCloudServices?: boolean | undefined;
	readonly ipv4Enabled?: boolean | undefined;
	readonly privateNetwork?: string | undefined;
	readonly requireSsl?: boolean | undefined;
}
export interface IpMapping {
	readonly ipAddress?: string | undefined;
	readonly timeToRetire?: string | undefined;
	readonly type?: string | undefined;
}
export interface LocationPreference {
	readonly followGaeApplication?: string | undefined;
	readonly kind?: string | undefined;
	readonly secondaryZone?: string | undefined;
	readonly zone?: string | undefined;
}
export interface MaintenanceWindow {
	readonly day?: number | undefined;
	readonly hour?: number | undefined;
	readonly kind?: string | undefined;
	readonly updateTrack?: string | undefined;
}
export interface MySqlReplicaConfiguration {
	readonly caCertificate?: string | undefined;
	readonly clientCertificate?: string | undefined;
	readonly clientKey?: string | undefined;
	readonly connectRetryInterval?: number | undefined;
	readonly dumpFilePath?: string | undefined;
	readonly kind?: string | undefined;
	readonly masterHeartbeatPeriod?: string | undefined;
	readonly password?: string | undefined;
	readonly sslCipher?: string | undefined;
	readonly username?: string | undefined;
	readonly verifyServerCertificate?: boolean | undefined;
}
export interface OnPremisesConfiguration {
	readonly caCertificate?: string | undefined;
	readonly clientCertificate?: string | undefined;
	readonly clientKey?: string | undefined;
	readonly dumpFilePath?: string | undefined;
	readonly hostPort?: string | undefined;
	readonly kind?: string | undefined;
	readonly password?: string | undefined;
	readonly sourceInstance?: InstanceReference | undefined;
	readonly username?: string | undefined;
}
export interface PasswordValidationPolicy {
	readonly complexity?: string | undefined;
	readonly disallowUsernameSubstring?: boolean | undefined;
	readonly enablePasswordPolicy?: boolean | undefined;
	readonly minLength?: number | undefined;
	readonly passwordChangeInterval?: string | undefined;
	readonly reuseInterval?: number | undefined;
}
export interface ReplicaConfiguration {
	readonly failoverTarget?: boolean | undefined;
	readonly kind?: string | undefined;
	readonly mysqlReplicaConfiguration?: MySqlReplicaConfiguration | undefined;
}
export interface Settings {
	readonly activationPolicy?: string | undefined;
	readonly activeDirectoryConfig?: SqlActiveDirectoryConfig | undefined;
	readonly authorizedGaeApplications?: string[] | undefined;
	readonly availabilityType?: string | undefined;
	readonly backupConfiguration?: BackupConfiguration | undefined;
	readonly collation?: string | undefined;
	readonly connectorEnforcement?: string | undefined;
	readonly crashSafeReplicationEnabled?: boolean | undefined;
	readonly databaseFlags?: DatabaseFlags[] | undefined;
	readonly databaseReplicationEnabled?: boolean | undefined;
	readonly dataDiskSizeGb?: string | undefined;
	readonly dataDiskType?: string | undefined;
	readonly deletionProtectionEnabled?: boolean | undefined;
	readonly denyMaintenancePeriods?: DenyMaintenancePeriod[] | undefined;
	readonly insightsConfig?: InsightsConfig | undefined;
	readonly ipConfiguration?: IpConfiguration | undefined;
	readonly kind?: string | undefined;
	readonly locationPreference?: LocationPreference | undefined;
	readonly maintenanceWindow?: MaintenanceWindow | undefined;
	readonly passwordValidationPolicy?: PasswordValidationPolicy | undefined;
	readonly pricingPlan?: string | undefined;
	readonly replicationType?: string | undefined;
	readonly settingsVersion?: string | undefined;
	readonly sqlServerAuditConfig?: SqlServerAuditConfig | undefined;
	readonly storageAutoResize?: boolean | undefined;
	readonly storageAutoResizeLimit?: string | undefined;
	readonly tier?: string | undefined;
	readonly timeZone?: string | undefined;
	readonly userLabels?: { [P in string]: string } | undefined;
}
export interface SqlActiveDirectoryConfig {
	readonly domain?: string | undefined;
	readonly kind?: string | undefined;
}
export interface SqlOutOfDiskReport {
	readonly sqlMinRecommendedIncreaseSizeGb?: number | undefined;
	readonly sqlOutOfDiskState?: string | undefined;
}
export interface SqlScheduledMaintenance {
	readonly canDefer?: boolean | undefined;
	readonly canReschedule?: boolean | undefined;
	readonly scheduleDeadlineTime?: string | undefined;
	readonly startTime?: string | undefined;
}
export interface SqlServerAuditConfig {
	readonly bucket?: string | undefined;
	readonly kind?: string | undefined;
	readonly retentionInterval?: string | undefined;
	readonly uploadInterval?: string | undefined;
}
export interface SslCert {
	readonly cert?: string | undefined;
	readonly certSerialNumber?: string | undefined;
	readonly commonName?: string | undefined;
	readonly createTime?: string | undefined;
	readonly expirationTime?: string | undefined;
	readonly instance?: string | undefined;
	readonly kind?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly sha1Fingerprint?: string | undefined;
}
export default {
	DatabaseInstance: DatabaseInstance,
};
