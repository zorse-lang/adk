import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Regions extends GdmResource<RegionsComponentInputs> implements RegionsComponentOutputs {
	constructor(entity: ADKEntity, options: RegionsComponentInputs) {
		super(entity, options.name, "compute.beta.Regions", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly deprecated?: DeprecationStatus | undefined;
	public readonly description?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly quotas?: Quota[] | undefined;
	public readonly selfLink?: string | undefined;
	public readonly status?: string | undefined;
	public readonly supportsPzs?: boolean | undefined;
	public readonly zones?: string[] | undefined;
}
export interface RegionsComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly deprecated?: DeprecationStatus | undefined;
	readonly description?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly quotas?: Quota[] | undefined;
	readonly selfLink?: string | undefined;
	readonly status?: string | undefined;
	readonly supportsPzs?: boolean | undefined;
	readonly zones?: string[] | undefined;
}
export interface RegionsComponentInputs {
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
export interface Quota {
	readonly limit?: number | undefined;
	readonly metric?: string | undefined;
	readonly owner?: string | undefined;
	readonly usage?: number | undefined;
}
export interface Region {
	readonly creationTimestamp?: string | undefined;
	readonly deprecated?: DeprecationStatus | undefined;
	readonly description?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly quotas?: Quota[] | undefined;
	readonly selfLink?: string | undefined;
	readonly status?: string | undefined;
	readonly supportsPzs?: boolean | undefined;
	readonly zones?: string[] | undefined;
}
export interface RolloutPolicy {
	readonly defaultRolloutTime?: string | undefined;
	readonly locationRolloutPolicies?: { [P in string]: string } | undefined;
}
export default {
	Regions: Regions,
};
