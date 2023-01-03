import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class activityLogAlerts
	extends ArmResource<activityLogAlertsComponentInputs>
	implements activityLogAlertsComponentOutputs
{
	constructor(entity: ADKEntity, options: activityLogAlertsComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/activityLogAlerts", "2020-10-01", options);
	}
	public readonly apiVersion: "2020-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/activityLogAlerts";
}
export interface activityLogAlertsComponentOutputs {
	readonly apiVersion: "2020-10-01";
	readonly id: string;
	readonly type: "Microsoft.Insights/activityLogAlerts";
}
export interface activityLogAlertsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: AlertRuleProperties | undefined;
	readonly tags?: AzureResourceTags | undefined;
}
export interface ActionGroup {
	readonly actionGroupId: string;
	readonly webhookProperties?: ActionGroupWebhookProperties | undefined;
}
export interface ActionGroupWebhookProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ActionList {
	readonly actionGroups?: ActionGroup[] | undefined;
}
export interface AlertRuleAllOfCondition {
	readonly allOf: AlertRuleanyOfOrLeafCondition[];
}
export interface AlertRuleanyOfOrLeafCondition {
	readonly anyOf?: AlertRuleLeafCondition[] | undefined;
	readonly containsAny?: string[] | undefined;
	readonly equals?: string | undefined;
	readonly field?: string | undefined;
}
export interface AlertRuleLeafCondition {
	readonly containsAny?: string[] | undefined;
	readonly equals?: string | undefined;
	readonly field?: string | undefined;
}
export interface AlertRuleProperties {
	readonly actions: ActionList;
	readonly condition: AlertRuleAllOfCondition;
	readonly description?: string | undefined;
	readonly enabled?: boolean | undefined;
	readonly scopes: string[];
}
export interface AzureResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	activityLogAlerts: activityLogAlerts,
};
