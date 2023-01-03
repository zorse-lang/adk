import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Application extends CfnResource<ApplicationComponentInputs> implements ApplicationComponentOutputs {
	constructor(entity: ADKEntity, options: ApplicationComponentInputs) {
		super(entity, options.LogicalId, "AWS::KinesisAnalyticsV2::Application", options);
	}
}
export interface ApplicationComponentOutputs {}
export interface ApplicationComponentInputs {
	readonly RuntimeEnvironment: string;
	readonly ServiceExecutionRole: string;
	readonly ApplicationConfiguration?: (ApplicationConfiguration | undefined) | undefined;
	readonly ApplicationDescription?: (string | undefined) | undefined;
	readonly ApplicationMaintenanceConfiguration?: (ApplicationMaintenanceConfiguration | undefined) | undefined;
	readonly ApplicationMode?: (string | undefined) | undefined;
	readonly ApplicationName?: (string | undefined) | undefined;
	readonly RunConfiguration?: (RunConfiguration | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class ApplicationCloudWatchLoggingOption
	extends CfnResource<ApplicationCloudWatchLoggingOptionComponentInputs>
	implements ApplicationCloudWatchLoggingOptionComponentOutputs
{
	constructor(entity: ADKEntity, options: ApplicationCloudWatchLoggingOptionComponentInputs) {
		super(entity, options.LogicalId, "AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption", options);
	}
}
export interface ApplicationCloudWatchLoggingOptionComponentOutputs {}
export interface ApplicationCloudWatchLoggingOptionComponentInputs {
	readonly ApplicationName: string;
	readonly CloudWatchLoggingOption: CloudWatchLoggingOption;
	readonly LogicalId: string;
}
export class ApplicationOutput
	extends CfnResource<ApplicationOutputComponentInputs>
	implements ApplicationOutputComponentOutputs
{
	constructor(entity: ADKEntity, options: ApplicationOutputComponentInputs) {
		super(entity, options.LogicalId, "AWS::KinesisAnalyticsV2::ApplicationOutput", options);
	}
}
export interface ApplicationOutputComponentOutputs {}
export interface ApplicationOutputComponentInputs {
	readonly ApplicationName: string;
	readonly Output: Output;
	readonly LogicalId: string;
}
export class ApplicationReferenceDataSource
	extends CfnResource<ApplicationReferenceDataSourceComponentInputs>
	implements ApplicationReferenceDataSourceComponentOutputs
{
	constructor(entity: ADKEntity, options: ApplicationReferenceDataSourceComponentInputs) {
		super(entity, options.LogicalId, "AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource", options);
	}
}
export interface ApplicationReferenceDataSourceComponentOutputs {}
export interface ApplicationReferenceDataSourceComponentInputs {
	readonly ApplicationName: string;
	readonly ReferenceDataSource: ReferenceDataSource;
	readonly LogicalId: string;
}
export interface ApplicationCodeConfiguration {
	readonly CodeContent: CodeContent;
	readonly CodeContentType: string;
}
export interface ApplicationConfiguration {
	readonly ApplicationCodeConfiguration?: (ApplicationCodeConfiguration | undefined) | undefined;
	readonly ApplicationSnapshotConfiguration?: (ApplicationSnapshotConfiguration | undefined) | undefined;
	readonly EnvironmentProperties?: (EnvironmentProperties | undefined) | undefined;
	readonly FlinkApplicationConfiguration?: (FlinkApplicationConfiguration | undefined) | undefined;
	readonly SqlApplicationConfiguration?: (SqlApplicationConfiguration | undefined) | undefined;
	readonly VpcConfigurations?: (VpcConfiguration[] | undefined) | undefined;
	readonly ZeppelinApplicationConfiguration?: (ZeppelinApplicationConfiguration | undefined) | undefined;
}
export interface ApplicationMaintenanceConfiguration {
	readonly ApplicationMaintenanceWindowStartTime: string;
}
export interface ApplicationRestoreConfiguration {
	readonly ApplicationRestoreType: string;
	readonly SnapshotName?: (string | undefined) | undefined;
}
export interface ApplicationSnapshotConfiguration {
	readonly SnapshotsEnabled: boolean;
}
export interface CSVMappingParameters {
	readonly RecordColumnDelimiter: string;
	readonly RecordRowDelimiter: string;
}
export interface CatalogConfiguration {
	readonly GlueDataCatalogConfiguration?: (GlueDataCatalogConfiguration | undefined) | undefined;
}
export interface CheckpointConfiguration {
	readonly CheckpointInterval?: (number | undefined) | undefined;
	readonly CheckpointingEnabled?: (boolean | undefined) | undefined;
	readonly ConfigurationType: string;
	readonly MinPauseBetweenCheckpoints?: (number | undefined) | undefined;
}
export interface CodeContent {
	readonly S3ContentLocation?: (S3ContentLocation | undefined) | undefined;
	readonly TextContent?: (string | undefined) | undefined;
	readonly ZipFileContent?: (string | undefined) | undefined;
}
export interface CustomArtifactConfiguration {
	readonly ArtifactType: string;
	readonly MavenReference?: (MavenReference | undefined) | undefined;
	readonly S3ContentLocation?: (S3ContentLocation | undefined) | undefined;
}
export interface DeployAsApplicationConfiguration {
	readonly S3ContentLocation: S3ContentBaseLocation;
}
export interface EnvironmentProperties {
	readonly PropertyGroups?: (PropertyGroup[] | undefined) | undefined;
}
export interface FlinkApplicationConfiguration {
	readonly CheckpointConfiguration?: (CheckpointConfiguration | undefined) | undefined;
	readonly MonitoringConfiguration?: (MonitoringConfiguration | undefined) | undefined;
	readonly ParallelismConfiguration?: (ParallelismConfiguration | undefined) | undefined;
}
export interface FlinkRunConfiguration {
	readonly AllowNonRestoredState?: (boolean | undefined) | undefined;
}
export interface GlueDataCatalogConfiguration {
	readonly DatabaseARN?: (string | undefined) | undefined;
}
export interface Input {
	readonly InputParallelism?: (InputParallelism | undefined) | undefined;
	readonly InputProcessingConfiguration?: (InputProcessingConfiguration | undefined) | undefined;
	readonly InputSchema: InputSchema;
	readonly KinesisFirehoseInput?: (KinesisFirehoseInput | undefined) | undefined;
	readonly KinesisStreamsInput?: (KinesisStreamsInput | undefined) | undefined;
	readonly NamePrefix: string;
}
export interface InputLambdaProcessor {
	readonly ResourceARN: string;
}
export interface InputParallelism {
	readonly Count?: (number | undefined) | undefined;
}
export interface InputProcessingConfiguration {
	readonly InputLambdaProcessor?: (InputLambdaProcessor | undefined) | undefined;
}
export interface InputSchema {
	readonly RecordColumns: RecordColumn[];
	readonly RecordEncoding?: (string | undefined) | undefined;
	readonly RecordFormat: RecordFormat;
}
export interface JSONMappingParameters {
	readonly RecordRowPath: string;
}
export interface KinesisFirehoseInput {
	readonly ResourceARN: string;
}
export interface KinesisStreamsInput {
	readonly ResourceARN: string;
}
export interface MappingParameters {
	readonly CSVMappingParameters?: (CSVMappingParameters | undefined) | undefined;
	readonly JSONMappingParameters?: (JSONMappingParameters | undefined) | undefined;
}
export interface MavenReference {
	readonly ArtifactId: string;
	readonly GroupId: string;
	readonly Version: string;
}
export interface MonitoringConfiguration {
	readonly ConfigurationType: string;
	readonly LogLevel?: (string | undefined) | undefined;
	readonly MetricsLevel?: (string | undefined) | undefined;
}
export interface ParallelismConfiguration {
	readonly AutoScalingEnabled?: (boolean | undefined) | undefined;
	readonly ConfigurationType: string;
	readonly Parallelism?: (number | undefined) | undefined;
	readonly ParallelismPerKPU?: (number | undefined) | undefined;
}
export interface PropertyGroup {
	readonly PropertyGroupId?: (string | undefined) | undefined;
	readonly PropertyMap?: ({ [key: string]: string } | undefined) | undefined;
}
export interface RecordColumn {
	readonly Mapping?: (string | undefined) | undefined;
	readonly Name: string;
	readonly SqlType: string;
}
export interface RecordFormat {
	readonly MappingParameters?: (MappingParameters | undefined) | undefined;
	readonly RecordFormatType: string;
}
export interface RunConfiguration {
	readonly ApplicationRestoreConfiguration?: (ApplicationRestoreConfiguration | undefined) | undefined;
	readonly FlinkRunConfiguration?: (FlinkRunConfiguration | undefined) | undefined;
}
export interface S3ContentBaseLocation {
	readonly BasePath?: (string | undefined) | undefined;
	readonly BucketARN: string;
}
export interface S3ContentLocation {
	readonly BucketARN: string;
	readonly FileKey: string;
	readonly ObjectVersion?: (string | undefined) | undefined;
}
export interface SqlApplicationConfiguration {
	readonly Inputs?: (Input[] | undefined) | undefined;
}
export interface VpcConfiguration {
	readonly SecurityGroupIds: string[];
	readonly SubnetIds: string[];
}
export interface ZeppelinApplicationConfiguration {
	readonly CatalogConfiguration?: (CatalogConfiguration | undefined) | undefined;
	readonly CustomArtifactsConfiguration?: (CustomArtifactConfiguration[] | undefined) | undefined;
	readonly DeployAsApplicationConfiguration?: (DeployAsApplicationConfiguration | undefined) | undefined;
	readonly MonitoringConfiguration?: (ZeppelinMonitoringConfiguration | undefined) | undefined;
}
export interface ZeppelinMonitoringConfiguration {
	readonly LogLevel?: (string | undefined) | undefined;
}
export interface CloudWatchLoggingOption {
	readonly LogStreamARN: string;
}
export interface DestinationSchema {
	readonly RecordFormatType?: (string | undefined) | undefined;
}
export interface KinesisFirehoseOutput {
	readonly ResourceARN: string;
}
export interface KinesisStreamsOutput {
	readonly ResourceARN: string;
}
export interface LambdaOutput {
	readonly ResourceARN: string;
}
export interface Output {
	readonly DestinationSchema: DestinationSchema;
	readonly KinesisFirehoseOutput?: (KinesisFirehoseOutput | undefined) | undefined;
	readonly KinesisStreamsOutput?: (KinesisStreamsOutput | undefined) | undefined;
	readonly LambdaOutput?: (LambdaOutput | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
}
export interface ReferenceDataSource {
	readonly ReferenceSchema: ReferenceSchema;
	readonly S3ReferenceDataSource?: (S3ReferenceDataSource | undefined) | undefined;
	readonly TableName?: (string | undefined) | undefined;
}
export interface ReferenceSchema {
	readonly RecordColumns: RecordColumn[];
	readonly RecordEncoding?: (string | undefined) | undefined;
	readonly RecordFormat: RecordFormat;
}
export interface S3ReferenceDataSource {
	readonly BucketARN: string;
	readonly FileKey: string;
}
export default {
	Application: Application,
	ApplicationCloudWatchLoggingOption: ApplicationCloudWatchLoggingOption,
	ApplicationOutput: ApplicationOutput,
	ApplicationReferenceDataSource: ApplicationReferenceDataSource,
};
