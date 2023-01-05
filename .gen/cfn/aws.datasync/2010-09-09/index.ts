import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Agent extends CfnResource<AgentComponentInputs> implements AgentComponentOutputs {
	constructor(entity: ADKEntity, options: AgentComponentInputs) {
		super(entity, options.LogicalId, "AWS::DataSync::Agent", options);
	}
	public readonly AgentArn: string;
	public readonly EndpointType: string;
}
export interface AgentComponentOutputs {
	readonly AgentArn: string;
	readonly EndpointType: string;
}
export interface AgentComponentInputs {
	readonly ActivationKey: string;
	readonly AgentName?: string | undefined;
	readonly SecurityGroupArns?: string[] | undefined;
	readonly SubnetArns?: string[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly VpcEndpointId?: string | undefined;
	readonly LogicalId: string;
}
export class LocationEFS extends CfnResource<LocationEFSComponentInputs> implements LocationEFSComponentOutputs {
	constructor(entity: ADKEntity, options: LocationEFSComponentInputs) {
		super(entity, options.LogicalId, "AWS::DataSync::LocationEFS", options);
	}
	public readonly LocationArn: string;
	public readonly LocationUri: string;
}
export interface LocationEFSComponentOutputs {
	readonly LocationArn: string;
	readonly LocationUri: string;
}
export interface LocationEFSComponentInputs {
	readonly Ec2Config: Ec2Config;
	readonly EfsFilesystemArn: string;
	readonly AccessPointArn?: string | undefined;
	readonly FileSystemAccessRoleArn?: string | undefined;
	readonly InTransitEncryption?: string | undefined;
	readonly Subdirectory?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class LocationFSxLustre
	extends CfnResource<LocationFSxLustreComponentInputs>
	implements LocationFSxLustreComponentOutputs
{
	constructor(entity: ADKEntity, options: LocationFSxLustreComponentInputs) {
		super(entity, options.LogicalId, "AWS::DataSync::LocationFSxLustre", options);
	}
	public readonly LocationArn: string;
	public readonly LocationUri: string;
}
export interface LocationFSxLustreComponentOutputs {
	readonly LocationArn: string;
	readonly LocationUri: string;
}
export interface LocationFSxLustreComponentInputs {
	readonly FsxFilesystemArn: string;
	readonly SecurityGroupArns: string[];
	readonly Subdirectory?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class LocationFSxONTAP
	extends CfnResource<LocationFSxONTAPComponentInputs>
	implements LocationFSxONTAPComponentOutputs
{
	constructor(entity: ADKEntity, options: LocationFSxONTAPComponentInputs) {
		super(entity, options.LogicalId, "AWS::DataSync::LocationFSxONTAP", options);
	}
	public readonly FsxFilesystemArn: string;
	public readonly LocationArn: string;
	public readonly LocationUri: string;
}
export interface LocationFSxONTAPComponentOutputs {
	readonly FsxFilesystemArn: string;
	readonly LocationArn: string;
	readonly LocationUri: string;
}
export interface LocationFSxONTAPComponentInputs {
	readonly Protocol: Protocol;
	readonly SecurityGroupArns: string[];
	readonly StorageVirtualMachineArn: string;
	readonly Subdirectory?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class LocationFSxOpenZFS
	extends CfnResource<LocationFSxOpenZFSComponentInputs>
	implements LocationFSxOpenZFSComponentOutputs
{
	constructor(entity: ADKEntity, options: LocationFSxOpenZFSComponentInputs) {
		super(entity, options.LogicalId, "AWS::DataSync::LocationFSxOpenZFS", options);
	}
	public readonly LocationArn: string;
	public readonly LocationUri: string;
}
export interface LocationFSxOpenZFSComponentOutputs {
	readonly LocationArn: string;
	readonly LocationUri: string;
}
export interface LocationFSxOpenZFSComponentInputs {
	readonly FsxFilesystemArn: string;
	readonly Protocol: Protocol;
	readonly SecurityGroupArns: string[];
	readonly Subdirectory?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class LocationFSxWindows
	extends CfnResource<LocationFSxWindowsComponentInputs>
	implements LocationFSxWindowsComponentOutputs
{
	constructor(entity: ADKEntity, options: LocationFSxWindowsComponentInputs) {
		super(entity, options.LogicalId, "AWS::DataSync::LocationFSxWindows", options);
	}
	public readonly LocationArn: string;
	public readonly LocationUri: string;
}
export interface LocationFSxWindowsComponentOutputs {
	readonly LocationArn: string;
	readonly LocationUri: string;
}
export interface LocationFSxWindowsComponentInputs {
	readonly FsxFilesystemArn: string;
	readonly Password: string;
	readonly SecurityGroupArns: string[];
	readonly User: string;
	readonly Domain?: string | undefined;
	readonly Subdirectory?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class LocationHDFS extends CfnResource<LocationHDFSComponentInputs> implements LocationHDFSComponentOutputs {
	constructor(entity: ADKEntity, options: LocationHDFSComponentInputs) {
		super(entity, options.LogicalId, "AWS::DataSync::LocationHDFS", options);
	}
	public readonly LocationArn: string;
	public readonly LocationUri: string;
}
export interface LocationHDFSComponentOutputs {
	readonly LocationArn: string;
	readonly LocationUri: string;
}
export interface LocationHDFSComponentInputs {
	readonly AgentArns: string[];
	readonly AuthenticationType: string;
	readonly NameNodes: NameNode[];
	readonly BlockSize?: number | undefined;
	readonly KerberosKeytab?: string | undefined;
	readonly KerberosKrb5Conf?: string | undefined;
	readonly KerberosPrincipal?: string | undefined;
	readonly KmsKeyProviderUri?: string | undefined;
	readonly QopConfiguration?: QopConfiguration | undefined;
	readonly ReplicationFactor?: number | undefined;
	readonly SimpleUser?: string | undefined;
	readonly Subdirectory?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class LocationNFS extends CfnResource<LocationNFSComponentInputs> implements LocationNFSComponentOutputs {
	constructor(entity: ADKEntity, options: LocationNFSComponentInputs) {
		super(entity, options.LogicalId, "AWS::DataSync::LocationNFS", options);
	}
	public readonly LocationArn: string;
	public readonly LocationUri: string;
}
export interface LocationNFSComponentOutputs {
	readonly LocationArn: string;
	readonly LocationUri: string;
}
export interface LocationNFSComponentInputs {
	readonly OnPremConfig: OnPremConfig;
	readonly ServerHostname: string;
	readonly Subdirectory: string;
	readonly MountOptions?: MountOptions | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class LocationObjectStorage
	extends CfnResource<LocationObjectStorageComponentInputs>
	implements LocationObjectStorageComponentOutputs
{
	constructor(entity: ADKEntity, options: LocationObjectStorageComponentInputs) {
		super(entity, options.LogicalId, "AWS::DataSync::LocationObjectStorage", options);
	}
	public readonly LocationArn: string;
	public readonly LocationUri: string;
}
export interface LocationObjectStorageComponentOutputs {
	readonly LocationArn: string;
	readonly LocationUri: string;
}
export interface LocationObjectStorageComponentInputs {
	readonly AgentArns: string[];
	readonly BucketName: string;
	readonly ServerHostname: string;
	readonly AccessKey?: string | undefined;
	readonly SecretKey?: string | undefined;
	readonly ServerPort?: number | undefined;
	readonly ServerProtocol?: string | undefined;
	readonly Subdirectory?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class LocationS3 extends CfnResource<LocationS3ComponentInputs> implements LocationS3ComponentOutputs {
	constructor(entity: ADKEntity, options: LocationS3ComponentInputs) {
		super(entity, options.LogicalId, "AWS::DataSync::LocationS3", options);
	}
	public readonly LocationArn: string;
	public readonly LocationUri: string;
}
export interface LocationS3ComponentOutputs {
	readonly LocationArn: string;
	readonly LocationUri: string;
}
export interface LocationS3ComponentInputs {
	readonly S3BucketArn: string;
	readonly S3Config: S3Config;
	readonly S3StorageClass?: string | undefined;
	readonly Subdirectory?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class LocationSMB extends CfnResource<LocationSMBComponentInputs> implements LocationSMBComponentOutputs {
	constructor(entity: ADKEntity, options: LocationSMBComponentInputs) {
		super(entity, options.LogicalId, "AWS::DataSync::LocationSMB", options);
	}
	public readonly LocationArn: string;
	public readonly LocationUri: string;
}
export interface LocationSMBComponentOutputs {
	readonly LocationArn: string;
	readonly LocationUri: string;
}
export interface LocationSMBComponentInputs {
	readonly AgentArns: string[];
	readonly Password: string;
	readonly ServerHostname: string;
	readonly Subdirectory: string;
	readonly User: string;
	readonly Domain?: string | undefined;
	readonly MountOptions?: MountOptions | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Task extends CfnResource<TaskComponentInputs> implements TaskComponentOutputs {
	constructor(entity: ADKEntity, options: TaskComponentInputs) {
		super(entity, options.LogicalId, "AWS::DataSync::Task", options);
	}
	public readonly DestinationNetworkInterfaceArns: string[];
	public readonly ErrorCode: string;
	public readonly ErrorDetail: string;
	public readonly SourceNetworkInterfaceArns: string[];
	public readonly Status: string;
	public readonly TaskArn: string;
}
export interface TaskComponentOutputs {
	readonly DestinationNetworkInterfaceArns: string[];
	readonly ErrorCode: string;
	readonly ErrorDetail: string;
	readonly SourceNetworkInterfaceArns: string[];
	readonly Status: string;
	readonly TaskArn: string;
}
export interface TaskComponentInputs {
	readonly DestinationLocationArn: string;
	readonly SourceLocationArn: string;
	readonly CloudWatchLogGroupArn?: string | undefined;
	readonly Excludes?: FilterRule[] | undefined;
	readonly Includes?: FilterRule[] | undefined;
	readonly Name?: string | undefined;
	readonly Options?: Options | undefined;
	readonly Schedule?: TaskSchedule | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface Ec2Config {
	readonly SecurityGroupArns: string[];
	readonly SubnetArn: string;
}
export interface NFS {
	readonly MountOptions: NfsMountOptions;
}
export interface NfsMountOptions {
	readonly Version?: string | undefined;
}
export interface Protocol {
	readonly NFS?: NFS | undefined;
	readonly SMB?: SMB | undefined;
}
export interface SMB {
	readonly Domain?: string | undefined;
	readonly MountOptions: SmbMountOptions;
	readonly Password: string;
	readonly User: string;
}
export interface SmbMountOptions {
	readonly Version?: string | undefined;
}
export interface MountOptions {
	readonly Version?: string | undefined;
}
export interface NameNode {
	readonly Hostname: string;
	readonly Port: number;
}
export interface QopConfiguration {
	readonly DataTransferProtection?: string | undefined;
	readonly RpcProtection?: string | undefined;
}
export interface OnPremConfig {
	readonly AgentArns: string[];
}
export interface S3Config {
	readonly BucketAccessRoleArn: string;
}
export interface FilterRule {
	readonly FilterType?: string | undefined;
	readonly Value?: string | undefined;
}
export interface Options {
	readonly Atime?: string | undefined;
	readonly BytesPerSecond?: number | undefined;
	readonly Gid?: string | undefined;
	readonly LogLevel?: string | undefined;
	readonly Mtime?: string | undefined;
	readonly ObjectTags?: string | undefined;
	readonly OverwriteMode?: string | undefined;
	readonly PosixPermissions?: string | undefined;
	readonly PreserveDeletedFiles?: string | undefined;
	readonly PreserveDevices?: string | undefined;
	readonly SecurityDescriptorCopyFlags?: string | undefined;
	readonly TaskQueueing?: string | undefined;
	readonly TransferMode?: string | undefined;
	readonly Uid?: string | undefined;
	readonly VerifyMode?: string | undefined;
}
export interface TaskSchedule {
	readonly ScheduleExpression: string;
}
export default {
	Agent: Agent,
	LocationEFS: LocationEFS,
	LocationFSxLustre: LocationFSxLustre,
	LocationFSxONTAP: LocationFSxONTAP,
	LocationFSxOpenZFS: LocationFSxOpenZFS,
	LocationFSxWindows: LocationFSxWindows,
	LocationHDFS: LocationHDFS,
	LocationNFS: LocationNFS,
	LocationObjectStorage: LocationObjectStorage,
	LocationS3: LocationS3,
	LocationSMB: LocationSMB,
	Task: Task,
};
