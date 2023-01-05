import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Reservations extends GdmResource<ReservationsComponentInputs> implements ReservationsComponentOutputs {
	constructor(entity: ADKEntity, options: ReservationsComponentInputs) {
		super(entity, options.name, "compute.beta.Reservations", options);
	}
	public readonly commitment?: string;
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly satisfiesPzs?: boolean;
	public readonly selfLink?: string;
	public readonly status?: string;
}
export interface ReservationsComponentOutputs {
	readonly commitment?: string;
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly satisfiesPzs?: boolean;
	readonly selfLink?: string;
	readonly status?: string;
}
export interface ReservationsComponentInputs {
	readonly description?: string;
	readonly name: string;
	readonly requestId?: string;
	readonly resourcePolicies?: { [P in string]: string };
	readonly shareSettings?: ShareSettings;
	readonly specificReservation?: AllocationSpecificSKUReservation;
	readonly specificReservationRequired?: boolean;
	readonly zone?: string;
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
	readonly maintenanceFreezeDurationHours?: number;
	readonly maintenanceInterval?: string;
	readonly minCpuPlatform?: string;
}
export interface AllocationSpecificSKUReservation {
	readonly assuredCount?: string;
	readonly count?: string;
	readonly instanceProperties?: AllocationSpecificSKUAllocationReservedInstanceProperties;
	readonly inUseCount?: string;
}
export interface Reservation {
	readonly commitment?: string;
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly resourcePolicies?: { [P in string]: string };
	readonly satisfiesPzs?: boolean;
	readonly selfLink?: string;
	readonly shareSettings?: ShareSettings;
	readonly specificReservation?: AllocationSpecificSKUReservation;
	readonly specificReservationRequired?: boolean;
	readonly status?: string;
	readonly zone?: string;
}
export interface ShareSettings {
	readonly projectMap?: { [P in string]: ShareSettingsProjectConfig };
	readonly projects?: string[];
	readonly shareType?: string;
}
export interface ShareSettingsProjectConfig {
	readonly projectId?: string;
}
export default {
	Reservations: Reservations,
};
