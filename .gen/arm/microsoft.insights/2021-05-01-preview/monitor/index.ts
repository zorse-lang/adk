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
	readonly systemData?: SystemData;
	readonly tags?: AutoscaleSettingResourceTags;
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
	readonly properties?: DiagnosticSettings;
	readonly systemData?: SystemData;
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
	readonly properties?: DiagnosticSettingsCategory;
	readonly systemData?: SystemData;
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
	readonly predictiveAutoscalePolicy?: PredictiveAutoscalePolicy;
	readonly profiles: AutoscaleProfile[];
	readonly targetResourceLocation?: string;
	readonly targetResourceUri?: string;
}
export interface AutoscaleSettingResourceTags {
	readonly [key: string]: string;
}
export interface DiagnosticSettings {
	readonly eventHubAuthorizationRuleId?: string;
	readonly eventHubName?: string;
	readonly logAnalyticsDestinationType?: string;
	readonly logs?: LogSettings[];
	readonly marketplacePartnerId?: string;
	readonly metrics?: MetricSettings[];
	readonly serviceBusRuleId?: string;
	readonly storageAccountId?: string;
	readonly workspaceId?: string;
}
export interface DiagnosticSettingsCategory {
	readonly categoryGroups?: string[];
	readonly categoryType?: "Logs" | "Metrics";
}
export interface EmailNotification {
	readonly customEmails?: string[];
	readonly sendToSubscriptionAdministrator?: boolean;
	readonly sendToSubscriptionCoAdministrators?: boolean;
}
export interface LogSettings {
	readonly category?: string;
	readonly categoryGroup?: string;
	readonly enabled: boolean;
	readonly retentionPolicy?: RetentionPolicy;
}
export interface MetricSettings {
	readonly category?: string;
	readonly enabled: boolean;
	readonly retentionPolicy?: RetentionPolicy;
	readonly timeGrain?: string;
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
export interface PredictiveAutoscalePolicy {
	readonly scaleLookAheadTime?: string;
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
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
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
	diagnosticSettings: diagnosticSettings,
	diagnosticSettingsCategories: diagnosticSettingsCategories,
};
