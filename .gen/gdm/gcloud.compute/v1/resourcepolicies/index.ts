import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ResourcePolicies
	extends GdmResource<ResourcePoliciesComponentInputs>
	implements ResourcePoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: ResourcePoliciesComponentInputs) {
		super(entity, options.name, "compute.v1.ResourcePolicies", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly resourceStatus?: ResourcePolicyResourceStatus | undefined;
	public readonly selfLink?: string | undefined;
	public readonly status?: string | undefined;
}
export interface ResourcePoliciesComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly resourceStatus?: ResourcePolicyResourceStatus | undefined;
	readonly selfLink?: string | undefined;
	readonly status?: string | undefined;
}
export interface ResourcePoliciesComponentInputs {
	readonly description?: string | undefined;
	readonly groupPlacementPolicy?: ResourcePolicyGroupPlacementPolicy | undefined;
	readonly instanceSchedulePolicy?: ResourcePolicyInstanceSchedulePolicy | undefined;
	readonly name: string;
	readonly region?: string | undefined;
	readonly requestId?: string | undefined;
	readonly snapshotSchedulePolicy?: ResourcePolicySnapshotSchedulePolicy | undefined;
	readonly type: string;
}
export interface ResourcePolicy {
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly groupPlacementPolicy?: ResourcePolicyGroupPlacementPolicy | undefined;
	readonly id?: string | undefined;
	readonly instanceSchedulePolicy?: ResourcePolicyInstanceSchedulePolicy | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly region?: string | undefined;
	readonly resourceStatus?: ResourcePolicyResourceStatus | undefined;
	readonly selfLink?: string | undefined;
	readonly snapshotSchedulePolicy?: ResourcePolicySnapshotSchedulePolicy | undefined;
	readonly status?: string | undefined;
}
export interface ResourcePolicyDailyCycle {
	readonly daysInCycle?: number | undefined;
	readonly duration?: string | undefined;
	readonly startTime?: string | undefined;
}
export interface ResourcePolicyGroupPlacementPolicy {
	readonly availabilityDomainCount?: number | undefined;
	readonly collocation?: string | undefined;
	readonly vmCount?: number | undefined;
}
export interface ResourcePolicyHourlyCycle {
	readonly duration?: string | undefined;
	readonly hoursInCycle?: number | undefined;
	readonly startTime?: string | undefined;
}
export interface ResourcePolicyInstanceSchedulePolicy {
	readonly expirationTime?: string | undefined;
	readonly startTime?: string | undefined;
	readonly timeZone?: string | undefined;
	readonly vmStartSchedule?: ResourcePolicyInstanceSchedulePolicySchedule | undefined;
	readonly vmStopSchedule?: ResourcePolicyInstanceSchedulePolicySchedule | undefined;
}
export interface ResourcePolicyInstanceSchedulePolicySchedule {
	readonly schedule?: string | undefined;
}
export interface ResourcePolicyResourceStatus {
	readonly instanceSchedulePolicy?: ResourcePolicyResourceStatusInstanceSchedulePolicyStatus | undefined;
}
export interface ResourcePolicyResourceStatusInstanceSchedulePolicyStatus {
	readonly lastRunStartTime?: string | undefined;
	readonly nextRunStartTime?: string | undefined;
}
export interface ResourcePolicySnapshotSchedulePolicy {
	readonly retentionPolicy?: ResourcePolicySnapshotSchedulePolicyRetentionPolicy | undefined;
	readonly schedule?: ResourcePolicySnapshotSchedulePolicySchedule | undefined;
	readonly snapshotProperties?: ResourcePolicySnapshotSchedulePolicySnapshotProperties | undefined;
}
export interface ResourcePolicySnapshotSchedulePolicyRetentionPolicy {
	readonly maxRetentionDays?: number | undefined;
	readonly onSourceDiskDelete?: string | undefined;
}
export interface ResourcePolicySnapshotSchedulePolicySchedule {
	readonly dailySchedule?: ResourcePolicyDailyCycle | undefined;
	readonly hourlySchedule?: ResourcePolicyHourlyCycle | undefined;
	readonly weeklySchedule?: ResourcePolicyWeeklyCycle | undefined;
}
export interface ResourcePolicySnapshotSchedulePolicySnapshotProperties {
	readonly chainName?: string | undefined;
	readonly guestFlush?: boolean | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly storageLocations?: string[] | undefined;
}
export interface ResourcePolicyWeeklyCycle {
	readonly dayOfWeeks?: ResourcePolicyWeeklyCycleDayOfWeek[] | undefined;
}
export interface ResourcePolicyWeeklyCycleDayOfWeek {
	readonly day?: string | undefined;
	readonly duration?: string | undefined;
	readonly startTime?: string | undefined;
}
export default {
	ResourcePolicies: ResourcePolicies,
};
