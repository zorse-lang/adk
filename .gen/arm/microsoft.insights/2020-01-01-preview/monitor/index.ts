import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class diagnosticSettings
	extends ArmResource<diagnosticSettingsComponentInputs>
	implements diagnosticSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: diagnosticSettingsComponentInputs) {
		super(entity, options.name, "microsoft.insights/diagnosticSettings", "2020-01-01-preview", options);
	}
	public readonly apiVersion: "2020-01-01-preview";
	public readonly id: string;
	public readonly type: "microsoft.insights/diagnosticSettings";
}
export interface diagnosticSettingsComponentOutputs {
	readonly apiVersion: "2020-01-01-preview";
	readonly id: string;
	readonly type: "microsoft.insights/diagnosticSettings";
}
export interface diagnosticSettingsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: ManagementGroupDiagnosticSettings;
}
export interface ManagementGroupDiagnosticSettings {
	readonly eventHubAuthorizationRuleId?: string;
	readonly eventHubName?: string;
	readonly logs?: ManagementGroupLogSettings[];
	readonly serviceBusRuleId?: string;
	readonly storageAccountId?: string;
	readonly workspaceId?: string;
}
export interface ManagementGroupLogSettings {
	readonly category: string;
	readonly enabled: boolean;
}
export default {
	diagnosticSettings: diagnosticSettings,
};
