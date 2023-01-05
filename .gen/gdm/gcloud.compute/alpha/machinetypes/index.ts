import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class MachineTypes extends GdmResource<MachineTypesComponentInputs> implements MachineTypesComponentOutputs {
	constructor(entity: ADKEntity, options: MachineTypesComponentInputs) {
		super(entity, options.name, "compute.alpha.MachineTypes", options);
	}
	public readonly accelerators?: Array<{ guestAcceleratorCount?: number; guestAcceleratorType?: string }>;
	public readonly architecture?: string;
	public readonly bundledLocalSsds?: BundledLocalSsds;
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
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
	public readonly zone?: string;
}
export interface MachineTypesComponentOutputs {
	readonly accelerators?: Array<{ guestAcceleratorCount?: number; guestAcceleratorType?: string }>;
	readonly architecture?: string;
	readonly bundledLocalSsds?: BundledLocalSsds;
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
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly zone?: string;
}
export interface MachineTypesComponentInputs {
	readonly name: string;
}
export interface BundledLocalSsds {
	readonly defaultInterface?: string;
	readonly partitionCount?: number;
}
export interface DeprecationStatus {
	readonly deleted?: string;
	readonly deprecated?: string;
	readonly obsolete?: string;
	readonly replacement?: string;
	readonly state?: string;
	readonly stateOverride?: RolloutPolicy;
}
export interface MachineType {
	readonly accelerators?: Array<{ guestAcceleratorCount?: number; guestAcceleratorType?: string }>;
	readonly architecture?: string;
	readonly bundledLocalSsds?: BundledLocalSsds;
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
	readonly name?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly zone?: string;
}
export interface RolloutPolicy {
	readonly defaultRolloutTime?: string;
	readonly locationRolloutPolicies?: { [P in string]: string };
}
export default {
	MachineTypes: MachineTypes,
};
