import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class ConsumerGroup extends RosResource<ConsumerGroupComponentInputs> implements ConsumerGroupComponentOutputs {
	constructor(entity: ADKEntity, options: ConsumerGroupComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::DTS::ConsumerGroup", options);
	}
	public readonly ConsumerGroupId: any;
}
export interface ConsumerGroupComponentOutputs {
	readonly ConsumerGroupId: any;
}
export interface ConsumerGroupComponentInputs {
	readonly ConsumerGroupName: any | string;
	readonly ConsumerGroupPassword: string;
	readonly ConsumerGroupUserName: string;
	readonly SubscriptionInstanceId: any | string;
	readonly LogicalId: string;
}
export class MigrationJob extends RosResource<MigrationJobComponentInputs> implements MigrationJobComponentOutputs {
	constructor(entity: ADKEntity, options: MigrationJobComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::DTS::MigrationJob", options);
	}
	public readonly MigrationJobId: any;
}
export interface MigrationJobComponentOutputs {
	readonly MigrationJobId: any;
}
export interface MigrationJobComponentInputs {
	readonly MigrationJobClass: string;
	readonly DestinationEndpoint?: DestinationEndpoint | undefined;
	readonly MigrationJobName?: string | undefined;
	readonly MigrationMode?: MigrationMode | undefined;
	readonly MigrationObject?: MigrationObject[] | undefined;
	readonly SourceEndpoint?: SourceEndpoint | undefined;
	readonly LogicalId: string;
}
export class SubscriptionInstance
	extends RosResource<SubscriptionInstanceComponentInputs>
	implements SubscriptionInstanceComponentOutputs
{
	constructor(entity: ADKEntity, options: SubscriptionInstanceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::DTS::SubscriptionInstance", options);
	}
	public readonly PublicHost: any;
	public readonly PrivateHost: any;
	public readonly SubscribeTopic: any;
	public readonly SubscriptionInstanceId: any;
	public readonly VpcHost: any;
}
export interface SubscriptionInstanceComponentOutputs {
	readonly PublicHost: any;
	readonly PrivateHost: any;
	readonly SubscribeTopic: any;
	readonly SubscriptionInstanceId: any;
	readonly VpcHost: any;
}
export interface SubscriptionInstanceComponentInputs {
	readonly Configuration?: Configuration | undefined;
	readonly PayType?: string | undefined;
	readonly Period?: string | undefined;
	readonly SourceEndpointInstanceType?: string | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly UsedTime?: number | undefined;
	readonly LogicalId: string;
}
export class SynchronizationJob
	extends RosResource<SynchronizationJobComponentInputs>
	implements SynchronizationJobComponentOutputs
{
	constructor(entity: ADKEntity, options: SynchronizationJobComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::DTS::SynchronizationJob", options);
	}
	public readonly SynchronizationJobId: any;
}
export interface SynchronizationJobComponentOutputs {
	readonly SynchronizationJobId: any;
}
export interface SynchronizationJobComponentInputs {
	readonly DestinationEndpoint: DestinationEndpoint;
	readonly DestRegion: string;
	readonly SourceEndpoint: SourceEndpoint;
	readonly SourceRegion: string;
	readonly SynchronizationJobClass: string;
	readonly DataInitialization?: boolean | undefined;
	readonly NetworkType?: string | undefined;
	readonly PayType?: string | undefined;
	readonly Period?: string | undefined;
	readonly StructureInitialization?: boolean | undefined;
	readonly SynchronizationObjects?: SynchronizationObjects[] | undefined;
	readonly Topology?: string | undefined;
	readonly UsedTime?: number | undefined;
	readonly LogicalId: string;
}
export interface ColumnExcludes {
	readonly ColumnName?: string | undefined;
}
export interface ColumnIncludes {
	readonly NewColumnName?: string | undefined;
	readonly ColumnName?: string | undefined;
}
export interface DestinationEndpoint {
	readonly Role?: string | undefined;
	readonly UserName: string;
	readonly InstanceID?: string | undefined;
	readonly IP?: string | undefined;
	readonly Port?: string | undefined;
	readonly DatabaseName?: string | undefined;
	readonly Region: string;
	readonly InstanceType: string;
	readonly EngineName?: string | undefined;
	readonly Password: string;
}
export interface MigrationMode {
	readonly StructureIntialization?: boolean | undefined;
	readonly DataSynchronization?: boolean | undefined;
	readonly DataIntialization?: boolean | undefined;
}
export interface MigrationObject {
	readonly TableIncludes?: TableIncludes[] | undefined;
	readonly DBName?: string | undefined;
	readonly TableExcludes?: TableExcludes[] | undefined;
	readonly SchemaName?: string | undefined;
	readonly NewSchemaName?: string | undefined;
	readonly NewDBName?: string | undefined;
}
export interface SourceEndpoint {
	readonly Role?: string | undefined;
	readonly OracleSID?: string | undefined;
	readonly UserName: string;
	readonly OwnerID?: string | undefined;
	readonly InstanceID?: string | undefined;
	readonly IP?: string | undefined;
	readonly Port?: string | undefined;
	readonly DatabaseName?: string | undefined;
	readonly Region: string;
	readonly InstanceType: string;
	readonly EngineName?: string | undefined;
	readonly Password: string;
}
export interface TableExcludes {
	readonly TableName?: string | undefined;
}
export interface TableIncludes {
	readonly TableName?: string | undefined;
	readonly FilterCondition?: string | undefined;
	readonly ColumnExcludes?: ColumnExcludes[] | undefined;
	readonly ColumnIncludes?: ColumnIncludes[] | undefined;
	readonly NewTableName?: string | undefined;
}
export interface Configuration {
	readonly SubscriptionDataType: SubscriptionDataType;
	readonly SubscriptionInstanceName?: string | undefined;
	readonly SubscriptionInstance?: SubscriptionInstance | undefined;
	readonly SourceEndpoint: SourceEndpoint;
	readonly DbList?: { [key: string]: any } | undefined;
	readonly SubscriptionInstanceNetworkType?: string | undefined;
}
export interface SubscriptionDataType {
	readonly DML: boolean;
	readonly DDL: boolean;
}
export interface SubscriptionInstance {
	readonly VPCId: string;
	readonly VSwitchId: string;
}
export interface Tags {
	readonly Value?: string | undefined;
	readonly Key: string;
}
export interface SynchronizationObjects {
	readonly TableIncludes?: TableIncludes[] | undefined;
	readonly DBName?: string | undefined;
	readonly TableExcludes?: TableExcludes[] | undefined;
	readonly SchemaName?: string | undefined;
	readonly NewSchemaName?: string | undefined;
	readonly NewDBName?: string | undefined;
}
export default {
	ConsumerGroup: ConsumerGroup,
	MigrationJob: MigrationJob,
	SubscriptionInstance: SubscriptionInstance,
	SynchronizationJob: SynchronizationJob,
};
