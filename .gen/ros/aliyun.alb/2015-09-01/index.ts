import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Acl extends RosResource<AclComponentInputs> implements AclComponentOutputs {
	constructor(entity: ADKEntity, options: AclComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ALB::Acl", options);
	}
	public readonly AclId: any;
}
export interface AclComponentOutputs {
	readonly AclId: any;
}
export interface AclComponentInputs {
	readonly AclEntries?: (AclEntries[] | undefined) | undefined;
	readonly AclName?: (string | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class AclAssociation extends RosResource<AclAssociationComponentInputs> implements AclAssociationComponentOutputs {
	constructor(entity: ADKEntity, options: AclAssociationComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ALB::AclAssociation", options);
	}
}
export interface AclAssociationComponentOutputs {}
export interface AclAssociationComponentInputs {
	readonly AclIds: string[];
	readonly AclType: string;
	readonly ListenerId: any | string;
	readonly LogicalId: string;
}
export class BackendServerAttachment
	extends RosResource<BackendServerAttachmentComponentInputs>
	implements BackendServerAttachmentComponentOutputs
{
	constructor(entity: ADKEntity, options: BackendServerAttachmentComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ALB::BackendServerAttachment", options);
	}
}
export interface BackendServerAttachmentComponentOutputs {}
export interface BackendServerAttachmentComponentInputs {
	readonly ServerGroupId: any | string;
	readonly Servers: Servers[];
	readonly LogicalId: string;
}
export class HealthCheckTemplate
	extends RosResource<HealthCheckTemplateComponentInputs>
	implements HealthCheckTemplateComponentOutputs
{
	constructor(entity: ADKEntity, options: HealthCheckTemplateComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ALB::HealthCheckTemplate", options);
	}
	public readonly HealthCheckTemplateId: any;
}
export interface HealthCheckTemplateComponentOutputs {
	readonly HealthCheckTemplateId: any;
}
export interface HealthCheckTemplateComponentInputs {
	readonly HealthCheckTemplateName: string;
	readonly HealthCheckCodes?: (string[] | undefined) | undefined;
	readonly HealthCheckConnectPort?: (number | undefined) | undefined;
	readonly HealthCheckHost?: (string | undefined) | undefined;
	readonly HealthCheckInterval?: (number | undefined) | undefined;
	readonly HealthCheckMethod?: (string | undefined) | undefined;
	readonly HealthCheckPath?: (string | undefined) | undefined;
	readonly HealthCheckProtocol?: (string | undefined) | undefined;
	readonly HealthCheckTimeout?: (number | undefined) | undefined;
	readonly HealthyThreshold?: (number | undefined) | undefined;
	readonly UnhealthyThreshold?: (number | undefined) | undefined;
	readonly LogicalId: string;
}
export class Listener extends RosResource<ListenerComponentInputs> implements ListenerComponentOutputs {
	constructor(entity: ADKEntity, options: ListenerComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ALB::Listener", options);
	}
	public readonly ListenerId: any;
}
export interface ListenerComponentOutputs {
	readonly ListenerId: any;
}
export interface ListenerComponentInputs {
	readonly DefaultActions: DefaultActions[];
	readonly ListenerPort: number;
	readonly ListenerProtocol: string;
	readonly LoadBalancerId: string;
	readonly CaCertificates?: (CaCertificates[] | undefined) | undefined;
	readonly CaEnabled?: (boolean | undefined) | undefined;
	readonly Certificates?: (Certificates[] | undefined) | undefined;
	readonly GzipEnabled?: (boolean | undefined) | undefined;
	readonly Http2Enabled?: (boolean | undefined) | undefined;
	readonly IdleTimeout?: (number | undefined) | undefined;
	readonly ListenerDescription?: (string | undefined) | undefined;
	readonly QuicConfig?: (QuicConfig | undefined) | undefined;
	readonly RequestTimeout?: (number | undefined) | undefined;
	readonly SecurityPolicyId?: (string | undefined) | undefined;
	readonly XForwardedForConfig?: (XForwardedForConfig | undefined) | undefined;
	readonly LogicalId: string;
}
export class LoadBalancer extends RosResource<LoadBalancerComponentInputs> implements LoadBalancerComponentOutputs {
	constructor(entity: ADKEntity, options: LoadBalancerComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ALB::LoadBalancer", options);
	}
	public readonly LoadBalancerId: any;
	public readonly DnsName: any;
}
export interface LoadBalancerComponentOutputs {
	readonly LoadBalancerId: any;
	readonly DnsName: any;
}
export interface LoadBalancerComponentInputs {
	readonly AddressType: any | string;
	readonly LoadBalancerBillingConfig: LoadBalancerBillingConfig;
	readonly LoadBalancerEdition: any | string;
	readonly LoadBalancerName: string;
	readonly VpcId: any | string;
	readonly ZoneMappings: ZoneMappings[] | any;
	readonly AccessLogConfig?: (AccessLogConfig | undefined) | undefined;
	readonly AddressAllocatedMode?: (string | undefined) | undefined;
	readonly AddressIpVersion?: (string | undefined) | undefined;
	readonly BandwidthPackageId?: (string | undefined) | undefined;
	readonly DeletionProtectionEnabled?: (boolean | undefined) | undefined;
	readonly ModificationProtectionConfig?: (ModificationProtectionConfig | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Rule extends RosResource<RuleComponentInputs> implements RuleComponentOutputs {
	constructor(entity: ADKEntity, options: RuleComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ALB::Rule", options);
	}
	public readonly RuleId: any;
}
export interface RuleComponentOutputs {
	readonly RuleId: any;
}
export interface RuleComponentInputs {
	readonly ListenerId: string;
	readonly Priority: number;
	readonly RuleActions: RuleActions[];
	readonly RuleConditions: RuleConditions[];
	readonly RuleName: string;
	readonly Direction?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class SecurityPolicy extends RosResource<SecurityPolicyComponentInputs> implements SecurityPolicyComponentOutputs {
	constructor(entity: ADKEntity, options: SecurityPolicyComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ALB::SecurityPolicy", options);
	}
	public readonly SecurityPolicyId: any;
}
export interface SecurityPolicyComponentOutputs {
	readonly SecurityPolicyId: any;
}
export interface SecurityPolicyComponentInputs {
	readonly Ciphers: string[];
	readonly SecurityPolicyName: string;
	readonly TLSVersions: string[];
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class ServerGroup extends RosResource<ServerGroupComponentInputs> implements ServerGroupComponentOutputs {
	constructor(entity: ADKEntity, options: ServerGroupComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ALB::ServerGroup", options);
	}
	public readonly ServerGroupId: any;
}
export interface ServerGroupComponentOutputs {
	readonly ServerGroupId: any;
}
export interface ServerGroupComponentInputs {
	readonly HealthCheckConfig: HealthCheckConfig;
	readonly ServerGroupName: string;
	readonly VpcId: string;
	readonly Protocol?: (string | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly Scheduler?: (string | undefined) | undefined;
	readonly ServerGroupType?: (string | undefined) | undefined;
	readonly ServiceName?: (string | undefined) | undefined;
	readonly StickySessionConfig?: (StickySessionConfig | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface AclEntries {
	readonly Entry: string;
	readonly Description?: (string | undefined) | undefined;
}
export interface Servers {
	readonly ServerType: string;
	readonly Description?: (string | undefined) | undefined;
	readonly ServerId: string;
	readonly ServerIp?: (string | undefined) | undefined;
	readonly Port?: (number | undefined) | undefined;
	readonly Weight?: (number | undefined) | undefined;
}
export interface CaCertificates {
	readonly CertificateId?: (string | undefined) | undefined;
}
export interface Certificates {
	readonly CertificateId?: (string | undefined) | undefined;
}
export interface DefaultActions {
	readonly Type: string;
	readonly ForwardGroupConfig: ForwardGroupConfig;
}
export interface ForwardGroupConfig {
	readonly ServerGroupTuples: ServerGroupTuples[];
}
export interface QuicConfig {
	readonly QuicListenerId?: (string | undefined) | undefined;
	readonly QuicUpgradeEnabled?: (boolean | undefined) | undefined;
}
export interface ServerGroupTuples {
	readonly ServerGroupId: string;
}
export interface XForwardedForConfig {
	readonly XForwardedForClientSourceIpsEnabled?: (boolean | undefined) | undefined;
	readonly XForwardedForClientCertFingerprintAlias?: (string | undefined) | undefined;
	readonly XForwardedForClientCertFingerprintEnabled?: (boolean | undefined) | undefined;
	readonly XForwardedForClientSourceIpsTrusted?: (string | undefined) | undefined;
	readonly XForwardedForClientCertIssuerDNAlias?: (string | undefined) | undefined;
	readonly XForwardedForClientCertClientVerifyAlias?: (string | undefined) | undefined;
	readonly XForwardedForSLBIdEnabled?: (boolean | undefined) | undefined;
	readonly XForwardedForClientCertSubjectDNEnabled?: (boolean | undefined) | undefined;
	readonly XForwardedForClientCertSubjectDNAlias?: (string | undefined) | undefined;
	readonly XForwardedForProtoEnabled?: (boolean | undefined) | undefined;
	readonly XForwardedForClientSrcPortEnabled?: (boolean | undefined) | undefined;
	readonly XForwardedForSLBPortEnabled?: (boolean | undefined) | undefined;
	readonly XForwardedForEnabled?: (boolean | undefined) | undefined;
	readonly XForwardedForClientCertIssuerDNEnabled?: (boolean | undefined) | undefined;
	readonly XForwardedForClientCertClientVerifyEnabled?: (boolean | undefined) | undefined;
}
export interface AccessLogConfig {
	readonly LogStore: string;
	readonly Enable?: (boolean | undefined) | undefined;
	readonly LogProject: string;
}
export interface LoadBalancerBillingConfig {
	readonly PayType: string;
}
export interface ModificationProtectionConfig {
	readonly Status: string;
	readonly Reason?: (string | undefined) | undefined;
}
export interface Tags {
	readonly Value?: (string | undefined) | undefined;
	readonly Key: string;
}
export interface ZoneMappings {
	readonly ZoneId: string;
	readonly VSwitchId: string;
}
export interface CookieConfig {
	readonly Values?: (Values[] | undefined) | undefined;
}
export interface FixedResponseConfig {
	readonly HttpCode?: (string | undefined) | undefined;
	readonly ContentType?: (string | undefined) | undefined;
	readonly Content?: (string | undefined) | undefined;
}
export interface HeaderConfig {
	readonly Values?: (string[] | undefined) | undefined;
	readonly Key?: (string | undefined) | undefined;
}
export interface HostConfig {
	readonly Values?: (string[] | undefined) | undefined;
}
export interface InsertHeaderConfig {
	readonly ValueType?: (string | undefined) | undefined;
	readonly Value?: (string | undefined) | undefined;
	readonly Key?: (string | undefined) | undefined;
}
export interface MethodConfig {
	readonly Values?: (string[] | undefined) | undefined;
}
export interface MirrorGroupConfig {
	readonly ServerGroupTuples: MirrorGroupConfigServerGroupTuples[];
}
export interface MirrorGroupConfigServerGroupTuples {
	readonly ServerGroupId: string;
}
export interface PathConfig {
	readonly Values?: (string[] | undefined) | undefined;
}
export interface QueryStringConfig {
	readonly Values?: (QueryStringConfigValues[] | undefined) | undefined;
}
export interface QueryStringConfigValues {
	readonly Value?: (string | undefined) | undefined;
	readonly Key?: (string | undefined) | undefined;
}
export interface RedirectConfig {
	readonly Path?: (string | undefined) | undefined;
	readonly HttpCode?: (number | undefined) | undefined;
	readonly Query?: (string | undefined) | undefined;
	readonly Port?: (string | undefined) | undefined;
	readonly Host?: (string | undefined) | undefined;
	readonly Protocol?: (string | undefined) | undefined;
}
export interface RemoveHeaderConfig {
	readonly Key?: (string | undefined) | undefined;
}
export interface RewriteConfig {
	readonly Path?: (string | undefined) | undefined;
	readonly Query?: (string | undefined) | undefined;
	readonly Host?: (string | undefined) | undefined;
}
export interface RuleActions {
	readonly Order: number;
	readonly FixedResponseConfig?: (FixedResponseConfig | undefined) | undefined;
	readonly Type: string;
	readonly RedirectConfig?: (RedirectConfig | undefined) | undefined;
	readonly ForwardGroupConfig?: (ForwardGroupConfig | undefined) | undefined;
	readonly RemoveHeaderConfig?: (RemoveHeaderConfig | undefined) | undefined;
	readonly InsertHeaderConfig?: (InsertHeaderConfig | undefined) | undefined;
	readonly RewriteConfig?: (RewriteConfig | undefined) | undefined;
	readonly TrafficLimitConfig?: (TrafficLimitConfig | undefined) | undefined;
	readonly TrafficMirrorConfig?: (TrafficMirrorConfig | undefined) | undefined;
}
export interface RuleConditions {
	readonly MethodConfig?: (MethodConfig | undefined) | undefined;
	readonly PathConfig?: (PathConfig | undefined) | undefined;
	readonly Type: string;
	readonly QueryStringConfig?: (QueryStringConfig | undefined) | undefined;
	readonly HostConfig?: (HostConfig | undefined) | undefined;
	readonly CookieConfig?: (CookieConfig | undefined) | undefined;
	readonly HeaderConfig?: (HeaderConfig | undefined) | undefined;
	readonly SourceIpConfig?: (SourceIpConfig | undefined) | undefined;
}
export interface ServerGroupStickySession {
	readonly Timeout?: (number | undefined) | undefined;
	readonly Enabled?: (boolean | undefined) | undefined;
}
export interface SourceIpConfig {
	readonly Values?: (string[] | undefined) | undefined;
}
export interface TrafficLimitConfig {
	readonly PerIpQps?: (number | undefined) | undefined;
	readonly QPS: number;
}
export interface TrafficMirrorConfig {
	readonly MirrorGroupConfig: MirrorGroupConfig;
	readonly TargetType: string;
}
export interface Values {
	readonly Value?: (string | undefined) | undefined;
	readonly Key?: (string | undefined) | undefined;
}
export interface HealthCheckConfig {
	readonly HealthCheckInterval?: (number | undefined) | undefined;
	readonly HealthCheckConnectPort?: (number | undefined) | undefined;
	readonly HealthCheckCodes?: (string[] | undefined) | undefined;
	readonly UnhealthyThreshold?: (number | undefined) | undefined;
	readonly HealthCheckMethod?: (string | undefined) | undefined;
	readonly HealthCheckPath?: (string | undefined) | undefined;
	readonly HealthCheckHost?: (string | undefined) | undefined;
	readonly HealthyThreshold?: (number | undefined) | undefined;
	readonly HealthCheckProtocol?: (string | undefined) | undefined;
	readonly HealthCheckHttpVersion?: (string | undefined) | undefined;
	readonly HealthCheckEnabled: boolean;
	readonly HealthCheckTimeout?: (number | undefined) | undefined;
}
export interface StickySessionConfig {
	readonly Cookie?: (string | undefined) | undefined;
	readonly CookieTimeout?: (number | undefined) | undefined;
	readonly StickySessionType?: (string | undefined) | undefined;
	readonly StickySessionEnabled?: (boolean | undefined) | undefined;
}
export default {
	Acl: Acl,
	AclAssociation: AclAssociation,
	BackendServerAttachment: BackendServerAttachment,
	HealthCheckTemplate: HealthCheckTemplate,
	Listener: Listener,
	LoadBalancer: LoadBalancer,
	Rule: Rule,
	SecurityPolicy: SecurityPolicy,
	ServerGroup: ServerGroup,
};
