import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsEkmConfig
	extends GdmResource<ProjectsLocationsEkmConfigComponentInputs>
	implements ProjectsLocationsEkmConfigComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsEkmConfigComponentInputs) {
		super(entity, options.name, "cloudkms.v1.ProjectsLocationsEkmConfig", options);
	}
}
export interface ProjectsLocationsEkmConfigComponentOutputs {}
export interface ProjectsLocationsEkmConfigComponentInputs {
	readonly name: string;
}
export default {
	ProjectsLocationsEkmConfig: ProjectsLocationsEkmConfig,
};
