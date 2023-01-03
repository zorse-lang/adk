import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class diagnosticSettings
	extends ArmResource<diagnosticSettingsComponentInputs>
	implements diagnosticSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: diagnosticSettingsComponentInputs) {
		super(entity, options.name, "microsoft.insights/diagnosticSettings", "2016-09-01", options);
	}
	public readonly apiVersion: "2016-09-01";
	public readonly id: string;
	public readonly type: "microsoft.insights/diagnosticSettings";
}
export interface diagnosticSettingsComponentOutputs {
	readonly apiVersion: "2016-09-01";
	readonly id: string;
	readonly type: "microsoft.insights/diagnosticSettings";
}
export interface diagnosticSettingsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ServiceDiagnosticSettings | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface LogSettings {
	readonly category?: string | undefined;
	readonly enabled: boolean;
	readonly retentionPolicy?: RetentionPolicy | undefined;
}
export interface MetricSettings {
	readonly enabled: boolean;
	readonly retentionPolicy?: RetentionPolicy | undefined;
	readonly timeGrain: string;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface RetentionPolicy {
	readonly days: number;
	readonly enabled: boolean;
}
export interface ServiceDiagnosticSettings {
	readonly eventHubAuthorizationRuleId?: string | undefined;
	readonly logs?: LogSettings[] | undefined;
	readonly metrics?: MetricSettings[] | undefined;
	readonly serviceBusRuleId?: string | undefined;
	readonly storageAccountId?: string | undefined;
	readonly workspaceId?: string | undefined;
}
export default {
	diagnosticSettings: diagnosticSettings,
};
