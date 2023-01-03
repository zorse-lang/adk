import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Alias extends CfnResource<AliasComponentInputs> implements AliasComponentOutputs {
	constructor(entity: ADKEntity, options: AliasComponentInputs) {
		super(entity, options.LogicalId, "AWS::Lambda::Alias", options);
	}
}
export interface AliasComponentOutputs {}
export interface AliasComponentInputs {
	readonly FunctionName: string;
	readonly FunctionVersion: string;
	readonly Name: string;
	readonly Description?: (string | undefined) | undefined;
	readonly ProvisionedConcurrencyConfig?: (ProvisionedConcurrencyConfiguration | undefined) | undefined;
	readonly RoutingConfig?: (AliasRoutingConfiguration | undefined) | undefined;
	readonly LogicalId: string;
}
export class CodeSigningConfig
	extends CfnResource<CodeSigningConfigComponentInputs>
	implements CodeSigningConfigComponentOutputs
{
	constructor(entity: ADKEntity, options: CodeSigningConfigComponentInputs) {
		super(entity, options.LogicalId, "AWS::Lambda::CodeSigningConfig", options);
	}
	public readonly CodeSigningConfigArn: string;
	public readonly CodeSigningConfigId: string;
}
export interface CodeSigningConfigComponentOutputs {
	readonly CodeSigningConfigArn: string;
	readonly CodeSigningConfigId: string;
}
export interface CodeSigningConfigComponentInputs {
	readonly AllowedPublishers: AllowedPublishers;
	readonly CodeSigningPolicies?: (CodeSigningPolicies | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class EventInvokeConfig
	extends CfnResource<EventInvokeConfigComponentInputs>
	implements EventInvokeConfigComponentOutputs
{
	constructor(entity: ADKEntity, options: EventInvokeConfigComponentInputs) {
		super(entity, options.LogicalId, "AWS::Lambda::EventInvokeConfig", options);
	}
}
export interface EventInvokeConfigComponentOutputs {}
export interface EventInvokeConfigComponentInputs {
	readonly FunctionName: string;
	readonly Qualifier: string;
	readonly DestinationConfig?: (DestinationConfig | undefined) | undefined;
	readonly MaximumEventAgeInSeconds?: (number | undefined) | undefined;
	readonly MaximumRetryAttempts?: (number | undefined) | undefined;
	readonly LogicalId: string;
}
export class EventSourceMapping
	extends CfnResource<EventSourceMappingComponentInputs>
	implements EventSourceMappingComponentOutputs
{
	constructor(entity: ADKEntity, options: EventSourceMappingComponentInputs) {
		super(entity, options.LogicalId, "AWS::Lambda::EventSourceMapping", options);
	}
	public readonly Id: string;
}
export interface EventSourceMappingComponentOutputs {
	readonly Id: string;
}
export interface EventSourceMappingComponentInputs {
	readonly FunctionName: string;
	readonly AmazonManagedKafkaEventSourceConfig?: (AmazonManagedKafkaEventSourceConfig | undefined) | undefined;
	readonly BatchSize?: (number | undefined) | undefined;
	readonly BisectBatchOnFunctionError?: (boolean | undefined) | undefined;
	readonly DestinationConfig?: (DestinationConfig | undefined) | undefined;
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly EventSourceArn?: (string | undefined) | undefined;
	readonly FilterCriteria?: (FilterCriteria | undefined) | undefined;
	readonly FunctionResponseTypes?: (string[] | undefined) | undefined;
	readonly MaximumBatchingWindowInSeconds?: (number | undefined) | undefined;
	readonly MaximumRecordAgeInSeconds?: (number | undefined) | undefined;
	readonly MaximumRetryAttempts?: (number | undefined) | undefined;
	readonly ParallelizationFactor?: (number | undefined) | undefined;
	readonly Queues?: (string[] | undefined) | undefined;
	readonly ScalingConfig?: (ScalingConfig | undefined) | undefined;
	readonly SelfManagedEventSource?: (SelfManagedEventSource | undefined) | undefined;
	readonly SelfManagedKafkaEventSourceConfig?: (SelfManagedKafkaEventSourceConfig | undefined) | undefined;
	readonly SourceAccessConfigurations?: (SourceAccessConfiguration[] | undefined) | undefined;
	readonly StartingPosition?: (string | undefined) | undefined;
	readonly StartingPositionTimestamp?: (number | undefined) | undefined;
	readonly Topics?: (string[] | undefined) | undefined;
	readonly TumblingWindowInSeconds?: (number | undefined) | undefined;
	readonly LogicalId: string;
}
export class FunctionInstance extends CfnResource<FunctionComponentInputs> implements FunctionComponentOutputs {
	constructor(entity: ADKEntity, options: FunctionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Lambda::Function", options);
	}
	public readonly Arn: string;
	public readonly SnapStartResponseApplyOn: string;
	public readonly SnapStartResponseOptimizationStatus: string;
}
export interface FunctionComponentOutputs {
	readonly Arn: string;
	readonly SnapStartResponseApplyOn: string;
	readonly SnapStartResponseOptimizationStatus: string;
}
export interface FunctionComponentInputs {
	readonly Code: Code;
	readonly Role: string;
	readonly Architectures?: (string[] | undefined) | undefined;
	readonly CodeSigningConfigArn?: (string | undefined) | undefined;
	readonly DeadLetterConfig?: (DeadLetterConfig | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly Environment?: (Environment | undefined) | undefined;
	readonly EphemeralStorage?: (EphemeralStorage | undefined) | undefined;
	readonly FileSystemConfigs?: (FileSystemConfig[] | undefined) | undefined;
	readonly FunctionName?: (string | undefined) | undefined;
	readonly Handler?: (string | undefined) | undefined;
	readonly ImageConfig?: (ImageConfig | undefined) | undefined;
	readonly KmsKeyArn?: (string | undefined) | undefined;
	readonly Layers?: (string[] | undefined) | undefined;
	readonly MemorySize?: (number | undefined) | undefined;
	readonly PackageType?: (string | undefined) | undefined;
	readonly ReservedConcurrentExecutions?: (number | undefined) | undefined;
	readonly Runtime?: (string | undefined) | undefined;
	readonly SnapStart?: (SnapStart | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly Timeout?: (number | undefined) | undefined;
	readonly TracingConfig?: (TracingConfig | undefined) | undefined;
	readonly VpcConfig?: (VpcConfig | undefined) | undefined;
	readonly LogicalId: string;
}
export class LayerVersion extends CfnResource<LayerVersionComponentInputs> implements LayerVersionComponentOutputs {
	constructor(entity: ADKEntity, options: LayerVersionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Lambda::LayerVersion", options);
	}
}
export interface LayerVersionComponentOutputs {}
export interface LayerVersionComponentInputs {
	readonly Content: Content;
	readonly CompatibleArchitectures?: (string[] | undefined) | undefined;
	readonly CompatibleRuntimes?: (string[] | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly LayerName?: (string | undefined) | undefined;
	readonly LicenseInfo?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class LayerVersionPermission
	extends CfnResource<LayerVersionPermissionComponentInputs>
	implements LayerVersionPermissionComponentOutputs
{
	constructor(entity: ADKEntity, options: LayerVersionPermissionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Lambda::LayerVersionPermission", options);
	}
}
export interface LayerVersionPermissionComponentOutputs {}
export interface LayerVersionPermissionComponentInputs {
	readonly Action: string;
	readonly LayerVersionArn: string;
	readonly Principal: string;
	readonly OrganizationId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class Permission extends CfnResource<PermissionComponentInputs> implements PermissionComponentOutputs {
	constructor(entity: ADKEntity, options: PermissionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Lambda::Permission", options);
	}
}
export interface PermissionComponentOutputs {}
export interface PermissionComponentInputs {
	readonly Action: string;
	readonly FunctionName: string;
	readonly Principal: string;
	readonly EventSourceToken?: (string | undefined) | undefined;
	readonly FunctionUrlAuthType?: (string | undefined) | undefined;
	readonly PrincipalOrgID?: (string | undefined) | undefined;
	readonly SourceAccount?: (string | undefined) | undefined;
	readonly SourceArn?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class Url extends CfnResource<UrlComponentInputs> implements UrlComponentOutputs {
	constructor(entity: ADKEntity, options: UrlComponentInputs) {
		super(entity, options.LogicalId, "AWS::Lambda::Url", options);
	}
	public readonly FunctionArn: string;
	public readonly FunctionUrl: string;
}
export interface UrlComponentOutputs {
	readonly FunctionArn: string;
	readonly FunctionUrl: string;
}
export interface UrlComponentInputs {
	readonly AuthType: string;
	readonly TargetFunctionArn: string;
	readonly Cors?: (Cors | undefined) | undefined;
	readonly InvokeMode?: (string | undefined) | undefined;
	readonly Qualifier?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class Version extends CfnResource<VersionComponentInputs> implements VersionComponentOutputs {
	constructor(entity: ADKEntity, options: VersionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Lambda::Version", options);
	}
	public readonly Version: string;
}
export interface VersionComponentOutputs {
	readonly Version: string;
}
export interface VersionComponentInputs {
	readonly FunctionName: string;
	readonly CodeSha256?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly ProvisionedConcurrencyConfig?: (ProvisionedConcurrencyConfiguration | undefined) | undefined;
	readonly LogicalId: string;
}
export interface AliasRoutingConfiguration {
	readonly AdditionalVersionWeights: VersionWeight[];
}
export interface ProvisionedConcurrencyConfiguration {
	readonly ProvisionedConcurrentExecutions: number;
}
export interface VersionWeight {
	readonly FunctionVersion: string;
	readonly FunctionWeight: number;
}
export interface AllowedPublishers {
	readonly SigningProfileVersionArns: string[];
}
export interface CodeSigningPolicies {
	readonly UntrustedArtifactOnDeployment: string;
}
export interface DestinationConfig {
	readonly OnFailure?: (OnFailure | undefined) | undefined;
	readonly OnSuccess?: (OnSuccess | undefined) | undefined;
}
export interface OnFailure {
	readonly Destination: string;
}
export interface OnSuccess {
	readonly Destination: string;
}
export interface AmazonManagedKafkaEventSourceConfig {
	readonly ConsumerGroupId?: (string | undefined) | undefined;
}
export interface Endpoints {
	readonly KafkaBootstrapServers?: (string[] | undefined) | undefined;
}
export interface Filter {
	readonly Pattern?: (string | undefined) | undefined;
}
export interface FilterCriteria {
	readonly Filters?: (Filter[] | undefined) | undefined;
}
export interface ScalingConfig {
	readonly MaximumConcurrency?: (number | undefined) | undefined;
}
export interface SelfManagedEventSource {
	readonly Endpoints?: (Endpoints | undefined) | undefined;
}
export interface SelfManagedKafkaEventSourceConfig {
	readonly ConsumerGroupId?: (string | undefined) | undefined;
}
export interface SourceAccessConfiguration {
	readonly Type?: (string | undefined) | undefined;
	readonly URI?: (string | undefined) | undefined;
}
export interface Code {
	readonly ImageUri?: (string | undefined) | undefined;
	readonly S3Bucket?: (string | undefined) | undefined;
	readonly S3Key?: (string | undefined) | undefined;
	readonly S3ObjectVersion?: (string | undefined) | undefined;
	readonly ZipFile?: (string | undefined) | undefined;
}
export interface DeadLetterConfig {
	readonly TargetArn?: (string | undefined) | undefined;
}
export interface Environment {
	readonly Variables?: ({ [key: string]: string } | undefined) | undefined;
}
export interface EphemeralStorage {
	readonly Size: number;
}
export interface FileSystemConfig {
	readonly Arn: string;
	readonly LocalMountPath: string;
}
export interface ImageConfig {
	readonly Command?: (string[] | undefined) | undefined;
	readonly EntryPoint?: (string[] | undefined) | undefined;
	readonly WorkingDirectory?: (string | undefined) | undefined;
}
export interface SnapStart {
	readonly ApplyOn: string;
}
export interface SnapStartResponse {
	readonly ApplyOn?: (string | undefined) | undefined;
	readonly OptimizationStatus?: (string | undefined) | undefined;
}
export interface TracingConfig {
	readonly Mode?: (string | undefined) | undefined;
}
export interface VpcConfig {
	readonly SecurityGroupIds?: (string[] | undefined) | undefined;
	readonly SubnetIds?: (string[] | undefined) | undefined;
}
export interface Content {
	readonly S3Bucket: string;
	readonly S3Key: string;
	readonly S3ObjectVersion?: (string | undefined) | undefined;
}
export interface Cors {
	readonly AllowCredentials?: (boolean | undefined) | undefined;
	readonly AllowHeaders?: (string[] | undefined) | undefined;
	readonly AllowMethods?: (string[] | undefined) | undefined;
	readonly AllowOrigins?: (string[] | undefined) | undefined;
	readonly ExposeHeaders?: (string[] | undefined) | undefined;
	readonly MaxAge?: (number | undefined) | undefined;
}
export default {
	Alias: Alias,
	CodeSigningConfig: CodeSigningConfig,
	EventInvokeConfig: EventInvokeConfig,
	EventSourceMapping: EventSourceMapping,
	Function: FunctionInstance,
	LayerVersion: LayerVersion,
	LayerVersionPermission: LayerVersionPermission,
	Permission: Permission,
	Url: Url,
	Version: Version,
};
