import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Reservations extends GdmResource<ReservationsComponentInputs> implements ReservationsComponentOutputs {
	constructor(entity: ADKEntity, options: ReservationsComponentInputs) {
		super(entity, options.name, "compute.beta.Reservations", options);
	}
	public readonly commitment?: string | undefined;
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly satisfiesPzs?: boolean | undefined;
	public readonly selfLink?: string | undefined;
	public readonly status?: string | undefined;
}
export interface ReservationsComponentOutputs {
	readonly commitment?: string | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly satisfiesPzs?: boolean | undefined;
	readonly selfLink?: string | undefined;
	readonly status?: string | undefined;
}
export interface ReservationsComponentInputs {
	readonly description?: string | undefined;
	readonly name: string;
	readonly requestId?: string | undefined;
	readonly resourcePolicies?: { [P in string]: string } | undefined;
	readonly shareSettings?: ShareSettings | undefined;
	readonly specificReservation?: AllocationSpecificSKUReservation | undefined;
	readonly specificReservationRequired?: boolean | undefined;
	readonly zone?: string | undefined;
	readonly type: string;
}
export interface AcceleratorConfig {
	readonly acceleratorCount?: number | undefined;
	readonly acceleratorType?: string | undefined;
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
}
export interface Reservation {
	readonly commitment?: string | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly resourcePolicies?: { [P in string]: string } | undefined;
	readonly satisfiesPzs?: boolean | undefined;
	readonly selfLink?: string | undefined;
	readonly shareSettings?: ShareSettings | undefined;
	readonly specificReservation?: AllocationSpecificSKUReservation | undefined;
	readonly specificReservationRequired?: boolean | undefined;
	readonly status?: string | undefined;
	readonly zone?: string | undefined;
}
export interface ShareSettings {
	readonly projectMap?: { [P in string]: ShareSettingsProjectConfig } | undefined;
	readonly projects?: string[] | undefined;
	readonly shareType?: string | undefined;
}
export interface ShareSettingsProjectConfig {
	readonly projectId?: string | undefined;
}
export default {
	Reservations: Reservations,
};
