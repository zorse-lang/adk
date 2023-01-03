import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class actionGroups extends ArmResource<actionGroupsComponentInputs> implements actionGroupsComponentOutputs {
	constructor(entity: ADKEntity, options: actionGroupsComponentInputs) {
		super(entity, options.name, "microsoft.insights/actionGroups", "2018-09-01", options);
	}
	public readonly apiVersion: "2018-09-01";
	public readonly id: string;
	public readonly type: "microsoft.insights/actionGroups";
}
export interface actionGroupsComponentOutputs {
	readonly apiVersion: "2018-09-01";
	readonly id: string;
	readonly type: "microsoft.insights/actionGroups";
}
export interface actionGroupsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ActionGroup | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface ActionGroup {
	readonly armRoleReceivers?: ArmRoleReceiver[] | undefined;
	readonly automationRunbookReceivers?: AutomationRunbookReceiver[] | undefined;
	readonly azureAppPushReceivers?: AzureAppPushReceiver[] | undefined;
	readonly azureFunctionReceivers?: AzureFunctionReceiver[] | undefined;
	readonly emailReceivers?: EmailReceiver[] | undefined;
	readonly enabled: boolean;
	readonly groupShortName: string;
	readonly itsmReceivers?: ItsmReceiver[] | undefined;
	readonly logicAppReceivers?: LogicAppReceiver[] | undefined;
	readonly smsReceivers?: SmsReceiver[] | undefined;
	readonly voiceReceivers?: VoiceReceiver[] | undefined;
	readonly webhookReceivers?: WebhookReceiver[] | undefined;
}
export interface ArmRoleReceiver {
	readonly name: string;
	readonly roleId: string;
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
export interface AzureFunctionReceiver {
	readonly functionAppResourceId: string;
	readonly functionName: string;
	readonly httpTriggerUrl: string;
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
export interface LogicAppReceiver {
	readonly callbackUrl: string;
	readonly name: string;
	readonly resourceId: string;
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
	actionGroups: actionGroups,
};
