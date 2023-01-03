import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsInstancesOperations
	extends GdmResource<ProjectsInstancesOperationsComponentInputs>
	implements ProjectsInstancesOperationsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsInstancesOperationsComponentInputs) {
		super(entity, options.name, "spanner.v1.ProjectsInstancesOperations", options);
	}
}
export interface ProjectsInstancesOperationsComponentOutputs {}
export interface ProjectsInstancesOperationsComponentInputs {
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
	ProjectsInstancesOperations: ProjectsInstancesOperations,
};
