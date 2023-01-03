import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Group extends CfnResource<GroupComponentInputs> implements GroupComponentOutputs {
	constructor(entity: ADKEntity, options: GroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::XRay::Group", options);
	}
	public readonly GroupArn: string;
}
export interface GroupComponentOutputs {
	readonly GroupArn: string;
}
export interface GroupComponentInputs {
	readonly FilterExpression?: (string | undefined) | undefined;
	readonly GroupName?: (string | undefined) | undefined;
	readonly InsightsConfiguration?: (InsightsConfiguration | undefined) | undefined;
	readonly Tags?: (any[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class ResourcePolicy extends CfnResource<ResourcePolicyComponentInputs> implements ResourcePolicyComponentOutputs {
	constructor(entity: ADKEntity, options: ResourcePolicyComponentInputs) {
		super(entity, options.LogicalId, "AWS::XRay::ResourcePolicy", options);
	}
}
export interface ResourcePolicyComponentOutputs {}
export interface ResourcePolicyComponentInputs {
	readonly PolicyDocument: string;
	readonly PolicyName: string;
	readonly BypassPolicyLockoutCheck?: (boolean | undefined) | undefined;
	readonly LogicalId: string;
}
export class SamplingRule extends CfnResource<SamplingRuleComponentInputs> implements SamplingRuleComponentOutputs {
	constructor(entity: ADKEntity, options: SamplingRuleComponentInputs) {
		super(entity, options.LogicalId, "AWS::XRay::SamplingRule", options);
	}
	public readonly RuleArn: string;
}
export interface SamplingRuleComponentOutputs {
	readonly RuleArn: string;
}
export interface SamplingRuleComponentInputs {
	readonly RuleName?: (string | undefined) | undefined;
	readonly SamplingRule?: (SamplingRule | undefined) | undefined;
	readonly SamplingRuleRecord?: (SamplingRuleRecord | undefined) | undefined;
	readonly SamplingRuleUpdate?: (SamplingRuleUpdate | undefined) | undefined;
	readonly Tags?: (any[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface InsightsConfiguration {
	readonly InsightsEnabled?: (boolean | undefined) | undefined;
	readonly NotificationsEnabled?: (boolean | undefined) | undefined;
}
export interface TagsItems {
	readonly Key: string;
	readonly Value: string;
}
export interface SamplingRule {
	readonly Attributes?: ({ [key: string]: string } | undefined) | undefined;
	readonly FixedRate?: (number | undefined) | undefined;
	readonly HTTPMethod?: (string | undefined) | undefined;
	readonly Host?: (string | undefined) | undefined;
	readonly Priority?: (number | undefined) | undefined;
	readonly ReservoirSize?: (number | undefined) | undefined;
	readonly ResourceARN?: (string | undefined) | undefined;
	readonly RuleARN?: (string | undefined) | undefined;
	readonly RuleName?: (string | undefined) | undefined;
	readonly ServiceName?: (string | undefined) | undefined;
	readonly ServiceType?: (string | undefined) | undefined;
	readonly URLPath?: (string | undefined) | undefined;
	readonly Version?: (number | undefined) | undefined;
}
export interface SamplingRuleRecord {
	readonly CreatedAt?: (string | undefined) | undefined;
	readonly ModifiedAt?: (string | undefined) | undefined;
	readonly SamplingRule?: (SamplingRule | undefined) | undefined;
}
export interface SamplingRuleUpdate {
	readonly Attributes?: ({ [key: string]: string } | undefined) | undefined;
	readonly FixedRate?: (number | undefined) | undefined;
	readonly HTTPMethod?: (string | undefined) | undefined;
	readonly Host?: (string | undefined) | undefined;
	readonly Priority?: (number | undefined) | undefined;
	readonly ReservoirSize?: (number | undefined) | undefined;
	readonly ResourceARN?: (string | undefined) | undefined;
	readonly RuleARN?: (string | undefined) | undefined;
	readonly RuleName?: (string | undefined) | undefined;
	readonly ServiceName?: (string | undefined) | undefined;
	readonly ServiceType?: (string | undefined) | undefined;
	readonly URLPath?: (string | undefined) | undefined;
}
export default {
	Group: Group,
	ResourcePolicy: ResourcePolicy,
	SamplingRule: SamplingRule,
};
