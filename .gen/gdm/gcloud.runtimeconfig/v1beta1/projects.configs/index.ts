import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsConfigs
	extends GdmResource<ProjectsConfigsComponentInputs>
	implements ProjectsConfigsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsConfigsComponentInputs) {
		super(entity, options.name, "runtimeconfig.v1beta1.ProjectsConfigs", options);
	}
}
export interface ProjectsConfigsComponentOutputs {}
export interface ProjectsConfigsComponentInputs {
	readonly description?: string;
	readonly name: string;
	readonly parent: string;
	readonly requestId?: string;
}
export interface RuntimeConfig {
	readonly description?: string;
	readonly name?: string;
}
export default {
	ProjectsConfigs: ProjectsConfigs,
};
