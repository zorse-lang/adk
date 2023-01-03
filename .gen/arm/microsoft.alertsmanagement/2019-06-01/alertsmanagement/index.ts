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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: AlertRuleProperties | undefined;
	readonly tags?: AzureResourceTags | undefined;
}
export interface ActionGroupsInformation {
	readonly customEmailSubject?: string | undefined;
	readonly customWebhookPayload?: string | undefined;
	readonly groupIds: string[];
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
export interface AzureResourceTags {
	readonly "[ key: string ]"?: string | undefined;
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
export interface ThrottlingInformation {
	readonly duration?: string | undefined;
}
export default {
	smartDetectorAlertRules: smartDetectorAlertRules,
};
