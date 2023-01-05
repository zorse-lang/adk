import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class workspaces extends ArmResource<workspacesComponentInputs> implements workspacesComponentOutputs {
	constructor(entity: ADKEntity, options: workspacesComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces";
}
export interface workspacesComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces";
}
export interface workspacesComponentInputs {
	readonly identity?: Identity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: WorkspaceProperties;
	readonly sku?: Sku;
	readonly systemData?: SystemData;
	readonly tags?: WorkspaceTags;
}
export class workspaces_batchEndpoints
	extends ArmResource<workspaces_batchEndpointsComponentInputs>
	implements workspaces_batchEndpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_batchEndpointsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.MachineLearningServices/workspaces/batchEndpoints",
			"2021-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/batchEndpoints";
}
export interface workspaces_batchEndpointsComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/batchEndpoints";
}
export interface workspaces_batchEndpointsComponentInputs {
	readonly identity?: ResourceIdentity;
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties: BatchEndpoint;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class workspaces_batchEndpoints_deployments
	extends ArmResource<workspaces_batchEndpoints_deploymentsComponentInputs>
	implements workspaces_batchEndpoints_deploymentsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_batchEndpoints_deploymentsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.MachineLearningServices/workspaces/batchEndpoints/deployments",
			"2021-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/batchEndpoints/deployments";
}
export interface workspaces_batchEndpoints_deploymentsComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/batchEndpoints/deployments";
}
export interface workspaces_batchEndpoints_deploymentsComponentInputs {
	readonly identity?: ResourceIdentity;
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties: BatchDeployment;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class workspaces_codes
	extends ArmResource<workspaces_codesComponentInputs>
	implements workspaces_codesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_codesComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/codes", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/codes";
}
export interface workspaces_codesComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/codes";
}
export interface workspaces_codesComponentInputs {
	readonly name: string;
	readonly properties: CodeContainer;
	readonly systemData?: SystemData;
}
export class workspaces_codes_versions
	extends ArmResource<workspaces_codes_versionsComponentInputs>
	implements workspaces_codes_versionsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_codes_versionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.MachineLearningServices/workspaces/codes/versions",
			"2021-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/codes/versions";
}
export interface workspaces_codes_versionsComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/codes/versions";
}
export interface workspaces_codes_versionsComponentInputs {
	readonly name: string;
	readonly properties: CodeVersion;
	readonly systemData?: SystemData;
}
export class workspaces_computes
	extends ArmResource<workspaces_computesComponentInputs>
	implements workspaces_computesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_computesComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/computes", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/computes";
}
export interface workspaces_computesComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/computes";
}
export interface workspaces_computesComponentInputs {
	readonly identity?: Identity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: Compute;
	readonly sku?: Sku;
	readonly systemData?: SystemData;
	readonly tags?: ComputeResourceTags;
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
			"2021-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/connections";
}
export interface workspaces_connectionsComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/connections";
}
export interface workspaces_connectionsComponentInputs {
	readonly name: string;
	readonly properties?: WorkspaceConnectionProps;
}
export class workspaces_data
	extends ArmResource<workspaces_dataComponentInputs>
	implements workspaces_dataComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_dataComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/data", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/data";
}
export interface workspaces_dataComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/data";
}
export interface workspaces_dataComponentInputs {
	readonly name: string;
	readonly properties: DataContainer;
	readonly systemData?: SystemData;
}
export class workspaces_data_versions
	extends ArmResource<workspaces_data_versionsComponentInputs>
	implements workspaces_data_versionsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_data_versionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.MachineLearningServices/workspaces/data/versions",
			"2021-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/data/versions";
}
export interface workspaces_data_versionsComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/data/versions";
}
export interface workspaces_data_versionsComponentInputs {
	readonly name: string;
	readonly properties: DataVersion;
	readonly systemData?: SystemData;
}
export class workspaces_datastores
	extends ArmResource<workspaces_datastoresComponentInputs>
	implements workspaces_datastoresComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_datastoresComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.MachineLearningServices/workspaces/datastores",
			"2021-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/datastores";
}
export interface workspaces_datastoresComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/datastores";
}
export interface workspaces_datastoresComponentInputs {
	readonly name: string;
	readonly properties: DatastoreProperties;
	readonly systemData?: SystemData;
}
export class workspaces_environments
	extends ArmResource<workspaces_environmentsComponentInputs>
	implements workspaces_environmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_environmentsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.MachineLearningServices/workspaces/environments",
			"2021-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/environments";
}
export interface workspaces_environmentsComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/environments";
}
export interface workspaces_environmentsComponentInputs {
	readonly name: string;
	readonly properties: EnvironmentContainer;
	readonly systemData?: SystemData;
}
export class workspaces_environments_versions
	extends ArmResource<workspaces_environments_versionsComponentInputs>
	implements workspaces_environments_versionsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_environments_versionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.MachineLearningServices/workspaces/environments/versions",
			"2021-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/environments/versions";
}
export interface workspaces_environments_versionsComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/environments/versions";
}
export interface workspaces_environments_versionsComponentInputs {
	readonly name: string;
	readonly properties: EnvironmentSpecificationVersion;
	readonly systemData?: SystemData;
}
export class workspaces_jobs
	extends ArmResource<workspaces_jobsComponentInputs>
	implements workspaces_jobsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_jobsComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/jobs", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/jobs";
}
export interface workspaces_jobsComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/jobs";
}
export interface workspaces_jobsComponentInputs {
	readonly name: string;
	readonly properties: JobBase;
	readonly systemData?: SystemData;
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
			"2021-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/labelingJobs";
}
export interface workspaces_labelingJobsComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/labelingJobs";
}
export interface workspaces_labelingJobsComponentInputs {
	readonly name: string;
	readonly properties: LabelingJob;
	readonly systemData?: SystemData;
}
export class workspaces_models
	extends ArmResource<workspaces_modelsComponentInputs>
	implements workspaces_modelsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_modelsComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/models", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/models";
}
export interface workspaces_modelsComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/models";
}
export interface workspaces_modelsComponentInputs {
	readonly name: string;
	readonly properties: ModelContainer;
	readonly systemData?: SystemData;
}
export class workspaces_models_versions
	extends ArmResource<workspaces_models_versionsComponentInputs>
	implements workspaces_models_versionsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_models_versionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.MachineLearningServices/workspaces/models/versions",
			"2021-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/models/versions";
}
export interface workspaces_models_versionsComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/models/versions";
}
export interface workspaces_models_versionsComponentInputs {
	readonly name: string;
	readonly properties: ModelVersion;
	readonly systemData?: SystemData;
}
export class workspaces_onlineEndpoints
	extends ArmResource<workspaces_onlineEndpointsComponentInputs>
	implements workspaces_onlineEndpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_onlineEndpointsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.MachineLearningServices/workspaces/onlineEndpoints",
			"2021-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/onlineEndpoints";
}
export interface workspaces_onlineEndpointsComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/onlineEndpoints";
}
export interface workspaces_onlineEndpointsComponentInputs {
	readonly identity?: ResourceIdentity;
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties: OnlineEndpoint;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class workspaces_onlineEndpoints_deployments
	extends ArmResource<workspaces_onlineEndpoints_deploymentsComponentInputs>
	implements workspaces_onlineEndpoints_deploymentsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_onlineEndpoints_deploymentsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.MachineLearningServices/workspaces/onlineEndpoints/deployments",
			"2021-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/onlineEndpoints/deployments";
}
export interface workspaces_onlineEndpoints_deploymentsComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/onlineEndpoints/deployments";
}
export interface workspaces_onlineEndpoints_deploymentsComponentInputs {
	readonly identity?: ResourceIdentity;
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties: OnlineDeployment;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
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
			"2021-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/privateEndpointConnections";
}
export interface workspaces_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/privateEndpointConnections";
}
export interface workspaces_privateEndpointConnectionsComponentInputs {
	readonly identity?: Identity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly sku?: Sku;
	readonly systemData?: SystemData;
	readonly tags?: PrivateEndpointConnectionTags;
}
export function listKeys(resource: workspaces): ListWorkspaceKeysResult {
	if (resource.apiVersion !== "2021-03-01-preview") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.MachineLearningServices/workspaces") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listkeys(resource: workspaces_batchEndpoints): EndpointAuthKeys {
	if (resource.apiVersion !== "2021-03-01-preview") {
		throw new Error(`listkeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.MachineLearningServices/workspaces/batchEndpoints") {
		throw new Error(`listkeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listNodes(resource: workspaces_computes): AmlComputeNodesInformation {
	if (resource.apiVersion !== "2021-03-01-preview") {
		throw new Error(`listNodes is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.MachineLearningServices/workspaces/computes") {
		throw new Error(`listNodes is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listNotebookAccessToken(resource: workspaces): NotebookAccessTokenResult {
	if (resource.apiVersion !== "2021-03-01-preview") {
		throw new Error(`listNotebookAccessToken is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.MachineLearningServices/workspaces") {
		throw new Error(`listNotebookAccessToken is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listNotebookKeys(resource: workspaces): ListNotebookKeysResult {
	if (resource.apiVersion !== "2021-03-01-preview") {
		throw new Error(`listNotebookKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.MachineLearningServices/workspaces") {
		throw new Error(`listNotebookKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listSecrets(resource: workspaces_datastores): DatastoreSecrets {
	if (resource.apiVersion !== "2021-03-01-preview") {
		throw new Error(`listSecrets is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.MachineLearningServices/workspaces/datastores") {
		throw new Error(`listSecrets is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listStorageAccountKeys(resource: workspaces): ListStorageAccountKeysResult {
	if (resource.apiVersion !== "2021-03-01-preview") {
		throw new Error(`listStorageAccountKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.MachineLearningServices/workspaces") {
		throw new Error(`listStorageAccountKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AccountKeyDatastoreSecrets {
	readonly key?: string;
	readonly secretsType: "AccountKey" | "Certificate" | "None" | "Sas" | "ServicePrincipal" | "SqlAdmin";
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
	readonly clusterPurpose?: "DenseProd" | "DevTest" | "FastProd";
	readonly loadBalancerSubnet?: string;
	readonly loadBalancerType?: "InternalLoadBalancer" | "PublicIp";
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
		| "ComputeInstance"
		| "DataFactory"
		| "DataLakeAnalytics"
		| "Databricks"
		| "HDInsight"
		| "SynapseSpark"
		| "VirtualMachine";
	readonly nextLink?: string;
	readonly nodes?: AmlComputeNodeInformation[];
}
export interface AmlComputeProperties {
	readonly allocationState?: "Resizing" | "Steady";
	readonly allocationStateTransitionTime?: string;
	readonly currentNodeCount?: number;
	readonly enableNodePublicIp?: boolean;
	readonly errors?: ErrorResponse[];
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
export interface AssetReferenceBase {}
export interface AssignedUser {
	readonly objectId: string;
	readonly tenantId: string;
}
export interface AutoPauseProperties {
	readonly delayInMinutes?: number;
	readonly enabled?: boolean;
}
export interface AutoScaleProperties {
	readonly enabled?: boolean;
	readonly maxNodeCount?: number;
	readonly minNodeCount?: number;
}
export interface BatchDeployment {
	readonly codeConfiguration?: CodeConfiguration;
	readonly compute?: ComputeConfiguration;
	readonly description?: string;
	readonly environmentId?: string;
	readonly environmentVariables?: BatchDeploymentEnvironmentVariables;
	readonly errorThreshold?: number;
	readonly loggingLevel?: "Debug" | "Info" | "Warning";
	readonly miniBatchSize?: number;
	readonly model?: AssetReferenceBase;
	readonly outputConfiguration?: BatchOutputConfiguration;
	readonly partitionKeys?: string[];
	readonly properties?: BatchDeploymentProperties;
	readonly retrySettings?: BatchRetrySettings;
}
export interface BatchDeploymentEnvironmentVariables {
	readonly [key: string]: string;
}
export interface BatchDeploymentProperties {
	readonly [key: string]: string;
}
export interface BatchEndpoint {
	readonly authMode?: "AADToken" | "AMLToken" | "Key";
	readonly description?: string;
	readonly keys?: EndpointAuthKeys;
	readonly properties?: BatchEndpointProperties;
	readonly scoringUri?: string;
	readonly swaggerUri?: string;
	readonly traffic?: BatchEndpointTraffic;
}
export interface BatchEndpointProperties {
	readonly [key: string]: string;
}
export interface BatchEndpointTraffic {
	readonly [key: string]: number;
}
export interface BatchOutputConfiguration {
	readonly appendRowFileName?: string;
	readonly outputAction?: "AppendRow" | "SummaryOnly";
}
export interface BatchRetrySettings {
	readonly maxRetries?: number;
	readonly timeout?: string;
}
export interface CertificateDatastoreSecrets {
	readonly certificate?: string;
	readonly secretsType: "AccountKey" | "Certificate" | "None" | "Sas" | "ServicePrincipal" | "SqlAdmin";
}
export interface CodeConfiguration {
	readonly codeId?: string;
	readonly scoringScript: string;
}
export interface CodeContainer {
	readonly description?: string;
	readonly properties?: CodeContainerProperties;
	readonly tags?: CodeContainerTags;
}
export interface CodeContainerProperties {
	readonly [key: string]: string;
}
export interface CodeContainerTags {
	readonly [key: string]: string;
}
export interface CodeVersion {
	readonly datastoreId?: string;
	readonly description?: string;
	readonly isAnonymous?: boolean;
	readonly path: string;
	readonly properties?: CodeVersionProperties;
	readonly tags?: CodeVersionTags;
}
export interface CodeVersionProperties {
	readonly [key: string]: string;
}
export interface CodeVersionTags {
	readonly [key: string]: string;
}
export interface CommandJobEnvironmentVariables {
	readonly [key: string]: string;
}
export interface CommandJobInputDataBindings {
	readonly [key: string]: InputDataBinding;
}
export interface CommandJobOutputDataBindings {
	readonly [key: string]: OutputDataBinding;
}
export interface CommandJobParameters {
	readonly [key: string]: any;
}
export interface Compute {
	readonly computeLocation?: string;
	readonly createdOn?: string;
	readonly description?: string;
	readonly disableLocalAuth?: boolean;
	readonly isAttachedCompute?: boolean;
	readonly modifiedOn?: string;
	readonly provisioningErrors?: ErrorResponse[];
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Unknown" | "Updating";
	readonly resourceId?: string;
}
export interface ComputeConfiguration {
	readonly instanceCount?: number;
	readonly instanceType?: string;
	readonly isLocal?: boolean;
	readonly location?: string;
	readonly properties?: ComputeConfigurationProperties;
	readonly target?: string;
}
export interface ComputeConfigurationProperties {
	readonly [key: string]: string;
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
	readonly enableNodePublicIp?: boolean;
	readonly errors?: ErrorResponse[];
	readonly lastOperation?: ComputeInstanceLastOperation;
	readonly personalComputeInstanceSettings?: PersonalComputeInstanceSettings;
	readonly schedules?: ComputeSchedules;
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
export interface ComputeResourceTags {
	readonly [key: string]: string;
}
export interface ComputeSchedules {
	readonly computeStartStop?: ComputeStartStopSchedule[];
}
export interface ComputeSecrets {}
export interface ComputeStartStopSchedule {
	readonly action?: "Start" | "Stop";
	readonly cron?: Cron;
	readonly id?: string;
	readonly provisioningStatus?: "Completed" | "Failed" | "Provisioning";
	readonly recurrence?: Recurrence;
	readonly status?: "Disabled" | "Enabled";
	readonly triggerType?: "Cron" | "Recurrence";
}
export interface ContainerResourceRequirements {
	readonly cpu?: number;
	readonly cpuLimit?: number;
	readonly fpga?: number;
	readonly gpu?: number;
	readonly memoryInGB?: number;
	readonly memoryInGBLimit?: number;
}
export interface CosmosDbSettings {
	readonly collectionsThroughput?: number;
}
export interface Cron {
	readonly expression?: string;
	readonly startTime?: string;
	readonly timeZone?: string;
}
export interface DatabricksProperties {
	readonly databricksAccessToken?: string;
	readonly workspaceUrl?: string;
}
export interface DataContainer {
	readonly description?: string;
	readonly properties?: DataContainerProperties;
	readonly tags?: DataContainerTags;
}
export interface DataContainerProperties {
	readonly [key: string]: string;
}
export interface DataContainerTags {
	readonly [key: string]: string;
}
export interface DataLakeAnalyticsProperties {
	readonly dataLakeStoreAccountName?: string;
}
export interface DatastoreContents {}
export interface DatastoreCredentials {}
export interface DatastoreProperties {
	readonly contents: DatastoreContents;
	readonly description?: string;
	readonly hasBeenValidated?: boolean;
	readonly isDefault?: boolean;
	readonly linkedInfo?: LinkedInfo;
	readonly properties?: DatastoreProperties;
	readonly tags?: DatastorePropertiesTags;
}
export interface DatastorePropertiesTags {
	readonly [key: string]: string;
}
export interface DatastoreSecrets {}
export interface DataVersion {
	readonly datasetType?: "Dataflow" | "Simple";
	readonly datastoreId?: string;
	readonly description?: string;
	readonly isAnonymous?: boolean;
	readonly path: string;
	readonly properties?: DataVersionProperties;
	readonly tags?: DataVersionTags;
}
export interface DataVersionProperties {
	readonly [key: string]: string;
}
export interface DataVersionTags {
	readonly [key: string]: string;
}
export interface DistributionConfiguration {}
export interface DockerImagePlatform {
	readonly operatingSystemType?: "Linux" | "Windows";
}
export interface DockerSpecification {
	readonly platform?: DockerImagePlatform;
}
export interface EarlyTerminationPolicy {
	readonly delayEvaluation?: number;
	readonly evaluationInterval?: number;
}
export interface EncryptionProperty {
	readonly identity?: IdentityForCmk;
	readonly keyVaultProperties: KeyVaultProperties;
	readonly status: "Disabled" | "Enabled";
}
export interface EndpointAuthKeys {
	readonly primaryKey?: string;
	readonly secondaryKey?: string;
}
export interface EnvironmentContainer {
	readonly description?: string;
	readonly properties?: EnvironmentContainerProperties;
	readonly tags?: EnvironmentContainerTags;
}
export interface EnvironmentContainerProperties {
	readonly [key: string]: string;
}
export interface EnvironmentContainerTags {
	readonly [key: string]: string;
}
export interface EnvironmentSpecificationVersion {
	readonly condaFile?: string;
	readonly description?: string;
	readonly docker?: DockerSpecification;
	readonly environmentSpecificationType?: "Curated" | "UserCreated";
	readonly inferenceContainerProperties?: InferenceContainerProperties;
	readonly isAnonymous?: boolean;
	readonly properties?: EnvironmentSpecificationVersionProperties;
	readonly tags?: EnvironmentSpecificationVersionTags;
}
export interface EnvironmentSpecificationVersionProperties {
	readonly [key: string]: string;
}
export interface EnvironmentSpecificationVersionTags {
	readonly [key: string]: string;
}
export interface ErrorAdditionalInfo {
	readonly info?: any;
	readonly type?: string;
}
export interface ErrorDetail {
	readonly additionalInfo?: ErrorAdditionalInfo[];
	readonly code?: string;
	readonly details?: ErrorDetail[];
	readonly message?: string;
	readonly target?: string;
}
export interface ErrorResponse {
	readonly error?: ErrorDetail;
}
export interface FlavorData {
	readonly data?: FlavorData;
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
export interface IdentityConfiguration {}
export interface IdentityForCmk {
	readonly userAssignedIdentity?: string;
}
export interface InferenceContainerProperties {
	readonly livenessRoute?: Route;
	readonly readinessRoute?: Route;
	readonly scoringRoute?: Route;
}
export interface InputDataBinding {
	readonly dataId?: string;
	readonly mode?:
		| "Direct"
		| "Download"
		| "EvalDownload"
		| "EvalMount"
		| "Mount"
		| "ReadOnlyMount"
		| "ReadWriteMount"
		| "Upload";
	readonly pathOnCompute?: string;
}
export interface JobBase {
	readonly description?: string;
	readonly interactionEndpoints?: JobBaseInteractionEndpoints;
	readonly properties?: JobBaseProperties;
	readonly provisioningState?: "Canceled" | "Failed" | "InProgress" | "Succeeded";
	readonly tags?: JobBaseTags;
}
export interface JobBaseInteractionEndpoints {
	readonly [key: string]: JobEndpoint;
}
export interface JobBaseProperties {
	readonly [key: string]: string;
}
export interface JobBaseTags {
	readonly [key: string]: string;
}
export interface JobEndpoint {
	readonly endpoint?: string;
	readonly jobEndpointType?: string;
	readonly port?: number;
	readonly properties?: JobEndpointProperties;
}
export interface JobEndpointProperties {
	readonly [key: string]: string;
}
export interface JobOutput {
	readonly datastoreId?: string;
	readonly path?: string;
}
export interface KeyVaultProperties {
	readonly identityClientId?: string;
	readonly keyIdentifier: string;
	readonly keyVaultArmId: string;
}
export interface LabelCategory {
	readonly allowMultiSelect?: boolean;
	readonly classes?: LabelCategoryClasses;
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
	readonly assetName?: string;
	readonly datasetVersion?: string;
	readonly incrementalDatasetRefreshEnabled?: boolean;
}
export interface LabelingJob {
	readonly createdTimeUtc?: string;
	readonly datasetConfiguration?: LabelingDatasetConfiguration;
	readonly description?: string;
	readonly interactionEndpoints?: LabelingJobInteractionEndpoints;
	readonly jobInstructions?: LabelingJobInstructions;
	readonly jobType: "Command" | "Labeling" | "Sweep";
	readonly labelCategories?: LabelingJobLabelCategories;
	readonly labelingJobMediaProperties?: LabelingJobMediaProperties;
	readonly mlAssistConfiguration?: MLAssistConfiguration;
	readonly progressMetrics?: ProgressMetrics;
	readonly projectId?: string;
	readonly properties?: LabelingJobProperties;
	readonly provisioningState?: "Canceled" | "Failed" | "InProgress" | "Succeeded";
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
		| "Starting"
		| "Unknown";
	readonly statusMessages?: StatusMessage[];
	readonly tags?: LabelingJobTags;
}
export interface LabelingJobInstructions {
	readonly uri?: string;
}
export interface LabelingJobInteractionEndpoints {
	readonly [key: string]: JobEndpoint;
}
export interface LabelingJobLabelCategories {
	readonly [key: string]: LabelCategory;
}
export interface LabelingJobMediaProperties {}
export interface LabelingJobProperties {
	readonly [key: string]: string;
}
export interface LabelingJobTags {
	readonly [key: string]: string;
}
export interface LinkedInfo {
	readonly linkedId?: string;
	readonly linkedResourceName?: string;
	readonly origin?: "Synapse";
}
export interface ListNotebookKeysResult {
	readonly primaryAccessKey?: string;
	readonly secondaryAccessKey?: string;
}
export interface ListStorageAccountKeysResult {
	readonly userStorageKey?: string;
}
export interface ListWorkspaceKeysResult {
	readonly appInsightsInstrumentationKey?: string;
	readonly containerRegistryCredentials?: RegistryListCredentialsResult;
	readonly notebookAccessKeys?: ListNotebookKeysResult;
	readonly userStorageKey?: string;
	readonly userStorageResourceId?: string;
}
export interface MLAssistConfiguration {
	readonly inferencingComputeBinding?: ComputeConfiguration;
	readonly mlAssistEnabled?: boolean;
	readonly trainingComputeBinding?: ComputeConfiguration;
}
export interface ModelContainer {
	readonly description?: string;
	readonly properties?: ModelContainerProperties;
	readonly tags?: ModelContainerTags;
}
export interface ModelContainerProperties {
	readonly [key: string]: string;
}
export interface ModelContainerTags {
	readonly [key: string]: string;
}
export interface ModelVersion {
	readonly datastoreId?: string;
	readonly description?: string;
	readonly flavors?: ModelVersionFlavors;
	readonly isAnonymous?: boolean;
	readonly path: string;
	readonly properties?: ModelVersionProperties;
	readonly tags?: ModelVersionTags;
}
export interface ModelVersionFlavors {
	readonly [key: string]: FlavorData;
}
export interface ModelVersionProperties {
	readonly [key: string]: string;
}
export interface ModelVersionTags {
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
export interface NoneDatastoreSecrets {
	readonly secretsType: "AccountKey" | "Certificate" | "None" | "Sas" | "ServicePrincipal" | "SqlAdmin";
}
export interface NotebookAccessTokenResult {
	readonly accessToken?: string;
	readonly expiresIn?: number;
	readonly hostName?: string;
	readonly notebookResourceId?: string;
	readonly publicDns?: string;
	readonly refreshToken?: string;
	readonly scope?: string;
	readonly tokenType?: string;
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
export interface Objective {
	readonly goal: "Maximize" | "Minimize";
	readonly primaryMetric: string;
}
export interface OnlineDeployment {
	readonly appInsightsEnabled?: boolean;
	readonly codeConfiguration?: CodeConfiguration;
	readonly description?: string;
	readonly environmentId?: string;
	readonly environmentVariables?: OnlineDeploymentEnvironmentVariables;
	readonly livenessProbe?: ProbeSettings;
	readonly model?: AssetReferenceBase;
	readonly properties?: OnlineDeploymentProperties;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Scaling" | "Succeeded" | "Updating";
	readonly requestSettings?: OnlineRequestSettings;
	readonly scaleSettings?: OnlineScaleSettings;
}
export interface OnlineDeploymentEnvironmentVariables {
	readonly [key: string]: string;
}
export interface OnlineDeploymentProperties {
	readonly [key: string]: string;
}
export interface OnlineEndpoint {
	readonly authMode: "AADToken" | "AMLToken" | "Key";
	readonly description?: string;
	readonly keys?: EndpointAuthKeys;
	readonly properties?: OnlineEndpointProperties;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly scoringUri?: string;
	readonly swaggerUri?: string;
	readonly target?: string;
	readonly traffic?: OnlineEndpointTraffic;
}
export interface OnlineEndpointProperties {
	readonly [key: string]: string;
}
export interface OnlineEndpointTraffic {
	readonly [key: string]: number;
}
export interface OnlineRequestSettings {
	readonly maxConcurrentRequestsPerInstance?: number;
	readonly maxQueueWait?: string;
	readonly requestTimeout?: string;
}
export interface OnlineScaleSettings {
	readonly maxInstances?: number;
	readonly minInstances?: number;
}
export interface OutputDataBinding {
	readonly datastoreId?: string;
	readonly mode?:
		| "Direct"
		| "Download"
		| "EvalDownload"
		| "EvalMount"
		| "Mount"
		| "ReadOnlyMount"
		| "ReadWriteMount"
		| "Upload";
	readonly pathOnCompute?: string;
	readonly pathOnDatastore?: string;
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
	readonly subnetArmId?: string;
}
export interface PrivateEndpointConnection {
	readonly id?: string;
	readonly identity?: Identity;
	readonly location?: string;
	readonly name?: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly sku?: Sku;
	readonly systemData?: SystemData;
	readonly tags?: PrivateEndpointConnectionTags;
	readonly type?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded";
}
export interface PrivateEndpointConnectionTags {
	readonly [key: string]: string;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: "Approved" | "Disconnected" | "Pending" | "Rejected" | "Timeout";
}
export interface ProbeSettings {
	readonly failureThreshold?: number;
	readonly initialDelay?: string;
	readonly period?: string;
	readonly successThreshold?: number;
	readonly timeout?: string;
}
export interface ProgressMetrics {
	readonly completedDatapointCount?: number;
	readonly incrementalDatasetLastRefreshTime?: string;
	readonly skippedDatapointCount?: number;
	readonly totalDatapointCount?: number;
}
export interface Recurrence {
	readonly frequency?: "Day" | "Hour" | "Minute" | "Month" | "NotSpecified" | "Second" | "Week" | "Year";
	readonly interval?: number;
	readonly schedule?: RecurrenceSchedule;
	readonly startTime?: string;
	readonly timeZone?: string;
}
export interface RecurrenceSchedule {
	readonly hours?: number[];
	readonly minutes?: number[];
	readonly weekDays?: "Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday"[];
}
export interface RegistryListCredentialsResult {
	readonly location?: string;
	readonly passwords?: Password[];
	readonly username?: string;
}
export interface ResourceId {
	readonly id: string;
}
export interface ResourceIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned" | "SystemAssigned,UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: ResourceIdentityUserAssignedIdentities;
}
export interface ResourceIdentityUserAssignedIdentities {
	readonly [key: string]: UserAssignedIdentityMeta;
}
export interface Route {
	readonly path: string;
	readonly port: number;
}
export interface SasDatastoreSecrets {
	readonly sasToken?: string;
	readonly secretsType: "AccountKey" | "Certificate" | "None" | "Sas" | "ServicePrincipal" | "SqlAdmin";
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
export interface ServiceManagedResourcesSettings {
	readonly cosmosDb?: CosmosDbSettings;
}
export interface ServicePrincipalDatastoreSecrets {
	readonly clientSecret?: string;
	readonly secretsType: "AccountKey" | "Certificate" | "None" | "Sas" | "ServicePrincipal" | "SqlAdmin";
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
export interface SqlAdminDatastoreSecrets {
	readonly password?: string;
	readonly secretsType: "AccountKey" | "Certificate" | "None" | "Sas" | "ServicePrincipal" | "SqlAdmin";
}
export interface SslConfiguration {
	readonly cert?: string;
	readonly cname?: string;
	readonly key?: string;
	readonly leafDomainLabel?: string;
	readonly overwriteExistingDomain?: boolean;
	readonly status?: "Auto" | "Disabled" | "Enabled";
}
export interface StatusMessage {
	readonly code?: string;
	readonly createdTimeUtc?: string;
	readonly level?: "Error" | "Information" | "Warning";
	readonly message?: string;
}
export interface SweepJobSearchSpace {
	readonly [key: string]: any;
}
export interface SynapseSparkPoolPropertiesProperties {
	readonly autoPauseProperties?: AutoPauseProperties;
	readonly autoScaleProperties?: AutoScaleProperties;
	readonly nodeCount?: number;
	readonly nodeSize?: string;
	readonly nodeSizeFamily?: string;
	readonly poolName?: string;
	readonly resourceGroup?: string;
	readonly sparkVersion?: string;
	readonly subscriptionId?: string;
	readonly workspaceName?: string;
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
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface TrialComponent {
	readonly codeId?: string;
	readonly command: string;
	readonly distribution?: DistributionConfiguration;
	readonly environmentId?: string;
	readonly environmentVariables?: TrialComponentEnvironmentVariables;
	readonly inputDataBindings?: TrialComponentInputDataBindings;
	readonly outputDataBindings?: TrialComponentOutputDataBindings;
	readonly timeout?: string;
}
export interface TrialComponentEnvironmentVariables {
	readonly [key: string]: string;
}
export interface TrialComponentInputDataBindings {
	readonly [key: string]: InputDataBinding;
}
export interface TrialComponentOutputDataBindings {
	readonly [key: string]: OutputDataBinding;
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
export interface UserAssignedIdentityMeta {
	readonly clientId?: string;
	readonly principalId?: string;
}
export interface VirtualMachineImage {
	readonly id: string;
}
export interface VirtualMachineProperties {
	readonly address?: string;
	readonly administratorAccount?: VirtualMachineSshCredentials;
	readonly isNotebookInstanceCompute?: boolean;
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
	readonly valueFormat?: "JSON";
}
export interface WorkspaceProperties {
	readonly allowPublicAccessWhenBehindVnet?: boolean;
	readonly applicationInsights?: string;
	readonly containerRegistry?: string;
	readonly description?: string;
	readonly discoveryUrl?: string;
	readonly encryption?: EncryptionProperty;
	readonly friendlyName?: string;
	readonly hbiWorkspace?: boolean;
	readonly imageBuildCompute?: string;
	readonly keyVault?: string;
	readonly notebookInfo?: NotebookResourceInfo;
	readonly primaryUserAssignedIdentity?: string;
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly privateLinkCount?: number;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Unknown" | "Updating";
	readonly serviceManagedResourcesSettings?: ServiceManagedResourcesSettings;
	readonly serviceProvisionedResourceGroup?: string;
	readonly sharedPrivateLinkResources?: SharedPrivateLinkResource[];
	readonly storageAccount?: string;
	readonly tenantId?: string;
	readonly workspaceId?: string;
}
export interface WorkspaceTags {
	readonly [key: string]: string;
}
export default {
	workspaces: workspaces,
	"workspaces/batchEndpoints": workspaces_batchEndpoints,
	"workspaces/batchEndpoints/deployments": workspaces_batchEndpoints_deployments,
	"workspaces/codes": workspaces_codes,
	"workspaces/codes/versions": workspaces_codes_versions,
	"workspaces/computes": workspaces_computes,
	"workspaces/connections": workspaces_connections,
	"workspaces/data": workspaces_data,
	"workspaces/data/versions": workspaces_data_versions,
	"workspaces/datastores": workspaces_datastores,
	"workspaces/environments": workspaces_environments,
	"workspaces/environments/versions": workspaces_environments_versions,
	"workspaces/jobs": workspaces_jobs,
	"workspaces/labelingJobs": workspaces_labelingJobs,
	"workspaces/models": workspaces_models,
	"workspaces/models/versions": workspaces_models_versions,
	"workspaces/onlineEndpoints": workspaces_onlineEndpoints,
	"workspaces/onlineEndpoints/deployments": workspaces_onlineEndpoints_deployments,
	"workspaces/privateEndpointConnections": workspaces_privateEndpointConnections,
};
