import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class RegionCommitments
	extends GdmResource<RegionCommitmentsComponentInputs>
	implements RegionCommitmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: RegionCommitmentsComponentInputs) {
		super(entity, options.name, "compute.alpha.RegionCommitments", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly endTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly selfLinkWithId?: string | undefined;
	public readonly startTimestamp?: string | undefined;
	public readonly status?: string | undefined;
	public readonly statusMessage?: string | undefined;
}
export interface RegionCommitmentsComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly endTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly startTimestamp?: string | undefined;
	readonly status?: string | undefined;
	readonly statusMessage?: string | undefined;
}
export interface RegionCommitmentsComponentInputs {
	readonly autoRenew?: boolean | undefined;
	readonly category?: string | undefined;
	readonly description?: string | undefined;
	readonly licenseResource?: LicenseResourceCommitment | undefined;
	readonly mergeSourceCommitments?: string[] | undefined;
	readonly name: string;
	readonly plan?: string | undefined;
	readonly requestId?: string | undefined;
	readonly reservations?: Reservation[] | undefined;
	readonly resources?: ResourceCommitment[] | undefined;
	readonly splitSourceCommitment?: string | undefined;
	readonly type: string;
}
export interface AcceleratorConfig {
	readonly acceleratorCount?: number | undefined;
	readonly acceleratorType?: string | undefined;
}
export interface AllocationResourceStatus {
	readonly specificSkuAllocation?: AllocationResourceStatusSpecificSKUAllocation | undefined;
}
export interface AllocationResourceStatusSpecificSKUAllocation {
	readonly sourceInstanceTemplateId?: string | undefined;
}
export interface AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk {
	readonly diskSizeGb?: string | undefined;
	readonly interface?: string | undefined;
}
export interface AllocationSpecificSKUAllocationReservedInstanceProperties {
	readonly guestAccelerators?: AcceleratorConfig[] | undefined;
	readonly localSsds?: AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk[] | undefined;
	readonly locationHint?: string | undefined;
	readonly machineType?: string | undefined;
	readonly maintenanceFreezeDurationHours?: number | undefined;
	readonly maintenanceInterval?: string | undefined;
	readonly minCpuPlatform?: string | undefined;
}
export interface AllocationSpecificSKUReservation {
	readonly assuredCount?: string | undefined;
	readonly count?: string | undefined;
	readonly instanceProperties?: AllocationSpecificSKUAllocationReservedInstanceProperties | undefined;
	readonly inUseCount?: string | undefined;
	readonly sourceInstanceTemplate?: string | undefined;
}
export interface Commitment {
	readonly autoRenew?: boolean | undefined;
	readonly category?: string | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly endTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly licenseResource?: LicenseResourceCommitment | undefined;
	readonly mergeSourceCommitments?: string[] | undefined;
	readonly name?: string | undefined;
	readonly plan?: string | undefined;
	readonly region?: string | undefined;
	readonly reservations?: Reservation[] | undefined;
	readonly resources?: ResourceCommitment[] | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly splitSourceCommitment?: string | undefined;
	readonly startTimestamp?: string | undefined;
	readonly status?: string | undefined;
	readonly statusMessage?: string | undefined;
	readonly type?: string | undefined;
}
export interface LicenseResourceCommitment {
	readonly amount?: string | undefined;
	readonly coresPerLicense?: string | undefined;
	readonly license?: string | undefined;
}
export interface Reservation {
	readonly commitment?: string | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly resourcePolicies?: { [P in string]: string } | undefined;
	readonly resourceStatus?: AllocationResourceStatus | undefined;
	readonly satisfiesPzs?: boolean | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly shareSettings?: ShareSettings | undefined;
	readonly specificReservation?: AllocationSpecificSKUReservation | undefined;
	readonly specificReservationRequired?: boolean | undefined;
	readonly status?: string | undefined;
	readonly zone?: string | undefined;
}
export interface ResourceCommitment {
	readonly acceleratorType?: string | undefined;
	readonly amount?: string | undefined;
	readonly type?: string | undefined;
}
export interface ShareSettings {
	readonly folderMap?: { [P in string]: ShareSettingsFolderConfig } | undefined;
	readonly projectMap?: { [P in string]: ShareSettingsProjectConfig } | undefined;
	readonly projects?: string[] | undefined;
	readonly shareType?: string | undefined;
}
export interface ShareSettingsFolderConfig {
	readonly folderId?: string | undefined;
}
export interface ShareSettingsProjectConfig {
	readonly projectId?: string | undefined;
}
export default {
	RegionCommitments: RegionCommitments,
};
