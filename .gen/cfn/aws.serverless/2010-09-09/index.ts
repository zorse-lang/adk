import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Api extends CfnResource<ApiComponentInputs> implements ApiComponentOutputs {
	constructor(entity: ADKEntity, options: ApiComponentInputs) {
		super(entity, options.LogicalId, "AWS::Serverless::Api", options);
	}
}
export interface ApiComponentOutputs {}
export interface ApiComponentInputs {
	readonly StageName: string;
	readonly AccessLogSetting?: (AccessLogSetting | undefined) | undefined;
	readonly Auth?: (Auth | undefined) | undefined;
	readonly BinaryMediaTypes?: (string[] | undefined) | undefined;
	readonly CacheClusterEnabled?: (boolean | undefined) | undefined;
	readonly CacheClusterSize?: (string | undefined) | undefined;
	readonly CanarySetting?: (CanarySetting | undefined) | undefined;
	readonly Cors?: (CorsConfiguration | string | undefined) | undefined;
	readonly DefinitionBody?: (any | undefined) | undefined;
	readonly DefinitionUri?: (S3Location | string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly Domain?: (DomainConfiguration | undefined) | undefined;
	readonly EndpointConfiguration?: (EndpointConfiguration | string | undefined) | undefined;
	readonly GatewayResponses?: (any | undefined) | undefined;
	readonly MethodSettings?: (any[] | undefined) | undefined;
	readonly MinimumCompressionSize?: (number | undefined) | undefined;
	readonly Models?: (any | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly OpenApiVersion?: (string | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
	readonly TracingEnabled?: (boolean | undefined) | undefined;
	readonly Variables?: ({ [key: string]: string } | undefined) | undefined;
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
	readonly NotificationArns?: (string[] | undefined) | undefined;
	readonly Parameters?: ({ [key: string]: string } | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
	readonly TimeoutInMinutes?: (number | undefined) | undefined;
	readonly LogicalId: string;
}
export class FunctionInstance extends CfnResource<FunctionComponentInputs> implements FunctionComponentOutputs {
	constructor(entity: ADKEntity, options: FunctionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Serverless::Function", options);
	}
}
export interface FunctionComponentOutputs {}
export interface FunctionComponentInputs {
	readonly Architectures?: (string[] | undefined) | undefined;
	readonly AssumeRolePolicyDocument?: (any | undefined) | undefined;
	readonly AutoPublishAlias?: (string | undefined) | undefined;
	readonly AutoPublishCodeSha256?: (string | undefined) | undefined;
	readonly CodeSigningConfigArn?: (string | undefined) | undefined;
	readonly CodeUri?: (S3Location | string | undefined) | undefined;
	readonly DeadLetterQueue?: (DeadLetterQueue | undefined) | undefined;
	readonly DeploymentPreference?: (DeploymentPreference | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly Environment?: (FunctionEnvironment | undefined) | undefined;
	readonly EventInvokeConfig?: (EventInvokeConfig | undefined) | undefined;
	readonly Events?: ({ [key: string]: EventSource } | undefined) | undefined;
	readonly FileSystemConfigs?: (FileSystemConfig[] | undefined) | undefined;
	readonly FunctionName?: (string | undefined) | undefined;
	readonly Handler?: (string | undefined) | undefined;
	readonly ImageConfig?: (ImageConfig | undefined) | undefined;
	readonly ImageUri?: (string | undefined) | undefined;
	readonly InlineCode?: (string | undefined) | undefined;
	readonly KmsKeyArn?: (string | undefined) | undefined;
	readonly Layers?: (string[] | undefined) | undefined;
	readonly MemorySize?: (number | undefined) | undefined;
	readonly PackageType?: (string | undefined) | undefined;
	readonly PermissionsBoundary?: (string | undefined) | undefined;
	readonly Policies?: (Array<SAMPolicyTemplate | string> | IAMPolicyDocument | string | undefined) | undefined;
	readonly ProvisionedConcurrencyConfig?: (ProvisionedConcurrencyConfig | undefined) | undefined;
	readonly ReservedConcurrentExecutions?: (number | undefined) | undefined;
	readonly Role?: (string | undefined) | undefined;
	readonly Runtime?: (string | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
	readonly Timeout?: (number | undefined) | undefined;
	readonly Tracing?: (string | undefined) | undefined;
	readonly VersionDescription?: (string | undefined) | undefined;
	readonly VpcConfig?: (VpcConfig | undefined) | undefined;
	readonly LogicalId: string;
}
export class HttpApi extends CfnResource<HttpApiComponentInputs> implements HttpApiComponentOutputs {
	constructor(entity: ADKEntity, options: HttpApiComponentInputs) {
		super(entity, options.LogicalId, "AWS::Serverless::HttpApi", options);
	}
}
export interface HttpApiComponentOutputs {}
export interface HttpApiComponentInputs {
	readonly AccessLogSetting?: (AccessLogSetting | undefined) | undefined;
	readonly Auth?: (HttpApiAuth | undefined) | undefined;
	readonly CorsConfiguration?: (CorsConfigurationObject | boolean | undefined) | undefined;
	readonly DefaultRouteSettings?: (RouteSettings | undefined) | undefined;
	readonly DefinitionBody?: (any | undefined) | undefined;
	readonly DefinitionUri?: (S3Location | string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly DisableExecuteApiEndpoint?: (boolean | undefined) | undefined;
	readonly Domain?: (HttpApiDomainConfiguration | undefined) | undefined;
	readonly FailOnWarnings?: (boolean | undefined) | undefined;
	readonly RouteSettings?: (RouteSettings | undefined) | undefined;
	readonly StageName?: (string | undefined) | undefined;
	readonly StageVariables?: ({ [key: string]: string } | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
	readonly LogicalId: string;
}
export class LayerVersion extends CfnResource<LayerVersionComponentInputs> implements LayerVersionComponentOutputs {
	constructor(entity: ADKEntity, options: LayerVersionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Serverless::LayerVersion", options);
	}
}
export interface LayerVersionComponentOutputs {}
export interface LayerVersionComponentInputs {
	readonly CompatibleRuntimes?: (string[] | undefined) | undefined;
	readonly ContentUri?: (S3Location | string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly LayerName?: (string | undefined) | undefined;
	readonly LicenseInfo?: (string | undefined) | undefined;
	readonly RetentionPolicy?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class SimpleTable extends CfnResource<SimpleTableComponentInputs> implements SimpleTableComponentOutputs {
	constructor(entity: ADKEntity, options: SimpleTableComponentInputs) {
		super(entity, options.LogicalId, "AWS::Serverless::SimpleTable", options);
	}
}
export interface SimpleTableComponentOutputs {}
export interface SimpleTableComponentInputs {
	readonly PrimaryKey?: (PrimaryKey | undefined) | undefined;
	readonly ProvisionedThroughput?: (ProvisionedThroughput | undefined) | undefined;
	readonly SSESpecification?: (SSESpecification | undefined) | undefined;
	readonly TableName?: (string | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
	readonly LogicalId: string;
}
export class StateMachine extends CfnResource<StateMachineComponentInputs> implements StateMachineComponentOutputs {
	constructor(entity: ADKEntity, options: StateMachineComponentInputs) {
		super(entity, options.LogicalId, "AWS::Serverless::StateMachine", options);
	}
}
export interface StateMachineComponentOutputs {}
export interface StateMachineComponentInputs {
	readonly Definition?: (any | undefined) | undefined;
	readonly DefinitionSubstitutions?: ({ [key: string]: string } | undefined) | undefined;
	readonly DefinitionUri?: (S3Location | string | undefined) | undefined;
	readonly Events?: ({ [key: string]: EventSource } | undefined) | undefined;
	readonly Logging?: (LoggingConfiguration | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly PermissionsBoundaries?: (string | undefined) | undefined;
	readonly Policies?: (Array<SAMPolicyTemplate | string> | IAMPolicyDocument | string | undefined) | undefined;
	readonly Role?: (string | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
	readonly Tracing?: (TracingConfiguration | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface AccessLogSetting {
	readonly DestinationArn?: (string | undefined) | undefined;
	readonly Format?: (string | undefined) | undefined;
}
export interface Auth {
	readonly AddDefaultAuthorizerToCorsPreflight?: (boolean | undefined) | undefined;
	readonly Authorizers?: (any | undefined) | undefined;
	readonly DefaultAuthorizer?: (string | undefined) | undefined;
}
export interface CanarySetting {
	readonly DeploymentId?: (string | undefined) | undefined;
	readonly PercentTraffic?: (number | undefined) | undefined;
	readonly StageVariableOverrides?: ({ [key: string]: string } | undefined) | undefined;
	readonly UseStageCache?: (boolean | undefined) | undefined;
}
export interface CorsConfiguration {
	readonly AllowCredentials?: (boolean | undefined) | undefined;
	readonly AllowHeaders?: (string | undefined) | undefined;
	readonly AllowMethods?: (string | undefined) | undefined;
	readonly AllowOrigin: string;
	readonly MaxAge?: (string | undefined) | undefined;
}
export interface DomainConfiguration {
	readonly BasePath?: (string[] | undefined) | undefined;
	readonly CertificateArn: string;
	readonly DomainName: string;
	readonly EndpointConfiguration?: (string | undefined) | undefined;
	readonly MutualTlsAuthentication?: (MutualTlsAuthentication | undefined) | undefined;
	readonly OwnershipVerificationCertificateArn?: (string | undefined) | undefined;
	readonly Route53?: (Route53Configuration | undefined) | undefined;
	readonly SecurityPolicy?: (string | undefined) | undefined;
}
export interface EndpointConfiguration {
	readonly Type?: (string | undefined) | undefined;
	readonly VpcEndpointIds?: (string[] | undefined) | undefined;
}
export interface MutualTlsAuthentication {
	readonly TruststoreUri?: (string | undefined) | undefined;
	readonly TruststoreVersion?: (string | undefined) | undefined;
}
export interface Route53Configuration {
	readonly DistributedDomainName?: (string | undefined) | undefined;
	readonly EvaluateTargetHealth?: (boolean | undefined) | undefined;
	readonly HostedZoneId?: (string | undefined) | undefined;
	readonly HostedZoneName?: (string | undefined) | undefined;
	readonly IpV6?: (boolean | undefined) | undefined;
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
	readonly Variables?: ({ [key: string]: string } | undefined) | undefined;
}
export interface ApiEvent {
	readonly Auth?: (Auth | undefined) | undefined;
	readonly Method: string;
	readonly Path: string;
	readonly RequestModel?: (RequestModel | undefined) | undefined;
	readonly RequestParameters?: (Array<RequestParameter | string> | undefined) | undefined;
	readonly RestApiId?: (string | undefined) | undefined;
}
export interface AuthResourcePolicy {
	readonly AwsAccountBlacklist?: (string[] | undefined) | undefined;
	readonly AwsAccountWhitelist?: (string[] | undefined) | undefined;
	readonly CustomStatements?: (any[] | undefined) | undefined;
	readonly IntrinsicVpcBlacklist?: (string[] | undefined) | undefined;
	readonly IntrinsicVpcWhitelist?: (string[] | undefined) | undefined;
	readonly IntrinsicVpceBlacklist?: (string[] | undefined) | undefined;
	readonly IntrinsicVpceWhitelist?: (string[] | undefined) | undefined;
	readonly IpRangeBlacklist?: (string[] | undefined) | undefined;
	readonly IpRangeWhitelist?: (string[] | undefined) | undefined;
	readonly SourceVpcBlacklist?: (string[] | undefined) | undefined;
	readonly SourceVpcWhitelist?: (string[] | undefined) | undefined;
}
export interface BucketSAMPT {
	readonly BucketName: string;
}
export interface CloudWatchEventEvent {
	readonly Input?: (string | undefined) | undefined;
	readonly InputPath?: (string | undefined) | undefined;
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
	readonly Alarms?: (string[] | undefined) | undefined;
	readonly Enabled: boolean;
	readonly Hooks?: (Hooks | undefined) | undefined;
	readonly Type: string;
}
export interface Destination {
	readonly Destination: string;
	readonly Type?: (string | undefined) | undefined;
}
export interface DestinationConfig {
	readonly OnFailure: Destination;
}
export interface DomainSAMPT {
	readonly DomainName: string;
}
export interface DynamoDBEvent {
	readonly BatchSize?: (number | undefined) | undefined;
	readonly BisectBatchOnFunctionError?: (boolean | undefined) | undefined;
	readonly DestinationConfig?: (DestinationConfig | undefined) | undefined;
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly MaximumBatchingWindowInSeconds?: (number | undefined) | undefined;
	readonly MaximumRecordAgeInSeconds?: (number | undefined) | undefined;
	readonly MaximumRetryAttempts?: (number | undefined) | undefined;
	readonly ParallelizationFactor?: (number | undefined) | undefined;
	readonly StartingPosition: string;
	readonly Stream: string;
}
export interface EmptySAMPT {}
export interface EventBridgeRuleEvent {
	readonly EventBusName?: (string | undefined) | undefined;
	readonly Input?: (string | undefined) | undefined;
	readonly InputPath?: (string | undefined) | undefined;
	readonly Pattern: any;
}
export interface EventInvokeConfig {
	readonly DestinationConfig?: (EventInvokeDestinationConfig | undefined) | undefined;
	readonly MaximumEventAgeInSeconds?: (number | undefined) | undefined;
	readonly MaximumRetryAttempts?: (number | undefined) | undefined;
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
	readonly Arn?: (string | undefined) | undefined;
	readonly LocalMountPath?: (string | undefined) | undefined;
}
export interface FunctionEnvironment {
	readonly Variables: { [key: string]: string };
}
export interface FunctionSAMPT {
	readonly FunctionName: string;
}
export interface Hooks {
	readonly PostTraffic?: (string | undefined) | undefined;
	readonly PreTraffic?: (string | undefined) | undefined;
}
export interface IAMPolicyDocument {
	readonly Statement: any;
	readonly Version?: (string | undefined) | undefined;
}
export interface IdentitySAMPT {
	readonly IdentityName: string;
}
export interface ImageConfig {
	readonly Command?: (string[] | undefined) | undefined;
	readonly EntryPoint?: (string[] | undefined) | undefined;
	readonly WorkingDirectory?: (string | undefined) | undefined;
}
export interface IoTRuleEvent {
	readonly AwsIotSqlVersion?: (string | undefined) | undefined;
	readonly Sql: string;
}
export interface KeySAMPT {
	readonly KeyId: string;
}
export interface KinesisEvent {
	readonly BatchSize?: (number | undefined) | undefined;
	readonly Enabled?: (boolean | undefined) | undefined;
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
	readonly Required?: (boolean | undefined) | undefined;
	readonly ValidateBody?: (boolean | undefined) | undefined;
	readonly ValidateParameters?: (boolean | undefined) | undefined;
}
export interface RequestParameter {
	readonly Caching?: (boolean | undefined) | undefined;
	readonly Required?: (boolean | undefined) | undefined;
}
export interface S3Event {
	readonly Bucket: string;
	readonly Events: string[] | string;
	readonly Filter?: (S3NotificationFilter | undefined) | undefined;
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
	readonly AMIDescribePolicy?: (EmptySAMPT | undefined) | undefined;
	readonly AWSSecretsManagerGetSecretValuePolicy?: (SecretArnSAMPT | undefined) | undefined;
	readonly CloudFormationDescribeStacksPolicy?: (EmptySAMPT | undefined) | undefined;
	readonly CloudWatchPutMetricPolicy?: (EmptySAMPT | undefined) | undefined;
	readonly DynamoDBCrudPolicy?: (TableSAMPT | undefined) | undefined;
	readonly DynamoDBReadPolicy?: (TableSAMPT | undefined) | undefined;
	readonly DynamoDBStreamReadPolicy?: (TableStreamSAMPT | undefined) | undefined;
	readonly DynamoDBWritePolicy?: (TableSAMPT | undefined) | undefined;
	readonly EC2DescribePolicy?: (EmptySAMPT | undefined) | undefined;
	readonly ElasticsearchHttpPostPolicy?: (DomainSAMPT | undefined) | undefined;
	readonly FilterLogEventsPolicy?: (LogGroupSAMPT | undefined) | undefined;
	readonly KMSDecryptPolicy?: (KeySAMPT | undefined) | undefined;
	readonly KinesisCrudPolicy?: (StreamSAMPT | undefined) | undefined;
	readonly KinesisStreamReadPolicy?: (StreamSAMPT | undefined) | undefined;
	readonly LambdaInvokePolicy?: (FunctionSAMPT | undefined) | undefined;
	readonly RekognitionDetectOnlyPolicy?: (EmptySAMPT | undefined) | undefined;
	readonly RekognitionLabelsPolicy?: (EmptySAMPT | undefined) | undefined;
	readonly RekognitionNoDataAccessPolicy?: (CollectionSAMPT | undefined) | undefined;
	readonly RekognitionReadPolicy?: (CollectionSAMPT | undefined) | undefined;
	readonly RekognitionWriteOnlyAccessPolicy?: (CollectionSAMPT | undefined) | undefined;
	readonly S3CrudPolicy?: (BucketSAMPT | undefined) | undefined;
	readonly S3ReadPolicy?: (BucketSAMPT | undefined) | undefined;
	readonly S3WritePolicy?: (BucketSAMPT | undefined) | undefined;
	readonly SESBulkTemplatedCrudPolicy?: (IdentitySAMPT | undefined) | undefined;
	readonly SESCrudPolicy?: (IdentitySAMPT | undefined) | undefined;
	readonly SESEmailTemplateCrudPolicy?: (EmptySAMPT | undefined) | undefined;
	readonly SESSendBouncePolicy?: (IdentitySAMPT | undefined) | undefined;
	readonly SNSCrudPolicy?: (TopicSAMPT | undefined) | undefined;
	readonly SNSPublishMessagePolicy?: (TopicSAMPT | undefined) | undefined;
	readonly SQSPollerPolicy?: (QueueSAMPT | undefined) | undefined;
	readonly SQSSendMessagePolicy?: (QueueSAMPT | undefined) | undefined;
	readonly SSMParameterReadPolicy?: (ParameterNameSAMPT | undefined) | undefined;
	readonly StepFunctionsExecutionPolicy?: (StateMachineSAMPT | undefined) | undefined;
	readonly VPCAccessPolicy?: (EmptySAMPT | undefined) | undefined;
}
export interface SNSEvent {
	readonly Topic: string;
}
export interface SQSEvent {
	readonly BatchSize?: (number | undefined) | undefined;
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly Queue: string;
}
export interface ScheduleEvent {
	readonly Description?: (string | undefined) | undefined;
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly Input?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
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
	readonly AllowCredentials?: (boolean | undefined) | undefined;
	readonly AllowHeaders?: (string[] | undefined) | undefined;
	readonly AllowMethods?: (string[] | undefined) | undefined;
	readonly AllowOrigins?: (string[] | undefined) | undefined;
	readonly ExposeHeaders?: (string[] | undefined) | undefined;
	readonly MaxAge?: (number | undefined) | undefined;
}
export interface HttpApiAuth {
	readonly Authorizers?: (any | undefined) | undefined;
	readonly DefaultAuthorizer?: (string | undefined) | undefined;
}
export interface HttpApiDomainConfiguration {
	readonly BasePath?: (string | undefined) | undefined;
	readonly CertificateArn: string;
	readonly DomainName: string;
	readonly EndpointConfiguration?: (string | undefined) | undefined;
	readonly MutualTlsAuthentication?: (MutualTlsAuthentication | undefined) | undefined;
	readonly Route53?: (Route53Configuration | undefined) | undefined;
	readonly SecurityPolicy?: (string | undefined) | undefined;
}
export interface RouteSettings {
	readonly DataTraceEnabled?: (boolean | undefined) | undefined;
	readonly DetailedMetricsEnabled?: (boolean | undefined) | undefined;
	readonly LoggingLevel?: (string | undefined) | undefined;
	readonly ThrottlingBurstLimit?: (number | undefined) | undefined;
	readonly ThrottlingRateLimit?: (number | undefined) | undefined;
}
export interface PrimaryKey {
	readonly Name?: (string | undefined) | undefined;
	readonly Type: string;
}
export interface ProvisionedThroughput {
	readonly ReadCapacityUnits?: (number | undefined) | undefined;
	readonly WriteCapacityUnits: number;
}
export interface SSESpecification {
	readonly SSEEnabled?: (boolean | undefined) | undefined;
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
	readonly Enabled?: (boolean | undefined) | undefined;
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
