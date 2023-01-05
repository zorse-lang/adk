import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class DeliveryStream extends CfnResource<DeliveryStreamComponentInputs> implements DeliveryStreamComponentOutputs {
	constructor(entity: ADKEntity, options: DeliveryStreamComponentInputs) {
		super(entity, options.LogicalId, "AWS::KinesisFirehose::DeliveryStream", options);
	}
	public readonly Arn: string;
}
export interface DeliveryStreamComponentOutputs {
	readonly Arn: string;
}
export interface DeliveryStreamComponentInputs {
	readonly AmazonOpenSearchServerlessDestinationConfiguration?:
		| AmazonOpenSearchServerlessDestinationConfiguration
		| undefined;
	readonly AmazonopensearchserviceDestinationConfiguration?:
		| AmazonopensearchserviceDestinationConfiguration
		| undefined;
	readonly DeliveryStreamEncryptionConfigurationInput?: DeliveryStreamEncryptionConfigurationInput | undefined;
	readonly DeliveryStreamName?: string | undefined;
	readonly DeliveryStreamType?: string | undefined;
	readonly ElasticsearchDestinationConfiguration?: ElasticsearchDestinationConfiguration | undefined;
	readonly ExtendedS3DestinationConfiguration?: ExtendedS3DestinationConfiguration | undefined;
	readonly HttpEndpointDestinationConfiguration?: HttpEndpointDestinationConfiguration | undefined;
	readonly KinesisStreamSourceConfiguration?: KinesisStreamSourceConfiguration | undefined;
	readonly RedshiftDestinationConfiguration?: RedshiftDestinationConfiguration | undefined;
	readonly S3DestinationConfiguration?: S3DestinationConfiguration | undefined;
	readonly SplunkDestinationConfiguration?: SplunkDestinationConfiguration | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface AmazonOpenSearchServerlessBufferingHints {
	readonly IntervalInSeconds?: number | undefined;
	readonly SizeInMBs?: number | undefined;
}
export interface AmazonOpenSearchServerlessDestinationConfiguration {
	readonly BufferingHints?: AmazonOpenSearchServerlessBufferingHints | undefined;
	readonly CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;
	readonly CollectionEndpoint?: string | undefined;
	readonly IndexName: string;
	readonly ProcessingConfiguration?: ProcessingConfiguration | undefined;
	readonly RetryOptions?: AmazonOpenSearchServerlessRetryOptions | undefined;
	readonly RoleARN: string;
	readonly S3BackupMode?: string | undefined;
	readonly S3Configuration: S3DestinationConfiguration;
	readonly VpcConfiguration?: VpcConfiguration | undefined;
}
export interface AmazonOpenSearchServerlessRetryOptions {
	readonly DurationInSeconds?: number | undefined;
}
export interface AmazonopensearchserviceBufferingHints {
	readonly IntervalInSeconds?: number | undefined;
	readonly SizeInMBs?: number | undefined;
}
export interface AmazonopensearchserviceDestinationConfiguration {
	readonly BufferingHints?: AmazonopensearchserviceBufferingHints | undefined;
	readonly CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;
	readonly ClusterEndpoint?: string | undefined;
	readonly DomainARN?: string | undefined;
	readonly IndexName: string;
	readonly IndexRotationPeriod?: string | undefined;
	readonly ProcessingConfiguration?: ProcessingConfiguration | undefined;
	readonly RetryOptions?: AmazonopensearchserviceRetryOptions | undefined;
	readonly RoleARN: string;
	readonly S3BackupMode?: string | undefined;
	readonly S3Configuration: S3DestinationConfiguration;
	readonly TypeName?: string | undefined;
	readonly VpcConfiguration?: VpcConfiguration | undefined;
}
export interface AmazonopensearchserviceRetryOptions {
	readonly DurationInSeconds?: number | undefined;
}
export interface BufferingHints {
	readonly IntervalInSeconds?: number | undefined;
	readonly SizeInMBs?: number | undefined;
}
export interface CloudWatchLoggingOptions {
	readonly Enabled?: boolean | undefined;
	readonly LogGroupName?: string | undefined;
	readonly LogStreamName?: string | undefined;
}
export interface CopyCommand {
	readonly CopyOptions?: string | undefined;
	readonly DataTableColumns?: string | undefined;
	readonly DataTableName: string;
}
export interface DataFormatConversionConfiguration {
	readonly Enabled?: boolean | undefined;
	readonly InputFormatConfiguration?: InputFormatConfiguration | undefined;
	readonly OutputFormatConfiguration?: OutputFormatConfiguration | undefined;
	readonly SchemaConfiguration?: SchemaConfiguration | undefined;
}
export interface DeliveryStreamEncryptionConfigurationInput {
	readonly KeyARN?: string | undefined;
	readonly KeyType: string;
}
export interface Deserializer {
	readonly HiveJsonSerDe?: HiveJsonSerDe | undefined;
	readonly OpenXJsonSerDe?: OpenXJsonSerDe | undefined;
}
export interface DynamicPartitioningConfiguration {
	readonly Enabled?: boolean | undefined;
	readonly RetryOptions?: RetryOptions | undefined;
}
export interface ElasticsearchBufferingHints {
	readonly IntervalInSeconds?: number | undefined;
	readonly SizeInMBs?: number | undefined;
}
export interface ElasticsearchDestinationConfiguration {
	readonly BufferingHints?: ElasticsearchBufferingHints | undefined;
	readonly CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;
	readonly ClusterEndpoint?: string | undefined;
	readonly DomainARN?: string | undefined;
	readonly IndexName: string;
	readonly IndexRotationPeriod?: string | undefined;
	readonly ProcessingConfiguration?: ProcessingConfiguration | undefined;
	readonly RetryOptions?: ElasticsearchRetryOptions | undefined;
	readonly RoleARN: string;
	readonly S3BackupMode?: string | undefined;
	readonly S3Configuration: S3DestinationConfiguration;
	readonly TypeName?: string | undefined;
	readonly VpcConfiguration?: VpcConfiguration | undefined;
}
export interface ElasticsearchRetryOptions {
	readonly DurationInSeconds?: number | undefined;
}
export interface EncryptionConfiguration {
	readonly KMSEncryptionConfig?: KMSEncryptionConfig | undefined;
	readonly NoEncryptionConfig?: string | undefined;
}
export interface ExtendedS3DestinationConfiguration {
	readonly BucketARN: string;
	readonly BufferingHints?: BufferingHints | undefined;
	readonly CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;
	readonly CompressionFormat?: string | undefined;
	readonly DataFormatConversionConfiguration?: DataFormatConversionConfiguration | undefined;
	readonly DynamicPartitioningConfiguration?: DynamicPartitioningConfiguration | undefined;
	readonly EncryptionConfiguration?: EncryptionConfiguration | undefined;
	readonly ErrorOutputPrefix?: string | undefined;
	readonly Prefix?: string | undefined;
	readonly ProcessingConfiguration?: ProcessingConfiguration | undefined;
	readonly RoleARN: string;
	readonly S3BackupConfiguration?: S3DestinationConfiguration | undefined;
	readonly S3BackupMode?: string | undefined;
}
export interface HiveJsonSerDe {
	readonly TimestampFormats?: string[] | undefined;
}
export interface HttpEndpointCommonAttribute {
	readonly AttributeName: string;
	readonly AttributeValue: string;
}
export interface HttpEndpointConfiguration {
	readonly AccessKey?: string | undefined;
	readonly Name?: string | undefined;
	readonly Url: string;
}
export interface HttpEndpointDestinationConfiguration {
	readonly BufferingHints?: BufferingHints | undefined;
	readonly CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;
	readonly EndpointConfiguration: HttpEndpointConfiguration;
	readonly ProcessingConfiguration?: ProcessingConfiguration | undefined;
	readonly RequestConfiguration?: HttpEndpointRequestConfiguration | undefined;
	readonly RetryOptions?: RetryOptions | undefined;
	readonly RoleARN?: string | undefined;
	readonly S3BackupMode?: string | undefined;
	readonly S3Configuration: S3DestinationConfiguration;
}
export interface HttpEndpointRequestConfiguration {
	readonly CommonAttributes?: HttpEndpointCommonAttribute[] | undefined;
	readonly ContentEncoding?: string | undefined;
}
export interface InputFormatConfiguration {
	readonly Deserializer?: Deserializer | undefined;
}
export interface KMSEncryptionConfig {
	readonly AWSKMSKeyARN: string;
}
export interface KinesisStreamSourceConfiguration {
	readonly KinesisStreamARN: string;
	readonly RoleARN: string;
}
export interface OpenXJsonSerDe {
	readonly CaseInsensitive?: boolean | undefined;
	readonly ColumnToJsonKeyMappings?: { [key: string]: string } | undefined;
	readonly ConvertDotsInJsonKeysToUnderscores?: boolean | undefined;
}
export interface OrcSerDe {
	readonly BlockSizeBytes?: number | undefined;
	readonly BloomFilterColumns?: string[] | undefined;
	readonly BloomFilterFalsePositiveProbability?: number | undefined;
	readonly Compression?: string | undefined;
	readonly DictionaryKeyThreshold?: number | undefined;
	readonly EnablePadding?: boolean | undefined;
	readonly FormatVersion?: string | undefined;
	readonly PaddingTolerance?: number | undefined;
	readonly RowIndexStride?: number | undefined;
	readonly StripeSizeBytes?: number | undefined;
}
export interface OutputFormatConfiguration {
	readonly Serializer?: Serializer | undefined;
}
export interface ParquetSerDe {
	readonly BlockSizeBytes?: number | undefined;
	readonly Compression?: string | undefined;
	readonly EnableDictionaryCompression?: boolean | undefined;
	readonly MaxPaddingBytes?: number | undefined;
	readonly PageSizeBytes?: number | undefined;
	readonly WriterVersion?: string | undefined;
}
export interface ProcessingConfiguration {
	readonly Enabled?: boolean | undefined;
	readonly Processors?: Processor[] | undefined;
}
export interface Processor {
	readonly Parameters?: ProcessorParameter[] | undefined;
	readonly Type: string;
}
export interface ProcessorParameter {
	readonly ParameterName: string;
	readonly ParameterValue: string;
}
export interface RedshiftDestinationConfiguration {
	readonly CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;
	readonly ClusterJDBCURL: string;
	readonly CopyCommand: CopyCommand;
	readonly Password: string;
	readonly ProcessingConfiguration?: ProcessingConfiguration | undefined;
	readonly RetryOptions?: RedshiftRetryOptions | undefined;
	readonly RoleARN: string;
	readonly S3BackupConfiguration?: S3DestinationConfiguration | undefined;
	readonly S3BackupMode?: string | undefined;
	readonly S3Configuration: S3DestinationConfiguration;
	readonly Username: string;
}
export interface RedshiftRetryOptions {
	readonly DurationInSeconds?: number | undefined;
}
export interface RetryOptions {
	readonly DurationInSeconds?: number | undefined;
}
export interface S3DestinationConfiguration {
	readonly BucketARN: string;
	readonly BufferingHints?: BufferingHints | undefined;
	readonly CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;
	readonly CompressionFormat?: string | undefined;
	readonly EncryptionConfiguration?: EncryptionConfiguration | undefined;
	readonly ErrorOutputPrefix?: string | undefined;
	readonly Prefix?: string | undefined;
	readonly RoleARN: string;
}
export interface SchemaConfiguration {
	readonly CatalogId?: string | undefined;
	readonly DatabaseName?: string | undefined;
	readonly Region?: string | undefined;
	readonly RoleARN?: string | undefined;
	readonly TableName?: string | undefined;
	readonly VersionId?: string | undefined;
}
export interface Serializer {
	readonly OrcSerDe?: OrcSerDe | undefined;
	readonly ParquetSerDe?: ParquetSerDe | undefined;
}
export interface SplunkDestinationConfiguration {
	readonly CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;
	readonly HECAcknowledgmentTimeoutInSeconds?: number | undefined;
	readonly HECEndpoint: string;
	readonly HECEndpointType: string;
	readonly HECToken: string;
	readonly ProcessingConfiguration?: ProcessingConfiguration | undefined;
	readonly RetryOptions?: SplunkRetryOptions | undefined;
	readonly S3BackupMode?: string | undefined;
	readonly S3Configuration: S3DestinationConfiguration;
}
export interface SplunkRetryOptions {
	readonly DurationInSeconds?: number | undefined;
}
export interface VpcConfiguration {
	readonly RoleARN: string;
	readonly SecurityGroupIds: string[];
	readonly SubnetIds: string[];
}
export default {
	DeliveryStream: DeliveryStream,
};
