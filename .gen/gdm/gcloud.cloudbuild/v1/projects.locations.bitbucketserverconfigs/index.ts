import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsBitbucketServerConfigs
	extends GdmResource<ProjectsLocationsBitbucketServerConfigsComponentInputs>
	implements ProjectsLocationsBitbucketServerConfigsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsBitbucketServerConfigsComponentInputs) {
		super(entity, options.name, "cloudbuild.v1.ProjectsLocationsBitbucketServerConfigs", options);
	}
	public readonly connectedRepositories?: BitbucketServerRepositoryId[] | undefined;
	public readonly webhookKey?: string | undefined;
}
export interface ProjectsLocationsBitbucketServerConfigsComponentOutputs {
	readonly connectedRepositories?: BitbucketServerRepositoryId[] | undefined;
	readonly webhookKey?: string | undefined;
}
export interface ProjectsLocationsBitbucketServerConfigsComponentInputs {
	readonly apiKey: string;
	readonly bitbucketServerConfigId?: string | undefined;
	readonly createTime?: string | undefined;
	readonly hostUri: string;
	readonly name: string;
	readonly parent: string;
	readonly peeredNetwork?: string | undefined;
	readonly secrets: BitbucketServerSecrets;
	readonly sslCa?: string | undefined;
	readonly username?: string | undefined;
	readonly type: string;
}
export interface BitbucketServerConfig {
	readonly apiKey: string;
	readonly connectedRepositories?: BitbucketServerRepositoryId[] | undefined;
	readonly createTime?: string | undefined;
	readonly hostUri: string;
	readonly name?: string | undefined;
	readonly peeredNetwork?: string | undefined;
	readonly secrets: BitbucketServerSecrets;
	readonly sslCa?: string | undefined;
	readonly username?: string | undefined;
	readonly webhookKey?: string | undefined;
}
export interface BitbucketServerRepositoryId {
	readonly projectKey: string;
	readonly repoSlug: string;
	readonly webhookId?: number | undefined;
}
export interface BitbucketServerSecrets {
	readonly adminAccessTokenVersionName: string;
	readonly readAccessTokenVersionName: string;
	readonly webhookSecretVersionName: string;
}
export default {
	ProjectsLocationsBitbucketServerConfigs: ProjectsLocationsBitbucketServerConfigs,
};
