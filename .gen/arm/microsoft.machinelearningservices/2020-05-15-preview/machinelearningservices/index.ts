import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class workspaces extends ArmResource<workspacesComponentInputs> implements workspacesComponentOutputs {
	constructor(entity: ADKEntity, options: workspacesComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces", "2020-05-15-preview", options);
	}
	public readonly apiVersion: "2020-05-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces";
}
export interface workspacesComponentOutputs {
	readonly apiVersion: "2020-05-15-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces";
}
export interface workspacesComponentInputs {
	readonly identity?: Identity | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: WorkspaceProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class workspaces_computes
	extends ArmResource<workspaces_computesComponentInputs>
	implements workspaces_computesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_computesComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/computes", "2020-05-15-preview", options);
	}
	public readonly apiVersion: "2020-05-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/computes";
}
export interface workspaces_computesComponentOutputs {
	readonly apiVersion: "2020-05-15-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/computes";
}
export interface workspaces_computesComponentInputs {
	readonly identity?: Identity | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: Compute | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class workspaces_linkedWorkspaces
	extends ArmResource<workspaces_linkedWorkspacesComponentInputs>
	implements workspaces_linkedWorkspacesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_linkedWorkspacesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.MachineLearningServices/workspaces/linkedWorkspaces",
			"2020-05-15-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-05-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/linkedWorkspaces";
}
export interface workspaces_linkedWorkspacesComponentOutputs {
	readonly apiVersion: "2020-05-15-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/linkedWorkspaces";
}
export interface workspaces_linkedWorkspacesComponentInputs {
	readonly name: string;
	readonly properties?: LinkedWorkspaceProps | undefined;
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
			"2020-05-15-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-05-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/privateEndpointConnections";
}
export interface workspaces_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2020-05-15-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/privateEndpointConnections";
}
export interface workspaces_privateEndpointConnectionsComponentInputs {
	readonly identity?: Identity | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class workspaces_services_ACI
	extends ArmResource<workspaces_services_ACIComponentInputs>
	implements workspaces_services_ACIComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_services_ACIComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/services", "2020-05-15-preview", options);
	}
	public readonly apiVersion: "2020-05-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/services";
}
export interface workspaces_services_ACIComponentOutputs {
	readonly apiVersion: "2020-05-15-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/services";
}
export interface workspaces_services_ACIComponentInputs {
	readonly description?: string | undefined;
	readonly environmentImageRequest?: CreateServiceRequestEnvironmentImageRequest | undefined;
	readonly identity?: Identity | undefined;
	readonly keys?: CreateServiceRequestKeys | undefined;
	readonly kvTags?: CreateServiceRequestKvTags | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: CreateServiceRequestProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly appInsightsEnabled?: boolean | undefined;
	readonly authEnabled?: boolean | undefined;
	readonly cname?: string | undefined;
	readonly computeType: "ACI";
	readonly containerResourceRequirements?: ContainerResourceRequirements | undefined;
	readonly dataCollection?: ACIServiceCreateRequestDataCollection | undefined;
	readonly dnsNameLabel?: string | undefined;
	readonly encryptionProperties?: ACIServiceCreateRequestEncryptionProperties | undefined;
	readonly sslCertificate?: string | undefined;
	readonly sslEnabled?: boolean | undefined;
	readonly sslKey?: string | undefined;
	readonly vnetConfiguration?: ACIServiceCreateRequestVnetConfiguration | undefined;
}
export class workspaces_services_AKS
	extends ArmResource<workspaces_services_AKSComponentInputs>
	implements workspaces_services_AKSComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_services_AKSComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/services", "2020-05-15-preview", options);
	}
	public readonly apiVersion: "2020-05-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/services";
}
export interface workspaces_services_AKSComponentOutputs {
	readonly apiVersion: "2020-05-15-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/services";
}
export interface workspaces_services_AKSComponentInputs {
	readonly description?: string | undefined;
	readonly environmentImageRequest?: CreateServiceRequestEnvironmentImageRequest | undefined;
	readonly identity?: Identity | undefined;
	readonly keys?: CreateServiceRequestKeys | undefined;
	readonly kvTags?: CreateServiceRequestKvTags | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: CreateServiceRequestProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly aadAuthEnabled?: boolean | undefined;
	readonly appInsightsEnabled?: boolean | undefined;
	readonly authEnabled?: boolean | undefined;
	readonly autoScaler?: AKSServiceCreateRequestAutoScaler | undefined;
	readonly computeName?: string | undefined;
	readonly computeType: "AKS";
	readonly containerResourceRequirements?: ContainerResourceRequirements | undefined;
	readonly dataCollection?: AKSServiceCreateRequestDataCollection | undefined;
	readonly isDefault?: boolean | undefined;
	readonly livenessProbeRequirements?: AKSServiceCreateRequestLivenessProbeRequirements | undefined;
	readonly maxConcurrentRequestsPerContainer?: number | undefined;
	readonly maxQueueWaitMs?: number | undefined;
	readonly namespace?: string | undefined;
	readonly numReplicas?: number | undefined;
	readonly scoringTimeoutMs?: number | undefined;
	readonly trafficPercentile?: number | undefined;
	readonly type?: ("Control" | "Treatment") | undefined;
}
export function listKeys(resource: workspaces): ListWorkspaceKeysResult {
	if (resource.apiVersion !== "2020-05-15-preview") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.MachineLearningServices/workspaces") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listNodes(resource: workspaces_computes): AmlComputeNodesInformation {
	if (resource.apiVersion !== "2020-05-15-preview") {
		throw new Error(`listNodes is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.MachineLearningServices/workspaces/computes") {
		throw new Error(`listNodes is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ACIServiceCreateRequestDataCollection {
	readonly eventHubEnabled?: boolean | undefined;
	readonly storageEnabled?: boolean | undefined;
}
export interface ACIServiceCreateRequestEncryptionProperties {
	readonly keyName: string;
	readonly keyVersion: string;
	readonly vaultBaseUrl: string;
}
export interface ACIServiceCreateRequestVnetConfiguration {
	readonly subnetName?: string | undefined;
	readonly vnetName?: string | undefined;
}
export interface AksNetworkingConfiguration {
	readonly dnsServiceIP?: string | undefined;
	readonly dockerBridgeCidr?: string | undefined;
	readonly serviceCidr?: string | undefined;
	readonly subnetId?: string | undefined;
}
export interface AKSProperties {
	readonly agentCount?: number | undefined;
	readonly agentVMSize?: string | undefined;
	readonly aksNetworkingConfiguration?: AksNetworkingConfiguration | undefined;
	readonly clusterFqdn?: string | undefined;
	readonly sslConfiguration?: SslConfiguration | undefined;
	readonly systemServices?: SystemService[] | undefined;
}
export interface AKSServiceCreateRequestAutoScaler {
	readonly autoscaleEnabled?: boolean | undefined;
	readonly maxReplicas?: number | undefined;
	readonly minReplicas?: number | undefined;
	readonly refreshPeriodInSeconds?: number | undefined;
	readonly targetUtilization?: number | undefined;
}
export interface AKSServiceCreateRequestDataCollection {
	readonly eventHubEnabled?: boolean | undefined;
	readonly storageEnabled?: boolean | undefined;
}
export interface AKSServiceCreateRequestLivenessProbeRequirements {
	readonly failureThreshold?: number | undefined;
	readonly initialDelaySeconds?: number | undefined;
	readonly periodSeconds?: number | undefined;
	readonly successThreshold?: number | undefined;
	readonly timeoutSeconds?: number | undefined;
}
export interface AmlComputeNodeInformation {
	readonly nodeId?: string | undefined;
	readonly nodeState?: ("idle" | "leaving" | "preempted" | "preparing" | "running" | "unusable") | undefined;
	readonly port?: number | undefined;
	readonly privateIpAddress?: string | undefined;
	readonly publicIpAddress?: string | undefined;
	readonly runId?: string | undefined;
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
	readonly nextLink?: string | undefined;
	readonly nodes?: AmlComputeNodeInformation[] | undefined;
}
export interface AmlComputeProperties {
	readonly allocationState?: ("Resizing" | "Steady") | undefined;
	readonly allocationStateTransitionTime?: string | undefined;
	readonly currentNodeCount?: number | undefined;
	readonly enableNodePublicIp?: boolean | undefined;
	readonly errors?: MachineLearningServiceError[] | undefined;
	readonly isolatedNetwork?: boolean | undefined;
	readonly nodeStateCounts?: NodeStateCounts | undefined;
	readonly osType?: ("Linux" | "Windows") | undefined;
	readonly remoteLoginPortPublicAccess?: ("Disabled" | "Enabled" | "NotSpecified") | undefined;
	readonly scaleSettings?: ScaleSettings | undefined;
	readonly subnet?: ResourceId | undefined;
	readonly targetNodeCount?: number | undefined;
	readonly userAccountCredentials?: UserAccountCredentials | undefined;
	readonly virtualMachineImage?: VirtualMachineImage | undefined;
	readonly vmPriority?: ("Dedicated" | "LowPriority") | undefined;
	readonly vmSize?: string | undefined;
}
export interface Compute {
	readonly computeLocation?: string | undefined;
	readonly createdOn?: string | undefined;
	readonly description?: string | undefined;
	readonly isAttachedCompute?: boolean | undefined;
	readonly modifiedOn?: string | undefined;
	readonly provisioningErrors?: MachineLearningServiceError[] | undefined;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Unknown" | "Updating")
		| undefined;
	readonly resourceId?: string | undefined;
}
export interface ComputeSecrets {}
export interface ContainerResourceRequirements {
	readonly cpu?: number | undefined;
	readonly fpga?: number | undefined;
	readonly gpu?: number | undefined;
	readonly memoryInGB?: number | undefined;
}
export interface CreateServiceRequestEnvironmentImageRequest {
	readonly assets?: ImageAsset[] | undefined;
	readonly driverProgram?: string | undefined;
	readonly environment?: EnvironmentImageRequestEnvironment | undefined;
	readonly environmentReference?: EnvironmentImageRequestEnvironmentReference | undefined;
	readonly modelIds?: string[] | undefined;
	readonly models?: Model[] | undefined;
}
export interface CreateServiceRequestKeys {
	readonly primaryKey?: string | undefined;
	readonly secondaryKey?: string | undefined;
}
export interface CreateServiceRequestKvTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface CreateServiceRequestProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface DatabricksProperties {
	readonly databricksAccessToken?: string | undefined;
}
export interface DataLakeAnalyticsProperties {
	readonly dataLakeStoreAccountName?: string | undefined;
}
export interface DatasetReference {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
}
export interface EncryptionProperty {
	readonly keyVaultProperties: KeyVaultProperties;
	readonly status: "Disabled" | "Enabled";
}
export interface EnvironmentImageRequestEnvironment {
	readonly docker?: ModelEnvironmentDefinitionDocker | undefined;
	readonly environmentVariables?: ModelEnvironmentDefinitionEnvironmentVariables | undefined;
	readonly inferencingStackVersion?: string | undefined;
	readonly name?: string | undefined;
	readonly python?: ModelEnvironmentDefinitionPython | undefined;
	readonly r?: ModelEnvironmentDefinitionR | undefined;
	readonly spark?: ModelEnvironmentDefinitionSpark | undefined;
	readonly version?: string | undefined;
}
export interface EnvironmentImageRequestEnvironmentReference {
	readonly name?: string | undefined;
	readonly version?: string | undefined;
}
export interface ErrorDetail {
	readonly code: string;
	readonly message: string;
}
export interface ErrorResponse {
	readonly code?: string | undefined;
	readonly details?: ErrorDetail[] | undefined;
	readonly message?: string | undefined;
}
export interface HDInsightProperties {
	readonly address?: string | undefined;
	readonly administratorAccount?: VirtualMachineSshCredentials | undefined;
	readonly sshPort?: number | undefined;
}
export interface Identity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned" | "SystemAssigned,UserAssigned") | undefined;
	readonly userAssignedIdentities?: UserAssignedIdentities | undefined;
}
export interface ImageAsset {
	readonly id?: string | undefined;
	readonly mimeType?: string | undefined;
	readonly unpack?: boolean | undefined;
	readonly url?: string | undefined;
}
export interface KeyVaultProperties {
	readonly identityClientId?: string | undefined;
	readonly keyIdentifier: string;
	readonly keyVaultArmId: string;
}
export interface LinkedWorkspaceProps {
	readonly linkedWorkspaceResourceId?: string | undefined;
	readonly userAssignedIdentityResourceId?: string | undefined;
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
export interface Model {
	readonly createdTime?: string | undefined;
	readonly datasets?: DatasetReference[] | undefined;
	readonly derivedModelIds?: string[] | undefined;
	readonly description?: string | undefined;
	readonly experimentName?: string | undefined;
	readonly framework?: string | undefined;
	readonly frameworkVersion?: string | undefined;
	readonly id?: string | undefined;
	readonly kvTags?: ModelKvTags | undefined;
	readonly mimeType: string;
	readonly modifiedTime?: string | undefined;
	readonly name: string;
	readonly parentModelId?: string | undefined;
	readonly properties?: ModelProperties | undefined;
	readonly resourceRequirements?: ContainerResourceRequirements | undefined;
	readonly runId?: string | undefined;
	readonly sampleInputData?: string | undefined;
	readonly sampleOutputData?: string | undefined;
	readonly unpack?: boolean | undefined;
	readonly url: string;
	readonly version?: number | undefined;
}
export interface ModelDockerSectionBaseImageRegistry {
	readonly address?: string | undefined;
	readonly password?: string | undefined;
	readonly username?: string | undefined;
}
export interface ModelEnvironmentDefinitionDocker {
	readonly baseDockerfile?: string | undefined;
	readonly baseImage?: string | undefined;
	readonly baseImageRegistry?: ModelDockerSectionBaseImageRegistry | undefined;
}
export interface ModelEnvironmentDefinitionEnvironmentVariables {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ModelEnvironmentDefinitionPython {
	readonly baseCondaEnvironment?: string | undefined;
	readonly condaDependencies?: any | undefined;
	readonly interpreterPath?: string | undefined;
	readonly userManagedDependencies?: boolean | undefined;
}
export interface ModelEnvironmentDefinitionR {
	readonly bioConductorPackages?: string[] | undefined;
	readonly cranPackages?: RCranPackage[] | undefined;
	readonly customUrlPackages?: string[] | undefined;
	readonly gitHubPackages?: RGitHubPackage[] | undefined;
	readonly rscriptPath?: string | undefined;
	readonly rVersion?: string | undefined;
	readonly snapshotDate?: string | undefined;
	readonly userManaged?: boolean | undefined;
}
export interface ModelEnvironmentDefinitionSpark {
	readonly packages?: SparkMavenPackage[] | undefined;
	readonly precachePackages?: boolean | undefined;
	readonly repositories?: string[] | undefined;
}
export interface ModelKvTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ModelProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface NodeStateCounts {
	readonly idleNodeCount?: number | undefined;
	readonly leavingNodeCount?: number | undefined;
	readonly preemptedNodeCount?: number | undefined;
	readonly preparingNodeCount?: number | undefined;
	readonly runningNodeCount?: number | undefined;
	readonly unusableNodeCount?: number | undefined;
}
export interface Password {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface PrivateEndpoint {
	readonly id?: string | undefined;
}
export interface PrivateEndpointConnection {
	readonly id?: string | undefined;
	readonly identity?: Identity | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint | undefined;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded") | undefined;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string | undefined;
	readonly description?: string | undefined;
	readonly status?: ("Approved" | "Disconnected" | "Pending" | "Rejected" | "Timeout") | undefined;
}
export interface RCranPackage {
	readonly name?: string | undefined;
	readonly repository?: string | undefined;
}
export interface RegistryListCredentialsResult {
	readonly location?: string | undefined;
	readonly passwords?: Password[] | undefined;
	readonly username?: string | undefined;
}
export interface ResourceId {
	readonly id: string;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface RGitHubPackage {
	readonly authToken?: string | undefined;
	readonly repository?: string | undefined;
}
export interface ScaleSettings {
	readonly maxNodeCount: number;
	readonly minNodeCount?: number | undefined;
	readonly nodeIdleTimeBeforeScaleDown?: string | undefined;
}
export interface SharedPrivateLinkResource {
	readonly name?: string | undefined;
	readonly properties?: SharedPrivateLinkResourceProperty | undefined;
}
export interface SharedPrivateLinkResourceProperty {
	readonly groupId?: string | undefined;
	readonly privateLinkResourceId?: string | undefined;
	readonly requestMessage?: string | undefined;
	readonly status?: ("Approved" | "Disconnected" | "Pending" | "Rejected" | "Timeout") | undefined;
}
export interface Sku {
	readonly name?: string | undefined;
	readonly tier?: string | undefined;
}
export interface SparkMavenPackage {
	readonly artifact?: string | undefined;
	readonly group?: string | undefined;
	readonly version?: string | undefined;
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
export interface UserAccountCredentials {
	readonly adminUserName: string;
	readonly adminUserPassword?: string | undefined;
	readonly adminUserSshPublicKey?: string | undefined;
}
export interface UserAssignedIdentities {
	readonly "[ key: string ]"?: UserAssignedIdentity | undefined;
}
export interface UserAssignedIdentity {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
}
export interface VirtualMachineImage {
	readonly id: string;
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
	readonly allowPublicAccessWhenBehindVnet?: boolean | undefined;
	readonly applicationInsights?: string | undefined;
	readonly containerRegistry?: string | undefined;
	readonly creationTime?: string | undefined;
	readonly description?: string | undefined;
	readonly discoveryUrl?: string | undefined;
	readonly encryption?: EncryptionProperty | undefined;
	readonly friendlyName?: string | undefined;
	readonly hbiWorkspace?: boolean | undefined;
	readonly imageBuildCompute?: string | undefined;
	readonly keyVault?: string | undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly privateLinkCount?: number | undefined;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Unknown" | "Updating")
		| undefined;
	readonly serviceProvisionedResourceGroup?: string | undefined;
	readonly sharedPrivateLinkResources?: SharedPrivateLinkResource[] | undefined;
	readonly storageAccount?: string | undefined;
	readonly workspaceId?: string | undefined;
}
export type workspaces_services = workspaces_services_ACI | workspaces_services_AKS;
export default {
	workspaces: workspaces,
	"workspaces/computes": workspaces_computes,
	"workspaces/linkedWorkspaces": workspaces_linkedWorkspaces,
	"workspaces/privateEndpointConnections": workspaces_privateEndpointConnections,
	"workspaces/services/ACI": workspaces_services_ACI,
	"workspaces/services/AKS": workspaces_services_AKS,
};
