import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class microsoft_insights_actionGroups
	extends ArmResource<microsoft_insights_actionGroupsComponentInputs>
	implements microsoft_insights_actionGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: microsoft_insights_actionGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/microsoft.insights/actionGroups", "2018-03-01", options);
	}
	public readonly apiVersion: "2018-03-01";
	public readonly id: string;
	public readonly type: "microsoft.insights/actionGroups";
}
export interface microsoft_insights_actionGroupsComponentOutputs {
	readonly apiVersion: "2018-03-01";
	readonly id: string;
	readonly type: "microsoft.insights/actionGroups";
}
export interface microsoft_insights_actionGroupsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ActionGroup;
	readonly tags?: ResourceTags;
}
export class metricAlerts extends ArmResource<metricAlertsComponentInputs> implements metricAlertsComponentOutputs {
	constructor(entity: ADKEntity, options: metricAlertsComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/metricAlerts", "2018-03-01", options);
	}
	public readonly apiVersion: "2018-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/metricAlerts";
}
export interface metricAlertsComponentOutputs {
	readonly apiVersion: "2018-03-01";
	readonly id: string;
	readonly type: "Microsoft.Insights/metricAlerts";
}
export interface metricAlertsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: MetricAlertProperties;
	readonly tags?: ResourceTags;
}
export interface ActionGroup {
	readonly automationRunbookReceivers?: AutomationRunbookReceiver[];
	readonly azureAppPushReceivers?: AzureAppPushReceiver[];
	readonly azureFunctionReceivers?: AzureFunctionReceiver[];
	readonly emailReceivers?: EmailReceiver[];
	readonly enabled: boolean;
	readonly groupShortName: string;
	readonly itsmReceivers?: ItsmReceiver[];
	readonly logicAppReceivers?: LogicAppReceiver[];
	readonly smsReceivers?: SmsReceiver[];
	readonly voiceReceivers?: VoiceReceiver[];
	readonly webhookReceivers?: WebhookReceiver[];
}
export interface AutomationRunbookReceiver {
	readonly automationAccountId: string;
	readonly isGlobalRunbook: boolean;
	readonly name?: string;
	readonly runbookName: string;
	readonly serviceUri?: string;
	readonly webhookResourceId: string;
}
export interface AzureAppPushReceiver {
	readonly emailAddress: string;
	readonly name: string;
}
export interface AzureFunctionReceiver {
	readonly functionAppResourceId: string;
	readonly functionName: string;
	readonly httpTriggerUrl: string;
	readonly name: string;
}
export interface DynamicThresholdFailingPeriods {
	readonly minFailingPeriodsToAlert: number;
	readonly numberOfEvaluationPeriods: number;
}
export interface EmailReceiver {
	readonly emailAddress: string;
	readonly name: string;
	readonly status?: "Disabled" | "Enabled";
}
export interface ItsmReceiver {
	readonly connectionId: string;
	readonly name: string;
	readonly region: string;
	readonly ticketConfiguration: string;
	readonly workspaceId: string;
}
export interface LogicAppReceiver {
	readonly callbackUrl: string;
	readonly name: string;
	readonly resourceId: string;
}
export interface MetricAlertAction {
	readonly actionGroupId?: string;
	readonly webHookProperties?: MetricAlertActionWebHookProperties;
}
export interface MetricAlertActionWebHookProperties {
	readonly [key: string]: string;
}
export interface MetricAlertCriteria {}
export interface MetricAlertProperties {
	readonly actions?: MetricAlertAction[];
	readonly autoMitigate?: boolean;
	readonly criteria: MetricAlertCriteria;
	readonly description?: string;
	readonly enabled: boolean;
	readonly evaluationFrequency: string;
	readonly isMigrated?: boolean;
	readonly lastUpdatedTime?: string;
	readonly scopes: string[];
	readonly severity: number;
	readonly targetResourceRegion?: string;
	readonly targetResourceType?: string;
	readonly windowSize: string;
}
export interface MetricCriteria {
	readonly criterionType: "DynamicThresholdCriterion" | "StaticThresholdCriterion";
	readonly dimensions?: MetricDimension[];
	readonly metricName: string;
	readonly metricNamespace?: string;
	readonly name: string;
	readonly operator: "Equals" | "GreaterThan" | "GreaterThanOrEqual" | "LessThan" | "LessThanOrEqual";
	readonly skipMetricValidation?: boolean;
	readonly threshold: number;
	readonly timeAggregation: "Average" | "Count" | "Maximum" | "Minimum" | "Total";
	readonly [key: string]: any;
}
export interface MetricDimension {
	readonly name: string;
	readonly operator: string;
	readonly values: string[];
}
export interface MultiMetricCriteria {
	readonly dimensions?: MetricDimension[];
	readonly metricName: string;
	readonly metricNamespace?: string;
	readonly name: string;
	readonly skipMetricValidation?: boolean;
	readonly timeAggregation: "Average" | "Count" | "Maximum" | "Minimum" | "Total";
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface SmsReceiver {
	readonly countryCode: string;
	readonly name: string;
	readonly phoneNumber: string;
	readonly status?: "Disabled" | "Enabled";
}
export interface VoiceReceiver {
	readonly countryCode: string;
	readonly name: string;
	readonly phoneNumber: string;
}
export interface WebhookReceiver {
	readonly name: string;
	readonly serviceUri: string;
}
export default {
	"microsoft.insights/actionGroups": microsoft_insights_actionGroups,
	metricAlerts: metricAlerts,
};
