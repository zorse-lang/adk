import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class scheduledQueryRules
	extends ArmResource<scheduledQueryRulesComponentInputs>
	implements scheduledQueryRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: scheduledQueryRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/scheduledQueryRules", "2020-05-01-preview", options);
	}
	public readonly apiVersion: "2020-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/scheduledQueryRules";
}
export interface scheduledQueryRulesComponentOutputs {
	readonly apiVersion: "2020-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Insights/scheduledQueryRules";
}
export interface scheduledQueryRulesComponentInputs {
	readonly etag?: string | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: ScheduledQueryRuleProperties;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface Action {
	readonly actionGroupId?: string | undefined;
	readonly webHookProperties?: ActionWebHookProperties | undefined;
}
export interface ActionWebHookProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Condition {
	readonly dimensions?: Dimension[] | undefined;
	readonly failingPeriods?: ConditionFailingPeriods | undefined;
	readonly metricMeasureColumn?: string | undefined;
	readonly operator: "Equals" | "GreaterThan" | "GreaterThanOrEqual" | "LessThan" | "LessThanOrEqual";
	readonly query?: string | undefined;
	readonly resourceIdColumn?: string | undefined;
	readonly threshold: number;
	readonly timeAggregation: "Average" | "Count" | "Maximum" | "Minimum" | "Total";
}
export interface ConditionFailingPeriods {
	readonly minFailingPeriodsToAlert?: number | undefined;
	readonly numberOfEvaluationPeriods?: number | undefined;
}
export interface Dimension {
	readonly name: string;
	readonly operator: "Exclude" | "Include";
	readonly values: string[];
}
export interface ScheduledQueryRuleCriteria {
	readonly allOf?: Condition[] | undefined;
}
export interface ScheduledQueryRuleProperties {
	readonly actions?: Action[] | undefined;
	readonly createdWithApiVersion?: string | undefined;
	readonly criteria?: ScheduledQueryRuleCriteria | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly enabled?: boolean | undefined;
	readonly evaluationFrequency?: string | undefined;
	readonly isLegacyLogAnalyticsRule?: boolean | undefined;
	readonly muteActionsDuration?: string | undefined;
	readonly overrideQueryTimeRange?: string | undefined;
	readonly scopes?: string[] | undefined;
	readonly severity?: number | undefined;
	readonly targetResourceTypes?: string[] | undefined;
	readonly windowSize?: string | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	scheduledQueryRules: scheduledQueryRules,
};
