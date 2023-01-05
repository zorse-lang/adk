import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class App extends CfnResource<AppComponentInputs> implements AppComponentOutputs {
	constructor(entity: ADKEntity, options: AppComponentInputs) {
		super(entity, options.LogicalId, "AWS::OpsWorks::App", options);
	}
}
export interface AppComponentOutputs {}
export interface AppComponentInputs {
	readonly Name: string;
	readonly StackId: string;
	readonly Type: string;
	readonly AppSource?: Source | undefined;
	readonly Attributes?: { [key: string]: string } | undefined;
	readonly DataSources?: DataSource[] | undefined;
	readonly Description?: string | undefined;
	readonly Domains?: string[] | undefined;
	readonly EnableSsl?: boolean | undefined;
	readonly Environment?: EnvironmentVariable[] | undefined;
	readonly Shortname?: string | undefined;
	readonly SslConfiguration?: SslConfiguration | undefined;
	readonly LogicalId: string;
}
export class ElasticLoadBalancerAttachment
	extends CfnResource<ElasticLoadBalancerAttachmentComponentInputs>
	implements ElasticLoadBalancerAttachmentComponentOutputs
{
	constructor(entity: ADKEntity, options: ElasticLoadBalancerAttachmentComponentInputs) {
		super(entity, options.LogicalId, "AWS::OpsWorks::ElasticLoadBalancerAttachment", options);
	}
}
export interface ElasticLoadBalancerAttachmentComponentOutputs {}
export interface ElasticLoadBalancerAttachmentComponentInputs {
	readonly ElasticLoadBalancerName: string;
	readonly LayerId: string;
	readonly LogicalId: string;
}
export class Instance extends CfnResource<InstanceComponentInputs> implements InstanceComponentOutputs {
	constructor(entity: ADKEntity, options: InstanceComponentInputs) {
		super(entity, options.LogicalId, "AWS::OpsWorks::Instance", options);
	}
	public readonly PrivateDnsName: string;
	public readonly PrivateIp: string;
	public readonly PublicDnsName: string;
	public readonly PublicIp: string;
}
export interface InstanceComponentOutputs {
	readonly PrivateDnsName: string;
	readonly PrivateIp: string;
	readonly PublicDnsName: string;
	readonly PublicIp: string;
}
export interface InstanceComponentInputs {
	readonly InstanceType: string;
	readonly LayerIds: string[];
	readonly StackId: string;
	readonly AgentVersion?: string | undefined;
	readonly AmiId?: string | undefined;
	readonly Architecture?: string | undefined;
	readonly AutoScalingType?: string | undefined;
	readonly AvailabilityZone?: string;
	readonly BlockDeviceMappings?: BlockDeviceMapping[] | undefined;
	readonly EbsOptimized?: boolean | undefined;
	readonly ElasticIps?: string[] | undefined;
	readonly Hostname?: string | undefined;
	readonly InstallUpdatesOnBoot?: boolean | undefined;
	readonly Os?: string | undefined;
	readonly RootDeviceType?: string | undefined;
	readonly SshKeyName?: string | undefined;
	readonly SubnetId?: string | undefined;
	readonly Tenancy?: string | undefined;
	readonly TimeBasedAutoScaling?: TimeBasedAutoScaling | undefined;
	readonly VirtualizationType?: string | undefined;
	readonly Volumes?: string[] | undefined;
	readonly LogicalId: string;
}
export class Layer extends CfnResource<LayerComponentInputs> implements LayerComponentOutputs {
	constructor(entity: ADKEntity, options: LayerComponentInputs) {
		super(entity, options.LogicalId, "AWS::OpsWorks::Layer", options);
	}
}
export interface LayerComponentOutputs {}
export interface LayerComponentInputs {
	readonly AutoAssignElasticIps: boolean;
	readonly AutoAssignPublicIps: boolean;
	readonly EnableAutoHealing: boolean;
	readonly Name: string;
	readonly Shortname: string;
	readonly StackId: string;
	readonly Type: string;
	readonly Attributes?: { [key: string]: string } | undefined;
	readonly CustomInstanceProfileArn?: string | undefined;
	readonly CustomJson?: any | undefined;
	readonly CustomRecipes?: Recipes | undefined;
	readonly CustomSecurityGroupIds?: string[] | undefined;
	readonly InstallUpdatesOnBoot?: boolean | undefined;
	readonly LifecycleEventConfiguration?: LifecycleEventConfiguration | undefined;
	readonly LoadBasedAutoScaling?: LoadBasedAutoScaling | undefined;
	readonly Packages?: string[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly UseEbsOptimizedInstances?: boolean | undefined;
	readonly VolumeConfigurations?: VolumeConfiguration[] | undefined;
	readonly LogicalId: string;
}
export class Stack extends CfnResource<StackComponentInputs> implements StackComponentOutputs {
	constructor(entity: ADKEntity, options: StackComponentInputs) {
		super(entity, options.LogicalId, "AWS::OpsWorks::Stack", options);
	}
}
export interface StackComponentOutputs {}
export interface StackComponentInputs {
	readonly DefaultInstanceProfileArn: string;
	readonly Name: string;
	readonly ServiceRoleArn: string;
	readonly AgentVersion?: string | undefined;
	readonly Attributes?: { [key: string]: string } | undefined;
	readonly ChefConfiguration?: ChefConfiguration | undefined;
	readonly CloneAppIds?: string[] | undefined;
	readonly ClonePermissions?: boolean | undefined;
	readonly ConfigurationManager?: StackConfigurationManager | undefined;
	readonly CustomCookbooksSource?: Source | undefined;
	readonly CustomJson?: any | undefined;
	readonly DefaultAvailabilityZone?: string | undefined;
	readonly DefaultOs?: string | undefined;
	readonly DefaultRootDeviceType?: string | undefined;
	readonly DefaultSshKeyName?: string | undefined;
	readonly DefaultSubnetId?: string | undefined;
	readonly EcsClusterArn?: string | undefined;
	readonly ElasticIps?: ElasticIp[] | undefined;
	readonly HostnameTheme?: string | undefined;
	readonly RdsDbInstances?: RdsDbInstance[] | undefined;
	readonly SourceStackId?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly UseCustomCookbooks?: boolean | undefined;
	readonly UseOpsworksSecurityGroups?: boolean | undefined;
	readonly VpcId?: string | undefined;
	readonly LogicalId: string;
}
export class UserProfile extends CfnResource<UserProfileComponentInputs> implements UserProfileComponentOutputs {
	constructor(entity: ADKEntity, options: UserProfileComponentInputs) {
		super(entity, options.LogicalId, "AWS::OpsWorks::UserProfile", options);
	}
}
export interface UserProfileComponentOutputs {}
export interface UserProfileComponentInputs {
	readonly IamUserArn: string;
	readonly AllowSelfManagement?: boolean | undefined;
	readonly SshPublicKey?: string | undefined;
	readonly SshUsername?: string;
	readonly LogicalId: string;
}
export class Volume extends CfnResource<VolumeComponentInputs> implements VolumeComponentOutputs {
	constructor(entity: ADKEntity, options: VolumeComponentInputs) {
		super(entity, options.LogicalId, "AWS::OpsWorks::Volume", options);
	}
}
export interface VolumeComponentOutputs {}
export interface VolumeComponentInputs {
	readonly Ec2VolumeId: string;
	readonly StackId: string;
	readonly MountPoint?: string | undefined;
	readonly Name?: string | undefined;
	readonly LogicalId: string;
}
export interface DataSource {
	readonly Arn?: string | undefined;
	readonly DatabaseName?: string | undefined;
	readonly Type?: string | undefined;
}
export interface EnvironmentVariable {
	readonly Key: string;
	readonly Secure?: boolean | undefined;
	readonly Value: string;
}
export interface Source {
	readonly Password?: string | undefined;
	readonly Revision?: string | undefined;
	readonly SshKey?: string | undefined;
	readonly Type?: string | undefined;
	readonly Url?: string | undefined;
	readonly Username?: string | undefined;
}
export interface SslConfiguration {
	readonly Certificate?: string | undefined;
	readonly Chain?: string | undefined;
	readonly PrivateKey?: string | undefined;
}
export interface BlockDeviceMapping {
	readonly DeviceName?: string | undefined;
	readonly Ebs?: EbsBlockDevice | undefined;
	readonly NoDevice?: string | undefined;
	readonly VirtualName?: string | undefined;
}
export interface EbsBlockDevice {
	readonly DeleteOnTermination?: boolean | undefined;
	readonly Iops?: number | undefined;
	readonly SnapshotId?: string | undefined;
	readonly VolumeSize?: number | undefined;
	readonly VolumeType?: string | undefined;
}
export interface TimeBasedAutoScaling {
	readonly Friday?: { [key: string]: string } | undefined;
	readonly Monday?: { [key: string]: string } | undefined;
	readonly Saturday?: { [key: string]: string } | undefined;
	readonly Sunday?: { [key: string]: string } | undefined;
	readonly Thursday?: { [key: string]: string } | undefined;
	readonly Tuesday?: { [key: string]: string } | undefined;
	readonly Wednesday?: { [key: string]: string } | undefined;
}
export interface AutoScalingThresholds {
	readonly CpuThreshold?: number | undefined;
	readonly IgnoreMetricsTime?: number | undefined;
	readonly InstanceCount?: number | undefined;
	readonly LoadThreshold?: number | undefined;
	readonly MemoryThreshold?: number | undefined;
	readonly ThresholdsWaitTime?: number | undefined;
}
export interface LifecycleEventConfiguration {
	readonly ShutdownEventConfiguration?: ShutdownEventConfiguration | undefined;
}
export interface LoadBasedAutoScaling {
	readonly DownScaling?: AutoScalingThresholds | undefined;
	readonly Enable?: boolean | undefined;
	readonly UpScaling?: AutoScalingThresholds | undefined;
}
export interface Recipes {
	readonly Configure?: string[] | undefined;
	readonly Deploy?: string[] | undefined;
	readonly Setup?: string[] | undefined;
	readonly Shutdown?: string[] | undefined;
	readonly Undeploy?: string[] | undefined;
}
export interface ShutdownEventConfiguration {
	readonly DelayUntilElbConnectionsDrained?: boolean | undefined;
	readonly ExecutionTimeout?: number | undefined;
}
export interface VolumeConfiguration {
	readonly Encrypted?: boolean | undefined;
	readonly Iops?: number | undefined;
	readonly MountPoint?: string | undefined;
	readonly NumberOfDisks?: number | undefined;
	readonly RaidLevel?: number | undefined;
	readonly Size?: number | undefined;
	readonly VolumeType?: string | undefined;
}
export interface ChefConfiguration {
	readonly BerkshelfVersion?: string | undefined;
	readonly ManageBerkshelf?: boolean | undefined;
}
export interface ElasticIp {
	readonly Ip: string;
	readonly Name?: string | undefined;
}
export interface RdsDbInstance {
	readonly DbPassword: string;
	readonly DbUser: string;
	readonly RdsDbInstanceArn: string;
}
export interface StackConfigurationManager {
	readonly Name?: string | undefined;
	readonly Version?: string | undefined;
}
export default {
	App: App,
	ElasticLoadBalancerAttachment: ElasticLoadBalancerAttachment,
	Instance: Instance,
	Layer: Layer,
	Stack: Stack,
	UserProfile: UserProfile,
	Volume: Volume,
};
