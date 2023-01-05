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
	readonly done?: boolean;
	readonly error?: Status;
	readonly metadata?: { [P in string]: any };
	readonly name: string;
	readonly response?: { [P in string]: any };
}
export interface Operation {
	readonly done?: boolean;
	readonly error?: Status;
	readonly metadata?: { [P in string]: any };
	readonly name?: string;
	readonly response?: { [P in string]: any };
}
export interface Status {
	readonly code?: number;
	readonly details?: Array<{ [P in string]: any }>;
	readonly message?: string;
}
export default {
	ProjectsInstancesDatabasesOperations: ProjectsInstancesDatabasesOperations,
};
