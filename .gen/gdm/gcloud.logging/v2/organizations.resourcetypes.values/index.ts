import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class OrganizationsResourceTypesValues
	extends GdmResource<OrganizationsResourceTypesValuesComponentInputs>
	implements OrganizationsResourceTypesValuesComponentOutputs
{
	constructor(entity: ADKEntity, options: OrganizationsResourceTypesValuesComponentInputs) {
		super(entity, options.name, "logging.v2.OrganizationsResourceTypesValues", options);
	}
}
export interface OrganizationsResourceTypesValuesComponentOutputs {}
export interface OrganizationsResourceTypesValuesComponentInputs {
	readonly name: string;
}
export default {
	OrganizationsResourceTypesValues: OrganizationsResourceTypesValues,
};
