import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class TargetPool extends GdmResource<TargetPoolComponentInputs> implements TargetPoolComponentOutputs {
	constructor(entity: ADKEntity, options: TargetPoolComponentInputs) {
		super(entity, options.name, "compute.alpha.targetPool", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly securityPolicy?: string;
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
}
export interface TargetPoolComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly securityPolicy?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
}
export interface TargetPoolComponentInputs {
	readonly backupPool?: string;
	readonly description?: string;
	readonly failoverRatio?: number;
	readonly healthChecks?: string[];
	readonly instances?: string[];
	readonly name: string;
	readonly sessionAffinity?: string;
}
export default {
	TargetPool: TargetPool,
};
