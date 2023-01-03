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
	readonly properties?: AlertProperties | undefined;
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
	readonly properties?: AlertRuleProperties | undefined;
}
export interface ActionGroupsInformation {
	readonly customEmailSubject?: string | undefined;
	readonly customWebhookPayload?: string | undefined;
	readonly groupIds: string[];
}
export interface ActionStatus {
	readonly isSuppressed?: boolean | undefined;
}
export interface AlertProperties {
	readonly context?: any | undefined;
	readonly egressConfig?: any | undefined;
	readonly essentials?: Essentials | undefined;
}
export interface AlertRuleProperties {
	readonly actionGroups: ActionGroupsInformation;
	readonly description?: string | undefined;
	readonly detector: Detector;
	readonly frequency: string;
	readonly scope: string[];
	readonly severity: "Sev0" | "Sev1" | "Sev2" | "Sev3" | "Sev4";
	readonly state: "Disabled" | "Enabled";
	readonly throttling?: ThrottlingInformation | undefined;
}
export interface Detector {
	readonly description?: string | undefined;
	readonly id: string;
	readonly imagePaths?: string[] | undefined;
	readonly name?: string | undefined;
	readonly parameters?: DetectorParameters | undefined;
	readonly supportedResourceTypes?: string[] | undefined;
}
export interface DetectorParameters {
	readonly "[ key: string ]"?: any | undefined;
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
				| "Resource Health"
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
export interface ThrottlingInformation {
	readonly duration?: string | undefined;
}
export default {
	"Microsoft.AlertsManagement/alerts": Microsoft_AlertsManagement_alerts,
	smartDetectorAlertRules: smartDetectorAlertRules,
};
