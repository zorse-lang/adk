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
	readonly properties?: AzureDevOpsConnectorProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: AzureDevOpsOrgProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: AzureDevOpsProjectProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: AzureDevOpsRepoProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: GitHubConnectorProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: GitHubOwnerProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: GitHubRepoProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface ActionableRemediation {
	readonly branchConfiguration?: TargetBranchConfiguration | undefined;
	readonly categories?: ("Artifacts" | "Code" | "Containers" | "Dependencies" | "IaC" | "Secrets"[]) | undefined;
	readonly severityLevels?: string[] | undefined;
	readonly state?: ("Disabled" | "Enabled" | "None") | undefined;
}
export interface AuthorizationInfo {
	readonly code?: string | undefined;
}
export interface AzureDevOpsConnectorProperties {
	readonly authorization?: AuthorizationInfo | undefined;
	readonly orgs?: AzureDevOpsOrgMetadata[] | undefined;
	readonly provisioningState?: ("Canceled" | "Failed" | "Succeeded") | undefined;
}
export interface AzureDevOpsOrgMetadata {
	readonly autoDiscovery?: ("Disabled" | "Enabled") | undefined;
	readonly name?: string | undefined;
	readonly projects?: AzureDevOpsProjectMetadata[] | undefined;
}
export interface AzureDevOpsOrgProperties {
	readonly autoDiscovery?: ("Disabled" | "Enabled") | undefined;
	readonly provisioningState?: ("Canceled" | "Failed" | "Succeeded") | undefined;
}
export interface AzureDevOpsProjectMetadata {
	readonly autoDiscovery?: ("Disabled" | "Enabled") | undefined;
	readonly name?: string | undefined;
	readonly repos?: string[] | undefined;
}
export interface AzureDevOpsProjectProperties {
	readonly autoDiscovery?: ("Disabled" | "Enabled") | undefined;
	readonly orgName?: string | undefined;
	readonly projectId?: string | undefined;
	readonly provisioningState?: ("Canceled" | "Failed" | "Succeeded") | undefined;
}
export interface AzureDevOpsRepoProperties {
	readonly actionableRemediation?: ActionableRemediation | undefined;
	readonly orgName?: string | undefined;
	readonly projectName?: string | undefined;
	readonly provisioningState?: ("Canceled" | "Failed" | "Succeeded") | undefined;
	readonly repoId?: string | undefined;
	readonly repoUrl?: string | undefined;
	readonly visibility?: string | undefined;
}
export interface GitHubConnectorProperties {
	readonly code?: string | undefined;
	readonly provisioningState?: ("Canceled" | "Failed" | "Succeeded") | undefined;
}
export interface GitHubOwnerProperties {
	readonly ownerUrl?: string | undefined;
	readonly provisioningState?: ("Canceled" | "Failed" | "Succeeded") | undefined;
}
export interface GitHubRepoProperties {
	readonly accountId?: number | undefined;
	readonly ownerName?: string | undefined;
	readonly provisioningState?: ("Canceled" | "Failed" | "Succeeded") | undefined;
	readonly repoUrl?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TargetBranchConfiguration {
	readonly names?: string[] | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
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
