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
	readonly properties?: ActivityLogAlert | undefined;
	readonly tags?: ResourceTags | undefined;
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
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	activityLogAlerts: activityLogAlerts,
};
