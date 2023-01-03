import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsResourceKeys
	extends GdmResource<ProjectsResourceKeysComponentInputs>
	implements ProjectsResourceKeysComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsResourceKeysComponentInputs) {
		super(entity, options.name, "logging.v2.ProjectsResourceKeys", options);
	}
}
export interface ProjectsResourceKeysComponentOutputs {}
export interface ProjectsResourceKeysComponentInputs {
	readonly type: string;
	readonly name: string;
}
export default {
	ProjectsResourceKeys: ProjectsResourceKeys,
};
