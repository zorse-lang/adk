import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class TargetInstance extends GdmResource<TargetInstanceComponentInputs> implements TargetInstanceComponentOutputs {
	constructor(entity: ADKEntity, options: TargetInstanceComponentInputs) {
		super(entity, options.name, "compute.beta.targetInstance", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly selfLink?: string;
	public readonly zone?: string;
}
export interface TargetInstanceComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly selfLink?: string;
	readonly zone?: string;
}
export interface TargetInstanceComponentInputs {
	readonly description?: string;
	readonly instance?: string;
	readonly name: string;
	readonly natPolicy?: string;
	readonly network?: string;
}
export default {
	TargetInstance: TargetInstance,
};
