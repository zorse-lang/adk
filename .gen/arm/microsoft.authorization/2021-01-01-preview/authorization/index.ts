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
	readonly properties?: RoleAssignmentApprovalProperties;
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
	readonly assignedToMe?: boolean;
	readonly displayName?: string;
	readonly justification?: string;
	readonly name: string;
	readonly properties?: RoleAssignmentApprovalStepProperties;
	readonly reviewedBy?: RoleAssignmentApprovalActorIdentity;
	readonly reviewedDateTime?: string;
	readonly reviewResult?: "Approve" | "Deny" | "NotReviewed";
	readonly status?:
		| "Completed"
		| "Completing"
		| "Escalated"
		| "Escalating"
		| "Expired"
		| "InProgress"
		| "Initializing"
		| "NotStarted";
}
export interface RoleAssignmentApprovalActorIdentity {
	readonly principalId?: string;
	readonly principalName?: string;
	readonly principalType?: "servicePrincipal" | "user";
	readonly userPrincipalName?: string;
}
export interface RoleAssignmentApprovalProperties {
	readonly stages?: RoleAssignmentApprovalStep[];
}
export interface RoleAssignmentApprovalStep {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: RoleAssignmentApprovalStepProperties;
	readonly type?: string;
}
export interface RoleAssignmentApprovalStepProperties {
	readonly assignedToMe?: boolean;
	readonly displayName?: string;
	readonly justification?: string;
	readonly reviewedBy?: RoleAssignmentApprovalActorIdentity;
	readonly reviewedDateTime?: string;
	readonly reviewResult?: "Approve" | "Deny" | "NotReviewed";
	readonly status?:
		| "Completed"
		| "Completing"
		| "Escalated"
		| "Escalating"
		| "Expired"
		| "InProgress"
		| "Initializing"
		| "NotStarted";
}
export default {
	roleAssignmentApprovals: roleAssignmentApprovals,
	"roleAssignmentApprovals/stages": roleAssignmentApprovals_stages,
};
