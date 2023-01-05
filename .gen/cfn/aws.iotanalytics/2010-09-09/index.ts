import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Channel extends CfnResource<ChannelComponentInputs> implements ChannelComponentOutputs {
	constructor(entity: ADKEntity, options: ChannelComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoTAnalytics::Channel", options);
	}
	public readonly Id: string;
}
export interface ChannelComponentOutputs {
	readonly Id: string;
}
export interface ChannelComponentInputs {
	readonly ChannelName?: string | undefined;
	readonly ChannelStorage?: ChannelStorage | undefined;
	readonly RetentionPeriod?: RetentionPeriod | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Dataset extends CfnResource<DatasetComponentInputs> implements DatasetComponentOutputs {
	constructor(entity: ADKEntity, options: DatasetComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoTAnalytics::Dataset", options);
	}
	public readonly Id: string;
}
export interface DatasetComponentOutputs {
	readonly Id: string;
}
export interface DatasetComponentInputs {
	readonly Actions: Action[];
	readonly ContentDeliveryRules?: DatasetContentDeliveryRule[] | undefined;
	readonly DatasetName?: string | undefined;
	readonly LateDataRules?: LateDataRule[] | undefined;
	readonly RetentionPeriod?: RetentionPeriod | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly Triggers?: Trigger[] | undefined;
	readonly VersioningConfiguration?: VersioningConfiguration | undefined;
	readonly LogicalId: string;
}
export class Datastore extends CfnResource<DatastoreComponentInputs> implements DatastoreComponentOutputs {
	constructor(entity: ADKEntity, options: DatastoreComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoTAnalytics::Datastore", options);
	}
	public readonly Id: string;
}
export interface DatastoreComponentOutputs {
	readonly Id: string;
}
export interface DatastoreComponentInputs {
	readonly DatastoreName?: string | undefined;
	readonly DatastorePartitions?: DatastorePartitions | undefined;
	readonly DatastoreStorage?: DatastoreStorage | undefined;
	readonly FileFormatConfiguration?: FileFormatConfiguration | undefined;
	readonly RetentionPeriod?: RetentionPeriod | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Pipeline extends CfnResource<PipelineComponentInputs> implements PipelineComponentOutputs {
	constructor(entity: ADKEntity, options: PipelineComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoTAnalytics::Pipeline", options);
	}
	public readonly Id: string;
}
export interface PipelineComponentOutputs {
	readonly Id: string;
}
export interface PipelineComponentInputs {
	readonly PipelineActivities: Activity[];
	readonly PipelineName?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface ChannelStorage {
	readonly CustomerManagedS3?: CustomerManagedS3 | undefined;
	readonly ServiceManagedS3?: any | undefined;
}
export interface CustomerManagedS3 {
	readonly Bucket: string;
	readonly KeyPrefix?: string | undefined;
	readonly RoleArn: string;
}
export interface RetentionPeriod {
	readonly NumberOfDays?: number | undefined;
	readonly Unlimited?: boolean | undefined;
}
export interface Action {
	readonly ActionName: string;
	readonly ContainerAction?: ContainerAction | undefined;
	readonly QueryAction?: QueryAction | undefined;
}
export interface ContainerAction {
	readonly ExecutionRoleArn: string;
	readonly Image: string;
	readonly ResourceConfiguration: ResourceConfiguration;
	readonly Variables?: Variable[] | undefined;
}
export interface DatasetContentDeliveryRule {
	readonly Destination: DatasetContentDeliveryRuleDestination;
	readonly EntryName?: string | undefined;
}
export interface DatasetContentDeliveryRuleDestination {
	readonly IotEventsDestinationConfiguration?: IotEventsDestinationConfiguration | undefined;
	readonly S3DestinationConfiguration?: S3DestinationConfiguration | undefined;
}
export interface DatasetContentVersionValue {
	readonly DatasetName: string;
}
export interface DeltaTime {
	readonly OffsetSeconds: number;
	readonly TimeExpression: string;
}
export interface DeltaTimeSessionWindowConfiguration {
	readonly TimeoutInMinutes: number;
}
export interface Filter {
	readonly DeltaTime?: DeltaTime | undefined;
}
export interface GlueConfiguration {
	readonly DatabaseName: string;
	readonly TableName: string;
}
export interface IotEventsDestinationConfiguration {
	readonly InputName: string;
	readonly RoleArn: string;
}
export interface LateDataRule {
	readonly RuleConfiguration: LateDataRuleConfiguration;
	readonly RuleName?: string | undefined;
}
export interface LateDataRuleConfiguration {
	readonly DeltaTimeSessionWindowConfiguration?: DeltaTimeSessionWindowConfiguration | undefined;
}
export interface OutputFileUriValue {
	readonly FileName: string;
}
export interface QueryAction {
	readonly Filters?: Filter[] | undefined;
	readonly SqlQuery: string;
}
export interface ResourceConfiguration {
	readonly ComputeType: string;
	readonly VolumeSizeInGB: number;
}
export interface S3DestinationConfiguration {
	readonly Bucket: string;
	readonly GlueConfiguration?: GlueConfiguration | undefined;
	readonly Key: string;
	readonly RoleArn: string;
}
export interface Schedule {
	readonly ScheduleExpression: string;
}
export interface Trigger {
	readonly Schedule?: Schedule | undefined;
	readonly TriggeringDataset?: TriggeringDataset | undefined;
}
export interface TriggeringDataset {
	readonly DatasetName: string;
}
export interface Variable {
	readonly DatasetContentVersionValue?: DatasetContentVersionValue | undefined;
	readonly DoubleValue?: number | undefined;
	readonly OutputFileUriValue?: OutputFileUriValue | undefined;
	readonly StringValue?: string | undefined;
	readonly VariableName: string;
}
export interface VersioningConfiguration {
	readonly MaxVersions?: number | undefined;
	readonly Unlimited?: boolean | undefined;
}
export interface Column {
	readonly Name: string;
	readonly Type: string;
}
export interface CustomerManagedS3Storage {
	readonly Bucket: string;
	readonly KeyPrefix?: string | undefined;
}
export interface DatastorePartition {
	readonly Partition?: Partition | undefined;
	readonly TimestampPartition?: TimestampPartition | undefined;
}
export interface DatastorePartitions {
	readonly Partitions?: DatastorePartition[] | undefined;
}
export interface DatastoreStorage {
	readonly CustomerManagedS3?: CustomerManagedS3 | undefined;
	readonly IotSiteWiseMultiLayerStorage?: IotSiteWiseMultiLayerStorage | undefined;
	readonly ServiceManagedS3?: any | undefined;
}
export interface FileFormatConfiguration {
	readonly JsonConfiguration?: any | undefined;
	readonly ParquetConfiguration?: ParquetConfiguration | undefined;
}
export interface IotSiteWiseMultiLayerStorage {
	readonly CustomerManagedS3Storage?: CustomerManagedS3Storage | undefined;
}
export interface ParquetConfiguration {
	readonly SchemaDefinition?: SchemaDefinition | undefined;
}
export interface Partition {
	readonly AttributeName: string;
}
export interface SchemaDefinition {
	readonly Columns?: Column[] | undefined;
}
export interface TimestampPartition {
	readonly AttributeName: string;
	readonly TimestampFormat?: string | undefined;
}
export interface Activity {
	readonly AddAttributes?: AddAttributes | undefined;
	readonly Channel?: Channel | undefined;
	readonly Datastore?: Datastore | undefined;
	readonly DeviceRegistryEnrich?: DeviceRegistryEnrich | undefined;
	readonly DeviceShadowEnrich?: DeviceShadowEnrich | undefined;
	readonly Filter?: Filter | undefined;
	readonly Lambda?: Lambda | undefined;
	readonly Math?: Math | undefined;
	readonly RemoveAttributes?: RemoveAttributes | undefined;
	readonly SelectAttributes?: SelectAttributes | undefined;
}
export interface AddAttributes {
	readonly Attributes: { [key: string]: string };
	readonly Name: string;
	readonly Next?: string | undefined;
}
export interface Channel {
	readonly ChannelName: string;
	readonly Name: string;
	readonly Next?: string | undefined;
}
export interface Datastore {
	readonly DatastoreName: string;
	readonly Name: string;
}
export interface DeviceRegistryEnrich {
	readonly Attribute: string;
	readonly Name: string;
	readonly Next?: string | undefined;
	readonly RoleArn: string;
	readonly ThingName: string;
}
export interface DeviceShadowEnrich {
	readonly Attribute: string;
	readonly Name: string;
	readonly Next?: string | undefined;
	readonly RoleArn: string;
	readonly ThingName: string;
}
export interface Lambda {
	readonly BatchSize: number;
	readonly LambdaName: string;
	readonly Name: string;
	readonly Next?: string | undefined;
}
export interface Math {
	readonly Attribute: string;
	readonly Math: string;
	readonly Name: string;
	readonly Next?: string | undefined;
}
export interface RemoveAttributes {
	readonly Attributes: string[];
	readonly Name: string;
	readonly Next?: string | undefined;
}
export interface SelectAttributes {
	readonly Attributes: string[];
	readonly Name: string;
	readonly Next?: string | undefined;
}
export default {
	Channel: Channel,
	Dataset: Dataset,
	Datastore: Datastore,
	Pipeline: Pipeline,
};
