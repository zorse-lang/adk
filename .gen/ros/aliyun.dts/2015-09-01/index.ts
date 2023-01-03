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
	readonly DestinationEndpoint?: (DestinationEndpoint | undefined) | undefined;
	readonly MigrationJobName?: (string | undefined) | undefined;
	readonly MigrationMode?: (MigrationMode | undefined) | undefined;
	readonly MigrationObject?: (MigrationObject[] | undefined) | undefined;
	readonly SourceEndpoint?: (SourceEndpoint | undefined) | undefined;
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
	readonly Configuration?: (Configuration | undefined) | undefined;
	readonly PayType?: (string | undefined) | undefined;
	readonly Period?: (string | undefined) | undefined;
	readonly SourceEndpointInstanceType?: (string | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly UsedTime?: (number | undefined) | undefined;
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
	readonly DataInitialization?: (boolean | undefined) | undefined;
	readonly NetworkType?: (string | undefined) | undefined;
	readonly PayType?: (string | undefined) | undefined;
	readonly Period?: (string | undefined) | undefined;
	readonly StructureInitialization?: (boolean | undefined) | undefined;
	readonly SynchronizationObjects?: (SynchronizationObjects[] | undefined) | undefined;
	readonly Topology?: (string | undefined) | undefined;
	readonly UsedTime?: (number | undefined) | undefined;
	readonly LogicalId: string;
}
export interface ColumnExcludes {
	readonly ColumnName?: (string | undefined) | undefined;
}
export interface ColumnIncludes {
	readonly NewColumnName?: (string | undefined) | undefined;
	readonly ColumnName?: (string | undefined) | undefined;
}
export interface DestinationEndpoint {
	readonly Role?: (string | undefined) | undefined;
	readonly UserName: string;
	readonly InstanceID?: (string | undefined) | undefined;
	readonly IP?: (string | undefined) | undefined;
	readonly Port?: (string | undefined) | undefined;
	readonly DatabaseName?: (string | undefined) | undefined;
	readonly Region: string;
	readonly InstanceType: string;
	readonly EngineName?: (string | undefined) | undefined;
	readonly Password: string;
}
export interface MigrationMode {
	readonly StructureIntialization?: (boolean | undefined) | undefined;
	readonly DataSynchronization?: (boolean | undefined) | undefined;
	readonly DataIntialization?: (boolean | undefined) | undefined;
}
export interface MigrationObject {
	readonly TableIncludes?: (TableIncludes[] | undefined) | undefined;
	readonly DBName?: (string | undefined) | undefined;
	readonly TableExcludes?: (TableExcludes[] | undefined) | undefined;
	readonly SchemaName?: (string | undefined) | undefined;
	readonly NewSchemaName?: (string | undefined) | undefined;
	readonly NewDBName?: (string | undefined) | undefined;
}
export interface SourceEndpoint {
	readonly Role?: (string | undefined) | undefined;
	readonly OracleSID?: (string | undefined) | undefined;
	readonly UserName: string;
	readonly OwnerID?: (string | undefined) | undefined;
	readonly InstanceID?: (string | undefined) | undefined;
	readonly IP?: (string | undefined) | undefined;
	readonly Port?: (string | undefined) | undefined;
	readonly DatabaseName?: (string | undefined) | undefined;
	readonly Region: string;
	readonly InstanceType: string;
	readonly EngineName?: (string | undefined) | undefined;
	readonly Password: string;
}
export interface TableExcludes {
	readonly TableName?: (string | undefined) | undefined;
}
export interface TableIncludes {
	readonly TableName?: (string | undefined) | undefined;
	readonly FilterCondition?: (string | undefined) | undefined;
	readonly ColumnExcludes?: (ColumnExcludes[] | undefined) | undefined;
	readonly ColumnIncludes?: (ColumnIncludes[] | undefined) | undefined;
	readonly NewTableName?: (string | undefined) | undefined;
}
export interface Configuration {
	readonly SubscriptionDataType: SubscriptionDataType;
	readonly SubscriptionInstanceName?: (string | undefined) | undefined;
	readonly SubscriptionInstance?: (SubscriptionInstance | undefined) | undefined;
	readonly SourceEndpoint: SourceEndpoint;
	readonly DbList?: ({ [key: string]: any } | undefined) | undefined;
	readonly SubscriptionInstanceNetworkType?: (string | undefined) | undefined;
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
	readonly Value?: (string | undefined) | undefined;
	readonly Key: string;
}
export interface SynchronizationObjects {
	readonly TableIncludes?: (TableIncludes[] | undefined) | undefined;
	readonly DBName?: (string | undefined) | undefined;
	readonly TableExcludes?: (TableExcludes[] | undefined) | undefined;
	readonly SchemaName?: (string | undefined) | undefined;
	readonly NewSchemaName?: (string | undefined) | undefined;
	readonly NewDBName?: (string | undefined) | undefined;
}
export default {
	ConsumerGroup: ConsumerGroup,
	MigrationJob: MigrationJob,
	SubscriptionInstance: SubscriptionInstance,
	SynchronizationJob: SynchronizationJob,
};
