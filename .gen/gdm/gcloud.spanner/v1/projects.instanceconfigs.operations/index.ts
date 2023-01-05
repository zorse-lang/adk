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
	ProjectsInstanceConfigsOperations: ProjectsInstanceConfigsOperations,
};
