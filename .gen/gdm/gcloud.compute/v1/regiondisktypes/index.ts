import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class RegionDiskTypes
	extends GdmResource<RegionDiskTypesComponentInputs>
	implements RegionDiskTypesComponentOutputs
{
	constructor(entity: ADKEntity, options: RegionDiskTypesComponentInputs) {
		super(entity, options.name, "compute.v1.RegionDiskTypes", options);
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
export interface RegionDiskTypesComponentOutputs {
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
export interface RegionDiskTypesComponentInputs {
	readonly name: string;
	readonly type: string;
}
export interface DeprecationStatus {
	readonly deleted?: string | undefined;
	readonly deprecated?: string | undefined;
	readonly obsolete?: string | undefined;
	readonly replacement?: string | undefined;
	readonly state?: string | undefined;
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
export default {
	RegionDiskTypes: RegionDiskTypes,
};
