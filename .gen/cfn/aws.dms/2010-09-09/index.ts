import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Certificate extends CfnResource<CertificateComponentInputs> implements CertificateComponentOutputs {
	constructor(entity: ADKEntity, options: CertificateComponentInputs) {
		super(entity, options.LogicalId, "AWS::DMS::Certificate", options);
	}
}
export interface CertificateComponentOutputs {}
export interface CertificateComponentInputs {
	readonly CertificateIdentifier?: string | undefined;
	readonly CertificatePem?: string | undefined;
	readonly CertificateWallet?: string | undefined;
	readonly LogicalId: string;
}
export class Endpoint extends CfnResource<EndpointComponentInputs> implements EndpointComponentOutputs {
	constructor(entity: ADKEntity, options: EndpointComponentInputs) {
		super(entity, options.LogicalId, "AWS::DMS::Endpoint", options);
	}
	public readonly ExternalId: string;
}
export interface EndpointComponentOutputs {
	readonly ExternalId: string;
}
export interface EndpointComponentInputs {
	readonly EndpointType: string;
	readonly EngineName: string;
	readonly CertificateArn?: string | undefined;
	readonly DatabaseName?: string | undefined;
	readonly DocDbSettings?: DocDbSettings | undefined;
	readonly DynamoDbSettings?: DynamoDbSettings | undefined;
	readonly ElasticsearchSettings?: ElasticsearchSettings | undefined;
	readonly EndpointIdentifier?: string | undefined;
	readonly ExtraConnectionAttributes?: string | undefined;
	readonly GcpMySQLSettings?: GcpMySQLSettings | undefined;
	readonly IbmDb2Settings?: IbmDb2Settings | undefined;
	readonly KafkaSettings?: KafkaSettings | undefined;
	readonly KinesisSettings?: KinesisSettings | undefined;
	readonly KmsKeyId?: string | undefined;
	readonly MicrosoftSqlServerSettings?: MicrosoftSqlServerSettings | undefined;
	readonly MongoDbSettings?: MongoDbSettings | undefined;
	readonly MySqlSettings?: MySqlSettings | undefined;
	readonly NeptuneSettings?: NeptuneSettings | undefined;
	readonly OracleSettings?: OracleSettings | undefined;
	readonly Password?: string | undefined;
	readonly Port?: number | undefined;
	readonly PostgreSqlSettings?: PostgreSqlSettings | undefined;
	readonly RedisSettings?: RedisSettings | undefined;
	readonly RedshiftSettings?: RedshiftSettings | undefined;
	readonly ResourceIdentifier?: string | undefined;
	readonly S3Settings?: S3Settings | undefined;
	readonly ServerName?: string | undefined;
	readonly SslMode?: string | undefined;
	readonly SybaseSettings?: SybaseSettings | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly Username?: string | undefined;
	readonly LogicalId: string;
}
export class EventSubscription
	extends CfnResource<EventSubscriptionComponentInputs>
	implements EventSubscriptionComponentOutputs
{
	constructor(entity: ADKEntity, options: EventSubscriptionComponentInputs) {
		super(entity, options.LogicalId, "AWS::DMS::EventSubscription", options);
	}
}
export interface EventSubscriptionComponentOutputs {}
export interface EventSubscriptionComponentInputs {
	readonly SnsTopicArn: string;
	readonly Enabled?: boolean | undefined;
	readonly EventCategories?: string[] | undefined;
	readonly SourceIds?: string[] | undefined;
	readonly SourceType?: string | undefined;
	readonly SubscriptionName?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class ReplicationInstance
	extends CfnResource<ReplicationInstanceComponentInputs>
	implements ReplicationInstanceComponentOutputs
{
	constructor(entity: ADKEntity, options: ReplicationInstanceComponentInputs) {
		super(entity, options.LogicalId, "AWS::DMS::ReplicationInstance", options);
	}
	public readonly ReplicationInstancePrivateIpAddresses: string;
	public readonly ReplicationInstancePublicIpAddresses: string;
}
export interface ReplicationInstanceComponentOutputs {
	readonly ReplicationInstancePrivateIpAddresses: string;
	readonly ReplicationInstancePublicIpAddresses: string;
}
export interface ReplicationInstanceComponentInputs {
	readonly ReplicationInstanceClass: string;
	readonly AllocatedStorage?: number | undefined;
	readonly AllowMajorVersionUpgrade?: boolean | undefined;
	readonly AutoMinorVersionUpgrade?: boolean | undefined;
	readonly AvailabilityZone?: string | undefined;
	readonly EngineVersion?: string | undefined;
	readonly KmsKeyId?: string | undefined;
	readonly MultiAZ?: boolean | undefined;
	readonly PreferredMaintenanceWindow?: string | undefined;
	readonly PubliclyAccessible?: boolean | undefined;
	readonly ReplicationInstanceIdentifier?: string | undefined;
	readonly ReplicationSubnetGroupIdentifier?: string | undefined;
	readonly ResourceIdentifier?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly VpcSecurityGroupIds?: string[] | undefined;
	readonly LogicalId: string;
}
export class ReplicationSubnetGroup
	extends CfnResource<ReplicationSubnetGroupComponentInputs>
	implements ReplicationSubnetGroupComponentOutputs
{
	constructor(entity: ADKEntity, options: ReplicationSubnetGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::DMS::ReplicationSubnetGroup", options);
	}
}
export interface ReplicationSubnetGroupComponentOutputs {}
export interface ReplicationSubnetGroupComponentInputs {
	readonly ReplicationSubnetGroupDescription: string;
	readonly SubnetIds: string[];
	readonly ReplicationSubnetGroupIdentifier?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class ReplicationTask
	extends CfnResource<ReplicationTaskComponentInputs>
	implements ReplicationTaskComponentOutputs
{
	constructor(entity: ADKEntity, options: ReplicationTaskComponentInputs) {
		super(entity, options.LogicalId, "AWS::DMS::ReplicationTask", options);
	}
}
export interface ReplicationTaskComponentOutputs {}
export interface ReplicationTaskComponentInputs {
	readonly MigrationType: string;
	readonly ReplicationInstanceArn: string;
	readonly SourceEndpointArn: string;
	readonly TableMappings: string;
	readonly TargetEndpointArn: string;
	readonly CdcStartPosition?: string | undefined;
	readonly CdcStartTime?: number | undefined;
	readonly CdcStopPosition?: string | undefined;
	readonly ReplicationTaskIdentifier?: string | undefined;
	readonly ReplicationTaskSettings?: string | undefined;
	readonly ResourceIdentifier?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly TaskData?: string | undefined;
	readonly LogicalId: string;
}
export interface DocDbSettings {
	readonly DocsToInvestigate?: number | undefined;
	readonly ExtractDocId?: boolean | undefined;
	readonly NestingLevel?: string | undefined;
	readonly SecretsManagerAccessRoleArn?: string | undefined;
	readonly SecretsManagerSecretId?: string | undefined;
}
export interface DynamoDbSettings {
	readonly ServiceAccessRoleArn?: string | undefined;
}
export interface ElasticsearchSettings {
	readonly EndpointUri?: string | undefined;
	readonly ErrorRetryDuration?: number | undefined;
	readonly FullLoadErrorPercentage?: number | undefined;
	readonly ServiceAccessRoleArn?: string | undefined;
}
export interface GcpMySQLSettings {
	readonly AfterConnectScript?: string | undefined;
	readonly CleanSourceMetadataOnMismatch?: boolean | undefined;
	readonly DatabaseName?: string | undefined;
	readonly EventsPollInterval?: number | undefined;
	readonly MaxFileSize?: number | undefined;
	readonly ParallelLoadThreads?: number | undefined;
	readonly Password?: string | undefined;
	readonly Port?: number | undefined;
	readonly SecretsManagerAccessRoleArn?: string | undefined;
	readonly SecretsManagerSecretId?: string | undefined;
	readonly ServerName?: string | undefined;
	readonly ServerTimezone?: string | undefined;
	readonly Username?: string | undefined;
}
export interface IbmDb2Settings {
	readonly CurrentLsn?: string | undefined;
	readonly MaxKBytesPerRead?: number | undefined;
	readonly SecretsManagerAccessRoleArn?: string | undefined;
	readonly SecretsManagerSecretId?: string | undefined;
	readonly SetDataCaptureChanges?: boolean | undefined;
}
export interface KafkaSettings {
	readonly Broker?: string | undefined;
	readonly IncludeControlDetails?: boolean | undefined;
	readonly IncludeNullAndEmpty?: boolean | undefined;
	readonly IncludePartitionValue?: boolean | undefined;
	readonly IncludeTableAlterOperations?: boolean | undefined;
	readonly IncludeTransactionDetails?: boolean | undefined;
	readonly MessageFormat?: string | undefined;
	readonly MessageMaxBytes?: number | undefined;
	readonly NoHexPrefix?: boolean | undefined;
	readonly PartitionIncludeSchemaTable?: boolean | undefined;
	readonly SaslPassword?: string | undefined;
	readonly SaslUserName?: string | undefined;
	readonly SecurityProtocol?: string | undefined;
	readonly SslCaCertificateArn?: string | undefined;
	readonly SslClientCertificateArn?: string | undefined;
	readonly SslClientKeyArn?: string | undefined;
	readonly SslClientKeyPassword?: string | undefined;
	readonly Topic?: string | undefined;
}
export interface KinesisSettings {
	readonly IncludeControlDetails?: boolean | undefined;
	readonly IncludeNullAndEmpty?: boolean | undefined;
	readonly IncludePartitionValue?: boolean | undefined;
	readonly IncludeTableAlterOperations?: boolean | undefined;
	readonly IncludeTransactionDetails?: boolean | undefined;
	readonly MessageFormat?: string | undefined;
	readonly NoHexPrefix?: boolean | undefined;
	readonly PartitionIncludeSchemaTable?: boolean | undefined;
	readonly ServiceAccessRoleArn?: string | undefined;
	readonly StreamArn?: string | undefined;
}
export interface MicrosoftSqlServerSettings {
	readonly BcpPacketSize?: number | undefined;
	readonly ControlTablesFileGroup?: string | undefined;
	readonly QuerySingleAlwaysOnNode?: boolean | undefined;
	readonly ReadBackupOnly?: boolean | undefined;
	readonly SafeguardPolicy?: string | undefined;
	readonly SecretsManagerAccessRoleArn?: string | undefined;
	readonly SecretsManagerSecretId?: string | undefined;
	readonly UseBcpFullLoad?: boolean | undefined;
	readonly UseThirdPartyBackupDevice?: boolean | undefined;
}
export interface MongoDbSettings {
	readonly AuthMechanism?: string | undefined;
	readonly AuthSource?: string | undefined;
	readonly AuthType?: string | undefined;
	readonly DatabaseName?: string | undefined;
	readonly DocsToInvestigate?: string | undefined;
	readonly ExtractDocId?: string | undefined;
	readonly NestingLevel?: string | undefined;
	readonly Password?: string | undefined;
	readonly Port?: number | undefined;
	readonly SecretsManagerAccessRoleArn?: string | undefined;
	readonly SecretsManagerSecretId?: string | undefined;
	readonly ServerName?: string | undefined;
	readonly Username?: string | undefined;
}
export interface MySqlSettings {
	readonly AfterConnectScript?: string | undefined;
	readonly CleanSourceMetadataOnMismatch?: boolean | undefined;
	readonly EventsPollInterval?: number | undefined;
	readonly MaxFileSize?: number | undefined;
	readonly ParallelLoadThreads?: number | undefined;
	readonly SecretsManagerAccessRoleArn?: string | undefined;
	readonly SecretsManagerSecretId?: string | undefined;
	readonly ServerTimezone?: string | undefined;
	readonly TargetDbType?: string | undefined;
}
export interface NeptuneSettings {
	readonly ErrorRetryDuration?: number | undefined;
	readonly IamAuthEnabled?: boolean | undefined;
	readonly MaxFileSize?: number | undefined;
	readonly MaxRetryCount?: number | undefined;
	readonly S3BucketFolder?: string | undefined;
	readonly S3BucketName?: string | undefined;
	readonly ServiceAccessRoleArn?: string | undefined;
}
export interface OracleSettings {
	readonly AccessAlternateDirectly?: boolean | undefined;
	readonly AddSupplementalLogging?: boolean | undefined;
	readonly AdditionalArchivedLogDestId?: number | undefined;
	readonly AllowSelectNestedTables?: boolean | undefined;
	readonly ArchivedLogDestId?: number | undefined;
	readonly ArchivedLogsOnly?: boolean | undefined;
	readonly AsmPassword?: string | undefined;
	readonly AsmServer?: string | undefined;
	readonly AsmUser?: string | undefined;
	readonly CharLengthSemantics?: string | undefined;
	readonly DirectPathNoLog?: boolean | undefined;
	readonly DirectPathParallelLoad?: boolean | undefined;
	readonly EnableHomogenousTablespace?: boolean | undefined;
	readonly ExtraArchivedLogDestIds?: number[] | undefined;
	readonly FailTasksOnLobTruncation?: boolean | undefined;
	readonly NumberDatatypeScale?: number | undefined;
	readonly OraclePathPrefix?: string | undefined;
	readonly ParallelAsmReadThreads?: number | undefined;
	readonly ReadAheadBlocks?: number | undefined;
	readonly ReadTableSpaceName?: boolean | undefined;
	readonly ReplacePathPrefix?: boolean | undefined;
	readonly RetryInterval?: number | undefined;
	readonly SecretsManagerAccessRoleArn?: string | undefined;
	readonly SecretsManagerOracleAsmAccessRoleArn?: string | undefined;
	readonly SecretsManagerOracleAsmSecretId?: string | undefined;
	readonly SecretsManagerSecretId?: string | undefined;
	readonly SecurityDbEncryption?: string | undefined;
	readonly SecurityDbEncryptionName?: string | undefined;
	readonly SpatialDataOptionToGeoJsonFunctionName?: string | undefined;
	readonly StandbyDelayTime?: number | undefined;
	readonly UseAlternateFolderForOnline?: boolean | undefined;
	readonly UseBFile?: boolean | undefined;
	readonly UseDirectPathFullLoad?: boolean | undefined;
	readonly UseLogminerReader?: boolean | undefined;
	readonly UsePathPrefix?: string | undefined;
}
export interface PostgreSqlSettings {
	readonly AfterConnectScript?: string | undefined;
	readonly CaptureDdls?: boolean | undefined;
	readonly DdlArtifactsSchema?: string | undefined;
	readonly ExecuteTimeout?: number | undefined;
	readonly FailTasksOnLobTruncation?: boolean | undefined;
	readonly HeartbeatEnable?: boolean | undefined;
	readonly HeartbeatFrequency?: number | undefined;
	readonly HeartbeatSchema?: string | undefined;
	readonly MaxFileSize?: number | undefined;
	readonly PluginName?: string | undefined;
	readonly SecretsManagerAccessRoleArn?: string | undefined;
	readonly SecretsManagerSecretId?: string | undefined;
	readonly SlotName?: string | undefined;
}
export interface RedisSettings {
	readonly AuthPassword?: string | undefined;
	readonly AuthType?: string | undefined;
	readonly AuthUserName?: string | undefined;
	readonly Port?: number | undefined;
	readonly ServerName?: string | undefined;
	readonly SslCaCertificateArn?: string | undefined;
	readonly SslSecurityProtocol?: string | undefined;
}
export interface RedshiftSettings {
	readonly AcceptAnyDate?: boolean | undefined;
	readonly AfterConnectScript?: string | undefined;
	readonly BucketFolder?: string | undefined;
	readonly BucketName?: string | undefined;
	readonly CaseSensitiveNames?: boolean | undefined;
	readonly CompUpdate?: boolean | undefined;
	readonly ConnectionTimeout?: number | undefined;
	readonly DateFormat?: string | undefined;
	readonly EmptyAsNull?: boolean | undefined;
	readonly EncryptionMode?: string | undefined;
	readonly ExplicitIds?: boolean | undefined;
	readonly FileTransferUploadStreams?: number | undefined;
	readonly LoadTimeout?: number | undefined;
	readonly MaxFileSize?: number | undefined;
	readonly RemoveQuotes?: boolean | undefined;
	readonly ReplaceChars?: string | undefined;
	readonly ReplaceInvalidChars?: string | undefined;
	readonly SecretsManagerAccessRoleArn?: string | undefined;
	readonly SecretsManagerSecretId?: string | undefined;
	readonly ServerSideEncryptionKmsKeyId?: string | undefined;
	readonly ServiceAccessRoleArn?: string | undefined;
	readonly TimeFormat?: string | undefined;
	readonly TrimBlanks?: boolean | undefined;
	readonly TruncateColumns?: boolean | undefined;
	readonly WriteBufferSize?: number | undefined;
}
export interface S3Settings {
	readonly AddColumnName?: boolean | undefined;
	readonly BucketFolder?: string | undefined;
	readonly BucketName?: string | undefined;
	readonly CannedAclForObjects?: string | undefined;
	readonly CdcInsertsAndUpdates?: boolean | undefined;
	readonly CdcInsertsOnly?: boolean | undefined;
	readonly CdcMaxBatchInterval?: number | undefined;
	readonly CdcMinFileSize?: number | undefined;
	readonly CdcPath?: string | undefined;
	readonly CompressionType?: string | undefined;
	readonly CsvDelimiter?: string | undefined;
	readonly CsvNoSupValue?: string | undefined;
	readonly CsvNullValue?: string | undefined;
	readonly CsvRowDelimiter?: string | undefined;
	readonly DataFormat?: string | undefined;
	readonly DataPageSize?: number | undefined;
	readonly DatePartitionDelimiter?: string | undefined;
	readonly DatePartitionEnabled?: boolean | undefined;
	readonly DatePartitionSequence?: string | undefined;
	readonly DatePartitionTimezone?: string | undefined;
	readonly DictPageSizeLimit?: number | undefined;
	readonly EnableStatistics?: boolean | undefined;
	readonly EncodingType?: string | undefined;
	readonly EncryptionMode?: string | undefined;
	readonly ExternalTableDefinition?: string | undefined;
	readonly IgnoreHeaderRows?: number | undefined;
	readonly IncludeOpForFullLoad?: boolean | undefined;
	readonly MaxFileSize?: number | undefined;
	readonly ParquetTimestampInMillisecond?: boolean | undefined;
	readonly ParquetVersion?: string | undefined;
	readonly PreserveTransactions?: boolean | undefined;
	readonly Rfc4180?: boolean | undefined;
	readonly RowGroupLength?: number | undefined;
	readonly ServerSideEncryptionKmsKeyId?: string | undefined;
	readonly ServiceAccessRoleArn?: string | undefined;
	readonly TimestampColumnName?: string | undefined;
	readonly UseCsvNoSupValue?: boolean | undefined;
	readonly UseTaskStartTimeForFullLoadTimestamp?: boolean | undefined;
}
export interface SybaseSettings {
	readonly SecretsManagerAccessRoleArn?: string | undefined;
	readonly SecretsManagerSecretId?: string | undefined;
}
export default {
	Certificate: Certificate,
	Endpoint: Endpoint,
	EventSubscription: EventSubscription,
	ReplicationInstance: ReplicationInstance,
	ReplicationSubnetGroup: ReplicationSubnetGroup,
	ReplicationTask: ReplicationTask,
};
