import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class workspaces extends ArmResource<workspacesComponentInputs> implements workspacesComponentOutputs {
	constructor(entity: ADKEntity, options: workspacesComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces", "2020-05-01-preview", options);
	}
	public readonly apiVersion: "2020-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces";
}
export interface workspacesComponentOutputs {
	readonly apiVersion: "2020-05-01-preview";
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
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/computes", "2020-05-01-preview", options);
	}
	public readonly apiVersion: "2020-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/computes";
}
export interface workspaces_computesComponentOutputs {
	readonly apiVersion: "2020-05-01-preview";
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
export class workspaces_datasets
	extends ArmResource<workspaces_datasetsComponentInputs>
	implements workspaces_datasetsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_datasetsComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/datasets", "2020-05-01-preview", options);
	}
	public readonly apiVersion: "2020-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/datasets";
}
export interface workspaces_datasetsComponentOutputs {
	readonly apiVersion: "2020-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/datasets";
}
export interface workspaces_datasetsComponentInputs {
	readonly datasetType: "file" | "tabular";
	readonly identity?: Identity;
	readonly location?: string;
	readonly name: string;
	readonly parameters: DatasetCreateRequestParameters;
	readonly properties?: Dataset;
	readonly registration: DatasetCreateRequestRegistration;
	readonly skipValidation?: boolean;
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
	readonly timeSeries?: DatasetCreateRequestTimeSeries;
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
			"2020-05-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/datastores";
}
export interface workspaces_datastoresComponentOutputs {
	readonly apiVersion: "2020-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/datastores";
}
export interface workspaces_datastoresComponentInputs {
	readonly accountKey?: string;
	readonly accountName?: string;
	readonly adlsResourceGroup?: string;
	readonly adlsSubscriptionId?: string;
	readonly authorityUrl?: string;
	readonly clientId?: string;
	readonly clientSecret?: string;
	readonly containerName?: string;
	readonly databaseName?: string;
	readonly dataStoreType: "adls" | "adls-gen2" | "blob" | "dbfs" | "file" | "mysqldb" | "psqldb" | "sqldb";
	readonly description?: string;
	readonly endpoint?: string;
	readonly enforceSSL?: boolean;
	readonly fileSystem?: string;
	readonly identity?: Identity;
	readonly includeSecret?: boolean;
	readonly location?: string;
	readonly name: string;
	readonly password?: string;
	readonly port?: string;
	readonly properties?: Datastore;
	readonly protocol?: string;
	readonly resourceUrl?: string;
	readonly sasToken?: string;
	readonly serverName?: string;
	readonly shareName?: string;
	readonly skipValidation?: boolean;
	readonly sku?: Sku;
	readonly storageAccountResourceGroup?: string;
	readonly storageAccountSubscriptionId?: string;
	readonly storeName?: string;
	readonly tags?: ResourceTags;
	readonly tenantId?: string;
	readonly userId?: string;
	readonly userName?: string;
	readonly workspaceSystemAssignedIdentity?: boolean;
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
			"2020-05-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/linkedWorkspaces";
}
export interface workspaces_linkedWorkspacesComponentOutputs {
	readonly apiVersion: "2020-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.MachineLearningServices/workspaces/linkedWorkspaces";
}
export interface workspaces_linkedWorkspacesComponentInputs {
	readonly name: string;
	readonly properties?: LinkedWorkspaceProps;
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
			"2020-05-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/privateEndpointConnections";
}
export interface workspaces_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2020-05-01-preview";
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
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/services", "2020-05-01-preview", options);
	}
	public readonly apiVersion: "2020-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/services";
}
export interface workspaces_services_ACIComponentOutputs {
	readonly apiVersion: "2020-05-01-preview";
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
		super(entity, options.name, "Microsoft.MachineLearningServices/workspaces/services", "2020-05-01-preview", options);
	}
	public readonly apiVersion: "2020-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearningServices/workspaces/services";
}
export interface workspaces_services_AKSComponentOutputs {
	readonly apiVersion: "2020-05-01-preview";
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
	if (resource.apiVersion !== "2020-05-01-preview") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.MachineLearningServices/workspaces") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listNodes(resource: workspaces_computes): AmlComputeNodesInformation {
	if (resource.apiVersion !== "2020-05-01-preview") {
		throw new Error(`listNodes is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.MachineLearningServices/workspaces/computes") {
		throw new Error(`listNodes is not available for resource type ${resource.type}`);
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
	readonly agentVMSize?: string;
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
export interface AzureDataLakeSection {
	readonly authorityUrl?: string;
	readonly certificate?: string;
	readonly clientId?: string;
	readonly clientSecret?: string;
	readonly credentialType?: "None" | "ServicePrincipal";
	readonly isCertAuth?: boolean;
	readonly resourceGroup?: string;
	readonly resourceUri?: string;
	readonly serviceDataAccessAuthIdentity?: "None" | "WorkspaceSystemAssignedIdentity";
	readonly storeName?: string;
	readonly subscriptionId?: string;
	readonly tenantId?: string;
	readonly thumbprint?: string;
}
export interface AzureMySqlSection {
	readonly authorityUrl?: string;
	readonly certificate?: string;
	readonly clientId?: string;
	readonly clientSecret?: string;
	readonly credentialType?: "None" | "ServicePrincipal" | "SqlAuthentication";
	readonly databaseName?: string;
	readonly endpoint?: string;
	readonly isCertAuth?: boolean;
	readonly portNumber?: string;
	readonly resourceGroup?: string;
	readonly resourceUri?: string;
	readonly serverName?: string;
	readonly serviceDataAccessAuthIdentity?: "None" | "WorkspaceSystemAssignedIdentity";
	readonly subscriptionId?: string;
	readonly tenantId?: string;
	readonly thumbprint?: string;
	readonly userId?: string;
	readonly userPassword?: string;
}
export interface AzurePostgreSqlSection {
	readonly authorityUrl?: string;
	readonly certificate?: string;
	readonly clientId?: string;
	readonly clientSecret?: string;
	readonly credentialType?: "None" | "ServicePrincipal" | "SqlAuthentication";
	readonly databaseName?: string;
	readonly enableSsl?: boolean;
	readonly endpoint?: string;
	readonly isCertAuth?: boolean;
	readonly portNumber?: string;
	readonly resourceGroup?: string;
	readonly resourceUri?: string;
	readonly serverName?: string;
	readonly serviceDataAccessAuthIdentity?: "None" | "WorkspaceSystemAssignedIdentity";
	readonly subscriptionId?: string;
	readonly tenantId?: string;
	readonly thumbprint?: string;
	readonly userId?: string;
	readonly userPassword?: string;
}
export interface AzureSqlDatabaseSection {
	readonly authorityUrl?: string;
	readonly certificate?: string;
	readonly clientId?: string;
	readonly clientSecret?: string;
	readonly credentialType?: "None" | "ServicePrincipal" | "SqlAuthentication";
	readonly databaseName?: string;
	readonly endpoint?: string;
	readonly isCertAuth?: boolean;
	readonly portNumber?: string;
	readonly resourceGroup?: string;
	readonly resourceUri?: string;
	readonly serverName?: string;
	readonly serviceDataAccessAuthIdentity?: "None" | "WorkspaceSystemAssignedIdentity";
	readonly subscriptionId?: string;
	readonly tenantId?: string;
	readonly thumbprint?: string;
	readonly userId?: string;
	readonly userPassword?: string;
}
export interface AzureStorageSection {
	readonly accountKey?: string;
	readonly accountName?: string;
	readonly areWorkspaceManagedIdentitiesAllowed?: boolean;
	readonly blobCacheTimeout?: number;
	readonly clientCredentials?: ClientCredentials;
	readonly containerName?: string;
	readonly credential?: string;
	readonly credentialType?: "AccountKey" | "ClientCredentials" | "None" | "Sas";
	readonly endpoint?: string;
	readonly isSas?: boolean;
	readonly protocol?: string;
	readonly resourceGroup?: string;
	readonly sasToken?: string;
	readonly serviceDataAccessAuthIdentity?: "None" | "WorkspaceSystemAssignedIdentity";
	readonly subscriptionId?: string;
}
export interface ClientCredentials {
	readonly authorityUrl?: string;
	readonly certificate?: string;
	readonly clientId?: string;
	readonly clientSecret?: string;
	readonly isCertAuth?: boolean;
	readonly resourceGroup?: string;
	readonly resourceUri?: string;
	readonly serviceDataAccessAuthIdentity?: "None" | "WorkspaceSystemAssignedIdentity";
	readonly subscriptionId?: string;
	readonly tenantId?: string;
	readonly thumbprint?: string;
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
export interface Dataset {
	readonly createdTime?: string;
	readonly datasetId?: string;
	readonly datasetState?: DatasetState;
	readonly datasetType?: string;
	readonly defaultCompute?: string;
	readonly description?: string;
	readonly etag?: string;
	readonly isVisible?: boolean;
	readonly latest?: DatasetLatest;
	readonly modifiedTime?: string;
	readonly name?: string;
	readonly tags?: DatasetTags;
}
export interface DatasetCreateRequestParameters {
	readonly header?:
		| "all_files_have_same_headers"
		| "combine_all_files_headers"
		| "no_headers"
		| "only_first_file_has_headers";
	readonly includePath?: boolean;
	readonly partitionFormat?: string;
	readonly path?: DatasetCreateRequestParametersPath;
	readonly query?: DatasetCreateRequestParametersQuery;
	readonly separator?: string;
	readonly sourceType?: "delimited_files" | "json_lines_files" | "parquet_files";
}
export interface DatasetCreateRequestParametersPath {
	readonly dataPath?: DatasetCreateRequestParametersPathDataPath;
	readonly httpUrl?: string;
}
export interface DatasetCreateRequestParametersPathDataPath {
	readonly datastoreName?: string;
	readonly relativePath?: string;
}
export interface DatasetCreateRequestParametersQuery {
	readonly datastoreName?: string;
	readonly query?: string;
}
export interface DatasetCreateRequestRegistration {
	readonly description?: string;
	readonly name?: string;
	readonly tags?: DatasetCreateRequestRegistrationTags;
}
export interface DatasetCreateRequestRegistrationTags {
	readonly [key: string]: string;
}
export interface DatasetCreateRequestTimeSeries {
	readonly coarseGrainTimestamp?: string;
	readonly fineGrainTimestamp?: string;
}
export interface DatasetLatest {
	readonly createdBy?: UserInfo;
	readonly createdTime?: string;
	readonly dataflow?: string;
	readonly dataPath?: DatasetLatestDataPath;
	readonly datasetDefinitionState?: DatasetState;
	readonly datasetId?: string;
	readonly description?: string;
	readonly etag?: string;
	readonly fileType?: string;
	readonly modifiedTime?: string;
	readonly notes?: string;
	readonly partitionFormatInPath?: boolean;
	readonly properties?: DatasetLatestProperties;
	readonly savedDatasetId?: string;
	readonly tags?: DatasetLatestTags;
	readonly telemetryInfo?: DatasetLatestTelemetryInfo;
	readonly useDescriptionTagsFromDefinition?: boolean;
	readonly versionId?: string;
}
export interface DatasetLatestDataPath {
	readonly additionalProperties?: DatasetLatestDataPathAdditionalProperties;
	readonly azureFilePath?: string;
	readonly datastoreName?: string;
	readonly httpUrl?: string;
	readonly partitionFormat?: string;
	readonly partitionFormatIgnoreError?: boolean;
	readonly paths?: string[];
	readonly relativePath?: string;
	readonly sqlDataPath?: DatasetLatestDataPathSqlDataPath;
}
export interface DatasetLatestDataPathAdditionalProperties {
	readonly [key: string]: any;
}
export interface DatasetLatestDataPathSqlDataPath {
	readonly queryTimeout?: number;
	readonly sqlQuery?: string;
	readonly sqlStoredProcedureName?: string;
	readonly sqlTableName?: string;
}
export interface DatasetLatestProperties {
	readonly [key: string]: any;
}
export interface DatasetLatestTags {
	readonly [key: string]: string;
}
export interface DatasetLatestTelemetryInfo {
	readonly [key: string]: string;
}
export interface DatasetReference {
	readonly id?: string;
	readonly name?: string;
}
export interface DatasetState {
	readonly deprecatedBy?: DatasetStateDeprecatedBy;
	readonly etag?: string;
	readonly state?: string;
}
export interface DatasetStateDeprecatedBy {
	readonly datasetId?: string;
	readonly definitionVersion?: string;
}
export interface DatasetTags {
	readonly [key: string]: string;
}
export interface Datastore {
	readonly azureDataLakeSection?: AzureDataLakeSection;
	readonly azureMySqlSection?: AzureMySqlSection;
	readonly azurePostgreSqlSection?: AzurePostgreSqlSection;
	readonly azureSqlDatabaseSection?: AzureSqlDatabaseSection;
	readonly azureStorageSection?: AzureStorageSection;
	readonly createdBy?: UserInfo;
	readonly createdTime?: string;
	readonly dataStoreType?:
		| "AzureBlob"
		| "AzureDataLake"
		| "AzureDataLakeGen2"
		| "AzureFile"
		| "AzureMySql"
		| "AzurePostgreSql"
		| "AzureSqlDatabase"
		| "DBFS";
	readonly description?: string;
	readonly glusterFsSection?: GlusterFsSection;
	readonly hasBeenValidated?: boolean;
	readonly linkedInfo?: LinkedInfo;
	readonly modifiedBy?: UserInfo;
	readonly modifiedTime?: string;
	readonly name?: string;
	readonly tags?: DatastoreTags;
}
export interface DatastoreTags {
	readonly [key: string]: string;
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
export interface GlusterFsSection {
	readonly serverAddress?: string;
	readonly volumeName?: string;
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
export interface LinkedInfo {
	readonly linkedId?: string;
	readonly linkedResourceName?: string;
	readonly origin?: "Synapse";
}
export interface LinkedWorkspaceProps {
	readonly linkedWorkspaceResourceId?: string;
	readonly userAssignedIdentityResourceId?: string;
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
	readonly status?: "Disabled" | "Enabled";
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
export interface UserInfo {
	readonly userAltSecId?: string;
	readonly userIdp?: string;
	readonly userIss?: string;
	readonly userName?: string;
	readonly userObjectId?: string;
	readonly userPuId?: string;
	readonly userTenantId?: string;
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
	"workspaces/datasets": workspaces_datasets,
	"workspaces/datastores": workspaces_datastores,
	"workspaces/linkedWorkspaces": workspaces_linkedWorkspaces,
	"workspaces/privateEndpointConnections": workspaces_privateEndpointConnections,
	"workspaces/services/ACI": workspaces_services_ACI,
	"workspaces/services/AKS": workspaces_services_AKS,
};
