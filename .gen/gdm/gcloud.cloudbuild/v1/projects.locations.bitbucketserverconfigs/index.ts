import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsBitbucketServerConfigs
	extends GdmResource<ProjectsLocationsBitbucketServerConfigsComponentInputs>
	implements ProjectsLocationsBitbucketServerConfigsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsBitbucketServerConfigsComponentInputs) {
		super(entity, options.name, "cloudbuild.v1.ProjectsLocationsBitbucketServerConfigs", options);
	}
	public readonly connectedRepositories?: BitbucketServerRepositoryId[];
	public readonly webhookKey?: string;
}
export interface ProjectsLocationsBitbucketServerConfigsComponentOutputs {
	readonly connectedRepositories?: BitbucketServerRepositoryId[];
	readonly webhookKey?: string;
}
export interface ProjectsLocationsBitbucketServerConfigsComponentInputs {
	readonly apiKey: string;
	readonly bitbucketServerConfigId?: string;
	readonly createTime?: string;
	readonly hostUri: string;
	readonly name: string;
	readonly parent: string;
	readonly peeredNetwork?: string;
	readonly secrets: BitbucketServerSecrets;
	readonly sslCa?: string;
	readonly username?: string;
}
export interface BitbucketServerConfig {
	readonly apiKey: string;
	readonly connectedRepositories?: BitbucketServerRepositoryId[];
	readonly createTime?: string;
	readonly hostUri: string;
	readonly name?: string;
	readonly peeredNetwork?: string;
	readonly secrets: BitbucketServerSecrets;
	readonly sslCa?: string;
	readonly username?: string;
	readonly webhookKey?: string;
}
export interface BitbucketServerRepositoryId {
	readonly projectKey: string;
	readonly repoSlug: string;
	readonly webhookId?: number;
}
export interface BitbucketServerSecrets {
	readonly adminAccessTokenVersionName: string;
	readonly readAccessTokenVersionName: string;
	readonly webhookSecretVersionName: string;
}
export default {
	ProjectsLocationsBitbucketServerConfigs: ProjectsLocationsBitbucketServerConfigs,
};
