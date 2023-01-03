import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsInstancesDatabasesDatabaseRoles
	extends GdmResource<ProjectsInstancesDatabasesDatabaseRolesComponentInputs>
	implements ProjectsInstancesDatabasesDatabaseRolesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsInstancesDatabasesDatabaseRolesComponentInputs) {
		super(entity, options.name, "spanner.v1.ProjectsInstancesDatabasesDatabaseRoles", options);
	}
}
export interface ProjectsInstancesDatabasesDatabaseRolesComponentOutputs {}
export interface ProjectsInstancesDatabasesDatabaseRolesComponentInputs {
	readonly type: string;
	readonly name: string;
}
export default {
	ProjectsInstancesDatabasesDatabaseRoles: ProjectsInstancesDatabasesDatabaseRoles,
};
