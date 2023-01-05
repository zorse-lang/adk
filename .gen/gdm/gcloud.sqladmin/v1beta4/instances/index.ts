import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Instances extends GdmResource<InstancesComponentInputs> implements InstancesComponentOutputs {
	constructor(entity: ADKEntity, options: InstancesComponentInputs) {
		super(entity, options.name, "sqladmin.v1beta4.Instances", options);
	}
}
export interface InstancesComponentOutputs {}
export interface InstancesComponentInputs {
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
	readonly masterInstanceName?: string;
	readonly maxDiskSize?: string;
	readonly name: string;
	readonly onPremisesConfiguration?: OnPremisesConfiguration;
	readonly project?: string;
	readonly region?: string;
	readonly replicaConfiguration?: ReplicaConfiguration;
	readonly replicaNames?: string[];
	readonly rootPassword?: string;
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
	readonly binaryLogEnabled?: boolean;
	readonly enabled?: boolean;
	readonly kind?: string;
	readonly location?: string;
	readonly replicationLogArchivingEnabled?: boolean;
	readonly startTime?: string;
}
export interface DatabaseFlags {
	readonly name?: string;
	readonly value?: string;
}
export interface DatabaseInstance {
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
	readonly masterInstanceName?: string;
	readonly maxDiskSize?: string;
	readonly name?: string;
	readonly onPremisesConfiguration?: OnPremisesConfiguration;
	readonly project?: string;
	readonly region?: string;
	readonly replicaConfiguration?: ReplicaConfiguration;
	readonly replicaNames?: string[];
	readonly rootPassword?: string;
	readonly selfLink?: string;
	readonly serverCaCert?: SslCert;
	readonly serviceAccountEmailAddress?: string;
	readonly settings?: Settings;
	readonly state?: string;
	readonly suspensionReason?: string[];
}
export interface DiskEncryptionConfiguration {
	readonly kind?: string;
	readonly kmsKeyName?: string;
}
export interface DiskEncryptionStatus {
	readonly kind?: string;
	readonly kmsKeyVersionName?: string;
}
export interface IpConfiguration {
	readonly authorizedNetworks?: AclEntry[];
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
	readonly hostPort?: string;
	readonly kind?: string;
}
export interface ReplicaConfiguration {
	readonly failoverTarget?: boolean;
	readonly kind?: string;
	readonly mysqlReplicaConfiguration?: MySqlReplicaConfiguration;
}
export interface Settings {
	readonly activationPolicy?: string;
	readonly authorizedGaeApplications?: string[];
	readonly availabilityType?: string;
	readonly backupConfiguration?: BackupConfiguration;
	readonly crashSafeReplicationEnabled?: boolean;
	readonly databaseFlags?: DatabaseFlags[];
	readonly databaseReplicationEnabled?: boolean;
	readonly dataDiskSizeGb?: string;
	readonly dataDiskType?: string;
	readonly ipConfiguration?: IpConfiguration;
	readonly kind?: string;
	readonly locationPreference?: LocationPreference;
	readonly maintenanceWindow?: MaintenanceWindow;
	readonly pricingPlan?: string;
	readonly replicationType?: string;
	readonly settingsVersion?: string;
	readonly storageAutoResize?: boolean;
	readonly storageAutoResizeLimit?: string;
	readonly tier?: string;
	readonly userLabels?: { [P in string]: string };
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
	Instances: Instances,
};
