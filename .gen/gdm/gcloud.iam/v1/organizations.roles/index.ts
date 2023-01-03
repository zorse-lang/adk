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
	readonly deleted?: boolean | undefined;
	readonly description?: string | undefined;
	readonly etag?: string | undefined;
	readonly includedPermissions?: string[] | undefined;
	readonly name: string;
	readonly parent: string;
	readonly role?: Role | undefined;
	readonly roleId?: string | undefined;
	readonly stage?: string | undefined;
	readonly title?: string | undefined;
	readonly type: string;
}
export interface CreateRoleRequest {
	readonly role?: Role | undefined;
	readonly roleId?: string | undefined;
}
export interface Role {
	readonly deleted?: boolean | undefined;
	readonly description?: string | undefined;
	readonly etag?: string | undefined;
	readonly includedPermissions?: string[] | undefined;
	readonly name?: string | undefined;
	readonly stage?: string | undefined;
	readonly title?: string | undefined;
}
export default {
	OrganizationsRoles: OrganizationsRoles,
};
