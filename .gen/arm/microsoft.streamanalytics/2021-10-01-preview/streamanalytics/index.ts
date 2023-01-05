import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class streamingjobs extends ArmResource<streamingjobsComponentInputs> implements streamingjobsComponentOutputs {
	constructor(entity: ADKEntity, options: streamingjobsComponentInputs) {
		super(entity, options.name, "Microsoft.StreamAnalytics/streamingjobs", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.StreamAnalytics/streamingjobs";
}
export interface streamingjobsComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.StreamAnalytics/streamingjobs";
}
export interface streamingjobsComponentInputs {
	readonly identity?: Identity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: StreamingJobProperties;
	readonly sku?: Sku;
	readonly tags?: TrackedResourceTags;
}
export class streamingjobs_functions
	extends ArmResource<streamingjobs_functionsComponentInputs>
	implements streamingjobs_functionsComponentOutputs
{
	constructor(entity: ADKEntity, options: streamingjobs_functionsComponentInputs) {
		super(entity, options.name, "Microsoft.StreamAnalytics/streamingjobs/functions", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.StreamAnalytics/streamingjobs/functions";
}
export interface streamingjobs_functionsComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.StreamAnalytics/streamingjobs/functions";
}
export interface streamingjobs_functionsComponentInputs {
	readonly name: string;
	readonly properties?: FunctionProperties;
}
export class streamingjobs_inputs
	extends ArmResource<streamingjobs_inputsComponentInputs>
	implements streamingjobs_inputsComponentOutputs
{
	constructor(entity: ADKEntity, options: streamingjobs_inputsComponentInputs) {
		super(entity, options.name, "Microsoft.StreamAnalytics/streamingjobs/inputs", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.StreamAnalytics/streamingjobs/inputs";
}
export interface streamingjobs_inputsComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.StreamAnalytics/streamingjobs/inputs";
}
export interface streamingjobs_inputsComponentInputs {
	readonly name: string;
	readonly properties?: InputProperties;
}
export class streamingjobs_outputs
	extends ArmResource<streamingjobs_outputsComponentInputs>
	implements streamingjobs_outputsComponentOutputs
{
	constructor(entity: ADKEntity, options: streamingjobs_outputsComponentInputs) {
		super(entity, options.name, "Microsoft.StreamAnalytics/streamingjobs/outputs", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.StreamAnalytics/streamingjobs/outputs";
}
export interface streamingjobs_outputsComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.StreamAnalytics/streamingjobs/outputs";
}
export interface streamingjobs_outputsComponentInputs {
	readonly name: string;
	readonly properties?: OutputProperties;
}
export class streamingjobs_transformations
	extends ArmResource<streamingjobs_transformationsComponentInputs>
	implements streamingjobs_transformationsComponentOutputs
{
	constructor(entity: ADKEntity, options: streamingjobs_transformationsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.StreamAnalytics/streamingjobs/transformations",
			"2021-10-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.StreamAnalytics/streamingjobs/transformations";
}
export interface streamingjobs_transformationsComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.StreamAnalytics/streamingjobs/transformations";
}
export interface streamingjobs_transformationsComponentInputs {
	readonly name: string;
	readonly properties?: TransformationProperties;
}
export interface AzureDataLakeStoreOutputDataSourceProperties {
	readonly accountName?: string;
	readonly authenticationMode?: "ConnectionString" | "Msi" | "UserToken";
	readonly dateFormat?: string;
	readonly filePathPrefix?: string;
	readonly refreshToken?: string;
	readonly tenantId?: string;
	readonly timeFormat?: string;
	readonly tokenUserDisplayName?: string;
	readonly tokenUserPrincipalName?: string;
}
export interface AzureFunctionOutputDataSourceProperties {
	readonly apiKey?: string;
	readonly functionAppName?: string;
	readonly functionName?: string;
	readonly maxBatchCount?: number;
	readonly maxBatchSize?: number;
}
export interface AzureMachineLearningServiceFunctionBindingProperties {
	readonly apiKey?: string;
	readonly batchSize?: number;
	readonly endpoint?: string;
	readonly inputRequestName?: string;
	readonly inputs?: AzureMachineLearningServiceInputColumn[];
	readonly numberOfParallelRequests?: number;
	readonly outputResponseName?: string;
	readonly outputs?: AzureMachineLearningServiceOutputColumn[];
}
export interface AzureMachineLearningServiceInputColumn {
	readonly dataType?: string;
	readonly mapTo?: number;
	readonly name?: string;
}
export interface AzureMachineLearningServiceOutputColumn {
	readonly dataType?: string;
	readonly mapTo?: number;
	readonly name?: string;
}
export interface AzureMachineLearningStudioFunctionBindingProperties {
	readonly apiKey?: string;
	readonly batchSize?: number;
	readonly endpoint?: string;
	readonly inputs?: AzureMachineLearningStudioInputs;
	readonly outputs?: AzureMachineLearningStudioOutputColumn[];
}
export interface AzureMachineLearningStudioInputColumn {
	readonly dataType?: string;
	readonly mapTo?: number;
	readonly name?: string;
}
export interface AzureMachineLearningStudioInputs {
	readonly columnNames?: AzureMachineLearningStudioInputColumn[];
	readonly name?: string;
}
export interface AzureMachineLearningStudioOutputColumn {
	readonly dataType?: string;
	readonly name?: string;
}
export interface AzureSqlDatabaseOutputDataSourceProperties {
	readonly authenticationMode?: "ConnectionString" | "Msi" | "UserToken";
	readonly database?: string;
	readonly maxBatchCount?: number;
	readonly maxWriterCount?: number;
	readonly password?: string;
	readonly server?: string;
	readonly table?: string;
	readonly user?: string;
}
export interface AzureSqlReferenceInputDataSourceProperties {
	readonly authenticationMode?: "ConnectionString" | "Msi" | "UserToken";
	readonly database?: string;
	readonly deltaSnapshotQuery?: string;
	readonly fullSnapshotQuery?: string;
	readonly password?: string;
	readonly refreshRate?: string;
	readonly refreshType?: "RefreshPeriodicallyWithDelta" | "RefreshPeriodicallyWithFull" | "Static";
	readonly server?: string;
	readonly user?: string;
}
export interface AzureSynapseOutputDataSourceProperties {
	readonly authenticationMode?: "ConnectionString" | "Msi" | "UserToken";
	readonly database?: string;
	readonly password?: string;
	readonly server?: string;
	readonly table?: string;
	readonly user?: string;
}
export interface AzureTableOutputDataSourceProperties {
	readonly accountKey?: string;
	readonly accountName?: string;
	readonly batchSize?: number;
	readonly columnsToRemove?: string[];
	readonly partitionKey?: string;
	readonly rowKey?: string;
	readonly table?: string;
}
export interface BlobOutputDataSourceProperties {
	readonly authenticationMode?: "ConnectionString" | "Msi" | "UserToken";
	readonly blobPathPrefix?: string;
	readonly blobWriteMode?: "Append" | "Once";
	readonly container?: string;
	readonly dateFormat?: string;
	readonly pathPattern?: string;
	readonly storageAccounts?: StorageAccount[];
	readonly timeFormat?: string;
}
export interface BlobReferenceInputDataSourceProperties {
	readonly authenticationMode?: "ConnectionString" | "Msi" | "UserToken";
	readonly blobName?: string;
	readonly container?: string;
	readonly dateFormat?: string;
	readonly deltaPathPattern?: string;
	readonly deltaSnapshotRefreshRate?: string;
	readonly fullSnapshotRefreshRate?: string;
	readonly pathPattern?: string;
	readonly sourcePartitionCount?: number;
	readonly storageAccounts?: StorageAccount[];
	readonly timeFormat?: string;
}
export interface BlobStreamInputDataSourceProperties {
	readonly authenticationMode?: "ConnectionString" | "Msi" | "UserToken";
	readonly container?: string;
	readonly dateFormat?: string;
	readonly pathPattern?: string;
	readonly sourcePartitionCount?: number;
	readonly storageAccounts?: StorageAccount[];
	readonly timeFormat?: string;
}
export interface ClusterInfo {
	readonly id?: string;
}
export interface Compression {
	readonly type: "Deflate" | "GZip" | "None";
}
export interface CSharpFunctionBindingProperties {
	readonly class?: string;
	readonly dllPath?: string;
	readonly method?: string;
	readonly updateMode?: "Refreshable" | "Static";
}
export interface CsvSerializationProperties {
	readonly encoding?: "UTF8";
	readonly fieldDelimiter?: string;
}
export interface CustomClrSerializationProperties {
	readonly serializationClassName?: string;
	readonly serializationDllPath?: string;
}
export interface DiagnosticCondition {
	readonly code?: string;
	readonly message?: string;
	readonly since?: string;
}
export interface Diagnostics {
	readonly conditions?: DiagnosticCondition[];
}
export interface DocumentDbOutputDataSourceProperties {
	readonly accountId?: string;
	readonly accountKey?: string;
	readonly authenticationMode?: "ConnectionString" | "Msi" | "UserToken";
	readonly collectionNamePattern?: string;
	readonly database?: string;
	readonly documentId?: string;
	readonly partitionKey?: string;
}
export interface EventGridStreamInputDataSourceProperties {
	readonly eventTypes?: string[];
	readonly schema?: "CloudEventSchema" | "EventGridEventSchema";
	readonly storageAccounts?: StorageAccount[];
	readonly subscriber?: EventHubV2StreamInputDataSource;
}
export interface EventHubOutputDataSourceProperties {
	readonly authenticationMode?: "ConnectionString" | "Msi" | "UserToken";
	readonly eventHubName?: string;
	readonly partitionCount?: number;
	readonly partitionKey?: string;
	readonly propertyColumns?: string[];
	readonly serviceBusNamespace?: string;
	readonly sharedAccessPolicyKey?: string;
	readonly sharedAccessPolicyName?: string;
}
export interface EventHubStreamInputDataSourceProperties {
	readonly authenticationMode?: "ConnectionString" | "Msi" | "UserToken";
	readonly consumerGroupName?: string;
	readonly eventHubName?: string;
	readonly partitionCount?: number;
	readonly prefetchCount?: number;
	readonly serviceBusNamespace?: string;
	readonly sharedAccessPolicyKey?: string;
	readonly sharedAccessPolicyName?: string;
}
export interface EventHubV2StreamInputDataSource {
	readonly properties?: EventHubStreamInputDataSourceProperties;
	readonly type: string;
}
export interface External {
	readonly container?: string;
	readonly path?: string;
	readonly refreshConfiguration?: RefreshConfiguration;
	readonly storageAccount?: StorageAccount;
}
export interface FileReferenceInputDataSourceProperties {
	readonly path?: string;
}
export interface FunctionInstance {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: FunctionProperties;
	readonly type?: string;
}
export interface FunctionBinding {}
export interface FunctionConfiguration {
	readonly binding?: FunctionBinding;
	readonly inputs?: FunctionInput[];
	readonly output?: FunctionOutput;
}
export interface FunctionInput {
	readonly dataType?: string;
	readonly isConfigurationParameter?: boolean;
}
export interface FunctionOutput {
	readonly dataType?: string;
}
export interface FunctionProperties {
	readonly etag?: string;
	readonly properties?: FunctionConfiguration;
}
export interface GatewayMessageBusOutputDataSourceProperties {
	readonly topic?: string;
}
export interface GatewayMessageBusStreamInputDataSourceProperties {
	readonly topic?: string;
}
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: string;
	readonly userAssignedIdentities?: any;
}
export interface Input {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: InputProperties;
	readonly type?: string;
}
export interface InputProperties {
	readonly compression?: Compression;
	readonly diagnostics?: Diagnostics;
	readonly etag?: string;
	readonly partitionKey?: string;
	readonly serialization?: Serialization;
	readonly watermarkSettings?: InputWatermarkProperties;
}
export interface InputWatermarkProperties {
	readonly watermarkMode?: "None" | "ReadWatermark";
}
export interface IoTHubStreamInputDataSourceProperties {
	readonly consumerGroupName?: string;
	readonly endpoint?: string;
	readonly iotHubNamespace?: string;
	readonly sharedAccessPolicyKey?: string;
	readonly sharedAccessPolicyName?: string;
}
export interface JavaScriptFunctionBindingProperties {
	readonly script?: string;
}
export interface JobStorageAccount {
	readonly accountKey?: string;
	readonly accountName?: string;
	readonly authenticationMode?: "ConnectionString" | "Msi" | "UserToken";
}
export interface JsonSerializationProperties {
	readonly encoding?: "UTF8";
	readonly format?: "Array" | "LineSeparated";
}
export interface LastOutputEventTimestamp {
	readonly lastOutputEventTime?: string;
	readonly lastUpdateTime?: string;
}
export interface Output {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: OutputProperties;
	readonly type?: string;
}
export interface OutputDataSource {}
export interface OutputProperties {
	readonly datasource?: OutputDataSource;
	readonly diagnostics?: Diagnostics;
	readonly etag?: string;
	readonly lastOutputEventTimestamps?: LastOutputEventTimestamp[];
	readonly serialization?: Serialization;
	readonly sizeWindow?: number;
	readonly timeWindow?: string;
	readonly watermarkSettings?: OutputWatermarkProperties;
}
export interface OutputWatermarkProperties {
	readonly maxWatermarkDifferenceAcrossPartitions?: string;
	readonly watermarkMode?: "None" | "SendCurrentPartitionWatermark" | "SendLowestWatermarkAcrossPartitions";
}
export interface PostgreSQLOutputDataSourceProperties {
	readonly authenticationMode?: "ConnectionString" | "Msi" | "UserToken";
	readonly database?: string;
	readonly maxWriterCount?: number;
	readonly password?: string;
	readonly server?: string;
	readonly table?: string;
	readonly user?: string;
}
export interface PowerBIOutputDataSourceProperties {
	readonly authenticationMode?: "ConnectionString" | "Msi" | "UserToken";
	readonly dataset?: string;
	readonly groupId?: string;
	readonly groupName?: string;
	readonly refreshToken?: string;
	readonly table?: string;
	readonly tokenUserDisplayName?: string;
	readonly tokenUserPrincipalName?: string;
}
export interface RawInputDatasourceProperties {
	readonly payload?: string;
	readonly payloadUri?: string;
}
export interface RawOutputDatasourceProperties {
	readonly payloadUri?: string;
}
export interface ReferenceInputDataSource {}
export interface RefreshConfiguration {
	readonly dateFormat?: string;
	readonly pathPattern?: string;
	readonly refreshInterval?: string;
	readonly refreshType?: "Blocking" | "Nonblocking";
	readonly timeFormat?: string;
}
export interface Serialization {}
export interface ServiceBusQueueOutputDataSourceProperties {
	readonly authenticationMode?: "ConnectionString" | "Msi" | "UserToken";
	readonly propertyColumns?: string[];
	readonly queueName?: string;
	readonly serviceBusNamespace?: string;
	readonly sharedAccessPolicyKey?: string;
	readonly sharedAccessPolicyName?: string;
	readonly systemPropertyColumns?: any;
}
export interface ServiceBusTopicOutputDataSourceProperties {
	readonly authenticationMode?: "ConnectionString" | "Msi" | "UserToken";
	readonly propertyColumns?: string[];
	readonly serviceBusNamespace?: string;
	readonly sharedAccessPolicyKey?: string;
	readonly sharedAccessPolicyName?: string;
	readonly systemPropertyColumns?: ServiceBusTopicOutputDataSourcePropertiesSystemPropertyColumns;
	readonly topicName?: string;
}
export interface ServiceBusTopicOutputDataSourcePropertiesSystemPropertyColumns {
	readonly [key: string]: string;
}
export interface Sku {
	readonly capacity?: number;
	readonly name?: "Standard";
}
export interface StorageAccount {
	readonly accountKey?: string;
	readonly accountName?: string;
	readonly authenticationMode?: "ConnectionString" | "Msi" | "UserToken";
}
export interface StreamingJobProperties {
	readonly cluster?: ClusterInfo;
	readonly compatibilityLevel?: "1.0" | "1.2";
	readonly contentStoragePolicy?: "JobStorageAccount" | "SystemAccount";
	readonly createdDate?: string;
	readonly dataLocale?: string;
	readonly etag?: string;
	readonly eventsLateArrivalMaxDelayInSeconds?: number;
	readonly eventsOutOfOrderMaxDelayInSeconds?: number;
	readonly eventsOutOfOrderPolicy?: "Adjust" | "Drop";
	readonly externals?: External;
	readonly functions?: FunctionInstance[];
	readonly inputs?: Input[];
	readonly jobId?: string;
	readonly jobState?: string;
	readonly jobStorageAccount?: JobStorageAccount;
	readonly jobType?: "Cloud" | "Edge";
	readonly lastOutputEventTime?: string;
	readonly outputErrorPolicy?: "Drop" | "Stop";
	readonly outputs?: Output[];
	readonly outputStartMode?: "CustomTime" | "JobStartTime" | "LastOutputEventTime";
	readonly outputStartTime?: string;
	readonly provisioningState?: string;
	readonly sku?: Sku;
	readonly transformation?: Transformation;
}
export interface StreamInputDataSource {}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface Transformation {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: TransformationProperties;
	readonly type?: string;
}
export interface TransformationProperties {
	readonly etag?: string;
	readonly query?: string;
	readonly streamingUnits?: number;
	readonly validStreamingUnits?: number[];
}
export default {
	streamingjobs: streamingjobs,
	"streamingjobs/functions": streamingjobs_functions,
	"streamingjobs/inputs": streamingjobs_inputs,
	"streamingjobs/outputs": streamingjobs_outputs,
	"streamingjobs/transformations": streamingjobs_transformations,
};
