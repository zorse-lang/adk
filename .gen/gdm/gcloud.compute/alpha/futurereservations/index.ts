import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class FutureReservations
	extends GdmResource<FutureReservationsComponentInputs>
	implements FutureReservationsComponentOutputs
{
	constructor(entity: ADKEntity, options: FutureReservationsComponentInputs) {
		super(entity, options.name, "compute.alpha.FutureReservations", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly selfLinkWithId?: string | undefined;
	public readonly status?: FutureReservationStatus | undefined;
	public readonly zone?: string | undefined;
}
export interface FutureReservationsComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly status?: FutureReservationStatus | undefined;
	readonly zone?: string | undefined;
}
export interface FutureReservationsComponentInputs {
	readonly description?: string | undefined;
	readonly name: string;
	readonly namePrefix?: string | undefined;
	readonly planningStatus?: string | undefined;
	readonly requestId?: string | undefined;
	readonly shareSettings?: ShareSettings | undefined;
	readonly specificSkuProperties?: FutureReservationSpecificSKUProperties | undefined;
	readonly timeWindow?: FutureReservationTimeWindow | undefined;
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
export interface Duration {
	readonly nanos?: number | undefined;
	readonly seconds?: string | undefined;
}
export interface FutureReservation {
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly namePrefix?: string | undefined;
	readonly planningStatus?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly shareSettings?: ShareSettings | undefined;
	readonly specificSkuProperties?: FutureReservationSpecificSKUProperties | undefined;
	readonly status?: FutureReservationStatus | undefined;
	readonly timeWindow?: FutureReservationTimeWindow | undefined;
	readonly zone?: string | undefined;
}
export interface FutureReservationSpecificSKUProperties {
	readonly instanceProperties?: AllocationSpecificSKUAllocationReservedInstanceProperties | undefined;
	readonly sourceInstanceTemplate?: string | undefined;
	readonly totalCount?: string | undefined;
}
export interface FutureReservationStatus {
	readonly autoCreatedReservations?: string[] | undefined;
	readonly fulfilledCount?: string | undefined;
	readonly lockTime?: string | undefined;
	readonly procurementStatus?: string | undefined;
	readonly specificSkuProperties?: FutureReservationStatusSpecificSKUProperties | undefined;
}
export interface FutureReservationStatusSpecificSKUProperties {
	readonly sourceInstanceTemplateId?: string | undefined;
}
export interface FutureReservationTimeWindow {
	readonly duration?: Duration | undefined;
	readonly endTime?: string | undefined;
	readonly startTime?: string | undefined;
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
	FutureReservations: FutureReservations,
};
