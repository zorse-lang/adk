import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class DrdsDB extends RosResource<DrdsDBComponentInputs> implements DrdsDBComponentOutputs {
	constructor(entity: ADKEntity, options: DrdsDBComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::DRDS::DrdsDB", options);
	}
}
export interface DrdsDBComponentOutputs {}
export interface DrdsDBComponentInputs {
	readonly DrdsInstanceId: string;
	readonly AccountName?: (string | undefined) | undefined;
	readonly DbInstanceIsCreating?: (boolean | undefined) | undefined;
	readonly DbInstType?: (string | undefined) | undefined;
	readonly DbName?: (string | undefined) | undefined;
	readonly Encode?: (string | undefined) | undefined;
	readonly InstDbName?: (InstDbName[] | undefined) | undefined;
	readonly Password?: (string | undefined) | undefined;
	readonly RdsInstance?: (string[] | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
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
	readonly Duration?: (number | undefined) | undefined;
	readonly IsAutoRenew?: (boolean | undefined) | undefined;
	readonly MySQLVersion?: (string | undefined) | undefined;
	readonly PricingCycle?: (string | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly VpcId?: (string | undefined) | undefined;
	readonly VswitchId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface InstDbName {
	readonly ShardDbName: string[];
	readonly DbInstanceId: string;
}
export interface Tags {
	readonly Value?: (string | undefined) | undefined;
	readonly Key: string;
}
export default {
	DrdsDB: DrdsDB,
	DrdsInstance: DrdsInstance,
};
