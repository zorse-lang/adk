import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsGitLabConfigsRepos
	extends GdmResource<ProjectsLocationsGitLabConfigsReposComponentInputs>
	implements ProjectsLocationsGitLabConfigsReposComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsGitLabConfigsReposComponentInputs) {
		super(entity, options.name, "cloudbuild.v1.ProjectsLocationsGitLabConfigsRepos", options);
	}
}
export interface ProjectsLocationsGitLabConfigsReposComponentOutputs {}
export interface ProjectsLocationsGitLabConfigsReposComponentInputs {
	readonly name: string;
}
export default {
	ProjectsLocationsGitLabConfigsRepos: ProjectsLocationsGitLabConfigsRepos,
};
