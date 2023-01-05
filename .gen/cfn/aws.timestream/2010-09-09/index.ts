import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Database extends CfnResource<DatabaseComponentInputs> implements DatabaseComponentOutputs {
	constructor(entity: ADKEntity, options: DatabaseComponentInputs) {
		super(entity, options.LogicalId, "AWS::Timestream::Database", options);
	}
	public readonly Arn: string;
}
export interface DatabaseComponentOutputs {
	readonly Arn: string;
}
export interface DatabaseComponentInputs {
	readonly DatabaseName?: string | undefined;
	readonly KmsKeyId?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class ScheduledQuery extends CfnResource<ScheduledQueryComponentInputs> implements ScheduledQueryComponentOutputs {
	constructor(entity: ADKEntity, options: ScheduledQueryComponentInputs) {
		super(entity, options.LogicalId, "AWS::Timestream::ScheduledQuery", options);
	}
	public readonly Arn: string;
	public readonly SqErrorReportConfiguration: string;
	public readonly SqKmsKeyId: string;
	public readonly SqName: string;
	public readonly SqNotificationConfiguration: string;
	public readonly SqQueryString: string;
	public readonly SqScheduleConfiguration: string;
	public readonly SqScheduledQueryExecutionRoleArn: string;
	public readonly SqTargetConfiguration: string;
}
export interface ScheduledQueryComponentOutputs {
	readonly Arn: string;
	readonly SqErrorReportConfiguration: string;
	readonly SqKmsKeyId: string;
	readonly SqName: string;
	readonly SqNotificationConfiguration: string;
	readonly SqQueryString: string;
	readonly SqScheduleConfiguration: string;
	readonly SqScheduledQueryExecutionRoleArn: string;
	readonly SqTargetConfiguration: string;
}
export interface ScheduledQueryComponentInputs {
	readonly ErrorReportConfiguration: ErrorReportConfiguration;
	readonly NotificationConfiguration: NotificationConfiguration;
	readonly QueryString: string;
	readonly ScheduleConfiguration: ScheduleConfiguration;
	readonly ScheduledQueryExecutionRoleArn: string;
	readonly ClientToken?: string | undefined;
	readonly KmsKeyId?: string | undefined;
	readonly ScheduledQueryName?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly TargetConfiguration?: TargetConfiguration | undefined;
	readonly LogicalId: string;
}
export class Table extends CfnResource<TableComponentInputs> implements TableComponentOutputs {
	constructor(entity: ADKEntity, options: TableComponentInputs) {
		super(entity, options.LogicalId, "AWS::Timestream::Table", options);
	}
	public readonly Arn: string;
	public readonly Name: string;
}
export interface TableComponentOutputs {
	readonly Arn: string;
	readonly Name: string;
}
export interface TableComponentInputs {
	readonly DatabaseName: string;
	readonly MagneticStoreWriteProperties?: MagneticStoreWriteProperties | undefined;
	readonly RetentionProperties?: RetentionProperties | undefined;
	readonly TableName?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface DimensionMapping {
	readonly DimensionValueType: string;
	readonly Name: string;
}
export interface ErrorReportConfiguration {
	readonly S3Configuration: S3Configuration;
}
export interface MixedMeasureMapping {
	readonly MeasureName?: string | undefined;
	readonly MeasureValueType: string;
	readonly MultiMeasureAttributeMappings?: MultiMeasureAttributeMapping[] | undefined;
	readonly SourceColumn?: string | undefined;
	readonly TargetMeasureName?: string | undefined;
}
export interface MultiMeasureAttributeMapping {
	readonly MeasureValueType: string;
	readonly SourceColumn: string;
	readonly TargetMultiMeasureAttributeName?: string | undefined;
}
export interface MultiMeasureMappings {
	readonly MultiMeasureAttributeMappings: MultiMeasureAttributeMapping[];
	readonly TargetMultiMeasureName?: string | undefined;
}
export interface NotificationConfiguration {
	readonly SnsConfiguration: SnsConfiguration;
}
export interface S3Configuration {
	readonly BucketName: string;
	readonly EncryptionOption?: string | undefined;
	readonly ObjectKeyPrefix?: string | undefined;
}
export interface ScheduleConfiguration {
	readonly ScheduleExpression: string;
}
export interface SnsConfiguration {
	readonly TopicArn: string;
}
export interface TargetConfiguration {
	readonly TimestreamConfiguration: TimestreamConfiguration;
}
export interface TimestreamConfiguration {
	readonly DatabaseName: string;
	readonly DimensionMappings: DimensionMapping[];
	readonly MeasureNameColumn?: string | undefined;
	readonly MixedMeasureMappings?: MixedMeasureMapping[] | undefined;
	readonly MultiMeasureMappings?: MultiMeasureMappings | undefined;
	readonly TableName: string;
	readonly TimeColumn: string;
}
export interface MagneticStoreRejectedDataLocation {
	readonly S3Configuration?: S3Configuration | undefined;
}
export interface MagneticStoreWriteProperties {
	readonly EnableMagneticStoreWrites: boolean;
	readonly MagneticStoreRejectedDataLocation?: MagneticStoreRejectedDataLocation | undefined;
}
export interface RetentionProperties {
	readonly MagneticStoreRetentionPeriodInDays?: string | undefined;
	readonly MemoryStoreRetentionPeriodInHours?: string | undefined;
}
export default {
	Database: Database,
	ScheduledQuery: ScheduledQuery,
	Table: Table,
};
