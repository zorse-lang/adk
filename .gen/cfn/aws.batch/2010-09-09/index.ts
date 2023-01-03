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
	readonly ComputeEnvironmentName?: (string | undefined) | undefined;
	readonly ComputeResources?: (ComputeResources | undefined) | undefined;
	readonly EksConfiguration?: (EksConfiguration | undefined) | undefined;
	readonly ReplaceComputeEnvironment?: (boolean | undefined) | undefined;
	readonly ServiceRole?: (string | undefined) | undefined;
	readonly State?: (string | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
	readonly UnmanagedvCpus?: (number | undefined) | undefined;
	readonly UpdatePolicy?: (UpdatePolicy | undefined) | undefined;
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
	readonly ContainerProperties?: (ContainerProperties | undefined) | undefined;
	readonly EksProperties?: (EksProperties | undefined) | undefined;
	readonly JobDefinitionName?: (string | undefined) | undefined;
	readonly NodeProperties?: (NodeProperties | undefined) | undefined;
	readonly Parameters?: (any | undefined) | undefined;
	readonly PlatformCapabilities?: (string[] | undefined) | undefined;
	readonly PropagateTags?: (boolean | undefined) | undefined;
	readonly RetryStrategy?: (RetryStrategy | undefined) | undefined;
	readonly SchedulingPriority?: (number | undefined) | undefined;
	readonly Tags?: (any | undefined) | undefined;
	readonly Timeout?: (Timeout | undefined) | undefined;
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
	readonly JobQueueName?: (string | undefined) | undefined;
	readonly SchedulingPolicyArn?: (string | undefined) | undefined;
	readonly State?: (string | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
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
	readonly FairsharePolicy?: (FairsharePolicy | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
	readonly LogicalId: string;
}
export interface ComputeResources {
	readonly AllocationStrategy?: (string | undefined) | undefined;
	readonly BidPercentage?: (number | undefined) | undefined;
	readonly DesiredvCpus?: (number | undefined) | undefined;
	readonly Ec2Configuration?: (Ec2ConfigurationObject[] | undefined) | undefined;
	readonly Ec2KeyPair?: (string | undefined) | undefined;
	readonly ImageId?: (string | undefined) | undefined;
	readonly InstanceRole?: (string | undefined) | undefined;
	readonly InstanceTypes?: (string[] | undefined) | undefined;
	readonly LaunchTemplate?: (LaunchTemplateSpecification | undefined) | undefined;
	readonly MaxvCpus: number;
	readonly MinvCpus?: (number | undefined) | undefined;
	readonly PlacementGroup?: (string | undefined) | undefined;
	readonly SecurityGroupIds?: (string[] | undefined) | undefined;
	readonly SpotIamFleetRole?: (string | undefined) | undefined;
	readonly Subnets: string[];
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
	readonly Type: string;
	readonly UpdateToLatestImageVersion?: (boolean | undefined) | undefined;
}
export interface Ec2ConfigurationObject {
	readonly ImageIdOverride?: (string | undefined) | undefined;
	readonly ImageKubernetesVersion?: (string | undefined) | undefined;
	readonly ImageType: string;
}
export interface EksConfiguration {
	readonly EksClusterArn: string;
	readonly KubernetesNamespace: string;
}
export interface LaunchTemplateSpecification {
	readonly LaunchTemplateId?: (string | undefined) | undefined;
	readonly LaunchTemplateName?: (string | undefined) | undefined;
	readonly Version?: (string | undefined) | undefined;
}
export interface UpdatePolicy {
	readonly JobExecutionTimeoutMinutes?: (number | undefined) | undefined;
	readonly TerminateJobsOnUpdate?: (boolean | undefined) | undefined;
}
export interface AuthorizationConfig {
	readonly AccessPointId?: (string | undefined) | undefined;
	readonly Iam?: (string | undefined) | undefined;
}
export interface ContainerProperties {
	readonly Command?: (string[] | undefined) | undefined;
	readonly Environment?: (Environment[] | undefined) | undefined;
	readonly ExecutionRoleArn?: (string | undefined) | undefined;
	readonly FargatePlatformConfiguration?: (FargatePlatformConfiguration | undefined) | undefined;
	readonly Image: string;
	readonly InstanceType?: (string | undefined) | undefined;
	readonly JobRoleArn?: (string | undefined) | undefined;
	readonly LinuxParameters?: (LinuxParameters | undefined) | undefined;
	readonly LogConfiguration?: (LogConfiguration | undefined) | undefined;
	readonly Memory?: (number | undefined) | undefined;
	readonly MountPoints?: (MountPoints[] | undefined) | undefined;
	readonly NetworkConfiguration?: (NetworkConfiguration | undefined) | undefined;
	readonly Privileged?: (boolean | undefined) | undefined;
	readonly ReadonlyRootFilesystem?: (boolean | undefined) | undefined;
	readonly ResourceRequirements?: (ResourceRequirement[] | undefined) | undefined;
	readonly Secrets?: (Secret[] | undefined) | undefined;
	readonly Ulimits?: (Ulimit[] | undefined) | undefined;
	readonly User?: (string | undefined) | undefined;
	readonly Vcpus?: (number | undefined) | undefined;
	readonly Volumes?: (Volumes[] | undefined) | undefined;
}
export interface Device {
	readonly ContainerPath?: (string | undefined) | undefined;
	readonly HostPath?: (string | undefined) | undefined;
	readonly Permissions?: (string[] | undefined) | undefined;
}
export interface EfsVolumeConfiguration {
	readonly AuthorizationConfig?: (AuthorizationConfig | undefined) | undefined;
	readonly FileSystemId: string;
	readonly RootDirectory?: (string | undefined) | undefined;
	readonly TransitEncryption?: (string | undefined) | undefined;
	readonly TransitEncryptionPort?: (number | undefined) | undefined;
}
export interface EksContainer {
	readonly Args?: (string[] | undefined) | undefined;
	readonly Command?: (string[] | undefined) | undefined;
	readonly Env?: (EksContainerEnvironmentVariable[] | undefined) | undefined;
	readonly Image: string;
	readonly ImagePullPolicy?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Resources?: (Resources | undefined) | undefined;
	readonly SecurityContext?: (SecurityContext | undefined) | undefined;
	readonly VolumeMounts?: (EksContainerVolumeMount[] | undefined) | undefined;
}
export interface EksContainerEnvironmentVariable {
	readonly Name: string;
	readonly Value?: (string | undefined) | undefined;
}
export interface EksContainerVolumeMount {
	readonly MountPath?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly ReadOnly?: (boolean | undefined) | undefined;
}
export interface EksProperties {
	readonly PodProperties?: (PodProperties | undefined) | undefined;
}
export interface EksVolume {
	readonly EmptyDir?: (EmptyDir | undefined) | undefined;
	readonly HostPath?: (HostPath | undefined) | undefined;
	readonly Name: string;
	readonly Secret?: (Secret | undefined) | undefined;
}
export interface EmptyDir {
	readonly Medium?: (string | undefined) | undefined;
	readonly SizeLimit?: (string | undefined) | undefined;
}
export interface Environment {
	readonly Name?: (string | undefined) | undefined;
	readonly Value?: (string | undefined) | undefined;
}
export interface EvaluateOnExit {
	readonly Action: string;
	readonly OnExitCode?: (string | undefined) | undefined;
	readonly OnReason?: (string | undefined) | undefined;
	readonly OnStatusReason?: (string | undefined) | undefined;
}
export interface FargatePlatformConfiguration {
	readonly PlatformVersion?: (string | undefined) | undefined;
}
export interface HostPath {
	readonly Path?: (string | undefined) | undefined;
}
export interface LinuxParameters {
	readonly Devices?: (Device[] | undefined) | undefined;
	readonly InitProcessEnabled?: (boolean | undefined) | undefined;
	readonly MaxSwap?: (number | undefined) | undefined;
	readonly SharedMemorySize?: (number | undefined) | undefined;
	readonly Swappiness?: (number | undefined) | undefined;
	readonly Tmpfs?: (Tmpfs[] | undefined) | undefined;
}
export interface LogConfiguration {
	readonly LogDriver: string;
	readonly Options?: (any | undefined) | undefined;
	readonly SecretOptions?: (Secret[] | undefined) | undefined;
}
export interface MountPoints {
	readonly ContainerPath?: (string | undefined) | undefined;
	readonly ReadOnly?: (boolean | undefined) | undefined;
	readonly SourceVolume?: (string | undefined) | undefined;
}
export interface NetworkConfiguration {
	readonly AssignPublicIp?: (string | undefined) | undefined;
}
export interface NodeProperties {
	readonly MainNode: number;
	readonly NodeRangeProperties: NodeRange[];
	readonly NumNodes: number;
}
export interface NodeRange {
	readonly Container?: (ContainerProperties | undefined) | undefined;
	readonly TargetNodes: string;
}
export interface PodProperties {
	readonly Containers?: (EksContainer[] | undefined) | undefined;
	readonly DnsPolicy?: (string | undefined) | undefined;
	readonly HostNetwork?: (boolean | undefined) | undefined;
	readonly ServiceAccountName?: (string | undefined) | undefined;
	readonly Volumes?: (EksVolume[] | undefined) | undefined;
}
export interface ResourceRequirement {
	readonly Type?: (string | undefined) | undefined;
	readonly Value?: (string | undefined) | undefined;
}
export interface Resources {
	readonly Limits?: (any | undefined) | undefined;
	readonly Requests?: (any | undefined) | undefined;
}
export interface RetryStrategy {
	readonly Attempts?: (number | undefined) | undefined;
	readonly EvaluateOnExit?: (EvaluateOnExit[] | undefined) | undefined;
}
export interface Secret {
	readonly Name: string;
	readonly ValueFrom: string;
}
export interface SecurityContext {
	readonly Privileged?: (boolean | undefined) | undefined;
	readonly ReadOnlyRootFilesystem?: (boolean | undefined) | undefined;
	readonly RunAsGroup?: (number | undefined) | undefined;
	readonly RunAsNonRoot?: (boolean | undefined) | undefined;
	readonly RunAsUser?: (number | undefined) | undefined;
}
export interface Timeout {
	readonly AttemptDurationSeconds?: (number | undefined) | undefined;
}
export interface Tmpfs {
	readonly ContainerPath: string;
	readonly MountOptions?: (string[] | undefined) | undefined;
	readonly Size: number;
}
export interface Ulimit {
	readonly HardLimit: number;
	readonly Name: string;
	readonly SoftLimit: number;
}
export interface Volumes {
	readonly EfsVolumeConfiguration?: (EfsVolumeConfiguration | undefined) | undefined;
	readonly Host?: (VolumesHost | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
}
export interface VolumesHost {
	readonly SourcePath?: (string | undefined) | undefined;
}
export interface ComputeEnvironmentOrder {
	readonly ComputeEnvironment: string;
	readonly Order: number;
}
export interface FairsharePolicy {
	readonly ComputeReservation?: (number | undefined) | undefined;
	readonly ShareDecaySeconds?: (number | undefined) | undefined;
	readonly ShareDistribution?: (ShareAttributes[] | undefined) | undefined;
}
export interface ShareAttributes {
	readonly ShareIdentifier?: (string | undefined) | undefined;
	readonly WeightFactor?: (number | undefined) | undefined;
}
export default {
	ComputeEnvironment: ComputeEnvironment,
	JobDefinition: JobDefinition,
	JobQueue: JobQueue,
	SchedulingPolicy: SchedulingPolicy,
};
