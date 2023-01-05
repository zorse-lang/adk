import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class DatabaseInstance
	extends GdmResource<DatabaseInstanceComponentInputs>
	implements DatabaseInstanceComponentOutputs
{
	constructor(entity: ADKEntity, options: DatabaseInstanceComponentInputs) {
		super(entity, options.name, "sqladmin.v1beta4.DatabaseInstance", options);
	}
	public readonly createTime?: string;
	public readonly databaseInstalledVersion?: string;
}
export interface DatabaseInstanceComponentOutputs {
	readonly createTime?: string;
	readonly databaseInstalledVersion?: string;
}
export interface DatabaseInstanceComponentInputs {
	readonly availableMaintenanceVersions?: string[];
	readonly backendType?: string;
	readonly connectionName?: string;
	readonly currentDiskSize?: string;
	readonly databaseVersion?: string;
	readonly diskEncryptionConfiguration?: DiskEncryptionConfiguration;
	readonly diskEncryptionStatus?: DiskEncryptionStatus;
	readonly etag?: string;
	readonly failoverReplica?: { available?: boolean; name?: string };
	readonly gceZone?: string;
	readonly instanceType?: string;
	readonly ipAddresses?: IpMapping[];
	readonly ipv6Address?: string;
	readonly kind?: string;
	readonly maintenanceVersion?: string;
	readonly masterInstanceName?: string;
	readonly maxDiskSize?: string;
	readonly name: string;
	readonly onPremisesConfiguration?: OnPremisesConfiguration;
	readonly outOfDiskReport?: SqlOutOfDiskReport;
	readonly project?: string;
	readonly region?: string;
	readonly replicaConfiguration?: ReplicaConfiguration;
	readonly replicaNames?: string[];
	readonly rootPassword?: string;
	readonly satisfiesPzs?: boolean;
	readonly scheduledMaintenance?: SqlScheduledMaintenance;
	readonly secondaryGceZone?: string;
	readonly selfLink?: string;
	readonly serverCaCert?: SslCert;
	readonly serviceAccountEmailAddress?: string;
	readonly settings?: Settings;
	readonly state?: string;
	readonly suspensionReason?: string[];
}
export interface AclEntry {
	readonly expirationTime?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly value?: string;
}
export interface BackupConfiguration {
	readonly backupRetentionSettings?: BackupRetentionSettings;
	readonly binaryLogEnabled?: boolean;
	readonly enabled?: boolean;
	readonly kind?: string;
	readonly location?: string;
	readonly pointInTimeRecoveryEnabled?: boolean;
	readonly replicationLogArchivingEnabled?: boolean;
	readonly startTime?: string;
	readonly transactionLogRetentionDays?: number;
}
export interface BackupRetentionSettings {
	readonly retainedBackups?: number;
	readonly retentionUnit?: string;
}
export interface DatabaseFlags {
	readonly name?: string;
	readonly value?: string;
}
export interface DenyMaintenancePeriod {
	readonly endDate?: string;
	readonly startDate?: string;
	readonly time?: string;
}
export interface DiskEncryptionConfiguration {
	readonly kind?: string;
	readonly kmsKeyName?: string;
}
export interface DiskEncryptionStatus {
	readonly kind?: string;
	readonly kmsKeyVersionName?: string;
}
export interface InsightsConfig {
	readonly queryInsightsEnabled?: boolean;
	readonly queryPlansPerMinute?: number;
	readonly queryStringLength?: number;
	readonly recordApplicationTags?: boolean;
	readonly recordClientAddress?: boolean;
}
export interface InstanceReference {
	readonly name?: string;
	readonly project?: string;
	readonly region?: string;
}
export interface IpConfiguration {
	readonly allocatedIpRange?: string;
	readonly authorizedNetworks?: AclEntry[];
	readonly enablePrivatePathForGoogleCloudServices?: boolean;
	readonly ipv4Enabled?: boolean;
	readonly privateNetwork?: string;
	readonly requireSsl?: boolean;
}
export interface IpMapping {
	readonly ipAddress?: string;
	readonly timeToRetire?: string;
	readonly type?: string;
}
export interface LocationPreference {
	readonly followGaeApplication?: string;
	readonly kind?: string;
	readonly secondaryZone?: string;
	readonly zone?: string;
}
export interface MaintenanceWindow {
	readonly day?: number;
	readonly hour?: number;
	readonly kind?: string;
	readonly updateTrack?: string;
}
export interface MySqlReplicaConfiguration {
	readonly caCertificate?: string;
	readonly clientCertificate?: string;
	readonly clientKey?: string;
	readonly connectRetryInterval?: number;
	readonly dumpFilePath?: string;
	readonly kind?: string;
	readonly masterHeartbeatPeriod?: string;
	readonly password?: string;
	readonly sslCipher?: string;
	readonly username?: string;
	readonly verifyServerCertificate?: boolean;
}
export interface OnPremisesConfiguration {
	readonly caCertificate?: string;
	readonly clientCertificate?: string;
	readonly clientKey?: string;
	readonly dumpFilePath?: string;
	readonly hostPort?: string;
	readonly kind?: string;
	readonly password?: string;
	readonly sourceInstance?: InstanceReference;
	readonly username?: string;
}
export interface PasswordValidationPolicy {
	readonly complexity?: string;
	readonly disallowUsernameSubstring?: boolean;
	readonly enablePasswordPolicy?: boolean;
	readonly minLength?: number;
	readonly passwordChangeInterval?: string;
	readonly reuseInterval?: number;
}
export interface ReplicaConfiguration {
	readonly failoverTarget?: boolean;
	readonly kind?: string;
	readonly mysqlReplicaConfiguration?: MySqlReplicaConfiguration;
}
export interface Settings {
	readonly activationPolicy?: string;
	readonly activeDirectoryConfig?: SqlActiveDirectoryConfig;
	readonly authorizedGaeApplications?: string[];
	readonly availabilityType?: string;
	readonly backupConfiguration?: BackupConfiguration;
	readonly collation?: string;
	readonly connectorEnforcement?: string;
	readonly crashSafeReplicationEnabled?: boolean;
	readonly databaseFlags?: DatabaseFlags[];
	readonly databaseReplicationEnabled?: boolean;
	readonly dataDiskSizeGb?: string;
	readonly dataDiskType?: string;
	readonly deletionProtectionEnabled?: boolean;
	readonly denyMaintenancePeriods?: DenyMaintenancePeriod[];
	readonly insightsConfig?: InsightsConfig;
	readonly ipConfiguration?: IpConfiguration;
	readonly kind?: string;
	readonly locationPreference?: LocationPreference;
	readonly maintenanceWindow?: MaintenanceWindow;
	readonly passwordValidationPolicy?: PasswordValidationPolicy;
	readonly pricingPlan?: string;
	readonly replicationType?: string;
	readonly settingsVersion?: string;
	readonly sqlServerAuditConfig?: SqlServerAuditConfig;
	readonly storageAutoResize?: boolean;
	readonly storageAutoResizeLimit?: string;
	readonly tier?: string;
	readonly timeZone?: string;
	readonly userLabels?: { [P in string]: string };
}
export interface SqlActiveDirectoryConfig {
	readonly domain?: string;
	readonly kind?: string;
}
export interface SqlOutOfDiskReport {
	readonly sqlMinRecommendedIncreaseSizeGb?: number;
	readonly sqlOutOfDiskState?: string;
}
export interface SqlScheduledMaintenance {
	readonly canDefer?: boolean;
	readonly canReschedule?: boolean;
	readonly scheduleDeadlineTime?: string;
	readonly startTime?: string;
}
export interface SqlServerAuditConfig {
	readonly bucket?: string;
	readonly kind?: string;
	readonly retentionInterval?: string;
	readonly uploadInterval?: string;
}
export interface SslCert {
	readonly cert?: string;
	readonly certSerialNumber?: string;
	readonly commonName?: string;
	readonly createTime?: string;
	readonly expirationTime?: string;
	readonly instance?: string;
	readonly kind?: string;
	readonly selfLink?: string;
	readonly sha1Fingerprint?: string;
}
export default {
	DatabaseInstance: DatabaseInstance,
};
