import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class accounts extends ArmResource<accountsComponentInputs> implements accountsComponentOutputs {
	constructor(entity: ADKEntity, options: accountsComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningExperimentation/accounts", "2017-05-01-preview", options);
	}
	public readonly apiVersion: "2017-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningExperimentation/accounts";
}
export interface accountsComponentOutputs {
	readonly apiVersion: "2017-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningExperimentation/accounts";
}
export interface accountsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: AccountProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class accounts_workspaces
	extends ArmResource<accounts_workspacesComponentInputs>
	implements accounts_workspacesComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_workspacesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.MachineLearningExperimentation/accounts/workspaces",
			"2017-05-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2017-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningExperimentation/accounts/workspaces";
}
export interface accounts_workspacesComponentOutputs {
	readonly apiVersion: "2017-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningExperimentation/accounts/workspaces";
}
export interface accounts_workspacesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: WorkspaceProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class accounts_workspaces_projects
	extends ArmResource<accounts_workspaces_projectsComponentInputs>
	implements accounts_workspaces_projectsComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_workspaces_projectsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.MachineLearningExperimentation/accounts/workspaces/projects",
			"2017-05-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2017-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningExperimentation/accounts/workspaces/projects";
}
export interface accounts_workspaces_projectsComponentOutputs {
	readonly apiVersion: "2017-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningExperimentation/accounts/workspaces/projects";
}
export interface accounts_workspaces_projectsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ProjectProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface AccountProperties {
	readonly accountId?: string | undefined;
	readonly creationDate?: string | undefined;
	readonly description?: string | undefined;
	readonly discoveryUri?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly keyVaultId: string;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded") | undefined;
	readonly seats?: string | undefined;
	readonly storageAccount: StorageAccountProperties;
	readonly vsoAccountId: string;
}
export interface ProjectProperties {
	readonly accountId?: string | undefined;
	readonly creationDate?: string | undefined;
	readonly description?: string | undefined;
	readonly friendlyName: string;
	readonly gitrepo?: string | undefined;
	readonly projectId?: string | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded") | undefined;
	readonly workspaceId?: string | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface StorageAccountProperties {
	readonly accessKey: string;
	readonly storageAccountId: string;
}
export interface WorkspaceProperties {
	readonly accountId?: string | undefined;
	readonly creationDate?: string | undefined;
	readonly description?: string | undefined;
	readonly friendlyName: string;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded") | undefined;
	readonly workspaceId?: string | undefined;
}
export default {
	accounts: accounts,
	"accounts/workspaces": accounts_workspaces,
	"accounts/workspaces/projects": accounts_workspaces_projects,
};
