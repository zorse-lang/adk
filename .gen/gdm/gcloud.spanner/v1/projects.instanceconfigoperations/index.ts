import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsInstanceConfigOperations
	extends GdmResource<ProjectsInstanceConfigOperationsComponentInputs>
	implements ProjectsInstanceConfigOperationsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsInstanceConfigOperationsComponentInputs) {
		super(entity, options.name, "spanner.v1.ProjectsInstanceConfigOperations", options);
	}
}
export interface ProjectsInstanceConfigOperationsComponentOutputs {}
export interface ProjectsInstanceConfigOperationsComponentInputs {
	readonly type: string;
	readonly name: string;
}
export default {
	ProjectsInstanceConfigOperations: ProjectsInstanceConfigOperations,
};
