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
	readonly Name?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly CapacityProviders?: string[] | undefined;
	readonly ClusterName?: string | undefined;
	readonly ClusterSettings?: ClusterSettings[] | undefined;
	readonly Configuration?: ClusterConfiguration | undefined;
	readonly DefaultCapacityProviderStrategy?: CapacityProviderStrategyItem[] | undefined;
	readonly ServiceConnectDefaults?: ServiceConnectDefaults | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly CapacityProviderStrategy?: CapacityProviderStrategyItem[] | undefined;
	readonly Cluster?: string | undefined;
	readonly DeploymentConfiguration?: DeploymentConfiguration | undefined;
	readonly DeploymentController?: DeploymentController | undefined;
	readonly DesiredCount?: number | undefined;
	readonly EnableECSManagedTags?: boolean | undefined;
	readonly EnableExecuteCommand?: boolean | undefined;
	readonly HealthCheckGracePeriodSeconds?: number | undefined;
	readonly LaunchType?: string | undefined;
	readonly LoadBalancers?: LoadBalancer[] | undefined;
	readonly NetworkConfiguration?: NetworkConfiguration | undefined;
	readonly PlacementConstraints?: PlacementConstraint[] | undefined;
	readonly PlacementStrategies?: PlacementStrategy[] | undefined;
	readonly PlatformVersion?: string | undefined;
	readonly PropagateTags?: string | undefined;
	readonly Role?: string | undefined;
	readonly SchedulingStrategy?: string | undefined;
	readonly ServiceConnectConfiguration?: ServiceConnectConfiguration | undefined;
	readonly ServiceName?: string | undefined;
	readonly ServiceRegistries?: ServiceRegistry[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly TaskDefinition?: string | undefined;
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
	readonly ContainerDefinitions?: ContainerDefinition[] | undefined;
	readonly Cpu?: string | undefined;
	readonly EphemeralStorage?: EphemeralStorage | undefined;
	readonly ExecutionRoleArn?: string | undefined;
	readonly Family?: string | undefined;
	readonly InferenceAccelerators?: InferenceAccelerator[] | undefined;
	readonly IpcMode?: string | undefined;
	readonly Memory?: string | undefined;
	readonly NetworkMode?: string | undefined;
	readonly PidMode?: string | undefined;
	readonly PlacementConstraints?: TaskDefinitionPlacementConstraint[] | undefined;
	readonly ProxyConfiguration?: ProxyConfiguration | undefined;
	readonly RequiresCompatibilities?: string[] | undefined;
	readonly RuntimePlatform?: RuntimePlatform | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly TaskRoleArn?: string | undefined;
	readonly Volumes?: Volume[] | undefined;
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
	readonly ExternalId?: string | undefined;
	readonly LaunchType?: string | undefined;
	readonly LoadBalancers?: LoadBalancer[] | undefined;
	readonly NetworkConfiguration?: NetworkConfiguration | undefined;
	readonly PlatformVersion?: string | undefined;
	readonly Scale?: Scale | undefined;
	readonly ServiceRegistries?: ServiceRegistry[] | undefined;
	readonly LogicalId: string;
}
export interface AutoScalingGroupProvider {
	readonly AutoScalingGroupArn: string;
	readonly ManagedScaling?: ManagedScaling | undefined;
	readonly ManagedTerminationProtection?: string | undefined;
}
export interface ManagedScaling {
	readonly InstanceWarmupPeriod?: number | undefined;
	readonly MaximumScalingStepSize?: number | undefined;
	readonly MinimumScalingStepSize?: number | undefined;
	readonly Status?: string | undefined;
	readonly TargetCapacity?: number | undefined;
}
export interface CapacityProviderStrategyItem {
	readonly Base?: number | undefined;
	readonly CapacityProvider?: string | undefined;
	readonly Weight?: number | undefined;
}
export interface ClusterConfiguration {
	readonly ExecuteCommandConfiguration?: ExecuteCommandConfiguration | undefined;
}
export interface ClusterSettings {
	readonly Name?: string | undefined;
	readonly Value?: string | undefined;
}
export interface ExecuteCommandConfiguration {
	readonly KmsKeyId?: string | undefined;
	readonly LogConfiguration?: ExecuteCommandLogConfiguration | undefined;
	readonly Logging?: string | undefined;
}
export interface ExecuteCommandLogConfiguration {
	readonly CloudWatchEncryptionEnabled?: boolean | undefined;
	readonly CloudWatchLogGroupName?: string | undefined;
	readonly S3BucketName?: string | undefined;
	readonly S3EncryptionEnabled?: boolean | undefined;
	readonly S3KeyPrefix?: string | undefined;
}
export interface ServiceConnectDefaults {
	readonly Namespace?: string | undefined;
}
export interface CapacityProviderStrategy {
	readonly Base?: number | undefined;
	readonly CapacityProvider: string;
	readonly Weight?: number | undefined;
}
export interface AwsVpcConfiguration {
	readonly AssignPublicIp?: string | undefined;
	readonly SecurityGroups?: string[] | undefined;
	readonly Subnets: string[];
}
export interface DeploymentCircuitBreaker {
	readonly Enable: boolean;
	readonly Rollback: boolean;
}
export interface DeploymentConfiguration {
	readonly DeploymentCircuitBreaker?: DeploymentCircuitBreaker | undefined;
	readonly MaximumPercent?: number | undefined;
	readonly MinimumHealthyPercent?: number | undefined;
}
export interface DeploymentController {
	readonly Type?: string | undefined;
}
export interface LoadBalancer {
	readonly ContainerName?: string | undefined;
	readonly ContainerPort: number;
	readonly LoadBalancerName?: string | undefined;
	readonly TargetGroupArn?: string | undefined;
}
export interface LogConfiguration {
	readonly LogDriver?: string | undefined;
	readonly Options?: { [key: string]: string } | undefined;
	readonly SecretOptions?: Secret[] | undefined;
}
export interface NetworkConfiguration {
	readonly AwsvpcConfiguration?: AwsVpcConfiguration | undefined;
}
export interface PlacementConstraint {
	readonly Expression?: string | undefined;
	readonly Type: string;
}
export interface PlacementStrategy {
	readonly Field?: string | undefined;
	readonly Type: string;
}
export interface Secret {
	readonly Name: string;
	readonly ValueFrom: string;
}
export interface ServiceConnectClientAlias {
	readonly DnsName?: string | undefined;
	readonly Port: number;
}
export interface ServiceConnectConfiguration {
	readonly Enabled: boolean;
	readonly LogConfiguration?: LogConfiguration | undefined;
	readonly Namespace?: string | undefined;
	readonly Services?: ServiceConnectService[] | undefined;
}
export interface ServiceConnectService {
	readonly ClientAliases?: ServiceConnectClientAlias[] | undefined;
	readonly DiscoveryName?: string | undefined;
	readonly IngressPortOverride?: number | undefined;
	readonly PortName: string;
}
export interface ServiceRegistry {
	readonly ContainerName?: string | undefined;
	readonly ContainerPort?: number | undefined;
	readonly Port?: number | undefined;
	readonly RegistryArn?: string | undefined;
}
export interface AuthorizationConfig {
	readonly AccessPointId?: string | undefined;
	readonly IAM?: string | undefined;
}
export interface ContainerDefinition {
	readonly Command?: string[] | undefined;
	readonly Cpu?: number | undefined;
	readonly DependsOn?: ContainerDependency[] | undefined;
	readonly DisableNetworking?: boolean | undefined;
	readonly DnsSearchDomains?: string[] | undefined;
	readonly DnsServers?: string[] | undefined;
	readonly DockerLabels?: { [key: string]: string } | undefined;
	readonly DockerSecurityOptions?: string[] | undefined;
	readonly EntryPoint?: string[] | undefined;
	readonly Environment?: KeyValuePair[] | undefined;
	readonly EnvironmentFiles?: EnvironmentFile[] | undefined;
	readonly Essential?: boolean | undefined;
	readonly ExtraHosts?: HostEntry[] | undefined;
	readonly FirelensConfiguration?: FirelensConfiguration | undefined;
	readonly HealthCheck?: HealthCheck | undefined;
	readonly Hostname?: string | undefined;
	readonly Image: string;
	readonly Interactive?: boolean | undefined;
	readonly Links?: string[] | undefined;
	readonly LinuxParameters?: LinuxParameters | undefined;
	readonly LogConfiguration?: LogConfiguration | undefined;
	readonly Memory?: number | undefined;
	readonly MemoryReservation?: number | undefined;
	readonly MountPoints?: MountPoint[] | undefined;
	readonly Name: string;
	readonly PortMappings?: PortMapping[] | undefined;
	readonly Privileged?: boolean | undefined;
	readonly PseudoTerminal?: boolean | undefined;
	readonly ReadonlyRootFilesystem?: boolean | undefined;
	readonly RepositoryCredentials?: RepositoryCredentials | undefined;
	readonly ResourceRequirements?: ResourceRequirement[] | undefined;
	readonly Secrets?: Secret[] | undefined;
	readonly StartTimeout?: number | undefined;
	readonly StopTimeout?: number | undefined;
	readonly SystemControls?: SystemControl[] | undefined;
	readonly Ulimits?: Ulimit[] | undefined;
	readonly User?: string | undefined;
	readonly VolumesFrom?: VolumeFrom[] | undefined;
	readonly WorkingDirectory?: string | undefined;
}
export interface ContainerDependency {
	readonly Condition?: string | undefined;
	readonly ContainerName?: string | undefined;
}
export interface Device {
	readonly ContainerPath?: string | undefined;
	readonly HostPath?: string | undefined;
	readonly Permissions?: string[] | undefined;
}
export interface DockerVolumeConfiguration {
	readonly Autoprovision?: boolean | undefined;
	readonly Driver?: string | undefined;
	readonly DriverOpts?: { [key: string]: string } | undefined;
	readonly Labels?: { [key: string]: string } | undefined;
	readonly Scope?: string | undefined;
}
export interface EFSVolumeConfiguration {
	readonly AuthorizationConfig?: AuthorizationConfig | undefined;
	readonly FilesystemId: string;
	readonly RootDirectory?: string | undefined;
	readonly TransitEncryption?: string | undefined;
	readonly TransitEncryptionPort?: number | undefined;
}
export interface EnvironmentFile {
	readonly Type?: string | undefined;
	readonly Value?: string | undefined;
}
export interface EphemeralStorage {
	readonly SizeInGiB?: number | undefined;
}
export interface FirelensConfiguration {
	readonly Options?: { [key: string]: string } | undefined;
	readonly Type?: string | undefined;
}
export interface HealthCheck {
	readonly Command?: string[] | undefined;
	readonly Interval?: number | undefined;
	readonly Retries?: number | undefined;
	readonly StartPeriod?: number | undefined;
	readonly Timeout?: number | undefined;
}
export interface HostEntry {
	readonly Hostname?: string | undefined;
	readonly IpAddress?: string | undefined;
}
export interface HostVolumeProperties {
	readonly SourcePath?: string | undefined;
}
export interface InferenceAccelerator {
	readonly DeviceName?: string | undefined;
	readonly DeviceType?: string | undefined;
}
export interface KernelCapabilities {
	readonly Add?: string[] | undefined;
	readonly Drop?: string[] | undefined;
}
export interface KeyValuePair {
	readonly Name?: string | undefined;
	readonly Value?: string | undefined;
}
export interface LinuxParameters {
	readonly Capabilities?: KernelCapabilities | undefined;
	readonly Devices?: Device[] | undefined;
	readonly InitProcessEnabled?: boolean | undefined;
	readonly MaxSwap?: number | undefined;
	readonly SharedMemorySize?: number | undefined;
	readonly Swappiness?: number | undefined;
	readonly Tmpfs?: Tmpfs[] | undefined;
}
export interface MountPoint {
	readonly ContainerPath?: string | undefined;
	readonly ReadOnly?: boolean | undefined;
	readonly SourceVolume?: string | undefined;
}
export interface PortMapping {
	readonly AppProtocol?: string | undefined;
	readonly ContainerPort?: number | undefined;
	readonly HostPort?: number | undefined;
	readonly Name?: string | undefined;
	readonly Protocol?: string | undefined;
}
export interface ProxyConfiguration {
	readonly ContainerName: string;
	readonly ProxyConfigurationProperties?: KeyValuePair[] | undefined;
	readonly Type?: string | undefined;
}
export interface RepositoryCredentials {
	readonly CredentialsParameter?: string | undefined;
}
export interface ResourceRequirement {
	readonly Type: string;
	readonly Value: string;
}
export interface RuntimePlatform {
	readonly CpuArchitecture?: string | undefined;
	readonly OperatingSystemFamily?: string | undefined;
}
export interface SystemControl {
	readonly Namespace?: string | undefined;
	readonly Value?: string | undefined;
}
export interface TaskDefinitionPlacementConstraint {
	readonly Expression?: string | undefined;
	readonly Type: string;
}
export interface Tmpfs {
	readonly ContainerPath?: string | undefined;
	readonly MountOptions?: string[] | undefined;
	readonly Size: number;
}
export interface Ulimit {
	readonly HardLimit: number;
	readonly Name: string;
	readonly SoftLimit: number;
}
export interface Volume {
	readonly DockerVolumeConfiguration?: DockerVolumeConfiguration | undefined;
	readonly EFSVolumeConfiguration?: EFSVolumeConfiguration | undefined;
	readonly Host?: HostVolumeProperties | undefined;
	readonly Name?: string | undefined;
}
export interface VolumeFrom {
	readonly ReadOnly?: boolean | undefined;
	readonly SourceContainer?: string | undefined;
}
export interface Scale {
	readonly Unit?: string | undefined;
	readonly Value?: number | undefined;
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
