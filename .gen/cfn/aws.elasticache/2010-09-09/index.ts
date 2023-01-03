import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class CacheCluster extends CfnResource<CacheClusterComponentInputs> implements CacheClusterComponentOutputs {
	constructor(entity: ADKEntity, options: CacheClusterComponentInputs) {
		super(entity, options.LogicalId, "AWS::ElastiCache::CacheCluster", options);
	}
	public readonly ConfigurationEndpointAddress: string;
	public readonly ConfigurationEndpointPort: string;
	public readonly RedisEndpointAddress: string;
	public readonly RedisEndpointPort: string;
}
export interface CacheClusterComponentOutputs {
	readonly ConfigurationEndpointAddress: string;
	readonly ConfigurationEndpointPort: string;
	readonly RedisEndpointAddress: string;
	readonly RedisEndpointPort: string;
}
export interface CacheClusterComponentInputs {
	readonly CacheNodeType: string;
	readonly Engine: string;
	readonly NumCacheNodes: number;
	readonly AutoMinorVersionUpgrade?: (boolean | undefined) | undefined;
	readonly AZMode?: (string | undefined) | undefined;
	readonly CacheParameterGroupName?: (string | undefined) | undefined;
	readonly CacheSecurityGroupNames?: (string[] | undefined) | undefined;
	readonly CacheSubnetGroupName?: (string | undefined) | undefined;
	readonly ClusterName?: (string | undefined) | undefined;
	readonly EngineVersion?: (string | undefined) | undefined;
	readonly IpDiscovery?: (string | undefined) | undefined;
	readonly LogDeliveryConfigurations?: (LogDeliveryConfigurationRequest[] | undefined) | undefined;
	readonly NetworkType?: (string | undefined) | undefined;
	readonly NotificationTopicArn?: (string | undefined) | undefined;
	readonly Port?: (number | undefined) | undefined;
	readonly PreferredAvailabilityZone?: (string | undefined) | undefined;
	readonly PreferredAvailabilityZones?: (string[] | undefined) | undefined;
	readonly PreferredMaintenanceWindow?: (string | undefined) | undefined;
	readonly SnapshotArns?: (string[] | undefined) | undefined;
	readonly SnapshotName?: (string | undefined) | undefined;
	readonly SnapshotRetentionLimit?: (number | undefined) | undefined;
	readonly SnapshotWindow?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly TransitEncryptionEnabled?: (boolean | undefined) | undefined;
	readonly VpcSecurityGroupIds?: (string[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class GlobalReplicationGroup
	extends CfnResource<GlobalReplicationGroupComponentInputs>
	implements GlobalReplicationGroupComponentOutputs
{
	constructor(entity: ADKEntity, options: GlobalReplicationGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::ElastiCache::GlobalReplicationGroup", options);
	}
	public readonly GlobalReplicationGroupId: string;
	public readonly Status: string;
}
export interface GlobalReplicationGroupComponentOutputs {
	readonly GlobalReplicationGroupId: string;
	readonly Status: string;
}
export interface GlobalReplicationGroupComponentInputs {
	readonly Members: GlobalReplicationGroupMember[];
	readonly AutomaticFailoverEnabled?: (boolean | undefined) | undefined;
	readonly CacheNodeType?: (string | undefined) | undefined;
	readonly CacheParameterGroupName?: (string | undefined) | undefined;
	readonly EngineVersion?: (string | undefined) | undefined;
	readonly GlobalNodeGroupCount?: (number | undefined) | undefined;
	readonly GlobalReplicationGroupDescription?: (string | undefined) | undefined;
	readonly GlobalReplicationGroupIdSuffix?: (string | undefined) | undefined;
	readonly RegionalConfigurations?: (RegionalConfiguration[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class ParameterGroup extends CfnResource<ParameterGroupComponentInputs> implements ParameterGroupComponentOutputs {
	constructor(entity: ADKEntity, options: ParameterGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::ElastiCache::ParameterGroup", options);
	}
}
export interface ParameterGroupComponentOutputs {}
export interface ParameterGroupComponentInputs {
	readonly CacheParameterGroupFamily: string;
	readonly Description: string;
	readonly Properties?: ({ [key: string]: string } | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class ReplicationGroup
	extends CfnResource<ReplicationGroupComponentInputs>
	implements ReplicationGroupComponentOutputs
{
	constructor(entity: ADKEntity, options: ReplicationGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::ElastiCache::ReplicationGroup", options);
	}
	public readonly ConfigurationEndPointAddress: string;
	public readonly ConfigurationEndPointPort: string;
	public readonly PrimaryEndPointAddress: string;
	public readonly PrimaryEndPointPort: string;
	public readonly ReadEndPointAddresses: string;
	public readonly ReadEndPointAddressesList: string[];
	public readonly ReadEndPointPorts: string;
	public readonly ReadEndPointPortsList: string[];
	public readonly ReaderEndPointAddress: string;
	public readonly ReaderEndPointPort: string;
}
export interface ReplicationGroupComponentOutputs {
	readonly ConfigurationEndPointAddress: string;
	readonly ConfigurationEndPointPort: string;
	readonly PrimaryEndPointAddress: string;
	readonly PrimaryEndPointPort: string;
	readonly ReadEndPointAddresses: string;
	readonly ReadEndPointAddressesList: string[];
	readonly ReadEndPointPorts: string;
	readonly ReadEndPointPortsList: string[];
	readonly ReaderEndPointAddress: string;
	readonly ReaderEndPointPort: string;
}
export interface ReplicationGroupComponentInputs {
	readonly ReplicationGroupDescription: string;
	readonly AtRestEncryptionEnabled?: (boolean | undefined) | undefined;
	readonly AuthToken?: (string | undefined) | undefined;
	readonly AutomaticFailoverEnabled?: (boolean | undefined) | undefined;
	readonly AutoMinorVersionUpgrade?: (boolean | undefined) | undefined;
	readonly CacheNodeType?: (string | undefined) | undefined;
	readonly CacheParameterGroupName?: (string | undefined) | undefined;
	readonly CacheSecurityGroupNames?: (string[] | undefined) | undefined;
	readonly CacheSubnetGroupName?: (string | undefined) | undefined;
	readonly DataTieringEnabled?: (boolean | undefined) | undefined;
	readonly Engine?: (string | undefined) | undefined;
	readonly EngineVersion?: (string | undefined) | undefined;
	readonly GlobalReplicationGroupId?: (string | undefined) | undefined;
	readonly IpDiscovery?: (string | undefined) | undefined;
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly LogDeliveryConfigurations?: (LogDeliveryConfigurationRequest[] | undefined) | undefined;
	readonly MultiAZEnabled?: (boolean | undefined) | undefined;
	readonly NetworkType?: (string | undefined) | undefined;
	readonly NodeGroupConfiguration?: (NodeGroupConfiguration[] | undefined) | undefined;
	readonly NotificationTopicArn?: (string | undefined) | undefined;
	readonly NumCacheClusters?: (number | undefined) | undefined;
	readonly NumNodeGroups?: (number | undefined) | undefined;
	readonly Port?: (number | undefined) | undefined;
	readonly PreferredCacheClusterAZs?: (string[] | undefined) | undefined;
	readonly PreferredMaintenanceWindow?: (string | undefined) | undefined;
	readonly PrimaryClusterId?: (string | undefined) | undefined;
	readonly ReplicasPerNodeGroup?: (number | undefined) | undefined;
	readonly ReplicationGroupId?: (string | undefined) | undefined;
	readonly SecurityGroupIds?: (string[] | undefined) | undefined;
	readonly SnapshotArns?: (string[] | undefined) | undefined;
	readonly SnapshotName?: (string | undefined) | undefined;
	readonly SnapshotRetentionLimit?: (number | undefined) | undefined;
	readonly SnapshottingClusterId?: (string | undefined) | undefined;
	readonly SnapshotWindow?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly TransitEncryptionEnabled?: (boolean | undefined) | undefined;
	readonly UserGroupIds?: (string[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class SecurityGroup extends CfnResource<SecurityGroupComponentInputs> implements SecurityGroupComponentOutputs {
	constructor(entity: ADKEntity, options: SecurityGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::ElastiCache::SecurityGroup", options);
	}
}
export interface SecurityGroupComponentOutputs {}
export interface SecurityGroupComponentInputs {
	readonly Description: string;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class SecurityGroupIngress
	extends CfnResource<SecurityGroupIngressComponentInputs>
	implements SecurityGroupIngressComponentOutputs
{
	constructor(entity: ADKEntity, options: SecurityGroupIngressComponentInputs) {
		super(entity, options.LogicalId, "AWS::ElastiCache::SecurityGroupIngress", options);
	}
}
export interface SecurityGroupIngressComponentOutputs {}
export interface SecurityGroupIngressComponentInputs {
	readonly CacheSecurityGroupName: string;
	readonly EC2SecurityGroupName: string;
	readonly EC2SecurityGroupOwnerId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class SubnetGroup extends CfnResource<SubnetGroupComponentInputs> implements SubnetGroupComponentOutputs {
	constructor(entity: ADKEntity, options: SubnetGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::ElastiCache::SubnetGroup", options);
	}
}
export interface SubnetGroupComponentOutputs {}
export interface SubnetGroupComponentInputs {
	readonly Description: string;
	readonly SubnetIds: string[];
	readonly CacheSubnetGroupName?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class User extends CfnResource<UserComponentInputs> implements UserComponentOutputs {
	constructor(entity: ADKEntity, options: UserComponentInputs) {
		super(entity, options.LogicalId, "AWS::ElastiCache::User", options);
	}
	public readonly Arn: string;
	public readonly Status: string;
}
export interface UserComponentOutputs {
	readonly Arn: string;
	readonly Status: string;
}
export interface UserComponentInputs {
	readonly Engine: string;
	readonly UserId: string;
	readonly UserName: string;
	readonly AccessString?: (string | undefined) | undefined;
	readonly AuthenticationMode?: (AuthenticationMode | undefined) | undefined;
	readonly NoPasswordRequired?: (boolean | undefined) | undefined;
	readonly Passwords?: (string[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class UserGroup extends CfnResource<UserGroupComponentInputs> implements UserGroupComponentOutputs {
	constructor(entity: ADKEntity, options: UserGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::ElastiCache::UserGroup", options);
	}
	public readonly Arn: string;
	public readonly Status: string;
}
export interface UserGroupComponentOutputs {
	readonly Arn: string;
	readonly Status: string;
}
export interface UserGroupComponentInputs {
	readonly Engine: string;
	readonly UserGroupId: string;
	readonly UserIds?: (string[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface CloudWatchLogsDestinationDetails {
	readonly LogGroup: string;
}
export interface DestinationDetails {
	readonly CloudWatchLogsDetails?: (CloudWatchLogsDestinationDetails | undefined) | undefined;
	readonly KinesisFirehoseDetails?: (KinesisFirehoseDestinationDetails | undefined) | undefined;
}
export interface KinesisFirehoseDestinationDetails {
	readonly DeliveryStream: string;
}
export interface LogDeliveryConfigurationRequest {
	readonly DestinationDetails: DestinationDetails;
	readonly DestinationType: string;
	readonly LogFormat: string;
	readonly LogType: string;
}
export interface GlobalReplicationGroupMember {
	readonly ReplicationGroupId?: (string | undefined) | undefined;
	readonly ReplicationGroupRegion?: (string | undefined) | undefined;
	readonly Role?: (string | undefined) | undefined;
}
export interface RegionalConfiguration {
	readonly ReplicationGroupId?: (string | undefined) | undefined;
	readonly ReplicationGroupRegion?: (string | undefined) | undefined;
	readonly ReshardingConfigurations?: (ReshardingConfiguration[] | undefined) | undefined;
}
export interface ReshardingConfiguration {
	readonly NodeGroupId?: (string | undefined) | undefined;
	readonly PreferredAvailabilityZones?: (string[] | undefined) | undefined;
}
export interface NodeGroupConfiguration {
	readonly NodeGroupId?: (string | undefined) | undefined;
	readonly PrimaryAvailabilityZone?: (string | undefined) | undefined;
	readonly ReplicaAvailabilityZones?: (string[] | undefined) | undefined;
	readonly ReplicaCount?: (number | undefined) | undefined;
	readonly Slots?: (string | undefined) | undefined;
}
export interface AuthenticationMode {
	readonly Passwords?: (string[] | undefined) | undefined;
	readonly Type: string;
}
export default {
	CacheCluster: CacheCluster,
	GlobalReplicationGroup: GlobalReplicationGroup,
	ParameterGroup: ParameterGroup,
	ReplicationGroup: ReplicationGroup,
	SecurityGroup: SecurityGroup,
	SecurityGroupIngress: SecurityGroupIngress,
	SubnetGroup: SubnetGroup,
	User: User,
	UserGroup: UserGroup,
};
