import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class RuntimeConfig extends GdmResource<RuntimeConfigComponentInputs> implements RuntimeConfigComponentOutputs {
	constructor(entity: ADKEntity, options: RuntimeConfigComponentInputs) {
		super(entity, options.name, "runtimeconfig.v1beta1.RuntimeConfig", options);
	}
}
export interface RuntimeConfigComponentOutputs {}
export interface RuntimeConfigComponentInputs {
	readonly description?: string;
	readonly name: string;
}
export default {
	RuntimeConfig: RuntimeConfig,
};
