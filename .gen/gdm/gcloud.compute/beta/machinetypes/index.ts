import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class MachineTypes extends GdmResource<MachineTypesComponentInputs> implements MachineTypesComponentOutputs {
	constructor(entity: ADKEntity, options: MachineTypesComponentInputs) {
		super(entity, options.name, "compute.beta.MachineTypes", options);
	}
	public readonly accelerators?: Array<{ guestAcceleratorCount?: number; guestAcceleratorType?: string }> | undefined;
	public readonly bundledLocalSsds?: BundledLocalSsds | undefined;
	public readonly creationTimestamp?: string | undefined;
	public readonly deprecated?: DeprecationStatus | undefined;
	public readonly description?: string | undefined;
	public readonly guestCpus?: number | undefined;
	public readonly id?: string | undefined;
	public readonly isSharedCpu?: boolean | undefined;
	public readonly kind?: string | undefined;
	public readonly maximumPersistentDisks?: number | undefined;
	public readonly maximumPersistentDisksSizeGb?: string | undefined;
	public readonly memoryMb?: number | undefined;
	public readonly selfLink?: string | undefined;
	public readonly zone?: string | undefined;
}
export interface MachineTypesComponentOutputs {
	readonly accelerators?: Array<{ guestAcceleratorCount?: number; guestAcceleratorType?: string }> | undefined;
	readonly bundledLocalSsds?: BundledLocalSsds | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly deprecated?: DeprecationStatus | undefined;
	readonly description?: string | undefined;
	readonly guestCpus?: number | undefined;
	readonly id?: string | undefined;
	readonly isSharedCpu?: boolean | undefined;
	readonly kind?: string | undefined;
	readonly maximumPersistentDisks?: number | undefined;
	readonly maximumPersistentDisksSizeGb?: string | undefined;
	readonly memoryMb?: number | undefined;
	readonly selfLink?: string | undefined;
	readonly zone?: string | undefined;
}
export interface MachineTypesComponentInputs {
	readonly name: string;
	readonly type: string;
}
export interface BundledLocalSsds {
	readonly defaultInterface?: string | undefined;
	readonly partitionCount?: number | undefined;
}
export interface DeprecationStatus {
	readonly deleted?: string | undefined;
	readonly deprecated?: string | undefined;
	readonly obsolete?: string | undefined;
	readonly replacement?: string | undefined;
	readonly state?: string | undefined;
	readonly stateOverride?: RolloutPolicy | undefined;
}
export interface MachineType {
	readonly accelerators?: Array<{ guestAcceleratorCount?: number; guestAcceleratorType?: string }> | undefined;
	readonly bundledLocalSsds?: BundledLocalSsds | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly deprecated?: DeprecationStatus | undefined;
	readonly description?: string | undefined;
	readonly guestCpus?: number | undefined;
	readonly id?: string | undefined;
	readonly isSharedCpu?: boolean | undefined;
	readonly kind?: string | undefined;
	readonly maximumPersistentDisks?: number | undefined;
	readonly maximumPersistentDisksSizeGb?: string | undefined;
	readonly memoryMb?: number | undefined;
	readonly name?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly zone?: string | undefined;
}
export interface RolloutPolicy {
	readonly defaultRolloutTime?: string | undefined;
	readonly locationRolloutPolicies?: { [P in string]: string } | undefined;
}
export default {
	MachineTypes: MachineTypes,
};
