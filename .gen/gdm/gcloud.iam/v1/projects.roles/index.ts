import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsRoles extends GdmResource<ProjectsRolesComponentInputs> implements ProjectsRolesComponentOutputs {
	constructor(entity: ADKEntity, options: ProjectsRolesComponentInputs) {
		super(entity, options.name, "iam.v1.ProjectsRoles", options);
	}
}
export interface ProjectsRolesComponentOutputs {}
export interface ProjectsRolesComponentInputs {
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
	ProjectsRoles: ProjectsRoles,
};
