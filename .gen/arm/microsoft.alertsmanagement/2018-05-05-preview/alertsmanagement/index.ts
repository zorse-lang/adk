import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class alerts extends ArmResource<alertsComponentInputs> implements alertsComponentOutputs {
	constructor(entity: ADKEntity, options: alertsComponentInputs) {
		super(entity, options.name, "Microsoft.AlertsManagement/alerts", "2018-05-05-preview", options);
	}
	public readonly apiVersion: "2018-05-05-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AlertsManagement/alerts";
}
export interface alertsComponentOutputs {
	readonly apiVersion: "2018-05-05-preview";
	readonly id: string;
	readonly type: "Microsoft.AlertsManagement/alerts";
}
export interface alertsComponentInputs {
	readonly name: string;
	readonly properties?: AlertProperties;
}
export class smartGroups extends ArmResource<smartGroupsComponentInputs> implements smartGroupsComponentOutputs {
	constructor(entity: ADKEntity, options: smartGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.AlertsManagement/smartGroups", "2018-05-05-preview", options);
	}
	public readonly apiVersion: "2018-05-05-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AlertsManagement/smartGroups";
}
export interface smartGroupsComponentOutputs {
	readonly apiVersion: "2018-05-05-preview";
	readonly id: string;
	readonly type: "Microsoft.AlertsManagement/smartGroups";
}
export interface smartGroupsComponentInputs {
	readonly name: string;
	readonly properties?: SmartGroupProperties;
}
export interface ActionStatus {
	readonly isSuppressed?: boolean;
}
export interface AlertProperties {
	readonly actionStatus?: ActionStatus;
	readonly alertRule?: string;
	readonly alertState?: "Acknowledged" | "Closed" | "New";
	readonly description?: string;
	readonly lastModifiedDateTime?: string;
	readonly lastModifiedUserName?: string;
	readonly monitorCondition?: "Fired" | "Resolved";
	readonly monitorService?:
		| "ActivityLog Administrative"
		| "ActivityLog Autoscale"
		| "ActivityLog Policy"
		| "ActivityLog Recommendation"
		| "ActivityLog Security"
		| "Application Insights"
		| "Infrastructure Insights"
		| "Log Analytics"
		| "Nagios"
		| "Platform"
		| "SCOM"
		| "ServiceHealth"
		| "SmartDetector"
		| "Zabbix";
	readonly payload?: any;
	readonly severity?: "Sev0" | "Sev1" | "Sev2" | "Sev3" | "Sev4";
	readonly signalType?: "Log" | "Metric" | "Unknown";
	readonly smartGroupId?: string;
	readonly smartGroupingReason?: string;
	readonly sourceCreatedId?: string;
	readonly startDateTime?: string;
	readonly targetResource?: string;
	readonly targetResourceGroup?: string;
	readonly targetResourceName?: string;
	readonly targetResourceType?: string;
}
export interface SmartGroupAggregatedProperty {
	readonly count?: number;
	readonly name?: string;
}
export interface SmartGroupProperties {
	readonly alertsCount?: number;
	readonly alertSeverities?: SmartGroupAggregatedProperty[];
	readonly alertStates?: SmartGroupAggregatedProperty[];
	readonly lastModifiedDateTime?: string;
	readonly lastModifiedUserName?: string;
	readonly monitorConditions?: SmartGroupAggregatedProperty[];
	readonly monitorServices?: SmartGroupAggregatedProperty[];
	readonly nextLink?: string;
	readonly resourceGroups?: SmartGroupAggregatedProperty[];
	readonly resources?: SmartGroupAggregatedProperty[];
	readonly resourceTypes?: SmartGroupAggregatedProperty[];
	readonly severity?: "Sev0" | "Sev1" | "Sev2" | "Sev3" | "Sev4";
	readonly smartGroupState?: "Acknowledged" | "Closed" | "New";
	readonly startDateTime?: string;
}
export default {
	alerts: alerts,
	smartGroups: smartGroups,
};
