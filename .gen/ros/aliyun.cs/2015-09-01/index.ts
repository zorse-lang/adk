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
	readonly InstalledIgnore?: boolean | undefined;
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
	readonly DefaultNamespace?: string | undefined;
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
	readonly ChartValues?: { [key: string]: any } | undefined;
	readonly Namespace?: string | undefined;
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
	readonly AutoScaling?: AutoScaling | undefined;
	readonly Count?: number | undefined;
	readonly KubernetesConfig?: KubernetesConfig | undefined;
	readonly Management?: Management | undefined;
	readonly NodePoolInfo?: NodePoolInfo | undefined;
	readonly TeeConfig?: TeeConfig | undefined;
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
	readonly Addons?: Addons[] | undefined;
	readonly AutoRenew?: boolean | undefined;
	readonly AutoRenewPeriod?: number | undefined;
	readonly ChargeType?: string | undefined;
	readonly CisEnabled?: boolean | undefined;
	readonly CloudMonitorFlags?: boolean | undefined;
	readonly ContainerCidr?: string | undefined;
	readonly CpuPolicy?: string | undefined;
	readonly DeletionProtection?: boolean | undefined;
	readonly DisableRollback?: boolean | undefined;
	readonly EndpointPublicAccess?: boolean | undefined;
	readonly FormatDisk?: boolean | undefined;
	readonly IsEnterpriseSecurityGroup?: boolean | undefined;
	readonly KeepInstanceName?: boolean | undefined;
	readonly KeyPair?: string | undefined;
	readonly KubernetesVersion?: string | undefined;
	readonly LoadBalancerSpec?: string | undefined;
	readonly LoginPassword?: string | undefined;
	readonly MasterCount?: number | undefined;
	readonly MasterDataDisk?: boolean | undefined;
	readonly MasterDataDisks?: MasterDataDisks[] | undefined;
	readonly MasterSystemDiskCategory?: string | undefined;
	readonly MasterSystemDiskPerformanceLevel?: string | undefined;
	readonly MasterSystemDiskSize?: number | undefined;
	readonly MasterSystemDiskSnapshotPolicyId?: string | undefined;
	readonly MasterZoneIds?: string[] | undefined;
	readonly NodeCidrMask?: string | undefined;
	readonly NodeNameMode?: string | undefined;
	readonly NodePools?: NodePools[] | undefined;
	readonly NodePortRange?: string | undefined;
	readonly NumOfNodes?: number | undefined;
	readonly OsType?: string | undefined;
	readonly Period?: number | undefined;
	readonly PeriodUnit?: string | undefined;
	readonly Platform?: string | undefined;
	readonly PodVswitchIds?: string[] | undefined;
	readonly ProxyMode?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly Runtime?: Runtime | undefined;
	readonly SecurityGroupId?: string | undefined;
	readonly ServiceCidr?: string | undefined;
	readonly SnatEntry?: boolean | undefined;
	readonly SocEnabled?: boolean | undefined;
	readonly SshFlags?: boolean | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly Taint?: any;
	readonly TimeoutMins?: number | undefined;
	readonly TimeZone?: string | undefined;
	readonly UserCa?: string | undefined;
	readonly UserData?: string | undefined;
	readonly WorkerDataDisk?: boolean | undefined;
	readonly WorkerDataDisks?: WorkerDataDisks[] | undefined;
	readonly WorkerInstanceTypes?: string[] | undefined;
	readonly WorkerSystemDiskCategory?: string | undefined;
	readonly WorkerSystemDiskSize?: number | undefined;
	readonly WorkerSystemDiskSnapshotPolicyId?: string | undefined;
	readonly WorkerZoneIds?: string[] | undefined;
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
	readonly Addons?: Addons[] | undefined;
	readonly AutoRenew?: boolean | undefined;
	readonly AutoRenewPeriod?: number | undefined;
	readonly ChargeType?: string | undefined;
	readonly CloudMonitorFlags?: boolean | undefined;
	readonly ClusterSpec?: string | undefined;
	readonly ContainerCidr?: string | undefined;
	readonly DeletionProtection?: boolean | undefined;
	readonly DisableRollback?: boolean | undefined;
	readonly EndpointPublicAccess?: boolean | undefined;
	readonly IsEnterpriseSecurityGroup?: boolean | undefined;
	readonly KeyPair?: string | undefined;
	readonly LoginPassword?: string | undefined;
	readonly NodeCidrMask?: string | undefined;
	readonly Period?: number | undefined;
	readonly PeriodUnit?: string | undefined;
	readonly Profile?: string | undefined;
	readonly ProxyMode?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly ServiceCidr?: string | undefined;
	readonly SnatEntry?: boolean | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly TimeoutMins?: number | undefined;
	readonly VpcId?: string | undefined;
	readonly VSwitchIds?: any[] | undefined;
	readonly WorkerDataDisk?: boolean | undefined;
	readonly WorkerDataDiskCategory?: string | undefined;
	readonly WorkerDataDisks?: WorkerDataDisks[] | undefined;
	readonly WorkerDataDiskSize?: number | undefined;
	readonly WorkerInstanceTypes?: string[] | undefined;
	readonly WorkerSystemDiskCategory?: string | undefined;
	readonly WorkerSystemDiskSize?: number | undefined;
	readonly ZoneIds?: string[] | undefined;
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
	readonly Addons?: Addons[] | undefined;
	readonly AutoRenew?: boolean | undefined;
	readonly AutoRenewPeriod?: number | undefined;
	readonly ChargeType?: string | undefined;
	readonly CisEnabled?: boolean | undefined;
	readonly CloudMonitorFlags?: boolean | undefined;
	readonly ClusterSpec?: string | undefined;
	readonly ContainerCidr?: string | undefined;
	readonly DeletionProtection?: boolean | undefined;
	readonly DisableRollback?: boolean | undefined;
	readonly EncryptionProviderKey?: string | undefined;
	readonly EndpointPublicAccess?: boolean | undefined;
	readonly FormatDisk?: boolean | undefined;
	readonly IsEnterpriseSecurityGroup?: boolean | undefined;
	readonly KeepInstanceName?: boolean | undefined;
	readonly KeyPair?: string | undefined;
	readonly KubernetesVersion?: string | undefined;
	readonly LoadBalancerSpec?: string | undefined;
	readonly LoginPassword?: string | undefined;
	readonly NodeCidrMask?: string | undefined;
	readonly NodeNameMode?: string | undefined;
	readonly NodePools?: NodePools[] | undefined;
	readonly NumOfNodes?: number | undefined;
	readonly OsType?: string | undefined;
	readonly Period?: number | undefined;
	readonly PeriodUnit?: string | undefined;
	readonly Platform?: string | undefined;
	readonly PodVswitchIds?: string[] | undefined;
	readonly ProxyMode?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly Runtime?: Runtime | undefined;
	readonly SecurityGroupId?: string | undefined;
	readonly ServiceCidr?: string | undefined;
	readonly SnatEntry?: boolean | undefined;
	readonly SocEnabled?: boolean | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly Taint?: any;
	readonly TimeoutMins?: number | undefined;
	readonly UserData?: string | undefined;
	readonly WorkerDataDisk?: boolean | undefined;
	readonly WorkerDataDisks?: WorkerDataDisks[] | undefined;
	readonly WorkerInstanceTypes?: string[] | undefined;
	readonly WorkerSystemDiskCategory?: string | undefined;
	readonly WorkerSystemDiskSize?: number | undefined;
	readonly ZoneIds?: string[] | undefined;
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
	readonly Addons?: Addons[] | undefined;
	readonly EndpointPublicAccess?: boolean | undefined;
	readonly KubernetesVersion?: string | undefined;
	readonly NatGateway?: boolean | undefined;
	readonly PrivateZone?: boolean | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly SecurityGroupId?: string | undefined;
	readonly ServiceCidr?: string | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly VpcId?: string | undefined;
	readonly VSwitchId?: string | undefined;
	readonly VSwitchIds?: any[] | undefined;
	readonly ZoneId?: string | undefined;
	readonly LogicalId: string;
}
export interface Addons {
	readonly Version?: string | undefined;
	readonly Config?: string | undefined;
	readonly Name: string;
}
export interface AutoScaling {
	readonly EipBandwidth?: number | undefined;
	readonly Type?: string | undefined;
	readonly IsBondEip?: boolean | undefined;
	readonly MinInstances?: number | undefined;
	readonly Enable: boolean;
	readonly MaxInstances?: number | undefined;
	readonly EipInternetChargeType?: string | undefined;
}
export interface DataDisks {
	readonly Category?: string | undefined;
	readonly Encrypted?: boolean | undefined;
	readonly PerformanceLevel?: string | undefined;
	readonly Size?: number | undefined;
	readonly AutoSnapshotPolicyId?: string | undefined;
}
export interface KubernetesConfig {
	readonly CpuPolicy?: string | undefined;
	readonly Runtime: string;
	readonly CmsEnabled?: boolean | undefined;
	readonly UserData?: string | undefined;
	readonly NodeNameMode?: string | undefined;
	readonly RuntimeVersion: string;
	readonly Labels?: Labels[] | undefined;
	readonly Unschedulable?: boolean | undefined;
	readonly Taints?: Taints[] | undefined;
}
export interface Labels {
	readonly Value: string;
	readonly Key: string;
}
export interface Management {
	readonly UpgradeConfig?: UpgradeConfig | undefined;
	readonly AutoRepair?: boolean | undefined;
	readonly Enable: boolean;
}
export interface NodePoolInfo {
	readonly ResourceGroupId?: string | undefined;
	readonly Name: string;
}
export interface ScalingGroup {
	readonly SpotInstanceRemedy?: boolean | undefined;
	readonly Platform?: string | undefined;
	readonly DataDisks?: DataDisks[] | undefined;
	readonly SystemDiskSize: number;
	readonly CompensateWithOnDemand?: boolean | undefined;
	readonly InstanceChargeType?: string | undefined;
	readonly OnDemandPercentageAboveBaseCapacity?: number | undefined;
	readonly AutoRenew?: boolean | undefined;
	readonly OnDemandBaseCapacity?: number | undefined;
	readonly SystemDiskPerformanceLevel?: string | undefined;
	readonly ImageId?: string | undefined;
	readonly SpotPriceLimit?: SpotPriceLimit[] | undefined;
	readonly InstanceTypes: string[];
	readonly ZoneIds?: string[] | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly SpotStrategy?: string | undefined;
	readonly LoginPassword?: string | undefined;
	readonly MultiAzPolicy?: string | undefined;
	readonly AutoRenewPeriod?: number | undefined;
	readonly ScalingPolicy?: string | undefined;
	readonly KeyPair?: string | undefined;
	readonly VSwitchIds: string[];
	readonly SecurityGroupId?: string | undefined;
	readonly SpotInstancePools?: number | undefined;
	readonly Period?: number | undefined;
	readonly InternetChargeType?: string | undefined;
	readonly SystemDiskCategory?: string | undefined;
	readonly InternetMaxBandwidthOut?: number | undefined;
	readonly RdsInstances?: string[] | undefined;
	readonly PeriodUnit?: string | undefined;
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
	readonly Effect?: string | undefined;
	readonly Key: string;
}
export interface TeeConfig {
	readonly TeeEnable: boolean;
}
export interface UpgradeConfig {
	readonly AutoUpgrade?: boolean | undefined;
	readonly SurgePercentage?: number | undefined;
	readonly Surge?: number | undefined;
	readonly MaxUnavailable?: number | undefined;
}
export interface MasterDataDisks {
	readonly Category: string;
	readonly Size: number;
}
export interface NodePools {
	readonly NodePoolInfo?: NodePoolInfo | undefined;
	readonly KubernetesConfig?: KubernetesConfig | undefined;
	readonly Count?: number | undefined;
	readonly ScalingGroup: ScalingGroup;
}
export interface Runtime {
	readonly Version?: string | undefined;
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
