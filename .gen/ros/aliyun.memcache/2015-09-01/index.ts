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
	readonly AutoRenew?: string | undefined;
	readonly AutoRenewPeriod?: string | undefined;
	readonly AutoUseCoupon?: string | undefined;
	readonly BackupPolicy?: BackupPolicy | undefined;
	readonly Capacity?: number | undefined;
	readonly ChargeType?: string | undefined;
	readonly Config?: string | undefined;
	readonly CouponNo?: string | undefined;
	readonly InstanceClass?: string | undefined;
	readonly InstanceName?: any | string;
	readonly NetworkType?: string | undefined;
	readonly Password?: string | undefined;
	readonly Period?: string | undefined;
	readonly PrivateIpAddress?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly VpcId?: string | undefined;
	readonly VpcPasswordFree?: boolean | undefined;
	readonly VSwitchId?: string | undefined;
	readonly ZoneId?: string | undefined;
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
	readonly SecurityIpGroupAttribute?: any | string;
	readonly SecurityIpGroupName?: any | string;
	readonly LogicalId: string;
}
export interface BackupPolicy {
	readonly PreferredBackupPeriod: string;
	readonly PreferredBackupTime: string;
	readonly EnableBackupLog?: number | undefined;
}
export default {
	Instance: Instance,
	Whitelist: Whitelist,
};
