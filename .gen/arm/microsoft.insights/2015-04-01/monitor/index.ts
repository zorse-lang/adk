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
	readonly tags?: ResourceTags;
}
export interface AutoscaleNotification {
	readonly email?: EmailNotification;
	readonly operation: "Scale";
	readonly webhooks?: WebhookNotification[];
}
export interface AutoscaleProfile {
	readonly capacity: ScaleCapacity;
	readonly fixedDate?: TimeWindow;
	readonly name: string;
	readonly recurrence?: Recurrence;
	readonly rules: ScaleRule[];
}
export interface AutoscaleSetting {
	readonly enabled?: boolean;
	readonly name?: string;
	readonly notifications?: AutoscaleNotification[];
	readonly profiles: AutoscaleProfile[];
	readonly targetResourceLocation?: string;
	readonly targetResourceUri?: string;
}
export interface EmailNotification {
	readonly customEmails?: string[];
	readonly sendToSubscriptionAdministrator?: boolean;
	readonly sendToSubscriptionCoAdministrators?: boolean;
}
export interface MetricTrigger {
	readonly dimensions?: ScaleRuleMetricDimension[];
	readonly dividePerInstance?: boolean;
	readonly metricName: string;
	readonly metricNamespace?: string;
	readonly metricResourceLocation?: string;
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
	readonly [key: string]: string;
}
export interface ScaleAction {
	readonly cooldown: string;
	readonly direction: "Decrease" | "Increase";
	readonly type: "ChangeCount" | "ExactCount" | "PercentChangeCount";
	readonly value?: string;
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
	readonly timeZone?: string;
}
export interface WebhookNotification {
	readonly properties?: WebhookNotificationProperties;
	readonly serviceUri?: string;
}
export interface WebhookNotificationProperties {
	readonly [key: string]: string;
}
export default {
	autoscalesettings: autoscalesettings,
};
