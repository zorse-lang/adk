import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class applyUpdates extends ArmResource<applyUpdatesComponentInputs> implements applyUpdatesComponentOutputs {
	constructor(entity: ADKEntity, options: applyUpdatesComponentInputs) {
		super(entity, options.name, "Microsoft.Maintenance/applyUpdates", "2021-04-01-preview", options);
	}
	public readonly apiVersion: "2021-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Maintenance/applyUpdates";
}
export interface applyUpdatesComponentOutputs {
	readonly apiVersion: "2021-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Maintenance/applyUpdates";
}
export interface applyUpdatesComponentInputs {
	readonly name: string;
	readonly properties?: ApplyUpdateProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class configurationAssignments
	extends ArmResource<configurationAssignmentsComponentInputs>
	implements configurationAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: configurationAssignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Maintenance/configurationAssignments", "2021-04-01-preview", options);
	}
	public readonly apiVersion: "2021-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Maintenance/configurationAssignments";
}
export interface configurationAssignmentsComponentOutputs {
	readonly apiVersion: "2021-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Maintenance/configurationAssignments";
}
export interface configurationAssignmentsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ConfigurationAssignmentProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class maintenanceConfigurations
	extends ArmResource<maintenanceConfigurationsComponentInputs>
	implements maintenanceConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: maintenanceConfigurationsComponentInputs) {
		super(entity, options.name, "Microsoft.Maintenance/maintenanceConfigurations", "2021-04-01-preview", options);
	}
	public readonly apiVersion: "2021-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Maintenance/maintenanceConfigurations";
}
export interface maintenanceConfigurationsComponentOutputs {
	readonly apiVersion: "2021-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Maintenance/maintenanceConfigurations";
}
export interface maintenanceConfigurationsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: MaintenanceConfigurationProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: MaintenanceConfigurationTags | undefined;
}
export class publicMaintenanceConfigurations
	extends ArmResource<publicMaintenanceConfigurationsComponentInputs>
	implements publicMaintenanceConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: publicMaintenanceConfigurationsComponentInputs) {
		super(entity, options.name, "Microsoft.Maintenance/publicMaintenanceConfigurations", "2021-04-01-preview", options);
	}
	public readonly apiVersion: "2021-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Maintenance/publicMaintenanceConfigurations";
}
export interface publicMaintenanceConfigurationsComponentOutputs {
	readonly apiVersion: "2021-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Maintenance/publicMaintenanceConfigurations";
}
export interface publicMaintenanceConfigurationsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: MaintenanceConfigurationProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: MaintenanceConfigurationTags | undefined;
}
export interface ApplyUpdateProperties {
	readonly lastUpdateTime?: string | undefined;
	readonly resourceId?: string | undefined;
	readonly status?: ("Completed" | "InProgress" | "Pending" | "RetryLater" | "RetryNow") | undefined;
}
export interface ConfigurationAssignmentProperties {
	readonly maintenanceConfigurationId?: string | undefined;
	readonly resourceId?: string | undefined;
}
export interface InputLinuxParameters {
	readonly classificationsToInclude?: string[] | undefined;
	readonly packageNameMasksToExclude?: string[] | undefined;
	readonly packageNameMasksToInclude?: string[] | undefined;
}
export interface InputPatchConfiguration {
	readonly linuxParameters?: InputLinuxParameters | undefined;
	readonly rebootSetting?: ("AlwaysReboot" | "NeverReboot" | "RebootIfRequired") | undefined;
	readonly tasks?: SoftwareUpdateConfigurationTasks | undefined;
	readonly windowsParameters?: InputWindowsParameters | undefined;
}
export interface InputWindowsParameters {
	readonly classificationsToInclude?: string[] | undefined;
	readonly excludeKbsRequiringReboot?: boolean | undefined;
	readonly kbNumbersToExclude?: string[] | undefined;
	readonly kbNumbersToInclude?: string[] | undefined;
}
export interface MaintenanceConfigurationProperties {
	readonly extensionProperties?: MaintenanceConfigurationPropertiesExtensionProperties | undefined;
	readonly installPatches?: InputPatchConfiguration | undefined;
	readonly maintenanceScope?:
		| ("Extension" | "Host" | "InGuestPatch" | "OSImage" | "SQLDB" | "SQLManagedInstance")
		| undefined;
	readonly maintenanceWindow?: MaintenanceWindow | undefined;
	readonly namespace?: string | undefined;
	readonly visibility?: ("Custom" | "Public") | undefined;
}
export interface MaintenanceConfigurationPropertiesExtensionProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface MaintenanceConfigurationTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface MaintenanceWindow {
	readonly duration?: string | undefined;
	readonly expirationDateTime?: string | undefined;
	readonly recurEvery?: string | undefined;
	readonly startDateTime?: string | undefined;
	readonly timeZone?: string | undefined;
}
export interface SoftwareUpdateConfigurationTasks {
	readonly postTasks?: TaskProperties[] | undefined;
	readonly preTasks?: TaskProperties[] | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TaskProperties {
	readonly parameters?: TaskPropertiesParameters | undefined;
	readonly source?: string | undefined;
	readonly taskScope?: ("Global" | "Resource") | undefined;
}
export interface TaskPropertiesParameters {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	applyUpdates: applyUpdates,
	configurationAssignments: configurationAssignments,
	maintenanceConfigurations: maintenanceConfigurations,
	publicMaintenanceConfigurations: publicMaintenanceConfigurations,
};
