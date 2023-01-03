import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class guestConfigurationAssignments
	extends ArmResource<guestConfigurationAssignmentsComponentInputs>
	implements guestConfigurationAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: guestConfigurationAssignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.GuestConfiguration/guestConfigurationAssignments", "2018-11-20", options);
	}
	public readonly apiVersion: "2018-11-20";
	public readonly id: string;
	public readonly type: "Microsoft.GuestConfiguration/guestConfigurationAssignments";
}
export interface guestConfigurationAssignmentsComponentOutputs {
	readonly apiVersion: "2018-11-20";
	readonly id: string;
	readonly type: "Microsoft.GuestConfiguration/guestConfigurationAssignments";
}
export interface guestConfigurationAssignmentsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: GuestConfigurationAssignmentProperties | undefined;
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
	readonly latestReportId?: string | undefined;
	readonly parameterHash?: string | undefined;
	readonly provisioningState?: ("Canceled" | "Created" | "Failed" | "Succeeded") | undefined;
	readonly resourceType?: string | undefined;
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
