import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsBitbucketServerConfigsConnectedRepositories
	extends GdmResource<ProjectsLocationsBitbucketServerConfigsConnectedRepositoriesComponentInputs>
	implements ProjectsLocationsBitbucketServerConfigsConnectedRepositoriesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsBitbucketServerConfigsConnectedRepositoriesComponentInputs) {
		super(entity, options.name, "cloudbuild.v1.ProjectsLocationsBitbucketServerConfigsConnectedRepositories", options);
	}
}
export interface ProjectsLocationsBitbucketServerConfigsConnectedRepositoriesComponentOutputs {}
export interface ProjectsLocationsBitbucketServerConfigsConnectedRepositoriesComponentInputs {
	readonly name: string;
}
export default {
	ProjectsLocationsBitbucketServerConfigsConnectedRepositories:
		ProjectsLocationsBitbucketServerConfigsConnectedRepositories,
};
