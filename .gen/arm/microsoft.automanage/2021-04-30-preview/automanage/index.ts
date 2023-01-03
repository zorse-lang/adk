import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class bestPractices extends ArmResource<bestPracticesComponentInputs> implements bestPracticesComponentOutputs {
	constructor(entity: ADKEntity, options: bestPracticesComponentInputs) {
		super(entity, options.name, "Microsoft.Automanage/bestPractices", "2021-04-30-preview", options);
	}
	public readonly apiVersion: "2021-04-30-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Automanage/bestPractices";
}
export interface bestPracticesComponentOutputs {
	readonly apiVersion: "2021-04-30-preview";
	readonly id: string;
	readonly type: "Microsoft.Automanage/bestPractices";
}
export interface bestPracticesComponentInputs {
	readonly name: string;
	readonly properties?: ConfigurationProfileProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class bestPractices_versions
	extends ArmResource<bestPractices_versionsComponentInputs>
	implements bestPractices_versionsComponentOutputs
{
	constructor(entity: ADKEntity, options: bestPractices_versionsComponentInputs) {
		super(entity, options.name, "Microsoft.Automanage/bestPractices/versions", "2021-04-30-preview", options);
	}
	public readonly apiVersion: "2021-04-30-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Automanage/bestPractices/versions";
}
export interface bestPractices_versionsComponentOutputs {
	readonly apiVersion: "2021-04-30-preview";
	readonly id: string;
	readonly type: "Microsoft.Automanage/bestPractices/versions";
}
export interface bestPractices_versionsComponentInputs {
	readonly name: string;
	readonly properties?: ConfigurationProfileProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class configurationProfileAssignments
	extends ArmResource<configurationProfileAssignmentsComponentInputs>
	implements configurationProfileAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: configurationProfileAssignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Automanage/configurationProfileAssignments", "2021-04-30-preview", options);
	}
	public readonly apiVersion: "2021-04-30-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Automanage/configurationProfileAssignments";
}
export interface configurationProfileAssignmentsComponentOutputs {
	readonly apiVersion: "2021-04-30-preview";
	readonly id: string;
	readonly type: "Microsoft.Automanage/configurationProfileAssignments";
}
export interface configurationProfileAssignmentsComponentInputs {
	readonly name: string;
	readonly properties?: ConfigurationProfileAssignmentProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class configurationProfileAssignments_reports
	extends ArmResource<configurationProfileAssignments_reportsComponentInputs>
	implements configurationProfileAssignments_reportsComponentOutputs
{
	constructor(entity: ADKEntity, options: configurationProfileAssignments_reportsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Automanage/configurationProfileAssignments/reports",
			"2021-04-30-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-04-30-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Automanage/configurationProfileAssignments/reports";
}
export interface configurationProfileAssignments_reportsComponentOutputs {
	readonly apiVersion: "2021-04-30-preview";
	readonly id: string;
	readonly type: "Microsoft.Automanage/configurationProfileAssignments/reports";
}
export interface configurationProfileAssignments_reportsComponentInputs {
	readonly name: string;
	readonly properties?: AssignmentReportProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class configurationProfiles
	extends ArmResource<configurationProfilesComponentInputs>
	implements configurationProfilesComponentOutputs
{
	constructor(entity: ADKEntity, options: configurationProfilesComponentInputs) {
		super(entity, options.name, "Microsoft.Automanage/configurationProfiles", "2021-04-30-preview", options);
	}
	public readonly apiVersion: "2021-04-30-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Automanage/configurationProfiles";
}
export interface configurationProfilesComponentOutputs {
	readonly apiVersion: "2021-04-30-preview";
	readonly id: string;
	readonly type: "Microsoft.Automanage/configurationProfiles";
}
export interface configurationProfilesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ConfigurationProfileProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class configurationProfiles_versions
	extends ArmResource<configurationProfiles_versionsComponentInputs>
	implements configurationProfiles_versionsComponentOutputs
{
	constructor(entity: ADKEntity, options: configurationProfiles_versionsComponentInputs) {
		super(entity, options.name, "Microsoft.Automanage/configurationProfiles/versions", "2021-04-30-preview", options);
	}
	public readonly apiVersion: "2021-04-30-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Automanage/configurationProfiles/versions";
}
export interface configurationProfiles_versionsComponentOutputs {
	readonly apiVersion: "2021-04-30-preview";
	readonly id: string;
	readonly type: "Microsoft.Automanage/configurationProfiles/versions";
}
export interface configurationProfiles_versionsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ConfigurationProfileProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class servicePrincipals
	extends ArmResource<servicePrincipalsComponentInputs>
	implements servicePrincipalsComponentOutputs
{
	constructor(entity: ADKEntity, options: servicePrincipalsComponentInputs) {
		super(entity, options.name, "Microsoft.Automanage/servicePrincipals", "2021-04-30-preview", options);
	}
	public readonly apiVersion: "2021-04-30-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Automanage/servicePrincipals";
}
export interface servicePrincipalsComponentOutputs {
	readonly apiVersion: "2021-04-30-preview";
	readonly id: string;
	readonly type: "Microsoft.Automanage/servicePrincipals";
}
export interface servicePrincipalsComponentInputs {
	readonly name: string;
	readonly properties?: ServicePrincipalProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface AssignmentReportProperties {
	readonly configurationProfile?: string | undefined;
	readonly duration?: string | undefined;
	readonly endTime?: string | undefined;
	readonly error?: ErrorDetail | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly reportFormatVersion?: string | undefined;
	readonly resources?: ReportResource[] | undefined;
	readonly startTime?: string | undefined;
	readonly status?: string | undefined;
	readonly type?: string | undefined;
}
export interface ConfigurationProfileAssignmentProfileOverrides {
	readonly "[ key: string ]"?: any | undefined;
}
export interface ConfigurationProfileAssignmentProperties {
	readonly configurationProfile?: string | undefined;
	readonly profileOverrides?: ConfigurationProfileAssignmentProfileOverrides | undefined;
	readonly status?: string | undefined;
	readonly targetId?: string | undefined;
}
export interface ConfigurationProfileProperties {
	readonly configuration?: any | undefined;
	readonly overrides?: any[] | undefined;
}
export interface ErrorAdditionalInfo {
	readonly info?: any | undefined;
	readonly type?: string | undefined;
}
export interface ErrorDetail {
	readonly additionalInfo?: ErrorAdditionalInfo[] | undefined;
	readonly code?: string | undefined;
	readonly details?: ErrorDetail[] | undefined;
	readonly message?: string | undefined;
	readonly target?: string | undefined;
}
export interface ReportResource {
	readonly error?: ErrorDetail | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly status?: string | undefined;
	readonly type?: string | undefined;
}
export interface ServicePrincipalProperties {
	readonly authorizationSet?: boolean | undefined;
	readonly servicePrincipalId?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	bestPractices: bestPractices,
	"bestPractices/versions": bestPractices_versions,
	configurationProfileAssignments: configurationProfileAssignments,
	"configurationProfileAssignments/reports": configurationProfileAssignments_reports,
	configurationProfiles: configurationProfiles,
	"configurationProfiles/versions": configurationProfiles_versions,
	servicePrincipals: servicePrincipals,
};
