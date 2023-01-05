import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class DiskTypes extends GdmResource<DiskTypesComponentInputs> implements DiskTypesComponentOutputs {
	constructor(entity: ADKEntity, options: DiskTypesComponentInputs) {
		super(entity, options.name, "compute.alpha.DiskTypes", options);
	}
	public readonly creationTimestamp?: string;
	public readonly defaultDiskSizeGb?: string;
	public readonly deprecated?: DeprecationStatus;
	public readonly description?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
	public readonly validDiskSize?: string;
	public readonly zone?: string;
}
export interface DiskTypesComponentOutputs {
	readonly creationTimestamp?: string;
	readonly defaultDiskSizeGb?: string;
	readonly deprecated?: DeprecationStatus;
	readonly description?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly validDiskSize?: string;
	readonly zone?: string;
}
export interface DiskTypesComponentInputs {
	readonly name: string;
}
export interface DeprecationStatus {
	readonly deleted?: string;
	readonly deprecated?: string;
	readonly obsolete?: string;
	readonly replacement?: string;
	readonly state?: string;
	readonly stateOverride?: RolloutPolicy;
}
export interface DiskType {
	readonly creationTimestamp?: string;
	readonly defaultDiskSizeGb?: string;
	readonly deprecated?: DeprecationStatus;
	readonly description?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly validDiskSize?: string;
	readonly zone?: string;
}
export interface RolloutPolicy {
	readonly defaultRolloutTime?: string;
	readonly locationRolloutPolicies?: { [P in string]: string };
}
export default {
	DiskTypes: DiskTypes,
};
