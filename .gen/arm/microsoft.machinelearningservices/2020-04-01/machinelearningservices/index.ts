import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class workspaces extends ArmResource<workspacesComponentInputs> implements workspacesComponentOutputs {
	constructor(entity: ADKEntity, options: workspacesComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces", "2020-04-01", options);
	}
	public readonly apiVersion: "2020-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces";
}
export interface workspacesComponentOutputs {
	readonly apiVersion: "2020-04-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces";
}
export interface workspacesComponentInputs {
	readonly identity?: Identity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: WorkspaceProperties;
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
}
export class workspaces_computes
	extends ArmResource<workspaces_computesComponentInputs>
	implements workspaces_computesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_computesComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/computes", "2020-04-01", options);
	}
	public readonly apiVersion: "2020-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/computes";
}
export interface workspaces_computesComponentOutputs {
	readonly apiVersion: "2020-04-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/computes";
}
export interface workspaces_computesComponentInputs {
	readonly identity?: Identity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: Compute;
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
}
export class workspaces_privateEndpointConnections
	extends ArmResource<workspaces_privateEndpointConnectionsComponentInputs>
	implements workspaces_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.MachineLearningServices/workspaces/privateEndpointConnections",
			"2020-04-01",
			options,
		);
	}
	public readonly apiVersion: "2020-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/privateEndpointConnections";
}
export interface workspaces_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2020-04-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/privateEndpointConnections";
}
export interface workspaces_privateEndpointConnectionsComponentInputs {
	readonly identity?: Identity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
}
export function listKeys(resource: workspaces): ListWorkspaceKeysResult {
	if (resource.apiVersion !== "2020-04-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.MachineLearningServices/workspaces") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listNodes(resource: workspaces_computes): AmlComputeNodesInformation {
	if (resource.apiVersion !== "2020-04-01") {
		throw new Error(`listNodes is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.MachineLearningServices/workspaces/computes") {
		throw new Error(`listNodes is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AksNetworkingConfiguration {
	readonly dnsServiceIP?: string;
	readonly dockerBridgeCidr?: string;
	readonly serviceCidr?: string;
	readonly subnetId?: string;
}
export interface AKSProperties {
	readonly agentCount?: number;
	readonly agentVMSize?: string;
	readonly aksNetworkingConfiguration?: AksNetworkingConfiguration;
	readonly clusterFqdn?: string;
	readonly clusterPurpose?: "DenseProd" | "DevTest" | "FastProd";
	readonly sslConfiguration?: SslConfiguration;
	readonly systemServices?: SystemService[];
}
export interface AmlComputeNodeInformation {
	readonly nodeId?: string;
	readonly nodeState?: "idle" | "leaving" | "preempted" | "preparing" | "running" | "unusable";
	readonly port?: number;
	readonly privateIpAddress?: string;
	readonly publicIpAddress?: string;
	readonly runId?: string;
}
export interface AmlComputeNodesInformation {
	readonly computeType:
		| "AKS"
		| "AmlCompute"
		| "DataFactory"
		| "DataLakeAnalytics"
		| "Databricks"
		| "HDInsight"
		| "VirtualMachine";
	readonly nextLink?: string;
	readonly nodes?: AmlComputeNodeInformation[];
}
export interface AmlComputeProperties {
	readonly allocationState?: "Resizing" | "Steady";
	readonly allocationStateTransitionTime?: string;
	readonly currentNodeCount?: number;
	readonly errors?: MachineLearningServiceError[];
	readonly nodeStateCounts?: NodeStateCounts;
	readonly remoteLoginPortPublicAccess?: "Disabled" | "Enabled" | "NotSpecified";
	readonly scaleSettings?: ScaleSettings;
	readonly subnet?: ResourceId;
	readonly targetNodeCount?: number;
	readonly userAccountCredentials?: UserAccountCredentials;
	readonly vmPriority?: "Dedicated" | "LowPriority";
	readonly vmSize?: string;
}
export interface ComponentsSgqdofSchemasIdentityPropertiesUserassignedidentitiesAdditionalproperties {
	readonly clientId?: string;
	readonly principalId?: string;
}
export interface Compute {
	readonly computeLocation?: string;
	readonly createdOn?: string;
	readonly description?: string;
	readonly isAttachedCompute?: boolean;
	readonly modifiedOn?: string;
	readonly provisioningErrors?: MachineLearningServiceError[];
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Unknown" | "Updating";
	readonly resourceId?: string;
}
export interface ComputeSecrets {}
export interface DatabricksProperties {
	readonly databricksAccessToken?: string;
}
export interface DataLakeAnalyticsProperties {
	readonly dataLakeStoreAccountName?: string;
}
export interface EncryptionProperty {
	readonly keyVaultProperties: KeyVaultProperties;
	readonly status: "Disabled" | "Enabled";
}
export interface ErrorDetail {
	readonly code: string;
	readonly message: string;
}
export interface ErrorResponse {
	readonly code?: string;
	readonly details?: ErrorDetail[];
	readonly message?: string;
}
export interface HDInsightProperties {
	readonly address?: string;
	readonly administratorAccount?: VirtualMachineSshCredentials;
	readonly sshPort?: number;
}
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type: "None" | "SystemAssigned" | "SystemAssigned,UserAssigned";
	readonly userAssignedIdentities?: IdentityUserAssignedIdentities;
}
export interface IdentityUserAssignedIdentities {
	readonly [key: string]: ComponentsSgqdofSchemasIdentityPropertiesUserassignedidentitiesAdditionalproperties;
}
export interface KeyVaultProperties {
	readonly identityClientId?: string;
	readonly keyIdentifier: string;
	readonly keyVaultArmId: string;
}
export interface ListWorkspaceKeysResult {
	readonly appInsightsInstrumentationKey?: string;
	readonly containerRegistryCredentials?: RegistryListCredentialsResult;
	readonly notebookAccessKeys?: NotebookListCredentialsResult;
	readonly userStorageKey?: string;
	readonly userStorageResourceId?: string;
}
export interface MachineLearningServiceError {
	readonly error?: ErrorResponse;
}
export interface NodeStateCounts {
	readonly idleNodeCount?: number;
	readonly leavingNodeCount?: number;
	readonly preemptedNodeCount?: number;
	readonly preparingNodeCount?: number;
	readonly runningNodeCount?: number;
	readonly unusableNodeCount?: number;
}
export interface NotebookListCredentialsResult {
	readonly primaryAccessKey?: string;
	readonly secondaryAccessKey?: string;
}
export interface NotebookPreparationError {
	readonly errorMessage?: string;
	readonly statusCode?: number;
}
export interface NotebookResourceInfo {
	readonly fqdn?: string;
	readonly notebookPreparationError?: NotebookPreparationError;
	readonly resourceId?: string;
}
export interface Password {
	readonly name?: string;
	readonly value?: string;
}
export interface PrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointConnection {
	readonly id?: string;
	readonly identity?: Identity;
	readonly location?: string;
	readonly name?: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded";
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: "Approved" | "Disconnected" | "Pending" | "Rejected" | "Timeout";
}
export interface RegistryListCredentialsResult {
	readonly location?: string;
	readonly passwords?: Password[];
	readonly username?: string;
}
export interface ResourceId {
	readonly id: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface ScaleSettings {
	readonly maxNodeCount: number;
	readonly minNodeCount?: number;
	readonly nodeIdleTimeBeforeScaleDown?: string;
}
export interface SharedPrivateLinkResource {
	readonly name?: string;
	readonly properties?: SharedPrivateLinkResourceProperty;
}
export interface SharedPrivateLinkResourceProperty {
	readonly groupId?: string;
	readonly privateLinkResourceId?: string;
	readonly requestMessage?: string;
	readonly status?: "Approved" | "Disconnected" | "Pending" | "Rejected" | "Timeout";
}
export interface Sku {
	readonly name?: string;
	readonly tier?: string;
}
export interface SslConfiguration {
	readonly cert?: string;
	readonly cname?: string;
	readonly key?: string;
	readonly leafDomainLabel?: string;
	readonly overwriteExistingDomain?: boolean;
	readonly status?: "Auto" | "Disabled" | "Enabled";
}
export interface SystemService {
	readonly publicIpAddress?: string;
	readonly systemServiceType?: string;
	readonly version?: string;
}
export interface UserAccountCredentials {
	readonly adminUserName: string;
	readonly adminUserPassword?: string;
	readonly adminUserSshPublicKey?: string;
}
export interface VirtualMachineProperties {
	readonly address?: string;
	readonly administratorAccount?: VirtualMachineSshCredentials;
	readonly sshPort?: number;
	readonly virtualMachineSize?: string;
}
export interface VirtualMachineSshCredentials {
	readonly password?: string;
	readonly privateKeyData?: string;
	readonly publicKeyData?: string;
	readonly username?: string;
}
export interface WorkspaceProperties {
	readonly allowPublicAccessWhenBehindVnet?: boolean;
	readonly applicationInsights?: string;
	readonly containerRegistry?: string;
	readonly creationTime?: string;
	readonly description?: string;
	readonly discoveryUrl?: string;
	readonly encryption?: EncryptionProperty;
	readonly friendlyName?: string;
	readonly hbiWorkspace?: boolean;
	readonly imageBuildCompute?: string;
	readonly keyVault?: string;
	readonly notebookInfo?: NotebookResourceInfo;
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly privateLinkCount?: number;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Unknown" | "Updating";
	readonly serviceProvisionedResourceGroup?: string;
	readonly sharedPrivateLinkResources?: SharedPrivateLinkResource[];
	readonly storageAccount?: string;
	readonly workspaceId?: string;
}
export default {
	workspaces: workspaces,
	"workspaces/computes": workspaces_computes,
	"workspaces/privateEndpointConnections": workspaces_privateEndpointConnections,
};
