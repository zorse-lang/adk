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
	readonly identity?: Identity | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: StreamingJobProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: FunctionProperties | undefined;
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
	readonly properties?: InputProperties | undefined;
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
	readonly properties?: OutputProperties | undefined;
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
	readonly properties?: TransformationProperties | undefined;
}
export interface AzureDataLakeStoreOutputDataSourceProperties {
	readonly accountName?: string | undefined;
	readonly authenticationMode?: ("ConnectionString" | "Msi" | "UserToken") | undefined;
	readonly dateFormat?: string | undefined;
	readonly filePathPrefix?: string | undefined;
	readonly refreshToken?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly timeFormat?: string | undefined;
	readonly tokenUserDisplayName?: string | undefined;
	readonly tokenUserPrincipalName?: string | undefined;
}
export interface AzureFunctionOutputDataSourceProperties {
	readonly apiKey?: string | undefined;
	readonly functionAppName?: string | undefined;
	readonly functionName?: string | undefined;
	readonly maxBatchCount?: number | undefined;
	readonly maxBatchSize?: number | undefined;
}
export interface AzureMachineLearningServiceFunctionBindingProperties {
	readonly apiKey?: string | undefined;
	readonly batchSize?: number | undefined;
	readonly endpoint?: string | undefined;
	readonly inputRequestName?: string | undefined;
	readonly inputs?: AzureMachineLearningServiceInputColumn[] | undefined;
	readonly numberOfParallelRequests?: number | undefined;
	readonly outputResponseName?: string | undefined;
	readonly outputs?: AzureMachineLearningServiceOutputColumn[] | undefined;
}
export interface AzureMachineLearningServiceInputColumn {
	readonly dataType?: string | undefined;
	readonly mapTo?: number | undefined;
	readonly name?: string | undefined;
}
export interface AzureMachineLearningServiceOutputColumn {
	readonly dataType?: string | undefined;
	readonly mapTo?: number | undefined;
	readonly name?: string | undefined;
}
export interface AzureMachineLearningStudioFunctionBindingProperties {
	readonly apiKey?: string | undefined;
	readonly batchSize?: number | undefined;
	readonly endpoint?: string | undefined;
	readonly inputs?: AzureMachineLearningStudioInputs | undefined;
	readonly outputs?: AzureMachineLearningStudioOutputColumn[] | undefined;
}
export interface AzureMachineLearningStudioInputColumn {
	readonly dataType?: string | undefined;
	readonly mapTo?: number | undefined;
	readonly name?: string | undefined;
}
export interface AzureMachineLearningStudioInputs {
	readonly columnNames?: AzureMachineLearningStudioInputColumn[] | undefined;
	readonly name?: string | undefined;
}
export interface AzureMachineLearningStudioOutputColumn {
	readonly dataType?: string | undefined;
	readonly name?: string | undefined;
}
export interface AzureSqlDatabaseOutputDataSourceProperties {
	readonly authenticationMode?: ("ConnectionString" | "Msi" | "UserToken") | undefined;
	readonly database?: string | undefined;
	readonly maxBatchCount?: number | undefined;
	readonly maxWriterCount?: number | undefined;
	readonly password?: string | undefined;
	readonly server?: string | undefined;
	readonly table?: string | undefined;
	readonly user?: string | undefined;
}
export interface AzureSqlReferenceInputDataSourceProperties {
	readonly authenticationMode?: ("ConnectionString" | "Msi" | "UserToken") | undefined;
	readonly database?: string | undefined;
	readonly deltaSnapshotQuery?: string | undefined;
	readonly fullSnapshotQuery?: string | undefined;
	readonly password?: string | undefined;
	readonly refreshRate?: string | undefined;
	readonly refreshType?: ("RefreshPeriodicallyWithDelta" | "RefreshPeriodicallyWithFull" | "Static") | undefined;
	readonly server?: string | undefined;
	readonly user?: string | undefined;
}
export interface AzureSynapseOutputDataSourceProperties {
	readonly authenticationMode?: ("ConnectionString" | "Msi" | "UserToken") | undefined;
	readonly database?: string | undefined;
	readonly password?: string | undefined;
	readonly server?: string | undefined;
	readonly table?: string | undefined;
	readonly user?: string | undefined;
}
export interface AzureTableOutputDataSourceProperties {
	readonly accountKey?: string | undefined;
	readonly accountName?: string | undefined;
	readonly batchSize?: number | undefined;
	readonly columnsToRemove?: string[] | undefined;
	readonly partitionKey?: string | undefined;
	readonly rowKey?: string | undefined;
	readonly table?: string | undefined;
}
export interface BlobOutputDataSourceProperties {
	readonly authenticationMode?: ("ConnectionString" | "Msi" | "UserToken") | undefined;
	readonly blobPathPrefix?: string | undefined;
	readonly blobWriteMode?: ("Append" | "Once") | undefined;
	readonly container?: string | undefined;
	readonly dateFormat?: string | undefined;
	readonly pathPattern?: string | undefined;
	readonly storageAccounts?: StorageAccount[] | undefined;
	readonly timeFormat?: string | undefined;
}
export interface BlobReferenceInputDataSourceProperties {
	readonly authenticationMode?: ("ConnectionString" | "Msi" | "UserToken") | undefined;
	readonly blobName?: string | undefined;
	readonly container?: string | undefined;
	readonly dateFormat?: string | undefined;
	readonly deltaPathPattern?: string | undefined;
	readonly deltaSnapshotRefreshRate?: string | undefined;
	readonly fullSnapshotRefreshRate?: string | undefined;
	readonly pathPattern?: string | undefined;
	readonly sourcePartitionCount?: number | undefined;
	readonly storageAccounts?: StorageAccount[] | undefined;
	readonly timeFormat?: string | undefined;
}
export interface BlobStreamInputDataSourceProperties {
	readonly authenticationMode?: ("ConnectionString" | "Msi" | "UserToken") | undefined;
	readonly container?: string | undefined;
	readonly dateFormat?: string | undefined;
	readonly pathPattern?: string | undefined;
	readonly sourcePartitionCount?: number | undefined;
	readonly storageAccounts?: StorageAccount[] | undefined;
	readonly timeFormat?: string | undefined;
}
export interface ClusterInfo {
	readonly id?: string | undefined;
}
export interface Compression {
	readonly type: "Deflate" | "GZip" | "None";
}
export interface CSharpFunctionBindingProperties {
	readonly class?: string | undefined;
	readonly dllPath?: string | undefined;
	readonly method?: string | undefined;
	readonly updateMode?: ("Refreshable" | "Static") | undefined;
}
export interface CsvSerializationProperties {
	readonly encoding?: "UTF8" | undefined;
	readonly fieldDelimiter?: string | undefined;
}
export interface CustomClrSerializationProperties {
	readonly serializationClassName?: string | undefined;
	readonly serializationDllPath?: string | undefined;
}
export interface DiagnosticCondition {
	readonly code?: string | undefined;
	readonly message?: string | undefined;
	readonly since?: string | undefined;
}
export interface Diagnostics {
	readonly conditions?: DiagnosticCondition[] | undefined;
}
export interface DocumentDbOutputDataSourceProperties {
	readonly accountId?: string | undefined;
	readonly accountKey?: string | undefined;
	readonly authenticationMode?: ("ConnectionString" | "Msi" | "UserToken") | undefined;
	readonly collectionNamePattern?: string | undefined;
	readonly database?: string | undefined;
	readonly documentId?: string | undefined;
	readonly partitionKey?: string | undefined;
}
export interface EventGridStreamInputDataSourceProperties {
	readonly eventTypes?: string[] | undefined;
	readonly schema?: ("CloudEventSchema" | "EventGridEventSchema") | undefined;
	readonly storageAccounts?: StorageAccount[] | undefined;
	readonly subscriber?: EventHubV2StreamInputDataSource | undefined;
}
export interface EventHubOutputDataSourceProperties {
	readonly authenticationMode?: ("ConnectionString" | "Msi" | "UserToken") | undefined;
	readonly eventHubName?: string | undefined;
	readonly partitionCount?: number | undefined;
	readonly partitionKey?: string | undefined;
	readonly propertyColumns?: string[] | undefined;
	readonly serviceBusNamespace?: string | undefined;
	readonly sharedAccessPolicyKey?: string | undefined;
	readonly sharedAccessPolicyName?: string | undefined;
}
export interface EventHubStreamInputDataSourceProperties {
	readonly authenticationMode?: ("ConnectionString" | "Msi" | "UserToken") | undefined;
	readonly consumerGroupName?: string | undefined;
	readonly eventHubName?: string | undefined;
	readonly partitionCount?: number | undefined;
	readonly prefetchCount?: number | undefined;
	readonly serviceBusNamespace?: string | undefined;
	readonly sharedAccessPolicyKey?: string | undefined;
	readonly sharedAccessPolicyName?: string | undefined;
}
export interface EventHubV2StreamInputDataSource {
	readonly properties?: EventHubStreamInputDataSourceProperties | undefined;
	readonly type: string;
}
export interface External {
	readonly container?: string | undefined;
	readonly path?: string | undefined;
	readonly refreshConfiguration?: RefreshConfiguration | undefined;
	readonly storageAccount?: StorageAccount | undefined;
}
export interface FileReferenceInputDataSourceProperties {
	readonly path?: string | undefined;
}
export interface FunctionInstance {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: FunctionProperties | undefined;
	readonly type?: string | undefined;
}
export interface FunctionBinding {}
export interface FunctionConfiguration {
	readonly binding?: FunctionBinding | undefined;
	readonly inputs?: FunctionInput[] | undefined;
	readonly output?: FunctionOutput | undefined;
}
export interface FunctionInput {
	readonly dataType?: string | undefined;
	readonly isConfigurationParameter?: boolean | undefined;
}
export interface FunctionOutput {
	readonly dataType?: string | undefined;
}
export interface FunctionProperties {
	readonly etag?: string | undefined;
	readonly properties?: FunctionConfiguration | undefined;
}
export interface GatewayMessageBusOutputDataSourceProperties {
	readonly topic?: string | undefined;
}
export interface GatewayMessageBusStreamInputDataSourceProperties {
	readonly topic?: string | undefined;
}
export interface Identity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: string | undefined;
	readonly userAssignedIdentities?: any | undefined;
}
export interface Input {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: InputProperties | undefined;
	readonly type?: string | undefined;
}
export interface InputProperties {
	readonly compression?: Compression | undefined;
	readonly diagnostics?: Diagnostics | undefined;
	readonly etag?: string | undefined;
	readonly partitionKey?: string | undefined;
	readonly serialization?: Serialization | undefined;
	readonly watermarkSettings?: InputWatermarkProperties | undefined;
}
export interface InputWatermarkProperties {
	readonly watermarkMode?: ("None" | "ReadWatermark") | undefined;
}
export interface IoTHubStreamInputDataSourceProperties {
	readonly consumerGroupName?: string | undefined;
	readonly endpoint?: string | undefined;
	readonly iotHubNamespace?: string | undefined;
	readonly sharedAccessPolicyKey?: string | undefined;
	readonly sharedAccessPolicyName?: string | undefined;
}
export interface JavaScriptFunctionBindingProperties {
	readonly script?: string | undefined;
}
export interface JobStorageAccount {
	readonly accountKey?: string | undefined;
	readonly accountName?: string | undefined;
	readonly authenticationMode?: ("ConnectionString" | "Msi" | "UserToken") | undefined;
}
export interface JsonSerializationProperties {
	readonly encoding?: "UTF8" | undefined;
	readonly format?: ("Array" | "LineSeparated") | undefined;
}
export interface LastOutputEventTimestamp {
	readonly lastOutputEventTime?: string | undefined;
	readonly lastUpdateTime?: string | undefined;
}
export interface Output {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: OutputProperties | undefined;
	readonly type?: string | undefined;
}
export interface OutputDataSource {}
export interface OutputProperties {
	readonly datasource?: OutputDataSource | undefined;
	readonly diagnostics?: Diagnostics | undefined;
	readonly etag?: string | undefined;
	readonly lastOutputEventTimestamps?: LastOutputEventTimestamp[] | undefined;
	readonly serialization?: Serialization | undefined;
	readonly sizeWindow?: number | undefined;
	readonly timeWindow?: string | undefined;
	readonly watermarkSettings?: OutputWatermarkProperties | undefined;
}
export interface OutputWatermarkProperties {
	readonly maxWatermarkDifferenceAcrossPartitions?: string | undefined;
	readonly watermarkMode?:
		| ("None" | "SendCurrentPartitionWatermark" | "SendLowestWatermarkAcrossPartitions")
		| undefined;
}
export interface PostgreSQLOutputDataSourceProperties {
	readonly authenticationMode?: ("ConnectionString" | "Msi" | "UserToken") | undefined;
	readonly database?: string | undefined;
	readonly maxWriterCount?: number | undefined;
	readonly password?: string | undefined;
	readonly server?: string | undefined;
	readonly table?: string | undefined;
	readonly user?: string | undefined;
}
export interface PowerBIOutputDataSourceProperties {
	readonly authenticationMode?: ("ConnectionString" | "Msi" | "UserToken") | undefined;
	readonly dataset?: string | undefined;
	readonly groupId?: string | undefined;
	readonly groupName?: string | undefined;
	readonly refreshToken?: string | undefined;
	readonly table?: string | undefined;
	readonly tokenUserDisplayName?: string | undefined;
	readonly tokenUserPrincipalName?: string | undefined;
}
export interface RawInputDatasourceProperties {
	readonly payload?: string | undefined;
	readonly payloadUri?: string | undefined;
}
export interface RawOutputDatasourceProperties {
	readonly payloadUri?: string | undefined;
}
export interface ReferenceInputDataSource {}
export interface RefreshConfiguration {
	readonly dateFormat?: string | undefined;
	readonly pathPattern?: string | undefined;
	readonly refreshInterval?: string | undefined;
	readonly refreshType?: ("Blocking" | "Nonblocking") | undefined;
	readonly timeFormat?: string | undefined;
}
export interface Serialization {}
export interface ServiceBusQueueOutputDataSourceProperties {
	readonly authenticationMode?: ("ConnectionString" | "Msi" | "UserToken") | undefined;
	readonly propertyColumns?: string[] | undefined;
	readonly queueName?: string | undefined;
	readonly serviceBusNamespace?: string | undefined;
	readonly sharedAccessPolicyKey?: string | undefined;
	readonly sharedAccessPolicyName?: string | undefined;
	readonly systemPropertyColumns?: any | undefined;
}
export interface ServiceBusTopicOutputDataSourceProperties {
	readonly authenticationMode?: ("ConnectionString" | "Msi" | "UserToken") | undefined;
	readonly propertyColumns?: string[] | undefined;
	readonly serviceBusNamespace?: string | undefined;
	readonly sharedAccessPolicyKey?: string | undefined;
	readonly sharedAccessPolicyName?: string | undefined;
	readonly systemPropertyColumns?: ServiceBusTopicOutputDataSourcePropertiesSystemPropertyColumns | undefined;
	readonly topicName?: string | undefined;
}
export interface ServiceBusTopicOutputDataSourcePropertiesSystemPropertyColumns {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Sku {
	readonly capacity?: number | undefined;
	readonly name?: "Standard" | undefined;
}
export interface StorageAccount {
	readonly accountKey?: string | undefined;
	readonly accountName?: string | undefined;
	readonly authenticationMode?: ("ConnectionString" | "Msi" | "UserToken") | undefined;
}
export interface StreamingJobProperties {
	readonly cluster?: ClusterInfo | undefined;
	readonly compatibilityLevel?: ("1.0" | "1.2") | undefined;
	readonly contentStoragePolicy?: ("JobStorageAccount" | "SystemAccount") | undefined;
	readonly createdDate?: string | undefined;
	readonly dataLocale?: string | undefined;
	readonly etag?: string | undefined;
	readonly eventsLateArrivalMaxDelayInSeconds?: number | undefined;
	readonly eventsOutOfOrderMaxDelayInSeconds?: number | undefined;
	readonly eventsOutOfOrderPolicy?: ("Adjust" | "Drop") | undefined;
	readonly externals?: External | undefined;
	readonly functions?: FunctionInstance[] | undefined;
	readonly inputs?: Input[] | undefined;
	readonly jobId?: string | undefined;
	readonly jobState?: string | undefined;
	readonly jobStorageAccount?: JobStorageAccount | undefined;
	readonly jobType?: ("Cloud" | "Edge") | undefined;
	readonly lastOutputEventTime?: string | undefined;
	readonly outputErrorPolicy?: ("Drop" | "Stop") | undefined;
	readonly outputs?: Output[] | undefined;
	readonly outputStartMode?: ("CustomTime" | "JobStartTime" | "LastOutputEventTime") | undefined;
	readonly outputStartTime?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly sku?: Sku | undefined;
	readonly transformation?: Transformation | undefined;
}
export interface StreamInputDataSource {}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Transformation {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: TransformationProperties | undefined;
	readonly type?: string | undefined;
}
export interface TransformationProperties {
	readonly etag?: string | undefined;
	readonly query?: string | undefined;
	readonly streamingUnits?: number | undefined;
	readonly validStreamingUnits?: number[] | undefined;
}
export default {
	streamingjobs: streamingjobs,
	"streamingjobs/functions": streamingjobs_functions,
	"streamingjobs/inputs": streamingjobs_inputs,
	"streamingjobs/outputs": streamingjobs_outputs,
	"streamingjobs/transformations": streamingjobs_transformations,
};
