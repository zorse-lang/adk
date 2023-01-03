import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class UserVpcAuthorization
	extends RosResource<UserVpcAuthorizationComponentInputs>
	implements UserVpcAuthorizationComponentOutputs
{
	constructor(entity: ADKEntity, options: UserVpcAuthorizationComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::PVTZ::UserVpcAuthorization", options);
	}
}
export interface UserVpcAuthorizationComponentOutputs {}
export interface UserVpcAuthorizationComponentInputs {
	readonly AuthorizedUserId: any | string;
	readonly AuthChannel?: (string | undefined) | undefined;
	readonly AuthCode?: (string | undefined) | undefined;
	readonly AuthType?: (any | string) | undefined;
	readonly IgnoreDeletionForbidden?: (boolean | undefined) | undefined;
	readonly LogicalId: string;
}
export class Zone extends RosResource<ZoneComponentInputs> implements ZoneComponentOutputs {
	constructor(entity: ADKEntity, options: ZoneComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::PVTZ::Zone", options);
	}
	public readonly ZoneId: any;
}
export interface ZoneComponentOutputs {
	readonly ZoneId: any;
}
export interface ZoneComponentInputs {
	readonly ZoneName: any | string;
	readonly IgnoredStackTagKeys?: (string[] | undefined) | undefined;
	readonly ProxyPattern?: (string | undefined) | undefined;
	readonly Remark?: (string | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly ZoneTag?: (any | string) | undefined;
	readonly ZoneType?: (any | string) | undefined;
	readonly LogicalId: string;
}
export class ZoneRecord extends RosResource<ZoneRecordComponentInputs> implements ZoneRecordComponentOutputs {
	constructor(entity: ADKEntity, options: ZoneRecordComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::PVTZ::ZoneRecord", options);
	}
	public readonly Record: any;
	public readonly RecordId: any;
}
export interface ZoneRecordComponentOutputs {
	readonly Record: any;
	readonly RecordId: any;
}
export interface ZoneRecordComponentInputs {
	readonly Rr: string;
	readonly Status: string;
	readonly Type: string;
	readonly Value: string;
	readonly ZoneId: any | string;
	readonly Priority?: (number | undefined) | undefined;
	readonly Ttl?: (number | undefined) | undefined;
	readonly LogicalId: string;
}
export class ZoneVpcBinder extends RosResource<ZoneVpcBinderComponentInputs> implements ZoneVpcBinderComponentOutputs {
	constructor(entity: ADKEntity, options: ZoneVpcBinderComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::PVTZ::ZoneVpcBinder", options);
	}
}
export interface ZoneVpcBinderComponentOutputs {}
export interface ZoneVpcBinderComponentInputs {
	readonly Vpcs: Vpcs[] | any;
	readonly ZoneId: any | string;
	readonly LogicalId: string;
}
export interface Tags {
	readonly Value?: (string | undefined) | undefined;
	readonly Key: string;
}
export interface Vpcs {
	readonly VpcId: string;
	readonly RegionId: string;
}
export default {
	UserVpcAuthorization: UserVpcAuthorization,
	Zone: Zone,
	ZoneRecord: ZoneRecord,
	ZoneVpcBinder: ZoneVpcBinder,
};
