import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class actionGroups extends ArmResource<actionGroupsComponentInputs> implements actionGroupsComponentOutputs {
	constructor(entity: ADKEntity, options: actionGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/actionGroups", "2022-06-01", options);
	}
	public readonly apiVersion: "2022-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/actionGroups";
}
export interface actionGroupsComponentOutputs {
	readonly apiVersion: "2022-06-01";
	readonly id: string;
	readonly type: "Microsoft.Insights/actionGroups";
}
export interface actionGroupsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ActionGroup;
	readonly tags?: AzureResourceTags;
}
export interface ActionGroup {
	readonly armRoleReceivers?: ArmRoleReceiver[];
	readonly automationRunbookReceivers?: AutomationRunbookReceiver[];
	readonly azureAppPushReceivers?: AzureAppPushReceiver[];
	readonly azureFunctionReceivers?: AzureFunctionReceiver[];
	readonly emailReceivers?: EmailReceiver[];
	readonly enabled: boolean;
	readonly eventHubReceivers?: EventHubReceiver[];
	readonly groupShortName: string;
	readonly itsmReceivers?: ItsmReceiver[];
	readonly logicAppReceivers?: LogicAppReceiver[];
	readonly smsReceivers?: SmsReceiver[];
	readonly voiceReceivers?: VoiceReceiver[];
	readonly webhookReceivers?: WebhookReceiver[];
}
export interface ArmRoleReceiver {
	readonly name: string;
	readonly roleId: string;
	readonly useCommonAlertSchema?: boolean;
}
export interface AutomationRunbookReceiver {
	readonly automationAccountId: string;
	readonly isGlobalRunbook: boolean;
	readonly name?: string;
	readonly runbookName: string;
	readonly serviceUri?: string;
	readonly useCommonAlertSchema?: boolean;
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
	readonly useCommonAlertSchema?: boolean;
}
export interface AzureResourceTags {
	readonly [key: string]: string;
}
export interface EmailReceiver {
	readonly emailAddress: string;
	readonly name: string;
	readonly status?: "Disabled" | "Enabled";
	readonly useCommonAlertSchema?: boolean;
}
export interface EventHubReceiver {
	readonly eventHubName: string;
	readonly eventHubNameSpace: string;
	readonly name: string;
	readonly subscriptionId: string;
	readonly tenantId?: string;
	readonly useCommonAlertSchema?: boolean;
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
	readonly useCommonAlertSchema?: boolean;
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
	readonly identifierUri?: string;
	readonly name: string;
	readonly objectId?: string;
	readonly serviceUri: string;
	readonly tenantId?: string;
	readonly useAadAuth?: boolean;
	readonly useCommonAlertSchema?: boolean;
}
export default {
	actionGroups: actionGroups,
};
