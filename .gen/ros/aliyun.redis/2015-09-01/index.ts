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
	readonly AccountDescription?: string | undefined;
	readonly AccountPrivilege?: string | undefined;
	readonly AccountType?: string | undefined;
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
	readonly AutoRenewDuration?: number | undefined;
	readonly BackupPolicy?: BackupPolicy | undefined;
	readonly ChargeType?: any | string;
	readonly Connections?: Connections | any;
	readonly DeletionForce?: boolean | undefined;
	readonly EngineVersion?: any | string;
	readonly EvictionPolicy?: string | undefined;
	readonly InstanceClass?: any | string;
	readonly InstanceMaintainTime?: InstanceMaintainTime | undefined;
	readonly InstanceName?: any | string;
	readonly Password?: string | undefined;
	readonly Period?: number | undefined;
	readonly PeriodUnit?: string | undefined;
	readonly ProductType?: string | undefined;
	readonly ResourceGroupId?: any | string;
	readonly SecondaryZoneId?: string | undefined;
	readonly SecurityGroupId?: string | undefined;
	readonly SSLEnabled?: string | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly VpcId?: any | string;
	readonly VpcPasswordFree?: boolean | undefined;
	readonly VSwitchId?: any | string;
	readonly ZoneId?: any | string;
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
	readonly AutoPay?: boolean | undefined;
	readonly AutoRenewDuration?: number | undefined;
	readonly BackupPolicy?: BackupPolicy | undefined;
	readonly Connections?: Connections | any;
	readonly DeletionForce?: boolean | undefined;
	readonly EngineVersion?: any | string;
	readonly EvictionPolicy?: string | undefined;
	readonly InstanceClass?: any | string;
	readonly InstanceMaintainTime?: InstanceMaintainTime | undefined;
	readonly InstanceName?: any | string;
	readonly Password?: string | undefined;
	readonly Period?: number | undefined;
	readonly PeriodUnit?: string | undefined;
	readonly ProductType?: string | undefined;
	readonly ResourceGroupId?: any | string;
	readonly SecondaryZoneId?: string | undefined;
	readonly SecurityGroupId?: string | undefined;
	readonly SSLEnabled?: string | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly VpcId?: any | string;
	readonly VpcPasswordFree?: boolean | undefined;
	readonly VSwitchId?: any | string;
	readonly ZoneId?: any | string;
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
	readonly SecurityIpGroupAttribute?: any | string;
	readonly SecurityIpGroupName?: any | string;
	readonly LogicalId: string;
}
export interface BackupPolicy {
	readonly PreferredBackupPeriod: string;
	readonly PreferredBackupTime: string;
	readonly EnableBackupLog?: number | undefined;
}
export interface ClassicInnerConnection {
	readonly ConnectionPort: number;
	readonly ConnectionString: string;
}
export interface Connections {
	readonly VpcPrivateConnection?: VpcPrivateConnection | undefined;
	readonly PublicConnection?: PublicConnection | undefined;
	readonly DirectConnection?: DirectConnection | undefined;
	readonly ClassicInnerConnection?: ClassicInnerConnection | undefined;
}
export interface DirectConnection {
	readonly ConnectionPort: number;
	readonly ConnectionString: string;
}
export interface InstanceMaintainTime {
	readonly MaintainEndTime?: string | undefined;
	readonly MaintainStartTime?: string | undefined;
}
export interface PublicConnection {
	readonly ConnectionPort: number;
	readonly ConnectionString: string;
}
export interface Tags {
	readonly Value?: string | undefined;
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
