import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class autoscalesettings
	extends ArmResource<autoscalesettingsComponentInputs>
	implements autoscalesettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: autoscalesettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/autoscalesettings", "2021-05-01-preview", options);
	}
	public readonly apiVersion: "2021-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/autoscalesettings";
}
export interface autoscalesettingsComponentOutputs {
	readonly apiVersion: "2021-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Insights/autoscalesettings";
}
export interface autoscalesettingsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: AutoscaleSetting;
	readonly systemData?: SystemData | undefined;
	readonly tags?: AutoscaleSettingResourceTags | undefined;
}
export class diagnosticSettings
	extends ArmResource<diagnosticSettingsComponentInputs>
	implements diagnosticSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: diagnosticSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/diagnosticSettings", "2021-05-01-preview", options);
	}
	public readonly apiVersion: "2021-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/diagnosticSettings";
}
export interface diagnosticSettingsComponentOutputs {
	readonly apiVersion: "2021-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Insights/diagnosticSettings";
}
export interface diagnosticSettingsComponentInputs {
	readonly name: string;
	readonly properties?: DiagnosticSettings | undefined;
	readonly systemData?: SystemData | undefined;
}
export class diagnosticSettingsCategories
	extends ArmResource<diagnosticSettingsCategoriesComponentInputs>
	implements diagnosticSettingsCategoriesComponentOutputs
{
	constructor(entity: ADKEntity, options: diagnosticSettingsCategoriesComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/diagnosticSettingsCategories", "2021-05-01-preview", options);
	}
	public readonly apiVersion: "2021-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/diagnosticSettingsCategories";
}
export interface diagnosticSettingsCategoriesComponentOutputs {
	readonly apiVersion: "2021-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Insights/diagnosticSettingsCategories";
}
export interface diagnosticSettingsCategoriesComponentInputs {
	readonly name: string;
	readonly properties?: DiagnosticSettingsCategory | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly predictiveAutoscalePolicy?: PredictiveAutoscalePolicy | undefined;
	readonly profiles: AutoscaleProfile[];
	readonly targetResourceLocation?: string | undefined;
	readonly targetResourceUri?: string | undefined;
}
export interface AutoscaleSettingResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface DiagnosticSettings {
	readonly eventHubAuthorizationRuleId?: string | undefined;
	readonly eventHubName?: string | undefined;
	readonly logAnalyticsDestinationType?: string | undefined;
	readonly logs?: LogSettings[] | undefined;
	readonly marketplacePartnerId?: string | undefined;
	readonly metrics?: MetricSettings[] | undefined;
	readonly serviceBusRuleId?: string | undefined;
	readonly storageAccountId?: string | undefined;
	readonly workspaceId?: string | undefined;
}
export interface DiagnosticSettingsCategory {
	readonly categoryGroups?: string[] | undefined;
	readonly categoryType?: ("Logs" | "Metrics") | undefined;
}
export interface EmailNotification {
	readonly customEmails?: string[] | undefined;
	readonly sendToSubscriptionAdministrator?: boolean | undefined;
	readonly sendToSubscriptionCoAdministrators?: boolean | undefined;
}
export interface LogSettings {
	readonly category?: string | undefined;
	readonly categoryGroup?: string | undefined;
	readonly enabled: boolean;
	readonly retentionPolicy?: RetentionPolicy | undefined;
}
export interface MetricSettings {
	readonly category?: string | undefined;
	readonly enabled: boolean;
	readonly retentionPolicy?: RetentionPolicy | undefined;
	readonly timeGrain?: string | undefined;
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
export interface PredictiveAutoscalePolicy {
	readonly scaleLookAheadTime?: string | undefined;
	readonly scaleMode: "Disabled" | "Enabled";
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
export interface RetentionPolicy {
	readonly days: number;
	readonly enabled: boolean;
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
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
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
	diagnosticSettings: diagnosticSettings,
	diagnosticSettingsCategories: diagnosticSettingsCategories,
};
