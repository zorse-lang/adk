import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class alertrules extends ArmResource<alertrulesComponentInputs> implements alertrulesComponentOutputs {
	constructor(entity: ADKEntity, options: alertrulesComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/alertrules", "2016-03-01", options);
	}
	public readonly apiVersion: "2016-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/alertrules";
}
export interface alertrulesComponentOutputs {
	readonly apiVersion: "2016-03-01";
	readonly id: string;
	readonly type: "Microsoft.Insights/alertrules";
}
export interface alertrulesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: AlertRule;
	readonly tags?: ResourceTags | undefined;
}
export class logprofiles extends ArmResource<logprofilesComponentInputs> implements logprofilesComponentOutputs {
	constructor(entity: ADKEntity, options: logprofilesComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/logprofiles", "2016-03-01", options);
	}
	public readonly apiVersion: "2016-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/logprofiles";
}
export interface logprofilesComponentOutputs {
	readonly apiVersion: "2016-03-01";
	readonly id: string;
	readonly type: "Microsoft.Insights/logprofiles";
}
export interface logprofilesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: LogProfileProperties;
	readonly tags?: ResourceTags | undefined;
}
export interface AlertRule {
	readonly action?: RuleAction | undefined;
	readonly actions?: RuleAction[] | undefined;
	readonly condition: RuleCondition;
	readonly description?: string | undefined;
	readonly isEnabled: boolean;
	readonly lastUpdatedTime?: string | undefined;
	readonly name: string;
	readonly provisioningState?: string | undefined;
}
export interface LogProfileProperties {
	readonly categories: string[];
	readonly locations: string[];
	readonly retentionPolicy: RetentionPolicy;
	readonly serviceBusRuleId?: string | undefined;
	readonly storageAccountId?: string | undefined;
}
export interface ManagementEventAggregationCondition {
	readonly operator?: ("GreaterThan" | "GreaterThanOrEqual" | "LessThan") | undefined;
	readonly threshold?: number | undefined;
	readonly windowSize?: string | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface RetentionPolicy {
	readonly days: number;
	readonly enabled: boolean;
}
export interface RuleAction {}
export interface RuleCondition {
	readonly dataSource?: RuleDataSource | undefined;
}
export interface RuleDataSource {
	readonly legacyResourceId?: string | undefined;
	readonly metricNamespace?: string | undefined;
	readonly resourceLocation?: string | undefined;
	readonly resourceUri?: string | undefined;
}
export interface RuleManagementEventClaimsDataSource {
	readonly emailAddress?: string | undefined;
}
export interface RuleWebhookActionProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	alertrules: alertrules,
	logprofiles: logprofiles,
};
