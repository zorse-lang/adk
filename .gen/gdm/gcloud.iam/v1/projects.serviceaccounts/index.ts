import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsServiceAccounts
	extends GdmResource<ProjectsServiceAccountsComponentInputs>
	implements ProjectsServiceAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsServiceAccountsComponentInputs) {
		super(entity, options.name, "iam.v1.ProjectsServiceAccounts", options);
	}
	public readonly disabled?: boolean;
	public readonly email?: string;
	public readonly oauth2ClientId?: string;
	public readonly projectId?: string;
	public readonly uniqueId?: string;
}
export interface ProjectsServiceAccountsComponentOutputs {
	readonly disabled?: boolean;
	readonly email?: string;
	readonly oauth2ClientId?: string;
	readonly projectId?: string;
	readonly uniqueId?: string;
}
export interface ProjectsServiceAccountsComponentInputs {
	readonly accountId: string;
	readonly description?: string;
	readonly displayName?: string;
	readonly etag?: string;
	readonly name: string;
	readonly serviceAccount?: ServiceAccount;
}
export interface CreateServiceAccountRequest {
	readonly accountId: string;
	readonly serviceAccount?: ServiceAccount;
}
export interface ServiceAccount {
	readonly description?: string;
	readonly disabled?: boolean;
	readonly displayName?: string;
	readonly email?: string;
	readonly etag?: string;
	readonly name?: string;
	readonly oauth2ClientId?: string;
	readonly projectId?: string;
	readonly uniqueId?: string;
}
export default {
	ProjectsServiceAccounts: ProjectsServiceAccounts,
};
