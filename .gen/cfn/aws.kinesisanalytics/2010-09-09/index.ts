import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Application extends CfnResource<ApplicationComponentInputs> implements ApplicationComponentOutputs {
	constructor(entity: ADKEntity, options: ApplicationComponentInputs) {
		super(entity, options.LogicalId, "AWS::KinesisAnalytics::Application", options);
	}
}
export interface ApplicationComponentOutputs {}
export interface ApplicationComponentInputs {
	readonly Inputs: Input[];
	readonly ApplicationCode?: string | undefined;
	readonly ApplicationDescription?: string | undefined;
	readonly ApplicationName?: string | undefined;
	readonly LogicalId: string;
}
export class ApplicationOutput
	extends CfnResource<ApplicationOutputComponentInputs>
	implements ApplicationOutputComponentOutputs
{
	constructor(entity: ADKEntity, options: ApplicationOutputComponentInputs) {
		super(entity, options.LogicalId, "AWS::KinesisAnalytics::ApplicationOutput", options);
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
		super(entity, options.LogicalId, "AWS::KinesisAnalytics::ApplicationReferenceDataSource", options);
	}
}
export interface ApplicationReferenceDataSourceComponentOutputs {}
export interface ApplicationReferenceDataSourceComponentInputs {
	readonly ApplicationName: string;
	readonly ReferenceDataSource: ReferenceDataSource;
	readonly LogicalId: string;
}
export interface CSVMappingParameters {
	readonly RecordColumnDelimiter: string;
	readonly RecordRowDelimiter: string;
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
	readonly RoleARN: string;
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
	readonly RoleARN: string;
}
export interface KinesisStreamsInput {
	readonly ResourceARN: string;
	readonly RoleARN: string;
}
export interface MappingParameters {
	readonly CSVMappingParameters?: CSVMappingParameters | undefined;
	readonly JSONMappingParameters?: JSONMappingParameters | undefined;
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
export interface DestinationSchema {
	readonly RecordFormatType?: string | undefined;
}
export interface KinesisFirehoseOutput {
	readonly ResourceARN: string;
	readonly RoleARN: string;
}
export interface KinesisStreamsOutput {
	readonly ResourceARN: string;
	readonly RoleARN: string;
}
export interface LambdaOutput {
	readonly ResourceARN: string;
	readonly RoleARN: string;
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
	readonly ReferenceRoleARN: string;
}
export default {
	Application: Application,
	ApplicationOutput: ApplicationOutput,
	ApplicationReferenceDataSource: ApplicationReferenceDataSource,
};
