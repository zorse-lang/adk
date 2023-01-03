import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class workspaces extends ArmResource<workspacesComponentInputs> implements workspacesComponentOutputs {
	constructor(entity: ADKEntity, options: workspacesComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces", "2018-03-01-preview", options);
	}
	public readonly apiVersion: "2018-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces";
}
export interface workspacesComponentOutputs {
	readonly apiVersion: "2018-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces";
}
export interface workspacesComponentInputs {
	readonly identity?: Identity | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: WorkspaceProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class workspaces_computes
	extends ArmResource<workspaces_computesComponentInputs>
	implements workspaces_computesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_computesComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/computes", "2018-03-01-preview", options);
	}
	public readonly apiVersion: "2018-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/computes";
}
export interface workspaces_computesComponentOutputs {
	readonly apiVersion: "2018-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/computes";
}
export interface workspaces_computesComponentInputs {
	readonly identity?: Identity | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: Compute | undefined;
	readonly tags?: ResourceTags | undefined;
}
export function listKeys(resource: workspaces): ListWorkspaceKeysResult {
	if (resource.apiVersion !== "2018-03-01-preview") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.MachineLearningServices/workspaces") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AKSProperties {
	readonly agentCount?: number | undefined;
	readonly agentVMSize?: string | undefined;
	readonly clusterFqdn?: string | undefined;
	readonly sslConfiguration?: SslConfiguration | undefined;
	readonly systemServices?: SystemService[] | undefined;
}
export interface BatchAIProperties {
	readonly scaleSettings?: ScaleSettings | undefined;
	readonly vmPriority?: string | undefined;
	readonly vmSize?: string | undefined;
}
export interface Compute {
	readonly computeLocation?: string | undefined;
	readonly createdOn?: string | undefined;
	readonly description?: string | undefined;
	readonly modifiedOn?: string | undefined;
	readonly provisioningErrors?: MachineLearningServiceError[] | undefined;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Unknown" | "Updating")
		| undefined;
	readonly resourceId?: string | undefined;
}
export interface ComputeSecrets {}
export interface ErrorDetail {
	readonly code: string;
	readonly message: string;
}
export interface ErrorResponse {
	readonly code: string;
	readonly details?: ErrorDetail[] | undefined;
	readonly message: string;
}
export interface HDInsightProperties {
	readonly address?: string | undefined;
	readonly administratorAccount?: VirtualMachineSshCredentials | undefined;
	readonly sshPort?: number | undefined;
}
export interface Identity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: "SystemAssigned" | undefined;
}
export interface ListWorkspaceKeysResult {
	readonly appInsightsInstrumentationKey?: string | undefined;
	readonly containerRegistryCredentials?: RegistryListCredentialsResult | undefined;
	readonly userStorageKey?: string | undefined;
	readonly userStorageResourceId?: string | undefined;
}
export interface MachineLearningServiceError {
	readonly error?: ErrorResponse | undefined;
}
export interface Password {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface RegistryListCredentialsResult {
	readonly location?: string | undefined;
	readonly passwords?: Password[] | undefined;
	readonly username?: string | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ScaleSettings {
	readonly autoScaleEnabled?: boolean | undefined;
	readonly maxNodeCount?: number | undefined;
	readonly minNodeCount?: number | undefined;
}
export interface SslConfiguration {
	readonly cert?: string | undefined;
	readonly cname?: string | undefined;
	readonly key?: string | undefined;
	readonly status?: ("Disabled" | "Enabled") | undefined;
}
export interface SystemService {
	readonly publicIpAddress?: string | undefined;
	readonly systemServiceType?: string | undefined;
	readonly version?: string | undefined;
}
export interface VirtualMachineProperties {
	readonly address?: string | undefined;
	readonly administratorAccount?: VirtualMachineSshCredentials | undefined;
	readonly sshPort?: number | undefined;
	readonly virtualMachineSize?: string | undefined;
}
export interface VirtualMachineSshCredentials {
	readonly password?: string | undefined;
	readonly privateKeyData?: string | undefined;
	readonly publicKeyData?: string | undefined;
	readonly username?: string | undefined;
}
export interface WorkspaceProperties {
	readonly applicationInsights?: string | undefined;
	readonly batchaiWorkspace?: string | undefined;
	readonly containerRegistry?: string | undefined;
	readonly creationTime?: string | undefined;
	readonly description?: string | undefined;
	readonly discoveryUrl?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly keyVault?: string | undefined;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Unknown" | "Updating")
		| undefined;
	readonly storageAccount?: string | undefined;
	readonly workspaceId?: string | undefined;
}
export default {
	workspaces: workspaces,
	"workspaces/computes": workspaces_computes,
};
