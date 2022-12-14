import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Variable extends GdmResource<VariableComponentInputs> implements VariableComponentOutputs {
	constructor(entity: ADKEntity, options: VariableComponentInputs) {
		super(entity, options.name, "runtimeconfig.v1beta1.variable", options);
	}
	public readonly state?: string;
	public readonly updateTime?: string;
}
export interface VariableComponentOutputs {
	readonly state?: string;
	readonly updateTime?: string;
}
export interface VariableComponentInputs {
	readonly name: string;
	readonly text?: string;
	readonly value?: string;
}
export default {
	Variable: Variable,
};
