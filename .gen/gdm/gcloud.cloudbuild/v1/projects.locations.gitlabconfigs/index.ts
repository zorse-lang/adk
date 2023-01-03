import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsGitLabConfigs
	extends GdmResource<ProjectsLocationsGitLabConfigsComponentInputs>
	implements ProjectsLocationsGitLabConfigsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsGitLabConfigsComponentInputs) {
		super(entity, options.name, "cloudbuild.v1.ProjectsLocationsGitLabConfigs", options);
	}
	public readonly createTime?: string | undefined;
	public readonly webhookKey?: string | undefined;
}
export interface ProjectsLocationsGitLabConfigsComponentOutputs {
	readonly createTime?: string | undefined;
	readonly webhookKey?: string | undefined;
}
export interface ProjectsLocationsGitLabConfigsComponentInputs {
	readonly connectedRepositories?: GitLabRepositoryId[] | undefined;
	readonly enterpriseConfig?: GitLabEnterpriseConfig | undefined;
	readonly gitlabConfigId?: string | undefined;
	readonly name: string;
	readonly parent: string;
	readonly secrets: GitLabSecrets;
	readonly username?: string | undefined;
	readonly type: string;
}
export interface GitLabConfig {
	readonly connectedRepositories?: GitLabRepositoryId[] | undefined;
	readonly createTime?: string | undefined;
	readonly enterpriseConfig?: GitLabEnterpriseConfig | undefined;
	readonly name?: string | undefined;
	readonly secrets: GitLabSecrets;
	readonly username?: string | undefined;
	readonly webhookKey?: string | undefined;
}
export interface GitLabEnterpriseConfig {
	readonly hostUri?: string | undefined;
	readonly serviceDirectoryConfig?: ServiceDirectoryConfig | undefined;
	readonly sslCa?: string | undefined;
}
export interface GitLabRepositoryId {
	readonly id: string;
	readonly webhookId?: number | undefined;
}
export interface GitLabSecrets {
	readonly apiAccessTokenVersion: string;
	readonly apiKeyVersion: string;
	readonly readAccessTokenVersion: string;
	readonly webhookSecretVersion: string;
}
export interface ServiceDirectoryConfig {
	readonly service?: string | undefined;
}
export default {
	ProjectsLocationsGitLabConfigs: ProjectsLocationsGitLabConfigs,
};
