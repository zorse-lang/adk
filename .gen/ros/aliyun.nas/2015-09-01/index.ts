import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class AccessGroup extends RosResource<AccessGroupComponentInputs> implements AccessGroupComponentOutputs {
	constructor(entity: ADKEntity, options: AccessGroupComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::NAS::AccessGroup", options);
	}
}
export interface AccessGroupComponentOutputs {}
export interface AccessGroupComponentInputs {
	readonly AccessGroupName: any | string;
	readonly AccessGroupType: string;
	readonly Description?: string | undefined;
	readonly FileSystemType?: string | undefined;
	readonly LogicalId: string;
}
export class AccessRule extends RosResource<AccessRuleComponentInputs> implements AccessRuleComponentOutputs {
	constructor(entity: ADKEntity, options: AccessRuleComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::NAS::AccessRule", options);
	}
	public readonly AccessRuleId: any;
}
export interface AccessRuleComponentOutputs {
	readonly AccessRuleId: any;
}
export interface AccessRuleComponentInputs {
	readonly AccessGroupName: string;
	readonly SourceCidrIp: string;
	readonly Priority?: number | undefined;
	readonly RWAccessType?: string | undefined;
	readonly UserAccessType?: string | undefined;
	readonly LogicalId: string;
}
export class FileSystem extends RosResource<FileSystemComponentInputs> implements FileSystemComponentOutputs {
	constructor(entity: ADKEntity, options: FileSystemComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::NAS::FileSystem", options);
	}
	public readonly FileSystemId: any;
}
export interface FileSystemComponentOutputs {
	readonly FileSystemId: any;
}
export interface FileSystemComponentInputs {
	readonly ProtocolType: string;
	readonly StorageType: string;
	readonly Bandwidth?: number | undefined;
	readonly Capacity?: number | undefined;
	readonly ChargeType?: string | undefined;
	readonly DeletionForce?: boolean | undefined;
	readonly Description?: string | undefined;
	readonly Duration?: number | undefined;
	readonly EncryptType?: number | undefined;
	readonly FileSystemType?: string | undefined;
	readonly SnapshotId?: string | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly VpcId?: string | undefined;
	readonly VSwitchId?: string | undefined;
	readonly ZoneId?: string | undefined;
	readonly LogicalId: string;
}
export class MountTarget extends RosResource<MountTargetComponentInputs> implements MountTargetComponentOutputs {
	constructor(entity: ADKEntity, options: MountTargetComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::NAS::MountTarget", options);
	}
	public readonly MountTargetDomain: any;
}
export interface MountTargetComponentOutputs {
	readonly MountTargetDomain: any;
}
export interface MountTargetComponentInputs {
	readonly AccessGroupName: string;
	readonly FileSystemId: string;
	readonly NetworkType: string;
	readonly Status?: string | undefined;
	readonly VpcId?: string | undefined;
	readonly VSwitchId?: string | undefined;
	readonly LogicalId: string;
}
export interface Tags {
	readonly Value?: string | undefined;
	readonly Key: string;
}
export default {
	AccessGroup: AccessGroup,
	AccessRule: AccessRule,
	FileSystem: FileSystem,
	MountTarget: MountTarget,
};
