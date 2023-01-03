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
	readonly Description?: (string | undefined) | undefined;
	readonly DesiredState?: (string | undefined) | undefined;
	readonly Enrichment?: (string | undefined) | undefined;
	readonly EnrichmentParameters?: (PipeEnrichmentParameters | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly SourceParameters?: (PipeSourceParameters | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
	readonly TargetParameters?: (PipeTargetParameters | undefined) | undefined;
	readonly LogicalId: string;
}
export interface AwsVpcConfiguration {
	readonly AssignPublicIp?: (string | undefined) | undefined;
	readonly SecurityGroups?: (string[] | undefined) | undefined;
	readonly Subnets: string[];
}
export interface BatchArrayProperties {
	readonly Size?: (number | undefined) | undefined;
}
export interface BatchContainerOverrides {
	readonly Command?: (string[] | undefined) | undefined;
	readonly Environment?: (BatchEnvironmentVariable[] | undefined) | undefined;
	readonly InstanceType?: (string | undefined) | undefined;
	readonly ResourceRequirements?: (BatchResourceRequirement[] | undefined) | undefined;
}
export interface BatchEnvironmentVariable {
	readonly Name?: (string | undefined) | undefined;
	readonly Value?: (string | undefined) | undefined;
}
export interface BatchJobDependency {
	readonly JobId?: (string | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
}
export interface BatchResourceRequirement {
	readonly Type: string;
	readonly Value: string;
}
export interface BatchRetryStrategy {
	readonly Attempts?: (number | undefined) | undefined;
}
export interface CapacityProviderStrategyItem {
	readonly Base?: (number | undefined) | undefined;
	readonly CapacityProvider: string;
	readonly Weight?: (number | undefined) | undefined;
}
export interface DeadLetterConfig {
	readonly Arn?: (string | undefined) | undefined;
}
export interface EcsContainerOverride {
	readonly Command?: (string[] | undefined) | undefined;
	readonly Cpu?: (number | undefined) | undefined;
	readonly Environment?: (EcsEnvironmentVariable[] | undefined) | undefined;
	readonly EnvironmentFiles?: (EcsEnvironmentFile[] | undefined) | undefined;
	readonly Memory?: (number | undefined) | undefined;
	readonly MemoryReservation?: (number | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly ResourceRequirements?: (EcsResourceRequirement[] | undefined) | undefined;
}
export interface EcsEnvironmentFile {
	readonly Type: string;
	readonly Value: string;
}
export interface EcsEnvironmentVariable {
	readonly Name?: (string | undefined) | undefined;
	readonly Value?: (string | undefined) | undefined;
}
export interface EcsEphemeralStorage {
	readonly SizeInGiB: number;
}
export interface EcsInferenceAcceleratorOverride {
	readonly DeviceName?: (string | undefined) | undefined;
	readonly DeviceType?: (string | undefined) | undefined;
}
export interface EcsResourceRequirement {
	readonly Type: string;
	readonly Value: string;
}
export interface EcsTaskOverride {
	readonly ContainerOverrides?: (EcsContainerOverride[] | undefined) | undefined;
	readonly Cpu?: (string | undefined) | undefined;
	readonly EphemeralStorage?: (EcsEphemeralStorage | undefined) | undefined;
	readonly ExecutionRoleArn?: (string | undefined) | undefined;
	readonly InferenceAcceleratorOverrides?: (EcsInferenceAcceleratorOverride[] | undefined) | undefined;
	readonly Memory?: (string | undefined) | undefined;
	readonly TaskRoleArn?: (string | undefined) | undefined;
}
export interface Filter {
	readonly Pattern?: (string | undefined) | undefined;
}
export interface FilterCriteria {
	readonly Filters?: (Filter[] | undefined) | undefined;
}
export interface MQBrokerAccessCredentials {
	readonly BasicAuth: string;
}
export interface MSKAccessCredentials {
	readonly ClientCertificateTlsAuth?: (string | undefined) | undefined;
	readonly SaslScram512Auth?: (string | undefined) | undefined;
}
export interface NetworkConfiguration {
	readonly AwsvpcConfiguration?: (AwsVpcConfiguration | undefined) | undefined;
}
export interface PipeEnrichmentHttpParameters {
	readonly HeaderParameters?: ({ [key: string]: string } | undefined) | undefined;
	readonly PathParameterValues?: (string[] | undefined) | undefined;
	readonly QueryStringParameters?: ({ [key: string]: string } | undefined) | undefined;
}
export interface PipeEnrichmentParameters {
	readonly HttpParameters?: (PipeEnrichmentHttpParameters | undefined) | undefined;
	readonly InputTemplate?: (string | undefined) | undefined;
}
export interface PipeSourceActiveMQBrokerParameters {
	readonly BatchSize?: (number | undefined) | undefined;
	readonly Credentials: MQBrokerAccessCredentials;
	readonly MaximumBatchingWindowInSeconds?: (number | undefined) | undefined;
	readonly QueueName: string;
}
export interface PipeSourceDynamoDBStreamParameters {
	readonly BatchSize?: (number | undefined) | undefined;
	readonly DeadLetterConfig?: (DeadLetterConfig | undefined) | undefined;
	readonly MaximumBatchingWindowInSeconds?: (number | undefined) | undefined;
	readonly MaximumRecordAgeInSeconds?: (number | undefined) | undefined;
	readonly MaximumRetryAttempts?: (number | undefined) | undefined;
	readonly OnPartialBatchItemFailure?: (string | undefined) | undefined;
	readonly ParallelizationFactor?: (number | undefined) | undefined;
	readonly StartingPosition: string;
}
export interface PipeSourceKinesisStreamParameters {
	readonly BatchSize?: (number | undefined) | undefined;
	readonly DeadLetterConfig?: (DeadLetterConfig | undefined) | undefined;
	readonly MaximumBatchingWindowInSeconds?: (number | undefined) | undefined;
	readonly MaximumRecordAgeInSeconds?: (number | undefined) | undefined;
	readonly MaximumRetryAttempts?: (number | undefined) | undefined;
	readonly OnPartialBatchItemFailure?: (string | undefined) | undefined;
	readonly ParallelizationFactor?: (number | undefined) | undefined;
	readonly StartingPosition: string;
	readonly StartingPositionTimestamp?: (string | undefined) | undefined;
}
export interface PipeSourceManagedStreamingKafkaParameters {
	readonly BatchSize?: (number | undefined) | undefined;
	readonly ConsumerGroupID?: (string | undefined) | undefined;
	readonly Credentials?: (MSKAccessCredentials | undefined) | undefined;
	readonly MaximumBatchingWindowInSeconds?: (number | undefined) | undefined;
	readonly StartingPosition?: (string | undefined) | undefined;
	readonly TopicName: string;
}
export interface PipeSourceParameters {
	readonly ActiveMQBrokerParameters?: (PipeSourceActiveMQBrokerParameters | undefined) | undefined;
	readonly DynamoDBStreamParameters?: (PipeSourceDynamoDBStreamParameters | undefined) | undefined;
	readonly FilterCriteria?: (FilterCriteria | undefined) | undefined;
	readonly KinesisStreamParameters?: (PipeSourceKinesisStreamParameters | undefined) | undefined;
	readonly ManagedStreamingKafkaParameters?: (PipeSourceManagedStreamingKafkaParameters | undefined) | undefined;
	readonly RabbitMQBrokerParameters?: (PipeSourceRabbitMQBrokerParameters | undefined) | undefined;
	readonly SelfManagedKafkaParameters?: (PipeSourceSelfManagedKafkaParameters | undefined) | undefined;
	readonly SqsQueueParameters?: (PipeSourceSqsQueueParameters | undefined) | undefined;
}
export interface PipeSourceRabbitMQBrokerParameters {
	readonly BatchSize?: (number | undefined) | undefined;
	readonly Credentials: MQBrokerAccessCredentials;
	readonly MaximumBatchingWindowInSeconds?: (number | undefined) | undefined;
	readonly QueueName: string;
	readonly VirtualHost?: (string | undefined) | undefined;
}
export interface PipeSourceSelfManagedKafkaParameters {
	readonly AdditionalBootstrapServers?: (string[] | undefined) | undefined;
	readonly BatchSize?: (number | undefined) | undefined;
	readonly ConsumerGroupID?: (string | undefined) | undefined;
	readonly Credentials?: (SelfManagedKafkaAccessConfigurationCredentials | undefined) | undefined;
	readonly MaximumBatchingWindowInSeconds?: (number | undefined) | undefined;
	readonly ServerRootCaCertificate?: (string | undefined) | undefined;
	readonly StartingPosition?: (string | undefined) | undefined;
	readonly TopicName: string;
	readonly Vpc?: (SelfManagedKafkaAccessConfigurationVpc | undefined) | undefined;
}
export interface PipeSourceSqsQueueParameters {
	readonly BatchSize?: (number | undefined) | undefined;
	readonly MaximumBatchingWindowInSeconds?: (number | undefined) | undefined;
}
export interface PipeTargetBatchJobParameters {
	readonly ArrayProperties?: (BatchArrayProperties | undefined) | undefined;
	readonly ContainerOverrides?: (BatchContainerOverrides | undefined) | undefined;
	readonly DependsOn?: (BatchJobDependency[] | undefined) | undefined;
	readonly JobDefinition: string;
	readonly JobName: string;
	readonly Parameters?: ({ [key: string]: string } | undefined) | undefined;
	readonly RetryStrategy?: (BatchRetryStrategy | undefined) | undefined;
}
export interface PipeTargetCloudWatchLogsParameters {
	readonly LogStreamName?: (string | undefined) | undefined;
	readonly Timestamp?: (string | undefined) | undefined;
}
export interface PipeTargetEcsTaskParameters {
	readonly CapacityProviderStrategy?: (CapacityProviderStrategyItem[] | undefined) | undefined;
	readonly EnableECSManagedTags?: (boolean | undefined) | undefined;
	readonly EnableExecuteCommand?: (boolean | undefined) | undefined;
	readonly Group?: (string | undefined) | undefined;
	readonly LaunchType?: (string | undefined) | undefined;
	readonly NetworkConfiguration?: (NetworkConfiguration | undefined) | undefined;
	readonly Overrides?: (EcsTaskOverride | undefined) | undefined;
	readonly PlacementConstraints?: (PlacementConstraint[] | undefined) | undefined;
	readonly PlacementStrategy?: (PlacementStrategy[] | undefined) | undefined;
	readonly PlatformVersion?: (string | undefined) | undefined;
	readonly PropagateTags?: (string | undefined) | undefined;
	readonly ReferenceId?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly TaskCount?: (number | undefined) | undefined;
	readonly TaskDefinitionArn: string;
}
export interface PipeTargetEventBridgeEventBusParameters {
	readonly DetailType?: (string | undefined) | undefined;
	readonly EndpointId?: (string | undefined) | undefined;
	readonly Resources?: (string[] | undefined) | undefined;
	readonly Source?: (string | undefined) | undefined;
	readonly Time?: (string | undefined) | undefined;
}
export interface PipeTargetHttpParameters {
	readonly HeaderParameters?: ({ [key: string]: string } | undefined) | undefined;
	readonly PathParameterValues?: (string[] | undefined) | undefined;
	readonly QueryStringParameters?: ({ [key: string]: string } | undefined) | undefined;
}
export interface PipeTargetKinesisStreamParameters {
	readonly PartitionKey: string;
}
export interface PipeTargetLambdaFunctionParameters {
	readonly InvocationType?: (string | undefined) | undefined;
}
export interface PipeTargetParameters {
	readonly BatchJobParameters?: (PipeTargetBatchJobParameters | undefined) | undefined;
	readonly CloudWatchLogsParameters?: (PipeTargetCloudWatchLogsParameters | undefined) | undefined;
	readonly EcsTaskParameters?: (PipeTargetEcsTaskParameters | undefined) | undefined;
	readonly EventBridgeEventBusParameters?: (PipeTargetEventBridgeEventBusParameters | undefined) | undefined;
	readonly HttpParameters?: (PipeTargetHttpParameters | undefined) | undefined;
	readonly InputTemplate?: (string | undefined) | undefined;
	readonly KinesisStreamParameters?: (PipeTargetKinesisStreamParameters | undefined) | undefined;
	readonly LambdaFunctionParameters?: (PipeTargetLambdaFunctionParameters | undefined) | undefined;
	readonly RedshiftDataParameters?: (PipeTargetRedshiftDataParameters | undefined) | undefined;
	readonly SageMakerPipelineParameters?: (PipeTargetSageMakerPipelineParameters | undefined) | undefined;
	readonly SqsQueueParameters?: (PipeTargetSqsQueueParameters | undefined) | undefined;
	readonly StepFunctionStateMachineParameters?: (PipeTargetStateMachineParameters | undefined) | undefined;
}
export interface PipeTargetRedshiftDataParameters {
	readonly Database: string;
	readonly DbUser?: (string | undefined) | undefined;
	readonly SecretManagerArn?: (string | undefined) | undefined;
	readonly Sqls: string[];
	readonly StatementName?: (string | undefined) | undefined;
	readonly WithEvent?: (boolean | undefined) | undefined;
}
export interface PipeTargetSageMakerPipelineParameters {
	readonly PipelineParameterList?: (SageMakerPipelineParameter[] | undefined) | undefined;
}
export interface PipeTargetSqsQueueParameters {
	readonly MessageDeduplicationId?: (string | undefined) | undefined;
	readonly MessageGroupId?: (string | undefined) | undefined;
}
export interface PipeTargetStateMachineParameters {
	readonly InvocationType?: (string | undefined) | undefined;
}
export interface PlacementConstraint {
	readonly Expression?: (string | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
}
export interface PlacementStrategy {
	readonly Field?: (string | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
}
export interface SageMakerPipelineParameter {
	readonly Name: string;
	readonly Value: string;
}
export interface SelfManagedKafkaAccessConfigurationCredentials {
	readonly BasicAuth?: (string | undefined) | undefined;
	readonly ClientCertificateTlsAuth?: (string | undefined) | undefined;
	readonly SaslScram256Auth?: (string | undefined) | undefined;
	readonly SaslScram512Auth?: (string | undefined) | undefined;
}
export interface SelfManagedKafkaAccessConfigurationVpc {
	readonly SecurityGroup?: (string[] | undefined) | undefined;
	readonly Subnets?: (string[] | undefined) | undefined;
}
export default {
	Pipe: Pipe,
};
