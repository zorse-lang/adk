import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsRegionsOperations
	extends GdmResource<ProjectsRegionsOperationsComponentInputs>
	implements ProjectsRegionsOperationsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsRegionsOperationsComponentInputs) {
		super(entity, options.name, "dataproc.v1.ProjectsRegionsOperations", options);
	}
}
export interface ProjectsRegionsOperationsComponentOutputs {}
export interface ProjectsRegionsOperationsComponentInputs {
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
	ProjectsRegionsOperations: ProjectsRegionsOperations,
};
