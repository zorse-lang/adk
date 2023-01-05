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
	readonly etag?: string;
	readonly kind?: "LogAlert" | "LogToMetric";
	readonly location: string;
	readonly name: string;
	readonly properties: ScheduledQueryRuleProperties;
	readonly systemData?: SystemData;
	readonly tags?: ScheduledQueryRuleResourceTags;
}
export interface Actions {
	readonly actionGroups?: string[];
	readonly customProperties?: ActionsCustomProperties;
}
export interface ActionsCustomProperties {
	readonly [key: string]: string;
}
export interface Condition {
	readonly dimensions?: Dimension[];
	readonly failingPeriods?: ConditionFailingPeriods;
	readonly metricMeasureColumn?: string;
	readonly metricName?: string;
	readonly operator?: "Equals" | "GreaterThan" | "GreaterThanOrEqual" | "LessThan" | "LessThanOrEqual";
	readonly query?: string;
	readonly resourceIdColumn?: string;
	readonly threshold?: number;
	readonly timeAggregation?: "Average" | "Count" | "Maximum" | "Minimum" | "Total";
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
	readonly actions?: Actions;
	readonly autoMitigate?: boolean;
	readonly checkWorkspaceAlertsStorageConfigured?: boolean;
	readonly createdWithApiVersion?: string;
	readonly criteria?: ScheduledQueryRuleCriteria;
	readonly description?: string;
	readonly displayName?: string;
	readonly enabled?: boolean;
	readonly evaluationFrequency?: string;
	readonly isLegacyLogAnalyticsRule?: boolean;
	readonly isWorkspaceAlertsStorageConfigured?: boolean;
	readonly muteActionsDuration?: string;
	readonly overrideQueryTimeRange?: string;
	readonly scopes?: string[];
	readonly severity?: number;
	readonly skipQueryValidation?: boolean;
	readonly targetResourceTypes?: string[];
	readonly windowSize?: string;
}
export interface ScheduledQueryRuleResourceTags {
	readonly [key: string]: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export default {
	scheduledQueryRules: scheduledQueryRules,
};
