import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Cluster extends CfnResource<ClusterComponentInputs> implements ClusterComponentOutputs {
	constructor(entity: ADKEntity, options: ClusterComponentInputs) {
		super(entity, options.LogicalId, "AWS::Redshift::Cluster", options);
	}
	public readonly DeferMaintenanceIdentifier: string;
	public readonly EndpointAddress: string;
	public readonly EndpointPort: string;
	public readonly Id: string;
}
export interface ClusterComponentOutputs {
	readonly DeferMaintenanceIdentifier: string;
	readonly EndpointAddress: string;
	readonly EndpointPort: string;
	readonly Id: string;
}
export interface ClusterComponentInputs {
	readonly ClusterType: string;
	readonly DBName: string;
	readonly MasterUsername: string;
	readonly MasterUserPassword: string;
	readonly NodeType: string;
	readonly AllowVersionUpgrade?: boolean | undefined;
	readonly AquaConfigurationStatus?: string | undefined;
	readonly AutomatedSnapshotRetentionPeriod?: number | undefined;
	readonly AvailabilityZone?: string | undefined;
	readonly AvailabilityZoneRelocation?: boolean | undefined;
	readonly AvailabilityZoneRelocationStatus?: string | undefined;
	readonly Classic?: boolean | undefined;
	readonly ClusterIdentifier?: string | undefined;
	readonly ClusterParameterGroupName?: string | undefined;
	readonly ClusterSecurityGroups?: string[] | undefined;
	readonly ClusterSubnetGroupName?: string | undefined;
	readonly ClusterVersion?: string | undefined;
	readonly DeferMaintenance?: boolean | undefined;
	readonly DeferMaintenanceDuration?: number | undefined;
	readonly DeferMaintenanceEndTime?: string | undefined;
	readonly DeferMaintenanceStartTime?: string | undefined;
	readonly DestinationRegion?: string | undefined;
	readonly ElasticIp?: string | undefined;
	readonly Encrypted?: boolean | undefined;
	readonly Endpoint?: Endpoint | undefined;
	readonly EnhancedVpcRouting?: boolean | undefined;
	readonly HsmClientCertificateIdentifier?: string | undefined;
	readonly HsmConfigurationIdentifier?: string | undefined;
	readonly IamRoles?: string[] | undefined;
	readonly KmsKeyId?: string | undefined;
	readonly LoggingProperties?: LoggingProperties | undefined;
	readonly MaintenanceTrackName?: string | undefined;
	readonly ManualSnapshotRetentionPeriod?: number | undefined;
	readonly NumberOfNodes?: number | undefined;
	readonly OwnerAccount?: string | undefined;
	readonly Port?: number | undefined;
	readonly PreferredMaintenanceWindow?: string | undefined;
	readonly PubliclyAccessible?: boolean | undefined;
	readonly ResourceAction?: string | undefined;
	readonly RevisionTarget?: string | undefined;
	readonly RotateEncryptionKey?: boolean | undefined;
	readonly SnapshotClusterIdentifier?: string | undefined;
	readonly SnapshotCopyGrantName?: string | undefined;
	readonly SnapshotCopyManual?: boolean | undefined;
	readonly SnapshotCopyRetentionPeriod?: number | undefined;
	readonly SnapshotIdentifier?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly VpcSecurityGroupIds?: string[] | undefined;
	readonly LogicalId: string;
}
export class ClusterParameterGroup
	extends CfnResource<ClusterParameterGroupComponentInputs>
	implements ClusterParameterGroupComponentOutputs
{
	constructor(entity: ADKEntity, options: ClusterParameterGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::Redshift::ClusterParameterGroup", options);
	}
	public readonly ParameterGroupName: string;
}
export interface ClusterParameterGroupComponentOutputs {
	readonly ParameterGroupName: string;
}
export interface ClusterParameterGroupComponentInputs {
	readonly Description: string;
	readonly ParameterGroupFamily: string;
	readonly Parameters?: Parameter[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class ClusterSecurityGroup
	extends CfnResource<ClusterSecurityGroupComponentInputs>
	implements ClusterSecurityGroupComponentOutputs
{
	constructor(entity: ADKEntity, options: ClusterSecurityGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::Redshift::ClusterSecurityGroup", options);
	}
}
export interface ClusterSecurityGroupComponentOutputs {}
export interface ClusterSecurityGroupComponentInputs {
	readonly Description: string;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class ClusterSecurityGroupIngress
	extends CfnResource<ClusterSecurityGroupIngressComponentInputs>
	implements ClusterSecurityGroupIngressComponentOutputs
{
	constructor(entity: ADKEntity, options: ClusterSecurityGroupIngressComponentInputs) {
		super(entity, options.LogicalId, "AWS::Redshift::ClusterSecurityGroupIngress", options);
	}
}
export interface ClusterSecurityGroupIngressComponentOutputs {}
export interface ClusterSecurityGroupIngressComponentInputs {
	readonly ClusterSecurityGroupName: string;
	readonly CIDRIP?: string | undefined;
	readonly EC2SecurityGroupName?: string | undefined;
	readonly EC2SecurityGroupOwnerId?: string | undefined;
	readonly LogicalId: string;
}
export class ClusterSubnetGroup
	extends CfnResource<ClusterSubnetGroupComponentInputs>
	implements ClusterSubnetGroupComponentOutputs
{
	constructor(entity: ADKEntity, options: ClusterSubnetGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::Redshift::ClusterSubnetGroup", options);
	}
	public readonly ClusterSubnetGroupName: string;
}
export interface ClusterSubnetGroupComponentOutputs {
	readonly ClusterSubnetGroupName: string;
}
export interface ClusterSubnetGroupComponentInputs {
	readonly Description: string;
	readonly SubnetIds: string[];
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class EndpointAccess extends CfnResource<EndpointAccessComponentInputs> implements EndpointAccessComponentOutputs {
	constructor(entity: ADKEntity, options: EndpointAccessComponentInputs) {
		super(entity, options.LogicalId, "AWS::Redshift::EndpointAccess", options);
	}
	public readonly Address: string;
	public readonly EndpointCreateTime: string;
	public readonly EndpointStatus: string;
	public readonly Port: number;
	public readonly VpcEndpointVpcEndpointId: string;
	public readonly VpcEndpointVpcId: string;
}
export interface EndpointAccessComponentOutputs {
	readonly Address: string;
	readonly EndpointCreateTime: string;
	readonly EndpointStatus: string;
	readonly Port: number;
	readonly VpcEndpointVpcEndpointId: string;
	readonly VpcEndpointVpcId: string;
}
export interface EndpointAccessComponentInputs {
	readonly ClusterIdentifier: string;
	readonly EndpointName: string;
	readonly SubnetGroupName: string;
	readonly VpcSecurityGroupIds: string[];
	readonly ResourceOwner?: string | undefined;
	readonly VpcEndpoint?: VpcEndpoint | undefined;
	readonly VpcSecurityGroups?: VpcSecurityGroup[] | undefined;
	readonly LogicalId: string;
}
export class EndpointAuthorization
	extends CfnResource<EndpointAuthorizationComponentInputs>
	implements EndpointAuthorizationComponentOutputs
{
	constructor(entity: ADKEntity, options: EndpointAuthorizationComponentInputs) {
		super(entity, options.LogicalId, "AWS::Redshift::EndpointAuthorization", options);
	}
	public readonly AllowedAllVpCs: boolean;
	public readonly AllowedVpCs: string[];
	public readonly AuthorizeTime: string;
	public readonly ClusterStatus: string;
	public readonly EndpointCount: number;
	public readonly Grantee: string;
	public readonly Grantor: string;
	public readonly Status: string;
}
export interface EndpointAuthorizationComponentOutputs {
	readonly AllowedAllVpCs: boolean;
	readonly AllowedVpCs: string[];
	readonly AuthorizeTime: string;
	readonly ClusterStatus: string;
	readonly EndpointCount: number;
	readonly Grantee: string;
	readonly Grantor: string;
	readonly Status: string;
}
export interface EndpointAuthorizationComponentInputs {
	readonly Account: string;
	readonly ClusterIdentifier: string;
	readonly Force?: boolean | undefined;
	readonly VpcIds?: string[] | undefined;
	readonly LogicalId: string;
}
export class EventSubscription
	extends CfnResource<EventSubscriptionComponentInputs>
	implements EventSubscriptionComponentOutputs
{
	constructor(entity: ADKEntity, options: EventSubscriptionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Redshift::EventSubscription", options);
	}
	public readonly CustSubscriptionId: string;
	public readonly CustomerAwsId: string;
	public readonly EventCategoriesList: string[];
	public readonly SourceIdsList: string[];
	public readonly Status: string;
	public readonly SubscriptionCreationTime: string;
}
export interface EventSubscriptionComponentOutputs {
	readonly CustSubscriptionId: string;
	readonly CustomerAwsId: string;
	readonly EventCategoriesList: string[];
	readonly SourceIdsList: string[];
	readonly Status: string;
	readonly SubscriptionCreationTime: string;
}
export interface EventSubscriptionComponentInputs {
	readonly SubscriptionName: string;
	readonly Enabled?: boolean | undefined;
	readonly EventCategories?: string[] | undefined;
	readonly Severity?: string | undefined;
	readonly SnsTopicArn?: string | undefined;
	readonly SourceIds?: string[] | undefined;
	readonly SourceType?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class ScheduledAction
	extends CfnResource<ScheduledActionComponentInputs>
	implements ScheduledActionComponentOutputs
{
	constructor(entity: ADKEntity, options: ScheduledActionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Redshift::ScheduledAction", options);
	}
	public readonly NextInvocations: string[];
	public readonly State: string;
}
export interface ScheduledActionComponentOutputs {
	readonly NextInvocations: string[];
	readonly State: string;
}
export interface ScheduledActionComponentInputs {
	readonly ScheduledActionName: string;
	readonly Enable?: boolean | undefined;
	readonly EndTime?: string | undefined;
	readonly IamRole?: string | undefined;
	readonly Schedule?: string | undefined;
	readonly ScheduledActionDescription?: string | undefined;
	readonly StartTime?: string | undefined;
	readonly TargetAction?: ScheduledActionType | undefined;
	readonly LogicalId: string;
}
export interface Endpoint {
	readonly Address?: string | undefined;
	readonly Port?: string | undefined;
}
export interface LoggingProperties {
	readonly BucketName: string;
	readonly S3KeyPrefix?: string | undefined;
}
export interface Parameter {
	readonly ParameterName: string;
	readonly ParameterValue: string;
}
export interface NetworkInterface {
	readonly AvailabilityZone?: string | undefined;
	readonly NetworkInterfaceId?: string | undefined;
	readonly PrivateIpAddress?: string | undefined;
	readonly SubnetId?: string | undefined;
}
export interface VpcEndpoint {
	readonly NetworkInterfaces?: NetworkInterface[] | undefined;
	readonly VpcEndpointId?: string | undefined;
	readonly VpcId?: string | undefined;
}
export interface VpcSecurityGroup {
	readonly Status?: string | undefined;
	readonly VpcSecurityGroupId?: string | undefined;
}
export interface PauseClusterMessage {
	readonly ClusterIdentifier: string;
}
export interface ResizeClusterMessage {
	readonly Classic?: boolean | undefined;
	readonly ClusterIdentifier: string;
	readonly ClusterType?: string | undefined;
	readonly NodeType?: string | undefined;
	readonly NumberOfNodes?: number | undefined;
}
export interface ResumeClusterMessage {
	readonly ClusterIdentifier: string;
}
export interface ScheduledActionType {
	readonly PauseCluster?: PauseClusterMessage | undefined;
	readonly ResizeCluster?: ResizeClusterMessage | undefined;
	readonly ResumeCluster?: ResumeClusterMessage | undefined;
}
export default {
	Cluster: Cluster,
	ClusterParameterGroup: ClusterParameterGroup,
	ClusterSecurityGroup: ClusterSecurityGroup,
	ClusterSecurityGroupIngress: ClusterSecurityGroupIngress,
	ClusterSubnetGroup: ClusterSubnetGroup,
	EndpointAccess: EndpointAccess,
	EndpointAuthorization: EndpointAuthorization,
	EventSubscription: EventSubscription,
	ScheduledAction: ScheduledAction,
};
