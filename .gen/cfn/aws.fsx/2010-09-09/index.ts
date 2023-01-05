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
	readonly BatchImportMetaDataOnCreate?: boolean | undefined;
	readonly ImportedFileChunkSize?: number | undefined;
	readonly S3?: S3 | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly BackupId?: string | undefined;
	readonly FileSystemTypeVersion?: string | undefined;
	readonly KmsKeyId?: string | undefined;
	readonly LustreConfiguration?: LustreConfiguration | undefined;
	readonly OntapConfiguration?: OntapConfiguration | undefined;
	readonly OpenZFSConfiguration?: OpenZFSConfiguration | undefined;
	readonly SecurityGroupIds?: string[] | undefined;
	readonly StorageCapacity?: number | undefined;
	readonly StorageType?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly WindowsConfiguration?: WindowsConfiguration | undefined;
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
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly ActiveDirectoryConfiguration?: ActiveDirectoryConfiguration | undefined;
	readonly RootVolumeSecurityStyle?: string | undefined;
	readonly SvmAdminPassword?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly BackupId?: string | undefined;
	readonly OntapConfiguration?: OntapConfiguration | undefined;
	readonly OpenZFSConfiguration?: OpenZFSConfiguration | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly VolumeType?: string | undefined;
	readonly LogicalId: string;
}
export interface AutoExportPolicy {
	readonly Events: string[];
}
export interface AutoImportPolicy {
	readonly Events: string[];
}
export interface S3 {
	readonly AutoExportPolicy?: AutoExportPolicy | undefined;
	readonly AutoImportPolicy?: AutoImportPolicy | undefined;
}
export interface AuditLogConfiguration {
	readonly AuditLogDestination?: string | undefined;
	readonly FileAccessAuditLogLevel: string;
	readonly FileShareAccessAuditLogLevel: string;
}
export interface ClientConfigurations {
	readonly Clients?: string | undefined;
	readonly Options?: string[] | undefined;
}
export interface DiskIopsConfiguration {
	readonly Iops?: number | undefined;
	readonly Mode?: string | undefined;
}
export interface LustreConfiguration {
	readonly AutoImportPolicy?: string | undefined;
	readonly AutomaticBackupRetentionDays?: number | undefined;
	readonly CopyTagsToBackups?: boolean | undefined;
	readonly DailyAutomaticBackupStartTime?: string | undefined;
	readonly DataCompressionType?: string | undefined;
	readonly DeploymentType?: string | undefined;
	readonly DriveCacheType?: string | undefined;
	readonly ExportPath?: string | undefined;
	readonly ImportPath?: string | undefined;
	readonly ImportedFileChunkSize?: number | undefined;
	readonly PerUnitStorageThroughput?: number | undefined;
	readonly WeeklyMaintenanceStartTime?: string | undefined;
}
export interface NfsExports {
	readonly ClientConfigurations?: ClientConfigurations[] | undefined;
}
export interface OntapConfiguration {
	readonly AutomaticBackupRetentionDays?: number | undefined;
	readonly DailyAutomaticBackupStartTime?: string | undefined;
	readonly DeploymentType: string;
	readonly DiskIopsConfiguration?: DiskIopsConfiguration | undefined;
	readonly EndpointIpAddressRange?: string | undefined;
	readonly FsxAdminPassword?: string | undefined;
	readonly PreferredSubnetId?: string | undefined;
	readonly RouteTableIds?: string[] | undefined;
	readonly ThroughputCapacity?: number | undefined;
	readonly WeeklyMaintenanceStartTime?: string | undefined;
}
export interface OpenZFSConfiguration {
	readonly AutomaticBackupRetentionDays?: number | undefined;
	readonly CopyTagsToBackups?: boolean | undefined;
	readonly CopyTagsToVolumes?: boolean | undefined;
	readonly DailyAutomaticBackupStartTime?: string | undefined;
	readonly DeploymentType: string;
	readonly DiskIopsConfiguration?: DiskIopsConfiguration | undefined;
	readonly Options?: string[] | undefined;
	readonly RootVolumeConfiguration?: RootVolumeConfiguration | undefined;
	readonly ThroughputCapacity?: number | undefined;
	readonly WeeklyMaintenanceStartTime?: string | undefined;
}
export interface RootVolumeConfiguration {
	readonly CopyTagsToSnapshots?: boolean | undefined;
	readonly DataCompressionType?: string | undefined;
	readonly NfsExports?: NfsExports[] | undefined;
	readonly ReadOnly?: boolean | undefined;
	readonly RecordSizeKiB?: number | undefined;
	readonly UserAndGroupQuotas?: UserAndGroupQuotas[] | undefined;
}
export interface SelfManagedActiveDirectoryConfiguration {
	readonly DnsIps?: string[] | undefined;
	readonly DomainName?: string | undefined;
	readonly FileSystemAdministratorsGroup?: string | undefined;
	readonly OrganizationalUnitDistinguishedName?: string | undefined;
	readonly Password?: string | undefined;
	readonly UserName?: string | undefined;
}
export interface UserAndGroupQuotas {
	readonly Id?: number | undefined;
	readonly StorageCapacityQuotaGiB?: number | undefined;
	readonly Type?: string | undefined;
}
export interface WindowsConfiguration {
	readonly ActiveDirectoryId?: string | undefined;
	readonly Aliases?: string[] | undefined;
	readonly AuditLogConfiguration?: AuditLogConfiguration | undefined;
	readonly AutomaticBackupRetentionDays?: number | undefined;
	readonly CopyTagsToBackups?: boolean | undefined;
	readonly DailyAutomaticBackupStartTime?: string | undefined;
	readonly DeploymentType?: string | undefined;
	readonly PreferredSubnetId?: string | undefined;
	readonly SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfiguration | undefined;
	readonly ThroughputCapacity: number;
	readonly WeeklyMaintenanceStartTime?: string | undefined;
}
export interface ActiveDirectoryConfiguration {
	readonly NetBiosName?: string | undefined;
	readonly SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfiguration | undefined;
}
export interface OriginSnapshot {
	readonly CopyStrategy: string;
	readonly SnapshotARN: string;
}
export interface TieringPolicy {
	readonly CoolingPeriod?: number | undefined;
	readonly Name?: string | undefined;
}
export default {
	DataRepositoryAssociation: DataRepositoryAssociation,
	FileSystem: FileSystem,
	Snapshot: Snapshot,
	StorageVirtualMachine: StorageVirtualMachine,
	Volume: Volume,
};
