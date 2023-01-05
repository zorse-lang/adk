import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class DBCluster extends RosResource<DBClusterComponentInputs> implements DBClusterComponentOutputs {
	constructor(entity: ADKEntity, options: DBClusterComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ClickHouse::DBCluster", options);
	}
	public readonly Port: any;
	public readonly DbClusterId: any;
	public readonly DbClusterNetworkType: any;
	public readonly DbClusterType: any;
	public readonly DbClusterVersion: any;
	public readonly CommodityCode: any;
	public readonly DbNodeCount: any;
	public readonly PublicConnectionString: any;
	public readonly LockReason: any;
	public readonly Bid: any;
	public readonly Engine: any;
	public readonly DbNodeStorage: any;
	public readonly IsExpired: any;
	public readonly EngineVersion: any;
	public readonly StorageType: any;
	public readonly DbClusterDescription: any;
	public readonly LockMode: any;
	public readonly DbNodeClass: any;
	public readonly VpcCloudInstanceId: any;
	public readonly ConnectionString: any;
	public readonly PublicPort: any;
	public readonly AliUid: any;
}
export interface DBClusterComponentOutputs {
	readonly Port: any;
	readonly DbClusterId: any;
	readonly DbClusterNetworkType: any;
	readonly DbClusterType: any;
	readonly DbClusterVersion: any;
	readonly CommodityCode: any;
	readonly DbNodeCount: any;
	readonly PublicConnectionString: any;
	readonly LockReason: any;
	readonly Bid: any;
	readonly Engine: any;
	readonly DbNodeStorage: any;
	readonly IsExpired: any;
	readonly EngineVersion: any;
	readonly StorageType: any;
	readonly DbClusterDescription: any;
	readonly LockMode: any;
	readonly DbNodeClass: any;
	readonly VpcCloudInstanceId: any;
	readonly ConnectionString: any;
	readonly PublicPort: any;
	readonly AliUid: any;
}
export interface DBClusterComponentInputs {
	readonly Category: any | string;
	readonly DBClusterNetworkType: string;
	readonly DBClusterType: string;
	readonly DBClusterVersion: string;
	readonly DBNodeCount: number;
	readonly DBNodeStorage: number;
	readonly DbNodeStorageType: any | string;
	readonly PaymentType: any | string;
	readonly DBClusterDescription?: string | undefined;
	readonly EncryptionKey?: any | string;
	readonly EncryptionType?: any | string;
	readonly Period?: any | string;
	readonly UsedTime?: string | undefined;
	readonly VpcId?: any | string;
	readonly VSwitchId?: any | string;
	readonly ZoneId?: any | string;
	readonly LogicalId: string;
}
export default {
	DBCluster: DBCluster,
};
