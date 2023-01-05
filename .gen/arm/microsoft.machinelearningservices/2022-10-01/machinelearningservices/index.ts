import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class workspaces extends ArmResource<workspacesComponentInputs> implements workspacesComponentOutputs {
	constructor(entity: ADKEntity, options: workspacesComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces";
}
export interface workspacesComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces";
}
export interface workspacesComponentInputs {
	readonly identity?: ManagedServiceIdentity;
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
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/batchEndpoints", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/batchEndpoints";
}
export interface workspaces_batchEndpointsComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/batchEndpoints";
}
export interface workspaces_batchEndpointsComponentInputs {
	readonly identity?: ManagedServiceIdentity;
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties: BatchEndpointProperties;
	readonly sku?: Sku;
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
			"2022-10-01",
			options,
		);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/batchEndpoints/deployments";
}
export interface workspaces_batchEndpoints_deploymentsComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/batchEndpoints/deployments";
}
export interface workspaces_batchEndpoints_deploymentsComponentInputs {
	readonly identity?: ManagedServiceIdentity;
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties: BatchDeploymentProperties;
	readonly sku?: Sku;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class workspaces_codes
	extends ArmResource<workspaces_codesComponentInputs>
	implements workspaces_codesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_codesComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/codes", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/codes";
}
export interface workspaces_codesComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/codes";
}
export interface workspaces_codesComponentInputs {
	readonly name: string;
	readonly properties: CodeContainerProperties;
	readonly systemData?: SystemData;
}
export class workspaces_codes_versions
	extends ArmResource<workspaces_codes_versionsComponentInputs>
	implements workspaces_codes_versionsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_codes_versionsComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/codes/versions", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/codes/versions";
}
export interface workspaces_codes_versionsComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/codes/versions";
}
export interface workspaces_codes_versionsComponentInputs {
	readonly name: string;
	readonly properties: CodeVersionProperties;
	readonly systemData?: SystemData;
}
export class workspaces_components
	extends ArmResource<workspaces_componentsComponentInputs>
	implements workspaces_componentsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_componentsComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/components", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/components";
}
export interface workspaces_componentsComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/components";
}
export interface workspaces_componentsComponentInputs {
	readonly name: string;
	readonly properties: ComponentContainerProperties;
	readonly systemData?: SystemData;
}
export class workspaces_components_versions
	extends ArmResource<workspaces_components_versionsComponentInputs>
	implements workspaces_components_versionsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_components_versionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.MachineLearningServices/workspaces/components/versions",
			"2022-10-01",
			options,
		);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/components/versions";
}
export interface workspaces_components_versionsComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/components/versions";
}
export interface workspaces_components_versionsComponentInputs {
	readonly name: string;
	readonly properties: ComponentVersionProperties;
	readonly systemData?: SystemData;
}
export class workspaces_computes
	extends ArmResource<workspaces_computesComponentInputs>
	implements workspaces_computesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_computesComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/computes", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/computes";
}
export interface workspaces_computesComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/computes";
}
export interface workspaces_computesComponentInputs {
	readonly identity?: ManagedServiceIdentity;
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
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/connections", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/connections";
}
export interface workspaces_connectionsComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/connections";
}
export interface workspaces_connectionsComponentInputs {
	readonly name: string;
	readonly properties: WorkspaceConnectionPropertiesV2;
	readonly systemData?: SystemData;
}
export class workspaces_data
	extends ArmResource<workspaces_dataComponentInputs>
	implements workspaces_dataComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_dataComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/data", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/data";
}
export interface workspaces_dataComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/data";
}
export interface workspaces_dataComponentInputs {
	readonly name: string;
	readonly properties: DataContainerProperties;
	readonly systemData?: SystemData;
}
export class workspaces_data_versions
	extends ArmResource<workspaces_data_versionsComponentInputs>
	implements workspaces_data_versionsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_data_versionsComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/data/versions", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/data/versions";
}
export interface workspaces_data_versionsComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/data/versions";
}
export interface workspaces_data_versionsComponentInputs {
	readonly name: string;
	readonly properties: DataVersionBaseProperties;
	readonly systemData?: SystemData;
}
export class workspaces_datastores
	extends ArmResource<workspaces_datastoresComponentInputs>
	implements workspaces_datastoresComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_datastoresComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/datastores", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/datastores";
}
export interface workspaces_datastoresComponentOutputs {
	readonly apiVersion: "2022-10-01";
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
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/environments", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/environments";
}
export interface workspaces_environmentsComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/environments";
}
export interface workspaces_environmentsComponentInputs {
	readonly name: string;
	readonly properties: EnvironmentContainerProperties;
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
			"2022-10-01",
			options,
		);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/environments/versions";
}
export interface workspaces_environments_versionsComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/environments/versions";
}
export interface workspaces_environments_versionsComponentInputs {
	readonly name: string;
	readonly properties: EnvironmentVersionProperties;
	readonly systemData?: SystemData;
}
export class workspaces_jobs
	extends ArmResource<workspaces_jobsComponentInputs>
	implements workspaces_jobsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_jobsComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/jobs", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/jobs";
}
export interface workspaces_jobsComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/jobs";
}
export interface workspaces_jobsComponentInputs {
	readonly name: string;
	readonly properties: JobBaseProperties;
	readonly systemData?: SystemData;
}
export class workspaces_models
	extends ArmResource<workspaces_modelsComponentInputs>
	implements workspaces_modelsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_modelsComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/models", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/models";
}
export interface workspaces_modelsComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/models";
}
export interface workspaces_modelsComponentInputs {
	readonly name: string;
	readonly properties: ModelContainerProperties;
	readonly systemData?: SystemData;
}
export class workspaces_models_versions
	extends ArmResource<workspaces_models_versionsComponentInputs>
	implements workspaces_models_versionsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_models_versionsComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/models/versions", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/models/versions";
}
export interface workspaces_models_versionsComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/models/versions";
}
export interface workspaces_models_versionsComponentInputs {
	readonly name: string;
	readonly properties: ModelVersionProperties;
	readonly systemData?: SystemData;
}
export class workspaces_onlineEndpoints
	extends ArmResource<workspaces_onlineEndpointsComponentInputs>
	implements workspaces_onlineEndpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_onlineEndpointsComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/onlineEndpoints", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/onlineEndpoints";
}
export interface workspaces_onlineEndpointsComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/onlineEndpoints";
}
export interface workspaces_onlineEndpointsComponentInputs {
	readonly identity?: ManagedServiceIdentity;
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties: OnlineEndpointProperties;
	readonly sku?: Sku;
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
			"2022-10-01",
			options,
		);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/onlineEndpoints/deployments";
}
export interface workspaces_onlineEndpoints_deploymentsComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/onlineEndpoints/deployments";
}
export interface workspaces_onlineEndpoints_deploymentsComponentInputs {
	readonly identity?: ManagedServiceIdentity;
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties: OnlineDeploymentProperties;
	readonly sku?: Sku;
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
			"2022-10-01",
			options,
		);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/privateEndpointConnections";
}
export interface workspaces_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/privateEndpointConnections";
}
export interface workspaces_privateEndpointConnectionsComponentInputs {
	readonly identity?: ManagedServiceIdentity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly sku?: Sku;
	readonly systemData?: SystemData;
	readonly tags?: PrivateEndpointConnectionTags;
}
export class workspaces_schedules
	extends ArmResource<workspaces_schedulesComponentInputs>
	implements workspaces_schedulesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_schedulesComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/schedules", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/schedules";
}
export interface workspaces_schedulesComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/schedules";
}
export interface workspaces_schedulesComponentInputs {
	readonly name: string;
	readonly properties: ScheduleProperties;
	readonly systemData?: SystemData;
}
export function listKeys(resource: workspaces): ListWorkspaceKeysResult {
	if (resource.apiVersion !== "2022-10-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.MachineLearningServices/workspaces") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listkeys(resource: workspaces_batchEndpoints): EndpointAuthKeys {
	if (resource.apiVersion !== "2022-10-01") {
		throw new Error(`listkeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.MachineLearningServices/workspaces/batchEndpoints") {
		throw new Error(`listkeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listNodes(resource: workspaces_computes): AmlComputeNodesInformation {
	if (resource.apiVersion !== "2022-10-01") {
		throw new Error(`listNodes is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.MachineLearningServices/workspaces/computes") {
		throw new Error(`listNodes is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listNotebookAccessToken(resource: workspaces): NotebookAccessTokenResult {
	if (resource.apiVersion !== "2022-10-01") {
		throw new Error(`listNotebookAccessToken is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.MachineLearningServices/workspaces") {
		throw new Error(`listNotebookAccessToken is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listNotebookKeys(resource: workspaces): ListNotebookKeysResult {
	if (resource.apiVersion !== "2022-10-01") {
		throw new Error(`listNotebookKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.MachineLearningServices/workspaces") {
		throw new Error(`listNotebookKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listSecrets(resource: workspaces_datastores): DatastoreSecrets {
	if (resource.apiVersion !== "2022-10-01") {
		throw new Error(`listSecrets is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.MachineLearningServices/workspaces/datastores") {
		throw new Error(`listSecrets is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listStorageAccountKeys(resource: workspaces): ListStorageAccountKeysResult {
	if (resource.apiVersion !== "2022-10-01") {
		throw new Error(`listStorageAccountKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.MachineLearningServices/workspaces") {
		throw new Error(`listStorageAccountKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AccountKeyDatastoreSecrets {
	readonly key?: string;
	readonly secretsType: "AccountKey" | "Certificate" | "Sas" | "ServicePrincipal";
}
export interface AksNetworkingConfiguration {
	readonly dnsServiceIP?: string;
	readonly dockerBridgeCidr?: string;
	readonly serviceCidr?: string;
	readonly subnetId?: string;
}
export interface AKSSchemaProperties {
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
	readonly propertyBag?: any;
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
export interface AutoMLJobEnvironmentVariables {
	readonly [key: string]: string;
}
export interface AutoMLJobOutputs {
	readonly [key: string]: JobOutput;
}
export interface AutoMLVertical {
	readonly logVerbosity?: "Critical" | "Debug" | "Error" | "Info" | "NotSet" | "Warning";
	readonly targetColumnName?: string;
	readonly trainingData: MLTableJobInput;
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
export interface BatchDeploymentProperties {
	readonly codeConfiguration?: CodeConfiguration;
	readonly compute?: string;
	readonly description?: string;
	readonly environmentId?: string;
	readonly environmentVariables?: EndpointDeploymentPropertiesBaseEnvironmentVariables;
	readonly errorThreshold?: number;
	readonly loggingLevel?: "Debug" | "Info" | "Warning";
	readonly maxConcurrencyPerInstance?: number;
	readonly miniBatchSize?: number;
	readonly model?: AssetReferenceBase;
	readonly outputAction?: "AppendRow" | "SummaryOnly";
	readonly outputFileName?: string;
	readonly properties?: EndpointDeploymentPropertiesBaseProperties;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Scaling" | "Succeeded" | "Updating";
	readonly resources?: DeploymentResourceConfiguration;
	readonly retrySettings?: BatchRetrySettings;
}
export interface BatchEndpointDefaults {
	readonly deploymentName?: string;
}
export interface BatchEndpointProperties {
	readonly authMode: "AADToken" | "AMLToken" | "Key";
	readonly defaults?: BatchEndpointDefaults;
	readonly description?: string;
	readonly keys?: EndpointAuthKeys;
	readonly properties?: EndpointPropertiesBaseProperties;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly scoringUri?: string;
	readonly swaggerUri?: string;
}
export interface BatchRetrySettings {
	readonly maxRetries?: number;
	readonly timeout?: string;
}
export interface BuildContext {
	readonly contextUri: string;
	readonly dockerfilePath?: string;
}
export interface CertificateDatastoreSecrets {
	readonly certificate?: string;
	readonly secretsType: "AccountKey" | "Certificate" | "Sas" | "ServicePrincipal";
}
export interface ClassificationTrainingSettings {
	readonly allowedTrainingAlgorithms?:
		| "BernoulliNaiveBayes"
		| "DecisionTree"
		| "ExtremeRandomTrees"
		| "GradientBoosting"
		| "KNN"
		| "LightGBM"
		| "LinearSVM"
		| "LogisticRegression"
		| "MultinomialNaiveBayes"
		| "RandomForest"
		| "SGD"
		| "SVM"
		| "XGBoostClassifier"[];
	readonly blockedTrainingAlgorithms?:
		| "BernoulliNaiveBayes"
		| "DecisionTree"
		| "ExtremeRandomTrees"
		| "GradientBoosting"
		| "KNN"
		| "LightGBM"
		| "LinearSVM"
		| "LogisticRegression"
		| "MultinomialNaiveBayes"
		| "RandomForest"
		| "SGD"
		| "SVM"
		| "XGBoostClassifier"[];
	readonly enableDnnTraining?: boolean;
	readonly enableModelExplainability?: boolean;
	readonly enableOnnxCompatibleModels?: boolean;
	readonly enableStackEnsemble?: boolean;
	readonly enableVoteEnsemble?: boolean;
	readonly ensembleModelDownloadTimeout?: string;
	readonly stackEnsembleSettings?: StackEnsembleSettings;
}
export interface CodeConfiguration {
	readonly codeId?: string;
	readonly scoringScript: string;
}
export interface CodeContainerProperties {
	readonly description?: string;
	readonly isArchived?: boolean;
	readonly latestVersion?: string;
	readonly nextVersion?: string;
	readonly properties?: ResourceBaseProperties;
	readonly tags?: ResourceBaseTags;
}
export interface CodeVersionProperties {
	readonly codeUri?: string;
	readonly description?: string;
	readonly isAnonymous?: boolean;
	readonly isArchived?: boolean;
	readonly properties?: ResourceBaseProperties;
	readonly tags?: ResourceBaseTags;
}
export interface ColumnTransformer {
	readonly fields?: string[];
	readonly parameters?: any;
}
export interface CommandJobEnvironmentVariables {
	readonly [key: string]: string;
}
export interface CommandJobInputs {
	readonly [key: string]: JobInput;
}
export interface CommandJobLimits {
	readonly jobLimitsType: "Command" | "Sweep";
	readonly timeout?: string;
}
export interface CommandJobOutputs {
	readonly [key: string]: JobOutput;
}
export interface ComponentContainerProperties {
	readonly description?: string;
	readonly isArchived?: boolean;
	readonly latestVersion?: string;
	readonly nextVersion?: string;
	readonly properties?: ResourceBaseProperties;
	readonly tags?: ResourceBaseTags;
}
export interface ComponentVersionProperties {
	readonly componentSpec?: any;
	readonly description?: string;
	readonly isAnonymous?: boolean;
	readonly isArchived?: boolean;
	readonly properties?: ResourceBaseProperties;
	readonly tags?: ResourceBaseTags;
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
export interface ComputeInstanceApplication {
	readonly displayName?: string;
	readonly endpointUri?: string;
}
export interface ComputeInstanceConnectivityEndpoints {
	readonly privateIpAddress?: string;
	readonly publicIpAddress?: string;
}
export interface ComputeInstanceContainer {
	readonly autosave?: "Local" | "None" | "Remote";
	readonly environment?: ComputeInstanceEnvironmentInfo;
	readonly gpu?: string;
	readonly name?: string;
	readonly network?: "Bridge" | "Host";
	readonly services?: any[];
}
export interface ComputeInstanceCreatedBy {
	readonly userId?: string;
	readonly userName?: string;
	readonly userOrgId?: string;
}
export interface ComputeInstanceDataDisk {
	readonly caching?: "None" | "ReadOnly" | "ReadWrite";
	readonly diskSizeGB?: number;
	readonly lun?: number;
	readonly storageAccountType?: "Premium_LRS" | "Standard_LRS";
}
export interface ComputeInstanceDataMount {
	readonly createdBy?: string;
	readonly error?: string;
	readonly mountAction?: "Mount" | "Unmount";
	readonly mountedOn?: string;
	readonly mountName?: string;
	readonly mountPath?: string;
	readonly mountState?:
		| "MountFailed"
		| "MountRequested"
		| "Mounted"
		| "UnmountFailed"
		| "UnmountRequested"
		| "Unmounted";
	readonly source?: string;
	readonly sourceType?: "Dataset" | "Datastore" | "URI";
}
export interface ComputeInstanceEnvironmentInfo {
	readonly name?: string;
	readonly version?: string;
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
	readonly operationTrigger?: "IdleShutdown" | "Schedule" | "User";
}
export interface ComputeInstanceProperties {
	readonly applications?: ComputeInstanceApplication[];
	readonly applicationSharingPolicy?: "Personal" | "Shared";
	readonly computeInstanceAuthorizationType?: "personal";
	readonly connectivityEndpoints?: ComputeInstanceConnectivityEndpoints;
	readonly containers?: ComputeInstanceContainer[];
	readonly createdBy?: ComputeInstanceCreatedBy;
	readonly dataDisks?: ComputeInstanceDataDisk[];
	readonly dataMounts?: ComputeInstanceDataMount[];
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
	readonly versions?: ComputeInstanceVersion;
	readonly vmSize?: string;
}
export interface ComputeInstanceSshSettings {
	readonly adminPublicKey?: string;
	readonly adminUserName?: string;
	readonly sshPort?: number;
	readonly sshPublicAccess?: "Disabled" | "Enabled";
}
export interface ComputeInstanceVersion {
	readonly runtime?: string;
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
	readonly cron?: CronTrigger;
	readonly id?: string;
	readonly provisioningStatus?: "Completed" | "Failed" | "Provisioning";
	readonly recurrence?: RecurrenceTrigger;
	readonly schedule?: ScheduleBase;
	readonly status?: "Disabled" | "Enabled";
	readonly triggerType?: "Cron" | "Recurrence";
}
export interface ContainerResourceRequirements {
	readonly containerResourceLimits?: ContainerResourceSettings;
	readonly containerResourceRequests?: ContainerResourceSettings;
}
export interface ContainerResourceSettings {
	readonly cpu?: string;
	readonly gpu?: string;
	readonly memory?: string;
}
export interface CosmosDbSettings {
	readonly collectionsThroughput?: number;
}
export interface CronTrigger {
	readonly endTime?: string;
	readonly expression: string;
	readonly startTime?: string;
	readonly timeZone?: string;
	readonly triggerType: "Cron" | "Recurrence";
}
export interface DatabricksProperties {
	readonly databricksAccessToken?: string;
	readonly workspaceUrl?: string;
}
export interface DataContainerProperties {
	readonly dataType: "mltable" | "uri_file" | "uri_folder";
	readonly description?: string;
	readonly isArchived?: boolean;
	readonly latestVersion?: string;
	readonly nextVersion?: string;
	readonly properties?: ResourceBaseProperties;
	readonly tags?: ResourceBaseTags;
}
export interface DataLakeAnalyticsSchemaProperties {
	readonly dataLakeStoreAccountName?: string;
}
export interface DatastoreCredentials {}
export interface DatastoreProperties {
	readonly credentials: DatastoreCredentials;
	readonly description?: string;
	readonly isDefault?: boolean;
	readonly properties?: ResourceBaseProperties;
	readonly tags?: ResourceBaseTags;
}
export interface DatastoreSecrets {}
export interface DataVersionBaseProperties {
	readonly dataUri: string;
	readonly description?: string;
	readonly isAnonymous?: boolean;
	readonly isArchived?: boolean;
	readonly properties?: ResourceBaseProperties;
	readonly tags?: ResourceBaseTags;
}
export interface DeploymentResourceConfiguration {
	readonly instanceCount?: number;
	readonly instanceType?: string;
	readonly properties?: ResourceConfigurationProperties;
}
export interface DistributionConfiguration {}
export interface EarlyTerminationPolicy {
	readonly delayEvaluation?: number;
	readonly evaluationInterval?: number;
}
export interface EncryptionKeyVaultProperties {
	readonly identityClientId?: string;
	readonly keyIdentifier: string;
	readonly keyVaultArmId: string;
}
export interface EncryptionProperty {
	readonly identity?: IdentityForCmk;
	readonly keyVaultProperties: EncryptionKeyVaultProperties;
	readonly status: "Disabled" | "Enabled";
}
export interface EndpointAuthKeys {
	readonly primaryKey?: string;
	readonly secondaryKey?: string;
}
export interface EndpointDeploymentPropertiesBaseEnvironmentVariables {
	readonly [key: string]: string;
}
export interface EndpointDeploymentPropertiesBaseProperties {
	readonly [key: string]: string;
}
export interface EndpointPropertiesBaseProperties {
	readonly [key: string]: string;
}
export interface EnvironmentContainerProperties {
	readonly description?: string;
	readonly isArchived?: boolean;
	readonly latestVersion?: string;
	readonly nextVersion?: string;
	readonly properties?: ResourceBaseProperties;
	readonly tags?: ResourceBaseTags;
}
export interface EnvironmentVersionProperties {
	readonly autoRebuild?: "Disabled" | "OnBaseImageUpdate";
	readonly build?: BuildContext;
	readonly condaFile?: string;
	readonly description?: string;
	readonly environmentType?: "Curated" | "UserCreated";
	readonly image?: string;
	readonly inferenceConfig?: InferenceContainerProperties;
	readonly isAnonymous?: boolean;
	readonly isArchived?: boolean;
	readonly osType?: "Linux" | "Windows";
	readonly properties?: ResourceBaseProperties;
	readonly tags?: ResourceBaseTags;
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
export interface ForecastHorizon {}
export interface ForecastingSettings {
	readonly countryOrRegionForHolidays?: string;
	readonly cvStepSize?: number;
	readonly featureLags?: "Auto" | "None";
	readonly forecastHorizon?: ForecastHorizon;
	readonly frequency?: string;
	readonly seasonality?: Seasonality;
	readonly shortSeriesHandlingConfig?: "Auto" | "Drop" | "None" | "Pad";
	readonly targetAggregateFunction?: "Max" | "Mean" | "Min" | "None" | "Sum";
	readonly targetLags?: TargetLags;
	readonly targetRollingWindowSize?: TargetRollingWindowSize;
	readonly timeColumnName?: string;
	readonly timeSeriesIdColumnNames?: string[];
	readonly useStl?: "None" | "Season" | "SeasonTrend";
}
export interface ForecastingTrainingSettings {
	readonly allowedTrainingAlgorithms?:
		| "Arimax"
		| "AutoArima"
		| "Average"
		| "DecisionTree"
		| "ElasticNet"
		| "ExponentialSmoothing"
		| "ExtremeRandomTrees"
		| "GradientBoosting"
		| "KNN"
		| "LassoLars"
		| "LightGBM"
		| "Naive"
		| "Prophet"
		| "RandomForest"
		| "SGD"
		| "SeasonalAverage"
		| "SeasonalNaive"
		| "TCNForecaster"
		| "XGBoostRegressor"[];
	readonly blockedTrainingAlgorithms?:
		| "Arimax"
		| "AutoArima"
		| "Average"
		| "DecisionTree"
		| "ElasticNet"
		| "ExponentialSmoothing"
		| "ExtremeRandomTrees"
		| "GradientBoosting"
		| "KNN"
		| "LassoLars"
		| "LightGBM"
		| "Naive"
		| "Prophet"
		| "RandomForest"
		| "SGD"
		| "SeasonalAverage"
		| "SeasonalNaive"
		| "TCNForecaster"
		| "XGBoostRegressor"[];
	readonly enableDnnTraining?: boolean;
	readonly enableModelExplainability?: boolean;
	readonly enableOnnxCompatibleModels?: boolean;
	readonly enableStackEnsemble?: boolean;
	readonly enableVoteEnsemble?: boolean;
	readonly ensembleModelDownloadTimeout?: string;
	readonly stackEnsembleSettings?: StackEnsembleSettings;
}
export interface HDInsightProperties {
	readonly address?: string;
	readonly administratorAccount?: VirtualMachineSshCredentials;
	readonly sshPort?: number;
}
export interface IdentityConfiguration {}
export interface IdentityForCmk {
	readonly userAssignedIdentity?: string;
}
export interface ImageLimitSettings {
	readonly maxConcurrentTrials?: number;
	readonly maxTrials?: number;
	readonly timeout?: string;
}
export interface ImageModelDistributionSettingsClassification {
	readonly amsGradient?: string;
	readonly augmentations?: string;
	readonly beta1?: string;
	readonly beta2?: string;
	readonly distributed?: string;
	readonly earlyStopping?: string;
	readonly earlyStoppingDelay?: string;
	readonly earlyStoppingPatience?: string;
	readonly enableOnnxNormalization?: string;
	readonly evaluationFrequency?: string;
	readonly gradientAccumulationStep?: string;
	readonly layersToFreeze?: string;
	readonly learningRate?: string;
	readonly learningRateScheduler?: string;
	readonly modelName?: string;
	readonly momentum?: string;
	readonly nesterov?: string;
	readonly numberOfEpochs?: string;
	readonly numberOfWorkers?: string;
	readonly optimizer?: string;
	readonly randomSeed?: string;
	readonly stepLRGamma?: string;
	readonly stepLRStepSize?: string;
	readonly trainingBatchSize?: string;
	readonly trainingCropSize?: string;
	readonly validationBatchSize?: string;
	readonly validationCropSize?: string;
	readonly validationResizeSize?: string;
	readonly warmupCosineLRCycles?: string;
	readonly warmupCosineLRWarmupEpochs?: string;
	readonly weightDecay?: string;
	readonly weightedLoss?: string;
}
export interface ImageModelDistributionSettingsObjectDetection {
	readonly amsGradient?: string;
	readonly augmentations?: string;
	readonly beta1?: string;
	readonly beta2?: string;
	readonly boxDetectionsPerImage?: string;
	readonly boxScoreThreshold?: string;
	readonly distributed?: string;
	readonly earlyStopping?: string;
	readonly earlyStoppingDelay?: string;
	readonly earlyStoppingPatience?: string;
	readonly enableOnnxNormalization?: string;
	readonly evaluationFrequency?: string;
	readonly gradientAccumulationStep?: string;
	readonly imageSize?: string;
	readonly layersToFreeze?: string;
	readonly learningRate?: string;
	readonly learningRateScheduler?: string;
	readonly maxSize?: string;
	readonly minSize?: string;
	readonly modelName?: string;
	readonly modelSize?: string;
	readonly momentum?: string;
	readonly multiScale?: string;
	readonly nesterov?: string;
	readonly nmsIouThreshold?: string;
	readonly numberOfEpochs?: string;
	readonly numberOfWorkers?: string;
	readonly optimizer?: string;
	readonly randomSeed?: string;
	readonly stepLRGamma?: string;
	readonly stepLRStepSize?: string;
	readonly tileGridSize?: string;
	readonly tileOverlapRatio?: string;
	readonly tilePredictionsNmsThreshold?: string;
	readonly trainingBatchSize?: string;
	readonly validationBatchSize?: string;
	readonly validationIouThreshold?: string;
	readonly validationMetricType?: string;
	readonly warmupCosineLRCycles?: string;
	readonly warmupCosineLRWarmupEpochs?: string;
	readonly weightDecay?: string;
}
export interface ImageModelSettingsClassification {
	readonly advancedSettings?: string;
	readonly amsGradient?: boolean;
	readonly augmentations?: string;
	readonly beta1?: number;
	readonly beta2?: number;
	readonly checkpointFrequency?: number;
	readonly checkpointModel?: MLFlowModelJobInput;
	readonly checkpointRunId?: string;
	readonly distributed?: boolean;
	readonly earlyStopping?: boolean;
	readonly earlyStoppingDelay?: number;
	readonly earlyStoppingPatience?: number;
	readonly enableOnnxNormalization?: boolean;
	readonly evaluationFrequency?: number;
	readonly gradientAccumulationStep?: number;
	readonly layersToFreeze?: number;
	readonly learningRate?: number;
	readonly learningRateScheduler?: "None" | "Step" | "WarmupCosine";
	readonly modelName?: string;
	readonly momentum?: number;
	readonly nesterov?: boolean;
	readonly numberOfEpochs?: number;
	readonly numberOfWorkers?: number;
	readonly optimizer?: "Adam" | "Adamw" | "None" | "Sgd";
	readonly randomSeed?: number;
	readonly stepLRGamma?: number;
	readonly stepLRStepSize?: number;
	readonly trainingBatchSize?: number;
	readonly trainingCropSize?: number;
	readonly validationBatchSize?: number;
	readonly validationCropSize?: number;
	readonly validationResizeSize?: number;
	readonly warmupCosineLRCycles?: number;
	readonly warmupCosineLRWarmupEpochs?: number;
	readonly weightDecay?: number;
	readonly weightedLoss?: number;
}
export interface ImageModelSettingsObjectDetection {
	readonly advancedSettings?: string;
	readonly amsGradient?: boolean;
	readonly augmentations?: string;
	readonly beta1?: number;
	readonly beta2?: number;
	readonly boxDetectionsPerImage?: number;
	readonly boxScoreThreshold?: number;
	readonly checkpointFrequency?: number;
	readonly checkpointModel?: MLFlowModelJobInput;
	readonly checkpointRunId?: string;
	readonly distributed?: boolean;
	readonly earlyStopping?: boolean;
	readonly earlyStoppingDelay?: number;
	readonly earlyStoppingPatience?: number;
	readonly enableOnnxNormalization?: boolean;
	readonly evaluationFrequency?: number;
	readonly gradientAccumulationStep?: number;
	readonly imageSize?: number;
	readonly layersToFreeze?: number;
	readonly learningRate?: number;
	readonly learningRateScheduler?: "None" | "Step" | "WarmupCosine";
	readonly maxSize?: number;
	readonly minSize?: number;
	readonly modelName?: string;
	readonly modelSize?: "ExtraLarge" | "Large" | "Medium" | "None" | "Small";
	readonly momentum?: number;
	readonly multiScale?: boolean;
	readonly nesterov?: boolean;
	readonly nmsIouThreshold?: number;
	readonly numberOfEpochs?: number;
	readonly numberOfWorkers?: number;
	readonly optimizer?: "Adam" | "Adamw" | "None" | "Sgd";
	readonly randomSeed?: number;
	readonly stepLRGamma?: number;
	readonly stepLRStepSize?: number;
	readonly tileGridSize?: string;
	readonly tileOverlapRatio?: number;
	readonly tilePredictionsNmsThreshold?: number;
	readonly trainingBatchSize?: number;
	readonly validationBatchSize?: number;
	readonly validationIouThreshold?: number;
	readonly validationMetricType?: "Coco" | "CocoVoc" | "None" | "Voc";
	readonly warmupCosineLRCycles?: number;
	readonly warmupCosineLRWarmupEpochs?: number;
	readonly weightDecay?: number;
}
export interface ImageSweepSettings {
	readonly earlyTermination?: EarlyTerminationPolicy;
	readonly samplingAlgorithm: "Bayesian" | "Grid" | "Random";
}
export interface InferenceContainerProperties {
	readonly livenessRoute?: Route;
	readonly readinessRoute?: Route;
	readonly scoringRoute?: Route;
}
export interface InstanceResourceSchema {
	readonly [key: string]: string;
}
export interface InstanceTypeSchema {
	readonly nodeSelector?: InstanceTypeSchemaNodeSelector;
	readonly resources?: InstanceTypeSchemaResources;
}
export interface InstanceTypeSchemaNodeSelector {
	readonly [key: string]: string;
}
export interface InstanceTypeSchemaResources {
	readonly limits?: InstanceResourceSchema;
	readonly requests?: InstanceResourceSchema;
}
export interface JobBaseProperties {
	readonly componentId?: string;
	readonly computeId?: string;
	readonly description?: string;
	readonly displayName?: string;
	readonly experimentName?: string;
	readonly identity?: IdentityConfiguration;
	readonly isArchived?: boolean;
	readonly properties?: ResourceBaseProperties;
	readonly services?: JobBaseServices;
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
	readonly tags?: ResourceBaseTags;
}
export interface JobBaseServices {
	readonly [key: string]: JobService;
}
export interface JobInput {
	readonly description?: string;
}
export interface JobOutput {
	readonly description?: string;
}
export interface JobResourceConfiguration {
	readonly dockerArgs?: string;
	readonly instanceCount?: number;
	readonly instanceType?: string;
	readonly properties?: ResourceConfigurationProperties;
	readonly shmSize?: string;
}
export interface JobService {
	readonly endpoint?: string;
	readonly errorMessage?: string;
	readonly jobServiceType?: string;
	readonly port?: number;
	readonly properties?: JobServiceProperties;
	readonly status?: string;
}
export interface JobServiceProperties {
	readonly [key: string]: string;
}
export interface KubernetesProperties {
	readonly defaultInstanceType?: string;
	readonly extensionInstanceReleaseTrain?: string;
	readonly extensionPrincipalId?: string;
	readonly instanceTypes?: KubernetesPropertiesInstanceTypes;
	readonly namespace?: string;
	readonly relayConnectionString?: string;
	readonly serviceBusConnectionString?: string;
	readonly vcName?: string;
}
export interface KubernetesPropertiesInstanceTypes {
	readonly [key: string]: InstanceTypeSchema;
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
export interface ManagedServiceIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type: "None" | "SystemAssigned" | "SystemAssigned,UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: UserAssignedIdentities;
}
export interface MLFlowModelJobInput {
	readonly description?: string;
	readonly jobInputType:
		| "custom_model"
		| "literal"
		| "mlflow_model"
		| "mltable"
		| "triton_model"
		| "uri_file"
		| "uri_folder";
	readonly mode?: "Direct" | "Download" | "EvalDownload" | "EvalMount" | "ReadOnlyMount" | "ReadWriteMount";
	readonly uri: string;
}
export interface MLTableJobInput {
	readonly description?: string;
	readonly jobInputType:
		| "custom_model"
		| "literal"
		| "mlflow_model"
		| "mltable"
		| "triton_model"
		| "uri_file"
		| "uri_folder";
	readonly mode?: "Direct" | "Download" | "EvalDownload" | "EvalMount" | "ReadOnlyMount" | "ReadWriteMount";
	readonly uri: string;
}
export interface ModelContainerProperties {
	readonly description?: string;
	readonly isArchived?: boolean;
	readonly latestVersion?: string;
	readonly nextVersion?: string;
	readonly properties?: ResourceBaseProperties;
	readonly tags?: ResourceBaseTags;
}
export interface ModelVersionFlavors {
	readonly [key: string]: FlavorData;
}
export interface ModelVersionProperties {
	readonly description?: string;
	readonly flavors?: ModelVersionFlavors;
	readonly isAnonymous?: boolean;
	readonly isArchived?: boolean;
	readonly jobName?: string;
	readonly modelType?: string;
	readonly modelUri?: string;
	readonly properties?: ResourceBaseProperties;
	readonly tags?: ResourceBaseTags;
}
export interface NCrossValidations {}
export interface NlpVerticalFeaturizationSettings {
	readonly datasetLanguage?: string;
}
export interface NlpVerticalLimitSettings {
	readonly maxConcurrentTrials?: number;
	readonly maxTrials?: number;
	readonly timeout?: string;
}
export interface NodeStateCounts {
	readonly idleNodeCount?: number;
	readonly leavingNodeCount?: number;
	readonly preemptedNodeCount?: number;
	readonly preparingNodeCount?: number;
	readonly runningNodeCount?: number;
	readonly unusableNodeCount?: number;
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
export interface OnlineDeploymentProperties {
	readonly appInsightsEnabled?: boolean;
	readonly codeConfiguration?: CodeConfiguration;
	readonly description?: string;
	readonly egressPublicNetworkAccess?: "Disabled" | "Enabled";
	readonly environmentId?: string;
	readonly environmentVariables?: EndpointDeploymentPropertiesBaseEnvironmentVariables;
	readonly instanceType?: string;
	readonly livenessProbe?: ProbeSettings;
	readonly model?: string;
	readonly modelMountPath?: string;
	readonly properties?: EndpointDeploymentPropertiesBaseProperties;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Scaling" | "Succeeded" | "Updating";
	readonly readinessProbe?: ProbeSettings;
	readonly requestSettings?: OnlineRequestSettings;
	readonly scaleSettings?: OnlineScaleSettings;
}
export interface OnlineEndpointProperties {
	readonly authMode: "AADToken" | "AMLToken" | "Key";
	readonly compute?: string;
	readonly description?: string;
	readonly keys?: EndpointAuthKeys;
	readonly properties?: EndpointPropertiesBaseProperties;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
	readonly scoringUri?: string;
	readonly swaggerUri?: string;
	readonly traffic?: OnlineEndpointTraffic;
}
export interface OnlineEndpointTraffic {
	readonly [key: string]: number;
}
export interface OnlineRequestSettings {
	readonly maxConcurrentRequestsPerInstance?: number;
	readonly maxQueueWait?: string;
	readonly requestTimeout?: string;
}
export interface OnlineScaleSettings {}
export interface Password {
	readonly name?: string;
	readonly value?: string;
}
export interface PersonalComputeInstanceSettings {
	readonly assignedUser?: AssignedUser;
}
export interface PipelineJobInputs {
	readonly [key: string]: JobInput;
}
export interface PipelineJobJobs {
	readonly [key: string]: any;
}
export interface PipelineJobOutputs {
	readonly [key: string]: JobOutput;
}
export interface PrivateEndpoint {
	readonly id?: string;
	readonly subnetArmId?: string;
}
export interface PrivateEndpointConnection {
	readonly id?: string;
	readonly identity?: ManagedServiceIdentity;
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
export interface RecurrenceSchedule {
	readonly hours: number[];
	readonly minutes: number[];
	readonly monthDays?: number[];
	readonly weekDays?: "Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday" | "Wednesday"[];
}
export interface RecurrenceTrigger {
	readonly endTime?: string;
	readonly frequency: "Day" | "Hour" | "Minute" | "Month" | "Week";
	readonly interval: number;
	readonly schedule?: RecurrenceSchedule;
	readonly startTime?: string;
	readonly timeZone?: string;
	readonly triggerType: "Cron" | "Recurrence";
}
export interface RegistryListCredentialsResult {
	readonly location?: string;
	readonly passwords?: Password[];
	readonly username?: string;
}
export interface RegressionTrainingSettings {
	readonly allowedTrainingAlgorithms?:
		| "DecisionTree"
		| "ElasticNet"
		| "ExtremeRandomTrees"
		| "GradientBoosting"
		| "KNN"
		| "LassoLars"
		| "LightGBM"
		| "RandomForest"
		| "SGD"
		| "XGBoostRegressor"[];
	readonly blockedTrainingAlgorithms?:
		| "DecisionTree"
		| "ElasticNet"
		| "ExtremeRandomTrees"
		| "GradientBoosting"
		| "KNN"
		| "LassoLars"
		| "LightGBM"
		| "RandomForest"
		| "SGD"
		| "XGBoostRegressor"[];
	readonly enableDnnTraining?: boolean;
	readonly enableModelExplainability?: boolean;
	readonly enableOnnxCompatibleModels?: boolean;
	readonly enableStackEnsemble?: boolean;
	readonly enableVoteEnsemble?: boolean;
	readonly ensembleModelDownloadTimeout?: string;
	readonly stackEnsembleSettings?: StackEnsembleSettings;
}
export interface ResourceBaseProperties {
	readonly [key: string]: string;
}
export interface ResourceBaseTags {
	readonly [key: string]: string;
}
export interface ResourceConfigurationProperties {
	readonly [key: string]: any;
}
export interface ResourceId {
	readonly id: string;
}
export interface Route {
	readonly path: string;
	readonly port: number;
}
export interface SamplingAlgorithm {}
export interface SasDatastoreSecrets {
	readonly sasToken?: string;
	readonly secretsType: "AccountKey" | "Certificate" | "Sas" | "ServicePrincipal";
}
export interface ScaleSettings {
	readonly maxNodeCount: number;
	readonly minNodeCount?: number;
	readonly nodeIdleTimeBeforeScaleDown?: string;
}
export interface ScheduleActionBase {}
export interface ScheduleBase {
	readonly id?: string;
	readonly provisioningStatus?: "Completed" | "Failed" | "Provisioning";
	readonly status?: "Disabled" | "Enabled";
}
export interface ScheduleProperties {
	readonly action: ScheduleActionBase;
	readonly description?: string;
	readonly displayName?: string;
	readonly isEnabled?: boolean;
	readonly properties?: ResourceBaseProperties;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly tags?: ResourceBaseTags;
	readonly trigger: TriggerBase;
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
export interface Seasonality {}
export interface ServiceManagedResourcesSettings {
	readonly cosmosDb?: CosmosDbSettings;
}
export interface ServicePrincipalDatastoreSecrets {
	readonly clientSecret?: string;
	readonly secretsType: "AccountKey" | "Certificate" | "Sas" | "ServicePrincipal";
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
	readonly capacity?: number;
	readonly family?: string;
	readonly name: string;
	readonly size?: string;
	readonly tier?: "Basic" | "Free" | "Premium";
}
export interface SslConfiguration {
	readonly cert?: string;
	readonly cname?: string;
	readonly key?: string;
	readonly leafDomainLabel?: string;
	readonly overwriteExistingDomain?: boolean;
	readonly status?: "Auto" | "Disabled" | "Enabled";
}
export interface StackEnsembleSettings {
	readonly stackMetaLearnerKWargs?: any;
	readonly stackMetaLearnerTrainPercentage?: number;
	readonly stackMetaLearnerType?:
		| "ElasticNet"
		| "ElasticNetCV"
		| "LightGBMClassifier"
		| "LightGBMRegressor"
		| "LinearRegression"
		| "LogisticRegression"
		| "LogisticRegressionCV"
		| "None";
}
export interface SweepJobInputs {
	readonly [key: string]: JobInput;
}
export interface SweepJobLimits {
	readonly jobLimitsType: "Command" | "Sweep";
	readonly maxConcurrentTrials?: number;
	readonly maxTotalTrials?: number;
	readonly timeout?: string;
	readonly trialTimeout?: string;
}
export interface SweepJobOutputs {
	readonly [key: string]: JobOutput;
}
export interface SynapseSparkProperties {
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
export interface TableVerticalFeaturizationSettings {
	readonly blockedTransformers?:
		| "CatTargetEncoder"
		| "CountVectorizer"
		| "HashOneHotEncoder"
		| "LabelEncoder"
		| "NaiveBayes"
		| "OneHotEncoder"
		| "TextTargetEncoder"
		| "TfIdf"
		| "WoETargetEncoder"
		| "WordEmbedding"[];
	readonly columnNameAndTypes?: TableVerticalFeaturizationSettingsColumnNameAndTypes;
	readonly datasetLanguage?: string;
	readonly enableDnnFeaturization?: boolean;
	readonly mode?: "Auto" | "Custom" | "Off";
	readonly transformerParams?: TableVerticalFeaturizationSettingsTransformerParams;
}
export interface TableVerticalFeaturizationSettingsColumnNameAndTypes {
	readonly [key: string]: string;
}
export interface TableVerticalFeaturizationSettingsTransformerParams {
	readonly [key: string]: ColumnTransformer[];
}
export interface TableVerticalLimitSettings {
	readonly enableEarlyTermination?: boolean;
	readonly exitScore?: number;
	readonly maxConcurrentTrials?: number;
	readonly maxCoresPerTrial?: number;
	readonly maxTrials?: number;
	readonly timeout?: string;
	readonly trialTimeout?: string;
}
export interface TargetLags {}
export interface TargetRollingWindowSize {}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface TrialComponent {
	readonly codeId?: string;
	readonly command: string;
	readonly distribution?: DistributionConfiguration;
	readonly environmentId: string;
	readonly environmentVariables?: TrialComponentEnvironmentVariables;
	readonly resources?: JobResourceConfiguration;
}
export interface TrialComponentEnvironmentVariables {
	readonly [key: string]: string;
}
export interface TriggerBase {
	readonly endTime?: string;
	readonly startTime?: string;
	readonly timeZone?: string;
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
}
export interface VirtualMachineImage {
	readonly id: string;
}
export interface VirtualMachineSchemaProperties {
	readonly address?: string;
	readonly administratorAccount?: VirtualMachineSshCredentials;
	readonly isNotebookInstanceCompute?: boolean;
	readonly notebookServerPort?: number;
	readonly sshPort?: number;
	readonly virtualMachineSize?: string;
}
export interface VirtualMachineSshCredentials {
	readonly password?: string;
	readonly privateKeyData?: string;
	readonly publicKeyData?: string;
	readonly username?: string;
}
export interface WorkspaceConnectionManagedIdentity {
	readonly clientId?: string;
	readonly resourceId?: string;
}
export interface WorkspaceConnectionPersonalAccessToken {
	readonly pat?: string;
}
export interface WorkspaceConnectionPropertiesV2 {
	readonly category?: "ContainerRegistry" | "Git" | "PythonFeed";
	readonly target?: string;
	readonly value?: string;
	readonly valueFormat?: "JSON";
}
export interface WorkspaceConnectionSharedAccessSignature {
	readonly sas?: string;
}
export interface WorkspaceConnectionUsernamePassword {
	readonly password?: string;
	readonly username?: string;
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
	readonly mlFlowTrackingUri?: string;
	readonly notebookInfo?: NotebookResourceInfo;
	readonly primaryUserAssignedIdentity?: string;
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly privateLinkCount?: number;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Unknown" | "Updating";
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
	readonly serviceManagedResourcesSettings?: ServiceManagedResourcesSettings;
	readonly serviceProvisionedResourceGroup?: string;
	readonly sharedPrivateLinkResources?: SharedPrivateLinkResource[];
	readonly storageAccount?: string;
	readonly storageHnsEnabled?: boolean;
	readonly tenantId?: string;
	readonly v1LegacyMode?: boolean;
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
	"workspaces/components": workspaces_components,
	"workspaces/components/versions": workspaces_components_versions,
	"workspaces/computes": workspaces_computes,
	"workspaces/connections": workspaces_connections,
	"workspaces/data": workspaces_data,
	"workspaces/data/versions": workspaces_data_versions,
	"workspaces/datastores": workspaces_datastores,
	"workspaces/environments": workspaces_environments,
	"workspaces/environments/versions": workspaces_environments_versions,
	"workspaces/jobs": workspaces_jobs,
	"workspaces/models": workspaces_models,
	"workspaces/models/versions": workspaces_models_versions,
	"workspaces/onlineEndpoints": workspaces_onlineEndpoints,
	"workspaces/onlineEndpoints/deployments": workspaces_onlineEndpoints_deployments,
	"workspaces/privateEndpointConnections": workspaces_privateEndpointConnections,
	"workspaces/schedules": workspaces_schedules,
};
