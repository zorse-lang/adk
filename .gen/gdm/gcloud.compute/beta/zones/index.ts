import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Zones extends GdmResource<ZonesComponentInputs> implements ZonesComponentOutputs {
	constructor(entity: ADKEntity, options: ZonesComponentInputs) {
		super(entity, options.name, "compute.beta.Zones", options);
	}
	public readonly availableCpuPlatforms?: string[];
	public readonly creationTimestamp?: string;
	public readonly deprecated?: DeprecationStatus;
	public readonly description?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
	public readonly status?: string;
	public readonly supportsPzs?: boolean;
}
export interface ZonesComponentOutputs {
	readonly availableCpuPlatforms?: string[];
	readonly creationTimestamp?: string;
	readonly deprecated?: DeprecationStatus;
	readonly description?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly status?: string;
	readonly supportsPzs?: boolean;
}
export interface ZonesComponentInputs {
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
export interface RolloutPolicy {
	readonly defaultRolloutTime?: string;
	readonly locationRolloutPolicies?: { [P in string]: string };
}
export interface Zone {
	readonly availableCpuPlatforms?: string[];
	readonly creationTimestamp?: string;
	readonly deprecated?: DeprecationStatus;
	readonly description?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly status?: string;
	readonly supportsPzs?: boolean;
}
export default {
	Zones: Zones,
};
