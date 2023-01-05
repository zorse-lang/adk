import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsConfigsOperations
	extends GdmResource<ProjectsConfigsOperationsComponentInputs>
	implements ProjectsConfigsOperationsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsConfigsOperationsComponentInputs) {
		super(entity, options.name, "runtimeconfig.v1beta1.ProjectsConfigsOperations", options);
	}
}
export interface ProjectsConfigsOperationsComponentOutputs {}
export interface ProjectsConfigsOperationsComponentInputs {
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
	ProjectsConfigsOperations: ProjectsConfigsOperations,
};
