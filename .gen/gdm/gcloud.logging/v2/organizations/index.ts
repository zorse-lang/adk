import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Organizations extends GdmResource<OrganizationsComponentInputs> implements OrganizationsComponentOutputs {
	constructor(entity: ADKEntity, options: OrganizationsComponentInputs) {
		super(entity, options.name, "logging.v2.Organizations", options);
	}
}
export interface OrganizationsComponentOutputs {}
export interface OrganizationsComponentInputs {
	readonly type: string;
	readonly name: string;
}
export default {
	Organizations: Organizations,
};
