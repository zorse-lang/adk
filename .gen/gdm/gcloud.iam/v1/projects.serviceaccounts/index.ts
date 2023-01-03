import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsServiceAccounts
	extends GdmResource<ProjectsServiceAccountsComponentInputs>
	implements ProjectsServiceAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsServiceAccountsComponentInputs) {
		super(entity, options.name, "iam.v1.ProjectsServiceAccounts", options);
	}
	public readonly disabled?: boolean | undefined;
	public readonly email?: string | undefined;
	public readonly oauth2ClientId?: string | undefined;
	public readonly projectId?: string | undefined;
	public readonly uniqueId?: string | undefined;
}
export interface ProjectsServiceAccountsComponentOutputs {
	readonly disabled?: boolean | undefined;
	readonly email?: string | undefined;
	readonly oauth2ClientId?: string | undefined;
	readonly projectId?: string | undefined;
	readonly uniqueId?: string | undefined;
}
export interface ProjectsServiceAccountsComponentInputs {
	readonly accountId: string;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly etag?: string | undefined;
	readonly name: string;
	readonly serviceAccount?: ServiceAccount | undefined;
	readonly type: string;
}
export interface CreateServiceAccountRequest {
	readonly accountId: string;
	readonly serviceAccount?: ServiceAccount | undefined;
}
export interface ServiceAccount {
	readonly description?: string | undefined;
	readonly disabled?: boolean | undefined;
	readonly displayName?: string | undefined;
	readonly email?: string | undefined;
	readonly etag?: string | undefined;
	readonly name?: string | undefined;
	readonly oauth2ClientId?: string | undefined;
	readonly projectId?: string | undefined;
	readonly uniqueId?: string | undefined;
}
export default {
	ProjectsServiceAccounts: ProjectsServiceAccounts,
};
