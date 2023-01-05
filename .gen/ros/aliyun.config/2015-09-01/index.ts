import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class CompliancePack extends RosResource<CompliancePackComponentInputs> implements CompliancePackComponentOutputs {
	constructor(entity: ADKEntity, options: CompliancePackComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::Config::CompliancePack", options);
	}
	public readonly CompliancePackId: any;
	public readonly AccountId: any;
}
export interface CompliancePackComponentOutputs {
	readonly CompliancePackId: any;
	readonly AccountId: any;
}
export interface CompliancePackComponentInputs {
	readonly CompliancePackName: any | string;
	readonly Description: any | string;
	readonly RiskLevel: any | number;
	readonly CompliancePackTemplateId?: any | string;
	readonly ConfigRules?: ConfigRules[] | undefined;
	readonly LogicalId: string;
}
export class DeliveryChannel
	extends RosResource<DeliveryChannelComponentInputs>
	implements DeliveryChannelComponentOutputs
{
	constructor(entity: ADKEntity, options: DeliveryChannelComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::Config::DeliveryChannel", options);
	}
	public readonly DeliveryChannelId: any;
}
export interface DeliveryChannelComponentOutputs {
	readonly DeliveryChannelId: any;
}
export interface DeliveryChannelComponentInputs {
	readonly DeliveryChannelAssumeRoleArn: string;
	readonly DeliveryChannelTargetArn: string;
	readonly DeliveryChannelType: string;
	readonly DeliveryChannelCondition?: string | undefined;
	readonly DeliveryChannelName?: string | undefined;
	readonly Description?: string | undefined;
	readonly LogicalId: string;
}
export class Rule extends RosResource<RuleComponentInputs> implements RuleComponentOutputs {
	constructor(entity: ADKEntity, options: RuleComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::Config::Rule", options);
	}
	public readonly ConfigRuleId: any;
	public readonly EventSource: any;
	public readonly ConfigRuleArn: any;
}
export interface RuleComponentOutputs {
	readonly ConfigRuleId: any;
	readonly EventSource: any;
	readonly ConfigRuleArn: any;
}
export interface RuleComponentInputs {
	readonly ConfigRuleTriggerTypes: any | string;
	readonly ResourceTypesScope: any | string[];
	readonly RiskLevel: any | number;
	readonly RuleName: any | string;
	readonly SourceIdentifier: any | string;
	readonly SourceOwner: any | string;
	readonly Description?: any | string;
	readonly ExcludeResourceIdsScope?: any | string;
	readonly InputParameters?: any | { [key: string]: any };
	readonly MaximumExecutionFrequency?: any | string;
	readonly RegionIdsScope?: any | string;
	readonly ResourceGroupIdsScope?: any | string;
	readonly TagKeyLogicScope?: string | undefined;
	readonly TagKeyScope?: any | string;
	readonly TagValueScope?: any | string;
	readonly LogicalId: string;
}
export interface ConfigRuleParameters {
	readonly ParameterValue?: string | undefined;
	readonly Required?: boolean | undefined;
	readonly ParameterName?: string | undefined;
}
export interface ConfigRules {
	readonly ConfigRuleId?: string | undefined;
	readonly ConfigRuleName?: string | undefined;
	readonly ManagedRuleIdentifier?: string | undefined;
	readonly ConfigRuleParameters?: ConfigRuleParameters[] | undefined;
}
export default {
	CompliancePack: CompliancePack,
	DeliveryChannel: DeliveryChannel,
	Rule: Rule,
};
