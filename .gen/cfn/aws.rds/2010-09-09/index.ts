import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class DBCluster extends CfnResource<DBClusterComponentInputs> implements DBClusterComponentOutputs {
	constructor(entity: ADKEntity, options: DBClusterComponentInputs) {
		super(entity, options.LogicalId, "AWS::RDS::DBCluster", options);
	}
	public readonly DbClusterArn: string;
	public readonly DbClusterResourceId: string;
	public readonly EndpointAddress: string;
	public readonly EndpointPort: string;
	public readonly ReadEndpointAddress: string;
}
export interface DBClusterComponentOutputs {
	readonly DbClusterArn: string;
	readonly DbClusterResourceId: string;
	readonly EndpointAddress: string;
	readonly EndpointPort: string;
	readonly ReadEndpointAddress: string;
}
export interface DBClusterComponentInputs {
	readonly AllocatedStorage?: (number | undefined) | undefined;
	readonly AssociatedRoles?: (DBClusterRole[] | undefined) | undefined;
	readonly AutoMinorVersionUpgrade?: (boolean | undefined) | undefined;
	readonly AvailabilityZones?: (string[] | undefined) | undefined;
	readonly BacktrackWindow?: (number | undefined) | undefined;
	readonly BackupRetentionPeriod?: (number | undefined) | undefined;
	readonly CopyTagsToSnapshot?: (boolean | undefined) | undefined;
	readonly DatabaseName?: (string | undefined) | undefined;
	readonly DBClusterIdentifier?: (string | undefined) | undefined;
	readonly DBClusterInstanceClass?: (string | undefined) | undefined;
	readonly DBClusterParameterGroupName?: (string | undefined) | undefined;
	readonly DBInstanceParameterGroupName?: (string | undefined) | undefined;
	readonly DBSubnetGroupName?: (string | undefined) | undefined;
	readonly DeletionProtection?: (boolean | undefined) | undefined;
	readonly Domain?: (string | undefined) | undefined;
	readonly DomainIAMRoleName?: (string | undefined) | undefined;
	readonly EnableCloudwatchLogsExports?: (string[] | undefined) | undefined;
	readonly EnableHttpEndpoint?: (boolean | undefined) | undefined;
	readonly EnableIAMDatabaseAuthentication?: (boolean | undefined) | undefined;
	readonly Engine?: (string | undefined) | undefined;
	readonly EngineMode?: (string | undefined) | undefined;
	readonly EngineVersion?: (string | undefined) | undefined;
	readonly GlobalClusterIdentifier?: (string | undefined) | undefined;
	readonly Iops?: (number | undefined) | undefined;
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly MasterUsername?: (string | undefined) | undefined;
	readonly MasterUserPassword?: (string | undefined) | undefined;
	readonly MonitoringInterval?: (number | undefined) | undefined;
	readonly MonitoringRoleArn?: (string | undefined) | undefined;
	readonly NetworkType?: (string | undefined) | undefined;
	readonly PerformanceInsightsEnabled?: (boolean | undefined) | undefined;
	readonly PerformanceInsightsKmsKeyId?: (string | undefined) | undefined;
	readonly PerformanceInsightsRetentionPeriod?: (number | undefined) | undefined;
	readonly Port?: (number | undefined) | undefined;
	readonly PreferredBackupWindow?: (string | undefined) | undefined;
	readonly PreferredMaintenanceWindow?: (string | undefined) | undefined;
	readonly PubliclyAccessible?: (boolean | undefined) | undefined;
	readonly ReplicationSourceIdentifier?: (string | undefined) | undefined;
	readonly RestoreType?: (string | undefined) | undefined;
	readonly ScalingConfiguration?: (ScalingConfiguration | undefined) | undefined;
	readonly ServerlessV2ScalingConfiguration?: (ServerlessV2ScalingConfiguration | undefined) | undefined;
	readonly SnapshotIdentifier?: (string | undefined) | undefined;
	readonly SourceDBClusterIdentifier?: (string | undefined) | undefined;
	readonly SourceRegion?: (string | undefined) | undefined;
	readonly StorageEncrypted?: (boolean | undefined) | undefined;
	readonly StorageType?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly UseLatestRestorableTime?: (boolean | undefined) | undefined;
	readonly VpcSecurityGroupIds?: (string[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class DBClusterParameterGroup
	extends CfnResource<DBClusterParameterGroupComponentInputs>
	implements DBClusterParameterGroupComponentOutputs
{
	constructor(entity: ADKEntity, options: DBClusterParameterGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::RDS::DBClusterParameterGroup", options);
	}
}
export interface DBClusterParameterGroupComponentOutputs {}
export interface DBClusterParameterGroupComponentInputs {
	readonly Description: string;
	readonly Family: string;
	readonly Parameters: any;
	readonly DBClusterParameterGroupName?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class DBInstance extends CfnResource<DBInstanceComponentInputs> implements DBInstanceComponentOutputs {
	constructor(entity: ADKEntity, options: DBInstanceComponentInputs) {
		super(entity, options.LogicalId, "AWS::RDS::DBInstance", options);
	}
	public readonly DbInstanceArn: string;
	public readonly DbiResourceId: string;
	public readonly EndpointAddress: string;
	public readonly EndpointHostedZoneId: string;
	public readonly EndpointPort: string;
}
export interface DBInstanceComponentOutputs {
	readonly DbInstanceArn: string;
	readonly DbiResourceId: string;
	readonly EndpointAddress: string;
	readonly EndpointHostedZoneId: string;
	readonly EndpointPort: string;
}
export interface DBInstanceComponentInputs {
	readonly AllocatedStorage?: (string | undefined) | undefined;
	readonly AllowMajorVersionUpgrade?: (boolean | undefined) | undefined;
	readonly AssociatedRoles?: (DBInstanceRole[] | undefined) | undefined;
	readonly AutoMinorVersionUpgrade?: (boolean | undefined) | undefined;
	readonly AvailabilityZone?: (string | undefined) | undefined;
	readonly BackupRetentionPeriod?: (number | undefined) | undefined;
	readonly CACertificateIdentifier?: (string | undefined) | undefined;
	readonly CharacterSetName?: (string | undefined) | undefined;
	readonly CopyTagsToSnapshot?: (boolean | undefined) | undefined;
	readonly CustomIAMInstanceProfile?: (string | undefined) | undefined;
	readonly DBClusterIdentifier?: (string | undefined) | undefined;
	readonly DBInstanceClass?: (string | undefined) | undefined;
	readonly DBInstanceIdentifier?: (string | undefined) | undefined;
	readonly DBName?: (string | undefined) | undefined;
	readonly DBParameterGroupName?: (string | undefined) | undefined;
	readonly DBSecurityGroups?: (string[] | undefined) | undefined;
	readonly DBSnapshotIdentifier?: (string | undefined) | undefined;
	readonly DBSubnetGroupName?: (string | undefined) | undefined;
	readonly DeleteAutomatedBackups?: (boolean | undefined) | undefined;
	readonly DeletionProtection?: (boolean | undefined) | undefined;
	readonly Domain?: (string | undefined) | undefined;
	readonly DomainIAMRoleName?: (string | undefined) | undefined;
	readonly EnableCloudwatchLogsExports?: (string[] | undefined) | undefined;
	readonly EnableIAMDatabaseAuthentication?: (boolean | undefined) | undefined;
	readonly EnablePerformanceInsights?: (boolean | undefined) | undefined;
	readonly Endpoint?: (Endpoint | undefined) | undefined;
	readonly Engine?: (string | undefined) | undefined;
	readonly EngineVersion?: (string | undefined) | undefined;
	readonly Iops?: (number | undefined) | undefined;
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly LicenseModel?: (string | undefined) | undefined;
	readonly MasterUsername?: (string | undefined) | undefined;
	readonly MasterUserPassword?: (string | undefined) | undefined;
	readonly MaxAllocatedStorage?: (number | undefined) | undefined;
	readonly MonitoringInterval?: (number | undefined) | undefined;
	readonly MonitoringRoleArn?: (string | undefined) | undefined;
	readonly MultiAZ?: (boolean | undefined) | undefined;
	readonly NcharCharacterSetName?: (string | undefined) | undefined;
	readonly NetworkType?: (string | undefined) | undefined;
	readonly OptionGroupName?: (string | undefined) | undefined;
	readonly PerformanceInsightsKMSKeyId?: (string | undefined) | undefined;
	readonly PerformanceInsightsRetentionPeriod?: (number | undefined) | undefined;
	readonly Port?: (string | undefined) | undefined;
	readonly PreferredBackupWindow?: (string | undefined) | undefined;
	readonly PreferredMaintenanceWindow?: (string | undefined) | undefined;
	readonly ProcessorFeatures?: (ProcessorFeature[] | undefined) | undefined;
	readonly PromotionTier?: (number | undefined) | undefined;
	readonly PubliclyAccessible?: (boolean | undefined) | undefined;
	readonly ReplicaMode?: (string | undefined) | undefined;
	readonly SourceDBInstanceIdentifier?: (string | undefined) | undefined;
	readonly SourceRegion?: (string | undefined) | undefined;
	readonly StorageEncrypted?: (boolean | undefined) | undefined;
	readonly StorageThroughput?: (number | undefined) | undefined;
	readonly StorageType?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly Timezone?: (string | undefined) | undefined;
	readonly UseDefaultProcessorFeatures?: (boolean | undefined) | undefined;
	readonly VPCSecurityGroups?: (string[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class DBParameterGroup
	extends CfnResource<DBParameterGroupComponentInputs>
	implements DBParameterGroupComponentOutputs
{
	constructor(entity: ADKEntity, options: DBParameterGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::RDS::DBParameterGroup", options);
	}
	public readonly DbParameterGroupName: string;
}
export interface DBParameterGroupComponentOutputs {
	readonly DbParameterGroupName: string;
}
export interface DBParameterGroupComponentInputs {
	readonly Description: string;
	readonly Family: string;
	readonly DBParameterGroupName?: (string | undefined) | undefined;
	readonly Parameters?: (any | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class DBProxy extends CfnResource<DBProxyComponentInputs> implements DBProxyComponentOutputs {
	constructor(entity: ADKEntity, options: DBProxyComponentInputs) {
		super(entity, options.LogicalId, "AWS::RDS::DBProxy", options);
	}
	public readonly DbProxyArn: string;
	public readonly Endpoint: string;
	public readonly VpcId: string;
}
export interface DBProxyComponentOutputs {
	readonly DbProxyArn: string;
	readonly Endpoint: string;
	readonly VpcId: string;
}
export interface DBProxyComponentInputs {
	readonly Auth: AuthFormat[];
	readonly DBProxyName: string;
	readonly EngineFamily: string;
	readonly RoleArn: string;
	readonly VpcSubnetIds: string[];
	readonly DebugLogging?: (boolean | undefined) | undefined;
	readonly IdleClientTimeout?: (number | undefined) | undefined;
	readonly RequireTLS?: (boolean | undefined) | undefined;
	readonly Tags?: (TagFormat[] | undefined) | undefined;
	readonly VpcSecurityGroupIds?: (string[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class DBProxyEndpoint
	extends CfnResource<DBProxyEndpointComponentInputs>
	implements DBProxyEndpointComponentOutputs
{
	constructor(entity: ADKEntity, options: DBProxyEndpointComponentInputs) {
		super(entity, options.LogicalId, "AWS::RDS::DBProxyEndpoint", options);
	}
	public readonly DbProxyEndpointArn: string;
	public readonly Endpoint: string;
	public readonly IsDefault: boolean;
	public readonly VpcId: string;
}
export interface DBProxyEndpointComponentOutputs {
	readonly DbProxyEndpointArn: string;
	readonly Endpoint: string;
	readonly IsDefault: boolean;
	readonly VpcId: string;
}
export interface DBProxyEndpointComponentInputs {
	readonly DBProxyEndpointName: string;
	readonly DBProxyName: string;
	readonly VpcSubnetIds: string[];
	readonly Tags?: (TagFormat[] | undefined) | undefined;
	readonly TargetRole?: (string | undefined) | undefined;
	readonly VpcSecurityGroupIds?: (string[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class DBProxyTargetGroup
	extends CfnResource<DBProxyTargetGroupComponentInputs>
	implements DBProxyTargetGroupComponentOutputs
{
	constructor(entity: ADKEntity, options: DBProxyTargetGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::RDS::DBProxyTargetGroup", options);
	}
	public readonly TargetGroupArn: string;
}
export interface DBProxyTargetGroupComponentOutputs {
	readonly TargetGroupArn: string;
}
export interface DBProxyTargetGroupComponentInputs {
	readonly DBProxyName: string;
	readonly TargetGroupName: string;
	readonly ConnectionPoolConfigurationInfo?: (ConnectionPoolConfigurationInfoFormat | undefined) | undefined;
	readonly DBClusterIdentifiers?: (string[] | undefined) | undefined;
	readonly DBInstanceIdentifiers?: (string[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class DBSecurityGroup
	extends CfnResource<DBSecurityGroupComponentInputs>
	implements DBSecurityGroupComponentOutputs
{
	constructor(entity: ADKEntity, options: DBSecurityGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::RDS::DBSecurityGroup", options);
	}
}
export interface DBSecurityGroupComponentOutputs {}
export interface DBSecurityGroupComponentInputs {
	readonly DBSecurityGroupIngress: Ingress[];
	readonly GroupDescription: string;
	readonly EC2VpcId?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class DBSecurityGroupIngress
	extends CfnResource<DBSecurityGroupIngressComponentInputs>
	implements DBSecurityGroupIngressComponentOutputs
{
	constructor(entity: ADKEntity, options: DBSecurityGroupIngressComponentInputs) {
		super(entity, options.LogicalId, "AWS::RDS::DBSecurityGroupIngress", options);
	}
}
export interface DBSecurityGroupIngressComponentOutputs {}
export interface DBSecurityGroupIngressComponentInputs {
	readonly DBSecurityGroupName: string;
	readonly CIDRIP?: (string | undefined) | undefined;
	readonly EC2SecurityGroupId?: (string | undefined) | undefined;
	readonly EC2SecurityGroupName?: (string | undefined) | undefined;
	readonly EC2SecurityGroupOwnerId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class DBSubnetGroup extends CfnResource<DBSubnetGroupComponentInputs> implements DBSubnetGroupComponentOutputs {
	constructor(entity: ADKEntity, options: DBSubnetGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::RDS::DBSubnetGroup", options);
	}
}
export interface DBSubnetGroupComponentOutputs {}
export interface DBSubnetGroupComponentInputs {
	readonly DBSubnetGroupDescription: string;
	readonly SubnetIds: string[];
	readonly DBSubnetGroupName?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class EventSubscription
	extends CfnResource<EventSubscriptionComponentInputs>
	implements EventSubscriptionComponentOutputs
{
	constructor(entity: ADKEntity, options: EventSubscriptionComponentInputs) {
		super(entity, options.LogicalId, "AWS::RDS::EventSubscription", options);
	}
}
export interface EventSubscriptionComponentOutputs {}
export interface EventSubscriptionComponentInputs {
	readonly SnsTopicArn: string;
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly EventCategories?: (string[] | undefined) | undefined;
	readonly SourceIds?: (string[] | undefined) | undefined;
	readonly SourceType?: (string | undefined) | undefined;
	readonly SubscriptionName?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class GlobalCluster extends CfnResource<GlobalClusterComponentInputs> implements GlobalClusterComponentOutputs {
	constructor(entity: ADKEntity, options: GlobalClusterComponentInputs) {
		super(entity, options.LogicalId, "AWS::RDS::GlobalCluster", options);
	}
}
export interface GlobalClusterComponentOutputs {}
export interface GlobalClusterComponentInputs {
	readonly DeletionProtection?: (boolean | undefined) | undefined;
	readonly Engine?: (string | undefined) | undefined;
	readonly EngineVersion?: (string | undefined) | undefined;
	readonly GlobalClusterIdentifier?: (string | undefined) | undefined;
	readonly SourceDBClusterIdentifier?: (string | undefined) | undefined;
	readonly StorageEncrypted?: (boolean | undefined) | undefined;
	readonly LogicalId: string;
}
export class OptionGroup extends CfnResource<OptionGroupComponentInputs> implements OptionGroupComponentOutputs {
	constructor(entity: ADKEntity, options: OptionGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::RDS::OptionGroup", options);
	}
}
export interface OptionGroupComponentOutputs {}
export interface OptionGroupComponentInputs {
	readonly EngineName: string;
	readonly MajorEngineVersion: string;
	readonly OptionGroupDescription: string;
	readonly OptionConfigurations?: (OptionConfiguration[] | undefined) | undefined;
	readonly OptionGroupName?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface DBClusterRole {
	readonly FeatureName?: (string | undefined) | undefined;
	readonly RoleArn: string;
}
export interface Endpoint {
	readonly Address?: (string | undefined) | undefined;
	readonly Port?: (string | undefined) | undefined;
}
export interface ReadEndpoint {
	readonly Address?: (string | undefined) | undefined;
}
export interface ScalingConfiguration {
	readonly AutoPause?: (boolean | undefined) | undefined;
	readonly MaxCapacity?: (number | undefined) | undefined;
	readonly MinCapacity?: (number | undefined) | undefined;
	readonly SecondsUntilAutoPause?: (number | undefined) | undefined;
	readonly TimeoutAction?: (string | undefined) | undefined;
}
export interface ServerlessV2ScalingConfiguration {
	readonly MaxCapacity?: (number | undefined) | undefined;
	readonly MinCapacity?: (number | undefined) | undefined;
}
export interface DBInstanceRole {
	readonly FeatureName: string;
	readonly RoleArn: string;
}
export interface ProcessorFeature {
	readonly Name?: (string | undefined) | undefined;
	readonly Value?: (string | undefined) | undefined;
}
export interface AuthFormat {
	readonly AuthScheme?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly IAMAuth?: (string | undefined) | undefined;
	readonly SecretArn?: (string | undefined) | undefined;
	readonly UserName?: (string | undefined) | undefined;
}
export interface TagFormat {
	readonly Key?: (string | undefined) | undefined;
	readonly Value?: (string | undefined) | undefined;
}
export interface ConnectionPoolConfigurationInfoFormat {
	readonly ConnectionBorrowTimeout?: (number | undefined) | undefined;
	readonly InitQuery?: (string | undefined) | undefined;
	readonly MaxConnectionsPercent?: (number | undefined) | undefined;
	readonly MaxIdleConnectionsPercent?: (number | undefined) | undefined;
	readonly SessionPinningFilters?: (string[] | undefined) | undefined;
}
export interface Ingress {
	readonly CIDRIP?: (string | undefined) | undefined;
	readonly EC2SecurityGroupId?: (string | undefined) | undefined;
	readonly EC2SecurityGroupName?: (string | undefined) | undefined;
	readonly EC2SecurityGroupOwnerId?: (string | undefined) | undefined;
}
export interface OptionConfiguration {
	readonly DBSecurityGroupMemberships?: (string[] | undefined) | undefined;
	readonly OptionName: string;
	readonly OptionSettings?: (OptionSetting[] | undefined) | undefined;
	readonly OptionVersion?: (string | undefined) | undefined;
	readonly Port?: (number | undefined) | undefined;
	readonly VpcSecurityGroupMemberships?: (string[] | undefined) | undefined;
}
export interface OptionSetting {
	readonly Name?: (string | undefined) | undefined;
	readonly Value?: (string | undefined) | undefined;
}
export default {
	DBCluster: DBCluster,
	DBClusterParameterGroup: DBClusterParameterGroup,
	DBInstance: DBInstance,
	DBParameterGroup: DBParameterGroup,
	DBProxy: DBProxy,
	DBProxyEndpoint: DBProxyEndpoint,
	DBProxyTargetGroup: DBProxyTargetGroup,
	DBSecurityGroup: DBSecurityGroup,
	DBSecurityGroupIngress: DBSecurityGroupIngress,
	DBSubnetGroup: DBSubnetGroup,
	EventSubscription: EventSubscription,
	GlobalCluster: GlobalCluster,
	OptionGroup: OptionGroup,
};
