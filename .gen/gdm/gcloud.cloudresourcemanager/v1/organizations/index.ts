import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Organizations extends GdmResource<OrganizationsComponentInputs> implements OrganizationsComponentOutputs {
	constructor(entity: ADKEntity, options: OrganizationsComponentInputs) {
		super(entity, options.name, "cloudresourcemanager.v1.Organizations", options);
	}
}
export interface OrganizationsComponentOutputs {}
export interface OrganizationsComponentInputs {
	readonly creationTime?: string | undefined;
	readonly displayName?: string | undefined;
	readonly lifecycleState?: string | undefined;
	readonly name: string;
	readonly owner?: OrganizationOwner | undefined;
	readonly type: string;
}
export interface Organization {
	readonly creationTime?: string | undefined;
	readonly displayName?: string | undefined;
	readonly lifecycleState?: string | undefined;
	readonly name?: string | undefined;
	readonly owner?: OrganizationOwner | undefined;
}
export interface OrganizationOwner {
	readonly directoryCustomerId?: string | undefined;
}
export default {
	Organizations: Organizations,
};
