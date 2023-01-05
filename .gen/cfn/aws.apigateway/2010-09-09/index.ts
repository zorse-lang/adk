import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Account extends CfnResource<AccountComponentInputs> implements AccountComponentOutputs {
	constructor(entity: ADKEntity, options: AccountComponentInputs) {
		super(entity, options.LogicalId, "AWS::ApiGateway::Account", options);
	}
	public readonly Id: string;
}
export interface AccountComponentOutputs {
	readonly Id: string;
}
export interface AccountComponentInputs {
	readonly CloudWatchRoleArn?: string | undefined;
	readonly LogicalId: string;
}
export class ApiKey extends CfnResource<ApiKeyComponentInputs> implements ApiKeyComponentOutputs {
	constructor(entity: ADKEntity, options: ApiKeyComponentInputs) {
		super(entity, options.LogicalId, "AWS::ApiGateway::ApiKey", options);
	}
	public readonly ApiKeyId: string;
}
export interface ApiKeyComponentOutputs {
	readonly ApiKeyId: string;
}
export interface ApiKeyComponentInputs {
	readonly CustomerId?: string | undefined;
	readonly Description?: string | undefined;
	readonly Enabled?: boolean | undefined;
	readonly GenerateDistinctId?: boolean | undefined;
	readonly Name?: string | undefined;
	readonly StageKeys?: StageKey[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly Value?: string | undefined;
	readonly LogicalId: string;
}
export class Authorizer extends CfnResource<AuthorizerComponentInputs> implements AuthorizerComponentOutputs {
	constructor(entity: ADKEntity, options: AuthorizerComponentInputs) {
		super(entity, options.LogicalId, "AWS::ApiGateway::Authorizer", options);
	}
	public readonly AuthorizerId: string;
}
export interface AuthorizerComponentOutputs {
	readonly AuthorizerId: string;
}
export interface AuthorizerComponentInputs {
	readonly Name: string;
	readonly RestApiId: string;
	readonly Type: string;
	readonly AuthorizerCredentials?: string | undefined;
	readonly AuthorizerResultTtlInSeconds?: number | undefined;
	readonly AuthorizerUri?: string | undefined;
	readonly AuthType?: string | undefined;
	readonly IdentitySource?: string | undefined;
	readonly IdentityValidationExpression?: string | undefined;
	readonly ProviderARNs?: string[] | undefined;
	readonly LogicalId: string;
}
export class BasePathMapping
	extends CfnResource<BasePathMappingComponentInputs>
	implements BasePathMappingComponentOutputs
{
	constructor(entity: ADKEntity, options: BasePathMappingComponentInputs) {
		super(entity, options.LogicalId, "AWS::ApiGateway::BasePathMapping", options);
	}
}
export interface BasePathMappingComponentOutputs {}
export interface BasePathMappingComponentInputs {
	readonly DomainName: string;
	readonly BasePath?: string | undefined;
	readonly Id?: string | undefined;
	readonly RestApiId?: string | undefined;
	readonly Stage?: string | undefined;
	readonly LogicalId: string;
}
export class ClientCertificate
	extends CfnResource<ClientCertificateComponentInputs>
	implements ClientCertificateComponentOutputs
{
	constructor(entity: ADKEntity, options: ClientCertificateComponentInputs) {
		super(entity, options.LogicalId, "AWS::ApiGateway::ClientCertificate", options);
	}
	public readonly ClientCertificateId: string;
}
export interface ClientCertificateComponentOutputs {
	readonly ClientCertificateId: string;
}
export interface ClientCertificateComponentInputs {
	readonly Description?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Deployment extends CfnResource<DeploymentComponentInputs> implements DeploymentComponentOutputs {
	constructor(entity: ADKEntity, options: DeploymentComponentInputs) {
		super(entity, options.LogicalId, "AWS::ApiGateway::Deployment", options);
	}
	public readonly DeploymentId: string;
}
export interface DeploymentComponentOutputs {
	readonly DeploymentId: string;
}
export interface DeploymentComponentInputs {
	readonly RestApiId: string;
	readonly DeploymentCanarySettings?: DeploymentCanarySettings | undefined;
	readonly Description?: string | undefined;
	readonly StageDescription?: StageDescription | undefined;
	readonly StageName?: string | undefined;
	readonly LogicalId: string;
}
export class DocumentationPart
	extends CfnResource<DocumentationPartComponentInputs>
	implements DocumentationPartComponentOutputs
{
	constructor(entity: ADKEntity, options: DocumentationPartComponentInputs) {
		super(entity, options.LogicalId, "AWS::ApiGateway::DocumentationPart", options);
	}
	public readonly DocumentationPartId: string;
}
export interface DocumentationPartComponentOutputs {
	readonly DocumentationPartId: string;
}
export interface DocumentationPartComponentInputs {
	readonly Location: Location;
	readonly Properties: string;
	readonly RestApiId: string;
	readonly LogicalId: string;
}
export class DocumentationVersion
	extends CfnResource<DocumentationVersionComponentInputs>
	implements DocumentationVersionComponentOutputs
{
	constructor(entity: ADKEntity, options: DocumentationVersionComponentInputs) {
		super(entity, options.LogicalId, "AWS::ApiGateway::DocumentationVersion", options);
	}
}
export interface DocumentationVersionComponentOutputs {}
export interface DocumentationVersionComponentInputs {
	readonly DocumentationVersion: string;
	readonly RestApiId: string;
	readonly Description?: string | undefined;
	readonly LogicalId: string;
}
export class DomainName extends CfnResource<DomainNameComponentInputs> implements DomainNameComponentOutputs {
	constructor(entity: ADKEntity, options: DomainNameComponentInputs) {
		super(entity, options.LogicalId, "AWS::ApiGateway::DomainName", options);
	}
	public readonly DistributionDomainName: string;
	public readonly DistributionHostedZoneId: string;
	public readonly RegionalDomainName: string;
	public readonly RegionalHostedZoneId: string;
}
export interface DomainNameComponentOutputs {
	readonly DistributionDomainName: string;
	readonly DistributionHostedZoneId: string;
	readonly RegionalDomainName: string;
	readonly RegionalHostedZoneId: string;
}
export interface DomainNameComponentInputs {
	readonly CertificateArn?: string | undefined;
	readonly DomainName?: string | undefined;
	readonly EndpointConfiguration?: EndpointConfiguration | undefined;
	readonly MutualTlsAuthentication?: MutualTlsAuthentication | undefined;
	readonly OwnershipVerificationCertificateArn?: string | undefined;
	readonly RegionalCertificateArn?: string | undefined;
	readonly SecurityPolicy?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class GatewayResponse
	extends CfnResource<GatewayResponseComponentInputs>
	implements GatewayResponseComponentOutputs
{
	constructor(entity: ADKEntity, options: GatewayResponseComponentInputs) {
		super(entity, options.LogicalId, "AWS::ApiGateway::GatewayResponse", options);
	}
	public readonly Id: string;
}
export interface GatewayResponseComponentOutputs {
	readonly Id: string;
}
export interface GatewayResponseComponentInputs {
	readonly ResponseType: string;
	readonly RestApiId: string;
	readonly ResponseParameters?: { [key: string]: string } | undefined;
	readonly ResponseTemplates?: { [key: string]: string } | undefined;
	readonly StatusCode?: string | undefined;
	readonly LogicalId: string;
}
export class Method extends CfnResource<MethodComponentInputs> implements MethodComponentOutputs {
	constructor(entity: ADKEntity, options: MethodComponentInputs) {
		super(entity, options.LogicalId, "AWS::ApiGateway::Method", options);
	}
}
export interface MethodComponentOutputs {}
export interface MethodComponentInputs {
	readonly HttpMethod: string;
	readonly ResourceId: string;
	readonly RestApiId: string;
	readonly ApiKeyRequired?: boolean | undefined;
	readonly AuthorizationScopes?: string[] | undefined;
	readonly AuthorizationType?: string | undefined;
	readonly AuthorizerId?: string | undefined;
	readonly Integration?: Integration | undefined;
	readonly MethodResponses?: MethodResponse[] | undefined;
	readonly OperationName?: string | undefined;
	readonly RequestModels?: { [key: string]: string } | undefined;
	readonly RequestParameters?: { [key: string]: boolean } | undefined;
	readonly RequestValidatorId?: string | undefined;
	readonly LogicalId: string;
}
export class Model extends CfnResource<ModelComponentInputs> implements ModelComponentOutputs {
	constructor(entity: ADKEntity, options: ModelComponentInputs) {
		super(entity, options.LogicalId, "AWS::ApiGateway::Model", options);
	}
}
export interface ModelComponentOutputs {}
export interface ModelComponentInputs {
	readonly RestApiId: string;
	readonly ContentType?: string | undefined;
	readonly Description?: string | undefined;
	readonly Name?: string | undefined;
	readonly Schema?: any | undefined;
	readonly LogicalId: string;
}
export class RequestValidator
	extends CfnResource<RequestValidatorComponentInputs>
	implements RequestValidatorComponentOutputs
{
	constructor(entity: ADKEntity, options: RequestValidatorComponentInputs) {
		super(entity, options.LogicalId, "AWS::ApiGateway::RequestValidator", options);
	}
	public readonly RequestValidatorId: string;
}
export interface RequestValidatorComponentOutputs {
	readonly RequestValidatorId: string;
}
export interface RequestValidatorComponentInputs {
	readonly RestApiId: string;
	readonly Name?: string | undefined;
	readonly ValidateRequestBody?: boolean | undefined;
	readonly ValidateRequestParameters?: boolean | undefined;
	readonly LogicalId: string;
}
export class Resource extends CfnResource<ResourceComponentInputs> implements ResourceComponentOutputs {
	constructor(entity: ADKEntity, options: ResourceComponentInputs) {
		super(entity, options.LogicalId, "AWS::ApiGateway::Resource", options);
	}
	public readonly ResourceId: string;
}
export interface ResourceComponentOutputs {
	readonly ResourceId: string;
}
export interface ResourceComponentInputs {
	readonly ParentId: string;
	readonly PathPart: string;
	readonly RestApiId: string;
	readonly LogicalId: string;
}
export class RestApi extends CfnResource<RestApiComponentInputs> implements RestApiComponentOutputs {
	constructor(entity: ADKEntity, options: RestApiComponentInputs) {
		super(entity, options.LogicalId, "AWS::ApiGateway::RestApi", options);
	}
	public readonly RestApiId: string;
	public readonly RootResourceId: string;
}
export interface RestApiComponentOutputs {
	readonly RestApiId: string;
	readonly RootResourceId: string;
}
export interface RestApiComponentInputs {
	readonly ApiKeySourceType?: string | undefined;
	readonly BinaryMediaTypes?: string[] | undefined;
	readonly Body?: any | undefined;
	readonly BodyS3Location?: S3Location | undefined;
	readonly CloneFrom?: string | undefined;
	readonly Description?: string | undefined;
	readonly DisableExecuteApiEndpoint?: boolean | undefined;
	readonly EndpointConfiguration?: EndpointConfiguration | undefined;
	readonly FailOnWarnings?: boolean | undefined;
	readonly MinimumCompressionSize?: number | undefined;
	readonly Mode?: string | undefined;
	readonly Name?: string | undefined;
	readonly Parameters?: { [key: string]: string } | undefined;
	readonly Policy?: any | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Stage extends CfnResource<StageComponentInputs> implements StageComponentOutputs {
	constructor(entity: ADKEntity, options: StageComponentInputs) {
		super(entity, options.LogicalId, "AWS::ApiGateway::Stage", options);
	}
}
export interface StageComponentOutputs {}
export interface StageComponentInputs {
	readonly RestApiId: string;
	readonly AccessLogSetting?: AccessLogSetting | undefined;
	readonly CacheClusterEnabled?: boolean | undefined;
	readonly CacheClusterSize?: string | undefined;
	readonly CanarySetting?: CanarySetting | undefined;
	readonly ClientCertificateId?: string | undefined;
	readonly DeploymentId?: string | undefined;
	readonly Description?: string | undefined;
	readonly DocumentationVersion?: string | undefined;
	readonly MethodSettings?: MethodSetting[] | undefined;
	readonly StageName?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly TracingEnabled?: boolean | undefined;
	readonly Variables?: { [key: string]: string } | undefined;
	readonly LogicalId: string;
}
export class UsagePlan extends CfnResource<UsagePlanComponentInputs> implements UsagePlanComponentOutputs {
	constructor(entity: ADKEntity, options: UsagePlanComponentInputs) {
		super(entity, options.LogicalId, "AWS::ApiGateway::UsagePlan", options);
	}
	public readonly Id: string;
}
export interface UsagePlanComponentOutputs {
	readonly Id: string;
}
export interface UsagePlanComponentInputs {
	readonly ApiStages?: ApiStage[] | undefined;
	readonly Description?: string | undefined;
	readonly Quota?: QuotaSettings | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly Throttle?: ThrottleSettings | undefined;
	readonly UsagePlanName?: string | undefined;
	readonly LogicalId: string;
}
export class UsagePlanKey extends CfnResource<UsagePlanKeyComponentInputs> implements UsagePlanKeyComponentOutputs {
	constructor(entity: ADKEntity, options: UsagePlanKeyComponentInputs) {
		super(entity, options.LogicalId, "AWS::ApiGateway::UsagePlanKey", options);
	}
	public readonly Id: string;
}
export interface UsagePlanKeyComponentOutputs {
	readonly Id: string;
}
export interface UsagePlanKeyComponentInputs {
	readonly KeyId: string;
	readonly KeyType: string;
	readonly UsagePlanId: string;
	readonly LogicalId: string;
}
export class VpcLink extends CfnResource<VpcLinkComponentInputs> implements VpcLinkComponentOutputs {
	constructor(entity: ADKEntity, options: VpcLinkComponentInputs) {
		super(entity, options.LogicalId, "AWS::ApiGateway::VpcLink", options);
	}
}
export interface VpcLinkComponentOutputs {}
export interface VpcLinkComponentInputs {
	readonly Name: string;
	readonly TargetArns: string[];
	readonly Description?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface StageKey {
	readonly RestApiId?: string | undefined;
	readonly StageName?: string | undefined;
}
export interface AccessLogSetting {
	readonly DestinationArn?: string | undefined;
	readonly Format?: string | undefined;
}
export interface CanarySetting {
	readonly PercentTraffic?: number | undefined;
	readonly StageVariableOverrides?: { [key: string]: string } | undefined;
	readonly UseStageCache?: boolean | undefined;
}
export interface DeploymentCanarySettings {
	readonly PercentTraffic?: number | undefined;
	readonly StageVariableOverrides?: { [key: string]: string } | undefined;
	readonly UseStageCache?: boolean | undefined;
}
export interface MethodSetting {
	readonly CacheDataEncrypted?: boolean | undefined;
	readonly CacheTtlInSeconds?: number | undefined;
	readonly CachingEnabled?: boolean | undefined;
	readonly DataTraceEnabled?: boolean | undefined;
	readonly HttpMethod?: string | undefined;
	readonly LoggingLevel?: string | undefined;
	readonly MetricsEnabled?: boolean | undefined;
	readonly ResourcePath?: string | undefined;
	readonly ThrottlingBurstLimit?: number | undefined;
	readonly ThrottlingRateLimit?: number | undefined;
}
export interface StageDescription {
	readonly AccessLogSetting?: AccessLogSetting | undefined;
	readonly CacheClusterEnabled?: boolean | undefined;
	readonly CacheClusterSize?: string | undefined;
	readonly CacheDataEncrypted?: boolean | undefined;
	readonly CacheTtlInSeconds?: number | undefined;
	readonly CachingEnabled?: boolean | undefined;
	readonly CanarySetting?: CanarySetting | undefined;
	readonly ClientCertificateId?: string | undefined;
	readonly DataTraceEnabled?: boolean | undefined;
	readonly Description?: string | undefined;
	readonly DocumentationVersion?: string | undefined;
	readonly LoggingLevel?: string | undefined;
	readonly MethodSettings?: MethodSetting[] | undefined;
	readonly MetricsEnabled?: boolean | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly ThrottlingBurstLimit?: number | undefined;
	readonly ThrottlingRateLimit?: number | undefined;
	readonly TracingEnabled?: boolean | undefined;
	readonly Variables?: { [key: string]: string } | undefined;
}
export interface Location {
	readonly Method?: string | undefined;
	readonly Name?: string | undefined;
	readonly Path?: string | undefined;
	readonly StatusCode?: string | undefined;
	readonly Type?: string | undefined;
}
export interface EndpointConfiguration {
	readonly Types?: string[] | undefined;
}
export interface MutualTlsAuthentication {
	readonly TruststoreUri?: string | undefined;
	readonly TruststoreVersion?: string | undefined;
}
export interface Integration {
	readonly CacheKeyParameters?: string[] | undefined;
	readonly CacheNamespace?: string | undefined;
	readonly ConnectionId?: string | undefined;
	readonly ConnectionType?: string | undefined;
	readonly ContentHandling?: string | undefined;
	readonly Credentials?: string | undefined;
	readonly IntegrationHttpMethod?: string | undefined;
	readonly IntegrationResponses?: IntegrationResponse[] | undefined;
	readonly PassthroughBehavior?: string | undefined;
	readonly RequestParameters?: { [key: string]: string } | undefined;
	readonly RequestTemplates?: { [key: string]: string } | undefined;
	readonly TimeoutInMillis?: number | undefined;
	readonly Type?: string | undefined;
	readonly Uri?: string | undefined;
}
export interface IntegrationResponse {
	readonly ContentHandling?: string | undefined;
	readonly ResponseParameters?: { [key: string]: string } | undefined;
	readonly ResponseTemplates?: { [key: string]: string } | undefined;
	readonly SelectionPattern?: string | undefined;
	readonly StatusCode: string;
}
export interface MethodResponse {
	readonly ResponseModels?: { [key: string]: string } | undefined;
	readonly ResponseParameters?: { [key: string]: boolean } | undefined;
	readonly StatusCode: string;
}
export interface S3Location {
	readonly Bucket?: string | undefined;
	readonly ETag?: string | undefined;
	readonly Key?: string | undefined;
	readonly Version?: string | undefined;
}
export interface ApiStage {
	readonly ApiId?: string | undefined;
	readonly Stage?: string | undefined;
	readonly Throttle?: { [key: string]: ThrottleSettings } | undefined;
}
export interface QuotaSettings {
	readonly Limit?: number | undefined;
	readonly Offset?: number | undefined;
	readonly Period?: string | undefined;
}
export interface ThrottleSettings {
	readonly BurstLimit?: number | undefined;
	readonly RateLimit?: number | undefined;
}
export default {
	Account: Account,
	ApiKey: ApiKey,
	Authorizer: Authorizer,
	BasePathMapping: BasePathMapping,
	ClientCertificate: ClientCertificate,
	Deployment: Deployment,
	DocumentationPart: DocumentationPart,
	DocumentationVersion: DocumentationVersion,
	DomainName: DomainName,
	GatewayResponse: GatewayResponse,
	Method: Method,
	Model: Model,
	RequestValidator: RequestValidator,
	Resource: Resource,
	RestApi: RestApi,
	Stage: Stage,
	UsagePlan: UsagePlan,
	UsagePlanKey: UsagePlanKey,
	VpcLink: VpcLink,
};
