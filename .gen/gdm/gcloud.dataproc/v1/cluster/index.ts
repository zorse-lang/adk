import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Cluster extends GdmResource<ClusterComponentInputs> implements ClusterComponentOutputs {
	constructor(entity: ADKEntity, options: ClusterComponentInputs) {
		super(entity, options.name, "dataproc.v1.cluster", options);
	}
	public readonly clusterUuid?: string | undefined;
	public readonly metrics?: ClusterMetrics | undefined;
	public readonly status?: ClusterStatus | undefined;
	public readonly statusHistory?: ClusterStatus[] | undefined;
}
export interface ClusterComponentOutputs {
	readonly clusterUuid?: string | undefined;
	readonly metrics?: ClusterMetrics | undefined;
	readonly status?: ClusterStatus | undefined;
	readonly statusHistory?: ClusterStatus[] | undefined;
}
export interface ClusterComponentInputs {
	readonly clusterName: string;
	readonly config?: ClusterConfig | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly projectId: string;
	readonly virtualClusterConfig?: VirtualClusterConfig | undefined;
	readonly type: string;
	readonly name: string;
}
export interface AcceleratorConfig {
	readonly acceleratorCount?: number | undefined;
	readonly acceleratorTypeUri?: string | undefined;
}
export interface AutoscalingConfig {
	readonly policyUri?: string | undefined;
}
export interface AuxiliaryNodeGroup {
	readonly nodeGroup: NodeGroup;
	readonly nodeGroupId?: string | undefined;
}
export interface AuxiliaryServicesConfig {
	readonly metastoreConfig?: MetastoreConfig | undefined;
	readonly sparkHistoryServerConfig?: SparkHistoryServerConfig | undefined;
}
export interface ClusterConfig {
	readonly autoscalingConfig?: AutoscalingConfig | undefined;
	readonly auxiliaryNodeGroups?: AuxiliaryNodeGroup[] | undefined;
	readonly configBucket?: string | undefined;
	readonly dataprocMetricConfig?: DataprocMetricConfig | undefined;
	readonly encryptionConfig?: EncryptionConfig | undefined;
	readonly endpointConfig?: EndpointConfig | undefined;
	readonly gceClusterConfig?: GceClusterConfig | undefined;
	readonly gkeClusterConfig?: GkeClusterConfig | undefined;
	readonly initializationActions?: NodeInitializationAction[] | undefined;
	readonly lifecycleConfig?: LifecycleConfig | undefined;
	readonly masterConfig?: InstanceGroupConfig | undefined;
	readonly metastoreConfig?: MetastoreConfig | undefined;
	readonly secondaryWorkerConfig?: InstanceGroupConfig | undefined;
	readonly securityConfig?: SecurityConfig | undefined;
	readonly softwareConfig?: SoftwareConfig | undefined;
	readonly tempBucket?: string | undefined;
	readonly workerConfig?: InstanceGroupConfig | undefined;
}
export interface ClusterMetrics {
	readonly hdfsMetrics?: { [P in string]: string } | undefined;
	readonly yarnMetrics?: { [P in string]: string } | undefined;
}
export interface ClusterStatus {
	readonly detail?: string | undefined;
	readonly state?: string | undefined;
	readonly stateStartTime?: string | undefined;
	readonly substate?: string | undefined;
}
export interface ConfidentialInstanceConfig {
	readonly enableConfidentialCompute?: boolean | undefined;
}
export interface DataprocMetricConfig {
	readonly metrics: Metric[];
}
export interface DiskConfig {
	readonly bootDiskSizeGb?: number | undefined;
	readonly bootDiskType?: string | undefined;
	readonly localSsdInterface?: string | undefined;
	readonly numLocalSsds?: number | undefined;
}
export interface EncryptionConfig {
	readonly gcePdKmsKeyName?: string | undefined;
}
export interface EndpointConfig {
	readonly enableHttpPortAccess?: boolean | undefined;
	readonly httpPorts?: { [P in string]: string } | undefined;
}
export interface GceClusterConfig {
	readonly confidentialInstanceConfig?: ConfidentialInstanceConfig | undefined;
	readonly internalIpOnly?: boolean | undefined;
	readonly metadata?: { [P in string]: string } | undefined;
	readonly networkUri?: string | undefined;
	readonly nodeGroupAffinity?: NodeGroupAffinity | undefined;
	readonly privateIpv6GoogleAccess?: string | undefined;
	readonly reservationAffinity?: ReservationAffinity | undefined;
	readonly serviceAccount?: string | undefined;
	readonly serviceAccountScopes?: string[] | undefined;
	readonly shieldedInstanceConfig?: ShieldedInstanceConfig | undefined;
	readonly subnetworkUri?: string | undefined;
	readonly tags?: string[] | undefined;
	readonly zoneUri?: string | undefined;
}
export interface GkeClusterConfig {
	readonly gkeClusterTarget?: string | undefined;
	readonly namespacedGkeDeploymentTarget?: NamespacedGkeDeploymentTarget | undefined;
	readonly nodePoolTarget?: GkeNodePoolTarget[] | undefined;
}
export interface GkeNodeConfig {
	readonly accelerators?: GkeNodePoolAcceleratorConfig[] | undefined;
	readonly bootDiskKmsKey?: string | undefined;
	readonly localSsdCount?: number | undefined;
	readonly machineType?: string | undefined;
	readonly minCpuPlatform?: string | undefined;
	readonly preemptible?: boolean | undefined;
	readonly spot?: boolean | undefined;
}
export interface GkeNodePoolAcceleratorConfig {
	readonly acceleratorCount?: string | undefined;
	readonly acceleratorType?: string | undefined;
	readonly gpuPartitionSize?: string | undefined;
}
export interface GkeNodePoolAutoscalingConfig {
	readonly maxNodeCount?: number | undefined;
	readonly minNodeCount?: number | undefined;
}
export interface GkeNodePoolConfig {
	readonly autoscaling?: GkeNodePoolAutoscalingConfig | undefined;
	readonly config?: GkeNodeConfig | undefined;
	readonly locations?: string[] | undefined;
}
export interface GkeNodePoolTarget {
	readonly nodePool: string;
	readonly nodePoolConfig?: GkeNodePoolConfig | undefined;
	readonly roles: string[];
}
export interface IdentityConfig {
	readonly userServiceAccountMapping: { [P in string]: string };
}
export interface InstanceGroupConfig {
	readonly accelerators?: AcceleratorConfig[] | undefined;
	readonly diskConfig?: DiskConfig | undefined;
	readonly imageUri?: string | undefined;
	readonly instanceNames?: string[] | undefined;
	readonly instanceReferences?: InstanceReference[] | undefined;
	readonly isPreemptible?: boolean | undefined;
	readonly machineTypeUri?: string | undefined;
	readonly managedGroupConfig?: ManagedGroupConfig | undefined;
	readonly minCpuPlatform?: string | undefined;
	readonly numInstances?: number | undefined;
	readonly preemptibility?: string | undefined;
}
export interface InstanceReference {
	readonly instanceId?: string | undefined;
	readonly instanceName?: string | undefined;
	readonly publicEciesKey?: string | undefined;
	readonly publicKey?: string | undefined;
}
export interface KerberosConfig {
	readonly crossRealmTrustAdminServer?: string | undefined;
	readonly crossRealmTrustKdc?: string | undefined;
	readonly crossRealmTrustRealm?: string | undefined;
	readonly crossRealmTrustSharedPasswordUri?: string | undefined;
	readonly enableKerberos?: boolean | undefined;
	readonly kdcDbKeyUri?: string | undefined;
	readonly keyPasswordUri?: string | undefined;
	readonly keystorePasswordUri?: string | undefined;
	readonly keystoreUri?: string | undefined;
	readonly kmsKeyUri?: string | undefined;
	readonly realm?: string | undefined;
	readonly rootPrincipalPasswordUri?: string | undefined;
	readonly tgtLifetimeHours?: number | undefined;
	readonly truststorePasswordUri?: string | undefined;
	readonly truststoreUri?: string | undefined;
}
export interface KubernetesClusterConfig {
	readonly gkeClusterConfig: GkeClusterConfig;
	readonly kubernetesNamespace?: string | undefined;
	readonly kubernetesSoftwareConfig?: KubernetesSoftwareConfig | undefined;
}
export interface KubernetesSoftwareConfig {
	readonly componentVersion?: { [P in string]: string } | undefined;
	readonly properties?: { [P in string]: string } | undefined;
}
export interface LifecycleConfig {
	readonly autoDeleteTime?: string | undefined;
	readonly autoDeleteTtl?: string | undefined;
	readonly idleDeleteTtl?: string | undefined;
	readonly idleStartTime?: string | undefined;
}
export interface ManagedGroupConfig {
	readonly instanceGroupManagerName?: string | undefined;
	readonly instanceTemplateName?: string | undefined;
}
export interface MetastoreConfig {
	readonly dataprocMetastoreService: string;
}
export interface Metric {
	readonly metricOverrides?: string[] | undefined;
	readonly metricSource: string;
}
export interface NamespacedGkeDeploymentTarget {
	readonly clusterNamespace?: string | undefined;
	readonly targetGkeCluster?: string | undefined;
}
export interface NodeGroup {
	readonly labels?: { [P in string]: string } | undefined;
	readonly name?: string | undefined;
	readonly nodeGroupConfig?: InstanceGroupConfig | undefined;
	readonly roles: string[];
}
export interface NodeGroupAffinity {
	readonly nodeGroupUri: string;
}
export interface NodeInitializationAction {
	readonly executableFile: string;
	readonly executionTimeout?: string | undefined;
}
export interface ReservationAffinity {
	readonly consumeReservationType?: string | undefined;
	readonly key?: string | undefined;
	readonly values?: string[] | undefined;
}
export interface SecurityConfig {
	readonly identityConfig?: IdentityConfig | undefined;
	readonly kerberosConfig?: KerberosConfig | undefined;
}
export interface ShieldedInstanceConfig {
	readonly enableIntegrityMonitoring?: boolean | undefined;
	readonly enableSecureBoot?: boolean | undefined;
	readonly enableVtpm?: boolean | undefined;
}
export interface SoftwareConfig {
	readonly imageVersion?: string | undefined;
	readonly optionalComponents?: string[] | undefined;
	readonly properties?: { [P in string]: string } | undefined;
}
export interface SparkHistoryServerConfig {
	readonly dataprocCluster?: string | undefined;
}
export interface VirtualClusterConfig {
	readonly auxiliaryServicesConfig?: AuxiliaryServicesConfig | undefined;
	readonly kubernetesClusterConfig: KubernetesClusterConfig;
	readonly stagingBucket?: string | undefined;
}
export default {
	Cluster: Cluster,
};
