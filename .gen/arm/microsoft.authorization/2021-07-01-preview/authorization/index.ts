import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class accessReviewScheduleDefinitions
	extends ArmResource<accessReviewScheduleDefinitionsComponentInputs>
	implements accessReviewScheduleDefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: accessReviewScheduleDefinitionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Authorization/accessReviewScheduleDefinitions",
			"2021-07-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/accessReviewScheduleDefinitions";
}
export interface accessReviewScheduleDefinitionsComponentOutputs {
	readonly apiVersion: "2021-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Authorization/accessReviewScheduleDefinitions";
}
export interface accessReviewScheduleDefinitionsComponentInputs {
	readonly backupReviewers?: AccessReviewReviewer[];
	readonly createdBy?: AccessReviewActorIdentity;
	readonly descriptionForAdmins?: string;
	readonly descriptionForReviewers?: string;
	readonly displayName?: string;
	readonly instances?: AccessReviewInstance[];
	readonly name: string;
	readonly properties?: AccessReviewScheduleDefinitionProperties;
	readonly reviewers?: AccessReviewReviewer[];
	readonly reviewersType?: "Assigned" | "Managers" | "Self";
	readonly scope?: AccessReviewScope;
	readonly settings?: AccessReviewScheduleSettings;
	readonly status?:
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
		| "Starting";
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
			"2021-07-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/accessReviewScheduleDefinitions/instances";
}
export interface accessReviewScheduleDefinitions_instancesComponentOutputs {
	readonly apiVersion: "2021-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Authorization/accessReviewScheduleDefinitions/instances";
}
export interface accessReviewScheduleDefinitions_instancesComponentInputs {
	readonly backupReviewers?: AccessReviewReviewer[];
	readonly endDateTime?: string;
	readonly name: string;
	readonly properties?: AccessReviewInstanceProperties;
	readonly reviewers?: AccessReviewReviewer[];
	readonly reviewersType?: "Assigned" | "Managers" | "Self";
	readonly startDateTime?: string;
	readonly status?:
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
		| "Starting";
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
			"2021-07-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/accessReviewScheduleDefinitions/instances/decisions";
}
export interface accessReviewScheduleDefinitions_instances_decisionsComponentOutputs {
	readonly apiVersion: "2021-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Authorization/accessReviewScheduleDefinitions/instances/decisions";
}
export interface accessReviewScheduleDefinitions_instances_decisionsComponentInputs {
	readonly name: string;
	readonly properties?: AccessReviewDecisionProperties;
}
export class accessReviewScheduleSettings
	extends ArmResource<accessReviewScheduleSettingsComponentInputs>
	implements accessReviewScheduleSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: accessReviewScheduleSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/accessReviewScheduleSettings", "2021-07-01-preview", options);
	}
	public readonly apiVersion: "2021-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/accessReviewScheduleSettings";
}
export interface accessReviewScheduleSettingsComponentOutputs {
	readonly apiVersion: "2021-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Authorization/accessReviewScheduleSettings";
}
export interface accessReviewScheduleSettingsComponentInputs {
	readonly autoApplyDecisionsEnabled?: boolean;
	readonly defaultDecision?: "Approve" | "Deny" | "Recommendation";
	readonly defaultDecisionEnabled?: boolean;
	readonly instanceDurationInDays?: number;
	readonly justificationRequiredOnApproval?: boolean;
	readonly mailNotificationsEnabled?: boolean;
	readonly name: string;
	readonly properties?: AccessReviewScheduleSettings;
	readonly recommendationLookBackDuration?: string;
	readonly recommendationsEnabled?: boolean;
	readonly recurrence?: AccessReviewRecurrenceSettings;
	readonly reminderNotificationsEnabled?: boolean;
}
export interface AccessReviewActorIdentity {
	readonly principalId?: string;
	readonly principalName?: string;
	readonly principalType?: "servicePrincipal" | "user";
	readonly userPrincipalName?: string;
}
export interface AccessReviewDecisionIdentity {
	readonly displayName?: string;
	readonly id?: string;
}
export interface AccessReviewDecisionProperties {
	readonly appliedBy?: AccessReviewActorIdentity;
	readonly appliedDateTime?: string;
	readonly applyResult?:
		| "AppliedSuccessfully"
		| "AppliedSuccessfullyButObjectNotFound"
		| "AppliedWithUnknownFailure"
		| "ApplyNotSupported"
		| "Applying"
		| "New";
	readonly decision?: "Approve" | "Deny" | "DontKnow" | "NotNotified" | "NotReviewed";
	readonly justification?: string;
	readonly principal?: AccessReviewDecisionIdentity;
	readonly recommendation?: "Approve" | "Deny" | "NoInfoAvailable";
	readonly resource?: AccessReviewDecisionResource;
	readonly reviewedBy?: AccessReviewActorIdentity;
	readonly reviewedDateTime?: string;
}
export interface AccessReviewDecisionResource {
	readonly displayName?: string;
	readonly id?: string;
}
export interface AccessReviewInstance {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: AccessReviewInstanceProperties;
	readonly type?: string;
}
export interface AccessReviewInstanceProperties {
	readonly backupReviewers?: AccessReviewReviewer[];
	readonly endDateTime?: string;
	readonly reviewers?: AccessReviewReviewer[];
	readonly reviewersType?: "Assigned" | "Managers" | "Self";
	readonly startDateTime?: string;
	readonly status?:
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
		| "Starting";
}
export interface AccessReviewRecurrencePattern {
	readonly interval?: number;
	readonly type?: "absoluteMonthly" | "weekly";
}
export interface AccessReviewRecurrenceRange {
	readonly endDate?: string;
	readonly numberOfOccurrences?: number;
	readonly startDate?: string;
	readonly type?: "endDate" | "noEnd" | "numbered";
}
export interface AccessReviewRecurrenceSettings {
	readonly pattern?: AccessReviewRecurrencePattern;
	readonly range?: AccessReviewRecurrenceRange;
}
export interface AccessReviewReviewer {
	readonly principalId?: string;
	readonly principalType?: "servicePrincipal" | "user";
}
export interface AccessReviewScheduleDefinitionProperties {
	readonly backupReviewers?: AccessReviewReviewer[];
	readonly createdBy?: AccessReviewActorIdentity;
	readonly descriptionForAdmins?: string;
	readonly descriptionForReviewers?: string;
	readonly displayName?: string;
	readonly instances?: AccessReviewInstance[];
	readonly reviewers?: AccessReviewReviewer[];
	readonly reviewersType?: "Assigned" | "Managers" | "Self";
	readonly scope?: AccessReviewScope;
	readonly settings?: AccessReviewScheduleSettings;
	readonly status?:
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
		| "Starting";
}
export interface AccessReviewScheduleSettings {
	readonly autoApplyDecisionsEnabled?: boolean;
	readonly defaultDecision?: "Approve" | "Deny" | "Recommendation";
	readonly defaultDecisionEnabled?: boolean;
	readonly instanceDurationInDays?: number;
	readonly justificationRequiredOnApproval?: boolean;
	readonly mailNotificationsEnabled?: boolean;
	readonly recommendationLookBackDuration?: string;
	readonly recommendationsEnabled?: boolean;
	readonly recurrence?: AccessReviewRecurrenceSettings;
	readonly reminderNotificationsEnabled?: boolean;
}
export interface AccessReviewScope {
	readonly assignmentState?: "active" | "eligible";
	readonly expandNestedMemberships?: boolean;
	readonly inactiveDuration?: string;
	readonly principalType?: "guestUser" | "redeemedGuestUser" | "servicePrincipal" | "user" | "user,group";
	readonly resourceId?: string;
	readonly roleDefinitionId?: string;
}
export default {
	accessReviewScheduleDefinitions: accessReviewScheduleDefinitions,
	"accessReviewScheduleDefinitions/instances": accessReviewScheduleDefinitions_instances,
	"accessReviewScheduleDefinitions/instances/decisions": accessReviewScheduleDefinitions_instances_decisions,
	accessReviewScheduleSettings: accessReviewScheduleSettings,
};
