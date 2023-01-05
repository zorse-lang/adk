import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class GatewayRoute extends CfnResource<GatewayRouteComponentInputs> implements GatewayRouteComponentOutputs {
	constructor(entity: ADKEntity, options: GatewayRouteComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppMesh::GatewayRoute", options);
	}
	public readonly Arn: string;
	public readonly MeshName: string;
	public readonly ResourceOwner: string;
	public readonly Uid: string;
	public readonly VirtualGatewayName: string;
}
export interface GatewayRouteComponentOutputs {
	readonly Arn: string;
	readonly MeshName: string;
	readonly ResourceOwner: string;
	readonly Uid: string;
	readonly VirtualGatewayName: string;
}
export interface GatewayRouteComponentInputs {
	readonly MeshName: string;
	readonly Spec: GatewayRouteSpec;
	readonly VirtualGatewayName: string;
	readonly GatewayRouteName?: string;
	readonly MeshOwner?: string;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Mesh extends CfnResource<MeshComponentInputs> implements MeshComponentOutputs {
	constructor(entity: ADKEntity, options: MeshComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppMesh::Mesh", options);
	}
	public readonly Arn: string;
	public readonly MeshOwner: string;
	public readonly ResourceOwner: string;
	public readonly Uid: string;
}
export interface MeshComponentOutputs {
	readonly Arn: string;
	readonly MeshOwner: string;
	readonly ResourceOwner: string;
	readonly Uid: string;
}
export interface MeshComponentInputs {
	readonly MeshName?: string;
	readonly Spec?: MeshSpec | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Route extends CfnResource<RouteComponentInputs> implements RouteComponentOutputs {
	constructor(entity: ADKEntity, options: RouteComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppMesh::Route", options);
	}
	public readonly Arn: string;
	public readonly MeshName: string;
	public readonly ResourceOwner: string;
	public readonly Uid: string;
	public readonly VirtualRouterName: string;
}
export interface RouteComponentOutputs {
	readonly Arn: string;
	readonly MeshName: string;
	readonly ResourceOwner: string;
	readonly Uid: string;
	readonly VirtualRouterName: string;
}
export interface RouteComponentInputs {
	readonly MeshName: string;
	readonly Spec: RouteSpec;
	readonly VirtualRouterName: string;
	readonly MeshOwner?: string;
	readonly RouteName?: string;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class VirtualGateway extends CfnResource<VirtualGatewayComponentInputs> implements VirtualGatewayComponentOutputs {
	constructor(entity: ADKEntity, options: VirtualGatewayComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppMesh::VirtualGateway", options);
	}
	public readonly Arn: string;
	public readonly MeshName: string;
	public readonly ResourceOwner: string;
	public readonly Uid: string;
}
export interface VirtualGatewayComponentOutputs {
	readonly Arn: string;
	readonly MeshName: string;
	readonly ResourceOwner: string;
	readonly Uid: string;
}
export interface VirtualGatewayComponentInputs {
	readonly MeshName: string;
	readonly Spec: VirtualGatewaySpec;
	readonly MeshOwner?: string;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly VirtualGatewayName?: string;
	readonly LogicalId: string;
}
export class VirtualNode extends CfnResource<VirtualNodeComponentInputs> implements VirtualNodeComponentOutputs {
	constructor(entity: ADKEntity, options: VirtualNodeComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppMesh::VirtualNode", options);
	}
	public readonly Arn: string;
	public readonly MeshName: string;
	public readonly ResourceOwner: string;
	public readonly Uid: string;
}
export interface VirtualNodeComponentOutputs {
	readonly Arn: string;
	readonly MeshName: string;
	readonly ResourceOwner: string;
	readonly Uid: string;
}
export interface VirtualNodeComponentInputs {
	readonly MeshName: string;
	readonly Spec: VirtualNodeSpec;
	readonly MeshOwner?: string;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly VirtualNodeName?: string;
	readonly LogicalId: string;
}
export class VirtualRouter extends CfnResource<VirtualRouterComponentInputs> implements VirtualRouterComponentOutputs {
	constructor(entity: ADKEntity, options: VirtualRouterComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppMesh::VirtualRouter", options);
	}
	public readonly Arn: string;
	public readonly MeshName: string;
	public readonly ResourceOwner: string;
	public readonly Uid: string;
}
export interface VirtualRouterComponentOutputs {
	readonly Arn: string;
	readonly MeshName: string;
	readonly ResourceOwner: string;
	readonly Uid: string;
}
export interface VirtualRouterComponentInputs {
	readonly MeshName: string;
	readonly Spec: VirtualRouterSpec;
	readonly MeshOwner?: string;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly VirtualRouterName?: string;
	readonly LogicalId: string;
}
export class VirtualService extends CfnResource<VirtualServiceComponentInputs> implements VirtualServiceComponentOutputs {
	constructor(entity: ADKEntity, options: VirtualServiceComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppMesh::VirtualService", options);
	}
	public readonly Arn: string;
	public readonly MeshName: string;
	public readonly ResourceOwner: string;
	public readonly Uid: string;
	public readonly VirtualServiceName: string;
}
export interface VirtualServiceComponentOutputs {
	readonly Arn: string;
	readonly MeshName: string;
	readonly ResourceOwner: string;
	readonly Uid: string;
	readonly VirtualServiceName: string;
}
export interface VirtualServiceComponentInputs {
	readonly MeshName: string;
	readonly Spec: VirtualServiceSpec;
	readonly VirtualServiceName: string;
	readonly MeshOwner?: string;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface GatewayRouteHostnameMatch {
	readonly Exact?: string | undefined;
	readonly Suffix?: string | undefined;
}
export interface GatewayRouteHostnameRewrite {
	readonly DefaultTargetHostname?: string | undefined;
}
export interface GatewayRouteMetadataMatch {
	readonly Exact?: string | undefined;
	readonly Prefix?: string | undefined;
	readonly Range?: GatewayRouteRangeMatch | undefined;
	readonly Regex?: string | undefined;
	readonly Suffix?: string | undefined;
}
export interface GatewayRouteRangeMatch {
	readonly End: number;
	readonly Start: number;
}
export interface GatewayRouteSpec {
	readonly GrpcRoute?: GrpcGatewayRoute | undefined;
	readonly Http2Route?: HttpGatewayRoute | undefined;
	readonly HttpRoute?: HttpGatewayRoute | undefined;
	readonly Priority?: number | undefined;
}
export interface GatewayRouteTarget {
	readonly Port?: number | undefined;
	readonly VirtualService: GatewayRouteVirtualService;
}
export interface GatewayRouteVirtualService {
	readonly VirtualServiceName: string;
}
export interface GrpcGatewayRoute {
	readonly Action: GrpcGatewayRouteAction;
	readonly Match: GrpcGatewayRouteMatch;
}
export interface GrpcGatewayRouteAction {
	readonly Rewrite?: GrpcGatewayRouteRewrite | undefined;
	readonly Target: GatewayRouteTarget;
}
export interface GrpcGatewayRouteMatch {
	readonly Hostname?: GatewayRouteHostnameMatch | undefined;
	readonly Metadata?: GrpcGatewayRouteMetadata[] | undefined;
	readonly Port?: number | undefined;
	readonly ServiceName?: string | undefined;
}
export interface GrpcGatewayRouteMetadata {
	readonly Invert?: boolean | undefined;
	readonly Match?: GatewayRouteMetadataMatch | undefined;
	readonly Name: string;
}
export interface GrpcGatewayRouteRewrite {
	readonly Hostname?: GatewayRouteHostnameRewrite | undefined;
}
export interface HttpGatewayRoute {
	readonly Action: HttpGatewayRouteAction;
	readonly Match: HttpGatewayRouteMatch;
}
export interface HttpGatewayRouteAction {
	readonly Rewrite?: HttpGatewayRouteRewrite | undefined;
	readonly Target: GatewayRouteTarget;
}
export interface HttpGatewayRouteHeader {
	readonly Invert?: boolean | undefined;
	readonly Match?: HttpGatewayRouteHeaderMatch | undefined;
	readonly Name: string;
}
export interface HttpGatewayRouteHeaderMatch {
	readonly Exact?: string | undefined;
	readonly Prefix?: string | undefined;
	readonly Range?: GatewayRouteRangeMatch | undefined;
	readonly Regex?: string | undefined;
	readonly Suffix?: string | undefined;
}
export interface HttpGatewayRouteMatch {
	readonly Headers?: HttpGatewayRouteHeader[] | undefined;
	readonly Hostname?: GatewayRouteHostnameMatch | undefined;
	readonly Method?: string | undefined;
	readonly Path?: HttpPathMatch | undefined;
	readonly Port?: number | undefined;
	readonly Prefix?: string | undefined;
	readonly QueryParameters?: QueryParameter[] | undefined;
}
export interface HttpGatewayRoutePathRewrite {
	readonly Exact?: string | undefined;
}
export interface HttpGatewayRoutePrefixRewrite {
	readonly DefaultPrefix?: string | undefined;
	readonly Value?: string | undefined;
}
export interface HttpGatewayRouteRewrite {
	readonly Hostname?: GatewayRouteHostnameRewrite | undefined;
	readonly Path?: HttpGatewayRoutePathRewrite | undefined;
	readonly Prefix?: HttpGatewayRoutePrefixRewrite | undefined;
}
export interface HttpPathMatch {
	readonly Exact?: string | undefined;
	readonly Regex?: string | undefined;
}
export interface HttpQueryParameterMatch {
	readonly Exact?: string | undefined;
}
export interface QueryParameter {
	readonly Match?: HttpQueryParameterMatch | undefined;
	readonly Name: string;
}
export interface EgressFilter {
	readonly Type: string;
}
export interface MeshServiceDiscovery {
	readonly IpPreference?: string | undefined;
}
export interface MeshSpec {
	readonly EgressFilter?: EgressFilter | undefined;
	readonly ServiceDiscovery?: MeshServiceDiscovery | undefined;
}
export interface Duration {
	readonly Unit: string;
	readonly Value: number;
}
export interface GrpcRetryPolicy {
	readonly GrpcRetryEvents?: string[] | undefined;
	readonly HttpRetryEvents?: string[] | undefined;
	readonly MaxRetries: number;
	readonly PerRetryTimeout: Duration;
	readonly TcpRetryEvents?: string[] | undefined;
}
export interface GrpcRoute {
	readonly Action: GrpcRouteAction;
	readonly Match: GrpcRouteMatch;
	readonly RetryPolicy?: GrpcRetryPolicy | undefined;
	readonly Timeout?: GrpcTimeout | undefined;
}
export interface GrpcRouteAction {
	readonly WeightedTargets: WeightedTarget[];
}
export interface GrpcRouteMatch {
	readonly Metadata?: GrpcRouteMetadata[] | undefined;
	readonly MethodName?: string | undefined;
	readonly Port?: number | undefined;
	readonly ServiceName?: string | undefined;
}
export interface GrpcRouteMetadata {
	readonly Invert?: boolean | undefined;
	readonly Match?: GrpcRouteMetadataMatchMethod | undefined;
	readonly Name: string;
}
export interface GrpcRouteMetadataMatchMethod {
	readonly Exact?: string | undefined;
	readonly Prefix?: string | undefined;
	readonly Range?: MatchRange | undefined;
	readonly Regex?: string | undefined;
	readonly Suffix?: string | undefined;
}
export interface GrpcTimeout {
	readonly Idle?: Duration | undefined;
	readonly PerRequest?: Duration | undefined;
}
export interface HeaderMatchMethod {
	readonly Exact?: string | undefined;
	readonly Prefix?: string | undefined;
	readonly Range?: MatchRange | undefined;
	readonly Regex?: string | undefined;
	readonly Suffix?: string | undefined;
}
export interface HttpRetryPolicy {
	readonly HttpRetryEvents?: string[] | undefined;
	readonly MaxRetries: number;
	readonly PerRetryTimeout: Duration;
	readonly TcpRetryEvents?: string[] | undefined;
}
export interface HttpRoute {
	readonly Action: HttpRouteAction;
	readonly Match: HttpRouteMatch;
	readonly RetryPolicy?: HttpRetryPolicy | undefined;
	readonly Timeout?: HttpTimeout | undefined;
}
export interface HttpRouteAction {
	readonly WeightedTargets: WeightedTarget[];
}
export interface HttpRouteHeader {
	readonly Invert?: boolean | undefined;
	readonly Match?: HeaderMatchMethod | undefined;
	readonly Name: string;
}
export interface HttpRouteMatch {
	readonly Headers?: HttpRouteHeader[] | undefined;
	readonly Method?: string | undefined;
	readonly Path?: HttpPathMatch | undefined;
	readonly Port?: number | undefined;
	readonly Prefix?: string | undefined;
	readonly QueryParameters?: QueryParameter[] | undefined;
	readonly Scheme?: string | undefined;
}
export interface HttpTimeout {
	readonly Idle?: Duration | undefined;
	readonly PerRequest?: Duration | undefined;
}
export interface MatchRange {
	readonly End: number;
	readonly Start: number;
}
export interface RouteSpec {
	readonly GrpcRoute?: GrpcRoute | undefined;
	readonly Http2Route?: HttpRoute | undefined;
	readonly HttpRoute?: HttpRoute | undefined;
	readonly Priority?: number | undefined;
	readonly TcpRoute?: TcpRoute | undefined;
}
export interface TcpRoute {
	readonly Action: TcpRouteAction;
	readonly Match?: TcpRouteMatch | undefined;
	readonly Timeout?: TcpTimeout | undefined;
}
export interface TcpRouteAction {
	readonly WeightedTargets: WeightedTarget[];
}
export interface TcpRouteMatch {
	readonly Port?: number | undefined;
}
export interface TcpTimeout {
	readonly Idle?: Duration | undefined;
}
export interface WeightedTarget {
	readonly Port?: number | undefined;
	readonly VirtualNode: string;
	readonly Weight: number;
}
export interface JsonFormatRef {
	readonly Key: string;
	readonly Value: string;
}
export interface LoggingFormat {
	readonly Json?: JsonFormatRef[] | undefined;
	readonly Text?: string | undefined;
}
export interface SubjectAlternativeNameMatchers {
	readonly Exact?: string[] | undefined;
}
export interface SubjectAlternativeNames {
	readonly Match: SubjectAlternativeNameMatchers;
}
export interface VirtualGatewayAccessLog {
	readonly File?: VirtualGatewayFileAccessLog | undefined;
}
export interface VirtualGatewayBackendDefaults {
	readonly ClientPolicy?: VirtualGatewayClientPolicy | undefined;
}
export interface VirtualGatewayClientPolicy {
	readonly TLS?: VirtualGatewayClientPolicyTls | undefined;
}
export interface VirtualGatewayClientPolicyTls {
	readonly Certificate?: VirtualGatewayClientTlsCertificate | undefined;
	readonly Enforce?: boolean | undefined;
	readonly Ports?: number[] | undefined;
	readonly Validation: VirtualGatewayTlsValidationContext;
}
export interface VirtualGatewayClientTlsCertificate {
	readonly File?: VirtualGatewayListenerTlsFileCertificate | undefined;
	readonly SDS?: VirtualGatewayListenerTlsSdsCertificate | undefined;
}
export interface VirtualGatewayConnectionPool {
	readonly GRPC?: VirtualGatewayGrpcConnectionPool | undefined;
	readonly HTTP?: VirtualGatewayHttpConnectionPool | undefined;
	readonly HTTP2?: VirtualGatewayHttp2ConnectionPool | undefined;
}
export interface VirtualGatewayFileAccessLog {
	readonly Format?: LoggingFormat | undefined;
	readonly Path: string;
}
export interface VirtualGatewayGrpcConnectionPool {
	readonly MaxRequests: number;
}
export interface VirtualGatewayHealthCheckPolicy {
	readonly HealthyThreshold: number;
	readonly IntervalMillis: number;
	readonly Path?: string | undefined;
	readonly Port?: number | undefined;
	readonly Protocol: string;
	readonly TimeoutMillis: number;
	readonly UnhealthyThreshold: number;
}
export interface VirtualGatewayHttp2ConnectionPool {
	readonly MaxRequests: number;
}
export interface VirtualGatewayHttpConnectionPool {
	readonly MaxConnections: number;
	readonly MaxPendingRequests?: number | undefined;
}
export interface VirtualGatewayListener {
	readonly ConnectionPool?: VirtualGatewayConnectionPool | undefined;
	readonly HealthCheck?: VirtualGatewayHealthCheckPolicy | undefined;
	readonly PortMapping: VirtualGatewayPortMapping;
	readonly TLS?: VirtualGatewayListenerTls | undefined;
}
export interface VirtualGatewayListenerTls {
	readonly Certificate: VirtualGatewayListenerTlsCertificate;
	readonly Mode: string;
	readonly Validation?: VirtualGatewayListenerTlsValidationContext | undefined;
}
export interface VirtualGatewayListenerTlsAcmCertificate {
	readonly CertificateArn: string;
}
export interface VirtualGatewayListenerTlsCertificate {
	readonly ACM?: VirtualGatewayListenerTlsAcmCertificate | undefined;
	readonly File?: VirtualGatewayListenerTlsFileCertificate | undefined;
	readonly SDS?: VirtualGatewayListenerTlsSdsCertificate | undefined;
}
export interface VirtualGatewayListenerTlsFileCertificate {
	readonly CertificateChain: string;
	readonly PrivateKey: string;
}
export interface VirtualGatewayListenerTlsSdsCertificate {
	readonly SecretName: string;
}
export interface VirtualGatewayListenerTlsValidationContext {
	readonly SubjectAlternativeNames?: SubjectAlternativeNames | undefined;
	readonly Trust: VirtualGatewayListenerTlsValidationContextTrust;
}
export interface VirtualGatewayListenerTlsValidationContextTrust {
	readonly File?: VirtualGatewayTlsValidationContextFileTrust | undefined;
	readonly SDS?: VirtualGatewayTlsValidationContextSdsTrust | undefined;
}
export interface VirtualGatewayLogging {
	readonly AccessLog?: VirtualGatewayAccessLog | undefined;
}
export interface VirtualGatewayPortMapping {
	readonly Port: number;
	readonly Protocol: string;
}
export interface VirtualGatewaySpec {
	readonly BackendDefaults?: VirtualGatewayBackendDefaults | undefined;
	readonly Listeners: VirtualGatewayListener[];
	readonly Logging?: VirtualGatewayLogging | undefined;
}
export interface VirtualGatewayTlsValidationContext {
	readonly SubjectAlternativeNames?: SubjectAlternativeNames | undefined;
	readonly Trust: VirtualGatewayTlsValidationContextTrust;
}
export interface VirtualGatewayTlsValidationContextAcmTrust {
	readonly CertificateAuthorityArns: string[];
}
export interface VirtualGatewayTlsValidationContextFileTrust {
	readonly CertificateChain: string;
}
export interface VirtualGatewayTlsValidationContextSdsTrust {
	readonly SecretName: string;
}
export interface VirtualGatewayTlsValidationContextTrust {
	readonly ACM?: VirtualGatewayTlsValidationContextAcmTrust | undefined;
	readonly File?: VirtualGatewayTlsValidationContextFileTrust | undefined;
	readonly SDS?: VirtualGatewayTlsValidationContextSdsTrust | undefined;
}
export interface AccessLog {
	readonly File?: FileAccessLog | undefined;
}
export interface AwsCloudMapInstanceAttribute {
	readonly Key: string;
	readonly Value: string;
}
export interface AwsCloudMapServiceDiscovery {
	readonly Attributes?: AwsCloudMapInstanceAttribute[] | undefined;
	readonly IpPreference?: string | undefined;
	readonly NamespaceName: string;
	readonly ServiceName: string;
}
export interface Backend {
	readonly VirtualService?: VirtualServiceBackend | undefined;
}
export interface BackendDefaults {
	readonly ClientPolicy?: ClientPolicy | undefined;
}
export interface ClientPolicy {
	readonly TLS?: ClientPolicyTls | undefined;
}
export interface ClientPolicyTls {
	readonly Certificate?: ClientTlsCertificate | undefined;
	readonly Enforce?: boolean | undefined;
	readonly Ports?: number[] | undefined;
	readonly Validation: TlsValidationContext;
}
export interface ClientTlsCertificate {
	readonly File?: ListenerTlsFileCertificate | undefined;
	readonly SDS?: ListenerTlsSdsCertificate | undefined;
}
export interface DnsServiceDiscovery {
	readonly Hostname: string;
	readonly IpPreference?: string | undefined;
	readonly ResponseType?: string | undefined;
}
export interface FileAccessLog {
	readonly Format?: LoggingFormat | undefined;
	readonly Path: string;
}
export interface HealthCheck {
	readonly HealthyThreshold: number;
	readonly IntervalMillis: number;
	readonly Path?: string | undefined;
	readonly Port?: number | undefined;
	readonly Protocol: string;
	readonly TimeoutMillis: number;
	readonly UnhealthyThreshold: number;
}
export interface Listener {
	readonly ConnectionPool?: VirtualNodeConnectionPool | undefined;
	readonly HealthCheck?: HealthCheck | undefined;
	readonly OutlierDetection?: OutlierDetection | undefined;
	readonly PortMapping: PortMapping;
	readonly TLS?: ListenerTls | undefined;
	readonly Timeout?: ListenerTimeout | undefined;
}
export interface ListenerTimeout {
	readonly GRPC?: GrpcTimeout | undefined;
	readonly HTTP?: HttpTimeout | undefined;
	readonly HTTP2?: HttpTimeout | undefined;
	readonly TCP?: TcpTimeout | undefined;
}
export interface ListenerTls {
	readonly Certificate: ListenerTlsCertificate;
	readonly Mode: string;
	readonly Validation?: ListenerTlsValidationContext | undefined;
}
export interface ListenerTlsAcmCertificate {
	readonly CertificateArn: string;
}
export interface ListenerTlsCertificate {
	readonly ACM?: ListenerTlsAcmCertificate | undefined;
	readonly File?: ListenerTlsFileCertificate | undefined;
	readonly SDS?: ListenerTlsSdsCertificate | undefined;
}
export interface ListenerTlsFileCertificate {
	readonly CertificateChain: string;
	readonly PrivateKey: string;
}
export interface ListenerTlsSdsCertificate {
	readonly SecretName: string;
}
export interface ListenerTlsValidationContext {
	readonly SubjectAlternativeNames?: SubjectAlternativeNames | undefined;
	readonly Trust: ListenerTlsValidationContextTrust;
}
export interface ListenerTlsValidationContextTrust {
	readonly File?: TlsValidationContextFileTrust | undefined;
	readonly SDS?: TlsValidationContextSdsTrust | undefined;
}
export interface Logging {
	readonly AccessLog?: AccessLog | undefined;
}
export interface OutlierDetection {
	readonly BaseEjectionDuration: Duration;
	readonly Interval: Duration;
	readonly MaxEjectionPercent: number;
	readonly MaxServerErrors: number;
}
export interface PortMapping {
	readonly Port: number;
	readonly Protocol: string;
}
export interface ServiceDiscovery {
	readonly AWSCloudMap?: AwsCloudMapServiceDiscovery | undefined;
	readonly DNS?: DnsServiceDiscovery | undefined;
}
export interface TlsValidationContext {
	readonly SubjectAlternativeNames?: SubjectAlternativeNames | undefined;
	readonly Trust: TlsValidationContextTrust;
}
export interface TlsValidationContextAcmTrust {
	readonly CertificateAuthorityArns: string[];
}
export interface TlsValidationContextFileTrust {
	readonly CertificateChain: string;
}
export interface TlsValidationContextSdsTrust {
	readonly SecretName: string;
}
export interface TlsValidationContextTrust {
	readonly ACM?: TlsValidationContextAcmTrust | undefined;
	readonly File?: TlsValidationContextFileTrust | undefined;
	readonly SDS?: TlsValidationContextSdsTrust | undefined;
}
export interface VirtualNodeConnectionPool {
	readonly GRPC?: VirtualNodeGrpcConnectionPool | undefined;
	readonly HTTP?: VirtualNodeHttpConnectionPool | undefined;
	readonly HTTP2?: VirtualNodeHttp2ConnectionPool | undefined;
	readonly TCP?: VirtualNodeTcpConnectionPool | undefined;
}
export interface VirtualNodeGrpcConnectionPool {
	readonly MaxRequests: number;
}
export interface VirtualNodeHttp2ConnectionPool {
	readonly MaxRequests: number;
}
export interface VirtualNodeHttpConnectionPool {
	readonly MaxConnections: number;
	readonly MaxPendingRequests?: number | undefined;
}
export interface VirtualNodeSpec {
	readonly BackendDefaults?: BackendDefaults | undefined;
	readonly Backends?: Backend[] | undefined;
	readonly Listeners?: Listener[] | undefined;
	readonly Logging?: Logging | undefined;
	readonly ServiceDiscovery?: ServiceDiscovery | undefined;
}
export interface VirtualNodeTcpConnectionPool {
	readonly MaxConnections: number;
}
export interface VirtualServiceBackend {
	readonly ClientPolicy?: ClientPolicy | undefined;
	readonly VirtualServiceName: string;
}
export interface VirtualRouterListener {
	readonly PortMapping: PortMapping;
}
export interface VirtualRouterSpec {
	readonly Listeners: VirtualRouterListener[];
}
export interface VirtualNodeServiceProvider {
	readonly VirtualNodeName: string;
}
export interface VirtualRouterServiceProvider {
	readonly VirtualRouterName: string;
}
export interface VirtualServiceProvider {
	readonly VirtualNode?: VirtualNodeServiceProvider | undefined;
	readonly VirtualRouter?: VirtualRouterServiceProvider | undefined;
}
export interface VirtualServiceSpec {
	readonly Provider?: VirtualServiceProvider | undefined;
}
export default {
	GatewayRoute: GatewayRoute,
	Mesh: Mesh,
	Route: Route,
	VirtualGateway: VirtualGateway,
	VirtualNode: VirtualNode,
	VirtualRouter: VirtualRouter,
	VirtualService: VirtualService,
};
