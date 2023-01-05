import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class actionRules extends ArmResource<actionRulesComponentInputs> implements actionRulesComponentOutputs {
	constructor(entity: ADKEntity, options: actionRulesComponentInputs) {
		super(entity, options.name, "Microsoft.AlertsManagement/actionRules", "2021-08-08", options);
	}
	public readonly apiVersion: "2021-08-08";
	public readonly id: string;
	public readonly type: "Microsoft.AlertsManagement/actionRules";
}
export interface actionRulesComponentOutputs {
	readonly apiVersion: "2021-08-08";
	readonly id: string;
	readonly type: "Microsoft.AlertsManagement/actionRules";
}
export interface actionRulesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: AlertProcessingRuleProperties;
	readonly systemData?: SystemData;
	readonly tags?: ManagedResourceTags;
}
export interface Action {}
export interface AlertProcessingRuleProperties {
	readonly actions: Action[];
	readonly conditions?: Condition[];
	readonly description?: string;
	readonly enabled?: boolean;
	readonly schedule?: Schedule;
	readonly scopes: string[];
}
export interface Condition {
	readonly field?:
		| "AlertContext"
		| "AlertRuleId"
		| "AlertRuleName"
		| "Description"
		| "MonitorCondition"
		| "MonitorService"
		| "Severity"
		| "SignalType"
		| "TargetResource"
		| "TargetResourceGroup"
		| "TargetResourceType";
	readonly operator?: "Contains" | "DoesNotContain" | "Equals" | "NotEquals";
	readonly values?: string[];
}
export interface ManagedResourceTags {
	readonly [key: string]: string;
}
export interface Recurrence {
	readonly endTime?: string;
	readonly startTime?: string;
}
export interface Schedule {
	readonly effectiveFrom?: string;
	readonly effectiveUntil?: string;
	readonly recurrences?: Recurrence[];
	readonly timeZone?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export default {
	actionRules: actionRules,
};
