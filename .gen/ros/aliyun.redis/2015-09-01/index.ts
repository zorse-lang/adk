import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Account extends RosResource<AccountComponentInputs> implements AccountComponentOutputs {
	constructor(entity: ADKEntity, options: AccountComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::REDIS::Account", options);
	}
}
export interface AccountComponentOutputs {}
export interface AccountComponentInputs {
	readonly AccountName: any | string;
	readonly AccountPassword: string;
	readonly InstanceId: any | string;
	readonly AccountDescription?: (string | undefined) | undefined;
	readonly AccountPrivilege?: (string | undefined) | undefined;
	readonly AccountType?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class Instance extends RosResource<InstanceComponentInputs> implements InstanceComponentOutputs {
	constructor(entity: ADKEntity, options: InstanceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::REDIS::Instance", options);
	}
	public readonly DirectConnectionPort: any;
	public readonly Port: any;
	public readonly VpcPrivateConnectionString: any;
	public readonly HasRenewChangeOrder: any;
	public readonly ConnectionDomain: any;
	public readonly Capacity: any;
	public readonly Qps: any;
	public readonly PrivateIp: any;
	public readonly NetworkType: any;
	public readonly PackageType: any;
	public readonly Bandwidth: any;
	public readonly PublicConnectionString: any;
	public readonly InstanceType: any;
	public readonly ArchitectureType: any;
	public readonly InstanceId: any;
	public readonly ClassicInnerConnectionPort: any;
	public readonly ClassicInnerConnectionString: any;
	public readonly VpcPrivateConnectionPort: any;
	public readonly OrderId: any;
	public readonly PublicConnectionPort: any;
	public readonly NodeType: any;
	public readonly DirectConnectionString: any;
}
export interface InstanceComponentOutputs {
	readonly DirectConnectionPort: any;
	readonly Port: any;
	readonly VpcPrivateConnectionString: any;
	readonly HasRenewChangeOrder: any;
	readonly ConnectionDomain: any;
	readonly Capacity: any;
	readonly Qps: any;
	readonly PrivateIp: any;
	readonly NetworkType: any;
	readonly PackageType: any;
	readonly Bandwidth: any;
	readonly PublicConnectionString: any;
	readonly InstanceType: any;
	readonly ArchitectureType: any;
	readonly InstanceId: any;
	readonly ClassicInnerConnectionPort: any;
	readonly ClassicInnerConnectionString: any;
	readonly VpcPrivateConnectionPort: any;
	readonly OrderId: any;
	readonly PublicConnectionPort: any;
	readonly NodeType: any;
	readonly DirectConnectionString: any;
}
export interface InstanceComponentInputs {
	readonly AutoRenewDuration?: (number | undefined) | undefined;
	readonly BackupPolicy?: (BackupPolicy | undefined) | undefined;
	readonly ChargeType?: (any | string) | undefined;
	readonly Connections?: (Connections | any) | undefined;
	readonly DeletionForce?: (boolean | undefined) | undefined;
	readonly EngineVersion?: (any | string) | undefined;
	readonly EvictionPolicy?: (string | undefined) | undefined;
	readonly InstanceClass?: (any | string) | undefined;
	readonly InstanceMaintainTime?: (InstanceMaintainTime | undefined) | undefined;
	readonly InstanceName?: (any | string) | undefined;
	readonly Password?: (string | undefined) | undefined;
	readonly Period?: (number | undefined) | undefined;
	readonly PeriodUnit?: (string | undefined) | undefined;
	readonly ProductType?: (string | undefined) | undefined;
	readonly ResourceGroupId?: (any | string) | undefined;
	readonly SecondaryZoneId?: (string | undefined) | undefined;
	readonly SecurityGroupId?: (string | undefined) | undefined;
	readonly SSLEnabled?: (string | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly VpcId?: (any | string) | undefined;
	readonly VpcPasswordFree?: (boolean | undefined) | undefined;
	readonly VSwitchId?: (any | string) | undefined;
	readonly ZoneId?: (any | string) | undefined;
	readonly LogicalId: string;
}
export class PrepayInstance extends RosResource<PrepayInstanceComponentInputs> implements PrepayInstanceComponentOutputs {
	constructor(entity: ADKEntity, options: PrepayInstanceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::REDIS::PrepayInstance", options);
	}
	public readonly DirectConnectionPort: any;
	public readonly Port: any;
	public readonly VpcPrivateConnectionString: any;
	public readonly HasRenewChangeOrder: any;
	public readonly ConnectionDomain: any;
	public readonly Capacity: any;
	public readonly Qps: any;
	public readonly PrivateIp: any;
	public readonly NetworkType: any;
	public readonly PackageType: any;
	public readonly Bandwidth: any;
	public readonly PublicConnectionString: any;
	public readonly InstanceType: any;
	public readonly ArchitectureType: any;
	public readonly InstanceId: any;
	public readonly ClassicInnerConnectionPort: any;
	public readonly ClassicInnerConnectionString: any;
	public readonly VpcPrivateConnectionPort: any;
	public readonly OrderId: any;
	public readonly PublicConnectionPort: any;
	public readonly ChargeType: any;
	public readonly NodeType: any;
	public readonly DirectConnectionString: any;
}
export interface PrepayInstanceComponentOutputs {
	readonly DirectConnectionPort: any;
	readonly Port: any;
	readonly VpcPrivateConnectionString: any;
	readonly HasRenewChangeOrder: any;
	readonly ConnectionDomain: any;
	readonly Capacity: any;
	readonly Qps: any;
	readonly PrivateIp: any;
	readonly NetworkType: any;
	readonly PackageType: any;
	readonly Bandwidth: any;
	readonly PublicConnectionString: any;
	readonly InstanceType: any;
	readonly ArchitectureType: any;
	readonly InstanceId: any;
	readonly ClassicInnerConnectionPort: any;
	readonly ClassicInnerConnectionString: any;
	readonly VpcPrivateConnectionPort: any;
	readonly OrderId: any;
	readonly PublicConnectionPort: any;
	readonly ChargeType: any;
	readonly NodeType: any;
	readonly DirectConnectionString: any;
}
export interface PrepayInstanceComponentInputs {
	readonly AutoPay?: (boolean | undefined) | undefined;
	readonly AutoRenewDuration?: (number | undefined) | undefined;
	readonly BackupPolicy?: (BackupPolicy | undefined) | undefined;
	readonly Connections?: (Connections | any) | undefined;
	readonly DeletionForce?: (boolean | undefined) | undefined;
	readonly EngineVersion?: (any | string) | undefined;
	readonly EvictionPolicy?: (string | undefined) | undefined;
	readonly InstanceClass?: (any | string) | undefined;
	readonly InstanceMaintainTime?: (InstanceMaintainTime | undefined) | undefined;
	readonly InstanceName?: (any | string) | undefined;
	readonly Password?: (string | undefined) | undefined;
	readonly Period?: (number | undefined) | undefined;
	readonly PeriodUnit?: (string | undefined) | undefined;
	readonly ProductType?: (string | undefined) | undefined;
	readonly ResourceGroupId?: (any | string) | undefined;
	readonly SecondaryZoneId?: (string | undefined) | undefined;
	readonly SecurityGroupId?: (string | undefined) | undefined;
	readonly SSLEnabled?: (string | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly VpcId?: (any | string) | undefined;
	readonly VpcPasswordFree?: (boolean | undefined) | undefined;
	readonly VSwitchId?: (any | string) | undefined;
	readonly ZoneId?: (any | string) | undefined;
	readonly LogicalId: string;
}
export class Whitelist extends RosResource<WhitelistComponentInputs> implements WhitelistComponentOutputs {
	constructor(entity: ADKEntity, options: WhitelistComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::REDIS::Whitelist", options);
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
export interface ClassicInnerConnection {
	readonly ConnectionPort: number;
	readonly ConnectionString: string;
}
export interface Connections {
	readonly VpcPrivateConnection?: (VpcPrivateConnection | undefined) | undefined;
	readonly PublicConnection?: (PublicConnection | undefined) | undefined;
	readonly DirectConnection?: (DirectConnection | undefined) | undefined;
	readonly ClassicInnerConnection?: (ClassicInnerConnection | undefined) | undefined;
}
export interface DirectConnection {
	readonly ConnectionPort: number;
	readonly ConnectionString: string;
}
export interface InstanceMaintainTime {
	readonly MaintainEndTime?: (string | undefined) | undefined;
	readonly MaintainStartTime?: (string | undefined) | undefined;
}
export interface PublicConnection {
	readonly ConnectionPort: number;
	readonly ConnectionString: string;
}
export interface Tags {
	readonly Value?: (string | undefined) | undefined;
	readonly Key: string;
}
export interface VpcPrivateConnection {
	readonly ConnectionPort: number;
	readonly ConnectionString: string;
}
export default {
	Account: Account,
	Instance: Instance,
	PrepayInstance: PrepayInstance,
	Whitelist: Whitelist,
};
