import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsZonesClusters
	extends GdmResource<ProjectsZonesClustersComponentInputs>
	implements ProjectsZonesClustersComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsZonesClustersComponentInputs) {
		super(entity, options.name, "container.v1beta1.ProjectsZonesClusters", options);
	}
	public readonly createTime?: string;
	public readonly currentMasterVersion?: string;
	public readonly currentNodeCount?: number;
	public readonly currentNodeVersion?: string;
	public readonly endpoint?: string;
	public readonly expireTime?: string;
	public readonly id?: string;
	public readonly location?: string;
	public readonly nodeIpv4CidrSize?: number;
	public readonly selfLink?: string;
	public readonly servicesIpv4Cidr?: string;
	public readonly status?: string;
	public readonly statusMessage?: string;
	public readonly tpuIpv4CidrBlock?: string;
	public readonly zone?: string;
}
export interface ProjectsZonesClustersComponentOutputs {
	readonly createTime?: string;
	readonly currentMasterVersion?: string;
	readonly currentNodeCount?: number;
	readonly currentNodeVersion?: string;
	readonly endpoint?: string;
	readonly expireTime?: string;
	readonly id?: string;
	readonly location?: string;
	readonly nodeIpv4CidrSize?: number;
	readonly selfLink?: string;
	readonly servicesIpv4Cidr?: string;
	readonly status?: string;
	readonly statusMessage?: string;
	readonly tpuIpv4CidrBlock?: string;
	readonly zone?: string;
}
export interface ProjectsZonesClustersComponentInputs {
	readonly addonsConfig?: AddonsConfig;
	readonly authenticatorGroupsConfig?: AuthenticatorGroupsConfig;
	readonly autopilot?: Autopilot;
	readonly autoscaling?: ClusterAutoscaling;
	readonly binaryAuthorization?: BinaryAuthorization;
	readonly cluster: Cluster;
	readonly clusterIpv4Cidr?: string;
	readonly clusterTelemetry?: ClusterTelemetry;
	readonly conditions?: StatusCondition[];
	readonly confidentialNodes?: ConfidentialNodes;
	readonly costManagementConfig?: CostManagementConfig;
	readonly databaseEncryption?: DatabaseEncryption;
	readonly defaultMaxPodsConstraint?: MaxPodsConstraint;
	readonly description?: string;
	readonly enableKubernetesAlpha?: boolean;
	readonly enableTpu?: boolean;
	readonly etag?: string;
	readonly identityServiceConfig?: IdentityServiceConfig;
	readonly initialClusterVersion?: string;
	readonly initialNodeCount?: number;
	readonly instanceGroupUrls?: string[];
	readonly ipAllocationPolicy?: IPAllocationPolicy;
	readonly labelFingerprint?: string;
	readonly legacyAbac?: LegacyAbac;
	readonly locations?: string[];
	readonly loggingConfig?: LoggingConfig;
	readonly loggingService?: string;
	readonly maintenancePolicy?: MaintenancePolicy;
	readonly master?: any;
	readonly masterAuth?: MasterAuth;
	readonly masterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig;
	readonly masterIpv4CidrBlock?: string;
	readonly meshCertificates?: MeshCertificates;
	readonly monitoringConfig?: MonitoringConfig;
	readonly monitoringService?: string;
	readonly name: string;
	readonly network?: string;
	readonly networkConfig?: NetworkConfig;
	readonly networkPolicy?: NetworkPolicy;
	readonly nodeConfig?: NodeConfig;
	readonly nodePoolAutoConfig?: NodePoolAutoConfig;
	readonly nodePoolDefaults?: NodePoolDefaults;
	readonly nodePools?: NodePool[];
	readonly notificationConfig?: NotificationConfig;
	readonly parent?: string;
	readonly podSecurityPolicyConfig?: PodSecurityPolicyConfig;
	readonly privateCluster?: boolean;
	readonly privateClusterConfig?: PrivateClusterConfig;
	readonly protectConfig?: ProtectConfig;
	readonly releaseChannel?: ReleaseChannel;
	readonly resourceLabels?: { [P in string]: string };
	readonly resourceUsageExportConfig?: ResourceUsageExportConfig;
	readonly shieldedNodes?: ShieldedNodes;
	readonly subnetwork?: string;
	readonly tpuConfig?: TpuConfig;
	readonly verticalPodAutoscaling?: VerticalPodAutoscaling;
	readonly workloadAltsConfig?: WorkloadALTSConfig;
	readonly workloadCertificates?: WorkloadCertificates;
	readonly workloadIdentityConfig?: WorkloadIdentityConfig;
}
export interface AcceleratorConfig {
	readonly acceleratorCount?: string;
	readonly acceleratorType?: string;
	readonly gpuPartitionSize?: string;
	readonly gpuSharingConfig?: GPUSharingConfig;
	readonly maxTimeSharedClientsPerGpu?: string;
}
export interface AddonsConfig {
	readonly cloudRunConfig?: CloudRunConfig;
	readonly configConnectorConfig?: ConfigConnectorConfig;
	readonly dnsCacheConfig?: DnsCacheConfig;
	readonly gcePersistentDiskCsiDriverConfig?: GcePersistentDiskCsiDriverConfig;
	readonly gcpFilestoreCsiDriverConfig?: GcpFilestoreCsiDriverConfig;
	readonly gkeBackupAgentConfig?: GkeBackupAgentConfig;
	readonly horizontalPodAutoscaling?: HorizontalPodAutoscaling;
	readonly httpLoadBalancing?: HttpLoadBalancing;
	readonly istioConfig?: IstioConfig;
	readonly kalmConfig?: KalmConfig;
	readonly kubernetesDashboard?: KubernetesDashboard;
	readonly networkPolicyConfig?: NetworkPolicyConfig;
}
export interface AdvancedMachineFeatures {
	readonly threadsPerCore?: string;
}
export interface AuthenticatorGroupsConfig {
	readonly enabled?: boolean;
	readonly securityGroup?: string;
}
export interface Autopilot {
	readonly enabled?: boolean;
}
export interface AutoprovisioningNodePoolDefaults {
	readonly bootDiskKmsKey?: string;
	readonly diskSizeGb?: number;
	readonly diskType?: string;
	readonly imageType?: string;
	readonly management?: NodeManagement;
	readonly minCpuPlatform?: string;
	readonly oauthScopes?: string[];
	readonly serviceAccount?: string;
	readonly shieldedInstanceConfig?: ShieldedInstanceConfig;
	readonly upgradeSettings?: UpgradeSettings;
}
export interface AutoUpgradeOptions {
	readonly autoUpgradeStartTime?: string;
	readonly description?: string;
}
export interface BigQueryDestination {
	readonly datasetId?: string;
}
export interface BinaryAuthorization {
	readonly enabled?: boolean;
	readonly evaluationMode?: string;
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
export interface CidrBlock {
	readonly cidrBlock?: string;
	readonly displayName?: string;
}
export interface ClientCertificateConfig {
	readonly issueClientCertificate?: boolean;
}
export interface CloudRunConfig {
	readonly disabled?: boolean;
	readonly loadBalancerType?: string;
}
export interface Cluster {
	readonly addonsConfig?: AddonsConfig;
	readonly authenticatorGroupsConfig?: AuthenticatorGroupsConfig;
	readonly autopilot?: Autopilot;
	readonly autoscaling?: ClusterAutoscaling;
	readonly binaryAuthorization?: BinaryAuthorization;
	readonly clusterIpv4Cidr?: string;
	readonly clusterTelemetry?: ClusterTelemetry;
	readonly conditions?: StatusCondition[];
	readonly confidentialNodes?: ConfidentialNodes;
	readonly costManagementConfig?: CostManagementConfig;
	readonly createTime?: string;
	readonly currentMasterVersion?: string;
	readonly currentNodeCount?: number;
	readonly currentNodeVersion?: string;
	readonly databaseEncryption?: DatabaseEncryption;
	readonly defaultMaxPodsConstraint?: MaxPodsConstraint;
	readonly description?: string;
	readonly enableKubernetesAlpha?: boolean;
	readonly enableTpu?: boolean;
	readonly endpoint?: string;
	readonly etag?: string;
	readonly expireTime?: string;
	readonly id?: string;
	readonly identityServiceConfig?: IdentityServiceConfig;
	readonly initialClusterVersion?: string;
	readonly initialNodeCount?: number;
	readonly instanceGroupUrls?: string[];
	readonly ipAllocationPolicy?: IPAllocationPolicy;
	readonly labelFingerprint?: string;
	readonly legacyAbac?: LegacyAbac;
	readonly location?: string;
	readonly locations?: string[];
	readonly loggingConfig?: LoggingConfig;
	readonly loggingService?: string;
	readonly maintenancePolicy?: MaintenancePolicy;
	readonly master?: any;
	readonly masterAuth?: MasterAuth;
	readonly masterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig;
	readonly masterIpv4CidrBlock?: string;
	readonly meshCertificates?: MeshCertificates;
	readonly monitoringConfig?: MonitoringConfig;
	readonly monitoringService?: string;
	readonly name?: string;
	readonly network?: string;
	readonly networkConfig?: NetworkConfig;
	readonly networkPolicy?: NetworkPolicy;
	readonly nodeConfig?: NodeConfig;
	readonly nodeIpv4CidrSize?: number;
	readonly nodePoolAutoConfig?: NodePoolAutoConfig;
	readonly nodePoolDefaults?: NodePoolDefaults;
	readonly nodePools?: NodePool[];
	readonly notificationConfig?: NotificationConfig;
	readonly podSecurityPolicyConfig?: PodSecurityPolicyConfig;
	readonly privateCluster?: boolean;
	readonly privateClusterConfig?: PrivateClusterConfig;
	readonly protectConfig?: ProtectConfig;
	readonly releaseChannel?: ReleaseChannel;
	readonly resourceLabels?: { [P in string]: string };
	readonly resourceUsageExportConfig?: ResourceUsageExportConfig;
	readonly selfLink?: string;
	readonly servicesIpv4Cidr?: string;
	readonly shieldedNodes?: ShieldedNodes;
	readonly status?: string;
	readonly statusMessage?: string;
	readonly subnetwork?: string;
	readonly tpuConfig?: TpuConfig;
	readonly tpuIpv4CidrBlock?: string;
	readonly verticalPodAutoscaling?: VerticalPodAutoscaling;
	readonly workloadAltsConfig?: WorkloadALTSConfig;
	readonly workloadCertificates?: WorkloadCertificates;
	readonly workloadIdentityConfig?: WorkloadIdentityConfig;
	readonly zone?: string;
}
export interface ClusterAutoscaling {
	readonly autoprovisioningLocations?: string[];
	readonly autoprovisioningNodePoolDefaults?: AutoprovisioningNodePoolDefaults;
	readonly autoscalingProfile?: string;
	readonly enableNodeAutoprovisioning?: boolean;
	readonly resourceLimits?: ResourceLimit[];
}
export interface ClusterTelemetry {
	readonly type?: string;
}
export interface ConfidentialNodes {
	readonly enabled?: boolean;
}
export interface ConfigConnectorConfig {
	readonly enabled?: boolean;
}
export interface ConsumptionMeteringConfig {
	readonly enabled?: boolean;
}
export interface CostManagementConfig {
	readonly enabled?: boolean;
}
export interface CreateClusterRequest {
	readonly cluster: Cluster;
	readonly parent?: string;
	readonly projectId: string;
	readonly zone: string;
}
export interface DailyMaintenanceWindow {
	readonly duration?: string;
	readonly startTime?: string;
}
export interface DatabaseEncryption {
	readonly keyName?: string;
	readonly state?: string;
}
export interface DefaultSnatStatus {
	readonly disabled?: boolean;
}
export interface DnsCacheConfig {
	readonly enabled?: boolean;
}
export interface DNSConfig {
	readonly clusterDns?: string;
	readonly clusterDnsDomain?: string;
	readonly clusterDnsScope?: string;
}
export interface EphemeralStorageConfig {
	readonly localSsdCount?: number;
}
export interface EphemeralStorageLocalSsdConfig {
	readonly localSsdCount?: number;
}
export interface FastSocket {
	readonly enabled?: boolean;
}
export interface Filter {
	readonly eventType?: string[];
}
export interface GatewayAPIConfig {
	readonly channel?: string;
}
export interface GcePersistentDiskCsiDriverConfig {
	readonly enabled?: boolean;
}
export interface GcfsConfig {
	readonly enabled?: boolean;
}
export interface GcpFilestoreCsiDriverConfig {
	readonly enabled?: boolean;
}
export interface GkeBackupAgentConfig {
	readonly enabled?: boolean;
}
export interface GPUSharingConfig {
	readonly gpuSharingStrategy?: string;
	readonly maxSharedClientsPerGpu?: string;
}
export interface HorizontalPodAutoscaling {
	readonly disabled?: boolean;
}
export interface HttpLoadBalancing {
	readonly disabled?: boolean;
}
export interface IdentityServiceConfig {
	readonly enabled?: boolean;
}
export interface IPAllocationPolicy {
	readonly allowRouteOverlap?: boolean;
	readonly clusterIpv4Cidr?: string;
	readonly clusterIpv4CidrBlock?: string;
	readonly clusterSecondaryRangeName?: string;
	readonly createSubnetwork?: boolean;
	readonly ipv6AccessType?: string;
	readonly nodeIpv4Cidr?: string;
	readonly nodeIpv4CidrBlock?: string;
	readonly servicesIpv4Cidr?: string;
	readonly servicesIpv4CidrBlock?: string;
	readonly servicesIpv6CidrBlock?: string;
	readonly servicesSecondaryRangeName?: string;
	readonly stackType?: string;
	readonly subnetIpv6CidrBlock?: string;
	readonly subnetworkName?: string;
	readonly tpuIpv4CidrBlock?: string;
	readonly useIpAliases?: boolean;
	readonly useRoutes?: boolean;
}
export interface IstioConfig {
	readonly auth?: string;
	readonly disabled?: boolean;
}
export interface KalmConfig {
	readonly enabled?: boolean;
}
export interface KubernetesDashboard {
	readonly disabled?: boolean;
}
export interface LegacyAbac {
	readonly enabled?: boolean;
}
export interface LinuxNodeConfig {
	readonly cgroupMode?: string;
	readonly sysctls?: { [P in string]: string };
}
export interface LocalNvmeSsdBlockConfig {
	readonly localSsdCount?: number;
}
export interface LoggingComponentConfig {
	readonly enableComponents?: string[];
}
export interface LoggingConfig {
	readonly componentConfig?: LoggingComponentConfig;
}
export interface LoggingVariantConfig {
	readonly variant?: string;
}
export interface MaintenanceExclusionOptions {
	readonly scope?: string;
}
export interface MaintenancePolicy {
	readonly resourceVersion?: string;
	readonly window?: MaintenanceWindow;
}
export interface MaintenanceWindow {
	readonly dailyMaintenanceWindow?: DailyMaintenanceWindow;
	readonly maintenanceExclusions?: { [P in string]: TimeWindow };
	readonly recurringWindow?: RecurringTimeWindow;
}
export interface ManagedPrometheusConfig {
	readonly enabled?: boolean;
}
export interface Master {}
export interface MasterAuth {
	readonly clientCertificate?: string;
	readonly clientCertificateConfig?: ClientCertificateConfig;
	readonly clientKey?: string;
	readonly clusterCaCertificate?: string;
	readonly password?: string;
	readonly username?: string;
}
export interface MasterAuthorizedNetworksConfig {
	readonly cidrBlocks?: CidrBlock[];
	readonly enabled?: boolean;
	readonly gcpPublicCidrsAccessEnabled?: boolean;
}
export interface MaxPodsConstraint {
	readonly maxPodsPerNode?: string;
}
export interface MeshCertificates {
	readonly enableCertificates?: boolean;
}
export interface MonitoringComponentConfig {
	readonly enableComponents?: string[];
}
export interface MonitoringConfig {
	readonly componentConfig?: MonitoringComponentConfig;
	readonly managedPrometheusConfig?: ManagedPrometheusConfig;
}
export interface NetworkConfig {
	readonly datapathProvider?: string;
	readonly defaultSnatStatus?: DefaultSnatStatus;
	readonly dnsConfig?: DNSConfig;
	readonly enableIntraNodeVisibility?: boolean;
	readonly enableL4ilbSubsetting?: boolean;
	readonly gatewayApiConfig?: GatewayAPIConfig;
	readonly network?: string;
	readonly privateIpv6GoogleAccess?: string;
	readonly serviceExternalIpsConfig?: ServiceExternalIPsConfig;
	readonly subnetwork?: string;
}
export interface NetworkPerformanceConfig {
	readonly externalIpEgressBandwidthTier?: string;
	readonly totalEgressBandwidthTier?: string;
}
export interface NetworkPolicy {
	readonly enabled?: boolean;
	readonly provider?: string;
}
export interface NetworkPolicyConfig {
	readonly disabled?: boolean;
}
export interface NetworkTags {
	readonly tags?: string[];
}
export interface NodeConfig {
	readonly accelerators?: AcceleratorConfig[];
	readonly advancedMachineFeatures?: AdvancedMachineFeatures;
	readonly bootDiskKmsKey?: string;
	readonly confidentialNodes?: ConfidentialNodes;
	readonly diskSizeGb?: number;
	readonly diskType?: string;
	readonly ephemeralStorageConfig?: EphemeralStorageConfig;
	readonly ephemeralStorageLocalSsdConfig?: EphemeralStorageLocalSsdConfig;
	readonly fastSocket?: FastSocket;
	readonly gcfsConfig?: GcfsConfig;
	readonly gvnic?: VirtualNIC;
	readonly imageType?: string;
	readonly kubeletConfig?: NodeKubeletConfig;
	readonly labels?: { [P in string]: string };
	readonly linuxNodeConfig?: LinuxNodeConfig;
	readonly localNvmeSsdBlockConfig?: LocalNvmeSsdBlockConfig;
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
	readonly windowsNodeConfig?: WindowsNodeConfig;
	readonly workloadMetadataConfig?: WorkloadMetadataConfig;
}
export interface NodeConfigDefaults {
	readonly gcfsConfig?: GcfsConfig;
	readonly loggingConfig?: NodePoolLoggingConfig;
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
export interface NodePool {
	readonly autoscaling?: NodePoolAutoscaling;
	readonly conditions?: StatusCondition[];
	readonly config?: NodeConfig;
	readonly etag?: string;
	readonly initialNodeCount?: number;
	readonly instanceGroupUrls?: string[];
	readonly locations?: string[];
	readonly management?: NodeManagement;
	readonly maxPodsConstraint?: MaxPodsConstraint;
	readonly name?: string;
	readonly networkConfig?: NodeNetworkConfig;
	readonly placementPolicy?: PlacementPolicy;
	readonly podIpv4CidrSize?: number;
	readonly selfLink?: string;
	readonly status?: string;
	readonly statusMessage?: string;
	readonly updateInfo?: UpdateInfo;
	readonly upgradeSettings?: UpgradeSettings;
	readonly version?: string;
}
export interface NodePoolAutoConfig {
	readonly networkTags?: NetworkTags;
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
export interface NodePoolDefaults {
	readonly nodeConfigDefaults?: NodeConfigDefaults;
}
export interface NodePoolLoggingConfig {
	readonly variantConfig?: LoggingVariantConfig;
}
export interface NodeTaint {
	readonly effect?: string;
	readonly key?: string;
	readonly value?: string;
}
export interface NotificationConfig {
	readonly pubsub?: PubSub;
}
export interface PlacementPolicy {
	readonly type?: string;
}
export interface PodSecurityPolicyConfig {
	readonly enabled?: boolean;
}
export interface PrivateClusterConfig {
	readonly enablePrivateEndpoint?: boolean;
	readonly enablePrivateNodes?: boolean;
	readonly masterGlobalAccessConfig?: PrivateClusterMasterGlobalAccessConfig;
	readonly masterIpv4CidrBlock?: string;
	readonly peeringName?: string;
	readonly privateEndpoint?: string;
	readonly privateEndpointSubnetwork?: string;
	readonly publicEndpoint?: string;
}
export interface PrivateClusterMasterGlobalAccessConfig {
	readonly enabled?: boolean;
}
export interface ProtectConfig {
	readonly workloadConfig?: WorkloadConfig;
	readonly workloadVulnerabilityMode?: string;
}
export interface PubSub {
	readonly enabled?: boolean;
	readonly filter?: Filter;
	readonly topic?: string;
}
export interface RecurringTimeWindow {
	readonly recurrence?: string;
	readonly window?: TimeWindow;
}
export interface ReleaseChannel {
	readonly channel?: string;
}
export interface ReservationAffinity {
	readonly consumeReservationType?: string;
	readonly key?: string;
	readonly values?: string[];
}
export interface ResourceLimit {
	readonly maximum?: string;
	readonly minimum?: string;
	readonly resourceType?: string;
}
export interface ResourceUsageExportConfig {
	readonly bigqueryDestination?: BigQueryDestination;
	readonly consumptionMeteringConfig?: ConsumptionMeteringConfig;
	readonly enableNetworkEgressMetering?: boolean;
}
export interface SandboxConfig {
	readonly sandboxType?: string;
	readonly type?: string;
}
export interface ServiceExternalIPsConfig {
	readonly enabled?: boolean;
}
export interface ShieldedInstanceConfig {
	readonly enableIntegrityMonitoring?: boolean;
	readonly enableSecureBoot?: boolean;
}
export interface ShieldedNodes {
	readonly enabled?: boolean;
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
export interface TimeWindow {
	readonly endTime?: string;
	readonly maintenanceExclusionOptions?: MaintenanceExclusionOptions;
	readonly startTime?: string;
}
export interface TpuConfig {
	readonly enabled?: boolean;
	readonly ipv4CidrBlock?: string;
	readonly useServiceNetworking?: boolean;
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
export interface VerticalPodAutoscaling {
	readonly enabled?: boolean;
}
export interface VirtualNIC {
	readonly enabled?: boolean;
}
export interface WindowsNodeConfig {
	readonly osVersion?: string;
}
export interface WorkloadALTSConfig {
	readonly enableAlts?: boolean;
}
export interface WorkloadCertificates {
	readonly enableCertificates?: boolean;
}
export interface WorkloadConfig {
	readonly auditMode?: string;
}
export interface WorkloadIdentityConfig {
	readonly identityNamespace?: string;
	readonly identityProvider?: string;
	readonly workloadPool?: string;
}
export interface WorkloadMetadataConfig {
	readonly mode?: string;
	readonly nodeMetadata?: string;
}
export default {
	ProjectsZonesClusters: ProjectsZonesClusters,
};
