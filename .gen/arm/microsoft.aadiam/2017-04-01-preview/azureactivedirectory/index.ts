import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class diagnosticSettings
	extends ArmResource<diagnosticSettingsComponentInputs>
	implements diagnosticSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: diagnosticSettingsComponentInputs) {
		super(entity, options.name, "microsoft.aadiam/diagnosticSettings", "2017-04-01-preview", options);
	}
	public readonly apiVersion: "2017-04-01-preview";
	public readonly id: string;
	public readonly type: "microsoft.aadiam/diagnosticSettings";
}
export interface diagnosticSettingsComponentOutputs {
	readonly apiVersion: "2017-04-01-preview";
	readonly id: string;
	readonly type: "microsoft.aadiam/diagnosticSettings";
}
export interface diagnosticSettingsComponentInputs {
	readonly name: string;
	readonly properties?: DiagnosticSettings | undefined;
}
export interface DiagnosticSettings {
	readonly eventHubAuthorizationRuleId?: string | undefined;
	readonly eventHubName?: string | undefined;
	readonly logs?: LogSettings[] | undefined;
	readonly serviceBusRuleId?: string | undefined;
	readonly storageAccountId?: string | undefined;
	readonly workspaceId?: string | undefined;
}
export interface LogSettings {
	readonly category?: ("AuditLogs" | "SignInLogs") | undefined;
	readonly enabled: boolean;
	readonly retentionPolicy?: RetentionPolicy | undefined;
}
export interface RetentionPolicy {
	readonly days: number;
	readonly enabled: boolean;
}
export default {
	diagnosticSettings: diagnosticSettings,
};
