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
	readonly AllocatedStorage?: number | undefined;
	readonly AssociatedRoles?: DBClusterRole[] | undefined;
	readonly AutoMinorVersionUpgrade?: boolean | undefined;
	readonly AvailabilityZones?: string[] | undefined;
	readonly BacktrackWindow?: number | undefined;
	readonly BackupRetentionPeriod?: number | undefined;
	readonly CopyTagsToSnapshot?: boolean | undefined;
	readonly DatabaseName?: string | undefined;
	readonly DBClusterIdentifier?: string | undefined;
	readonly DBClusterInstanceClass?: string | undefined;
	readonly DBClusterParameterGroupName?: string | undefined;
	readonly DBInstanceParameterGroupName?: string | undefined;
	readonly DBSubnetGroupName?: string | undefined;
	readonly DeletionProtection?: boolean | undefined;
	readonly Domain?: string | undefined;
	readonly DomainIAMRoleName?: string | undefined;
	readonly EnableCloudwatchLogsExports?: string[] | undefined;
	readonly EnableHttpEndpoint?: boolean | undefined;
	readonly EnableIAMDatabaseAuthentication?: boolean | undefined;
	readonly Engine?: string | undefined;
	readonly EngineMode?: string | undefined;
	readonly EngineVersion?: string | undefined;
	readonly GlobalClusterIdentifier?: string | undefined;
	readonly Iops?: number | undefined;
	readonly KmsKeyId?: string | undefined;
	readonly MasterUsername?: string | undefined;
	readonly MasterUserPassword?: string | undefined;
	readonly MonitoringInterval?: number | undefined;
	readonly MonitoringRoleArn?: string | undefined;
	readonly NetworkType?: string | undefined;
	readonly PerformanceInsightsEnabled?: boolean | undefined;
	readonly PerformanceInsightsKmsKeyId?: string | undefined;
	readonly PerformanceInsightsRetentionPeriod?: number | undefined;
	readonly Port?: number | undefined;
	readonly PreferredBackupWindow?: string | undefined;
	readonly PreferredMaintenanceWindow?: string | undefined;
	readonly PubliclyAccessible?: boolean | undefined;
	readonly ReplicationSourceIdentifier?: string | undefined;
	readonly RestoreType?: string | undefined;
	readonly ScalingConfiguration?: ScalingConfiguration | undefined;
	readonly ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration | undefined;
	readonly SnapshotIdentifier?: string | undefined;
	readonly SourceDBClusterIdentifier?: string | undefined;
	readonly SourceRegion?: string | undefined;
	readonly StorageEncrypted?: boolean | undefined;
	readonly StorageType?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly UseLatestRestorableTime?: boolean | undefined;
	readonly VpcSecurityGroupIds?: string[] | undefined;
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
	readonly DBClusterParameterGroupName?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly AllocatedStorage?: string | undefined;
	readonly AllowMajorVersionUpgrade?: boolean | undefined;
	readonly AssociatedRoles?: DBInstanceRole[] | undefined;
	readonly AutoMinorVersionUpgrade?: boolean | undefined;
	readonly AvailabilityZone?: string | undefined;
	readonly BackupRetentionPeriod?: number | undefined;
	readonly CACertificateIdentifier?: string | undefined;
	readonly CharacterSetName?: string | undefined;
	readonly CopyTagsToSnapshot?: boolean | undefined;
	readonly CustomIAMInstanceProfile?: string | undefined;
	readonly DBClusterIdentifier?: string | undefined;
	readonly DBInstanceClass?: string | undefined;
	readonly DBInstanceIdentifier?: string | undefined;
	readonly DBName?: string | undefined;
	readonly DBParameterGroupName?: string | undefined;
	readonly DBSecurityGroups?: string[] | undefined;
	readonly DBSnapshotIdentifier?: string | undefined;
	readonly DBSubnetGroupName?: string | undefined;
	readonly DeleteAutomatedBackups?: boolean | undefined;
	readonly DeletionProtection?: boolean | undefined;
	readonly Domain?: string | undefined;
	readonly DomainIAMRoleName?: string | undefined;
	readonly EnableCloudwatchLogsExports?: string[] | undefined;
	readonly EnableIAMDatabaseAuthentication?: boolean | undefined;
	readonly EnablePerformanceInsights?: boolean | undefined;
	readonly Endpoint?: Endpoint | undefined;
	readonly Engine?: string | undefined;
	readonly EngineVersion?: string | undefined;
	readonly Iops?: number | undefined;
	readonly KmsKeyId?: string | undefined;
	readonly LicenseModel?: string | undefined;
	readonly MasterUsername?: string | undefined;
	readonly MasterUserPassword?: string | undefined;
	readonly MaxAllocatedStorage?: number | undefined;
	readonly MonitoringInterval?: number | undefined;
	readonly MonitoringRoleArn?: string | undefined;
	readonly MultiAZ?: boolean | undefined;
	readonly NcharCharacterSetName?: string | undefined;
	readonly NetworkType?: string | undefined;
	readonly OptionGroupName?: string | undefined;
	readonly PerformanceInsightsKMSKeyId?: string | undefined;
	readonly PerformanceInsightsRetentionPeriod?: number | undefined;
	readonly Port?: string | undefined;
	readonly PreferredBackupWindow?: string | undefined;
	readonly PreferredMaintenanceWindow?: string | undefined;
	readonly ProcessorFeatures?: ProcessorFeature[] | undefined;
	readonly PromotionTier?: number | undefined;
	readonly PubliclyAccessible?: boolean | undefined;
	readonly ReplicaMode?: string | undefined;
	readonly SourceDBInstanceIdentifier?: string | undefined;
	readonly SourceRegion?: string | undefined;
	readonly StorageEncrypted?: boolean | undefined;
	readonly StorageThroughput?: number | undefined;
	readonly StorageType?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly Timezone?: string | undefined;
	readonly UseDefaultProcessorFeatures?: boolean | undefined;
	readonly VPCSecurityGroups?: string[] | undefined;
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
	readonly DBParameterGroupName?: string | undefined;
	readonly Parameters?: any | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly DebugLogging?: boolean | undefined;
	readonly IdleClientTimeout?: number | undefined;
	readonly RequireTLS?: boolean | undefined;
	readonly Tags?: TagFormat[] | undefined;
	readonly VpcSecurityGroupIds?: string[] | undefined;
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
	readonly Tags?: TagFormat[] | undefined;
	readonly TargetRole?: string | undefined;
	readonly VpcSecurityGroupIds?: string[] | undefined;
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
	readonly ConnectionPoolConfigurationInfo?: ConnectionPoolConfigurationInfoFormat | undefined;
	readonly DBClusterIdentifiers?: string[] | undefined;
	readonly DBInstanceIdentifiers?: string[] | undefined;
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
	readonly EC2VpcId?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly CIDRIP?: string | undefined;
	readonly EC2SecurityGroupId?: string | undefined;
	readonly EC2SecurityGroupName?: string | undefined;
	readonly EC2SecurityGroupOwnerId?: string | undefined;
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
	readonly DBSubnetGroupName?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly Enabled?: boolean | undefined;
	readonly EventCategories?: string[] | undefined;
	readonly SourceIds?: string[] | undefined;
	readonly SourceType?: string | undefined;
	readonly SubscriptionName?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class GlobalCluster extends CfnResource<GlobalClusterComponentInputs> implements GlobalClusterComponentOutputs {
	constructor(entity: ADKEntity, options: GlobalClusterComponentInputs) {
		super(entity, options.LogicalId, "AWS::RDS::GlobalCluster", options);
	}
}
export interface GlobalClusterComponentOutputs {}
export interface GlobalClusterComponentInputs {
	readonly DeletionProtection?: boolean | undefined;
	readonly Engine?: string | undefined;
	readonly EngineVersion?: string | undefined;
	readonly GlobalClusterIdentifier?: string | undefined;
	readonly SourceDBClusterIdentifier?: string | undefined;
	readonly StorageEncrypted?: boolean | undefined;
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
	readonly OptionConfigurations?: OptionConfiguration[] | undefined;
	readonly OptionGroupName?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface DBClusterRole {
	readonly FeatureName?: string | undefined;
	readonly RoleArn: string;
}
export interface Endpoint {
	readonly Address?: string | undefined;
	readonly Port?: string | undefined;
}
export interface ReadEndpoint {
	readonly Address?: string | undefined;
}
export interface ScalingConfiguration {
	readonly AutoPause?: boolean | undefined;
	readonly MaxCapacity?: number | undefined;
	readonly MinCapacity?: number | undefined;
	readonly SecondsUntilAutoPause?: number | undefined;
	readonly TimeoutAction?: string | undefined;
}
export interface ServerlessV2ScalingConfiguration {
	readonly MaxCapacity?: number | undefined;
	readonly MinCapacity?: number | undefined;
}
export interface DBInstanceRole {
	readonly FeatureName: string;
	readonly RoleArn: string;
}
export interface ProcessorFeature {
	readonly Name?: string | undefined;
	readonly Value?: string | undefined;
}
export interface AuthFormat {
	readonly AuthScheme?: string | undefined;
	readonly Description?: string | undefined;
	readonly IAMAuth?: string | undefined;
	readonly SecretArn?: string | undefined;
	readonly UserName?: string | undefined;
}
export interface TagFormat {
	readonly Key?: string | undefined;
	readonly Value?: string | undefined;
}
export interface ConnectionPoolConfigurationInfoFormat {
	readonly ConnectionBorrowTimeout?: number | undefined;
	readonly InitQuery?: string | undefined;
	readonly MaxConnectionsPercent?: number | undefined;
	readonly MaxIdleConnectionsPercent?: number | undefined;
	readonly SessionPinningFilters?: string[] | undefined;
}
export interface Ingress {
	readonly CIDRIP?: string | undefined;
	readonly EC2SecurityGroupId?: string | undefined;
	readonly EC2SecurityGroupName?: string | undefined;
	readonly EC2SecurityGroupOwnerId?: string | undefined;
}
export interface OptionConfiguration {
	readonly DBSecurityGroupMemberships?: string[] | undefined;
	readonly OptionName: string;
	readonly OptionSettings?: OptionSetting[] | undefined;
	readonly OptionVersion?: string | undefined;
	readonly Port?: number | undefined;
	readonly VpcSecurityGroupMemberships?: string[] | undefined;
}
export interface OptionSetting {
	readonly Name?: string | undefined;
	readonly Value?: string | undefined;
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
