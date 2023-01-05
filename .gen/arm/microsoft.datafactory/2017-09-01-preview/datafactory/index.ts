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
	readonly identity?: FactoryIdentity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: FactoryProperties;
	readonly tags?: ResourceTags;
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
	readonly etag?: string;
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
	readonly etag?: string;
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
	readonly etag?: string;
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
	readonly etag?: string;
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
	readonly etag?: string;
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
	readonly dependsOn?: ActivityDependency[];
	readonly description?: string;
	readonly name: string;
}
export interface ActivityDependency {
	readonly activity: string;
	readonly dependencyConditions: "Completed" | "Failed" | "Skipped" | "Succeeded"[];
	readonly [key: string]: any;
}
export interface ActivityPolicy {
	readonly retry?: any;
	readonly retryIntervalInSeconds?: number;
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
export interface AmazonRedshiftLinkedServiceTypeProperties {
	readonly database: any;
	readonly encryptedCredential?: any;
	readonly password?: SecretBase;
	readonly port?: any;
	readonly server: any;
	readonly username?: any;
}
export interface AmazonS3DatasetTypeProperties {
	readonly bucketName: any;
	readonly compression?: DatasetCompression;
	readonly format?: DatasetStorageFormat;
	readonly key?: any;
	readonly prefix?: any;
	readonly version?: any;
}
export interface AmazonS3LinkedServiceTypeProperties {
	readonly accessKeyId?: any;
	readonly encryptedCredential?: any;
	readonly secretAccessKey?: SecretBase;
}
export interface AzureBatchLinkedServiceTypeProperties {
	readonly accessKey?: SecretBase;
	readonly accountName: any;
	readonly batchUri: any;
	readonly encryptedCredential?: any;
	readonly linkedServiceName: LinkedServiceReference;
	readonly poolName: any;
}
export interface AzureBlobDatasetTypeProperties {
	readonly compression?: DatasetCompression;
	readonly fileName?: any;
	readonly folderPath?: any;
	readonly format?: DatasetStorageFormat;
	readonly tableRootLocation?: any;
}
export interface AzureDatabricksLinkedServiceTypeProperties {
	readonly accessToken: SecretBase;
	readonly domain: any;
	readonly encryptedCredential?: any;
	readonly existingClusterId?: any;
	readonly newClusterNodeType?: any;
	readonly newClusterNumOfWorker?: any;
	readonly newClusterSparkConf?: AzureDatabricksLinkedServiceTypePropertiesNewClusterSparkConf;
	readonly newClusterVersion?: any;
}
export interface AzureDatabricksLinkedServiceTypePropertiesNewClusterSparkConf {
	readonly [key: string]: any;
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
	readonly folderPath: any;
	readonly format?: DatasetStorageFormat;
}
export interface AzureDataLakeStoreLinkedServiceTypeProperties {
	readonly accountName?: any;
	readonly dataLakeStoreUri: any;
	readonly encryptedCredential?: any;
	readonly resourceGroupName?: any;
	readonly servicePrincipalId?: any;
	readonly servicePrincipalKey?: SecretBase;
	readonly subscriptionId?: any;
	readonly tenant?: any;
}
export interface AzureKeyVaultLinkedServiceTypeProperties {
	readonly baseUrl: any;
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
export interface AzureMLLinkedServiceTypeProperties {
	readonly apiKey: SecretBase;
	readonly encryptedCredential?: any;
	readonly mlEndpoint: any;
	readonly servicePrincipalId?: any;
	readonly servicePrincipalKey?: SecretBase;
	readonly tenant?: any;
	readonly updateResourceEndpoint?: any;
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
}
export interface AzureMySqlTableDatasetTypeProperties {
	readonly tableName?: any;
}
export interface AzurePostgreSqlLinkedServiceTypeProperties {
	readonly connectionString?: any;
	readonly encryptedCredential?: any;
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
	readonly connectionString: any;
	readonly encryptedCredential?: any;
	readonly servicePrincipalId?: any;
	readonly servicePrincipalKey?: SecretBase;
	readonly tenant?: any;
}
export interface AzureSqlDWLinkedServiceTypeProperties {
	readonly connectionString: any;
	readonly encryptedCredential?: any;
	readonly servicePrincipalId?: any;
	readonly servicePrincipalKey?: SecretBase;
	readonly tenant?: any;
}
export interface AzureSqlDWTableDatasetTypeProperties {
	readonly tableName: any;
}
export interface AzureSqlTableDatasetTypeProperties {
	readonly tableName: any;
}
export interface AzureStorageLinkedServiceTypeProperties {
	readonly connectionString?: any;
	readonly encryptedCredential?: any;
	readonly sasUri?: SecretBase;
}
export interface AzureTableDatasetTypeProperties {
	readonly tableName: any;
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
export interface ConcurLinkedServiceTypeProperties {
	readonly clientId: any;
	readonly encryptedCredential?: any;
	readonly password?: SecretBase;
	readonly useEncryptedEndpoints?: any;
	readonly useHostVerification?: any;
	readonly usePeerVerification?: any;
	readonly username: any;
}
export interface CopyActivityTypeProperties {
	readonly cloudDataMovementUnits?: any;
	readonly enableSkipIncompatibleRow?: any;
	readonly enableStaging?: any;
	readonly parallelCopies?: any;
	readonly redirectIncompatibleRowSettings?: RedirectIncompatibleRowSettings;
	readonly sink: CopySink;
	readonly source: CopySource;
	readonly stagingSettings?: StagingSettings;
	readonly translator?: any;
}
export interface CopySink {
	readonly sinkRetryCount?: any;
	readonly sinkRetryWait?: any;
	readonly writeBatchSize?: any;
	readonly writeBatchTimeout?: any;
}
export interface CopySource {
	readonly sourceRetryCount?: any;
	readonly sourceRetryWait?: any;
}
export interface CosmosDbLinkedServiceTypeProperties {
	readonly connectionString: any;
	readonly encryptedCredential?: any;
}
export interface CouchbaseLinkedServiceTypeProperties {
	readonly connectionString?: any;
	readonly encryptedCredential?: any;
}
export interface CustomActivityReferenceObject {
	readonly datasets?: DatasetReference[];
	readonly linkedServices?: LinkedServiceReference[];
}
export interface CustomActivityTypeProperties {
	readonly command: any;
	readonly extendedProperties?: CustomActivityTypePropertiesExtendedProperties;
	readonly folderPath?: any;
	readonly referenceObjects?: CustomActivityReferenceObject;
	readonly resourceLinkedService?: LinkedServiceReference;
}
export interface CustomActivityTypePropertiesExtendedProperties {
	readonly [key: string]: any;
}
export interface DatabricksNotebookActivityTypeProperties {
	readonly baseParameters?: DatabricksNotebookActivityTypePropertiesBaseParameters;
	readonly notebookPath: any;
}
export interface DatabricksNotebookActivityTypePropertiesBaseParameters {
	readonly [key: string]: any;
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
	readonly linkedServiceName: LinkedServiceReference;
	readonly parameters?: ParameterDefinitionSpecification;
	readonly structure?: any;
}
export interface DatasetCompression {}
export interface DatasetReference {
	readonly parameters?: ParameterValueSpecification;
	readonly referenceName: string;
	readonly type: "DatasetReference";
}
export interface DatasetStorageFormat {
	readonly deserializer?: any;
	readonly serializer?: any;
}
export interface Db2LinkedServiceTypeProperties {
	readonly authenticationType?: "Basic";
	readonly database: any;
	readonly encryptedCredential?: any;
	readonly password?: SecretBase;
	readonly server: any;
	readonly username?: any;
}
export interface DocumentDbCollectionDatasetTypeProperties {
	readonly collectionName: any;
}
export interface DrillLinkedServiceTypeProperties {
	readonly connectionString?: any;
	readonly encryptedCredential?: any;
}
export interface DynamicsEntityDatasetTypeProperties {
	readonly entityName?: any;
}
export interface DynamicsLinkedServiceTypeProperties {
	readonly authenticationType: "Ifd" | "Office365";
	readonly deploymentType: "OnPremisesWithIfd" | "Online";
	readonly encryptedCredential?: any;
	readonly hostName?: any;
	readonly organizationName?: any;
	readonly password?: SecretBase;
	readonly port?: any;
	readonly serviceUri?: any;
	readonly username: any;
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
export interface EntityReference {
	readonly referenceName?: string;
	readonly type?: "IntegrationRuntimeReference" | "LinkedServiceReference";
}
export interface ExecutePipelineActivityTypeProperties {
	readonly parameters?: ParameterValueSpecification;
	readonly pipeline: PipelineReference;
	readonly waitOnCompletion?: boolean;
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
	readonly type: "SystemAssigned";
}
export interface FactoryProperties {
	readonly createTime?: string;
	readonly provisioningState?: string;
	readonly version?: string;
	readonly vstsConfiguration?: FactoryVstsConfiguration;
}
export interface FactoryVstsConfiguration {
	readonly accountName?: string;
	readonly collaborationBranch?: string;
	readonly lastCommitId?: string;
	readonly projectName?: string;
	readonly repositoryName?: string;
	readonly rootFolder?: string;
	readonly tenantId?: string;
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
}
export interface FilterActivityTypeProperties {
	readonly condition: Expression;
	readonly items: Expression;
}
export interface ForEachActivityTypeProperties {
	readonly activities: Activity[];
	readonly batchCount?: number;
	readonly isSequential?: boolean;
	readonly items: Expression;
}
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
export interface GetMetadataActivityTypeProperties {
	readonly dataset: DatasetReference;
	readonly fieldList?: any[];
}
export interface GoogleBigQueryLinkedServiceTypeProperties {
	readonly additionalProjects?: any;
	readonly authenticationType: "ServiceAuthentication" | "UserAuthentication";
	readonly clientId?: SecretBase;
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
export interface GreenplumLinkedServiceTypeProperties {
	readonly connectionString?: any;
	readonly encryptedCredential?: any;
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
	readonly scriptLinkedService?: LinkedServiceReference;
	readonly scriptPath?: any;
	readonly storageLinkedServices?: LinkedServiceReference[];
}
export interface HDInsightHiveActivityTypePropertiesDefines {
	readonly [key: string]: any;
}
export interface HDInsightLinkedServiceTypeProperties {
	readonly clusterUri: any;
	readonly encryptedCredential?: any;
	readonly hcatalogLinkedServiceName?: LinkedServiceReference;
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
	readonly servicePrincipalId?: any;
	readonly servicePrincipalKey?: SecretBase;
	readonly sparkVersion?: any;
	readonly stormConfiguration?: any;
	readonly tenant: any;
	readonly timeToLive: any;
	readonly version: any;
	readonly yarnConfiguration?: any;
	readonly zookeeperNodeSize?: any;
}
export interface HDInsightPigActivityTypeProperties {
	readonly arguments?: any[];
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
export interface IntegrationRuntime {
	readonly description?: string;
}
export interface IntegrationRuntimeAuthKeys {
	readonly authKey1?: string;
	readonly authKey2?: string;
}
export interface IntegrationRuntimeComputeProperties {
	readonly location?: string;
	readonly maxParallelExecutionsPerNode?: number;
	readonly nodeSize?: string;
	readonly numberOfNodes?: number;
	readonly vNetProperties?: IntegrationRuntimeVNetProperties;
	readonly [key: string]: any;
}
export interface IntegrationRuntimeCustomSetupScriptProperties {
	readonly blobContainerUri?: string;
	readonly sasToken?: SecureString;
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
	readonly catalogPricingTier?: string;
	readonly catalogServerEndpoint?: string;
	readonly [key: string]: any;
}
export interface IntegrationRuntimeSsisProperties {
	readonly catalogInfo?: IntegrationRuntimeSsisCatalogInfo;
	readonly customSetupScriptProperties?: IntegrationRuntimeCustomSetupScriptProperties;
	readonly dataProxyProperties?: IntegrationRuntimeDataProxyProperties;
	readonly edition?: "Enterprise" | "Standard";
	readonly licenseType?: "BasePrice" | "LicenseIncluded";
	readonly [key: string]: any;
}
export interface IntegrationRuntimeVNetProperties {
	readonly subnet?: string;
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
export interface LinkedIntegrationRuntimeProperties {}
export interface LinkedIntegrationRuntimeTypeProperties {
	readonly linkedInfo?: LinkedIntegrationRuntimeProperties;
}
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
export interface ManagedIntegrationRuntimeTypeProperties {
	readonly computeProperties?: IntegrationRuntimeComputeProperties;
	readonly ssisProperties?: IntegrationRuntimeSsisProperties;
}
export interface MariaDBLinkedServiceTypeProperties {
	readonly connectionString?: any;
	readonly encryptedCredential?: any;
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
export interface MongoDbCollectionDatasetTypeProperties {
	readonly collectionName: any;
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
export interface MySqlLinkedServiceTypeProperties {
	readonly connectionString: SecretBase;
	readonly encryptedCredential?: any;
}
export interface NetezzaLinkedServiceTypeProperties {
	readonly connectionString?: any;
	readonly encryptedCredential?: any;
}
export interface ODataLinkedServiceTypeProperties {
	readonly authenticationType?: "Anonymous" | "Basic";
	readonly encryptedCredential?: any;
	readonly password?: SecretBase;
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
export interface OracleLinkedServiceTypeProperties {
	readonly connectionString: any;
	readonly encryptedCredential?: any;
}
export interface OracleTableDatasetTypeProperties {
	readonly tableName: any;
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
export interface PaypalLinkedServiceTypeProperties {
	readonly clientId: any;
	readonly clientSecret?: SecretBase;
	readonly encryptedCredential?: any;
	readonly host: any;
	readonly useEncryptedEndpoints?: any;
	readonly useHostVerification?: any;
	readonly usePeerVerification?: any;
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
	readonly parameters?: ParameterDefinitionSpecification;
}
export interface PipelineReference {
	readonly name?: string;
	readonly referenceName: string;
	readonly type: "PipelineReference";
}
export interface PostgreSqlLinkedServiceTypeProperties {
	readonly connectionString: SecretBase;
	readonly encryptedCredential?: any;
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
export interface QuickBooksLinkedServiceTypeProperties {
	readonly accessToken: SecretBase;
	readonly accessTokenSecret: SecretBase;
	readonly companyId: any;
	readonly consumerKey: any;
	readonly consumerSecret: SecretBase;
	readonly encryptedCredential?: any;
	readonly endpoint: any;
	readonly useEncryptedEndpoints?: any;
}
export interface RedirectIncompatibleRowSettings {
	readonly linkedServiceName: any;
	readonly path?: any;
	readonly [key: string]: any;
}
export interface RelationalTableDatasetTypeProperties {
	readonly tableName?: any;
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
export interface SalesforceLinkedServiceTypeProperties {
	readonly encryptedCredential?: any;
	readonly environmentUrl?: any;
	readonly password?: SecretBase;
	readonly securityToken?: SecretBase;
	readonly username?: any;
}
export interface SalesforceMarketingCloudLinkedServiceTypeProperties {
	readonly clientId: any;
	readonly clientSecret?: SecretBase;
	readonly encryptedCredential?: any;
	readonly useEncryptedEndpoints?: any;
	readonly useHostVerification?: any;
	readonly usePeerVerification?: any;
}
export interface SalesforceObjectDatasetTypeProperties {
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
	readonly encryptedCredential?: any;
	readonly password?: SecretBase;
	readonly server: any;
	readonly userName?: any;
}
export interface SecretBase {}
export interface SecureString {
	readonly type: string;
	readonly value: string;
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
export interface SftpServerLinkedServiceTypeProperties {
	readonly authenticationType?: "Basic" | "SshPublicKey";
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
export interface ShopifyLinkedServiceTypeProperties {
	readonly accessToken?: SecretBase;
	readonly encryptedCredential?: any;
	readonly host: any;
	readonly useEncryptedEndpoints?: any;
	readonly useHostVerification?: any;
	readonly usePeerVerification?: any;
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
export interface SqlServerLinkedServiceTypeProperties {
	readonly connectionString: any;
	readonly encryptedCredential?: any;
	readonly password?: SecretBase;
	readonly userName?: any;
}
export interface SqlServerStoredProcedureActivityTypeProperties {
	readonly storedProcedureName: any;
	readonly storedProcedureParameters?: SqlServerStoredProcedureActivityTypePropertiesStoredProcedureParameters;
}
export interface SqlServerStoredProcedureActivityTypePropertiesStoredProcedureParameters {
	readonly [key: string]: StoredProcedureParameter;
}
export interface SqlServerTableDatasetTypeProperties {
	readonly tableName: any;
}
export interface SquareLinkedServiceTypeProperties {
	readonly clientId: any;
	readonly clientSecret?: SecretBase;
	readonly encryptedCredential?: any;
	readonly host: any;
	readonly redirectUri: any;
	readonly useEncryptedEndpoints?: any;
	readonly useHostVerification?: any;
	readonly usePeerVerification?: any;
}
export interface SsisAccessCredential {
	readonly domain: any;
	readonly password: SecretBase;
	readonly userName: any;
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
	readonly packagePath: any;
	readonly type?: "File" | "SSISDB";
	readonly typeProperties?: SsisPackageLocationTypeProperties;
}
export interface SsisPackageLocationTypeProperties {
	readonly accessCredential?: SsisAccessCredential;
	readonly configurationPath?: any;
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
export interface StoredProcedureParameter {
	readonly type?: "Boolean" | "Date" | "Decimal" | "Guid" | "Int" | "Int64" | "String";
	readonly value: any;
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
export interface TeradataLinkedServiceTypeProperties {
	readonly authenticationType?: "Basic" | "Windows";
	readonly encryptedCredential?: any;
	readonly password?: SecretBase;
	readonly server: any;
	readonly username?: any;
}
export interface Trigger {
	readonly description?: string;
	readonly runtimeState?: "Disabled" | "Started" | "Stopped";
}
export interface TriggerPipelineReference {
	readonly parameters?: ParameterValueSpecification;
	readonly pipelineReference?: PipelineReference;
}
export interface UntilActivityTypeProperties {
	readonly activities: Activity[];
	readonly expression: Expression;
	readonly timeout?: any;
}
export interface VerticaLinkedServiceTypeProperties {
	readonly connectionString?: any;
	readonly encryptedCredential?: any;
}
export interface WaitActivityTypeProperties {
	readonly waitTimeInSeconds: number;
}
export interface WebActivityAuthentication {
	readonly password?: SecureString;
	readonly pfx?: SecureString;
	readonly resource?: string;
	readonly type: string;
	readonly username?: string;
}
export interface WebActivityTypeProperties {
	readonly authentication?: WebActivityAuthentication;
	readonly body?: any;
	readonly datasets?: DatasetReference[];
	readonly disableCertValidation?: boolean;
	readonly headers?: any;
	readonly linkedServices?: LinkedServiceReference[];
	readonly method: "DELETE" | "GET" | "POST" | "PUT";
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
	readonly consumerKey?: SecretBase;
	readonly encryptedCredential?: any;
	readonly host: any;
	readonly privateKey?: SecretBase;
	readonly useEncryptedEndpoints?: any;
	readonly useHostVerification?: any;
	readonly usePeerVerification?: any;
}
export interface ZohoLinkedServiceTypeProperties {
	readonly accessToken?: SecretBase;
	readonly encryptedCredential?: any;
	readonly endpoint: any;
	readonly useEncryptedEndpoints?: any;
	readonly useHostVerification?: any;
	readonly usePeerVerification?: any;
}
export default {
	factories: factories,
	"factories/datasets": factories_datasets,
	"factories/integrationRuntimes": factories_integrationRuntimes,
	"factories/linkedservices": factories_linkedservices,
	"factories/pipelines": factories_pipelines,
	"factories/triggers": factories_triggers,
};
