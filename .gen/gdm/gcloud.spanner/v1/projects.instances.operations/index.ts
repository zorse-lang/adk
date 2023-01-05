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
	ProjectsInstancesOperations: ProjectsInstancesOperations,
};
