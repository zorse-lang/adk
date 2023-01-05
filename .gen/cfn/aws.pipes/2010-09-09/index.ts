import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Pipe extends CfnResource<PipeComponentInputs> implements PipeComponentOutputs {
	constructor(entity: ADKEntity, options: PipeComponentInputs) {
		super(entity, options.LogicalId, "AWS::Pipes::Pipe", options);
	}
	public readonly Arn: string;
	public readonly CreationTime: string;
	public readonly CurrentState: string;
	public readonly LastModifiedTime: string;
	public readonly StateReason: string;
}
export interface PipeComponentOutputs {
	readonly Arn: string;
	readonly CreationTime: string;
	readonly CurrentState: string;
	readonly LastModifiedTime: string;
	readonly StateReason: string;
}
export interface PipeComponentInputs {
	readonly RoleArn: string;
	readonly Source: string;
	readonly Target: string;
	readonly Description?: string | undefined;
	readonly DesiredState?: string | undefined;
	readonly Enrichment?: string | undefined;
	readonly EnrichmentParameters?: PipeEnrichmentParameters | undefined;
	readonly Name?: string | undefined;
	readonly SourceParameters?: PipeSourceParameters | undefined;
	readonly Tags?: { [key: string]: string } | undefined;
	readonly TargetParameters?: PipeTargetParameters | undefined;
	readonly LogicalId: string;
}
export interface AwsVpcConfiguration {
	readonly AssignPublicIp?: string | undefined;
	readonly SecurityGroups?: string[] | undefined;
	readonly Subnets: string[];
}
export interface BatchArrayProperties {
	readonly Size?: number | undefined;
}
export interface BatchContainerOverrides {
	readonly Command?: string[] | undefined;
	readonly Environment?: BatchEnvironmentVariable[] | undefined;
	readonly InstanceType?: string | undefined;
	readonly ResourceRequirements?: BatchResourceRequirement[] | undefined;
}
export interface BatchEnvironmentVariable {
	readonly Name?: string | undefined;
	readonly Value?: string | undefined;
}
export interface BatchJobDependency {
	readonly JobId?: string | undefined;
	readonly Type?: string | undefined;
}
export interface BatchResourceRequirement {
	readonly Type: string;
	readonly Value: string;
}
export interface BatchRetryStrategy {
	readonly Attempts?: number | undefined;
}
export interface CapacityProviderStrategyItem {
	readonly Base?: number | undefined;
	readonly CapacityProvider: string;
	readonly Weight?: number | undefined;
}
export interface DeadLetterConfig {
	readonly Arn?: string | undefined;
}
export interface EcsContainerOverride {
	readonly Command?: string[] | undefined;
	readonly Cpu?: number | undefined;
	readonly Environment?: EcsEnvironmentVariable[] | undefined;
	readonly EnvironmentFiles?: EcsEnvironmentFile[] | undefined;
	readonly Memory?: number | undefined;
	readonly MemoryReservation?: number | undefined;
	readonly Name?: string | undefined;
	readonly ResourceRequirements?: EcsResourceRequirement[] | undefined;
}
export interface EcsEnvironmentFile {
	readonly Type: string;
	readonly Value: string;
}
export interface EcsEnvironmentVariable {
	readonly Name?: string | undefined;
	readonly Value?: string | undefined;
}
export interface EcsEphemeralStorage {
	readonly SizeInGiB: number;
}
export interface EcsInferenceAcceleratorOverride {
	readonly DeviceName?: string | undefined;
	readonly DeviceType?: string | undefined;
}
export interface EcsResourceRequirement {
	readonly Type: string;
	readonly Value: string;
}
export interface EcsTaskOverride {
	readonly ContainerOverrides?: EcsContainerOverride[] | undefined;
	readonly Cpu?: string | undefined;
	readonly EphemeralStorage?: EcsEphemeralStorage | undefined;
	readonly ExecutionRoleArn?: string | undefined;
	readonly InferenceAcceleratorOverrides?: EcsInferenceAcceleratorOverride[] | undefined;
	readonly Memory?: string | undefined;
	readonly TaskRoleArn?: string | undefined;
}
export interface Filter {
	readonly Pattern?: string | undefined;
}
export interface FilterCriteria {
	readonly Filters?: Filter[] | undefined;
}
export interface MQBrokerAccessCredentials {
	readonly BasicAuth: string;
}
export interface MSKAccessCredentials {
	readonly ClientCertificateTlsAuth?: string | undefined;
	readonly SaslScram512Auth?: string | undefined;
}
export interface NetworkConfiguration {
	readonly AwsvpcConfiguration?: AwsVpcConfiguration | undefined;
}
export interface PipeEnrichmentHttpParameters {
	readonly HeaderParameters?: { [key: string]: string } | undefined;
	readonly PathParameterValues?: string[] | undefined;
	readonly QueryStringParameters?: { [key: string]: string } | undefined;
}
export interface PipeEnrichmentParameters {
	readonly HttpParameters?: PipeEnrichmentHttpParameters | undefined;
	readonly InputTemplate?: string | undefined;
}
export interface PipeSourceActiveMQBrokerParameters {
	readonly BatchSize?: number | undefined;
	readonly Credentials: MQBrokerAccessCredentials;
	readonly MaximumBatchingWindowInSeconds?: number | undefined;
	readonly QueueName: string;
}
export interface PipeSourceDynamoDBStreamParameters {
	readonly BatchSize?: number | undefined;
	readonly DeadLetterConfig?: DeadLetterConfig | undefined;
	readonly MaximumBatchingWindowInSeconds?: number | undefined;
	readonly MaximumRecordAgeInSeconds?: number | undefined;
	readonly MaximumRetryAttempts?: number | undefined;
	readonly OnPartialBatchItemFailure?: string | undefined;
	readonly ParallelizationFactor?: number | undefined;
	readonly StartingPosition: string;
}
export interface PipeSourceKinesisStreamParameters {
	readonly BatchSize?: number | undefined;
	readonly DeadLetterConfig?: DeadLetterConfig | undefined;
	readonly MaximumBatchingWindowInSeconds?: number | undefined;
	readonly MaximumRecordAgeInSeconds?: number | undefined;
	readonly MaximumRetryAttempts?: number | undefined;
	readonly OnPartialBatchItemFailure?: string | undefined;
	readonly ParallelizationFactor?: number | undefined;
	readonly StartingPosition: string;
	readonly StartingPositionTimestamp?: string | undefined;
}
export interface PipeSourceManagedStreamingKafkaParameters {
	readonly BatchSize?: number | undefined;
	readonly ConsumerGroupID?: string | undefined;
	readonly Credentials?: MSKAccessCredentials | undefined;
	readonly MaximumBatchingWindowInSeconds?: number | undefined;
	readonly StartingPosition?: string | undefined;
	readonly TopicName: string;
}
export interface PipeSourceParameters {
	readonly ActiveMQBrokerParameters?: PipeSourceActiveMQBrokerParameters | undefined;
	readonly DynamoDBStreamParameters?: PipeSourceDynamoDBStreamParameters | undefined;
	readonly FilterCriteria?: FilterCriteria | undefined;
	readonly KinesisStreamParameters?: PipeSourceKinesisStreamParameters | undefined;
	readonly ManagedStreamingKafkaParameters?: PipeSourceManagedStreamingKafkaParameters | undefined;
	readonly RabbitMQBrokerParameters?: PipeSourceRabbitMQBrokerParameters | undefined;
	readonly SelfManagedKafkaParameters?: PipeSourceSelfManagedKafkaParameters | undefined;
	readonly SqsQueueParameters?: PipeSourceSqsQueueParameters | undefined;
}
export interface PipeSourceRabbitMQBrokerParameters {
	readonly BatchSize?: number | undefined;
	readonly Credentials: MQBrokerAccessCredentials;
	readonly MaximumBatchingWindowInSeconds?: number | undefined;
	readonly QueueName: string;
	readonly VirtualHost?: string | undefined;
}
export interface PipeSourceSelfManagedKafkaParameters {
	readonly AdditionalBootstrapServers?: string[] | undefined;
	readonly BatchSize?: number | undefined;
	readonly ConsumerGroupID?: string | undefined;
	readonly Credentials?: SelfManagedKafkaAccessConfigurationCredentials | undefined;
	readonly MaximumBatchingWindowInSeconds?: number | undefined;
	readonly ServerRootCaCertificate?: string | undefined;
	readonly StartingPosition?: string | undefined;
	readonly TopicName: string;
	readonly Vpc?: SelfManagedKafkaAccessConfigurationVpc | undefined;
}
export interface PipeSourceSqsQueueParameters {
	readonly BatchSize?: number | undefined;
	readonly MaximumBatchingWindowInSeconds?: number | undefined;
}
export interface PipeTargetBatchJobParameters {
	readonly ArrayProperties?: BatchArrayProperties | undefined;
	readonly ContainerOverrides?: BatchContainerOverrides | undefined;
	readonly DependsOn?: BatchJobDependency[] | undefined;
	readonly JobDefinition: string;
	readonly JobName: string;
	readonly Parameters?: { [key: string]: string } | undefined;
	readonly RetryStrategy?: BatchRetryStrategy | undefined;
}
export interface PipeTargetCloudWatchLogsParameters {
	readonly LogStreamName?: string | undefined;
	readonly Timestamp?: string | undefined;
}
export interface PipeTargetEcsTaskParameters {
	readonly CapacityProviderStrategy?: CapacityProviderStrategyItem[] | undefined;
	readonly EnableECSManagedTags?: boolean | undefined;
	readonly EnableExecuteCommand?: boolean | undefined;
	readonly Group?: string | undefined;
	readonly LaunchType?: string | undefined;
	readonly NetworkConfiguration?: NetworkConfiguration | undefined;
	readonly Overrides?: EcsTaskOverride | undefined;
	readonly PlacementConstraints?: PlacementConstraint[] | undefined;
	readonly PlacementStrategy?: PlacementStrategy[] | undefined;
	readonly PlatformVersion?: string | undefined;
	readonly PropagateTags?: string | undefined;
	readonly ReferenceId?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly TaskCount?: number | undefined;
	readonly TaskDefinitionArn: string;
}
export interface PipeTargetEventBridgeEventBusParameters {
	readonly DetailType?: string | undefined;
	readonly EndpointId?: string | undefined;
	readonly Resources?: string[] | undefined;
	readonly Source?: string | undefined;
	readonly Time?: string | undefined;
}
export interface PipeTargetHttpParameters {
	readonly HeaderParameters?: { [key: string]: string } | undefined;
	readonly PathParameterValues?: string[] | undefined;
	readonly QueryStringParameters?: { [key: string]: string } | undefined;
}
export interface PipeTargetKinesisStreamParameters {
	readonly PartitionKey: string;
}
export interface PipeTargetLambdaFunctionParameters {
	readonly InvocationType?: string | undefined;
}
export interface PipeTargetParameters {
	readonly BatchJobParameters?: PipeTargetBatchJobParameters | undefined;
	readonly CloudWatchLogsParameters?: PipeTargetCloudWatchLogsParameters | undefined;
	readonly EcsTaskParameters?: PipeTargetEcsTaskParameters | undefined;
	readonly EventBridgeEventBusParameters?: PipeTargetEventBridgeEventBusParameters | undefined;
	readonly HttpParameters?: PipeTargetHttpParameters | undefined;
	readonly InputTemplate?: string | undefined;
	readonly KinesisStreamParameters?: PipeTargetKinesisStreamParameters | undefined;
	readonly LambdaFunctionParameters?: PipeTargetLambdaFunctionParameters | undefined;
	readonly RedshiftDataParameters?: PipeTargetRedshiftDataParameters | undefined;
	readonly SageMakerPipelineParameters?: PipeTargetSageMakerPipelineParameters | undefined;
	readonly SqsQueueParameters?: PipeTargetSqsQueueParameters | undefined;
	readonly StepFunctionStateMachineParameters?: PipeTargetStateMachineParameters | undefined;
}
export interface PipeTargetRedshiftDataParameters {
	readonly Database: string;
	readonly DbUser?: string | undefined;
	readonly SecretManagerArn?: string | undefined;
	readonly Sqls: string[];
	readonly StatementName?: string | undefined;
	readonly WithEvent?: boolean | undefined;
}
export interface PipeTargetSageMakerPipelineParameters {
	readonly PipelineParameterList?: SageMakerPipelineParameter[] | undefined;
}
export interface PipeTargetSqsQueueParameters {
	readonly MessageDeduplicationId?: string | undefined;
	readonly MessageGroupId?: string | undefined;
}
export interface PipeTargetStateMachineParameters {
	readonly InvocationType?: string | undefined;
}
export interface PlacementConstraint {
	readonly Expression?: string | undefined;
	readonly Type?: string | undefined;
}
export interface PlacementStrategy {
	readonly Field?: string | undefined;
	readonly Type?: string | undefined;
}
export interface SageMakerPipelineParameter {
	readonly Name: string;
	readonly Value: string;
}
export interface SelfManagedKafkaAccessConfigurationCredentials {
	readonly BasicAuth?: string | undefined;
	readonly ClientCertificateTlsAuth?: string | undefined;
	readonly SaslScram256Auth?: string | undefined;
	readonly SaslScram512Auth?: string | undefined;
}
export interface SelfManagedKafkaAccessConfigurationVpc {
	readonly SecurityGroup?: string[] | undefined;
	readonly Subnets?: string[] | undefined;
}
export default {
	Pipe: Pipe,
};
