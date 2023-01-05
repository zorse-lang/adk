import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class roleAssignmentScheduleRequests
	extends ArmResource<roleAssignmentScheduleRequestsComponentInputs>
	implements roleAssignmentScheduleRequestsComponentOutputs
{
	constructor(entity: ADKEntity, options: roleAssignmentScheduleRequestsComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/roleAssignmentScheduleRequests", "2020-10-01", options);
	}
	public readonly apiVersion: "2020-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/roleAssignmentScheduleRequests";
}
export interface roleAssignmentScheduleRequestsComponentOutputs {
	readonly apiVersion: "2020-10-01";
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
		super(entity, options.name, "Microsoft.Authorization/roleEligibilityScheduleRequests", "2020-10-01", options);
	}
	public readonly apiVersion: "2020-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/roleEligibilityScheduleRequests";
}
export interface roleEligibilityScheduleRequestsComponentOutputs {
	readonly apiVersion: "2020-10-01";
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
		super(entity, options.name, "Microsoft.Authorization/roleManagementPolicyAssignments", "2020-10-01", options);
	}
	public readonly apiVersion: "2020-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/roleManagementPolicyAssignments";
}
export interface roleManagementPolicyAssignmentsComponentOutputs {
	readonly apiVersion: "2020-10-01";
	readonly id: string;
	readonly type: "Microsoft.Authorization/roleManagementPolicyAssignments";
}
export interface roleManagementPolicyAssignmentsComponentInputs {
	readonly name: string;
	readonly properties?: RoleManagementPolicyAssignmentProperties;
}
export interface ApprovalSettings {
	readonly approvalMode?: "NoApproval" | "Parallel" | "Serial" | "SingleStage";
	readonly approvalStages?: ApprovalStage[];
	readonly isApprovalRequired?: boolean;
	readonly isApprovalRequiredForExtension?: boolean;
	readonly isRequestorJustificationRequired?: boolean;
}
export interface ApprovalStage {
	readonly approvalStageTimeOutInDays?: number;
	readonly escalationApprovers?: UserSet[];
	readonly escalationTimeInMinutes?: number;
	readonly isApproverJustificationRequired?: boolean;
	readonly isEscalationEnabled?: boolean;
	readonly primaryApprovers?: UserSet[];
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
	readonly effectiveRules?: RoleManagementPolicyRule[];
	readonly policyAssignmentProperties?: PolicyAssignmentProperties;
	readonly policyId?: string;
	readonly roleDefinitionId?: string;
	readonly scope?: string;
}
export interface RoleManagementPolicyRule {
	readonly id?: string;
	readonly target?: RoleManagementPolicyRuleTarget;
}
export interface RoleManagementPolicyRuleTarget {
	readonly caller?: string;
	readonly enforcedSettings?: string[];
	readonly inheritableSettings?: string[];
	readonly level?: string;
	readonly operations?: string[];
	readonly targetObjects?: string[];
}
export interface UserSet {
	readonly description?: string;
	readonly id?: string;
	readonly isBackup?: boolean;
	readonly userType?: "Group" | "User";
}
export default {
	roleAssignmentScheduleRequests: roleAssignmentScheduleRequests,
	roleEligibilityScheduleRequests: roleEligibilityScheduleRequests,
	roleManagementPolicyAssignments: roleManagementPolicyAssignments,
};
