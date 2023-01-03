import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class OrganizationsResourceKeys
	extends GdmResource<OrganizationsResourceKeysComponentInputs>
	implements OrganizationsResourceKeysComponentOutputs
{
	constructor(entity: ADKEntity, options: OrganizationsResourceKeysComponentInputs) {
		super(entity, options.name, "logging.v2.OrganizationsResourceKeys", options);
	}
}
export interface OrganizationsResourceKeysComponentOutputs {}
export interface OrganizationsResourceKeysComponentInputs {
	readonly type: string;
	readonly name: string;
}
export default {
	OrganizationsResourceKeys: OrganizationsResourceKeys,
};
