import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class smartDetectorAlertRules
	extends ArmResource<smartDetectorAlertRulesComponentInputs>
	implements smartDetectorAlertRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: smartDetectorAlertRulesComponentInputs) {
		super(entity, options.name, "microsoft.alertsManagement/smartDetectorAlertRules", "2019-06-01", options);
	}
	public readonly apiVersion: "2019-06-01";
	public readonly id: string;
	public readonly type: "microsoft.alertsManagement/smartDetectorAlertRules";
}
export interface smartDetectorAlertRulesComponentOutputs {
	readonly apiVersion: "2019-06-01";
	readonly id: string;
	readonly type: "microsoft.alertsManagement/smartDetectorAlertRules";
}
export interface smartDetectorAlertRulesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: AlertRuleProperties;
	readonly tags?: AzureResourceTags;
}
export interface ActionGroupsInformation {
	readonly customEmailSubject?: string;
	readonly customWebhookPayload?: string;
	readonly groupIds: string[];
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
export interface AzureResourceTags {
	readonly [key: string]: string;
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
export interface ThrottlingInformation {
	readonly duration?: string;
}
export default {
	smartDetectorAlertRules: smartDetectorAlertRules,
};
