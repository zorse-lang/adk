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
	readonly properties?: RoleAssignmentScheduleRequestProperties;
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
	readonly properties?: RoleEligibilityScheduleRequestProperties;
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
	readonly properties?: RoleManagementPolicyAssignmentProperties;
}
export interface ExpandedProperties {
	readonly principal?: ExpandedPropertiesPrincipal;
	readonly roleDefinition?: ExpandedPropertiesRoleDefinition;
	readonly scope?: ExpandedPropertiesScope;
}
export interface ExpandedPropertiesPrincipal {
	readonly displayName?: string;
	readonly email?: string;
	readonly id?: string;
	readonly type?: string;
}
export interface ExpandedPropertiesRoleDefinition {
	readonly displayName?: string;
	readonly id?: string;
	readonly type?: string;
}
export interface ExpandedPropertiesScope {
	readonly displayName?: string;
	readonly id?: string;
	readonly type?: string;
}
export interface PolicyAssignmentProperties {
	readonly policy?: PolicyAssignmentPropertiesPolicy;
	readonly roleDefinition?: PolicyAssignmentPropertiesRoleDefinition;
	readonly scope?: PolicyAssignmentPropertiesScope;
}
export interface PolicyAssignmentPropertiesPolicy {
	readonly id?: string;
	readonly lastModifiedBy?: Principal;
	readonly lastModifiedDateTime?: string;
}
export interface PolicyAssignmentPropertiesRoleDefinition {
	readonly displayName?: string;
	readonly id?: string;
	readonly type?: string;
}
export interface PolicyAssignmentPropertiesScope {
	readonly displayName?: string;
	readonly id?: string;
	readonly type?: string;
}
export interface Principal {
	readonly displayName?: string;
	readonly email?: string;
	readonly id?: string;
	readonly type?: string;
}
export interface RoleAssignmentProperties {
	readonly condition?: string;
	readonly conditionVersion?: string;
	readonly createdBy?: string;
	readonly createdOn?: string;
	readonly delegatedManagedIdentityResourceId?: string;
	readonly description?: string;
	readonly principalId: string;
	readonly principalType?: "Device" | "ForeignGroup" | "Group" | "ServicePrincipal" | "User";
	readonly roleDefinitionId: string;
	readonly scope?: string;
	readonly updatedBy?: string;
	readonly updatedOn?: string;
}
export interface RoleAssignmentScheduleRequestProperties {
	readonly approvalId?: string;
	readonly condition?: string;
	readonly conditionVersion?: string;
	readonly createdOn?: string;
	readonly expandedProperties?: ExpandedProperties;
	readonly justification?: string;
	readonly linkedRoleEligibilityScheduleId?: string;
	readonly principalId: string;
	readonly principalType?: "Device" | "ForeignGroup" | "Group" | "ServicePrincipal" | "User";
	readonly requestorId?: string;
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
	readonly scheduleInfo?: RoleAssignmentScheduleRequestPropertiesScheduleInfo;
	readonly scope?: string;
	readonly status?:
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
		| "TimedOut";
	readonly targetRoleAssignmentScheduleId?: string;
	readonly targetRoleAssignmentScheduleInstanceId?: string;
	readonly ticketInfo?: RoleAssignmentScheduleRequestPropertiesTicketInfo;
}
export interface RoleAssignmentScheduleRequestPropertiesScheduleInfo {
	readonly expiration?: RoleAssignmentScheduleRequestPropertiesScheduleInfoExpiration;
	readonly startDateTime?: string;
}
export interface RoleAssignmentScheduleRequestPropertiesScheduleInfoExpiration {
	readonly duration?: string;
	readonly endDateTime?: string;
	readonly type?: "AfterDateTime" | "AfterDuration" | "NoExpiration";
}
export interface RoleAssignmentScheduleRequestPropertiesTicketInfo {
	readonly ticketNumber?: string;
	readonly ticketSystem?: string;
}
export interface RoleEligibilityScheduleRequestProperties {
	readonly approvalId?: string;
	readonly condition?: string;
	readonly conditionVersion?: string;
	readonly createdOn?: string;
	readonly expandedProperties?: ExpandedProperties;
	readonly justification?: string;
	readonly principalId: string;
	readonly principalType?: "Device" | "ForeignGroup" | "Group" | "ServicePrincipal" | "User";
	readonly requestorId?: string;
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
	readonly scheduleInfo?: RoleEligibilityScheduleRequestPropertiesScheduleInfo;
	readonly scope?: string;
	readonly status?:
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
		| "TimedOut";
	readonly targetRoleEligibilityScheduleId?: string;
	readonly targetRoleEligibilityScheduleInstanceId?: string;
	readonly ticketInfo?: RoleEligibilityScheduleRequestPropertiesTicketInfo;
}
export interface RoleEligibilityScheduleRequestPropertiesScheduleInfo {
	readonly expiration?: RoleEligibilityScheduleRequestPropertiesScheduleInfoExpiration;
	readonly startDateTime?: string;
}
export interface RoleEligibilityScheduleRequestPropertiesScheduleInfoExpiration {
	readonly duration?: string;
	readonly endDateTime?: string;
	readonly type?: "AfterDateTime" | "AfterDuration" | "NoExpiration";
}
export interface RoleEligibilityScheduleRequestPropertiesTicketInfo {
	readonly ticketNumber?: string;
	readonly ticketSystem?: string;
}
export interface RoleManagementPolicyAssignmentProperties {
	readonly policyAssignmentProperties?: PolicyAssignmentProperties;
	readonly policyId?: string;
	readonly roleDefinitionId?: string;
	readonly scope?: string;
}
export default {
	roleAssignments: roleAssignments,
	roleAssignmentScheduleRequests: roleAssignmentScheduleRequests,
	roleEligibilityScheduleRequests: roleEligibilityScheduleRequests,
	roleManagementPolicyAssignments: roleManagementPolicyAssignments,
};
