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
	readonly AclEntries?: AclEntries[] | undefined;
	readonly AclName?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
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
	readonly HealthCheckCodes?: string[] | undefined;
	readonly HealthCheckConnectPort?: number | undefined;
	readonly HealthCheckHost?: string | undefined;
	readonly HealthCheckInterval?: number | undefined;
	readonly HealthCheckMethod?: string | undefined;
	readonly HealthCheckPath?: string | undefined;
	readonly HealthCheckProtocol?: string | undefined;
	readonly HealthCheckTimeout?: number | undefined;
	readonly HealthyThreshold?: number | undefined;
	readonly UnhealthyThreshold?: number | undefined;
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
	readonly CaCertificates?: CaCertificates[] | undefined;
	readonly CaEnabled?: boolean | undefined;
	readonly Certificates?: Certificates[] | undefined;
	readonly GzipEnabled?: boolean | undefined;
	readonly Http2Enabled?: boolean | undefined;
	readonly IdleTimeout?: number | undefined;
	readonly ListenerDescription?: string | undefined;
	readonly QuicConfig?: QuicConfig | undefined;
	readonly RequestTimeout?: number | undefined;
	readonly SecurityPolicyId?: string | undefined;
	readonly XForwardedForConfig?: XForwardedForConfig | undefined;
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
	readonly AccessLogConfig?: AccessLogConfig | undefined;
	readonly AddressAllocatedMode?: string | undefined;
	readonly AddressIpVersion?: string | undefined;
	readonly BandwidthPackageId?: string | undefined;
	readonly DeletionProtectionEnabled?: boolean | undefined;
	readonly ModificationProtectionConfig?: ModificationProtectionConfig | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly Tags?: Tags[] | undefined;
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
	readonly Direction?: string | undefined;
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
	readonly ResourceGroupId?: string | undefined;
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
	readonly Protocol?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly Scheduler?: string | undefined;
	readonly ServerGroupType?: string | undefined;
	readonly ServiceName?: string | undefined;
	readonly StickySessionConfig?: StickySessionConfig | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly LogicalId: string;
}
export interface AclEntries {
	readonly Entry: string;
	readonly Description?: string | undefined;
}
export interface Servers {
	readonly ServerType: string;
	readonly Description?: string | undefined;
	readonly ServerId: string;
	readonly ServerIp?: string | undefined;
	readonly Port?: number | undefined;
	readonly Weight?: number | undefined;
}
export interface CaCertificates {
	readonly CertificateId?: string | undefined;
}
export interface Certificates {
	readonly CertificateId?: string | undefined;
}
export interface DefaultActions {
	readonly Type: string;
	readonly ForwardGroupConfig: ForwardGroupConfig;
}
export interface ForwardGroupConfig {
	readonly ServerGroupTuples: ServerGroupTuples[];
}
export interface QuicConfig {
	readonly QuicListenerId?: string | undefined;
	readonly QuicUpgradeEnabled?: boolean | undefined;
}
export interface ServerGroupTuples {
	readonly ServerGroupId: string;
}
export interface XForwardedForConfig {
	readonly XForwardedForClientSourceIpsEnabled?: boolean | undefined;
	readonly XForwardedForClientCertFingerprintAlias?: string | undefined;
	readonly XForwardedForClientCertFingerprintEnabled?: boolean | undefined;
	readonly XForwardedForClientSourceIpsTrusted?: string | undefined;
	readonly XForwardedForClientCertIssuerDNAlias?: string | undefined;
	readonly XForwardedForClientCertClientVerifyAlias?: string | undefined;
	readonly XForwardedForSLBIdEnabled?: boolean | undefined;
	readonly XForwardedForClientCertSubjectDNEnabled?: boolean | undefined;
	readonly XForwardedForClientCertSubjectDNAlias?: string | undefined;
	readonly XForwardedForProtoEnabled?: boolean | undefined;
	readonly XForwardedForClientSrcPortEnabled?: boolean | undefined;
	readonly XForwardedForSLBPortEnabled?: boolean | undefined;
	readonly XForwardedForEnabled?: boolean | undefined;
	readonly XForwardedForClientCertIssuerDNEnabled?: boolean | undefined;
	readonly XForwardedForClientCertClientVerifyEnabled?: boolean | undefined;
}
export interface AccessLogConfig {
	readonly LogStore: string;
	readonly Enable?: boolean | undefined;
	readonly LogProject: string;
}
export interface LoadBalancerBillingConfig {
	readonly PayType: string;
}
export interface ModificationProtectionConfig {
	readonly Status: string;
	readonly Reason?: string | undefined;
}
export interface Tags {
	readonly Value?: string | undefined;
	readonly Key: string;
}
export interface ZoneMappings {
	readonly ZoneId: string;
	readonly VSwitchId: string;
}
export interface CookieConfig {
	readonly Values?: Values[] | undefined;
}
export interface FixedResponseConfig {
	readonly HttpCode?: string | undefined;
	readonly ContentType?: string | undefined;
	readonly Content?: string | undefined;
}
export interface HeaderConfig {
	readonly Values?: string[] | undefined;
	readonly Key?: string | undefined;
}
export interface HostConfig {
	readonly Values?: string[] | undefined;
}
export interface InsertHeaderConfig {
	readonly ValueType?: string | undefined;
	readonly Value?: string | undefined;
	readonly Key?: string | undefined;
}
export interface MethodConfig {
	readonly Values?: string[] | undefined;
}
export interface MirrorGroupConfig {
	readonly ServerGroupTuples: MirrorGroupConfigServerGroupTuples[];
}
export interface MirrorGroupConfigServerGroupTuples {
	readonly ServerGroupId: string;
}
export interface PathConfig {
	readonly Values?: string[] | undefined;
}
export interface QueryStringConfig {
	readonly Values?: QueryStringConfigValues[] | undefined;
}
export interface QueryStringConfigValues {
	readonly Value?: string | undefined;
	readonly Key?: string | undefined;
}
export interface RedirectConfig {
	readonly Path?: string | undefined;
	readonly HttpCode?: number | undefined;
	readonly Query?: string | undefined;
	readonly Port?: string | undefined;
	readonly Host?: string | undefined;
	readonly Protocol?: string | undefined;
}
export interface RemoveHeaderConfig {
	readonly Key?: string | undefined;
}
export interface RewriteConfig {
	readonly Path?: string | undefined;
	readonly Query?: string | undefined;
	readonly Host?: string | undefined;
}
export interface RuleActions {
	readonly Order: number;
	readonly FixedResponseConfig?: FixedResponseConfig | undefined;
	readonly Type: string;
	readonly RedirectConfig?: RedirectConfig | undefined;
	readonly ForwardGroupConfig?: ForwardGroupConfig | undefined;
	readonly RemoveHeaderConfig?: RemoveHeaderConfig | undefined;
	readonly InsertHeaderConfig?: InsertHeaderConfig | undefined;
	readonly RewriteConfig?: RewriteConfig | undefined;
	readonly TrafficLimitConfig?: TrafficLimitConfig | undefined;
	readonly TrafficMirrorConfig?: TrafficMirrorConfig | undefined;
}
export interface RuleConditions {
	readonly MethodConfig?: MethodConfig | undefined;
	readonly PathConfig?: PathConfig | undefined;
	readonly Type: string;
	readonly QueryStringConfig?: QueryStringConfig | undefined;
	readonly HostConfig?: HostConfig | undefined;
	readonly CookieConfig?: CookieConfig | undefined;
	readonly HeaderConfig?: HeaderConfig | undefined;
	readonly SourceIpConfig?: SourceIpConfig | undefined;
}
export interface ServerGroupStickySession {
	readonly Timeout?: number | undefined;
	readonly Enabled?: boolean | undefined;
}
export interface SourceIpConfig {
	readonly Values?: string[] | undefined;
}
export interface TrafficLimitConfig {
	readonly PerIpQps?: number | undefined;
	readonly QPS: number;
}
export interface TrafficMirrorConfig {
	readonly MirrorGroupConfig: MirrorGroupConfig;
	readonly TargetType: string;
}
export interface Values {
	readonly Value?: string | undefined;
	readonly Key?: string | undefined;
}
export interface HealthCheckConfig {
	readonly HealthCheckInterval?: number | undefined;
	readonly HealthCheckConnectPort?: number | undefined;
	readonly HealthCheckCodes?: string[] | undefined;
	readonly UnhealthyThreshold?: number | undefined;
	readonly HealthCheckMethod?: string | undefined;
	readonly HealthCheckPath?: string | undefined;
	readonly HealthCheckHost?: string | undefined;
	readonly HealthyThreshold?: number | undefined;
	readonly HealthCheckProtocol?: string | undefined;
	readonly HealthCheckHttpVersion?: string | undefined;
	readonly HealthCheckEnabled: boolean;
	readonly HealthCheckTimeout?: number | undefined;
}
export interface StickySessionConfig {
	readonly Cookie?: string | undefined;
	readonly CookieTimeout?: number | undefined;
	readonly StickySessionType?: string | undefined;
	readonly StickySessionEnabled?: boolean | undefined;
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
