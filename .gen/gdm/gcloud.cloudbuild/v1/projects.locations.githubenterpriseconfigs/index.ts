import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsGithubEnterpriseConfigs
	extends GdmResource<ProjectsLocationsGithubEnterpriseConfigsComponentInputs>
	implements ProjectsLocationsGithubEnterpriseConfigsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsGithubEnterpriseConfigsComponentInputs) {
		super(entity, options.name, "cloudbuild.v1.ProjectsLocationsGithubEnterpriseConfigs", options);
	}
	public readonly createTime?: string;
}
export interface ProjectsLocationsGithubEnterpriseConfigsComponentOutputs {
	readonly createTime?: string;
}
export interface ProjectsLocationsGithubEnterpriseConfigsComponentInputs {
	readonly appId: string;
	readonly displayName?: string;
	readonly gheConfigId?: string;
	readonly hostUrl?: string;
	readonly name: string;
	readonly parent: string;
	readonly peeredNetwork?: string;
	readonly secrets?: GitHubEnterpriseSecrets;
	readonly sslCa?: string;
	readonly webhookKey?: string;
}
export interface GitHubEnterpriseConfig {
	readonly appId: string;
	readonly createTime?: string;
	readonly displayName?: string;
	readonly hostUrl?: string;
	readonly name?: string;
	readonly peeredNetwork?: string;
	readonly secrets?: GitHubEnterpriseSecrets;
	readonly sslCa?: string;
	readonly webhookKey?: string;
}
export interface GitHubEnterpriseSecrets {
	readonly oauthClientIdName?: string;
	readonly oauthClientIdVersionName?: string;
	readonly oauthSecretName?: string;
	readonly oauthSecretVersionName?: string;
	readonly privateKeyName?: string;
	readonly privateKeyVersionName?: string;
	readonly webhookSecretName?: string;
	readonly webhookSecretVersionName?: string;
}
export default {
	ProjectsLocationsGithubEnterpriseConfigs: ProjectsLocationsGithubEnterpriseConfigs,
};
