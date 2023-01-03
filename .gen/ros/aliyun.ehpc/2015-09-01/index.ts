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
	readonly EnableAutoGrow?: (boolean | undefined) | undefined;
	readonly EnableAutoShrink?: (boolean | undefined) | undefined;
	readonly ExcludeNodes?: (string | undefined) | undefined;
	readonly ExtraNodesGrowRatio?: (number | undefined) | undefined;
	readonly GrowIntervalInMinutes?: (number | undefined) | undefined;
	readonly GrowRatio?: (number | undefined) | undefined;
	readonly GrowTimeoutInMinutes?: (number | undefined) | undefined;
	readonly ImageId?: (string | undefined) | undefined;
	readonly MaxNodesInCluster?: (number | undefined) | undefined;
	readonly Queues?: (Queues[] | undefined) | undefined;
	readonly ShrinkIdleTimes?: (number | undefined) | undefined;
	readonly ShrinkIntervalInMinutes?: (number | undefined) | undefined;
	readonly SpotPriceLimit?: (number | undefined) | undefined;
	readonly SpotStrategy?: (string | undefined) | undefined;
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
	readonly AccountType?: (string | undefined) | undefined;
	readonly AdditionalVolumes?: (AdditionalVolumes[] | undefined) | undefined;
	readonly Application?: (Application[] | undefined) | undefined;
	readonly AutoRenew?: (boolean | undefined) | undefined;
	readonly AutoRenewPeriod?: (number | undefined) | undefined;
	readonly ClientVersion?: (string | undefined) | undefined;
	readonly ComputeEnableHt?: (boolean | undefined) | undefined;
	readonly ComputeSpotPriceLimit?: (string | undefined) | undefined;
	readonly ComputeSpotStrategy?: (string | undefined) | undefined;
	readonly DeployMode?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly EcsChargeType?: (string | undefined) | undefined;
	readonly EcsOrderManagerCount?: (number | undefined) | undefined;
	readonly EhpcVersion?: (string | undefined) | undefined;
	readonly HaEnable?: (boolean | undefined) | undefined;
	readonly ImageId?: (string | undefined) | undefined;
	readonly ImageOwnerAlias?: (string | undefined) | undefined;
	readonly InputFileUrl?: (string | undefined) | undefined;
	readonly IsComputeEss?: (boolean | undefined) | undefined;
	readonly JobQueue?: (string | undefined) | undefined;
	readonly KeyPairName?: (string | undefined) | undefined;
	readonly Password?: (string | undefined) | undefined;
	readonly Period?: (number | undefined) | undefined;
	readonly PeriodUnit?: (string | undefined) | undefined;
	readonly PostInstallScript?: (PostInstallScript[] | undefined) | undefined;
	readonly RemoteDirectory?: (string | undefined) | undefined;
	readonly RemoteVisEnable?: (boolean | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly SccClusterId?: (string | undefined) | undefined;
	readonly SchedulerType?: (string | undefined) | undefined;
	readonly SecurityGroupId?: (any | string) | undefined;
	readonly SecurityGroupName?: (string | undefined) | undefined;
	readonly SystemDiskLevel?: (string | undefined) | undefined;
	readonly SystemDiskSize?: (number | undefined) | undefined;
	readonly SystemDiskType?: (string | undefined) | undefined;
	readonly VolumeId?: (string | undefined) | undefined;
	readonly VolumeMountpoint?: (string | undefined) | undefined;
	readonly VolumeProtocol?: (string | undefined) | undefined;
	readonly VolumeType?: (string | undefined) | undefined;
	readonly WithoutElasticIp?: (boolean | undefined) | undefined;
	readonly ZoneId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface DataDisks {
	readonly DataDiskKMSKeyId?: (string | undefined) | undefined;
	readonly DataDiskPerformanceLevel?: (string | undefined) | undefined;
	readonly DataDiskEncrypted?: (boolean | undefined) | undefined;
	readonly DataDiskDeleteWithInstance?: (boolean | undefined) | undefined;
	readonly DataDiskSize?: (number | undefined) | undefined;
	readonly DataDiskCategory?: (string | undefined) | undefined;
}
export interface InstanceTypes {
	readonly ZoneId: string;
	readonly VSwitchId: string;
	readonly SpotPriceLimit?: (number | undefined) | undefined;
	readonly InstanceType: string;
	readonly SpotStrategy?: (string | undefined) | undefined;
}
export interface Queues {
	readonly HostNameSuffix?: (string | undefined) | undefined;
	readonly MinNodesInQueue?: (number | undefined) | undefined;
	readonly MaxNodesInQueue?: (number | undefined) | undefined;
	readonly EnableAutoGrow?: (boolean | undefined) | undefined;
	readonly DataDisks?: (DataDisks[] | undefined) | undefined;
	readonly SystemDiskSize?: (number | undefined) | undefined;
	readonly SystemDiskLevel?: (string | undefined) | undefined;
	readonly QueueImageId?: (string | undefined) | undefined;
	readonly MinNodesPerCycle?: (number | undefined) | undefined;
	readonly MaxNodesPerCycle?: (number | undefined) | undefined;
	readonly EnableAutoShrink?: (boolean | undefined) | undefined;
	readonly SystemDiskCategory?: (string | undefined) | undefined;
	readonly HostNamePrefix?: (string | undefined) | undefined;
	readonly SpotPriceLimit?: (number | undefined) | undefined;
	readonly InstanceTypes?: (InstanceTypes[] | undefined) | undefined;
	readonly InstanceType?: (string | undefined) | undefined;
	readonly QueueName?: (string | undefined) | undefined;
	readonly SpotStrategy?: (string | undefined) | undefined;
}
export interface AdditionalVolumes {
	readonly VolumeProtocol?: (string | undefined) | undefined;
	readonly LocalDirectory: string;
	readonly VolumeId: string;
	readonly RemoteDirectory?: (string | undefined) | undefined;
	readonly VolumeType?: (string | undefined) | undefined;
	readonly JobQueue?: (string | undefined) | undefined;
	readonly VolumeMountpoint: string;
	readonly Location?: (string | undefined) | undefined;
}
export interface Application {
	readonly Tag: string;
}
export interface PostInstallScript {
	readonly Args?: (string | undefined) | undefined;
	readonly Url?: (string | undefined) | undefined;
}
export default {
	AutoScaleConfig: AutoScaleConfig,
	Cluster: Cluster,
};
