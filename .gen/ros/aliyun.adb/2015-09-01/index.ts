import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Account extends RosResource<AccountComponentInputs> implements AccountComponentOutputs {
	constructor(entity: ADKEntity, options: AccountComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ADB::Account", options);
	}
	public readonly DbClusterId: any;
}
export interface AccountComponentOutputs {
	readonly DbClusterId: any;
}
export interface AccountComponentInputs {
	readonly AccountName: any | string;
	readonly AccountPassword: string;
	readonly DBClusterId: string;
	readonly AccountDescription?: (string | undefined) | undefined;
	readonly AccountType?: (any | string) | undefined;
	readonly LogicalId: string;
}
export class DBCluster extends RosResource<DBClusterComponentInputs> implements DBClusterComponentOutputs {
	constructor(entity: ADKEntity, options: DBClusterComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ADB::DBCluster", options);
	}
	public readonly DbClusterId: any;
	public readonly OrderId: any;
	public readonly ConnectionString: any;
}
export interface DBClusterComponentOutputs {
	readonly DbClusterId: any;
	readonly OrderId: any;
	readonly ConnectionString: any;
}
export interface DBClusterComponentInputs {
	readonly DBClusterCategory: string;
	readonly DBClusterVersion: string;
	readonly Mode: string;
	readonly PayType: string;
	readonly VPCId: string;
	readonly VSwitchId: string;
	readonly ComputeResource?: (string | undefined) | undefined;
	readonly DBClusterClass?: (string | undefined) | undefined;
	readonly DBClusterDescription?: (string | undefined) | undefined;
	readonly DBNodeGroupCount?: (number | undefined) | undefined;
	readonly DBNodeStorage?: (number | undefined) | undefined;
	readonly ElasticIOResource?: (number | undefined) | undefined;
	readonly ExecutorCount?: (number | undefined) | undefined;
	readonly Period?: (number | undefined) | undefined;
	readonly PeriodType?: (string | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly ZoneId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface Tags {
	readonly Value?: (string | undefined) | undefined;
	readonly Key: string;
}
export default {
	Account: Account,
	DBCluster: DBCluster,
};
