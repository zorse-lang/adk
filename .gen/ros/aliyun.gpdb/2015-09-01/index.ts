import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Account extends RosResource<AccountComponentInputs> implements AccountComponentOutputs {
	constructor(entity: ADKEntity, options: AccountComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::GPDB::Account", options);
	}
	public readonly DbInstanceId: any;
}
export interface AccountComponentOutputs {
	readonly DbInstanceId: any;
}
export interface AccountComponentInputs {
	readonly AccountName: any | string;
	readonly AccountPassword: string;
	readonly DBInstanceId: string;
	readonly AccountDescription?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class DBInstance extends RosResource<DBInstanceComponentInputs> implements DBInstanceComponentOutputs {
	constructor(entity: ADKEntity, options: DBInstanceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::GPDB::DBInstance", options);
	}
	public readonly DbInstanceId: any;
	public readonly Port: any;
	public readonly OrderId: any;
	public readonly ConnectionString: any;
}
export interface DBInstanceComponentOutputs {
	readonly DbInstanceId: any;
	readonly Port: any;
	readonly OrderId: any;
	readonly ConnectionString: any;
}
export interface DBInstanceComponentInputs {
	readonly DBInstanceClass: string;
	readonly DBInstanceGroupCount: number;
	readonly EngineVersion: string;
	readonly VSwitchId: string;
	readonly ZoneId: string;
	readonly DBInstanceDescription?: (string | undefined) | undefined;
	readonly PayType?: (string | undefined) | undefined;
	readonly Period?: (number | undefined) | undefined;
	readonly PeriodUnit?: (string | undefined) | undefined;
	readonly SecurityIPList?: (string | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly VPCId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class ElasticDBInstance
	extends RosResource<ElasticDBInstanceComponentInputs>
	implements ElasticDBInstanceComponentOutputs
{
	constructor(entity: ADKEntity, options: ElasticDBInstanceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::GPDB::ElasticDBInstance", options);
	}
	public readonly DbInstanceId: any;
	public readonly Port: any;
	public readonly OrderId: any;
	public readonly ConnectionString: any;
}
export interface ElasticDBInstanceComponentOutputs {
	readonly DbInstanceId: any;
	readonly Port: any;
	readonly OrderId: any;
	readonly ConnectionString: any;
}
export interface ElasticDBInstanceComponentInputs {
	readonly EngineVersion: string;
	readonly InstanceSpec: string;
	readonly SegNodeNum: number;
	readonly SegStorageType: string;
	readonly StorageSize: number;
	readonly VSwitchId: string;
	readonly ZoneId: string;
	readonly DBInstanceCategory?: (string | undefined) | undefined;
	readonly DBInstanceDescription?: (string | undefined) | undefined;
	readonly EncryptionKey?: (string | undefined) | undefined;
	readonly EncryptionType?: (string | undefined) | undefined;
	readonly MasterNodeNum?: (number | undefined) | undefined;
	readonly PayType?: (string | undefined) | undefined;
	readonly Period?: (number | undefined) | undefined;
	readonly PeriodUnit?: (string | undefined) | undefined;
	readonly SecurityIPList?: (string | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly VPCId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class InstancePublicConnection
	extends RosResource<InstancePublicConnectionComponentInputs>
	implements InstancePublicConnectionComponentOutputs
{
	constructor(entity: ADKEntity, options: InstancePublicConnectionComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::GPDB::InstancePublicConnection", options);
	}
	public readonly DbInstanceId: any;
	public readonly ConnectionString: any;
}
export interface InstancePublicConnectionComponentOutputs {
	readonly DbInstanceId: any;
	readonly ConnectionString: any;
}
export interface InstancePublicConnectionComponentInputs {
	readonly ConnectionStringPrefix: string;
	readonly DBInstanceId: string;
	readonly Port: number;
	readonly LogicalId: string;
}
export interface Tags {
	readonly Value?: (string | undefined) | undefined;
	readonly Key: string;
}
export default {
	Account: Account,
	DBInstance: DBInstance,
	ElasticDBInstance: ElasticDBInstance,
	InstancePublicConnection: InstancePublicConnection,
};
