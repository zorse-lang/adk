import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class AccessGroup extends RosResource<AccessGroupComponentInputs> implements AccessGroupComponentOutputs {
	constructor(entity: ADKEntity, options: AccessGroupComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::DFS::AccessGroup", options);
	}
	public readonly AccessGroupId: any;
}
export interface AccessGroupComponentOutputs {
	readonly AccessGroupId: any;
}
export interface AccessGroupComponentInputs {
	readonly AccessGroupName?: string | undefined;
	readonly Description?: string | undefined;
	readonly NetworkType?: string | undefined;
	readonly LogicalId: string;
}
export class AccessRule extends RosResource<AccessRuleComponentInputs> implements AccessRuleComponentOutputs {
	constructor(entity: ADKEntity, options: AccessRuleComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::DFS::AccessRule", options);
	}
	public readonly AccessRuleId: any;
}
export interface AccessRuleComponentOutputs {
	readonly AccessRuleId: any;
}
export interface AccessRuleComponentInputs {
	readonly AccessGroupId: string;
	readonly NetworkSegment: string;
	readonly RWAccessType: string;
	readonly Description?: string | undefined;
	readonly Priority?: number | undefined;
	readonly LogicalId: string;
}
export class FileSystem extends RosResource<FileSystemComponentInputs> implements FileSystemComponentOutputs {
	constructor(entity: ADKEntity, options: FileSystemComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::DFS::FileSystem", options);
	}
	public readonly FileSystemId: any;
}
export interface FileSystemComponentOutputs {
	readonly FileSystemId: any;
}
export interface FileSystemComponentInputs {
	readonly ProtocolType: string;
	readonly SpaceCapacity: number;
	readonly StorageType: string;
	readonly ZoneId: string;
	readonly DataRedundancyType?: string | undefined;
	readonly Description?: string | undefined;
	readonly FileSystemName?: string | undefined;
	readonly PartitionNumber?: number | undefined;
	readonly ProvisionedThroughputInMiBps?: number | undefined;
	readonly StorageSetName?: string | undefined;
	readonly ThroughputMode?: string | undefined;
	readonly LogicalId: string;
}
export class MountPoint extends RosResource<MountPointComponentInputs> implements MountPointComponentOutputs {
	constructor(entity: ADKEntity, options: MountPointComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::DFS::MountPoint", options);
	}
	public readonly MountPointId: any;
}
export interface MountPointComponentOutputs {
	readonly MountPointId: any;
}
export interface MountPointComponentInputs {
	readonly AccessGroupId: string;
	readonly FileSystemId: string;
	readonly NetworkType: string;
	readonly VpcId: string;
	readonly VSwitchId: string;
	readonly Description?: string | undefined;
	readonly Status?: string | undefined;
	readonly LogicalId: string;
}
export default {
	AccessGroup: AccessGroup,
	AccessRule: AccessRule,
	FileSystem: FileSystem,
	MountPoint: MountPoint,
};
