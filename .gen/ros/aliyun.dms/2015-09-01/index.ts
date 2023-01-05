import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Instance extends RosResource<InstanceComponentInputs> implements InstanceComponentOutputs {
	constructor(entity: ADKEntity, options: InstanceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::DMS::Instance", options);
	}
	public readonly InstanceId: any;
}
export interface InstanceComponentOutputs {
	readonly InstanceId: any;
}
export interface InstanceComponentInputs {
	readonly DatabasePassword: string;
	readonly DatabaseUser: string;
	readonly DbaUid: number;
	readonly EnvType: string;
	readonly ExportTimeout: number;
	readonly Host: any | string;
	readonly InstanceAlias: string;
	readonly InstanceSource: string;
	readonly InstanceType: string;
	readonly NetworkType: string;
	readonly Port: any | number;
	readonly QueryTimeout: number;
	readonly SafeRule: string;
	readonly Tid: number;
	readonly DataLinkName?: string | undefined;
	readonly DdlOnline?: number | undefined;
	readonly EcsInstanceId?: string | undefined;
	readonly EcsRegion?: string | undefined;
	readonly Sid?: string | undefined;
	readonly UseDsql?: number | undefined;
	readonly VpcId?: string | undefined;
	readonly LogicalId: string;
}
export class User extends RosResource<UserComponentInputs> implements UserComponentOutputs {
	constructor(entity: ADKEntity, options: UserComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::DMS::User", options);
	}
	public readonly UserId: any;
	public readonly RoleIds: any;
	public readonly ParentUid: any;
}
export interface UserComponentOutputs {
	readonly UserId: any;
	readonly RoleIds: any;
	readonly ParentUid: any;
}
export interface UserComponentInputs {
	readonly Uid: any | string;
	readonly Mobile?: any | string;
	readonly RoleNames?: any | string[];
	readonly Status?: string | undefined;
	readonly Tid?: string | undefined;
	readonly UserName?: any | string;
	readonly LogicalId: string;
}
export default {
	Instance: Instance,
	User: User,
};
