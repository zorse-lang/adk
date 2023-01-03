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
	ProjectsConfigsOperations: ProjectsConfigsOperations,
};
