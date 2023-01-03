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
		| (AmazonOpenSearchServerlessDestinationConfiguration | undefined)
		| undefined;
	readonly AmazonopensearchserviceDestinationConfiguration?:
		| (AmazonopensearchserviceDestinationConfiguration | undefined)
		| undefined;
	readonly DeliveryStreamEncryptionConfigurationInput?:
		| (DeliveryStreamEncryptionConfigurationInput | undefined)
		| undefined;
	readonly DeliveryStreamName?: (string | undefined) | undefined;
	readonly DeliveryStreamType?: (string | undefined) | undefined;
	readonly ElasticsearchDestinationConfiguration?: (ElasticsearchDestinationConfiguration | undefined) | undefined;
	readonly ExtendedS3DestinationConfiguration?: (ExtendedS3DestinationConfiguration | undefined) | undefined;
	readonly HttpEndpointDestinationConfiguration?: (HttpEndpointDestinationConfiguration | undefined) | undefined;
	readonly KinesisStreamSourceConfiguration?: (KinesisStreamSourceConfiguration | undefined) | undefined;
	readonly RedshiftDestinationConfiguration?: (RedshiftDestinationConfiguration | undefined) | undefined;
	readonly S3DestinationConfiguration?: (S3DestinationConfiguration | undefined) | undefined;
	readonly SplunkDestinationConfiguration?: (SplunkDestinationConfiguration | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface AmazonOpenSearchServerlessBufferingHints {
	readonly IntervalInSeconds?: (number | undefined) | undefined;
	readonly SizeInMBs?: (number | undefined) | undefined;
}
export interface AmazonOpenSearchServerlessDestinationConfiguration {
	readonly BufferingHints?: (AmazonOpenSearchServerlessBufferingHints | undefined) | undefined;
	readonly CloudWatchLoggingOptions?: (CloudWatchLoggingOptions | undefined) | undefined;
	readonly CollectionEndpoint?: (string | undefined) | undefined;
	readonly IndexName: string;
	readonly ProcessingConfiguration?: (ProcessingConfiguration | undefined) | undefined;
	readonly RetryOptions?: (AmazonOpenSearchServerlessRetryOptions | undefined) | undefined;
	readonly RoleARN: string;
	readonly S3BackupMode?: (string | undefined) | undefined;
	readonly S3Configuration: S3DestinationConfiguration;
	readonly VpcConfiguration?: (VpcConfiguration | undefined) | undefined;
}
export interface AmazonOpenSearchServerlessRetryOptions {
	readonly DurationInSeconds?: (number | undefined) | undefined;
}
export interface AmazonopensearchserviceBufferingHints {
	readonly IntervalInSeconds?: (number | undefined) | undefined;
	readonly SizeInMBs?: (number | undefined) | undefined;
}
export interface AmazonopensearchserviceDestinationConfiguration {
	readonly BufferingHints?: (AmazonopensearchserviceBufferingHints | undefined) | undefined;
	readonly CloudWatchLoggingOptions?: (CloudWatchLoggingOptions | undefined) | undefined;
	readonly ClusterEndpoint?: (string | undefined) | undefined;
	readonly DomainARN?: (string | undefined) | undefined;
	readonly IndexName: string;
	readonly IndexRotationPeriod?: (string | undefined) | undefined;
	readonly ProcessingConfiguration?: (ProcessingConfiguration | undefined) | undefined;
	readonly RetryOptions?: (AmazonopensearchserviceRetryOptions | undefined) | undefined;
	readonly RoleARN: string;
	readonly S3BackupMode?: (string | undefined) | undefined;
	readonly S3Configuration: S3DestinationConfiguration;
	readonly TypeName?: (string | undefined) | undefined;
	readonly VpcConfiguration?: (VpcConfiguration | undefined) | undefined;
}
export interface AmazonopensearchserviceRetryOptions {
	readonly DurationInSeconds?: (number | undefined) | undefined;
}
export interface BufferingHints {
	readonly IntervalInSeconds?: (number | undefined) | undefined;
	readonly SizeInMBs?: (number | undefined) | undefined;
}
export interface CloudWatchLoggingOptions {
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly LogGroupName?: (string | undefined) | undefined;
	readonly LogStreamName?: (string | undefined) | undefined;
}
export interface CopyCommand {
	readonly CopyOptions?: (string | undefined) | undefined;
	readonly DataTableColumns?: (string | undefined) | undefined;
	readonly DataTableName: string;
}
export interface DataFormatConversionConfiguration {
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly InputFormatConfiguration?: (InputFormatConfiguration | undefined) | undefined;
	readonly OutputFormatConfiguration?: (OutputFormatConfiguration | undefined) | undefined;
	readonly SchemaConfiguration?: (SchemaConfiguration | undefined) | undefined;
}
export interface DeliveryStreamEncryptionConfigurationInput {
	readonly KeyARN?: (string | undefined) | undefined;
	readonly KeyType: string;
}
export interface Deserializer {
	readonly HiveJsonSerDe?: (HiveJsonSerDe | undefined) | undefined;
	readonly OpenXJsonSerDe?: (OpenXJsonSerDe | undefined) | undefined;
}
export interface DynamicPartitioningConfiguration {
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly RetryOptions?: (RetryOptions | undefined) | undefined;
}
export interface ElasticsearchBufferingHints {
	readonly IntervalInSeconds?: (number | undefined) | undefined;
	readonly SizeInMBs?: (number | undefined) | undefined;
}
export interface ElasticsearchDestinationConfiguration {
	readonly BufferingHints?: (ElasticsearchBufferingHints | undefined) | undefined;
	readonly CloudWatchLoggingOptions?: (CloudWatchLoggingOptions | undefined) | undefined;
	readonly ClusterEndpoint?: (string | undefined) | undefined;
	readonly DomainARN?: (string | undefined) | undefined;
	readonly IndexName: string;
	readonly IndexRotationPeriod?: (string | undefined) | undefined;
	readonly ProcessingConfiguration?: (ProcessingConfiguration | undefined) | undefined;
	readonly RetryOptions?: (ElasticsearchRetryOptions | undefined) | undefined;
	readonly RoleARN: string;
	readonly S3BackupMode?: (string | undefined) | undefined;
	readonly S3Configuration: S3DestinationConfiguration;
	readonly TypeName?: (string | undefined) | undefined;
	readonly VpcConfiguration?: (VpcConfiguration | undefined) | undefined;
}
export interface ElasticsearchRetryOptions {
	readonly DurationInSeconds?: (number | undefined) | undefined;
}
export interface EncryptionConfiguration {
	readonly KMSEncryptionConfig?: (KMSEncryptionConfig | undefined) | undefined;
	readonly NoEncryptionConfig?: (string | undefined) | undefined;
}
export interface ExtendedS3DestinationConfiguration {
	readonly BucketARN: string;
	readonly BufferingHints?: (BufferingHints | undefined) | undefined;
	readonly CloudWatchLoggingOptions?: (CloudWatchLoggingOptions | undefined) | undefined;
	readonly CompressionFormat?: (string | undefined) | undefined;
	readonly DataFormatConversionConfiguration?: (DataFormatConversionConfiguration | undefined) | undefined;
	readonly DynamicPartitioningConfiguration?: (DynamicPartitioningConfiguration | undefined) | undefined;
	readonly EncryptionConfiguration?: (EncryptionConfiguration | undefined) | undefined;
	readonly ErrorOutputPrefix?: (string | undefined) | undefined;
	readonly Prefix?: (string | undefined) | undefined;
	readonly ProcessingConfiguration?: (ProcessingConfiguration | undefined) | undefined;
	readonly RoleARN: string;
	readonly S3BackupConfiguration?: (S3DestinationConfiguration | undefined) | undefined;
	readonly S3BackupMode?: (string | undefined) | undefined;
}
export interface HiveJsonSerDe {
	readonly TimestampFormats?: (string[] | undefined) | undefined;
}
export interface HttpEndpointCommonAttribute {
	readonly AttributeName: string;
	readonly AttributeValue: string;
}
export interface HttpEndpointConfiguration {
	readonly AccessKey?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Url: string;
}
export interface HttpEndpointDestinationConfiguration {
	readonly BufferingHints?: (BufferingHints | undefined) | undefined;
	readonly CloudWatchLoggingOptions?: (CloudWatchLoggingOptions | undefined) | undefined;
	readonly EndpointConfiguration: HttpEndpointConfiguration;
	readonly ProcessingConfiguration?: (ProcessingConfiguration | undefined) | undefined;
	readonly RequestConfiguration?: (HttpEndpointRequestConfiguration | undefined) | undefined;
	readonly RetryOptions?: (RetryOptions | undefined) | undefined;
	readonly RoleARN?: (string | undefined) | undefined;
	readonly S3BackupMode?: (string | undefined) | undefined;
	readonly S3Configuration: S3DestinationConfiguration;
}
export interface HttpEndpointRequestConfiguration {
	readonly CommonAttributes?: (HttpEndpointCommonAttribute[] | undefined) | undefined;
	readonly ContentEncoding?: (string | undefined) | undefined;
}
export interface InputFormatConfiguration {
	readonly Deserializer?: (Deserializer | undefined) | undefined;
}
export interface KMSEncryptionConfig {
	readonly AWSKMSKeyARN: string;
}
export interface KinesisStreamSourceConfiguration {
	readonly KinesisStreamARN: string;
	readonly RoleARN: string;
}
export interface OpenXJsonSerDe {
	readonly CaseInsensitive?: (boolean | undefined) | undefined;
	readonly ColumnToJsonKeyMappings?: ({ [key: string]: string } | undefined) | undefined;
	readonly ConvertDotsInJsonKeysToUnderscores?: (boolean | undefined) | undefined;
}
export interface OrcSerDe {
	readonly BlockSizeBytes?: (number | undefined) | undefined;
	readonly BloomFilterColumns?: (string[] | undefined) | undefined;
	readonly BloomFilterFalsePositiveProbability?: (number | undefined) | undefined;
	readonly Compression?: (string | undefined) | undefined;
	readonly DictionaryKeyThreshold?: (number | undefined) | undefined;
	readonly EnablePadding?: (boolean | undefined) | undefined;
	readonly FormatVersion?: (string | undefined) | undefined;
	readonly PaddingTolerance?: (number | undefined) | undefined;
	readonly RowIndexStride?: (number | undefined) | undefined;
	readonly StripeSizeBytes?: (number | undefined) | undefined;
}
export interface OutputFormatConfiguration {
	readonly Serializer?: (Serializer | undefined) | undefined;
}
export interface ParquetSerDe {
	readonly BlockSizeBytes?: (number | undefined) | undefined;
	readonly Compression?: (string | undefined) | undefined;
	readonly EnableDictionaryCompression?: (boolean | undefined) | undefined;
	readonly MaxPaddingBytes?: (number | undefined) | undefined;
	readonly PageSizeBytes?: (number | undefined) | undefined;
	readonly WriterVersion?: (string | undefined) | undefined;
}
export interface ProcessingConfiguration {
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly Processors?: (Processor[] | undefined) | undefined;
}
export interface Processor {
	readonly Parameters?: (ProcessorParameter[] | undefined) | undefined;
	readonly Type: string;
}
export interface ProcessorParameter {
	readonly ParameterName: string;
	readonly ParameterValue: string;
}
export interface RedshiftDestinationConfiguration {
	readonly CloudWatchLoggingOptions?: (CloudWatchLoggingOptions | undefined) | undefined;
	readonly ClusterJDBCURL: string;
	readonly CopyCommand: CopyCommand;
	readonly Password: string;
	readonly ProcessingConfiguration?: (ProcessingConfiguration | undefined) | undefined;
	readonly RetryOptions?: (RedshiftRetryOptions | undefined) | undefined;
	readonly RoleARN: string;
	readonly S3BackupConfiguration?: (S3DestinationConfiguration | undefined) | undefined;
	readonly S3BackupMode?: (string | undefined) | undefined;
	readonly S3Configuration: S3DestinationConfiguration;
	readonly Username: string;
}
export interface RedshiftRetryOptions {
	readonly DurationInSeconds?: (number | undefined) | undefined;
}
export interface RetryOptions {
	readonly DurationInSeconds?: (number | undefined) | undefined;
}
export interface S3DestinationConfiguration {
	readonly BucketARN: string;
	readonly BufferingHints?: (BufferingHints | undefined) | undefined;
	readonly CloudWatchLoggingOptions?: (CloudWatchLoggingOptions | undefined) | undefined;
	readonly CompressionFormat?: (string | undefined) | undefined;
	readonly EncryptionConfiguration?: (EncryptionConfiguration | undefined) | undefined;
	readonly ErrorOutputPrefix?: (string | undefined) | undefined;
	readonly Prefix?: (string | undefined) | undefined;
	readonly RoleARN: string;
}
export interface SchemaConfiguration {
	readonly CatalogId?: (string | undefined) | undefined;
	readonly DatabaseName?: (string | undefined) | undefined;
	readonly Region?: (string | undefined) | undefined;
	readonly RoleARN?: (string | undefined) | undefined;
	readonly TableName?: (string | undefined) | undefined;
	readonly VersionId?: (string | undefined) | undefined;
}
export interface Serializer {
	readonly OrcSerDe?: (OrcSerDe | undefined) | undefined;
	readonly ParquetSerDe?: (ParquetSerDe | undefined) | undefined;
}
export interface SplunkDestinationConfiguration {
	readonly CloudWatchLoggingOptions?: (CloudWatchLoggingOptions | undefined) | undefined;
	readonly HECAcknowledgmentTimeoutInSeconds?: (number | undefined) | undefined;
	readonly HECEndpoint: string;
	readonly HECEndpointType: string;
	readonly HECToken: string;
	readonly ProcessingConfiguration?: (ProcessingConfiguration | undefined) | undefined;
	readonly RetryOptions?: (SplunkRetryOptions | undefined) | undefined;
	readonly S3BackupMode?: (string | undefined) | undefined;
	readonly S3Configuration: S3DestinationConfiguration;
}
export interface SplunkRetryOptions {
	readonly DurationInSeconds?: (number | undefined) | undefined;
}
export interface VpcConfiguration {
	readonly RoleARN: string;
	readonly SecurityGroupIds: string[];
	readonly SubnetIds: string[];
}
export default {
	DeliveryStream: DeliveryStream,
};
