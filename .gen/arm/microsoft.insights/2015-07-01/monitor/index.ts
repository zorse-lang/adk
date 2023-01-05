import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class diagnosticSettings
	extends ArmResource<diagnosticSettingsComponentInputs>
	implements diagnosticSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: diagnosticSettingsComponentInputs) {
		super(entity, options.name, "microsoft.insights/diagnosticSettings", "2015-07-01", options);
	}
	public readonly apiVersion: "2015-07-01";
	public readonly id: string;
	public readonly type: "microsoft.insights/diagnosticSettings";
}
export interface diagnosticSettingsComponentOutputs {
	readonly apiVersion: "2015-07-01";
	readonly id: string;
	readonly type: "microsoft.insights/diagnosticSettings";
}
export interface diagnosticSettingsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ServiceDiagnosticSettings;
	readonly tags?: ResourceTags;
}
export interface LogSettings {
	readonly category?: string;
	readonly enabled: boolean;
	readonly retentionPolicy?: RetentionPolicy;
}
export interface MetricSettings {
	readonly enabled: boolean;
	readonly retentionPolicy?: RetentionPolicy;
	readonly timeGrain: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface RetentionPolicy {
	readonly days: number;
	readonly enabled: boolean;
}
export interface ServiceDiagnosticSettings {
	readonly logs?: LogSettings[];
	readonly metrics?: MetricSettings[];
	readonly serviceBusRuleId?: string;
	readonly storageAccountId?: string;
	readonly workspaceId?: string;
}
export default {
	diagnosticSettings: diagnosticSettings,
};
