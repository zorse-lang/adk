import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class factories extends ArmResource<factoriesComponentInputs> implements factoriesComponentOutputs {
	constructor(entity: ADKEntity, options: factoriesComponentInputs) {
		super(entity, options.name, "Microsoft.DataFactory/factories", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataFactory/factories";
}
export interface factoriesComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.DataFactory/factories";
}
export interface factoriesComponentInputs {
	readonly eTag?: string;
	readonly identity?: FactoryIdentity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: FactoryProperties;
	readonly tags?: ResourceTags;
}
export class factories_credentials
	extends ArmResource<factories_credentialsComponentInputs>
	implements factories_credentialsComponentOutputs
{
	constructor(entity: ADKEntity, options: factories_credentialsComponentInputs) {
		super(entity, options.name, "Microsoft.DataFactory/factories/credentials", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataFactory/factories/credentials";
}
export interface factories_credentialsComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.DataFactory/factories/credentials";
}
export interface factories_credentialsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties: ManagedIdentityCredential;
}
export class factories_dataflows
	extends ArmResource<factories_dataflowsComponentInputs>
	implements factories_dataflowsComponentOutputs
{
	constructor(entity: ADKEntity, options: factories_dataflowsComponentInputs) {
		super(entity, options.name, "Microsoft.DataFactory/factories/dataflows", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataFactory/factories/dataflows";
}
export interface factories_dataflowsComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.DataFactory/factories/dataflows";
}
export interface factories_dataflowsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties: DataFlow;
}
export class factories_datasets
	extends ArmResource<factories_datasetsComponentInputs>
	implements factories_datasetsComponentOutputs
{
	constructor(entity: ADKEntity, options: factories_datasetsComponentInputs) {
		super(entity, options.name, "Microsoft.DataFactory/factories/datasets", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataFactory/factories/datasets";
}
export interface factories_datasetsComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.DataFactory/factories/datasets";
}
export interface factories_datasetsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties: Dataset;
}
export class factories_globalParameters
	extends ArmResource<factories_globalParametersComponentInputs>
	implements factories_globalParametersComponentOutputs
{
	constructor(entity: ADKEntity, options: factories_globalParametersComponentInputs) {
		super(entity, options.name, "Microsoft.DataFactory/factories/globalParameters", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataFactory/factories/globalParameters";
}
export interface factories_globalParametersComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.DataFactory/factories/globalParameters";
}
export interface factories_globalParametersComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties: GlobalParameter;
}
export class factories_integrationRuntimes
	extends ArmResource<factories_integrationRuntimesComponentInputs>
	implements factories_integrationRuntimesComponentOutputs
{
	constructor(entity: ADKEntity, options: factories_integrationRuntimesComponentInputs) {
		super(entity, options.name, "Microsoft.DataFactory/factories/integrationRuntimes", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataFactory/factories/integrationRuntimes";
}
export interface factories_integrationRuntimesComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.DataFactory/factories/integrationRuntimes";
}
export interface factories_integrationRuntimesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties: IntegrationRuntime;
}
export class factories_linkedservices
	extends ArmResource<factories_linkedservicesComponentInputs>
	implements factories_linkedservicesComponentOutputs
{
	constructor(entity: ADKEntity, options: factories_linkedservicesComponentInputs) {
		super(entity, options.name, "Microsoft.DataFactory/factories/linkedservices", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataFactory/factories/linkedservices";
}
export interface factories_linkedservicesComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.DataFactory/factories/linkedservices";
}
export interface factories_linkedservicesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties: LinkedService;
}
export class factories_managedVirtualNetworks
	extends ArmResource<factories_managedVirtualNetworksComponentInputs>
	implements factories_managedVirtualNetworksComponentOutputs
{
	constructor(entity: ADKEntity, options: factories_managedVirtualNetworksComponentInputs) {
		super(entity, options.name, "Microsoft.DataFactory/factories/managedVirtualNetworks", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataFactory/factories/managedVirtualNetworks";
}
export interface factories_managedVirtualNetworksComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.DataFactory/factories/managedVirtualNetworks";
}
export interface factories_managedVirtualNetworksComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties: ManagedVirtualNetwork;
}
export class factories_managedVirtualNetworks_managedPrivateEndpoints
	extends ArmResource<factories_managedVirtualNetworks_managedPrivateEndpointsComponentInputs>
	implements factories_managedVirtualNetworks_managedPrivateEndpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: factories_managedVirtualNetworks_managedPrivateEndpointsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DataFactory/factories/managedVirtualNetworks/managedPrivateEndpoints",
			"2018-06-01",
			options,
		);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataFactory/factories/managedVirtualNetworks/managedPrivateEndpoints";
}
export interface factories_managedVirtualNetworks_managedPrivateEndpointsComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.DataFactory/factories/managedVirtualNetworks/managedPrivateEndpoints";
}
export interface factories_managedVirtualNetworks_managedPrivateEndpointsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties: ManagedPrivateEndpoint;
}
export class factories_pipelines
	extends ArmResource<factories_pipelinesComponentInputs>
	implements factories_pipelinesComponentOutputs
{
	constructor(entity: ADKEntity, options: factories_pipelinesComponentInputs) {
		super(entity, options.name, "Microsoft.DataFactory/factories/pipelines", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataFactory/factories/pipelines";
}
export interface factories_pipelinesComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.DataFactory/factories/pipelines";
}
export interface factories_pipelinesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties: Pipeline;
}
export class factories_privateEndpointConnections
	extends ArmResource<factories_privateEndpointConnectionsComponentInputs>
	implements factories_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: factories_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.DataFactory/factories/privateEndpointConnections", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataFactory/factories/privateEndpointConnections";
}
export interface factories_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.DataFactory/factories/privateEndpointConnections";
}
export interface factories_privateEndpointConnectionsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: PrivateLinkConnectionApprovalRequestOrRemotePrivateEndpointConnection;
}
export class factories_triggers
	extends ArmResource<factories_triggersComponentInputs>
	implements factories_triggersComponentOutputs
{
	constructor(entity: ADKEntity, options: factories_triggersComponentInputs) {
		super(entity, options.name, "Microsoft.DataFactory/factories/triggers", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataFactory/factories/triggers";
}
export interface factories_triggersComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.DataFactory/factories/triggers";
}
export interface factories_triggersComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties: Trigger;
}
export function listAuthKeys(resource: factories_integrationRuntimes): IntegrationRuntimeAuthKeys {
	if (resource.apiVersion !== "2018-06-01") {
		throw new Error(`listAuthKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.DataFactory/factories/integrationRuntimes") {
		throw new Error(`listAuthKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface Activity {
	readonly dependsOn?: ActivityDependency[];
	readonly description?: string;
	readonly name: string;
	readonly userProperties?: UserProperty[];
}
export interface ActivityDependency {
	readonly activity: string;
	readonly dependencyConditions: "Completed" | "Failed" | "Skipped" | "Succeeded"[];
	readonly [key: string]: any;
}
export interface ActivityPolicy {
	readonly retry?: any;
	readonly retryIntervalInSeconds?: number;
	readonly secureInput?: boolean;
	readonly secureOutput?: boolean;
	readonly timeout?: any;
	readonly [key: string]: any;
}
export interface AmazonMWSLinkedServiceTypeProperties {
	readonly accessKeyId: any;
	readonly encryptedCredential?: any;
	readonly endpoint: any;
	readonly marketplaceID: any;
	readonly mwsAuthToken?: SecretBase;
	readonly secretKey?: SecretBase;
	readonly sellerID: any;
	readonly useEncryptedEndpoints?: any;
	readonly useHostVerification?: any;
	readonly usePeerVerification?: any;
}
export interface AmazonRdsForLinkedServiceTypeProperties {
	readonly connectionString: any;
	readonly encryptedCredential?: any;
	readonly password?: SecretBase;
}
export interface AmazonRdsForOraclePartitionSettings {
	readonly partitionColumnName?: any;
	readonly partitionLowerBound?: any;
	readonly partitionNames?: any;
	readonly partitionUpperBound?: any;
}
export interface AmazonRdsForOracleTableDatasetTypeProperties {
	readonly schema?: any;
	readonly table?: any;
}
export interface AmazonRdsForSqlServerLinkedServiceTypeProperties {
	readonly alwaysEncryptedSettings?: SqlAlwaysEncryptedProperties;
	readonly connectionString: any;
	readonly encryptedCredential?: any;
	readonly password?: SecretBase;
	readonly userName?: any;
}
export interface AmazonRdsForSqlServerTableDatasetTypeProperties {
	readonly schema?: any;
	readonly table?: any;
}
export interface AmazonRedshiftLinkedServiceTypeProperties {
	readonly database: any;
	readonly encryptedCredential?: any;
	readonly password?: SecretBase;
	readonly port?: any;
	readonly server: any;
	readonly username?: any;
}
export interface AmazonRedshiftTableDatasetTypeProperties {
	readonly schema?: any;
	readonly table?: any;
	readonly tableName?: any;
}
export interface AmazonS3CompatibleLinkedServiceTypeProperties {
	readonly accessKeyId?: any;
	readonly encryptedCredential?: any;
	readonly forcePathStyle?: any;
	readonly secretAccessKey?: SecretBase;
	readonly serviceUrl?: any;
}
export interface AmazonS3DatasetTypeProperties {
	readonly bucketName: any;
	readonly compression?: DatasetCompression;
	readonly format?: DatasetStorageFormat;
	readonly key?: any;
	readonly modifiedDatetimeEnd?: any;
	readonly modifiedDatetimeStart?: any;
	readonly prefix?: any;
	readonly version?: any;
}
export interface AmazonS3LinkedServiceTypeProperties {
	readonly accessKeyId?: any;
	readonly authenticationType?: any;
	readonly encryptedCredential?: any;
	readonly secretAccessKey?: SecretBase;
	readonly serviceUrl?: any;
	readonly sessionToken?: SecretBase;
}
export interface AppendVariableActivityTypeProperties {
	readonly value?: any;
	readonly variableName?: string;
}
export interface AppFiguresLinkedServiceTypeProperties {
	readonly clientKey: SecretBase;
	readonly password: SecretBase;
	readonly userName: any;
}
export interface AsanaLinkedServiceTypeProperties {
	readonly apiToken: SecretBase;
	readonly encryptedCredential?: any;
}
export interface AvroDatasetTypeProperties {
	readonly avroCompressionCodec?: any;
	readonly avroCompressionLevel?: number;
	readonly location: DatasetLocation;
}
export interface AvroWriteSettings {
	readonly fileNamePrefix?: any;
	readonly maxRowsPerFile?: any;
	readonly recordName?: string;
	readonly recordNamespace?: string;
	readonly type: string;
	readonly [key: string]: any;
}
export interface AzPowerShellSetupTypeProperties {
	readonly version: string;
}
export interface AzureBatchLinkedServiceTypeProperties {
	readonly accessKey?: SecretBase;
	readonly accountName: any;
	readonly batchUri: any;
	readonly credential?: CredentialReference;
	readonly encryptedCredential?: any;
	readonly linkedServiceName: LinkedServiceReference;
	readonly poolName: any;
}
export interface AzureBlobDatasetTypeProperties {
	readonly compression?: DatasetCompression;
	readonly fileName?: any;
	readonly folderPath?: any;
	readonly format?: DatasetStorageFormat;
	readonly modifiedDatetimeEnd?: any;
	readonly modifiedDatetimeStart?: any;
	readonly tableRootLocation?: any;
}
export interface AzureBlobFSDatasetTypeProperties {
	readonly compression?: DatasetCompression;
	readonly fileName?: any;
	readonly folderPath?: any;
	readonly format?: DatasetStorageFormat;
}
export interface AzureBlobFSLinkedServiceTypeProperties {
	readonly accountKey?: any;
	readonly azureCloudType?: any;
	readonly credential?: CredentialReference;
	readonly encryptedCredential?: any;
	readonly servicePrincipalCredential?: SecretBase;
	readonly servicePrincipalCredentialType?: any;
	readonly servicePrincipalId?: any;
	readonly servicePrincipalKey?: SecretBase;
	readonly tenant?: any;
	readonly url: any;
}
export interface AzureBlobStorageLinkedServiceTypeProperties {
	readonly accountKey?: AzureKeyVaultSecretReference;
	readonly accountKind?: string;
	readonly azureCloudType?: any;
	readonly connectionString?: any;
	readonly credential?: CredentialReference;
	readonly encryptedCredential?: string;
	readonly sasToken?: AzureKeyVaultSecretReference;
	readonly sasUri?: any;
	readonly serviceEndpoint?: string;
	readonly servicePrincipalId?: any;
	readonly servicePrincipalKey?: SecretBase;
	readonly tenant?: any;
}
export interface AzureDatabricksDeltaLakeDatasetTypeProperties {
	readonly database?: any;
	readonly table?: any;
}
export interface AzureDatabricksDeltaLakeExportCommand {
	readonly dateFormat?: any;
	readonly timestampFormat?: any;
	readonly type: string;
	readonly [key: string]: any;
}
export interface AzureDatabricksDeltaLakeImportCommand {
	readonly dateFormat?: any;
	readonly timestampFormat?: any;
	readonly type: string;
	readonly [key: string]: any;
}
export interface AzureDatabricksDetltaLakeLinkedServiceTypeProperties {
	readonly accessToken?: SecretBase;
	readonly clusterId?: any;
	readonly credential?: CredentialReference;
	readonly domain: any;
	readonly encryptedCredential?: any;
	readonly workspaceResourceId?: any;
}
export interface AzureDatabricksLinkedServiceTypeProperties {
	readonly accessToken?: SecretBase;
	readonly authentication?: any;
	readonly credential?: CredentialReference;
	readonly domain: any;
	readonly encryptedCredential?: any;
	readonly existingClusterId?: any;
	readonly instancePoolId?: any;
	readonly newClusterCustomTags?: AzureDatabricksLinkedServiceTypePropertiesNewClusterCustomTags;
	readonly newClusterDriverNodeType?: any;
	readonly newClusterEnableElasticDisk?: any;
	readonly newClusterInitScripts?: any;
	readonly newClusterLogDestination?: any;
	readonly newClusterNodeType?: any;
	readonly newClusterNumOfWorker?: any;
	readonly newClusterSparkConf?: AzureDatabricksLinkedServiceTypePropertiesNewClusterSparkConf;
	readonly newClusterSparkEnvVars?: AzureDatabricksLinkedServiceTypePropertiesNewClusterSparkEnvVars;
	readonly newClusterVersion?: any;
	readonly policyId?: any;
	readonly workspaceResourceId?: any;
}
export interface AzureDatabricksLinkedServiceTypePropertiesNewClusterCustomTags {
	readonly [key: string]: any;
}
export interface AzureDatabricksLinkedServiceTypePropertiesNewClusterSparkConf {
	readonly [key: string]: any;
}
export interface AzureDatabricksLinkedServiceTypePropertiesNewClusterSparkEnvVars {
	readonly [key: string]: any;
}
export interface AzureDataExplorerCommandActivityTypeProperties {
	readonly command: any;
	readonly commandTimeout?: any;
}
export interface AzureDataExplorerDatasetTypeProperties {
	readonly table?: any;
}
export interface AzureDataExplorerLinkedServiceTypeProperties {
	readonly credential?: CredentialReference;
	readonly database: any;
	readonly endpoint: any;
	readonly servicePrincipalId?: any;
	readonly servicePrincipalKey?: SecretBase;
	readonly tenant?: any;
}
export interface AzureDataLakeAnalyticsLinkedServiceTypeProperties {
	readonly accountName: any;
	readonly dataLakeAnalyticsUri?: any;
	readonly encryptedCredential?: any;
	readonly resourceGroupName?: any;
	readonly servicePrincipalId?: any;
	readonly servicePrincipalKey?: SecretBase;
	readonly subscriptionId?: any;
	readonly tenant: any;
}
export interface AzureDataLakeStoreDatasetTypeProperties {
	readonly compression?: DatasetCompression;
	readonly fileName?: any;
	readonly folderPath?: any;
	readonly format?: DatasetStorageFormat;
}
export interface AzureDataLakeStoreLinkedServiceTypeProperties {
	readonly accountName?: any;
	readonly azureCloudType?: any;
	readonly credential?: CredentialReference;
	readonly dataLakeStoreUri: any;
	readonly encryptedCredential?: any;
	readonly resourceGroupName?: any;
	readonly servicePrincipalId?: any;
	readonly servicePrincipalKey?: SecretBase;
	readonly subscriptionId?: any;
	readonly tenant?: any;
}
export interface AzureFileStorageLinkedServiceTypeProperties {
	readonly accountKey?: AzureKeyVaultSecretReference;
	readonly connectionString?: any;
	readonly encryptedCredential?: any;
	readonly fileShare?: any;
	readonly host?: any;
	readonly password?: SecretBase;
	readonly sasToken?: AzureKeyVaultSecretReference;
	readonly sasUri?: any;
	readonly snapshot?: any;
	readonly userId?: any;
}
export interface AzureFunctionActivityTypeProperties {
	readonly body?: any;
	readonly functionName: any;
	readonly headers?: any;
	readonly method: "DELETE" | "GET" | "HEAD" | "OPTIONS" | "POST" | "PUT" | "TRACE";
}
export interface AzureFunctionLinkedServiceTypeProperties {
	readonly authentication?: any;
	readonly credential?: CredentialReference;
	readonly encryptedCredential?: any;
	readonly functionAppUrl: any;
	readonly functionKey?: SecretBase;
	readonly resourceId?: any;
}
export interface AzureKeyVaultLinkedServiceTypeProperties {
	readonly baseUrl: any;
	readonly credential?: CredentialReference;
}
export interface AzureKeyVaultSecretReference {
	readonly secretName: any;
	readonly secretVersion?: any;
	readonly store: LinkedServiceReference;
	readonly type: string;
}
export interface AzureMariaDBLinkedServiceTypeProperties {
	readonly connectionString?: any;
	readonly encryptedCredential?: any;
	readonly pwd?: AzureKeyVaultSecretReference;
}
export interface AzureMLBatchExecutionActivityTypeProperties {
	readonly globalParameters?: AzureMLBatchExecutionActivityTypePropertiesGlobalParameters;
	readonly webServiceInputs?: AzureMLBatchExecutionActivityTypePropertiesWebServiceInputs;
	readonly webServiceOutputs?: AzureMLBatchExecutionActivityTypePropertiesWebServiceOutputs;
}
export interface AzureMLBatchExecutionActivityTypePropertiesGlobalParameters {
	readonly [key: string]: any;
}
export interface AzureMLBatchExecutionActivityTypePropertiesWebServiceInputs {
	readonly [key: string]: AzureMLWebServiceFile;
}
export interface AzureMLBatchExecutionActivityTypePropertiesWebServiceOutputs {
	readonly [key: string]: AzureMLWebServiceFile;
}
export interface AzureMLExecutePipelineActivityTypeProperties {
	readonly continueOnStepFailure?: any;
	readonly dataPathAssignments?: any;
	readonly experimentName?: any;
	readonly mlParentRunId?: any;
	readonly mlPipelineEndpointId?: any;
	readonly mlPipelineId?: any;
	readonly mlPipelineParameters?: any;
	readonly version?: any;
}
export interface AzureMLLinkedServiceTypeProperties {
	readonly apiKey: SecretBase;
	readonly authentication?: any;
	readonly encryptedCredential?: any;
	readonly mlEndpoint: any;
	readonly servicePrincipalId?: any;
	readonly servicePrincipalKey?: SecretBase;
	readonly tenant?: any;
	readonly updateResourceEndpoint?: any;
}
export interface AzureMLServiceLinkedServiceTypeProperties {
	readonly encryptedCredential?: any;
	readonly mlWorkspaceName: any;
	readonly resourceGroupName: any;
	readonly servicePrincipalId?: any;
	readonly servicePrincipalKey?: SecretBase;
	readonly subscriptionId: any;
	readonly tenant?: any;
}
export interface AzureMLUpdateResourceActivityTypeProperties {
	readonly trainedModelFilePath: any;
	readonly trainedModelLinkedServiceName: LinkedServiceReference;
	readonly trainedModelName: any;
}
export interface AzureMLWebServiceFile {
	readonly filePath: any;
	readonly linkedServiceName: LinkedServiceReference;
}
export interface AzureMySqlLinkedServiceTypeProperties {
	readonly connectionString: any;
	readonly encryptedCredential?: any;
	readonly password?: AzureKeyVaultSecretReference;
}
export interface AzureMySqlTableDatasetTypeProperties {
	readonly table?: any;
	readonly tableName?: any;
}
export interface AzurePostgreSqlLinkedServiceTypeProperties {
	readonly connectionString?: any;
	readonly encryptedCredential?: any;
	readonly password?: AzureKeyVaultSecretReference;
}
export interface AzurePostgreSqlTableDatasetTypeProperties {
	readonly schema?: any;
	readonly table?: any;
	readonly tableName?: any;
}
export interface AzureSearchIndexDatasetTypeProperties {
	readonly indexName: any;
}
export interface AzureSearchLinkedServiceTypeProperties {
	readonly encryptedCredential?: any;
	readonly key?: SecretBase;
	readonly url: any;
}
export interface AzureSqlDatabaseLinkedServiceTypeProperties {
	readonly alwaysEncryptedSettings?: SqlAlwaysEncryptedProperties;
	readonly azureCloudType?: any;
	readonly connectionString: any;
	readonly credential?: CredentialReference;
	readonly encryptedCredential?: any;
	readonly password?: AzureKeyVaultSecretReference;
	readonly servicePrincipalId?: any;
	readonly servicePrincipalKey?: SecretBase;
	readonly tenant?: any;
}
export interface AzureSqlDWLinkedServiceTypeProperties {
	readonly azureCloudType?: any;
	readonly connectionString: any;
	readonly credential?: CredentialReference;
	readonly encryptedCredential?: any;
	readonly password?: AzureKeyVaultSecretReference;
	readonly servicePrincipalId?: any;
	readonly servicePrincipalKey?: SecretBase;
	readonly tenant?: any;
}
export interface AzureSqlDWTableDatasetTypeProperties {
	readonly schema?: any;
	readonly table?: any;
	readonly tableName?: any;
}
export interface AzureSqlMILinkedServiceTypeProperties {
	readonly alwaysEncryptedSettings?: SqlAlwaysEncryptedProperties;
	readonly azureCloudType?: any;
	readonly connectionString: any;
	readonly credential?: CredentialReference;
	readonly encryptedCredential?: any;
	readonly password?: AzureKeyVaultSecretReference;
	readonly servicePrincipalId?: any;
	readonly servicePrincipalKey?: SecretBase;
	readonly tenant?: any;
}
export interface AzureSqlMITableDatasetTypeProperties {
	readonly schema?: any;
	readonly table?: any;
	readonly tableName?: any;
}
export interface AzureSqlTableDatasetTypeProperties {
	readonly schema?: any;
	readonly table?: any;
	readonly tableName?: any;
}
export interface AzureStorageLinkedServiceTypeProperties {
	readonly accountKey?: AzureKeyVaultSecretReference;
	readonly connectionString?: any;
	readonly encryptedCredential?: string;
	readonly sasToken?: AzureKeyVaultSecretReference;
	readonly sasUri?: any;
}
export interface AzureSynapseArtifactsLinkedServiceTypeProperties {
	readonly authentication?: any;
	readonly endpoint: any;
	readonly workspaceResourceId?: any;
}
export interface AzureTableDatasetTypeProperties {
	readonly tableName: any;
}
export interface BigDataPoolParametrizationReference {
	readonly referenceName: any;
	readonly type: "BigDataPoolReference";
}
export interface BinaryDatasetTypeProperties {
	readonly compression?: DatasetCompression;
	readonly location: DatasetLocation;
}
export interface BinaryReadSettings {
	readonly compressionProperties?: CompressionReadSettings;
	readonly type: string;
	readonly [key: string]: any;
}
export interface BlobEventsTriggerTypeProperties {
	readonly blobPathBeginsWith?: string;
	readonly blobPathEndsWith?: string;
	readonly events: "Microsoft.Storage.BlobCreated" | "Microsoft.Storage.BlobDeleted"[];
	readonly ignoreEmptyBlobs?: boolean;
	readonly scope: string;
}
export interface BlobTriggerTypeProperties {
	readonly folderPath: string;
	readonly linkedService: LinkedServiceReference;
	readonly maxConcurrency: number;
}
export interface CassandraLinkedServiceTypeProperties {
	readonly authenticationType?: any;
	readonly encryptedCredential?: any;
	readonly host: any;
	readonly password?: SecretBase;
	readonly port?: any;
	readonly username?: any;
}
export interface CassandraTableDatasetTypeProperties {
	readonly keyspace?: any;
	readonly tableName?: any;
}
export interface ChainingTriggerTypeProperties {
	readonly dependsOn: PipelineReference[];
	readonly runDimension: string;
}
export interface CmdkeySetupTypeProperties {
	readonly password: SecretBase;
	readonly targetName: any;
	readonly userName: any;
}
export interface CMKIdentityDefinition {
	readonly userAssignedIdentity?: string;
}
export interface CommonDataServiceForAppsEntityDatasetTypeProperties {
	readonly entityName?: any;
}
export interface CommonDataServiceForAppsLinkedServiceTypeProperties {
	readonly authenticationType: any;
	readonly deploymentType: any;
	readonly encryptedCredential?: any;
	readonly hostName?: any;
	readonly organizationName?: any;
	readonly password?: SecretBase;
	readonly port?: any;
	readonly servicePrincipalCredential?: SecretBase;
	readonly servicePrincipalCredentialType?: any;
	readonly servicePrincipalId?: any;
	readonly serviceUri?: any;
	readonly username?: any;
}
export interface CompressionReadSettings {}
export interface ConcurLinkedServiceTypeProperties {
	readonly clientId: any;
	readonly connectionProperties?: any;
	readonly encryptedCredential?: any;
	readonly password?: SecretBase;
	readonly useEncryptedEndpoints?: any;
	readonly useHostVerification?: any;
	readonly usePeerVerification?: any;
	readonly username: any;
}
export interface ConnectionStateProperties {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: string;
}
export interface CopyActivityLogSettings {
	readonly enableReliableLogging?: any;
	readonly logLevel?: any;
}
export interface CopyActivityTypeProperties {
	readonly dataIntegrationUnits?: any;
	readonly enableSkipIncompatibleRow?: any;
	readonly enableStaging?: any;
	readonly logSettings?: LogSettings;
	readonly logStorageSettings?: LogStorageSettings;
	readonly parallelCopies?: any;
	readonly preserve?: any[];
	readonly preserveRules?: any[];
	readonly redirectIncompatibleRowSettings?: RedirectIncompatibleRowSettings;
	readonly sink: CopySink;
	readonly skipErrorFile?: SkipErrorFile;
	readonly source: CopySource;
	readonly stagingSettings?: StagingSettings;
	readonly translator?: any;
	readonly validateDataConsistency?: any;
}
export interface CopySink {
	readonly disableMetricsCollection?: any;
	readonly maxConcurrentConnections?: any;
	readonly sinkRetryCount?: any;
	readonly sinkRetryWait?: any;
	readonly writeBatchSize?: any;
	readonly writeBatchTimeout?: any;
}
export interface CopySource {
	readonly disableMetricsCollection?: any;
	readonly maxConcurrentConnections?: any;
	readonly sourceRetryCount?: any;
	readonly sourceRetryWait?: any;
}
export interface CosmosDbLinkedServiceTypeProperties {
	readonly accountEndpoint?: any;
	readonly accountKey?: SecretBase;
	readonly azureCloudType?: any;
	readonly connectionMode?: "Direct" | "Gateway";
	readonly connectionString?: any;
	readonly credential?: CredentialReference;
	readonly database?: any;
	readonly encryptedCredential?: any;
	readonly servicePrincipalCredential?: SecretBase;
	readonly servicePrincipalCredentialType?: "ServicePrincipalCert" | "ServicePrincipalKey";
	readonly servicePrincipalId?: any;
	readonly tenant?: any;
}
export interface CosmosDbMongoDbApiCollectionDatasetTypeProperties {
	readonly collection: any;
}
export interface CosmosDbMongoDbApiLinkedServiceTypeProperties {
	readonly connectionString: any;
	readonly database: any;
	readonly isServerVersionAbove32?: any;
}
export interface CosmosDbSqlApiCollectionDatasetTypeProperties {
	readonly collectionName: any;
}
export interface CouchbaseLinkedServiceTypeProperties {
	readonly connectionString?: any;
	readonly credString?: AzureKeyVaultSecretReference;
	readonly encryptedCredential?: any;
}
export interface CredentialReference {
	readonly referenceName: string;
	readonly type: "CredentialReference";
	readonly [key: string]: any;
}
export interface CustomActivityReferenceObject {
	readonly datasets?: DatasetReference[];
	readonly linkedServices?: LinkedServiceReference[];
}
export interface CustomActivityTypeProperties {
	readonly autoUserSpecification?: any;
	readonly command: any;
	readonly extendedProperties?: CustomActivityTypePropertiesExtendedProperties;
	readonly folderPath?: any;
	readonly referenceObjects?: CustomActivityReferenceObject;
	readonly resourceLinkedService?: LinkedServiceReference;
	readonly retentionTimeInDays?: any;
}
export interface CustomActivityTypePropertiesExtendedProperties {
	readonly [key: string]: any;
}
export interface CustomEventsTriggerTypeProperties {
	readonly events: any[];
	readonly scope: string;
	readonly subjectBeginsWith?: string;
	readonly subjectEndsWith?: string;
}
export interface CustomSetupBase {}
export interface DatabricksNotebookActivityTypeProperties {
	readonly baseParameters?: DatabricksNotebookActivityTypePropertiesBaseParameters;
	readonly libraries?: DatabricksNotebookActivityTypePropertiesLibrariesItem[];
	readonly notebookPath: any;
}
export interface DatabricksNotebookActivityTypePropertiesBaseParameters {
	readonly [key: string]: any;
}
export interface DatabricksNotebookActivityTypePropertiesLibrariesItem {
	readonly [key: string]: any;
}
export interface DatabricksSparkJarActivityTypeProperties {
	readonly libraries?: DatabricksSparkJarActivityTypePropertiesLibrariesItem[];
	readonly mainClassName: any;
	readonly parameters?: any[];
}
export interface DatabricksSparkJarActivityTypePropertiesLibrariesItem {
	readonly [key: string]: any;
}
export interface DatabricksSparkPythonActivityTypeProperties {
	readonly libraries?: DatabricksSparkPythonActivityTypePropertiesLibrariesItem[];
	readonly parameters?: any[];
	readonly pythonFile: any;
}
export interface DatabricksSparkPythonActivityTypePropertiesLibrariesItem {
	readonly [key: string]: any;
}
export interface DataFlow {
	readonly annotations?: any[];
	readonly description?: string;
	readonly folder?: DataFlowFolder;
}
export interface DataFlowFolder {
	readonly name?: string;
}
export interface DataFlowReference {
	readonly datasetParameters?: any;
	readonly parameters?: ParameterValueSpecification;
	readonly referenceName: string;
	readonly type: "DataFlowReference";
	readonly [key: string]: any;
}
export interface DataFlowSink {
	readonly dataset?: DatasetReference;
	readonly description?: string;
	readonly flowlet?: DataFlowReference;
	readonly linkedService?: LinkedServiceReference;
	readonly name: string;
	readonly rejectedDataLinkedService?: LinkedServiceReference;
	readonly schemaLinkedService?: LinkedServiceReference;
}
export interface DataFlowSource {
	readonly dataset?: DatasetReference;
	readonly description?: string;
	readonly flowlet?: DataFlowReference;
	readonly linkedService?: LinkedServiceReference;
	readonly name: string;
	readonly schemaLinkedService?: LinkedServiceReference;
}
export interface DataFlowStagingInfo {
	readonly folderPath?: any;
	readonly linkedService?: LinkedServiceReference;
}
export interface DataLakeAnalyticsUsqlActivityTypeProperties {
	readonly compilationMode?: any;
	readonly degreeOfParallelism?: any;
	readonly parameters?: DataLakeAnalyticsUsqlActivityTypePropertiesParameters;
	readonly priority?: any;
	readonly runtimeVersion?: any;
	readonly scriptLinkedService: LinkedServiceReference;
	readonly scriptPath: any;
}
export interface DataLakeAnalyticsUsqlActivityTypePropertiesParameters {
	readonly [key: string]: any;
}
export interface Dataset {
	readonly annotations?: any[];
	readonly description?: string;
	readonly folder?: DatasetFolder;
	readonly linkedServiceName: LinkedServiceReference;
	readonly parameters?: ParameterDefinitionSpecification;
	readonly schema?: any;
	readonly structure?: any;
}
export interface DatasetCompression {
	readonly level?: any;
	readonly type: any;
	readonly [key: string]: any;
}
export interface DatasetFolder {
	readonly name?: string;
}
export interface DatasetLocation {
	readonly fileName?: any;
	readonly folderPath?: any;
}
export interface DatasetReference {
	readonly parameters?: ParameterValueSpecification;
	readonly referenceName: string;
	readonly type: "DatasetReference";
}
export interface DatasetStorageFormat {
	readonly deserializer?: any;
	readonly serializer?: any;
}
export interface DataworldLinkedServiceTypeProperties {
	readonly apiToken: SecretBase;
	readonly encryptedCredential?: any;
}
export interface Db2LinkedServiceTypeProperties {
	readonly authenticationType?: "Basic";
	readonly certificateCommonName?: any;
	readonly connectionString?: any;
	readonly database?: any;
	readonly encryptedCredential?: any;
	readonly packageCollection?: any;
	readonly password?: SecretBase;
	readonly server?: any;
	readonly username?: any;
}
export interface Db2TableDatasetTypeProperties {
	readonly schema?: any;
	readonly table?: any;
	readonly tableName?: any;
}
export interface DeleteActivityTypeProperties {
	readonly dataset: DatasetReference;
	readonly enableLogging?: any;
	readonly logStorageSettings?: LogStorageSettings;
	readonly maxConcurrentConnections?: number;
	readonly recursive?: any;
	readonly storeSettings?: StoreReadSettings;
}
export interface DelimitedTextDatasetTypeProperties {
	readonly columnDelimiter?: any;
	readonly compressionCodec?: any;
	readonly compressionLevel?: any;
	readonly encodingName?: any;
	readonly escapeChar?: any;
	readonly firstRowAsHeader?: any;
	readonly location: DatasetLocation;
	readonly nullValue?: any;
	readonly quoteChar?: any;
	readonly rowDelimiter?: any;
}
export interface DelimitedTextReadSettings {
	readonly compressionProperties?: CompressionReadSettings;
	readonly skipLineCount?: any;
	readonly type: string;
	readonly [key: string]: any;
}
export interface DelimitedTextWriteSettings {
	readonly fileExtension: any;
	readonly fileNamePrefix?: any;
	readonly maxRowsPerFile?: any;
	readonly quoteAllText?: any;
	readonly type: string;
	readonly [key: string]: any;
}
export interface DependencyReference {}
export interface DistcpSettings {
	readonly distcpOptions?: any;
	readonly resourceManagerEndpoint: any;
	readonly tempScriptPath: any;
}
export interface DocumentDbCollectionDatasetTypeProperties {
	readonly collectionName: any;
}
export interface DrillDatasetTypeProperties {
	readonly schema?: any;
	readonly table?: any;
	readonly tableName?: any;
}
export interface DrillLinkedServiceTypeProperties {
	readonly connectionString?: any;
	readonly encryptedCredential?: any;
	readonly pwd?: AzureKeyVaultSecretReference;
}
export interface DWCopyCommandDefaultValue {
	readonly columnName?: any;
	readonly defaultValue?: any;
}
export interface DWCopyCommandSettings {
	readonly additionalOptions?: DWCopyCommandSettingsAdditionalOptions;
	readonly defaultValues?: DWCopyCommandDefaultValue[];
}
export interface DWCopyCommandSettingsAdditionalOptions {
	readonly [key: string]: string;
}
export interface DynamicsAXLinkedServiceTypeProperties {
	readonly aadResourceId: any;
	readonly encryptedCredential?: any;
	readonly servicePrincipalId: any;
	readonly servicePrincipalKey: SecretBase;
	readonly tenant: any;
	readonly url: any;
}
export interface DynamicsAXResourceDatasetTypeProperties {
	readonly path: any;
}
export interface DynamicsCrmEntityDatasetTypeProperties {
	readonly entityName?: any;
}
export interface DynamicsCrmLinkedServiceTypeProperties {
	readonly authenticationType: any;
	readonly deploymentType: any;
	readonly encryptedCredential?: any;
	readonly hostName?: any;
	readonly organizationName?: any;
	readonly password?: SecretBase;
	readonly port?: any;
	readonly servicePrincipalCredential?: SecretBase;
	readonly servicePrincipalCredentialType?: any;
	readonly servicePrincipalId?: any;
	readonly serviceUri?: any;
	readonly username?: any;
}
export interface DynamicsEntityDatasetTypeProperties {
	readonly entityName?: any;
}
export interface DynamicsLinkedServiceTypeProperties {
	readonly authenticationType: any;
	readonly credential?: CredentialReference;
	readonly deploymentType: any;
	readonly encryptedCredential?: any;
	readonly hostName?: any;
	readonly organizationName?: any;
	readonly password?: SecretBase;
	readonly port?: any;
	readonly servicePrincipalCredential?: SecretBase;
	readonly servicePrincipalCredentialType?: any;
	readonly servicePrincipalId?: any;
	readonly serviceUri?: any;
	readonly username?: any;
}
export interface EloquaLinkedServiceTypeProperties {
	readonly encryptedCredential?: any;
	readonly endpoint: any;
	readonly password?: SecretBase;
	readonly useEncryptedEndpoints?: any;
	readonly useHostVerification?: any;
	readonly usePeerVerification?: any;
	readonly username: any;
}
export interface EncryptionConfiguration {
	readonly identity?: CMKIdentityDefinition;
	readonly keyName: string;
	readonly keyVersion?: string;
	readonly vaultBaseUrl: string;
}
export interface EntityReference {
	readonly referenceName?: string;
	readonly type?: "IntegrationRuntimeReference" | "LinkedServiceReference";
}
export interface EnvironmentVariableSetupTypeProperties {
	readonly variableName: string;
	readonly variableValue: string;
}
export interface ExcelDatasetTypeProperties {
	readonly compression?: DatasetCompression;
	readonly firstRowAsHeader?: any;
	readonly location: DatasetLocation;
	readonly nullValue?: any;
	readonly range?: any;
	readonly sheetIndex?: any;
	readonly sheetName?: any;
}
export interface ExecuteDataFlowActivityTypeProperties {
	readonly compute?: ExecuteDataFlowActivityTypePropertiesCompute;
	readonly continueOnError?: any;
	readonly dataFlow: DataFlowReference;
	readonly integrationRuntime?: IntegrationRuntimeReference;
	readonly runConcurrently?: any;
	readonly sourceStagingConcurrency?: any;
	readonly staging?: DataFlowStagingInfo;
	readonly traceLevel?: any;
}
export interface ExecuteDataFlowActivityTypePropertiesCompute {
	readonly computeType?: any;
	readonly coreCount?: any;
}
export interface ExecutePipelineActivityPolicy {
	readonly secureInput?: boolean;
	readonly [key: string]: any;
}
export interface ExecutePipelineActivityTypeProperties {
	readonly parameters?: ParameterValueSpecification;
	readonly pipeline: PipelineReference;
	readonly waitOnCompletion?: boolean;
}
export interface ExecutePowerQueryActivityTypeProperties {
	readonly compute?: ExecuteDataFlowActivityTypePropertiesCompute;
	readonly continueOnError?: any;
	readonly dataFlow: DataFlowReference;
	readonly integrationRuntime?: IntegrationRuntimeReference;
	readonly queries?: PowerQuerySinkMapping[];
	readonly runConcurrently?: any;
	readonly sinks?: ExecutePowerQueryActivityTypePropertiesSinks;
	readonly sourceStagingConcurrency?: any;
	readonly staging?: DataFlowStagingInfo;
	readonly traceLevel?: any;
}
export interface ExecutePowerQueryActivityTypePropertiesSinks {
	readonly [key: string]: PowerQuerySink;
}
export interface ExecuteSsisPackageActivityTypeProperties {
	readonly connectVia: IntegrationRuntimeReference;
	readonly environmentPath?: any;
	readonly executionCredential?: SsisExecutionCredential;
	readonly loggingLevel?: any;
	readonly logLocation?: SsisLogLocation;
	readonly packageConnectionManagers?: ExecuteSsisPackageActivityTypePropertiesPackageConnectionManagers;
	readonly packageLocation: SsisPackageLocation;
	readonly packageParameters?: ExecuteSsisPackageActivityTypePropertiesPackageParameters;
	readonly projectConnectionManagers?: ExecuteSsisPackageActivityTypePropertiesProjectConnectionManagers;
	readonly projectParameters?: ExecuteSsisPackageActivityTypePropertiesProjectParameters;
	readonly propertyOverrides?: ExecuteSsisPackageActivityTypePropertiesPropertyOverrides;
	readonly runtime?: any;
}
export interface ExecuteSsisPackageActivityTypePropertiesPackageConnectionManagers {
	readonly [key: string]: SsisConnectionManager;
}
export interface ExecuteSsisPackageActivityTypePropertiesPackageParameters {
	readonly [key: string]: SsisExecutionParameter;
}
export interface ExecuteSsisPackageActivityTypePropertiesProjectConnectionManagers {
	readonly [key: string]: SsisConnectionManager;
}
export interface ExecuteSsisPackageActivityTypePropertiesProjectParameters {
	readonly [key: string]: SsisExecutionParameter;
}
export interface ExecuteSsisPackageActivityTypePropertiesPropertyOverrides {
	readonly [key: string]: SsisPropertyOverride;
}
export interface Expression {
	readonly type: "Expression";
	readonly value: string;
}
export interface FactoryIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type: "SystemAssigned" | "SystemAssigned,UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: UserAssignedIdentitiesDefinitionSpecification;
}
export interface FactoryProperties {
	readonly createTime?: string;
	readonly encryption?: EncryptionConfiguration;
	readonly globalParameters?: GlobalParameterDefinitionSpecification;
	readonly provisioningState?: string;
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
	readonly purviewConfiguration?: PurviewConfiguration;
	readonly repoConfiguration?: FactoryRepoConfiguration;
	readonly version?: string;
}
export interface FactoryRepoConfiguration {
	readonly accountName: string;
	readonly collaborationBranch: string;
	readonly disablePublish?: boolean;
	readonly lastCommitId?: string;
	readonly repositoryName: string;
	readonly rootFolder: string;
}
export interface FailActivityTypeProperties {
	readonly errorCode: any;
	readonly message: any;
}
export interface FileServerLinkedServiceTypeProperties {
	readonly encryptedCredential?: any;
	readonly host: any;
	readonly password?: SecretBase;
	readonly userId?: any;
}
export interface FileShareDatasetTypeProperties {
	readonly compression?: DatasetCompression;
	readonly fileFilter?: any;
	readonly fileName?: any;
	readonly folderPath?: any;
	readonly format?: DatasetStorageFormat;
	readonly modifiedDatetimeEnd?: any;
	readonly modifiedDatetimeStart?: any;
}
export interface FilterActivityTypeProperties {
	readonly condition: Expression;
	readonly items: Expression;
}
export interface FlowletTypeProperties {
	readonly script?: string;
	readonly scriptLines?: string[];
	readonly sinks?: DataFlowSink[];
	readonly sources?: DataFlowSource[];
	readonly transformations?: Transformation[];
}
export interface ForEachActivityTypeProperties {
	readonly activities: Activity[];
	readonly batchCount?: number;
	readonly isSequential?: boolean;
	readonly items: Expression;
}
export interface FormatReadSettings {}
export interface FtpServerLinkedServiceTypeProperties {
	readonly authenticationType?: "Anonymous" | "Basic";
	readonly enableServerCertificateValidation?: any;
	readonly enableSsl?: any;
	readonly encryptedCredential?: any;
	readonly host: any;
	readonly password?: SecretBase;
	readonly port?: any;
	readonly userName?: any;
}
export interface GenericDatasetTypeProperties {
	readonly tableName?: any;
}
export interface GetMetadataActivityTypeProperties {
	readonly dataset: DatasetReference;
	readonly fieldList?: any[];
	readonly formatSettings?: FormatReadSettings;
	readonly storeSettings?: StoreReadSettings;
}
export interface GitHubClientSecret {
	readonly byoaSecretAkvUrl?: string;
	readonly byoaSecretName?: string;
}
export interface GlobalParameter {
	readonly [key: string]: GlobalParameterSpecification;
}
export interface GlobalParameterDefinitionSpecification {
	readonly [key: string]: GlobalParameterSpecification;
}
export interface GlobalParameterSpecification {
	readonly type: "Array" | "Bool" | "Float" | "Int" | "Object" | "String";
	readonly value: any;
}
export interface GoogleAdWordsLinkedServiceTypeProperties {
	readonly authenticationType?: "ServiceAuthentication" | "UserAuthentication";
	readonly clientCustomerID?: any;
	readonly clientId?: any;
	readonly clientSecret?: SecretBase;
	readonly connectionProperties?: any;
	readonly developerToken?: SecretBase;
	readonly email?: any;
	readonly encryptedCredential?: any;
	readonly keyFilePath?: any;
	readonly refreshToken?: SecretBase;
	readonly trustedCertPath?: any;
	readonly useSystemTrustStore?: any;
}
export interface GoogleBigQueryDatasetTypeProperties {
	readonly dataset?: any;
	readonly table?: any;
	readonly tableName?: any;
}
export interface GoogleBigQueryLinkedServiceTypeProperties {
	readonly additionalProjects?: any;
	readonly authenticationType: "ServiceAuthentication" | "UserAuthentication";
	readonly clientId?: any;
	readonly clientSecret?: SecretBase;
	readonly email?: any;
	readonly encryptedCredential?: any;
	readonly keyFilePath?: any;
	readonly project: any;
	readonly refreshToken?: SecretBase;
	readonly requestGoogleDriveScope?: any;
	readonly trustedCertPath?: any;
	readonly useSystemTrustStore?: any;
}
export interface GoogleCloudStorageLinkedServiceTypeProperties {
	readonly accessKeyId?: any;
	readonly encryptedCredential?: any;
	readonly secretAccessKey?: SecretBase;
	readonly serviceUrl?: any;
}
export interface GoogleSheetsLinkedServiceTypeProperties {
	readonly apiToken: SecretBase;
	readonly encryptedCredential?: any;
}
export interface GreenplumDatasetTypeProperties {
	readonly schema?: any;
	readonly table?: any;
	readonly tableName?: any;
}
export interface GreenplumLinkedServiceTypeProperties {
	readonly connectionString?: any;
	readonly encryptedCredential?: any;
	readonly pwd?: AzureKeyVaultSecretReference;
}
export interface HBaseLinkedServiceTypeProperties {
	readonly allowHostNameCNMismatch?: any;
	readonly allowSelfSignedServerCert?: any;
	readonly authenticationType: "Anonymous" | "Basic";
	readonly enableSsl?: any;
	readonly encryptedCredential?: any;
	readonly host: any;
	readonly httpPath?: any;
	readonly password?: SecretBase;
	readonly port?: any;
	readonly trustedCertPath?: any;
	readonly username?: any;
}
export interface HdfsLinkedServiceTypeProperties {
	readonly authenticationType?: any;
	readonly encryptedCredential?: any;
	readonly password?: SecretBase;
	readonly url: any;
	readonly userName?: any;
}
export interface HDInsightHiveActivityTypeProperties {
	readonly arguments?: any[];
	readonly defines?: HDInsightHiveActivityTypePropertiesDefines;
	readonly getDebugInfo?: "Always" | "Failure" | "None";
	readonly queryTimeout?: number;
	readonly scriptLinkedService?: LinkedServiceReference;
	readonly scriptPath?: any;
	readonly storageLinkedServices?: LinkedServiceReference[];
	readonly variables?: any[];
}
export interface HDInsightHiveActivityTypePropertiesDefines {
	readonly [key: string]: any;
}
export interface HDInsightLinkedServiceTypeProperties {
	readonly clusterUri: any;
	readonly encryptedCredential?: any;
	readonly fileSystem?: any;
	readonly hcatalogLinkedServiceName?: LinkedServiceReference;
	readonly isEspEnabled?: any;
	readonly linkedServiceName?: LinkedServiceReference;
	readonly password?: SecretBase;
	readonly userName?: any;
}
export interface HDInsightMapReduceActivityTypeProperties {
	readonly arguments?: any[];
	readonly className: any;
	readonly defines?: HDInsightMapReduceActivityTypePropertiesDefines;
	readonly getDebugInfo?: "Always" | "Failure" | "None";
	readonly jarFilePath: any;
	readonly jarLibs?: any[];
	readonly jarLinkedService?: LinkedServiceReference;
	readonly storageLinkedServices?: LinkedServiceReference[];
}
export interface HDInsightMapReduceActivityTypePropertiesDefines {
	readonly [key: string]: any;
}
export interface HDInsightOnDemandLinkedServiceTypeProperties {
	readonly additionalLinkedServiceNames?: LinkedServiceReference[];
	readonly clusterNamePrefix?: any;
	readonly clusterPassword?: SecretBase;
	readonly clusterResourceGroup: any;
	readonly clusterSize: any;
	readonly clusterSshPassword?: SecretBase;
	readonly clusterSshUserName?: any;
	readonly clusterType?: any;
	readonly clusterUserName?: any;
	readonly coreConfiguration?: any;
	readonly credential?: CredentialReference;
	readonly dataNodeSize?: any;
	readonly encryptedCredential?: any;
	readonly hBaseConfiguration?: any;
	readonly hcatalogLinkedServiceName?: LinkedServiceReference;
	readonly hdfsConfiguration?: any;
	readonly headNodeSize?: any;
	readonly hiveConfiguration?: any;
	readonly hostSubscriptionId: any;
	readonly linkedServiceName: LinkedServiceReference;
	readonly mapReduceConfiguration?: any;
	readonly oozieConfiguration?: any;
	readonly scriptActions?: ScriptAction[];
	readonly servicePrincipalId?: any;
	readonly servicePrincipalKey?: SecretBase;
	readonly sparkVersion?: any;
	readonly stormConfiguration?: any;
	readonly subnetName?: any;
	readonly tenant: any;
	readonly timeToLive: any;
	readonly version: any;
	readonly virtualNetworkId?: any;
	readonly yarnConfiguration?: any;
	readonly zookeeperNodeSize?: any;
}
export interface HDInsightPigActivityTypeProperties {
	readonly arguments?: any;
	readonly defines?: HDInsightPigActivityTypePropertiesDefines;
	readonly getDebugInfo?: "Always" | "Failure" | "None";
	readonly scriptLinkedService?: LinkedServiceReference;
	readonly scriptPath?: any;
	readonly storageLinkedServices?: LinkedServiceReference[];
}
export interface HDInsightPigActivityTypePropertiesDefines {
	readonly [key: string]: any;
}
export interface HDInsightSparkActivityTypeProperties {
	readonly arguments?: any[];
	readonly className?: string;
	readonly entryFilePath: any;
	readonly getDebugInfo?: "Always" | "Failure" | "None";
	readonly proxyUser?: any;
	readonly rootPath: any;
	readonly sparkConfig?: HDInsightSparkActivityTypePropertiesSparkConfig;
	readonly sparkJobLinkedService?: LinkedServiceReference;
}
export interface HDInsightSparkActivityTypePropertiesSparkConfig {
	readonly [key: string]: any;
}
export interface HDInsightStreamingActivityTypeProperties {
	readonly arguments?: any[];
	readonly combiner?: any;
	readonly commandEnvironment?: any[];
	readonly defines?: HDInsightStreamingActivityTypePropertiesDefines;
	readonly fileLinkedService?: LinkedServiceReference;
	readonly filePaths: any[];
	readonly getDebugInfo?: "Always" | "Failure" | "None";
	readonly input: any;
	readonly mapper: any;
	readonly output: any;
	readonly reducer: any;
	readonly storageLinkedServices?: LinkedServiceReference[];
}
export interface HDInsightStreamingActivityTypePropertiesDefines {
	readonly [key: string]: any;
}
export interface HiveDatasetTypeProperties {
	readonly schema?: any;
	readonly table?: any;
	readonly tableName?: any;
}
export interface HiveLinkedServiceTypeProperties {
	readonly allowHostNameCNMismatch?: any;
	readonly allowSelfSignedServerCert?: any;
	readonly authenticationType: "Anonymous" | "Username" | "UsernameAndPassword" | "WindowsAzureHDInsightService";
	readonly enableSsl?: any;
	readonly encryptedCredential?: any;
	readonly host: any;
	readonly httpPath?: any;
	readonly password?: SecretBase;
	readonly port?: any;
	readonly serverType?: "HiveServer1" | "HiveServer2" | "HiveThriftServer";
	readonly serviceDiscoveryMode?: any;
	readonly thriftTransportProtocol?: "Binary" | "HTTP" | "SASL";
	readonly trustedCertPath?: any;
	readonly useNativeQuery?: any;
	readonly username?: any;
	readonly useSystemTrustStore?: any;
	readonly zooKeeperNameSpace?: any;
}
export interface HttpDatasetTypeProperties {
	readonly additionalHeaders?: any;
	readonly compression?: DatasetCompression;
	readonly format?: DatasetStorageFormat;
	readonly relativeUrl?: any;
	readonly requestBody?: any;
	readonly requestMethod?: any;
}
export interface HttpLinkedServiceTypeProperties {
	readonly authenticationType?: "Anonymous" | "Basic" | "ClientCertificate" | "Digest" | "Windows";
	readonly authHeaders?: any;
	readonly certThumbprint?: any;
	readonly embeddedCertData?: any;
	readonly enableServerCertificateValidation?: any;
	readonly encryptedCredential?: any;
	readonly password?: SecretBase;
	readonly url: any;
	readonly userName?: any;
}
export interface HubspotLinkedServiceTypeProperties {
	readonly accessToken?: SecretBase;
	readonly clientId: any;
	readonly clientSecret?: SecretBase;
	readonly encryptedCredential?: any;
	readonly refreshToken?: SecretBase;
	readonly useEncryptedEndpoints?: any;
	readonly useHostVerification?: any;
	readonly usePeerVerification?: any;
}
export interface IfConditionActivityTypeProperties {
	readonly expression: Expression;
	readonly ifFalseActivities?: Activity[];
	readonly ifTrueActivities?: Activity[];
}
export interface ImpalaDatasetTypeProperties {
	readonly schema?: any;
	readonly table?: any;
	readonly tableName?: any;
}
export interface ImpalaLinkedServiceTypeProperties {
	readonly allowHostNameCNMismatch?: any;
	readonly allowSelfSignedServerCert?: any;
	readonly authenticationType: "Anonymous" | "SASLUsername" | "UsernameAndPassword";
	readonly enableSsl?: any;
	readonly encryptedCredential?: any;
	readonly host: any;
	readonly password?: SecretBase;
	readonly port?: any;
	readonly trustedCertPath?: any;
	readonly username?: any;
	readonly useSystemTrustStore?: any;
}
export interface InformixLinkedServiceTypeProperties {
	readonly authenticationType?: any;
	readonly connectionString: any;
	readonly credential?: SecretBase;
	readonly encryptedCredential?: any;
	readonly password?: SecretBase;
	readonly userName?: any;
}
export interface InformixTableDatasetTypeProperties {
	readonly tableName?: any;
}
export interface IntegrationRuntime {
	readonly description?: string;
}
export interface IntegrationRuntimeAuthKeys {
	readonly authKey1?: string;
	readonly authKey2?: string;
}
export interface IntegrationRuntimeComputeProperties {
	readonly dataFlowProperties?: IntegrationRuntimeDataFlowProperties;
	readonly location?: string;
	readonly maxParallelExecutionsPerNode?: number;
	readonly nodeSize?: string;
	readonly numberOfNodes?: number;
	readonly vNetProperties?: IntegrationRuntimeVNetProperties;
	readonly [key: string]: any;
}
export interface IntegrationRuntimeCustomerVirtualNetwork {
	readonly subnetId?: string;
}
export interface IntegrationRuntimeCustomSetupScriptProperties {
	readonly blobContainerUri?: string;
	readonly sasToken?: SecureString;
}
export interface IntegrationRuntimeDataFlowProperties {
	readonly cleanup?: boolean;
	readonly computeType?: "ComputeOptimized" | "General" | "MemoryOptimized";
	readonly coreCount?: number;
	readonly timeToLive?: number;
	readonly [key: string]: any;
}
export interface IntegrationRuntimeDataProxyProperties {
	readonly connectVia?: EntityReference;
	readonly path?: string;
	readonly stagingLinkedService?: EntityReference;
}
export interface IntegrationRuntimeReference {
	readonly parameters?: ParameterValueSpecification;
	readonly referenceName: string;
	readonly type: "IntegrationRuntimeReference";
}
export interface IntegrationRuntimeSsisCatalogInfo {
	readonly catalogAdminPassword?: SecureString;
	readonly catalogAdminUserName?: string;
	readonly catalogPricingTier?: "Basic" | "Premium" | "PremiumRS" | "Standard";
	readonly catalogServerEndpoint?: string;
	readonly dualStandbyPairName?: string;
	readonly [key: string]: any;
}
export interface IntegrationRuntimeSsisProperties {
	readonly catalogInfo?: IntegrationRuntimeSsisCatalogInfo;
	readonly credential?: CredentialReference;
	readonly customSetupScriptProperties?: IntegrationRuntimeCustomSetupScriptProperties;
	readonly dataProxyProperties?: IntegrationRuntimeDataProxyProperties;
	readonly edition?: "Enterprise" | "Standard";
	readonly expressCustomSetupProperties?: CustomSetupBase[];
	readonly licenseType?: "BasePrice" | "LicenseIncluded";
	readonly packageStores?: PackageStore[];
	readonly [key: string]: any;
}
export interface IntegrationRuntimeVNetProperties {
	readonly publicIPs?: string[];
	readonly subnet?: string;
	readonly subnetId?: string;
	readonly vNetId?: string;
	readonly [key: string]: any;
}
export interface JiraLinkedServiceTypeProperties {
	readonly encryptedCredential?: any;
	readonly host: any;
	readonly password?: SecretBase;
	readonly port?: any;
	readonly useEncryptedEndpoints?: any;
	readonly useHostVerification?: any;
	readonly usePeerVerification?: any;
	readonly username: any;
}
export interface JsonDatasetTypeProperties {
	readonly compression?: DatasetCompression;
	readonly encodingName?: any;
	readonly location: DatasetLocation;
}
export interface JsonReadSettings {
	readonly compressionProperties?: CompressionReadSettings;
	readonly type: string;
	readonly [key: string]: any;
}
export interface JsonWriteSettings {
	readonly filePattern?: any;
	readonly type: string;
	readonly [key: string]: any;
}
export interface LicensedComponentSetupTypeProperties {
	readonly componentName: string;
	readonly licenseKey?: SecretBase;
}
export interface LinkedIntegrationRuntimeType {}
export interface LinkedService {
	readonly annotations?: any[];
	readonly connectVia?: IntegrationRuntimeReference;
	readonly description?: string;
	readonly parameters?: ParameterDefinitionSpecification;
}
export interface LinkedServiceReference {
	readonly parameters?: ParameterValueSpecification;
	readonly referenceName: string;
	readonly type: "LinkedServiceReference";
}
export interface LogLocationSettings {
	readonly linkedServiceName: LinkedServiceReference;
	readonly path?: any;
}
export interface LogSettings {
	readonly copyActivityLogSettings?: CopyActivityLogSettings;
	readonly enableCopyActivityLog?: any;
	readonly logLocationSettings: LogLocationSettings;
}
export interface LogStorageSettings {
	readonly enableReliableLogging?: any;
	readonly linkedServiceName: LinkedServiceReference;
	readonly logLevel?: any;
	readonly path?: any;
	readonly [key: string]: any;
}
export interface LookupActivityTypeProperties {
	readonly dataset: DatasetReference;
	readonly firstRowOnly?: any;
	readonly source: CopySource;
}
export interface MagentoLinkedServiceTypeProperties {
	readonly accessToken?: SecretBase;
	readonly encryptedCredential?: any;
	readonly host: any;
	readonly useEncryptedEndpoints?: any;
	readonly useHostVerification?: any;
	readonly usePeerVerification?: any;
}
export interface ManagedIdentityCredential {
	readonly annotations?: any[];
	readonly description?: string;
	readonly type: string;
	readonly typeProperties?: ManagedIdentityTypeProperties;
	readonly [key: string]: any;
}
export interface ManagedIdentityTypeProperties {
	readonly resourceId?: string;
}
export interface ManagedIntegrationRuntimeTypeProperties {
	readonly computeProperties?: IntegrationRuntimeComputeProperties;
	readonly customerVirtualNetwork?: IntegrationRuntimeCustomerVirtualNetwork;
	readonly ssisProperties?: IntegrationRuntimeSsisProperties;
}
export interface ManagedPrivateEndpoint {
	readonly connectionState?: ConnectionStateProperties;
	readonly fqdns?: string[];
	readonly groupId?: string;
	readonly isReserved?: boolean;
	readonly privateLinkResourceId?: string;
	readonly provisioningState?: string;
	readonly [key: string]: any;
}
export interface ManagedVirtualNetwork {
	readonly alias?: string;
	readonly vNetId?: string;
	readonly [key: string]: any;
}
export interface ManagedVirtualNetworkReference {
	readonly referenceName: string;
	readonly type: "ManagedVirtualNetworkReference";
}
export interface MappingDataFlowTypeProperties {
	readonly script?: string;
	readonly scriptLines?: string[];
	readonly sinks?: DataFlowSink[];
	readonly sources?: DataFlowSource[];
	readonly transformations?: Transformation[];
}
export interface MariaDBLinkedServiceTypeProperties {
	readonly connectionString?: any;
	readonly encryptedCredential?: any;
	readonly pwd?: AzureKeyVaultSecretReference;
}
export interface MarketoLinkedServiceTypeProperties {
	readonly clientId: any;
	readonly clientSecret?: SecretBase;
	readonly encryptedCredential?: any;
	readonly endpoint: any;
	readonly useEncryptedEndpoints?: any;
	readonly useHostVerification?: any;
	readonly usePeerVerification?: any;
}
export interface MetadataItem {
	readonly name?: any;
	readonly value?: any;
}
export interface MicrosoftAccessLinkedServiceTypeProperties {
	readonly authenticationType?: any;
	readonly connectionString: any;
	readonly credential?: SecretBase;
	readonly encryptedCredential?: any;
	readonly password?: SecretBase;
	readonly userName?: any;
}
export interface MicrosoftAccessTableDatasetTypeProperties {
	readonly tableName?: any;
}
export interface MongoDbAtlasCollectionDatasetTypeProperties {
	readonly collection: any;
}
export interface MongoDbAtlasLinkedServiceTypeProperties {
	readonly connectionString: any;
	readonly database: any;
}
export interface MongoDbCollectionDatasetTypeProperties {
	readonly collectionName: any;
}
export interface MongoDbCursorMethodsProperties {
	readonly limit?: any;
	readonly project?: any;
	readonly skip?: any;
	readonly sort?: any;
	readonly [key: string]: any;
}
export interface MongoDbLinkedServiceTypeProperties {
	readonly allowSelfSignedServerCert?: any;
	readonly authenticationType?: "Anonymous" | "Basic";
	readonly authSource?: any;
	readonly databaseName: any;
	readonly enableSsl?: any;
	readonly encryptedCredential?: any;
	readonly password?: SecretBase;
	readonly port?: any;
	readonly server: any;
	readonly username?: any;
}
export interface MongoDbV2CollectionDatasetTypeProperties {
	readonly collection: any;
}
export interface MongoDbV2LinkedServiceTypeProperties {
	readonly connectionString: any;
	readonly database: any;
}
export interface MySqlLinkedServiceTypeProperties {
	readonly connectionString: any;
	readonly encryptedCredential?: any;
	readonly password?: AzureKeyVaultSecretReference;
}
export interface MySqlTableDatasetTypeProperties {
	readonly tableName?: any;
}
export interface NetezzaLinkedServiceTypeProperties {
	readonly connectionString?: any;
	readonly encryptedCredential?: any;
	readonly pwd?: AzureKeyVaultSecretReference;
}
export interface NetezzaPartitionSettings {
	readonly partitionColumnName?: any;
	readonly partitionLowerBound?: any;
	readonly partitionUpperBound?: any;
}
export interface NetezzaTableDatasetTypeProperties {
	readonly schema?: any;
	readonly table?: any;
	readonly tableName?: any;
}
export interface NotebookParameter {
	readonly type?: "bool" | "float" | "int" | "string";
	readonly value?: any;
}
export interface ODataLinkedServiceTypeProperties {
	readonly aadResourceId?: any;
	readonly aadServicePrincipalCredentialType?: "ServicePrincipalCert" | "ServicePrincipalKey";
	readonly authenticationType?: "AadServicePrincipal" | "Anonymous" | "Basic" | "ManagedServiceIdentity" | "Windows";
	readonly authHeaders?: any;
	readonly azureCloudType?: any;
	readonly encryptedCredential?: any;
	readonly password?: SecretBase;
	readonly servicePrincipalEmbeddedCert?: SecretBase;
	readonly servicePrincipalEmbeddedCertPassword?: SecretBase;
	readonly servicePrincipalId?: any;
	readonly servicePrincipalKey?: SecretBase;
	readonly tenant?: any;
	readonly url: any;
	readonly userName?: any;
}
export interface ODataResourceDatasetTypeProperties {
	readonly path?: any;
}
export interface OdbcLinkedServiceTypeProperties {
	readonly authenticationType?: any;
	readonly connectionString: any;
	readonly credential?: SecretBase;
	readonly encryptedCredential?: any;
	readonly password?: SecretBase;
	readonly userName?: any;
}
export interface OdbcTableDatasetTypeProperties {
	readonly tableName?: any;
}
export interface Office365DatasetTypeProperties {
	readonly predicate?: any;
	readonly tableName: any;
}
export interface Office365LinkedServiceTypeProperties {
	readonly encryptedCredential?: any;
	readonly office365TenantId: any;
	readonly servicePrincipalId: any;
	readonly servicePrincipalKey: SecretBase;
	readonly servicePrincipalTenantId: any;
}
export interface OracleCloudStorageLinkedServiceTypeProperties {
	readonly accessKeyId?: any;
	readonly encryptedCredential?: any;
	readonly secretAccessKey?: SecretBase;
	readonly serviceUrl?: any;
}
export interface OracleLinkedServiceTypeProperties {
	readonly connectionString: any;
	readonly encryptedCredential?: any;
	readonly password?: AzureKeyVaultSecretReference;
}
export interface OraclePartitionSettings {
	readonly partitionColumnName?: any;
	readonly partitionLowerBound?: any;
	readonly partitionNames?: any;
	readonly partitionUpperBound?: any;
}
export interface OracleServiceCloudLinkedServiceTypeProperties {
	readonly encryptedCredential?: any;
	readonly host: any;
	readonly password: SecretBase;
	readonly useEncryptedEndpoints?: any;
	readonly useHostVerification?: any;
	readonly usePeerVerification?: any;
	readonly username: any;
}
export interface OracleTableDatasetTypeProperties {
	readonly schema?: any;
	readonly table?: any;
	readonly tableName?: any;
}
export interface OrcDatasetTypeProperties {
	readonly location: DatasetLocation;
	readonly orcCompressionCodec?: any;
}
export interface OrcWriteSettings {
	readonly fileNamePrefix?: any;
	readonly maxRowsPerFile?: any;
	readonly type: string;
	readonly [key: string]: any;
}
export interface PackageStore {
	readonly name: string;
	readonly packageStoreLinkedService: EntityReference;
}
export interface ParameterDefinitionSpecification {
	readonly [key: string]: ParameterSpecification;
}
export interface ParameterSpecification {
	readonly defaultValue?: any;
	readonly type: "Array" | "Bool" | "Float" | "Int" | "Object" | "SecureString" | "String";
}
export interface ParameterValueSpecification {
	readonly [key: string]: any;
}
export interface ParquetDatasetTypeProperties {
	readonly compressionCodec?: any;
	readonly location: DatasetLocation;
}
export interface ParquetWriteSettings {
	readonly fileNamePrefix?: any;
	readonly maxRowsPerFile?: any;
	readonly type: string;
	readonly [key: string]: any;
}
export interface PaypalLinkedServiceTypeProperties {
	readonly clientId: any;
	readonly clientSecret?: SecretBase;
	readonly encryptedCredential?: any;
	readonly host: any;
	readonly useEncryptedEndpoints?: any;
	readonly useHostVerification?: any;
	readonly usePeerVerification?: any;
}
export interface PhoenixDatasetTypeProperties {
	readonly schema?: any;
	readonly table?: any;
	readonly tableName?: any;
}
export interface PhoenixLinkedServiceTypeProperties {
	readonly allowHostNameCNMismatch?: any;
	readonly allowSelfSignedServerCert?: any;
	readonly authenticationType: "Anonymous" | "UsernameAndPassword" | "WindowsAzureHDInsightService";
	readonly enableSsl?: any;
	readonly encryptedCredential?: any;
	readonly host: any;
	readonly httpPath?: any;
	readonly password?: SecretBase;
	readonly port?: any;
	readonly trustedCertPath?: any;
	readonly username?: any;
	readonly useSystemTrustStore?: any;
}
export interface Pipeline {
	readonly activities?: Activity[];
	readonly annotations?: any[];
	readonly concurrency?: number;
	readonly description?: string;
	readonly folder?: PipelineFolder;
	readonly parameters?: ParameterDefinitionSpecification;
	readonly policy?: PipelinePolicy;
	readonly runDimensions?: PipelineRunDimensions;
	readonly variables?: VariableDefinitionSpecification;
}
export interface PipelineElapsedTimeMetricPolicy {
	readonly duration?: any;
}
export interface PipelineFolder {
	readonly name?: string;
}
export interface PipelinePolicy {
	readonly elapsedTimeMetric?: PipelineElapsedTimeMetricPolicy;
}
export interface PipelineReference {
	readonly name?: string;
	readonly referenceName: string;
	readonly type: "PipelineReference";
}
export interface PipelineRunDimensions {
	readonly [key: string]: any;
}
export interface PolybaseSettings {
	readonly rejectSampleValue?: any;
	readonly rejectType?: "percentage" | "value";
	readonly rejectValue?: any;
	readonly useTypeDefault?: any;
	readonly [key: string]: any;
}
export interface PostgreSqlLinkedServiceTypeProperties {
	readonly connectionString: any;
	readonly encryptedCredential?: any;
	readonly password?: AzureKeyVaultSecretReference;
}
export interface PostgreSqlTableDatasetTypeProperties {
	readonly schema?: any;
	readonly table?: any;
	readonly tableName?: any;
}
export interface PowerQuerySink {
	readonly dataset?: DatasetReference;
	readonly description?: string;
	readonly flowlet?: DataFlowReference;
	readonly linkedService?: LinkedServiceReference;
	readonly name: string;
	readonly rejectedDataLinkedService?: LinkedServiceReference;
	readonly schemaLinkedService?: LinkedServiceReference;
	readonly script?: string;
}
export interface PowerQuerySinkMapping {
	readonly dataflowSinks?: PowerQuerySink[];
	readonly queryName?: string;
}
export interface PowerQuerySource {
	readonly dataset?: DatasetReference;
	readonly description?: string;
	readonly flowlet?: DataFlowReference;
	readonly linkedService?: LinkedServiceReference;
	readonly name: string;
	readonly schemaLinkedService?: LinkedServiceReference;
	readonly script?: string;
}
export interface PowerQueryTypeProperties {
	readonly documentLocale?: string;
	readonly script?: string;
	readonly sources?: PowerQuerySource[];
}
export interface PrestoDatasetTypeProperties {
	readonly schema?: any;
	readonly table?: any;
	readonly tableName?: any;
}
export interface PrestoLinkedServiceTypeProperties {
	readonly allowHostNameCNMismatch?: any;
	readonly allowSelfSignedServerCert?: any;
	readonly authenticationType: "Anonymous" | "LDAP";
	readonly catalog: any;
	readonly enableSsl?: any;
	readonly encryptedCredential?: any;
	readonly host: any;
	readonly password?: SecretBase;
	readonly port?: any;
	readonly serverVersion: any;
	readonly timeZoneID?: any;
	readonly trustedCertPath?: any;
	readonly username?: any;
	readonly useSystemTrustStore?: any;
}
export interface PrivateEndpointOrArmIdWrapper {
	readonly id?: string;
}
export interface PrivateLinkConnectionApprovalRequestOrRemotePrivateEndpointConnection {
	readonly privateEndpoint?: PrivateEndpointOrArmIdWrapper;
	readonly privateLinkServiceConnectionState?: PrivateLinkConnectionState;
	readonly provisioningState?: string;
}
export interface PrivateLinkConnectionState {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: string;
}
export interface PurviewConfiguration {
	readonly purviewResourceId?: string;
}
export interface QuickbaseLinkedServiceTypeProperties {
	readonly encryptedCredential?: any;
	readonly url: any;
	readonly userToken: SecretBase;
}
export interface QuickBooksLinkedServiceTypeProperties {
	readonly accessToken?: SecretBase;
	readonly accessTokenSecret?: SecretBase;
	readonly companyId?: any;
	readonly connectionProperties?: any;
	readonly consumerKey?: any;
	readonly consumerSecret?: SecretBase;
	readonly encryptedCredential?: any;
	readonly endpoint?: any;
	readonly useEncryptedEndpoints?: any;
}
export interface RecurrenceSchedule {
	readonly hours?: number[];
	readonly minutes?: number[];
	readonly monthDays?: number[];
	readonly monthlyOccurrences?: RecurrenceScheduleOccurrence[];
	readonly weekDays?: "Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday"[];
	readonly [key: string]: any;
}
export interface RecurrenceScheduleOccurrence {
	readonly day?: "Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday";
	readonly occurrence?: number;
	readonly [key: string]: any;
}
export interface RedirectIncompatibleRowSettings {
	readonly linkedServiceName: any;
	readonly path?: any;
	readonly [key: string]: any;
}
export interface RedshiftUnloadSettings {
	readonly bucketName: any;
	readonly s3LinkedServiceName: LinkedServiceReference;
}
export interface RelationalTableDatasetTypeProperties {
	readonly tableName?: any;
}
export interface RerunTumblingWindowTriggerTypeProperties {
	readonly parentTrigger: any;
	readonly requestedEndTime: string;
	readonly requestedStartTime: string;
	readonly rerunConcurrency: number;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface ResponsysLinkedServiceTypeProperties {
	readonly clientId: any;
	readonly clientSecret?: SecretBase;
	readonly encryptedCredential?: any;
	readonly endpoint: any;
	readonly useEncryptedEndpoints?: any;
	readonly useHostVerification?: any;
	readonly usePeerVerification?: any;
}
export interface RestResourceDatasetTypeProperties {
	readonly additionalHeaders?: any;
	readonly paginationRules?: any;
	readonly relativeUrl?: any;
	readonly requestBody?: any;
	readonly requestMethod?: any;
}
export interface RestServiceLinkedServiceTypeProperties {
	readonly aadResourceId?: any;
	readonly authenticationType:
		| "AadServicePrincipal"
		| "Anonymous"
		| "Basic"
		| "ManagedServiceIdentity"
		| "OAuth2ClientCredential";
	readonly authHeaders?: any;
	readonly azureCloudType?: any;
	readonly clientId?: any;
	readonly clientSecret?: SecretBase;
	readonly credential?: CredentialReference;
	readonly enableServerCertificateValidation?: any;
	readonly encryptedCredential?: any;
	readonly password?: SecretBase;
	readonly resource?: any;
	readonly scope?: any;
	readonly servicePrincipalId?: any;
	readonly servicePrincipalKey?: SecretBase;
	readonly tenant?: any;
	readonly tokenEndpoint?: any;
	readonly url: any;
	readonly userName?: any;
}
export interface RetryPolicy {
	readonly count?: any;
	readonly intervalInSeconds?: number;
}
export interface SalesforceLinkedServiceTypeProperties {
	readonly apiVersion?: any;
	readonly encryptedCredential?: any;
	readonly environmentUrl?: any;
	readonly password?: SecretBase;
	readonly securityToken?: SecretBase;
	readonly username?: any;
}
export interface SalesforceMarketingCloudLinkedServiceTypeProperties {
	readonly clientId?: any;
	readonly clientSecret?: SecretBase;
	readonly connectionProperties?: any;
	readonly encryptedCredential?: any;
	readonly useEncryptedEndpoints?: any;
	readonly useHostVerification?: any;
	readonly usePeerVerification?: any;
}
export interface SalesforceObjectDatasetTypeProperties {
	readonly objectApiName?: any;
}
export interface SalesforceServiceCloudLinkedServiceTypeProperties {
	readonly apiVersion?: any;
	readonly encryptedCredential?: any;
	readonly environmentUrl?: any;
	readonly extendedProperties?: any;
	readonly password?: SecretBase;
	readonly securityToken?: SecretBase;
	readonly username?: any;
}
export interface SalesforceServiceCloudObjectDatasetTypeProperties {
	readonly objectApiName?: any;
}
export interface SapBWLinkedServiceTypeProperties {
	readonly clientId: any;
	readonly encryptedCredential?: any;
	readonly password?: SecretBase;
	readonly server: any;
	readonly systemNumber: any;
	readonly userName?: any;
}
export interface SapCloudForCustomerLinkedServiceTypeProperties {
	readonly encryptedCredential?: any;
	readonly password?: SecretBase;
	readonly url: any;
	readonly username?: any;
}
export interface SapCloudForCustomerResourceDatasetTypeProperties {
	readonly path: any;
}
export interface SapEccLinkedServiceTypeProperties {
	readonly encryptedCredential?: string;
	readonly password?: SecretBase;
	readonly url: string;
	readonly username?: string;
}
export interface SapEccResourceDatasetTypeProperties {
	readonly path: any;
}
export interface SapHanaLinkedServiceProperties {
	readonly authenticationType?: "Basic" | "Windows";
	readonly connectionString?: any;
	readonly encryptedCredential?: any;
	readonly password?: SecretBase;
	readonly server?: any;
	readonly userName?: any;
}
export interface SapHanaPartitionSettings {
	readonly partitionColumnName?: any;
}
export interface SapHanaTableDatasetTypeProperties {
	readonly schema?: any;
	readonly table?: any;
}
export interface SapOdpLinkedServiceTypeProperties {
	readonly clientId?: any;
	readonly encryptedCredential?: any;
	readonly language?: any;
	readonly logonGroup?: any;
	readonly messageServer?: any;
	readonly messageServerService?: any;
	readonly password?: SecretBase;
	readonly server?: any;
	readonly sncLibraryPath?: any;
	readonly sncMode?: any;
	readonly sncMyName?: any;
	readonly sncPartnerName?: any;
	readonly sncQop?: any;
	readonly subscriberName?: any;
	readonly systemId?: any;
	readonly systemNumber?: any;
	readonly userName?: any;
	readonly x509CertificatePath?: any;
}
export interface SapOdpResourceDatasetTypeProperties {
	readonly context: any;
	readonly objectName: any;
}
export interface SapOpenHubLinkedServiceTypeProperties {
	readonly clientId?: any;
	readonly encryptedCredential?: any;
	readonly language?: any;
	readonly logonGroup?: any;
	readonly messageServer?: any;
	readonly messageServerService?: any;
	readonly password?: SecretBase;
	readonly server?: any;
	readonly systemId?: any;
	readonly systemNumber?: any;
	readonly userName?: any;
}
export interface SapOpenHubTableDatasetTypeProperties {
	readonly baseRequestId?: any;
	readonly excludeLastRequest?: any;
	readonly openHubDestinationName: any;
}
export interface SapTableLinkedServiceTypeProperties {
	readonly clientId?: any;
	readonly encryptedCredential?: any;
	readonly language?: any;
	readonly logonGroup?: any;
	readonly messageServer?: any;
	readonly messageServerService?: any;
	readonly password?: SecretBase;
	readonly server?: any;
	readonly sncLibraryPath?: any;
	readonly sncMode?: any;
	readonly sncMyName?: any;
	readonly sncPartnerName?: any;
	readonly sncQop?: any;
	readonly systemId?: any;
	readonly systemNumber?: any;
	readonly userName?: any;
}
export interface SapTablePartitionSettings {
	readonly maxPartitionsNumber?: any;
	readonly partitionColumnName?: any;
	readonly partitionLowerBound?: any;
	readonly partitionUpperBound?: any;
}
export interface SapTableResourceDatasetTypeProperties {
	readonly tableName: any;
}
export interface ScheduleTriggerRecurrence {
	readonly endTime?: string;
	readonly frequency?: "Day" | "Hour" | "Minute" | "Month" | "NotSpecified" | "Week" | "Year";
	readonly interval?: number;
	readonly schedule?: RecurrenceSchedule;
	readonly startTime?: string;
	readonly timeZone?: string;
	readonly [key: string]: any;
}
export interface ScheduleTriggerTypeProperties {
	readonly recurrence: ScheduleTriggerRecurrence;
}
export interface ScriptAction {
	readonly name: string;
	readonly parameters?: string;
	readonly roles: any;
	readonly uri: string;
}
export interface ScriptActivityParameter {
	readonly direction?: "Input" | "InputOutput" | "Output";
	readonly name?: any;
	readonly size?: number;
	readonly type?:
		| "Boolean"
		| "DateTime"
		| "DateTimeOffset"
		| "Decimal"
		| "Double"
		| "Guid"
		| "Int16"
		| "Int32"
		| "Int64"
		| "Single"
		| "String"
		| "Timespan";
	readonly value?: any;
}
export interface ScriptActivityScriptBlock {
	readonly parameters?: ScriptActivityParameter[];
	readonly text: any;
	readonly type: "NonQuery" | "Query";
}
export interface ScriptActivityTypeProperties {
	readonly logSettings?: ScriptActivityTypePropertiesLogSettings;
	readonly scriptBlockExecutionTimeout?: any;
	readonly scripts?: ScriptActivityScriptBlock[];
}
export interface ScriptActivityTypePropertiesLogSettings {
	readonly logDestination: "ActivityOutput" | "ExternalStore";
	readonly logLocationSettings?: LogLocationSettings;
}
export interface SecretBase {}
export interface SecureString {
	readonly type: string;
	readonly value: string;
}
export interface SelfHostedIntegrationRuntimeTypeProperties {
	readonly linkedInfo?: LinkedIntegrationRuntimeType;
}
export interface ServiceNowLinkedServiceTypeProperties {
	readonly authenticationType: "Basic" | "OAuth2";
	readonly clientId?: any;
	readonly clientSecret?: SecretBase;
	readonly encryptedCredential?: any;
	readonly endpoint: any;
	readonly password?: SecretBase;
	readonly useEncryptedEndpoints?: any;
	readonly useHostVerification?: any;
	readonly usePeerVerification?: any;
	readonly username?: any;
}
export interface SetVariableActivityTypeProperties {
	readonly value?: any;
	readonly variableName?: string;
}
export interface SftpServerLinkedServiceTypeProperties {
	readonly authenticationType?: "Basic" | "MultiFactor" | "SshPublicKey";
	readonly encryptedCredential?: any;
	readonly host: any;
	readonly hostKeyFingerprint?: any;
	readonly passPhrase?: SecretBase;
	readonly password?: SecretBase;
	readonly port?: any;
	readonly privateKeyContent?: SecretBase;
	readonly privateKeyPath?: any;
	readonly skipHostKeyValidation?: any;
	readonly userName?: any;
}
export interface SharePointOnlineListDatasetTypeProperties {
	readonly listName?: any;
}
export interface SharePointOnlineListLinkedServiceTypeProperties {
	readonly encryptedCredential?: any;
	readonly servicePrincipalId: any;
	readonly servicePrincipalKey: SecretBase;
	readonly siteUrl: any;
	readonly tenantId: any;
}
export interface ShopifyLinkedServiceTypeProperties {
	readonly accessToken?: SecretBase;
	readonly encryptedCredential?: any;
	readonly host: any;
	readonly useEncryptedEndpoints?: any;
	readonly useHostVerification?: any;
	readonly usePeerVerification?: any;
}
export interface SkipErrorFile {
	readonly dataInconsistency?: any;
	readonly fileMissing?: any;
}
export interface SmartsheetLinkedServiceTypeProperties {
	readonly apiToken: SecretBase;
	readonly encryptedCredential?: any;
}
export interface SnowflakeDatasetTypeProperties {
	readonly schema?: any;
	readonly table?: any;
}
export interface SnowflakeExportCopyCommand {
	readonly additionalCopyOptions?: SnowflakeExportCopyCommandAdditionalCopyOptions;
	readonly additionalFormatOptions?: SnowflakeExportCopyCommandAdditionalFormatOptions;
	readonly type: string;
	readonly [key: string]: any;
}
export interface SnowflakeExportCopyCommandAdditionalCopyOptions {
	readonly [key: string]: any;
}
export interface SnowflakeExportCopyCommandAdditionalFormatOptions {
	readonly [key: string]: any;
}
export interface SnowflakeImportCopyCommand {
	readonly additionalCopyOptions?: SnowflakeImportCopyCommandAdditionalCopyOptions;
	readonly additionalFormatOptions?: SnowflakeImportCopyCommandAdditionalFormatOptions;
	readonly type: string;
	readonly [key: string]: any;
}
export interface SnowflakeImportCopyCommandAdditionalCopyOptions {
	readonly [key: string]: any;
}
export interface SnowflakeImportCopyCommandAdditionalFormatOptions {
	readonly [key: string]: any;
}
export interface SnowflakeLinkedServiceTypeProperties {
	readonly connectionString: any;
	readonly encryptedCredential?: any;
	readonly password?: AzureKeyVaultSecretReference;
}
export interface SparkDatasetTypeProperties {
	readonly schema?: any;
	readonly table?: any;
	readonly tableName?: any;
}
export interface SparkLinkedServiceTypeProperties {
	readonly allowHostNameCNMismatch?: any;
	readonly allowSelfSignedServerCert?: any;
	readonly authenticationType: "Anonymous" | "Username" | "UsernameAndPassword" | "WindowsAzureHDInsightService";
	readonly enableSsl?: any;
	readonly encryptedCredential?: any;
	readonly host: any;
	readonly httpPath?: any;
	readonly password?: SecretBase;
	readonly port: any;
	readonly serverType?: "SharkServer" | "SharkServer2" | "SparkThriftServer";
	readonly thriftTransportProtocol?: "Binary" | "HTTP" | "SASL";
	readonly trustedCertPath?: any;
	readonly username?: any;
	readonly useSystemTrustStore?: any;
}
export interface SqlAlwaysEncryptedProperties {
	readonly alwaysEncryptedAkvAuthType: "ManagedIdentity" | "ServicePrincipal" | "UserAssignedManagedIdentity";
	readonly credential?: CredentialReference;
	readonly servicePrincipalId?: any;
	readonly servicePrincipalKey?: SecretBase;
}
export interface SqlDWUpsertSettings {
	readonly interimSchemaName?: any;
	readonly keys?: any;
}
export interface SqlPartitionSettings {
	readonly partitionColumnName?: any;
	readonly partitionLowerBound?: any;
	readonly partitionUpperBound?: any;
}
export interface SqlServerLinkedServiceTypeProperties {
	readonly alwaysEncryptedSettings?: SqlAlwaysEncryptedProperties;
	readonly connectionString: any;
	readonly encryptedCredential?: any;
	readonly password?: SecretBase;
	readonly userName?: any;
}
export interface SqlServerStoredProcedureActivityTypeProperties {
	readonly storedProcedureName: any;
	readonly storedProcedureParameters?: any;
}
export interface SqlServerTableDatasetTypeProperties {
	readonly schema?: any;
	readonly table?: any;
	readonly tableName?: any;
}
export interface SqlUpsertSettings {
	readonly interimSchemaName?: any;
	readonly keys?: any;
	readonly useTempDB?: any;
}
export interface SquareLinkedServiceTypeProperties {
	readonly clientId?: any;
	readonly clientSecret?: SecretBase;
	readonly connectionProperties?: any;
	readonly encryptedCredential?: any;
	readonly host?: any;
	readonly redirectUri?: any;
	readonly useEncryptedEndpoints?: any;
	readonly useHostVerification?: any;
	readonly usePeerVerification?: any;
}
export interface SsisAccessCredential {
	readonly domain: any;
	readonly password: SecretBase;
	readonly userName: any;
}
export interface SsisChildPackage {
	readonly packageContent: any;
	readonly packageLastModifiedDate?: string;
	readonly packageName?: string;
	readonly packagePath: any;
}
export interface SsisConnectionManager {
	readonly [key: string]: SsisExecutionParameter;
}
export interface SsisExecutionCredential {
	readonly domain: any;
	readonly password: SecureString;
	readonly userName: any;
}
export interface SsisExecutionParameter {
	readonly value: any;
}
export interface SsisLogLocation {
	readonly logPath: any;
	readonly type: "File";
	readonly typeProperties: SsisLogLocationTypeProperties;
}
export interface SsisLogLocationTypeProperties {
	readonly accessCredential?: SsisAccessCredential;
	readonly logRefreshInterval?: any;
}
export interface SsisPackageLocation {
	readonly packagePath?: any;
	readonly type?: "File" | "InlinePackage" | "PackageStore" | "SSISDB";
	readonly typeProperties?: SsisPackageLocationTypeProperties;
}
export interface SsisPackageLocationTypeProperties {
	readonly accessCredential?: SsisAccessCredential;
	readonly childPackages?: SsisChildPackage[];
	readonly configurationAccessCredential?: SsisAccessCredential;
	readonly configurationPath?: any;
	readonly packageContent?: any;
	readonly packageLastModifiedDate?: string;
	readonly packageName?: string;
	readonly packagePassword?: SecretBase;
}
export interface SsisPropertyOverride {
	readonly isSensitive?: boolean;
	readonly value: any;
}
export interface StagingSettings {
	readonly enableCompression?: any;
	readonly linkedServiceName: LinkedServiceReference;
	readonly path?: any;
	readonly [key: string]: any;
}
export interface StoreReadSettings {
	readonly disableMetricsCollection?: any;
	readonly maxConcurrentConnections?: any;
}
export interface StoreWriteSettings {
	readonly copyBehavior?: any;
	readonly disableMetricsCollection?: any;
	readonly maxConcurrentConnections?: any;
}
export interface SwitchActivityTypeProperties {
	readonly cases?: SwitchCase[];
	readonly defaultActivities?: Activity[];
	readonly on: Expression;
}
export interface SwitchCase {
	readonly activities?: Activity[];
	readonly value?: string;
}
export interface SybaseLinkedServiceTypeProperties {
	readonly authenticationType?: "Basic" | "Windows";
	readonly database: any;
	readonly encryptedCredential?: any;
	readonly password?: SecretBase;
	readonly schema?: any;
	readonly server: any;
	readonly username?: any;
}
export interface SybaseTableDatasetTypeProperties {
	readonly tableName?: any;
}
export interface SynapseNotebookActivityTypeProperties {
	readonly conf?: any;
	readonly driverSize?: any;
	readonly executorSize?: any;
	readonly notebook: SynapseNotebookReference;
	readonly numExecutors?: number;
	readonly parameters?: SynapseNotebookActivityTypePropertiesParameters;
	readonly sparkPool?: BigDataPoolParametrizationReference;
}
export interface SynapseNotebookActivityTypePropertiesParameters {
	readonly [key: string]: NotebookParameter;
}
export interface SynapseNotebookReference {
	readonly referenceName: any;
	readonly type: "NotebookReference";
}
export interface SynapseSparkJobActivityTypeProperties {
	readonly args?: any[];
	readonly className?: any;
	readonly conf?: any;
	readonly driverSize?: any;
	readonly executorSize?: any;
	readonly file?: any;
	readonly files?: any[];
	readonly filesV2?: any[];
	readonly numExecutors?: number;
	readonly pythonCodeReference?: any[];
	readonly sparkJob: SynapseSparkJobReference;
	readonly targetBigDataPool?: BigDataPoolParametrizationReference;
}
export interface SynapseSparkJobReference {
	readonly referenceName: any;
	readonly type: "SparkJobDefinitionReference";
}
export interface TeamDeskLinkedServiceTypeProperties {
	readonly apiToken?: SecretBase;
	readonly authenticationType: "Basic" | "Token";
	readonly encryptedCredential?: any;
	readonly password?: SecretBase;
	readonly url: any;
	readonly userName?: any;
}
export interface TeradataLinkedServiceTypeProperties {
	readonly authenticationType?: "Basic" | "Windows";
	readonly connectionString?: any;
	readonly encryptedCredential?: any;
	readonly password?: SecretBase;
	readonly server?: any;
	readonly username?: any;
}
export interface TeradataPartitionSettings {
	readonly partitionColumnName?: any;
	readonly partitionLowerBound?: any;
	readonly partitionUpperBound?: any;
}
export interface TeradataTableDatasetTypeProperties {
	readonly database?: any;
	readonly table?: any;
}
export interface Transformation {
	readonly dataset?: DatasetReference;
	readonly description?: string;
	readonly flowlet?: DataFlowReference;
	readonly linkedService?: LinkedServiceReference;
	readonly name: string;
}
export interface Trigger {
	readonly annotations?: any[];
	readonly description?: string;
	readonly runtimeState?: "Disabled" | "Started" | "Stopped";
}
export interface TriggerPipelineReference {
	readonly parameters?: ParameterValueSpecification;
	readonly pipelineReference?: PipelineReference;
}
export interface TriggerReference {
	readonly referenceName: string;
	readonly type: "TriggerReference";
}
export interface TumblingWindowTriggerTypeProperties {
	readonly delay?: any;
	readonly dependsOn?: DependencyReference[];
	readonly endTime?: string;
	readonly frequency: "Hour" | "Minute" | "Month";
	readonly interval: number;
	readonly maxConcurrency: number;
	readonly retryPolicy?: RetryPolicy;
	readonly startTime: string;
}
export interface TwilioLinkedServiceTypeProperties {
	readonly password: SecretBase;
	readonly userName: any;
}
export interface UntilActivityTypeProperties {
	readonly activities: Activity[];
	readonly expression: Expression;
	readonly timeout?: any;
}
export interface UserAssignedIdentitiesDefinitionSpecification {
	readonly [key: string]: any;
}
export interface UserProperty {
	readonly name: string;
	readonly value: any;
}
export interface ValidationActivityTypeProperties {
	readonly childItems?: any;
	readonly dataset: DatasetReference;
	readonly minimumSize?: any;
	readonly sleep?: any;
	readonly timeout?: any;
}
export interface VariableDefinitionSpecification {
	readonly [key: string]: VariableSpecification;
}
export interface VariableSpecification {
	readonly defaultValue?: any;
	readonly type: "Array" | "Bool" | "String";
}
export interface VerticaDatasetTypeProperties {
	readonly schema?: any;
	readonly table?: any;
	readonly tableName?: any;
}
export interface VerticaLinkedServiceTypeProperties {
	readonly connectionString?: any;
	readonly encryptedCredential?: any;
	readonly pwd?: AzureKeyVaultSecretReference;
}
export interface WaitActivityTypeProperties {
	readonly waitTimeInSeconds: any;
}
export interface WebActivityAuthentication {
	readonly credential?: CredentialReference;
	readonly password?: SecretBase;
	readonly pfx?: SecretBase;
	readonly resource?: any;
	readonly type?: string;
	readonly username?: any;
	readonly userTenant?: any;
}
export interface WebActivityTypeProperties {
	readonly authentication?: WebActivityAuthentication;
	readonly body?: any;
	readonly connectVia?: IntegrationRuntimeReference;
	readonly datasets?: DatasetReference[];
	readonly disableCertValidation?: boolean;
	readonly headers?: any;
	readonly linkedServices?: LinkedServiceReference[];
	readonly method: "DELETE" | "GET" | "POST" | "PUT";
	readonly url: any;
}
export interface WebHookActivityTypeProperties {
	readonly authentication?: WebActivityAuthentication;
	readonly body?: any;
	readonly headers?: any;
	readonly method: "POST";
	readonly reportStatusOnCallBack?: any;
	readonly timeout?: string;
	readonly url: any;
}
export interface WebLinkedServiceTypeProperties {
	readonly url: any;
}
export interface WebTableDatasetTypeProperties {
	readonly index: any;
	readonly path?: any;
}
export interface XeroLinkedServiceTypeProperties {
	readonly connectionProperties?: any;
	readonly consumerKey?: SecretBase;
	readonly encryptedCredential?: any;
	readonly host?: any;
	readonly privateKey?: SecretBase;
	readonly useEncryptedEndpoints?: any;
	readonly useHostVerification?: any;
	readonly usePeerVerification?: any;
}
export interface XmlDatasetTypeProperties {
	readonly compression?: DatasetCompression;
	readonly encodingName?: any;
	readonly location: DatasetLocation;
	readonly nullValue?: any;
}
export interface XmlReadSettings {
	readonly compressionProperties?: CompressionReadSettings;
	readonly detectDataType?: any;
	readonly namespacePrefixes?: any;
	readonly namespaces?: any;
	readonly type: string;
	readonly validationMode?: any;
	readonly [key: string]: any;
}
export interface ZendeskLinkedServiceTypeProperties {
	readonly apiToken?: SecretBase;
	readonly authenticationType: "Basic" | "Token";
	readonly encryptedCredential?: any;
	readonly password?: SecretBase;
	readonly url: any;
	readonly userName?: any;
}
export interface ZohoLinkedServiceTypeProperties {
	readonly accessToken?: SecretBase;
	readonly connectionProperties?: any;
	readonly encryptedCredential?: any;
	readonly endpoint?: any;
	readonly useEncryptedEndpoints?: any;
	readonly useHostVerification?: any;
	readonly usePeerVerification?: any;
}
export default {
	factories: factories,
	"factories/credentials": factories_credentials,
	"factories/dataflows": factories_dataflows,
	"factories/datasets": factories_datasets,
	"factories/globalParameters": factories_globalParameters,
	"factories/integrationRuntimes": factories_integrationRuntimes,
	"factories/linkedservices": factories_linkedservices,
	"factories/managedVirtualNetworks": factories_managedVirtualNetworks,
	"factories/managedVirtualNetworks/managedPrivateEndpoints": factories_managedVirtualNetworks_managedPrivateEndpoints,
	"factories/pipelines": factories_pipelines,
	"factories/privateEndpointConnections": factories_privateEndpointConnections,
	"factories/triggers": factories_triggers,
};
