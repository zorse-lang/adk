import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class roleAssignments
	extends ArmResource<roleAssignmentsComponentInputs>
	implements roleAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: roleAssignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/roleAssignments", "2020-10-01-preview", options);
	}
	public readonly apiVersion: "2020-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/roleAssignments";
}
export interface roleAssignmentsComponentOutputs {
	readonly apiVersion: "2020-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Authorization/roleAssignments";
}
export interface roleAssignmentsComponentInputs {
	readonly name: string;
	readonly properties: RoleAssignmentProperties;
}
export class roleAssignmentScheduleRequests
	extends ArmResource<roleAssignmentScheduleRequestsComponentInputs>
	implements roleAssignmentScheduleRequestsComponentOutputs
{
	constructor(entity: ADKEntity, options: roleAssignmentScheduleRequestsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Authorization/roleAssignmentScheduleRequests",
			"2020-10-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/roleAssignmentScheduleRequests";
}
export interface roleAssignmentScheduleRequestsComponentOutputs {
	readonly apiVersion: "2020-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Authorization/roleAssignmentScheduleRequests";
}
export interface roleAssignmentScheduleRequestsComponentInputs {
	readonly name: string;
	readonly properties?: RoleAssignmentScheduleRequestProperties | undefined;
}
export class roleEligibilityScheduleRequests
	extends ArmResource<roleEligibilityScheduleRequestsComponentInputs>
	implements roleEligibilityScheduleRequestsComponentOutputs
{
	constructor(entity: ADKEntity, options: roleEligibilityScheduleRequestsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Authorization/roleEligibilityScheduleRequests",
			"2020-10-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/roleEligibilityScheduleRequests";
}
export interface roleEligibilityScheduleRequestsComponentOutputs {
	readonly apiVersion: "2020-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Authorization/roleEligibilityScheduleRequests";
}
export interface roleEligibilityScheduleRequestsComponentInputs {
	readonly name: string;
	readonly properties?: RoleEligibilityScheduleRequestProperties | undefined;
}
export class roleManagementPolicyAssignments
	extends ArmResource<roleManagementPolicyAssignmentsComponentInputs>
	implements roleManagementPolicyAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: roleManagementPolicyAssignmentsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Authorization/roleManagementPolicyAssignments",
			"2020-10-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/roleManagementPolicyAssignments";
}
export interface roleManagementPolicyAssignmentsComponentOutputs {
	readonly apiVersion: "2020-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Authorization/roleManagementPolicyAssignments";
}
export interface roleManagementPolicyAssignmentsComponentInputs {
	readonly name: string;
	readonly properties?: RoleManagementPolicyAssignmentProperties | undefined;
}
export interface ExpandedProperties {
	readonly principal?: ExpandedPropertiesPrincipal | undefined;
	readonly roleDefinition?: ExpandedPropertiesRoleDefinition | undefined;
	readonly scope?: ExpandedPropertiesScope | undefined;
}
export interface ExpandedPropertiesPrincipal {
	readonly displayName?: string | undefined;
	readonly email?: string | undefined;
	readonly id?: string | undefined;
	readonly type?: string | undefined;
}
export interface ExpandedPropertiesRoleDefinition {
	readonly displayName?: string | undefined;
	readonly id?: string | undefined;
	readonly type?: string | undefined;
}
export interface ExpandedPropertiesScope {
	readonly displayName?: string | undefined;
	readonly id?: string | undefined;
	readonly type?: string | undefined;
}
export interface PolicyAssignmentProperties {
	readonly policy?: PolicyAssignmentPropertiesPolicy | undefined;
	readonly roleDefinition?: PolicyAssignmentPropertiesRoleDefinition | undefined;
	readonly scope?: PolicyAssignmentPropertiesScope | undefined;
}
export interface PolicyAssignmentPropertiesPolicy {
	readonly id?: string | undefined;
	readonly lastModifiedBy?: Principal | undefined;
	readonly lastModifiedDateTime?: string | undefined;
}
export interface PolicyAssignmentPropertiesRoleDefinition {
	readonly displayName?: string | undefined;
	readonly id?: string | undefined;
	readonly type?: string | undefined;
}
export interface PolicyAssignmentPropertiesScope {
	readonly displayName?: string | undefined;
	readonly id?: string | undefined;
	readonly type?: string | undefined;
}
export interface Principal {
	readonly displayName?: string | undefined;
	readonly email?: string | undefined;
	readonly id?: string | undefined;
	readonly type?: string | undefined;
}
export interface RoleAssignmentProperties {
	readonly condition?: string | undefined;
	readonly conditionVersion?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdOn?: string | undefined;
	readonly delegatedManagedIdentityResourceId?: string | undefined;
	readonly description?: string | undefined;
	readonly principalId: string;
	readonly principalType?: ("Device" | "ForeignGroup" | "Group" | "ServicePrincipal" | "User") | undefined;
	readonly roleDefinitionId: string;
	readonly scope?: string | undefined;
	readonly updatedBy?: string | undefined;
	readonly updatedOn?: string | undefined;
}
export interface RoleAssignmentScheduleRequestProperties {
	readonly approvalId?: string | undefined;
	readonly condition?: string | undefined;
	readonly conditionVersion?: string | undefined;
	readonly createdOn?: string | undefined;
	readonly expandedProperties?: ExpandedProperties | undefined;
	readonly justification?: string | undefined;
	readonly linkedRoleEligibilityScheduleId?: string | undefined;
	readonly principalId: string;
	readonly principalType?: ("Device" | "ForeignGroup" | "Group" | "ServicePrincipal" | "User") | undefined;
	readonly requestorId?: string | undefined;
	readonly requestType:
		| "AdminAssign"
		| "AdminExtend"
		| "AdminRemove"
		| "AdminRenew"
		| "AdminUpdate"
		| "SelfActivate"
		| "SelfDeactivate"
		| "SelfExtend"
		| "SelfRenew";
	readonly roleDefinitionId: string;
	readonly scheduleInfo?: RoleAssignmentScheduleRequestPropertiesScheduleInfo | undefined;
	readonly scope?: string | undefined;
	readonly status?:
		| (
				| "Accepted"
				| "AdminApproved"
				| "AdminDenied"
				| "Canceled"
				| "Denied"
				| "Failed"
				| "FailedAsResourceIsLocked"
				| "Granted"
				| "Invalid"
				| "PendingAdminDecision"
				| "PendingApproval"
				| "PendingApprovalProvisioning"
				| "PendingEvaluation"
				| "PendingExternalProvisioning"
				| "PendingProvisioning"
				| "PendingRevocation"
				| "PendingScheduleCreation"
				| "Provisioned"
				| "ProvisioningStarted"
				| "Revoked"
				| "ScheduleCreated"
				| "TimedOut"
		  )
		| undefined;
	readonly targetRoleAssignmentScheduleId?: string | undefined;
	readonly targetRoleAssignmentScheduleInstanceId?: string | undefined;
	readonly ticketInfo?: RoleAssignmentScheduleRequestPropertiesTicketInfo | undefined;
}
export interface RoleAssignmentScheduleRequestPropertiesScheduleInfo {
	readonly expiration?: RoleAssignmentScheduleRequestPropertiesScheduleInfoExpiration | undefined;
	readonly startDateTime?: string | undefined;
}
export interface RoleAssignmentScheduleRequestPropertiesScheduleInfoExpiration {
	readonly duration?: string | undefined;
	readonly endDateTime?: string | undefined;
	readonly type?: ("AfterDateTime" | "AfterDuration" | "NoExpiration") | undefined;
}
export interface RoleAssignmentScheduleRequestPropertiesTicketInfo {
	readonly ticketNumber?: string | undefined;
	readonly ticketSystem?: string | undefined;
}
export interface RoleEligibilityScheduleRequestProperties {
	readonly approvalId?: string | undefined;
	readonly condition?: string | undefined;
	readonly conditionVersion?: string | undefined;
	readonly createdOn?: string | undefined;
	readonly expandedProperties?: ExpandedProperties | undefined;
	readonly justification?: string | undefined;
	readonly principalId: string;
	readonly principalType?: ("Device" | "ForeignGroup" | "Group" | "ServicePrincipal" | "User") | undefined;
	readonly requestorId?: string | undefined;
	readonly requestType:
		| "AdminAssign"
		| "AdminExtend"
		| "AdminRemove"
		| "AdminRenew"
		| "AdminUpdate"
		| "SelfActivate"
		| "SelfDeactivate"
		| "SelfExtend"
		| "SelfRenew";
	readonly roleDefinitionId: string;
	readonly scheduleInfo?: RoleEligibilityScheduleRequestPropertiesScheduleInfo | undefined;
	readonly scope?: string | undefined;
	readonly status?:
		| (
				| "Accepted"
				| "AdminApproved"
				| "AdminDenied"
				| "Canceled"
				| "Denied"
				| "Failed"
				| "FailedAsResourceIsLocked"
				| "Granted"
				| "Invalid"
				| "PendingAdminDecision"
				| "PendingApproval"
				| "PendingApprovalProvisioning"
				| "PendingEvaluation"
				| "PendingExternalProvisioning"
				| "PendingProvisioning"
				| "PendingRevocation"
				| "PendingScheduleCreation"
				| "Provisioned"
				| "ProvisioningStarted"
				| "Revoked"
				| "ScheduleCreated"
				| "TimedOut"
		  )
		| undefined;
	readonly targetRoleEligibilityScheduleId?: string | undefined;
	readonly targetRoleEligibilityScheduleInstanceId?: string | undefined;
	readonly ticketInfo?: RoleEligibilityScheduleRequestPropertiesTicketInfo | undefined;
}
export interface RoleEligibilityScheduleRequestPropertiesScheduleInfo {
	readonly expiration?: RoleEligibilityScheduleRequestPropertiesScheduleInfoExpiration | undefined;
	readonly startDateTime?: string | undefined;
}
export interface RoleEligibilityScheduleRequestPropertiesScheduleInfoExpiration {
	readonly duration?: string | undefined;
	readonly endDateTime?: string | undefined;
	readonly type?: ("AfterDateTime" | "AfterDuration" | "NoExpiration") | undefined;
}
export interface RoleEligibilityScheduleRequestPropertiesTicketInfo {
	readonly ticketNumber?: string | undefined;
	readonly ticketSystem?: string | undefined;
}
export interface RoleManagementPolicyAssignmentProperties {
	readonly policyAssignmentProperties?: PolicyAssignmentProperties | undefined;
	readonly policyId?: string | undefined;
	readonly roleDefinitionId?: string | undefined;
	readonly scope?: string | undefined;
}
export default {
	roleAssignments: roleAssignments,
	roleAssignmentScheduleRequests: roleAssignmentScheduleRequests,
	roleEligibilityScheduleRequests: roleEligibilityScheduleRequests,
	roleManagementPolicyAssignments: roleManagementPolicyAssignments,
};
