import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Cluster extends RosResource<ClusterComponentInputs> implements ClusterComponentOutputs {
	constructor(entity: ADKEntity, options: ClusterComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::EMR::Cluster", options);
	}
	public readonly ClusterId: any;
	public readonly MasterNodePubIps: any;
	public readonly MasterNodeInnerIps: any;
	public readonly HostGroups: any;
}
export interface ClusterComponentOutputs {
	readonly ClusterId: any;
	readonly MasterNodePubIps: any;
	readonly MasterNodeInnerIps: any;
	readonly HostGroups: any;
}
export interface ClusterComponentInputs {
	readonly ChargeType: string;
	readonly ClusterType: string;
	readonly EmrVer: string;
	readonly HostGroup: HostGroup[];
	readonly Name: string;
	readonly NetType: string;
	readonly UseLocalMetaDb: boolean;
	readonly ZoneId: string;
	readonly AuthorizeContent?: string | undefined;
	readonly AutoRenew?: boolean | undefined;
	readonly BootstrapAction?: BootstrapAction[] | undefined;
	readonly ClickHouseConf?: { [key: string]: any } | undefined;
	readonly Config?: Config[] | undefined;
	readonly Configurations?: string | undefined;
	readonly DepositType?: string | undefined;
	readonly EasEnable?: boolean | undefined;
	readonly HighAvailabilityEnable?: boolean | undefined;
	readonly InitCustomHiveMetaDB?: boolean | undefined;
	readonly InstanceGeneration?: string | undefined;
	readonly IoOptimized?: boolean | undefined;
	readonly IsOpenPublicIp?: boolean | undefined;
	readonly KeyPairName?: string | undefined;
	readonly LogPath?: string | undefined;
	readonly MachineType?: string | undefined;
	readonly MasterPwd?: string | undefined;
	readonly MetaStoreConf?: string | undefined;
	readonly MetaStoreType?: string | undefined;
	readonly OptionSoftWareList?: string[] | undefined;
	readonly Period?: number | undefined;
	readonly RelatedClusterId?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly SecurityGroupId?: string | undefined;
	readonly SecurityGroupName?: string | undefined;
	readonly SshEnable?: boolean | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly UseCustomHiveMetaDB?: boolean | undefined;
	readonly UserDefinedEmrEcsRole?: string | undefined;
	readonly UserInfo?: UserInfo[] | undefined;
	readonly VpcId?: string | undefined;
	readonly VSwitchId?: string | undefined;
	readonly WhiteListType?: string | undefined;
	readonly LogicalId: string;
}
export class Cluster2 extends RosResource<Cluster2ComponentInputs> implements Cluster2ComponentOutputs {
	constructor(entity: ADKEntity, options: Cluster2ComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::EMR::Cluster2", options);
	}
	public readonly ClusterId: any;
}
export interface Cluster2ComponentOutputs {
	readonly ClusterId: any;
}
export interface Cluster2ComponentInputs {
	readonly Applications: Applications[];
	readonly ClusterName: string;
	readonly ClusterType: string;
	readonly NodeAttributes: NodeAttributes;
	readonly NodeGroups: NodeGroups[];
	readonly ReleaseVersion: string;
	readonly ApplicationConfigs?: ApplicationConfigs[] | undefined;
	readonly BootstrapScripts?: BootstrapScripts[] | undefined;
	readonly DeployMode?: string | undefined;
	readonly PaymentType?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly SecurityMode?: string | undefined;
	readonly SubscriptionConfig?: SubscriptionConfig | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly LogicalId: string;
}
export class ClusterServiceConfigs
	extends RosResource<ClusterServiceConfigsComponentInputs>
	implements ClusterServiceConfigsComponentOutputs
{
	constructor(entity: ADKEntity, options: ClusterServiceConfigsComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::EMR::ClusterServiceConfigs", options);
	}
}
export interface ClusterServiceConfigsComponentOutputs {}
export interface ClusterServiceConfigsComponentInputs {
	readonly ClusterId: any | string;
	readonly ServiceConfigs: ServiceConfigs[];
	readonly LogicalId: string;
}
export interface BootstrapAction {
	readonly Path?: string | undefined;
	readonly Arg?: string | undefined;
	readonly Name?: string | undefined;
}
export interface Config {
	readonly Replace?: string | undefined;
	readonly ConfigValue?: string | undefined;
	readonly ConfigKey?: string | undefined;
	readonly ServiceName?: string | undefined;
	readonly FileName?: string | undefined;
	readonly Encrypt?: string | undefined;
}
export interface HostGroup {
	readonly HostGroupType: string;
	readonly Comment?: string | undefined;
	readonly DiskCount: number;
	readonly NodeCount: number;
	readonly SysDiskType: string;
	readonly ClusterId?: string | undefined;
	readonly VSwitchId?: string | undefined;
	readonly AutoRenew?: boolean | undefined;
	readonly HostPassword?: string | undefined;
	readonly Period?: number | undefined;
	readonly HostGroupName?: string | undefined;
	readonly GpuDriver?: string | undefined;
	readonly DiskType: string;
	readonly DiskCapacity: number;
	readonly HostGroupId?: string | undefined;
	readonly ChargeType: string;
	readonly CreateType?: string | undefined;
	readonly HostKeyPairName?: string | undefined;
	readonly SysDiskCapacity: number;
	readonly InstanceType: string;
}
export interface Tags {
	readonly Value?: string | undefined;
	readonly Key: string;
}
export interface UserInfo {
	readonly UserName?: string | undefined;
	readonly UserId?: string | undefined;
	readonly Password?: string | undefined;
}
export interface ApplicationConfigs {
	readonly ConfigFileName?: string | undefined;
	readonly ApplicationName: string;
	readonly ConfigItemKey?: string | undefined;
	readonly NodeGroupName?: string | undefined;
	readonly NodeGroupId?: string | undefined;
	readonly ConfigScope?: string | undefined;
	readonly ConfigItemValue?: string | undefined;
}
export interface Applications {
	readonly ApplicationName: string;
}
export interface BootstrapScripts {
	readonly ScriptPath: string;
	readonly ScriptArgs?: string | undefined;
	readonly ExecutionFailStrategy?: string | undefined;
	readonly Priority?: number | undefined;
	readonly ScriptName: string;
	readonly ExecutionMoment?: string | undefined;
	readonly NodeSelector: NodeSelector;
}
export interface CostOptimizedConfig {
	readonly OnDemandBaseCapacity: number;
	readonly OnDemandPercentageAboveBaseCapacity: number;
	readonly SpotInstancePools: number;
}
export interface DataDisks {
	readonly Category: string;
	readonly PerformanceLevel?: string | undefined;
	readonly Size: number;
	readonly Count?: number | undefined;
}
export interface NodeAttributes {
	readonly KeyPairName?: string | undefined;
	readonly VpcId: string;
	readonly ZoneId: string;
	readonly SecurityGroupId: string;
	readonly RamRole?: string | undefined;
}
export interface NodeGroups {
	readonly WithPublicIp?: boolean | undefined;
	readonly SpotInstanceRemedy?: boolean | undefined;
	readonly NodeCount?: number | undefined;
	readonly NodeGroupName?: string | undefined;
	readonly DataDisks?: DataDisks[] | undefined;
	readonly VSwitchIds?: string[] | undefined;
	readonly SpotBidPrices?: SpotBidPrices[] | undefined;
	readonly NodeResizeStrategy?: string | undefined;
	readonly SystemDisk?: SystemDisk | undefined;
	readonly NodeGroupType: string;
	readonly InstanceTypes: string[];
	readonly AdditionalSecurityGroupIds?: string[] | undefined;
	readonly CostOptimizedConfig?: CostOptimizedConfig | undefined;
	readonly GracefulShutdown?: boolean | undefined;
	readonly DeploymentSetStrategy?: string | undefined;
	readonly SpotStrategy?: string | undefined;
}
export interface NodeSelector {
	readonly NodeGroupTypes?: string[] | undefined;
	readonly NodeGroupName?: string | undefined;
	readonly NodeGroupId?: string | undefined;
	readonly NodeSelectType: string;
	readonly NodeNames?: string[] | undefined;
}
export interface SpotBidPrices {
	readonly BidPrice?: number | undefined;
	readonly InstanceType?: string | undefined;
}
export interface SubscriptionConfig {
	readonly AutoRenewDurationUnit?: string | undefined;
	readonly AutoRenew?: boolean | undefined;
	readonly PaymentDurationUnit?: string | undefined;
	readonly PaymentDuration?: number | undefined;
	readonly AutoRenewDuration?: number | undefined;
}
export interface SystemDisk {
	readonly Category: string;
	readonly PerformanceLevel?: string | undefined;
	readonly Size: number;
	readonly Count?: number | undefined;
}
export interface ServiceConfigs {
	readonly Comment?: string | undefined;
	readonly GatewayClusterIdList?: string[] | undefined;
	readonly ServiceName: string;
	readonly CustomConfigParams?: string | undefined;
	readonly RefreshHostConfig?: boolean | undefined;
	readonly HostInstanceId?: string | undefined;
	readonly ConfigType?: string | undefined;
	readonly ConfigParams: string;
	readonly GroupId?: string | undefined;
}
export default {
	Cluster: Cluster,
	Cluster2: Cluster2,
	ClusterServiceConfigs: ClusterServiceConfigs,
};
