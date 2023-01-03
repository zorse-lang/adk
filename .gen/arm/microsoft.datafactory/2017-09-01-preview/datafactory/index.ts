import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class factories extends ArmResource<factoriesComponentInputs> implements factoriesComponentOutputs {
	constructor(entity: ADKEntity, options: factoriesComponentInputs) {
		super(entity, options.name, "Microsoft.DataFactory/factories", "2017-09-01-preview", options);
	}
	public readonly apiVersion: "2017-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataFactory/factories";
}
export interface factoriesComponentOutputs {
	readonly apiVersion: "2017-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataFactory/factories";
}
export interface factoriesComponentInputs {
	readonly identity?: FactoryIdentity | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: FactoryProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class factories_datasets
	extends ArmResource<factories_datasetsComponentInputs>
	implements factories_datasetsComponentOutputs
{
	constructor(entity: ADKEntity, options: factories_datasetsComponentInputs) {
		super(entity, options.name, "Microsoft.DataFactory/factories/datasets", "2017-09-01-preview", options);
	}
	public readonly apiVersion: "2017-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataFactory/factories/datasets";
}
export interface factories_datasetsComponentOutputs {
	readonly apiVersion: "2017-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataFactory/factories/datasets";
}
export interface factories_datasetsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties: Dataset;
}
export class factories_integrationRuntimes
	extends ArmResource<factories_integrationRuntimesComponentInputs>
	implements factories_integrationRuntimesComponentOutputs
{
	constructor(entity: ADKEntity, options: factories_integrationRuntimesComponentInputs) {
		super(entity, options.name, "Microsoft.DataFactory/factories/integrationRuntimes", "2017-09-01-preview", options);
	}
	public readonly apiVersion: "2017-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataFactory/factories/integrationRuntimes";
}
export interface factories_integrationRuntimesComponentOutputs {
	readonly apiVersion: "2017-09-01-preview";
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
		super(entity, options.name, "Microsoft.DataFactory/factories/linkedservices", "2017-09-01-preview", options);
	}
	public readonly apiVersion: "2017-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataFactory/factories/linkedservices";
}
export interface factories_linkedservicesComponentOutputs {
	readonly apiVersion: "2017-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataFactory/factories/linkedservices";
}
export interface factories_linkedservicesComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties: LinkedService;
}
export class factories_pipelines
	extends ArmResource<factories_pipelinesComponentInputs>
	implements factories_pipelinesComponentOutputs
{
	constructor(entity: ADKEntity, options: factories_pipelinesComponentInputs) {
		super(entity, options.name, "Microsoft.DataFactory/factories/pipelines", "2017-09-01-preview", options);
	}
	public readonly apiVersion: "2017-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataFactory/factories/pipelines";
}
export interface factories_pipelinesComponentOutputs {
	readonly apiVersion: "2017-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataFactory/factories/pipelines";
}
export interface factories_pipelinesComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties: Pipeline;
}
export class factories_triggers
	extends ArmResource<factories_triggersComponentInputs>
	implements factories_triggersComponentOutputs
{
	constructor(entity: ADKEntity, options: factories_triggersComponentInputs) {
		super(entity, options.name, "Microsoft.DataFactory/factories/triggers", "2017-09-01-preview", options);
	}
	public readonly apiVersion: "2017-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataFactory/factories/triggers";
}
export interface factories_triggersComponentOutputs {
	readonly apiVersion: "2017-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataFactory/factories/triggers";
}
export interface factories_triggersComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties: Trigger;
}
export function listAuthKeys(resource: factories_integrationRuntimes): IntegrationRuntimeAuthKeys {
	if (resource.apiVersion !== "2017-09-01-preview") {
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
}
export interface ActivityDependency {
	readonly activity: string;
	readonly dependencyConditions: "Completed" | "Failed" | "Skipped" | "Succeeded"[];
	readonly "[ key: string ]"?: any | undefined;
}
export interface ActivityPolicy {
	readonly retry?: any | undefined;
	readonly retryIntervalInSeconds?: number | undefined;
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
export interface AmazonRedshiftLinkedServiceTypeProperties {
	readonly database: any;
	readonly encryptedCredential?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly port?: any | undefined;
	readonly server: any;
	readonly username?: any | undefined;
}
export interface AmazonS3DatasetTypeProperties {
	readonly bucketName: any;
	readonly compression?: DatasetCompression | undefined;
	readonly format?: DatasetStorageFormat | undefined;
	readonly key?: any | undefined;
	readonly prefix?: any | undefined;
	readonly version?: any | undefined;
}
export interface AmazonS3LinkedServiceTypeProperties {
	readonly accessKeyId?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly secretAccessKey?: SecretBase | undefined;
}
export interface AzureBatchLinkedServiceTypeProperties {
	readonly accessKey?: SecretBase | undefined;
	readonly accountName: any;
	readonly batchUri: any;
	readonly encryptedCredential?: any | undefined;
	readonly linkedServiceName: LinkedServiceReference;
	readonly poolName: any;
}
export interface AzureBlobDatasetTypeProperties {
	readonly compression?: DatasetCompression | undefined;
	readonly fileName?: any | undefined;
	readonly folderPath?: any | undefined;
	readonly format?: DatasetStorageFormat | undefined;
	readonly tableRootLocation?: any | undefined;
}
export interface AzureDatabricksLinkedServiceTypeProperties {
	readonly accessToken: SecretBase;
	readonly domain: any;
	readonly encryptedCredential?: any | undefined;
	readonly existingClusterId?: any | undefined;
	readonly newClusterNodeType?: any | undefined;
	readonly newClusterNumOfWorker?: any | undefined;
	readonly newClusterSparkConf?: AzureDatabricksLinkedServiceTypePropertiesNewClusterSparkConf | undefined;
	readonly newClusterVersion?: any | undefined;
}
export interface AzureDatabricksLinkedServiceTypePropertiesNewClusterSparkConf {
	readonly "[ key: string ]"?: any | undefined;
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
	readonly folderPath: any;
	readonly format?: DatasetStorageFormat | undefined;
}
export interface AzureDataLakeStoreLinkedServiceTypeProperties {
	readonly accountName?: any | undefined;
	readonly dataLakeStoreUri: any;
	readonly encryptedCredential?: any | undefined;
	readonly resourceGroupName?: any | undefined;
	readonly servicePrincipalId?: any | undefined;
	readonly servicePrincipalKey?: SecretBase | undefined;
	readonly subscriptionId?: any | undefined;
	readonly tenant?: any | undefined;
}
export interface AzureKeyVaultLinkedServiceTypeProperties {
	readonly baseUrl: any;
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
export interface AzureMLLinkedServiceTypeProperties {
	readonly apiKey: SecretBase;
	readonly encryptedCredential?: any | undefined;
	readonly mlEndpoint: any;
	readonly servicePrincipalId?: any | undefined;
	readonly servicePrincipalKey?: SecretBase | undefined;
	readonly tenant?: any | undefined;
	readonly updateResourceEndpoint?: any | undefined;
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
}
export interface AzureMySqlTableDatasetTypeProperties {
	readonly tableName?: any | undefined;
}
export interface AzurePostgreSqlLinkedServiceTypeProperties {
	readonly connectionString?: any | undefined;
	readonly encryptedCredential?: any | undefined;
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
	readonly connectionString: any;
	readonly encryptedCredential?: any | undefined;
	readonly servicePrincipalId?: any | undefined;
	readonly servicePrincipalKey?: SecretBase | undefined;
	readonly tenant?: any | undefined;
}
export interface AzureSqlDWLinkedServiceTypeProperties {
	readonly connectionString: any;
	readonly encryptedCredential?: any | undefined;
	readonly servicePrincipalId?: any | undefined;
	readonly servicePrincipalKey?: SecretBase | undefined;
	readonly tenant?: any | undefined;
}
export interface AzureSqlDWTableDatasetTypeProperties {
	readonly tableName: any;
}
export interface AzureSqlTableDatasetTypeProperties {
	readonly tableName: any;
}
export interface AzureStorageLinkedServiceTypeProperties {
	readonly connectionString?: any | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly sasUri?: SecretBase | undefined;
}
export interface AzureTableDatasetTypeProperties {
	readonly tableName: any;
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
export interface ConcurLinkedServiceTypeProperties {
	readonly clientId: any;
	readonly encryptedCredential?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly useEncryptedEndpoints?: any | undefined;
	readonly useHostVerification?: any | undefined;
	readonly usePeerVerification?: any | undefined;
	readonly username: any;
}
export interface CopyActivityTypeProperties {
	readonly cloudDataMovementUnits?: any | undefined;
	readonly enableSkipIncompatibleRow?: any | undefined;
	readonly enableStaging?: any | undefined;
	readonly parallelCopies?: any | undefined;
	readonly redirectIncompatibleRowSettings?: RedirectIncompatibleRowSettings | undefined;
	readonly sink: CopySink;
	readonly source: CopySource;
	readonly stagingSettings?: StagingSettings | undefined;
	readonly translator?: any | undefined;
}
export interface CopySink {
	readonly sinkRetryCount?: any | undefined;
	readonly sinkRetryWait?: any | undefined;
	readonly writeBatchSize?: any | undefined;
	readonly writeBatchTimeout?: any | undefined;
}
export interface CopySource {
	readonly sourceRetryCount?: any | undefined;
	readonly sourceRetryWait?: any | undefined;
}
export interface CosmosDbLinkedServiceTypeProperties {
	readonly connectionString: any;
	readonly encryptedCredential?: any | undefined;
}
export interface CouchbaseLinkedServiceTypeProperties {
	readonly connectionString?: any | undefined;
	readonly encryptedCredential?: any | undefined;
}
export interface CustomActivityReferenceObject {
	readonly datasets?: DatasetReference[] | undefined;
	readonly linkedServices?: LinkedServiceReference[] | undefined;
}
export interface CustomActivityTypeProperties {
	readonly command: any;
	readonly extendedProperties?: CustomActivityTypePropertiesExtendedProperties | undefined;
	readonly folderPath?: any | undefined;
	readonly referenceObjects?: CustomActivityReferenceObject | undefined;
	readonly resourceLinkedService?: LinkedServiceReference | undefined;
}
export interface CustomActivityTypePropertiesExtendedProperties {
	readonly "[ key: string ]"?: any | undefined;
}
export interface DatabricksNotebookActivityTypeProperties {
	readonly baseParameters?: DatabricksNotebookActivityTypePropertiesBaseParameters | undefined;
	readonly notebookPath: any;
}
export interface DatabricksNotebookActivityTypePropertiesBaseParameters {
	readonly "[ key: string ]"?: any | undefined;
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
	readonly linkedServiceName: LinkedServiceReference;
	readonly parameters?: ParameterDefinitionSpecification | undefined;
	readonly structure?: any | undefined;
}
export interface DatasetCompression {}
export interface DatasetReference {
	readonly parameters?: ParameterValueSpecification | undefined;
	readonly referenceName: string;
	readonly type: "DatasetReference";
}
export interface DatasetStorageFormat {
	readonly deserializer?: any | undefined;
	readonly serializer?: any | undefined;
}
export interface Db2LinkedServiceTypeProperties {
	readonly authenticationType?: "Basic" | undefined;
	readonly database: any;
	readonly encryptedCredential?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly server: any;
	readonly username?: any | undefined;
}
export interface DocumentDbCollectionDatasetTypeProperties {
	readonly collectionName: any;
}
export interface DrillLinkedServiceTypeProperties {
	readonly connectionString?: any | undefined;
	readonly encryptedCredential?: any | undefined;
}
export interface DynamicsEntityDatasetTypeProperties {
	readonly entityName?: any | undefined;
}
export interface DynamicsLinkedServiceTypeProperties {
	readonly authenticationType: "Ifd" | "Office365";
	readonly deploymentType: "OnPremisesWithIfd" | "Online";
	readonly encryptedCredential?: any | undefined;
	readonly hostName?: any | undefined;
	readonly organizationName?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly port?: any | undefined;
	readonly serviceUri?: any | undefined;
	readonly username: any;
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
export interface EntityReference {
	readonly referenceName?: string | undefined;
	readonly type?: ("IntegrationRuntimeReference" | "LinkedServiceReference") | undefined;
}
export interface ExecutePipelineActivityTypeProperties {
	readonly parameters?: ParameterValueSpecification | undefined;
	readonly pipeline: PipelineReference;
	readonly waitOnCompletion?: boolean | undefined;
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
	readonly type: "SystemAssigned";
}
export interface FactoryProperties {
	readonly createTime?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly version?: string | undefined;
	readonly vstsConfiguration?: FactoryVstsConfiguration | undefined;
}
export interface FactoryVstsConfiguration {
	readonly accountName?: string | undefined;
	readonly collaborationBranch?: string | undefined;
	readonly lastCommitId?: string | undefined;
	readonly projectName?: string | undefined;
	readonly repositoryName?: string | undefined;
	readonly rootFolder?: string | undefined;
	readonly tenantId?: string | undefined;
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
}
export interface FilterActivityTypeProperties {
	readonly condition: Expression;
	readonly items: Expression;
}
export interface ForEachActivityTypeProperties {
	readonly activities: Activity[];
	readonly batchCount?: number | undefined;
	readonly isSequential?: boolean | undefined;
	readonly items: Expression;
}
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
export interface GetMetadataActivityTypeProperties {
	readonly dataset: DatasetReference;
	readonly fieldList?: any[] | undefined;
}
export interface GoogleBigQueryLinkedServiceTypeProperties {
	readonly additionalProjects?: any | undefined;
	readonly authenticationType: "ServiceAuthentication" | "UserAuthentication";
	readonly clientId?: SecretBase | undefined;
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
export interface GreenplumLinkedServiceTypeProperties {
	readonly connectionString?: any | undefined;
	readonly encryptedCredential?: any | undefined;
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
	readonly scriptLinkedService?: LinkedServiceReference | undefined;
	readonly scriptPath?: any | undefined;
	readonly storageLinkedServices?: LinkedServiceReference[] | undefined;
}
export interface HDInsightHiveActivityTypePropertiesDefines {
	readonly "[ key: string ]"?: any | undefined;
}
export interface HDInsightLinkedServiceTypeProperties {
	readonly clusterUri: any;
	readonly encryptedCredential?: any | undefined;
	readonly hcatalogLinkedServiceName?: LinkedServiceReference | undefined;
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
	readonly servicePrincipalId?: any | undefined;
	readonly servicePrincipalKey?: SecretBase | undefined;
	readonly sparkVersion?: any | undefined;
	readonly stormConfiguration?: any | undefined;
	readonly tenant: any;
	readonly timeToLive: any;
	readonly version: any;
	readonly yarnConfiguration?: any | undefined;
	readonly zookeeperNodeSize?: any | undefined;
}
export interface HDInsightPigActivityTypeProperties {
	readonly arguments?: any[] | undefined;
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
export interface IntegrationRuntime {
	readonly description?: string | undefined;
}
export interface IntegrationRuntimeAuthKeys {
	readonly authKey1?: string | undefined;
	readonly authKey2?: string | undefined;
}
export interface IntegrationRuntimeComputeProperties {
	readonly location?: string | undefined;
	readonly maxParallelExecutionsPerNode?: number | undefined;
	readonly nodeSize?: string | undefined;
	readonly numberOfNodes?: number | undefined;
	readonly vNetProperties?: IntegrationRuntimeVNetProperties | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface IntegrationRuntimeCustomSetupScriptProperties {
	readonly blobContainerUri?: string | undefined;
	readonly sasToken?: SecureString | undefined;
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
	readonly catalogPricingTier?: string | undefined;
	readonly catalogServerEndpoint?: string | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface IntegrationRuntimeSsisProperties {
	readonly catalogInfo?: IntegrationRuntimeSsisCatalogInfo | undefined;
	readonly customSetupScriptProperties?: IntegrationRuntimeCustomSetupScriptProperties | undefined;
	readonly dataProxyProperties?: IntegrationRuntimeDataProxyProperties | undefined;
	readonly edition?: ("Enterprise" | "Standard") | undefined;
	readonly licenseType?: ("BasePrice" | "LicenseIncluded") | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface IntegrationRuntimeVNetProperties {
	readonly subnet?: string | undefined;
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
export interface LinkedIntegrationRuntimeProperties {}
export interface LinkedIntegrationRuntimeTypeProperties {
	readonly linkedInfo?: LinkedIntegrationRuntimeProperties | undefined;
}
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
export interface ManagedIntegrationRuntimeTypeProperties {
	readonly computeProperties?: IntegrationRuntimeComputeProperties | undefined;
	readonly ssisProperties?: IntegrationRuntimeSsisProperties | undefined;
}
export interface MariaDBLinkedServiceTypeProperties {
	readonly connectionString?: any | undefined;
	readonly encryptedCredential?: any | undefined;
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
export interface MongoDbCollectionDatasetTypeProperties {
	readonly collectionName: any;
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
export interface MySqlLinkedServiceTypeProperties {
	readonly connectionString: SecretBase;
	readonly encryptedCredential?: any | undefined;
}
export interface NetezzaLinkedServiceTypeProperties {
	readonly connectionString?: any | undefined;
	readonly encryptedCredential?: any | undefined;
}
export interface ODataLinkedServiceTypeProperties {
	readonly authenticationType?: ("Anonymous" | "Basic") | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly password?: SecretBase | undefined;
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
export interface OracleLinkedServiceTypeProperties {
	readonly connectionString: any;
	readonly encryptedCredential?: any | undefined;
}
export interface OracleTableDatasetTypeProperties {
	readonly tableName: any;
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
export interface PaypalLinkedServiceTypeProperties {
	readonly clientId: any;
	readonly clientSecret?: SecretBase | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly host: any;
	readonly useEncryptedEndpoints?: any | undefined;
	readonly useHostVerification?: any | undefined;
	readonly usePeerVerification?: any | undefined;
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
	readonly parameters?: ParameterDefinitionSpecification | undefined;
}
export interface PipelineReference {
	readonly name?: string | undefined;
	readonly referenceName: string;
	readonly type: "PipelineReference";
}
export interface PostgreSqlLinkedServiceTypeProperties {
	readonly connectionString: SecretBase;
	readonly encryptedCredential?: any | undefined;
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
export interface QuickBooksLinkedServiceTypeProperties {
	readonly accessToken: SecretBase;
	readonly accessTokenSecret: SecretBase;
	readonly companyId: any;
	readonly consumerKey: any;
	readonly consumerSecret: SecretBase;
	readonly encryptedCredential?: any | undefined;
	readonly endpoint: any;
	readonly useEncryptedEndpoints?: any | undefined;
}
export interface RedirectIncompatibleRowSettings {
	readonly linkedServiceName: any;
	readonly path?: any | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface RelationalTableDatasetTypeProperties {
	readonly tableName?: any | undefined;
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
export interface SalesforceLinkedServiceTypeProperties {
	readonly encryptedCredential?: any | undefined;
	readonly environmentUrl?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly securityToken?: SecretBase | undefined;
	readonly username?: any | undefined;
}
export interface SalesforceMarketingCloudLinkedServiceTypeProperties {
	readonly clientId: any;
	readonly clientSecret?: SecretBase | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly useEncryptedEndpoints?: any | undefined;
	readonly useHostVerification?: any | undefined;
	readonly usePeerVerification?: any | undefined;
}
export interface SalesforceObjectDatasetTypeProperties {
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
	readonly encryptedCredential?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly server: any;
	readonly userName?: any | undefined;
}
export interface SecretBase {}
export interface SecureString {
	readonly type: string;
	readonly value: string;
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
export interface SftpServerLinkedServiceTypeProperties {
	readonly authenticationType?: ("Basic" | "SshPublicKey") | undefined;
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
export interface ShopifyLinkedServiceTypeProperties {
	readonly accessToken?: SecretBase | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly host: any;
	readonly useEncryptedEndpoints?: any | undefined;
	readonly useHostVerification?: any | undefined;
	readonly usePeerVerification?: any | undefined;
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
export interface SqlServerLinkedServiceTypeProperties {
	readonly connectionString: any;
	readonly encryptedCredential?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly userName?: any | undefined;
}
export interface SqlServerStoredProcedureActivityTypeProperties {
	readonly storedProcedureName: any;
	readonly storedProcedureParameters?:
		| SqlServerStoredProcedureActivityTypePropertiesStoredProcedureParameters
		| undefined;
}
export interface SqlServerStoredProcedureActivityTypePropertiesStoredProcedureParameters {
	readonly "[ key: string ]"?: StoredProcedureParameter | undefined;
}
export interface SqlServerTableDatasetTypeProperties {
	readonly tableName: any;
}
export interface SquareLinkedServiceTypeProperties {
	readonly clientId: any;
	readonly clientSecret?: SecretBase | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly host: any;
	readonly redirectUri: any;
	readonly useEncryptedEndpoints?: any | undefined;
	readonly useHostVerification?: any | undefined;
	readonly usePeerVerification?: any | undefined;
}
export interface SsisAccessCredential {
	readonly domain: any;
	readonly password: SecretBase;
	readonly userName: any;
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
	readonly packagePath: any;
	readonly type?: ("File" | "SSISDB") | undefined;
	readonly typeProperties?: SsisPackageLocationTypeProperties | undefined;
}
export interface SsisPackageLocationTypeProperties {
	readonly accessCredential?: SsisAccessCredential | undefined;
	readonly configurationPath?: any | undefined;
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
export interface StoredProcedureParameter {
	readonly type?: ("Boolean" | "Date" | "Decimal" | "Guid" | "Int" | "Int64" | "String") | undefined;
	readonly value: any;
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
export interface TeradataLinkedServiceTypeProperties {
	readonly authenticationType?: ("Basic" | "Windows") | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly password?: SecretBase | undefined;
	readonly server: any;
	readonly username?: any | undefined;
}
export interface Trigger {
	readonly description?: string | undefined;
	readonly runtimeState?: ("Disabled" | "Started" | "Stopped") | undefined;
}
export interface TriggerPipelineReference {
	readonly parameters?: ParameterValueSpecification | undefined;
	readonly pipelineReference?: PipelineReference | undefined;
}
export interface UntilActivityTypeProperties {
	readonly activities: Activity[];
	readonly expression: Expression;
	readonly timeout?: any | undefined;
}
export interface VerticaLinkedServiceTypeProperties {
	readonly connectionString?: any | undefined;
	readonly encryptedCredential?: any | undefined;
}
export interface WaitActivityTypeProperties {
	readonly waitTimeInSeconds: number;
}
export interface WebActivityAuthentication {
	readonly password?: SecureString | undefined;
	readonly pfx?: SecureString | undefined;
	readonly resource?: string | undefined;
	readonly type: string;
	readonly username?: string | undefined;
}
export interface WebActivityTypeProperties {
	readonly authentication?: WebActivityAuthentication | undefined;
	readonly body?: any | undefined;
	readonly datasets?: DatasetReference[] | undefined;
	readonly disableCertValidation?: boolean | undefined;
	readonly headers?: any | undefined;
	readonly linkedServices?: LinkedServiceReference[] | undefined;
	readonly method: "DELETE" | "GET" | "POST" | "PUT";
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
	readonly consumerKey?: SecretBase | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly host: any;
	readonly privateKey?: SecretBase | undefined;
	readonly useEncryptedEndpoints?: any | undefined;
	readonly useHostVerification?: any | undefined;
	readonly usePeerVerification?: any | undefined;
}
export interface ZohoLinkedServiceTypeProperties {
	readonly accessToken?: SecretBase | undefined;
	readonly encryptedCredential?: any | undefined;
	readonly endpoint: any;
	readonly useEncryptedEndpoints?: any | undefined;
	readonly useHostVerification?: any | undefined;
	readonly usePeerVerification?: any | undefined;
}
export default {
	factories: factories,
	"factories/datasets": factories_datasets,
	"factories/integrationRuntimes": factories_integrationRuntimes,
	"factories/linkedservices": factories_linkedservices,
	"factories/pipelines": factories_pipelines,
	"factories/triggers": factories_triggers,
};
