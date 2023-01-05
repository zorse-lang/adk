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
	readonly properties?: AccountProperties;
	readonly tags?: ResourceTags;
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
	readonly properties?: WorkspaceProperties;
	readonly tags?: ResourceTags;
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
	readonly properties?: ProjectProperties;
	readonly tags?: ResourceTags;
}
export interface AccountProperties {
	readonly accountId?: string;
	readonly creationDate?: string;
	readonly description?: string;
	readonly discoveryUri?: string;
	readonly friendlyName?: string;
	readonly keyVaultId: string;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded";
	readonly seats?: string;
	readonly storageAccount: StorageAccountProperties;
	readonly vsoAccountId: string;
}
export interface ProjectProperties {
	readonly accountId?: string;
	readonly creationDate?: string;
	readonly description?: string;
	readonly friendlyName: string;
	readonly gitrepo?: string;
	readonly projectId?: string;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded";
	readonly workspaceId?: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface StorageAccountProperties {
	readonly accessKey: string;
	readonly storageAccountId: string;
}
export interface WorkspaceProperties {
	readonly accountId?: string;
	readonly creationDate?: string;
	readonly description?: string;
	readonly friendlyName: string;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded";
	readonly workspaceId?: string;
}
export default {
	accounts: accounts,
	"accounts/workspaces": accounts_workspaces,
	"accounts/workspaces/projects": accounts_workspaces_projects,
};
