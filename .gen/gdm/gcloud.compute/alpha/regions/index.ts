import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Regions extends GdmResource<RegionsComponentInputs> implements RegionsComponentOutputs {
	constructor(entity: ADKEntity, options: RegionsComponentInputs) {
		super(entity, options.name, "compute.alpha.Regions", options);
	}
	public readonly creationTimestamp?: string;
	public readonly deprecated?: DeprecationStatus;
	public readonly description?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly quotas?: Quota[];
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
	public readonly status?: string;
	public readonly supportsPzs?: boolean;
	public readonly zones?: string[];
}
export interface RegionsComponentOutputs {
	readonly creationTimestamp?: string;
	readonly deprecated?: DeprecationStatus;
	readonly description?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly quotas?: Quota[];
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly status?: string;
	readonly supportsPzs?: boolean;
	readonly zones?: string[];
}
export interface RegionsComponentInputs {
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
export interface Quota {
	readonly limit?: number;
	readonly metric?: string;
	readonly owner?: string;
	readonly usage?: number;
}
export interface Region {
	readonly creationTimestamp?: string;
	readonly deprecated?: DeprecationStatus;
	readonly description?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly quotas?: Quota[];
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly status?: string;
	readonly supportsPzs?: boolean;
	readonly zones?: string[];
}
export interface RolloutPolicy {
	readonly defaultRolloutTime?: string;
	readonly locationRolloutPolicies?: { [P in string]: string };
}
export default {
	Regions: Regions,
};
