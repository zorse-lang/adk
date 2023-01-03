import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Alert extends CfnResource<AlertComponentInputs> implements AlertComponentOutputs {
	constructor(entity: ADKEntity, options: AlertComponentInputs) {
		super(entity, options.LogicalId, "AWS::LookoutMetrics::Alert", options);
	}
	public readonly Arn: string;
}
export interface AlertComponentOutputs {
	readonly Arn: string;
}
export interface AlertComponentInputs {
	readonly Action: Action;
	readonly AlertSensitivityThreshold: number;
	readonly AnomalyDetectorArn: string;
	readonly AlertDescription?: (string | undefined) | undefined;
	readonly AlertName?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class AnomalyDetector
	extends CfnResource<AnomalyDetectorComponentInputs>
	implements AnomalyDetectorComponentOutputs
{
	constructor(entity: ADKEntity, options: AnomalyDetectorComponentInputs) {
		super(entity, options.LogicalId, "AWS::LookoutMetrics::AnomalyDetector", options);
	}
	public readonly Arn: string;
}
export interface AnomalyDetectorComponentOutputs {
	readonly Arn: string;
}
export interface AnomalyDetectorComponentInputs {
	readonly AnomalyDetectorConfig: AnomalyDetectorConfig;
	readonly MetricSetList: MetricSet[];
	readonly AnomalyDetectorDescription?: (string | undefined) | undefined;
	readonly AnomalyDetectorName?: (string | undefined) | undefined;
	readonly KmsKeyArn?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface Action {
	readonly LambdaConfiguration?: (LambdaConfiguration | undefined) | undefined;
	readonly SNSConfiguration?: (SNSConfiguration | undefined) | undefined;
}
export interface LambdaConfiguration {
	readonly LambdaArn: string;
	readonly RoleArn: string;
}
export interface SNSConfiguration {
	readonly RoleArn: string;
	readonly SnsTopicArn: string;
}
export interface AnomalyDetectorConfig {
	readonly AnomalyDetectorFrequency: string;
}
export interface AppFlowConfig {
	readonly FlowName: string;
	readonly RoleArn: string;
}
export interface CloudwatchConfig {
	readonly RoleArn: string;
}
export interface CsvFormatDescriptor {
	readonly Charset?: (string | undefined) | undefined;
	readonly ContainsHeader?: (boolean | undefined) | undefined;
	readonly Delimiter?: (string | undefined) | undefined;
	readonly FileCompression?: (string | undefined) | undefined;
	readonly HeaderList?: (string[] | undefined) | undefined;
	readonly QuoteSymbol?: (string | undefined) | undefined;
}
export interface FileFormatDescriptor {
	readonly CsvFormatDescriptor?: (CsvFormatDescriptor | undefined) | undefined;
	readonly JsonFormatDescriptor?: (JsonFormatDescriptor | undefined) | undefined;
}
export interface JsonFormatDescriptor {
	readonly Charset?: (string | undefined) | undefined;
	readonly FileCompression?: (string | undefined) | undefined;
}
export interface Metric {
	readonly AggregationFunction: string;
	readonly MetricName: string;
	readonly Namespace?: (string | undefined) | undefined;
}
export interface MetricSet {
	readonly DimensionList?: (string[] | undefined) | undefined;
	readonly MetricList: Metric[];
	readonly MetricSetDescription?: (string | undefined) | undefined;
	readonly MetricSetFrequency?: (string | undefined) | undefined;
	readonly MetricSetName: string;
	readonly MetricSource: MetricSource;
	readonly Offset?: (number | undefined) | undefined;
	readonly TimestampColumn?: (TimestampColumn | undefined) | undefined;
	readonly Timezone?: (string | undefined) | undefined;
}
export interface MetricSource {
	readonly AppFlowConfig?: (AppFlowConfig | undefined) | undefined;
	readonly CloudwatchConfig?: (CloudwatchConfig | undefined) | undefined;
	readonly RDSSourceConfig?: (RDSSourceConfig | undefined) | undefined;
	readonly RedshiftSourceConfig?: (RedshiftSourceConfig | undefined) | undefined;
	readonly S3SourceConfig?: (S3SourceConfig | undefined) | undefined;
}
export interface RDSSourceConfig {
	readonly DBInstanceIdentifier: string;
	readonly DatabaseHost: string;
	readonly DatabaseName: string;
	readonly DatabasePort: number;
	readonly RoleArn: string;
	readonly SecretManagerArn: string;
	readonly TableName: string;
	readonly VpcConfiguration: VpcConfiguration;
}
export interface RedshiftSourceConfig {
	readonly ClusterIdentifier: string;
	readonly DatabaseHost: string;
	readonly DatabaseName: string;
	readonly DatabasePort: number;
	readonly RoleArn: string;
	readonly SecretManagerArn: string;
	readonly TableName: string;
	readonly VpcConfiguration: VpcConfiguration;
}
export interface S3SourceConfig {
	readonly FileFormatDescriptor: FileFormatDescriptor;
	readonly HistoricalDataPathList?: (string[] | undefined) | undefined;
	readonly RoleArn: string;
	readonly TemplatedPathList?: (string[] | undefined) | undefined;
}
export interface TimestampColumn {
	readonly ColumnFormat?: (string | undefined) | undefined;
	readonly ColumnName?: (string | undefined) | undefined;
}
export interface VpcConfiguration {
	readonly SecurityGroupIdList: string[];
	readonly SubnetIdList: string[];
}
export default {
	Alert: Alert,
	AnomalyDetector: AnomalyDetector,
};
