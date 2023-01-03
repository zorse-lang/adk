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
	readonly AppSource?: (Source | undefined) | undefined;
	readonly Attributes?: ({ [key: string]: string } | undefined) | undefined;
	readonly DataSources?: (DataSource[] | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly Domains?: (string[] | undefined) | undefined;
	readonly EnableSsl?: (boolean | undefined) | undefined;
	readonly Environment?: (EnvironmentVariable[] | undefined) | undefined;
	readonly Shortname?: (string | undefined) | undefined;
	readonly SslConfiguration?: (SslConfiguration | undefined) | undefined;
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
	readonly AgentVersion?: (string | undefined) | undefined;
	readonly AmiId?: (string | undefined) | undefined;
	readonly Architecture?: (string | undefined) | undefined;
	readonly AutoScalingType?: (string | undefined) | undefined;
	readonly AvailabilityZone?: string | undefined;
	readonly BlockDeviceMappings?: (BlockDeviceMapping[] | undefined) | undefined;
	readonly EbsOptimized?: (boolean | undefined) | undefined;
	readonly ElasticIps?: (string[] | undefined) | undefined;
	readonly Hostname?: (string | undefined) | undefined;
	readonly InstallUpdatesOnBoot?: (boolean | undefined) | undefined;
	readonly Os?: (string | undefined) | undefined;
	readonly RootDeviceType?: (string | undefined) | undefined;
	readonly SshKeyName?: (string | undefined) | undefined;
	readonly SubnetId?: (string | undefined) | undefined;
	readonly Tenancy?: (string | undefined) | undefined;
	readonly TimeBasedAutoScaling?: (TimeBasedAutoScaling | undefined) | undefined;
	readonly VirtualizationType?: (string | undefined) | undefined;
	readonly Volumes?: (string[] | undefined) | undefined;
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
	readonly Attributes?: ({ [key: string]: string } | undefined) | undefined;
	readonly CustomInstanceProfileArn?: (string | undefined) | undefined;
	readonly CustomJson?: (any | undefined) | undefined;
	readonly CustomRecipes?: (Recipes | undefined) | undefined;
	readonly CustomSecurityGroupIds?: (string[] | undefined) | undefined;
	readonly InstallUpdatesOnBoot?: (boolean | undefined) | undefined;
	readonly LifecycleEventConfiguration?: (LifecycleEventConfiguration | undefined) | undefined;
	readonly LoadBasedAutoScaling?: (LoadBasedAutoScaling | undefined) | undefined;
	readonly Packages?: (string[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly UseEbsOptimizedInstances?: (boolean | undefined) | undefined;
	readonly VolumeConfigurations?: (VolumeConfiguration[] | undefined) | undefined;
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
	readonly AgentVersion?: (string | undefined) | undefined;
	readonly Attributes?: ({ [key: string]: string } | undefined) | undefined;
	readonly ChefConfiguration?: (ChefConfiguration | undefined) | undefined;
	readonly CloneAppIds?: (string[] | undefined) | undefined;
	readonly ClonePermissions?: (boolean | undefined) | undefined;
	readonly ConfigurationManager?: (StackConfigurationManager | undefined) | undefined;
	readonly CustomCookbooksSource?: (Source | undefined) | undefined;
	readonly CustomJson?: (any | undefined) | undefined;
	readonly DefaultAvailabilityZone?: (string | undefined) | undefined;
	readonly DefaultOs?: (string | undefined) | undefined;
	readonly DefaultRootDeviceType?: (string | undefined) | undefined;
	readonly DefaultSshKeyName?: (string | undefined) | undefined;
	readonly DefaultSubnetId?: (string | undefined) | undefined;
	readonly EcsClusterArn?: (string | undefined) | undefined;
	readonly ElasticIps?: (ElasticIp[] | undefined) | undefined;
	readonly HostnameTheme?: (string | undefined) | undefined;
	readonly RdsDbInstances?: (RdsDbInstance[] | undefined) | undefined;
	readonly SourceStackId?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly UseCustomCookbooks?: (boolean | undefined) | undefined;
	readonly UseOpsworksSecurityGroups?: (boolean | undefined) | undefined;
	readonly VpcId?: (string | undefined) | undefined;
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
	readonly AllowSelfManagement?: (boolean | undefined) | undefined;
	readonly SshPublicKey?: (string | undefined) | undefined;
	readonly SshUsername?: string | undefined;
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
	readonly MountPoint?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface DataSource {
	readonly Arn?: (string | undefined) | undefined;
	readonly DatabaseName?: (string | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
}
export interface EnvironmentVariable {
	readonly Key: string;
	readonly Secure?: (boolean | undefined) | undefined;
	readonly Value: string;
}
export interface Source {
	readonly Password?: (string | undefined) | undefined;
	readonly Revision?: (string | undefined) | undefined;
	readonly SshKey?: (string | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
	readonly Url?: (string | undefined) | undefined;
	readonly Username?: (string | undefined) | undefined;
}
export interface SslConfiguration {
	readonly Certificate?: (string | undefined) | undefined;
	readonly Chain?: (string | undefined) | undefined;
	readonly PrivateKey?: (string | undefined) | undefined;
}
export interface BlockDeviceMapping {
	readonly DeviceName?: (string | undefined) | undefined;
	readonly Ebs?: (EbsBlockDevice | undefined) | undefined;
	readonly NoDevice?: (string | undefined) | undefined;
	readonly VirtualName?: (string | undefined) | undefined;
}
export interface EbsBlockDevice {
	readonly DeleteOnTermination?: (boolean | undefined) | undefined;
	readonly Iops?: (number | undefined) | undefined;
	readonly SnapshotId?: (string | undefined) | undefined;
	readonly VolumeSize?: (number | undefined) | undefined;
	readonly VolumeType?: (string | undefined) | undefined;
}
export interface TimeBasedAutoScaling {
	readonly Friday?: ({ [key: string]: string } | undefined) | undefined;
	readonly Monday?: ({ [key: string]: string } | undefined) | undefined;
	readonly Saturday?: ({ [key: string]: string } | undefined) | undefined;
	readonly Sunday?: ({ [key: string]: string } | undefined) | undefined;
	readonly Thursday?: ({ [key: string]: string } | undefined) | undefined;
	readonly Tuesday?: ({ [key: string]: string } | undefined) | undefined;
	readonly Wednesday?: ({ [key: string]: string } | undefined) | undefined;
}
export interface AutoScalingThresholds {
	readonly CpuThreshold?: (number | undefined) | undefined;
	readonly IgnoreMetricsTime?: (number | undefined) | undefined;
	readonly InstanceCount?: (number | undefined) | undefined;
	readonly LoadThreshold?: (number | undefined) | undefined;
	readonly MemoryThreshold?: (number | undefined) | undefined;
	readonly ThresholdsWaitTime?: (number | undefined) | undefined;
}
export interface LifecycleEventConfiguration {
	readonly ShutdownEventConfiguration?: (ShutdownEventConfiguration | undefined) | undefined;
}
export interface LoadBasedAutoScaling {
	readonly DownScaling?: (AutoScalingThresholds | undefined) | undefined;
	readonly Enable?: (boolean | undefined) | undefined;
	readonly UpScaling?: (AutoScalingThresholds | undefined) | undefined;
}
export interface Recipes {
	readonly Configure?: (string[] | undefined) | undefined;
	readonly Deploy?: (string[] | undefined) | undefined;
	readonly Setup?: (string[] | undefined) | undefined;
	readonly Shutdown?: (string[] | undefined) | undefined;
	readonly Undeploy?: (string[] | undefined) | undefined;
}
export interface ShutdownEventConfiguration {
	readonly DelayUntilElbConnectionsDrained?: (boolean | undefined) | undefined;
	readonly ExecutionTimeout?: (number | undefined) | undefined;
}
export interface VolumeConfiguration {
	readonly Encrypted?: (boolean | undefined) | undefined;
	readonly Iops?: (number | undefined) | undefined;
	readonly MountPoint?: (string | undefined) | undefined;
	readonly NumberOfDisks?: (number | undefined) | undefined;
	readonly RaidLevel?: (number | undefined) | undefined;
	readonly Size?: (number | undefined) | undefined;
	readonly VolumeType?: (string | undefined) | undefined;
}
export interface ChefConfiguration {
	readonly BerkshelfVersion?: (string | undefined) | undefined;
	readonly ManageBerkshelf?: (boolean | undefined) | undefined;
}
export interface ElasticIp {
	readonly Ip: string;
	readonly Name?: (string | undefined) | undefined;
}
export interface RdsDbInstance {
	readonly DbPassword: string;
	readonly DbUser: string;
	readonly RdsDbInstanceArn: string;
}
export interface StackConfigurationManager {
	readonly Name?: (string | undefined) | undefined;
	readonly Version?: (string | undefined) | undefined;
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
