import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class actionRules extends ArmResource<actionRulesComponentInputs> implements actionRulesComponentOutputs {
	constructor(entity: ADKEntity, options: actionRulesComponentInputs) {
		super(entity, options.name, "Microsoft.AlertsManagement/actionRules", "2021-08-08-preview", options);
	}
	public readonly apiVersion: "2021-08-08-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AlertsManagement/actionRules";
}
export interface actionRulesComponentOutputs {
	readonly apiVersion: "2021-08-08-preview";
	readonly id: string;
	readonly type: "Microsoft.AlertsManagement/actionRules";
}
export interface actionRulesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: AlertProcessingRuleProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ManagedResourceTags | undefined;
}
export interface Action {}
export interface AlertProcessingRuleProperties {
	readonly actions: Action[];
	readonly conditions?: Condition[] | undefined;
	readonly description?: string | undefined;
	readonly enabled?: boolean | undefined;
	readonly schedule?: Schedule | undefined;
	readonly scopes: string[];
}
export interface Condition {
	readonly field?:
		| (
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
				| "TargetResourceType"
		  )
		| undefined;
	readonly operator?: ("Contains" | "DoesNotContain" | "Equals" | "NotEquals") | undefined;
	readonly values?: string[] | undefined;
}
export interface ManagedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Recurrence {
	readonly endTime?: string | undefined;
	readonly startTime?: string | undefined;
}
export interface Schedule {
	readonly effectiveFrom?: string | undefined;
	readonly effectiveUntil?: string | undefined;
	readonly recurrences?: Recurrence[] | undefined;
	readonly timeZone?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export default {
	actionRules: actionRules,
};
