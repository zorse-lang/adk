import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsConfigsVariables
	extends GdmResource<ProjectsConfigsVariablesComponentInputs>
	implements ProjectsConfigsVariablesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsConfigsVariablesComponentInputs) {
		super(entity, options.name, "runtimeconfig.v1beta1.ProjectsConfigsVariables", options);
	}
	public readonly state?: string;
	public readonly updateTime?: string;
}
export interface ProjectsConfigsVariablesComponentOutputs {
	readonly state?: string;
	readonly updateTime?: string;
}
export interface ProjectsConfigsVariablesComponentInputs {
	readonly name: string;
	readonly parent: string;
	readonly requestId?: string;
	readonly text?: string;
	readonly value?: string;
}
export interface Variable {
	readonly name?: string;
	readonly state?: string;
	readonly text?: string;
	readonly updateTime?: string;
	readonly value?: string;
}
export default {
	ProjectsConfigsVariables: ProjectsConfigsVariables,
};
