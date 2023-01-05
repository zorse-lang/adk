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
	readonly location?: string;
	readonly name: string;
	readonly properties?: AlertRuleProperties;
	readonly tags?: AzureResourceTags;
}
export interface ActionGroup {
	readonly actionGroupId: string;
	readonly webhookProperties?: ActionGroupWebhookProperties;
}
export interface ActionGroupWebhookProperties {
	readonly [key: string]: string;
}
export interface ActionList {
	readonly actionGroups?: ActionGroup[];
}
export interface AlertRuleAllOfCondition {
	readonly allOf: AlertRuleanyOfOrLeafCondition[];
}
export interface AlertRuleanyOfOrLeafCondition {
	readonly anyOf?: AlertRuleLeafCondition[];
	readonly containsAny?: string[];
	readonly equals?: string;
	readonly field?: string;
}
export interface AlertRuleLeafCondition {
	readonly containsAny?: string[];
	readonly equals?: string;
	readonly field?: string;
}
export interface AlertRuleProperties {
	readonly actions: ActionList;
	readonly condition: AlertRuleAllOfCondition;
	readonly description?: string;
	readonly enabled?: boolean;
	readonly scopes: string[];
}
export interface AzureResourceTags {
	readonly [key: string]: string;
}
export default {
	activityLogAlerts: activityLogAlerts,
};
