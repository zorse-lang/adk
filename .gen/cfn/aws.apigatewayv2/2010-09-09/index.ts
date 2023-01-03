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
	readonly ApiKeySelectionExpression?: (string | undefined) | undefined;
	readonly BasePath?: (string | undefined) | undefined;
	readonly Body?: (any | undefined) | undefined;
	readonly BodyS3Location?: (BodyS3Location | undefined) | undefined;
	readonly CorsConfiguration?: (Cors | undefined) | undefined;
	readonly CredentialsArn?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly DisableExecuteApiEndpoint?: (boolean | undefined) | undefined;
	readonly DisableSchemaValidation?: (boolean | undefined) | undefined;
	readonly FailOnWarnings?: (boolean | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly ProtocolType?: (string | undefined) | undefined;
	readonly RouteKey?: (string | undefined) | undefined;
	readonly RouteSelectionExpression?: (string | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
	readonly Target?: (string | undefined) | undefined;
	readonly Version?: (string | undefined) | undefined;
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
	readonly Integration?: (IntegrationOverrides | undefined) | undefined;
	readonly Route?: (RouteOverrides | undefined) | undefined;
	readonly Stage?: (StageOverrides | undefined) | undefined;
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
	readonly ApiMappingKey?: (string | undefined) | undefined;
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
	readonly AuthorizerCredentialsArn?: (string | undefined) | undefined;
	readonly AuthorizerPayloadFormatVersion?: (string | undefined) | undefined;
	readonly AuthorizerResultTtlInSeconds?: (number | undefined) | undefined;
	readonly AuthorizerUri?: (string | undefined) | undefined;
	readonly EnableSimpleResponses?: (boolean | undefined) | undefined;
	readonly IdentitySource?: (string[] | undefined) | undefined;
	readonly IdentityValidationExpression?: (string | undefined) | undefined;
	readonly JwtConfiguration?: (JWTConfiguration | undefined) | undefined;
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
	readonly Description?: (string | undefined) | undefined;
	readonly StageName?: (string | undefined) | undefined;
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
	readonly DomainNameConfigurations?: (DomainNameConfiguration[] | undefined) | undefined;
	readonly MutualTlsAuthentication?: (MutualTlsAuthentication | undefined) | undefined;
	readonly Tags?: (any | undefined) | undefined;
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
	readonly ConnectionId?: (string | undefined) | undefined;
	readonly ConnectionType?: (string | undefined) | undefined;
	readonly ContentHandlingStrategy?: (string | undefined) | undefined;
	readonly CredentialsArn?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly IntegrationMethod?: (string | undefined) | undefined;
	readonly IntegrationSubtype?: (string | undefined) | undefined;
	readonly IntegrationUri?: (string | undefined) | undefined;
	readonly PassthroughBehavior?: (string | undefined) | undefined;
	readonly PayloadFormatVersion?: (string | undefined) | undefined;
	readonly RequestParameters?: (any | undefined) | undefined;
	readonly RequestTemplates?: (any | undefined) | undefined;
	readonly ResponseParameters?: (any | undefined) | undefined;
	readonly TemplateSelectionExpression?: (string | undefined) | undefined;
	readonly TimeoutInMillis?: (number | undefined) | undefined;
	readonly TlsConfig?: (TlsConfig | undefined) | undefined;
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
	readonly ContentHandlingStrategy?: (string | undefined) | undefined;
	readonly ResponseParameters?: (any | undefined) | undefined;
	readonly ResponseTemplates?: (any | undefined) | undefined;
	readonly TemplateSelectionExpression?: (string | undefined) | undefined;
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
	readonly ContentType?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
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
	readonly ApiKeyRequired?: (boolean | undefined) | undefined;
	readonly AuthorizationScopes?: (string[] | undefined) | undefined;
	readonly AuthorizationType?: (string | undefined) | undefined;
	readonly AuthorizerId?: (string | undefined) | undefined;
	readonly ModelSelectionExpression?: (string | undefined) | undefined;
	readonly OperationName?: (string | undefined) | undefined;
	readonly RequestModels?: (any | undefined) | undefined;
	readonly RequestParameters?: (any | undefined) | undefined;
	readonly RouteResponseSelectionExpression?: (string | undefined) | undefined;
	readonly Target?: (string | undefined) | undefined;
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
	readonly ModelSelectionExpression?: (string | undefined) | undefined;
	readonly ResponseModels?: (any | undefined) | undefined;
	readonly ResponseParameters?: (any | undefined) | undefined;
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
	readonly AccessLogSettings?: (AccessLogSettings | undefined) | undefined;
	readonly AccessPolicyId?: (string | undefined) | undefined;
	readonly AutoDeploy?: (boolean | undefined) | undefined;
	readonly ClientCertificateId?: (string | undefined) | undefined;
	readonly DefaultRouteSettings?: (RouteSettings | undefined) | undefined;
	readonly DeploymentId?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly RouteSettings?: (any | undefined) | undefined;
	readonly StageVariables?: (any | undefined) | undefined;
	readonly Tags?: (any | undefined) | undefined;
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
	readonly SecurityGroupIds?: (string[] | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
	readonly LogicalId: string;
}
export interface BodyS3Location {
	readonly Bucket?: (string | undefined) | undefined;
	readonly Etag?: (string | undefined) | undefined;
	readonly Key?: (string | undefined) | undefined;
	readonly Version?: (string | undefined) | undefined;
}
export interface Cors {
	readonly AllowCredentials?: (boolean | undefined) | undefined;
	readonly AllowHeaders?: (string[] | undefined) | undefined;
	readonly AllowMethods?: (string[] | undefined) | undefined;
	readonly AllowOrigins?: (string[] | undefined) | undefined;
	readonly ExposeHeaders?: (string[] | undefined) | undefined;
	readonly MaxAge?: (number | undefined) | undefined;
}
export interface AccessLogSettings {
	readonly DestinationArn?: (string | undefined) | undefined;
	readonly Format?: (string | undefined) | undefined;
}
export interface IntegrationOverrides {
	readonly Description?: (string | undefined) | undefined;
	readonly IntegrationMethod?: (string | undefined) | undefined;
	readonly PayloadFormatVersion?: (string | undefined) | undefined;
	readonly TimeoutInMillis?: (number | undefined) | undefined;
}
export interface RouteOverrides {
	readonly AuthorizationScopes?: (string[] | undefined) | undefined;
	readonly AuthorizationType?: (string | undefined) | undefined;
	readonly AuthorizerId?: (string | undefined) | undefined;
	readonly OperationName?: (string | undefined) | undefined;
	readonly Target?: (string | undefined) | undefined;
}
export interface RouteSettings {
	readonly DataTraceEnabled?: (boolean | undefined) | undefined;
	readonly DetailedMetricsEnabled?: (boolean | undefined) | undefined;
	readonly LoggingLevel?: (string | undefined) | undefined;
	readonly ThrottlingBurstLimit?: (number | undefined) | undefined;
	readonly ThrottlingRateLimit?: (number | undefined) | undefined;
}
export interface StageOverrides {
	readonly AccessLogSettings?: (AccessLogSettings | undefined) | undefined;
	readonly AutoDeploy?: (boolean | undefined) | undefined;
	readonly DefaultRouteSettings?: (RouteSettings | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly RouteSettings?: (any | undefined) | undefined;
	readonly StageVariables?: (any | undefined) | undefined;
}
export interface JWTConfiguration {
	readonly Audience?: (string[] | undefined) | undefined;
	readonly Issuer?: (string | undefined) | undefined;
}
export interface DomainNameConfiguration {
	readonly CertificateArn?: (string | undefined) | undefined;
	readonly CertificateName?: (string | undefined) | undefined;
	readonly EndpointType?: (string | undefined) | undefined;
	readonly OwnershipVerificationCertificateArn?: (string | undefined) | undefined;
	readonly SecurityPolicy?: (string | undefined) | undefined;
}
export interface MutualTlsAuthentication {
	readonly TruststoreUri?: (string | undefined) | undefined;
	readonly TruststoreVersion?: (string | undefined) | undefined;
}
export interface ResponseParameter {
	readonly Destination: string;
	readonly Source: string;
}
export interface ResponseParameterList {
	readonly ResponseParameters?: (ResponseParameter[] | undefined) | undefined;
}
export interface TlsConfig {
	readonly ServerNameToVerify?: (string | undefined) | undefined;
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
