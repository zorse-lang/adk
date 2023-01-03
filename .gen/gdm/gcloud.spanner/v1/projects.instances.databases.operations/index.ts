import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsInstancesDatabasesOperations
	extends GdmResource<ProjectsInstancesDatabasesOperationsComponentInputs>
	implements ProjectsInstancesDatabasesOperationsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsInstancesDatabasesOperationsComponentInputs) {
		super(entity, options.name, "spanner.v1.ProjectsInstancesDatabasesOperations", options);
	}
}
export interface ProjectsInstancesDatabasesOperationsComponentOutputs {}
export interface ProjectsInstancesDatabasesOperationsComponentInputs {
	readonly done?: boolean | undefined;
	readonly error?: Status | undefined;
	readonly metadata?: { [P in string]: any } | undefined;
	readonly name: string;
	readonly response?: { [P in string]: any } | undefined;
	readonly type: string;
}
export interface Operation {
	readonly done?: boolean | undefined;
	readonly error?: Status | undefined;
	readonly metadata?: { [P in string]: any } | undefined;
	readonly name?: string | undefined;
	readonly response?: { [P in string]: any } | undefined;
}
export interface Status {
	readonly code?: number | undefined;
	readonly details?: Array<{ [P in string]: any }> | undefined;
	readonly message?: string | undefined;
}
export default {
	ProjectsInstancesDatabasesOperations: ProjectsInstancesDatabasesOperations,
};
