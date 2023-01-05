import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class TargetInstances
	extends GdmResource<TargetInstancesComponentInputs>
	implements TargetInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: TargetInstancesComponentInputs) {
		super(entity, options.name, "compute.alpha.TargetInstances", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly securityPolicy?: string;
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
	public readonly zone?: string;
}
export interface TargetInstancesComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly securityPolicy?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly zone?: string;
}
export interface TargetInstancesComponentInputs {
	readonly description?: string;
	readonly instance?: string;
	readonly name: string;
	readonly natPolicy?: string;
	readonly network?: string;
	readonly requestId?: string;
}
export interface TargetInstance {
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly id?: string;
	readonly instance?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly natPolicy?: string;
	readonly network?: string;
	readonly securityPolicy?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly zone?: string;
}
export default {
	TargetInstances: TargetInstances,
};
