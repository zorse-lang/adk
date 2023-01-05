import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Api extends CfnResource<ApiComponentInputs> implements ApiComponentOutputs {
	constructor(entity: ADKEntity, options: ApiComponentInputs) {
		super(entity, options.LogicalId, "AWS::ApiGatewayV2::Api", options);
	}
	public readonly ApiEndpoint: string;
	public readonly ApiId: string;
}
export interface ApiComponentOutputs {
	readonly ApiEndpoint: string;
	readonly ApiId: string;
}
export interface ApiComponentInputs {
	readonly ApiKeySelectionExpression?: string | undefined;
	readonly BasePath?: string | undefined;
	readonly Body?: any | undefined;
	readonly BodyS3Location?: BodyS3Location | undefined;
	readonly CorsConfiguration?: Cors | undefined;
	readonly CredentialsArn?: string | undefined;
	readonly Description?: string | undefined;
	readonly DisableExecuteApiEndpoint?: boolean | undefined;
	readonly DisableSchemaValidation?: boolean | undefined;
	readonly FailOnWarnings?: boolean | undefined;
	readonly Name?: string | undefined;
	readonly ProtocolType?: string | undefined;
	readonly RouteKey?: string | undefined;
	readonly RouteSelectionExpression?: string | undefined;
	readonly Tags?: { [key: string]: string } | undefined;
	readonly Target?: string | undefined;
	readonly Version?: string | undefined;
	readonly LogicalId: string;
}
export class ApiGatewayManagedOverrides
	extends CfnResource<ApiGatewayManagedOverridesComponentInputs>
	implements ApiGatewayManagedOverridesComponentOutputs
{
	constructor(entity: ADKEntity, options: ApiGatewayManagedOverridesComponentInputs) {
		super(entity, options.LogicalId, "AWS::ApiGatewayV2::ApiGatewayManagedOverrides", options);
	}
}
export interface ApiGatewayManagedOverridesComponentOutputs {}
export interface ApiGatewayManagedOverridesComponentInputs {
	readonly ApiId: string;
	readonly Integration?: IntegrationOverrides | undefined;
	readonly Route?: RouteOverrides | undefined;
	readonly Stage?: StageOverrides | undefined;
	readonly LogicalId: string;
}
export class ApiMapping extends CfnResource<ApiMappingComponentInputs> implements ApiMappingComponentOutputs {
	constructor(entity: ADKEntity, options: ApiMappingComponentInputs) {
		super(entity, options.LogicalId, "AWS::ApiGatewayV2::ApiMapping", options);
	}
}
export interface ApiMappingComponentOutputs {}
export interface ApiMappingComponentInputs {
	readonly ApiId: string;
	readonly DomainName: string;
	readonly Stage: string;
	readonly ApiMappingKey?: string | undefined;
	readonly LogicalId: string;
}
export class Authorizer extends CfnResource<AuthorizerComponentInputs> implements AuthorizerComponentOutputs {
	constructor(entity: ADKEntity, options: AuthorizerComponentInputs) {
		super(entity, options.LogicalId, "AWS::ApiGatewayV2::Authorizer", options);
	}
	public readonly AuthorizerId: string;
}
export interface AuthorizerComponentOutputs {
	readonly AuthorizerId: string;
}
export interface AuthorizerComponentInputs {
	readonly ApiId: string;
	readonly AuthorizerType: string;
	readonly Name: string;
	readonly AuthorizerCredentialsArn?: string | undefined;
	readonly AuthorizerPayloadFormatVersion?: string | undefined;
	readonly AuthorizerResultTtlInSeconds?: number | undefined;
	readonly AuthorizerUri?: string | undefined;
	readonly EnableSimpleResponses?: boolean | undefined;
	readonly IdentitySource?: string[] | undefined;
	readonly IdentityValidationExpression?: string | undefined;
	readonly JwtConfiguration?: JWTConfiguration | undefined;
	readonly LogicalId: string;
}
export class Deployment extends CfnResource<DeploymentComponentInputs> implements DeploymentComponentOutputs {
	constructor(entity: ADKEntity, options: DeploymentComponentInputs) {
		super(entity, options.LogicalId, "AWS::ApiGatewayV2::Deployment", options);
	}
	public readonly DeploymentId: string;
}
export interface DeploymentComponentOutputs {
	readonly DeploymentId: string;
}
export interface DeploymentComponentInputs {
	readonly ApiId: string;
	readonly Description?: string | undefined;
	readonly StageName?: string | undefined;
	readonly LogicalId: string;
}
export class DomainName extends CfnResource<DomainNameComponentInputs> implements DomainNameComponentOutputs {
	constructor(entity: ADKEntity, options: DomainNameComponentInputs) {
		super(entity, options.LogicalId, "AWS::ApiGatewayV2::DomainName", options);
	}
	public readonly RegionalDomainName: string;
	public readonly RegionalHostedZoneId: string;
}
export interface DomainNameComponentOutputs {
	readonly RegionalDomainName: string;
	readonly RegionalHostedZoneId: string;
}
export interface DomainNameComponentInputs {
	readonly DomainName: string;
	readonly DomainNameConfigurations?: DomainNameConfiguration[] | undefined;
	readonly MutualTlsAuthentication?: MutualTlsAuthentication | undefined;
	readonly Tags?: any | undefined;
	readonly LogicalId: string;
}
export class Integration extends CfnResource<IntegrationComponentInputs> implements IntegrationComponentOutputs {
	constructor(entity: ADKEntity, options: IntegrationComponentInputs) {
		super(entity, options.LogicalId, "AWS::ApiGatewayV2::Integration", options);
	}
}
export interface IntegrationComponentOutputs {}
export interface IntegrationComponentInputs {
	readonly ApiId: string;
	readonly IntegrationType: string;
	readonly ConnectionId?: string | undefined;
	readonly ConnectionType?: string | undefined;
	readonly ContentHandlingStrategy?: string | undefined;
	readonly CredentialsArn?: string | undefined;
	readonly Description?: string | undefined;
	readonly IntegrationMethod?: string | undefined;
	readonly IntegrationSubtype?: string | undefined;
	readonly IntegrationUri?: string | undefined;
	readonly PassthroughBehavior?: string | undefined;
	readonly PayloadFormatVersion?: string | undefined;
	readonly RequestParameters?: any | undefined;
	readonly RequestTemplates?: any | undefined;
	readonly ResponseParameters?: any | undefined;
	readonly TemplateSelectionExpression?: string | undefined;
	readonly TimeoutInMillis?: number | undefined;
	readonly TlsConfig?: TlsConfig | undefined;
	readonly LogicalId: string;
}
export class IntegrationResponse
	extends CfnResource<IntegrationResponseComponentInputs>
	implements IntegrationResponseComponentOutputs
{
	constructor(entity: ADKEntity, options: IntegrationResponseComponentInputs) {
		super(entity, options.LogicalId, "AWS::ApiGatewayV2::IntegrationResponse", options);
	}
}
export interface IntegrationResponseComponentOutputs {}
export interface IntegrationResponseComponentInputs {
	readonly ApiId: string;
	readonly IntegrationId: string;
	readonly IntegrationResponseKey: string;
	readonly ContentHandlingStrategy?: string | undefined;
	readonly ResponseParameters?: any | undefined;
	readonly ResponseTemplates?: any | undefined;
	readonly TemplateSelectionExpression?: string | undefined;
	readonly LogicalId: string;
}
export class Model extends CfnResource<ModelComponentInputs> implements ModelComponentOutputs {
	constructor(entity: ADKEntity, options: ModelComponentInputs) {
		super(entity, options.LogicalId, "AWS::ApiGatewayV2::Model", options);
	}
	public readonly ModelId: string;
}
export interface ModelComponentOutputs {
	readonly ModelId: string;
}
export interface ModelComponentInputs {
	readonly ApiId: string;
	readonly Name: string;
	readonly Schema: any;
	readonly ContentType?: string | undefined;
	readonly Description?: string | undefined;
	readonly LogicalId: string;
}
export class Route extends CfnResource<RouteComponentInputs> implements RouteComponentOutputs {
	constructor(entity: ADKEntity, options: RouteComponentInputs) {
		super(entity, options.LogicalId, "AWS::ApiGatewayV2::Route", options);
	}
}
export interface RouteComponentOutputs {}
export interface RouteComponentInputs {
	readonly ApiId: string;
	readonly RouteKey: string;
	readonly ApiKeyRequired?: boolean | undefined;
	readonly AuthorizationScopes?: string[] | undefined;
	readonly AuthorizationType?: string | undefined;
	readonly AuthorizerId?: string | undefined;
	readonly ModelSelectionExpression?: string | undefined;
	readonly OperationName?: string | undefined;
	readonly RequestModels?: any | undefined;
	readonly RequestParameters?: any | undefined;
	readonly RouteResponseSelectionExpression?: string | undefined;
	readonly Target?: string | undefined;
	readonly LogicalId: string;
}
export class RouteResponse extends CfnResource<RouteResponseComponentInputs> implements RouteResponseComponentOutputs {
	constructor(entity: ADKEntity, options: RouteResponseComponentInputs) {
		super(entity, options.LogicalId, "AWS::ApiGatewayV2::RouteResponse", options);
	}
}
export interface RouteResponseComponentOutputs {}
export interface RouteResponseComponentInputs {
	readonly ApiId: string;
	readonly RouteId: string;
	readonly RouteResponseKey: string;
	readonly ModelSelectionExpression?: string | undefined;
	readonly ResponseModels?: any | undefined;
	readonly ResponseParameters?: any | undefined;
	readonly LogicalId: string;
}
export class Stage extends CfnResource<StageComponentInputs> implements StageComponentOutputs {
	constructor(entity: ADKEntity, options: StageComponentInputs) {
		super(entity, options.LogicalId, "AWS::ApiGatewayV2::Stage", options);
	}
}
export interface StageComponentOutputs {}
export interface StageComponentInputs {
	readonly ApiId: string;
	readonly StageName: string;
	readonly AccessLogSettings?: AccessLogSettings | undefined;
	readonly AccessPolicyId?: string | undefined;
	readonly AutoDeploy?: boolean | undefined;
	readonly ClientCertificateId?: string | undefined;
	readonly DefaultRouteSettings?: RouteSettings | undefined;
	readonly DeploymentId?: string | undefined;
	readonly Description?: string | undefined;
	readonly RouteSettings?: any | undefined;
	readonly StageVariables?: any | undefined;
	readonly Tags?: any | undefined;
	readonly LogicalId: string;
}
export class VpcLink extends CfnResource<VpcLinkComponentInputs> implements VpcLinkComponentOutputs {
	constructor(entity: ADKEntity, options: VpcLinkComponentInputs) {
		super(entity, options.LogicalId, "AWS::ApiGatewayV2::VpcLink", options);
	}
	public readonly VpcLinkId: string;
}
export interface VpcLinkComponentOutputs {
	readonly VpcLinkId: string;
}
export interface VpcLinkComponentInputs {
	readonly Name: string;
	readonly SubnetIds: string[];
	readonly SecurityGroupIds?: string[] | undefined;
	readonly Tags?: { [key: string]: string } | undefined;
	readonly LogicalId: string;
}
export interface BodyS3Location {
	readonly Bucket?: string | undefined;
	readonly Etag?: string | undefined;
	readonly Key?: string | undefined;
	readonly Version?: string | undefined;
}
export interface Cors {
	readonly AllowCredentials?: boolean | undefined;
	readonly AllowHeaders?: string[] | undefined;
	readonly AllowMethods?: string[] | undefined;
	readonly AllowOrigins?: string[] | undefined;
	readonly ExposeHeaders?: string[] | undefined;
	readonly MaxAge?: number | undefined;
}
export interface AccessLogSettings {
	readonly DestinationArn?: string | undefined;
	readonly Format?: string | undefined;
}
export interface IntegrationOverrides {
	readonly Description?: string | undefined;
	readonly IntegrationMethod?: string | undefined;
	readonly PayloadFormatVersion?: string | undefined;
	readonly TimeoutInMillis?: number | undefined;
}
export interface RouteOverrides {
	readonly AuthorizationScopes?: string[] | undefined;
	readonly AuthorizationType?: string | undefined;
	readonly AuthorizerId?: string | undefined;
	readonly OperationName?: string | undefined;
	readonly Target?: string | undefined;
}
export interface RouteSettings {
	readonly DataTraceEnabled?: boolean | undefined;
	readonly DetailedMetricsEnabled?: boolean | undefined;
	readonly LoggingLevel?: string | undefined;
	readonly ThrottlingBurstLimit?: number | undefined;
	readonly ThrottlingRateLimit?: number | undefined;
}
export interface StageOverrides {
	readonly AccessLogSettings?: AccessLogSettings | undefined;
	readonly AutoDeploy?: boolean | undefined;
	readonly DefaultRouteSettings?: RouteSettings | undefined;
	readonly Description?: string | undefined;
	readonly RouteSettings?: any | undefined;
	readonly StageVariables?: any | undefined;
}
export interface JWTConfiguration {
	readonly Audience?: string[] | undefined;
	readonly Issuer?: string | undefined;
}
export interface DomainNameConfiguration {
	readonly CertificateArn?: string | undefined;
	readonly CertificateName?: string | undefined;
	readonly EndpointType?: string | undefined;
	readonly OwnershipVerificationCertificateArn?: string | undefined;
	readonly SecurityPolicy?: string | undefined;
}
export interface MutualTlsAuthentication {
	readonly TruststoreUri?: string | undefined;
	readonly TruststoreVersion?: string | undefined;
}
export interface ResponseParameter {
	readonly Destination: string;
	readonly Source: string;
}
export interface ResponseParameterList {
	readonly ResponseParameters?: ResponseParameter[] | undefined;
}
export interface TlsConfig {
	readonly ServerNameToVerify?: string | undefined;
}
export interface ParameterConstraints {
	readonly Required: boolean;
}
export default {
	Api: Api,
	ApiGatewayManagedOverrides: ApiGatewayManagedOverrides,
	ApiMapping: ApiMapping,
	Authorizer: Authorizer,
	Deployment: Deployment,
	DomainName: DomainName,
	Integration: Integration,
	IntegrationResponse: IntegrationResponse,
	Model: Model,
	Route: Route,
	RouteResponse: RouteResponse,
	Stage: Stage,
	VpcLink: VpcLink,
};
