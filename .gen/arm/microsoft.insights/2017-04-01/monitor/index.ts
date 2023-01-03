import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class actionGroups extends ArmResource<actionGroupsComponentInputs> implements actionGroupsComponentOutputs {
	constructor(entity: ADKEntity, options: actionGroupsComponentInputs) {
		super(entity, options.name, "microsoft.insights/actionGroups", "2017-04-01", options);
	}
	public readonly apiVersion: "2017-04-01";
	public readonly id: string;
	public readonly type: "microsoft.insights/actionGroups";
}
export interface actionGroupsComponentOutputs {
	readonly apiVersion: "2017-04-01";
	readonly id: string;
	readonly type: "microsoft.insights/actionGroups";
}
export interface actionGroupsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ActionGroup | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class activityLogAlerts
	extends ArmResource<activityLogAlertsComponentInputs>
	implements activityLogAlertsComponentOutputs
{
	constructor(entity: ADKEntity, options: activityLogAlertsComponentInputs) {
		super(entity, options.name, "microsoft.insights/activityLogAlerts", "2017-04-01", options);
	}
	public readonly apiVersion: "2017-04-01";
	public readonly id: string;
	public readonly type: "microsoft.insights/activityLogAlerts";
}
export interface activityLogAlertsComponentOutputs {
	readonly apiVersion: "2017-04-01";
	readonly id: string;
	readonly type: "microsoft.insights/activityLogAlerts";
}
export interface activityLogAlertsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ActivityLogAlert | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface ActionGroup {
	readonly automationRunbookReceivers?: AutomationRunbookReceiver[] | undefined;
	readonly azureAppPushReceivers?: AzureAppPushReceiver[] | undefined;
	readonly emailReceivers?: EmailReceiver[] | undefined;
	readonly enabled: boolean;
	readonly groupShortName: string;
	readonly itsmReceivers?: ItsmReceiver[] | undefined;
	readonly smsReceivers?: SmsReceiver[] | undefined;
	readonly webhookReceivers?: WebhookReceiver[] | undefined;
}
export interface ActivityLogAlert {
	readonly actions: ActivityLogAlertActionList;
	readonly condition: ActivityLogAlertAllOfCondition;
	readonly description?: string | undefined;
	readonly enabled?: boolean | undefined;
	readonly scopes: string[];
}
export interface ActivityLogAlertActionGroup {
	readonly actionGroupId: string;
	readonly webhookProperties?: ActivityLogAlertActionGroupWebhookProperties | undefined;
}
export interface ActivityLogAlertActionGroupWebhookProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ActivityLogAlertActionList {
	readonly actionGroups?: ActivityLogAlertActionGroup[] | undefined;
}
export interface ActivityLogAlertAllOfCondition {
	readonly allOf: ActivityLogAlertLeafCondition[];
}
export interface ActivityLogAlertLeafCondition {
	readonly equals: string;
	readonly field: string;
}
export interface AutomationRunbookReceiver {
	readonly automationAccountId: string;
	readonly isGlobalRunbook: boolean;
	readonly name?: string | undefined;
	readonly runbookName: string;
	readonly serviceUri?: string | undefined;
	readonly webhookResourceId: string;
}
export interface AzureAppPushReceiver {
	readonly emailAddress: string;
	readonly name: string;
}
export interface EmailReceiver {
	readonly emailAddress: string;
	readonly name: string;
	readonly status?: ("Disabled" | "Enabled") | undefined;
}
export interface ItsmReceiver {
	readonly connectionId: string;
	readonly name: string;
	readonly region: string;
	readonly ticketConfiguration: string;
	readonly workspaceId: string;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SmsReceiver {
	readonly countryCode: string;
	readonly name: string;
	readonly phoneNumber: string;
	readonly status?: ("Disabled" | "Enabled") | undefined;
}
export interface WebhookReceiver {
	readonly name: string;
	readonly serviceUri: string;
}
export default {
	actionGroups: actionGroups,
	activityLogAlerts: activityLogAlerts,
};
