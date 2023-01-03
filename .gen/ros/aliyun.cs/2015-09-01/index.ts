import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class anyCluster extends RosResource<anyClusterComponentInputs> implements anyClusterComponentOutputs {
	constructor(entity: ADKEntity, options: anyClusterComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CS::AnyCluster", options);
	}
	public readonly TaskId: any;
	public readonly ClusterId: any;
	public readonly ApiServerSlbId: any;
	public readonly ScalingGroupId: any;
	public readonly ScalingRuleId: any;
	public readonly DefaultUserKubeConfig: any;
	public readonly WorkerRamRoleName: any;
	public readonly ScalingConfigurationId: any;
	public readonly PrivateUserKubConfig: any;
	public readonly Nodes: any;
}
export interface anyClusterComponentOutputs {
	readonly TaskId: any;
	readonly ClusterId: any;
	readonly ApiServerSlbId: any;
	readonly ScalingGroupId: any;
	readonly ScalingRuleId: any;
	readonly DefaultUserKubeConfig: any;
	readonly WorkerRamRoleName: any;
	readonly ScalingConfigurationId: any;
	readonly PrivateUserKubConfig: any;
	readonly Nodes: any;
}
export interface anyClusterComponentInputs {
	readonly ClusterConfig: { [key: string]: any };
	readonly LogicalId: string;
}
export class ClusterAddons extends RosResource<ClusterAddonsComponentInputs> implements ClusterAddonsComponentOutputs {
	constructor(entity: ADKEntity, options: ClusterAddonsComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CS::ClusterAddons", options);
	}
}
export interface ClusterAddonsComponentOutputs {}
export interface ClusterAddonsComponentInputs {
	readonly Addons: Addons[];
	readonly ClusterId: any | string;
	readonly InstalledIgnore?: (boolean | undefined) | undefined;
	readonly LogicalId: string;
}
export class ClusterApplication
	extends RosResource<ClusterApplicationComponentInputs>
	implements ClusterApplicationComponentOutputs
{
	constructor(entity: ADKEntity, options: ClusterApplicationComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CS::ClusterApplication", options);
	}
}
export interface ClusterApplicationComponentOutputs {}
export interface ClusterApplicationComponentInputs {
	readonly ClusterId: any | string;
	readonly YamlContent: string;
	readonly DefaultNamespace?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class ClusterHelmApplication
	extends RosResource<ClusterHelmApplicationComponentInputs>
	implements ClusterHelmApplicationComponentOutputs
{
	constructor(entity: ADKEntity, options: ClusterHelmApplicationComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CS::ClusterHelmApplication", options);
	}
}
export interface ClusterHelmApplicationComponentOutputs {}
export interface ClusterHelmApplicationComponentInputs {
	readonly ChartUrl: string;
	readonly ClusterId: any | string;
	readonly Name: string;
	readonly ChartValues?: ({ [key: string]: any } | undefined) | undefined;
	readonly Namespace?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class ClusterNodePool
	extends RosResource<ClusterNodePoolComponentInputs>
	implements ClusterNodePoolComponentOutputs
{
	constructor(entity: ADKEntity, options: ClusterNodePoolComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CS::ClusterNodePool", options);
	}
	public readonly NodePoolId: any;
}
export interface ClusterNodePoolComponentOutputs {
	readonly NodePoolId: any;
}
export interface ClusterNodePoolComponentInputs {
	readonly ClusterId: string;
	readonly ScalingGroup: ScalingGroup;
	readonly AutoScaling?: (AutoScaling | undefined) | undefined;
	readonly Count?: (number | undefined) | undefined;
	readonly KubernetesConfig?: (KubernetesConfig | undefined) | undefined;
	readonly Management?: (Management | undefined) | undefined;
	readonly NodePoolInfo?: (NodePoolInfo | undefined) | undefined;
	readonly TeeConfig?: (TeeConfig | undefined) | undefined;
	readonly LogicalId: string;
}
export class KubernetesCluster
	extends RosResource<KubernetesClusterComponentInputs>
	implements KubernetesClusterComponentOutputs
{
	constructor(entity: ADKEntity, options: KubernetesClusterComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CS::KubernetesCluster", options);
	}
	public readonly TaskId: any;
	public readonly ClusterId: any;
	public readonly ApiServerSlbId: any;
	public readonly ScalingGroupId: any;
	public readonly ScalingRuleId: any;
	public readonly DefaultUserKubeConfig: any;
	public readonly WorkerRamRoleName: any;
	public readonly ScalingConfigurationId: any;
	public readonly PrivateUserKubConfig: any;
	public readonly Nodes: any;
}
export interface KubernetesClusterComponentOutputs {
	readonly TaskId: any;
	readonly ClusterId: any;
	readonly ApiServerSlbId: any;
	readonly ScalingGroupId: any;
	readonly ScalingRuleId: any;
	readonly DefaultUserKubeConfig: any;
	readonly WorkerRamRoleName: any;
	readonly ScalingConfigurationId: any;
	readonly PrivateUserKubConfig: any;
	readonly Nodes: any;
}
export interface KubernetesClusterComponentInputs {
	readonly MasterInstanceTypes: any[];
	readonly MasterVSwitchIds: any[];
	readonly Name: string;
	readonly VpcId: string;
	readonly WorkerVSwitchIds: any[];
	readonly Addons?: (Addons[] | undefined) | undefined;
	readonly AutoRenew?: (boolean | undefined) | undefined;
	readonly AutoRenewPeriod?: (number | undefined) | undefined;
	readonly ChargeType?: (string | undefined) | undefined;
	readonly CisEnabled?: (boolean | undefined) | undefined;
	readonly CloudMonitorFlags?: (boolean | undefined) | undefined;
	readonly ContainerCidr?: (string | undefined) | undefined;
	readonly CpuPolicy?: (string | undefined) | undefined;
	readonly DeletionProtection?: (boolean | undefined) | undefined;
	readonly DisableRollback?: (boolean | undefined) | undefined;
	readonly EndpointPublicAccess?: (boolean | undefined) | undefined;
	readonly FormatDisk?: (boolean | undefined) | undefined;
	readonly IsEnterpriseSecurityGroup?: (boolean | undefined) | undefined;
	readonly KeepInstanceName?: (boolean | undefined) | undefined;
	readonly KeyPair?: (string | undefined) | undefined;
	readonly KubernetesVersion?: (string | undefined) | undefined;
	readonly LoadBalancerSpec?: (string | undefined) | undefined;
	readonly LoginPassword?: (string | undefined) | undefined;
	readonly MasterCount?: (number | undefined) | undefined;
	readonly MasterDataDisk?: (boolean | undefined) | undefined;
	readonly MasterDataDisks?: (MasterDataDisks[] | undefined) | undefined;
	readonly MasterSystemDiskCategory?: (string | undefined) | undefined;
	readonly MasterSystemDiskPerformanceLevel?: (string | undefined) | undefined;
	readonly MasterSystemDiskSize?: (number | undefined) | undefined;
	readonly MasterSystemDiskSnapshotPolicyId?: (string | undefined) | undefined;
	readonly MasterZoneIds?: (string[] | undefined) | undefined;
	readonly NodeCidrMask?: (string | undefined) | undefined;
	readonly NodeNameMode?: (string | undefined) | undefined;
	readonly NodePools?: (NodePools[] | undefined) | undefined;
	readonly NodePortRange?: (string | undefined) | undefined;
	readonly NumOfNodes?: (number | undefined) | undefined;
	readonly OsType?: (string | undefined) | undefined;
	readonly Period?: (number | undefined) | undefined;
	readonly PeriodUnit?: (string | undefined) | undefined;
	readonly Platform?: (string | undefined) | undefined;
	readonly PodVswitchIds?: (string[] | undefined) | undefined;
	readonly ProxyMode?: (string | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly Runtime?: (Runtime | undefined) | undefined;
	readonly SecurityGroupId?: (string | undefined) | undefined;
	readonly ServiceCidr?: (string | undefined) | undefined;
	readonly SnatEntry?: (boolean | undefined) | undefined;
	readonly SocEnabled?: (boolean | undefined) | undefined;
	readonly SshFlags?: (boolean | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly Taint?: any | undefined;
	readonly TimeoutMins?: (number | undefined) | undefined;
	readonly TimeZone?: (string | undefined) | undefined;
	readonly UserCa?: (string | undefined) | undefined;
	readonly UserData?: (string | undefined) | undefined;
	readonly WorkerDataDisk?: (boolean | undefined) | undefined;
	readonly WorkerDataDisks?: (WorkerDataDisks[] | undefined) | undefined;
	readonly WorkerInstanceTypes?: (string[] | undefined) | undefined;
	readonly WorkerSystemDiskCategory?: (string | undefined) | undefined;
	readonly WorkerSystemDiskSize?: (number | undefined) | undefined;
	readonly WorkerSystemDiskSnapshotPolicyId?: (string | undefined) | undefined;
	readonly WorkerZoneIds?: (string[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class ManagedEdgeKubernetesCluster
	extends RosResource<ManagedEdgeKubernetesClusterComponentInputs>
	implements ManagedEdgeKubernetesClusterComponentOutputs
{
	constructor(entity: ADKEntity, options: ManagedEdgeKubernetesClusterComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CS::ManagedEdgeKubernetesCluster", options);
	}
	public readonly TaskId: any;
	public readonly ClusterId: any;
	public readonly ApiServerSlbId: any;
	public readonly ScalingGroupId: any;
	public readonly ScalingRuleId: any;
	public readonly DefaultUserKubeConfig: any;
	public readonly WorkerRamRoleName: any;
	public readonly ScalingConfigurationId: any;
	public readonly PrivateUserKubConfig: any;
	public readonly Nodes: any;
}
export interface ManagedEdgeKubernetesClusterComponentOutputs {
	readonly TaskId: any;
	readonly ClusterId: any;
	readonly ApiServerSlbId: any;
	readonly ScalingGroupId: any;
	readonly ScalingRuleId: any;
	readonly DefaultUserKubeConfig: any;
	readonly WorkerRamRoleName: any;
	readonly ScalingConfigurationId: any;
	readonly PrivateUserKubConfig: any;
	readonly Nodes: any;
}
export interface ManagedEdgeKubernetesClusterComponentInputs {
	readonly Name: string;
	readonly NumOfNodes: number;
	readonly Addons?: (Addons[] | undefined) | undefined;
	readonly AutoRenew?: (boolean | undefined) | undefined;
	readonly AutoRenewPeriod?: (number | undefined) | undefined;
	readonly ChargeType?: (string | undefined) | undefined;
	readonly CloudMonitorFlags?: (boolean | undefined) | undefined;
	readonly ClusterSpec?: (string | undefined) | undefined;
	readonly ContainerCidr?: (string | undefined) | undefined;
	readonly DeletionProtection?: (boolean | undefined) | undefined;
	readonly DisableRollback?: (boolean | undefined) | undefined;
	readonly EndpointPublicAccess?: (boolean | undefined) | undefined;
	readonly IsEnterpriseSecurityGroup?: (boolean | undefined) | undefined;
	readonly KeyPair?: (string | undefined) | undefined;
	readonly LoginPassword?: (string | undefined) | undefined;
	readonly NodeCidrMask?: (string | undefined) | undefined;
	readonly Period?: (number | undefined) | undefined;
	readonly PeriodUnit?: (string | undefined) | undefined;
	readonly Profile?: (string | undefined) | undefined;
	readonly ProxyMode?: (string | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly ServiceCidr?: (string | undefined) | undefined;
	readonly SnatEntry?: (boolean | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly TimeoutMins?: (number | undefined) | undefined;
	readonly VpcId?: (string | undefined) | undefined;
	readonly VSwitchIds?: (any[] | undefined) | undefined;
	readonly WorkerDataDisk?: (boolean | undefined) | undefined;
	readonly WorkerDataDiskCategory?: (string | undefined) | undefined;
	readonly WorkerDataDisks?: (WorkerDataDisks[] | undefined) | undefined;
	readonly WorkerDataDiskSize?: (number | undefined) | undefined;
	readonly WorkerInstanceTypes?: (string[] | undefined) | undefined;
	readonly WorkerSystemDiskCategory?: (string | undefined) | undefined;
	readonly WorkerSystemDiskSize?: (number | undefined) | undefined;
	readonly ZoneIds?: (string[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class ManagedKubernetesCluster
	extends RosResource<ManagedKubernetesClusterComponentInputs>
	implements ManagedKubernetesClusterComponentOutputs
{
	constructor(entity: ADKEntity, options: ManagedKubernetesClusterComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CS::ManagedKubernetesCluster", options);
	}
	public readonly TaskId: any;
	public readonly ClusterId: any;
	public readonly ApiServerSlbId: any;
	public readonly ScalingGroupId: any;
	public readonly ScalingRuleId: any;
	public readonly DefaultUserKubeConfig: any;
	public readonly WorkerRamRoleName: any;
	public readonly ScalingConfigurationId: any;
	public readonly PrivateUserKubConfig: any;
	public readonly Nodes: any;
}
export interface ManagedKubernetesClusterComponentOutputs {
	readonly TaskId: any;
	readonly ClusterId: any;
	readonly ApiServerSlbId: any;
	readonly ScalingGroupId: any;
	readonly ScalingRuleId: any;
	readonly DefaultUserKubeConfig: any;
	readonly WorkerRamRoleName: any;
	readonly ScalingConfigurationId: any;
	readonly PrivateUserKubConfig: any;
	readonly Nodes: any;
}
export interface ManagedKubernetesClusterComponentInputs {
	readonly Name: string;
	readonly VpcId: string;
	readonly VSwitchIds: any[];
	readonly Addons?: (Addons[] | undefined) | undefined;
	readonly AutoRenew?: (boolean | undefined) | undefined;
	readonly AutoRenewPeriod?: (number | undefined) | undefined;
	readonly ChargeType?: (string | undefined) | undefined;
	readonly CisEnabled?: (boolean | undefined) | undefined;
	readonly CloudMonitorFlags?: (boolean | undefined) | undefined;
	readonly ClusterSpec?: (string | undefined) | undefined;
	readonly ContainerCidr?: (string | undefined) | undefined;
	readonly DeletionProtection?: (boolean | undefined) | undefined;
	readonly DisableRollback?: (boolean | undefined) | undefined;
	readonly EncryptionProviderKey?: (string | undefined) | undefined;
	readonly EndpointPublicAccess?: (boolean | undefined) | undefined;
	readonly FormatDisk?: (boolean | undefined) | undefined;
	readonly IsEnterpriseSecurityGroup?: (boolean | undefined) | undefined;
	readonly KeepInstanceName?: (boolean | undefined) | undefined;
	readonly KeyPair?: (string | undefined) | undefined;
	readonly KubernetesVersion?: (string | undefined) | undefined;
	readonly LoadBalancerSpec?: (string | undefined) | undefined;
	readonly LoginPassword?: (string | undefined) | undefined;
	readonly NodeCidrMask?: (string | undefined) | undefined;
	readonly NodeNameMode?: (string | undefined) | undefined;
	readonly NodePools?: (NodePools[] | undefined) | undefined;
	readonly NumOfNodes?: (number | undefined) | undefined;
	readonly OsType?: (string | undefined) | undefined;
	readonly Period?: (number | undefined) | undefined;
	readonly PeriodUnit?: (string | undefined) | undefined;
	readonly Platform?: (string | undefined) | undefined;
	readonly PodVswitchIds?: (string[] | undefined) | undefined;
	readonly ProxyMode?: (string | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly Runtime?: (Runtime | undefined) | undefined;
	readonly SecurityGroupId?: (string | undefined) | undefined;
	readonly ServiceCidr?: (string | undefined) | undefined;
	readonly SnatEntry?: (boolean | undefined) | undefined;
	readonly SocEnabled?: (boolean | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly Taint?: any | undefined;
	readonly TimeoutMins?: (number | undefined) | undefined;
	readonly UserData?: (string | undefined) | undefined;
	readonly WorkerDataDisk?: (boolean | undefined) | undefined;
	readonly WorkerDataDisks?: (WorkerDataDisks[] | undefined) | undefined;
	readonly WorkerInstanceTypes?: (string[] | undefined) | undefined;
	readonly WorkerSystemDiskCategory?: (string | undefined) | undefined;
	readonly WorkerSystemDiskSize?: (number | undefined) | undefined;
	readonly ZoneIds?: (string[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class ServerlessKubernetesCluster
	extends RosResource<ServerlessKubernetesClusterComponentInputs>
	implements ServerlessKubernetesClusterComponentOutputs
{
	constructor(entity: ADKEntity, options: ServerlessKubernetesClusterComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CS::ServerlessKubernetesCluster", options);
	}
	public readonly TaskId: any;
	public readonly ClusterId: any;
	public readonly ApiServerSlbId: any;
	public readonly ScalingGroupId: any;
	public readonly ScalingRuleId: any;
	public readonly DefaultUserKubeConfig: any;
	public readonly WorkerRamRoleName: any;
	public readonly ScalingConfigurationId: any;
	public readonly PrivateUserKubConfig: any;
	public readonly Nodes: any;
}
export interface ServerlessKubernetesClusterComponentOutputs {
	readonly TaskId: any;
	readonly ClusterId: any;
	readonly ApiServerSlbId: any;
	readonly ScalingGroupId: any;
	readonly ScalingRuleId: any;
	readonly DefaultUserKubeConfig: any;
	readonly WorkerRamRoleName: any;
	readonly ScalingConfigurationId: any;
	readonly PrivateUserKubConfig: any;
	readonly Nodes: any;
}
export interface ServerlessKubernetesClusterComponentInputs {
	readonly Name: string;
	readonly Addons?: (Addons[] | undefined) | undefined;
	readonly EndpointPublicAccess?: (boolean | undefined) | undefined;
	readonly KubernetesVersion?: (string | undefined) | undefined;
	readonly NatGateway?: (boolean | undefined) | undefined;
	readonly PrivateZone?: (boolean | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly SecurityGroupId?: (string | undefined) | undefined;
	readonly ServiceCidr?: (string | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly VpcId?: (string | undefined) | undefined;
	readonly VSwitchId?: (string | undefined) | undefined;
	readonly VSwitchIds?: (any[] | undefined) | undefined;
	readonly ZoneId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface Addons {
	readonly Version?: (string | undefined) | undefined;
	readonly Config?: (string | undefined) | undefined;
	readonly Name: string;
}
export interface AutoScaling {
	readonly EipBandwidth?: (number | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
	readonly IsBondEip?: (boolean | undefined) | undefined;
	readonly MinInstances?: (number | undefined) | undefined;
	readonly Enable: boolean;
	readonly MaxInstances?: (number | undefined) | undefined;
	readonly EipInternetChargeType?: (string | undefined) | undefined;
}
export interface DataDisks {
	readonly Category?: (string | undefined) | undefined;
	readonly Encrypted?: (boolean | undefined) | undefined;
	readonly PerformanceLevel?: (string | undefined) | undefined;
	readonly Size?: (number | undefined) | undefined;
	readonly AutoSnapshotPolicyId?: (string | undefined) | undefined;
}
export interface KubernetesConfig {
	readonly CpuPolicy?: (string | undefined) | undefined;
	readonly Runtime: string;
	readonly CmsEnabled?: (boolean | undefined) | undefined;
	readonly UserData?: (string | undefined) | undefined;
	readonly NodeNameMode?: (string | undefined) | undefined;
	readonly RuntimeVersion: string;
	readonly Labels?: (Labels[] | undefined) | undefined;
	readonly Unschedulable?: (boolean | undefined) | undefined;
	readonly Taints?: (Taints[] | undefined) | undefined;
}
export interface Labels {
	readonly Value: string;
	readonly Key: string;
}
export interface Management {
	readonly UpgradeConfig?: (UpgradeConfig | undefined) | undefined;
	readonly AutoRepair?: (boolean | undefined) | undefined;
	readonly Enable: boolean;
}
export interface NodePoolInfo {
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly Name: string;
}
export interface ScalingGroup {
	readonly SpotInstanceRemedy?: (boolean | undefined) | undefined;
	readonly Platform?: (string | undefined) | undefined;
	readonly DataDisks?: (DataDisks[] | undefined) | undefined;
	readonly SystemDiskSize: number;
	readonly CompensateWithOnDemand?: (boolean | undefined) | undefined;
	readonly InstanceChargeType?: (string | undefined) | undefined;
	readonly OnDemandPercentageAboveBaseCapacity?: (number | undefined) | undefined;
	readonly AutoRenew?: (boolean | undefined) | undefined;
	readonly OnDemandBaseCapacity?: (number | undefined) | undefined;
	readonly SystemDiskPerformanceLevel?: (string | undefined) | undefined;
	readonly ImageId?: (string | undefined) | undefined;
	readonly SpotPriceLimit?: (SpotPriceLimit[] | undefined) | undefined;
	readonly InstanceTypes: string[];
	readonly ZoneIds?: (string[] | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly SpotStrategy?: (string | undefined) | undefined;
	readonly LoginPassword?: (string | undefined) | undefined;
	readonly MultiAzPolicy?: (string | undefined) | undefined;
	readonly AutoRenewPeriod?: (number | undefined) | undefined;
	readonly ScalingPolicy?: (string | undefined) | undefined;
	readonly KeyPair?: (string | undefined) | undefined;
	readonly VSwitchIds: string[];
	readonly SecurityGroupId?: (string | undefined) | undefined;
	readonly SpotInstancePools?: (number | undefined) | undefined;
	readonly Period?: (number | undefined) | undefined;
	readonly InternetChargeType?: (string | undefined) | undefined;
	readonly SystemDiskCategory?: (string | undefined) | undefined;
	readonly InternetMaxBandwidthOut?: (number | undefined) | undefined;
	readonly RdsInstances?: (string[] | undefined) | undefined;
	readonly PeriodUnit?: (string | undefined) | undefined;
}
export interface SpotPriceLimit {
	readonly PriceLimit: number;
	readonly InstanceType: string;
}
export interface Tags {
	readonly Value: string;
	readonly Key: string;
}
export interface Taints {
	readonly Value: string;
	readonly Effect?: (string | undefined) | undefined;
	readonly Key: string;
}
export interface TeeConfig {
	readonly TeeEnable: boolean;
}
export interface UpgradeConfig {
	readonly AutoUpgrade?: (boolean | undefined) | undefined;
	readonly SurgePercentage?: (number | undefined) | undefined;
	readonly Surge?: (number | undefined) | undefined;
	readonly MaxUnavailable?: (number | undefined) | undefined;
}
export interface MasterDataDisks {
	readonly Category: string;
	readonly Size: number;
}
export interface NodePools {
	readonly NodePoolInfo?: (NodePoolInfo | undefined) | undefined;
	readonly KubernetesConfig?: (KubernetesConfig | undefined) | undefined;
	readonly Count?: (number | undefined) | undefined;
	readonly ScalingGroup: ScalingGroup;
}
export interface Runtime {
	readonly Version?: (string | undefined) | undefined;
	readonly Name: string;
}
export interface ScalingGroupTags {
	readonly Value: string;
	readonly Key: string;
}
export interface WorkerDataDisks {
	readonly Category: string;
	readonly Size: number;
}
export default {
	AnyCluster: anyCluster,
	ClusterAddons: ClusterAddons,
	ClusterApplication: ClusterApplication,
	ClusterHelmApplication: ClusterHelmApplication,
	ClusterNodePool: ClusterNodePool,
	KubernetesCluster: KubernetesCluster,
	ManagedEdgeKubernetesCluster: ManagedEdgeKubernetesCluster,
	ManagedKubernetesCluster: ManagedKubernetesCluster,
	ServerlessKubernetesCluster: ServerlessKubernetesCluster,
};
