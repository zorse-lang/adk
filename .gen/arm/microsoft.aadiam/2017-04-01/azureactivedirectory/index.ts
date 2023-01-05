import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class diagnosticSettings
	extends ArmResource<diagnosticSettingsComponentInputs>
	implements diagnosticSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: diagnosticSettingsComponentInputs) {
		super(entity, options.name, "microsoft.aadiam/diagnosticSettings", "2017-04-01", options);
	}
	public readonly apiVersion: "2017-04-01";
	public readonly id: string;
	public readonly type: "microsoft.aadiam/diagnosticSettings";
}
export interface diagnosticSettingsComponentOutputs {
	readonly apiVersion: "2017-04-01";
	readonly id: string;
	readonly type: "microsoft.aadiam/diagnosticSettings";
}
export interface diagnosticSettingsComponentInputs {
	readonly name: string;
	readonly properties?: DiagnosticSettings;
}
export interface DiagnosticSettings {
	readonly eventHubAuthorizationRuleId?: string;
	readonly eventHubName?: string;
	readonly logs?: LogSettings[];
	readonly serviceBusRuleId?: string;
	readonly storageAccountId?: string;
	readonly workspaceId?: string;
}
export interface LogSettings {
	readonly category?: "AuditLogs" | "SignInLogs";
	readonly enabled: boolean;
	readonly retentionPolicy?: RetentionPolicy;
}
export interface RetentionPolicy {
	readonly days: number;
	readonly enabled: boolean;
}
export default {
	diagnosticSettings: diagnosticSettings,
};
