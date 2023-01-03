import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsWorkflowTemplates
	extends GdmResource<ProjectsLocationsWorkflowTemplatesComponentInputs>
	implements ProjectsLocationsWorkflowTemplatesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsWorkflowTemplatesComponentInputs) {
		super(entity, options.name, "dataproc.v1.ProjectsLocationsWorkflowTemplates", options);
	}
	public readonly createTime?: string | undefined;
	public readonly updateTime?: string | undefined;
}
export interface ProjectsLocationsWorkflowTemplatesComponentOutputs {
	readonly createTime?: string | undefined;
	readonly updateTime?: string | undefined;
}
export interface ProjectsLocationsWorkflowTemplatesComponentInputs {
	readonly dagTimeout?: string | undefined;
	readonly id?: string | undefined;
	readonly jobs: OrderedJob[];
	readonly labels?: { [P in string]: string } | undefined;
	readonly name: string;
	readonly parameters?: TemplateParameter[] | undefined;
	readonly parent: string;
	readonly placement: WorkflowTemplatePlacement;
	readonly version?: number | undefined;
	readonly type: string;
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
export interface ClusterSelector {
	readonly clusterLabels: { [P in string]: string };
	readonly zone?: string | undefined;
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
export interface HadoopJob {
	readonly archiveUris?: string[] | undefined;
	readonly args?: string[] | undefined;
	readonly fileUris?: string[] | undefined;
	readonly jarFileUris?: string[] | undefined;
	readonly loggingConfig?: LoggingConfig | undefined;
	readonly mainClass?: string | undefined;
	readonly mainJarFileUri?: string | undefined;
	readonly properties?: { [P in string]: string } | undefined;
}
export interface HiveJob {
	readonly continueOnFailure?: boolean | undefined;
	readonly jarFileUris?: string[] | undefined;
	readonly properties?: { [P in string]: string } | undefined;
	readonly queryFileUri?: string | undefined;
	readonly queryList?: QueryList | undefined;
	readonly scriptVariables?: { [P in string]: string } | undefined;
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
export interface JobScheduling {
	readonly maxFailuresPerHour?: number | undefined;
	readonly maxFailuresTotal?: number | undefined;
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
export interface LifecycleConfig {
	readonly autoDeleteTime?: string | undefined;
	readonly autoDeleteTtl?: string | undefined;
	readonly idleDeleteTtl?: string | undefined;
	readonly idleStartTime?: string | undefined;
}
export interface LoggingConfig {
	readonly driverLogLevels?: { [P in string]: string } | undefined;
}
export interface ManagedCluster {
	readonly clusterName: string;
	readonly config: ClusterConfig;
	readonly labels?: { [P in string]: string } | undefined;
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
export interface OrderedJob {
	readonly hadoopJob?: HadoopJob | undefined;
	readonly hiveJob?: HiveJob | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly pigJob?: PigJob | undefined;
	readonly prerequisiteStepIds?: string[] | undefined;
	readonly prestoJob?: PrestoJob | undefined;
	readonly pysparkJob?: PySparkJob | undefined;
	readonly scheduling?: JobScheduling | undefined;
	readonly sparkJob?: SparkJob | undefined;
	readonly sparkRJob?: SparkRJob | undefined;
	readonly sparkSqlJob?: SparkSqlJob | undefined;
	readonly stepId: string;
	readonly trinoJob?: TrinoJob | undefined;
}
export interface ParameterValidation {
	readonly regex?: RegexValidation | undefined;
	readonly values?: ValueValidation | undefined;
}
export interface PigJob {
	readonly continueOnFailure?: boolean | undefined;
	readonly jarFileUris?: string[] | undefined;
	readonly loggingConfig?: LoggingConfig | undefined;
	readonly properties?: { [P in string]: string } | undefined;
	readonly queryFileUri?: string | undefined;
	readonly queryList?: QueryList | undefined;
	readonly scriptVariables?: { [P in string]: string } | undefined;
}
export interface PrestoJob {
	readonly clientTags?: string[] | undefined;
	readonly continueOnFailure?: boolean | undefined;
	readonly loggingConfig?: LoggingConfig | undefined;
	readonly outputFormat?: string | undefined;
	readonly properties?: { [P in string]: string } | undefined;
	readonly queryFileUri?: string | undefined;
	readonly queryList?: QueryList | undefined;
}
export interface PySparkJob {
	readonly archiveUris?: string[] | undefined;
	readonly args?: string[] | undefined;
	readonly fileUris?: string[] | undefined;
	readonly jarFileUris?: string[] | undefined;
	readonly loggingConfig?: LoggingConfig | undefined;
	readonly mainPythonFileUri: string;
	readonly properties?: { [P in string]: string } | undefined;
	readonly pythonFileUris?: string[] | undefined;
}
export interface QueryList {
	readonly queries: string[];
}
export interface RegexValidation {
	readonly regexes: string[];
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
export interface SparkJob {
	readonly archiveUris?: string[] | undefined;
	readonly args?: string[] | undefined;
	readonly fileUris?: string[] | undefined;
	readonly jarFileUris?: string[] | undefined;
	readonly loggingConfig?: LoggingConfig | undefined;
	readonly mainClass?: string | undefined;
	readonly mainJarFileUri?: string | undefined;
	readonly properties?: { [P in string]: string } | undefined;
}
export interface SparkRJob {
	readonly archiveUris?: string[] | undefined;
	readonly args?: string[] | undefined;
	readonly fileUris?: string[] | undefined;
	readonly loggingConfig?: LoggingConfig | undefined;
	readonly mainRFileUri: string;
	readonly properties?: { [P in string]: string } | undefined;
}
export interface SparkSqlJob {
	readonly jarFileUris?: string[] | undefined;
	readonly loggingConfig?: LoggingConfig | undefined;
	readonly properties?: { [P in string]: string } | undefined;
	readonly queryFileUri?: string | undefined;
	readonly queryList?: QueryList | undefined;
	readonly scriptVariables?: { [P in string]: string } | undefined;
}
export interface TemplateParameter {
	readonly description?: string | undefined;
	readonly fields: string[];
	readonly name: string;
	readonly validation?: ParameterValidation | undefined;
}
export interface TrinoJob {
	readonly clientTags?: string[] | undefined;
	readonly continueOnFailure?: boolean | undefined;
	readonly loggingConfig?: LoggingConfig | undefined;
	readonly outputFormat?: string | undefined;
	readonly properties?: { [P in string]: string } | undefined;
	readonly queryFileUri?: string | undefined;
	readonly queryList?: QueryList | undefined;
}
export interface ValueValidation {
	readonly values: string[];
}
export interface WorkflowTemplate {
	readonly createTime?: string | undefined;
	readonly dagTimeout?: string | undefined;
	readonly id?: string | undefined;
	readonly jobs: OrderedJob[];
	readonly labels?: { [P in string]: string } | undefined;
	readonly name?: string | undefined;
	readonly parameters?: TemplateParameter[] | undefined;
	readonly placement: WorkflowTemplatePlacement;
	readonly updateTime?: string | undefined;
	readonly version?: number | undefined;
}
export interface WorkflowTemplatePlacement {
	readonly clusterSelector?: ClusterSelector | undefined;
	readonly managedCluster?: ManagedCluster | undefined;
}
export default {
	ProjectsLocationsWorkflowTemplates: ProjectsLocationsWorkflowTemplates,
};
