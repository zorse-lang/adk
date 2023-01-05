import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class AccessPoint extends CfnResource<AccessPointComponentInputs> implements AccessPointComponentOutputs {
	constructor(entity: ADKEntity, options: AccessPointComponentInputs) {
		super(entity, options.LogicalId, "AWS::EFS::AccessPoint", options);
	}
	public readonly AccessPointId: string;
	public readonly Arn: string;
}
export interface AccessPointComponentOutputs {
	readonly AccessPointId: string;
	readonly Arn: string;
}
export interface AccessPointComponentInputs {
	readonly FileSystemId: string;
	readonly AccessPointTags?: AccessPointTag[] | undefined;
	readonly ClientToken?: string | undefined;
	readonly PosixUser?: PosixUser | undefined;
	readonly RootDirectory?: RootDirectory | undefined;
	readonly LogicalId: string;
}
export class FileSystem extends CfnResource<FileSystemComponentInputs> implements FileSystemComponentOutputs {
	constructor(entity: ADKEntity, options: FileSystemComponentInputs) {
		super(entity, options.LogicalId, "AWS::EFS::FileSystem", options);
	}
	public readonly Arn: string;
	public readonly FileSystemId: string;
}
export interface FileSystemComponentOutputs {
	readonly Arn: string;
	readonly FileSystemId: string;
}
export interface FileSystemComponentInputs {
	readonly AvailabilityZoneName?: string | undefined;
	readonly BackupPolicy?: BackupPolicy | undefined;
	readonly BypassPolicyLockoutSafetyCheck?: boolean | undefined;
	readonly Encrypted?: boolean | undefined;
	readonly FileSystemPolicy?: any | undefined;
	readonly FileSystemTags?: ElasticFileSystemTag[] | undefined;
	readonly KmsKeyId?: string | undefined;
	readonly LifecyclePolicies?: LifecyclePolicy[] | undefined;
	readonly PerformanceMode?: string | undefined;
	readonly ProvisionedThroughputInMibps?: number | undefined;
	readonly ThroughputMode?: string | undefined;
	readonly LogicalId: string;
}
export class MountTarget extends CfnResource<MountTargetComponentInputs> implements MountTargetComponentOutputs {
	constructor(entity: ADKEntity, options: MountTargetComponentInputs) {
		super(entity, options.LogicalId, "AWS::EFS::MountTarget", options);
	}
	public readonly Id: string;
}
export interface MountTargetComponentOutputs {
	readonly Id: string;
}
export interface MountTargetComponentInputs {
	readonly FileSystemId: string;
	readonly SecurityGroups: string[];
	readonly SubnetId: string;
	readonly IpAddress?: string;
	readonly LogicalId: string;
}
export interface AccessPointTag {
	readonly Key?: string | undefined;
	readonly Value?: string | undefined;
}
export interface CreationInfo {
	readonly OwnerGid: string;
	readonly OwnerUid: string;
	readonly Permissions: string;
}
export interface PosixUser {
	readonly Gid: string;
	readonly SecondaryGids?: string[] | undefined;
	readonly Uid: string;
}
export interface RootDirectory {
	readonly CreationInfo?: CreationInfo | undefined;
	readonly Path?: string | undefined;
}
export interface BackupPolicy {
	readonly Status: string;
}
export interface ElasticFileSystemTag {
	readonly Key: string;
	readonly Value: string;
}
export interface LifecyclePolicy {
	readonly TransitionToIA?: string | undefined;
	readonly TransitionToPrimaryStorageClass?: string | undefined;
}
export default {
	AccessPoint: AccessPoint,
	FileSystem: FileSystem,
	MountTarget: MountTarget,
};
