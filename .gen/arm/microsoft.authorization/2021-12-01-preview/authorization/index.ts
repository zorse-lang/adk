import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class accessReviewHistoryDefinitions
	extends ArmResource<accessReviewHistoryDefinitionsComponentInputs>
	implements accessReviewHistoryDefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: accessReviewHistoryDefinitionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Authorization/accessReviewHistoryDefinitions",
			"2021-12-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/accessReviewHistoryDefinitions";
}
export interface accessReviewHistoryDefinitionsComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Authorization/accessReviewHistoryDefinitions";
}
export interface accessReviewHistoryDefinitionsComponentInputs {
	readonly createdBy?: AccessReviewActorIdentity | undefined;
	readonly createdDateTime?: string | undefined;
	readonly decisions?: ("Approve" | "Deny" | "DontKnow" | "NotNotified" | "NotReviewed"[]) | undefined;
	readonly displayName?: string | undefined;
	readonly instances?: AccessReviewHistoryInstance[] | undefined;
	readonly name: string;
	readonly properties?: AccessReviewHistoryDefinitionProperties | undefined;
	readonly reviewHistoryPeriodEndDateTime?: string | undefined;
	readonly reviewHistoryPeriodStartDateTime?: string | undefined;
	readonly scopes?: AccessReviewScope[] | undefined;
	readonly settings?: AccessReviewHistoryScheduleSettings | undefined;
	readonly status?: ("Done" | "Error" | "InProgress" | "Requested") | undefined;
}
export class accessReviewScheduleDefinitions
	extends ArmResource<accessReviewScheduleDefinitionsComponentInputs>
	implements accessReviewScheduleDefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: accessReviewScheduleDefinitionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Authorization/accessReviewScheduleDefinitions",
			"2021-12-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/accessReviewScheduleDefinitions";
}
export interface accessReviewScheduleDefinitionsComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Authorization/accessReviewScheduleDefinitions";
}
export interface accessReviewScheduleDefinitionsComponentInputs {
	readonly backupReviewers?: AccessReviewReviewer[] | undefined;
	readonly createdBy?: AccessReviewActorIdentity | undefined;
	readonly descriptionForAdmins?: string | undefined;
	readonly descriptionForReviewers?: string | undefined;
	readonly displayName?: string | undefined;
	readonly instances?: AccessReviewInstance[] | undefined;
	readonly name: string;
	readonly properties?: AccessReviewScheduleDefinitionProperties | undefined;
	readonly reviewers?: AccessReviewReviewer[] | undefined;
	readonly reviewersType?: ("Assigned" | "Managers" | "Self") | undefined;
	readonly scope?: AccessReviewScope | undefined;
	readonly settings?: AccessReviewScheduleSettings | undefined;
	readonly status?:
		| (
				| "Applied"
				| "Applying"
				| "AutoReviewed"
				| "AutoReviewing"
				| "Completed"
				| "Completing"
				| "InProgress"
				| "Initializing"
				| "NotStarted"
				| "Scheduled"
				| "Starting"
		  )
		| undefined;
}
export class accessReviewScheduleDefinitions_instances
	extends ArmResource<accessReviewScheduleDefinitions_instancesComponentInputs>
	implements accessReviewScheduleDefinitions_instancesComponentOutputs
{
	constructor(entity: ADKEntity, options: accessReviewScheduleDefinitions_instancesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Authorization/accessReviewScheduleDefinitions/instances",
			"2021-12-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/accessReviewScheduleDefinitions/instances";
}
export interface accessReviewScheduleDefinitions_instancesComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Authorization/accessReviewScheduleDefinitions/instances";
}
export interface accessReviewScheduleDefinitions_instancesComponentInputs {
	readonly backupReviewers?: AccessReviewReviewer[] | undefined;
	readonly endDateTime?: string | undefined;
	readonly name: string;
	readonly properties?: AccessReviewInstanceProperties | undefined;
	readonly reviewers?: AccessReviewReviewer[] | undefined;
	readonly reviewersType?: ("Assigned" | "Managers" | "Self") | undefined;
	readonly startDateTime?: string | undefined;
	readonly status?:
		| (
				| "Applied"
				| "Applying"
				| "AutoReviewed"
				| "AutoReviewing"
				| "Completed"
				| "Completing"
				| "InProgress"
				| "Initializing"
				| "NotStarted"
				| "Scheduled"
				| "Starting"
		  )
		| undefined;
}
export class accessReviewScheduleDefinitions_instances_decisions
	extends ArmResource<accessReviewScheduleDefinitions_instances_decisionsComponentInputs>
	implements accessReviewScheduleDefinitions_instances_decisionsComponentOutputs
{
	constructor(entity: ADKEntity, options: accessReviewScheduleDefinitions_instances_decisionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Authorization/accessReviewScheduleDefinitions/instances/decisions",
			"2021-12-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/accessReviewScheduleDefinitions/instances/decisions";
}
export interface accessReviewScheduleDefinitions_instances_decisionsComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Authorization/accessReviewScheduleDefinitions/instances/decisions";
}
export interface accessReviewScheduleDefinitions_instances_decisionsComponentInputs {
	readonly name: string;
	readonly properties?: AccessReviewDecisionProperties | undefined;
}
export class accessReviewScheduleSettings
	extends ArmResource<accessReviewScheduleSettingsComponentInputs>
	implements accessReviewScheduleSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: accessReviewScheduleSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/accessReviewScheduleSettings", "2021-12-01-preview", options);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/accessReviewScheduleSettings";
}
export interface accessReviewScheduleSettingsComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Authorization/accessReviewScheduleSettings";
}
export interface accessReviewScheduleSettingsComponentInputs {
	readonly autoApplyDecisionsEnabled?: boolean | undefined;
	readonly defaultDecision?: ("Approve" | "Deny" | "Recommendation") | undefined;
	readonly defaultDecisionEnabled?: boolean | undefined;
	readonly instanceDurationInDays?: number | undefined;
	readonly justificationRequiredOnApproval?: boolean | undefined;
	readonly mailNotificationsEnabled?: boolean | undefined;
	readonly name: string;
	readonly properties?: AccessReviewScheduleSettings | undefined;
	readonly recommendationLookBackDuration?: string | undefined;
	readonly recommendationsEnabled?: boolean | undefined;
	readonly recurrence?: AccessReviewRecurrenceSettings | undefined;
	readonly reminderNotificationsEnabled?: boolean | undefined;
}
export interface AccessReviewActorIdentity {
	readonly principalId?: string | undefined;
	readonly principalName?: string | undefined;
	readonly principalType?: ("servicePrincipal" | "user") | undefined;
	readonly userPrincipalName?: string | undefined;
}
export interface AccessReviewDecisionIdentity {
	readonly displayName?: string | undefined;
	readonly id?: string | undefined;
}
export interface AccessReviewDecisionInsight {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: AccessReviewDecisionInsightProperties | undefined;
	readonly type?: string | undefined;
}
export interface AccessReviewDecisionInsightProperties {
	readonly insightCreatedDateTime?: any | undefined;
}
export interface AccessReviewDecisionPrincipalResourceMembership {
	readonly membershipTypes?: ("direct" | "indirect"[]) | undefined;
}
export interface AccessReviewDecisionProperties {
	readonly appliedBy?: AccessReviewActorIdentity | undefined;
	readonly appliedDateTime?: string | undefined;
	readonly applyResult?:
		| (
				| "AppliedSuccessfully"
				| "AppliedSuccessfullyButObjectNotFound"
				| "AppliedWithUnknownFailure"
				| "ApplyNotSupported"
				| "Applying"
				| "New"
		  )
		| undefined;
	readonly decision?: ("Approve" | "Deny" | "DontKnow" | "NotNotified" | "NotReviewed") | undefined;
	readonly insights?: AccessReviewDecisionInsight[] | undefined;
	readonly justification?: string | undefined;
	readonly principal?: AccessReviewDecisionIdentity | undefined;
	readonly principalResourceMembership?: AccessReviewDecisionPrincipalResourceMembership | undefined;
	readonly recommendation?: ("Approve" | "Deny" | "NoInfoAvailable") | undefined;
	readonly resource?: AccessReviewDecisionResource | undefined;
	readonly reviewedBy?: AccessReviewActorIdentity | undefined;
	readonly reviewedDateTime?: string | undefined;
}
export interface AccessReviewDecisionResource {
	readonly displayName?: string | undefined;
	readonly id?: string | undefined;
	readonly type: "azureRole";
}
export interface AccessReviewHistoryDefinitionProperties {
	readonly createdBy?: AccessReviewActorIdentity | undefined;
	readonly createdDateTime?: string | undefined;
	readonly decisions?: ("Approve" | "Deny" | "DontKnow" | "NotNotified" | "NotReviewed"[]) | undefined;
	readonly displayName?: string | undefined;
	readonly instances?: AccessReviewHistoryInstance[] | undefined;
	readonly reviewHistoryPeriodEndDateTime?: string | undefined;
	readonly reviewHistoryPeriodStartDateTime?: string | undefined;
	readonly scopes?: AccessReviewScope[] | undefined;
	readonly settings?: AccessReviewHistoryScheduleSettings | undefined;
	readonly status?: ("Done" | "Error" | "InProgress" | "Requested") | undefined;
}
export interface AccessReviewHistoryInstance {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: AccessReviewHistoryInstanceProperties | undefined;
	readonly type?: string | undefined;
}
export interface AccessReviewHistoryInstanceProperties {
	readonly displayName?: string | undefined;
	readonly downloadUri?: string | undefined;
	readonly expiration?: string | undefined;
	readonly fulfilledDateTime?: string | undefined;
	readonly reviewHistoryPeriodEndDateTime?: string | undefined;
	readonly reviewHistoryPeriodStartDateTime?: string | undefined;
	readonly runDateTime?: string | undefined;
	readonly status?: ("Done" | "Error" | "InProgress" | "Requested") | undefined;
}
export interface AccessReviewHistoryScheduleSettings {
	readonly pattern?: AccessReviewRecurrencePattern | undefined;
	readonly range?: AccessReviewRecurrenceRange | undefined;
}
export interface AccessReviewInstance {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: AccessReviewInstanceProperties | undefined;
	readonly type?: string | undefined;
}
export interface AccessReviewInstanceProperties {
	readonly backupReviewers?: AccessReviewReviewer[] | undefined;
	readonly endDateTime?: string | undefined;
	readonly reviewers?: AccessReviewReviewer[] | undefined;
	readonly reviewersType?: ("Assigned" | "Managers" | "Self") | undefined;
	readonly startDateTime?: string | undefined;
	readonly status?:
		| (
				| "Applied"
				| "Applying"
				| "AutoReviewed"
				| "AutoReviewing"
				| "Completed"
				| "Completing"
				| "InProgress"
				| "Initializing"
				| "NotStarted"
				| "Scheduled"
				| "Starting"
		  )
		| undefined;
}
export interface AccessReviewRecurrencePattern {
	readonly interval?: number | undefined;
	readonly type?: ("absoluteMonthly" | "weekly") | undefined;
}
export interface AccessReviewRecurrenceRange {
	readonly endDate?: string | undefined;
	readonly numberOfOccurrences?: number | undefined;
	readonly startDate?: string | undefined;
	readonly type?: ("endDate" | "noEnd" | "numbered") | undefined;
}
export interface AccessReviewRecurrenceSettings {
	readonly pattern?: AccessReviewRecurrencePattern | undefined;
	readonly range?: AccessReviewRecurrenceRange | undefined;
}
export interface AccessReviewReviewer {
	readonly principalId?: string | undefined;
	readonly principalType?: ("servicePrincipal" | "user") | undefined;
}
export interface AccessReviewScheduleDefinitionProperties {
	readonly backupReviewers?: AccessReviewReviewer[] | undefined;
	readonly createdBy?: AccessReviewActorIdentity | undefined;
	readonly descriptionForAdmins?: string | undefined;
	readonly descriptionForReviewers?: string | undefined;
	readonly displayName?: string | undefined;
	readonly instances?: AccessReviewInstance[] | undefined;
	readonly reviewers?: AccessReviewReviewer[] | undefined;
	readonly reviewersType?: ("Assigned" | "Managers" | "Self") | undefined;
	readonly scope?: AccessReviewScope | undefined;
	readonly settings?: AccessReviewScheduleSettings | undefined;
	readonly status?:
		| (
				| "Applied"
				| "Applying"
				| "AutoReviewed"
				| "AutoReviewing"
				| "Completed"
				| "Completing"
				| "InProgress"
				| "Initializing"
				| "NotStarted"
				| "Scheduled"
				| "Starting"
		  )
		| undefined;
}
export interface AccessReviewScheduleSettings {
	readonly autoApplyDecisionsEnabled?: boolean | undefined;
	readonly defaultDecision?: ("Approve" | "Deny" | "Recommendation") | undefined;
	readonly defaultDecisionEnabled?: boolean | undefined;
	readonly instanceDurationInDays?: number | undefined;
	readonly justificationRequiredOnApproval?: boolean | undefined;
	readonly mailNotificationsEnabled?: boolean | undefined;
	readonly recommendationLookBackDuration?: string | undefined;
	readonly recommendationsEnabled?: boolean | undefined;
	readonly recurrence?: AccessReviewRecurrenceSettings | undefined;
	readonly reminderNotificationsEnabled?: boolean | undefined;
}
export interface AccessReviewScope {
	readonly assignmentState?: ("active" | "eligible") | undefined;
	readonly excludeResourceId?: string | undefined;
	readonly excludeRoleDefinitionId?: string | undefined;
	readonly expandNestedMemberships?: boolean | undefined;
	readonly inactiveDuration?: string | undefined;
	readonly includeAccessBelowResource?: boolean | undefined;
	readonly includeInheritedAccess?: boolean | undefined;
	readonly principalType?: ("guestUser" | "redeemedGuestUser" | "servicePrincipal" | "user" | "user,group") | undefined;
	readonly resourceId?: string | undefined;
	readonly roleDefinitionId?: string | undefined;
}
export default {
	accessReviewHistoryDefinitions: accessReviewHistoryDefinitions,
	accessReviewScheduleDefinitions: accessReviewScheduleDefinitions,
	"accessReviewScheduleDefinitions/instances": accessReviewScheduleDefinitions_instances,
	"accessReviewScheduleDefinitions/instances/decisions": accessReviewScheduleDefinitions_instances_decisions,
	accessReviewScheduleSettings: accessReviewScheduleSettings,
};
