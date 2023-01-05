import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Classifier extends CfnResource<ClassifierComponentInputs> implements ClassifierComponentOutputs {
	constructor(entity: ADKEntity, options: ClassifierComponentInputs) {
		super(entity, options.LogicalId, "AWS::Glue::Classifier", options);
	}
}
export interface ClassifierComponentOutputs {}
export interface ClassifierComponentInputs {
	readonly CsvClassifier?: CsvClassifier | undefined;
	readonly GrokClassifier?: GrokClassifier | undefined;
	readonly JsonClassifier?: JsonClassifier | undefined;
	readonly XMLClassifier?: XMLClassifier | undefined;
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
	readonly Classifiers?: string[] | undefined;
	readonly Configuration?: string | undefined;
	readonly CrawlerSecurityConfiguration?: string | undefined;
	readonly DatabaseName?: string | undefined;
	readonly Description?: string | undefined;
	readonly Name?: string | undefined;
	readonly RecrawlPolicy?: RecrawlPolicy | undefined;
	readonly Schedule?: Schedule | undefined;
	readonly SchemaChangePolicy?: SchemaChangePolicy | undefined;
	readonly TablePrefix?: string | undefined;
	readonly Tags?: any | undefined;
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
	readonly Arguments?: any | undefined;
	readonly EndpointName?: string | undefined;
	readonly ExtraJarsS3Path?: string | undefined;
	readonly ExtraPythonLibsS3Path?: string | undefined;
	readonly GlueVersion?: string | undefined;
	readonly NumberOfNodes?: number | undefined;
	readonly NumberOfWorkers?: number | undefined;
	readonly PublicKey?: string | undefined;
	readonly PublicKeys?: string[] | undefined;
	readonly SecurityConfiguration?: string | undefined;
	readonly SecurityGroupIds?: string[] | undefined;
	readonly SubnetId?: string | undefined;
	readonly Tags?: any | undefined;
	readonly WorkerType?: string | undefined;
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
	readonly AllocatedCapacity?: number | undefined;
	readonly Connections?: ConnectionsList | undefined;
	readonly DefaultArguments?: any | undefined;
	readonly Description?: string | undefined;
	readonly ExecutionClass?: string | undefined;
	readonly ExecutionProperty?: Execution | undefined;
	readonly GlueVersion?: string | undefined;
	readonly LogUri?: string | undefined;
	readonly MaxCapacity?: number | undefined;
	readonly MaxRetries?: number | undefined;
	readonly Name?: string | undefined;
	readonly NonOverridableArguments?: any | undefined;
	readonly NotificationProperty?: Notification | undefined;
	readonly NumberOfWorkers?: number | undefined;
	readonly SecurityConfiguration?: string | undefined;
	readonly Tags?: any | undefined;
	readonly Timeout?: number | undefined;
	readonly WorkerType?: string | undefined;
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
	readonly Description?: string | undefined;
	readonly GlueVersion?: string | undefined;
	readonly MaxCapacity?: number | undefined;
	readonly MaxRetries?: number | undefined;
	readonly Name?: string | undefined;
	readonly NumberOfWorkers?: number | undefined;
	readonly Tags?: any | undefined;
	readonly Timeout?: number | undefined;
	readonly TransformEncryption?: TransformEncryption | undefined;
	readonly WorkerType?: string | undefined;
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
	readonly Description?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly CheckpointVersion?: SchemaVersion | undefined;
	readonly Description?: string | undefined;
	readonly Registry?: Registry | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly Description?: string | undefined;
	readonly EventBatchingCondition?: EventBatchingCondition | undefined;
	readonly Name?: string | undefined;
	readonly Predicate?: Predicate | undefined;
	readonly Schedule?: string | undefined;
	readonly StartOnCreation?: boolean | undefined;
	readonly Tags?: any | undefined;
	readonly WorkflowName?: string | undefined;
	readonly LogicalId: string;
}
export class Workflow extends CfnResource<WorkflowComponentInputs> implements WorkflowComponentOutputs {
	constructor(entity: ADKEntity, options: WorkflowComponentInputs) {
		super(entity, options.LogicalId, "AWS::Glue::Workflow", options);
	}
}
export interface WorkflowComponentOutputs {}
export interface WorkflowComponentInputs {
	readonly DefaultRunProperties?: any | undefined;
	readonly Description?: string | undefined;
	readonly MaxConcurrentRuns?: number | undefined;
	readonly Name?: string | undefined;
	readonly Tags?: any | undefined;
	readonly LogicalId: string;
}
export interface CsvClassifier {
	readonly AllowSingleColumn?: boolean | undefined;
	readonly ContainsHeader?: string | undefined;
	readonly Delimiter?: string | undefined;
	readonly DisableValueTrimming?: boolean | undefined;
	readonly Header?: string[] | undefined;
	readonly Name?: string | undefined;
	readonly QuoteSymbol?: string | undefined;
}
export interface GrokClassifier {
	readonly Classification: string;
	readonly CustomPatterns?: string | undefined;
	readonly GrokPattern: string;
	readonly Name?: string | undefined;
}
export interface JsonClassifier {
	readonly JsonPath: string;
	readonly Name?: string | undefined;
}
export interface XMLClassifier {
	readonly Classification: string;
	readonly Name?: string | undefined;
	readonly RowTag: string;
}
export interface ConnectionInput {
	readonly ConnectionProperties?: any | undefined;
	readonly ConnectionType: string;
	readonly Description?: string | undefined;
	readonly MatchCriteria?: string[] | undefined;
	readonly Name?: string | undefined;
	readonly PhysicalConnectionRequirements?: PhysicalConnectionRequirements | undefined;
}
export interface PhysicalConnectionRequirements {
	readonly AvailabilityZone?: string | undefined;
	readonly SecurityGroupIdList?: string[] | undefined;
	readonly SubnetId?: string | undefined;
}
export interface CatalogTarget {
	readonly DatabaseName?: string | undefined;
	readonly Tables?: string[] | undefined;
}
export interface DynamoDBTarget {
	readonly Path?: string | undefined;
}
export interface JdbcTarget {
	readonly ConnectionName?: string | undefined;
	readonly Exclusions?: string[] | undefined;
	readonly Path?: string | undefined;
}
export interface MongoDBTarget {
	readonly ConnectionName?: string | undefined;
	readonly Path?: string | undefined;
}
export interface RecrawlPolicy {
	readonly RecrawlBehavior?: string | undefined;
}
export interface S3Target {
	readonly ConnectionName?: string | undefined;
	readonly DlqEventQueueArn?: string | undefined;
	readonly EventQueueArn?: string | undefined;
	readonly Exclusions?: string[] | undefined;
	readonly Path?: string | undefined;
	readonly SampleSize?: number | undefined;
}
export interface Schedule {
	readonly ScheduleExpression?: string | undefined;
}
export interface SchemaChangePolicy {
	readonly DeleteBehavior?: string | undefined;
	readonly UpdateBehavior?: string | undefined;
}
export interface Targets {
	readonly CatalogTargets?: CatalogTarget[] | undefined;
	readonly DynamoDBTargets?: DynamoDBTarget[] | undefined;
	readonly JdbcTargets?: JdbcTarget[] | undefined;
	readonly MongoDBTargets?: MongoDBTarget[] | undefined;
	readonly S3Targets?: S3Target[] | undefined;
}
export interface ConnectionPasswordEncryption {
	readonly KmsKeyId?: string | undefined;
	readonly ReturnConnectionPasswordEncrypted?: boolean | undefined;
}
export interface DataCatalogEncryptionSettings {
	readonly ConnectionPasswordEncryption?: ConnectionPasswordEncryption | undefined;
	readonly EncryptionAtRest?: EncryptionAtRest | undefined;
}
export interface EncryptionAtRest {
	readonly CatalogEncryptionMode?: string | undefined;
	readonly SseAwsKmsKeyId?: string | undefined;
}
export interface DataLakePrincipal {
	readonly DataLakePrincipalIdentifier?: string | undefined;
}
export interface DatabaseIdentifier {
	readonly CatalogId?: string | undefined;
	readonly DatabaseName?: string | undefined;
}
export interface DatabaseInput {
	readonly CreateTableDefaultPermissions?: PrincipalPrivileges[] | undefined;
	readonly Description?: string | undefined;
	readonly LocationUri?: string | undefined;
	readonly Name?: string | undefined;
	readonly Parameters?: any | undefined;
	readonly TargetDatabase?: DatabaseIdentifier | undefined;
}
export interface PrincipalPrivileges {
	readonly Permissions?: string[] | undefined;
	readonly Principal?: DataLakePrincipal | undefined;
}
export interface ConnectionsList {
	readonly Connections?: string[] | undefined;
}
export interface Execution {
	readonly MaxConcurrentRuns?: number | undefined;
}
export interface JobCommand {
	readonly Name?: string | undefined;
	readonly PythonVersion?: string | undefined;
	readonly ScriptLocation?: string | undefined;
}
export interface Notification {
	readonly NotifyDelayAfter?: number | undefined;
}
export interface FindMatchesParameters {
	readonly AccuracyCostTradeoff?: number | undefined;
	readonly EnforceProvidedLabels?: boolean | undefined;
	readonly PrecisionRecallTradeoff?: number | undefined;
	readonly PrimaryKeyColumnName: string;
}
export interface GlueTables {
	readonly CatalogId?: string | undefined;
	readonly ConnectionName?: string | undefined;
	readonly DatabaseName: string;
	readonly TableName: string;
}
export interface InputRecordTables {
	readonly GlueTables?: GlueTables[] | undefined;
}
export interface MLUserDataEncryption {
	readonly KmsKeyId?: string | undefined;
	readonly MLUserDataEncryptionMode: string;
}
export interface TransformEncryption {
	readonly MLUserDataEncryption?: MLUserDataEncryption | undefined;
	readonly TaskRunSecurityConfigurationName?: string | undefined;
}
export interface TransformParameters {
	readonly FindMatchesParameters?: FindMatchesParameters | undefined;
	readonly TransformType: string;
}
export interface Column {
	readonly Comment?: string | undefined;
	readonly Name: string;
	readonly Type?: string | undefined;
}
export interface Order {
	readonly Column: string;
	readonly SortOrder?: number | undefined;
}
export interface PartitionInput {
	readonly Parameters?: any | undefined;
	readonly StorageDescriptor?: StorageDescriptor | undefined;
	readonly Values: string[];
}
export interface SchemaId {
	readonly RegistryName?: string | undefined;
	readonly SchemaArn?: string | undefined;
	readonly SchemaName?: string | undefined;
}
export interface SchemaReference {
	readonly SchemaId?: SchemaId | undefined;
	readonly SchemaVersionId?: string | undefined;
	readonly SchemaVersionNumber?: number | undefined;
}
export interface SerdeInfo {
	readonly Name?: string | undefined;
	readonly Parameters?: any | undefined;
	readonly SerializationLibrary?: string | undefined;
}
export interface SkewedInfo {
	readonly SkewedColumnNames?: string[] | undefined;
	readonly SkewedColumnValueLocationMaps?: any | undefined;
	readonly SkewedColumnValues?: string[] | undefined;
}
export interface StorageDescriptor {
	readonly BucketColumns?: string[] | undefined;
	readonly Columns?: Column[] | undefined;
	readonly Compressed?: boolean | undefined;
	readonly InputFormat?: string | undefined;
	readonly Location?: string | undefined;
	readonly NumberOfBuckets?: number | undefined;
	readonly OutputFormat?: string | undefined;
	readonly Parameters?: any | undefined;
	readonly SchemaReference?: SchemaReference | undefined;
	readonly SerdeInfo?: SerdeInfo | undefined;
	readonly SkewedInfo?: SkewedInfo | undefined;
	readonly SortColumns?: Order[] | undefined;
	readonly StoredAsSubDirectories?: boolean | undefined;
}
export interface RegistryOptions {
	readonly Arn?: string | undefined;
	readonly Name?: string | undefined;
}
export interface SchemaVersion {
	readonly IsLatest?: boolean | undefined;
	readonly VersionNumber?: number | undefined;
}
export interface Schema {
	readonly RegistryName?: string | undefined;
	readonly SchemaArn?: string | undefined;
	readonly SchemaName?: string | undefined;
}
export interface CloudWatchEncryption {
	readonly CloudWatchEncryptionMode?: string | undefined;
	readonly KmsKeyArn?: string | undefined;
}
export interface EncryptionConfiguration {
	readonly CloudWatchEncryption?: CloudWatchEncryption | undefined;
	readonly JobBookmarksEncryption?: JobBookmarksEncryption | undefined;
	readonly S3Encryptions?: S3Encryption[] | undefined;
}
export interface JobBookmarksEncryption {
	readonly JobBookmarksEncryptionMode?: string | undefined;
	readonly KmsKeyArn?: string | undefined;
}
export interface S3Encryption {
	readonly KmsKeyArn?: string | undefined;
	readonly S3EncryptionMode?: string | undefined;
}
export interface TableIdentifier {
	readonly CatalogId?: string | undefined;
	readonly DatabaseName?: string | undefined;
	readonly Name?: string | undefined;
}
export interface TableInput {
	readonly Description?: string | undefined;
	readonly Name?: string | undefined;
	readonly Owner?: string | undefined;
	readonly Parameters?: any | undefined;
	readonly PartitionKeys?: Column[] | undefined;
	readonly Retention?: number | undefined;
	readonly StorageDescriptor?: StorageDescriptor | undefined;
	readonly TableType?: string | undefined;
	readonly TargetTable?: TableIdentifier | undefined;
	readonly ViewExpandedText?: string | undefined;
	readonly ViewOriginalText?: string | undefined;
}
export interface Action {
	readonly Arguments?: any | undefined;
	readonly CrawlerName?: string | undefined;
	readonly JobName?: string | undefined;
	readonly NotificationProperty?: Notification | undefined;
	readonly SecurityConfiguration?: string | undefined;
	readonly Timeout?: number | undefined;
}
export interface Condition {
	readonly CrawlState?: string | undefined;
	readonly CrawlerName?: string | undefined;
	readonly JobName?: string | undefined;
	readonly LogicalOperator?: string | undefined;
	readonly State?: string | undefined;
}
export interface EventBatchingCondition {
	readonly BatchSize: number;
	readonly BatchWindow?: number | undefined;
}
export interface Predicate {
	readonly Conditions?: Condition[] | undefined;
	readonly Logical?: string | undefined;
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
