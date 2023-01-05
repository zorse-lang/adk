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
	readonly tags?: ResourceTags;
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
	readonly tags?: ResourceTags;
}
export interface AlertRule {
	readonly action?: RuleAction;
	readonly actions?: RuleAction[];
	readonly condition: RuleCondition;
	readonly description?: string;
	readonly isEnabled: boolean;
	readonly lastUpdatedTime?: string;
	readonly name: string;
	readonly provisioningState?: string;
}
export interface LogProfileProperties {
	readonly categories: string[];
	readonly locations: string[];
	readonly retentionPolicy: RetentionPolicy;
	readonly serviceBusRuleId?: string;
	readonly storageAccountId?: string;
}
export interface ManagementEventAggregationCondition {
	readonly operator?: "GreaterThan" | "GreaterThanOrEqual" | "LessThan";
	readonly threshold?: number;
	readonly windowSize?: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface RetentionPolicy {
	readonly days: number;
	readonly enabled: boolean;
}
export interface RuleAction {}
export interface RuleCondition {
	readonly dataSource?: RuleDataSource;
}
export interface RuleDataSource {
	readonly legacyResourceId?: string;
	readonly metricNamespace?: string;
	readonly resourceLocation?: string;
	readonly resourceUri?: string;
}
export interface RuleManagementEventClaimsDataSource {
	readonly emailAddress?: string;
}
export interface RuleWebhookActionProperties {
	readonly [key: string]: string;
}
export default {
	alertrules: alertrules,
	logprofiles: logprofiles,
};
