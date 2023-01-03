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
	readonly properties?: WorkflowProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface ACR {
	readonly acrRegistryName?: string | undefined;
	readonly acrRepositoryName?: string | undefined;
	readonly acrResourceGroup?: string | undefined;
	readonly acrSubscriptionId?: string | undefined;
}
export interface DeploymentProperties {
	readonly helmChartPath?: string | undefined;
	readonly helmValues?: string | undefined;
	readonly kubeManifestLocations?: string[] | undefined;
	readonly manifestType?: ("helm" | "kube") | undefined;
	readonly overrides?: DeploymentPropertiesOverrides | undefined;
}
export interface DeploymentPropertiesOverrides {
	readonly "[ key: string ]"?: string | undefined;
}
export interface GitHubWorkflowProfile {
	readonly acr?: ACR | undefined;
	readonly aksResourceId?: string | undefined;
	readonly authStatus?: ("Authorized" | "Error" | "NotFound") | undefined;
	readonly branchName?: string | undefined;
	readonly deploymentProperties?: DeploymentProperties | undefined;
	readonly dockerBuildContext?: string | undefined;
	readonly dockerfile?: string | undefined;
	readonly lastWorkflowRun?: WorkflowRun | undefined;
	readonly namespace?: string | undefined;
	readonly oidcCredentials?: GitHubWorkflowProfileOidcCredentials | undefined;
	readonly prStatus?: ("merged" | "removed" | "submitted" | "unknown") | undefined;
	readonly prURL?: string | undefined;
	readonly pullNumber?: number | undefined;
	readonly repositoryName?: string | undefined;
	readonly repositoryOwner?: string | undefined;
}
export interface GitHubWorkflowProfileOidcCredentials {
	readonly azureClientId?: string | undefined;
	readonly azureTenantId?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface WorkflowProperties {
	readonly githubWorkflowProfile?: GitHubWorkflowProfile | undefined;
}
export interface WorkflowRun {
	readonly lastRunAt?: string | undefined;
	readonly succeeded?: boolean | undefined;
	readonly workflowRunURL?: string | undefined;
}
export default {
	workflows: workflows,
};
