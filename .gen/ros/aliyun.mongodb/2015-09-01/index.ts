import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Instance extends RosResource<InstanceComponentInputs> implements InstanceComponentOutputs {
	constructor(entity: ADKEntity, options: InstanceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::MONGODB::Instance", options);
	}
	public readonly DbInstanceStatus: any;
	public readonly DbInstanceId: any;
	public readonly ConnectionUri: any;
	public readonly ReplicaSetName: any;
	public readonly OrderId: any;
}
export interface InstanceComponentOutputs {
	readonly DbInstanceStatus: any;
	readonly DbInstanceId: any;
	readonly ConnectionUri: any;
	readonly ReplicaSetName: any;
	readonly OrderId: any;
}
export interface InstanceComponentInputs {
	readonly DBInstanceClass: string;
	readonly DBInstanceStorage: number;
	readonly AccountPassword?: (string | undefined) | undefined;
	readonly AutoRenew?: (boolean | undefined) | undefined;
	readonly BackupId?: (string | undefined) | undefined;
	readonly BusinessInfo?: (string | undefined) | undefined;
	readonly ChargeType?: (string | undefined) | undefined;
	readonly CouponNo?: (string | undefined) | undefined;
	readonly DatabaseNames?: (string | undefined) | undefined;
	readonly DBInstanceDescription?: (string | undefined) | undefined;
	readonly EngineVersion?: (string | undefined) | undefined;
	readonly NetworkType?: (string | undefined) | undefined;
	readonly Period?: (number | undefined) | undefined;
	readonly ReadonlyReplicas?: (number | undefined) | undefined;
	readonly ReplicationFactor?: (number | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly RestoreTime?: (string | undefined) | undefined;
	readonly SecurityGroupId?: (string | undefined) | undefined;
	readonly SecurityIPArray?: (string | undefined) | undefined;
	readonly SrcDBInstanceId?: (string | undefined) | undefined;
	readonly StorageEngine?: (string | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly TDEStatus?: (boolean | undefined) | undefined;
	readonly VpcId?: (string | undefined) | undefined;
	readonly VpcPasswordFree?: (boolean | undefined) | undefined;
	readonly VSwitchId?: (string | undefined) | undefined;
	readonly ZoneId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class ServerlessInstance
	extends RosResource<ServerlessInstanceComponentInputs>
	implements ServerlessInstanceComponentOutputs
{
	constructor(entity: ADKEntity, options: ServerlessInstanceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::MONGODB::ServerlessInstance", options);
	}
	public readonly DbInstanceStatus: any;
	public readonly DbInstanceId: any;
	public readonly ConnectionUri: any;
	public readonly OrderId: any;
}
export interface ServerlessInstanceComponentOutputs {
	readonly DbInstanceStatus: any;
	readonly DbInstanceId: any;
	readonly ConnectionUri: any;
	readonly OrderId: any;
}
export interface ServerlessInstanceComponentInputs {
	readonly DBInstanceStorage: number;
	readonly AccountPassword?: (string | undefined) | undefined;
	readonly AutoRenew?: (boolean | undefined) | undefined;
	readonly ChargeType?: (string | undefined) | undefined;
	readonly DBInstanceDescription?: (string | undefined) | undefined;
	readonly EngineVersion?: (string | undefined) | undefined;
	readonly NetworkType?: (string | undefined) | undefined;
	readonly Period?: (number | undefined) | undefined;
	readonly PeriodPriceType?: (string | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly SecurityIPArray?: (string | undefined) | undefined;
	readonly StorageEngine?: (string | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly TDEStatus?: (boolean | undefined) | undefined;
	readonly VpcId?: (string | undefined) | undefined;
	readonly VSwitchId?: (string | undefined) | undefined;
	readonly ZoneId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class ShardingInstance
	extends RosResource<ShardingInstanceComponentInputs>
	implements ShardingInstanceComponentOutputs
{
	constructor(entity: ADKEntity, options: ShardingInstanceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::MONGODB::ShardingInstance", options);
	}
	public readonly DbInstanceStatus: any;
	public readonly DbInstanceId: any;
	public readonly OrderId: any;
}
export interface ShardingInstanceComponentOutputs {
	readonly DbInstanceStatus: any;
	readonly DbInstanceId: any;
	readonly OrderId: any;
}
export interface ShardingInstanceComponentInputs {
	readonly ConfigServer: ConfigServer[];
	readonly Mongos: Mongos[];
	readonly ReplicaSet: ReplicaSet[];
	readonly AccountPassword?: (string | undefined) | undefined;
	readonly AutoRenew?: (boolean | undefined) | undefined;
	readonly ChargeType?: (string | undefined) | undefined;
	readonly DBInstanceDescription?: (string | undefined) | undefined;
	readonly EngineVersion?: (string | undefined) | undefined;
	readonly NetworkType?: (string | undefined) | undefined;
	readonly Period?: (number | undefined) | undefined;
	readonly ProtocolType?: (string | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly RestoreTime?: (string | undefined) | undefined;
	readonly SecurityIPArray?: (string | undefined) | undefined;
	readonly SrcDBInstanceId?: (string | undefined) | undefined;
	readonly StorageEngine?: (string | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly TDEStatus?: (boolean | undefined) | undefined;
	readonly VpcId?: (string | undefined) | undefined;
	readonly VSwitchId?: (string | undefined) | undefined;
	readonly ZoneId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface Tags {
	readonly Value?: (string | undefined) | undefined;
	readonly Key: string;
}
export interface ConfigServer {
	readonly Storage: number;
	readonly Class: string;
}
export interface Mongos {
	readonly Class: string;
}
export interface ReplicaSet {
	readonly Storage: number;
	readonly ReadonlyReplicas?: (number | undefined) | undefined;
	readonly Class: string;
}
export default {
	Instance: Instance,
	ServerlessInstance: ServerlessInstance,
	ShardingInstance: ShardingInstance,
};
