import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocations
	extends GdmResource<ProjectsLocationsComponentInputs>
	implements ProjectsLocationsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsComponentInputs) {
		super(entity, options.name, "cloudfunctions.v2beta.ProjectsLocations", options);
	}
}
export interface ProjectsLocationsComponentOutputs {}
export interface ProjectsLocationsComponentInputs {
	readonly name: string;
}
export default {
	ProjectsLocations: ProjectsLocations,
};
