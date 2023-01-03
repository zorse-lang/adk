import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class workspaces extends ArmResource<workspacesComponentInputs> implements workspacesComponentOutputs {
	constructor(entity: ADKEntity, options: workspacesComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces", "2022-05-01", options);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces";
}
export interface workspacesComponentOutputs {
	readonly apiVersion: "2022-05-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces";
}
export interface workspacesComponentInputs {
	readonly identity?: ManagedServiceIdentity | undefined;
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
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/batchEndpoints", "2022-05-01", options);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/batchEndpoints";
}
export interface workspaces_batchEndpointsComponentOutputs {
	readonly apiVersion: "2022-05-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/batchEndpoints";
}
export interface workspaces_batchEndpointsComponentInputs {
	readonly identity?: ManagedServiceIdentity | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: BatchEndpointProperties;
	readonly sku?: Sku | undefined;
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
			"2022-05-01",
			options,
		);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/batchEndpoints/deployments";
}
export interface workspaces_batchEndpoints_deploymentsComponentOutputs {
	readonly apiVersion: "2022-05-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/batchEndpoints/deployments";
}
export interface workspaces_batchEndpoints_deploymentsComponentInputs {
	readonly identity?: ManagedServiceIdentity | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: BatchDeploymentProperties;
	readonly sku?: Sku | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class workspaces_codes
	extends ArmResource<workspaces_codesComponentInputs>
	implements workspaces_codesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_codesComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/codes", "2022-05-01", options);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/codes";
}
export interface workspaces_codesComponentOutputs {
	readonly apiVersion: "2022-05-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/codes";
}
export interface workspaces_codesComponentInputs {
	readonly name: string;
	readonly properties: CodeContainerProperties;
	readonly systemData?: SystemData | undefined;
}
export class workspaces_codes_versions
	extends ArmResource<workspaces_codes_versionsComponentInputs>
	implements workspaces_codes_versionsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_codes_versionsComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/codes/versions", "2022-05-01", options);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/codes/versions";
}
export interface workspaces_codes_versionsComponentOutputs {
	readonly apiVersion: "2022-05-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/codes/versions";
}
export interface workspaces_codes_versionsComponentInputs {
	readonly name: string;
	readonly properties: CodeVersionProperties;
	readonly systemData?: SystemData | undefined;
}
export class workspaces_components
	extends ArmResource<workspaces_componentsComponentInputs>
	implements workspaces_componentsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_componentsComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/components", "2022-05-01", options);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/components";
}
export interface workspaces_componentsComponentOutputs {
	readonly apiVersion: "2022-05-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/components";
}
export interface workspaces_componentsComponentInputs {
	readonly name: string;
	readonly properties: ComponentContainerProperties;
	readonly systemData?: SystemData | undefined;
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
			"2022-05-01",
			options,
		);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/components/versions";
}
export interface workspaces_components_versionsComponentOutputs {
	readonly apiVersion: "2022-05-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/components/versions";
}
export interface workspaces_components_versionsComponentInputs {
	readonly name: string;
	readonly properties: ComponentVersionProperties;
	readonly systemData?: SystemData | undefined;
}
export class workspaces_computes
	extends ArmResource<workspaces_computesComponentInputs>
	implements workspaces_computesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_computesComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/computes", "2022-05-01", options);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/computes";
}
export interface workspaces_computesComponentOutputs {
	readonly apiVersion: "2022-05-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/computes";
}
export interface workspaces_computesComponentInputs {
	readonly identity?: ManagedServiceIdentity | undefined;
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
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/connections", "2022-05-01", options);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/connections";
}
export interface workspaces_connectionsComponentOutputs {
	readonly apiVersion: "2022-05-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/connections";
}
export interface workspaces_connectionsComponentInputs {
	readonly name: string;
	readonly properties: WorkspaceConnectionPropertiesV2;
	readonly systemData?: SystemData | undefined;
}
export class workspaces_data
	extends ArmResource<workspaces_dataComponentInputs>
	implements workspaces_dataComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_dataComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/data", "2022-05-01", options);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/data";
}
export interface workspaces_dataComponentOutputs {
	readonly apiVersion: "2022-05-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/data";
}
export interface workspaces_dataComponentInputs {
	readonly name: string;
	readonly properties: DataContainerProperties;
	readonly systemData?: SystemData | undefined;
}
export class workspaces_data_versions
	extends ArmResource<workspaces_data_versionsComponentInputs>
	implements workspaces_data_versionsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_data_versionsComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/data/versions", "2022-05-01", options);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/data/versions";
}
export interface workspaces_data_versionsComponentOutputs {
	readonly apiVersion: "2022-05-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/data/versions";
}
export interface workspaces_data_versionsComponentInputs {
	readonly name: string;
	readonly properties: DataVersionBaseProperties;
	readonly systemData?: SystemData | undefined;
}
export class workspaces_datastores
	extends ArmResource<workspaces_datastoresComponentInputs>
	implements workspaces_datastoresComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_datastoresComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/datastores", "2022-05-01", options);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/datastores";
}
export interface workspaces_datastoresComponentOutputs {
	readonly apiVersion: "2022-05-01";
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
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/environments", "2022-05-01", options);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/environments";
}
export interface workspaces_environmentsComponentOutputs {
	readonly apiVersion: "2022-05-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/environments";
}
export interface workspaces_environmentsComponentInputs {
	readonly name: string;
	readonly properties: EnvironmentContainerProperties;
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
			"2022-05-01",
			options,
		);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/environments/versions";
}
export interface workspaces_environments_versionsComponentOutputs {
	readonly apiVersion: "2022-05-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/environments/versions";
}
export interface workspaces_environments_versionsComponentInputs {
	readonly name: string;
	readonly properties: EnvironmentVersionProperties;
	readonly systemData?: SystemData | undefined;
}
export class workspaces_jobs
	extends ArmResource<workspaces_jobsComponentInputs>
	implements workspaces_jobsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_jobsComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/jobs", "2022-05-01", options);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/jobs";
}
export interface workspaces_jobsComponentOutputs {
	readonly apiVersion: "2022-05-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/jobs";
}
export interface workspaces_jobsComponentInputs {
	readonly name: string;
	readonly properties: JobBaseProperties;
	readonly systemData?: SystemData | undefined;
}
export class workspaces_models
	extends ArmResource<workspaces_modelsComponentInputs>
	implements workspaces_modelsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_modelsComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/models", "2022-05-01", options);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/models";
}
export interface workspaces_modelsComponentOutputs {
	readonly apiVersion: "2022-05-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/models";
}
export interface workspaces_modelsComponentInputs {
	readonly name: string;
	readonly properties: ModelContainerProperties;
	readonly systemData?: SystemData | undefined;
}
export class workspaces_models_versions
	extends ArmResource<workspaces_models_versionsComponentInputs>
	implements workspaces_models_versionsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_models_versionsComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/models/versions", "2022-05-01", options);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/models/versions";
}
export interface workspaces_models_versionsComponentOutputs {
	readonly apiVersion: "2022-05-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/models/versions";
}
export interface workspaces_models_versionsComponentInputs {
	readonly name: string;
	readonly properties: ModelVersionProperties;
	readonly systemData?: SystemData | undefined;
}
export class workspaces_onlineEndpoints
	extends ArmResource<workspaces_onlineEndpointsComponentInputs>
	implements workspaces_onlineEndpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_onlineEndpointsComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/onlineEndpoints", "2022-05-01", options);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/onlineEndpoints";
}
export interface workspaces_onlineEndpointsComponentOutputs {
	readonly apiVersion: "2022-05-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/onlineEndpoints";
}
export interface workspaces_onlineEndpointsComponentInputs {
	readonly identity?: ManagedServiceIdentity | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: OnlineEndpointProperties;
	readonly sku?: Sku | undefined;
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
			"2022-05-01",
			options,
		);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/onlineEndpoints/deployments";
}
export interface workspaces_onlineEndpoints_deploymentsComponentOutputs {
	readonly apiVersion: "2022-05-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/onlineEndpoints/deployments";
}
export interface workspaces_onlineEndpoints_deploymentsComponentInputs {
	readonly identity?: ManagedServiceIdentity | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: OnlineDeploymentProperties;
	readonly sku?: Sku | undefined;
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
			"2022-05-01",
			options,
		);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/privateEndpointConnections";
}
export interface workspaces_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2022-05-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/privateEndpointConnections";
}
export interface workspaces_privateEndpointConnectionsComponentInputs {
	readonly identity?: ManagedServiceIdentity | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: PrivateEndpointConnectionTags | undefined;
}
export function listKeys(resource: workspaces): ListWorkspaceKeysResult {
	if (resource.apiVersion !== "2022-05-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.MachineLearningServices/workspaces") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listkeys(resource: workspaces_batchEndpoints): EndpointAuthKeys {
	if (resource.apiVersion !== "2022-05-01") {
		throw new Error(`listkeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.MachineLearningServices/workspaces/batchEndpoints") {
		throw new Error(`listkeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listNodes(resource: workspaces_computes): AmlComputeNodesInformation {
	if (resource.apiVersion !== "2022-05-01") {
		throw new Error(`listNodes is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.MachineLearningServices/workspaces/computes") {
		throw new Error(`listNodes is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listNotebookAccessToken(resource: workspaces): NotebookAccessTokenResult {
	if (resource.apiVersion !== "2022-05-01") {
		throw new Error(`listNotebookAccessToken is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.MachineLearningServices/workspaces") {
		throw new Error(`listNotebookAccessToken is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listNotebookKeys(resource: workspaces): ListNotebookKeysResult {
	if (resource.apiVersion !== "2022-05-01") {
		throw new Error(`listNotebookKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.MachineLearningServices/workspaces") {
		throw new Error(`listNotebookKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listSecrets(resource: workspaces_datastores): DatastoreSecrets {
	if (resource.apiVersion !== "2022-05-01") {
		throw new Error(`listSecrets is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.MachineLearningServices/workspaces/datastores") {
		throw new Error(`listSecrets is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listStorageAccountKeys(resource: workspaces): ListStorageAccountKeysResult {
	if (resource.apiVersion !== "2022-05-01") {
		throw new Error(`listStorageAccountKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.MachineLearningServices/workspaces") {
		throw new Error(`listStorageAccountKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AccountKeyDatastoreSecrets {
	readonly key?: string | undefined;
	readonly secretsType: "AccountKey" | "Certificate" | "Sas" | "ServicePrincipal";
}
export interface AksNetworkingConfiguration {
	readonly dnsServiceIP?: string | undefined;
	readonly dockerBridgeCidr?: string | undefined;
	readonly serviceCidr?: string | undefined;
	readonly subnetId?: string | undefined;
}
export interface AKSSchemaProperties {
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
	readonly propertyBag?: any | undefined;
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
export interface BatchDeploymentProperties {
	readonly codeConfiguration?: CodeConfiguration | undefined;
	readonly compute?: string | undefined;
	readonly description?: string | undefined;
	readonly environmentId?: string | undefined;
	readonly environmentVariables?: EndpointDeploymentPropertiesBaseEnvironmentVariables | undefined;
	readonly errorThreshold?: number | undefined;
	readonly loggingLevel?: ("Debug" | "Info" | "Warning") | undefined;
	readonly maxConcurrencyPerInstance?: number | undefined;
	readonly miniBatchSize?: number | undefined;
	readonly model?: AssetReferenceBase | undefined;
	readonly outputAction?: ("AppendRow" | "SummaryOnly") | undefined;
	readonly outputFileName?: string | undefined;
	readonly properties?: EndpointDeploymentPropertiesBaseProperties | undefined;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "Scaling" | "Succeeded" | "Updating")
		| undefined;
	readonly resources?: ResourceConfiguration | undefined;
	readonly retrySettings?: BatchRetrySettings | undefined;
}
export interface BatchEndpointDefaults {
	readonly deploymentName?: string | undefined;
}
export interface BatchEndpointProperties {
	readonly authMode: "AADToken" | "AMLToken" | "Key";
	readonly defaults?: BatchEndpointDefaults | undefined;
	readonly description?: string | undefined;
	readonly keys?: EndpointAuthKeys | undefined;
	readonly properties?: EndpointPropertiesBaseProperties | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly scoringUri?: string | undefined;
	readonly swaggerUri?: string | undefined;
}
export interface BatchRetrySettings {
	readonly maxRetries?: number | undefined;
	readonly timeout?: string | undefined;
}
export interface BuildContext {
	readonly contextUri: string;
	readonly dockerfilePath?: string | undefined;
}
export interface CertificateDatastoreSecrets {
	readonly certificate?: string | undefined;
	readonly secretsType: "AccountKey" | "Certificate" | "Sas" | "ServicePrincipal";
}
export interface CodeConfiguration {
	readonly codeId?: string | undefined;
	readonly scoringScript: string;
}
export interface CodeContainerProperties {
	readonly description?: string | undefined;
	readonly isArchived?: boolean | undefined;
	readonly latestVersion?: string | undefined;
	readonly nextVersion?: string | undefined;
	readonly properties?: ResourceBaseProperties | undefined;
	readonly tags?: ResourceBaseTags | undefined;
}
export interface CodeVersionProperties {
	readonly codeUri?: string | undefined;
	readonly description?: string | undefined;
	readonly isAnonymous?: boolean | undefined;
	readonly isArchived?: boolean | undefined;
	readonly properties?: ResourceBaseProperties | undefined;
	readonly tags?: ResourceBaseTags | undefined;
}
export interface CommandJobEnvironmentVariables {
	readonly "[ key: string ]"?: string | undefined;
}
export interface CommandJobInputs {
	readonly "[ key: string ]"?: JobInput | undefined;
}
export interface CommandJobLimits {
	readonly jobLimitsType: "Command" | "Sweep";
	readonly timeout?: string | undefined;
}
export interface CommandJobOutputs {
	readonly "[ key: string ]"?: JobOutput | undefined;
}
export interface ComponentContainerProperties {
	readonly description?: string | undefined;
	readonly isArchived?: boolean | undefined;
	readonly latestVersion?: string | undefined;
	readonly nextVersion?: string | undefined;
	readonly properties?: ResourceBaseProperties | undefined;
	readonly tags?: ResourceBaseTags | undefined;
}
export interface ComponentVersionProperties {
	readonly componentSpec?: any | undefined;
	readonly description?: string | undefined;
	readonly isAnonymous?: boolean | undefined;
	readonly isArchived?: boolean | undefined;
	readonly properties?: ResourceBaseProperties | undefined;
	readonly tags?: ResourceBaseTags | undefined;
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
export interface ComputeInstanceApplication {
	readonly displayName?: string | undefined;
	readonly endpointUri?: string | undefined;
}
export interface ComputeInstanceConnectivityEndpoints {
	readonly privateIpAddress?: string | undefined;
	readonly publicIpAddress?: string | undefined;
}
export interface ComputeInstanceContainer {
	readonly autosave?: ("Local" | "None" | "Remote") | undefined;
	readonly environment?: ComputeInstanceEnvironmentInfo | undefined;
	readonly gpu?: string | undefined;
	readonly name?: string | undefined;
	readonly network?: ("Bridge" | "Host") | undefined;
	readonly services?: any[] | undefined;
}
export interface ComputeInstanceCreatedBy {
	readonly userId?: string | undefined;
	readonly userName?: string | undefined;
	readonly userOrgId?: string | undefined;
}
export interface ComputeInstanceDataDisk {
	readonly caching?: ("None" | "ReadOnly" | "ReadWrite") | undefined;
	readonly diskSizeGB?: number | undefined;
	readonly lun?: number | undefined;
	readonly storageAccountType?: ("Premium_LRS" | "Standard_LRS") | undefined;
}
export interface ComputeInstanceDataMount {
	readonly createdBy?: string | undefined;
	readonly error?: string | undefined;
	readonly mountAction?: ("Mount" | "Unmount") | undefined;
	readonly mountedOn?: string | undefined;
	readonly mountName?: string | undefined;
	readonly mountPath?: string | undefined;
	readonly mountState?:
		| ("MountFailed" | "MountRequested" | "Mounted" | "UnmountFailed" | "UnmountRequested" | "Unmounted")
		| undefined;
	readonly source?: string | undefined;
	readonly sourceType?: ("Dataset" | "Datastore" | "URI") | undefined;
}
export interface ComputeInstanceEnvironmentInfo {
	readonly name?: string | undefined;
	readonly version?: string | undefined;
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
	readonly operationTrigger?: ("IdleShutdown" | "Schedule" | "User") | undefined;
}
export interface ComputeInstanceProperties {
	readonly applications?: ComputeInstanceApplication[] | undefined;
	readonly applicationSharingPolicy?: ("Personal" | "Shared") | undefined;
	readonly computeInstanceAuthorizationType?: "personal" | undefined;
	readonly connectivityEndpoints?: ComputeInstanceConnectivityEndpoints | undefined;
	readonly containers?: ComputeInstanceContainer[] | undefined;
	readonly createdBy?: ComputeInstanceCreatedBy | undefined;
	readonly dataDisks?: ComputeInstanceDataDisk[] | undefined;
	readonly dataMounts?: ComputeInstanceDataMount[] | undefined;
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
	readonly versions?: ComputeInstanceVersion | undefined;
	readonly vmSize?: string | undefined;
}
export interface ComputeInstanceSshSettings {
	readonly adminPublicKey?: string | undefined;
	readonly adminUserName?: string | undefined;
	readonly sshPort?: number | undefined;
	readonly sshPublicAccess?: ("Disabled" | "Enabled") | undefined;
}
export interface ComputeInstanceVersion {
	readonly runtime?: string | undefined;
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
	readonly id?: string | undefined;
	readonly provisioningStatus?: ("Completed" | "Failed" | "Provisioning") | undefined;
	readonly schedule?: ScheduleBase | undefined;
}
export interface ContainerResourceRequirements {
	readonly containerResourceLimits?: ContainerResourceSettings | undefined;
	readonly containerResourceRequests?: ContainerResourceSettings | undefined;
}
export interface ContainerResourceSettings {
	readonly cpu?: string | undefined;
	readonly gpu?: string | undefined;
	readonly memory?: string | undefined;
}
export interface CosmosDbSettings {
	readonly collectionsThroughput?: number | undefined;
}
export interface DatabricksProperties {
	readonly databricksAccessToken?: string | undefined;
	readonly workspaceUrl?: string | undefined;
}
export interface DataContainerProperties {
	readonly dataType: "mltable" | "uri_file" | "uri_folder";
	readonly description?: string | undefined;
	readonly isArchived?: boolean | undefined;
	readonly latestVersion?: string | undefined;
	readonly nextVersion?: string | undefined;
	readonly properties?: ResourceBaseProperties | undefined;
	readonly tags?: ResourceBaseTags | undefined;
}
export interface DataLakeAnalyticsSchemaProperties {
	readonly dataLakeStoreAccountName?: string | undefined;
}
export interface DatastoreCredentials {}
export interface DatastoreProperties {
	readonly credentials: DatastoreCredentials;
	readonly description?: string | undefined;
	readonly isDefault?: boolean | undefined;
	readonly properties?: ResourceBaseProperties | undefined;
	readonly tags?: ResourceBaseTags | undefined;
}
export interface DatastoreSecrets {}
export interface DataVersionBaseProperties {
	readonly dataUri: string;
	readonly description?: string | undefined;
	readonly isAnonymous?: boolean | undefined;
	readonly isArchived?: boolean | undefined;
	readonly properties?: ResourceBaseProperties | undefined;
	readonly tags?: ResourceBaseTags | undefined;
}
export interface DistributionConfiguration {}
export interface EarlyTerminationPolicy {
	readonly delayEvaluation?: number | undefined;
	readonly evaluationInterval?: number | undefined;
}
export interface EncryptionKeyVaultProperties {
	readonly identityClientId?: string | undefined;
	readonly keyIdentifier: string;
	readonly keyVaultArmId: string;
}
export interface EncryptionProperty {
	readonly identity?: IdentityForCmk | undefined;
	readonly keyVaultProperties: EncryptionKeyVaultProperties;
	readonly status: "Disabled" | "Enabled";
}
export interface EndpointAuthKeys {
	readonly primaryKey?: string | undefined;
	readonly secondaryKey?: string | undefined;
}
export interface EndpointDeploymentPropertiesBaseEnvironmentVariables {
	readonly "[ key: string ]"?: string | undefined;
}
export interface EndpointDeploymentPropertiesBaseProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface EndpointPropertiesBaseProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface EnvironmentContainerProperties {
	readonly description?: string | undefined;
	readonly isArchived?: boolean | undefined;
	readonly latestVersion?: string | undefined;
	readonly nextVersion?: string | undefined;
	readonly properties?: ResourceBaseProperties | undefined;
	readonly tags?: ResourceBaseTags | undefined;
}
export interface EnvironmentVersionProperties {
	readonly build?: BuildContext | undefined;
	readonly condaFile?: string | undefined;
	readonly description?: string | undefined;
	readonly environmentType?: ("Curated" | "UserCreated") | undefined;
	readonly image?: string | undefined;
	readonly inferenceConfig?: InferenceContainerProperties | undefined;
	readonly isAnonymous?: boolean | undefined;
	readonly isArchived?: boolean | undefined;
	readonly osType?: ("Linux" | "Windows") | undefined;
	readonly properties?: ResourceBaseProperties | undefined;
	readonly tags?: ResourceBaseTags | undefined;
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
export interface IdentityConfiguration {}
export interface IdentityForCmk {
	readonly userAssignedIdentity?: string | undefined;
}
export interface InferenceContainerProperties {
	readonly livenessRoute?: Route | undefined;
	readonly readinessRoute?: Route | undefined;
	readonly scoringRoute?: Route | undefined;
}
export interface InstanceResourceSchema {
	readonly "[ key: string ]"?: string | undefined;
}
export interface InstanceTypeSchema {
	readonly nodeSelector?: InstanceTypeSchemaNodeSelector | undefined;
	readonly resources?: InstanceTypeSchemaResources | undefined;
}
export interface InstanceTypeSchemaNodeSelector {
	readonly "[ key: string ]"?: string | undefined;
}
export interface InstanceTypeSchemaResources {
	readonly limits?: InstanceResourceSchema | undefined;
	readonly requests?: InstanceResourceSchema | undefined;
}
export interface JobBaseProperties {
	readonly computeId?: string | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly experimentName?: string | undefined;
	readonly identity?: IdentityConfiguration | undefined;
	readonly isArchived?: boolean | undefined;
	readonly properties?: ResourceBaseProperties | undefined;
	readonly services?: JobBaseServices | undefined;
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
	readonly tags?: ResourceBaseTags | undefined;
}
export interface JobBaseServices {
	readonly "[ key: string ]"?: JobService | undefined;
}
export interface JobInput {
	readonly description?: string | undefined;
}
export interface JobOutput {
	readonly description?: string | undefined;
}
export interface JobService {
	readonly endpoint?: string | undefined;
	readonly errorMessage?: string | undefined;
	readonly jobServiceType?: string | undefined;
	readonly port?: number | undefined;
	readonly properties?: JobServiceProperties | undefined;
	readonly status?: string | undefined;
}
export interface JobServiceProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface KubernetesProperties {
	readonly defaultInstanceType?: string | undefined;
	readonly extensionInstanceReleaseTrain?: string | undefined;
	readonly extensionPrincipalId?: string | undefined;
	readonly instanceTypes?: KubernetesPropertiesInstanceTypes | undefined;
	readonly namespace?: string | undefined;
	readonly relayConnectionString?: string | undefined;
	readonly serviceBusConnectionString?: string | undefined;
	readonly vcName?: string | undefined;
}
export interface KubernetesPropertiesInstanceTypes {
	readonly "[ key: string ]"?: InstanceTypeSchema | undefined;
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
export interface ManagedServiceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type: "None" | "SystemAssigned" | "SystemAssigned,UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: UserAssignedIdentities | undefined;
}
export interface ModelContainerProperties {
	readonly description?: string | undefined;
	readonly isArchived?: boolean | undefined;
	readonly latestVersion?: string | undefined;
	readonly nextVersion?: string | undefined;
	readonly properties?: ResourceBaseProperties | undefined;
	readonly tags?: ResourceBaseTags | undefined;
}
export interface ModelVersionFlavors {
	readonly "[ key: string ]"?: FlavorData | undefined;
}
export interface ModelVersionProperties {
	readonly description?: string | undefined;
	readonly flavors?: ModelVersionFlavors | undefined;
	readonly isAnonymous?: boolean | undefined;
	readonly isArchived?: boolean | undefined;
	readonly jobName?: string | undefined;
	readonly modelType?: string | undefined;
	readonly modelUri?: string | undefined;
	readonly properties?: ResourceBaseProperties | undefined;
	readonly tags?: ResourceBaseTags | undefined;
}
export interface NodeStateCounts {
	readonly idleNodeCount?: number | undefined;
	readonly leavingNodeCount?: number | undefined;
	readonly preemptedNodeCount?: number | undefined;
	readonly preparingNodeCount?: number | undefined;
	readonly runningNodeCount?: number | undefined;
	readonly unusableNodeCount?: number | undefined;
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
export interface OnlineDeploymentProperties {
	readonly appInsightsEnabled?: boolean | undefined;
	readonly codeConfiguration?: CodeConfiguration | undefined;
	readonly description?: string | undefined;
	readonly environmentId?: string | undefined;
	readonly environmentVariables?: EndpointDeploymentPropertiesBaseEnvironmentVariables | undefined;
	readonly instanceType?: string | undefined;
	readonly livenessProbe?: ProbeSettings | undefined;
	readonly model?: string | undefined;
	readonly modelMountPath?: string | undefined;
	readonly properties?: EndpointDeploymentPropertiesBaseProperties | undefined;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "Scaling" | "Succeeded" | "Updating")
		| undefined;
	readonly readinessProbe?: ProbeSettings | undefined;
	readonly requestSettings?: OnlineRequestSettings | undefined;
	readonly scaleSettings?: OnlineScaleSettings | undefined;
}
export interface OnlineEndpointProperties {
	readonly authMode: "AADToken" | "AMLToken" | "Key";
	readonly compute?: string | undefined;
	readonly description?: string | undefined;
	readonly keys?: EndpointAuthKeys | undefined;
	readonly properties?: EndpointPropertiesBaseProperties | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly scoringUri?: string | undefined;
	readonly swaggerUri?: string | undefined;
	readonly traffic?: OnlineEndpointTraffic | undefined;
}
export interface OnlineEndpointTraffic {
	readonly "[ key: string ]"?: number | undefined;
}
export interface OnlineRequestSettings {
	readonly maxConcurrentRequestsPerInstance?: number | undefined;
	readonly maxQueueWait?: string | undefined;
	readonly requestTimeout?: string | undefined;
}
export interface OnlineScaleSettings {}
export interface Password {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface PersonalComputeInstanceSettings {
	readonly assignedUser?: AssignedUser | undefined;
}
export interface PipelineJobInputs {
	readonly "[ key: string ]"?: JobInput | undefined;
}
export interface PipelineJobJobs {
	readonly "[ key: string ]"?: any | undefined;
}
export interface PipelineJobOutputs {
	readonly "[ key: string ]"?: JobOutput | undefined;
}
export interface PrivateEndpoint {
	readonly id?: string | undefined;
	readonly subnetArmId?: string | undefined;
}
export interface PrivateEndpointConnection {
	readonly id?: string | undefined;
	readonly identity?: ManagedServiceIdentity | undefined;
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
export interface RegistryListCredentialsResult {
	readonly location?: string | undefined;
	readonly passwords?: Password[] | undefined;
	readonly username?: string | undefined;
}
export interface ResourceBaseProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ResourceBaseTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ResourceConfiguration {
	readonly instanceCount?: number | undefined;
	readonly instanceType?: string | undefined;
	readonly properties?: ResourceConfigurationProperties | undefined;
}
export interface ResourceConfigurationProperties {
	readonly "[ key: string ]"?: any | undefined;
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
	readonly sasToken?: string | undefined;
	readonly secretsType: "AccountKey" | "Certificate" | "Sas" | "ServicePrincipal";
}
export interface ScaleSettings {
	readonly maxNodeCount: number;
	readonly minNodeCount?: number | undefined;
	readonly nodeIdleTimeBeforeScaleDown?: string | undefined;
}
export interface ScheduleBase {
	readonly id?: string | undefined;
	readonly provisioningStatus?: ("Completed" | "Failed" | "Provisioning") | undefined;
	readonly status?: ("Disabled" | "Enabled") | undefined;
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
	readonly secretsType: "AccountKey" | "Certificate" | "Sas" | "ServicePrincipal";
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
	readonly capacity?: number | undefined;
	readonly family?: string | undefined;
	readonly name: string;
	readonly size?: string | undefined;
	readonly tier?: ("Basic" | "Free" | "Premium") | undefined;
}
export interface SslConfiguration {
	readonly cert?: string | undefined;
	readonly cname?: string | undefined;
	readonly key?: string | undefined;
	readonly leafDomainLabel?: string | undefined;
	readonly overwriteExistingDomain?: boolean | undefined;
	readonly status?: ("Auto" | "Disabled" | "Enabled") | undefined;
}
export interface SweepJobInputs {
	readonly "[ key: string ]"?: JobInput | undefined;
}
export interface SweepJobLimits {
	readonly jobLimitsType: "Command" | "Sweep";
	readonly maxConcurrentTrials?: number | undefined;
	readonly maxTotalTrials?: number | undefined;
	readonly timeout?: string | undefined;
	readonly trialTimeout?: string | undefined;
}
export interface SweepJobOutputs {
	readonly "[ key: string ]"?: JobOutput | undefined;
}
export interface SynapseSparkProperties {
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
	readonly environmentId: string;
	readonly environmentVariables?: TrialComponentEnvironmentVariables | undefined;
	readonly resources?: ResourceConfiguration | undefined;
}
export interface TrialComponentEnvironmentVariables {
	readonly "[ key: string ]"?: string | undefined;
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
}
export interface VirtualMachineImage {
	readonly id: string;
}
export interface VirtualMachineSchemaProperties {
	readonly address?: string | undefined;
	readonly administratorAccount?: VirtualMachineSshCredentials | undefined;
	readonly isNotebookInstanceCompute?: boolean | undefined;
	readonly notebookServerPort?: number | undefined;
	readonly sshPort?: number | undefined;
	readonly virtualMachineSize?: string | undefined;
}
export interface VirtualMachineSshCredentials {
	readonly password?: string | undefined;
	readonly privateKeyData?: string | undefined;
	readonly publicKeyData?: string | undefined;
	readonly username?: string | undefined;
}
export interface WorkspaceConnectionManagedIdentity {
	readonly clientId?: string | undefined;
	readonly resourceId?: string | undefined;
}
export interface WorkspaceConnectionPersonalAccessToken {
	readonly pat?: string | undefined;
}
export interface WorkspaceConnectionPropertiesV2 {
	readonly category?: ("ContainerRegistry" | "Git" | "PythonFeed") | undefined;
	readonly target?: string | undefined;
	readonly value?: string | undefined;
	readonly valueFormat?: "JSON" | undefined;
}
export interface WorkspaceConnectionSharedAccessSignature {
	readonly sas?: string | undefined;
}
export interface WorkspaceConnectionUsernamePassword {
	readonly password?: string | undefined;
	readonly username?: string | undefined;
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
	readonly mlFlowTrackingUri?: string | undefined;
	readonly notebookInfo?: NotebookResourceInfo | undefined;
	readonly primaryUserAssignedIdentity?: string | undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly privateLinkCount?: number | undefined;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Unknown" | "Updating")
		| undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
	readonly serviceManagedResourcesSettings?: ServiceManagedResourcesSettings | undefined;
	readonly serviceProvisionedResourceGroup?: string | undefined;
	readonly sharedPrivateLinkResources?: SharedPrivateLinkResource[] | undefined;
	readonly storageAccount?: string | undefined;
	readonly storageHnsEnabled?: boolean | undefined;
	readonly tenantId?: string | undefined;
	readonly v1LegacyMode?: boolean | undefined;
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
};
