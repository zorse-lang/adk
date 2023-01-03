import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class scheduledQueryRules
	extends ArmResource<scheduledQueryRulesComponentInputs>
	implements scheduledQueryRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: scheduledQueryRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/scheduledQueryRules", "2022-06-15", options);
	}
	public readonly apiVersion: "2022-06-15";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/scheduledQueryRules";
}
export interface scheduledQueryRulesComponentOutputs {
	readonly apiVersion: "2022-06-15";
	readonly id: string;
	readonly type: "Microsoft.Insights/scheduledQueryRules";
}
export interface scheduledQueryRulesComponentInputs {
	readonly etag?: string | undefined;
	readonly kind?: ("LogAlert" | "LogToMetric") | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: ScheduledQueryRuleProperties;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ScheduledQueryRuleResourceTags | undefined;
}
export interface Actions {
	readonly actionGroups?: string[] | undefined;
	readonly customProperties?: ActionsCustomProperties | undefined;
}
export interface ActionsCustomProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Condition {
	readonly dimensions?: Dimension[] | undefined;
	readonly failingPeriods?: ConditionFailingPeriods | undefined;
	readonly metricMeasureColumn?: string | undefined;
	readonly metricName?: string | undefined;
	readonly operator?: ("Equals" | "GreaterThan" | "GreaterThanOrEqual" | "LessThan" | "LessThanOrEqual") | undefined;
	readonly query?: string | undefined;
	readonly resourceIdColumn?: string | undefined;
	readonly threshold?: number | undefined;
	readonly timeAggregation?: ("Average" | "Count" | "Maximum" | "Minimum" | "Total") | undefined;
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
	readonly actions?: Actions | undefined;
	readonly autoMitigate?: boolean | undefined;
	readonly checkWorkspaceAlertsStorageConfigured?: boolean | undefined;
	readonly createdWithApiVersion?: string | undefined;
	readonly criteria?: ScheduledQueryRuleCriteria | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly enabled?: boolean | undefined;
	readonly evaluationFrequency?: string | undefined;
	readonly isLegacyLogAnalyticsRule?: boolean | undefined;
	readonly isWorkspaceAlertsStorageConfigured?: boolean | undefined;
	readonly muteActionsDuration?: string | undefined;
	readonly overrideQueryTimeRange?: string | undefined;
	readonly scopes?: string[] | undefined;
	readonly severity?: number | undefined;
	readonly skipQueryValidation?: boolean | undefined;
	readonly targetResourceTypes?: string[] | undefined;
	readonly windowSize?: string | undefined;
}
export interface ScheduledQueryRuleResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export default {
	scheduledQueryRules: scheduledQueryRules,
};
