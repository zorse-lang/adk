import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class settings_AlertSyncSettings
	extends ArmResource<settings_AlertSyncSettingsComponentInputs>
	implements settings_AlertSyncSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: settings_AlertSyncSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/settings", "2021-07-01", options);
	}
	public readonly apiVersion: "2021-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.Security/settings";
}
export interface settings_AlertSyncSettingsComponentOutputs {
	readonly apiVersion: "2021-07-01";
	readonly id: string;
	readonly type: "Microsoft.Security/settings";
}
export interface settings_AlertSyncSettingsComponentInputs {
	readonly name: string;
	readonly kind: "AlertSyncSettings";
	readonly properties?: AlertSyncSettingProperties | undefined;
}
export class settings_DataExportSettings
	extends ArmResource<settings_DataExportSettingsComponentInputs>
	implements settings_DataExportSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: settings_DataExportSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/settings", "2021-07-01", options);
	}
	public readonly apiVersion: "2021-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.Security/settings";
}
export interface settings_DataExportSettingsComponentOutputs {
	readonly apiVersion: "2021-07-01";
	readonly id: string;
	readonly type: "Microsoft.Security/settings";
}
export interface settings_DataExportSettingsComponentInputs {
	readonly name: string;
	readonly kind: "DataExportSettings";
	readonly properties?: DataExportSettingProperties | undefined;
}
export interface AlertSyncSettingProperties {
	readonly enabled: boolean;
}
export interface DataExportSettingProperties {
	readonly enabled: boolean;
}
export type settings = settings_AlertSyncSettings | settings_DataExportSettings;
export default {
	"settings/AlertSyncSettings": settings_AlertSyncSettings,
	"settings/DataExportSettings": settings_DataExportSettings,
};
