import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class CapacityProvider
	extends CfnResource<CapacityProviderComponentInputs>
	implements CapacityProviderComponentOutputs
{
	constructor(entity: ADKEntity, options: CapacityProviderComponentInputs) {
		super(entity, options.LogicalId, "AWS::ECS::CapacityProvider", options);
	}
}
export interface CapacityProviderComponentOutputs {}
export interface CapacityProviderComponentInputs {
	readonly AutoScalingGroupProvider: AutoScalingGroupProvider;
	readonly Name?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Cluster extends CfnResource<ClusterComponentInputs> implements ClusterComponentOutputs {
	constructor(entity: ADKEntity, options: ClusterComponentInputs) {
		super(entity, options.LogicalId, "AWS::ECS::Cluster", options);
	}
	public readonly Arn: string;
}
export interface ClusterComponentOutputs {
	readonly Arn: string;
}
export interface ClusterComponentInputs {
	readonly CapacityProviders?: (string[] | undefined) | undefined;
	readonly ClusterName?: (string | undefined) | undefined;
	readonly ClusterSettings?: (ClusterSettings[] | undefined) | undefined;
	readonly Configuration?: (ClusterConfiguration | undefined) | undefined;
	readonly DefaultCapacityProviderStrategy?: (CapacityProviderStrategyItem[] | undefined) | undefined;
	readonly ServiceConnectDefaults?: (ServiceConnectDefaults | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class ClusterCapacityProviderAssociations
	extends CfnResource<ClusterCapacityProviderAssociationsComponentInputs>
	implements ClusterCapacityProviderAssociationsComponentOutputs
{
	constructor(entity: ADKEntity, options: ClusterCapacityProviderAssociationsComponentInputs) {
		super(entity, options.LogicalId, "AWS::ECS::ClusterCapacityProviderAssociations", options);
	}
}
export interface ClusterCapacityProviderAssociationsComponentOutputs {}
export interface ClusterCapacityProviderAssociationsComponentInputs {
	readonly CapacityProviders: string[];
	readonly Cluster: string;
	readonly DefaultCapacityProviderStrategy: CapacityProviderStrategy[];
	readonly LogicalId: string;
}
export class PrimaryTaskSet extends CfnResource<PrimaryTaskSetComponentInputs> implements PrimaryTaskSetComponentOutputs {
	constructor(entity: ADKEntity, options: PrimaryTaskSetComponentInputs) {
		super(entity, options.LogicalId, "AWS::ECS::PrimaryTaskSet", options);
	}
}
export interface PrimaryTaskSetComponentOutputs {}
export interface PrimaryTaskSetComponentInputs {
	readonly Cluster: string;
	readonly Service: string;
	readonly TaskSetId: string;
	readonly LogicalId: string;
}
export class Service extends CfnResource<ServiceComponentInputs> implements ServiceComponentOutputs {
	constructor(entity: ADKEntity, options: ServiceComponentInputs) {
		super(entity, options.LogicalId, "AWS::ECS::Service", options);
	}
	public readonly Name: string;
	public readonly ServiceArn: string;
}
export interface ServiceComponentOutputs {
	readonly Name: string;
	readonly ServiceArn: string;
}
export interface ServiceComponentInputs {
	readonly CapacityProviderStrategy?: (CapacityProviderStrategyItem[] | undefined) | undefined;
	readonly Cluster?: (string | undefined) | undefined;
	readonly DeploymentConfiguration?: (DeploymentConfiguration | undefined) | undefined;
	readonly DeploymentController?: (DeploymentController | undefined) | undefined;
	readonly DesiredCount?: (number | undefined) | undefined;
	readonly EnableECSManagedTags?: (boolean | undefined) | undefined;
	readonly EnableExecuteCommand?: (boolean | undefined) | undefined;
	readonly HealthCheckGracePeriodSeconds?: (number | undefined) | undefined;
	readonly LaunchType?: (string | undefined) | undefined;
	readonly LoadBalancers?: (LoadBalancer[] | undefined) | undefined;
	readonly NetworkConfiguration?: (NetworkConfiguration | undefined) | undefined;
	readonly PlacementConstraints?: (PlacementConstraint[] | undefined) | undefined;
	readonly PlacementStrategies?: (PlacementStrategy[] | undefined) | undefined;
	readonly PlatformVersion?: (string | undefined) | undefined;
	readonly PropagateTags?: (string | undefined) | undefined;
	readonly Role?: (string | undefined) | undefined;
	readonly SchedulingStrategy?: (string | undefined) | undefined;
	readonly ServiceConnectConfiguration?: (ServiceConnectConfiguration | undefined) | undefined;
	readonly ServiceName?: (string | undefined) | undefined;
	readonly ServiceRegistries?: (ServiceRegistry[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly TaskDefinition?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class TaskDefinition extends CfnResource<TaskDefinitionComponentInputs> implements TaskDefinitionComponentOutputs {
	constructor(entity: ADKEntity, options: TaskDefinitionComponentInputs) {
		super(entity, options.LogicalId, "AWS::ECS::TaskDefinition", options);
	}
	public readonly TaskDefinitionArn: string;
}
export interface TaskDefinitionComponentOutputs {
	readonly TaskDefinitionArn: string;
}
export interface TaskDefinitionComponentInputs {
	readonly ContainerDefinitions?: (ContainerDefinition[] | undefined) | undefined;
	readonly Cpu?: (string | undefined) | undefined;
	readonly EphemeralStorage?: (EphemeralStorage | undefined) | undefined;
	readonly ExecutionRoleArn?: (string | undefined) | undefined;
	readonly Family?: (string | undefined) | undefined;
	readonly InferenceAccelerators?: (InferenceAccelerator[] | undefined) | undefined;
	readonly IpcMode?: (string | undefined) | undefined;
	readonly Memory?: (string | undefined) | undefined;
	readonly NetworkMode?: (string | undefined) | undefined;
	readonly PidMode?: (string | undefined) | undefined;
	readonly PlacementConstraints?: (TaskDefinitionPlacementConstraint[] | undefined) | undefined;
	readonly ProxyConfiguration?: (ProxyConfiguration | undefined) | undefined;
	readonly RequiresCompatibilities?: (string[] | undefined) | undefined;
	readonly RuntimePlatform?: (RuntimePlatform | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly TaskRoleArn?: (string | undefined) | undefined;
	readonly Volumes?: (Volume[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class TaskSet extends CfnResource<TaskSetComponentInputs> implements TaskSetComponentOutputs {
	constructor(entity: ADKEntity, options: TaskSetComponentInputs) {
		super(entity, options.LogicalId, "AWS::ECS::TaskSet", options);
	}
	public readonly Id: string;
}
export interface TaskSetComponentOutputs {
	readonly Id: string;
}
export interface TaskSetComponentInputs {
	readonly Cluster: string;
	readonly Service: string;
	readonly TaskDefinition: string;
	readonly ExternalId?: (string | undefined) | undefined;
	readonly LaunchType?: (string | undefined) | undefined;
	readonly LoadBalancers?: (LoadBalancer[] | undefined) | undefined;
	readonly NetworkConfiguration?: (NetworkConfiguration | undefined) | undefined;
	readonly PlatformVersion?: (string | undefined) | undefined;
	readonly Scale?: (Scale | undefined) | undefined;
	readonly ServiceRegistries?: (ServiceRegistry[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface AutoScalingGroupProvider {
	readonly AutoScalingGroupArn: string;
	readonly ManagedScaling?: (ManagedScaling | undefined) | undefined;
	readonly ManagedTerminationProtection?: (string | undefined) | undefined;
}
export interface ManagedScaling {
	readonly InstanceWarmupPeriod?: (number | undefined) | undefined;
	readonly MaximumScalingStepSize?: (number | undefined) | undefined;
	readonly MinimumScalingStepSize?: (number | undefined) | undefined;
	readonly Status?: (string | undefined) | undefined;
	readonly TargetCapacity?: (number | undefined) | undefined;
}
export interface CapacityProviderStrategyItem {
	readonly Base?: (number | undefined) | undefined;
	readonly CapacityProvider?: (string | undefined) | undefined;
	readonly Weight?: (number | undefined) | undefined;
}
export interface ClusterConfiguration {
	readonly ExecuteCommandConfiguration?: (ExecuteCommandConfiguration | undefined) | undefined;
}
export interface ClusterSettings {
	readonly Name?: (string | undefined) | undefined;
	readonly Value?: (string | undefined) | undefined;
}
export interface ExecuteCommandConfiguration {
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly LogConfiguration?: (ExecuteCommandLogConfiguration | undefined) | undefined;
	readonly Logging?: (string | undefined) | undefined;
}
export interface ExecuteCommandLogConfiguration {
	readonly CloudWatchEncryptionEnabled?: (boolean | undefined) | undefined;
	readonly CloudWatchLogGroupName?: (string | undefined) | undefined;
	readonly S3BucketName?: (string | undefined) | undefined;
	readonly S3EncryptionEnabled?: (boolean | undefined) | undefined;
	readonly S3KeyPrefix?: (string | undefined) | undefined;
}
export interface ServiceConnectDefaults {
	readonly Namespace?: (string | undefined) | undefined;
}
export interface CapacityProviderStrategy {
	readonly Base?: (number | undefined) | undefined;
	readonly CapacityProvider: string;
	readonly Weight?: (number | undefined) | undefined;
}
export interface AwsVpcConfiguration {
	readonly AssignPublicIp?: (string | undefined) | undefined;
	readonly SecurityGroups?: (string[] | undefined) | undefined;
	readonly Subnets: string[];
}
export interface DeploymentCircuitBreaker {
	readonly Enable: boolean;
	readonly Rollback: boolean;
}
export interface DeploymentConfiguration {
	readonly DeploymentCircuitBreaker?: (DeploymentCircuitBreaker | undefined) | undefined;
	readonly MaximumPercent?: (number | undefined) | undefined;
	readonly MinimumHealthyPercent?: (number | undefined) | undefined;
}
export interface DeploymentController {
	readonly Type?: (string | undefined) | undefined;
}
export interface LoadBalancer {
	readonly ContainerName?: (string | undefined) | undefined;
	readonly ContainerPort: number;
	readonly LoadBalancerName?: (string | undefined) | undefined;
	readonly TargetGroupArn?: (string | undefined) | undefined;
}
export interface LogConfiguration {
	readonly LogDriver?: (string | undefined) | undefined;
	readonly Options?: ({ [key: string]: string } | undefined) | undefined;
	readonly SecretOptions?: (Secret[] | undefined) | undefined;
}
export interface NetworkConfiguration {
	readonly AwsvpcConfiguration?: (AwsVpcConfiguration | undefined) | undefined;
}
export interface PlacementConstraint {
	readonly Expression?: (string | undefined) | undefined;
	readonly Type: string;
}
export interface PlacementStrategy {
	readonly Field?: (string | undefined) | undefined;
	readonly Type: string;
}
export interface Secret {
	readonly Name: string;
	readonly ValueFrom: string;
}
export interface ServiceConnectClientAlias {
	readonly DnsName?: (string | undefined) | undefined;
	readonly Port: number;
}
export interface ServiceConnectConfiguration {
	readonly Enabled: boolean;
	readonly LogConfiguration?: (LogConfiguration | undefined) | undefined;
	readonly Namespace?: (string | undefined) | undefined;
	readonly Services?: (ServiceConnectService[] | undefined) | undefined;
}
export interface ServiceConnectService {
	readonly ClientAliases?: (ServiceConnectClientAlias[] | undefined) | undefined;
	readonly DiscoveryName?: (string | undefined) | undefined;
	readonly IngressPortOverride?: (number | undefined) | undefined;
	readonly PortName: string;
}
export interface ServiceRegistry {
	readonly ContainerName?: (string | undefined) | undefined;
	readonly ContainerPort?: (number | undefined) | undefined;
	readonly Port?: (number | undefined) | undefined;
	readonly RegistryArn?: (string | undefined) | undefined;
}
export interface AuthorizationConfig {
	readonly AccessPointId?: (string | undefined) | undefined;
	readonly IAM?: (string | undefined) | undefined;
}
export interface ContainerDefinition {
	readonly Command?: (string[] | undefined) | undefined;
	readonly Cpu?: (number | undefined) | undefined;
	readonly DependsOn?: (ContainerDependency[] | undefined) | undefined;
	readonly DisableNetworking?: (boolean | undefined) | undefined;
	readonly DnsSearchDomains?: (string[] | undefined) | undefined;
	readonly DnsServers?: (string[] | undefined) | undefined;
	readonly DockerLabels?: ({ [key: string]: string } | undefined) | undefined;
	readonly DockerSecurityOptions?: (string[] | undefined) | undefined;
	readonly EntryPoint?: (string[] | undefined) | undefined;
	readonly Environment?: (KeyValuePair[] | undefined) | undefined;
	readonly EnvironmentFiles?: (EnvironmentFile[] | undefined) | undefined;
	readonly Essential?: (boolean | undefined) | undefined;
	readonly ExtraHosts?: (HostEntry[] | undefined) | undefined;
	readonly FirelensConfiguration?: (FirelensConfiguration | undefined) | undefined;
	readonly HealthCheck?: (HealthCheck | undefined) | undefined;
	readonly Hostname?: (string | undefined) | undefined;
	readonly Image: string;
	readonly Interactive?: (boolean | undefined) | undefined;
	readonly Links?: (string[] | undefined) | undefined;
	readonly LinuxParameters?: (LinuxParameters | undefined) | undefined;
	readonly LogConfiguration?: (LogConfiguration | undefined) | undefined;
	readonly Memory?: (number | undefined) | undefined;
	readonly MemoryReservation?: (number | undefined) | undefined;
	readonly MountPoints?: (MountPoint[] | undefined) | undefined;
	readonly Name: string;
	readonly PortMappings?: (PortMapping[] | undefined) | undefined;
	readonly Privileged?: (boolean | undefined) | undefined;
	readonly PseudoTerminal?: (boolean | undefined) | undefined;
	readonly ReadonlyRootFilesystem?: (boolean | undefined) | undefined;
	readonly RepositoryCredentials?: (RepositoryCredentials | undefined) | undefined;
	readonly ResourceRequirements?: (ResourceRequirement[] | undefined) | undefined;
	readonly Secrets?: (Secret[] | undefined) | undefined;
	readonly StartTimeout?: (number | undefined) | undefined;
	readonly StopTimeout?: (number | undefined) | undefined;
	readonly SystemControls?: (SystemControl[] | undefined) | undefined;
	readonly Ulimits?: (Ulimit[] | undefined) | undefined;
	readonly User?: (string | undefined) | undefined;
	readonly VolumesFrom?: (VolumeFrom[] | undefined) | undefined;
	readonly WorkingDirectory?: (string | undefined) | undefined;
}
export interface ContainerDependency {
	readonly Condition?: (string | undefined) | undefined;
	readonly ContainerName?: (string | undefined) | undefined;
}
export interface Device {
	readonly ContainerPath?: (string | undefined) | undefined;
	readonly HostPath?: (string | undefined) | undefined;
	readonly Permissions?: (string[] | undefined) | undefined;
}
export interface DockerVolumeConfiguration {
	readonly Autoprovision?: (boolean | undefined) | undefined;
	readonly Driver?: (string | undefined) | undefined;
	readonly DriverOpts?: ({ [key: string]: string } | undefined) | undefined;
	readonly Labels?: ({ [key: string]: string } | undefined) | undefined;
	readonly Scope?: (string | undefined) | undefined;
}
export interface EFSVolumeConfiguration {
	readonly AuthorizationConfig?: (AuthorizationConfig | undefined) | undefined;
	readonly FilesystemId: string;
	readonly RootDirectory?: (string | undefined) | undefined;
	readonly TransitEncryption?: (string | undefined) | undefined;
	readonly TransitEncryptionPort?: (number | undefined) | undefined;
}
export interface EnvironmentFile {
	readonly Type?: (string | undefined) | undefined;
	readonly Value?: (string | undefined) | undefined;
}
export interface EphemeralStorage {
	readonly SizeInGiB?: (number | undefined) | undefined;
}
export interface FirelensConfiguration {
	readonly Options?: ({ [key: string]: string } | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
}
export interface HealthCheck {
	readonly Command?: (string[] | undefined) | undefined;
	readonly Interval?: (number | undefined) | undefined;
	readonly Retries?: (number | undefined) | undefined;
	readonly StartPeriod?: (number | undefined) | undefined;
	readonly Timeout?: (number | undefined) | undefined;
}
export interface HostEntry {
	readonly Hostname?: (string | undefined) | undefined;
	readonly IpAddress?: (string | undefined) | undefined;
}
export interface HostVolumeProperties {
	readonly SourcePath?: (string | undefined) | undefined;
}
export interface InferenceAccelerator {
	readonly DeviceName?: (string | undefined) | undefined;
	readonly DeviceType?: (string | undefined) | undefined;
}
export interface KernelCapabilities {
	readonly Add?: (string[] | undefined) | undefined;
	readonly Drop?: (string[] | undefined) | undefined;
}
export interface KeyValuePair {
	readonly Name?: (string | undefined) | undefined;
	readonly Value?: (string | undefined) | undefined;
}
export interface LinuxParameters {
	readonly Capabilities?: (KernelCapabilities | undefined) | undefined;
	readonly Devices?: (Device[] | undefined) | undefined;
	readonly InitProcessEnabled?: (boolean | undefined) | undefined;
	readonly MaxSwap?: (number | undefined) | undefined;
	readonly SharedMemorySize?: (number | undefined) | undefined;
	readonly Swappiness?: (number | undefined) | undefined;
	readonly Tmpfs?: (Tmpfs[] | undefined) | undefined;
}
export interface MountPoint {
	readonly ContainerPath?: (string | undefined) | undefined;
	readonly ReadOnly?: (boolean | undefined) | undefined;
	readonly SourceVolume?: (string | undefined) | undefined;
}
export interface PortMapping {
	readonly AppProtocol?: (string | undefined) | undefined;
	readonly ContainerPort?: (number | undefined) | undefined;
	readonly HostPort?: (number | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Protocol?: (string | undefined) | undefined;
}
export interface ProxyConfiguration {
	readonly ContainerName: string;
	readonly ProxyConfigurationProperties?: (KeyValuePair[] | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
}
export interface RepositoryCredentials {
	readonly CredentialsParameter?: (string | undefined) | undefined;
}
export interface ResourceRequirement {
	readonly Type: string;
	readonly Value: string;
}
export interface RuntimePlatform {
	readonly CpuArchitecture?: (string | undefined) | undefined;
	readonly OperatingSystemFamily?: (string | undefined) | undefined;
}
export interface SystemControl {
	readonly Namespace?: (string | undefined) | undefined;
	readonly Value?: (string | undefined) | undefined;
}
export interface TaskDefinitionPlacementConstraint {
	readonly Expression?: (string | undefined) | undefined;
	readonly Type: string;
}
export interface Tmpfs {
	readonly ContainerPath?: (string | undefined) | undefined;
	readonly MountOptions?: (string[] | undefined) | undefined;
	readonly Size: number;
}
export interface Ulimit {
	readonly HardLimit: number;
	readonly Name: string;
	readonly SoftLimit: number;
}
export interface Volume {
	readonly DockerVolumeConfiguration?: (DockerVolumeConfiguration | undefined) | undefined;
	readonly EFSVolumeConfiguration?: (EFSVolumeConfiguration | undefined) | undefined;
	readonly Host?: (HostVolumeProperties | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
}
export interface VolumeFrom {
	readonly ReadOnly?: (boolean | undefined) | undefined;
	readonly SourceContainer?: (string | undefined) | undefined;
}
export interface Scale {
	readonly Unit?: (string | undefined) | undefined;
	readonly Value?: (number | undefined) | undefined;
}
export default {
	CapacityProvider: CapacityProvider,
	Cluster: Cluster,
	ClusterCapacityProviderAssociations: ClusterCapacityProviderAssociations,
	PrimaryTaskSet: PrimaryTaskSet,
	Service: Service,
	TaskDefinition: TaskDefinition,
	TaskSet: TaskSet,
};
