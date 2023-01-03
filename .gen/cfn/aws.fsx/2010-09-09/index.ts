import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class DataRepositoryAssociation
	extends CfnResource<DataRepositoryAssociationComponentInputs>
	implements DataRepositoryAssociationComponentOutputs
{
	constructor(entity: ADKEntity, options: DataRepositoryAssociationComponentInputs) {
		super(entity, options.LogicalId, "AWS::FSx::DataRepositoryAssociation", options);
	}
	public readonly AssociationId: string;
	public readonly ResourceArn: string;
}
export interface DataRepositoryAssociationComponentOutputs {
	readonly AssociationId: string;
	readonly ResourceArn: string;
}
export interface DataRepositoryAssociationComponentInputs {
	readonly DataRepositoryPath: string;
	readonly FileSystemId: string;
	readonly FileSystemPath: string;
	readonly BatchImportMetaDataOnCreate?: (boolean | undefined) | undefined;
	readonly ImportedFileChunkSize?: (number | undefined) | undefined;
	readonly S3?: (S3 | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class FileSystem extends CfnResource<FileSystemComponentInputs> implements FileSystemComponentOutputs {
	constructor(entity: ADKEntity, options: FileSystemComponentInputs) {
		super(entity, options.LogicalId, "AWS::FSx::FileSystem", options);
	}
	public readonly DnsName: string;
	public readonly LustreMountName: string;
	public readonly RootVolumeId: string;
}
export interface FileSystemComponentOutputs {
	readonly DnsName: string;
	readonly LustreMountName: string;
	readonly RootVolumeId: string;
}
export interface FileSystemComponentInputs {
	readonly FileSystemType: string;
	readonly SubnetIds: string[];
	readonly BackupId?: (string | undefined) | undefined;
	readonly FileSystemTypeVersion?: (string | undefined) | undefined;
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly LustreConfiguration?: (LustreConfiguration | undefined) | undefined;
	readonly OntapConfiguration?: (OntapConfiguration | undefined) | undefined;
	readonly OpenZFSConfiguration?: (OpenZFSConfiguration | undefined) | undefined;
	readonly SecurityGroupIds?: (string[] | undefined) | undefined;
	readonly StorageCapacity?: (number | undefined) | undefined;
	readonly StorageType?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly WindowsConfiguration?: (WindowsConfiguration | undefined) | undefined;
	readonly LogicalId: string;
}
export class Snapshot extends CfnResource<SnapshotComponentInputs> implements SnapshotComponentOutputs {
	constructor(entity: ADKEntity, options: SnapshotComponentInputs) {
		super(entity, options.LogicalId, "AWS::FSx::Snapshot", options);
	}
	public readonly ResourceArn: string;
}
export interface SnapshotComponentOutputs {
	readonly ResourceArn: string;
}
export interface SnapshotComponentInputs {
	readonly Name: string;
	readonly VolumeId: string;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class StorageVirtualMachine
	extends CfnResource<StorageVirtualMachineComponentInputs>
	implements StorageVirtualMachineComponentOutputs
{
	constructor(entity: ADKEntity, options: StorageVirtualMachineComponentInputs) {
		super(entity, options.LogicalId, "AWS::FSx::StorageVirtualMachine", options);
	}
	public readonly ResourceArn: string;
	public readonly StorageVirtualMachineId: string;
	public readonly Uuid: string;
}
export interface StorageVirtualMachineComponentOutputs {
	readonly ResourceArn: string;
	readonly StorageVirtualMachineId: string;
	readonly Uuid: string;
}
export interface StorageVirtualMachineComponentInputs {
	readonly FileSystemId: string;
	readonly Name: string;
	readonly ActiveDirectoryConfiguration?: (ActiveDirectoryConfiguration | undefined) | undefined;
	readonly RootVolumeSecurityStyle?: (string | undefined) | undefined;
	readonly SvmAdminPassword?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Volume extends CfnResource<VolumeComponentInputs> implements VolumeComponentOutputs {
	constructor(entity: ADKEntity, options: VolumeComponentInputs) {
		super(entity, options.LogicalId, "AWS::FSx::Volume", options);
	}
	public readonly ResourceArn: string;
	public readonly Uuid: string;
	public readonly VolumeId: string;
}
export interface VolumeComponentOutputs {
	readonly ResourceArn: string;
	readonly Uuid: string;
	readonly VolumeId: string;
}
export interface VolumeComponentInputs {
	readonly Name: string;
	readonly BackupId?: (string | undefined) | undefined;
	readonly OntapConfiguration?: (OntapConfiguration | undefined) | undefined;
	readonly OpenZFSConfiguration?: (OpenZFSConfiguration | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly VolumeType?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface AutoExportPolicy {
	readonly Events: string[];
}
export interface AutoImportPolicy {
	readonly Events: string[];
}
export interface S3 {
	readonly AutoExportPolicy?: (AutoExportPolicy | undefined) | undefined;
	readonly AutoImportPolicy?: (AutoImportPolicy | undefined) | undefined;
}
export interface AuditLogConfiguration {
	readonly AuditLogDestination?: (string | undefined) | undefined;
	readonly FileAccessAuditLogLevel: string;
	readonly FileShareAccessAuditLogLevel: string;
}
export interface ClientConfigurations {
	readonly Clients?: (string | undefined) | undefined;
	readonly Options?: (string[] | undefined) | undefined;
}
export interface DiskIopsConfiguration {
	readonly Iops?: (number | undefined) | undefined;
	readonly Mode?: (string | undefined) | undefined;
}
export interface LustreConfiguration {
	readonly AutoImportPolicy?: (string | undefined) | undefined;
	readonly AutomaticBackupRetentionDays?: (number | undefined) | undefined;
	readonly CopyTagsToBackups?: (boolean | undefined) | undefined;
	readonly DailyAutomaticBackupStartTime?: (string | undefined) | undefined;
	readonly DataCompressionType?: (string | undefined) | undefined;
	readonly DeploymentType?: (string | undefined) | undefined;
	readonly DriveCacheType?: (string | undefined) | undefined;
	readonly ExportPath?: (string | undefined) | undefined;
	readonly ImportPath?: (string | undefined) | undefined;
	readonly ImportedFileChunkSize?: (number | undefined) | undefined;
	readonly PerUnitStorageThroughput?: (number | undefined) | undefined;
	readonly WeeklyMaintenanceStartTime?: (string | undefined) | undefined;
}
export interface NfsExports {
	readonly ClientConfigurations?: (ClientConfigurations[] | undefined) | undefined;
}
export interface OntapConfiguration {
	readonly AutomaticBackupRetentionDays?: (number | undefined) | undefined;
	readonly DailyAutomaticBackupStartTime?: (string | undefined) | undefined;
	readonly DeploymentType: string;
	readonly DiskIopsConfiguration?: (DiskIopsConfiguration | undefined) | undefined;
	readonly EndpointIpAddressRange?: (string | undefined) | undefined;
	readonly FsxAdminPassword?: (string | undefined) | undefined;
	readonly PreferredSubnetId?: (string | undefined) | undefined;
	readonly RouteTableIds?: (string[] | undefined) | undefined;
	readonly ThroughputCapacity?: (number | undefined) | undefined;
	readonly WeeklyMaintenanceStartTime?: (string | undefined) | undefined;
}
export interface OpenZFSConfiguration {
	readonly AutomaticBackupRetentionDays?: (number | undefined) | undefined;
	readonly CopyTagsToBackups?: (boolean | undefined) | undefined;
	readonly CopyTagsToVolumes?: (boolean | undefined) | undefined;
	readonly DailyAutomaticBackupStartTime?: (string | undefined) | undefined;
	readonly DeploymentType: string;
	readonly DiskIopsConfiguration?: (DiskIopsConfiguration | undefined) | undefined;
	readonly Options?: (string[] | undefined) | undefined;
	readonly RootVolumeConfiguration?: (RootVolumeConfiguration | undefined) | undefined;
	readonly ThroughputCapacity?: (number | undefined) | undefined;
	readonly WeeklyMaintenanceStartTime?: (string | undefined) | undefined;
}
export interface RootVolumeConfiguration {
	readonly CopyTagsToSnapshots?: (boolean | undefined) | undefined;
	readonly DataCompressionType?: (string | undefined) | undefined;
	readonly NfsExports?: (NfsExports[] | undefined) | undefined;
	readonly ReadOnly?: (boolean | undefined) | undefined;
	readonly RecordSizeKiB?: (number | undefined) | undefined;
	readonly UserAndGroupQuotas?: (UserAndGroupQuotas[] | undefined) | undefined;
}
export interface SelfManagedActiveDirectoryConfiguration {
	readonly DnsIps?: (string[] | undefined) | undefined;
	readonly DomainName?: (string | undefined) | undefined;
	readonly FileSystemAdministratorsGroup?: (string | undefined) | undefined;
	readonly OrganizationalUnitDistinguishedName?: (string | undefined) | undefined;
	readonly Password?: (string | undefined) | undefined;
	readonly UserName?: (string | undefined) | undefined;
}
export interface UserAndGroupQuotas {
	readonly Id?: (number | undefined) | undefined;
	readonly StorageCapacityQuotaGiB?: (number | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
}
export interface WindowsConfiguration {
	readonly ActiveDirectoryId?: (string | undefined) | undefined;
	readonly Aliases?: (string[] | undefined) | undefined;
	readonly AuditLogConfiguration?: (AuditLogConfiguration | undefined) | undefined;
	readonly AutomaticBackupRetentionDays?: (number | undefined) | undefined;
	readonly CopyTagsToBackups?: (boolean | undefined) | undefined;
	readonly DailyAutomaticBackupStartTime?: (string | undefined) | undefined;
	readonly DeploymentType?: (string | undefined) | undefined;
	readonly PreferredSubnetId?: (string | undefined) | undefined;
	readonly SelfManagedActiveDirectoryConfiguration?: (SelfManagedActiveDirectoryConfiguration | undefined) | undefined;
	readonly ThroughputCapacity: number;
	readonly WeeklyMaintenanceStartTime?: (string | undefined) | undefined;
}
export interface ActiveDirectoryConfiguration {
	readonly NetBiosName?: (string | undefined) | undefined;
	readonly SelfManagedActiveDirectoryConfiguration?: (SelfManagedActiveDirectoryConfiguration | undefined) | undefined;
}
export interface OriginSnapshot {
	readonly CopyStrategy: string;
	readonly SnapshotARN: string;
}
export interface TieringPolicy {
	readonly CoolingPeriod?: (number | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
}
export default {
	DataRepositoryAssociation: DataRepositoryAssociation,
	FileSystem: FileSystem,
	Snapshot: Snapshot,
	StorageVirtualMachine: StorageVirtualMachine,
	Volume: Volume,
};
