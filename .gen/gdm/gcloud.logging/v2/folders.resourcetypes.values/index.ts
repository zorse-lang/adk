import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class FoldersResourceTypesValues
	extends GdmResource<FoldersResourceTypesValuesComponentInputs>
	implements FoldersResourceTypesValuesComponentOutputs
{
	constructor(entity: ADKEntity, options: FoldersResourceTypesValuesComponentInputs) {
		super(entity, options.name, "logging.v2.FoldersResourceTypesValues", options);
	}
}
export interface FoldersResourceTypesValuesComponentOutputs {}
export interface FoldersResourceTypesValuesComponentInputs {
	readonly name: string;
}
export default {
	FoldersResourceTypesValues: FoldersResourceTypesValues,
};
