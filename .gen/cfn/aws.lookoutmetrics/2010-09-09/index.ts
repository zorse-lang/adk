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
	readonly AlertDescription?: string | undefined;
	readonly AlertName?: string | undefined;
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
	readonly AnomalyDetectorDescription?: string | undefined;
	readonly AnomalyDetectorName?: string | undefined;
	readonly KmsKeyArn?: string | undefined;
	readonly LogicalId: string;
}
export interface Action {
	readonly LambdaConfiguration?: LambdaConfiguration | undefined;
	readonly SNSConfiguration?: SNSConfiguration | undefined;
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
	readonly Charset?: string | undefined;
	readonly ContainsHeader?: boolean | undefined;
	readonly Delimiter?: string | undefined;
	readonly FileCompression?: string | undefined;
	readonly HeaderList?: string[] | undefined;
	readonly QuoteSymbol?: string | undefined;
}
export interface FileFormatDescriptor {
	readonly CsvFormatDescriptor?: CsvFormatDescriptor | undefined;
	readonly JsonFormatDescriptor?: JsonFormatDescriptor | undefined;
}
export interface JsonFormatDescriptor {
	readonly Charset?: string | undefined;
	readonly FileCompression?: string | undefined;
}
export interface Metric {
	readonly AggregationFunction: string;
	readonly MetricName: string;
	readonly Namespace?: string | undefined;
}
export interface MetricSet {
	readonly DimensionList?: string[] | undefined;
	readonly MetricList: Metric[];
	readonly MetricSetDescription?: string | undefined;
	readonly MetricSetFrequency?: string | undefined;
	readonly MetricSetName: string;
	readonly MetricSource: MetricSource;
	readonly Offset?: number | undefined;
	readonly TimestampColumn?: TimestampColumn | undefined;
	readonly Timezone?: string | undefined;
}
export interface MetricSource {
	readonly AppFlowConfig?: AppFlowConfig | undefined;
	readonly CloudwatchConfig?: CloudwatchConfig | undefined;
	readonly RDSSourceConfig?: RDSSourceConfig | undefined;
	readonly RedshiftSourceConfig?: RedshiftSourceConfig | undefined;
	readonly S3SourceConfig?: S3SourceConfig | undefined;
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
	readonly HistoricalDataPathList?: string[] | undefined;
	readonly RoleArn: string;
	readonly TemplatedPathList?: string[] | undefined;
}
export interface TimestampColumn {
	readonly ColumnFormat?: string | undefined;
	readonly ColumnName?: string | undefined;
}
export interface VpcConfiguration {
	readonly SecurityGroupIdList: string[];
	readonly SubnetIdList: string[];
}
export default {
	Alert: Alert,
	AnomalyDetector: AnomalyDetector,
};
