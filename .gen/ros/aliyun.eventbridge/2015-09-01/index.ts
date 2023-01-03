import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Rule extends RosResource<RuleComponentInputs> implements RuleComponentOutputs {
	constructor(entity: ADKEntity, options: RuleComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::EventBridge::Rule", options);
	}
	public readonly RuleArn: any;
}
export interface RuleComponentOutputs {
	readonly RuleArn: any;
}
export interface RuleComponentInputs {
	readonly EventBusName: any | string;
	readonly FilterPattern: { [key: string]: any };
	readonly RuleName: any | string;
	readonly Targets: Targets[];
	readonly Description?: (string | undefined) | undefined;
	readonly Status?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface ParamList {
	readonly Form: string;
	readonly Value: string;
	readonly ResourceKey: string;
	readonly Template?: (string | undefined) | undefined;
}
export interface Targets {
	readonly PushRetryStrategy?: (string | undefined) | undefined;
	readonly Type: string;
	readonly Endpoint: string;
	readonly Id: string;
	readonly ParamList: ParamList[];
}
export default {
	Rule: Rule,
};
