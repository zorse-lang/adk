import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class azureDevOpsConnectors
	extends ArmResource<azureDevOpsConnectorsComponentInputs>
	implements azureDevOpsConnectorsComponentOutputs
{
	constructor(entity: ADKEntity, options: azureDevOpsConnectorsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityDevOps/azureDevOpsConnectors", "2022-09-01-preview", options);
	}
	public readonly apiVersion: "2022-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityDevOps/azureDevOpsConnectors";
}
export interface azureDevOpsConnectorsComponentOutputs {
	readonly apiVersion: "2022-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityDevOps/azureDevOpsConnectors";
}
export interface azureDevOpsConnectorsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: AzureDevOpsConnectorProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class azureDevOpsConnectors_orgs
	extends ArmResource<azureDevOpsConnectors_orgsComponentInputs>
	implements azureDevOpsConnectors_orgsComponentOutputs
{
	constructor(entity: ADKEntity, options: azureDevOpsConnectors_orgsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityDevOps/azureDevOpsConnectors/orgs", "2022-09-01-preview", options);
	}
	public readonly apiVersion: "2022-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityDevOps/azureDevOpsConnectors/orgs";
}
export interface azureDevOpsConnectors_orgsComponentOutputs {
	readonly apiVersion: "2022-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityDevOps/azureDevOpsConnectors/orgs";
}
export interface azureDevOpsConnectors_orgsComponentInputs {
	readonly name: string;
	readonly properties?: AzureDevOpsOrgProperties;
	readonly systemData?: SystemData;
}
export class azureDevOpsConnectors_orgs_projects
	extends ArmResource<azureDevOpsConnectors_orgs_projectsComponentInputs>
	implements azureDevOpsConnectors_orgs_projectsComponentOutputs
{
	constructor(entity: ADKEntity, options: azureDevOpsConnectors_orgs_projectsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.SecurityDevOps/azureDevOpsConnectors/orgs/projects",
			"2022-09-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityDevOps/azureDevOpsConnectors/orgs/projects";
}
export interface azureDevOpsConnectors_orgs_projectsComponentOutputs {
	readonly apiVersion: "2022-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityDevOps/azureDevOpsConnectors/orgs/projects";
}
export interface azureDevOpsConnectors_orgs_projectsComponentInputs {
	readonly name: string;
	readonly properties?: AzureDevOpsProjectProperties;
	readonly systemData?: SystemData;
}
export class azureDevOpsConnectors_orgs_projects_repos
	extends ArmResource<azureDevOpsConnectors_orgs_projects_reposComponentInputs>
	implements azureDevOpsConnectors_orgs_projects_reposComponentOutputs
{
	constructor(entity: ADKEntity, options: azureDevOpsConnectors_orgs_projects_reposComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.SecurityDevOps/azureDevOpsConnectors/orgs/projects/repos",
			"2022-09-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityDevOps/azureDevOpsConnectors/orgs/projects/repos";
}
export interface azureDevOpsConnectors_orgs_projects_reposComponentOutputs {
	readonly apiVersion: "2022-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityDevOps/azureDevOpsConnectors/orgs/projects/repos";
}
export interface azureDevOpsConnectors_orgs_projects_reposComponentInputs {
	readonly name: string;
	readonly properties?: AzureDevOpsRepoProperties;
	readonly systemData?: SystemData;
}
export class gitHubConnectors
	extends ArmResource<gitHubConnectorsComponentInputs>
	implements gitHubConnectorsComponentOutputs
{
	constructor(entity: ADKEntity, options: gitHubConnectorsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityDevOps/gitHubConnectors", "2022-09-01-preview", options);
	}
	public readonly apiVersion: "2022-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityDevOps/gitHubConnectors";
}
export interface gitHubConnectorsComponentOutputs {
	readonly apiVersion: "2022-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityDevOps/gitHubConnectors";
}
export interface gitHubConnectorsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: GitHubConnectorProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class gitHubConnectors_owners
	extends ArmResource<gitHubConnectors_ownersComponentInputs>
	implements gitHubConnectors_ownersComponentOutputs
{
	constructor(entity: ADKEntity, options: gitHubConnectors_ownersComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityDevOps/gitHubConnectors/owners", "2022-09-01-preview", options);
	}
	public readonly apiVersion: "2022-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityDevOps/gitHubConnectors/owners";
}
export interface gitHubConnectors_ownersComponentOutputs {
	readonly apiVersion: "2022-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityDevOps/gitHubConnectors/owners";
}
export interface gitHubConnectors_ownersComponentInputs {
	readonly name: string;
	readonly properties?: GitHubOwnerProperties;
	readonly systemData?: SystemData;
}
export class gitHubConnectors_owners_repos
	extends ArmResource<gitHubConnectors_owners_reposComponentInputs>
	implements gitHubConnectors_owners_reposComponentOutputs
{
	constructor(entity: ADKEntity, options: gitHubConnectors_owners_reposComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.SecurityDevOps/gitHubConnectors/owners/repos",
			"2022-09-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityDevOps/gitHubConnectors/owners/repos";
}
export interface gitHubConnectors_owners_reposComponentOutputs {
	readonly apiVersion: "2022-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityDevOps/gitHubConnectors/owners/repos";
}
export interface gitHubConnectors_owners_reposComponentInputs {
	readonly name: string;
	readonly properties?: GitHubRepoProperties;
	readonly systemData?: SystemData;
}
export interface ActionableRemediation {
	readonly branchConfiguration?: TargetBranchConfiguration;
	readonly categories?: "Artifacts" | "Code" | "Containers" | "Dependencies" | "IaC" | "Secrets"[];
	readonly severityLevels?: string[];
	readonly state?: "Disabled" | "Enabled" | "None";
}
export interface AuthorizationInfo {
	readonly code?: string;
}
export interface AzureDevOpsConnectorProperties {
	readonly authorization?: AuthorizationInfo;
	readonly orgs?: AzureDevOpsOrgMetadata[];
	readonly provisioningState?: "Canceled" | "Failed" | "Succeeded";
}
export interface AzureDevOpsOrgMetadata {
	readonly autoDiscovery?: "Disabled" | "Enabled";
	readonly name?: string;
	readonly projects?: AzureDevOpsProjectMetadata[];
}
export interface AzureDevOpsOrgProperties {
	readonly autoDiscovery?: "Disabled" | "Enabled";
	readonly provisioningState?: "Canceled" | "Failed" | "Succeeded";
}
export interface AzureDevOpsProjectMetadata {
	readonly autoDiscovery?: "Disabled" | "Enabled";
	readonly name?: string;
	readonly repos?: string[];
}
export interface AzureDevOpsProjectProperties {
	readonly autoDiscovery?: "Disabled" | "Enabled";
	readonly orgName?: string;
	readonly projectId?: string;
	readonly provisioningState?: "Canceled" | "Failed" | "Succeeded";
}
export interface AzureDevOpsRepoProperties {
	readonly actionableRemediation?: ActionableRemediation;
	readonly orgName?: string;
	readonly projectName?: string;
	readonly provisioningState?: "Canceled" | "Failed" | "Succeeded";
	readonly repoId?: string;
	readonly repoUrl?: string;
	readonly visibility?: string;
}
export interface GitHubConnectorProperties {
	readonly code?: string;
	readonly provisioningState?: "Canceled" | "Failed" | "Succeeded";
}
export interface GitHubOwnerProperties {
	readonly ownerUrl?: string;
	readonly provisioningState?: "Canceled" | "Failed" | "Succeeded";
}
export interface GitHubRepoProperties {
	readonly accountId?: number;
	readonly ownerName?: string;
	readonly provisioningState?: "Canceled" | "Failed" | "Succeeded";
	readonly repoUrl?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TargetBranchConfiguration {
	readonly names?: string[];
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export default {
	azureDevOpsConnectors: azureDevOpsConnectors,
	"azureDevOpsConnectors/orgs": azureDevOpsConnectors_orgs,
	"azureDevOpsConnectors/orgs/projects": azureDevOpsConnectors_orgs_projects,
	"azureDevOpsConnectors/orgs/projects/repos": azureDevOpsConnectors_orgs_projects_repos,
	gitHubConnectors: gitHubConnectors,
	"gitHubConnectors/owners": gitHubConnectors_owners,
	"gitHubConnectors/owners/repos": gitHubConnectors_owners_repos,
};
