import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class DrdsDB extends RosResource<DrdsDBComponentInputs> implements DrdsDBComponentOutputs {
	constructor(entity: ADKEntity, options: DrdsDBComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::DRDS::DrdsDB", options);
	}
}
export interface DrdsDBComponentOutputs {}
export interface DrdsDBComponentInputs {
	readonly DrdsInstanceId: string;
	readonly AccountName?: string | undefined;
	readonly DbInstanceIsCreating?: boolean | undefined;
	readonly DbInstType?: string | undefined;
	readonly DbName?: string | undefined;
	readonly Encode?: string | undefined;
	readonly InstDbName?: InstDbName[] | undefined;
	readonly Password?: string | undefined;
	readonly RdsInstance?: string[] | undefined;
	readonly Type?: string | undefined;
	readonly LogicalId: string;
}
export class DrdsInstance extends RosResource<DrdsInstanceComponentInputs> implements DrdsInstanceComponentOutputs {
	constructor(entity: ADKEntity, options: DrdsInstanceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::DRDS::DrdsInstance", options);
	}
	public readonly DrdsInstanceId: any;
	public readonly InternetEndpoint: any;
	public readonly OrderId: any;
	public readonly IntranetEndpoint: any;
}
export interface DrdsInstanceComponentOutputs {
	readonly DrdsInstanceId: any;
	readonly InternetEndpoint: any;
	readonly OrderId: any;
	readonly IntranetEndpoint: any;
}
export interface DrdsInstanceComponentInputs {
	readonly Description: string;
	readonly InstanceSeries: string;
	readonly PayType: string;
	readonly Specification: string;
	readonly Type: string;
	readonly ZoneId: string;
	readonly Duration?: number | undefined;
	readonly IsAutoRenew?: boolean | undefined;
	readonly MySQLVersion?: string | undefined;
	readonly PricingCycle?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly VpcId?: string | undefined;
	readonly VswitchId?: string | undefined;
	readonly LogicalId: string;
}
export interface InstDbName {
	readonly ShardDbName: string[];
	readonly DbInstanceId: string;
}
export interface Tags {
	readonly Value?: string | undefined;
	readonly Key: string;
}
export default {
	DrdsDB: DrdsDB,
	DrdsInstance: DrdsInstance,
};
