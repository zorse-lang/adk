import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ResourceTypesValues
	extends GdmResource<ResourceTypesValuesComponentInputs>
	implements ResourceTypesValuesComponentOutputs
{
	constructor(entity: ADKEntity, options: ResourceTypesValuesComponentInputs) {
		super(entity, options.name, "logging.v2.ResourceTypesValues", options);
	}
}
export interface ResourceTypesValuesComponentOutputs {}
export interface ResourceTypesValuesComponentInputs {
	readonly name: string;
}
export default {
	ResourceTypesValues: ResourceTypesValues,
};
