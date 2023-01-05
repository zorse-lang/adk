import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class MachineTypes extends GdmResource<MachineTypesComponentInputs> implements MachineTypesComponentOutputs {
	constructor(entity: ADKEntity, options: MachineTypesComponentInputs) {
		super(entity, options.name, "compute.v1.MachineTypes", options);
	}
	public readonly accelerators?: Array<{ guestAcceleratorCount?: number; guestAcceleratorType?: string }>;
	public readonly creationTimestamp?: string;
	public readonly deprecated?: DeprecationStatus;
	public readonly description?: string;
	public readonly guestCpus?: number;
	public readonly id?: string;
	public readonly isSharedCpu?: boolean;
	public readonly kind?: string;
	public readonly maximumPersistentDisks?: number;
	public readonly maximumPersistentDisksSizeGb?: string;
	public readonly memoryMb?: number;
	public readonly scratchDisks?: Array<{ diskGb?: number }>;
	public readonly selfLink?: string;
	public readonly zone?: string;
}
export interface MachineTypesComponentOutputs {
	readonly accelerators?: Array<{ guestAcceleratorCount?: number; guestAcceleratorType?: string }>;
	readonly creationTimestamp?: string;
	readonly deprecated?: DeprecationStatus;
	readonly description?: string;
	readonly guestCpus?: number;
	readonly id?: string;
	readonly isSharedCpu?: boolean;
	readonly kind?: string;
	readonly maximumPersistentDisks?: number;
	readonly maximumPersistentDisksSizeGb?: string;
	readonly memoryMb?: number;
	readonly scratchDisks?: Array<{ diskGb?: number }>;
	readonly selfLink?: string;
	readonly zone?: string;
}
export interface MachineTypesComponentInputs {
	readonly imageSpaceGb?: number;
	readonly name: string;
}
export interface DeprecationStatus {
	readonly deleted?: string;
	readonly deprecated?: string;
	readonly obsolete?: string;
	readonly replacement?: string;
	readonly state?: string;
}
export interface MachineType {
	readonly accelerators?: Array<{ guestAcceleratorCount?: number; guestAcceleratorType?: string }>;
	readonly creationTimestamp?: string;
	readonly deprecated?: DeprecationStatus;
	readonly description?: string;
	readonly guestCpus?: number;
	readonly id?: string;
	readonly imageSpaceGb?: number;
	readonly isSharedCpu?: boolean;
	readonly kind?: string;
	readonly maximumPersistentDisks?: number;
	readonly maximumPersistentDisksSizeGb?: string;
	readonly memoryMb?: number;
	readonly name?: string;
	readonly scratchDisks?: Array<{ diskGb?: number }>;
	readonly selfLink?: string;
	readonly zone?: string;
}
export default {
	MachineTypes: MachineTypes,
};
