import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class applyUpdates extends ArmResource<applyUpdatesComponentInputs> implements applyUpdatesComponentOutputs {
	constructor(entity: ADKEntity, options: applyUpdatesComponentInputs) {
		super(entity, options.name, "Microsoft.Maintenance/applyUpdates", "2020-07-01-preview", options);
	}
	public readonly apiVersion: "2020-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Maintenance/applyUpdates";
}
export interface applyUpdatesComponentOutputs {
	readonly apiVersion: "2020-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Maintenance/applyUpdates";
}
export interface applyUpdatesComponentInputs {
	readonly name: string;
	readonly properties?: ApplyUpdateProperties;
}
export class configurationAssignments
	extends ArmResource<configurationAssignmentsComponentInputs>
	implements configurationAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: configurationAssignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Maintenance/configurationAssignments", "2020-07-01-preview", options);
	}
	public readonly apiVersion: "2020-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Maintenance/configurationAssignments";
}
export interface configurationAssignmentsComponentOutputs {
	readonly apiVersion: "2020-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Maintenance/configurationAssignments";
}
export interface configurationAssignmentsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: ConfigurationAssignmentProperties;
}
export class maintenanceConfigurations
	extends ArmResource<maintenanceConfigurationsComponentInputs>
	implements maintenanceConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: maintenanceConfigurationsComponentInputs) {
		super(entity, options.name, "Microsoft.Maintenance/maintenanceConfigurations", "2020-07-01-preview", options);
	}
	public readonly apiVersion: "2020-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Maintenance/maintenanceConfigurations";
}
export interface maintenanceConfigurationsComponentOutputs {
	readonly apiVersion: "2020-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Maintenance/maintenanceConfigurations";
}
export interface maintenanceConfigurationsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: MaintenanceConfigurationProperties;
	readonly tags?: MaintenanceConfigurationTags;
}
export class publicMaintenanceConfigurations
	extends ArmResource<publicMaintenanceConfigurationsComponentInputs>
	implements publicMaintenanceConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: publicMaintenanceConfigurationsComponentInputs) {
		super(entity, options.name, "Microsoft.Maintenance/publicMaintenanceConfigurations", "2020-07-01-preview", options);
	}
	public readonly apiVersion: "2020-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Maintenance/publicMaintenanceConfigurations";
}
export interface publicMaintenanceConfigurationsComponentOutputs {
	readonly apiVersion: "2020-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Maintenance/publicMaintenanceConfigurations";
}
export interface publicMaintenanceConfigurationsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: MaintenanceConfigurationProperties;
	readonly tags?: MaintenanceConfigurationTags;
}
export interface ApplyUpdateProperties {
	readonly lastUpdateTime?: string;
	readonly resourceId?: string;
	readonly status?: "Completed" | "InProgress" | "Pending" | "RetryLater" | "RetryNow";
}
export interface ConfigurationAssignmentProperties {
	readonly maintenanceConfigurationId?: string;
	readonly resourceId?: string;
}
export interface MaintenanceConfigurationProperties {
	readonly extensionProperties?: MaintenanceConfigurationPropertiesExtensionProperties;
	readonly maintenanceScope?:
		| "All"
		| "Extension"
		| "Host"
		| "InGuestPatch"
		| "InResource"
		| "OSImage"
		| "Resource"
		| "SQLDB"
		| "SQLManagedInstance";
	readonly maintenanceWindow?: MaintenanceWindow;
	readonly namespace?: string;
	readonly visibility?: "Custom" | "Public";
}
export interface MaintenanceConfigurationPropertiesExtensionProperties {
	readonly [key: string]: string;
}
export interface MaintenanceConfigurationTags {
	readonly [key: string]: string;
}
export interface MaintenanceWindow {
	readonly duration?: string;
	readonly expirationDateTime?: string;
	readonly recurEvery?: string;
	readonly startDateTime?: string;
	readonly timeZone?: string;
}
export default {
	applyUpdates: applyUpdates,
	configurationAssignments: configurationAssignments,
	maintenanceConfigurations: maintenanceConfigurations,
	publicMaintenanceConfigurations: publicMaintenanceConfigurations,
};
