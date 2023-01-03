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
	readonly CloudWatchRoleArn?: (string | undefined) | undefined;
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
	readonly CustomerId?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly GenerateDistinctId?: (boolean | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly StageKeys?: (StageKey[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly Value?: (string | undefined) | undefined;
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
	readonly AuthorizerCredentials?: (string | undefined) | undefined;
	readonly AuthorizerResultTtlInSeconds?: (number | undefined) | undefined;
	readonly AuthorizerUri?: (string | undefined) | undefined;
	readonly AuthType?: (string | undefined) | undefined;
	readonly IdentitySource?: (string | undefined) | undefined;
	readonly IdentityValidationExpression?: (string | undefined) | undefined;
	readonly ProviderARNs?: (string[] | undefined) | undefined;
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
	readonly BasePath?: (string | undefined) | undefined;
	readonly Id?: (string | undefined) | undefined;
	readonly RestApiId?: (string | undefined) | undefined;
	readonly Stage?: (string | undefined) | undefined;
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
	readonly Description?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly DeploymentCanarySettings?: (DeploymentCanarySettings | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly StageDescription?: (StageDescription | undefined) | undefined;
	readonly StageName?: (string | undefined) | undefined;
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
	readonly Description?: (string | undefined) | undefined;
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
	readonly CertificateArn?: (string | undefined) | undefined;
	readonly DomainName?: (string | undefined) | undefined;
	readonly EndpointConfiguration?: (EndpointConfiguration | undefined) | undefined;
	readonly MutualTlsAuthentication?: (MutualTlsAuthentication | undefined) | undefined;
	readonly OwnershipVerificationCertificateArn?: (string | undefined) | undefined;
	readonly RegionalCertificateArn?: (string | undefined) | undefined;
	readonly SecurityPolicy?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly ResponseParameters?: ({ [key: string]: string } | undefined) | undefined;
	readonly ResponseTemplates?: ({ [key: string]: string } | undefined) | undefined;
	readonly StatusCode?: (string | undefined) | undefined;
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
	readonly ApiKeyRequired?: (boolean | undefined) | undefined;
	readonly AuthorizationScopes?: (string[] | undefined) | undefined;
	readonly AuthorizationType?: (string | undefined) | undefined;
	readonly AuthorizerId?: (string | undefined) | undefined;
	readonly Integration?: (Integration | undefined) | undefined;
	readonly MethodResponses?: (MethodResponse[] | undefined) | undefined;
	readonly OperationName?: (string | undefined) | undefined;
	readonly RequestModels?: ({ [key: string]: string } | undefined) | undefined;
	readonly RequestParameters?: ({ [key: string]: boolean } | undefined) | undefined;
	readonly RequestValidatorId?: (string | undefined) | undefined;
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
	readonly ContentType?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Schema?: (any | undefined) | undefined;
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
	readonly Name?: (string | undefined) | undefined;
	readonly ValidateRequestBody?: (boolean | undefined) | undefined;
	readonly ValidateRequestParameters?: (boolean | undefined) | undefined;
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
	readonly ApiKeySourceType?: (string | undefined) | undefined;
	readonly BinaryMediaTypes?: (string[] | undefined) | undefined;
	readonly Body?: (any | undefined) | undefined;
	readonly BodyS3Location?: (S3Location | undefined) | undefined;
	readonly CloneFrom?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly DisableExecuteApiEndpoint?: (boolean | undefined) | undefined;
	readonly EndpointConfiguration?: (EndpointConfiguration | undefined) | undefined;
	readonly FailOnWarnings?: (boolean | undefined) | undefined;
	readonly MinimumCompressionSize?: (number | undefined) | undefined;
	readonly Mode?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Parameters?: ({ [key: string]: string } | undefined) | undefined;
	readonly Policy?: (any | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly AccessLogSetting?: (AccessLogSetting | undefined) | undefined;
	readonly CacheClusterEnabled?: (boolean | undefined) | undefined;
	readonly CacheClusterSize?: (string | undefined) | undefined;
	readonly CanarySetting?: (CanarySetting | undefined) | undefined;
	readonly ClientCertificateId?: (string | undefined) | undefined;
	readonly DeploymentId?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly DocumentationVersion?: (string | undefined) | undefined;
	readonly MethodSettings?: (MethodSetting[] | undefined) | undefined;
	readonly StageName?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly TracingEnabled?: (boolean | undefined) | undefined;
	readonly Variables?: ({ [key: string]: string } | undefined) | undefined;
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
	readonly ApiStages?: (ApiStage[] | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly Quota?: (QuotaSettings | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly Throttle?: (ThrottleSettings | undefined) | undefined;
	readonly UsagePlanName?: (string | undefined) | undefined;
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
	readonly Description?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface StageKey {
	readonly RestApiId?: (string | undefined) | undefined;
	readonly StageName?: (string | undefined) | undefined;
}
export interface AccessLogSetting {
	readonly DestinationArn?: (string | undefined) | undefined;
	readonly Format?: (string | undefined) | undefined;
}
export interface CanarySetting {
	readonly PercentTraffic?: (number | undefined) | undefined;
	readonly StageVariableOverrides?: ({ [key: string]: string } | undefined) | undefined;
	readonly UseStageCache?: (boolean | undefined) | undefined;
}
export interface DeploymentCanarySettings {
	readonly PercentTraffic?: (number | undefined) | undefined;
	readonly StageVariableOverrides?: ({ [key: string]: string } | undefined) | undefined;
	readonly UseStageCache?: (boolean | undefined) | undefined;
}
export interface MethodSetting {
	readonly CacheDataEncrypted?: (boolean | undefined) | undefined;
	readonly CacheTtlInSeconds?: (number | undefined) | undefined;
	readonly CachingEnabled?: (boolean | undefined) | undefined;
	readonly DataTraceEnabled?: (boolean | undefined) | undefined;
	readonly HttpMethod?: (string | undefined) | undefined;
	readonly LoggingLevel?: (string | undefined) | undefined;
	readonly MetricsEnabled?: (boolean | undefined) | undefined;
	readonly ResourcePath?: (string | undefined) | undefined;
	readonly ThrottlingBurstLimit?: (number | undefined) | undefined;
	readonly ThrottlingRateLimit?: (number | undefined) | undefined;
}
export interface StageDescription {
	readonly AccessLogSetting?: (AccessLogSetting | undefined) | undefined;
	readonly CacheClusterEnabled?: (boolean | undefined) | undefined;
	readonly CacheClusterSize?: (string | undefined) | undefined;
	readonly CacheDataEncrypted?: (boolean | undefined) | undefined;
	readonly CacheTtlInSeconds?: (number | undefined) | undefined;
	readonly CachingEnabled?: (boolean | undefined) | undefined;
	readonly CanarySetting?: (CanarySetting | undefined) | undefined;
	readonly ClientCertificateId?: (string | undefined) | undefined;
	readonly DataTraceEnabled?: (boolean | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly DocumentationVersion?: (string | undefined) | undefined;
	readonly LoggingLevel?: (string | undefined) | undefined;
	readonly MethodSettings?: (MethodSetting[] | undefined) | undefined;
	readonly MetricsEnabled?: (boolean | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly ThrottlingBurstLimit?: (number | undefined) | undefined;
	readonly ThrottlingRateLimit?: (number | undefined) | undefined;
	readonly TracingEnabled?: (boolean | undefined) | undefined;
	readonly Variables?: ({ [key: string]: string } | undefined) | undefined;
}
export interface Location {
	readonly Method?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Path?: (string | undefined) | undefined;
	readonly StatusCode?: (string | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
}
export interface EndpointConfiguration {
	readonly Types?: (string[] | undefined) | undefined;
}
export interface MutualTlsAuthentication {
	readonly TruststoreUri?: (string | undefined) | undefined;
	readonly TruststoreVersion?: (string | undefined) | undefined;
}
export interface Integration {
	readonly CacheKeyParameters?: (string[] | undefined) | undefined;
	readonly CacheNamespace?: (string | undefined) | undefined;
	readonly ConnectionId?: (string | undefined) | undefined;
	readonly ConnectionType?: (string | undefined) | undefined;
	readonly ContentHandling?: (string | undefined) | undefined;
	readonly Credentials?: (string | undefined) | undefined;
	readonly IntegrationHttpMethod?: (string | undefined) | undefined;
	readonly IntegrationResponses?: (IntegrationResponse[] | undefined) | undefined;
	readonly PassthroughBehavior?: (string | undefined) | undefined;
	readonly RequestParameters?: ({ [key: string]: string } | undefined) | undefined;
	readonly RequestTemplates?: ({ [key: string]: string } | undefined) | undefined;
	readonly TimeoutInMillis?: (number | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
	readonly Uri?: (string | undefined) | undefined;
}
export interface IntegrationResponse {
	readonly ContentHandling?: (string | undefined) | undefined;
	readonly ResponseParameters?: ({ [key: string]: string } | undefined) | undefined;
	readonly ResponseTemplates?: ({ [key: string]: string } | undefined) | undefined;
	readonly SelectionPattern?: (string | undefined) | undefined;
	readonly StatusCode: string;
}
export interface MethodResponse {
	readonly ResponseModels?: ({ [key: string]: string } | undefined) | undefined;
	readonly ResponseParameters?: ({ [key: string]: boolean } | undefined) | undefined;
	readonly StatusCode: string;
}
export interface S3Location {
	readonly Bucket?: (string | undefined) | undefined;
	readonly ETag?: (string | undefined) | undefined;
	readonly Key?: (string | undefined) | undefined;
	readonly Version?: (string | undefined) | undefined;
}
export interface ApiStage {
	readonly ApiId?: (string | undefined) | undefined;
	readonly Stage?: (string | undefined) | undefined;
	readonly Throttle?: ({ [key: string]: ThrottleSettings } | undefined) | undefined;
}
export interface QuotaSettings {
	readonly Limit?: (number | undefined) | undefined;
	readonly Offset?: (number | undefined) | undefined;
	readonly Period?: (string | undefined) | undefined;
}
export interface ThrottleSettings {
	readonly BurstLimit?: (number | undefined) | undefined;
	readonly RateLimit?: (number | undefined) | undefined;
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
