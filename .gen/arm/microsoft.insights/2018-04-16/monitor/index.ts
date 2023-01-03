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
	readonly etag?: string | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: LogSearchRule;
	readonly tags?: ResourceTags | undefined;
}
export interface Action {}
export interface AzNsActionGroup {
	readonly actionGroup?: string[] | undefined;
	readonly customWebhookPayload?: string | undefined;
	readonly emailSubject?: string | undefined;
}
export interface Criteria {
	readonly dimensions?: Dimension[] | undefined;
	readonly metricName: string;
}
export interface Dimension {
	readonly name: string;
	readonly operator: "Include";
	readonly values: string[];
}
export interface LogMetricTrigger {
	readonly metricColumn?: string | undefined;
	readonly metricTriggerType?: ("Consecutive" | "Total") | undefined;
	readonly threshold?: number | undefined;
	readonly thresholdOperator?:
		| ("Equal" | "GreaterThan" | "GreaterThanOrEqual" | "LessThan" | "LessThanOrEqual")
		| undefined;
}
export interface LogSearchRule {
	readonly action: Action;
	readonly autoMitigate?: boolean | undefined;
	readonly createdWithApiVersion?: string | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly enabled?: ("false" | "true") | undefined;
	readonly isLegacyLogAnalyticsRule?: boolean | undefined;
	readonly lastUpdatedTime?: string | undefined;
	readonly provisioningState?: ("Canceled" | "Deploying" | "Failed" | "Succeeded") | undefined;
	readonly schedule?: Schedule | undefined;
	readonly source: Source;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Schedule {
	readonly frequencyInMinutes: number;
	readonly timeWindowInMinutes: number;
}
export interface Source {
	readonly authorizedResources?: string[] | undefined;
	readonly dataSourceId: string;
	readonly query?: string | undefined;
	readonly queryType?: "ResultCount" | undefined;
}
export interface TriggerCondition {
	readonly metricTrigger?: LogMetricTrigger | undefined;
	readonly threshold: number;
	readonly thresholdOperator: "Equal" | "GreaterThan" | "GreaterThanOrEqual" | "LessThan" | "LessThanOrEqual";
}
export default {
	scheduledQueryRules: scheduledQueryRules,
};
