import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class guestConfigurationAssignments
	extends ArmResource<guestConfigurationAssignmentsComponentInputs>
	implements guestConfigurationAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: guestConfigurationAssignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.GuestConfiguration/guestConfigurationAssignments", "2021-01-25", options);
	}
	public readonly apiVersion: "2021-01-25";
	public readonly id: string;
	public readonly type: "Microsoft.GuestConfiguration/guestConfigurationAssignments";
}
export interface guestConfigurationAssignmentsComponentOutputs {
	readonly apiVersion: "2021-01-25";
	readonly id: string;
	readonly type: "Microsoft.GuestConfiguration/guestConfigurationAssignments";
}
export interface guestConfigurationAssignmentsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: GuestConfigurationAssignmentProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface AssignmentInfo {
	readonly configuration?: ConfigurationInfo | undefined;
	readonly name?: string | undefined;
}
export interface AssignmentReport {
	readonly assignment?: AssignmentInfo | undefined;
	readonly complianceStatus?: ("Compliant" | "NonCompliant" | "Pending") | undefined;
	readonly endTime?: string | undefined;
	readonly id?: string | undefined;
	readonly operationType?: ("Consistency" | "Initial") | undefined;
	readonly reportId?: string | undefined;
	readonly resources?: AssignmentReportResource[] | undefined;
	readonly startTime?: string | undefined;
	readonly vm?: VMInfo | undefined;
}
export interface AssignmentReportResource {
	readonly complianceStatus?: ("Compliant" | "NonCompliant" | "Pending") | undefined;
	readonly properties?: any | undefined;
	readonly reasons?: AssignmentReportResourceComplianceReason[] | undefined;
	readonly resourceId?: string | undefined;
}
export interface AssignmentReportResourceComplianceReason {
	readonly code?: string | undefined;
	readonly phrase?: string | undefined;
}
export interface ConfigurationInfo {
	readonly name?: string | undefined;
	readonly version?: string | undefined;
}
export interface ConfigurationParameter {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface ConfigurationSetting {
	readonly actionAfterReboot?: ("ContinueConfiguration" | "StopConfiguration") | undefined;
	readonly allowModuleOverwrite?: boolean | undefined;
	readonly configurationMode?: ("ApplyAndAutoCorrect" | "ApplyAndMonitor" | "ApplyOnly") | undefined;
	readonly configurationModeFrequencyMins?: number | undefined;
	readonly rebootIfNeeded?: boolean | undefined;
	readonly refreshFrequencyMins?: number | undefined;
}
export interface GuestConfigurationAssignmentProperties {
	readonly assignmentHash?: string | undefined;
	readonly complianceStatus?: ("Compliant" | "NonCompliant" | "Pending") | undefined;
	readonly context?: string | undefined;
	readonly guestConfiguration?: GuestConfigurationNavigation | undefined;
	readonly lastComplianceStatusChecked?: string | undefined;
	readonly latestAssignmentReport?: AssignmentReport | undefined;
	readonly latestReportId?: string | undefined;
	readonly parameterHash?: string | undefined;
	readonly provisioningState?: ("Canceled" | "Created" | "Failed" | "Succeeded") | undefined;
	readonly resourceType?: string | undefined;
	readonly targetResourceId?: string | undefined;
	readonly vmssVMList?: VmssvmInfo[] | undefined;
}
export interface GuestConfigurationNavigation {
	readonly assignmentType?: ("ApplyAndAutoCorrect" | "ApplyAndMonitor" | "Audit" | "DeployAndAutoCorrect") | undefined;
	readonly configurationParameter?: ConfigurationParameter[] | undefined;
	readonly configurationProtectedParameter?: ConfigurationParameter[] | undefined;
	readonly configurationSetting?: ConfigurationSetting | undefined;
	readonly contentHash?: string | undefined;
	readonly contentType?: string | undefined;
	readonly contentUri?: string | undefined;
	readonly kind?: "DSC" | undefined;
	readonly name?: string | undefined;
	readonly version?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface VMInfo {
	readonly id?: string | undefined;
	readonly uuid?: string | undefined;
}
export interface VmssvmInfo {
	readonly complianceStatus?: ("Compliant" | "NonCompliant" | "Pending") | undefined;
	readonly lastComplianceChecked?: string | undefined;
	readonly latestReportId?: string | undefined;
	readonly vmId?: string | undefined;
	readonly vmResourceId?: string | undefined;
}
export default {
	guestConfigurationAssignments: guestConfigurationAssignments,
};
