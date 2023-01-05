import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Listener extends CfnResource<ListenerComponentInputs> implements ListenerComponentOutputs {
	constructor(entity: ADKEntity, options: ListenerComponentInputs) {
		super(entity, options.LogicalId, "AWS::ElasticLoadBalancingV2::Listener", options);
	}
	public readonly ListenerArn: string;
}
export interface ListenerComponentOutputs {
	readonly ListenerArn: string;
}
export interface ListenerComponentInputs {
	readonly DefaultActions: Action[];
	readonly LoadBalancerArn: string;
	readonly AlpnPolicy?: string[] | undefined;
	readonly Certificates?: Certificate[] | undefined;
	readonly Port?: number | undefined;
	readonly Protocol?: string | undefined;
	readonly SslPolicy?: string | undefined;
	readonly LogicalId: string;
}
export class ListenerCertificate
	extends CfnResource<ListenerCertificateComponentInputs>
	implements ListenerCertificateComponentOutputs
{
	constructor(entity: ADKEntity, options: ListenerCertificateComponentInputs) {
		super(entity, options.LogicalId, "AWS::ElasticLoadBalancingV2::ListenerCertificate", options);
	}
}
export interface ListenerCertificateComponentOutputs {}
export interface ListenerCertificateComponentInputs {
	readonly Certificates: Certificate[];
	readonly ListenerArn: string;
	readonly LogicalId: string;
}
export class ListenerRule extends CfnResource<ListenerRuleComponentInputs> implements ListenerRuleComponentOutputs {
	constructor(entity: ADKEntity, options: ListenerRuleComponentInputs) {
		super(entity, options.LogicalId, "AWS::ElasticLoadBalancingV2::ListenerRule", options);
	}
	public readonly IsDefault: boolean;
	public readonly RuleArn: string;
}
export interface ListenerRuleComponentOutputs {
	readonly IsDefault: boolean;
	readonly RuleArn: string;
}
export interface ListenerRuleComponentInputs {
	readonly Actions: Action[];
	readonly Conditions: RuleCondition[];
	readonly ListenerArn: string;
	readonly Priority: number;
	readonly LogicalId: string;
}
export class LoadBalancer extends CfnResource<LoadBalancerComponentInputs> implements LoadBalancerComponentOutputs {
	constructor(entity: ADKEntity, options: LoadBalancerComponentInputs) {
		super(entity, options.LogicalId, "AWS::ElasticLoadBalancingV2::LoadBalancer", options);
	}
	public readonly CanonicalHostedZoneId: string;
	public readonly DnsName: string;
	public readonly LoadBalancerFullName: string;
	public readonly LoadBalancerName: string;
}
export interface LoadBalancerComponentOutputs {
	readonly CanonicalHostedZoneId: string;
	readonly DnsName: string;
	readonly LoadBalancerFullName: string;
	readonly LoadBalancerName: string;
}
export interface LoadBalancerComponentInputs {
	readonly IpAddressType?: string | undefined;
	readonly LoadBalancerAttributes?: LoadBalancerAttribute[] | undefined;
	readonly Name?: string | undefined;
	readonly Scheme?: string | undefined;
	readonly SecurityGroups?: string[];
	readonly SubnetMappings?: SubnetMapping[] | undefined;
	readonly Subnets?: string[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly Type?: string | undefined;
	readonly LogicalId: string;
}
export class TargetGroup extends CfnResource<TargetGroupComponentInputs> implements TargetGroupComponentOutputs {
	constructor(entity: ADKEntity, options: TargetGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::ElasticLoadBalancingV2::TargetGroup", options);
	}
	public readonly LoadBalancerArns: string[];
	public readonly TargetGroupFullName: string;
	public readonly TargetGroupName: string;
}
export interface TargetGroupComponentOutputs {
	readonly LoadBalancerArns: string[];
	readonly TargetGroupFullName: string;
	readonly TargetGroupName: string;
}
export interface TargetGroupComponentInputs {
	readonly HealthCheckEnabled?: boolean | undefined;
	readonly HealthCheckIntervalSeconds?: number | undefined;
	readonly HealthCheckPath?: string | undefined;
	readonly HealthCheckPort?: string | undefined;
	readonly HealthCheckProtocol?: string | undefined;
	readonly HealthCheckTimeoutSeconds?: number | undefined;
	readonly HealthyThresholdCount?: number | undefined;
	readonly IpAddressType?: string | undefined;
	readonly Matcher?: Matcher | undefined;
	readonly Name?: string | undefined;
	readonly Port?: number | undefined;
	readonly Protocol?: string | undefined;
	readonly ProtocolVersion?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly TargetGroupAttributes?: TargetGroupAttribute[] | undefined;
	readonly Targets?: TargetDescription[] | undefined;
	readonly TargetType?: string | undefined;
	readonly UnhealthyThresholdCount?: number | undefined;
	readonly VpcId?: string | undefined;
	readonly LogicalId: string;
}
export interface Action {
	readonly AuthenticateCognitoConfig?: AuthenticateCognitoConfig | undefined;
	readonly AuthenticateOidcConfig?: AuthenticateOidcConfig | undefined;
	readonly FixedResponseConfig?: FixedResponseConfig | undefined;
	readonly ForwardConfig?: ForwardConfig | undefined;
	readonly Order?: number | undefined;
	readonly RedirectConfig?: RedirectConfig | undefined;
	readonly TargetGroupArn?: string | undefined;
	readonly Type: string;
}
export interface AuthenticateCognitoConfig {
	readonly AuthenticationRequestExtraParams?: { [key: string]: string } | undefined;
	readonly OnUnauthenticatedRequest?: string | undefined;
	readonly Scope?: string | undefined;
	readonly SessionCookieName?: string | undefined;
	readonly SessionTimeout?: string | undefined;
	readonly UserPoolArn: string;
	readonly UserPoolClientId: string;
	readonly UserPoolDomain: string;
}
export interface AuthenticateOidcConfig {
	readonly AuthenticationRequestExtraParams?: { [key: string]: string } | undefined;
	readonly AuthorizationEndpoint: string;
	readonly ClientId: string;
	readonly ClientSecret?: string | undefined;
	readonly Issuer: string;
	readonly OnUnauthenticatedRequest?: string | undefined;
	readonly Scope?: string | undefined;
	readonly SessionCookieName?: string | undefined;
	readonly SessionTimeout?: string | undefined;
	readonly TokenEndpoint: string;
	readonly UseExistingClientSecret?: boolean | undefined;
	readonly UserInfoEndpoint: string;
}
export interface Certificate {
	readonly CertificateArn?: string | undefined;
}
export interface FixedResponseConfig {
	readonly ContentType?: string | undefined;
	readonly MessageBody?: string | undefined;
	readonly StatusCode: string;
}
export interface ForwardConfig {
	readonly TargetGroupStickinessConfig?: TargetGroupStickinessConfig | undefined;
	readonly TargetGroups?: TargetGroupTuple[] | undefined;
}
export interface RedirectConfig {
	readonly Host?: string | undefined;
	readonly Path?: string | undefined;
	readonly Port?: string | undefined;
	readonly Protocol?: string | undefined;
	readonly Query?: string | undefined;
	readonly StatusCode: string;
}
export interface TargetGroupStickinessConfig {
	readonly DurationSeconds?: number | undefined;
	readonly Enabled?: boolean | undefined;
}
export interface TargetGroupTuple {
	readonly TargetGroupArn?: string | undefined;
	readonly Weight?: number | undefined;
}
export interface HostHeaderConfig {
	readonly Values?: string[] | undefined;
}
export interface HttpHeaderConfig {
	readonly HttpHeaderName?: string | undefined;
	readonly Values?: string[] | undefined;
}
export interface HttpRequestMethodConfig {
	readonly Values?: string[] | undefined;
}
export interface PathPatternConfig {
	readonly Values?: string[] | undefined;
}
export interface QueryStringConfig {
	readonly Values?: QueryStringKeyValue[] | undefined;
}
export interface QueryStringKeyValue {
	readonly Key?: string | undefined;
	readonly Value?: string | undefined;
}
export interface RuleCondition {
	readonly Field?: string | undefined;
	readonly HostHeaderConfig?: HostHeaderConfig | undefined;
	readonly HttpHeaderConfig?: HttpHeaderConfig | undefined;
	readonly HttpRequestMethodConfig?: HttpRequestMethodConfig | undefined;
	readonly PathPatternConfig?: PathPatternConfig | undefined;
	readonly QueryStringConfig?: QueryStringConfig | undefined;
	readonly SourceIpConfig?: SourceIpConfig | undefined;
	readonly Values?: string[] | undefined;
}
export interface SourceIpConfig {
	readonly Values?: string[] | undefined;
}
export interface LoadBalancerAttribute {
	readonly Key?: string | undefined;
	readonly Value?: string | undefined;
}
export interface SubnetMapping {
	readonly AllocationId?: string | undefined;
	readonly IPv6Address?: string | undefined;
	readonly PrivateIPv4Address?: string | undefined;
	readonly SubnetId: string;
}
export interface Matcher {
	readonly GrpcCode?: string | undefined;
	readonly HttpCode?: string | undefined;
}
export interface TargetDescription {
	readonly AvailabilityZone?: string | undefined;
	readonly Id: string;
	readonly Port?: number | undefined;
}
export interface TargetGroupAttribute {
	readonly Key?: string | undefined;
	readonly Value?: string | undefined;
}
export default {
	Listener: Listener,
	ListenerCertificate: ListenerCertificate,
	ListenerRule: ListenerRule,
	LoadBalancer: LoadBalancer,
	TargetGroup: TargetGroup,
};
