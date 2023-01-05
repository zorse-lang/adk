import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class workflows extends ArmResource<workflowsComponentInputs> implements workflowsComponentOutputs {
	constructor(entity: ADKEntity, options: workflowsComponentInputs) {
		super(entity, options.name, "Microsoft.DevHub/workflows", "2022-04-01-preview", options);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DevHub/workflows";
}
export interface workflowsComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DevHub/workflows";
}
export interface workflowsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: WorkflowProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export interface ACR {
	readonly acrRegistryName?: string;
	readonly acrRepositoryName?: string;
	readonly acrResourceGroup?: string;
	readonly acrSubscriptionId?: string;
}
export interface DeploymentProperties {
	readonly helmChartPath?: string;
	readonly helmValues?: string;
	readonly kubeManifestLocations?: string[];
	readonly manifestType?: "helm" | "kube";
	readonly overrides?: DeploymentPropertiesOverrides;
}
export interface DeploymentPropertiesOverrides {
	readonly [key: string]: string;
}
export interface GitHubWorkflowProfile {
	readonly acr?: ACR;
	readonly aksResourceId?: string;
	readonly authStatus?: "Authorized" | "Error" | "NotFound";
	readonly branchName?: string;
	readonly deploymentProperties?: DeploymentProperties;
	readonly dockerBuildContext?: string;
	readonly dockerfile?: string;
	readonly lastWorkflowRun?: WorkflowRun;
	readonly namespace?: string;
	readonly oidcCredentials?: GitHubWorkflowProfileOidcCredentials;
	readonly prStatus?: "merged" | "removed" | "submitted" | "unknown";
	readonly prURL?: string;
	readonly pullNumber?: number;
	readonly repositoryName?: string;
	readonly repositoryOwner?: string;
}
export interface GitHubWorkflowProfileOidcCredentials {
	readonly azureClientId?: string;
	readonly azureTenantId?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface WorkflowProperties {
	readonly githubWorkflowProfile?: GitHubWorkflowProfile;
}
export interface WorkflowRun {
	readonly lastRunAt?: string;
	readonly succeeded?: boolean;
	readonly workflowRunURL?: string;
}
export default {
	workflows: workflows,
};
