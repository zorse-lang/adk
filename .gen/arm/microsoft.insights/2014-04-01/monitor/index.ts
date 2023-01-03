import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class alertrules extends ArmResource<alertrulesComponentInputs> implements alertrulesComponentOutputs {
	constructor(entity: ADKEntity, options: alertrulesComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/alertrules", "2014-04-01", options);
	}
	public readonly apiVersion: "2014-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/alertrules";
}
export interface alertrulesComponentOutputs {
	readonly apiVersion: "2014-04-01";
	readonly id: string;
	readonly type: "Microsoft.Insights/alertrules";
}
export interface alertrulesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: AlertRule;
	readonly tags?: ResourceTags | undefined;
}
export class autoscalesettings
	extends ArmResource<autoscalesettingsComponentInputs>
	implements autoscalesettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: autoscalesettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/autoscalesettings", "2014-04-01", options);
	}
	public readonly apiVersion: "2014-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/autoscalesettings";
}
export interface autoscalesettingsComponentOutputs {
	readonly apiVersion: "2014-04-01";
	readonly id: string;
	readonly type: "Microsoft.Insights/autoscalesettings";
}
export interface autoscalesettingsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: AutoscaleSetting;
	readonly tags?: ResourceTags | undefined;
}
export interface AlertRule {
	readonly action?: RuleAction | undefined;
	readonly actions?: RuleAction[] | undefined;
	readonly condition: RuleCondition;
	readonly description?: string | undefined;
	readonly isEnabled: boolean;
	readonly lastUpdatedTime?: string | undefined;
	readonly name: string;
	readonly provisioningState?: string | undefined;
}
export interface AutoscaleNotification {
	readonly email?: EmailNotification | undefined;
	readonly operation: "Scale";
	readonly webhooks?: WebhookNotification[] | undefined;
}
export interface AutoscaleProfile {
	readonly capacity: ScaleCapacity;
	readonly fixedDate?: TimeWindow | undefined;
	readonly name: string;
	readonly recurrence?: Recurrence | undefined;
	readonly rules: ScaleRule[];
}
export interface AutoscaleSetting {
	readonly enabled?: boolean | undefined;
	readonly name?: string | undefined;
	readonly notifications?: AutoscaleNotification[] | undefined;
	readonly profiles: AutoscaleProfile[];
	readonly targetResourceLocation?: string | undefined;
	readonly targetResourceUri?: string | undefined;
}
export interface EmailNotification {
	readonly customEmails?: string[] | undefined;
	readonly sendToSubscriptionAdministrator?: boolean | undefined;
	readonly sendToSubscriptionCoAdministrators?: boolean | undefined;
}
export interface ManagementEventAggregationCondition {
	readonly operator?: ("GreaterThan" | "GreaterThanOrEqual" | "LessThan") | undefined;
	readonly threshold?: number | undefined;
	readonly windowSize?: string | undefined;
}
export interface MetricTrigger {
	readonly dimensions?: ScaleRuleMetricDimension[] | undefined;
	readonly dividePerInstance?: boolean | undefined;
	readonly metricName: string;
	readonly metricNamespace?: string | undefined;
	readonly metricResourceLocation?: string | undefined;
	readonly metricResourceUri: string;
	readonly operator: "Equals" | "GreaterThan" | "GreaterThanOrEqual" | "LessThan" | "LessThanOrEqual";
	readonly statistic: "Average" | "Count" | "Max" | "Min";
	readonly threshold: number;
	readonly timeAggregation: "Average" | "Count" | "Last" | "Maximum" | "Minimum";
	readonly timeGrain: string;
	readonly timeWindow: string;
}
export interface Recurrence {
	readonly frequency: "Day" | "Hour" | "Minute" | "Month" | "None" | "Second" | "Week";
	readonly schedule: RecurrentSchedule;
}
export interface RecurrentSchedule {
	readonly days: string[];
	readonly hours: number[];
	readonly minutes: number[];
	readonly timeZone: string;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface RuleAction {}
export interface RuleCondition {
	readonly dataSource?: RuleDataSource | undefined;
}
export interface RuleDataSource {
	readonly legacyResourceId?: string | undefined;
	readonly metricNamespace?: string | undefined;
	readonly resourceLocation?: string | undefined;
	readonly resourceUri?: string | undefined;
}
export interface RuleManagementEventClaimsDataSource {
	readonly emailAddress?: string | undefined;
}
export interface RuleWebhookActionProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ScaleAction {
	readonly cooldown: string;
	readonly direction: "Decrease" | "Increase";
	readonly type: "ChangeCount" | "ExactCount" | "PercentChangeCount";
	readonly value?: string | undefined;
}
export interface ScaleCapacity {
	readonly default: string;
	readonly maximum: string;
	readonly minimum: string;
}
export interface ScaleRule {
	readonly metricTrigger: MetricTrigger;
	readonly scaleAction: ScaleAction;
}
export interface ScaleRuleMetricDimension {
	readonly DimensionName: string;
	readonly Operator: "Equals" | "NotEquals";
	readonly Values: string[];
}
export interface TimeWindow {
	readonly end: string;
	readonly start: string;
	readonly timeZone?: string | undefined;
}
export interface WebhookNotification {
	readonly properties?: WebhookNotificationProperties | undefined;
	readonly serviceUri?: string | undefined;
}
export interface WebhookNotificationProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	alertrules: alertrules,
	autoscalesettings: autoscalesettings,
};
