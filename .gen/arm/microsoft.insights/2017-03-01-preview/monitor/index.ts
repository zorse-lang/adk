import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class activityLogAlerts
	extends ArmResource<activityLogAlertsComponentInputs>
	implements activityLogAlertsComponentOutputs
{
	constructor(entity: ADKEntity, options: activityLogAlertsComponentInputs) {
		super(entity, options.name, "microsoft.insights/activityLogAlerts", "2017-03-01-preview", options);
	}
	public readonly apiVersion: "2017-03-01-preview";
	public readonly id: string;
	public readonly type: "microsoft.insights/activityLogAlerts";
}
export interface activityLogAlertsComponentOutputs {
	readonly apiVersion: "2017-03-01-preview";
	readonly id: string;
	readonly type: "microsoft.insights/activityLogAlerts";
}
export interface activityLogAlertsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ActivityLogAlert;
	readonly tags?: ResourceTags;
}
export interface ActivityLogAlert {
	readonly actions: ActivityLogAlertActionList;
	readonly condition: ActivityLogAlertAllOfCondition;
	readonly description?: string;
	readonly enabled?: boolean;
	readonly scopes: string[];
}
export interface ActivityLogAlertActionGroup {
	readonly actionGroupId: string;
	readonly webhookProperties?: ActivityLogAlertActionGroupWebhookProperties;
}
export interface ActivityLogAlertActionGroupWebhookProperties {
	readonly [key: string]: string;
}
export interface ActivityLogAlertActionList {
	readonly actionGroups?: ActivityLogAlertActionGroup[];
}
export interface ActivityLogAlertAllOfCondition {
	readonly allOf: ActivityLogAlertLeafCondition[];
}
export interface ActivityLogAlertLeafCondition {
	readonly equals: string;
	readonly field: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export default {
	activityLogAlerts: activityLogAlerts,
};
