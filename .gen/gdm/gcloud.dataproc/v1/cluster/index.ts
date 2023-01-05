import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Cluster extends GdmResource<ClusterComponentInputs> implements ClusterComponentOutputs {
	constructor(entity: ADKEntity, options: ClusterComponentInputs) {
		super(entity, options.name, "dataproc.v1.cluster", options);
	}
	public readonly clusterUuid?: string;
	public readonly metrics?: ClusterMetrics;
	public readonly status?: ClusterStatus;
	public readonly statusHistory?: ClusterStatus[];
}
export interface ClusterComponentOutputs {
	readonly clusterUuid?: string;
	readonly metrics?: ClusterMetrics;
	readonly status?: ClusterStatus;
	readonly statusHistory?: ClusterStatus[];
}
export interface ClusterComponentInputs {
	readonly clusterName: string;
	readonly config?: ClusterConfig;
	readonly labels?: { [P in string]: string };
	readonly projectId: string;
	readonly virtualClusterConfig?: VirtualClusterConfig;
	readonly name: string;
}
export interface AcceleratorConfig {
	readonly acceleratorCount?: number;
	readonly acceleratorTypeUri?: string;
}
export interface AutoscalingConfig {
	readonly policyUri?: string;
}
export interface AuxiliaryNodeGroup {
	readonly nodeGroup: NodeGroup;
	readonly nodeGroupId?: string;
}
export interface AuxiliaryServicesConfig {
	readonly metastoreConfig?: MetastoreConfig;
	readonly sparkHistoryServerConfig?: SparkHistoryServerConfig;
}
export interface ClusterConfig {
	readonly autoscalingConfig?: AutoscalingConfig;
	readonly auxiliaryNodeGroups?: AuxiliaryNodeGroup[];
	readonly configBucket?: string;
	readonly dataprocMetricConfig?: DataprocMetricConfig;
	readonly encryptionConfig?: EncryptionConfig;
	readonly endpointConfig?: EndpointConfig;
	readonly gceClusterConfig?: GceClusterConfig;
	readonly gkeClusterConfig?: GkeClusterConfig;
	readonly initializationActions?: NodeInitializationAction[];
	readonly lifecycleConfig?: LifecycleConfig;
	readonly masterConfig?: InstanceGroupConfig;
	readonly metastoreConfig?: MetastoreConfig;
	readonly secondaryWorkerConfig?: InstanceGroupConfig;
	readonly securityConfig?: SecurityConfig;
	readonly softwareConfig?: SoftwareConfig;
	readonly tempBucket?: string;
	readonly workerConfig?: InstanceGroupConfig;
}
export interface ClusterMetrics {
	readonly hdfsMetrics?: { [P in string]: string };
	readonly yarnMetrics?: { [P in string]: string };
}
export interface ClusterStatus {
	readonly detail?: string;
	readonly state?: string;
	readonly stateStartTime?: string;
	readonly substate?: string;
}
export interface ConfidentialInstanceConfig {
	readonly enableConfidentialCompute?: boolean;
}
export interface DataprocMetricConfig {
	readonly metrics: Metric[];
}
export interface DiskConfig {
	readonly bootDiskSizeGb?: number;
	readonly bootDiskType?: string;
	readonly localSsdInterface?: string;
	readonly numLocalSsds?: number;
}
export interface EncryptionConfig {
	readonly gcePdKmsKeyName?: string;
}
export interface EndpointConfig {
	readonly enableHttpPortAccess?: boolean;
	readonly httpPorts?: { [P in string]: string };
}
export interface GceClusterConfig {
	readonly confidentialInstanceConfig?: ConfidentialInstanceConfig;
	readonly internalIpOnly?: boolean;
	readonly metadata?: { [P in string]: string };
	readonly networkUri?: string;
	readonly nodeGroupAffinity?: NodeGroupAffinity;
	readonly privateIpv6GoogleAccess?: string;
	readonly reservationAffinity?: ReservationAffinity;
	readonly serviceAccount?: string;
	readonly serviceAccountScopes?: string[];
	readonly shieldedInstanceConfig?: ShieldedInstanceConfig;
	readonly subnetworkUri?: string;
	readonly tags?: string[];
	readonly zoneUri?: string;
}
export interface GkeClusterConfig {
	readonly gkeClusterTarget?: string;
	readonly namespacedGkeDeploymentTarget?: NamespacedGkeDeploymentTarget;
	readonly nodePoolTarget?: GkeNodePoolTarget[];
}
export interface GkeNodeConfig {
	readonly accelerators?: GkeNodePoolAcceleratorConfig[];
	readonly bootDiskKmsKey?: string;
	readonly localSsdCount?: number;
	readonly machineType?: string;
	readonly minCpuPlatform?: string;
	readonly preemptible?: boolean;
	readonly spot?: boolean;
}
export interface GkeNodePoolAcceleratorConfig {
	readonly acceleratorCount?: string;
	readonly acceleratorType?: string;
	readonly gpuPartitionSize?: string;
}
export interface GkeNodePoolAutoscalingConfig {
	readonly maxNodeCount?: number;
	readonly minNodeCount?: number;
}
export interface GkeNodePoolConfig {
	readonly autoscaling?: GkeNodePoolAutoscalingConfig;
	readonly config?: GkeNodeConfig;
	readonly locations?: string[];
}
export interface GkeNodePoolTarget {
	readonly nodePool: string;
	readonly nodePoolConfig?: GkeNodePoolConfig;
	readonly roles: string[];
}
export interface IdentityConfig {
	readonly userServiceAccountMapping: { [P in string]: string };
}
export interface InstanceGroupConfig {
	readonly accelerators?: AcceleratorConfig[];
	readonly diskConfig?: DiskConfig;
	readonly imageUri?: string;
	readonly instanceNames?: string[];
	readonly instanceReferences?: InstanceReference[];
	readonly isPreemptible?: boolean;
	readonly machineTypeUri?: string;
	readonly managedGroupConfig?: ManagedGroupConfig;
	readonly minCpuPlatform?: string;
	readonly numInstances?: number;
	readonly preemptibility?: string;
}
export interface InstanceReference {
	readonly instanceId?: string;
	readonly instanceName?: string;
	readonly publicEciesKey?: string;
	readonly publicKey?: string;
}
export interface KerberosConfig {
	readonly crossRealmTrustAdminServer?: string;
	readonly crossRealmTrustKdc?: string;
	readonly crossRealmTrustRealm?: string;
	readonly crossRealmTrustSharedPasswordUri?: string;
	readonly enableKerberos?: boolean;
	readonly kdcDbKeyUri?: string;
	readonly keyPasswordUri?: string;
	readonly keystorePasswordUri?: string;
	readonly keystoreUri?: string;
	readonly kmsKeyUri?: string;
	readonly realm?: string;
	readonly rootPrincipalPasswordUri?: string;
	readonly tgtLifetimeHours?: number;
	readonly truststorePasswordUri?: string;
	readonly truststoreUri?: string;
}
export interface KubernetesClusterConfig {
	readonly gkeClusterConfig: GkeClusterConfig;
	readonly kubernetesNamespace?: string;
	readonly kubernetesSoftwareConfig?: KubernetesSoftwareConfig;
}
export interface KubernetesSoftwareConfig {
	readonly componentVersion?: { [P in string]: string };
	readonly properties?: { [P in string]: string };
}
export interface LifecycleConfig {
	readonly autoDeleteTime?: string;
	readonly autoDeleteTtl?: string;
	readonly idleDeleteTtl?: string;
	readonly idleStartTime?: string;
}
export interface ManagedGroupConfig {
	readonly instanceGroupManagerName?: string;
	readonly instanceTemplateName?: string;
}
export interface MetastoreConfig {
	readonly dataprocMetastoreService: string;
}
export interface Metric {
	readonly metricOverrides?: string[];
	readonly metricSource: string;
}
export interface NamespacedGkeDeploymentTarget {
	readonly clusterNamespace?: string;
	readonly targetGkeCluster?: string;
}
export interface NodeGroup {
	readonly labels?: { [P in string]: string };
	readonly name?: string;
	readonly nodeGroupConfig?: InstanceGroupConfig;
	readonly roles: string[];
}
export interface NodeGroupAffinity {
	readonly nodeGroupUri: string;
}
export interface NodeInitializationAction {
	readonly executableFile: string;
	readonly executionTimeout?: string;
}
export interface ReservationAffinity {
	readonly consumeReservationType?: string;
	readonly key?: string;
	readonly values?: string[];
}
export interface SecurityConfig {
	readonly identityConfig?: IdentityConfig;
	readonly kerberosConfig?: KerberosConfig;
}
export interface ShieldedInstanceConfig {
	readonly enableIntegrityMonitoring?: boolean;
	readonly enableSecureBoot?: boolean;
	readonly enableVtpm?: boolean;
}
export interface SoftwareConfig {
	readonly imageVersion?: string;
	readonly optionalComponents?: string[];
	readonly properties?: { [P in string]: string };
}
export interface SparkHistoryServerConfig {
	readonly dataprocCluster?: string;
}
export interface VirtualClusterConfig {
	readonly auxiliaryServicesConfig?: AuxiliaryServicesConfig;
	readonly kubernetesClusterConfig: KubernetesClusterConfig;
	readonly stagingBucket?: string;
}
export default {
	Cluster: Cluster,
};
