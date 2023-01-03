import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class TargetPools extends GdmResource<TargetPoolsComponentInputs> implements TargetPoolsComponentOutputs {
	constructor(entity: ADKEntity, options: TargetPoolsComponentInputs) {
		super(entity, options.name, "compute.alpha.TargetPools", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly region?: string | undefined;
	public readonly securityPolicy?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly selfLinkWithId?: string | undefined;
}
export interface TargetPoolsComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly region?: string | undefined;
	readonly securityPolicy?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
}
export interface TargetPoolsComponentInputs {
	readonly backupPool?: string | undefined;
	readonly description?: string | undefined;
	readonly failoverRatio?: number | undefined;
	readonly healthChecks?: string[] | undefined;
	readonly instances?: string[] | undefined;
	readonly name: string;
	readonly requestId?: string | undefined;
	readonly sessionAffinity?: string | undefined;
	readonly type: string;
}
export interface TargetPool {
	readonly backupPool?: string | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly failoverRatio?: number | undefined;
	readonly healthChecks?: string[] | undefined;
	readonly id?: string | undefined;
	readonly instances?: string[] | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly region?: string | undefined;
	readonly securityPolicy?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly sessionAffinity?: string | undefined;
}
export default {
	TargetPools: TargetPools,
};
