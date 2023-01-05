import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsGitLabConfigs
	extends GdmResource<ProjectsLocationsGitLabConfigsComponentInputs>
	implements ProjectsLocationsGitLabConfigsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsGitLabConfigsComponentInputs) {
		super(entity, options.name, "cloudbuild.v1.ProjectsLocationsGitLabConfigs", options);
	}
	public readonly createTime?: string;
	public readonly webhookKey?: string;
}
export interface ProjectsLocationsGitLabConfigsComponentOutputs {
	readonly createTime?: string;
	readonly webhookKey?: string;
}
export interface ProjectsLocationsGitLabConfigsComponentInputs {
	readonly connectedRepositories?: GitLabRepositoryId[];
	readonly enterpriseConfig?: GitLabEnterpriseConfig;
	readonly gitlabConfigId?: string;
	readonly name: string;
	readonly parent: string;
	readonly secrets: GitLabSecrets;
	readonly username?: string;
}
export interface GitLabConfig {
	readonly connectedRepositories?: GitLabRepositoryId[];
	readonly createTime?: string;
	readonly enterpriseConfig?: GitLabEnterpriseConfig;
	readonly name?: string;
	readonly secrets: GitLabSecrets;
	readonly username?: string;
	readonly webhookKey?: string;
}
export interface GitLabEnterpriseConfig {
	readonly hostUri?: string;
	readonly serviceDirectoryConfig?: ServiceDirectoryConfig;
	readonly sslCa?: string;
}
export interface GitLabRepositoryId {
	readonly id: string;
	readonly webhookId?: number;
}
export interface GitLabSecrets {
	readonly apiAccessTokenVersion: string;
	readonly apiKeyVersion: string;
	readonly readAccessTokenVersion: string;
	readonly webhookSecretVersion: string;
}
export interface ServiceDirectoryConfig {
	readonly service?: string;
}
export default {
	ProjectsLocationsGitLabConfigs: ProjectsLocationsGitLabConfigs,
};
