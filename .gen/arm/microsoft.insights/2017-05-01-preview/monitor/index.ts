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
	readonly properties?: DiagnosticSettings;
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
	readonly properties?: DiagnosticSettingsCategory;
}
export interface DiagnosticSettings {
	readonly eventHubAuthorizationRuleId?: string;
	readonly eventHubName?: string;
	readonly logAnalyticsDestinationType?: string;
	readonly logs?: LogSettings[];
	readonly metrics?: MetricSettings[];
	readonly serviceBusRuleId?: string;
	readonly storageAccountId?: string;
	readonly workspaceId?: string;
}
export interface DiagnosticSettingsCategory {
	readonly categoryType?: "Logs";
}
export interface LogSettings {
	readonly category?: string;
	readonly enabled: boolean;
	readonly retentionPolicy?: RetentionPolicy;
}
export interface MetricSettings {
	readonly category?: string;
	readonly enabled: boolean;
	readonly retentionPolicy?: RetentionPolicy;
	readonly timeGrain?: string;
}
export interface RetentionPolicy {
	readonly days: number;
	readonly enabled: boolean;
}
export default {
	diagnosticSettings: diagnosticSettings,
	diagnosticSettingsCategories: diagnosticSettingsCategories,
};
