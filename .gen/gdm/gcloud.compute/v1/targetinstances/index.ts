import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class TargetInstances
	extends GdmResource<TargetInstancesComponentInputs>
	implements TargetInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: TargetInstancesComponentInputs) {
		super(entity, options.name, "compute.v1.TargetInstances", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly zone?: string | undefined;
}
export interface TargetInstancesComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly zone?: string | undefined;
}
export interface TargetInstancesComponentInputs {
	readonly description?: string | undefined;
	readonly instance?: string | undefined;
	readonly name: string;
	readonly natPolicy?: string | undefined;
	readonly network?: string | undefined;
	readonly requestId?: string | undefined;
	readonly type: string;
}
export interface TargetInstance {
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly id?: string | undefined;
	readonly instance?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly natPolicy?: string | undefined;
	readonly network?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly zone?: string | undefined;
}
export default {
	TargetInstances: TargetInstances,
};
