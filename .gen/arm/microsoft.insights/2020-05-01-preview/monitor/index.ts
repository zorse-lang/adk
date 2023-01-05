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
	readonly etag?: string;
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties: ScheduledQueryRuleProperties;
	readonly tags?: TrackedResourceTags;
}
export interface Action {
	readonly actionGroupId?: string;
	readonly webHookProperties?: ActionWebHookProperties;
}
export interface ActionWebHookProperties {
	readonly [key: string]: string;
}
export interface Condition {
	readonly dimensions?: Dimension[];
	readonly failingPeriods?: ConditionFailingPeriods;
	readonly metricMeasureColumn?: string;
	readonly operator: "Equals" | "GreaterThan" | "GreaterThanOrEqual" | "LessThan" | "LessThanOrEqual";
	readonly query?: string;
	readonly resourceIdColumn?: string;
	readonly threshold: number;
	readonly timeAggregation: "Average" | "Count" | "Maximum" | "Minimum" | "Total";
}
export interface ConditionFailingPeriods {
	readonly minFailingPeriodsToAlert?: number;
	readonly numberOfEvaluationPeriods?: number;
}
export interface Dimension {
	readonly name: string;
	readonly operator: "Exclude" | "Include";
	readonly values: string[];
}
export interface ScheduledQueryRuleCriteria {
	readonly allOf?: Condition[];
}
export interface ScheduledQueryRuleProperties {
	readonly actions?: Action[];
	readonly createdWithApiVersion?: string;
	readonly criteria?: ScheduledQueryRuleCriteria;
	readonly description?: string;
	readonly displayName?: string;
	readonly enabled?: boolean;
	readonly evaluationFrequency?: string;
	readonly isLegacyLogAnalyticsRule?: boolean;
	readonly muteActionsDuration?: string;
	readonly overrideQueryTimeRange?: string;
	readonly scopes?: string[];
	readonly severity?: number;
	readonly targetResourceTypes?: string[];
	readonly windowSize?: string;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export default {
	scheduledQueryRules: scheduledQueryRules,
};
