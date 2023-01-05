import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsResourceTypesValues
	extends GdmResource<ProjectsResourceTypesValuesComponentInputs>
	implements ProjectsResourceTypesValuesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsResourceTypesValuesComponentInputs) {
		super(entity, options.name, "logging.v2.ProjectsResourceTypesValues", options);
	}
}
export interface ProjectsResourceTypesValuesComponentOutputs {}
export interface ProjectsResourceTypesValuesComponentInputs {
	readonly name: string;
}
export default {
	ProjectsResourceTypesValues: ProjectsResourceTypesValues,
};
