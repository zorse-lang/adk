import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Variable extends GdmResource<VariableComponentInputs> implements VariableComponentOutputs {
	constructor(entity: ADKEntity, options: VariableComponentInputs) {
		super(entity, options.name, "runtimeconfig.v1beta1.variable", options);
	}
	public readonly state?: string | undefined;
	public readonly updateTime?: string | undefined;
}
export interface VariableComponentOutputs {
	readonly state?: string | undefined;
	readonly updateTime?: string | undefined;
}
export interface VariableComponentInputs {
	readonly name: string;
	readonly text?: string | undefined;
	readonly value?: string | undefined;
	readonly type: string;
}
export default {
	Variable: Variable,
};
