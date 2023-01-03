import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class OrganizationsGcpUserAccessBindings
	extends GdmResource<OrganizationsGcpUserAccessBindingsComponentInputs>
	implements OrganizationsGcpUserAccessBindingsComponentOutputs
{
	constructor(entity: ADKEntity, options: OrganizationsGcpUserAccessBindingsComponentInputs) {
		super(entity, options.name, "accesscontextmanager.v1.OrganizationsGcpUserAccessBindings", options);
	}
}
export interface OrganizationsGcpUserAccessBindingsComponentOutputs {}
export interface OrganizationsGcpUserAccessBindingsComponentInputs {
	readonly accessLevels: string[];
	readonly groupKey: string;
	readonly name: string;
	readonly parent: string;
	readonly type: string;
}
export interface GcpUserAccessBinding {
	readonly accessLevels: string[];
	readonly groupKey: string;
	readonly name?: string | undefined;
}
export default {
	OrganizationsGcpUserAccessBindings: OrganizationsGcpUserAccessBindings,
};
