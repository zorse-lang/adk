import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Organizations extends GdmResource<OrganizationsComponentInputs> implements OrganizationsComponentOutputs {
	constructor(entity: ADKEntity, options: OrganizationsComponentInputs) {
		super(entity, options.name, "cloudresourcemanager.v1.Organizations", options);
	}
}
export interface OrganizationsComponentOutputs {}
export interface OrganizationsComponentInputs {
	readonly creationTime?: string;
	readonly displayName?: string;
	readonly lifecycleState?: string;
	readonly name: string;
	readonly owner?: OrganizationOwner;
}
export interface Organization {
	readonly creationTime?: string;
	readonly displayName?: string;
	readonly lifecycleState?: string;
	readonly name?: string;
	readonly owner?: OrganizationOwner;
}
export interface OrganizationOwner {
	readonly directoryCustomerId?: string;
}
export default {
	Organizations: Organizations,
};
