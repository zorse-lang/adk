import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class guestConfigurationAssignments
	extends ArmResource<guestConfigurationAssignmentsComponentInputs>
	implements guestConfigurationAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: guestConfigurationAssignmentsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.GuestConfiguration/guestConfigurationAssignments",
			"2018-01-20-preview",
			options,
		);
	}
	public readonly apiVersion: "2018-01-20-preview";
	public readonly id: string;
	public readonly type: "Microsoft.GuestConfiguration/guestConfigurationAssignments";
}
export interface guestConfigurationAssignmentsComponentOutputs {
	readonly apiVersion: "2018-01-20-preview";
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
export interface ConfigurationParameterList {
	readonly value?: ConfigurationParameter[];
}
export interface GuestConfigurationAssignmentProperties {
	readonly assignmentHash?: string;
	readonly complianceReason?: string;
	readonly complianceStatus?: "Compliant" | "NotCompliant" | "Pending";
	readonly guestConfiguration?: GuestConfigurationNavigation;
	readonly latestReportId?: string;
	readonly location?: string;
	readonly provisioningState?: "Succeeded";
}
export interface GuestConfigurationNavigation {
	readonly configurationParameter?: ConfigurationParameterList;
	readonly kind?: "DSC";
	readonly name?: string;
	readonly type?: string;
}
export default {
	guestConfigurationAssignments: guestConfigurationAssignments,
};
