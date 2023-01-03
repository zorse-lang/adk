import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Zones extends GdmResource<ZonesComponentInputs> implements ZonesComponentOutputs {
	constructor(entity: ADKEntity, options: ZonesComponentInputs) {
		super(entity, options.name, "compute.v1.Zones", options);
	}
	public readonly availableCpuPlatforms?: string[] | undefined;
	public readonly creationTimestamp?: string | undefined;
	public readonly deprecated?: DeprecationStatus | undefined;
	public readonly description?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly status?: string | undefined;
	public readonly supportsPzs?: boolean | undefined;
}
export interface ZonesComponentOutputs {
	readonly availableCpuPlatforms?: string[] | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly deprecated?: DeprecationStatus | undefined;
	readonly description?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly status?: string | undefined;
	readonly supportsPzs?: boolean | undefined;
}
export interface ZonesComponentInputs {
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
export interface Zone {
	readonly availableCpuPlatforms?: string[] | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly deprecated?: DeprecationStatus | undefined;
	readonly description?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly status?: string | undefined;
	readonly supportsPzs?: boolean | undefined;
}
export default {
	Zones: Zones,
};
