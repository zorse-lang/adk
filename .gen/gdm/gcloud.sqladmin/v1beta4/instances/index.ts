import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Instances extends GdmResource<InstancesComponentInputs> implements InstancesComponentOutputs {
	constructor(entity: ADKEntity, options: InstancesComponentInputs) {
		super(entity, options.name, "sqladmin.v1beta4.Instances", options);
	}
}
export interface InstancesComponentOutputs {}
export interface InstancesComponentInputs {
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
	readonly masterInstanceName?: string | undefined;
	readonly maxDiskSize?: string | undefined;
	readonly name: string;
	readonly onPremisesConfiguration?: OnPremisesConfiguration | undefined;
	readonly project?: string | undefined;
	readonly region?: string | undefined;
	readonly replicaConfiguration?: ReplicaConfiguration | undefined;
	readonly replicaNames?: string[] | undefined;
	readonly rootPassword?: string | undefined;
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
	readonly binaryLogEnabled?: boolean | undefined;
	readonly enabled?: boolean | undefined;
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly replicationLogArchivingEnabled?: boolean | undefined;
	readonly startTime?: string | undefined;
}
export interface DatabaseFlags {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface DatabaseInstance {
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
	readonly masterInstanceName?: string | undefined;
	readonly maxDiskSize?: string | undefined;
	readonly name?: string | undefined;
	readonly onPremisesConfiguration?: OnPremisesConfiguration | undefined;
	readonly project?: string | undefined;
	readonly region?: string | undefined;
	readonly replicaConfiguration?: ReplicaConfiguration | undefined;
	readonly replicaNames?: string[] | undefined;
	readonly rootPassword?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly serverCaCert?: SslCert | undefined;
	readonly serviceAccountEmailAddress?: string | undefined;
	readonly settings?: Settings | undefined;
	readonly state?: string | undefined;
	readonly suspensionReason?: string[] | undefined;
}
export interface DiskEncryptionConfiguration {
	readonly kind?: string | undefined;
	readonly kmsKeyName?: string | undefined;
}
export interface DiskEncryptionStatus {
	readonly kind?: string | undefined;
	readonly kmsKeyVersionName?: string | undefined;
}
export interface IpConfiguration {
	readonly authorizedNetworks?: AclEntry[] | undefined;
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
	readonly hostPort?: string | undefined;
	readonly kind?: string | undefined;
}
export interface ReplicaConfiguration {
	readonly failoverTarget?: boolean | undefined;
	readonly kind?: string | undefined;
	readonly mysqlReplicaConfiguration?: MySqlReplicaConfiguration | undefined;
}
export interface Settings {
	readonly activationPolicy?: string | undefined;
	readonly authorizedGaeApplications?: string[] | undefined;
	readonly availabilityType?: string | undefined;
	readonly backupConfiguration?: BackupConfiguration | undefined;
	readonly crashSafeReplicationEnabled?: boolean | undefined;
	readonly databaseFlags?: DatabaseFlags[] | undefined;
	readonly databaseReplicationEnabled?: boolean | undefined;
	readonly dataDiskSizeGb?: string | undefined;
	readonly dataDiskType?: string | undefined;
	readonly ipConfiguration?: IpConfiguration | undefined;
	readonly kind?: string | undefined;
	readonly locationPreference?: LocationPreference | undefined;
	readonly maintenanceWindow?: MaintenanceWindow | undefined;
	readonly pricingPlan?: string | undefined;
	readonly replicationType?: string | undefined;
	readonly settingsVersion?: string | undefined;
	readonly storageAutoResize?: boolean | undefined;
	readonly storageAutoResizeLimit?: string | undefined;
	readonly tier?: string | undefined;
	readonly userLabels?: { [P in string]: string } | undefined;
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
	Instances: Instances,
};
