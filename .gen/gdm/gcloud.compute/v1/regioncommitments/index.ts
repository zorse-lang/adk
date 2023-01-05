import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class RegionCommitments
	extends GdmResource<RegionCommitmentsComponentInputs>
	implements RegionCommitmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: RegionCommitmentsComponentInputs) {
		super(entity, options.name, "compute.v1.RegionCommitments", options);
	}
	public readonly creationTimestamp?: string;
	public readonly endTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
	public readonly startTimestamp?: string;
	public readonly status?: string;
	public readonly statusMessage?: string;
}
export interface RegionCommitmentsComponentOutputs {
	readonly creationTimestamp?: string;
	readonly endTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly startTimestamp?: string;
	readonly status?: string;
	readonly statusMessage?: string;
}
export interface RegionCommitmentsComponentInputs {
	readonly autoRenew?: boolean;
	readonly category?: string;
	readonly description?: string;
	readonly licenseResource?: LicenseResourceCommitment;
	readonly mergeSourceCommitments?: string[];
	readonly name: string;
	readonly plan?: string;
	readonly requestId?: string;
	readonly reservations?: Reservation[];
	readonly resources?: ResourceCommitment[];
	readonly splitSourceCommitment?: string;
}
export interface AcceleratorConfig {
	readonly acceleratorCount?: number;
	readonly acceleratorType?: string;
}
export interface AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk {
	readonly diskSizeGb?: string;
	readonly interface?: string;
}
export interface AllocationSpecificSKUAllocationReservedInstanceProperties {
	readonly guestAccelerators?: AcceleratorConfig[];
	readonly localSsds?: AllocationSpecificSKUAllocationAllocatedInstancePropertiesReservedDisk[];
	readonly locationHint?: string;
	readonly machineType?: string;
	readonly minCpuPlatform?: string;
}
export interface AllocationSpecificSKUReservation {
	readonly assuredCount?: string;
	readonly count?: string;
	readonly instanceProperties?: AllocationSpecificSKUAllocationReservedInstanceProperties;
	readonly inUseCount?: string;
}
export interface Commitment {
	readonly autoRenew?: boolean;
	readonly category?: string;
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly endTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly licenseResource?: LicenseResourceCommitment;
	readonly mergeSourceCommitments?: string[];
	readonly name?: string;
	readonly plan?: string;
	readonly region?: string;
	readonly reservations?: Reservation[];
	readonly resources?: ResourceCommitment[];
	readonly selfLink?: string;
	readonly splitSourceCommitment?: string;
	readonly startTimestamp?: string;
	readonly status?: string;
	readonly statusMessage?: string;
	readonly type?: string;
}
export interface LicenseResourceCommitment {
	readonly amount?: string;
	readonly coresPerLicense?: string;
	readonly license?: string;
}
export interface Reservation {
	readonly commitment?: string;
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly satisfiesPzs?: boolean;
	readonly selfLink?: string;
	readonly shareSettings?: ShareSettings;
	readonly specificReservation?: AllocationSpecificSKUReservation;
	readonly specificReservationRequired?: boolean;
	readonly status?: string;
	readonly zone?: string;
}
export interface ResourceCommitment {
	readonly acceleratorType?: string;
	readonly amount?: string;
	readonly type?: string;
}
export interface ShareSettings {
	readonly projectMap?: { [P in string]: ShareSettingsProjectConfig };
	readonly shareType?: string;
}
export interface ShareSettingsProjectConfig {
	readonly projectId?: string;
}
export default {
	RegionCommitments: RegionCommitments,
};
