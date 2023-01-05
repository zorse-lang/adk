import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class NodePool extends GdmResource<NodePoolComponentInputs> implements NodePoolComponentOutputs {
	constructor(entity: ADKEntity, options: NodePoolComponentInputs) {
		super(entity, options.name, "container.v1.nodePool", options);
	}
	public readonly instanceGroupUrls?: string[];
	public readonly podIpv4CidrSize?: number;
	public readonly selfLink?: string;
	public readonly status?: string;
	public readonly statusMessage?: string;
	public readonly updateInfo?: UpdateInfo;
}
export interface NodePoolComponentOutputs {
	readonly instanceGroupUrls?: string[];
	readonly podIpv4CidrSize?: number;
	readonly selfLink?: string;
	readonly status?: string;
	readonly statusMessage?: string;
	readonly updateInfo?: UpdateInfo;
}
export interface NodePoolComponentInputs {
	readonly autoscaling?: NodePoolAutoscaling;
	readonly conditions?: StatusCondition[];
	readonly config?: NodeConfig;
	readonly initialNodeCount?: number;
	readonly locations?: string[];
	readonly management?: NodeManagement;
	readonly maxPodsConstraint?: MaxPodsConstraint;
	readonly name: string;
	readonly networkConfig?: NodeNetworkConfig;
	readonly placementPolicy?: PlacementPolicy;
	readonly upgradeSettings?: UpgradeSettings;
	readonly version?: string;
}
export interface AcceleratorConfig {
	readonly acceleratorCount?: string;
	readonly acceleratorType?: string;
	readonly gpuPartitionSize?: string;
	readonly gpuSharingConfig?: GPUSharingConfig;
}
export interface AdvancedMachineFeatures {
	readonly threadsPerCore?: string;
}
export interface AutoUpgradeOptions {
	readonly autoUpgradeStartTime?: string;
	readonly description?: string;
}
export interface BlueGreenInfo {
	readonly blueInstanceGroupUrls?: string[];
	readonly bluePoolDeletionStartTime?: string;
	readonly greenInstanceGroupUrls?: string[];
	readonly greenPoolVersion?: string;
	readonly phase?: string;
}
export interface BlueGreenSettings {
	readonly nodePoolSoakDuration?: string;
	readonly standardRolloutPolicy?: StandardRolloutPolicy;
}
export interface ConfidentialNodes {
	readonly enabled?: boolean;
}
export interface FastSocket {
	readonly enabled?: boolean;
}
export interface GcfsConfig {
	readonly enabled?: boolean;
}
export interface GPUSharingConfig {
	readonly gpuSharingStrategy?: string;
	readonly maxSharedClientsPerGpu?: string;
}
export interface LinuxNodeConfig {
	readonly cgroupMode?: string;
	readonly sysctls?: { [P in string]: string };
}
export interface LoggingVariantConfig {
	readonly variant?: string;
}
export interface MaxPodsConstraint {
	readonly maxPodsPerNode?: string;
}
export interface NetworkPerformanceConfig {
	readonly totalEgressBandwidthTier?: string;
}
export interface NodeConfig {
	readonly accelerators?: AcceleratorConfig[];
	readonly advancedMachineFeatures?: AdvancedMachineFeatures;
	readonly bootDiskKmsKey?: string;
	readonly confidentialNodes?: ConfidentialNodes;
	readonly diskSizeGb?: number;
	readonly diskType?: string;
	readonly fastSocket?: FastSocket;
	readonly gcfsConfig?: GcfsConfig;
	readonly gvnic?: VirtualNIC;
	readonly imageType?: string;
	readonly kubeletConfig?: NodeKubeletConfig;
	readonly labels?: { [P in string]: string };
	readonly linuxNodeConfig?: LinuxNodeConfig;
	readonly localSsdCount?: number;
	readonly loggingConfig?: NodePoolLoggingConfig;
	readonly machineType?: string;
	readonly metadata?: { [P in string]: string };
	readonly minCpuPlatform?: string;
	readonly nodeGroup?: string;
	readonly oauthScopes?: string[];
	readonly preemptible?: boolean;
	readonly reservationAffinity?: ReservationAffinity;
	readonly resourceLabels?: { [P in string]: string };
	readonly sandboxConfig?: SandboxConfig;
	readonly serviceAccount?: string;
	readonly shieldedInstanceConfig?: ShieldedInstanceConfig;
	readonly spot?: boolean;
	readonly tags?: string[];
	readonly taints?: NodeTaint[];
	readonly workloadMetadataConfig?: WorkloadMetadataConfig;
}
export interface NodeKubeletConfig {
	readonly cpuCfsQuota?: boolean;
	readonly cpuCfsQuotaPeriod?: string;
	readonly cpuManagerPolicy?: string;
	readonly podPidsLimit?: string;
}
export interface NodeManagement {
	readonly autoRepair?: boolean;
	readonly autoUpgrade?: boolean;
	readonly upgradeOptions?: AutoUpgradeOptions;
}
export interface NodeNetworkConfig {
	readonly createPodRange?: boolean;
	readonly enablePrivateNodes?: boolean;
	readonly networkPerformanceConfig?: NetworkPerformanceConfig;
	readonly podIpv4CidrBlock?: string;
	readonly podRange?: string;
}
export interface NodePoolAutoscaling {
	readonly autoprovisioned?: boolean;
	readonly enabled?: boolean;
	readonly locationPolicy?: string;
	readonly maxNodeCount?: number;
	readonly minNodeCount?: number;
	readonly totalMaxNodeCount?: number;
	readonly totalMinNodeCount?: number;
}
export interface NodePoolLoggingConfig {
	readonly variantConfig?: LoggingVariantConfig;
}
export interface NodeTaint {
	readonly effect?: string;
	readonly key?: string;
	readonly value?: string;
}
export interface PlacementPolicy {
	readonly type?: string;
}
export interface ReservationAffinity {
	readonly consumeReservationType?: string;
	readonly key?: string;
	readonly values?: string[];
}
export interface SandboxConfig {
	readonly type?: string;
}
export interface ShieldedInstanceConfig {
	readonly enableIntegrityMonitoring?: boolean;
	readonly enableSecureBoot?: boolean;
}
export interface StandardRolloutPolicy {
	readonly batchNodeCount?: number;
	readonly batchPercentage?: number;
	readonly batchSoakDuration?: string;
}
export interface StatusCondition {
	readonly canonicalCode?: string;
	readonly code?: string;
	readonly message?: string;
}
export interface UpdateInfo {
	readonly blueGreenInfo?: BlueGreenInfo;
}
export interface UpgradeSettings {
	readonly blueGreenSettings?: BlueGreenSettings;
	readonly maxSurge?: number;
	readonly maxUnavailable?: number;
	readonly strategy?: string;
}
export interface VirtualNIC {
	readonly enabled?: boolean;
}
export interface WorkloadMetadataConfig {
	readonly mode?: string;
}
export default {
	NodePool: NodePool,
};
