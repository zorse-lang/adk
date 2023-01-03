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
	readonly eTag?: string | undefined;
	readonly identity?: FactoryIdentity | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: FactoryProperties | undefined;
	readonly tags?: ResourceTags | undefined;
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
	readonly etag?: string | undefined;
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
	readonly etag?: string | undefined;
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
	readonly etag?: string | undefined;
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
	readonly etag?: string | undefined;
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
	readonly etag?: string | undefined;
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
	readonly etag?: string | undefined;
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
	readonly etag?: string | undefined;
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
	readonly etag?: string | undefined;
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
	readonly etag?: string | undefined;
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
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: PrivateLinkConnectionApprovalRequestOrRemotePrivateEndpointConnection | undefined;
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
	readonly etag?: string | undefined;
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
	readonly dependsOn?: ActivityDependency[] | undefined;
	readonly description?: string | undefined;
	readonly name: string;
	readonly userProperties?: UserProperty[] | undefined;
}
export interface ActivityDependency {
	readonly activity: string;
	readonly dependencyConditions: "Completed" | "Failed" | "Skipped" | "Succeeded"[];
	readonly "[ key: string ]"?: any | undefined;
}
export interface ActivityPolicy {
	readonly retry?: any | undefined;
	readonly retryIntervalInSeconds?: number | undefined;
	readonly secureInput?: boolean | undefined;
	readonly secureOutput?: boolean | undefined;
	readonly timeout?: any | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface AmazonMWSLinkedServiceTypeProperties {
	readonly accessKeyId: any;
	readonly encryptedCredential?: any | undefined;
	readonly endpoint: any;
	readonly marketplaceID: any;
	readonly mwsAuthToken?: SecretBase | undefined;
	readonly secretKey?: SecretBase | undefined;
	readonly sellerID: any;
	readonly useEncryptedEndpoints?: any | undefined;
	readonly useHostVerification?: any | undefined;
	readonly usePeerVerification?: any | undefined;
}
export interface AmazonRdsForLinkedServiceTypeProperties {
	readonly connectionString: any;
	readonly encryptedCredential?: any | undefined;
	readonly password?: SecretBase | undefined;
}
export interface AmazonRdsForOraclePartitionSettings {
	readonly partitionColumnName?: any | undefined;
	readonly partitionLowerBound?: any | undefined;
	readonly partitionNames?: any | undefined;
	readonly partitionUpperBound?: any | undefined;
}
export interface AmazonRdsForOracleTableDatasetTypeProperties {
	readonly schema?: any | undefined;
	readonly table?: any | undefined;
}
export interface AmazonRdsForSqlServerLinkedServiceTypeProperties {
	readonly alwaysEncryptedSettings?: SqlAlwaysEncryptedProperties | undefined;
	readonly connectionString: any;
	readonly encryptedCredential?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly userName?: any | undefined;
}
export interface AmazonRdsForSqlServerTableDatasetTypeProperties {
	readonly schema?: any | undefined;
	readonly table?: any | undefined;
}
export interface AmazonRedshiftLinkedServiceTypeProperties {
	readonly database: any;
	readonly encryptedCredential?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly port?: any | undefined;
	readonly server: any;
	readonly username?: any | undefined;
}
export interface AmazonRedshiftTableDatasetTypeProperties {
	readonly schema?: any | undefined;
	readonly table?: any | undefined;
	readonly tableName?: any | undefined;
}
export interface AmazonS3CompatibleLinkedServiceTypeProperties {
	readonly accessKeyId?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly forcePathStyle?: any | undefined;
	readonly secretAccessKey?: SecretBase | undefined;
	readonly serviceUrl?: any | undefined;
}
export interface AmazonS3DatasetTypeProperties {
	readonly bucketName: any;
	readonly compression?: DatasetCompression | undefined;
	readonly format?: DatasetStorageFormat | undefined;
	readonly key?: any | undefined;
	readonly modifiedDatetimeEnd?: any | undefined;
	readonly modifiedDatetimeStart?: any | undefined;
	readonly prefix?: any | undefined;
	readonly version?: any | undefined;
}
export interface AmazonS3LinkedServiceTypeProperties {
	readonly accessKeyId?: any | undefined;
	readonly authenticationType?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly secretAccessKey?: SecretBase | undefined;
	readonly serviceUrl?: any | undefined;
	readonly sessionToken?: SecretBase | undefined;
}
export interface AppendVariableActivityTypeProperties {
	readonly value?: any | undefined;
	readonly variableName?: string | undefined;
}
export interface AppFiguresLinkedServiceTypeProperties {
	readonly clientKey: SecretBase;
	readonly password: SecretBase;
	readonly userName: any;
}
export interface AsanaLinkedServiceTypeProperties {
	readonly apiToken: SecretBase;
	readonly encryptedCredential?: any | undefined;
}
export interface AvroDatasetTypeProperties {
	readonly avroCompressionCodec?: any | undefined;
	readonly avroCompressionLevel?: number | undefined;
	readonly location: DatasetLocation;
}
export interface AvroWriteSettings {
	readonly fileNamePrefix?: any | undefined;
	readonly maxRowsPerFile?: any | undefined;
	readonly recordName?: string | undefined;
	readonly recordNamespace?: string | undefined;
	readonly type: string;
	readonly "[ key: string ]"?: any | undefined;
}
export interface AzPowerShellSetupTypeProperties {
	readonly version: string;
}
export interface AzureBatchLinkedServiceTypeProperties {
	readonly accessKey?: SecretBase | undefined;
	readonly accountName: any;
	readonly batchUri: any;
	readonly credential?: CredentialReference | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly linkedServiceName: LinkedServiceReference;
	readonly poolName: any;
}
export interface AzureBlobDatasetTypeProperties {
	readonly compression?: DatasetCompression | undefined;
	readonly fileName?: any | undefined;
	readonly folderPath?: any | undefined;
	readonly format?: DatasetStorageFormat | undefined;
	readonly modifiedDatetimeEnd?: any | undefined;
	readonly modifiedDatetimeStart?: any | undefined;
	readonly tableRootLocation?: any | undefined;
}
export interface AzureBlobFSDatasetTypeProperties {
	readonly compression?: DatasetCompression | undefined;
	readonly fileName?: any | undefined;
	readonly folderPath?: any | undefined;
	readonly format?: DatasetStorageFormat | undefined;
}
export interface AzureBlobFSLinkedServiceTypeProperties {
	readonly accountKey?: any | undefined;
	readonly azureCloudType?: any | undefined;
	readonly credential?: CredentialReference | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly servicePrincipalCredential?: SecretBase | undefined;
	readonly servicePrincipalCredentialType?: any | undefined;
	readonly servicePrincipalId?: any | undefined;
	readonly servicePrincipalKey?: SecretBase | undefined;
	readonly tenant?: any | undefined;
	readonly url: any;
}
export interface AzureBlobStorageLinkedServiceTypeProperties {
	readonly accountKey?: AzureKeyVaultSecretReference | undefined;
	readonly accountKind?: string | undefined;
	readonly azureCloudType?: any | undefined;
	readonly connectionString?: any | undefined;
	readonly credential?: CredentialReference | undefined;
	readonly encryptedCredential?: string | undefined;
	readonly sasToken?: AzureKeyVaultSecretReference | undefined;
	readonly sasUri?: any | undefined;
	readonly serviceEndpoint?: string | undefined;
	readonly servicePrincipalId?: any | undefined;
	readonly servicePrincipalKey?: SecretBase | undefined;
	readonly tenant?: any | undefined;
}
export interface AzureDatabricksDeltaLakeDatasetTypeProperties {
	readonly database?: any | undefined;
	readonly table?: any | undefined;
}
export interface AzureDatabricksDeltaLakeExportCommand {
	readonly dateFormat?: any | undefined;
	readonly timestampFormat?: any | undefined;
	readonly type: string;
	readonly "[ key: string ]"?: any | undefined;
}
export interface AzureDatabricksDeltaLakeImportCommand {
	readonly dateFormat?: any | undefined;
	readonly timestampFormat?: any | undefined;
	readonly type: string;
	readonly "[ key: string ]"?: any | undefined;
}
export interface AzureDatabricksDetltaLakeLinkedServiceTypeProperties {
	readonly accessToken?: SecretBase | undefined;
	readonly clusterId?: any | undefined;
	readonly credential?: CredentialReference | undefined;
	readonly domain: any;
	readonly encryptedCredential?: any | undefined;
	readonly workspaceResourceId?: any | undefined;
}
export interface AzureDatabricksLinkedServiceTypeProperties {
	readonly accessToken?: SecretBase | undefined;
	readonly authentication?: any | undefined;
	readonly credential?: CredentialReference | undefined;
	readonly domain: any;
	readonly encryptedCredential?: any | undefined;
	readonly existingClusterId?: any | undefined;
	readonly instancePoolId?: any | undefined;
	readonly newClusterCustomTags?: AzureDatabricksLinkedServiceTypePropertiesNewClusterCustomTags | undefined;
	readonly newClusterDriverNodeType?: any | undefined;
	readonly newClusterEnableElasticDisk?: any | undefined;
	readonly newClusterInitScripts?: any | undefined;
	readonly newClusterLogDestination?: any | undefined;
	readonly newClusterNodeType?: any | undefined;
	readonly newClusterNumOfWorker?: any | undefined;
	readonly newClusterSparkConf?: AzureDatabricksLinkedServiceTypePropertiesNewClusterSparkConf | undefined;
	readonly newClusterSparkEnvVars?: AzureDatabricksLinkedServiceTypePropertiesNewClusterSparkEnvVars | undefined;
	readonly newClusterVersion?: any | undefined;
	readonly policyId?: any | undefined;
	readonly workspaceResourceId?: any | undefined;
}
export interface AzureDatabricksLinkedServiceTypePropertiesNewClusterCustomTags {
	readonly "[ key: string ]"?: any | undefined;
}
export interface AzureDatabricksLinkedServiceTypePropertiesNewClusterSparkConf {
	readonly "[ key: string ]"?: any | undefined;
}
export interface AzureDatabricksLinkedServiceTypePropertiesNewClusterSparkEnvVars {
	readonly "[ key: string ]"?: any | undefined;
}
export interface AzureDataExplorerCommandActivityTypeProperties {
	readonly command: any;
	readonly commandTimeout?: any | undefined;
}
export interface AzureDataExplorerDatasetTypeProperties {
	readonly table?: any | undefined;
}
export interface AzureDataExplorerLinkedServiceTypeProperties {
	readonly credential?: CredentialReference | undefined;
	readonly database: any;
	readonly endpoint: any;
	readonly servicePrincipalId?: any | undefined;
	readonly servicePrincipalKey?: SecretBase | undefined;
	readonly tenant?: any | undefined;
}
export interface AzureDataLakeAnalyticsLinkedServiceTypeProperties {
	readonly accountName: any;
	readonly dataLakeAnalyticsUri?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly resourceGroupName?: any | undefined;
	readonly servicePrincipalId?: any | undefined;
	readonly servicePrincipalKey?: SecretBase | undefined;
	readonly subscriptionId?: any | undefined;
	readonly tenant: any;
}
export interface AzureDataLakeStoreDatasetTypeProperties {
	readonly compression?: DatasetCompression | undefined;
	readonly fileName?: any | undefined;
	readonly folderPath?: any | undefined;
	readonly format?: DatasetStorageFormat | undefined;
}
export interface AzureDataLakeStoreLinkedServiceTypeProperties {
	readonly accountName?: any | undefined;
	readonly azureCloudType?: any | undefined;
	readonly credential?: CredentialReference | undefined;
	readonly dataLakeStoreUri: any;
	readonly encryptedCredential?: any | undefined;
	readonly resourceGroupName?: any | undefined;
	readonly servicePrincipalId?: any | undefined;
	readonly servicePrincipalKey?: SecretBase | undefined;
	readonly subscriptionId?: any | undefined;
	readonly tenant?: any | undefined;
}
export interface AzureFileStorageLinkedServiceTypeProperties {
	readonly accountKey?: AzureKeyVaultSecretReference | undefined;
	readonly connectionString?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly fileShare?: any | undefined;
	readonly host?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly sasToken?: AzureKeyVaultSecretReference | undefined;
	readonly sasUri?: any | undefined;
	readonly snapshot?: any | undefined;
	readonly userId?: any | undefined;
}
export interface AzureFunctionActivityTypeProperties {
	readonly body?: any | undefined;
	readonly functionName: any;
	readonly headers?: any | undefined;
	readonly method: "DELETE" | "GET" | "HEAD" | "OPTIONS" | "POST" | "PUT" | "TRACE";
}
export interface AzureFunctionLinkedServiceTypeProperties {
	readonly authentication?: any | undefined;
	readonly credential?: CredentialReference | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly functionAppUrl: any;
	readonly functionKey?: SecretBase | undefined;
	readonly resourceId?: any | undefined;
}
export interface AzureKeyVaultLinkedServiceTypeProperties {
	readonly baseUrl: any;
	readonly credential?: CredentialReference | undefined;
}
export interface AzureKeyVaultSecretReference {
	readonly secretName: any;
	readonly secretVersion?: any | undefined;
	readonly store: LinkedServiceReference;
	readonly type: string;
}
export interface AzureMariaDBLinkedServiceTypeProperties {
	readonly connectionString?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly pwd?: AzureKeyVaultSecretReference | undefined;
}
export interface AzureMLBatchExecutionActivityTypeProperties {
	readonly globalParameters?: AzureMLBatchExecutionActivityTypePropertiesGlobalParameters | undefined;
	readonly webServiceInputs?: AzureMLBatchExecutionActivityTypePropertiesWebServiceInputs | undefined;
	readonly webServiceOutputs?: AzureMLBatchExecutionActivityTypePropertiesWebServiceOutputs | undefined;
}
export interface AzureMLBatchExecutionActivityTypePropertiesGlobalParameters {
	readonly "[ key: string ]"?: any | undefined;
}
export interface AzureMLBatchExecutionActivityTypePropertiesWebServiceInputs {
	readonly "[ key: string ]"?: AzureMLWebServiceFile | undefined;
}
export interface AzureMLBatchExecutionActivityTypePropertiesWebServiceOutputs {
	readonly "[ key: string ]"?: AzureMLWebServiceFile | undefined;
}
export interface AzureMLExecutePipelineActivityTypeProperties {
	readonly continueOnStepFailure?: any | undefined;
	readonly dataPathAssignments?: any | undefined;
	readonly experimentName?: any | undefined;
	readonly mlParentRunId?: any | undefined;
	readonly mlPipelineEndpointId?: any | undefined;
	readonly mlPipelineId?: any | undefined;
	readonly mlPipelineParameters?: any | undefined;
	readonly version?: any | undefined;
}
export interface AzureMLLinkedServiceTypeProperties {
	readonly apiKey: SecretBase;
	readonly authentication?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly mlEndpoint: any;
	readonly servicePrincipalId?: any | undefined;
	readonly servicePrincipalKey?: SecretBase | undefined;
	readonly tenant?: any | undefined;
	readonly updateResourceEndpoint?: any | undefined;
}
export interface AzureMLServiceLinkedServiceTypeProperties {
	readonly encryptedCredential?: any | undefined;
	readonly mlWorkspaceName: any;
	readonly resourceGroupName: any;
	readonly servicePrincipalId?: any | undefined;
	readonly servicePrincipalKey?: SecretBase | undefined;
	readonly subscriptionId: any;
	readonly tenant?: any | undefined;
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
	readonly encryptedCredential?: any | undefined;
	readonly password?: AzureKeyVaultSecretReference | undefined;
}
export interface AzureMySqlTableDatasetTypeProperties {
	readonly table?: any | undefined;
	readonly tableName?: any | undefined;
}
export interface AzurePostgreSqlLinkedServiceTypeProperties {
	readonly connectionString?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly password?: AzureKeyVaultSecretReference | undefined;
}
export interface AzurePostgreSqlTableDatasetTypeProperties {
	readonly schema?: any | undefined;
	readonly table?: any | undefined;
	readonly tableName?: any | undefined;
}
export interface AzureSearchIndexDatasetTypeProperties {
	readonly indexName: any;
}
export interface AzureSearchLinkedServiceTypeProperties {
	readonly encryptedCredential?: any | undefined;
	readonly key?: SecretBase | undefined;
	readonly url: any;
}
export interface AzureSqlDatabaseLinkedServiceTypeProperties {
	readonly alwaysEncryptedSettings?: SqlAlwaysEncryptedProperties | undefined;
	readonly azureCloudType?: any | undefined;
	readonly connectionString: any;
	readonly credential?: CredentialReference | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly password?: AzureKeyVaultSecretReference | undefined;
	readonly servicePrincipalId?: any | undefined;
	readonly servicePrincipalKey?: SecretBase | undefined;
	readonly tenant?: any | undefined;
}
export interface AzureSqlDWLinkedServiceTypeProperties {
	readonly azureCloudType?: any | undefined;
	readonly connectionString: any;
	readonly credential?: CredentialReference | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly password?: AzureKeyVaultSecretReference | undefined;
	readonly servicePrincipalId?: any | undefined;
	readonly servicePrincipalKey?: SecretBase | undefined;
	readonly tenant?: any | undefined;
}
export interface AzureSqlDWTableDatasetTypeProperties {
	readonly schema?: any | undefined;
	readonly table?: any | undefined;
	readonly tableName?: any | undefined;
}
export interface AzureSqlMILinkedServiceTypeProperties {
	readonly alwaysEncryptedSettings?: SqlAlwaysEncryptedProperties | undefined;
	readonly azureCloudType?: any | undefined;
	readonly connectionString: any;
	readonly credential?: CredentialReference | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly password?: AzureKeyVaultSecretReference | undefined;
	readonly servicePrincipalId?: any | undefined;
	readonly servicePrincipalKey?: SecretBase | undefined;
	readonly tenant?: any | undefined;
}
export interface AzureSqlMITableDatasetTypeProperties {
	readonly schema?: any | undefined;
	readonly table?: any | undefined;
	readonly tableName?: any | undefined;
}
export interface AzureSqlTableDatasetTypeProperties {
	readonly schema?: any | undefined;
	readonly table?: any | undefined;
	readonly tableName?: any | undefined;
}
export interface AzureStorageLinkedServiceTypeProperties {
	readonly accountKey?: AzureKeyVaultSecretReference | undefined;
	readonly connectionString?: any | undefined;
	readonly encryptedCredential?: string | undefined;
	readonly sasToken?: AzureKeyVaultSecretReference | undefined;
	readonly sasUri?: any | undefined;
}
export interface AzureSynapseArtifactsLinkedServiceTypeProperties {
	readonly authentication?: any | undefined;
	readonly endpoint: any;
	readonly workspaceResourceId?: any | undefined;
}
export interface AzureTableDatasetTypeProperties {
	readonly tableName: any;
}
export interface BigDataPoolParametrizationReference {
	readonly referenceName: any;
	readonly type: "BigDataPoolReference";
}
export interface BinaryDatasetTypeProperties {
	readonly compression?: DatasetCompression | undefined;
	readonly location: DatasetLocation;
}
export interface BinaryReadSettings {
	readonly compressionProperties?: CompressionReadSettings | undefined;
	readonly type: string;
	readonly "[ key: string ]"?: any | undefined;
}
export interface BlobEventsTriggerTypeProperties {
	readonly blobPathBeginsWith?: string | undefined;
	readonly blobPathEndsWith?: string | undefined;
	readonly events: "Microsoft.Storage.BlobCreated" | "Microsoft.Storage.BlobDeleted"[];
	readonly ignoreEmptyBlobs?: boolean | undefined;
	readonly scope: string;
}
export interface BlobTriggerTypeProperties {
	readonly folderPath: string;
	readonly linkedService: LinkedServiceReference;
	readonly maxConcurrency: number;
}
export interface CassandraLinkedServiceTypeProperties {
	readonly authenticationType?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly host: any;
	readonly password?: SecretBase | undefined;
	readonly port?: any | undefined;
	readonly username?: any | undefined;
}
export interface CassandraTableDatasetTypeProperties {
	readonly keyspace?: any | undefined;
	readonly tableName?: any | undefined;
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
	readonly userAssignedIdentity?: string | undefined;
}
export interface CommonDataServiceForAppsEntityDatasetTypeProperties {
	readonly entityName?: any | undefined;
}
export interface CommonDataServiceForAppsLinkedServiceTypeProperties {
	readonly authenticationType: any;
	readonly deploymentType: any;
	readonly encryptedCredential?: any | undefined;
	readonly hostName?: any | undefined;
	readonly organizationName?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly port?: any | undefined;
	readonly servicePrincipalCredential?: SecretBase | undefined;
	readonly servicePrincipalCredentialType?: any | undefined;
	readonly servicePrincipalId?: any | undefined;
	readonly serviceUri?: any | undefined;
	readonly username?: any | undefined;
}
export interface CompressionReadSettings {}
export interface ConcurLinkedServiceTypeProperties {
	readonly clientId: any;
	readonly connectionProperties?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly useEncryptedEndpoints?: any | undefined;
	readonly useHostVerification?: any | undefined;
	readonly usePeerVerification?: any | undefined;
	readonly username: any;
}
export interface ConnectionStateProperties {
	readonly actionsRequired?: string | undefined;
	readonly description?: string | undefined;
	readonly status?: string | undefined;
}
export interface CopyActivityLogSettings {
	readonly enableReliableLogging?: any | undefined;
	readonly logLevel?: any | undefined;
}
export interface CopyActivityTypeProperties {
	readonly dataIntegrationUnits?: any | undefined;
	readonly enableSkipIncompatibleRow?: any | undefined;
	readonly enableStaging?: any | undefined;
	readonly logSettings?: LogSettings | undefined;
	readonly logStorageSettings?: LogStorageSettings | undefined;
	readonly parallelCopies?: any | undefined;
	readonly preserve?: any[] | undefined;
	readonly preserveRules?: any[] | undefined;
	readonly redirectIncompatibleRowSettings?: RedirectIncompatibleRowSettings | undefined;
	readonly sink: CopySink;
	readonly skipErrorFile?: SkipErrorFile | undefined;
	readonly source: CopySource;
	readonly stagingSettings?: StagingSettings | undefined;
	readonly translator?: any | undefined;
	readonly validateDataConsistency?: any | undefined;
}
export interface CopySink {
	readonly disableMetricsCollection?: any | undefined;
	readonly maxConcurrentConnections?: any | undefined;
	readonly sinkRetryCount?: any | undefined;
	readonly sinkRetryWait?: any | undefined;
	readonly writeBatchSize?: any | undefined;
	readonly writeBatchTimeout?: any | undefined;
}
export interface CopySource {
	readonly disableMetricsCollection?: any | undefined;
	readonly maxConcurrentConnections?: any | undefined;
	readonly sourceRetryCount?: any | undefined;
	readonly sourceRetryWait?: any | undefined;
}
export interface CosmosDbLinkedServiceTypeProperties {
	readonly accountEndpoint?: any | undefined;
	readonly accountKey?: SecretBase | undefined;
	readonly azureCloudType?: any | undefined;
	readonly connectionMode?: ("Direct" | "Gateway") | undefined;
	readonly connectionString?: any | undefined;
	readonly credential?: CredentialReference | undefined;
	readonly database?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly servicePrincipalCredential?: SecretBase | undefined;
	readonly servicePrincipalCredentialType?: ("ServicePrincipalCert" | "ServicePrincipalKey") | undefined;
	readonly servicePrincipalId?: any | undefined;
	readonly tenant?: any | undefined;
}
export interface CosmosDbMongoDbApiCollectionDatasetTypeProperties {
	readonly collection: any;
}
export interface CosmosDbMongoDbApiLinkedServiceTypeProperties {
	readonly connectionString: any;
	readonly database: any;
	readonly isServerVersionAbove32?: any | undefined;
}
export interface CosmosDbSqlApiCollectionDatasetTypeProperties {
	readonly collectionName: any;
}
export interface CouchbaseLinkedServiceTypeProperties {
	readonly connectionString?: any | undefined;
	readonly credString?: AzureKeyVaultSecretReference | undefined;
	readonly encryptedCredential?: any | undefined;
}
export interface CredentialReference {
	readonly referenceName: string;
	readonly type: "CredentialReference";
	readonly "[ key: string ]"?: any | undefined;
}
export interface CustomActivityReferenceObject {
	readonly datasets?: DatasetReference[] | undefined;
	readonly linkedServices?: LinkedServiceReference[] | undefined;
}
export interface CustomActivityTypeProperties {
	readonly autoUserSpecification?: any | undefined;
	readonly command: any;
	readonly extendedProperties?: CustomActivityTypePropertiesExtendedProperties | undefined;
	readonly folderPath?: any | undefined;
	readonly referenceObjects?: CustomActivityReferenceObject | undefined;
	readonly resourceLinkedService?: LinkedServiceReference | undefined;
	readonly retentionTimeInDays?: any | undefined;
}
export interface CustomActivityTypePropertiesExtendedProperties {
	readonly "[ key: string ]"?: any | undefined;
}
export interface CustomEventsTriggerTypeProperties {
	readonly events: any[];
	readonly scope: string;
	readonly subjectBeginsWith?: string | undefined;
	readonly subjectEndsWith?: string | undefined;
}
export interface CustomSetupBase {}
export interface DatabricksNotebookActivityTypeProperties {
	readonly baseParameters?: DatabricksNotebookActivityTypePropertiesBaseParameters | undefined;
	readonly libraries?: DatabricksNotebookActivityTypePropertiesLibrariesItem[] | undefined;
	readonly notebookPath: any;
}
export interface DatabricksNotebookActivityTypePropertiesBaseParameters {
	readonly "[ key: string ]"?: any | undefined;
}
export interface DatabricksNotebookActivityTypePropertiesLibrariesItem {
	readonly "[ key: string ]"?: any | undefined;
}
export interface DatabricksSparkJarActivityTypeProperties {
	readonly libraries?: DatabricksSparkJarActivityTypePropertiesLibrariesItem[] | undefined;
	readonly mainClassName: any;
	readonly parameters?: any[] | undefined;
}
export interface DatabricksSparkJarActivityTypePropertiesLibrariesItem {
	readonly "[ key: string ]"?: any | undefined;
}
export interface DatabricksSparkPythonActivityTypeProperties {
	readonly libraries?: DatabricksSparkPythonActivityTypePropertiesLibrariesItem[] | undefined;
	readonly parameters?: any[] | undefined;
	readonly pythonFile: any;
}
export interface DatabricksSparkPythonActivityTypePropertiesLibrariesItem {
	readonly "[ key: string ]"?: any | undefined;
}
export interface DataFlow {
	readonly annotations?: any[] | undefined;
	readonly description?: string | undefined;
	readonly folder?: DataFlowFolder | undefined;
}
export interface DataFlowFolder {
	readonly name?: string | undefined;
}
export interface DataFlowReference {
	readonly datasetParameters?: any | undefined;
	readonly parameters?: ParameterValueSpecification | undefined;
	readonly referenceName: string;
	readonly type: "DataFlowReference";
	readonly "[ key: string ]"?: any | undefined;
}
export interface DataFlowSink {
	readonly dataset?: DatasetReference | undefined;
	readonly description?: string | undefined;
	readonly flowlet?: DataFlowReference | undefined;
	readonly linkedService?: LinkedServiceReference | undefined;
	readonly name: string;
	readonly rejectedDataLinkedService?: LinkedServiceReference | undefined;
	readonly schemaLinkedService?: LinkedServiceReference | undefined;
}
export interface DataFlowSource {
	readonly dataset?: DatasetReference | undefined;
	readonly description?: string | undefined;
	readonly flowlet?: DataFlowReference | undefined;
	readonly linkedService?: LinkedServiceReference | undefined;
	readonly name: string;
	readonly schemaLinkedService?: LinkedServiceReference | undefined;
}
export interface DataFlowStagingInfo {
	readonly folderPath?: any | undefined;
	readonly linkedService?: LinkedServiceReference | undefined;
}
export interface DataLakeAnalyticsUsqlActivityTypeProperties {
	readonly compilationMode?: any | undefined;
	readonly degreeOfParallelism?: any | undefined;
	readonly parameters?: DataLakeAnalyticsUsqlActivityTypePropertiesParameters | undefined;
	readonly priority?: any | undefined;
	readonly runtimeVersion?: any | undefined;
	readonly scriptLinkedService: LinkedServiceReference;
	readonly scriptPath: any;
}
export interface DataLakeAnalyticsUsqlActivityTypePropertiesParameters {
	readonly "[ key: string ]"?: any | undefined;
}
export interface Dataset {
	readonly annotations?: any[] | undefined;
	readonly description?: string | undefined;
	readonly folder?: DatasetFolder | undefined;
	readonly linkedServiceName: LinkedServiceReference;
	readonly parameters?: ParameterDefinitionSpecification | undefined;
	readonly schema?: any | undefined;
	readonly structure?: any | undefined;
}
export interface DatasetCompression {
	readonly level?: any | undefined;
	readonly type: any;
	readonly "[ key: string ]"?: any | undefined;
}
export interface DatasetFolder {
	readonly name?: string | undefined;
}
export interface DatasetLocation {
	readonly fileName?: any | undefined;
	readonly folderPath?: any | undefined;
}
export interface DatasetReference {
	readonly parameters?: ParameterValueSpecification | undefined;
	readonly referenceName: string;
	readonly type: "DatasetReference";
}
export interface DatasetStorageFormat {
	readonly deserializer?: any | undefined;
	readonly serializer?: any | undefined;
}
export interface DataworldLinkedServiceTypeProperties {
	readonly apiToken: SecretBase;
	readonly encryptedCredential?: any | undefined;
}
export interface Db2LinkedServiceTypeProperties {
	readonly authenticationType?: "Basic" | undefined;
	readonly certificateCommonName?: any | undefined;
	readonly connectionString?: any | undefined;
	readonly database?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly packageCollection?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly server?: any | undefined;
	readonly username?: any | undefined;
}
export interface Db2TableDatasetTypeProperties {
	readonly schema?: any | undefined;
	readonly table?: any | undefined;
	readonly tableName?: any | undefined;
}
export interface DeleteActivityTypeProperties {
	readonly dataset: DatasetReference;
	readonly enableLogging?: any | undefined;
	readonly logStorageSettings?: LogStorageSettings | undefined;
	readonly maxConcurrentConnections?: number | undefined;
	readonly recursive?: any | undefined;
	readonly storeSettings?: StoreReadSettings | undefined;
}
export interface DelimitedTextDatasetTypeProperties {
	readonly columnDelimiter?: any | undefined;
	readonly compressionCodec?: any | undefined;
	readonly compressionLevel?: any | undefined;
	readonly encodingName?: any | undefined;
	readonly escapeChar?: any | undefined;
	readonly firstRowAsHeader?: any | undefined;
	readonly location: DatasetLocation;
	readonly nullValue?: any | undefined;
	readonly quoteChar?: any | undefined;
	readonly rowDelimiter?: any | undefined;
}
export interface DelimitedTextReadSettings {
	readonly compressionProperties?: CompressionReadSettings | undefined;
	readonly skipLineCount?: any | undefined;
	readonly type: string;
	readonly "[ key: string ]"?: any | undefined;
}
export interface DelimitedTextWriteSettings {
	readonly fileExtension: any;
	readonly fileNamePrefix?: any | undefined;
	readonly maxRowsPerFile?: any | undefined;
	readonly quoteAllText?: any | undefined;
	readonly type: string;
	readonly "[ key: string ]"?: any | undefined;
}
export interface DependencyReference {}
export interface DistcpSettings {
	readonly distcpOptions?: any | undefined;
	readonly resourceManagerEndpoint: any;
	readonly tempScriptPath: any;
}
export interface DocumentDbCollectionDatasetTypeProperties {
	readonly collectionName: any;
}
export interface DrillDatasetTypeProperties {
	readonly schema?: any | undefined;
	readonly table?: any | undefined;
	readonly tableName?: any | undefined;
}
export interface DrillLinkedServiceTypeProperties {
	readonly connectionString?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly pwd?: AzureKeyVaultSecretReference | undefined;
}
export interface DWCopyCommandDefaultValue {
	readonly columnName?: any | undefined;
	readonly defaultValue?: any | undefined;
}
export interface DWCopyCommandSettings {
	readonly additionalOptions?: DWCopyCommandSettingsAdditionalOptions | undefined;
	readonly defaultValues?: DWCopyCommandDefaultValue[] | undefined;
}
export interface DWCopyCommandSettingsAdditionalOptions {
	readonly "[ key: string ]"?: string | undefined;
}
export interface DynamicsAXLinkedServiceTypeProperties {
	readonly aadResourceId: any;
	readonly encryptedCredential?: any | undefined;
	readonly servicePrincipalId: any;
	readonly servicePrincipalKey: SecretBase;
	readonly tenant: any;
	readonly url: any;
}
export interface DynamicsAXResourceDatasetTypeProperties {
	readonly path: any;
}
export interface DynamicsCrmEntityDatasetTypeProperties {
	readonly entityName?: any | undefined;
}
export interface DynamicsCrmLinkedServiceTypeProperties {
	readonly authenticationType: any;
	readonly deploymentType: any;
	readonly encryptedCredential?: any | undefined;
	readonly hostName?: any | undefined;
	readonly organizationName?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly port?: any | undefined;
	readonly servicePrincipalCredential?: SecretBase | undefined;
	readonly servicePrincipalCredentialType?: any | undefined;
	readonly servicePrincipalId?: any | undefined;
	readonly serviceUri?: any | undefined;
	readonly username?: any | undefined;
}
export interface DynamicsEntityDatasetTypeProperties {
	readonly entityName?: any | undefined;
}
export interface DynamicsLinkedServiceTypeProperties {
	readonly authenticationType: any;
	readonly credential?: CredentialReference | undefined;
	readonly deploymentType: any;
	readonly encryptedCredential?: any | undefined;
	readonly hostName?: any | undefined;
	readonly organizationName?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly port?: any | undefined;
	readonly servicePrincipalCredential?: SecretBase | undefined;
	readonly servicePrincipalCredentialType?: any | undefined;
	readonly servicePrincipalId?: any | undefined;
	readonly serviceUri?: any | undefined;
	readonly username?: any | undefined;
}
export interface EloquaLinkedServiceTypeProperties {
	readonly encryptedCredential?: any | undefined;
	readonly endpoint: any;
	readonly password?: SecretBase | undefined;
	readonly useEncryptedEndpoints?: any | undefined;
	readonly useHostVerification?: any | undefined;
	readonly usePeerVerification?: any | undefined;
	readonly username: any;
}
export interface EncryptionConfiguration {
	readonly identity?: CMKIdentityDefinition | undefined;
	readonly keyName: string;
	readonly keyVersion?: string | undefined;
	readonly vaultBaseUrl: string;
}
export interface EntityReference {
	readonly referenceName?: string | undefined;
	readonly type?: ("IntegrationRuntimeReference" | "LinkedServiceReference") | undefined;
}
export interface EnvironmentVariableSetupTypeProperties {
	readonly variableName: string;
	readonly variableValue: string;
}
export interface ExcelDatasetTypeProperties {
	readonly compression?: DatasetCompression | undefined;
	readonly firstRowAsHeader?: any | undefined;
	readonly location: DatasetLocation;
	readonly nullValue?: any | undefined;
	readonly range?: any | undefined;
	readonly sheetIndex?: any | undefined;
	readonly sheetName?: any | undefined;
}
export interface ExecuteDataFlowActivityTypeProperties {
	readonly compute?: ExecuteDataFlowActivityTypePropertiesCompute | undefined;
	readonly continueOnError?: any | undefined;
	readonly dataFlow: DataFlowReference;
	readonly integrationRuntime?: IntegrationRuntimeReference | undefined;
	readonly runConcurrently?: any | undefined;
	readonly sourceStagingConcurrency?: any | undefined;
	readonly staging?: DataFlowStagingInfo | undefined;
	readonly traceLevel?: any | undefined;
}
export interface ExecuteDataFlowActivityTypePropertiesCompute {
	readonly computeType?: any | undefined;
	readonly coreCount?: any | undefined;
}
export interface ExecutePipelineActivityPolicy {
	readonly secureInput?: boolean | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface ExecutePipelineActivityTypeProperties {
	readonly parameters?: ParameterValueSpecification | undefined;
	readonly pipeline: PipelineReference;
	readonly waitOnCompletion?: boolean | undefined;
}
export interface ExecutePowerQueryActivityTypeProperties {
	readonly compute?: ExecuteDataFlowActivityTypePropertiesCompute | undefined;
	readonly continueOnError?: any | undefined;
	readonly dataFlow: DataFlowReference;
	readonly integrationRuntime?: IntegrationRuntimeReference | undefined;
	readonly queries?: PowerQuerySinkMapping[] | undefined;
	readonly runConcurrently?: any | undefined;
	readonly sinks?: ExecutePowerQueryActivityTypePropertiesSinks | undefined;
	readonly sourceStagingConcurrency?: any | undefined;
	readonly staging?: DataFlowStagingInfo | undefined;
	readonly traceLevel?: any | undefined;
}
export interface ExecutePowerQueryActivityTypePropertiesSinks {
	readonly "[ key: string ]"?: PowerQuerySink | undefined;
}
export interface ExecuteSsisPackageActivityTypeProperties {
	readonly connectVia: IntegrationRuntimeReference;
	readonly environmentPath?: any | undefined;
	readonly executionCredential?: SsisExecutionCredential | undefined;
	readonly loggingLevel?: any | undefined;
	readonly logLocation?: SsisLogLocation | undefined;
	readonly packageConnectionManagers?: ExecuteSsisPackageActivityTypePropertiesPackageConnectionManagers | undefined;
	readonly packageLocation: SsisPackageLocation;
	readonly packageParameters?: ExecuteSsisPackageActivityTypePropertiesPackageParameters | undefined;
	readonly projectConnectionManagers?: ExecuteSsisPackageActivityTypePropertiesProjectConnectionManagers | undefined;
	readonly projectParameters?: ExecuteSsisPackageActivityTypePropertiesProjectParameters | undefined;
	readonly propertyOverrides?: ExecuteSsisPackageActivityTypePropertiesPropertyOverrides | undefined;
	readonly runtime?: any | undefined;
}
export interface ExecuteSsisPackageActivityTypePropertiesPackageConnectionManagers {
	readonly "[ key: string ]"?: SsisConnectionManager | undefined;
}
export interface ExecuteSsisPackageActivityTypePropertiesPackageParameters {
	readonly "[ key: string ]"?: SsisExecutionParameter | undefined;
}
export interface ExecuteSsisPackageActivityTypePropertiesProjectConnectionManagers {
	readonly "[ key: string ]"?: SsisConnectionManager | undefined;
}
export interface ExecuteSsisPackageActivityTypePropertiesProjectParameters {
	readonly "[ key: string ]"?: SsisExecutionParameter | undefined;
}
export interface ExecuteSsisPackageActivityTypePropertiesPropertyOverrides {
	readonly "[ key: string ]"?: SsisPropertyOverride | undefined;
}
export interface Expression {
	readonly type: "Expression";
	readonly value: string;
}
export interface FactoryIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type: "SystemAssigned" | "SystemAssigned,UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: UserAssignedIdentitiesDefinitionSpecification | undefined;
}
export interface FactoryProperties {
	readonly createTime?: string | undefined;
	readonly encryption?: EncryptionConfiguration | undefined;
	readonly globalParameters?: GlobalParameterDefinitionSpecification | undefined;
	readonly provisioningState?: string | undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
	readonly purviewConfiguration?: PurviewConfiguration | undefined;
	readonly repoConfiguration?: FactoryRepoConfiguration | undefined;
	readonly version?: string | undefined;
}
export interface FactoryRepoConfiguration {
	readonly accountName: string;
	readonly collaborationBranch: string;
	readonly disablePublish?: boolean | undefined;
	readonly lastCommitId?: string | undefined;
	readonly repositoryName: string;
	readonly rootFolder: string;
}
export interface FailActivityTypeProperties {
	readonly errorCode: any;
	readonly message: any;
}
export interface FileServerLinkedServiceTypeProperties {
	readonly encryptedCredential?: any | undefined;
	readonly host: any;
	readonly password?: SecretBase | undefined;
	readonly userId?: any | undefined;
}
export interface FileShareDatasetTypeProperties {
	readonly compression?: DatasetCompression | undefined;
	readonly fileFilter?: any | undefined;
	readonly fileName?: any | undefined;
	readonly folderPath?: any | undefined;
	readonly format?: DatasetStorageFormat | undefined;
	readonly modifiedDatetimeEnd?: any | undefined;
	readonly modifiedDatetimeStart?: any | undefined;
}
export interface FilterActivityTypeProperties {
	readonly condition: Expression;
	readonly items: Expression;
}
export interface FlowletTypeProperties {
	readonly script?: string | undefined;
	readonly scriptLines?: string[] | undefined;
	readonly sinks?: DataFlowSink[] | undefined;
	readonly sources?: DataFlowSource[] | undefined;
	readonly transformations?: Transformation[] | undefined;
}
export interface ForEachActivityTypeProperties {
	readonly activities: Activity[];
	readonly batchCount?: number | undefined;
	readonly isSequential?: boolean | undefined;
	readonly items: Expression;
}
export interface FormatReadSettings {}
export interface FtpServerLinkedServiceTypeProperties {
	readonly authenticationType?: ("Anonymous" | "Basic") | undefined;
	readonly enableServerCertificateValidation?: any | undefined;
	readonly enableSsl?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly host: any;
	readonly password?: SecretBase | undefined;
	readonly port?: any | undefined;
	readonly userName?: any | undefined;
}
export interface GenericDatasetTypeProperties {
	readonly tableName?: any | undefined;
}
export interface GetMetadataActivityTypeProperties {
	readonly dataset: DatasetReference;
	readonly fieldList?: any[] | undefined;
	readonly formatSettings?: FormatReadSettings | undefined;
	readonly storeSettings?: StoreReadSettings | undefined;
}
export interface GitHubClientSecret {
	readonly byoaSecretAkvUrl?: string | undefined;
	readonly byoaSecretName?: string | undefined;
}
export interface GlobalParameter {
	readonly "[ key: string ]"?: GlobalParameterSpecification | undefined;
}
export interface GlobalParameterDefinitionSpecification {
	readonly "[ key: string ]"?: GlobalParameterSpecification | undefined;
}
export interface GlobalParameterSpecification {
	readonly type: "Array" | "Bool" | "Float" | "Int" | "Object" | "String";
	readonly value: any;
}
export interface GoogleAdWordsLinkedServiceTypeProperties {
	readonly authenticationType?: ("ServiceAuthentication" | "UserAuthentication") | undefined;
	readonly clientCustomerID?: any | undefined;
	readonly clientId?: any | undefined;
	readonly clientSecret?: SecretBase | undefined;
	readonly connectionProperties?: any | undefined;
	readonly developerToken?: SecretBase | undefined;
	readonly email?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly keyFilePath?: any | undefined;
	readonly refreshToken?: SecretBase | undefined;
	readonly trustedCertPath?: any | undefined;
	readonly useSystemTrustStore?: any | undefined;
}
export interface GoogleBigQueryDatasetTypeProperties {
	readonly dataset?: any | undefined;
	readonly table?: any | undefined;
	readonly tableName?: any | undefined;
}
export interface GoogleBigQueryLinkedServiceTypeProperties {
	readonly additionalProjects?: any | undefined;
	readonly authenticationType: "ServiceAuthentication" | "UserAuthentication";
	readonly clientId?: any | undefined;
	readonly clientSecret?: SecretBase | undefined;
	readonly email?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly keyFilePath?: any | undefined;
	readonly project: any;
	readonly refreshToken?: SecretBase | undefined;
	readonly requestGoogleDriveScope?: any | undefined;
	readonly trustedCertPath?: any | undefined;
	readonly useSystemTrustStore?: any | undefined;
}
export interface GoogleCloudStorageLinkedServiceTypeProperties {
	readonly accessKeyId?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly secretAccessKey?: SecretBase | undefined;
	readonly serviceUrl?: any | undefined;
}
export interface GoogleSheetsLinkedServiceTypeProperties {
	readonly apiToken: SecretBase;
	readonly encryptedCredential?: any | undefined;
}
export interface GreenplumDatasetTypeProperties {
	readonly schema?: any | undefined;
	readonly table?: any | undefined;
	readonly tableName?: any | undefined;
}
export interface GreenplumLinkedServiceTypeProperties {
	readonly connectionString?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly pwd?: AzureKeyVaultSecretReference | undefined;
}
export interface HBaseLinkedServiceTypeProperties {
	readonly allowHostNameCNMismatch?: any | undefined;
	readonly allowSelfSignedServerCert?: any | undefined;
	readonly authenticationType: "Anonymous" | "Basic";
	readonly enableSsl?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly host: any;
	readonly httpPath?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly port?: any | undefined;
	readonly trustedCertPath?: any | undefined;
	readonly username?: any | undefined;
}
export interface HdfsLinkedServiceTypeProperties {
	readonly authenticationType?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly url: any;
	readonly userName?: any | undefined;
}
export interface HDInsightHiveActivityTypeProperties {
	readonly arguments?: any[] | undefined;
	readonly defines?: HDInsightHiveActivityTypePropertiesDefines | undefined;
	readonly getDebugInfo?: ("Always" | "Failure" | "None") | undefined;
	readonly queryTimeout?: number | undefined;
	readonly scriptLinkedService?: LinkedServiceReference | undefined;
	readonly scriptPath?: any | undefined;
	readonly storageLinkedServices?: LinkedServiceReference[] | undefined;
	readonly variables?: any[] | undefined;
}
export interface HDInsightHiveActivityTypePropertiesDefines {
	readonly "[ key: string ]"?: any | undefined;
}
export interface HDInsightLinkedServiceTypeProperties {
	readonly clusterUri: any;
	readonly encryptedCredential?: any | undefined;
	readonly fileSystem?: any | undefined;
	readonly hcatalogLinkedServiceName?: LinkedServiceReference | undefined;
	readonly isEspEnabled?: any | undefined;
	readonly linkedServiceName?: LinkedServiceReference | undefined;
	readonly password?: SecretBase | undefined;
	readonly userName?: any | undefined;
}
export interface HDInsightMapReduceActivityTypeProperties {
	readonly arguments?: any[] | undefined;
	readonly className: any;
	readonly defines?: HDInsightMapReduceActivityTypePropertiesDefines | undefined;
	readonly getDebugInfo?: ("Always" | "Failure" | "None") | undefined;
	readonly jarFilePath: any;
	readonly jarLibs?: any[] | undefined;
	readonly jarLinkedService?: LinkedServiceReference | undefined;
	readonly storageLinkedServices?: LinkedServiceReference[] | undefined;
}
export interface HDInsightMapReduceActivityTypePropertiesDefines {
	readonly "[ key: string ]"?: any | undefined;
}
export interface HDInsightOnDemandLinkedServiceTypeProperties {
	readonly additionalLinkedServiceNames?: LinkedServiceReference[] | undefined;
	readonly clusterNamePrefix?: any | undefined;
	readonly clusterPassword?: SecretBase | undefined;
	readonly clusterResourceGroup: any;
	readonly clusterSize: any;
	readonly clusterSshPassword?: SecretBase | undefined;
	readonly clusterSshUserName?: any | undefined;
	readonly clusterType?: any | undefined;
	readonly clusterUserName?: any | undefined;
	readonly coreConfiguration?: any | undefined;
	readonly credential?: CredentialReference | undefined;
	readonly dataNodeSize?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly hBaseConfiguration?: any | undefined;
	readonly hcatalogLinkedServiceName?: LinkedServiceReference | undefined;
	readonly hdfsConfiguration?: any | undefined;
	readonly headNodeSize?: any | undefined;
	readonly hiveConfiguration?: any | undefined;
	readonly hostSubscriptionId: any;
	readonly linkedServiceName: LinkedServiceReference;
	readonly mapReduceConfiguration?: any | undefined;
	readonly oozieConfiguration?: any | undefined;
	readonly scriptActions?: ScriptAction[] | undefined;
	readonly servicePrincipalId?: any | undefined;
	readonly servicePrincipalKey?: SecretBase | undefined;
	readonly sparkVersion?: any | undefined;
	readonly stormConfiguration?: any | undefined;
	readonly subnetName?: any | undefined;
	readonly tenant: any;
	readonly timeToLive: any;
	readonly version: any;
	readonly virtualNetworkId?: any | undefined;
	readonly yarnConfiguration?: any | undefined;
	readonly zookeeperNodeSize?: any | undefined;
}
export interface HDInsightPigActivityTypeProperties {
	readonly arguments?: any | undefined;
	readonly defines?: HDInsightPigActivityTypePropertiesDefines | undefined;
	readonly getDebugInfo?: ("Always" | "Failure" | "None") | undefined;
	readonly scriptLinkedService?: LinkedServiceReference | undefined;
	readonly scriptPath?: any | undefined;
	readonly storageLinkedServices?: LinkedServiceReference[] | undefined;
}
export interface HDInsightPigActivityTypePropertiesDefines {
	readonly "[ key: string ]"?: any | undefined;
}
export interface HDInsightSparkActivityTypeProperties {
	readonly arguments?: any[] | undefined;
	readonly className?: string | undefined;
	readonly entryFilePath: any;
	readonly getDebugInfo?: ("Always" | "Failure" | "None") | undefined;
	readonly proxyUser?: any | undefined;
	readonly rootPath: any;
	readonly sparkConfig?: HDInsightSparkActivityTypePropertiesSparkConfig | undefined;
	readonly sparkJobLinkedService?: LinkedServiceReference | undefined;
}
export interface HDInsightSparkActivityTypePropertiesSparkConfig {
	readonly "[ key: string ]"?: any | undefined;
}
export interface HDInsightStreamingActivityTypeProperties {
	readonly arguments?: any[] | undefined;
	readonly combiner?: any | undefined;
	readonly commandEnvironment?: any[] | undefined;
	readonly defines?: HDInsightStreamingActivityTypePropertiesDefines | undefined;
	readonly fileLinkedService?: LinkedServiceReference | undefined;
	readonly filePaths: any[];
	readonly getDebugInfo?: ("Always" | "Failure" | "None") | undefined;
	readonly input: any;
	readonly mapper: any;
	readonly output: any;
	readonly reducer: any;
	readonly storageLinkedServices?: LinkedServiceReference[] | undefined;
}
export interface HDInsightStreamingActivityTypePropertiesDefines {
	readonly "[ key: string ]"?: any | undefined;
}
export interface HiveDatasetTypeProperties {
	readonly schema?: any | undefined;
	readonly table?: any | undefined;
	readonly tableName?: any | undefined;
}
export interface HiveLinkedServiceTypeProperties {
	readonly allowHostNameCNMismatch?: any | undefined;
	readonly allowSelfSignedServerCert?: any | undefined;
	readonly authenticationType: "Anonymous" | "Username" | "UsernameAndPassword" | "WindowsAzureHDInsightService";
	readonly enableSsl?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly host: any;
	readonly httpPath?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly port?: any | undefined;
	readonly serverType?: ("HiveServer1" | "HiveServer2" | "HiveThriftServer") | undefined;
	readonly serviceDiscoveryMode?: any | undefined;
	readonly thriftTransportProtocol?: ("Binary" | "HTTP" | "SASL") | undefined;
	readonly trustedCertPath?: any | undefined;
	readonly useNativeQuery?: any | undefined;
	readonly username?: any | undefined;
	readonly useSystemTrustStore?: any | undefined;
	readonly zooKeeperNameSpace?: any | undefined;
}
export interface HttpDatasetTypeProperties {
	readonly additionalHeaders?: any | undefined;
	readonly compression?: DatasetCompression | undefined;
	readonly format?: DatasetStorageFormat | undefined;
	readonly relativeUrl?: any | undefined;
	readonly requestBody?: any | undefined;
	readonly requestMethod?: any | undefined;
}
export interface HttpLinkedServiceTypeProperties {
	readonly authenticationType?: ("Anonymous" | "Basic" | "ClientCertificate" | "Digest" | "Windows") | undefined;
	readonly authHeaders?: any | undefined;
	readonly certThumbprint?: any | undefined;
	readonly embeddedCertData?: any | undefined;
	readonly enableServerCertificateValidation?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly url: any;
	readonly userName?: any | undefined;
}
export interface HubspotLinkedServiceTypeProperties {
	readonly accessToken?: SecretBase | undefined;
	readonly clientId: any;
	readonly clientSecret?: SecretBase | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly refreshToken?: SecretBase | undefined;
	readonly useEncryptedEndpoints?: any | undefined;
	readonly useHostVerification?: any | undefined;
	readonly usePeerVerification?: any | undefined;
}
export interface IfConditionActivityTypeProperties {
	readonly expression: Expression;
	readonly ifFalseActivities?: Activity[] | undefined;
	readonly ifTrueActivities?: Activity[] | undefined;
}
export interface ImpalaDatasetTypeProperties {
	readonly schema?: any | undefined;
	readonly table?: any | undefined;
	readonly tableName?: any | undefined;
}
export interface ImpalaLinkedServiceTypeProperties {
	readonly allowHostNameCNMismatch?: any | undefined;
	readonly allowSelfSignedServerCert?: any | undefined;
	readonly authenticationType: "Anonymous" | "SASLUsername" | "UsernameAndPassword";
	readonly enableSsl?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly host: any;
	readonly password?: SecretBase | undefined;
	readonly port?: any | undefined;
	readonly trustedCertPath?: any | undefined;
	readonly username?: any | undefined;
	readonly useSystemTrustStore?: any | undefined;
}
export interface InformixLinkedServiceTypeProperties {
	readonly authenticationType?: any | undefined;
	readonly connectionString: any;
	readonly credential?: SecretBase | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly userName?: any | undefined;
}
export interface InformixTableDatasetTypeProperties {
	readonly tableName?: any | undefined;
}
export interface IntegrationRuntime {
	readonly description?: string | undefined;
}
export interface IntegrationRuntimeAuthKeys {
	readonly authKey1?: string | undefined;
	readonly authKey2?: string | undefined;
}
export interface IntegrationRuntimeComputeProperties {
	readonly dataFlowProperties?: IntegrationRuntimeDataFlowProperties | undefined;
	readonly location?: string | undefined;
	readonly maxParallelExecutionsPerNode?: number | undefined;
	readonly nodeSize?: string | undefined;
	readonly numberOfNodes?: number | undefined;
	readonly vNetProperties?: IntegrationRuntimeVNetProperties | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface IntegrationRuntimeCustomerVirtualNetwork {
	readonly subnetId?: string | undefined;
}
export interface IntegrationRuntimeCustomSetupScriptProperties {
	readonly blobContainerUri?: string | undefined;
	readonly sasToken?: SecureString | undefined;
}
export interface IntegrationRuntimeDataFlowProperties {
	readonly cleanup?: boolean | undefined;
	readonly computeType?: ("ComputeOptimized" | "General" | "MemoryOptimized") | undefined;
	readonly coreCount?: number | undefined;
	readonly timeToLive?: number | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface IntegrationRuntimeDataProxyProperties {
	readonly connectVia?: EntityReference | undefined;
	readonly path?: string | undefined;
	readonly stagingLinkedService?: EntityReference | undefined;
}
export interface IntegrationRuntimeReference {
	readonly parameters?: ParameterValueSpecification | undefined;
	readonly referenceName: string;
	readonly type: "IntegrationRuntimeReference";
}
export interface IntegrationRuntimeSsisCatalogInfo {
	readonly catalogAdminPassword?: SecureString | undefined;
	readonly catalogAdminUserName?: string | undefined;
	readonly catalogPricingTier?: ("Basic" | "Premium" | "PremiumRS" | "Standard") | undefined;
	readonly catalogServerEndpoint?: string | undefined;
	readonly dualStandbyPairName?: string | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface IntegrationRuntimeSsisProperties {
	readonly catalogInfo?: IntegrationRuntimeSsisCatalogInfo | undefined;
	readonly credential?: CredentialReference | undefined;
	readonly customSetupScriptProperties?: IntegrationRuntimeCustomSetupScriptProperties | undefined;
	readonly dataProxyProperties?: IntegrationRuntimeDataProxyProperties | undefined;
	readonly edition?: ("Enterprise" | "Standard") | undefined;
	readonly expressCustomSetupProperties?: CustomSetupBase[] | undefined;
	readonly licenseType?: ("BasePrice" | "LicenseIncluded") | undefined;
	readonly packageStores?: PackageStore[] | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface IntegrationRuntimeVNetProperties {
	readonly publicIPs?: string[] | undefined;
	readonly subnet?: string | undefined;
	readonly subnetId?: string | undefined;
	readonly vNetId?: string | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface JiraLinkedServiceTypeProperties {
	readonly encryptedCredential?: any | undefined;
	readonly host: any;
	readonly password?: SecretBase | undefined;
	readonly port?: any | undefined;
	readonly useEncryptedEndpoints?: any | undefined;
	readonly useHostVerification?: any | undefined;
	readonly usePeerVerification?: any | undefined;
	readonly username: any;
}
export interface JsonDatasetTypeProperties {
	readonly compression?: DatasetCompression | undefined;
	readonly encodingName?: any | undefined;
	readonly location: DatasetLocation;
}
export interface JsonReadSettings {
	readonly compressionProperties?: CompressionReadSettings | undefined;
	readonly type: string;
	readonly "[ key: string ]"?: any | undefined;
}
export interface JsonWriteSettings {
	readonly filePattern?: any | undefined;
	readonly type: string;
	readonly "[ key: string ]"?: any | undefined;
}
export interface LicensedComponentSetupTypeProperties {
	readonly componentName: string;
	readonly licenseKey?: SecretBase | undefined;
}
export interface LinkedIntegrationRuntimeType {}
export interface LinkedService {
	readonly annotations?: any[] | undefined;
	readonly connectVia?: IntegrationRuntimeReference | undefined;
	readonly description?: string | undefined;
	readonly parameters?: ParameterDefinitionSpecification | undefined;
}
export interface LinkedServiceReference {
	readonly parameters?: ParameterValueSpecification | undefined;
	readonly referenceName: string;
	readonly type: "LinkedServiceReference";
}
export interface LogLocationSettings {
	readonly linkedServiceName: LinkedServiceReference;
	readonly path?: any | undefined;
}
export interface LogSettings {
	readonly copyActivityLogSettings?: CopyActivityLogSettings | undefined;
	readonly enableCopyActivityLog?: any | undefined;
	readonly logLocationSettings: LogLocationSettings;
}
export interface LogStorageSettings {
	readonly enableReliableLogging?: any | undefined;
	readonly linkedServiceName: LinkedServiceReference;
	readonly logLevel?: any | undefined;
	readonly path?: any | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface LookupActivityTypeProperties {
	readonly dataset: DatasetReference;
	readonly firstRowOnly?: any | undefined;
	readonly source: CopySource;
}
export interface MagentoLinkedServiceTypeProperties {
	readonly accessToken?: SecretBase | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly host: any;
	readonly useEncryptedEndpoints?: any | undefined;
	readonly useHostVerification?: any | undefined;
	readonly usePeerVerification?: any | undefined;
}
export interface ManagedIdentityCredential {
	readonly annotations?: any[] | undefined;
	readonly description?: string | undefined;
	readonly type: string;
	readonly typeProperties?: ManagedIdentityTypeProperties | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface ManagedIdentityTypeProperties {
	readonly resourceId?: string | undefined;
}
export interface ManagedIntegrationRuntimeTypeProperties {
	readonly computeProperties?: IntegrationRuntimeComputeProperties | undefined;
	readonly customerVirtualNetwork?: IntegrationRuntimeCustomerVirtualNetwork | undefined;
	readonly ssisProperties?: IntegrationRuntimeSsisProperties | undefined;
}
export interface ManagedPrivateEndpoint {
	readonly connectionState?: ConnectionStateProperties | undefined;
	readonly fqdns?: string[] | undefined;
	readonly groupId?: string | undefined;
	readonly isReserved?: boolean | undefined;
	readonly privateLinkResourceId?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface ManagedVirtualNetwork {
	readonly alias?: string | undefined;
	readonly vNetId?: string | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface ManagedVirtualNetworkReference {
	readonly referenceName: string;
	readonly type: "ManagedVirtualNetworkReference";
}
export interface MappingDataFlowTypeProperties {
	readonly script?: string | undefined;
	readonly scriptLines?: string[] | undefined;
	readonly sinks?: DataFlowSink[] | undefined;
	readonly sources?: DataFlowSource[] | undefined;
	readonly transformations?: Transformation[] | undefined;
}
export interface MariaDBLinkedServiceTypeProperties {
	readonly connectionString?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly pwd?: AzureKeyVaultSecretReference | undefined;
}
export interface MarketoLinkedServiceTypeProperties {
	readonly clientId: any;
	readonly clientSecret?: SecretBase | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly endpoint: any;
	readonly useEncryptedEndpoints?: any | undefined;
	readonly useHostVerification?: any | undefined;
	readonly usePeerVerification?: any | undefined;
}
export interface MetadataItem {
	readonly name?: any | undefined;
	readonly value?: any | undefined;
}
export interface MicrosoftAccessLinkedServiceTypeProperties {
	readonly authenticationType?: any | undefined;
	readonly connectionString: any;
	readonly credential?: SecretBase | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly userName?: any | undefined;
}
export interface MicrosoftAccessTableDatasetTypeProperties {
	readonly tableName?: any | undefined;
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
	readonly limit?: any | undefined;
	readonly project?: any | undefined;
	readonly skip?: any | undefined;
	readonly sort?: any | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface MongoDbLinkedServiceTypeProperties {
	readonly allowSelfSignedServerCert?: any | undefined;
	readonly authenticationType?: ("Anonymous" | "Basic") | undefined;
	readonly authSource?: any | undefined;
	readonly databaseName: any;
	readonly enableSsl?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly port?: any | undefined;
	readonly server: any;
	readonly username?: any | undefined;
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
	readonly encryptedCredential?: any | undefined;
	readonly password?: AzureKeyVaultSecretReference | undefined;
}
export interface MySqlTableDatasetTypeProperties {
	readonly tableName?: any | undefined;
}
export interface NetezzaLinkedServiceTypeProperties {
	readonly connectionString?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly pwd?: AzureKeyVaultSecretReference | undefined;
}
export interface NetezzaPartitionSettings {
	readonly partitionColumnName?: any | undefined;
	readonly partitionLowerBound?: any | undefined;
	readonly partitionUpperBound?: any | undefined;
}
export interface NetezzaTableDatasetTypeProperties {
	readonly schema?: any | undefined;
	readonly table?: any | undefined;
	readonly tableName?: any | undefined;
}
export interface NotebookParameter {
	readonly type?: ("bool" | "float" | "int" | "string") | undefined;
	readonly value?: any | undefined;
}
export interface ODataLinkedServiceTypeProperties {
	readonly aadResourceId?: any | undefined;
	readonly aadServicePrincipalCredentialType?: ("ServicePrincipalCert" | "ServicePrincipalKey") | undefined;
	readonly authenticationType?:
		| ("AadServicePrincipal" | "Anonymous" | "Basic" | "ManagedServiceIdentity" | "Windows")
		| undefined;
	readonly authHeaders?: any | undefined;
	readonly azureCloudType?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly servicePrincipalEmbeddedCert?: SecretBase | undefined;
	readonly servicePrincipalEmbeddedCertPassword?: SecretBase | undefined;
	readonly servicePrincipalId?: any | undefined;
	readonly servicePrincipalKey?: SecretBase | undefined;
	readonly tenant?: any | undefined;
	readonly url: any;
	readonly userName?: any | undefined;
}
export interface ODataResourceDatasetTypeProperties {
	readonly path?: any | undefined;
}
export interface OdbcLinkedServiceTypeProperties {
	readonly authenticationType?: any | undefined;
	readonly connectionString: any;
	readonly credential?: SecretBase | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly userName?: any | undefined;
}
export interface OdbcTableDatasetTypeProperties {
	readonly tableName?: any | undefined;
}
export interface Office365DatasetTypeProperties {
	readonly predicate?: any | undefined;
	readonly tableName: any;
}
export interface Office365LinkedServiceTypeProperties {
	readonly encryptedCredential?: any | undefined;
	readonly office365TenantId: any;
	readonly servicePrincipalId: any;
	readonly servicePrincipalKey: SecretBase;
	readonly servicePrincipalTenantId: any;
}
export interface OracleCloudStorageLinkedServiceTypeProperties {
	readonly accessKeyId?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly secretAccessKey?: SecretBase | undefined;
	readonly serviceUrl?: any | undefined;
}
export interface OracleLinkedServiceTypeProperties {
	readonly connectionString: any;
	readonly encryptedCredential?: any | undefined;
	readonly password?: AzureKeyVaultSecretReference | undefined;
}
export interface OraclePartitionSettings {
	readonly partitionColumnName?: any | undefined;
	readonly partitionLowerBound?: any | undefined;
	readonly partitionNames?: any | undefined;
	readonly partitionUpperBound?: any | undefined;
}
export interface OracleServiceCloudLinkedServiceTypeProperties {
	readonly encryptedCredential?: any | undefined;
	readonly host: any;
	readonly password: SecretBase;
	readonly useEncryptedEndpoints?: any | undefined;
	readonly useHostVerification?: any | undefined;
	readonly usePeerVerification?: any | undefined;
	readonly username: any;
}
export interface OracleTableDatasetTypeProperties {
	readonly schema?: any | undefined;
	readonly table?: any | undefined;
	readonly tableName?: any | undefined;
}
export interface OrcDatasetTypeProperties {
	readonly location: DatasetLocation;
	readonly orcCompressionCodec?: any | undefined;
}
export interface OrcWriteSettings {
	readonly fileNamePrefix?: any | undefined;
	readonly maxRowsPerFile?: any | undefined;
	readonly type: string;
	readonly "[ key: string ]"?: any | undefined;
}
export interface PackageStore {
	readonly name: string;
	readonly packageStoreLinkedService: EntityReference;
}
export interface ParameterDefinitionSpecification {
	readonly "[ key: string ]"?: ParameterSpecification | undefined;
}
export interface ParameterSpecification {
	readonly defaultValue?: any | undefined;
	readonly type: "Array" | "Bool" | "Float" | "Int" | "Object" | "SecureString" | "String";
}
export interface ParameterValueSpecification {
	readonly "[ key: string ]"?: any | undefined;
}
export interface ParquetDatasetTypeProperties {
	readonly compressionCodec?: any | undefined;
	readonly location: DatasetLocation;
}
export interface ParquetWriteSettings {
	readonly fileNamePrefix?: any | undefined;
	readonly maxRowsPerFile?: any | undefined;
	readonly type: string;
	readonly "[ key: string ]"?: any | undefined;
}
export interface PaypalLinkedServiceTypeProperties {
	readonly clientId: any;
	readonly clientSecret?: SecretBase | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly host: any;
	readonly useEncryptedEndpoints?: any | undefined;
	readonly useHostVerification?: any | undefined;
	readonly usePeerVerification?: any | undefined;
}
export interface PhoenixDatasetTypeProperties {
	readonly schema?: any | undefined;
	readonly table?: any | undefined;
	readonly tableName?: any | undefined;
}
export interface PhoenixLinkedServiceTypeProperties {
	readonly allowHostNameCNMismatch?: any | undefined;
	readonly allowSelfSignedServerCert?: any | undefined;
	readonly authenticationType: "Anonymous" | "UsernameAndPassword" | "WindowsAzureHDInsightService";
	readonly enableSsl?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly host: any;
	readonly httpPath?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly port?: any | undefined;
	readonly trustedCertPath?: any | undefined;
	readonly username?: any | undefined;
	readonly useSystemTrustStore?: any | undefined;
}
export interface Pipeline {
	readonly activities?: Activity[] | undefined;
	readonly annotations?: any[] | undefined;
	readonly concurrency?: number | undefined;
	readonly description?: string | undefined;
	readonly folder?: PipelineFolder | undefined;
	readonly parameters?: ParameterDefinitionSpecification | undefined;
	readonly policy?: PipelinePolicy | undefined;
	readonly runDimensions?: PipelineRunDimensions | undefined;
	readonly variables?: VariableDefinitionSpecification | undefined;
}
export interface PipelineElapsedTimeMetricPolicy {
	readonly duration?: any | undefined;
}
export interface PipelineFolder {
	readonly name?: string | undefined;
}
export interface PipelinePolicy {
	readonly elapsedTimeMetric?: PipelineElapsedTimeMetricPolicy | undefined;
}
export interface PipelineReference {
	readonly name?: string | undefined;
	readonly referenceName: string;
	readonly type: "PipelineReference";
}
export interface PipelineRunDimensions {
	readonly "[ key: string ]"?: any | undefined;
}
export interface PolybaseSettings {
	readonly rejectSampleValue?: any | undefined;
	readonly rejectType?: ("percentage" | "value") | undefined;
	readonly rejectValue?: any | undefined;
	readonly useTypeDefault?: any | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface PostgreSqlLinkedServiceTypeProperties {
	readonly connectionString: any;
	readonly encryptedCredential?: any | undefined;
	readonly password?: AzureKeyVaultSecretReference | undefined;
}
export interface PostgreSqlTableDatasetTypeProperties {
	readonly schema?: any | undefined;
	readonly table?: any | undefined;
	readonly tableName?: any | undefined;
}
export interface PowerQuerySink {
	readonly dataset?: DatasetReference | undefined;
	readonly description?: string | undefined;
	readonly flowlet?: DataFlowReference | undefined;
	readonly linkedService?: LinkedServiceReference | undefined;
	readonly name: string;
	readonly rejectedDataLinkedService?: LinkedServiceReference | undefined;
	readonly schemaLinkedService?: LinkedServiceReference | undefined;
	readonly script?: string | undefined;
}
export interface PowerQuerySinkMapping {
	readonly dataflowSinks?: PowerQuerySink[] | undefined;
	readonly queryName?: string | undefined;
}
export interface PowerQuerySource {
	readonly dataset?: DatasetReference | undefined;
	readonly description?: string | undefined;
	readonly flowlet?: DataFlowReference | undefined;
	readonly linkedService?: LinkedServiceReference | undefined;
	readonly name: string;
	readonly schemaLinkedService?: LinkedServiceReference | undefined;
	readonly script?: string | undefined;
}
export interface PowerQueryTypeProperties {
	readonly documentLocale?: string | undefined;
	readonly script?: string | undefined;
	readonly sources?: PowerQuerySource[] | undefined;
}
export interface PrestoDatasetTypeProperties {
	readonly schema?: any | undefined;
	readonly table?: any | undefined;
	readonly tableName?: any | undefined;
}
export interface PrestoLinkedServiceTypeProperties {
	readonly allowHostNameCNMismatch?: any | undefined;
	readonly allowSelfSignedServerCert?: any | undefined;
	readonly authenticationType: "Anonymous" | "LDAP";
	readonly catalog: any;
	readonly enableSsl?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly host: any;
	readonly password?: SecretBase | undefined;
	readonly port?: any | undefined;
	readonly serverVersion: any;
	readonly timeZoneID?: any | undefined;
	readonly trustedCertPath?: any | undefined;
	readonly username?: any | undefined;
	readonly useSystemTrustStore?: any | undefined;
}
export interface PrivateEndpointOrArmIdWrapper {
	readonly id?: string | undefined;
}
export interface PrivateLinkConnectionApprovalRequestOrRemotePrivateEndpointConnection {
	readonly privateEndpoint?: PrivateEndpointOrArmIdWrapper | undefined;
	readonly privateLinkServiceConnectionState?: PrivateLinkConnectionState | undefined;
	readonly provisioningState?: string | undefined;
}
export interface PrivateLinkConnectionState {
	readonly actionsRequired?: string | undefined;
	readonly description?: string | undefined;
	readonly status?: string | undefined;
}
export interface PurviewConfiguration {
	readonly purviewResourceId?: string | undefined;
}
export interface QuickbaseLinkedServiceTypeProperties {
	readonly encryptedCredential?: any | undefined;
	readonly url: any;
	readonly userToken: SecretBase;
}
export interface QuickBooksLinkedServiceTypeProperties {
	readonly accessToken?: SecretBase | undefined;
	readonly accessTokenSecret?: SecretBase | undefined;
	readonly companyId?: any | undefined;
	readonly connectionProperties?: any | undefined;
	readonly consumerKey?: any | undefined;
	readonly consumerSecret?: SecretBase | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly endpoint?: any | undefined;
	readonly useEncryptedEndpoints?: any | undefined;
}
export interface RecurrenceSchedule {
	readonly hours?: number[] | undefined;
	readonly minutes?: number[] | undefined;
	readonly monthDays?: number[] | undefined;
	readonly monthlyOccurrences?: RecurrenceScheduleOccurrence[] | undefined;
	readonly weekDays?: ("Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday"[]) | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface RecurrenceScheduleOccurrence {
	readonly day?: ("Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday") | undefined;
	readonly occurrence?: number | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface RedirectIncompatibleRowSettings {
	readonly linkedServiceName: any;
	readonly path?: any | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface RedshiftUnloadSettings {
	readonly bucketName: any;
	readonly s3LinkedServiceName: LinkedServiceReference;
}
export interface RelationalTableDatasetTypeProperties {
	readonly tableName?: any | undefined;
}
export interface RerunTumblingWindowTriggerTypeProperties {
	readonly parentTrigger: any;
	readonly requestedEndTime: string;
	readonly requestedStartTime: string;
	readonly rerunConcurrency: number;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ResponsysLinkedServiceTypeProperties {
	readonly clientId: any;
	readonly clientSecret?: SecretBase | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly endpoint: any;
	readonly useEncryptedEndpoints?: any | undefined;
	readonly useHostVerification?: any | undefined;
	readonly usePeerVerification?: any | undefined;
}
export interface RestResourceDatasetTypeProperties {
	readonly additionalHeaders?: any | undefined;
	readonly paginationRules?: any | undefined;
	readonly relativeUrl?: any | undefined;
	readonly requestBody?: any | undefined;
	readonly requestMethod?: any | undefined;
}
export interface RestServiceLinkedServiceTypeProperties {
	readonly aadResourceId?: any | undefined;
	readonly authenticationType:
		| "AadServicePrincipal"
		| "Anonymous"
		| "Basic"
		| "ManagedServiceIdentity"
		| "OAuth2ClientCredential";
	readonly authHeaders?: any | undefined;
	readonly azureCloudType?: any | undefined;
	readonly clientId?: any | undefined;
	readonly clientSecret?: SecretBase | undefined;
	readonly credential?: CredentialReference | undefined;
	readonly enableServerCertificateValidation?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly resource?: any | undefined;
	readonly scope?: any | undefined;
	readonly servicePrincipalId?: any | undefined;
	readonly servicePrincipalKey?: SecretBase | undefined;
	readonly tenant?: any | undefined;
	readonly tokenEndpoint?: any | undefined;
	readonly url: any;
	readonly userName?: any | undefined;
}
export interface RetryPolicy {
	readonly count?: any | undefined;
	readonly intervalInSeconds?: number | undefined;
}
export interface SalesforceLinkedServiceTypeProperties {
	readonly apiVersion?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly environmentUrl?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly securityToken?: SecretBase | undefined;
	readonly username?: any | undefined;
}
export interface SalesforceMarketingCloudLinkedServiceTypeProperties {
	readonly clientId?: any | undefined;
	readonly clientSecret?: SecretBase | undefined;
	readonly connectionProperties?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly useEncryptedEndpoints?: any | undefined;
	readonly useHostVerification?: any | undefined;
	readonly usePeerVerification?: any | undefined;
}
export interface SalesforceObjectDatasetTypeProperties {
	readonly objectApiName?: any | undefined;
}
export interface SalesforceServiceCloudLinkedServiceTypeProperties {
	readonly apiVersion?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly environmentUrl?: any | undefined;
	readonly extendedProperties?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly securityToken?: SecretBase | undefined;
	readonly username?: any | undefined;
}
export interface SalesforceServiceCloudObjectDatasetTypeProperties {
	readonly objectApiName?: any | undefined;
}
export interface SapBWLinkedServiceTypeProperties {
	readonly clientId: any;
	readonly encryptedCredential?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly server: any;
	readonly systemNumber: any;
	readonly userName?: any | undefined;
}
export interface SapCloudForCustomerLinkedServiceTypeProperties {
	readonly encryptedCredential?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly url: any;
	readonly username?: any | undefined;
}
export interface SapCloudForCustomerResourceDatasetTypeProperties {
	readonly path: any;
}
export interface SapEccLinkedServiceTypeProperties {
	readonly encryptedCredential?: string | undefined;
	readonly password?: SecretBase | undefined;
	readonly url: string;
	readonly username?: string | undefined;
}
export interface SapEccResourceDatasetTypeProperties {
	readonly path: any;
}
export interface SapHanaLinkedServiceProperties {
	readonly authenticationType?: ("Basic" | "Windows") | undefined;
	readonly connectionString?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly server?: any | undefined;
	readonly userName?: any | undefined;
}
export interface SapHanaPartitionSettings {
	readonly partitionColumnName?: any | undefined;
}
export interface SapHanaTableDatasetTypeProperties {
	readonly schema?: any | undefined;
	readonly table?: any | undefined;
}
export interface SapOdpLinkedServiceTypeProperties {
	readonly clientId?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly language?: any | undefined;
	readonly logonGroup?: any | undefined;
	readonly messageServer?: any | undefined;
	readonly messageServerService?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly server?: any | undefined;
	readonly sncLibraryPath?: any | undefined;
	readonly sncMode?: any | undefined;
	readonly sncMyName?: any | undefined;
	readonly sncPartnerName?: any | undefined;
	readonly sncQop?: any | undefined;
	readonly subscriberName?: any | undefined;
	readonly systemId?: any | undefined;
	readonly systemNumber?: any | undefined;
	readonly userName?: any | undefined;
	readonly x509CertificatePath?: any | undefined;
}
export interface SapOdpResourceDatasetTypeProperties {
	readonly context: any;
	readonly objectName: any;
}
export interface SapOpenHubLinkedServiceTypeProperties {
	readonly clientId?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly language?: any | undefined;
	readonly logonGroup?: any | undefined;
	readonly messageServer?: any | undefined;
	readonly messageServerService?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly server?: any | undefined;
	readonly systemId?: any | undefined;
	readonly systemNumber?: any | undefined;
	readonly userName?: any | undefined;
}
export interface SapOpenHubTableDatasetTypeProperties {
	readonly baseRequestId?: any | undefined;
	readonly excludeLastRequest?: any | undefined;
	readonly openHubDestinationName: any;
}
export interface SapTableLinkedServiceTypeProperties {
	readonly clientId?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly language?: any | undefined;
	readonly logonGroup?: any | undefined;
	readonly messageServer?: any | undefined;
	readonly messageServerService?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly server?: any | undefined;
	readonly sncLibraryPath?: any | undefined;
	readonly sncMode?: any | undefined;
	readonly sncMyName?: any | undefined;
	readonly sncPartnerName?: any | undefined;
	readonly sncQop?: any | undefined;
	readonly systemId?: any | undefined;
	readonly systemNumber?: any | undefined;
	readonly userName?: any | undefined;
}
export interface SapTablePartitionSettings {
	readonly maxPartitionsNumber?: any | undefined;
	readonly partitionColumnName?: any | undefined;
	readonly partitionLowerBound?: any | undefined;
	readonly partitionUpperBound?: any | undefined;
}
export interface SapTableResourceDatasetTypeProperties {
	readonly tableName: any;
}
export interface ScheduleTriggerRecurrence {
	readonly endTime?: string | undefined;
	readonly frequency?: ("Day" | "Hour" | "Minute" | "Month" | "NotSpecified" | "Week" | "Year") | undefined;
	readonly interval?: number | undefined;
	readonly schedule?: RecurrenceSchedule | undefined;
	readonly startTime?: string | undefined;
	readonly timeZone?: string | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface ScheduleTriggerTypeProperties {
	readonly recurrence: ScheduleTriggerRecurrence;
}
export interface ScriptAction {
	readonly name: string;
	readonly parameters?: string | undefined;
	readonly roles: any;
	readonly uri: string;
}
export interface ScriptActivityParameter {
	readonly direction?: ("Input" | "InputOutput" | "Output") | undefined;
	readonly name?: any | undefined;
	readonly size?: number | undefined;
	readonly type?:
		| (
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
				| "Timespan"
		  )
		| undefined;
	readonly value?: any | undefined;
}
export interface ScriptActivityScriptBlock {
	readonly parameters?: ScriptActivityParameter[] | undefined;
	readonly text: any;
	readonly type: "NonQuery" | "Query";
}
export interface ScriptActivityTypeProperties {
	readonly logSettings?: ScriptActivityTypePropertiesLogSettings | undefined;
	readonly scriptBlockExecutionTimeout?: any | undefined;
	readonly scripts?: ScriptActivityScriptBlock[] | undefined;
}
export interface ScriptActivityTypePropertiesLogSettings {
	readonly logDestination: "ActivityOutput" | "ExternalStore";
	readonly logLocationSettings?: LogLocationSettings | undefined;
}
export interface SecretBase {}
export interface SecureString {
	readonly type: string;
	readonly value: string;
}
export interface SelfHostedIntegrationRuntimeTypeProperties {
	readonly linkedInfo?: LinkedIntegrationRuntimeType | undefined;
}
export interface ServiceNowLinkedServiceTypeProperties {
	readonly authenticationType: "Basic" | "OAuth2";
	readonly clientId?: any | undefined;
	readonly clientSecret?: SecretBase | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly endpoint: any;
	readonly password?: SecretBase | undefined;
	readonly useEncryptedEndpoints?: any | undefined;
	readonly useHostVerification?: any | undefined;
	readonly usePeerVerification?: any | undefined;
	readonly username?: any | undefined;
}
export interface SetVariableActivityTypeProperties {
	readonly value?: any | undefined;
	readonly variableName?: string | undefined;
}
export interface SftpServerLinkedServiceTypeProperties {
	readonly authenticationType?: ("Basic" | "MultiFactor" | "SshPublicKey") | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly host: any;
	readonly hostKeyFingerprint?: any | undefined;
	readonly passPhrase?: SecretBase | undefined;
	readonly password?: SecretBase | undefined;
	readonly port?: any | undefined;
	readonly privateKeyContent?: SecretBase | undefined;
	readonly privateKeyPath?: any | undefined;
	readonly skipHostKeyValidation?: any | undefined;
	readonly userName?: any | undefined;
}
export interface SharePointOnlineListDatasetTypeProperties {
	readonly listName?: any | undefined;
}
export interface SharePointOnlineListLinkedServiceTypeProperties {
	readonly encryptedCredential?: any | undefined;
	readonly servicePrincipalId: any;
	readonly servicePrincipalKey: SecretBase;
	readonly siteUrl: any;
	readonly tenantId: any;
}
export interface ShopifyLinkedServiceTypeProperties {
	readonly accessToken?: SecretBase | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly host: any;
	readonly useEncryptedEndpoints?: any | undefined;
	readonly useHostVerification?: any | undefined;
	readonly usePeerVerification?: any | undefined;
}
export interface SkipErrorFile {
	readonly dataInconsistency?: any | undefined;
	readonly fileMissing?: any | undefined;
}
export interface SmartsheetLinkedServiceTypeProperties {
	readonly apiToken: SecretBase;
	readonly encryptedCredential?: any | undefined;
}
export interface SnowflakeDatasetTypeProperties {
	readonly schema?: any | undefined;
	readonly table?: any | undefined;
}
export interface SnowflakeExportCopyCommand {
	readonly additionalCopyOptions?: SnowflakeExportCopyCommandAdditionalCopyOptions | undefined;
	readonly additionalFormatOptions?: SnowflakeExportCopyCommandAdditionalFormatOptions | undefined;
	readonly type: string;
	readonly "[ key: string ]"?: any | undefined;
}
export interface SnowflakeExportCopyCommandAdditionalCopyOptions {
	readonly "[ key: string ]"?: any | undefined;
}
export interface SnowflakeExportCopyCommandAdditionalFormatOptions {
	readonly "[ key: string ]"?: any | undefined;
}
export interface SnowflakeImportCopyCommand {
	readonly additionalCopyOptions?: SnowflakeImportCopyCommandAdditionalCopyOptions | undefined;
	readonly additionalFormatOptions?: SnowflakeImportCopyCommandAdditionalFormatOptions | undefined;
	readonly type: string;
	readonly "[ key: string ]"?: any | undefined;
}
export interface SnowflakeImportCopyCommandAdditionalCopyOptions {
	readonly "[ key: string ]"?: any | undefined;
}
export interface SnowflakeImportCopyCommandAdditionalFormatOptions {
	readonly "[ key: string ]"?: any | undefined;
}
export interface SnowflakeLinkedServiceTypeProperties {
	readonly connectionString: any;
	readonly encryptedCredential?: any | undefined;
	readonly password?: AzureKeyVaultSecretReference | undefined;
}
export interface SparkDatasetTypeProperties {
	readonly schema?: any | undefined;
	readonly table?: any | undefined;
	readonly tableName?: any | undefined;
}
export interface SparkLinkedServiceTypeProperties {
	readonly allowHostNameCNMismatch?: any | undefined;
	readonly allowSelfSignedServerCert?: any | undefined;
	readonly authenticationType: "Anonymous" | "Username" | "UsernameAndPassword" | "WindowsAzureHDInsightService";
	readonly enableSsl?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly host: any;
	readonly httpPath?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly port: any;
	readonly serverType?: ("SharkServer" | "SharkServer2" | "SparkThriftServer") | undefined;
	readonly thriftTransportProtocol?: ("Binary" | "HTTP" | "SASL") | undefined;
	readonly trustedCertPath?: any | undefined;
	readonly username?: any | undefined;
	readonly useSystemTrustStore?: any | undefined;
}
export interface SqlAlwaysEncryptedProperties {
	readonly alwaysEncryptedAkvAuthType: "ManagedIdentity" | "ServicePrincipal" | "UserAssignedManagedIdentity";
	readonly credential?: CredentialReference | undefined;
	readonly servicePrincipalId?: any | undefined;
	readonly servicePrincipalKey?: SecretBase | undefined;
}
export interface SqlDWUpsertSettings {
	readonly interimSchemaName?: any | undefined;
	readonly keys?: any | undefined;
}
export interface SqlPartitionSettings {
	readonly partitionColumnName?: any | undefined;
	readonly partitionLowerBound?: any | undefined;
	readonly partitionUpperBound?: any | undefined;
}
export interface SqlServerLinkedServiceTypeProperties {
	readonly alwaysEncryptedSettings?: SqlAlwaysEncryptedProperties | undefined;
	readonly connectionString: any;
	readonly encryptedCredential?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly userName?: any | undefined;
}
export interface SqlServerStoredProcedureActivityTypeProperties {
	readonly storedProcedureName: any;
	readonly storedProcedureParameters?: any | undefined;
}
export interface SqlServerTableDatasetTypeProperties {
	readonly schema?: any | undefined;
	readonly table?: any | undefined;
	readonly tableName?: any | undefined;
}
export interface SqlUpsertSettings {
	readonly interimSchemaName?: any | undefined;
	readonly keys?: any | undefined;
	readonly useTempDB?: any | undefined;
}
export interface SquareLinkedServiceTypeProperties {
	readonly clientId?: any | undefined;
	readonly clientSecret?: SecretBase | undefined;
	readonly connectionProperties?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly host?: any | undefined;
	readonly redirectUri?: any | undefined;
	readonly useEncryptedEndpoints?: any | undefined;
	readonly useHostVerification?: any | undefined;
	readonly usePeerVerification?: any | undefined;
}
export interface SsisAccessCredential {
	readonly domain: any;
	readonly password: SecretBase;
	readonly userName: any;
}
export interface SsisChildPackage {
	readonly packageContent: any;
	readonly packageLastModifiedDate?: string | undefined;
	readonly packageName?: string | undefined;
	readonly packagePath: any;
}
export interface SsisConnectionManager {
	readonly "[ key: string ]"?: SsisExecutionParameter | undefined;
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
	readonly accessCredential?: SsisAccessCredential | undefined;
	readonly logRefreshInterval?: any | undefined;
}
export interface SsisPackageLocation {
	readonly packagePath?: any | undefined;
	readonly type?: ("File" | "InlinePackage" | "PackageStore" | "SSISDB") | undefined;
	readonly typeProperties?: SsisPackageLocationTypeProperties | undefined;
}
export interface SsisPackageLocationTypeProperties {
	readonly accessCredential?: SsisAccessCredential | undefined;
	readonly childPackages?: SsisChildPackage[] | undefined;
	readonly configurationAccessCredential?: SsisAccessCredential | undefined;
	readonly configurationPath?: any | undefined;
	readonly packageContent?: any | undefined;
	readonly packageLastModifiedDate?: string | undefined;
	readonly packageName?: string | undefined;
	readonly packagePassword?: SecretBase | undefined;
}
export interface SsisPropertyOverride {
	readonly isSensitive?: boolean | undefined;
	readonly value: any;
}
export interface StagingSettings {
	readonly enableCompression?: any | undefined;
	readonly linkedServiceName: LinkedServiceReference;
	readonly path?: any | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface StoreReadSettings {
	readonly disableMetricsCollection?: any | undefined;
	readonly maxConcurrentConnections?: any | undefined;
}
export interface StoreWriteSettings {
	readonly copyBehavior?: any | undefined;
	readonly disableMetricsCollection?: any | undefined;
	readonly maxConcurrentConnections?: any | undefined;
}
export interface SwitchActivityTypeProperties {
	readonly cases?: SwitchCase[] | undefined;
	readonly defaultActivities?: Activity[] | undefined;
	readonly on: Expression;
}
export interface SwitchCase {
	readonly activities?: Activity[] | undefined;
	readonly value?: string | undefined;
}
export interface SybaseLinkedServiceTypeProperties {
	readonly authenticationType?: ("Basic" | "Windows") | undefined;
	readonly database: any;
	readonly encryptedCredential?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly schema?: any | undefined;
	readonly server: any;
	readonly username?: any | undefined;
}
export interface SybaseTableDatasetTypeProperties {
	readonly tableName?: any | undefined;
}
export interface SynapseNotebookActivityTypeProperties {
	readonly conf?: any | undefined;
	readonly driverSize?: any | undefined;
	readonly executorSize?: any | undefined;
	readonly notebook: SynapseNotebookReference;
	readonly numExecutors?: number | undefined;
	readonly parameters?: SynapseNotebookActivityTypePropertiesParameters | undefined;
	readonly sparkPool?: BigDataPoolParametrizationReference | undefined;
}
export interface SynapseNotebookActivityTypePropertiesParameters {
	readonly "[ key: string ]"?: NotebookParameter | undefined;
}
export interface SynapseNotebookReference {
	readonly referenceName: any;
	readonly type: "NotebookReference";
}
export interface SynapseSparkJobActivityTypeProperties {
	readonly args?: any[] | undefined;
	readonly className?: any | undefined;
	readonly conf?: any | undefined;
	readonly driverSize?: any | undefined;
	readonly executorSize?: any | undefined;
	readonly file?: any | undefined;
	readonly files?: any[] | undefined;
	readonly filesV2?: any[] | undefined;
	readonly numExecutors?: number | undefined;
	readonly pythonCodeReference?: any[] | undefined;
	readonly sparkJob: SynapseSparkJobReference;
	readonly targetBigDataPool?: BigDataPoolParametrizationReference | undefined;
}
export interface SynapseSparkJobReference {
	readonly referenceName: any;
	readonly type: "SparkJobDefinitionReference";
}
export interface TeamDeskLinkedServiceTypeProperties {
	readonly apiToken?: SecretBase | undefined;
	readonly authenticationType: "Basic" | "Token";
	readonly encryptedCredential?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly url: any;
	readonly userName?: any | undefined;
}
export interface TeradataLinkedServiceTypeProperties {
	readonly authenticationType?: ("Basic" | "Windows") | undefined;
	readonly connectionString?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly server?: any | undefined;
	readonly username?: any | undefined;
}
export interface TeradataPartitionSettings {
	readonly partitionColumnName?: any | undefined;
	readonly partitionLowerBound?: any | undefined;
	readonly partitionUpperBound?: any | undefined;
}
export interface TeradataTableDatasetTypeProperties {
	readonly database?: any | undefined;
	readonly table?: any | undefined;
}
export interface Transformation {
	readonly dataset?: DatasetReference | undefined;
	readonly description?: string | undefined;
	readonly flowlet?: DataFlowReference | undefined;
	readonly linkedService?: LinkedServiceReference | undefined;
	readonly name: string;
}
export interface Trigger {
	readonly annotations?: any[] | undefined;
	readonly description?: string | undefined;
	readonly runtimeState?: ("Disabled" | "Started" | "Stopped") | undefined;
}
export interface TriggerPipelineReference {
	readonly parameters?: ParameterValueSpecification | undefined;
	readonly pipelineReference?: PipelineReference | undefined;
}
export interface TriggerReference {
	readonly referenceName: string;
	readonly type: "TriggerReference";
}
export interface TumblingWindowTriggerTypeProperties {
	readonly delay?: any | undefined;
	readonly dependsOn?: DependencyReference[] | undefined;
	readonly endTime?: string | undefined;
	readonly frequency: "Hour" | "Minute" | "Month";
	readonly interval: number;
	readonly maxConcurrency: number;
	readonly retryPolicy?: RetryPolicy | undefined;
	readonly startTime: string;
}
export interface TwilioLinkedServiceTypeProperties {
	readonly password: SecretBase;
	readonly userName: any;
}
export interface UntilActivityTypeProperties {
	readonly activities: Activity[];
	readonly expression: Expression;
	readonly timeout?: any | undefined;
}
export interface UserAssignedIdentitiesDefinitionSpecification {
	readonly "[ key: string ]"?: any | undefined;
}
export interface UserProperty {
	readonly name: string;
	readonly value: any;
}
export interface ValidationActivityTypeProperties {
	readonly childItems?: any | undefined;
	readonly dataset: DatasetReference;
	readonly minimumSize?: any | undefined;
	readonly sleep?: any | undefined;
	readonly timeout?: any | undefined;
}
export interface VariableDefinitionSpecification {
	readonly "[ key: string ]"?: VariableSpecification | undefined;
}
export interface VariableSpecification {
	readonly defaultValue?: any | undefined;
	readonly type: "Array" | "Bool" | "String";
}
export interface VerticaDatasetTypeProperties {
	readonly schema?: any | undefined;
	readonly table?: any | undefined;
	readonly tableName?: any | undefined;
}
export interface VerticaLinkedServiceTypeProperties {
	readonly connectionString?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly pwd?: AzureKeyVaultSecretReference | undefined;
}
export interface WaitActivityTypeProperties {
	readonly waitTimeInSeconds: any;
}
export interface WebActivityAuthentication {
	readonly credential?: CredentialReference | undefined;
	readonly password?: SecretBase | undefined;
	readonly pfx?: SecretBase | undefined;
	readonly resource?: any | undefined;
	readonly type?: string | undefined;
	readonly username?: any | undefined;
	readonly userTenant?: any | undefined;
}
export interface WebActivityTypeProperties {
	readonly authentication?: WebActivityAuthentication | undefined;
	readonly body?: any | undefined;
	readonly connectVia?: IntegrationRuntimeReference | undefined;
	readonly datasets?: DatasetReference[] | undefined;
	readonly disableCertValidation?: boolean | undefined;
	readonly headers?: any | undefined;
	readonly linkedServices?: LinkedServiceReference[] | undefined;
	readonly method: "DELETE" | "GET" | "POST" | "PUT";
	readonly url: any;
}
export interface WebHookActivityTypeProperties {
	readonly authentication?: WebActivityAuthentication | undefined;
	readonly body?: any | undefined;
	readonly headers?: any | undefined;
	readonly method: "POST";
	readonly reportStatusOnCallBack?: any | undefined;
	readonly timeout?: string | undefined;
	readonly url: any;
}
export interface WebLinkedServiceTypeProperties {
	readonly url: any;
}
export interface WebTableDatasetTypeProperties {
	readonly index: any;
	readonly path?: any | undefined;
}
export interface XeroLinkedServiceTypeProperties {
	readonly connectionProperties?: any | undefined;
	readonly consumerKey?: SecretBase | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly host?: any | undefined;
	readonly privateKey?: SecretBase | undefined;
	readonly useEncryptedEndpoints?: any | undefined;
	readonly useHostVerification?: any | undefined;
	readonly usePeerVerification?: any | undefined;
}
export interface XmlDatasetTypeProperties {
	readonly compression?: DatasetCompression | undefined;
	readonly encodingName?: any | undefined;
	readonly location: DatasetLocation;
	readonly nullValue?: any | undefined;
}
export interface XmlReadSettings {
	readonly compressionProperties?: CompressionReadSettings | undefined;
	readonly detectDataType?: any | undefined;
	readonly namespacePrefixes?: any | undefined;
	readonly namespaces?: any | undefined;
	readonly type: string;
	readonly validationMode?: any | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface ZendeskLinkedServiceTypeProperties {
	readonly apiToken?: SecretBase | undefined;
	readonly authenticationType: "Basic" | "Token";
	readonly encryptedCredential?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly url: any;
	readonly userName?: any | undefined;
}
export interface ZohoLinkedServiceTypeProperties {
	readonly accessToken?: SecretBase | undefined;
	readonly connectionProperties?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly endpoint?: any | undefined;
	readonly useEncryptedEndpoints?: any | undefined;
	readonly useHostVerification?: any | undefined;
	readonly usePeerVerification?: any | undefined;
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
