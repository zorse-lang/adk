import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsInstanceConfigsOperations
	extends GdmResource<ProjectsInstanceConfigsOperationsComponentInputs>
	implements ProjectsInstanceConfigsOperationsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsInstanceConfigsOperationsComponentInputs) {
		super(entity, options.name, "spanner.v1.ProjectsInstanceConfigsOperations", options);
	}
}
export interface ProjectsInstanceConfigsOperationsComponentOutputs {}
export interface ProjectsInstanceConfigsOperationsComponentInputs {
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
	ProjectsInstanceConfigsOperations: ProjectsInstanceConfigsOperations,
};
