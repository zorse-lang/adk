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
	readonly ApplicationConfiguration?: ApplicationConfiguration | undefined;
	readonly ApplicationDescription?: string | undefined;
	readonly ApplicationMaintenanceConfiguration?: ApplicationMaintenanceConfiguration | undefined;
	readonly ApplicationMode?: string | undefined;
	readonly ApplicationName?: string | undefined;
	readonly RunConfiguration?: RunConfiguration | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly ApplicationCodeConfiguration?: ApplicationCodeConfiguration | undefined;
	readonly ApplicationSnapshotConfiguration?: ApplicationSnapshotConfiguration | undefined;
	readonly EnvironmentProperties?: EnvironmentProperties | undefined;
	readonly FlinkApplicationConfiguration?: FlinkApplicationConfiguration | undefined;
	readonly SqlApplicationConfiguration?: SqlApplicationConfiguration | undefined;
	readonly VpcConfigurations?: VpcConfiguration[] | undefined;
	readonly ZeppelinApplicationConfiguration?: ZeppelinApplicationConfiguration | undefined;
}
export interface ApplicationMaintenanceConfiguration {
	readonly ApplicationMaintenanceWindowStartTime: string;
}
export interface ApplicationRestoreConfiguration {
	readonly ApplicationRestoreType: string;
	readonly SnapshotName?: string | undefined;
}
export interface ApplicationSnapshotConfiguration {
	readonly SnapshotsEnabled: boolean;
}
export interface CSVMappingParameters {
	readonly RecordColumnDelimiter: string;
	readonly RecordRowDelimiter: string;
}
export interface CatalogConfiguration {
	readonly GlueDataCatalogConfiguration?: GlueDataCatalogConfiguration | undefined;
}
export interface CheckpointConfiguration {
	readonly CheckpointInterval?: number | undefined;
	readonly CheckpointingEnabled?: boolean | undefined;
	readonly ConfigurationType: string;
	readonly MinPauseBetweenCheckpoints?: number | undefined;
}
export interface CodeContent {
	readonly S3ContentLocation?: S3ContentLocation | undefined;
	readonly TextContent?: string | undefined;
	readonly ZipFileContent?: string | undefined;
}
export interface CustomArtifactConfiguration {
	readonly ArtifactType: string;
	readonly MavenReference?: MavenReference | undefined;
	readonly S3ContentLocation?: S3ContentLocation | undefined;
}
export interface DeployAsApplicationConfiguration {
	readonly S3ContentLocation: S3ContentBaseLocation;
}
export interface EnvironmentProperties {
	readonly PropertyGroups?: PropertyGroup[] | undefined;
}
export interface FlinkApplicationConfiguration {
	readonly CheckpointConfiguration?: CheckpointConfiguration | undefined;
	readonly MonitoringConfiguration?: MonitoringConfiguration | undefined;
	readonly ParallelismConfiguration?: ParallelismConfiguration | undefined;
}
export interface FlinkRunConfiguration {
	readonly AllowNonRestoredState?: boolean | undefined;
}
export interface GlueDataCatalogConfiguration {
	readonly DatabaseARN?: string | undefined;
}
export interface Input {
	readonly InputParallelism?: InputParallelism | undefined;
	readonly InputProcessingConfiguration?: InputProcessingConfiguration | undefined;
	readonly InputSchema: InputSchema;
	readonly KinesisFirehoseInput?: KinesisFirehoseInput | undefined;
	readonly KinesisStreamsInput?: KinesisStreamsInput | undefined;
	readonly NamePrefix: string;
}
export interface InputLambdaProcessor {
	readonly ResourceARN: string;
}
export interface InputParallelism {
	readonly Count?: number | undefined;
}
export interface InputProcessingConfiguration {
	readonly InputLambdaProcessor?: InputLambdaProcessor | undefined;
}
export interface InputSchema {
	readonly RecordColumns: RecordColumn[];
	readonly RecordEncoding?: string | undefined;
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
	readonly CSVMappingParameters?: CSVMappingParameters | undefined;
	readonly JSONMappingParameters?: JSONMappingParameters | undefined;
}
export interface MavenReference {
	readonly ArtifactId: string;
	readonly GroupId: string;
	readonly Version: string;
}
export interface MonitoringConfiguration {
	readonly ConfigurationType: string;
	readonly LogLevel?: string | undefined;
	readonly MetricsLevel?: string | undefined;
}
export interface ParallelismConfiguration {
	readonly AutoScalingEnabled?: boolean | undefined;
	readonly ConfigurationType: string;
	readonly Parallelism?: number | undefined;
	readonly ParallelismPerKPU?: number | undefined;
}
export interface PropertyGroup {
	readonly PropertyGroupId?: string | undefined;
	readonly PropertyMap?: { [key: string]: string } | undefined;
}
export interface RecordColumn {
	readonly Mapping?: string | undefined;
	readonly Name: string;
	readonly SqlType: string;
}
export interface RecordFormat {
	readonly MappingParameters?: MappingParameters | undefined;
	readonly RecordFormatType: string;
}
export interface RunConfiguration {
	readonly ApplicationRestoreConfiguration?: ApplicationRestoreConfiguration | undefined;
	readonly FlinkRunConfiguration?: FlinkRunConfiguration | undefined;
}
export interface S3ContentBaseLocation {
	readonly BasePath?: string | undefined;
	readonly BucketARN: string;
}
export interface S3ContentLocation {
	readonly BucketARN: string;
	readonly FileKey: string;
	readonly ObjectVersion?: string | undefined;
}
export interface SqlApplicationConfiguration {
	readonly Inputs?: Input[] | undefined;
}
export interface VpcConfiguration {
	readonly SecurityGroupIds: string[];
	readonly SubnetIds: string[];
}
export interface ZeppelinApplicationConfiguration {
	readonly CatalogConfiguration?: CatalogConfiguration | undefined;
	readonly CustomArtifactsConfiguration?: CustomArtifactConfiguration[] | undefined;
	readonly DeployAsApplicationConfiguration?: DeployAsApplicationConfiguration | undefined;
	readonly MonitoringConfiguration?: ZeppelinMonitoringConfiguration | undefined;
}
export interface ZeppelinMonitoringConfiguration {
	readonly LogLevel?: string | undefined;
}
export interface CloudWatchLoggingOption {
	readonly LogStreamARN: string;
}
export interface DestinationSchema {
	readonly RecordFormatType?: string | undefined;
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
	readonly KinesisFirehoseOutput?: KinesisFirehoseOutput | undefined;
	readonly KinesisStreamsOutput?: KinesisStreamsOutput | undefined;
	readonly LambdaOutput?: LambdaOutput | undefined;
	readonly Name?: string | undefined;
}
export interface ReferenceDataSource {
	readonly ReferenceSchema: ReferenceSchema;
	readonly S3ReferenceDataSource?: S3ReferenceDataSource | undefined;
	readonly TableName?: string | undefined;
}
export interface ReferenceSchema {
	readonly RecordColumns: RecordColumn[];
	readonly RecordEncoding?: string | undefined;
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
