import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class ApiDestination extends CfnResource<ApiDestinationComponentInputs> implements ApiDestinationComponentOutputs {
	constructor(entity: ADKEntity, options: ApiDestinationComponentInputs) {
		super(entity, options.LogicalId, "AWS::Events::ApiDestination", options);
	}
	public readonly Arn: string;
}
export interface ApiDestinationComponentOutputs {
	readonly Arn: string;
}
export interface ApiDestinationComponentInputs {
	readonly ConnectionArn: string;
	readonly HttpMethod: string;
	readonly InvocationEndpoint: string;
	readonly Description?: string | undefined;
	readonly InvocationRateLimitPerSecond?: number | undefined;
	readonly Name?: string | undefined;
	readonly LogicalId: string;
}
export class Archive extends CfnResource<ArchiveComponentInputs> implements ArchiveComponentOutputs {
	constructor(entity: ADKEntity, options: ArchiveComponentInputs) {
		super(entity, options.LogicalId, "AWS::Events::Archive", options);
	}
	public readonly Arn: string;
}
export interface ArchiveComponentOutputs {
	readonly Arn: string;
}
export interface ArchiveComponentInputs {
	readonly SourceArn: string;
	readonly ArchiveName?: string;
	readonly Description?: string | undefined;
	readonly EventPattern?: any | undefined;
	readonly RetentionDays?: number | undefined;
	readonly LogicalId: string;
}
export class Connection extends CfnResource<ConnectionComponentInputs> implements ConnectionComponentOutputs {
	constructor(entity: ADKEntity, options: ConnectionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Events::Connection", options);
	}
	public readonly Arn: string;
	public readonly SecretArn: string;
}
export interface ConnectionComponentOutputs {
	readonly Arn: string;
	readonly SecretArn: string;
}
export interface ConnectionComponentInputs {
	readonly AuthorizationType: string;
	readonly AuthParameters: AuthParameters;
	readonly Description?: string | undefined;
	readonly Name?: string | undefined;
	readonly LogicalId: string;
}
export class Endpoint extends CfnResource<EndpointComponentInputs> implements EndpointComponentOutputs {
	constructor(entity: ADKEntity, options: EndpointComponentInputs) {
		super(entity, options.LogicalId, "AWS::Events::Endpoint", options);
	}
	public readonly Arn: string;
	public readonly EndpointId: string;
	public readonly EndpointUrl: string;
	public readonly State: string;
	public readonly StateReason: string;
}
export interface EndpointComponentOutputs {
	readonly Arn: string;
	readonly EndpointId: string;
	readonly EndpointUrl: string;
	readonly State: string;
	readonly StateReason: string;
}
export interface EndpointComponentInputs {
	readonly EventBuses: EndpointEventBus[];
	readonly Name: string;
	readonly RoutingConfig: RoutingConfig;
	readonly Description?: string | undefined;
	readonly ReplicationConfig?: ReplicationConfig | undefined;
	readonly RoleArn?: string | undefined;
	readonly LogicalId: string;
}
export class EventBus extends CfnResource<EventBusComponentInputs> implements EventBusComponentOutputs {
	constructor(entity: ADKEntity, options: EventBusComponentInputs) {
		super(entity, options.LogicalId, "AWS::Events::EventBus", options);
	}
	public readonly Arn: string;
	public readonly Name: string;
	public readonly Policy: string;
}
export interface EventBusComponentOutputs {
	readonly Arn: string;
	readonly Name: string;
	readonly Policy: string;
}
export interface EventBusComponentInputs {
	readonly Name: string;
	readonly EventSourceName?: string | undefined;
	readonly Tags?: TagEntry[] | undefined;
	readonly LogicalId: string;
}
export class EventBusPolicy extends CfnResource<EventBusPolicyComponentInputs> implements EventBusPolicyComponentOutputs {
	constructor(entity: ADKEntity, options: EventBusPolicyComponentInputs) {
		super(entity, options.LogicalId, "AWS::Events::EventBusPolicy", options);
	}
}
export interface EventBusPolicyComponentOutputs {}
export interface EventBusPolicyComponentInputs {
	readonly StatementId: string;
	readonly Action?: string | undefined;
	readonly Condition?: Condition | undefined;
	readonly EventBusName?: string | undefined;
	readonly Principal?: string | undefined;
	readonly Statement?: any | undefined;
	readonly LogicalId: string;
}
export class Rule extends CfnResource<RuleComponentInputs> implements RuleComponentOutputs {
	constructor(entity: ADKEntity, options: RuleComponentInputs) {
		super(entity, options.LogicalId, "AWS::Events::Rule", options);
	}
	public readonly Arn: string;
}
export interface RuleComponentOutputs {
	readonly Arn: string;
}
export interface RuleComponentInputs {
	readonly Description?: string | undefined;
	readonly EventBusName?: string | undefined;
	readonly EventPattern?: any | undefined;
	readonly Name?: string | undefined;
	readonly RoleArn?: string | undefined;
	readonly ScheduleExpression?: string | undefined;
	readonly State?: string | undefined;
	readonly Targets?: Target[] | undefined;
	readonly LogicalId: string;
}
export interface ApiKeyAuthParameters {
	readonly ApiKeyName: string;
	readonly ApiKeyValue: string;
}
export interface AuthParameters {
	readonly ApiKeyAuthParameters?: ApiKeyAuthParameters | undefined;
	readonly BasicAuthParameters?: BasicAuthParameters | undefined;
	readonly InvocationHttpParameters?: ConnectionHttpParameters | undefined;
	readonly OAuthParameters?: OAuthParameters | undefined;
}
export interface BasicAuthParameters {
	readonly Password: string;
	readonly Username: string;
}
export interface ClientParameters {
	readonly ClientID: string;
	readonly ClientSecret: string;
}
export interface ConnectionHttpParameters {
	readonly BodyParameters?: Parameter[] | undefined;
	readonly HeaderParameters?: Parameter[] | undefined;
	readonly QueryStringParameters?: Parameter[] | undefined;
}
export interface OAuthParameters {
	readonly AuthorizationEndpoint: string;
	readonly ClientParameters: ClientParameters;
	readonly HttpMethod: string;
	readonly OAuthHttpParameters?: ConnectionHttpParameters | undefined;
}
export interface Parameter {
	readonly IsValueSecret?: boolean | undefined;
	readonly Key: string;
	readonly Value: string;
}
export interface EndpointEventBus {
	readonly EventBusArn: string;
}
export interface FailoverConfig {
	readonly Primary: Primary;
	readonly Secondary: Secondary;
}
export interface Primary {
	readonly HealthCheck: string;
}
export interface ReplicationConfig {
	readonly State: string;
}
export interface RoutingConfig {
	readonly FailoverConfig: FailoverConfig;
}
export interface Secondary {
	readonly Route: string;
}
export interface TagEntry {
	readonly Key: string;
	readonly Value: string;
}
export interface Condition {
	readonly Key?: string | undefined;
	readonly Type?: string | undefined;
	readonly Value?: string | undefined;
}
export interface AwsVpcConfiguration {
	readonly AssignPublicIp?: string | undefined;
	readonly SecurityGroups?: string[] | undefined;
	readonly Subnets: string[];
}
export interface BatchArrayProperties {
	readonly Size?: number | undefined;
}
export interface BatchParameters {
	readonly ArrayProperties?: BatchArrayProperties | undefined;
	readonly JobDefinition: string;
	readonly JobName: string;
	readonly RetryStrategy?: BatchRetryStrategy | undefined;
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
export interface EcsParameters {
	readonly CapacityProviderStrategy?: CapacityProviderStrategyItem[] | undefined;
	readonly EnableECSManagedTags?: boolean | undefined;
	readonly EnableExecuteCommand?: boolean | undefined;
	readonly Group?: string | undefined;
	readonly LaunchType?: string | undefined;
	readonly NetworkConfiguration?: NetworkConfiguration | undefined;
	readonly PlacementConstraints?: PlacementConstraint[] | undefined;
	readonly PlacementStrategies?: PlacementStrategy[] | undefined;
	readonly PlatformVersion?: string | undefined;
	readonly PropagateTags?: string | undefined;
	readonly ReferenceId?: string | undefined;
	readonly TagList?: { key: string; value: string }[] | undefined;
	readonly TaskCount?: number | undefined;
	readonly TaskDefinitionArn: string;
}
export interface HttpParameters {
	readonly HeaderParameters?: { [key: string]: string } | undefined;
	readonly PathParameterValues?: string[] | undefined;
	readonly QueryStringParameters?: { [key: string]: string } | undefined;
}
export interface InputTransformer {
	readonly InputPathsMap?: { [key: string]: string } | undefined;
	readonly InputTemplate: string;
}
export interface KinesisParameters {
	readonly PartitionKeyPath: string;
}
export interface NetworkConfiguration {
	readonly AwsVpcConfiguration?: AwsVpcConfiguration | undefined;
}
export interface PlacementConstraint {
	readonly Expression?: string | undefined;
	readonly Type?: string | undefined;
}
export interface PlacementStrategy {
	readonly Field?: string | undefined;
	readonly Type?: string | undefined;
}
export interface RedshiftDataParameters {
	readonly Database: string;
	readonly DbUser?: string | undefined;
	readonly SecretManagerArn?: string | undefined;
	readonly Sql: string;
	readonly StatementName?: string | undefined;
	readonly WithEvent?: boolean | undefined;
}
export interface RetryPolicy {
	readonly MaximumEventAgeInSeconds?: number | undefined;
	readonly MaximumRetryAttempts?: number | undefined;
}
export interface RunCommandParameters {
	readonly RunCommandTargets: RunCommandTarget[];
}
export interface RunCommandTarget {
	readonly Key: string;
	readonly Values: string[];
}
export interface SageMakerPipelineParameter {
	readonly Name: string;
	readonly Value: string;
}
export interface SageMakerPipelineParameters {
	readonly PipelineParameterList?: SageMakerPipelineParameter[] | undefined;
}
export interface SqsParameters {
	readonly MessageGroupId: string;
}
export interface Tag {
	readonly Key?: string | undefined;
	readonly Value?: string | undefined;
}
export interface Target {
	readonly Arn: string;
	readonly BatchParameters?: BatchParameters | undefined;
	readonly DeadLetterConfig?: DeadLetterConfig | undefined;
	readonly EcsParameters?: EcsParameters | undefined;
	readonly HttpParameters?: HttpParameters | undefined;
	readonly Id: string;
	readonly Input?: string | undefined;
	readonly InputPath?: string | undefined;
	readonly InputTransformer?: InputTransformer | undefined;
	readonly KinesisParameters?: KinesisParameters | undefined;
	readonly RedshiftDataParameters?: RedshiftDataParameters | undefined;
	readonly RetryPolicy?: RetryPolicy | undefined;
	readonly RoleArn?: string | undefined;
	readonly RunCommandParameters?: RunCommandParameters | undefined;
	readonly SageMakerPipelineParameters?: SageMakerPipelineParameters | undefined;
	readonly SqsParameters?: SqsParameters | undefined;
}
export default {
	ApiDestination: ApiDestination,
	Archive: Archive,
	Connection: Connection,
	Endpoint: Endpoint,
	EventBus: EventBus,
	EventBusPolicy: EventBusPolicy,
	Rule: Rule,
};
