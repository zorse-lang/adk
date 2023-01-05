import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Api extends RosResource<ApiComponentInputs> implements ApiComponentOutputs {
	constructor(entity: ADKEntity, options: ApiComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ApiGateway::Api", options);
	}
	public readonly ApiId: any;
}
export interface ApiComponentOutputs {
	readonly ApiId: any;
}
export interface ApiComponentInputs {
	readonly ApiName: string;
	readonly GroupId: string;
	readonly RequestConfig: RequestConfig;
	readonly ResultSample: string;
	readonly ResultType: string;
	readonly ServiceConfig: ServiceConfig;
	readonly Visibility: string;
	readonly AppCodeAuthType?: string | undefined;
	readonly AuthType?: string | undefined;
	readonly ConstParameters?: ConstParameters[] | undefined;
	readonly Description?: string | undefined;
	readonly DisableInternet?: boolean | undefined;
	readonly ErrorCodeSamples?: ErrorCodeSamples[] | undefined;
	readonly FailResultSample?: string | undefined;
	readonly ForceNonceCheck?: boolean | undefined;
	readonly OpenIdConnectConfig?: OpenIdConnectConfig | undefined;
	readonly RequestParameters?: RequestParameters[] | undefined;
	readonly ServiceParameters?: ServiceParameters[] | undefined;
	readonly ServiceParametersMap?: ServiceParametersMap[] | undefined;
	readonly SystemParameters?: SystemParameters[] | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly LogicalId: string;
}
export class App extends RosResource<AppComponentInputs> implements AppComponentOutputs {
	constructor(entity: ADKEntity, options: AppComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ApiGateway::App", options);
	}
	public readonly AppId: any;
	public readonly AppKey: any;
	public readonly AppSecret: any;
}
export interface AppComponentOutputs {
	readonly AppId: any;
	readonly AppKey: any;
	readonly AppSecret: any;
}
export interface AppComponentInputs {
	readonly AppName: string;
	readonly Description?: string | undefined;
	readonly Tags?: Tags[] | any;
	readonly LogicalId: string;
}
export class Authorization extends RosResource<AuthorizationComponentInputs> implements AuthorizationComponentOutputs {
	constructor(entity: ADKEntity, options: AuthorizationComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ApiGateway::Authorization", options);
	}
}
export interface AuthorizationComponentOutputs {}
export interface AuthorizationComponentInputs {
	readonly ApiIds: any[];
	readonly AppIds: any[];
	readonly GroupId: string;
	readonly StageName: string;
	readonly Description?: string | undefined;
	readonly LogicalId: string;
}
export class CustomDomain extends RosResource<CustomDomainComponentInputs> implements CustomDomainComponentOutputs {
	constructor(entity: ADKEntity, options: CustomDomainComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ApiGateway::CustomDomain", options);
	}
	public readonly CertificateId: any;
}
export interface CustomDomainComponentOutputs {
	readonly CertificateId: any;
}
export interface CustomDomainComponentInputs {
	readonly DomainName: string;
	readonly GroupId: string;
	readonly CertificateBody?: string | undefined;
	readonly CertificateName?: string | undefined;
	readonly CertificatePrivateKey?: string | undefined;
	readonly LogicalId: string;
}
export class Deployment extends RosResource<DeploymentComponentInputs> implements DeploymentComponentOutputs {
	constructor(entity: ADKEntity, options: DeploymentComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ApiGateway::Deployment", options);
	}
}
export interface DeploymentComponentOutputs {}
export interface DeploymentComponentInputs {
	readonly ApiId: string;
	readonly GroupId: string;
	readonly StageName: string;
	readonly Description?: string | undefined;
	readonly HistoryVersion?: string | undefined;
	readonly LogicalId: string;
}
export class Group extends RosResource<GroupComponentInputs> implements GroupComponentOutputs {
	constructor(entity: ADKEntity, options: GroupComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ApiGateway::Group", options);
	}
	public readonly SubDomain: any;
	public readonly GroupId: any;
}
export interface GroupComponentOutputs {
	readonly SubDomain: any;
	readonly GroupId: any;
}
export interface GroupComponentInputs {
	readonly GroupName: string;
	readonly Description?: string | undefined;
	readonly InstanceId?: string | undefined;
	readonly InternetEnable?: boolean | undefined;
	readonly PassthroughHeaders?: string | undefined;
	readonly Tags?: Tags[] | any;
	readonly VpcIntranetEnable?: boolean | undefined;
	readonly LogicalId: string;
}
export class Instance extends RosResource<InstanceComponentInputs> implements InstanceComponentOutputs {
	constructor(entity: ADKEntity, options: InstanceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ApiGateway::Instance", options);
	}
	public readonly EgressIpv6Enable: any;
	public readonly VpcEgressAddress: any;
	public readonly InternetEgressAddress: any;
	public readonly InstanceId: any;
	public readonly VpcIntranetEnable: any;
	public readonly SupportIpv6: any;
	public readonly InstanceType: any;
	public readonly VpcSlbIntranetEnable: any;
}
export interface InstanceComponentOutputs {
	readonly EgressIpv6Enable: any;
	readonly VpcEgressAddress: any;
	readonly InternetEgressAddress: any;
	readonly InstanceId: any;
	readonly VpcIntranetEnable: any;
	readonly SupportIpv6: any;
	readonly InstanceType: any;
	readonly VpcSlbIntranetEnable: any;
}
export interface InstanceComponentInputs {
	readonly HttpsPolicy: string;
	readonly InstanceName: string;
	readonly InstanceSpec: string;
	readonly ZoneId: string;
	readonly AutoPay?: boolean | undefined;
	readonly ChargeType?: string | undefined;
	readonly DeletionForce?: boolean | undefined;
	readonly Duration?: number | undefined;
	readonly PricingCycle?: string | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly LogicalId: string;
}
export class LogConfig extends RosResource<LogConfigComponentInputs> implements LogConfigComponentOutputs {
	constructor(entity: ADKEntity, options: LogConfigComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ApiGateway::LogConfig", options);
	}
}
export interface LogConfigComponentOutputs {}
export interface LogConfigComponentInputs {
	readonly SlsLogStore: any | string;
	readonly SlsProject: any | string;
	readonly LogicalId: string;
}
export class Plugin extends RosResource<PluginComponentInputs> implements PluginComponentOutputs {
	constructor(entity: ADKEntity, options: PluginComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ApiGateway::Plugin", options);
	}
	public readonly PluginId: any;
}
export interface PluginComponentOutputs {
	readonly PluginId: any;
}
export interface PluginComponentInputs {
	readonly PluginData: any | string;
	readonly PluginName: any | string;
	readonly PluginType: any | string;
	readonly Description?: any | string;
	readonly Tags?: Tags[] | undefined;
	readonly LogicalId: string;
}
export class PluginAttachment
	extends RosResource<PluginAttachmentComponentInputs>
	implements PluginAttachmentComponentOutputs
{
	constructor(entity: ADKEntity, options: PluginAttachmentComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ApiGateway::PluginAttachment", options);
	}
}
export interface PluginAttachmentComponentOutputs {}
export interface PluginAttachmentComponentInputs {
	readonly ApiId: any | string;
	readonly PluginId: any | string;
	readonly StageName: string;
	readonly LogicalId: string;
}
export class Signature extends RosResource<SignatureComponentInputs> implements SignatureComponentOutputs {
	constructor(entity: ADKEntity, options: SignatureComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ApiGateway::Signature", options);
	}
	public readonly SignatureId: any;
}
export interface SignatureComponentOutputs {
	readonly SignatureId: any;
}
export interface SignatureComponentInputs {
	readonly SignatureKey: string;
	readonly SignatureName: string;
	readonly SignatureSecret: string;
	readonly LogicalId: string;
}
export class SignatureBinding
	extends RosResource<SignatureBindingComponentInputs>
	implements SignatureBindingComponentOutputs
{
	constructor(entity: ADKEntity, options: SignatureBindingComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ApiGateway::SignatureBinding", options);
	}
}
export interface SignatureBindingComponentOutputs {}
export interface SignatureBindingComponentInputs {
	readonly ApiIds: any[];
	readonly GroupId: string;
	readonly SignatureId: string;
	readonly StageName: string;
	readonly LogicalId: string;
}
export class StageConfig extends RosResource<StageConfigComponentInputs> implements StageConfigComponentOutputs {
	constructor(entity: ADKEntity, options: StageConfigComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ApiGateway::StageConfig", options);
	}
}
export interface StageConfigComponentOutputs {}
export interface StageConfigComponentInputs {
	readonly GroupId: string;
	readonly StageName: string;
	readonly Variables: { [key: string]: any };
	readonly LogicalId: string;
}
export class TrafficControl extends RosResource<TrafficControlComponentInputs> implements TrafficControlComponentOutputs {
	constructor(entity: ADKEntity, options: TrafficControlComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ApiGateway::TrafficControl", options);
	}
	public readonly TrafficControlId: any;
}
export interface TrafficControlComponentOutputs {
	readonly TrafficControlId: any;
}
export interface TrafficControlComponentInputs {
	readonly ApiDefault: number;
	readonly TrafficControlName: string;
	readonly TrafficControlUnit: string;
	readonly AppDefault?: string | undefined;
	readonly Description?: string | undefined;
	readonly Special?: Special[] | undefined;
	readonly UserDefault?: string | undefined;
	readonly LogicalId: string;
}
export class TrafficControlBinding
	extends RosResource<TrafficControlBindingComponentInputs>
	implements TrafficControlBindingComponentOutputs
{
	constructor(entity: ADKEntity, options: TrafficControlBindingComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ApiGateway::TrafficControlBinding", options);
	}
}
export interface TrafficControlBindingComponentOutputs {}
export interface TrafficControlBindingComponentInputs {
	readonly ApiIds: any[];
	readonly GroupId: string;
	readonly StageName: string;
	readonly TrafficControlId: string;
	readonly LogicalId: string;
}
export class VpcAccessConfig
	extends RosResource<VpcAccessConfigComponentInputs>
	implements VpcAccessConfigComponentOutputs
{
	constructor(entity: ADKEntity, options: VpcAccessConfigComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ApiGateway::VpcAccessConfig", options);
	}
}
export interface VpcAccessConfigComponentOutputs {}
export interface VpcAccessConfigComponentInputs {
	readonly InstanceId: string;
	readonly Name: string;
	readonly Port: number;
	readonly VpcId: string;
	readonly LogicalId: string;
}
export interface ConstParameters {
	readonly ConstValue: string;
	readonly Description?: string | undefined;
	readonly ServiceParameterName: string;
	readonly Location: string;
}
export interface ErrorCodeSamples {
	readonly Description?: string | undefined;
	readonly Message: string;
	readonly Code: string;
}
export interface FunctionComputeConfig {
	readonly Path?: string | undefined;
	readonly FunctionName?: string | undefined;
	readonly ContentTypeValue?: string | undefined;
	readonly ServiceName?: string | undefined;
	readonly FcType?: string | undefined;
	readonly Qualifier?: string | undefined;
	readonly Method?: string | undefined;
	readonly OnlyBusinessPath?: boolean | undefined;
	readonly FcRegionId?: string | undefined;
	readonly ContentTypeCatagory?: string | undefined;
	readonly RoleArn?: string | undefined;
	readonly FcBaseUrl?: string | undefined;
}
export interface MockHeaders {
	readonly HeaderValue: string;
	readonly HeaderName: string;
}
export interface OpenIdConnectConfig {
	readonly OpenIdApiType: string;
	readonly PublicKey?: string | undefined;
	readonly PublicKeyId?: string | undefined;
	readonly IdTokenParamName?: string | undefined;
}
export interface RequestConfig {
	readonly RequestPath: string;
	readonly RequestMode: string;
	readonly RequestProtocol: string;
	readonly RequestHttpMethod: string;
	readonly PostBodyDescription?: string | undefined;
	readonly BodyFormat?: string | undefined;
}
export interface RequestParameters {
	readonly RegularExpression?: string | undefined;
	readonly ParameterType: string;
	readonly Description?: string | undefined;
	readonly JsonScheme?: string | undefined;
	readonly ApiParameterName: string;
	readonly EnumValue?: string | undefined;
	readonly MinLength?: number | undefined;
	readonly MaxValue?: number | undefined;
	readonly MaxLength?: number | undefined;
	readonly DemoValue?: string | undefined;
	readonly DefaultValue?: string | undefined;
	readonly Required: string;
	readonly DocOrder?: number | undefined;
	readonly MinValue?: number | undefined;
	readonly DocShow?: string | undefined;
	readonly Location: string;
}
export interface ServiceConfig {
	readonly ServiceAddress?: string | undefined;
	readonly FunctionComputeConfig?: FunctionComputeConfig | undefined;
	readonly MockResult?: string | undefined;
	readonly ContentTypeValue?: string | undefined;
	readonly VpcConfig?: VpcConfig | undefined;
	readonly ServiceVpcEnable?: string | undefined;
	readonly MockStatusCode?: number | undefined;
	readonly MockHeaders?: MockHeaders[] | undefined;
	readonly ServiceHttpMethod?: string | undefined;
	readonly ServicePath?: string | undefined;
	readonly Mock?: string | undefined;
	readonly ServiceTimeOut?: number | undefined;
	readonly ServiceProtocol?: string | undefined;
	readonly ContentTypeCatagory?: string | undefined;
}
export interface ServiceParameters {
	readonly ParameterType: string;
	readonly ServiceParameterName: string;
	readonly Location: string;
}
export interface ServiceParametersMap {
	readonly RequestParameterName: string;
	readonly ServiceParameterName: string;
}
export interface SystemParameters {
	readonly DemoValue?: string | undefined;
	readonly Description?: string | undefined;
	readonly ParameterName: string;
	readonly ServiceParameterName: string;
	readonly Location: string;
}
export interface Tags {
	readonly Value?: string | undefined;
	readonly Key: string;
}
export interface VpcConfig {
	readonly VpcId: string;
	readonly InstanceId: string;
	readonly Port: number;
}
export interface Special {
	readonly SpecialKey: string;
	readonly SpecialType: string;
	readonly TrafficValue: number;
}
export default {
	Api: Api,
	App: App,
	Authorization: Authorization,
	CustomDomain: CustomDomain,
	Deployment: Deployment,
	Group: Group,
	Instance: Instance,
	LogConfig: LogConfig,
	Plugin: Plugin,
	PluginAttachment: PluginAttachment,
	Signature: Signature,
	SignatureBinding: SignatureBinding,
	StageConfig: StageConfig,
	TrafficControl: TrafficControl,
	TrafficControlBinding: TrafficControlBinding,
	VpcAccessConfig: VpcAccessConfig,
};
