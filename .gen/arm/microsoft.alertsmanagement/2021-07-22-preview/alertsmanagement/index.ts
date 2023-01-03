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
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface PrometheusRule {
	readonly actions?: PrometheusRuleGroupAction[] | undefined;
	readonly alert?: string | undefined;
	readonly annotations?: PrometheusRuleAnnotations | undefined;
	readonly enabled?: boolean | undefined;
	readonly expression: string;
	readonly for?: string | undefined;
	readonly labels?: PrometheusRuleLabels | undefined;
	readonly record?: string | undefined;
	readonly resolveConfiguration?: PrometheusRuleResolveConfiguration | undefined;
	readonly severity?: number | undefined;
}
export interface PrometheusRuleAnnotations {
	readonly "[ key: string ]"?: string | undefined;
}
export interface PrometheusRuleGroupAction {
	readonly actionGroupId?: string | undefined;
	readonly actionProperties?: PrometheusRuleGroupActionProperties | undefined;
}
export interface PrometheusRuleGroupActionProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface PrometheusRuleGroupProperties {
	readonly clusterName?: string | undefined;
	readonly description?: string | undefined;
	readonly enabled?: boolean | undefined;
	readonly interval?: string | undefined;
	readonly rules: PrometheusRule[];
	readonly scopes: string[];
}
export interface PrometheusRuleLabels {
	readonly "[ key: string ]"?: string | undefined;
}
export interface PrometheusRuleResolveConfiguration {
	readonly autoResolved?: boolean | undefined;
	readonly timeToResolve?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	prometheusRuleGroups: prometheusRuleGroups,
};
