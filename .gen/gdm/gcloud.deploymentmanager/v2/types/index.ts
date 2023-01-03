import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Types extends GdmResource<TypesComponentInputs> implements TypesComponentOutputs {
	constructor(entity: ADKEntity, options: TypesComponentInputs) {
		super(entity, options.name, "deploymentmanager.v2.Types", options);
	}
}
export interface TypesComponentOutputs {}
export interface TypesComponentInputs {
	readonly type: string;
	readonly name: string;
}
export default {
	Types: Types,
};
