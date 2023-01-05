import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsRuntimes
	extends GdmResource<ProjectsLocationsRuntimesComponentInputs>
	implements ProjectsLocationsRuntimesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsRuntimesComponentInputs) {
		super(entity, options.name, "cloudfunctions.v2beta.ProjectsLocationsRuntimes", options);
	}
}
export interface ProjectsLocationsRuntimesComponentOutputs {}
export interface ProjectsLocationsRuntimesComponentInputs {
	readonly name: string;
}
export default {
	ProjectsLocationsRuntimes: ProjectsLocationsRuntimes,
};
