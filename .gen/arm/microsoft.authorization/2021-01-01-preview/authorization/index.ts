import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class roleAssignmentApprovals
	extends ArmResource<roleAssignmentApprovalsComponentInputs>
	implements roleAssignmentApprovalsComponentOutputs
{
	constructor(entity: ADKEntity, options: roleAssignmentApprovalsComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/roleAssignmentApprovals", "2021-01-01-preview", options);
	}
	public readonly apiVersion: "2021-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/roleAssignmentApprovals";
}
export interface roleAssignmentApprovalsComponentOutputs {
	readonly apiVersion: "2021-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Authorization/roleAssignmentApprovals";
}
export interface roleAssignmentApprovalsComponentInputs {
	readonly name: string;
	readonly properties?: RoleAssignmentApprovalProperties | undefined;
}
export class roleAssignmentApprovals_stages
	extends ArmResource<roleAssignmentApprovals_stagesComponentInputs>
	implements roleAssignmentApprovals_stagesComponentOutputs
{
	constructor(entity: ADKEntity, options: roleAssignmentApprovals_stagesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Authorization/roleAssignmentApprovals/stages",
			"2021-01-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/roleAssignmentApprovals/stages";
}
export interface roleAssignmentApprovals_stagesComponentOutputs {
	readonly apiVersion: "2021-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Authorization/roleAssignmentApprovals/stages";
}
export interface roleAssignmentApprovals_stagesComponentInputs {
	readonly assignedToMe?: boolean | undefined;
	readonly displayName?: string | undefined;
	readonly justification?: string | undefined;
	readonly name: string;
	readonly properties?: RoleAssignmentApprovalStepProperties | undefined;
	readonly reviewedBy?: RoleAssignmentApprovalActorIdentity | undefined;
	readonly reviewedDateTime?: string | undefined;
	readonly reviewResult?: ("Approve" | "Deny" | "NotReviewed") | undefined;
	readonly status?:
		| (
				| "Completed"
				| "Completing"
				| "Escalated"
				| "Escalating"
				| "Expired"
				| "InProgress"
				| "Initializing"
				| "NotStarted"
		  )
		| undefined;
}
export interface RoleAssignmentApprovalActorIdentity {
	readonly principalId?: string | undefined;
	readonly principalName?: string | undefined;
	readonly principalType?: ("servicePrincipal" | "user") | undefined;
	readonly userPrincipalName?: string | undefined;
}
export interface RoleAssignmentApprovalProperties {
	readonly stages?: RoleAssignmentApprovalStep[] | undefined;
}
export interface RoleAssignmentApprovalStep {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: RoleAssignmentApprovalStepProperties | undefined;
	readonly type?: string | undefined;
}
export interface RoleAssignmentApprovalStepProperties {
	readonly assignedToMe?: boolean | undefined;
	readonly displayName?: string | undefined;
	readonly justification?: string | undefined;
	readonly reviewedBy?: RoleAssignmentApprovalActorIdentity | undefined;
	readonly reviewedDateTime?: string | undefined;
	readonly reviewResult?: ("Approve" | "Deny" | "NotReviewed") | undefined;
	readonly status?:
		| (
				| "Completed"
				| "Completing"
				| "Escalated"
				| "Escalating"
				| "Expired"
				| "InProgress"
				| "Initializing"
				| "NotStarted"
		  )
		| undefined;
}
export default {
	roleAssignmentApprovals: roleAssignmentApprovals,
	"roleAssignmentApprovals/stages": roleAssignmentApprovals_stages,
};
