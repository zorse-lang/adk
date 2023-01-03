import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class TargetPool extends GdmResource<TargetPoolComponentInputs> implements TargetPoolComponentOutputs {
	constructor(entity: ADKEntity, options: TargetPoolComponentInputs) {
		super(entity, options.name, "compute.v1.targetPool", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
}
export interface TargetPoolComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
}
export interface TargetPoolComponentInputs {
	readonly backupPool?: string | undefined;
	readonly description?: string | undefined;
	readonly failoverRatio?: number | undefined;
	readonly healthChecks?: string[] | undefined;
	readonly instances?: string[] | undefined;
	readonly name: string;
	readonly sessionAffinity?: string | undefined;
	readonly type: string;
}
export default {
	TargetPool: TargetPool,
};
