import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class diagnosticSettings
	extends ArmResource<diagnosticSettingsComponentInputs>
	implements diagnosticSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: diagnosticSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/diagnosticSettings", "2017-05-01-preview", options);
	}
	public readonly apiVersion: "2017-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/diagnosticSettings";
}
export interface diagnosticSettingsComponentOutputs {
	readonly apiVersion: "2017-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Insights/diagnosticSettings";
}
export interface diagnosticSettingsComponentInputs {
	readonly name: string;
	readonly properties?: DiagnosticSettings | undefined;
}
export class diagnosticSettingsCategories
	extends ArmResource<diagnosticSettingsCategoriesComponentInputs>
	implements diagnosticSettingsCategoriesComponentOutputs
{
	constructor(entity: ADKEntity, options: diagnosticSettingsCategoriesComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/diagnosticSettingsCategories", "2017-05-01-preview", options);
	}
	public readonly apiVersion: "2017-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/diagnosticSettingsCategories";
}
export interface diagnosticSettingsCategoriesComponentOutputs {
	readonly apiVersion: "2017-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Insights/diagnosticSettingsCategories";
}
export interface diagnosticSettingsCategoriesComponentInputs {
	readonly name: string;
	readonly properties?: DiagnosticSettingsCategory | undefined;
}
export interface DiagnosticSettings {
	readonly eventHubAuthorizationRuleId?: string | undefined;
	readonly eventHubName?: string | undefined;
	readonly logAnalyticsDestinationType?: string | undefined;
	readonly logs?: LogSettings[] | undefined;
	readonly metrics?: MetricSettings[] | undefined;
	readonly serviceBusRuleId?: string | undefined;
	readonly storageAccountId?: string | undefined;
	readonly workspaceId?: string | undefined;
}
export interface DiagnosticSettingsCategory {
	readonly categoryType?: "Logs" | undefined;
}
export interface LogSettings {
	readonly category?: string | undefined;
	readonly enabled: boolean;
	readonly retentionPolicy?: RetentionPolicy | undefined;
}
export interface MetricSettings {
	readonly category?: string | undefined;
	readonly enabled: boolean;
	readonly retentionPolicy?: RetentionPolicy | undefined;
	readonly timeGrain?: string | undefined;
}
export interface RetentionPolicy {
	readonly days: number;
	readonly enabled: boolean;
}
export default {
	diagnosticSettings: diagnosticSettings,
	diagnosticSettingsCategories: diagnosticSettingsCategories,
};
