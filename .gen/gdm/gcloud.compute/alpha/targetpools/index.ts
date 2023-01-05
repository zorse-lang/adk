import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class TargetPools extends GdmResource<TargetPoolsComponentInputs> implements TargetPoolsComponentOutputs {
	constructor(entity: ADKEntity, options: TargetPoolsComponentInputs) {
		super(entity, options.name, "compute.alpha.TargetPools", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly securityPolicy?: string;
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
}
export interface TargetPoolsComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly securityPolicy?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
}
export interface TargetPoolsComponentInputs {
	readonly backupPool?: string;
	readonly description?: string;
	readonly failoverRatio?: number;
	readonly healthChecks?: string[];
	readonly instances?: string[];
	readonly name: string;
	readonly requestId?: string;
	readonly sessionAffinity?: string;
}
export interface TargetPool {
	readonly backupPool?: string;
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly failoverRatio?: number;
	readonly healthChecks?: string[];
	readonly id?: string;
	readonly instances?: string[];
	readonly kind?: string;
	readonly name?: string;
	readonly region?: string;
	readonly securityPolicy?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly sessionAffinity?: string;
}
export default {
	TargetPools: TargetPools,
};
