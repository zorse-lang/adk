import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Api extends CfnResource<ApiComponentInputs> implements ApiComponentOutputs {
	constructor(entity: ADKEntity, options: ApiComponentInputs) {
		super(entity, options.LogicalId, "AWS::Serverless::Api", options);
	}
}
export interface ApiComponentOutputs {}
export interface ApiComponentInputs {
	readonly StageName: string;
	readonly AccessLogSetting?: AccessLogSetting | undefined;
	readonly Auth?: Auth | undefined;
	readonly BinaryMediaTypes?: string[] | undefined;
	readonly CacheClusterEnabled?: boolean | undefined;
	readonly CacheClusterSize?: string | undefined;
	readonly CanarySetting?: CanarySetting | undefined;
	readonly Cors?: CorsConfiguration | string | undefined;
	readonly DefinitionBody?: any | undefined;
	readonly DefinitionUri?: S3Location | string | undefined;
	readonly Description?: string | undefined;
	readonly Domain?: DomainConfiguration | undefined;
	readonly EndpointConfiguration?: EndpointConfiguration | string | undefined;
	readonly GatewayResponses?: any | undefined;
	readonly MethodSettings?: any[] | undefined;
	readonly MinimumCompressionSize?: number | undefined;
	readonly Models?: any | undefined;
	readonly Name?: string | undefined;
	readonly OpenApiVersion?: string | undefined;
	readonly Tags?: { [key: string]: string } | undefined;
	readonly TracingEnabled?: boolean | undefined;
	readonly Variables?: { [key: string]: string } | undefined;
	readonly LogicalId: string;
}
export class Application extends CfnResource<ApplicationComponentInputs> implements ApplicationComponentOutputs {
	constructor(entity: ADKEntity, options: ApplicationComponentInputs) {
		super(entity, options.LogicalId, "AWS::Serverless::Application", options);
	}
}
export interface ApplicationComponentOutputs {}
export interface ApplicationComponentInputs {
	readonly Location: ApplicationLocation | string;
	readonly NotificationArns?: string[] | undefined;
	readonly Parameters?: { [key: string]: string } | undefined;
	readonly Tags?: { [key: string]: string } | undefined;
	readonly TimeoutInMinutes?: number | undefined;
	readonly LogicalId: string;
}
export class FunctionInstance extends CfnResource<FunctionComponentInputs> implements FunctionComponentOutputs {
	constructor(entity: ADKEntity, options: FunctionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Serverless::Function", options);
	}
}
export interface FunctionComponentOutputs {}
export interface FunctionComponentInputs {
	readonly Architectures?: string[] | undefined;
	readonly AssumeRolePolicyDocument?: any | undefined;
	readonly AutoPublishAlias?: string | undefined;
	readonly AutoPublishCodeSha256?: string | undefined;
	readonly CodeSigningConfigArn?: string | undefined;
	readonly CodeUri?: S3Location | string | undefined;
	readonly DeadLetterQueue?: DeadLetterQueue | undefined;
	readonly DeploymentPreference?: DeploymentPreference | undefined;
	readonly Description?: string | undefined;
	readonly Environment?: FunctionEnvironment | undefined;
	readonly EventInvokeConfig?: EventInvokeConfig | undefined;
	readonly Events?: { [key: string]: EventSource } | undefined;
	readonly FileSystemConfigs?: FileSystemConfig[] | undefined;
	readonly FunctionName?: string | undefined;
	readonly Handler?: string | undefined;
	readonly ImageConfig?: ImageConfig | undefined;
	readonly ImageUri?: string | undefined;
	readonly InlineCode?: string | undefined;
	readonly KmsKeyArn?: string | undefined;
	readonly Layers?: string[] | undefined;
	readonly MemorySize?: number | undefined;
	readonly PackageType?: string | undefined;
	readonly PermissionsBoundary?: string | undefined;
	readonly Policies?: Array<SAMPolicyTemplate | string> | IAMPolicyDocument | string | undefined;
	readonly ProvisionedConcurrencyConfig?: ProvisionedConcurrencyConfig | undefined;
	readonly ReservedConcurrentExecutions?: number | undefined;
	readonly Role?: string | undefined;
	readonly Runtime?: string | undefined;
	readonly Tags?: { [key: string]: string } | undefined;
	readonly Timeout?: number | undefined;
	readonly Tracing?: string | undefined;
	readonly VersionDescription?: string | undefined;
	readonly VpcConfig?: VpcConfig | undefined;
	readonly LogicalId: string;
}
export class HttpApi extends CfnResource<HttpApiComponentInputs> implements HttpApiComponentOutputs {
	constructor(entity: ADKEntity, options: HttpApiComponentInputs) {
		super(entity, options.LogicalId, "AWS::Serverless::HttpApi", options);
	}
}
export interface HttpApiComponentOutputs {}
export interface HttpApiComponentInputs {
	readonly AccessLogSetting?: AccessLogSetting | undefined;
	readonly Auth?: HttpApiAuth | undefined;
	readonly CorsConfiguration?: CorsConfigurationObject | boolean | undefined;
	readonly DefaultRouteSettings?: RouteSettings | undefined;
	readonly DefinitionBody?: any | undefined;
	readonly DefinitionUri?: S3Location | string | undefined;
	readonly Description?: string | undefined;
	readonly DisableExecuteApiEndpoint?: boolean | undefined;
	readonly Domain?: HttpApiDomainConfiguration | undefined;
	readonly FailOnWarnings?: boolean | undefined;
	readonly RouteSettings?: RouteSettings | undefined;
	readonly StageName?: string | undefined;
	readonly StageVariables?: { [key: string]: string } | undefined;
	readonly Tags?: { [key: string]: string } | undefined;
	readonly LogicalId: string;
}
export class LayerVersion extends CfnResource<LayerVersionComponentInputs> implements LayerVersionComponentOutputs {
	constructor(entity: ADKEntity, options: LayerVersionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Serverless::LayerVersion", options);
	}
}
export interface LayerVersionComponentOutputs {}
export interface LayerVersionComponentInputs {
	readonly CompatibleRuntimes?: string[] | undefined;
	readonly ContentUri?: S3Location | string | undefined;
	readonly Description?: string | undefined;
	readonly LayerName?: string | undefined;
	readonly LicenseInfo?: string | undefined;
	readonly RetentionPolicy?: string | undefined;
	readonly LogicalId: string;
}
export class SimpleTable extends CfnResource<SimpleTableComponentInputs> implements SimpleTableComponentOutputs {
	constructor(entity: ADKEntity, options: SimpleTableComponentInputs) {
		super(entity, options.LogicalId, "AWS::Serverless::SimpleTable", options);
	}
}
export interface SimpleTableComponentOutputs {}
export interface SimpleTableComponentInputs {
	readonly PrimaryKey?: PrimaryKey | undefined;
	readonly ProvisionedThroughput?: ProvisionedThroughput | undefined;
	readonly SSESpecification?: SSESpecification | undefined;
	readonly TableName?: string | undefined;
	readonly Tags?: { [key: string]: string } | undefined;
	readonly LogicalId: string;
}
export class StateMachine extends CfnResource<StateMachineComponentInputs> implements StateMachineComponentOutputs {
	constructor(entity: ADKEntity, options: StateMachineComponentInputs) {
		super(entity, options.LogicalId, "AWS::Serverless::StateMachine", options);
	}
}
export interface StateMachineComponentOutputs {}
export interface StateMachineComponentInputs {
	readonly Definition?: any | undefined;
	readonly DefinitionSubstitutions?: { [key: string]: string } | undefined;
	readonly DefinitionUri?: S3Location | string | undefined;
	readonly Events?: { [key: string]: EventSource } | undefined;
	readonly Logging?: LoggingConfiguration | undefined;
	readonly Name?: string | undefined;
	readonly PermissionsBoundaries?: string | undefined;
	readonly Policies?: Array<SAMPolicyTemplate | string> | IAMPolicyDocument | string | undefined;
	readonly Role?: string | undefined;
	readonly Tags?: { [key: string]: string } | undefined;
	readonly Tracing?: TracingConfiguration | undefined;
	readonly Type?: string | undefined;
	readonly LogicalId: string;
}
export interface AccessLogSetting {
	readonly DestinationArn?: string | undefined;
	readonly Format?: string | undefined;
}
export interface Auth {
	readonly AddDefaultAuthorizerToCorsPreflight?: boolean | undefined;
	readonly Authorizers?: any | undefined;
	readonly DefaultAuthorizer?: string | undefined;
}
export interface CanarySetting {
	readonly DeploymentId?: string | undefined;
	readonly PercentTraffic?: number | undefined;
	readonly StageVariableOverrides?: { [key: string]: string } | undefined;
	readonly UseStageCache?: boolean | undefined;
}
export interface CorsConfiguration {
	readonly AllowCredentials?: boolean | undefined;
	readonly AllowHeaders?: string | undefined;
	readonly AllowMethods?: string | undefined;
	readonly AllowOrigin: string;
	readonly MaxAge?: string | undefined;
}
export interface DomainConfiguration {
	readonly BasePath?: string[] | undefined;
	readonly CertificateArn: string;
	readonly DomainName: string;
	readonly EndpointConfiguration?: string | undefined;
	readonly MutualTlsAuthentication?: MutualTlsAuthentication | undefined;
	readonly OwnershipVerificationCertificateArn?: string | undefined;
	readonly Route53?: Route53Configuration | undefined;
	readonly SecurityPolicy?: string | undefined;
}
export interface EndpointConfiguration {
	readonly Type?: string | undefined;
	readonly VpcEndpointIds?: string[] | undefined;
}
export interface MutualTlsAuthentication {
	readonly TruststoreUri?: string | undefined;
	readonly TruststoreVersion?: string | undefined;
}
export interface Route53Configuration {
	readonly DistributedDomainName?: string | undefined;
	readonly EvaluateTargetHealth?: boolean | undefined;
	readonly HostedZoneId?: string | undefined;
	readonly HostedZoneName?: string | undefined;
	readonly IpV6?: boolean | undefined;
}
export interface S3Location {
	readonly Bucket: string;
	readonly Key: string;
	readonly Version: number;
}
export interface ApplicationLocation {
	readonly ApplicationId: string;
	readonly SemanticVersion: string;
}
export interface AlexaSkillEvent {
	readonly Variables?: { [key: string]: string } | undefined;
}
export interface ApiEvent {
	readonly Auth?: Auth | undefined;
	readonly Method: string;
	readonly Path: string;
	readonly RequestModel?: RequestModel | undefined;
	readonly RequestParameters?: Array<RequestParameter | string> | undefined;
	readonly RestApiId?: string | undefined;
}
export interface AuthResourcePolicy {
	readonly AwsAccountBlacklist?: string[] | undefined;
	readonly AwsAccountWhitelist?: string[] | undefined;
	readonly CustomStatements?: any[] | undefined;
	readonly IntrinsicVpcBlacklist?: string[] | undefined;
	readonly IntrinsicVpcWhitelist?: string[] | undefined;
	readonly IntrinsicVpceBlacklist?: string[] | undefined;
	readonly IntrinsicVpceWhitelist?: string[] | undefined;
	readonly IpRangeBlacklist?: string[] | undefined;
	readonly IpRangeWhitelist?: string[] | undefined;
	readonly SourceVpcBlacklist?: string[] | undefined;
	readonly SourceVpcWhitelist?: string[] | undefined;
}
export interface BucketSAMPT {
	readonly BucketName: string;
}
export interface CloudWatchEventEvent {
	readonly Input?: string | undefined;
	readonly InputPath?: string | undefined;
	readonly Pattern: any;
}
export interface CloudWatchLogsEvent {
	readonly FilterPattern: string;
	readonly LogGroupName: string;
}
export interface CollectionSAMPT {
	readonly CollectionId: string;
}
export interface DeadLetterQueue {
	readonly TargetArn: string;
	readonly Type: string;
}
export interface DeploymentPreference {
	readonly Alarms?: string[] | undefined;
	readonly Enabled: boolean;
	readonly Hooks?: Hooks | undefined;
	readonly Type: string;
}
export interface Destination {
	readonly Destination: string;
	readonly Type?: string | undefined;
}
export interface DestinationConfig {
	readonly OnFailure: Destination;
}
export interface DomainSAMPT {
	readonly DomainName: string;
}
export interface DynamoDBEvent {
	readonly BatchSize?: number | undefined;
	readonly BisectBatchOnFunctionError?: boolean | undefined;
	readonly DestinationConfig?: DestinationConfig | undefined;
	readonly Enabled?: boolean | undefined;
	readonly MaximumBatchingWindowInSeconds?: number | undefined;
	readonly MaximumRecordAgeInSeconds?: number | undefined;
	readonly MaximumRetryAttempts?: number | undefined;
	readonly ParallelizationFactor?: number | undefined;
	readonly StartingPosition: string;
	readonly Stream: string;
}
export interface EmptySAMPT {}
export interface EventBridgeRuleEvent {
	readonly EventBusName?: string | undefined;
	readonly Input?: string | undefined;
	readonly InputPath?: string | undefined;
	readonly Pattern: any;
}
export interface EventInvokeConfig {
	readonly DestinationConfig?: EventInvokeDestinationConfig | undefined;
	readonly MaximumEventAgeInSeconds?: number | undefined;
	readonly MaximumRetryAttempts?: number | undefined;
}
export interface EventInvokeDestinationConfig {
	readonly OnFailure: Destination;
	readonly OnSuccess: Destination;
}
export interface EventSource {
	readonly Properties: EventBridgeRuleEvent;
	readonly Type: string;
}
export interface FileSystemConfig {
	readonly Arn?: string | undefined;
	readonly LocalMountPath?: string | undefined;
}
export interface FunctionEnvironment {
	readonly Variables: { [key: string]: string };
}
export interface FunctionSAMPT {
	readonly FunctionName: string;
}
export interface Hooks {
	readonly PostTraffic?: string | undefined;
	readonly PreTraffic?: string | undefined;
}
export interface IAMPolicyDocument {
	readonly Statement: any;
	readonly Version?: string | undefined;
}
export interface IdentitySAMPT {
	readonly IdentityName: string;
}
export interface ImageConfig {
	readonly Command?: string[] | undefined;
	readonly EntryPoint?: string[] | undefined;
	readonly WorkingDirectory?: string | undefined;
}
export interface IoTRuleEvent {
	readonly AwsIotSqlVersion?: string | undefined;
	readonly Sql: string;
}
export interface KeySAMPT {
	readonly KeyId: string;
}
export interface KinesisEvent {
	readonly BatchSize?: number | undefined;
	readonly Enabled?: boolean | undefined;
	readonly StartingPosition: string;
	readonly Stream: string;
}
export interface LogGroupSAMPT {
	readonly LogGroupName: string;
}
export interface ParameterNameSAMPT {
	readonly ParameterName: string;
}
export interface ProvisionedConcurrencyConfig {
	readonly ProvisionedConcurrentExecutions: string;
}
export interface QueueSAMPT {
	readonly QueueName: string;
}
export interface RequestModel {
	readonly Model: string;
	readonly Required?: boolean | undefined;
	readonly ValidateBody?: boolean | undefined;
	readonly ValidateParameters?: boolean | undefined;
}
export interface RequestParameter {
	readonly Caching?: boolean | undefined;
	readonly Required?: boolean | undefined;
}
export interface S3Event {
	readonly Bucket: string;
	readonly Events: string[] | string;
	readonly Filter?: S3NotificationFilter | undefined;
}
export interface S3KeyFilter {
	readonly Rules: S3KeyFilterRule[];
}
export interface S3KeyFilterRule {
	readonly Name: string;
	readonly Value: string;
}
export interface S3NotificationFilter {
	readonly S3Key: S3KeyFilter;
}
export interface SAMPolicyTemplate {
	readonly AMIDescribePolicy?: EmptySAMPT | undefined;
	readonly AWSSecretsManagerGetSecretValuePolicy?: SecretArnSAMPT | undefined;
	readonly CloudFormationDescribeStacksPolicy?: EmptySAMPT | undefined;
	readonly CloudWatchPutMetricPolicy?: EmptySAMPT | undefined;
	readonly DynamoDBCrudPolicy?: TableSAMPT | undefined;
	readonly DynamoDBReadPolicy?: TableSAMPT | undefined;
	readonly DynamoDBStreamReadPolicy?: TableStreamSAMPT | undefined;
	readonly DynamoDBWritePolicy?: TableSAMPT | undefined;
	readonly EC2DescribePolicy?: EmptySAMPT | undefined;
	readonly ElasticsearchHttpPostPolicy?: DomainSAMPT | undefined;
	readonly FilterLogEventsPolicy?: LogGroupSAMPT | undefined;
	readonly KMSDecryptPolicy?: KeySAMPT | undefined;
	readonly KinesisCrudPolicy?: StreamSAMPT | undefined;
	readonly KinesisStreamReadPolicy?: StreamSAMPT | undefined;
	readonly LambdaInvokePolicy?: FunctionSAMPT | undefined;
	readonly RekognitionDetectOnlyPolicy?: EmptySAMPT | undefined;
	readonly RekognitionLabelsPolicy?: EmptySAMPT | undefined;
	readonly RekognitionNoDataAccessPolicy?: CollectionSAMPT | undefined;
	readonly RekognitionReadPolicy?: CollectionSAMPT | undefined;
	readonly RekognitionWriteOnlyAccessPolicy?: CollectionSAMPT | undefined;
	readonly S3CrudPolicy?: BucketSAMPT | undefined;
	readonly S3ReadPolicy?: BucketSAMPT | undefined;
	readonly S3WritePolicy?: BucketSAMPT | undefined;
	readonly SESBulkTemplatedCrudPolicy?: IdentitySAMPT | undefined;
	readonly SESCrudPolicy?: IdentitySAMPT | undefined;
	readonly SESEmailTemplateCrudPolicy?: EmptySAMPT | undefined;
	readonly SESSendBouncePolicy?: IdentitySAMPT | undefined;
	readonly SNSCrudPolicy?: TopicSAMPT | undefined;
	readonly SNSPublishMessagePolicy?: TopicSAMPT | undefined;
	readonly SQSPollerPolicy?: QueueSAMPT | undefined;
	readonly SQSSendMessagePolicy?: QueueSAMPT | undefined;
	readonly SSMParameterReadPolicy?: ParameterNameSAMPT | undefined;
	readonly StepFunctionsExecutionPolicy?: StateMachineSAMPT | undefined;
	readonly VPCAccessPolicy?: EmptySAMPT | undefined;
}
export interface SNSEvent {
	readonly Topic: string;
}
export interface SQSEvent {
	readonly BatchSize?: number | undefined;
	readonly Enabled?: boolean | undefined;
	readonly Queue: string;
}
export interface ScheduleEvent {
	readonly Description?: string | undefined;
	readonly Enabled?: boolean | undefined;
	readonly Input?: string | undefined;
	readonly Name?: string | undefined;
	readonly Schedule: string;
}
export interface SecretArnSAMPT {
	readonly SecretArn: string;
}
export interface StateMachineSAMPT {
	readonly StateMachineName: string;
}
export interface StreamSAMPT {
	readonly StreamName: string;
}
export interface TableSAMPT {
	readonly TableName: string;
}
export interface TableStreamSAMPT {
	readonly StreamName: string;
	readonly TableName: string;
}
export interface TopicSAMPT {
	readonly TopicName: string;
}
export interface VpcConfig {
	readonly SecurityGroupIds: string[];
	readonly SubnetIds: string[];
}
export interface CorsConfigurationObject {
	readonly AllowCredentials?: boolean | undefined;
	readonly AllowHeaders?: string[] | undefined;
	readonly AllowMethods?: string[] | undefined;
	readonly AllowOrigins?: string[] | undefined;
	readonly ExposeHeaders?: string[] | undefined;
	readonly MaxAge?: number | undefined;
}
export interface HttpApiAuth {
	readonly Authorizers?: any | undefined;
	readonly DefaultAuthorizer?: string | undefined;
}
export interface HttpApiDomainConfiguration {
	readonly BasePath?: string | undefined;
	readonly CertificateArn: string;
	readonly DomainName: string;
	readonly EndpointConfiguration?: string | undefined;
	readonly MutualTlsAuthentication?: MutualTlsAuthentication | undefined;
	readonly Route53?: Route53Configuration | undefined;
	readonly SecurityPolicy?: string | undefined;
}
export interface RouteSettings {
	readonly DataTraceEnabled?: boolean | undefined;
	readonly DetailedMetricsEnabled?: boolean | undefined;
	readonly LoggingLevel?: string | undefined;
	readonly ThrottlingBurstLimit?: number | undefined;
	readonly ThrottlingRateLimit?: number | undefined;
}
export interface PrimaryKey {
	readonly Name?: string | undefined;
	readonly Type: string;
}
export interface ProvisionedThroughput {
	readonly ReadCapacityUnits?: number | undefined;
	readonly WriteCapacityUnits: number;
}
export interface SSESpecification {
	readonly SSEEnabled?: boolean | undefined;
}
export interface CloudWatchLogsLogGroup {
	readonly LogGroupArn: string;
}
export interface LogDestination {
	readonly CloudWatchLogsLogGroup: CloudWatchLogsLogGroup;
}
export interface LoggingConfiguration {
	readonly Destinations: LogDestination[];
	readonly IncludeExecutionData: boolean;
	readonly Level: string;
}
export interface TracingConfiguration {
	readonly Enabled?: boolean | undefined;
}
export default {
	Api: Api,
	Application: Application,
	Function: FunctionInstance,
	HttpApi: HttpApi,
	LayerVersion: LayerVersion,
	SimpleTable: SimpleTable,
	StateMachine: StateMachine,
};
