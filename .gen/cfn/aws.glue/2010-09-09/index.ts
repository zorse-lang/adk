import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Classifier extends CfnResource<ClassifierComponentInputs> implements ClassifierComponentOutputs {
	constructor(entity: ADKEntity, options: ClassifierComponentInputs) {
		super(entity, options.LogicalId, "AWS::Glue::Classifier", options);
	}
}
export interface ClassifierComponentOutputs {}
export interface ClassifierComponentInputs {
	readonly CsvClassifier?: (CsvClassifier | undefined) | undefined;
	readonly GrokClassifier?: (GrokClassifier | undefined) | undefined;
	readonly JsonClassifier?: (JsonClassifier | undefined) | undefined;
	readonly XMLClassifier?: (XMLClassifier | undefined) | undefined;
	readonly LogicalId: string;
}
export class Connection extends CfnResource<ConnectionComponentInputs> implements ConnectionComponentOutputs {
	constructor(entity: ADKEntity, options: ConnectionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Glue::Connection", options);
	}
}
export interface ConnectionComponentOutputs {}
export interface ConnectionComponentInputs {
	readonly CatalogId: string;
	readonly ConnectionInput: ConnectionInput;
	readonly LogicalId: string;
}
export class Crawler extends CfnResource<CrawlerComponentInputs> implements CrawlerComponentOutputs {
	constructor(entity: ADKEntity, options: CrawlerComponentInputs) {
		super(entity, options.LogicalId, "AWS::Glue::Crawler", options);
	}
}
export interface CrawlerComponentOutputs {}
export interface CrawlerComponentInputs {
	readonly Role: string;
	readonly Targets: Targets;
	readonly Classifiers?: (string[] | undefined) | undefined;
	readonly Configuration?: (string | undefined) | undefined;
	readonly CrawlerSecurityConfiguration?: (string | undefined) | undefined;
	readonly DatabaseName?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly RecrawlPolicy?: (RecrawlPolicy | undefined) | undefined;
	readonly Schedule?: (Schedule | undefined) | undefined;
	readonly SchemaChangePolicy?: (SchemaChangePolicy | undefined) | undefined;
	readonly TablePrefix?: (string | undefined) | undefined;
	readonly Tags?: (any | undefined) | undefined;
	readonly LogicalId: string;
}
export class DataCatalogEncryptionSettings
	extends CfnResource<DataCatalogEncryptionSettingsComponentInputs>
	implements DataCatalogEncryptionSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: DataCatalogEncryptionSettingsComponentInputs) {
		super(entity, options.LogicalId, "AWS::Glue::DataCatalogEncryptionSettings", options);
	}
}
export interface DataCatalogEncryptionSettingsComponentOutputs {}
export interface DataCatalogEncryptionSettingsComponentInputs {
	readonly CatalogId: string;
	readonly DataCatalogEncryptionSettings: DataCatalogEncryptionSettings;
	readonly LogicalId: string;
}
export class Database extends CfnResource<DatabaseComponentInputs> implements DatabaseComponentOutputs {
	constructor(entity: ADKEntity, options: DatabaseComponentInputs) {
		super(entity, options.LogicalId, "AWS::Glue::Database", options);
	}
}
export interface DatabaseComponentOutputs {}
export interface DatabaseComponentInputs {
	readonly CatalogId: string;
	readonly DatabaseInput: DatabaseInput;
	readonly LogicalId: string;
}
export class DevEndpoint extends CfnResource<DevEndpointComponentInputs> implements DevEndpointComponentOutputs {
	constructor(entity: ADKEntity, options: DevEndpointComponentInputs) {
		super(entity, options.LogicalId, "AWS::Glue::DevEndpoint", options);
	}
}
export interface DevEndpointComponentOutputs {}
export interface DevEndpointComponentInputs {
	readonly RoleArn: string;
	readonly Arguments?: (any | undefined) | undefined;
	readonly EndpointName?: (string | undefined) | undefined;
	readonly ExtraJarsS3Path?: (string | undefined) | undefined;
	readonly ExtraPythonLibsS3Path?: (string | undefined) | undefined;
	readonly GlueVersion?: (string | undefined) | undefined;
	readonly NumberOfNodes?: (number | undefined) | undefined;
	readonly NumberOfWorkers?: (number | undefined) | undefined;
	readonly PublicKey?: (string | undefined) | undefined;
	readonly PublicKeys?: (string[] | undefined) | undefined;
	readonly SecurityConfiguration?: (string | undefined) | undefined;
	readonly SecurityGroupIds?: (string[] | undefined) | undefined;
	readonly SubnetId?: (string | undefined) | undefined;
	readonly Tags?: (any | undefined) | undefined;
	readonly WorkerType?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class Job extends CfnResource<JobComponentInputs> implements JobComponentOutputs {
	constructor(entity: ADKEntity, options: JobComponentInputs) {
		super(entity, options.LogicalId, "AWS::Glue::Job", options);
	}
}
export interface JobComponentOutputs {}
export interface JobComponentInputs {
	readonly Command: JobCommand;
	readonly Role: string;
	readonly AllocatedCapacity?: (number | undefined) | undefined;
	readonly Connections?: (ConnectionsList | undefined) | undefined;
	readonly DefaultArguments?: (any | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly ExecutionClass?: (string | undefined) | undefined;
	readonly ExecutionProperty?: (Execution | undefined) | undefined;
	readonly GlueVersion?: (string | undefined) | undefined;
	readonly LogUri?: (string | undefined) | undefined;
	readonly MaxCapacity?: (number | undefined) | undefined;
	readonly MaxRetries?: (number | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly NonOverridableArguments?: (any | undefined) | undefined;
	readonly NotificationProperty?: (Notification | undefined) | undefined;
	readonly NumberOfWorkers?: (number | undefined) | undefined;
	readonly SecurityConfiguration?: (string | undefined) | undefined;
	readonly Tags?: (any | undefined) | undefined;
	readonly Timeout?: (number | undefined) | undefined;
	readonly WorkerType?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class MLTransform extends CfnResource<MLTransformComponentInputs> implements MLTransformComponentOutputs {
	constructor(entity: ADKEntity, options: MLTransformComponentInputs) {
		super(entity, options.LogicalId, "AWS::Glue::MLTransform", options);
	}
}
export interface MLTransformComponentOutputs {}
export interface MLTransformComponentInputs {
	readonly InputRecordTables: InputRecordTables;
	readonly Role: string;
	readonly TransformParameters: TransformParameters;
	readonly Description?: (string | undefined) | undefined;
	readonly GlueVersion?: (string | undefined) | undefined;
	readonly MaxCapacity?: (number | undefined) | undefined;
	readonly MaxRetries?: (number | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly NumberOfWorkers?: (number | undefined) | undefined;
	readonly Tags?: (any | undefined) | undefined;
	readonly Timeout?: (number | undefined) | undefined;
	readonly TransformEncryption?: (TransformEncryption | undefined) | undefined;
	readonly WorkerType?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class Partition extends CfnResource<PartitionComponentInputs> implements PartitionComponentOutputs {
	constructor(entity: ADKEntity, options: PartitionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Glue::Partition", options);
	}
}
export interface PartitionComponentOutputs {}
export interface PartitionComponentInputs {
	readonly CatalogId: string;
	readonly DatabaseName: string;
	readonly PartitionInput: PartitionInput;
	readonly TableName: string;
	readonly LogicalId: string;
}
export class Registry extends CfnResource<RegistryComponentInputs> implements RegistryComponentOutputs {
	constructor(entity: ADKEntity, options: RegistryComponentInputs) {
		super(entity, options.LogicalId, "AWS::Glue::Registry", options);
	}
	public readonly Arn: string;
}
export interface RegistryComponentOutputs {
	readonly Arn: string;
}
export interface RegistryComponentInputs {
	readonly Name: string;
	readonly Description?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Schema extends CfnResource<SchemaComponentInputs> implements SchemaComponentOutputs {
	constructor(entity: ADKEntity, options: SchemaComponentInputs) {
		super(entity, options.LogicalId, "AWS::Glue::Schema", options);
	}
	public readonly Arn: string;
	public readonly InitialSchemaVersionId: string;
}
export interface SchemaComponentOutputs {
	readonly Arn: string;
	readonly InitialSchemaVersionId: string;
}
export interface SchemaComponentInputs {
	readonly Compatibility: string;
	readonly DataFormat: string;
	readonly Name: string;
	readonly SchemaDefinition: string;
	readonly CheckpointVersion?: (SchemaVersion | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly Registry?: (Registry | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class SchemaVersion extends CfnResource<SchemaVersionComponentInputs> implements SchemaVersionComponentOutputs {
	constructor(entity: ADKEntity, options: SchemaVersionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Glue::SchemaVersion", options);
	}
	public readonly VersionId: string;
}
export interface SchemaVersionComponentOutputs {
	readonly VersionId: string;
}
export interface SchemaVersionComponentInputs {
	readonly Schema: Schema;
	readonly SchemaDefinition: string;
	readonly LogicalId: string;
}
export class SchemaVersionMetadata
	extends CfnResource<SchemaVersionMetadataComponentInputs>
	implements SchemaVersionMetadataComponentOutputs
{
	constructor(entity: ADKEntity, options: SchemaVersionMetadataComponentInputs) {
		super(entity, options.LogicalId, "AWS::Glue::SchemaVersionMetadata", options);
	}
}
export interface SchemaVersionMetadataComponentOutputs {}
export interface SchemaVersionMetadataComponentInputs {
	readonly Key: string;
	readonly SchemaVersionId: string;
	readonly Value: string;
	readonly LogicalId: string;
}
export class SecurityConfiguration
	extends CfnResource<SecurityConfigurationComponentInputs>
	implements SecurityConfigurationComponentOutputs
{
	constructor(entity: ADKEntity, options: SecurityConfigurationComponentInputs) {
		super(entity, options.LogicalId, "AWS::Glue::SecurityConfiguration", options);
	}
}
export interface SecurityConfigurationComponentOutputs {}
export interface SecurityConfigurationComponentInputs {
	readonly EncryptionConfiguration: EncryptionConfiguration;
	readonly Name: string;
	readonly LogicalId: string;
}
export class Table extends CfnResource<TableComponentInputs> implements TableComponentOutputs {
	constructor(entity: ADKEntity, options: TableComponentInputs) {
		super(entity, options.LogicalId, "AWS::Glue::Table", options);
	}
}
export interface TableComponentOutputs {}
export interface TableComponentInputs {
	readonly CatalogId: string;
	readonly DatabaseName: string;
	readonly TableInput: TableInput;
	readonly LogicalId: string;
}
export class Trigger extends CfnResource<TriggerComponentInputs> implements TriggerComponentOutputs {
	constructor(entity: ADKEntity, options: TriggerComponentInputs) {
		super(entity, options.LogicalId, "AWS::Glue::Trigger", options);
	}
}
export interface TriggerComponentOutputs {}
export interface TriggerComponentInputs {
	readonly Actions: Action[];
	readonly Type: string;
	readonly Description?: (string | undefined) | undefined;
	readonly EventBatchingCondition?: (EventBatchingCondition | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Predicate?: (Predicate | undefined) | undefined;
	readonly Schedule?: (string | undefined) | undefined;
	readonly StartOnCreation?: (boolean | undefined) | undefined;
	readonly Tags?: (any | undefined) | undefined;
	readonly WorkflowName?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class Workflow extends CfnResource<WorkflowComponentInputs> implements WorkflowComponentOutputs {
	constructor(entity: ADKEntity, options: WorkflowComponentInputs) {
		super(entity, options.LogicalId, "AWS::Glue::Workflow", options);
	}
}
export interface WorkflowComponentOutputs {}
export interface WorkflowComponentInputs {
	readonly DefaultRunProperties?: (any | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly MaxConcurrentRuns?: (number | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Tags?: (any | undefined) | undefined;
	readonly LogicalId: string;
}
export interface CsvClassifier {
	readonly AllowSingleColumn?: (boolean | undefined) | undefined;
	readonly ContainsHeader?: (string | undefined) | undefined;
	readonly Delimiter?: (string | undefined) | undefined;
	readonly DisableValueTrimming?: (boolean | undefined) | undefined;
	readonly Header?: (string[] | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly QuoteSymbol?: (string | undefined) | undefined;
}
export interface GrokClassifier {
	readonly Classification: string;
	readonly CustomPatterns?: (string | undefined) | undefined;
	readonly GrokPattern: string;
	readonly Name?: (string | undefined) | undefined;
}
export interface JsonClassifier {
	readonly JsonPath: string;
	readonly Name?: (string | undefined) | undefined;
}
export interface XMLClassifier {
	readonly Classification: string;
	readonly Name?: (string | undefined) | undefined;
	readonly RowTag: string;
}
export interface ConnectionInput {
	readonly ConnectionProperties?: (any | undefined) | undefined;
	readonly ConnectionType: string;
	readonly Description?: (string | undefined) | undefined;
	readonly MatchCriteria?: (string[] | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly PhysicalConnectionRequirements?: (PhysicalConnectionRequirements | undefined) | undefined;
}
export interface PhysicalConnectionRequirements {
	readonly AvailabilityZone?: (string | undefined) | undefined;
	readonly SecurityGroupIdList?: (string[] | undefined) | undefined;
	readonly SubnetId?: (string | undefined) | undefined;
}
export interface CatalogTarget {
	readonly DatabaseName?: (string | undefined) | undefined;
	readonly Tables?: (string[] | undefined) | undefined;
}
export interface DynamoDBTarget {
	readonly Path?: (string | undefined) | undefined;
}
export interface JdbcTarget {
	readonly ConnectionName?: (string | undefined) | undefined;
	readonly Exclusions?: (string[] | undefined) | undefined;
	readonly Path?: (string | undefined) | undefined;
}
export interface MongoDBTarget {
	readonly ConnectionName?: (string | undefined) | undefined;
	readonly Path?: (string | undefined) | undefined;
}
export interface RecrawlPolicy {
	readonly RecrawlBehavior?: (string | undefined) | undefined;
}
export interface S3Target {
	readonly ConnectionName?: (string | undefined) | undefined;
	readonly DlqEventQueueArn?: (string | undefined) | undefined;
	readonly EventQueueArn?: (string | undefined) | undefined;
	readonly Exclusions?: (string[] | undefined) | undefined;
	readonly Path?: (string | undefined) | undefined;
	readonly SampleSize?: (number | undefined) | undefined;
}
export interface Schedule {
	readonly ScheduleExpression?: (string | undefined) | undefined;
}
export interface SchemaChangePolicy {
	readonly DeleteBehavior?: (string | undefined) | undefined;
	readonly UpdateBehavior?: (string | undefined) | undefined;
}
export interface Targets {
	readonly CatalogTargets?: (CatalogTarget[] | undefined) | undefined;
	readonly DynamoDBTargets?: (DynamoDBTarget[] | undefined) | undefined;
	readonly JdbcTargets?: (JdbcTarget[] | undefined) | undefined;
	readonly MongoDBTargets?: (MongoDBTarget[] | undefined) | undefined;
	readonly S3Targets?: (S3Target[] | undefined) | undefined;
}
export interface ConnectionPasswordEncryption {
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly ReturnConnectionPasswordEncrypted?: (boolean | undefined) | undefined;
}
export interface DataCatalogEncryptionSettings {
	readonly ConnectionPasswordEncryption?: (ConnectionPasswordEncryption | undefined) | undefined;
	readonly EncryptionAtRest?: (EncryptionAtRest | undefined) | undefined;
}
export interface EncryptionAtRest {
	readonly CatalogEncryptionMode?: (string | undefined) | undefined;
	readonly SseAwsKmsKeyId?: (string | undefined) | undefined;
}
export interface DataLakePrincipal {
	readonly DataLakePrincipalIdentifier?: (string | undefined) | undefined;
}
export interface DatabaseIdentifier {
	readonly CatalogId?: (string | undefined) | undefined;
	readonly DatabaseName?: (string | undefined) | undefined;
}
export interface DatabaseInput {
	readonly CreateTableDefaultPermissions?: (PrincipalPrivileges[] | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly LocationUri?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Parameters?: (any | undefined) | undefined;
	readonly TargetDatabase?: (DatabaseIdentifier | undefined) | undefined;
}
export interface PrincipalPrivileges {
	readonly Permissions?: (string[] | undefined) | undefined;
	readonly Principal?: (DataLakePrincipal | undefined) | undefined;
}
export interface ConnectionsList {
	readonly Connections?: (string[] | undefined) | undefined;
}
export interface Execution {
	readonly MaxConcurrentRuns?: (number | undefined) | undefined;
}
export interface JobCommand {
	readonly Name?: (string | undefined) | undefined;
	readonly PythonVersion?: (string | undefined) | undefined;
	readonly ScriptLocation?: (string | undefined) | undefined;
}
export interface Notification {
	readonly NotifyDelayAfter?: (number | undefined) | undefined;
}
export interface FindMatchesParameters {
	readonly AccuracyCostTradeoff?: (number | undefined) | undefined;
	readonly EnforceProvidedLabels?: (boolean | undefined) | undefined;
	readonly PrecisionRecallTradeoff?: (number | undefined) | undefined;
	readonly PrimaryKeyColumnName: string;
}
export interface GlueTables {
	readonly CatalogId?: (string | undefined) | undefined;
	readonly ConnectionName?: (string | undefined) | undefined;
	readonly DatabaseName: string;
	readonly TableName: string;
}
export interface InputRecordTables {
	readonly GlueTables?: (GlueTables[] | undefined) | undefined;
}
export interface MLUserDataEncryption {
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly MLUserDataEncryptionMode: string;
}
export interface TransformEncryption {
	readonly MLUserDataEncryption?: (MLUserDataEncryption | undefined) | undefined;
	readonly TaskRunSecurityConfigurationName?: (string | undefined) | undefined;
}
export interface TransformParameters {
	readonly FindMatchesParameters?: (FindMatchesParameters | undefined) | undefined;
	readonly TransformType: string;
}
export interface Column {
	readonly Comment?: (string | undefined) | undefined;
	readonly Name: string;
	readonly Type?: (string | undefined) | undefined;
}
export interface Order {
	readonly Column: string;
	readonly SortOrder?: (number | undefined) | undefined;
}
export interface PartitionInput {
	readonly Parameters?: (any | undefined) | undefined;
	readonly StorageDescriptor?: (StorageDescriptor | undefined) | undefined;
	readonly Values: string[];
}
export interface SchemaId {
	readonly RegistryName?: (string | undefined) | undefined;
	readonly SchemaArn?: (string | undefined) | undefined;
	readonly SchemaName?: (string | undefined) | undefined;
}
export interface SchemaReference {
	readonly SchemaId?: (SchemaId | undefined) | undefined;
	readonly SchemaVersionId?: (string | undefined) | undefined;
	readonly SchemaVersionNumber?: (number | undefined) | undefined;
}
export interface SerdeInfo {
	readonly Name?: (string | undefined) | undefined;
	readonly Parameters?: (any | undefined) | undefined;
	readonly SerializationLibrary?: (string | undefined) | undefined;
}
export interface SkewedInfo {
	readonly SkewedColumnNames?: (string[] | undefined) | undefined;
	readonly SkewedColumnValueLocationMaps?: (any | undefined) | undefined;
	readonly SkewedColumnValues?: (string[] | undefined) | undefined;
}
export interface StorageDescriptor {
	readonly BucketColumns?: (string[] | undefined) | undefined;
	readonly Columns?: (Column[] | undefined) | undefined;
	readonly Compressed?: (boolean | undefined) | undefined;
	readonly InputFormat?: (string | undefined) | undefined;
	readonly Location?: (string | undefined) | undefined;
	readonly NumberOfBuckets?: (number | undefined) | undefined;
	readonly OutputFormat?: (string | undefined) | undefined;
	readonly Parameters?: (any | undefined) | undefined;
	readonly SchemaReference?: (SchemaReference | undefined) | undefined;
	readonly SerdeInfo?: (SerdeInfo | undefined) | undefined;
	readonly SkewedInfo?: (SkewedInfo | undefined) | undefined;
	readonly SortColumns?: (Order[] | undefined) | undefined;
	readonly StoredAsSubDirectories?: (boolean | undefined) | undefined;
}
export interface RegistryOptions {
	readonly Arn?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
}
export interface SchemaVersion {
	readonly IsLatest?: (boolean | undefined) | undefined;
	readonly VersionNumber?: (number | undefined) | undefined;
}
export interface Schema {
	readonly RegistryName?: (string | undefined) | undefined;
	readonly SchemaArn?: (string | undefined) | undefined;
	readonly SchemaName?: (string | undefined) | undefined;
}
export interface CloudWatchEncryption {
	readonly CloudWatchEncryptionMode?: (string | undefined) | undefined;
	readonly KmsKeyArn?: (string | undefined) | undefined;
}
export interface EncryptionConfiguration {
	readonly CloudWatchEncryption?: (CloudWatchEncryption | undefined) | undefined;
	readonly JobBookmarksEncryption?: (JobBookmarksEncryption | undefined) | undefined;
	readonly S3Encryptions?: (S3Encryption[] | undefined) | undefined;
}
export interface JobBookmarksEncryption {
	readonly JobBookmarksEncryptionMode?: (string | undefined) | undefined;
	readonly KmsKeyArn?: (string | undefined) | undefined;
}
export interface S3Encryption {
	readonly KmsKeyArn?: (string | undefined) | undefined;
	readonly S3EncryptionMode?: (string | undefined) | undefined;
}
export interface TableIdentifier {
	readonly CatalogId?: (string | undefined) | undefined;
	readonly DatabaseName?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
}
export interface TableInput {
	readonly Description?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Owner?: (string | undefined) | undefined;
	readonly Parameters?: (any | undefined) | undefined;
	readonly PartitionKeys?: (Column[] | undefined) | undefined;
	readonly Retention?: (number | undefined) | undefined;
	readonly StorageDescriptor?: (StorageDescriptor | undefined) | undefined;
	readonly TableType?: (string | undefined) | undefined;
	readonly TargetTable?: (TableIdentifier | undefined) | undefined;
	readonly ViewExpandedText?: (string | undefined) | undefined;
	readonly ViewOriginalText?: (string | undefined) | undefined;
}
export interface Action {
	readonly Arguments?: (any | undefined) | undefined;
	readonly CrawlerName?: (string | undefined) | undefined;
	readonly JobName?: (string | undefined) | undefined;
	readonly NotificationProperty?: (Notification | undefined) | undefined;
	readonly SecurityConfiguration?: (string | undefined) | undefined;
	readonly Timeout?: (number | undefined) | undefined;
}
export interface Condition {
	readonly CrawlState?: (string | undefined) | undefined;
	readonly CrawlerName?: (string | undefined) | undefined;
	readonly JobName?: (string | undefined) | undefined;
	readonly LogicalOperator?: (string | undefined) | undefined;
	readonly State?: (string | undefined) | undefined;
}
export interface EventBatchingCondition {
	readonly BatchSize: number;
	readonly BatchWindow?: (number | undefined) | undefined;
}
export interface Predicate {
	readonly Conditions?: (Condition[] | undefined) | undefined;
	readonly Logical?: (string | undefined) | undefined;
}
export default {
	Classifier: Classifier,
	Connection: Connection,
	Crawler: Crawler,
	DataCatalogEncryptionSettings: DataCatalogEncryptionSettings,
	Database: Database,
	DevEndpoint: DevEndpoint,
	Job: Job,
	MLTransform: MLTransform,
	Partition: Partition,
	Registry: Registry,
	Schema: Schema,
	SchemaVersion: SchemaVersion,
	SchemaVersionMetadata: SchemaVersionMetadata,
	SecurityConfiguration: SecurityConfiguration,
	Table: Table,
	Trigger: Trigger,
	Workflow: Workflow,
};
