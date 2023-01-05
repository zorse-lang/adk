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
	readonly properties?: AdvancedThreatProtectionProperties;
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
	readonly properties?: AlertProperties;
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
	readonly properties?: DataExportSettingProperties;
}
export interface AdvancedThreatProtectionProperties {
	readonly isEnabled?: boolean;
}
export interface AlertConfidenceReason {
	readonly reason?: string;
	readonly type?: string;
}
export interface AlertEntity {
	readonly type?: string;
	readonly [key: string]: any;
}
export interface AlertExtendedProperties {
	readonly [key: string]: any;
}
export interface AlertProperties {
	readonly actionTaken?: string;
	readonly alertDisplayName?: string;
	readonly alertName?: string;
	readonly associatedResource?: string;
	readonly canBeInvestigated?: boolean;
	readonly compromisedEntity?: string;
	readonly confidenceReasons?: AlertConfidenceReason[];
	readonly confidenceScore?: number;
	readonly correlationKey?: string;
	readonly description?: string;
	readonly detectedTimeUtc?: string;
	readonly entities?: AlertEntity[];
	readonly extendedProperties?: AlertExtendedProperties;
	readonly instanceId?: string;
	readonly isIncident?: boolean;
	readonly remediationSteps?: string;
	readonly reportedSeverity?: "High" | "Informational" | "Low" | "Medium";
	readonly reportedTimeUtc?: string;
	readonly state?: string;
	readonly subscriptionId?: string;
	readonly systemSource?: string;
	readonly vendorName?: string;
	readonly workspaceArmId?: string;
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
