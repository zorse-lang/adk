import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsOperations
	extends GdmResource<ProjectsLocationsOperationsComponentInputs>
	implements ProjectsLocationsOperationsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsOperationsComponentInputs) {
		super(entity, options.name, "logging.v2.ProjectsLocationsOperations", options);
	}
}
export interface ProjectsLocationsOperationsComponentOutputs {}
export interface ProjectsLocationsOperationsComponentInputs {
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
	ProjectsLocationsOperations: ProjectsLocationsOperations,
};
