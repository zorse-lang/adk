import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class prometheusRuleGroups
	extends ArmResource<prometheusRuleGroupsComponentInputs>
	implements prometheusRuleGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: prometheusRuleGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.AlertsManagement/prometheusRuleGroups", "2021-07-22-preview", options);
	}
	public readonly apiVersion: "2021-07-22-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AlertsManagement/prometheusRuleGroups";
}
export interface prometheusRuleGroupsComponentOutputs {
	readonly apiVersion: "2021-07-22-preview";
	readonly id: string;
	readonly type: "Microsoft.AlertsManagement/prometheusRuleGroups";
}
export interface prometheusRuleGroupsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: PrometheusRuleGroupProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export interface PrometheusRule {
	readonly actions?: PrometheusRuleGroupAction[];
	readonly alert?: string;
	readonly annotations?: PrometheusRuleAnnotations;
	readonly enabled?: boolean;
	readonly expression: string;
	readonly for?: string;
	readonly labels?: PrometheusRuleLabels;
	readonly record?: string;
	readonly resolveConfiguration?: PrometheusRuleResolveConfiguration;
	readonly severity?: number;
}
export interface PrometheusRuleAnnotations {
	readonly [key: string]: string;
}
export interface PrometheusRuleGroupAction {
	readonly actionGroupId?: string;
	readonly actionProperties?: PrometheusRuleGroupActionProperties;
}
export interface PrometheusRuleGroupActionProperties {
	readonly [key: string]: string;
}
export interface PrometheusRuleGroupProperties {
	readonly clusterName?: string;
	readonly description?: string;
	readonly enabled?: boolean;
	readonly interval?: string;
	readonly rules: PrometheusRule[];
	readonly scopes: string[];
}
export interface PrometheusRuleLabels {
	readonly [key: string]: string;
}
export interface PrometheusRuleResolveConfiguration {
	readonly autoResolved?: boolean;
	readonly timeToResolve?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export default {
	prometheusRuleGroups: prometheusRuleGroups,
};
