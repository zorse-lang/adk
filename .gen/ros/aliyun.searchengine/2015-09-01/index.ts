import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Instance extends RosResource<InstanceComponentInputs> implements InstanceComponentOutputs {
	constructor(entity: ADKEntity, options: InstanceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SearchEngine::Instance", options);
	}
	public readonly Endpoint: any;
	public readonly InstanceId: any;
}
export interface InstanceComponentOutputs {
	readonly Endpoint: any;
	readonly InstanceId: any;
}
export interface InstanceComponentInputs {
	readonly ChargeType: string;
	readonly Password: string;
	readonly QrsNum: number;
	readonly QrsSpec: string;
	readonly SearcherDocSize: number;
	readonly SearcherNum: number;
	readonly SearcherSpec: string;
	readonly UserName: string;
	readonly VpcId: string;
	readonly VSwitchId: string;
	readonly LogicalId: string;
}
export default {
	Instance: Instance,
};
