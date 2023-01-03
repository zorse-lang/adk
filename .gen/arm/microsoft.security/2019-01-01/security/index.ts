import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class advancedThreatProtectionSettings
	extends ArmResource<advancedThreatProtectionSettingsComponentInputs>
	implements advancedThreatProtectionSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: advancedThreatProtectionSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/advancedThreatProtectionSettings", "2019-01-01", options);
	}
	public readonly apiVersion: "2019-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Security/advancedThreatProtectionSettings";
}
export interface advancedThreatProtectionSettingsComponentOutputs {
	readonly apiVersion: "2019-01-01";
	readonly id: string;
	readonly type: "Microsoft.Security/advancedThreatProtectionSettings";
}
export interface advancedThreatProtectionSettingsComponentInputs {
	readonly name: string;
	readonly properties?: AdvancedThreatProtectionProperties | undefined;
}
export class locations_alerts
	extends ArmResource<locations_alertsComponentInputs>
	implements locations_alertsComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_alertsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/locations/alerts", "2019-01-01", options);
	}
	public readonly apiVersion: "2019-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Security/locations/alerts";
}
export interface locations_alertsComponentOutputs {
	readonly apiVersion: "2019-01-01";
	readonly id: string;
	readonly type: "Microsoft.Security/locations/alerts";
}
export interface locations_alertsComponentInputs {
	readonly name: string;
	readonly properties?: AlertProperties | undefined;
}
export class settings_DataExportSettings
	extends ArmResource<settings_DataExportSettingsComponentInputs>
	implements settings_DataExportSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: settings_DataExportSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/settings", "2019-01-01", options);
	}
	public readonly apiVersion: "2019-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Security/settings";
}
export interface settings_DataExportSettingsComponentOutputs {
	readonly apiVersion: "2019-01-01";
	readonly id: string;
	readonly type: "Microsoft.Security/settings";
}
export interface settings_DataExportSettingsComponentInputs {
	readonly name: string;
	readonly kind: "DataExportSettings";
	readonly properties?: DataExportSettingProperties | undefined;
}
export interface AdvancedThreatProtectionProperties {
	readonly isEnabled?: boolean | undefined;
}
export interface AlertConfidenceReason {
	readonly reason?: string | undefined;
	readonly type?: string | undefined;
}
export interface AlertEntity {
	readonly type?: string | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface AlertExtendedProperties {
	readonly "[ key: string ]"?: any | undefined;
}
export interface AlertProperties {
	readonly actionTaken?: string | undefined;
	readonly alertDisplayName?: string | undefined;
	readonly alertName?: string | undefined;
	readonly associatedResource?: string | undefined;
	readonly canBeInvestigated?: boolean | undefined;
	readonly compromisedEntity?: string | undefined;
	readonly confidenceReasons?: AlertConfidenceReason[] | undefined;
	readonly confidenceScore?: number | undefined;
	readonly correlationKey?: string | undefined;
	readonly description?: string | undefined;
	readonly detectedTimeUtc?: string | undefined;
	readonly entities?: AlertEntity[] | undefined;
	readonly extendedProperties?: AlertExtendedProperties | undefined;
	readonly instanceId?: string | undefined;
	readonly isIncident?: boolean | undefined;
	readonly remediationSteps?: string | undefined;
	readonly reportedSeverity?: ("High" | "Informational" | "Low" | "Medium") | undefined;
	readonly reportedTimeUtc?: string | undefined;
	readonly state?: string | undefined;
	readonly subscriptionId?: string | undefined;
	readonly systemSource?: string | undefined;
	readonly vendorName?: string | undefined;
	readonly workspaceArmId?: string | undefined;
}
export interface DataExportSettingProperties {
	readonly enabled: boolean;
}
export type settings = settings_DataExportSettings;
export default {
	advancedThreatProtectionSettings: advancedThreatProtectionSettings,
	"locations/alerts": locations_alerts,
	"settings/DataExportSettings": settings_DataExportSettings,
};
