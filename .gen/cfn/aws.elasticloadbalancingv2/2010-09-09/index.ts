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
	readonly AlpnPolicy?: (string[] | undefined) | undefined;
	readonly Certificates?: (Certificate[] | undefined) | undefined;
	readonly Port?: (number | undefined) | undefined;
	readonly Protocol?: (string | undefined) | undefined;
	readonly SslPolicy?: (string | undefined) | undefined;
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
	readonly IpAddressType?: (string | undefined) | undefined;
	readonly LoadBalancerAttributes?: (LoadBalancerAttribute[] | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Scheme?: (string | undefined) | undefined;
	readonly SecurityGroups?: string[] | undefined;
	readonly SubnetMappings?: (SubnetMapping[] | undefined) | undefined;
	readonly Subnets?: (string[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
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
	readonly HealthCheckEnabled?: (boolean | undefined) | undefined;
	readonly HealthCheckIntervalSeconds?: (number | undefined) | undefined;
	readonly HealthCheckPath?: (string | undefined) | undefined;
	readonly HealthCheckPort?: (string | undefined) | undefined;
	readonly HealthCheckProtocol?: (string | undefined) | undefined;
	readonly HealthCheckTimeoutSeconds?: (number | undefined) | undefined;
	readonly HealthyThresholdCount?: (number | undefined) | undefined;
	readonly IpAddressType?: (string | undefined) | undefined;
	readonly Matcher?: (Matcher | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Port?: (number | undefined) | undefined;
	readonly Protocol?: (string | undefined) | undefined;
	readonly ProtocolVersion?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly TargetGroupAttributes?: (TargetGroupAttribute[] | undefined) | undefined;
	readonly Targets?: (TargetDescription[] | undefined) | undefined;
	readonly TargetType?: (string | undefined) | undefined;
	readonly UnhealthyThresholdCount?: (number | undefined) | undefined;
	readonly VpcId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface Action {
	readonly AuthenticateCognitoConfig?: (AuthenticateCognitoConfig | undefined) | undefined;
	readonly AuthenticateOidcConfig?: (AuthenticateOidcConfig | undefined) | undefined;
	readonly FixedResponseConfig?: (FixedResponseConfig | undefined) | undefined;
	readonly ForwardConfig?: (ForwardConfig | undefined) | undefined;
	readonly Order?: (number | undefined) | undefined;
	readonly RedirectConfig?: (RedirectConfig | undefined) | undefined;
	readonly TargetGroupArn?: (string | undefined) | undefined;
	readonly Type: string;
}
export interface AuthenticateCognitoConfig {
	readonly AuthenticationRequestExtraParams?: ({ [key: string]: string } | undefined) | undefined;
	readonly OnUnauthenticatedRequest?: (string | undefined) | undefined;
	readonly Scope?: (string | undefined) | undefined;
	readonly SessionCookieName?: (string | undefined) | undefined;
	readonly SessionTimeout?: (string | undefined) | undefined;
	readonly UserPoolArn: string;
	readonly UserPoolClientId: string;
	readonly UserPoolDomain: string;
}
export interface AuthenticateOidcConfig {
	readonly AuthenticationRequestExtraParams?: ({ [key: string]: string } | undefined) | undefined;
	readonly AuthorizationEndpoint: string;
	readonly ClientId: string;
	readonly ClientSecret?: (string | undefined) | undefined;
	readonly Issuer: string;
	readonly OnUnauthenticatedRequest?: (string | undefined) | undefined;
	readonly Scope?: (string | undefined) | undefined;
	readonly SessionCookieName?: (string | undefined) | undefined;
	readonly SessionTimeout?: (string | undefined) | undefined;
	readonly TokenEndpoint: string;
	readonly UseExistingClientSecret?: (boolean | undefined) | undefined;
	readonly UserInfoEndpoint: string;
}
export interface Certificate {
	readonly CertificateArn?: (string | undefined) | undefined;
}
export interface FixedResponseConfig {
	readonly ContentType?: (string | undefined) | undefined;
	readonly MessageBody?: (string | undefined) | undefined;
	readonly StatusCode: string;
}
export interface ForwardConfig {
	readonly TargetGroupStickinessConfig?: (TargetGroupStickinessConfig | undefined) | undefined;
	readonly TargetGroups?: (TargetGroupTuple[] | undefined) | undefined;
}
export interface RedirectConfig {
	readonly Host?: (string | undefined) | undefined;
	readonly Path?: (string | undefined) | undefined;
	readonly Port?: (string | undefined) | undefined;
	readonly Protocol?: (string | undefined) | undefined;
	readonly Query?: (string | undefined) | undefined;
	readonly StatusCode: string;
}
export interface TargetGroupStickinessConfig {
	readonly DurationSeconds?: (number | undefined) | undefined;
	readonly Enabled?: (boolean | undefined) | undefined;
}
export interface TargetGroupTuple {
	readonly TargetGroupArn?: (string | undefined) | undefined;
	readonly Weight?: (number | undefined) | undefined;
}
export interface HostHeaderConfig {
	readonly Values?: (string[] | undefined) | undefined;
}
export interface HttpHeaderConfig {
	readonly HttpHeaderName?: (string | undefined) | undefined;
	readonly Values?: (string[] | undefined) | undefined;
}
export interface HttpRequestMethodConfig {
	readonly Values?: (string[] | undefined) | undefined;
}
export interface PathPatternConfig {
	readonly Values?: (string[] | undefined) | undefined;
}
export interface QueryStringConfig {
	readonly Values?: (QueryStringKeyValue[] | undefined) | undefined;
}
export interface QueryStringKeyValue {
	readonly Key?: (string | undefined) | undefined;
	readonly Value?: (string | undefined) | undefined;
}
export interface RuleCondition {
	readonly Field?: (string | undefined) | undefined;
	readonly HostHeaderConfig?: (HostHeaderConfig | undefined) | undefined;
	readonly HttpHeaderConfig?: (HttpHeaderConfig | undefined) | undefined;
	readonly HttpRequestMethodConfig?: (HttpRequestMethodConfig | undefined) | undefined;
	readonly PathPatternConfig?: (PathPatternConfig | undefined) | undefined;
	readonly QueryStringConfig?: (QueryStringConfig | undefined) | undefined;
	readonly SourceIpConfig?: (SourceIpConfig | undefined) | undefined;
	readonly Values?: (string[] | undefined) | undefined;
}
export interface SourceIpConfig {
	readonly Values?: (string[] | undefined) | undefined;
}
export interface LoadBalancerAttribute {
	readonly Key?: (string | undefined) | undefined;
	readonly Value?: (string | undefined) | undefined;
}
export interface SubnetMapping {
	readonly AllocationId?: (string | undefined) | undefined;
	readonly IPv6Address?: (string | undefined) | undefined;
	readonly PrivateIPv4Address?: (string | undefined) | undefined;
	readonly SubnetId: string;
}
export interface Matcher {
	readonly GrpcCode?: (string | undefined) | undefined;
	readonly HttpCode?: (string | undefined) | undefined;
}
export interface TargetDescription {
	readonly AvailabilityZone?: (string | undefined) | undefined;
	readonly Id: string;
	readonly Port?: (number | undefined) | undefined;
}
export interface TargetGroupAttribute {
	readonly Key?: (string | undefined) | undefined;
	readonly Value?: (string | undefined) | undefined;
}
export default {
	Listener: Listener,
	ListenerCertificate: ListenerCertificate,
	ListenerRule: ListenerRule,
	LoadBalancer: LoadBalancer,
	TargetGroup: TargetGroup,
};
