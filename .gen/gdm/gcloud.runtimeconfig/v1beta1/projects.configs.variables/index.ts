import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsConfigsVariables
	extends GdmResource<ProjectsConfigsVariablesComponentInputs>
	implements ProjectsConfigsVariablesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsConfigsVariablesComponentInputs) {
		super(entity, options.name, "runtimeconfig.v1beta1.ProjectsConfigsVariables", options);
	}
	public readonly state?: string | undefined;
	public readonly updateTime?: string | undefined;
}
export interface ProjectsConfigsVariablesComponentOutputs {
	readonly state?: string | undefined;
	readonly updateTime?: string | undefined;
}
export interface ProjectsConfigsVariablesComponentInputs {
	readonly name: string;
	readonly parent: string;
	readonly requestId?: string | undefined;
	readonly text?: string | undefined;
	readonly value?: string | undefined;
	readonly type: string;
}
export interface Variable {
	readonly name?: string | undefined;
	readonly state?: string | undefined;
	readonly text?: string | undefined;
	readonly updateTime?: string | undefined;
	readonly value?: string | undefined;
}
export default {
	ProjectsConfigsVariables: ProjectsConfigsVariables,
};
