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
	readonly AuthorizeContent?: (string | undefined) | undefined;
	readonly AutoRenew?: (boolean | undefined) | undefined;
	readonly BootstrapAction?: (BootstrapAction[] | undefined) | undefined;
	readonly ClickHouseConf?: ({ [key: string]: any } | undefined) | undefined;
	readonly Config?: (Config[] | undefined) | undefined;
	readonly Configurations?: (string | undefined) | undefined;
	readonly DepositType?: (string | undefined) | undefined;
	readonly EasEnable?: (boolean | undefined) | undefined;
	readonly HighAvailabilityEnable?: (boolean | undefined) | undefined;
	readonly InitCustomHiveMetaDB?: (boolean | undefined) | undefined;
	readonly InstanceGeneration?: (string | undefined) | undefined;
	readonly IoOptimized?: (boolean | undefined) | undefined;
	readonly IsOpenPublicIp?: (boolean | undefined) | undefined;
	readonly KeyPairName?: (string | undefined) | undefined;
	readonly LogPath?: (string | undefined) | undefined;
	readonly MachineType?: (string | undefined) | undefined;
	readonly MasterPwd?: (string | undefined) | undefined;
	readonly MetaStoreConf?: (string | undefined) | undefined;
	readonly MetaStoreType?: (string | undefined) | undefined;
	readonly OptionSoftWareList?: (string[] | undefined) | undefined;
	readonly Period?: (number | undefined) | undefined;
	readonly RelatedClusterId?: (string | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly SecurityGroupId?: (string | undefined) | undefined;
	readonly SecurityGroupName?: (string | undefined) | undefined;
	readonly SshEnable?: (boolean | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly UseCustomHiveMetaDB?: (boolean | undefined) | undefined;
	readonly UserDefinedEmrEcsRole?: (string | undefined) | undefined;
	readonly UserInfo?: (UserInfo[] | undefined) | undefined;
	readonly VpcId?: (string | undefined) | undefined;
	readonly VSwitchId?: (string | undefined) | undefined;
	readonly WhiteListType?: (string | undefined) | undefined;
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
	readonly ApplicationConfigs?: (ApplicationConfigs[] | undefined) | undefined;
	readonly BootstrapScripts?: (BootstrapScripts[] | undefined) | undefined;
	readonly DeployMode?: (string | undefined) | undefined;
	readonly PaymentType?: (string | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly SecurityMode?: (string | undefined) | undefined;
	readonly SubscriptionConfig?: (SubscriptionConfig | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
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
	readonly Path?: (string | undefined) | undefined;
	readonly Arg?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
}
export interface Config {
	readonly Replace?: (string | undefined) | undefined;
	readonly ConfigValue?: (string | undefined) | undefined;
	readonly ConfigKey?: (string | undefined) | undefined;
	readonly ServiceName?: (string | undefined) | undefined;
	readonly FileName?: (string | undefined) | undefined;
	readonly Encrypt?: (string | undefined) | undefined;
}
export interface HostGroup {
	readonly HostGroupType: string;
	readonly Comment?: (string | undefined) | undefined;
	readonly DiskCount: number;
	readonly NodeCount: number;
	readonly SysDiskType: string;
	readonly ClusterId?: (string | undefined) | undefined;
	readonly VSwitchId?: (string | undefined) | undefined;
	readonly AutoRenew?: (boolean | undefined) | undefined;
	readonly HostPassword?: (string | undefined) | undefined;
	readonly Period?: (number | undefined) | undefined;
	readonly HostGroupName?: (string | undefined) | undefined;
	readonly GpuDriver?: (string | undefined) | undefined;
	readonly DiskType: string;
	readonly DiskCapacity: number;
	readonly HostGroupId?: (string | undefined) | undefined;
	readonly ChargeType: string;
	readonly CreateType?: (string | undefined) | undefined;
	readonly HostKeyPairName?: (string | undefined) | undefined;
	readonly SysDiskCapacity: number;
	readonly InstanceType: string;
}
export interface Tags {
	readonly Value?: (string | undefined) | undefined;
	readonly Key: string;
}
export interface UserInfo {
	readonly UserName?: (string | undefined) | undefined;
	readonly UserId?: (string | undefined) | undefined;
	readonly Password?: (string | undefined) | undefined;
}
export interface ApplicationConfigs {
	readonly ConfigFileName?: (string | undefined) | undefined;
	readonly ApplicationName: string;
	readonly ConfigItemKey?: (string | undefined) | undefined;
	readonly NodeGroupName?: (string | undefined) | undefined;
	readonly NodeGroupId?: (string | undefined) | undefined;
	readonly ConfigScope?: (string | undefined) | undefined;
	readonly ConfigItemValue?: (string | undefined) | undefined;
}
export interface Applications {
	readonly ApplicationName: string;
}
export interface BootstrapScripts {
	readonly ScriptPath: string;
	readonly ScriptArgs?: (string | undefined) | undefined;
	readonly ExecutionFailStrategy?: (string | undefined) | undefined;
	readonly Priority?: (number | undefined) | undefined;
	readonly ScriptName: string;
	readonly ExecutionMoment?: (string | undefined) | undefined;
	readonly NodeSelector: NodeSelector;
}
export interface CostOptimizedConfig {
	readonly OnDemandBaseCapacity: number;
	readonly OnDemandPercentageAboveBaseCapacity: number;
	readonly SpotInstancePools: number;
}
export interface DataDisks {
	readonly Category: string;
	readonly PerformanceLevel?: (string | undefined) | undefined;
	readonly Size: number;
	readonly Count?: (number | undefined) | undefined;
}
export interface NodeAttributes {
	readonly KeyPairName?: (string | undefined) | undefined;
	readonly VpcId: string;
	readonly ZoneId: string;
	readonly SecurityGroupId: string;
	readonly RamRole?: (string | undefined) | undefined;
}
export interface NodeGroups {
	readonly WithPublicIp?: (boolean | undefined) | undefined;
	readonly SpotInstanceRemedy?: (boolean | undefined) | undefined;
	readonly NodeCount?: (number | undefined) | undefined;
	readonly NodeGroupName?: (string | undefined) | undefined;
	readonly DataDisks?: (DataDisks[] | undefined) | undefined;
	readonly VSwitchIds?: (string[] | undefined) | undefined;
	readonly SpotBidPrices?: (SpotBidPrices[] | undefined) | undefined;
	readonly NodeResizeStrategy?: (string | undefined) | undefined;
	readonly SystemDisk?: (SystemDisk | undefined) | undefined;
	readonly NodeGroupType: string;
	readonly InstanceTypes: string[];
	readonly AdditionalSecurityGroupIds?: (string[] | undefined) | undefined;
	readonly CostOptimizedConfig?: (CostOptimizedConfig | undefined) | undefined;
	readonly GracefulShutdown?: (boolean | undefined) | undefined;
	readonly DeploymentSetStrategy?: (string | undefined) | undefined;
	readonly SpotStrategy?: (string | undefined) | undefined;
}
export interface NodeSelector {
	readonly NodeGroupTypes?: (string[] | undefined) | undefined;
	readonly NodeGroupName?: (string | undefined) | undefined;
	readonly NodeGroupId?: (string | undefined) | undefined;
	readonly NodeSelectType: string;
	readonly NodeNames?: (string[] | undefined) | undefined;
}
export interface SpotBidPrices {
	readonly BidPrice?: (number | undefined) | undefined;
	readonly InstanceType?: (string | undefined) | undefined;
}
export interface SubscriptionConfig {
	readonly AutoRenewDurationUnit?: (string | undefined) | undefined;
	readonly AutoRenew?: (boolean | undefined) | undefined;
	readonly PaymentDurationUnit?: (string | undefined) | undefined;
	readonly PaymentDuration?: (number | undefined) | undefined;
	readonly AutoRenewDuration?: (number | undefined) | undefined;
}
export interface SystemDisk {
	readonly Category: string;
	readonly PerformanceLevel?: (string | undefined) | undefined;
	readonly Size: number;
	readonly Count?: (number | undefined) | undefined;
}
export interface ServiceConfigs {
	readonly Comment?: (string | undefined) | undefined;
	readonly GatewayClusterIdList?: (string[] | undefined) | undefined;
	readonly ServiceName: string;
	readonly CustomConfigParams?: (string | undefined) | undefined;
	readonly RefreshHostConfig?: (boolean | undefined) | undefined;
	readonly HostInstanceId?: (string | undefined) | undefined;
	readonly ConfigType?: (string | undefined) | undefined;
	readonly ConfigParams: string;
	readonly GroupId?: (string | undefined) | undefined;
}
export default {
	Cluster: Cluster,
	Cluster2: Cluster2,
	ClusterServiceConfigs: ClusterServiceConfigs,
};
