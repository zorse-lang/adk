import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class workspaces extends ArmResource<workspacesComponentInputs> implements workspacesComponentOutputs {
	constructor(entity: ADKEntity, options: workspacesComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces", "2020-09-01-preview", options);
	}
	public readonly apiVersion: "2020-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces";
}
export interface workspacesComponentOutputs {
	readonly apiVersion: "2020-09-01-preview";
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
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/computes", "2020-09-01-preview", options);
	}
	public readonly apiVersion: "2020-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/computes";
}
export interface workspaces_computesComponentOutputs {
	readonly apiVersion: "2020-09-01-preview";
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
export class workspaces_connections
	extends ArmResource<workspaces_connectionsComponentInputs>
	implements workspaces_connectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_connectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.MachineLearningServices/workspaces/connections",
			"2020-09-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/connections";
}
export interface workspaces_connectionsComponentOutputs {
	readonly apiVersion: "2020-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/connections";
}
export interface workspaces_connectionsComponentInputs {
	readonly name: string;
	readonly properties?: WorkspaceConnectionProps;
}
export class workspaces_labelingJobs
	extends ArmResource<workspaces_labelingJobsComponentInputs>
	implements workspaces_labelingJobsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_labelingJobsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.MachineLearningServices/workspaces/labelingJobs",
			"2020-09-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/labelingJobs";
}
export interface workspaces_labelingJobsComponentOutputs {
	readonly apiVersion: "2020-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/labelingJobs";
}
export interface workspaces_labelingJobsComponentInputs {
	readonly name: string;
	readonly properties?: LabelingJobProperties;
	readonly systemData?: SystemData;
}
export class workspaces_linkedServices
	extends ArmResource<workspaces_linkedServicesComponentInputs>
	implements workspaces_linkedServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_linkedServicesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.MachineLearningServices/workspaces/linkedServices",
			"2020-09-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/linkedServices";
}
export interface workspaces_linkedServicesComponentOutputs {
	readonly apiVersion: "2020-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/linkedServices";
}
export interface workspaces_linkedServicesComponentInputs {
	readonly identity?: Identity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: LinkedServiceProps;
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
			"2020-09-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/privateEndpointConnections";
}
export interface workspaces_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2020-09-01-preview";
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
export class workspaces_services_ACI
	extends ArmResource<workspaces_services_ACIComponentInputs>
	implements workspaces_services_ACIComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_services_ACIComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/services", "2020-09-01-preview", options);
	}
	public readonly apiVersion: "2020-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/services";
}
export interface workspaces_services_ACIComponentOutputs {
	readonly apiVersion: "2020-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/services";
}
export interface workspaces_services_ACIComponentInputs {
	readonly description?: string;
	readonly environmentImageRequest?: CreateServiceRequestEnvironmentImageRequest;
	readonly identity?: Identity;
	readonly keys?: CreateServiceRequestKeys;
	readonly kvTags?: CreateServiceRequestKvTags;
	readonly location?: string;
	readonly name: string;
	readonly properties?: CreateServiceRequestProperties;
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
	readonly appInsightsEnabled?: boolean;
	readonly authEnabled?: boolean;
	readonly cname?: string;
	readonly computeType: "ACI";
	readonly containerResourceRequirements?: ContainerResourceRequirements;
	readonly dataCollection?: ACIServiceCreateRequestDataCollection;
	readonly dnsNameLabel?: string;
	readonly encryptionProperties?: ACIServiceCreateRequestEncryptionProperties;
	readonly sslCertificate?: string;
	readonly sslEnabled?: boolean;
	readonly sslKey?: string;
	readonly vnetConfiguration?: ACIServiceCreateRequestVnetConfiguration;
}
export class workspaces_services_AKS
	extends ArmResource<workspaces_services_AKSComponentInputs>
	implements workspaces_services_AKSComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_services_AKSComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/services", "2020-09-01-preview", options);
	}
	public readonly apiVersion: "2020-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/services";
}
export interface workspaces_services_AKSComponentOutputs {
	readonly apiVersion: "2020-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/services";
}
export interface workspaces_services_AKSComponentInputs {
	readonly description?: string;
	readonly environmentImageRequest?: CreateServiceRequestEnvironmentImageRequest;
	readonly identity?: Identity;
	readonly keys?: CreateServiceRequestKeys;
	readonly kvTags?: CreateServiceRequestKvTags;
	readonly location?: string;
	readonly name: string;
	readonly properties?: CreateServiceRequestProperties;
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
	readonly aadAuthEnabled?: boolean;
	readonly appInsightsEnabled?: boolean;
	readonly authEnabled?: boolean;
	readonly autoScaler?: AKSServiceCreateRequestAutoScaler;
	readonly computeName?: string;
	readonly computeType: "AKS";
	readonly containerResourceRequirements?: ContainerResourceRequirements;
	readonly dataCollection?: AKSServiceCreateRequestDataCollection;
	readonly isDefault?: boolean;
	readonly livenessProbeRequirements?: AKSServiceCreateRequestLivenessProbeRequirements;
	readonly maxConcurrentRequestsPerContainer?: number;
	readonly maxQueueWaitMs?: number;
	readonly namespace?: string;
	readonly numReplicas?: number;
	readonly scoringTimeoutMs?: number;
	readonly trafficPercentile?: number;
	readonly type?: "Control" | "Treatment";
}
export function listKeys(resource: workspaces): ListWorkspaceKeysResult {
	if (resource.apiVersion !== "2020-09-01-preview") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.MachineLearningServices/workspaces") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listNodes(resource: workspaces_computes): AmlComputeNodesInformation {
	if (resource.apiVersion !== "2020-09-01-preview") {
		throw new Error(`listNodes is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.MachineLearningServices/workspaces/computes") {
		throw new Error(`listNodes is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listNotebookKeys(resource: workspaces): ListNotebookKeysResult {
	if (resource.apiVersion !== "2020-09-01-preview") {
		throw new Error(`listNotebookKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.MachineLearningServices/workspaces") {
		throw new Error(`listNotebookKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ACIServiceCreateRequestDataCollection {
	readonly eventHubEnabled?: boolean;
	readonly storageEnabled?: boolean;
}
export interface ACIServiceCreateRequestEncryptionProperties {
	readonly keyName: string;
	readonly keyVersion: string;
	readonly vaultBaseUrl: string;
}
export interface ACIServiceCreateRequestVnetConfiguration {
	readonly subnetName?: string;
	readonly vnetName?: string;
}
export interface AksNetworkingConfiguration {
	readonly dnsServiceIP?: string;
	readonly dockerBridgeCidr?: string;
	readonly serviceCidr?: string;
	readonly subnetId?: string;
}
export interface AKSProperties {
	readonly agentCount?: number;
	readonly agentVmSize?: string;
	readonly aksNetworkingConfiguration?: AksNetworkingConfiguration;
	readonly clusterFqdn?: string;
	readonly sslConfiguration?: SslConfiguration;
	readonly systemServices?: SystemService[];
}
export interface AKSServiceCreateRequestAutoScaler {
	readonly autoscaleEnabled?: boolean;
	readonly maxReplicas?: number;
	readonly minReplicas?: number;
	readonly refreshPeriodInSeconds?: number;
	readonly targetUtilization?: number;
}
export interface AKSServiceCreateRequestDataCollection {
	readonly eventHubEnabled?: boolean;
	readonly storageEnabled?: boolean;
}
export interface AKSServiceCreateRequestLivenessProbeRequirements {
	readonly failureThreshold?: number;
	readonly initialDelaySeconds?: number;
	readonly periodSeconds?: number;
	readonly successThreshold?: number;
	readonly timeoutSeconds?: number;
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
		| "ComputeInstance"
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
	readonly enableNodePublicIp?: boolean;
	readonly errors?: MachineLearningServiceError[];
	readonly isolatedNetwork?: boolean;
	readonly nodeStateCounts?: NodeStateCounts;
	readonly osType?: "Linux" | "Windows";
	readonly remoteLoginPortPublicAccess?: "Disabled" | "Enabled" | "NotSpecified";
	readonly scaleSettings?: ScaleSettings;
	readonly subnet?: ResourceId;
	readonly targetNodeCount?: number;
	readonly userAccountCredentials?: UserAccountCredentials;
	readonly virtualMachineImage?: VirtualMachineImage;
	readonly vmPriority?: "Dedicated" | "LowPriority";
	readonly vmSize?: string;
}
export interface AssignedUser {
	readonly objectId: string;
	readonly tenantId: string;
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
export interface ComputeBinding {
	readonly computeId?: string;
	readonly nodeCount?: number;
}
export interface ComputeInstanceApplication {
	readonly displayName?: string;
	readonly endpointUri?: string;
}
export interface ComputeInstanceConnectivityEndpoints {
	readonly privateIpAddress?: string;
	readonly publicIpAddress?: string;
}
export interface ComputeInstanceCreatedBy {
	readonly userId?: string;
	readonly userName?: string;
	readonly userOrgId?: string;
}
export interface ComputeInstanceLastOperation {
	readonly operationName?: "Create" | "Delete" | "Reimage" | "Restart" | "Start" | "Stop";
	readonly operationStatus?:
		| "CreateFailed"
		| "DeleteFailed"
		| "InProgress"
		| "ReimageFailed"
		| "RestartFailed"
		| "StartFailed"
		| "StopFailed"
		| "Succeeded";
	readonly operationTime?: string;
}
export interface ComputeInstanceProperties {
	readonly applications?: ComputeInstanceApplication[];
	readonly applicationSharingPolicy?: "Personal" | "Shared";
	readonly computeInstanceAuthorizationType?: "personal";
	readonly connectivityEndpoints?: ComputeInstanceConnectivityEndpoints;
	readonly createdBy?: ComputeInstanceCreatedBy;
	readonly errors?: MachineLearningServiceError[];
	readonly lastOperation?: ComputeInstanceLastOperation;
	readonly personalComputeInstanceSettings?: PersonalComputeInstanceSettings;
	readonly setupScripts?: SetupScripts;
	readonly sshSettings?: ComputeInstanceSshSettings;
	readonly state?:
		| "CreateFailed"
		| "Creating"
		| "Deleting"
		| "JobRunning"
		| "Restarting"
		| "Running"
		| "SettingUp"
		| "SetupFailed"
		| "Starting"
		| "Stopped"
		| "Stopping"
		| "Unknown"
		| "Unusable"
		| "UserSettingUp"
		| "UserSetupFailed";
	readonly subnet?: ResourceId;
	readonly vmSize?: string;
}
export interface ComputeInstanceSshSettings {
	readonly adminPublicKey?: string;
	readonly adminUserName?: string;
	readonly sshPort?: number;
	readonly sshPublicAccess?: "Disabled" | "Enabled";
}
export interface ComputeSecrets {}
export interface ContainerResourceRequirements {
	readonly cpu?: number;
	readonly fpga?: number;
	readonly gpu?: number;
	readonly memoryInGB?: number;
}
export interface CreateServiceRequestEnvironmentImageRequest {
	readonly assets?: ImageAsset[];
	readonly driverProgram?: string;
	readonly environment?: EnvironmentImageRequestEnvironment;
	readonly environmentReference?: EnvironmentImageRequestEnvironmentReference;
	readonly modelIds?: string[];
	readonly models?: Model[];
}
export interface CreateServiceRequestKeys {
	readonly primaryKey?: string;
	readonly secondaryKey?: string;
}
export interface CreateServiceRequestKvTags {
	readonly [key: string]: string;
}
export interface CreateServiceRequestProperties {
	readonly [key: string]: string;
}
export interface DatabricksProperties {
	readonly databricksAccessToken?: string;
}
export interface DataLakeAnalyticsProperties {
	readonly dataLakeStoreAccountName?: string;
}
export interface DatasetReference {
	readonly id?: string;
	readonly name?: string;
}
export interface EncryptionProperty {
	readonly keyVaultProperties: KeyVaultProperties;
	readonly status: "Disabled" | "Enabled";
}
export interface EnvironmentImageRequestEnvironment {
	readonly docker?: ModelEnvironmentDefinitionDocker;
	readonly environmentVariables?: ModelEnvironmentDefinitionEnvironmentVariables;
	readonly inferencingStackVersion?: string;
	readonly name?: string;
	readonly python?: ModelEnvironmentDefinitionPython;
	readonly r?: ModelEnvironmentDefinitionR;
	readonly spark?: ModelEnvironmentDefinitionSpark;
	readonly version?: string;
}
export interface EnvironmentImageRequestEnvironmentReference {
	readonly name?: string;
	readonly version?: string;
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
	readonly type?: "None" | "SystemAssigned" | "SystemAssigned,UserAssigned";
	readonly userAssignedIdentities?: UserAssignedIdentities;
}
export interface ImageAsset {
	readonly id?: string;
	readonly mimeType?: string;
	readonly unpack?: boolean;
	readonly url?: string;
}
export interface KeyVaultProperties {
	readonly identityClientId?: string;
	readonly keyIdentifier: string;
	readonly keyVaultArmId: string;
}
export interface LabelCategory {
	readonly allowMultiSelect?: boolean;
	readonly classes: LabelCategoryClasses;
	readonly displayName?: string;
}
export interface LabelCategoryClasses {
	readonly [key: string]: LabelClass;
}
export interface LabelClass {
	readonly displayName?: string;
	readonly subclasses?: LabelClassSubclasses;
}
export interface LabelClassSubclasses {
	readonly [key: string]: LabelClass;
}
export interface LabelingDatasetConfiguration {
	readonly assetName: string;
	readonly datasetVersion: string;
	readonly enableIncrementalDatasetRefresh?: boolean;
}
export interface LabelingJobImageProperties {
	readonly annotationType?: "BoundingBox" | "Classification" | "InstanceSegmentation";
	readonly mediaType: "Image" | "Text";
	readonly [key: string]: any;
}
export interface LabelingJobInstructions {
	readonly uri?: string;
}
export interface LabelingJobProperties {
	readonly createdTimeUtc?: string;
	readonly datasetConfiguration: LabelingDatasetConfiguration;
	readonly jobInstructions: LabelingJobInstructions;
	readonly labelCategories: LabelingJobPropertiesLabelCategories;
	readonly labelingJobMediaProperties: LabelingJobImageProperties;
	readonly mlAssistConfiguration?: MLAssistConfiguration;
	readonly progressMetrics?: ProgressMetrics;
	readonly projectId?: string;
	readonly properties?: LabelingJobProperties;
	readonly status?:
		| "CancelRequested"
		| "Canceled"
		| "Completed"
		| "Failed"
		| "Finalizing"
		| "NotResponding"
		| "NotStarted"
		| "Paused"
		| "Preparing"
		| "Provisioning"
		| "Queued"
		| "Running"
		| "Starting";
	readonly statusMessages?: StatusMessage[];
	readonly tags?: LabelingJobPropertiesTags;
}
export interface LabelingJobPropertiesLabelCategories {
	readonly [key: string]: LabelCategory;
}
export interface LabelingJobPropertiesTags {
	readonly [key: string]: string;
}
export interface LinkedServiceProps {
	readonly createdTime?: string;
	readonly linkedServiceResourceId: string;
	readonly linkType?: "Synapse";
	readonly modifiedTime?: string;
}
export interface ListNotebookKeysResult {
	readonly primaryAccessKey?: string;
	readonly secondaryAccessKey?: string;
}
export interface ListWorkspaceKeysResult {
	readonly appInsightsInstrumentationKey?: string;
	readonly containerRegistryCredentials?: RegistryListCredentialsResult;
	readonly userStorageKey?: string;
	readonly userStorageResourceId?: string;
}
export interface MachineLearningServiceError {
	readonly error?: ErrorResponse;
}
export interface MLAssistConfiguration {
	readonly inferencingComputeBinding: ComputeBinding;
	readonly mlAssistEnabled?: boolean;
	readonly modelNamePrefix: string;
	readonly prelabelAccuracyThreshold?: number;
	readonly trainingComputeBinding: ComputeBinding;
}
export interface Model {
	readonly createdTime?: string;
	readonly datasets?: DatasetReference[];
	readonly derivedModelIds?: string[];
	readonly description?: string;
	readonly experimentName?: string;
	readonly framework?: string;
	readonly frameworkVersion?: string;
	readonly id?: string;
	readonly kvTags?: ModelKvTags;
	readonly mimeType: string;
	readonly modifiedTime?: string;
	readonly name: string;
	readonly parentModelId?: string;
	readonly properties?: ModelProperties;
	readonly resourceRequirements?: ContainerResourceRequirements;
	readonly runId?: string;
	readonly sampleInputData?: string;
	readonly sampleOutputData?: string;
	readonly unpack?: boolean;
	readonly url: string;
	readonly version?: number;
}
export interface ModelDockerSectionBaseImageRegistry {
	readonly address?: string;
	readonly password?: string;
	readonly username?: string;
}
export interface ModelEnvironmentDefinitionDocker {
	readonly baseDockerfile?: string;
	readonly baseImage?: string;
	readonly baseImageRegistry?: ModelDockerSectionBaseImageRegistry;
}
export interface ModelEnvironmentDefinitionEnvironmentVariables {
	readonly [key: string]: string;
}
export interface ModelEnvironmentDefinitionPython {
	readonly baseCondaEnvironment?: string;
	readonly condaDependencies?: any;
	readonly interpreterPath?: string;
	readonly userManagedDependencies?: boolean;
}
export interface ModelEnvironmentDefinitionR {
	readonly bioConductorPackages?: string[];
	readonly cranPackages?: RCranPackage[];
	readonly customUrlPackages?: string[];
	readonly gitHubPackages?: RGitHubPackage[];
	readonly rscriptPath?: string;
	readonly rVersion?: string;
	readonly snapshotDate?: string;
	readonly userManaged?: boolean;
}
export interface ModelEnvironmentDefinitionSpark {
	readonly packages?: SparkMavenPackage[];
	readonly precachePackages?: boolean;
	readonly repositories?: string[];
}
export interface ModelKvTags {
	readonly [key: string]: string;
}
export interface ModelProperties {
	readonly [key: string]: string;
}
export interface NodeStateCounts {
	readonly idleNodeCount?: number;
	readonly leavingNodeCount?: number;
	readonly preemptedNodeCount?: number;
	readonly preparingNodeCount?: number;
	readonly runningNodeCount?: number;
	readonly unusableNodeCount?: number;
}
export interface Password {
	readonly name?: string;
	readonly value?: string;
}
export interface PersonalComputeInstanceSettings {
	readonly assignedUser?: AssignedUser;
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
export interface ProgressMetrics {
	readonly completedDatapointCount?: number;
	readonly incrementalDatasetLastRefreshTime?: string;
	readonly skippedDatapointCount?: number;
	readonly totalDatapointCount?: number;
}
export interface RCranPackage {
	readonly name?: string;
	readonly repository?: string;
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
export interface RGitHubPackage {
	readonly authToken?: string;
	readonly repository?: string;
}
export interface ScaleSettings {
	readonly maxNodeCount: number;
	readonly minNodeCount?: number;
	readonly nodeIdleTimeBeforeScaleDown?: string;
}
export interface ScriptReference {
	readonly scriptArguments?: string;
	readonly scriptData?: string;
	readonly scriptSource?: string;
	readonly timeout?: string;
}
export interface ScriptsToExecute {
	readonly creationScript?: ScriptReference;
	readonly startupScript?: ScriptReference;
}
export interface SetupScripts {
	readonly scripts?: ScriptsToExecute;
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
export interface SparkMavenPackage {
	readonly artifact?: string;
	readonly group?: string;
	readonly version?: string;
}
export interface SslConfiguration {
	readonly cert?: string;
	readonly cname?: string;
	readonly key?: string;
	readonly status?: "Auto" | "Disabled" | "Enabled";
}
export interface StatusMessage {
	readonly code?: string;
	readonly createdTimeUtc?: string;
	readonly level?: "Error" | "Information" | "Warning";
	readonly message?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
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
export interface UserAssignedIdentities {
	readonly [key: string]: UserAssignedIdentity;
}
export interface UserAssignedIdentity {
	readonly clientId?: string;
	readonly principalId?: string;
	readonly tenantId?: string;
}
export interface VirtualMachineImage {
	readonly id: string;
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
export interface WorkspaceConnectionProps {
	readonly authType?: string;
	readonly category?: string;
	readonly target?: string;
	readonly value?: string;
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
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly privateLinkCount?: number;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Unknown" | "Updating";
	readonly serviceProvisionedResourceGroup?: string;
	readonly sharedPrivateLinkResources?: SharedPrivateLinkResource[];
	readonly storageAccount?: string;
	readonly workspaceId?: string;
}
export type workspaces_services = workspaces_services_ACI | workspaces_services_AKS;
export default {
	workspaces: workspaces,
	"workspaces/computes": workspaces_computes,
	"workspaces/connections": workspaces_connections,
	"workspaces/labelingJobs": workspaces_labelingJobs,
	"workspaces/linkedServices": workspaces_linkedServices,
	"workspaces/privateEndpointConnections": workspaces_privateEndpointConnections,
	"workspaces/services/ACI": workspaces_services_ACI,
	"workspaces/services/AKS": workspaces_services_AKS,
};
