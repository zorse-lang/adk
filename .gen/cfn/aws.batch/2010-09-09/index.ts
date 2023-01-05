import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class ComputeEnvironment
	extends CfnResource<ComputeEnvironmentComponentInputs>
	implements ComputeEnvironmentComponentOutputs
{
	constructor(entity: ADKEntity, options: ComputeEnvironmentComponentInputs) {
		super(entity, options.LogicalId, "AWS::Batch::ComputeEnvironment", options);
	}
	public readonly ComputeEnvironmentArn: string;
}
export interface ComputeEnvironmentComponentOutputs {
	readonly ComputeEnvironmentArn: string;
}
export interface ComputeEnvironmentComponentInputs {
	readonly Type: string;
	readonly ComputeEnvironmentName?: string | undefined;
	readonly ComputeResources?: ComputeResources | undefined;
	readonly EksConfiguration?: EksConfiguration | undefined;
	readonly ReplaceComputeEnvironment?: boolean | undefined;
	readonly ServiceRole?: string | undefined;
	readonly State?: string | undefined;
	readonly Tags?: { [key: string]: string } | undefined;
	readonly UnmanagedvCpus?: number | undefined;
	readonly UpdatePolicy?: UpdatePolicy | undefined;
	readonly LogicalId: string;
}
export class JobDefinition extends CfnResource<JobDefinitionComponentInputs> implements JobDefinitionComponentOutputs {
	constructor(entity: ADKEntity, options: JobDefinitionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Batch::JobDefinition", options);
	}
}
export interface JobDefinitionComponentOutputs {}
export interface JobDefinitionComponentInputs {
	readonly Type: string;
	readonly ContainerProperties?: ContainerProperties | undefined;
	readonly EksProperties?: EksProperties | undefined;
	readonly JobDefinitionName?: string | undefined;
	readonly NodeProperties?: NodeProperties | undefined;
	readonly Parameters?: any | undefined;
	readonly PlatformCapabilities?: string[] | undefined;
	readonly PropagateTags?: boolean | undefined;
	readonly RetryStrategy?: RetryStrategy | undefined;
	readonly SchedulingPriority?: number | undefined;
	readonly Tags?: any | undefined;
	readonly Timeout?: Timeout | undefined;
	readonly LogicalId: string;
}
export class JobQueue extends CfnResource<JobQueueComponentInputs> implements JobQueueComponentOutputs {
	constructor(entity: ADKEntity, options: JobQueueComponentInputs) {
		super(entity, options.LogicalId, "AWS::Batch::JobQueue", options);
	}
	public readonly JobQueueArn: string;
}
export interface JobQueueComponentOutputs {
	readonly JobQueueArn: string;
}
export interface JobQueueComponentInputs {
	readonly ComputeEnvironmentOrder: ComputeEnvironmentOrder[];
	readonly Priority: number;
	readonly JobQueueName?: string | undefined;
	readonly SchedulingPolicyArn?: string | undefined;
	readonly State?: string | undefined;
	readonly Tags?: { [key: string]: string } | undefined;
	readonly LogicalId: string;
}
export class SchedulingPolicy
	extends CfnResource<SchedulingPolicyComponentInputs>
	implements SchedulingPolicyComponentOutputs
{
	constructor(entity: ADKEntity, options: SchedulingPolicyComponentInputs) {
		super(entity, options.LogicalId, "AWS::Batch::SchedulingPolicy", options);
	}
	public readonly Arn: string;
}
export interface SchedulingPolicyComponentOutputs {
	readonly Arn: string;
}
export interface SchedulingPolicyComponentInputs {
	readonly FairsharePolicy?: FairsharePolicy | undefined;
	readonly Name?: string | undefined;
	readonly Tags?: { [key: string]: string } | undefined;
	readonly LogicalId: string;
}
export interface ComputeResources {
	readonly AllocationStrategy?: string | undefined;
	readonly BidPercentage?: number | undefined;
	readonly DesiredvCpus?: number | undefined;
	readonly Ec2Configuration?: Ec2ConfigurationObject[] | undefined;
	readonly Ec2KeyPair?: string | undefined;
	readonly ImageId?: string | undefined;
	readonly InstanceRole?: string | undefined;
	readonly InstanceTypes?: string[] | undefined;
	readonly LaunchTemplate?: LaunchTemplateSpecification | undefined;
	readonly MaxvCpus: number;
	readonly MinvCpus?: number | undefined;
	readonly PlacementGroup?: string | undefined;
	readonly SecurityGroupIds?: string[] | undefined;
	readonly SpotIamFleetRole?: string | undefined;
	readonly Subnets: string[];
	readonly Tags?: { [key: string]: string } | undefined;
	readonly Type: string;
	readonly UpdateToLatestImageVersion?: boolean | undefined;
}
export interface Ec2ConfigurationObject {
	readonly ImageIdOverride?: string | undefined;
	readonly ImageKubernetesVersion?: string | undefined;
	readonly ImageType: string;
}
export interface EksConfiguration {
	readonly EksClusterArn: string;
	readonly KubernetesNamespace: string;
}
export interface LaunchTemplateSpecification {
	readonly LaunchTemplateId?: string | undefined;
	readonly LaunchTemplateName?: string | undefined;
	readonly Version?: string | undefined;
}
export interface UpdatePolicy {
	readonly JobExecutionTimeoutMinutes?: number | undefined;
	readonly TerminateJobsOnUpdate?: boolean | undefined;
}
export interface AuthorizationConfig {
	readonly AccessPointId?: string | undefined;
	readonly Iam?: string | undefined;
}
export interface ContainerProperties {
	readonly Command?: string[] | undefined;
	readonly Environment?: Environment[] | undefined;
	readonly ExecutionRoleArn?: string | undefined;
	readonly FargatePlatformConfiguration?: FargatePlatformConfiguration | undefined;
	readonly Image: string;
	readonly InstanceType?: string | undefined;
	readonly JobRoleArn?: string | undefined;
	readonly LinuxParameters?: LinuxParameters | undefined;
	readonly LogConfiguration?: LogConfiguration | undefined;
	readonly Memory?: number | undefined;
	readonly MountPoints?: MountPoints[] | undefined;
	readonly NetworkConfiguration?: NetworkConfiguration | undefined;
	readonly Privileged?: boolean | undefined;
	readonly ReadonlyRootFilesystem?: boolean | undefined;
	readonly ResourceRequirements?: ResourceRequirement[] | undefined;
	readonly Secrets?: Secret[] | undefined;
	readonly Ulimits?: Ulimit[] | undefined;
	readonly User?: string | undefined;
	readonly Vcpus?: number | undefined;
	readonly Volumes?: Volumes[] | undefined;
}
export interface Device {
	readonly ContainerPath?: string | undefined;
	readonly HostPath?: string | undefined;
	readonly Permissions?: string[] | undefined;
}
export interface EfsVolumeConfiguration {
	readonly AuthorizationConfig?: AuthorizationConfig | undefined;
	readonly FileSystemId: string;
	readonly RootDirectory?: string | undefined;
	readonly TransitEncryption?: string | undefined;
	readonly TransitEncryptionPort?: number | undefined;
}
export interface EksContainer {
	readonly Args?: string[] | undefined;
	readonly Command?: string[] | undefined;
	readonly Env?: EksContainerEnvironmentVariable[] | undefined;
	readonly Image: string;
	readonly ImagePullPolicy?: string | undefined;
	readonly Name?: string | undefined;
	readonly Resources?: Resources | undefined;
	readonly SecurityContext?: SecurityContext | undefined;
	readonly VolumeMounts?: EksContainerVolumeMount[] | undefined;
}
export interface EksContainerEnvironmentVariable {
	readonly Name: string;
	readonly Value?: string | undefined;
}
export interface EksContainerVolumeMount {
	readonly MountPath?: string | undefined;
	readonly Name?: string | undefined;
	readonly ReadOnly?: boolean | undefined;
}
export interface EksProperties {
	readonly PodProperties?: PodProperties | undefined;
}
export interface EksVolume {
	readonly EmptyDir?: EmptyDir | undefined;
	readonly HostPath?: HostPath | undefined;
	readonly Name: string;
	readonly Secret?: Secret | undefined;
}
export interface EmptyDir {
	readonly Medium?: string | undefined;
	readonly SizeLimit?: string | undefined;
}
export interface Environment {
	readonly Name?: string | undefined;
	readonly Value?: string | undefined;
}
export interface EvaluateOnExit {
	readonly Action: string;
	readonly OnExitCode?: string | undefined;
	readonly OnReason?: string | undefined;
	readonly OnStatusReason?: string | undefined;
}
export interface FargatePlatformConfiguration {
	readonly PlatformVersion?: string | undefined;
}
export interface HostPath {
	readonly Path?: string | undefined;
}
export interface LinuxParameters {
	readonly Devices?: Device[] | undefined;
	readonly InitProcessEnabled?: boolean | undefined;
	readonly MaxSwap?: number | undefined;
	readonly SharedMemorySize?: number | undefined;
	readonly Swappiness?: number | undefined;
	readonly Tmpfs?: Tmpfs[] | undefined;
}
export interface LogConfiguration {
	readonly LogDriver: string;
	readonly Options?: any | undefined;
	readonly SecretOptions?: Secret[] | undefined;
}
export interface MountPoints {
	readonly ContainerPath?: string | undefined;
	readonly ReadOnly?: boolean | undefined;
	readonly SourceVolume?: string | undefined;
}
export interface NetworkConfiguration {
	readonly AssignPublicIp?: string | undefined;
}
export interface NodeProperties {
	readonly MainNode: number;
	readonly NodeRangeProperties: NodeRange[];
	readonly NumNodes: number;
}
export interface NodeRange {
	readonly Container?: ContainerProperties | undefined;
	readonly TargetNodes: string;
}
export interface PodProperties {
	readonly Containers?: EksContainer[] | undefined;
	readonly DnsPolicy?: string | undefined;
	readonly HostNetwork?: boolean | undefined;
	readonly ServiceAccountName?: string | undefined;
	readonly Volumes?: EksVolume[] | undefined;
}
export interface ResourceRequirement {
	readonly Type?: string | undefined;
	readonly Value?: string | undefined;
}
export interface Resources {
	readonly Limits?: any | undefined;
	readonly Requests?: any | undefined;
}
export interface RetryStrategy {
	readonly Attempts?: number | undefined;
	readonly EvaluateOnExit?: EvaluateOnExit[] | undefined;
}
export interface Secret {
	readonly Name: string;
	readonly ValueFrom: string;
}
export interface SecurityContext {
	readonly Privileged?: boolean | undefined;
	readonly ReadOnlyRootFilesystem?: boolean | undefined;
	readonly RunAsGroup?: number | undefined;
	readonly RunAsNonRoot?: boolean | undefined;
	readonly RunAsUser?: number | undefined;
}
export interface Timeout {
	readonly AttemptDurationSeconds?: number | undefined;
}
export interface Tmpfs {
	readonly ContainerPath: string;
	readonly MountOptions?: string[] | undefined;
	readonly Size: number;
}
export interface Ulimit {
	readonly HardLimit: number;
	readonly Name: string;
	readonly SoftLimit: number;
}
export interface Volumes {
	readonly EfsVolumeConfiguration?: EfsVolumeConfiguration | undefined;
	readonly Host?: VolumesHost | undefined;
	readonly Name?: string | undefined;
}
export interface VolumesHost {
	readonly SourcePath?: string | undefined;
}
export interface ComputeEnvironmentOrder {
	readonly ComputeEnvironment: string;
	readonly Order: number;
}
export interface FairsharePolicy {
	readonly ComputeReservation?: number | undefined;
	readonly ShareDecaySeconds?: number | undefined;
	readonly ShareDistribution?: ShareAttributes[] | undefined;
}
export interface ShareAttributes {
	readonly ShareIdentifier?: string | undefined;
	readonly WeightFactor?: number | undefined;
}
export default {
	ComputeEnvironment: ComputeEnvironment,
	JobDefinition: JobDefinition,
	JobQueue: JobQueue,
	SchedulingPolicy: SchedulingPolicy,
};
