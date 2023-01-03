import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Certificate extends CfnResource<CertificateComponentInputs> implements CertificateComponentOutputs {
	constructor(entity: ADKEntity, options: CertificateComponentInputs) {
		super(entity, options.LogicalId, "AWS::DMS::Certificate", options);
	}
}
export interface CertificateComponentOutputs {}
export interface CertificateComponentInputs {
	readonly CertificateIdentifier?: (string | undefined) | undefined;
	readonly CertificatePem?: (string | undefined) | undefined;
	readonly CertificateWallet?: (string | undefined) | undefined;
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
	readonly CertificateArn?: (string | undefined) | undefined;
	readonly DatabaseName?: (string | undefined) | undefined;
	readonly DocDbSettings?: (DocDbSettings | undefined) | undefined;
	readonly DynamoDbSettings?: (DynamoDbSettings | undefined) | undefined;
	readonly ElasticsearchSettings?: (ElasticsearchSettings | undefined) | undefined;
	readonly EndpointIdentifier?: (string | undefined) | undefined;
	readonly ExtraConnectionAttributes?: (string | undefined) | undefined;
	readonly GcpMySQLSettings?: (GcpMySQLSettings | undefined) | undefined;
	readonly IbmDb2Settings?: (IbmDb2Settings | undefined) | undefined;
	readonly KafkaSettings?: (KafkaSettings | undefined) | undefined;
	readonly KinesisSettings?: (KinesisSettings | undefined) | undefined;
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly MicrosoftSqlServerSettings?: (MicrosoftSqlServerSettings | undefined) | undefined;
	readonly MongoDbSettings?: (MongoDbSettings | undefined) | undefined;
	readonly MySqlSettings?: (MySqlSettings | undefined) | undefined;
	readonly NeptuneSettings?: (NeptuneSettings | undefined) | undefined;
	readonly OracleSettings?: (OracleSettings | undefined) | undefined;
	readonly Password?: (string | undefined) | undefined;
	readonly Port?: (number | undefined) | undefined;
	readonly PostgreSqlSettings?: (PostgreSqlSettings | undefined) | undefined;
	readonly RedisSettings?: (RedisSettings | undefined) | undefined;
	readonly RedshiftSettings?: (RedshiftSettings | undefined) | undefined;
	readonly ResourceIdentifier?: (string | undefined) | undefined;
	readonly S3Settings?: (S3Settings | undefined) | undefined;
	readonly ServerName?: (string | undefined) | undefined;
	readonly SslMode?: (string | undefined) | undefined;
	readonly SybaseSettings?: (SybaseSettings | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly Username?: (string | undefined) | undefined;
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
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly EventCategories?: (string[] | undefined) | undefined;
	readonly SourceIds?: (string[] | undefined) | undefined;
	readonly SourceType?: (string | undefined) | undefined;
	readonly SubscriptionName?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly AllocatedStorage?: (number | undefined) | undefined;
	readonly AllowMajorVersionUpgrade?: (boolean | undefined) | undefined;
	readonly AutoMinorVersionUpgrade?: (boolean | undefined) | undefined;
	readonly AvailabilityZone?: (string | undefined) | undefined;
	readonly EngineVersion?: (string | undefined) | undefined;
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly MultiAZ?: (boolean | undefined) | undefined;
	readonly PreferredMaintenanceWindow?: (string | undefined) | undefined;
	readonly PubliclyAccessible?: (boolean | undefined) | undefined;
	readonly ReplicationInstanceIdentifier?: (string | undefined) | undefined;
	readonly ReplicationSubnetGroupIdentifier?: (string | undefined) | undefined;
	readonly ResourceIdentifier?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly VpcSecurityGroupIds?: (string[] | undefined) | undefined;
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
	readonly ReplicationSubnetGroupIdentifier?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly CdcStartPosition?: (string | undefined) | undefined;
	readonly CdcStartTime?: (number | undefined) | undefined;
	readonly CdcStopPosition?: (string | undefined) | undefined;
	readonly ReplicationTaskIdentifier?: (string | undefined) | undefined;
	readonly ReplicationTaskSettings?: (string | undefined) | undefined;
	readonly ResourceIdentifier?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly TaskData?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface DocDbSettings {
	readonly DocsToInvestigate?: (number | undefined) | undefined;
	readonly ExtractDocId?: (boolean | undefined) | undefined;
	readonly NestingLevel?: (string | undefined) | undefined;
	readonly SecretsManagerAccessRoleArn?: (string | undefined) | undefined;
	readonly SecretsManagerSecretId?: (string | undefined) | undefined;
}
export interface DynamoDbSettings {
	readonly ServiceAccessRoleArn?: (string | undefined) | undefined;
}
export interface ElasticsearchSettings {
	readonly EndpointUri?: (string | undefined) | undefined;
	readonly ErrorRetryDuration?: (number | undefined) | undefined;
	readonly FullLoadErrorPercentage?: (number | undefined) | undefined;
	readonly ServiceAccessRoleArn?: (string | undefined) | undefined;
}
export interface GcpMySQLSettings {
	readonly AfterConnectScript?: (string | undefined) | undefined;
	readonly CleanSourceMetadataOnMismatch?: (boolean | undefined) | undefined;
	readonly DatabaseName?: (string | undefined) | undefined;
	readonly EventsPollInterval?: (number | undefined) | undefined;
	readonly MaxFileSize?: (number | undefined) | undefined;
	readonly ParallelLoadThreads?: (number | undefined) | undefined;
	readonly Password?: (string | undefined) | undefined;
	readonly Port?: (number | undefined) | undefined;
	readonly SecretsManagerAccessRoleArn?: (string | undefined) | undefined;
	readonly SecretsManagerSecretId?: (string | undefined) | undefined;
	readonly ServerName?: (string | undefined) | undefined;
	readonly ServerTimezone?: (string | undefined) | undefined;
	readonly Username?: (string | undefined) | undefined;
}
export interface IbmDb2Settings {
	readonly CurrentLsn?: (string | undefined) | undefined;
	readonly MaxKBytesPerRead?: (number | undefined) | undefined;
	readonly SecretsManagerAccessRoleArn?: (string | undefined) | undefined;
	readonly SecretsManagerSecretId?: (string | undefined) | undefined;
	readonly SetDataCaptureChanges?: (boolean | undefined) | undefined;
}
export interface KafkaSettings {
	readonly Broker?: (string | undefined) | undefined;
	readonly IncludeControlDetails?: (boolean | undefined) | undefined;
	readonly IncludeNullAndEmpty?: (boolean | undefined) | undefined;
	readonly IncludePartitionValue?: (boolean | undefined) | undefined;
	readonly IncludeTableAlterOperations?: (boolean | undefined) | undefined;
	readonly IncludeTransactionDetails?: (boolean | undefined) | undefined;
	readonly MessageFormat?: (string | undefined) | undefined;
	readonly MessageMaxBytes?: (number | undefined) | undefined;
	readonly NoHexPrefix?: (boolean | undefined) | undefined;
	readonly PartitionIncludeSchemaTable?: (boolean | undefined) | undefined;
	readonly SaslPassword?: (string | undefined) | undefined;
	readonly SaslUserName?: (string | undefined) | undefined;
	readonly SecurityProtocol?: (string | undefined) | undefined;
	readonly SslCaCertificateArn?: (string | undefined) | undefined;
	readonly SslClientCertificateArn?: (string | undefined) | undefined;
	readonly SslClientKeyArn?: (string | undefined) | undefined;
	readonly SslClientKeyPassword?: (string | undefined) | undefined;
	readonly Topic?: (string | undefined) | undefined;
}
export interface KinesisSettings {
	readonly IncludeControlDetails?: (boolean | undefined) | undefined;
	readonly IncludeNullAndEmpty?: (boolean | undefined) | undefined;
	readonly IncludePartitionValue?: (boolean | undefined) | undefined;
	readonly IncludeTableAlterOperations?: (boolean | undefined) | undefined;
	readonly IncludeTransactionDetails?: (boolean | undefined) | undefined;
	readonly MessageFormat?: (string | undefined) | undefined;
	readonly NoHexPrefix?: (boolean | undefined) | undefined;
	readonly PartitionIncludeSchemaTable?: (boolean | undefined) | undefined;
	readonly ServiceAccessRoleArn?: (string | undefined) | undefined;
	readonly StreamArn?: (string | undefined) | undefined;
}
export interface MicrosoftSqlServerSettings {
	readonly BcpPacketSize?: (number | undefined) | undefined;
	readonly ControlTablesFileGroup?: (string | undefined) | undefined;
	readonly QuerySingleAlwaysOnNode?: (boolean | undefined) | undefined;
	readonly ReadBackupOnly?: (boolean | undefined) | undefined;
	readonly SafeguardPolicy?: (string | undefined) | undefined;
	readonly SecretsManagerAccessRoleArn?: (string | undefined) | undefined;
	readonly SecretsManagerSecretId?: (string | undefined) | undefined;
	readonly UseBcpFullLoad?: (boolean | undefined) | undefined;
	readonly UseThirdPartyBackupDevice?: (boolean | undefined) | undefined;
}
export interface MongoDbSettings {
	readonly AuthMechanism?: (string | undefined) | undefined;
	readonly AuthSource?: (string | undefined) | undefined;
	readonly AuthType?: (string | undefined) | undefined;
	readonly DatabaseName?: (string | undefined) | undefined;
	readonly DocsToInvestigate?: (string | undefined) | undefined;
	readonly ExtractDocId?: (string | undefined) | undefined;
	readonly NestingLevel?: (string | undefined) | undefined;
	readonly Password?: (string | undefined) | undefined;
	readonly Port?: (number | undefined) | undefined;
	readonly SecretsManagerAccessRoleArn?: (string | undefined) | undefined;
	readonly SecretsManagerSecretId?: (string | undefined) | undefined;
	readonly ServerName?: (string | undefined) | undefined;
	readonly Username?: (string | undefined) | undefined;
}
export interface MySqlSettings {
	readonly AfterConnectScript?: (string | undefined) | undefined;
	readonly CleanSourceMetadataOnMismatch?: (boolean | undefined) | undefined;
	readonly EventsPollInterval?: (number | undefined) | undefined;
	readonly MaxFileSize?: (number | undefined) | undefined;
	readonly ParallelLoadThreads?: (number | undefined) | undefined;
	readonly SecretsManagerAccessRoleArn?: (string | undefined) | undefined;
	readonly SecretsManagerSecretId?: (string | undefined) | undefined;
	readonly ServerTimezone?: (string | undefined) | undefined;
	readonly TargetDbType?: (string | undefined) | undefined;
}
export interface NeptuneSettings {
	readonly ErrorRetryDuration?: (number | undefined) | undefined;
	readonly IamAuthEnabled?: (boolean | undefined) | undefined;
	readonly MaxFileSize?: (number | undefined) | undefined;
	readonly MaxRetryCount?: (number | undefined) | undefined;
	readonly S3BucketFolder?: (string | undefined) | undefined;
	readonly S3BucketName?: (string | undefined) | undefined;
	readonly ServiceAccessRoleArn?: (string | undefined) | undefined;
}
export interface OracleSettings {
	readonly AccessAlternateDirectly?: (boolean | undefined) | undefined;
	readonly AddSupplementalLogging?: (boolean | undefined) | undefined;
	readonly AdditionalArchivedLogDestId?: (number | undefined) | undefined;
	readonly AllowSelectNestedTables?: (boolean | undefined) | undefined;
	readonly ArchivedLogDestId?: (number | undefined) | undefined;
	readonly ArchivedLogsOnly?: (boolean | undefined) | undefined;
	readonly AsmPassword?: (string | undefined) | undefined;
	readonly AsmServer?: (string | undefined) | undefined;
	readonly AsmUser?: (string | undefined) | undefined;
	readonly CharLengthSemantics?: (string | undefined) | undefined;
	readonly DirectPathNoLog?: (boolean | undefined) | undefined;
	readonly DirectPathParallelLoad?: (boolean | undefined) | undefined;
	readonly EnableHomogenousTablespace?: (boolean | undefined) | undefined;
	readonly ExtraArchivedLogDestIds?: (number[] | undefined) | undefined;
	readonly FailTasksOnLobTruncation?: (boolean | undefined) | undefined;
	readonly NumberDatatypeScale?: (number | undefined) | undefined;
	readonly OraclePathPrefix?: (string | undefined) | undefined;
	readonly ParallelAsmReadThreads?: (number | undefined) | undefined;
	readonly ReadAheadBlocks?: (number | undefined) | undefined;
	readonly ReadTableSpaceName?: (boolean | undefined) | undefined;
	readonly ReplacePathPrefix?: (boolean | undefined) | undefined;
	readonly RetryInterval?: (number | undefined) | undefined;
	readonly SecretsManagerAccessRoleArn?: (string | undefined) | undefined;
	readonly SecretsManagerOracleAsmAccessRoleArn?: (string | undefined) | undefined;
	readonly SecretsManagerOracleAsmSecretId?: (string | undefined) | undefined;
	readonly SecretsManagerSecretId?: (string | undefined) | undefined;
	readonly SecurityDbEncryption?: (string | undefined) | undefined;
	readonly SecurityDbEncryptionName?: (string | undefined) | undefined;
	readonly SpatialDataOptionToGeoJsonFunctionName?: (string | undefined) | undefined;
	readonly StandbyDelayTime?: (number | undefined) | undefined;
	readonly UseAlternateFolderForOnline?: (boolean | undefined) | undefined;
	readonly UseBFile?: (boolean | undefined) | undefined;
	readonly UseDirectPathFullLoad?: (boolean | undefined) | undefined;
	readonly UseLogminerReader?: (boolean | undefined) | undefined;
	readonly UsePathPrefix?: (string | undefined) | undefined;
}
export interface PostgreSqlSettings {
	readonly AfterConnectScript?: (string | undefined) | undefined;
	readonly CaptureDdls?: (boolean | undefined) | undefined;
	readonly DdlArtifactsSchema?: (string | undefined) | undefined;
	readonly ExecuteTimeout?: (number | undefined) | undefined;
	readonly FailTasksOnLobTruncation?: (boolean | undefined) | undefined;
	readonly HeartbeatEnable?: (boolean | undefined) | undefined;
	readonly HeartbeatFrequency?: (number | undefined) | undefined;
	readonly HeartbeatSchema?: (string | undefined) | undefined;
	readonly MaxFileSize?: (number | undefined) | undefined;
	readonly PluginName?: (string | undefined) | undefined;
	readonly SecretsManagerAccessRoleArn?: (string | undefined) | undefined;
	readonly SecretsManagerSecretId?: (string | undefined) | undefined;
	readonly SlotName?: (string | undefined) | undefined;
}
export interface RedisSettings {
	readonly AuthPassword?: (string | undefined) | undefined;
	readonly AuthType?: (string | undefined) | undefined;
	readonly AuthUserName?: (string | undefined) | undefined;
	readonly Port?: (number | undefined) | undefined;
	readonly ServerName?: (string | undefined) | undefined;
	readonly SslCaCertificateArn?: (string | undefined) | undefined;
	readonly SslSecurityProtocol?: (string | undefined) | undefined;
}
export interface RedshiftSettings {
	readonly AcceptAnyDate?: (boolean | undefined) | undefined;
	readonly AfterConnectScript?: (string | undefined) | undefined;
	readonly BucketFolder?: (string | undefined) | undefined;
	readonly BucketName?: (string | undefined) | undefined;
	readonly CaseSensitiveNames?: (boolean | undefined) | undefined;
	readonly CompUpdate?: (boolean | undefined) | undefined;
	readonly ConnectionTimeout?: (number | undefined) | undefined;
	readonly DateFormat?: (string | undefined) | undefined;
	readonly EmptyAsNull?: (boolean | undefined) | undefined;
	readonly EncryptionMode?: (string | undefined) | undefined;
	readonly ExplicitIds?: (boolean | undefined) | undefined;
	readonly FileTransferUploadStreams?: (number | undefined) | undefined;
	readonly LoadTimeout?: (number | undefined) | undefined;
	readonly MaxFileSize?: (number | undefined) | undefined;
	readonly RemoveQuotes?: (boolean | undefined) | undefined;
	readonly ReplaceChars?: (string | undefined) | undefined;
	readonly ReplaceInvalidChars?: (string | undefined) | undefined;
	readonly SecretsManagerAccessRoleArn?: (string | undefined) | undefined;
	readonly SecretsManagerSecretId?: (string | undefined) | undefined;
	readonly ServerSideEncryptionKmsKeyId?: (string | undefined) | undefined;
	readonly ServiceAccessRoleArn?: (string | undefined) | undefined;
	readonly TimeFormat?: (string | undefined) | undefined;
	readonly TrimBlanks?: (boolean | undefined) | undefined;
	readonly TruncateColumns?: (boolean | undefined) | undefined;
	readonly WriteBufferSize?: (number | undefined) | undefined;
}
export interface S3Settings {
	readonly AddColumnName?: (boolean | undefined) | undefined;
	readonly BucketFolder?: (string | undefined) | undefined;
	readonly BucketName?: (string | undefined) | undefined;
	readonly CannedAclForObjects?: (string | undefined) | undefined;
	readonly CdcInsertsAndUpdates?: (boolean | undefined) | undefined;
	readonly CdcInsertsOnly?: (boolean | undefined) | undefined;
	readonly CdcMaxBatchInterval?: (number | undefined) | undefined;
	readonly CdcMinFileSize?: (number | undefined) | undefined;
	readonly CdcPath?: (string | undefined) | undefined;
	readonly CompressionType?: (string | undefined) | undefined;
	readonly CsvDelimiter?: (string | undefined) | undefined;
	readonly CsvNoSupValue?: (string | undefined) | undefined;
	readonly CsvNullValue?: (string | undefined) | undefined;
	readonly CsvRowDelimiter?: (string | undefined) | undefined;
	readonly DataFormat?: (string | undefined) | undefined;
	readonly DataPageSize?: (number | undefined) | undefined;
	readonly DatePartitionDelimiter?: (string | undefined) | undefined;
	readonly DatePartitionEnabled?: (boolean | undefined) | undefined;
	readonly DatePartitionSequence?: (string | undefined) | undefined;
	readonly DatePartitionTimezone?: (string | undefined) | undefined;
	readonly DictPageSizeLimit?: (number | undefined) | undefined;
	readonly EnableStatistics?: (boolean | undefined) | undefined;
	readonly EncodingType?: (string | undefined) | undefined;
	readonly EncryptionMode?: (string | undefined) | undefined;
	readonly ExternalTableDefinition?: (string | undefined) | undefined;
	readonly IgnoreHeaderRows?: (number | undefined) | undefined;
	readonly IncludeOpForFullLoad?: (boolean | undefined) | undefined;
	readonly MaxFileSize?: (number | undefined) | undefined;
	readonly ParquetTimestampInMillisecond?: (boolean | undefined) | undefined;
	readonly ParquetVersion?: (string | undefined) | undefined;
	readonly PreserveTransactions?: (boolean | undefined) | undefined;
	readonly Rfc4180?: (boolean | undefined) | undefined;
	readonly RowGroupLength?: (number | undefined) | undefined;
	readonly ServerSideEncryptionKmsKeyId?: (string | undefined) | undefined;
	readonly ServiceAccessRoleArn?: (string | undefined) | undefined;
	readonly TimestampColumnName?: (string | undefined) | undefined;
	readonly UseCsvNoSupValue?: (boolean | undefined) | undefined;
	readonly UseTaskStartTimeForFullLoadTimestamp?: (boolean | undefined) | undefined;
}
export interface SybaseSettings {
	readonly SecretsManagerAccessRoleArn?: (string | undefined) | undefined;
	readonly SecretsManagerSecretId?: (string | undefined) | undefined;
}
export default {
	Certificate: Certificate,
	Endpoint: Endpoint,
	EventSubscription: EventSubscription,
	ReplicationInstance: ReplicationInstance,
	ReplicationSubnetGroup: ReplicationSubnetGroup,
	ReplicationTask: ReplicationTask,
};
