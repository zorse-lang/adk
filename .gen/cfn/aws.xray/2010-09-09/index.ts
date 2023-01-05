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
	readonly FilterExpression?: string | undefined;
	readonly GroupName?: string | undefined;
	readonly InsightsConfiguration?: InsightsConfiguration | undefined;
	readonly Tags?: any[] | undefined;
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
	readonly BypassPolicyLockoutCheck?: boolean | undefined;
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
	readonly RuleName?: string | undefined;
	readonly SamplingRule?: SamplingRule | undefined;
	readonly SamplingRuleRecord?: SamplingRuleRecord | undefined;
	readonly SamplingRuleUpdate?: SamplingRuleUpdate | undefined;
	readonly Tags?: any[] | undefined;
	readonly LogicalId: string;
}
export interface InsightsConfiguration {
	readonly InsightsEnabled?: boolean | undefined;
	readonly NotificationsEnabled?: boolean | undefined;
}
export interface TagsItems {
	readonly Key: string;
	readonly Value: string;
}
export interface SamplingRule {
	readonly Attributes?: { [key: string]: string } | undefined;
	readonly FixedRate?: number | undefined;
	readonly HTTPMethod?: string | undefined;
	readonly Host?: string | undefined;
	readonly Priority?: number | undefined;
	readonly ReservoirSize?: number | undefined;
	readonly ResourceARN?: string | undefined;
	readonly RuleARN?: string | undefined;
	readonly RuleName?: string | undefined;
	readonly ServiceName?: string | undefined;
	readonly ServiceType?: string | undefined;
	readonly URLPath?: string | undefined;
	readonly Version?: number | undefined;
}
export interface SamplingRuleRecord {
	readonly CreatedAt?: string | undefined;
	readonly ModifiedAt?: string | undefined;
	readonly SamplingRule?: SamplingRule | undefined;
}
export interface SamplingRuleUpdate {
	readonly Attributes?: { [key: string]: string } | undefined;
	readonly FixedRate?: number | undefined;
	readonly HTTPMethod?: string | undefined;
	readonly Host?: string | undefined;
	readonly Priority?: number | undefined;
	readonly ReservoirSize?: number | undefined;
	readonly ResourceARN?: string | undefined;
	readonly RuleARN?: string | undefined;
	readonly RuleName?: string | undefined;
	readonly ServiceName?: string | undefined;
	readonly ServiceType?: string | undefined;
	readonly URLPath?: string | undefined;
}
export default {
	Group: Group,
	ResourcePolicy: ResourcePolicy,
	SamplingRule: SamplingRule,
};
