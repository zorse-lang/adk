import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsGithubEnterpriseConfigs
	extends GdmResource<ProjectsLocationsGithubEnterpriseConfigsComponentInputs>
	implements ProjectsLocationsGithubEnterpriseConfigsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsGithubEnterpriseConfigsComponentInputs) {
		super(entity, options.name, "cloudbuild.v1.ProjectsLocationsGithubEnterpriseConfigs", options);
	}
	public readonly createTime?: string | undefined;
}
export interface ProjectsLocationsGithubEnterpriseConfigsComponentOutputs {
	readonly createTime?: string | undefined;
}
export interface ProjectsLocationsGithubEnterpriseConfigsComponentInputs {
	readonly appId: string;
	readonly displayName?: string | undefined;
	readonly gheConfigId?: string | undefined;
	readonly hostUrl?: string | undefined;
	readonly name: string;
	readonly parent: string;
	readonly peeredNetwork?: string | undefined;
	readonly secrets?: GitHubEnterpriseSecrets | undefined;
	readonly sslCa?: string | undefined;
	readonly webhookKey?: string | undefined;
	readonly type: string;
}
export interface GitHubEnterpriseConfig {
	readonly appId: string;
	readonly createTime?: string | undefined;
	readonly displayName?: string | undefined;
	readonly hostUrl?: string | undefined;
	readonly name?: string | undefined;
	readonly peeredNetwork?: string | undefined;
	readonly secrets?: GitHubEnterpriseSecrets | undefined;
	readonly sslCa?: string | undefined;
	readonly webhookKey?: string | undefined;
}
export interface GitHubEnterpriseSecrets {
	readonly oauthClientIdName?: string | undefined;
	readonly oauthClientIdVersionName?: string | undefined;
	readonly oauthSecretName?: string | undefined;
	readonly oauthSecretVersionName?: string | undefined;
	readonly privateKeyName?: string | undefined;
	readonly privateKeyVersionName?: string | undefined;
	readonly webhookSecretName?: string | undefined;
	readonly webhookSecretVersionName?: string | undefined;
}
export default {
	ProjectsLocationsGithubEnterpriseConfigs: ProjectsLocationsGithubEnterpriseConfigs,
};
