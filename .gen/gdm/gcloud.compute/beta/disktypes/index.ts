import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class DiskTypes extends GdmResource<DiskTypesComponentInputs> implements DiskTypesComponentOutputs {
	constructor(entity: ADKEntity, options: DiskTypesComponentInputs) {
		super(entity, options.name, "compute.beta.DiskTypes", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly defaultDiskSizeGb?: string | undefined;
	public readonly deprecated?: DeprecationStatus | undefined;
	public readonly description?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly validDiskSize?: string | undefined;
	public readonly zone?: string | undefined;
}
export interface DiskTypesComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly defaultDiskSizeGb?: string | undefined;
	readonly deprecated?: DeprecationStatus | undefined;
	readonly description?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly validDiskSize?: string | undefined;
	readonly zone?: string | undefined;
}
export interface DiskTypesComponentInputs {
	readonly name: string;
	readonly type: string;
}
export interface DeprecationStatus {
	readonly deleted?: string | undefined;
	readonly deprecated?: string | undefined;
	readonly obsolete?: string | undefined;
	readonly replacement?: string | undefined;
	readonly state?: string | undefined;
	readonly stateOverride?: RolloutPolicy | undefined;
}
export interface DiskType {
	readonly creationTimestamp?: string | undefined;
	readonly defaultDiskSizeGb?: string | undefined;
	readonly deprecated?: DeprecationStatus | undefined;
	readonly description?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly validDiskSize?: string | undefined;
	readonly zone?: string | undefined;
}
export interface RolloutPolicy {
	readonly defaultRolloutTime?: string | undefined;
	readonly locationRolloutPolicies?: { [P in string]: string } | undefined;
}
export default {
	DiskTypes: DiskTypes,
};