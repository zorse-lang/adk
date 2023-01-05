import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsRegionsWorkflowTemplates
	extends GdmResource<ProjectsRegionsWorkflowTemplatesComponentInputs>
	implements ProjectsRegionsWorkflowTemplatesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsRegionsWorkflowTemplatesComponentInputs) {
		super(entity, options.name, "dataproc.v1.ProjectsRegionsWorkflowTemplates", options);
	}
	public readonly createTime?: string;
	public readonly updateTime?: string;
}
export interface ProjectsRegionsWorkflowTemplatesComponentOutputs {
	readonly createTime?: string;
	readonly updateTime?: string;
}
export interface ProjectsRegionsWorkflowTemplatesComponentInputs {
	readonly dagTimeout?: string;
	readonly id?: string;
	readonly jobs: OrderedJob[];
	readonly labels?: { [P in string]: string };
	readonly name: string;
	readonly parameters?: TemplateParameter[];
	readonly parent: string;
	readonly placement: WorkflowTemplatePlacement;
	readonly version?: number;
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
export interface ClusterSelector {
	readonly clusterLabels: { [P in string]: string };
	readonly zone?: string;
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
export interface HadoopJob {
	readonly archiveUris?: string[];
	readonly args?: string[];
	readonly fileUris?: string[];
	readonly jarFileUris?: string[];
	readonly loggingConfig?: LoggingConfig;
	readonly mainClass?: string;
	readonly mainJarFileUri?: string;
	readonly properties?: { [P in string]: string };
}
export interface HiveJob {
	readonly continueOnFailure?: boolean;
	readonly jarFileUris?: string[];
	readonly properties?: { [P in string]: string };
	readonly queryFileUri?: string;
	readonly queryList?: QueryList;
	readonly scriptVariables?: { [P in string]: string };
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
export interface JobScheduling {
	readonly maxFailuresPerHour?: number;
	readonly maxFailuresTotal?: number;
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
export interface LifecycleConfig {
	readonly autoDeleteTime?: string;
	readonly autoDeleteTtl?: string;
	readonly idleDeleteTtl?: string;
	readonly idleStartTime?: string;
}
export interface LoggingConfig {
	readonly driverLogLevels?: { [P in string]: string };
}
export interface ManagedCluster {
	readonly clusterName: string;
	readonly config: ClusterConfig;
	readonly labels?: { [P in string]: string };
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
export interface OrderedJob {
	readonly hadoopJob?: HadoopJob;
	readonly hiveJob?: HiveJob;
	readonly labels?: { [P in string]: string };
	readonly pigJob?: PigJob;
	readonly prerequisiteStepIds?: string[];
	readonly prestoJob?: PrestoJob;
	readonly pysparkJob?: PySparkJob;
	readonly scheduling?: JobScheduling;
	readonly sparkJob?: SparkJob;
	readonly sparkRJob?: SparkRJob;
	readonly sparkSqlJob?: SparkSqlJob;
	readonly stepId: string;
	readonly trinoJob?: TrinoJob;
}
export interface ParameterValidation {
	readonly regex?: RegexValidation;
	readonly values?: ValueValidation;
}
export interface PigJob {
	readonly continueOnFailure?: boolean;
	readonly jarFileUris?: string[];
	readonly loggingConfig?: LoggingConfig;
	readonly properties?: { [P in string]: string };
	readonly queryFileUri?: string;
	readonly queryList?: QueryList;
	readonly scriptVariables?: { [P in string]: string };
}
export interface PrestoJob {
	readonly clientTags?: string[];
	readonly continueOnFailure?: boolean;
	readonly loggingConfig?: LoggingConfig;
	readonly outputFormat?: string;
	readonly properties?: { [P in string]: string };
	readonly queryFileUri?: string;
	readonly queryList?: QueryList;
}
export interface PySparkJob {
	readonly archiveUris?: string[];
	readonly args?: string[];
	readonly fileUris?: string[];
	readonly jarFileUris?: string[];
	readonly loggingConfig?: LoggingConfig;
	readonly mainPythonFileUri: string;
	readonly properties?: { [P in string]: string };
	readonly pythonFileUris?: string[];
}
export interface QueryList {
	readonly queries: string[];
}
export interface RegexValidation {
	readonly regexes: string[];
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
export interface SparkJob {
	readonly archiveUris?: string[];
	readonly args?: string[];
	readonly fileUris?: string[];
	readonly jarFileUris?: string[];
	readonly loggingConfig?: LoggingConfig;
	readonly mainClass?: string;
	readonly mainJarFileUri?: string;
	readonly properties?: { [P in string]: string };
}
export interface SparkRJob {
	readonly archiveUris?: string[];
	readonly args?: string[];
	readonly fileUris?: string[];
	readonly loggingConfig?: LoggingConfig;
	readonly mainRFileUri: string;
	readonly properties?: { [P in string]: string };
}
export interface SparkSqlJob {
	readonly jarFileUris?: string[];
	readonly loggingConfig?: LoggingConfig;
	readonly properties?: { [P in string]: string };
	readonly queryFileUri?: string;
	readonly queryList?: QueryList;
	readonly scriptVariables?: { [P in string]: string };
}
export interface TemplateParameter {
	readonly description?: string;
	readonly fields: string[];
	readonly name: string;
	readonly validation?: ParameterValidation;
}
export interface TrinoJob {
	readonly clientTags?: string[];
	readonly continueOnFailure?: boolean;
	readonly loggingConfig?: LoggingConfig;
	readonly outputFormat?: string;
	readonly properties?: { [P in string]: string };
	readonly queryFileUri?: string;
	readonly queryList?: QueryList;
}
export interface ValueValidation {
	readonly values: string[];
}
export interface WorkflowTemplate {
	readonly createTime?: string;
	readonly dagTimeout?: string;
	readonly id?: string;
	readonly jobs: OrderedJob[];
	readonly labels?: { [P in string]: string };
	readonly name?: string;
	readonly parameters?: TemplateParameter[];
	readonly placement: WorkflowTemplatePlacement;
	readonly updateTime?: string;
	readonly version?: number;
}
export interface WorkflowTemplatePlacement {
	readonly clusterSelector?: ClusterSelector;
	readonly managedCluster?: ManagedCluster;
}
export default {
	ProjectsRegionsWorkflowTemplates: ProjectsRegionsWorkflowTemplates,
};
