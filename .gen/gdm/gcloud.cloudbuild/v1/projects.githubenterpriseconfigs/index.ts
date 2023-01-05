import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsGithubEnterpriseConfigs
	extends GdmResource<ProjectsGithubEnterpriseConfigsComponentInputs>
	implements ProjectsGithubEnterpriseConfigsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsGithubEnterpriseConfigsComponentInputs) {
		super(entity, options.name, "cloudbuild.v1.ProjectsGithubEnterpriseConfigs", options);
	}
	public readonly createTime?: string;
}
export interface ProjectsGithubEnterpriseConfigsComponentOutputs {
	readonly createTime?: string;
}
export interface ProjectsGithubEnterpriseConfigsComponentInputs {
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
	ProjectsGithubEnterpriseConfigs: ProjectsGithubEnterpriseConfigs,
};
