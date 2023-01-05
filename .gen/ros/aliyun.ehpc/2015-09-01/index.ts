import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class AutoScaleConfig
	extends RosResource<AutoScaleConfigComponentInputs>
	implements AutoScaleConfigComponentOutputs
{
	constructor(entity: ADKEntity, options: AutoScaleConfigComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::EHPC::AutoScaleConfig", options);
	}
}
export interface AutoScaleConfigComponentOutputs {}
export interface AutoScaleConfigComponentInputs {
	readonly ClusterId: any | string;
	readonly EnableAutoGrow?: boolean | undefined;
	readonly EnableAutoShrink?: boolean | undefined;
	readonly ExcludeNodes?: string | undefined;
	readonly ExtraNodesGrowRatio?: number | undefined;
	readonly GrowIntervalInMinutes?: number | undefined;
	readonly GrowRatio?: number | undefined;
	readonly GrowTimeoutInMinutes?: number | undefined;
	readonly ImageId?: string | undefined;
	readonly MaxNodesInCluster?: number | undefined;
	readonly Queues?: Queues[] | undefined;
	readonly ShrinkIdleTimes?: number | undefined;
	readonly ShrinkIntervalInMinutes?: number | undefined;
	readonly SpotPriceLimit?: number | undefined;
	readonly SpotStrategy?: string | undefined;
	readonly LogicalId: string;
}
export class Cluster extends RosResource<ClusterComponentInputs> implements ClusterComponentOutputs {
	constructor(entity: ADKEntity, options: ClusterComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::EHPC::Cluster", options);
	}
	public readonly ClusterId: any;
	public readonly EcsInfo: any;
}
export interface ClusterComponentOutputs {
	readonly ClusterId: any;
	readonly EcsInfo: any;
}
export interface ClusterComponentInputs {
	readonly EcsOrderComputeCount: number;
	readonly EcsOrderComputeInstanceType: string;
	readonly EcsOrderLoginCount: number;
	readonly EcsOrderLoginInstanceType: string;
	readonly EcsOrderManagerInstanceType: string;
	readonly Name: any | string;
	readonly OsTag: string;
	readonly VSwitchId: string;
	readonly AccountType?: string | undefined;
	readonly AdditionalVolumes?: AdditionalVolumes[] | undefined;
	readonly Application?: Application[] | undefined;
	readonly AutoRenew?: boolean | undefined;
	readonly AutoRenewPeriod?: number | undefined;
	readonly ClientVersion?: string | undefined;
	readonly ComputeEnableHt?: boolean | undefined;
	readonly ComputeSpotPriceLimit?: string | undefined;
	readonly ComputeSpotStrategy?: string | undefined;
	readonly DeployMode?: string | undefined;
	readonly Description?: string | undefined;
	readonly EcsChargeType?: string | undefined;
	readonly EcsOrderManagerCount?: number | undefined;
	readonly EhpcVersion?: string | undefined;
	readonly HaEnable?: boolean | undefined;
	readonly ImageId?: string | undefined;
	readonly ImageOwnerAlias?: string | undefined;
	readonly InputFileUrl?: string | undefined;
	readonly IsComputeEss?: boolean | undefined;
	readonly JobQueue?: string | undefined;
	readonly KeyPairName?: string | undefined;
	readonly Password?: string | undefined;
	readonly Period?: number | undefined;
	readonly PeriodUnit?: string | undefined;
	readonly PostInstallScript?: PostInstallScript[] | undefined;
	readonly RemoteDirectory?: string | undefined;
	readonly RemoteVisEnable?: boolean | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly SccClusterId?: string | undefined;
	readonly SchedulerType?: string | undefined;
	readonly SecurityGroupId?: any | string;
	readonly SecurityGroupName?: string | undefined;
	readonly SystemDiskLevel?: string | undefined;
	readonly SystemDiskSize?: number | undefined;
	readonly SystemDiskType?: string | undefined;
	readonly VolumeId?: string | undefined;
	readonly VolumeMountpoint?: string | undefined;
	readonly VolumeProtocol?: string | undefined;
	readonly VolumeType?: string | undefined;
	readonly WithoutElasticIp?: boolean | undefined;
	readonly ZoneId?: string | undefined;
	readonly LogicalId: string;
}
export interface DataDisks {
	readonly DataDiskKMSKeyId?: string | undefined;
	readonly DataDiskPerformanceLevel?: string | undefined;
	readonly DataDiskEncrypted?: boolean | undefined;
	readonly DataDiskDeleteWithInstance?: boolean | undefined;
	readonly DataDiskSize?: number | undefined;
	readonly DataDiskCategory?: string | undefined;
}
export interface InstanceTypes {
	readonly ZoneId: string;
	readonly VSwitchId: string;
	readonly SpotPriceLimit?: number | undefined;
	readonly InstanceType: string;
	readonly SpotStrategy?: string | undefined;
}
export interface Queues {
	readonly HostNameSuffix?: string | undefined;
	readonly MinNodesInQueue?: number | undefined;
	readonly MaxNodesInQueue?: number | undefined;
	readonly EnableAutoGrow?: boolean | undefined;
	readonly DataDisks?: DataDisks[] | undefined;
	readonly SystemDiskSize?: number | undefined;
	readonly SystemDiskLevel?: string | undefined;
	readonly QueueImageId?: string | undefined;
	readonly MinNodesPerCycle?: number | undefined;
	readonly MaxNodesPerCycle?: number | undefined;
	readonly EnableAutoShrink?: boolean | undefined;
	readonly SystemDiskCategory?: string | undefined;
	readonly HostNamePrefix?: string | undefined;
	readonly SpotPriceLimit?: number | undefined;
	readonly InstanceTypes?: InstanceTypes[] | undefined;
	readonly InstanceType?: string | undefined;
	readonly QueueName?: string | undefined;
	readonly SpotStrategy?: string | undefined;
}
export interface AdditionalVolumes {
	readonly VolumeProtocol?: string | undefined;
	readonly LocalDirectory: string;
	readonly VolumeId: string;
	readonly RemoteDirectory?: string | undefined;
	readonly VolumeType?: string | undefined;
	readonly JobQueue?: string | undefined;
	readonly VolumeMountpoint: string;
	readonly Location?: string | undefined;
}
export interface Application {
	readonly Tag: string;
}
export interface PostInstallScript {
	readonly Args?: string | undefined;
	readonly Url?: string | undefined;
}
export default {
	AutoScaleConfig: AutoScaleConfig,
	Cluster: Cluster,
};
