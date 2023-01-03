import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsZonesClusters
	extends GdmResource<ProjectsZonesClustersComponentInputs>
	implements ProjectsZonesClustersComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsZonesClustersComponentInputs) {
		super(entity, options.name, "container.v1beta1.ProjectsZonesClusters", options);
	}
	public readonly createTime?: string | undefined;
	public readonly currentMasterVersion?: string | undefined;
	public readonly currentNodeCount?: number | undefined;
	public readonly currentNodeVersion?: string | undefined;
	public readonly endpoint?: string | undefined;
	public readonly expireTime?: string | undefined;
	public readonly id?: string | undefined;
	public readonly location?: string | undefined;
	public readonly nodeIpv4CidrSize?: number | undefined;
	public readonly selfLink?: string | undefined;
	public readonly servicesIpv4Cidr?: string | undefined;
	public readonly status?: string | undefined;
	public readonly statusMessage?: string | undefined;
	public readonly tpuIpv4CidrBlock?: string | undefined;
	public readonly zone?: string | undefined;
}
export interface ProjectsZonesClustersComponentOutputs {
	readonly createTime?: string | undefined;
	readonly currentMasterVersion?: string | undefined;
	readonly currentNodeCount?: number | undefined;
	readonly currentNodeVersion?: string | undefined;
	readonly endpoint?: string | undefined;
	readonly expireTime?: string | undefined;
	readonly id?: string | undefined;
	readonly location?: string | undefined;
	readonly nodeIpv4CidrSize?: number | undefined;
	readonly selfLink?: string | undefined;
	readonly servicesIpv4Cidr?: string | undefined;
	readonly status?: string | undefined;
	readonly statusMessage?: string | undefined;
	readonly tpuIpv4CidrBlock?: string | undefined;
	readonly zone?: string | undefined;
}
export interface ProjectsZonesClustersComponentInputs {
	readonly addonsConfig?: AddonsConfig | undefined;
	readonly authenticatorGroupsConfig?: AuthenticatorGroupsConfig | undefined;
	readonly autopilot?: Autopilot | undefined;
	readonly autoscaling?: ClusterAutoscaling | undefined;
	readonly binaryAuthorization?: BinaryAuthorization | undefined;
	readonly cluster: Cluster;
	readonly clusterIpv4Cidr?: string | undefined;
	readonly clusterTelemetry?: ClusterTelemetry | undefined;
	readonly conditions?: StatusCondition[] | undefined;
	readonly confidentialNodes?: ConfidentialNodes | undefined;
	readonly costManagementConfig?: CostManagementConfig | undefined;
	readonly databaseEncryption?: DatabaseEncryption | undefined;
	readonly defaultMaxPodsConstraint?: MaxPodsConstraint | undefined;
	readonly description?: string | undefined;
	readonly enableKubernetesAlpha?: boolean | undefined;
	readonly enableTpu?: boolean | undefined;
	readonly etag?: string | undefined;
	readonly identityServiceConfig?: IdentityServiceConfig | undefined;
	readonly initialClusterVersion?: string | undefined;
	readonly initialNodeCount?: number | undefined;
	readonly instanceGroupUrls?: string[] | undefined;
	readonly ipAllocationPolicy?: IPAllocationPolicy | undefined;
	readonly labelFingerprint?: string | undefined;
	readonly legacyAbac?: LegacyAbac | undefined;
	readonly locations?: string[] | undefined;
	readonly loggingConfig?: LoggingConfig | undefined;
	readonly loggingService?: string | undefined;
	readonly maintenancePolicy?: MaintenancePolicy | undefined;
	readonly master?: any | undefined;
	readonly masterAuth?: MasterAuth | undefined;
	readonly masterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig | undefined;
	readonly masterIpv4CidrBlock?: string | undefined;
	readonly meshCertificates?: MeshCertificates | undefined;
	readonly monitoringConfig?: MonitoringConfig | undefined;
	readonly monitoringService?: string | undefined;
	readonly name: string;
	readonly network?: string | undefined;
	readonly networkConfig?: NetworkConfig | undefined;
	readonly networkPolicy?: NetworkPolicy | undefined;
	readonly nodeConfig?: NodeConfig | undefined;
	readonly nodePoolAutoConfig?: NodePoolAutoConfig | undefined;
	readonly nodePoolDefaults?: NodePoolDefaults | undefined;
	readonly nodePools?: NodePool[] | undefined;
	readonly notificationConfig?: NotificationConfig | undefined;
	readonly parent?: string | undefined;
	readonly podSecurityPolicyConfig?: PodSecurityPolicyConfig | undefined;
	readonly privateCluster?: boolean | undefined;
	readonly privateClusterConfig?: PrivateClusterConfig | undefined;
	readonly protectConfig?: ProtectConfig | undefined;
	readonly releaseChannel?: ReleaseChannel | undefined;
	readonly resourceLabels?: { [P in string]: string } | undefined;
	readonly resourceUsageExportConfig?: ResourceUsageExportConfig | undefined;
	readonly shieldedNodes?: ShieldedNodes | undefined;
	readonly subnetwork?: string | undefined;
	readonly tpuConfig?: TpuConfig | undefined;
	readonly verticalPodAutoscaling?: VerticalPodAutoscaling | undefined;
	readonly workloadAltsConfig?: WorkloadALTSConfig | undefined;
	readonly workloadCertificates?: WorkloadCertificates | undefined;
	readonly workloadIdentityConfig?: WorkloadIdentityConfig | undefined;
	readonly type: string;
}
export interface AcceleratorConfig {
	readonly acceleratorCount?: string | undefined;
	readonly acceleratorType?: string | undefined;
	readonly gpuPartitionSize?: string | undefined;
	readonly gpuSharingConfig?: GPUSharingConfig | undefined;
	readonly maxTimeSharedClientsPerGpu?: string | undefined;
}
export interface AddonsConfig {
	readonly cloudRunConfig?: CloudRunConfig | undefined;
	readonly configConnectorConfig?: ConfigConnectorConfig | undefined;
	readonly dnsCacheConfig?: DnsCacheConfig | undefined;
	readonly gcePersistentDiskCsiDriverConfig?: GcePersistentDiskCsiDriverConfig | undefined;
	readonly gcpFilestoreCsiDriverConfig?: GcpFilestoreCsiDriverConfig | undefined;
	readonly gkeBackupAgentConfig?: GkeBackupAgentConfig | undefined;
	readonly horizontalPodAutoscaling?: HorizontalPodAutoscaling | undefined;
	readonly httpLoadBalancing?: HttpLoadBalancing | undefined;
	readonly istioConfig?: IstioConfig | undefined;
	readonly kalmConfig?: KalmConfig | undefined;
	readonly kubernetesDashboard?: KubernetesDashboard | undefined;
	readonly networkPolicyConfig?: NetworkPolicyConfig | undefined;
}
export interface AdvancedMachineFeatures {
	readonly threadsPerCore?: string | undefined;
}
export interface AuthenticatorGroupsConfig {
	readonly enabled?: boolean | undefined;
	readonly securityGroup?: string | undefined;
}
export interface Autopilot {
	readonly enabled?: boolean | undefined;
}
export interface AutoprovisioningNodePoolDefaults {
	readonly bootDiskKmsKey?: string | undefined;
	readonly diskSizeGb?: number | undefined;
	readonly diskType?: string | undefined;
	readonly imageType?: string | undefined;
	readonly management?: NodeManagement | undefined;
	readonly minCpuPlatform?: string | undefined;
	readonly oauthScopes?: string[] | undefined;
	readonly serviceAccount?: string | undefined;
	readonly shieldedInstanceConfig?: ShieldedInstanceConfig | undefined;
	readonly upgradeSettings?: UpgradeSettings | undefined;
}
export interface AutoUpgradeOptions {
	readonly autoUpgradeStartTime?: string | undefined;
	readonly description?: string | undefined;
}
export interface BigQueryDestination {
	readonly datasetId?: string | undefined;
}
export interface BinaryAuthorization {
	readonly enabled?: boolean | undefined;
	readonly evaluationMode?: string | undefined;
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
export interface CidrBlock {
	readonly cidrBlock?: string | undefined;
	readonly displayName?: string | undefined;
}
export interface ClientCertificateConfig {
	readonly issueClientCertificate?: boolean | undefined;
}
export interface CloudRunConfig {
	readonly disabled?: boolean | undefined;
	readonly loadBalancerType?: string | undefined;
}
export interface Cluster {
	readonly addonsConfig?: AddonsConfig | undefined;
	readonly authenticatorGroupsConfig?: AuthenticatorGroupsConfig | undefined;
	readonly autopilot?: Autopilot | undefined;
	readonly autoscaling?: ClusterAutoscaling | undefined;
	readonly binaryAuthorization?: BinaryAuthorization | undefined;
	readonly clusterIpv4Cidr?: string | undefined;
	readonly clusterTelemetry?: ClusterTelemetry | undefined;
	readonly conditions?: StatusCondition[] | undefined;
	readonly confidentialNodes?: ConfidentialNodes | undefined;
	readonly costManagementConfig?: CostManagementConfig | undefined;
	readonly createTime?: string | undefined;
	readonly currentMasterVersion?: string | undefined;
	readonly currentNodeCount?: number | undefined;
	readonly currentNodeVersion?: string | undefined;
	readonly databaseEncryption?: DatabaseEncryption | undefined;
	readonly defaultMaxPodsConstraint?: MaxPodsConstraint | undefined;
	readonly description?: string | undefined;
	readonly enableKubernetesAlpha?: boolean | undefined;
	readonly enableTpu?: boolean | undefined;
	readonly endpoint?: string | undefined;
	readonly etag?: string | undefined;
	readonly expireTime?: string | undefined;
	readonly id?: string | undefined;
	readonly identityServiceConfig?: IdentityServiceConfig | undefined;
	readonly initialClusterVersion?: string | undefined;
	readonly initialNodeCount?: number | undefined;
	readonly instanceGroupUrls?: string[] | undefined;
	readonly ipAllocationPolicy?: IPAllocationPolicy | undefined;
	readonly labelFingerprint?: string | undefined;
	readonly legacyAbac?: LegacyAbac | undefined;
	readonly location?: string | undefined;
	readonly locations?: string[] | undefined;
	readonly loggingConfig?: LoggingConfig | undefined;
	readonly loggingService?: string | undefined;
	readonly maintenancePolicy?: MaintenancePolicy | undefined;
	readonly master?: any | undefined;
	readonly masterAuth?: MasterAuth | undefined;
	readonly masterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig | undefined;
	readonly masterIpv4CidrBlock?: string | undefined;
	readonly meshCertificates?: MeshCertificates | undefined;
	readonly monitoringConfig?: MonitoringConfig | undefined;
	readonly monitoringService?: string | undefined;
	readonly name?: string | undefined;
	readonly network?: string | undefined;
	readonly networkConfig?: NetworkConfig | undefined;
	readonly networkPolicy?: NetworkPolicy | undefined;
	readonly nodeConfig?: NodeConfig | undefined;
	readonly nodeIpv4CidrSize?: number | undefined;
	readonly nodePoolAutoConfig?: NodePoolAutoConfig | undefined;
	readonly nodePoolDefaults?: NodePoolDefaults | undefined;
	readonly nodePools?: NodePool[] | undefined;
	readonly notificationConfig?: NotificationConfig | undefined;
	readonly podSecurityPolicyConfig?: PodSecurityPolicyConfig | undefined;
	readonly privateCluster?: boolean | undefined;
	readonly privateClusterConfig?: PrivateClusterConfig | undefined;
	readonly protectConfig?: ProtectConfig | undefined;
	readonly releaseChannel?: ReleaseChannel | undefined;
	readonly resourceLabels?: { [P in string]: string } | undefined;
	readonly resourceUsageExportConfig?: ResourceUsageExportConfig | undefined;
	readonly selfLink?: string | undefined;
	readonly servicesIpv4Cidr?: string | undefined;
	readonly shieldedNodes?: ShieldedNodes | undefined;
	readonly status?: string | undefined;
	readonly statusMessage?: string | undefined;
	readonly subnetwork?: string | undefined;
	readonly tpuConfig?: TpuConfig | undefined;
	readonly tpuIpv4CidrBlock?: string | undefined;
	readonly verticalPodAutoscaling?: VerticalPodAutoscaling | undefined;
	readonly workloadAltsConfig?: WorkloadALTSConfig | undefined;
	readonly workloadCertificates?: WorkloadCertificates | undefined;
	readonly workloadIdentityConfig?: WorkloadIdentityConfig | undefined;
	readonly zone?: string | undefined;
}
export interface ClusterAutoscaling {
	readonly autoprovisioningLocations?: string[] | undefined;
	readonly autoprovisioningNodePoolDefaults?: AutoprovisioningNodePoolDefaults | undefined;
	readonly autoscalingProfile?: string | undefined;
	readonly enableNodeAutoprovisioning?: boolean | undefined;
	readonly resourceLimits?: ResourceLimit[] | undefined;
}
export interface ClusterTelemetry {
	readonly type?: string | undefined;
}
export interface ConfidentialNodes {
	readonly enabled?: boolean | undefined;
}
export interface ConfigConnectorConfig {
	readonly enabled?: boolean | undefined;
}
export interface ConsumptionMeteringConfig {
	readonly enabled?: boolean | undefined;
}
export interface CostManagementConfig {
	readonly enabled?: boolean | undefined;
}
export interface CreateClusterRequest {
	readonly cluster: Cluster;
	readonly parent?: string | undefined;
	readonly projectId: string;
	readonly zone: string;
}
export interface DailyMaintenanceWindow {
	readonly duration?: string | undefined;
	readonly startTime?: string | undefined;
}
export interface DatabaseEncryption {
	readonly keyName?: string | undefined;
	readonly state?: string | undefined;
}
export interface DefaultSnatStatus {
	readonly disabled?: boolean | undefined;
}
export interface DnsCacheConfig {
	readonly enabled?: boolean | undefined;
}
export interface DNSConfig {
	readonly clusterDns?: string | undefined;
	readonly clusterDnsDomain?: string | undefined;
	readonly clusterDnsScope?: string | undefined;
}
export interface EphemeralStorageConfig {
	readonly localSsdCount?: number | undefined;
}
export interface EphemeralStorageLocalSsdConfig {
	readonly localSsdCount?: number | undefined;
}
export interface FastSocket {
	readonly enabled?: boolean | undefined;
}
export interface Filter {
	readonly eventType?: string[] | undefined;
}
export interface GatewayAPIConfig {
	readonly channel?: string | undefined;
}
export interface GcePersistentDiskCsiDriverConfig {
	readonly enabled?: boolean | undefined;
}
export interface GcfsConfig {
	readonly enabled?: boolean | undefined;
}
export interface GcpFilestoreCsiDriverConfig {
	readonly enabled?: boolean | undefined;
}
export interface GkeBackupAgentConfig {
	readonly enabled?: boolean | undefined;
}
export interface GPUSharingConfig {
	readonly gpuSharingStrategy?: string | undefined;
	readonly maxSharedClientsPerGpu?: string | undefined;
}
export interface HorizontalPodAutoscaling {
	readonly disabled?: boolean | undefined;
}
export interface HttpLoadBalancing {
	readonly disabled?: boolean | undefined;
}
export interface IdentityServiceConfig {
	readonly enabled?: boolean | undefined;
}
export interface IPAllocationPolicy {
	readonly allowRouteOverlap?: boolean | undefined;
	readonly clusterIpv4Cidr?: string | undefined;
	readonly clusterIpv4CidrBlock?: string | undefined;
	readonly clusterSecondaryRangeName?: string | undefined;
	readonly createSubnetwork?: boolean | undefined;
	readonly ipv6AccessType?: string | undefined;
	readonly nodeIpv4Cidr?: string | undefined;
	readonly nodeIpv4CidrBlock?: string | undefined;
	readonly servicesIpv4Cidr?: string | undefined;
	readonly servicesIpv4CidrBlock?: string | undefined;
	readonly servicesIpv6CidrBlock?: string | undefined;
	readonly servicesSecondaryRangeName?: string | undefined;
	readonly stackType?: string | undefined;
	readonly subnetIpv6CidrBlock?: string | undefined;
	readonly subnetworkName?: string | undefined;
	readonly tpuIpv4CidrBlock?: string | undefined;
	readonly useIpAliases?: boolean | undefined;
	readonly useRoutes?: boolean | undefined;
}
export interface IstioConfig {
	readonly auth?: string | undefined;
	readonly disabled?: boolean | undefined;
}
export interface KalmConfig {
	readonly enabled?: boolean | undefined;
}
export interface KubernetesDashboard {
	readonly disabled?: boolean | undefined;
}
export interface LegacyAbac {
	readonly enabled?: boolean | undefined;
}
export interface LinuxNodeConfig {
	readonly cgroupMode?: string | undefined;
	readonly sysctls?: { [P in string]: string } | undefined;
}
export interface LocalNvmeSsdBlockConfig {
	readonly localSsdCount?: number | undefined;
}
export interface LoggingComponentConfig {
	readonly enableComponents?: string[] | undefined;
}
export interface LoggingConfig {
	readonly componentConfig?: LoggingComponentConfig | undefined;
}
export interface LoggingVariantConfig {
	readonly variant?: string | undefined;
}
export interface MaintenanceExclusionOptions {
	readonly scope?: string | undefined;
}
export interface MaintenancePolicy {
	readonly resourceVersion?: string | undefined;
	readonly window?: MaintenanceWindow | undefined;
}
export interface MaintenanceWindow {
	readonly dailyMaintenanceWindow?: DailyMaintenanceWindow | undefined;
	readonly maintenanceExclusions?: { [P in string]: TimeWindow } | undefined;
	readonly recurringWindow?: RecurringTimeWindow | undefined;
}
export interface ManagedPrometheusConfig {
	readonly enabled?: boolean | undefined;
}
export interface Master {}
export interface MasterAuth {
	readonly clientCertificate?: string | undefined;
	readonly clientCertificateConfig?: ClientCertificateConfig | undefined;
	readonly clientKey?: string | undefined;
	readonly clusterCaCertificate?: string | undefined;
	readonly password?: string | undefined;
	readonly username?: string | undefined;
}
export interface MasterAuthorizedNetworksConfig {
	readonly cidrBlocks?: CidrBlock[] | undefined;
	readonly enabled?: boolean | undefined;
	readonly gcpPublicCidrsAccessEnabled?: boolean | undefined;
}
export interface MaxPodsConstraint {
	readonly maxPodsPerNode?: string | undefined;
}
export interface MeshCertificates {
	readonly enableCertificates?: boolean | undefined;
}
export interface MonitoringComponentConfig {
	readonly enableComponents?: string[] | undefined;
}
export interface MonitoringConfig {
	readonly componentConfig?: MonitoringComponentConfig | undefined;
	readonly managedPrometheusConfig?: ManagedPrometheusConfig | undefined;
}
export interface NetworkConfig {
	readonly datapathProvider?: string | undefined;
	readonly defaultSnatStatus?: DefaultSnatStatus | undefined;
	readonly dnsConfig?: DNSConfig | undefined;
	readonly enableIntraNodeVisibility?: boolean | undefined;
	readonly enableL4ilbSubsetting?: boolean | undefined;
	readonly gatewayApiConfig?: GatewayAPIConfig | undefined;
	readonly network?: string | undefined;
	readonly privateIpv6GoogleAccess?: string | undefined;
	readonly serviceExternalIpsConfig?: ServiceExternalIPsConfig | undefined;
	readonly subnetwork?: string | undefined;
}
export interface NetworkPerformanceConfig {
	readonly externalIpEgressBandwidthTier?: string | undefined;
	readonly totalEgressBandwidthTier?: string | undefined;
}
export interface NetworkPolicy {
	readonly enabled?: boolean | undefined;
	readonly provider?: string | undefined;
}
export interface NetworkPolicyConfig {
	readonly disabled?: boolean | undefined;
}
export interface NetworkTags {
	readonly tags?: string[] | undefined;
}
export interface NodeConfig {
	readonly accelerators?: AcceleratorConfig[] | undefined;
	readonly advancedMachineFeatures?: AdvancedMachineFeatures | undefined;
	readonly bootDiskKmsKey?: string | undefined;
	readonly confidentialNodes?: ConfidentialNodes | undefined;
	readonly diskSizeGb?: number | undefined;
	readonly diskType?: string | undefined;
	readonly ephemeralStorageConfig?: EphemeralStorageConfig | undefined;
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
export interface NodeConfigDefaults {
	readonly gcfsConfig?: GcfsConfig | undefined;
	readonly loggingConfig?: NodePoolLoggingConfig | undefined;
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
export interface NodePoolAutoConfig {
	readonly networkTags?: NetworkTags | undefined;
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
export interface NodePoolDefaults {
	readonly nodeConfigDefaults?: NodeConfigDefaults | undefined;
}
export interface NodePoolLoggingConfig {
	readonly variantConfig?: LoggingVariantConfig | undefined;
}
export interface NodeTaint {
	readonly effect?: string | undefined;
	readonly key?: string | undefined;
	readonly value?: string | undefined;
}
export interface NotificationConfig {
	readonly pubsub?: PubSub | undefined;
}
export interface PlacementPolicy {
	readonly type?: string | undefined;
}
export interface PodSecurityPolicyConfig {
	readonly enabled?: boolean | undefined;
}
export interface PrivateClusterConfig {
	readonly enablePrivateEndpoint?: boolean | undefined;
	readonly enablePrivateNodes?: boolean | undefined;
	readonly masterGlobalAccessConfig?: PrivateClusterMasterGlobalAccessConfig | undefined;
	readonly masterIpv4CidrBlock?: string | undefined;
	readonly peeringName?: string | undefined;
	readonly privateEndpoint?: string | undefined;
	readonly privateEndpointSubnetwork?: string | undefined;
	readonly publicEndpoint?: string | undefined;
}
export interface PrivateClusterMasterGlobalAccessConfig {
	readonly enabled?: boolean | undefined;
}
export interface ProtectConfig {
	readonly workloadConfig?: WorkloadConfig | undefined;
	readonly workloadVulnerabilityMode?: string | undefined;
}
export interface PubSub {
	readonly enabled?: boolean | undefined;
	readonly filter?: Filter | undefined;
	readonly topic?: string | undefined;
}
export interface RecurringTimeWindow {
	readonly recurrence?: string | undefined;
	readonly window?: TimeWindow | undefined;
}
export interface ReleaseChannel {
	readonly channel?: string | undefined;
}
export interface ReservationAffinity {
	readonly consumeReservationType?: string | undefined;
	readonly key?: string | undefined;
	readonly values?: string[] | undefined;
}
export interface ResourceLimit {
	readonly maximum?: string | undefined;
	readonly minimum?: string | undefined;
	readonly resourceType?: string | undefined;
}
export interface ResourceUsageExportConfig {
	readonly bigqueryDestination?: BigQueryDestination | undefined;
	readonly consumptionMeteringConfig?: ConsumptionMeteringConfig | undefined;
	readonly enableNetworkEgressMetering?: boolean | undefined;
}
export interface SandboxConfig {
	readonly sandboxType?: string | undefined;
	readonly type?: string | undefined;
}
export interface ServiceExternalIPsConfig {
	readonly enabled?: boolean | undefined;
}
export interface ShieldedInstanceConfig {
	readonly enableIntegrityMonitoring?: boolean | undefined;
	readonly enableSecureBoot?: boolean | undefined;
}
export interface ShieldedNodes {
	readonly enabled?: boolean | undefined;
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
export interface TimeWindow {
	readonly endTime?: string | undefined;
	readonly maintenanceExclusionOptions?: MaintenanceExclusionOptions | undefined;
	readonly startTime?: string | undefined;
}
export interface TpuConfig {
	readonly enabled?: boolean | undefined;
	readonly ipv4CidrBlock?: string | undefined;
	readonly useServiceNetworking?: boolean | undefined;
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
export interface VerticalPodAutoscaling {
	readonly enabled?: boolean | undefined;
}
export interface VirtualNIC {
	readonly enabled?: boolean | undefined;
}
export interface WindowsNodeConfig {
	readonly osVersion?: string | undefined;
}
export interface WorkloadALTSConfig {
	readonly enableAlts?: boolean | undefined;
}
export interface WorkloadCertificates {
	readonly enableCertificates?: boolean | undefined;
}
export interface WorkloadConfig {
	readonly auditMode?: string | undefined;
}
export interface WorkloadIdentityConfig {
	readonly identityNamespace?: string | undefined;
	readonly identityProvider?: string | undefined;
	readonly workloadPool?: string | undefined;
}
export interface WorkloadMetadataConfig {
	readonly mode?: string | undefined;
	readonly nodeMetadata?: string | undefined;
}
export default {
	ProjectsZonesClusters: ProjectsZonesClusters,
};
