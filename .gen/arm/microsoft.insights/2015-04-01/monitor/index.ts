import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class autoscalesettings
	extends ArmResource<autoscalesettingsComponentInputs>
	implements autoscalesettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: autoscalesettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/autoscalesettings", "2015-04-01", options);
	}
	public readonly apiVersion: "2015-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/autoscalesettings";
}
export interface autoscalesettingsComponentOutputs {
	readonly apiVersion: "2015-04-01";
	readonly id: string;
	readonly type: "Microsoft.Insights/autoscalesettings";
}
export interface autoscalesettingsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: AutoscaleSetting;
	readonly tags?: ResourceTags | undefined;
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
	autoscalesettings: autoscalesettings,
};
