import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class guestDiagnosticSettings
	extends ArmResource<guestDiagnosticSettingsComponentInputs>
	implements guestDiagnosticSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: guestDiagnosticSettingsComponentInputs) {
		super(entity, options.name, "microsoft.insights/guestDiagnosticSettings", "2018-06-01-preview", options);
	}
	public readonly apiVersion: "2018-06-01-preview";
	public readonly id: string;
	public readonly type: "microsoft.insights/guestDiagnosticSettings";
}
export interface guestDiagnosticSettingsComponentOutputs {
	readonly apiVersion: "2018-06-01-preview";
	readonly id: string;
	readonly type: "microsoft.insights/guestDiagnosticSettings";
}
export interface guestDiagnosticSettingsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: GuestDiagnosticSettings;
	readonly tags?: ResourceTags;
}
export class guestDiagnosticSettingsAssociation
	extends ArmResource<guestDiagnosticSettingsAssociationComponentInputs>
	implements guestDiagnosticSettingsAssociationComponentOutputs
{
	constructor(entity: ADKEntity, options: guestDiagnosticSettingsAssociationComponentInputs) {
		super(entity, options.name, "microsoft.insights/guestDiagnosticSettingsAssociation", "2018-06-01-preview", options);
	}
	public readonly apiVersion: "2018-06-01-preview";
	public readonly id: string;
	public readonly type: "microsoft.insights/guestDiagnosticSettingsAssociation";
}
export interface guestDiagnosticSettingsAssociationComponentOutputs {
	readonly apiVersion: "2018-06-01-preview";
	readonly id: string;
	readonly type: "microsoft.insights/guestDiagnosticSettingsAssociation";
}
export interface guestDiagnosticSettingsAssociationComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: GuestDiagnosticSettingsAssociation;
	readonly tags?: ResourceTags;
}
export interface DataSource {
	readonly configuration: DataSourceConfiguration;
	readonly kind: "ETWProviders" | "PerformanceCounter" | "WindowsEventLogs";
	readonly sinks: SinkConfiguration[];
}
export interface DataSourceConfiguration {
	readonly eventLogs?: EventLogConfiguration[];
	readonly perfCounters?: PerformanceCounterConfiguration[];
	readonly providers?: EtwProviderConfiguration[];
}
export interface EtwEventConfiguration {
	readonly filter?: string;
	readonly id: number;
	readonly name: string;
}
export interface EtwProviderConfiguration {
	readonly events: EtwEventConfiguration[];
	readonly id: string;
}
export interface EventLogConfiguration {
	readonly filter?: string;
	readonly logName: string;
}
export interface GuestDiagnosticSettings {
	readonly dataSources?: DataSource[];
	readonly osType?: "Linux" | "Windows";
	readonly proxySetting?: string;
}
export interface GuestDiagnosticSettingsAssociation {
	readonly guestDiagnosticSettingsName: string;
}
export interface PerformanceCounterConfiguration {
	readonly instance?: string;
	readonly name: string;
	readonly samplingPeriod: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface SinkConfiguration {
	readonly kind: "ApplicationInsights" | "EventHub" | "LogAnalytics";
}
export default {
	guestDiagnosticSettings: guestDiagnosticSettings,
	guestDiagnosticSettingsAssociation: guestDiagnosticSettingsAssociation,
};
