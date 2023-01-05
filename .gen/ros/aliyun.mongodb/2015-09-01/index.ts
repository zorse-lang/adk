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
	readonly AccountPassword?: string | undefined;
	readonly AutoRenew?: boolean | undefined;
	readonly BackupId?: string | undefined;
	readonly BusinessInfo?: string | undefined;
	readonly ChargeType?: string | undefined;
	readonly CouponNo?: string | undefined;
	readonly DatabaseNames?: string | undefined;
	readonly DBInstanceDescription?: string | undefined;
	readonly EngineVersion?: string | undefined;
	readonly NetworkType?: string | undefined;
	readonly Period?: number | undefined;
	readonly ReadonlyReplicas?: number | undefined;
	readonly ReplicationFactor?: number | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly RestoreTime?: string | undefined;
	readonly SecurityGroupId?: string | undefined;
	readonly SecurityIPArray?: string | undefined;
	readonly SrcDBInstanceId?: string | undefined;
	readonly StorageEngine?: string | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly TDEStatus?: boolean | undefined;
	readonly VpcId?: string | undefined;
	readonly VpcPasswordFree?: boolean | undefined;
	readonly VSwitchId?: string | undefined;
	readonly ZoneId?: string | undefined;
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
	readonly AccountPassword?: string | undefined;
	readonly AutoRenew?: boolean | undefined;
	readonly ChargeType?: string | undefined;
	readonly DBInstanceDescription?: string | undefined;
	readonly EngineVersion?: string | undefined;
	readonly NetworkType?: string | undefined;
	readonly Period?: number | undefined;
	readonly PeriodPriceType?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly SecurityIPArray?: string | undefined;
	readonly StorageEngine?: string | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly TDEStatus?: boolean | undefined;
	readonly VpcId?: string | undefined;
	readonly VSwitchId?: string | undefined;
	readonly ZoneId?: string | undefined;
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
	readonly AccountPassword?: string | undefined;
	readonly AutoRenew?: boolean | undefined;
	readonly ChargeType?: string | undefined;
	readonly DBInstanceDescription?: string | undefined;
	readonly EngineVersion?: string | undefined;
	readonly NetworkType?: string | undefined;
	readonly Period?: number | undefined;
	readonly ProtocolType?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly RestoreTime?: string | undefined;
	readonly SecurityIPArray?: string | undefined;
	readonly SrcDBInstanceId?: string | undefined;
	readonly StorageEngine?: string | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly TDEStatus?: boolean | undefined;
	readonly VpcId?: string | undefined;
	readonly VSwitchId?: string | undefined;
	readonly ZoneId?: string | undefined;
	readonly LogicalId: string;
}
export interface Tags {
	readonly Value?: string | undefined;
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
	readonly ReadonlyReplicas?: number | undefined;
	readonly Class: string;
}
export default {
	Instance: Instance,
	ServerlessInstance: ServerlessInstance,
	ShardingInstance: ShardingInstance,
};
