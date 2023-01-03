import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsBitbucketServerConfigsRepos
	extends GdmResource<ProjectsLocationsBitbucketServerConfigsReposComponentInputs>
	implements ProjectsLocationsBitbucketServerConfigsReposComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsBitbucketServerConfigsReposComponentInputs) {
		super(entity, options.name, "cloudbuild.v1.ProjectsLocationsBitbucketServerConfigsRepos", options);
	}
}
export interface ProjectsLocationsBitbucketServerConfigsReposComponentOutputs {}
export interface ProjectsLocationsBitbucketServerConfigsReposComponentInputs {
	readonly type: string;
	readonly name: string;
}
export default {
	ProjectsLocationsBitbucketServerConfigsRepos: ProjectsLocationsBitbucketServerConfigsRepos,
};
