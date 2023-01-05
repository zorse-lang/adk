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
	readonly location?: string;
	readonly name: string;
	readonly properties?: GuestConfigurationAssignmentProperties;
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
	readonly latestReportId?: string;
	readonly parameterHash?: string;
	readonly provisioningState?: "Canceled" | "Created" | "Failed" | "Succeeded";
	readonly resourceType?: string;
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
