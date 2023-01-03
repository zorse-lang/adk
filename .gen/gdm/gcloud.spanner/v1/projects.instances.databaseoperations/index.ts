import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsInstancesDatabaseOperations
	extends GdmResource<ProjectsInstancesDatabaseOperationsComponentInputs>
	implements ProjectsInstancesDatabaseOperationsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsInstancesDatabaseOperationsComponentInputs) {
		super(entity, options.name, "spanner.v1.ProjectsInstancesDatabaseOperations", options);
	}
}
export interface ProjectsInstancesDatabaseOperationsComponentOutputs {}
export interface ProjectsInstancesDatabaseOperationsComponentInputs {
	readonly type: string;
	readonly name: string;
}
export default {
	ProjectsInstancesDatabaseOperations: ProjectsInstancesDatabaseOperations,
};
