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
	readonly location?: string;
	readonly name: string;
	readonly properties?: GuestConfigurationAssignmentProperties;
	readonly systemData?: SystemData;
}
export interface AssignmentInfo {
	readonly configuration?: ConfigurationInfo;
	readonly name?: string;
}
export interface AssignmentReport {
	readonly assignment?: AssignmentInfo;
	readonly complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
	readonly endTime?: string;
	readonly id?: string;
	readonly operationType?: "Consistency" | "Initial";
	readonly reportId?: string;
	readonly resources?: AssignmentReportResource[];
	readonly startTime?: string;
	readonly vm?: VMInfo;
}
export interface AssignmentReportResource {
	readonly complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
	readonly properties?: any;
	readonly reasons?: AssignmentReportResourceComplianceReason[];
	readonly resourceId?: string;
}
export interface AssignmentReportResourceComplianceReason {
	readonly code?: string;
	readonly phrase?: string;
}
export interface ConfigurationInfo {
	readonly name?: string;
	readonly version?: string;
}
export interface ConfigurationParameter {
	readonly name?: string;
	readonly value?: string;
}
export interface ConfigurationSetting {
	readonly actionAfterReboot?: "ContinueConfiguration" | "StopConfiguration";
	readonly allowModuleOverwrite?: boolean;
	readonly configurationMode?: "ApplyAndAutoCorrect" | "ApplyAndMonitor" | "ApplyOnly";
	readonly configurationModeFrequencyMins?: number;
	readonly rebootIfNeeded?: boolean;
	readonly refreshFrequencyMins?: number;
}
export interface GuestConfigurationAssignmentProperties {
	readonly assignmentHash?: string;
	readonly complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
	readonly context?: string;
	readonly guestConfiguration?: GuestConfigurationNavigation;
	readonly lastComplianceStatusChecked?: string;
	readonly latestAssignmentReport?: AssignmentReport;
	readonly latestReportId?: string;
	readonly parameterHash?: string;
	readonly provisioningState?: "Canceled" | "Created" | "Failed" | "Succeeded";
	readonly resourceType?: string;
	readonly targetResourceId?: string;
	readonly vmssVMList?: VmssvmInfo[];
}
export interface GuestConfigurationNavigation {
	readonly assignmentType?: "ApplyAndAutoCorrect" | "ApplyAndMonitor" | "Audit" | "DeployAndAutoCorrect";
	readonly configurationParameter?: ConfigurationParameter[];
	readonly configurationProtectedParameter?: ConfigurationParameter[];
	readonly configurationSetting?: ConfigurationSetting;
	readonly contentHash?: string;
	readonly contentType?: string;
	readonly contentUri?: string;
	readonly kind?: "DSC";
	readonly name?: string;
	readonly version?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface VMInfo {
	readonly id?: string;
	readonly uuid?: string;
}
export interface VmssvmInfo {
	readonly complianceStatus?: "Compliant" | "NonCompliant" | "Pending";
	readonly lastComplianceChecked?: string;
	readonly latestReportId?: string;
	readonly vmId?: string;
	readonly vmResourceId?: string;
}
export default {
	guestConfigurationAssignments: guestConfigurationAssignments,
};
