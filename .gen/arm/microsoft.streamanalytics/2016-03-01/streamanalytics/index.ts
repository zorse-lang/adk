import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class streamingjobs extends ArmResource<streamingjobsComponentInputs> implements streamingjobsComponentOutputs {
	constructor(entity: ADKEntity, options: streamingjobsComponentInputs) {
		super(entity, options.name, "Microsoft.StreamAnalytics/streamingjobs", "2016-03-01", options);
	}
	public readonly apiVersion: "2016-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.StreamAnalytics/streamingjobs";
}
export interface streamingjobsComponentOutputs {
	readonly apiVersion: "2016-03-01";
	readonly id: string;
	readonly type: "Microsoft.StreamAnalytics/streamingjobs";
}
export interface streamingjobsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: StreamingJobProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class streamingjobs_functions
	extends ArmResource<streamingjobs_functionsComponentInputs>
	implements streamingjobs_functionsComponentOutputs
{
	constructor(entity: ADKEntity, options: streamingjobs_functionsComponentInputs) {
		super(entity, options.name, "Microsoft.StreamAnalytics/streamingjobs/functions", "2016-03-01", options);
	}
	public readonly apiVersion: "2016-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.StreamAnalytics/streamingjobs/functions";
}
export interface streamingjobs_functionsComponentOutputs {
	readonly apiVersion: "2016-03-01";
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
		super(entity, options.name, "Microsoft.StreamAnalytics/streamingjobs/inputs", "2016-03-01", options);
	}
	public readonly apiVersion: "2016-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.StreamAnalytics/streamingjobs/inputs";
}
export interface streamingjobs_inputsComponentOutputs {
	readonly apiVersion: "2016-03-01";
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
		super(entity, options.name, "Microsoft.StreamAnalytics/streamingjobs/outputs", "2016-03-01", options);
	}
	public readonly apiVersion: "2016-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.StreamAnalytics/streamingjobs/outputs";
}
export interface streamingjobs_outputsComponentOutputs {
	readonly apiVersion: "2016-03-01";
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
		super(entity, options.name, "Microsoft.StreamAnalytics/streamingjobs/transformations", "2016-03-01", options);
	}
	public readonly apiVersion: "2016-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.StreamAnalytics/streamingjobs/transformations";
}
export interface streamingjobs_transformationsComponentOutputs {
	readonly apiVersion: "2016-03-01";
	readonly id: string;
	readonly type: "Microsoft.StreamAnalytics/streamingjobs/transformations";
}
export interface streamingjobs_transformationsComponentInputs {
	readonly name: string;
	readonly properties?: TransformationProperties | undefined;
}
export interface AzureDataLakeStoreOutputDataSourceProperties {
	readonly accountName?: string | undefined;
	readonly dateFormat?: string | undefined;
	readonly filePathPrefix?: string | undefined;
	readonly refreshToken?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly timeFormat?: string | undefined;
	readonly tokenUserDisplayName?: string | undefined;
	readonly tokenUserPrincipalName?: string | undefined;
}
export interface AzureMachineLearningWebServiceFunctionBindingProperties {
	readonly apiKey?: string | undefined;
	readonly batchSize?: number | undefined;
	readonly endpoint?: string | undefined;
	readonly inputs?: AzureMachineLearningWebServiceInputs | undefined;
	readonly outputs?: AzureMachineLearningWebServiceOutputColumn[] | undefined;
}
export interface AzureMachineLearningWebServiceInputColumn {
	readonly dataType?: string | undefined;
	readonly mapTo?: number | undefined;
	readonly name?: string | undefined;
}
export interface AzureMachineLearningWebServiceInputs {
	readonly columnNames?: AzureMachineLearningWebServiceInputColumn[] | undefined;
	readonly name?: string | undefined;
}
export interface AzureMachineLearningWebServiceOutputColumn {
	readonly dataType?: string | undefined;
	readonly name?: string | undefined;
}
export interface AzureSqlDatabaseOutputDataSourceProperties {
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
	readonly container?: string | undefined;
	readonly dateFormat?: string | undefined;
	readonly pathPattern?: string | undefined;
	readonly storageAccounts?: StorageAccount[] | undefined;
	readonly timeFormat?: string | undefined;
}
export interface BlobReferenceInputDataSourceProperties {
	readonly container?: string | undefined;
	readonly dateFormat?: string | undefined;
	readonly pathPattern?: string | undefined;
	readonly storageAccounts?: StorageAccount[] | undefined;
	readonly timeFormat?: string | undefined;
}
export interface BlobStreamInputDataSourceProperties {
	readonly container?: string | undefined;
	readonly dateFormat?: string | undefined;
	readonly pathPattern?: string | undefined;
	readonly sourcePartitionCount?: number | undefined;
	readonly storageAccounts?: StorageAccount[] | undefined;
	readonly timeFormat?: string | undefined;
}
export interface CsvSerializationProperties {
	readonly encoding?: "UTF8" | undefined;
	readonly fieldDelimiter?: string | undefined;
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
	readonly collectionNamePattern?: string | undefined;
	readonly database?: string | undefined;
	readonly documentId?: string | undefined;
	readonly partitionKey?: string | undefined;
}
export interface EventHubOutputDataSourceProperties {
	readonly eventHubName?: string | undefined;
	readonly partitionKey?: string | undefined;
	readonly serviceBusNamespace?: string | undefined;
	readonly sharedAccessPolicyKey?: string | undefined;
	readonly sharedAccessPolicyName?: string | undefined;
}
export interface EventHubStreamInputDataSourceProperties {
	readonly consumerGroupName?: string | undefined;
	readonly eventHubName?: string | undefined;
	readonly serviceBusNamespace?: string | undefined;
	readonly sharedAccessPolicyKey?: string | undefined;
	readonly sharedAccessPolicyName?: string | undefined;
}
export interface FunctionInstance {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: FunctionProperties | undefined;
	readonly type?: string | undefined;
}
export interface FunctionBinding {}
export interface FunctionInput {
	readonly dataType?: string | undefined;
	readonly isConfigurationParameter?: boolean | undefined;
}
export interface FunctionOutput {
	readonly dataType?: string | undefined;
}
export interface FunctionProperties {
	readonly etag?: string | undefined;
}
export interface Input {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: InputProperties | undefined;
	readonly type?: string | undefined;
}
export interface InputProperties {
	readonly diagnostics?: Diagnostics | undefined;
	readonly etag?: string | undefined;
	readonly serialization?: Serialization | undefined;
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
export interface JsonSerializationProperties {
	readonly encoding?: "UTF8" | undefined;
	readonly format?: ("Array" | "LineSeparated") | undefined;
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
	readonly serialization?: Serialization | undefined;
}
export interface PowerBIOutputDataSourceProperties {
	readonly dataset?: string | undefined;
	readonly groupId?: string | undefined;
	readonly groupName?: string | undefined;
	readonly refreshToken?: string | undefined;
	readonly table?: string | undefined;
	readonly tokenUserDisplayName?: string | undefined;
	readonly tokenUserPrincipalName?: string | undefined;
}
export interface ReferenceInputDataSource {}
export interface ScalarFunctionConfiguration {
	readonly binding?: FunctionBinding | undefined;
	readonly inputs?: FunctionInput[] | undefined;
	readonly output?: FunctionOutput | undefined;
}
export interface Serialization {}
export interface ServiceBusQueueOutputDataSourceProperties {
	readonly propertyColumns?: string[] | undefined;
	readonly queueName?: string | undefined;
	readonly serviceBusNamespace?: string | undefined;
	readonly sharedAccessPolicyKey?: string | undefined;
	readonly sharedAccessPolicyName?: string | undefined;
}
export interface ServiceBusTopicOutputDataSourceProperties {
	readonly propertyColumns?: string[] | undefined;
	readonly serviceBusNamespace?: string | undefined;
	readonly sharedAccessPolicyKey?: string | undefined;
	readonly sharedAccessPolicyName?: string | undefined;
	readonly topicName?: string | undefined;
}
export interface Sku {
	readonly name?: "Standard" | undefined;
}
export interface StorageAccount {
	readonly accountKey?: string | undefined;
	readonly accountName?: string | undefined;
}
export interface StreamingJobProperties {
	readonly compatibilityLevel?: "1.0" | undefined;
	readonly createdDate?: string | undefined;
	readonly dataLocale?: string | undefined;
	readonly etag?: string | undefined;
	readonly eventsLateArrivalMaxDelayInSeconds?: number | undefined;
	readonly eventsOutOfOrderMaxDelayInSeconds?: number | undefined;
	readonly eventsOutOfOrderPolicy?: ("Adjust" | "Drop") | undefined;
	readonly functions?: FunctionInstance[] | undefined;
	readonly inputs?: Input[] | undefined;
	readonly jobId?: string | undefined;
	readonly jobState?: string | undefined;
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
}
export default {
	streamingjobs: streamingjobs,
	"streamingjobs/functions": streamingjobs_functions,
	"streamingjobs/inputs": streamingjobs_inputs,
	"streamingjobs/outputs": streamingjobs_outputs,
	"streamingjobs/transformations": streamingjobs_transformations,
};
