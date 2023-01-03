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
	readonly identity?: Identity | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: WorkspaceProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: WorkspaceTags | undefined;
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
	readonly identity?: ResourceIdentity | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: BatchEndpoint;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly identity?: ResourceIdentity | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: BatchDeployment;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly systemData?: SystemData | undefined;
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
	readonly systemData?: SystemData | undefined;
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
	readonly identity?: Identity | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: Compute | undefined;
	readonly sku?: Sku | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ComputeResourceTags | undefined;
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
	readonly properties?: WorkspaceConnectionProps | undefined;
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
	readonly systemData?: SystemData | undefined;
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
	readonly systemData?: SystemData | undefined;
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
	readonly systemData?: SystemData | undefined;
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
	readonly systemData?: SystemData | undefined;
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
	readonly systemData?: SystemData | undefined;
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
	readonly systemData?: SystemData | undefined;
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
	readonly systemData?: SystemData | undefined;
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
	readonly systemData?: SystemData | undefined;
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
	readonly systemData?: SystemData | undefined;
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
	readonly identity?: ResourceIdentity | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: OnlineEndpoint;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly identity?: ResourceIdentity | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: OnlineDeployment;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly identity?: Identity | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: PrivateEndpointConnectionTags | undefined;
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
	readonly key?: string | undefined;
	readonly secretsType: "AccountKey" | "Certificate" | "None" | "Sas" | "ServicePrincipal" | "SqlAdmin";
}
export interface AksNetworkingConfiguration {
	readonly dnsServiceIP?: string | undefined;
	readonly dockerBridgeCidr?: string | undefined;
	readonly serviceCidr?: string | undefined;
	readonly subnetId?: string | undefined;
}
export interface AKSProperties {
	readonly agentCount?: number | undefined;
	readonly agentVmSize?: string | undefined;
	readonly aksNetworkingConfiguration?: AksNetworkingConfiguration | undefined;
	readonly clusterFqdn?: string | undefined;
	readonly clusterPurpose?: ("DenseProd" | "DevTest" | "FastProd") | undefined;
	readonly loadBalancerSubnet?: string | undefined;
	readonly loadBalancerType?: ("InternalLoadBalancer" | "PublicIp") | undefined;
	readonly sslConfiguration?: SslConfiguration | undefined;
	readonly systemServices?: SystemService[] | undefined;
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
		| "ComputeInstance"
		| "DataFactory"
		| "DataLakeAnalytics"
		| "Databricks"
		| "HDInsight"
		| "SynapseSpark"
		| "VirtualMachine";
	readonly nextLink?: string | undefined;
	readonly nodes?: AmlComputeNodeInformation[] | undefined;
}
export interface AmlComputeProperties {
	readonly allocationState?: ("Resizing" | "Steady") | undefined;
	readonly allocationStateTransitionTime?: string | undefined;
	readonly currentNodeCount?: number | undefined;
	readonly enableNodePublicIp?: boolean | undefined;
	readonly errors?: ErrorResponse[] | undefined;
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
export interface AssetReferenceBase {}
export interface AssignedUser {
	readonly objectId: string;
	readonly tenantId: string;
}
export interface AutoPauseProperties {
	readonly delayInMinutes?: number | undefined;
	readonly enabled?: boolean | undefined;
}
export interface AutoScaleProperties {
	readonly enabled?: boolean | undefined;
	readonly maxNodeCount?: number | undefined;
	readonly minNodeCount?: number | undefined;
}
export interface BatchDeployment {
	readonly codeConfiguration?: CodeConfiguration | undefined;
	readonly compute?: ComputeConfiguration | undefined;
	readonly description?: string | undefined;
	readonly environmentId?: string | undefined;
	readonly environmentVariables?: BatchDeploymentEnvironmentVariables | undefined;
	readonly errorThreshold?: number | undefined;
	readonly loggingLevel?: ("Debug" | "Info" | "Warning") | undefined;
	readonly miniBatchSize?: number | undefined;
	readonly model?: AssetReferenceBase | undefined;
	readonly outputConfiguration?: BatchOutputConfiguration | undefined;
	readonly partitionKeys?: string[] | undefined;
	readonly properties?: BatchDeploymentProperties | undefined;
	readonly retrySettings?: BatchRetrySettings | undefined;
}
export interface BatchDeploymentEnvironmentVariables {
	readonly "[ key: string ]"?: string | undefined;
}
export interface BatchDeploymentProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface BatchEndpoint {
	readonly authMode?: ("AADToken" | "AMLToken" | "Key") | undefined;
	readonly description?: string | undefined;
	readonly keys?: EndpointAuthKeys | undefined;
	readonly properties?: BatchEndpointProperties | undefined;
	readonly scoringUri?: string | undefined;
	readonly swaggerUri?: string | undefined;
	readonly traffic?: BatchEndpointTraffic | undefined;
}
export interface BatchEndpointProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface BatchEndpointTraffic {
	readonly "[ key: string ]"?: number | undefined;
}
export interface BatchOutputConfiguration {
	readonly appendRowFileName?: string | undefined;
	readonly outputAction?: ("AppendRow" | "SummaryOnly") | undefined;
}
export interface BatchRetrySettings {
	readonly maxRetries?: number | undefined;
	readonly timeout?: string | undefined;
}
export interface CertificateDatastoreSecrets {
	readonly certificate?: string | undefined;
	readonly secretsType: "AccountKey" | "Certificate" | "None" | "Sas" | "ServicePrincipal" | "SqlAdmin";
}
export interface CodeConfiguration {
	readonly codeId?: string | undefined;
	readonly scoringScript: string;
}
export interface CodeContainer {
	readonly description?: string | undefined;
	readonly properties?: CodeContainerProperties | undefined;
	readonly tags?: CodeContainerTags | undefined;
}
export interface CodeContainerProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface CodeContainerTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface CodeVersion {
	readonly datastoreId?: string | undefined;
	readonly description?: string | undefined;
	readonly isAnonymous?: boolean | undefined;
	readonly path: string;
	readonly properties?: CodeVersionProperties | undefined;
	readonly tags?: CodeVersionTags | undefined;
}
export interface CodeVersionProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface CodeVersionTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface CommandJobEnvironmentVariables {
	readonly "[ key: string ]"?: string | undefined;
}
export interface CommandJobInputDataBindings {
	readonly "[ key: string ]"?: InputDataBinding | undefined;
}
export interface CommandJobOutputDataBindings {
	readonly "[ key: string ]"?: OutputDataBinding | undefined;
}
export interface CommandJobParameters {
	readonly "[ key: string ]"?: any | undefined;
}
export interface Compute {
	readonly computeLocation?: string | undefined;
	readonly createdOn?: string | undefined;
	readonly description?: string | undefined;
	readonly disableLocalAuth?: boolean | undefined;
	readonly isAttachedCompute?: boolean | undefined;
	readonly modifiedOn?: string | undefined;
	readonly provisioningErrors?: ErrorResponse[] | undefined;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Unknown" | "Updating")
		| undefined;
	readonly resourceId?: string | undefined;
}
export interface ComputeConfiguration {
	readonly instanceCount?: number | undefined;
	readonly instanceType?: string | undefined;
	readonly isLocal?: boolean | undefined;
	readonly location?: string | undefined;
	readonly properties?: ComputeConfigurationProperties | undefined;
	readonly target?: string | undefined;
}
export interface ComputeConfigurationProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ComputeInstanceApplication {
	readonly displayName?: string | undefined;
	readonly endpointUri?: string | undefined;
}
export interface ComputeInstanceConnectivityEndpoints {
	readonly privateIpAddress?: string | undefined;
	readonly publicIpAddress?: string | undefined;
}
export interface ComputeInstanceCreatedBy {
	readonly userId?: string | undefined;
	readonly userName?: string | undefined;
	readonly userOrgId?: string | undefined;
}
export interface ComputeInstanceLastOperation {
	readonly operationName?: ("Create" | "Delete" | "Reimage" | "Restart" | "Start" | "Stop") | undefined;
	readonly operationStatus?:
		| (
				| "CreateFailed"
				| "DeleteFailed"
				| "InProgress"
				| "ReimageFailed"
				| "RestartFailed"
				| "StartFailed"
				| "StopFailed"
				| "Succeeded"
		  )
		| undefined;
	readonly operationTime?: string | undefined;
}
export interface ComputeInstanceProperties {
	readonly applications?: ComputeInstanceApplication[] | undefined;
	readonly applicationSharingPolicy?: ("Personal" | "Shared") | undefined;
	readonly computeInstanceAuthorizationType?: "personal" | undefined;
	readonly connectivityEndpoints?: ComputeInstanceConnectivityEndpoints | undefined;
	readonly createdBy?: ComputeInstanceCreatedBy | undefined;
	readonly enableNodePublicIp?: boolean | undefined;
	readonly errors?: ErrorResponse[] | undefined;
	readonly lastOperation?: ComputeInstanceLastOperation | undefined;
	readonly personalComputeInstanceSettings?: PersonalComputeInstanceSettings | undefined;
	readonly schedules?: ComputeSchedules | undefined;
	readonly setupScripts?: SetupScripts | undefined;
	readonly sshSettings?: ComputeInstanceSshSettings | undefined;
	readonly state?:
		| (
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
				| "UserSetupFailed"
		  )
		| undefined;
	readonly subnet?: ResourceId | undefined;
	readonly vmSize?: string | undefined;
}
export interface ComputeInstanceSshSettings {
	readonly adminPublicKey?: string | undefined;
	readonly adminUserName?: string | undefined;
	readonly sshPort?: number | undefined;
	readonly sshPublicAccess?: ("Disabled" | "Enabled") | undefined;
}
export interface ComputeResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ComputeSchedules {
	readonly computeStartStop?: ComputeStartStopSchedule[] | undefined;
}
export interface ComputeSecrets {}
export interface ComputeStartStopSchedule {
	readonly action?: ("Start" | "Stop") | undefined;
	readonly cron?: Cron | undefined;
	readonly id?: string | undefined;
	readonly provisioningStatus?: ("Completed" | "Failed" | "Provisioning") | undefined;
	readonly recurrence?: Recurrence | undefined;
	readonly status?: ("Disabled" | "Enabled") | undefined;
	readonly triggerType?: ("Cron" | "Recurrence") | undefined;
}
export interface ContainerResourceRequirements {
	readonly cpu?: number | undefined;
	readonly cpuLimit?: number | undefined;
	readonly fpga?: number | undefined;
	readonly gpu?: number | undefined;
	readonly memoryInGB?: number | undefined;
	readonly memoryInGBLimit?: number | undefined;
}
export interface CosmosDbSettings {
	readonly collectionsThroughput?: number | undefined;
}
export interface Cron {
	readonly expression?: string | undefined;
	readonly startTime?: string | undefined;
	readonly timeZone?: string | undefined;
}
export interface DatabricksProperties {
	readonly databricksAccessToken?: string | undefined;
	readonly workspaceUrl?: string | undefined;
}
export interface DataContainer {
	readonly description?: string | undefined;
	readonly properties?: DataContainerProperties | undefined;
	readonly tags?: DataContainerTags | undefined;
}
export interface DataContainerProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface DataContainerTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface DataLakeAnalyticsProperties {
	readonly dataLakeStoreAccountName?: string | undefined;
}
export interface DatastoreContents {}
export interface DatastoreCredentials {}
export interface DatastoreProperties {
	readonly contents: DatastoreContents;
	readonly description?: string | undefined;
	readonly hasBeenValidated?: boolean | undefined;
	readonly isDefault?: boolean | undefined;
	readonly linkedInfo?: LinkedInfo | undefined;
	readonly properties?: DatastoreProperties | undefined;
	readonly tags?: DatastorePropertiesTags | undefined;
}
export interface DatastorePropertiesTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface DatastoreSecrets {}
export interface DataVersion {
	readonly datasetType?: ("Dataflow" | "Simple") | undefined;
	readonly datastoreId?: string | undefined;
	readonly description?: string | undefined;
	readonly isAnonymous?: boolean | undefined;
	readonly path: string;
	readonly properties?: DataVersionProperties | undefined;
	readonly tags?: DataVersionTags | undefined;
}
export interface DataVersionProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface DataVersionTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface DistributionConfiguration {}
export interface DockerImagePlatform {
	readonly operatingSystemType?: ("Linux" | "Windows") | undefined;
}
export interface DockerSpecification {
	readonly platform?: DockerImagePlatform | undefined;
}
export interface EarlyTerminationPolicy {
	readonly delayEvaluation?: number | undefined;
	readonly evaluationInterval?: number | undefined;
}
export interface EncryptionProperty {
	readonly identity?: IdentityForCmk | undefined;
	readonly keyVaultProperties: KeyVaultProperties;
	readonly status: "Disabled" | "Enabled";
}
export interface EndpointAuthKeys {
	readonly primaryKey?: string | undefined;
	readonly secondaryKey?: string | undefined;
}
export interface EnvironmentContainer {
	readonly description?: string | undefined;
	readonly properties?: EnvironmentContainerProperties | undefined;
	readonly tags?: EnvironmentContainerTags | undefined;
}
export interface EnvironmentContainerProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface EnvironmentContainerTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface EnvironmentSpecificationVersion {
	readonly condaFile?: string | undefined;
	readonly description?: string | undefined;
	readonly docker?: DockerSpecification | undefined;
	readonly environmentSpecificationType?: ("Curated" | "UserCreated") | undefined;
	readonly inferenceContainerProperties?: InferenceContainerProperties | undefined;
	readonly isAnonymous?: boolean | undefined;
	readonly properties?: EnvironmentSpecificationVersionProperties | undefined;
	readonly tags?: EnvironmentSpecificationVersionTags | undefined;
}
export interface EnvironmentSpecificationVersionProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface EnvironmentSpecificationVersionTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ErrorAdditionalInfo {
	readonly info?: any | undefined;
	readonly type?: string | undefined;
}
export interface ErrorDetail {
	readonly additionalInfo?: ErrorAdditionalInfo[] | undefined;
	readonly code?: string | undefined;
	readonly details?: ErrorDetail[] | undefined;
	readonly message?: string | undefined;
	readonly target?: string | undefined;
}
export interface ErrorResponse {
	readonly error?: ErrorDetail | undefined;
}
export interface FlavorData {
	readonly data?: FlavorData | undefined;
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
export interface IdentityConfiguration {}
export interface IdentityForCmk {
	readonly userAssignedIdentity?: string | undefined;
}
export interface InferenceContainerProperties {
	readonly livenessRoute?: Route | undefined;
	readonly readinessRoute?: Route | undefined;
	readonly scoringRoute?: Route | undefined;
}
export interface InputDataBinding {
	readonly dataId?: string | undefined;
	readonly mode?:
		| ("Direct" | "Download" | "EvalDownload" | "EvalMount" | "Mount" | "ReadOnlyMount" | "ReadWriteMount" | "Upload")
		| undefined;
	readonly pathOnCompute?: string | undefined;
}
export interface JobBase {
	readonly description?: string | undefined;
	readonly interactionEndpoints?: JobBaseInteractionEndpoints | undefined;
	readonly properties?: JobBaseProperties | undefined;
	readonly provisioningState?: ("Canceled" | "Failed" | "InProgress" | "Succeeded") | undefined;
	readonly tags?: JobBaseTags | undefined;
}
export interface JobBaseInteractionEndpoints {
	readonly "[ key: string ]"?: JobEndpoint | undefined;
}
export interface JobBaseProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface JobBaseTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface JobEndpoint {
	readonly endpoint?: string | undefined;
	readonly jobEndpointType?: string | undefined;
	readonly port?: number | undefined;
	readonly properties?: JobEndpointProperties | undefined;
}
export interface JobEndpointProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface JobOutput {
	readonly datastoreId?: string | undefined;
	readonly path?: string | undefined;
}
export interface KeyVaultProperties {
	readonly identityClientId?: string | undefined;
	readonly keyIdentifier: string;
	readonly keyVaultArmId: string;
}
export interface LabelCategory {
	readonly allowMultiSelect?: boolean | undefined;
	readonly classes?: LabelCategoryClasses | undefined;
	readonly displayName?: string | undefined;
}
export interface LabelCategoryClasses {
	readonly "[ key: string ]"?: LabelClass | undefined;
}
export interface LabelClass {
	readonly displayName?: string | undefined;
	readonly subclasses?: LabelClassSubclasses | undefined;
}
export interface LabelClassSubclasses {
	readonly "[ key: string ]"?: LabelClass | undefined;
}
export interface LabelingDatasetConfiguration {
	readonly assetName?: string | undefined;
	readonly datasetVersion?: string | undefined;
	readonly incrementalDatasetRefreshEnabled?: boolean | undefined;
}
export interface LabelingJob {
	readonly createdTimeUtc?: string | undefined;
	readonly datasetConfiguration?: LabelingDatasetConfiguration | undefined;
	readonly description?: string | undefined;
	readonly interactionEndpoints?: LabelingJobInteractionEndpoints | undefined;
	readonly jobInstructions?: LabelingJobInstructions | undefined;
	readonly jobType: "Command" | "Labeling" | "Sweep";
	readonly labelCategories?: LabelingJobLabelCategories | undefined;
	readonly labelingJobMediaProperties?: LabelingJobMediaProperties | undefined;
	readonly mlAssistConfiguration?: MLAssistConfiguration | undefined;
	readonly progressMetrics?: ProgressMetrics | undefined;
	readonly projectId?: string | undefined;
	readonly properties?: LabelingJobProperties | undefined;
	readonly provisioningState?: ("Canceled" | "Failed" | "InProgress" | "Succeeded") | undefined;
	readonly status?:
		| (
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
				| "Unknown"
		  )
		| undefined;
	readonly statusMessages?: StatusMessage[] | undefined;
	readonly tags?: LabelingJobTags | undefined;
}
export interface LabelingJobInstructions {
	readonly uri?: string | undefined;
}
export interface LabelingJobInteractionEndpoints {
	readonly "[ key: string ]"?: JobEndpoint | undefined;
}
export interface LabelingJobLabelCategories {
	readonly "[ key: string ]"?: LabelCategory | undefined;
}
export interface LabelingJobMediaProperties {}
export interface LabelingJobProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface LabelingJobTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface LinkedInfo {
	readonly linkedId?: string | undefined;
	readonly linkedResourceName?: string | undefined;
	readonly origin?: "Synapse" | undefined;
}
export interface ListNotebookKeysResult {
	readonly primaryAccessKey?: string | undefined;
	readonly secondaryAccessKey?: string | undefined;
}
export interface ListStorageAccountKeysResult {
	readonly userStorageKey?: string | undefined;
}
export interface ListWorkspaceKeysResult {
	readonly appInsightsInstrumentationKey?: string | undefined;
	readonly containerRegistryCredentials?: RegistryListCredentialsResult | undefined;
	readonly notebookAccessKeys?: ListNotebookKeysResult | undefined;
	readonly userStorageKey?: string | undefined;
	readonly userStorageResourceId?: string | undefined;
}
export interface MLAssistConfiguration {
	readonly inferencingComputeBinding?: ComputeConfiguration | undefined;
	readonly mlAssistEnabled?: boolean | undefined;
	readonly trainingComputeBinding?: ComputeConfiguration | undefined;
}
export interface ModelContainer {
	readonly description?: string | undefined;
	readonly properties?: ModelContainerProperties | undefined;
	readonly tags?: ModelContainerTags | undefined;
}
export interface ModelContainerProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ModelContainerTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ModelVersion {
	readonly datastoreId?: string | undefined;
	readonly description?: string | undefined;
	readonly flavors?: ModelVersionFlavors | undefined;
	readonly isAnonymous?: boolean | undefined;
	readonly path: string;
	readonly properties?: ModelVersionProperties | undefined;
	readonly tags?: ModelVersionTags | undefined;
}
export interface ModelVersionFlavors {
	readonly "[ key: string ]"?: FlavorData | undefined;
}
export interface ModelVersionProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ModelVersionTags {
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
export interface NoneDatastoreSecrets {
	readonly secretsType: "AccountKey" | "Certificate" | "None" | "Sas" | "ServicePrincipal" | "SqlAdmin";
}
export interface NotebookAccessTokenResult {
	readonly accessToken?: string | undefined;
	readonly expiresIn?: number | undefined;
	readonly hostName?: string | undefined;
	readonly notebookResourceId?: string | undefined;
	readonly publicDns?: string | undefined;
	readonly refreshToken?: string | undefined;
	readonly scope?: string | undefined;
	readonly tokenType?: string | undefined;
}
export interface NotebookPreparationError {
	readonly errorMessage?: string | undefined;
	readonly statusCode?: number | undefined;
}
export interface NotebookResourceInfo {
	readonly fqdn?: string | undefined;
	readonly notebookPreparationError?: NotebookPreparationError | undefined;
	readonly resourceId?: string | undefined;
}
export interface Objective {
	readonly goal: "Maximize" | "Minimize";
	readonly primaryMetric: string;
}
export interface OnlineDeployment {
	readonly appInsightsEnabled?: boolean | undefined;
	readonly codeConfiguration?: CodeConfiguration | undefined;
	readonly description?: string | undefined;
	readonly environmentId?: string | undefined;
	readonly environmentVariables?: OnlineDeploymentEnvironmentVariables | undefined;
	readonly livenessProbe?: ProbeSettings | undefined;
	readonly model?: AssetReferenceBase | undefined;
	readonly properties?: OnlineDeploymentProperties | undefined;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "Scaling" | "Succeeded" | "Updating")
		| undefined;
	readonly requestSettings?: OnlineRequestSettings | undefined;
	readonly scaleSettings?: OnlineScaleSettings | undefined;
}
export interface OnlineDeploymentEnvironmentVariables {
	readonly "[ key: string ]"?: string | undefined;
}
export interface OnlineDeploymentProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface OnlineEndpoint {
	readonly authMode: "AADToken" | "AMLToken" | "Key";
	readonly description?: string | undefined;
	readonly keys?: EndpointAuthKeys | undefined;
	readonly properties?: OnlineEndpointProperties | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly scoringUri?: string | undefined;
	readonly swaggerUri?: string | undefined;
	readonly target?: string | undefined;
	readonly traffic?: OnlineEndpointTraffic | undefined;
}
export interface OnlineEndpointProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface OnlineEndpointTraffic {
	readonly "[ key: string ]"?: number | undefined;
}
export interface OnlineRequestSettings {
	readonly maxConcurrentRequestsPerInstance?: number | undefined;
	readonly maxQueueWait?: string | undefined;
	readonly requestTimeout?: string | undefined;
}
export interface OnlineScaleSettings {
	readonly maxInstances?: number | undefined;
	readonly minInstances?: number | undefined;
}
export interface OutputDataBinding {
	readonly datastoreId?: string | undefined;
	readonly mode?:
		| ("Direct" | "Download" | "EvalDownload" | "EvalMount" | "Mount" | "ReadOnlyMount" | "ReadWriteMount" | "Upload")
		| undefined;
	readonly pathOnCompute?: string | undefined;
	readonly pathOnDatastore?: string | undefined;
}
export interface Password {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface PersonalComputeInstanceSettings {
	readonly assignedUser?: AssignedUser | undefined;
}
export interface PrivateEndpoint {
	readonly id?: string | undefined;
	readonly subnetArmId?: string | undefined;
}
export interface PrivateEndpointConnection {
	readonly id?: string | undefined;
	readonly identity?: Identity | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: PrivateEndpointConnectionTags | undefined;
	readonly type?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint | undefined;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded") | undefined;
}
export interface PrivateEndpointConnectionTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string | undefined;
	readonly description?: string | undefined;
	readonly status?: ("Approved" | "Disconnected" | "Pending" | "Rejected" | "Timeout") | undefined;
}
export interface ProbeSettings {
	readonly failureThreshold?: number | undefined;
	readonly initialDelay?: string | undefined;
	readonly period?: string | undefined;
	readonly successThreshold?: number | undefined;
	readonly timeout?: string | undefined;
}
export interface ProgressMetrics {
	readonly completedDatapointCount?: number | undefined;
	readonly incrementalDatasetLastRefreshTime?: string | undefined;
	readonly skippedDatapointCount?: number | undefined;
	readonly totalDatapointCount?: number | undefined;
}
export interface Recurrence {
	readonly frequency?: ("Day" | "Hour" | "Minute" | "Month" | "NotSpecified" | "Second" | "Week" | "Year") | undefined;
	readonly interval?: number | undefined;
	readonly schedule?: RecurrenceSchedule | undefined;
	readonly startTime?: string | undefined;
	readonly timeZone?: string | undefined;
}
export interface RecurrenceSchedule {
	readonly hours?: number[] | undefined;
	readonly minutes?: number[] | undefined;
	readonly weekDays?: ("Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday"[]) | undefined;
}
export interface RegistryListCredentialsResult {
	readonly location?: string | undefined;
	readonly passwords?: Password[] | undefined;
	readonly username?: string | undefined;
}
export interface ResourceId {
	readonly id: string;
}
export interface ResourceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned" | "SystemAssigned,UserAssigned" | "UserAssigned") | undefined;
	readonly userAssignedIdentities?: ResourceIdentityUserAssignedIdentities | undefined;
}
export interface ResourceIdentityUserAssignedIdentities {
	readonly "[ key: string ]"?: UserAssignedIdentityMeta | undefined;
}
export interface Route {
	readonly path: string;
	readonly port: number;
}
export interface SasDatastoreSecrets {
	readonly sasToken?: string | undefined;
	readonly secretsType: "AccountKey" | "Certificate" | "None" | "Sas" | "ServicePrincipal" | "SqlAdmin";
}
export interface ScaleSettings {
	readonly maxNodeCount: number;
	readonly minNodeCount?: number | undefined;
	readonly nodeIdleTimeBeforeScaleDown?: string | undefined;
}
export interface ScriptReference {
	readonly scriptArguments?: string | undefined;
	readonly scriptData?: string | undefined;
	readonly scriptSource?: string | undefined;
	readonly timeout?: string | undefined;
}
export interface ScriptsToExecute {
	readonly creationScript?: ScriptReference | undefined;
	readonly startupScript?: ScriptReference | undefined;
}
export interface ServiceManagedResourcesSettings {
	readonly cosmosDb?: CosmosDbSettings | undefined;
}
export interface ServicePrincipalDatastoreSecrets {
	readonly clientSecret?: string | undefined;
	readonly secretsType: "AccountKey" | "Certificate" | "None" | "Sas" | "ServicePrincipal" | "SqlAdmin";
}
export interface SetupScripts {
	readonly scripts?: ScriptsToExecute | undefined;
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
export interface SqlAdminDatastoreSecrets {
	readonly password?: string | undefined;
	readonly secretsType: "AccountKey" | "Certificate" | "None" | "Sas" | "ServicePrincipal" | "SqlAdmin";
}
export interface SslConfiguration {
	readonly cert?: string | undefined;
	readonly cname?: string | undefined;
	readonly key?: string | undefined;
	readonly leafDomainLabel?: string | undefined;
	readonly overwriteExistingDomain?: boolean | undefined;
	readonly status?: ("Auto" | "Disabled" | "Enabled") | undefined;
}
export interface StatusMessage {
	readonly code?: string | undefined;
	readonly createdTimeUtc?: string | undefined;
	readonly level?: ("Error" | "Information" | "Warning") | undefined;
	readonly message?: string | undefined;
}
export interface SweepJobSearchSpace {
	readonly "[ key: string ]"?: any | undefined;
}
export interface SynapseSparkPoolPropertiesProperties {
	readonly autoPauseProperties?: AutoPauseProperties | undefined;
	readonly autoScaleProperties?: AutoScaleProperties | undefined;
	readonly nodeCount?: number | undefined;
	readonly nodeSize?: string | undefined;
	readonly nodeSizeFamily?: string | undefined;
	readonly poolName?: string | undefined;
	readonly resourceGroup?: string | undefined;
	readonly sparkVersion?: string | undefined;
	readonly subscriptionId?: string | undefined;
	readonly workspaceName?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface SystemService {
	readonly publicIpAddress?: string | undefined;
	readonly systemServiceType?: string | undefined;
	readonly version?: string | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface TrialComponent {
	readonly codeId?: string | undefined;
	readonly command: string;
	readonly distribution?: DistributionConfiguration | undefined;
	readonly environmentId?: string | undefined;
	readonly environmentVariables?: TrialComponentEnvironmentVariables | undefined;
	readonly inputDataBindings?: TrialComponentInputDataBindings | undefined;
	readonly outputDataBindings?: TrialComponentOutputDataBindings | undefined;
	readonly timeout?: string | undefined;
}
export interface TrialComponentEnvironmentVariables {
	readonly "[ key: string ]"?: string | undefined;
}
export interface TrialComponentInputDataBindings {
	readonly "[ key: string ]"?: InputDataBinding | undefined;
}
export interface TrialComponentOutputDataBindings {
	readonly "[ key: string ]"?: OutputDataBinding | undefined;
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
export interface UserAssignedIdentityMeta {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export interface VirtualMachineImage {
	readonly id: string;
}
export interface VirtualMachineProperties {
	readonly address?: string | undefined;
	readonly administratorAccount?: VirtualMachineSshCredentials | undefined;
	readonly isNotebookInstanceCompute?: boolean | undefined;
	readonly sshPort?: number | undefined;
	readonly virtualMachineSize?: string | undefined;
}
export interface VirtualMachineSshCredentials {
	readonly password?: string | undefined;
	readonly privateKeyData?: string | undefined;
	readonly publicKeyData?: string | undefined;
	readonly username?: string | undefined;
}
export interface WorkspaceConnectionProps {
	readonly authType?: string | undefined;
	readonly category?: string | undefined;
	readonly target?: string | undefined;
	readonly value?: string | undefined;
	readonly valueFormat?: "JSON" | undefined;
}
export interface WorkspaceProperties {
	readonly allowPublicAccessWhenBehindVnet?: boolean | undefined;
	readonly applicationInsights?: string | undefined;
	readonly containerRegistry?: string | undefined;
	readonly description?: string | undefined;
	readonly discoveryUrl?: string | undefined;
	readonly encryption?: EncryptionProperty | undefined;
	readonly friendlyName?: string | undefined;
	readonly hbiWorkspace?: boolean | undefined;
	readonly imageBuildCompute?: string | undefined;
	readonly keyVault?: string | undefined;
	readonly notebookInfo?: NotebookResourceInfo | undefined;
	readonly primaryUserAssignedIdentity?: string | undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly privateLinkCount?: number | undefined;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Unknown" | "Updating")
		| undefined;
	readonly serviceManagedResourcesSettings?: ServiceManagedResourcesSettings | undefined;
	readonly serviceProvisionedResourceGroup?: string | undefined;
	readonly sharedPrivateLinkResources?: SharedPrivateLinkResource[] | undefined;
	readonly storageAccount?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly workspaceId?: string | undefined;
}
export interface WorkspaceTags {
	readonly "[ key: string ]"?: string | undefined;
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
