import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class TargetInstance extends GdmResource<TargetInstanceComponentInputs> implements TargetInstanceComponentOutputs {
	constructor(entity: ADKEntity, options: TargetInstanceComponentInputs) {
		super(entity, options.name, "compute.v1.targetInstance", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly zone?: string | undefined;
}
export interface TargetInstanceComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly zone?: string | undefined;
}
export interface TargetInstanceComponentInputs {
	readonly description?: string | undefined;
	readonly instance?: string | undefined;
	readonly name: string;
	readonly natPolicy?: string | undefined;
	readonly network?: string | undefined;
	readonly type: string;
}
export default {
	TargetInstance: TargetInstance,
};
