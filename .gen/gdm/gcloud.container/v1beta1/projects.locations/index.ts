import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocations
	extends GdmResource<ProjectsLocationsComponentInputs>
	implements ProjectsLocationsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsComponentInputs) {
		super(entity, options.name, "container.v1beta1.ProjectsLocations", options);
	}
}
export interface ProjectsLocationsComponentOutputs {}
export interface ProjectsLocationsComponentInputs {
	readonly type: string;
	readonly name: string;
}
export default {
	ProjectsLocations: ProjectsLocations,
};
