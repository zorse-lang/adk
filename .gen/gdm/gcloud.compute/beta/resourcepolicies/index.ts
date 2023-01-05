import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ResourcePolicies
	extends GdmResource<ResourcePoliciesComponentInputs>
	implements ResourcePoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: ResourcePoliciesComponentInputs) {
		super(entity, options.name, "compute.beta.ResourcePolicies", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly resourceStatus?: ResourcePolicyResourceStatus;
	public readonly selfLink?: string;
	public readonly status?: string;
}
export interface ResourcePoliciesComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly resourceStatus?: ResourcePolicyResourceStatus;
	readonly selfLink?: string;
	readonly status?: string;
}
export interface ResourcePoliciesComponentInputs {
	readonly description?: string;
	readonly groupPlacementPolicy?: ResourcePolicyGroupPlacementPolicy;
	readonly instanceSchedulePolicy?: ResourcePolicyInstanceSchedulePolicy;
	readonly name: string;
	readonly region?: string;
	readonly requestId?: string;
	readonly snapshotSchedulePolicy?: ResourcePolicySnapshotSchedulePolicy;
}
export interface ResourcePolicy {
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly groupPlacementPolicy?: ResourcePolicyGroupPlacementPolicy;
	readonly id?: string;
	readonly instanceSchedulePolicy?: ResourcePolicyInstanceSchedulePolicy;
	readonly kind?: string;
	readonly name?: string;
	readonly region?: string;
	readonly resourceStatus?: ResourcePolicyResourceStatus;
	readonly selfLink?: string;
	readonly snapshotSchedulePolicy?: ResourcePolicySnapshotSchedulePolicy;
	readonly status?: string;
}
export interface ResourcePolicyDailyCycle {
	readonly daysInCycle?: number;
	readonly duration?: string;
	readonly startTime?: string;
}
export interface ResourcePolicyGroupPlacementPolicy {
	readonly availabilityDomainCount?: number;
	readonly collocation?: string;
	readonly vmCount?: number;
}
export interface ResourcePolicyHourlyCycle {
	readonly duration?: string;
	readonly hoursInCycle?: number;
	readonly startTime?: string;
}
export interface ResourcePolicyInstanceSchedulePolicy {
	readonly expirationTime?: string;
	readonly startTime?: string;
	readonly timeZone?: string;
	readonly vmStartSchedule?: ResourcePolicyInstanceSchedulePolicySchedule;
	readonly vmStopSchedule?: ResourcePolicyInstanceSchedulePolicySchedule;
}
export interface ResourcePolicyInstanceSchedulePolicySchedule {
	readonly schedule?: string;
}
export interface ResourcePolicyResourceStatus {
	readonly instanceSchedulePolicy?: ResourcePolicyResourceStatusInstanceSchedulePolicyStatus;
}
export interface ResourcePolicyResourceStatusInstanceSchedulePolicyStatus {
	readonly lastRunStartTime?: string;
	readonly nextRunStartTime?: string;
}
export interface ResourcePolicySnapshotSchedulePolicy {
	readonly retentionPolicy?: ResourcePolicySnapshotSchedulePolicyRetentionPolicy;
	readonly schedule?: ResourcePolicySnapshotSchedulePolicySchedule;
	readonly snapshotProperties?: ResourcePolicySnapshotSchedulePolicySnapshotProperties;
}
export interface ResourcePolicySnapshotSchedulePolicyRetentionPolicy {
	readonly maxRetentionDays?: number;
	readonly onSourceDiskDelete?: string;
}
export interface ResourcePolicySnapshotSchedulePolicySchedule {
	readonly dailySchedule?: ResourcePolicyDailyCycle;
	readonly hourlySchedule?: ResourcePolicyHourlyCycle;
	readonly weeklySchedule?: ResourcePolicyWeeklyCycle;
}
export interface ResourcePolicySnapshotSchedulePolicySnapshotProperties {
	readonly chainName?: string;
	readonly guestFlush?: boolean;
	readonly labels?: { [P in string]: string };
	readonly storageLocations?: string[];
}
export interface ResourcePolicyWeeklyCycle {
	readonly dayOfWeeks?: ResourcePolicyWeeklyCycleDayOfWeek[];
}
export interface ResourcePolicyWeeklyCycleDayOfWeek {
	readonly day?: string;
	readonly duration?: string;
	readonly startTime?: string;
}
export default {
	ResourcePolicies: ResourcePolicies,
};
