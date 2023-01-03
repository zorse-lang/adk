import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsZonesClustersNodePools
	extends GdmResource<ProjectsZonesClustersNodePoolsComponentInputs>
	implements ProjectsZonesClustersNodePoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsZonesClustersNodePoolsComponentInputs) {
		super(entity, options.name, "container.v1.ProjectsZonesClustersNodePools", options);
	}
	public readonly instanceGroupUrls?: string[] | undefined;
	public readonly podIpv4CidrSize?: number | undefined;
	public readonly selfLink?: string | undefined;
	public readonly status?: string | undefined;
	public readonly statusMessage?: string | undefined;
	public readonly updateInfo?: UpdateInfo | undefined;
}
export interface ProjectsZonesClustersNodePoolsComponentOutputs {
	readonly instanceGroupUrls?: string[] | undefined;
	readonly podIpv4CidrSize?: number | undefined;
	readonly selfLink?: string | undefined;
	readonly status?: string | undefined;
	readonly statusMessage?: string | undefined;
	readonly updateInfo?: UpdateInfo | undefined;
}
export interface ProjectsZonesClustersNodePoolsComponentInputs {
	readonly autoscaling?: NodePoolAutoscaling | undefined;
	readonly clusterId: string;
	readonly conditions?: StatusCondition[] | undefined;
	readonly config?: NodeConfig | undefined;
	readonly etag?: string | undefined;
	readonly initialNodeCount?: number | undefined;
	readonly locations?: string[] | undefined;
	readonly management?: NodeManagement | undefined;
	readonly maxPodsConstraint?: MaxPodsConstraint | undefined;
	readonly name: string;
	readonly networkConfig?: NodeNetworkConfig | undefined;
	readonly nodePool: NodePool;
	readonly parent?: string | undefined;
	readonly placementPolicy?: PlacementPolicy | undefined;
	readonly upgradeSettings?: UpgradeSettings | undefined;
	readonly version?: string | undefined;
	readonly zone: string;
	readonly type: string;
}
export interface AcceleratorConfig {
	readonly acceleratorCount?: string | undefined;
	readonly acceleratorType?: string | undefined;
	readonly gpuPartitionSize?: string | undefined;
	readonly gpuSharingConfig?: GPUSharingConfig | undefined;
}
export interface AdvancedMachineFeatures {
	readonly threadsPerCore?: string | undefined;
}
export interface AutoUpgradeOptions {
	readonly autoUpgradeStartTime?: string | undefined;
	readonly description?: string | undefined;
}
export interface BlueGreenInfo {
	readonly blueInstanceGroupUrls?: string[] | undefined;
	readonly bluePoolDeletionStartTime?: string | undefined;
	readonly greenInstanceGroupUrls?: string[] | undefined;
	readonly greenPoolVersion?: string | undefined;
	readonly phase?: string | undefined;
}
export interface BlueGreenSettings {
	readonly nodePoolSoakDuration?: string | undefined;
	readonly standardRolloutPolicy?: StandardRolloutPolicy | undefined;
}
export interface ConfidentialNodes {
	readonly enabled?: boolean | undefined;
}
export interface CreateNodePoolRequest {
	readonly clusterId?: string | undefined;
	readonly nodePool: NodePool;
	readonly parent?: string | undefined;
	readonly projectId?: string | undefined;
	readonly zone?: string | undefined;
}
export interface EphemeralStorageLocalSsdConfig {
	readonly localSsdCount?: number | undefined;
}
export interface FastSocket {
	readonly enabled?: boolean | undefined;
}
export interface GcfsConfig {
	readonly enabled?: boolean | undefined;
}
export interface GPUSharingConfig {
	readonly gpuSharingStrategy?: string | undefined;
	readonly maxSharedClientsPerGpu?: string | undefined;
}
export interface LinuxNodeConfig {
	readonly cgroupMode?: string | undefined;
	readonly sysctls?: { [P in string]: string } | undefined;
}
export interface LocalNvmeSsdBlockConfig {
	readonly localSsdCount?: number | undefined;
}
export interface LoggingVariantConfig {
	readonly variant?: string | undefined;
}
export interface MaxPodsConstraint {
	readonly maxPodsPerNode?: string | undefined;
}
export interface NetworkPerformanceConfig {
	readonly totalEgressBandwidthTier?: string | undefined;
}
export interface NodeConfig {
	readonly accelerators?: AcceleratorConfig[] | undefined;
	readonly advancedMachineFeatures?: AdvancedMachineFeatures | undefined;
	readonly bootDiskKmsKey?: string | undefined;
	readonly confidentialNodes?: ConfidentialNodes | undefined;
	readonly diskSizeGb?: number | undefined;
	readonly diskType?: string | undefined;
	readonly ephemeralStorageLocalSsdConfig?: EphemeralStorageLocalSsdConfig | undefined;
	readonly fastSocket?: FastSocket | undefined;
	readonly gcfsConfig?: GcfsConfig | undefined;
	readonly gvnic?: VirtualNIC | undefined;
	readonly imageType?: string | undefined;
	readonly kubeletConfig?: NodeKubeletConfig | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly linuxNodeConfig?: LinuxNodeConfig | undefined;
	readonly localNvmeSsdBlockConfig?: LocalNvmeSsdBlockConfig | undefined;
	readonly localSsdCount?: number | undefined;
	readonly loggingConfig?: NodePoolLoggingConfig | undefined;
	readonly machineType?: string | undefined;
	readonly metadata?: { [P in string]: string } | undefined;
	readonly minCpuPlatform?: string | undefined;
	readonly nodeGroup?: string | undefined;
	readonly oauthScopes?: string[] | undefined;
	readonly preemptible?: boolean | undefined;
	readonly reservationAffinity?: ReservationAffinity | undefined;
	readonly resourceLabels?: { [P in string]: string } | undefined;
	readonly sandboxConfig?: SandboxConfig | undefined;
	readonly serviceAccount?: string | undefined;
	readonly shieldedInstanceConfig?: ShieldedInstanceConfig | undefined;
	readonly spot?: boolean | undefined;
	readonly tags?: string[] | undefined;
	readonly taints?: NodeTaint[] | undefined;
	readonly windowsNodeConfig?: WindowsNodeConfig | undefined;
	readonly workloadMetadataConfig?: WorkloadMetadataConfig | undefined;
}
export interface NodeKubeletConfig {
	readonly cpuCfsQuota?: boolean | undefined;
	readonly cpuCfsQuotaPeriod?: string | undefined;
	readonly cpuManagerPolicy?: string | undefined;
	readonly podPidsLimit?: string | undefined;
}
export interface NodeManagement {
	readonly autoRepair?: boolean | undefined;
	readonly autoUpgrade?: boolean | undefined;
	readonly upgradeOptions?: AutoUpgradeOptions | undefined;
}
export interface NodeNetworkConfig {
	readonly createPodRange?: boolean | undefined;
	readonly enablePrivateNodes?: boolean | undefined;
	readonly networkPerformanceConfig?: NetworkPerformanceConfig | undefined;
	readonly podIpv4CidrBlock?: string | undefined;
	readonly podRange?: string | undefined;
}
export interface NodePool {
	readonly autoscaling?: NodePoolAutoscaling | undefined;
	readonly conditions?: StatusCondition[] | undefined;
	readonly config?: NodeConfig | undefined;
	readonly etag?: string | undefined;
	readonly initialNodeCount?: number | undefined;
	readonly instanceGroupUrls?: string[] | undefined;
	readonly locations?: string[] | undefined;
	readonly management?: NodeManagement | undefined;
	readonly maxPodsConstraint?: MaxPodsConstraint | undefined;
	readonly name?: string | undefined;
	readonly networkConfig?: NodeNetworkConfig | undefined;
	readonly placementPolicy?: PlacementPolicy | undefined;
	readonly podIpv4CidrSize?: number | undefined;
	readonly selfLink?: string | undefined;
	readonly status?: string | undefined;
	readonly statusMessage?: string | undefined;
	readonly updateInfo?: UpdateInfo | undefined;
	readonly upgradeSettings?: UpgradeSettings | undefined;
	readonly version?: string | undefined;
}
export interface NodePoolAutoscaling {
	readonly autoprovisioned?: boolean | undefined;
	readonly enabled?: boolean | undefined;
	readonly locationPolicy?: string | undefined;
	readonly maxNodeCount?: number | undefined;
	readonly minNodeCount?: number | undefined;
	readonly totalMaxNodeCount?: number | undefined;
	readonly totalMinNodeCount?: number | undefined;
}
export interface NodePoolLoggingConfig {
	readonly variantConfig?: LoggingVariantConfig | undefined;
}
export interface NodeTaint {
	readonly effect?: string | undefined;
	readonly key?: string | undefined;
	readonly value?: string | undefined;
}
export interface PlacementPolicy {
	readonly type?: string | undefined;
}
export interface ReservationAffinity {
	readonly consumeReservationType?: string | undefined;
	readonly key?: string | undefined;
	readonly values?: string[] | undefined;
}
export interface SandboxConfig {
	readonly type?: string | undefined;
}
export interface ShieldedInstanceConfig {
	readonly enableIntegrityMonitoring?: boolean | undefined;
	readonly enableSecureBoot?: boolean | undefined;
}
export interface StandardRolloutPolicy {
	readonly batchNodeCount?: number | undefined;
	readonly batchPercentage?: number | undefined;
	readonly batchSoakDuration?: string | undefined;
}
export interface StatusCondition {
	readonly canonicalCode?: string | undefined;
	readonly code?: string | undefined;
	readonly message?: string | undefined;
}
export interface UpdateInfo {
	readonly blueGreenInfo?: BlueGreenInfo | undefined;
}
export interface UpgradeSettings {
	readonly blueGreenSettings?: BlueGreenSettings | undefined;
	readonly maxSurge?: number | undefined;
	readonly maxUnavailable?: number | undefined;
	readonly strategy?: string | undefined;
}
export interface VirtualNIC {
	readonly enabled?: boolean | undefined;
}
export interface WindowsNodeConfig {
	readonly osVersion?: string | undefined;
}
export interface WorkloadMetadataConfig {
	readonly mode?: string | undefined;
}
export default {
	ProjectsZonesClustersNodePools: ProjectsZonesClustersNodePools,
};
