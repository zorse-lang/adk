import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class Microsoft_AlertsManagement_alerts
	extends ArmResource<Microsoft_AlertsManagement_alertsComponentInputs>
	implements Microsoft_AlertsManagement_alertsComponentOutputs
{
	constructor(entity: ADKEntity, options: Microsoft_AlertsManagement_alertsComponentInputs) {
		super(entity, options.name, "microsoft.alertsManagement/Microsoft.AlertsManagement/alerts", "2019-03-01", options);
	}
	public readonly apiVersion: "2019-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.AlertsManagement/alerts";
}
export interface Microsoft_AlertsManagement_alertsComponentOutputs {
	readonly apiVersion: "2019-03-01";
	readonly id: string;
	readonly type: "Microsoft.AlertsManagement/alerts";
}
export interface Microsoft_AlertsManagement_alertsComponentInputs {
	readonly name: string;
	readonly properties?: AlertProperties;
}
export class smartDetectorAlertRules
	extends ArmResource<smartDetectorAlertRulesComponentInputs>
	implements smartDetectorAlertRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: smartDetectorAlertRulesComponentInputs) {
		super(entity, options.name, "microsoft.alertsManagement/smartDetectorAlertRules", "2019-03-01", options);
	}
	public readonly apiVersion: "2019-03-01";
	public readonly id: string;
	public readonly type: "microsoft.alertsManagement/smartDetectorAlertRules";
}
export interface smartDetectorAlertRulesComponentOutputs {
	readonly apiVersion: "2019-03-01";
	readonly id: string;
	readonly type: "microsoft.alertsManagement/smartDetectorAlertRules";
}
export interface smartDetectorAlertRulesComponentInputs {
	readonly name: string;
	readonly properties?: AlertRuleProperties;
}
export interface ActionGroupsInformation {
	readonly customEmailSubject?: string;
	readonly customWebhookPayload?: string;
	readonly groupIds: string[];
}
export interface ActionStatus {
	readonly isSuppressed?: boolean;
}
export interface AlertProperties {
	readonly context?: any;
	readonly egressConfig?: any;
	readonly essentials?: Essentials;
}
export interface AlertRuleProperties {
	readonly actionGroups: ActionGroupsInformation;
	readonly description?: string;
	readonly detector: Detector;
	readonly frequency: string;
	readonly scope: string[];
	readonly severity: "Sev0" | "Sev1" | "Sev2" | "Sev3" | "Sev4";
	readonly state: "Disabled" | "Enabled";
	readonly throttling?: ThrottlingInformation;
}
export interface Detector {
	readonly description?: string;
	readonly id: string;
	readonly imagePaths?: string[];
	readonly name?: string;
	readonly parameters?: DetectorParameters;
	readonly supportedResourceTypes?: string[];
}
export interface DetectorParameters {
	readonly [key: string]: any;
}
export interface Essentials {
	readonly actionStatus?: ActionStatus;
	readonly alertRule?: string;
	readonly alertState?: "Acknowledged" | "Closed" | "New";
	readonly description?: string;
	readonly lastModifiedDateTime?: string;
	readonly lastModifiedUserName?: string;
	readonly monitorCondition?: "Fired" | "Resolved";
	readonly monitorConditionResolvedDateTime?: string;
	readonly monitorService?:
		| "ActivityLog Administrative"
		| "ActivityLog Autoscale"
		| "ActivityLog Policy"
		| "ActivityLog Recommendation"
		| "ActivityLog Security"
		| "Application Insights"
		| "Log Analytics"
		| "Nagios"
		| "Platform"
		| "Resource Health"
		| "SCOM"
		| "ServiceHealth"
		| "SmartDetector"
		| "VM Insights"
		| "Zabbix";
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
export interface ThrottlingInformation {
	readonly duration?: string;
}
export default {
	"Microsoft.AlertsManagement/alerts": Microsoft_AlertsManagement_alerts,
	smartDetectorAlertRules: smartDetectorAlertRules,
};
