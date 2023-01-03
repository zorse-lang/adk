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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: GuestConfigurationAssignmentProperties | undefined;
}
export interface ConfigurationParameter {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface ConfigurationParameterList {
	readonly value?: ConfigurationParameter[] | undefined;
}
export interface GuestConfigurationAssignmentProperties {
	readonly assignmentHash?: string | undefined;
	readonly complianceReason?: string | undefined;
	readonly complianceStatus?: ("Compliant" | "NotCompliant" | "Pending") | undefined;
	readonly guestConfiguration?: GuestConfigurationNavigation | undefined;
	readonly latestReportId?: string | undefined;
	readonly location?: string | undefined;
	readonly provisioningState?: "Succeeded" | undefined;
}
export interface GuestConfigurationNavigation {
	readonly configurationParameter?: ConfigurationParameterList | undefined;
	readonly kind?: "DSC" | undefined;
	readonly name?: string | undefined;
	readonly type?: string | undefined;
}
export default {
	guestConfigurationAssignments: guestConfigurationAssignments,
};
