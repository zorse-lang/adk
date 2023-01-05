import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class scheduledQueryRules
	extends ArmResource<scheduledQueryRulesComponentInputs>
	implements scheduledQueryRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: scheduledQueryRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/scheduledQueryRules", "2018-04-16", options);
	}
	public readonly apiVersion: "2018-04-16";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/scheduledQueryRules";
}
export interface scheduledQueryRulesComponentOutputs {
	readonly apiVersion: "2018-04-16";
	readonly id: string;
	readonly type: "Microsoft.Insights/scheduledQueryRules";
}
export interface scheduledQueryRulesComponentInputs {
	readonly etag?: string;
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties: LogSearchRule;
	readonly tags?: ResourceTags;
}
export interface Action {}
export interface AzNsActionGroup {
	readonly actionGroup?: string[];
	readonly customWebhookPayload?: string;
	readonly emailSubject?: string;
}
export interface Criteria {
	readonly dimensions?: Dimension[];
	readonly metricName: string;
}
export interface Dimension {
	readonly name: string;
	readonly operator: "Include";
	readonly values: string[];
}
export interface LogMetricTrigger {
	readonly metricColumn?: string;
	readonly metricTriggerType?: "Consecutive" | "Total";
	readonly threshold?: number;
	readonly thresholdOperator?: "Equal" | "GreaterThan" | "GreaterThanOrEqual" | "LessThan" | "LessThanOrEqual";
}
export interface LogSearchRule {
	readonly action: Action;
	readonly autoMitigate?: boolean;
	readonly createdWithApiVersion?: string;
	readonly description?: string;
	readonly displayName?: string;
	readonly enabled?: "false" | "true";
	readonly isLegacyLogAnalyticsRule?: boolean;
	readonly lastUpdatedTime?: string;
	readonly provisioningState?: "Canceled" | "Deploying" | "Failed" | "Succeeded";
	readonly schedule?: Schedule;
	readonly source: Source;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface Schedule {
	readonly frequencyInMinutes: number;
	readonly timeWindowInMinutes: number;
}
export interface Source {
	readonly authorizedResources?: string[];
	readonly dataSourceId: string;
	readonly query?: string;
	readonly queryType?: "ResultCount";
}
export interface TriggerCondition {
	readonly metricTrigger?: LogMetricTrigger;
	readonly threshold: number;
	readonly thresholdOperator: "Equal" | "GreaterThan" | "GreaterThanOrEqual" | "LessThan" | "LessThanOrEqual";
}
export default {
	scheduledQueryRules: scheduledQueryRules,
};
