import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class clusters extends ArmResource<clustersComponentInputs> implements clustersComponentOutputs {
	constructor(entity: ADKEntity, options: clustersComponentInputs) {
		super(entity, options.name, "Microsoft.StreamAnalytics/clusters", "2020-03-01", options);
	}
	public readonly apiVersion: "2020-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.StreamAnalytics/clusters";
}
export interface clustersComponentOutputs {
	readonly apiVersion: "2020-03-01";
	readonly id: string;
	readonly type: "Microsoft.StreamAnalytics/clusters";
}
export interface clustersComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ClusterProperties;
	readonly sku?: ClusterSku;
	readonly tags?: TrackedResourceTags;
}
export class clusters_privateEndpoints
	extends ArmResource<clusters_privateEndpointsComponentInputs>
	implements clusters_privateEndpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_privateEndpointsComponentInputs) {
		super(entity, options.name, "Microsoft.StreamAnalytics/clusters/privateEndpoints", "2020-03-01", options);
	}
	public readonly apiVersion: "2020-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.StreamAnalytics/clusters/privateEndpoints";
}
export interface clusters_privateEndpointsComponentOutputs {
	readonly apiVersion: "2020-03-01";
	readonly id: string;
	readonly type: "Microsoft.StreamAnalytics/clusters/privateEndpoints";
}
export interface clusters_privateEndpointsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: PrivateEndpointProperties;
}
export class streamingjobs extends ArmResource<streamingjobsComponentInputs> implements streamingjobsComponentOutputs {
	constructor(entity: ADKEntity, options: streamingjobsComponentInputs) {
		super(entity, options.name, "Microsoft.StreamAnalytics/streamingjobs", "2020-03-01", options);
	}
	public readonly apiVersion: "2020-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.StreamAnalytics/streamingjobs";
}
export interface streamingjobsComponentOutputs {
	readonly apiVersion: "2020-03-01";
	readonly id: string;
	readonly type: "Microsoft.StreamAnalytics/streamingjobs";
}
export interface streamingjobsComponentInputs {
	readonly identity?: Identity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: StreamingJobProperties;
	readonly tags?: TrackedResourceTags;
}
export class streamingjobs_functions
	extends ArmResource<streamingjobs_functionsComponentInputs>
	implements streamingjobs_functionsComponentOutputs
{
	constructor(entity: ADKEntity, options: streamingjobs_functionsComponentInputs) {
		super(entity, options.name, "Microsoft.StreamAnalytics/streamingjobs/functions", "2020-03-01", options);
	}
	public readonly apiVersion: "2020-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.StreamAnalytics/streamingjobs/functions";
}
export interface streamingjobs_functionsComponentOutputs {
	readonly apiVersion: "2020-03-01";
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
		super(entity, options.name, "Microsoft.StreamAnalytics/streamingjobs/inputs", "2020-03-01", options);
	}
	public readonly apiVersion: "2020-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.StreamAnalytics/streamingjobs/inputs";
}
export interface streamingjobs_inputsComponentOutputs {
	readonly apiVersion: "2020-03-01";
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
		super(entity, options.name, "Microsoft.StreamAnalytics/streamingjobs/outputs", "2020-03-01", options);
	}
	public readonly apiVersion: "2020-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.StreamAnalytics/streamingjobs/outputs";
}
export interface streamingjobs_outputsComponentOutputs {
	readonly apiVersion: "2020-03-01";
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
		super(entity, options.name, "Microsoft.StreamAnalytics/streamingjobs/transformations", "2020-03-01", options);
	}
	public readonly apiVersion: "2020-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.StreamAnalytics/streamingjobs/transformations";
}
export interface streamingjobs_transformationsComponentOutputs {
	readonly apiVersion: "2020-03-01";
	readonly id: string;
	readonly type: "Microsoft.StreamAnalytics/streamingjobs/transformations";
}
export interface streamingjobs_transformationsComponentInputs {
	readonly name: string;
	readonly properties?: TransformationProperties;
}
export function listStreamingJobs(resource: clusters): ClusterJobListResult {
	if (resource.apiVersion !== "2020-03-01") {
		throw new Error(`listStreamingJobs is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.StreamAnalytics/clusters") {
		throw new Error(`listStreamingJobs is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
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
export interface AzureMachineLearningWebServiceFunctionBindingProperties {
	readonly apiKey?: string;
	readonly batchSize?: number;
	readonly endpoint?: string;
	readonly inputs?: AzureMachineLearningWebServiceInputs;
	readonly outputs?: AzureMachineLearningWebServiceOutputColumn[];
}
export interface AzureMachineLearningWebServiceInputColumn {
	readonly dataType?: string;
	readonly mapTo?: number;
	readonly name?: string;
}
export interface AzureMachineLearningWebServiceInputs {
	readonly columnNames?: AzureMachineLearningWebServiceInputColumn[];
	readonly name?: string;
}
export interface AzureMachineLearningWebServiceOutputColumn {
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
	readonly database?: string;
	readonly deltaSnapshotQuery?: string;
	readonly fullSnapshotQuery?: string;
	readonly password?: string;
	readonly refreshRate?: string;
	readonly refreshType?: "RefreshPeriodicallyWithDelta" | "RefreshPeriodicallyWithFull" | "Static";
	readonly server?: string;
	readonly table?: string;
	readonly user?: string;
}
export interface AzureSynapseOutputDataSourceProperties {
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
	readonly container?: string;
	readonly dateFormat?: string;
	readonly pathPattern?: string;
	readonly storageAccounts?: StorageAccount[];
	readonly timeFormat?: string;
}
export interface BlobReferenceInputDataSourceProperties {
	readonly authenticationMode?: "ConnectionString" | "Msi" | "UserToken";
	readonly container?: string;
	readonly dateFormat?: string;
	readonly pathPattern?: string;
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
export interface ClusterJob {
	readonly id?: string;
	readonly jobState?:
		| "Created"
		| "Degraded"
		| "Deleting"
		| "Failed"
		| "Restarting"
		| "Running"
		| "Scaling"
		| "Starting"
		| "Stopped"
		| "Stopping";
	readonly streamingUnits?: number;
}
export interface ClusterJobListResult {
	readonly nextLink?: string;
	readonly value?: ClusterJob[];
}
export interface ClusterProperties {
	readonly capacityAllocated?: number;
	readonly capacityAssigned?: number;
	readonly clusterId?: string;
	readonly createdDate?: string;
	readonly provisioningState?: "Canceled" | "Failed" | "InProgress" | "Succeeded";
}
export interface ClusterSku {
	readonly capacity?: number;
	readonly name?: "Default";
}
export interface Compression {
	readonly type: "Deflate" | "GZip" | "None";
}
export interface CsvSerializationProperties {
	readonly encoding?: "UTF8";
	readonly fieldDelimiter?: string;
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
	readonly collectionNamePattern?: string;
	readonly database?: string;
	readonly documentId?: string;
	readonly partitionKey?: string;
}
export interface EventHubOutputDataSourceProperties {
	readonly authenticationMode?: "ConnectionString" | "Msi" | "UserToken";
	readonly eventHubName?: string;
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
	readonly serviceBusNamespace?: string;
	readonly sharedAccessPolicyKey?: string;
	readonly sharedAccessPolicyName?: string;
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
	readonly serialization?: Serialization;
	readonly sizeWindow?: number;
	readonly timeWindow?: string;
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
export interface PrivateEndpointProperties {
	readonly createdDate?: string;
	readonly manualPrivateLinkServiceConnections?: PrivateLinkServiceConnection[];
}
export interface PrivateLinkConnectionState {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: string;
}
export interface PrivateLinkServiceConnection {
	readonly properties?: PrivateLinkServiceConnectionProperties;
}
export interface PrivateLinkServiceConnectionProperties {
	readonly groupIds?: string[];
	readonly privateLinkServiceConnectionState?: PrivateLinkConnectionState;
	readonly privateLinkServiceId?: string;
	readonly requestMessage?: string;
}
export interface ReferenceInputDataSource {}
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
	readonly name?: "Standard";
}
export interface StorageAccount {
	readonly accountKey?: string;
	readonly accountName?: string;
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
	clusters: clusters,
	"clusters/privateEndpoints": clusters_privateEndpoints,
	streamingjobs: streamingjobs,
	"streamingjobs/functions": streamingjobs_functions,
	"streamingjobs/inputs": streamingjobs_inputs,
	"streamingjobs/outputs": streamingjobs_outputs,
	"streamingjobs/transformations": streamingjobs_transformations,
};
