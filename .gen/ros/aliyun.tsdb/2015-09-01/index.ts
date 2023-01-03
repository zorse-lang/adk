import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class HiTSDBInstance extends RosResource<HiTSDBInstanceComponentInputs> implements HiTSDBInstanceComponentOutputs {
	constructor(entity: ADKEntity, options: HiTSDBInstanceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::TSDB::HiTSDBInstance", options);
	}
	public readonly InstanceId: any;
	public readonly ReverseVpcPort: any;
	public readonly ReverseVpcIp: any;
	public readonly PublicConnectionString: any;
	public readonly EngineType: any;
	public readonly OrderId: any;
	public readonly ConnectionString: any;
}
export interface HiTSDBInstanceComponentOutputs {
	readonly InstanceId: any;
	readonly ReverseVpcPort: any;
	readonly ReverseVpcIp: any;
	readonly PublicConnectionString: any;
	readonly EngineType: any;
	readonly OrderId: any;
	readonly ConnectionString: any;
}
export interface HiTSDBInstanceComponentInputs {
	readonly InstanceClass: string;
	readonly InstanceStorage: number;
	readonly VPCId: string;
	readonly VSwitchId: string;
	readonly ZoneId: string;
	readonly DiskCategory?: (string | undefined) | undefined;
	readonly Duration?: (number | undefined) | undefined;
	readonly InstanceAlias?: (string | undefined) | undefined;
	readonly PayType?: (string | undefined) | undefined;
	readonly PricingCycle?: (string | undefined) | undefined;
	readonly SecurityIpList?: (string[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class InfluxDBDatabase
	extends RosResource<InfluxDBDatabaseComponentInputs>
	implements InfluxDBDatabaseComponentOutputs
{
	constructor(entity: ADKEntity, options: InfluxDBDatabaseComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::TSDB::InfluxDBDatabase", options);
	}
	public readonly DbName: any;
}
export interface InfluxDBDatabaseComponentOutputs {
	readonly DbName: any;
}
export interface InfluxDBDatabaseComponentInputs {
	readonly DBName: string;
	readonly InstanceId: any | string;
	readonly LogicalId: string;
}
export class InfluxDBUser extends RosResource<InfluxDBUserComponentInputs> implements InfluxDBUserComponentOutputs {
	constructor(entity: ADKEntity, options: InfluxDBUserComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::TSDB::InfluxDBUser", options);
	}
}
export interface InfluxDBUserComponentOutputs {}
export interface InfluxDBUserComponentInputs {
	readonly InstanceId: any | string;
	readonly Password: string;
	readonly UserName: any | string;
	readonly UserType: any | string;
	readonly DatabasePermissions?: (DatabasePermissions[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface DatabasePermissions {
	readonly Permission: string;
	readonly DBName: string;
}
export default {
	HiTSDBInstance: HiTSDBInstance,
	InfluxDBDatabase: InfluxDBDatabase,
	InfluxDBUser: InfluxDBUser,
};
