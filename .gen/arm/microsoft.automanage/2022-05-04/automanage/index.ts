import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class bestPractices extends ArmResource<bestPracticesComponentInputs> implements bestPracticesComponentOutputs {
	constructor(entity: ADKEntity, options: bestPracticesComponentInputs) {
		super(entity, options.name, "Microsoft.Automanage/bestPractices", "2022-05-04", options);
	}
	public readonly apiVersion: "2022-05-04";
	public readonly id: string;
	public readonly type: "Microsoft.Automanage/bestPractices";
}
export interface bestPracticesComponentOutputs {
	readonly apiVersion: "2022-05-04";
	readonly id: string;
	readonly type: "Microsoft.Automanage/bestPractices";
}
export interface bestPracticesComponentInputs {
	readonly name: string;
	readonly properties?: ConfigurationProfileProperties;
	readonly systemData?: SystemData;
}
export class bestPractices_versions
	extends ArmResource<bestPractices_versionsComponentInputs>
	implements bestPractices_versionsComponentOutputs
{
	constructor(entity: ADKEntity, options: bestPractices_versionsComponentInputs) {
		super(entity, options.name, "Microsoft.Automanage/bestPractices/versions", "2022-05-04", options);
	}
	public readonly apiVersion: "2022-05-04";
	public readonly id: string;
	public readonly type: "Microsoft.Automanage/bestPractices/versions";
}
export interface bestPractices_versionsComponentOutputs {
	readonly apiVersion: "2022-05-04";
	readonly id: string;
	readonly type: "Microsoft.Automanage/bestPractices/versions";
}
export interface bestPractices_versionsComponentInputs {
	readonly name: string;
	readonly properties?: ConfigurationProfileProperties;
	readonly systemData?: SystemData;
}
export class configurationProfileAssignments
	extends ArmResource<configurationProfileAssignmentsComponentInputs>
	implements configurationProfileAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: configurationProfileAssignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Automanage/configurationProfileAssignments", "2022-05-04", options);
	}
	public readonly apiVersion: "2022-05-04";
	public readonly id: string;
	public readonly type: "Microsoft.Automanage/configurationProfileAssignments";
}
export interface configurationProfileAssignmentsComponentOutputs {
	readonly apiVersion: "2022-05-04";
	readonly id: string;
	readonly type: "Microsoft.Automanage/configurationProfileAssignments";
}
export interface configurationProfileAssignmentsComponentInputs {
	readonly managedBy?: string;
	readonly name: string;
	readonly properties?: ConfigurationProfileAssignmentProperties;
	readonly systemData?: SystemData;
}
export class configurationProfileAssignments_reports
	extends ArmResource<configurationProfileAssignments_reportsComponentInputs>
	implements configurationProfileAssignments_reportsComponentOutputs
{
	constructor(entity: ADKEntity, options: configurationProfileAssignments_reportsComponentInputs) {
		super(entity, options.name, "Microsoft.Automanage/configurationProfileAssignments/reports", "2022-05-04", options);
	}
	public readonly apiVersion: "2022-05-04";
	public readonly id: string;
	public readonly type: "Microsoft.Automanage/configurationProfileAssignments/reports";
}
export interface configurationProfileAssignments_reportsComponentOutputs {
	readonly apiVersion: "2022-05-04";
	readonly id: string;
	readonly type: "Microsoft.Automanage/configurationProfileAssignments/reports";
}
export interface configurationProfileAssignments_reportsComponentInputs {
	readonly name: string;
	readonly properties?: AssignmentReportProperties;
	readonly systemData?: SystemData;
}
export class configurationProfiles
	extends ArmResource<configurationProfilesComponentInputs>
	implements configurationProfilesComponentOutputs
{
	constructor(entity: ADKEntity, options: configurationProfilesComponentInputs) {
		super(entity, options.name, "Microsoft.Automanage/configurationProfiles", "2022-05-04", options);
	}
	public readonly apiVersion: "2022-05-04";
	public readonly id: string;
	public readonly type: "Microsoft.Automanage/configurationProfiles";
}
export interface configurationProfilesComponentOutputs {
	readonly apiVersion: "2022-05-04";
	readonly id: string;
	readonly type: "Microsoft.Automanage/configurationProfiles";
}
export interface configurationProfilesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ConfigurationProfileProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class configurationProfiles_versions
	extends ArmResource<configurationProfiles_versionsComponentInputs>
	implements configurationProfiles_versionsComponentOutputs
{
	constructor(entity: ADKEntity, options: configurationProfiles_versionsComponentInputs) {
		super(entity, options.name, "Microsoft.Automanage/configurationProfiles/versions", "2022-05-04", options);
	}
	public readonly apiVersion: "2022-05-04";
	public readonly id: string;
	public readonly type: "Microsoft.Automanage/configurationProfiles/versions";
}
export interface configurationProfiles_versionsComponentOutputs {
	readonly apiVersion: "2022-05-04";
	readonly id: string;
	readonly type: "Microsoft.Automanage/configurationProfiles/versions";
}
export interface configurationProfiles_versionsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ConfigurationProfileProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class servicePrincipals
	extends ArmResource<servicePrincipalsComponentInputs>
	implements servicePrincipalsComponentOutputs
{
	constructor(entity: ADKEntity, options: servicePrincipalsComponentInputs) {
		super(entity, options.name, "Microsoft.Automanage/servicePrincipals", "2022-05-04", options);
	}
	public readonly apiVersion: "2022-05-04";
	public readonly id: string;
	public readonly type: "Microsoft.Automanage/servicePrincipals";
}
export interface servicePrincipalsComponentOutputs {
	readonly apiVersion: "2022-05-04";
	readonly id: string;
	readonly type: "Microsoft.Automanage/servicePrincipals";
}
export interface servicePrincipalsComponentInputs {
	readonly name: string;
	readonly properties?: ServicePrincipalProperties;
	readonly systemData?: SystemData;
}
export interface AssignmentReportProperties {
	readonly configurationProfile?: string;
	readonly duration?: string;
	readonly endTime?: string;
	readonly error?: ErrorDetail;
	readonly lastModifiedTime?: string;
	readonly reportFormatVersion?: string;
	readonly resources?: ReportResource[];
	readonly startTime?: string;
	readonly status?: string;
	readonly type?: string;
}
export interface ConfigurationProfileAssignmentProperties {
	readonly configurationProfile?: string;
	readonly status?: string;
	readonly targetId?: string;
}
export interface ConfigurationProfileProperties {
	readonly configuration?: any;
}
export interface ErrorAdditionalInfo {
	readonly info?: any;
	readonly type?: string;
}
export interface ErrorDetail {
	readonly additionalInfo?: ErrorAdditionalInfo[];
	readonly code?: string;
	readonly details?: ErrorDetail[];
	readonly message?: string;
	readonly target?: string;
}
export interface ReportResource {
	readonly error?: ErrorDetail;
	readonly id?: string;
	readonly name?: string;
	readonly status?: string;
	readonly type?: string;
}
export interface ServicePrincipalProperties {
	readonly authorizationSet?: boolean;
	readonly servicePrincipalId?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
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
