import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class OrganizationsRoles
	extends GdmResource<OrganizationsRolesComponentInputs>
	implements OrganizationsRolesComponentOutputs
{
	constructor(entity: ADKEntity, options: OrganizationsRolesComponentInputs) {
		super(entity, options.name, "iam.v1.OrganizationsRoles", options);
	}
}
export interface OrganizationsRolesComponentOutputs {}
export interface OrganizationsRolesComponentInputs {
	readonly deleted?: boolean;
	readonly description?: string;
	readonly etag?: string;
	readonly includedPermissions?: string[];
	readonly name: string;
	readonly parent: string;
	readonly role?: Role;
	readonly roleId?: string;
	readonly stage?: string;
	readonly title?: string;
}
export interface CreateRoleRequest {
	readonly role?: Role;
	readonly roleId?: string;
}
export interface Role {
	readonly deleted?: boolean;
	readonly description?: string;
	readonly etag?: string;
	readonly includedPermissions?: string[];
	readonly name?: string;
	readonly stage?: string;
	readonly title?: string;
}
export default {
	OrganizationsRoles: OrganizationsRoles,
};
