import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class FutureReservations
	extends GdmResource<FutureReservationsComponentInputs>
	implements FutureReservationsComponentOutputs
{
	constructor(entity: ADKEntity, options: FutureReservationsComponentInputs) {
		super(entity, options.name, "compute.alpha.FutureReservations", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
	public readonly status?: FutureReservationStatus;
	public readonly zone?: string;
}
export interface FutureReservationsComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly status?: FutureReservationStatus;
	readonly zone?: string;
}
export interface FutureReservationsComponentInputs {
	readonly description?: string;
	readonly name: string;
	readonly namePrefix?: string;
	readonly planningStatus?: string;
	readonly requestId?: string;
	readonly shareSettings?: ShareSettings;
	readonly specificSkuProperties?: FutureReservationSpecificSKUProperties;
	readonly timeWindow?: FutureReservationTimeWindow;
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
export interface Duration {
	readonly nanos?: number;
	readonly seconds?: string;
}
export interface FutureReservation {
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly namePrefix?: string;
	readonly planningStatus?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly shareSettings?: ShareSettings;
	readonly specificSkuProperties?: FutureReservationSpecificSKUProperties;
	readonly status?: FutureReservationStatus;
	readonly timeWindow?: FutureReservationTimeWindow;
	readonly zone?: string;
}
export interface FutureReservationSpecificSKUProperties {
	readonly instanceProperties?: AllocationSpecificSKUAllocationReservedInstanceProperties;
	readonly sourceInstanceTemplate?: string;
	readonly totalCount?: string;
}
export interface FutureReservationStatus {
	readonly autoCreatedReservations?: string[];
	readonly fulfilledCount?: string;
	readonly lockTime?: string;
	readonly procurementStatus?: string;
	readonly specificSkuProperties?: FutureReservationStatusSpecificSKUProperties;
}
export interface FutureReservationStatusSpecificSKUProperties {
	readonly sourceInstanceTemplateId?: string;
}
export interface FutureReservationTimeWindow {
	readonly duration?: Duration;
	readonly endTime?: string;
	readonly startTime?: string;
}
export interface ShareSettings {
	readonly folderMap?: { [P in string]: ShareSettingsFolderConfig };
	readonly projectMap?: { [P in string]: ShareSettingsProjectConfig };
	readonly projects?: string[];
	readonly shareType?: string;
}
export interface ShareSettingsFolderConfig {
	readonly folderId?: string;
}
export interface ShareSettingsProjectConfig {
	readonly projectId?: string;
}
export default {
	FutureReservations: FutureReservations,
};
