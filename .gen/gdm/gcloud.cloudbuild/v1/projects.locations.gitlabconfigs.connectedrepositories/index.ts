import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsGitLabConfigsConnectedRepositories
	extends GdmResource<ProjectsLocationsGitLabConfigsConnectedRepositoriesComponentInputs>
	implements ProjectsLocationsGitLabConfigsConnectedRepositoriesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsGitLabConfigsConnectedRepositoriesComponentInputs) {
		super(entity, options.name, "cloudbuild.v1.ProjectsLocationsGitLabConfigsConnectedRepositories", options);
	}
}
export interface ProjectsLocationsGitLabConfigsConnectedRepositoriesComponentOutputs {}
export interface ProjectsLocationsGitLabConfigsConnectedRepositoriesComponentInputs {
	readonly name: string;
}
export default {
	ProjectsLocationsGitLabConfigsConnectedRepositories: ProjectsLocationsGitLabConfigsConnectedRepositories,
};
