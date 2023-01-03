import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Instance extends RosResource<InstanceComponentInputs> implements InstanceComponentOutputs {
	constructor(entity: ADKEntity, options: InstanceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::Memcache::Instance", options);
	}
	public readonly ConnectionDomain: any;
	public readonly InstanceId: any;
	public readonly Qps: any;
	public readonly Port: any;
}
export interface InstanceComponentOutputs {
	readonly ConnectionDomain: any;
	readonly InstanceId: any;
	readonly Qps: any;
	readonly Port: any;
}
export interface InstanceComponentInputs {
	readonly AutoRenew?: (string | undefined) | undefined;
	readonly AutoRenewPeriod?: (string | undefined) | undefined;
	readonly AutoUseCoupon?: (string | undefined) | undefined;
	readonly BackupPolicy?: (BackupPolicy | undefined) | undefined;
	readonly Capacity?: (number | undefined) | undefined;
	readonly ChargeType?: (string | undefined) | undefined;
	readonly Config?: (string | undefined) | undefined;
	readonly CouponNo?: (string | undefined) | undefined;
	readonly InstanceClass?: (string | undefined) | undefined;
	readonly InstanceName?: (any | string) | undefined;
	readonly NetworkType?: (string | undefined) | undefined;
	readonly Password?: (string | undefined) | undefined;
	readonly Period?: (string | undefined) | undefined;
	readonly PrivateIpAddress?: (string | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly VpcId?: (string | undefined) | undefined;
	readonly VpcPasswordFree?: (boolean | undefined) | undefined;
	readonly VSwitchId?: (string | undefined) | undefined;
	readonly ZoneId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class Whitelist extends RosResource<WhitelistComponentInputs> implements WhitelistComponentOutputs {
	constructor(entity: ADKEntity, options: WhitelistComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::Memcache::Whitelist", options);
	}
}
export interface WhitelistComponentOutputs {}
export interface WhitelistComponentInputs {
	readonly InstanceId: string;
	readonly SecurityIps: any | string;
	readonly SecurityIpGroupAttribute?: (any | string) | undefined;
	readonly SecurityIpGroupName?: (any | string) | undefined;
	readonly LogicalId: string;
}
export interface BackupPolicy {
	readonly PreferredBackupPeriod: string;
	readonly PreferredBackupTime: string;
	readonly EnableBackupLog?: (number | undefined) | undefined;
}
export default {
	Instance: Instance,
	Whitelist: Whitelist,
};
