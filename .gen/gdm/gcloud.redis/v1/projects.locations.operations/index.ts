import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsOperations
	extends GdmResource<ProjectsLocationsOperationsComponentInputs>
	implements ProjectsLocationsOperationsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsOperationsComponentInputs) {
		super(entity, options.name, "redis.v1.ProjectsLocationsOperations", options);
	}
}
export interface ProjectsLocationsOperationsComponentOutputs {}
export interface ProjectsLocationsOperationsComponentInputs {
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
	ProjectsLocationsOperations: ProjectsLocationsOperations,
};
