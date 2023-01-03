import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class actionRules extends ArmResource<actionRulesComponentInputs> implements actionRulesComponentOutputs {
	constructor(entity: ADKEntity, options: actionRulesComponentInputs) {
		super(entity, options.name, "Microsoft.AlertsManagement/actionRules", "2019-05-05-preview", options);
	}
	public readonly apiVersion: "2019-05-05-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AlertsManagement/actionRules";
}
export interface actionRulesComponentOutputs {
	readonly apiVersion: "2019-05-05-preview";
	readonly id: string;
	readonly type: "Microsoft.AlertsManagement/actionRules";
}
export interface actionRulesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ActionRuleProperties | undefined;
	readonly tags?: ManagedResourceTags | undefined;
}
export class alerts extends ArmResource<alertsComponentInputs> implements alertsComponentOutputs {
	constructor(entity: ADKEntity, options: alertsComponentInputs) {
		super(entity, options.name, "Microsoft.AlertsManagement/alerts", "2019-05-05-preview", options);
	}
	public readonly apiVersion: "2019-05-05-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AlertsManagement/alerts";
}
export interface alertsComponentOutputs {
	readonly apiVersion: "2019-05-05-preview";
	readonly id: string;
	readonly type: "Microsoft.AlertsManagement/alerts";
}
export interface alertsComponentInputs {
	readonly name: string;
	readonly properties?: AlertProperties | undefined;
}
export class smartGroups extends ArmResource<smartGroupsComponentInputs> implements smartGroupsComponentOutputs {
	constructor(entity: ADKEntity, options: smartGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.AlertsManagement/smartGroups", "2019-05-05-preview", options);
	}
	public readonly apiVersion: "2019-05-05-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AlertsManagement/smartGroups";
}
export interface smartGroupsComponentOutputs {
	readonly apiVersion: "2019-05-05-preview";
	readonly id: string;
	readonly type: "Microsoft.AlertsManagement/smartGroups";
}
export interface smartGroupsComponentInputs {
	readonly name: string;
	readonly properties?: SmartGroupProperties | undefined;
}
export interface ActionRuleProperties {
	readonly conditions?: Conditions | undefined;
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly description?: string | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly scope?: Scope | undefined;
	readonly status?: ("Disabled" | "Enabled") | undefined;
}
export interface ActionStatus {
	readonly isSuppressed?: boolean | undefined;
}
export interface AlertProperties {
	readonly context?: any | undefined;
	readonly egressConfig?: any | undefined;
	readonly essentials?: Essentials | undefined;
}
export interface Condition {
	readonly operator?: ("Contains" | "DoesNotContain" | "Equals" | "NotEquals") | undefined;
	readonly values?: string[] | undefined;
}
export interface Conditions {
	readonly alertContext?: Condition | undefined;
	readonly alertRuleId?: Condition | undefined;
	readonly alertRuleName?: Condition | undefined;
	readonly description?: Condition | undefined;
	readonly monitorCondition?: Condition | undefined;
	readonly monitorService?: Condition | undefined;
	readonly severity?: Condition | undefined;
	readonly targetResourceType?: Condition | undefined;
}
export interface Essentials {
	readonly actionStatus?: ActionStatus | undefined;
	readonly alertRule?: string | undefined;
	readonly alertState?: ("Acknowledged" | "Closed" | "New") | undefined;
	readonly description?: string | undefined;
	readonly lastModifiedDateTime?: string | undefined;
	readonly lastModifiedUserName?: string | undefined;
	readonly monitorCondition?: ("Fired" | "Resolved") | undefined;
	readonly monitorConditionResolvedDateTime?: string | undefined;
	readonly monitorService?:
		| (
				| "ActivityLog Administrative"
				| "ActivityLog Autoscale"
				| "ActivityLog Policy"
				| "ActivityLog Recommendation"
				| "ActivityLog Security"
				| "Application Insights"
				| "Log Analytics"
				| "Nagios"
				| "Platform"
				| "SCOM"
				| "ServiceHealth"
				| "SmartDetector"
				| "VM Insights"
				| "Zabbix"
		  )
		| undefined;
	readonly severity?: ("Sev0" | "Sev1" | "Sev2" | "Sev3" | "Sev4") | undefined;
	readonly signalType?: ("Log" | "Metric" | "Unknown") | undefined;
	readonly smartGroupId?: string | undefined;
	readonly smartGroupingReason?: string | undefined;
	readonly sourceCreatedId?: string | undefined;
	readonly startDateTime?: string | undefined;
	readonly targetResource?: string | undefined;
	readonly targetResourceGroup?: string | undefined;
	readonly targetResourceName?: string | undefined;
	readonly targetResourceType?: string | undefined;
}
export interface ManagedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Scope {
	readonly scopeType?: ("Resource" | "ResourceGroup" | "Subscription") | undefined;
	readonly values?: string[] | undefined;
}
export interface SmartGroupAggregatedProperty {
	readonly count?: number | undefined;
	readonly name?: string | undefined;
}
export interface SmartGroupProperties {
	readonly alertsCount?: number | undefined;
	readonly alertSeverities?: SmartGroupAggregatedProperty[] | undefined;
	readonly alertStates?: SmartGroupAggregatedProperty[] | undefined;
	readonly lastModifiedDateTime?: string | undefined;
	readonly lastModifiedUserName?: string | undefined;
	readonly monitorConditions?: SmartGroupAggregatedProperty[] | undefined;
	readonly monitorServices?: SmartGroupAggregatedProperty[] | undefined;
	readonly nextLink?: string | undefined;
	readonly resourceGroups?: SmartGroupAggregatedProperty[] | undefined;
	readonly resources?: SmartGroupAggregatedProperty[] | undefined;
	readonly resourceTypes?: SmartGroupAggregatedProperty[] | undefined;
	readonly severity?: ("Sev0" | "Sev1" | "Sev2" | "Sev3" | "Sev4") | undefined;
	readonly smartGroupState?: ("Acknowledged" | "Closed" | "New") | undefined;
	readonly startDateTime?: string | undefined;
}
export interface SuppressionConfig {
	readonly recurrenceType: "Always" | "Daily" | "Monthly" | "Once" | "Weekly";
	readonly schedule?: SuppressionSchedule | undefined;
}
export interface SuppressionSchedule {
	readonly endDate?: string | undefined;
	readonly endTime?: string | undefined;
	readonly recurrenceValues?: number[] | undefined;
	readonly startDate?: string | undefined;
	readonly startTime?: string | undefined;
}
export default {
	actionRules: actionRules,
	alerts: alerts,
	smartGroups: smartGroups,
};
