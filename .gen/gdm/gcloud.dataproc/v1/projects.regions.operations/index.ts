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
	ProjectsRegionsOperations: ProjectsRegionsOperations,
};
