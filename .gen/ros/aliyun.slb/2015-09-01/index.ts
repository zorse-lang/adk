import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class AccessControl extends RosResource<AccessControlComponentInputs> implements AccessControlComponentOutputs {
	constructor(entity: ADKEntity, options: AccessControlComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SLB::AccessControl", options);
	}
	public readonly AclId: any;
}
export interface AccessControlComponentOutputs {
	readonly AclId: any;
}
export interface AccessControlComponentInputs {
	readonly AclName: string;
	readonly AclEntrys?: AclEntrys[] | undefined;
	readonly AddressIPVersion?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly LogicalId: string;
}
export class BackendServerAttachment
	extends RosResource<BackendServerAttachmentComponentInputs>
	implements BackendServerAttachmentComponentOutputs
{
	constructor(entity: ADKEntity, options: BackendServerAttachmentComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SLB::BackendServerAttachment", options);
	}
}
export interface BackendServerAttachmentComponentOutputs {}
export interface BackendServerAttachmentComponentInputs {
	readonly LoadBalancerId: any | string;
	readonly BackendServerList?: string[] | undefined;
	readonly BackendServers?: BackendServers[] | any;
	readonly BackendServerWeightList?: any[] | undefined;
	readonly LogicalId: string;
}
export class BackendServerToVServerGroupAddition
	extends RosResource<BackendServerToVServerGroupAdditionComponentInputs>
	implements BackendServerToVServerGroupAdditionComponentOutputs
{
	constructor(entity: ADKEntity, options: BackendServerToVServerGroupAdditionComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SLB::BackendServerToVServerGroupAddition", options);
	}
}
export interface BackendServerToVServerGroupAdditionComponentOutputs {}
export interface BackendServerToVServerGroupAdditionComponentInputs {
	readonly BackendServers: BackendServers[];
	readonly VServerGroupId: any | string;
	readonly LogicalId: string;
}
export class Certificate extends RosResource<CertificateComponentInputs> implements CertificateComponentOutputs {
	constructor(entity: ADKEntity, options: CertificateComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SLB::Certificate", options);
	}
	public readonly Fingerprint: any;
	public readonly CertificateId: any;
}
export interface CertificateComponentOutputs {
	readonly Fingerprint: any;
	readonly CertificateId: any;
}
export interface CertificateComponentInputs {
	readonly Certificate: string;
	readonly AliCloudCertificateId?: string | undefined;
	readonly AliCloudCertificateName?: string | undefined;
	readonly CertificateName?: string | undefined;
	readonly CertificateType?: string | undefined;
	readonly PrivateKey?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly LogicalId: string;
}
export class DomainExtension
	extends RosResource<DomainExtensionComponentInputs>
	implements DomainExtensionComponentOutputs
{
	constructor(entity: ADKEntity, options: DomainExtensionComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SLB::DomainExtension", options);
	}
	public readonly DomainExtensionId: any;
}
export interface DomainExtensionComponentOutputs {
	readonly DomainExtensionId: any;
}
export interface DomainExtensionComponentInputs {
	readonly Domain: string;
	readonly ListenerPort: any | number;
	readonly LoadBalancerId: string;
	readonly ServerCertificateId: string;
	readonly LogicalId: string;
}
export class Listener extends RosResource<ListenerComponentInputs> implements ListenerComponentOutputs {
	constructor(entity: ADKEntity, options: ListenerComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SLB::Listener", options);
	}
	public readonly ListenerPortsAndProtocol: any;
}
export interface ListenerComponentOutputs {
	readonly ListenerPortsAndProtocol: any;
}
export interface ListenerComponentInputs {
	readonly Bandwidth: number;
	readonly ListenerPort: number;
	readonly LoadBalancerId: any | string;
	readonly Protocol: string;
	readonly AclId?: string | undefined;
	readonly AclStatus?: string | undefined;
	readonly AclType?: string | undefined;
	readonly BackendServerPort?: number | undefined;
	readonly CACertificateId?: string | undefined;
	readonly Description?: string | undefined;
	readonly EnableHttp2?: string | undefined;
	readonly HealthCheck?: HealthCheck | undefined;
	readonly HttpConfig?: HttpConfig | undefined;
	readonly IdleTimeout?: number | undefined;
	readonly MasterSlaveServerGroupId?: string | undefined;
	readonly Persistence?: Persistence | undefined;
	readonly PortRange?: PortRange[] | undefined;
	readonly RequestTimeout?: number | undefined;
	readonly Scheduler?: string | undefined;
	readonly ServerCertificateId?: string | undefined;
	readonly StartListener?: boolean | undefined;
	readonly VServerGroupId?: string | undefined;
	readonly LogicalId: string;
}
export class LoadBalancer extends RosResource<LoadBalancerComponentInputs> implements LoadBalancerComponentOutputs {
	constructor(entity: ADKEntity, options: LoadBalancerComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SLB::LoadBalancer", options);
	}
	public readonly AddressIpVersion: any;
	public readonly LoadBalancerId: any;
	public readonly OrderId: any;
	public readonly NetworkType: any;
	public readonly IpAddress: any;
}
export interface LoadBalancerComponentOutputs {
	readonly AddressIpVersion: any;
	readonly LoadBalancerId: any;
	readonly OrderId: any;
	readonly NetworkType: any;
	readonly IpAddress: any;
}
export interface LoadBalancerComponentInputs {
	readonly AddressIPVersion?: string | undefined;
	readonly AddressType?: any | string;
	readonly AutoPay?: boolean | undefined;
	readonly AutoRenew?: boolean | undefined;
	readonly AutoRenewPeriod?: number | undefined;
	readonly Bandwidth?: any | number;
	readonly DeletionProtection?: boolean | undefined;
	readonly Duration?: number | undefined;
	readonly InstanceChargeType?: string | undefined;
	readonly InternetChargeType?: string | undefined;
	readonly LoadBalancerName?: any | string;
	readonly LoadBalancerSpec?: any | string;
	readonly MasterZoneId?: any | string;
	readonly ModificationProtectionReason?: string | undefined;
	readonly ModificationProtectionStatus?: string | undefined;
	readonly PayType?: any | string;
	readonly PricingCycle?: string | undefined;
	readonly ResourceGroupId?: any | string;
	readonly SlaveZoneId?: any | string;
	readonly Tags?: Tags[] | undefined;
	readonly VpcId?: any | string;
	readonly VSwitchId?: any | string;
	readonly LogicalId: string;
}
export class LoadBalancerClone
	extends RosResource<LoadBalancerCloneComponentInputs>
	implements LoadBalancerCloneComponentOutputs
{
	constructor(entity: ADKEntity, options: LoadBalancerCloneComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SLB::LoadBalancerClone", options);
	}
	public readonly LoadBalancerId: any;
}
export interface LoadBalancerCloneComponentOutputs {
	readonly LoadBalancerId: any;
}
export interface LoadBalancerCloneComponentInputs {
	readonly SourceLoadBalancerId: string;
	readonly BackendServers?: BackendServers[] | undefined;
	readonly BackendServersPolicy?: string | undefined;
	readonly InstanceChargeType?: string | undefined;
	readonly LoadBalancerName?: string | undefined;
	readonly LoadBalancerSpec?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly TagsPolicy?: string | undefined;
	readonly VSwitchId?: string | undefined;
	readonly LogicalId: string;
}
export class MasterSlaveServerGroup
	extends RosResource<MasterSlaveServerGroupComponentInputs>
	implements MasterSlaveServerGroupComponentOutputs
{
	constructor(entity: ADKEntity, options: MasterSlaveServerGroupComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SLB::MasterSlaveServerGroup", options);
	}
	public readonly MasterSlaveServerGroupId: any;
}
export interface MasterSlaveServerGroupComponentOutputs {
	readonly MasterSlaveServerGroupId: any;
}
export interface MasterSlaveServerGroupComponentInputs {
	readonly LoadBalancerId: string;
	readonly MasterSlaveBackendServers: MasterSlaveBackendServers[];
	readonly MasterSlaveServerGroupName?: string | undefined;
	readonly LogicalId: string;
}
export class Rule extends RosResource<RuleComponentInputs> implements RuleComponentOutputs {
	constructor(entity: ADKEntity, options: RuleComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SLB::Rule", options);
	}
	public readonly Rules: any;
}
export interface RuleComponentOutputs {
	readonly Rules: any;
}
export interface RuleComponentInputs {
	readonly ListenerPort: number;
	readonly LoadBalancerId: string;
	readonly RuleList: RuleList[];
	readonly LogicalId: string;
}
export class VServerGroup extends RosResource<VServerGroupComponentInputs> implements VServerGroupComponentOutputs {
	constructor(entity: ADKEntity, options: VServerGroupComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SLB::VServerGroup", options);
	}
	public readonly VServerGroupId: any;
}
export interface VServerGroupComponentOutputs {
	readonly VServerGroupId: any;
}
export interface VServerGroupComponentInputs {
	readonly LoadBalancerId: string;
	readonly VServerGroupName: string;
	readonly BackendServers?: BackendServers[] | any;
	readonly LogicalId: string;
}
export interface AclEntrys {
	readonly entry: string;
	readonly comment?: string | undefined;
}
export interface Tags {
	readonly Value?: string | undefined;
	readonly Key: string;
}
export interface BackendServers {
	readonly Type?: string | undefined;
	readonly ServerId: string;
	readonly Description?: string | undefined;
	readonly ServerIp?: string | undefined;
	readonly Weight: number;
}
export interface HealthCheck {
	readonly HttpCode?: string | undefined;
	readonly Switch?: string | undefined;
	readonly UnhealthyThreshold?: number | undefined;
	readonly Timeout?: number | undefined;
	readonly HealthCheckMethod?: string | undefined;
	readonly HealthyThreshold?: number | undefined;
	readonly Port?: number | undefined;
	readonly Domain?: string | undefined;
	readonly URI?: string | undefined;
	readonly HealthCheckType?: string | undefined;
	readonly Interval?: number | undefined;
}
export interface HttpConfig {
	readonly ListenerForward?: string | undefined;
	readonly ForwardPort?: number | undefined;
}
export interface Persistence {
	readonly XForwardedFor_SLBID?: string | undefined;
	readonly CookieTimeout?: number | undefined;
	readonly Cookie?: string | undefined;
	readonly StickySession?: string | undefined;
	readonly PersistenceTimeout?: number | undefined;
	readonly XForwardedFor_SLBPORT?: string | undefined;
	readonly XForwardedFor?: string | undefined;
	readonly XForwardedFor_ClientSrcPort?: string | undefined;
	readonly XForwardedFor_proto?: string | undefined;
	readonly StickySessionType?: string | undefined;
	readonly XForwardedFor_SLBIP?: string | undefined;
}
export interface PortRange {
	readonly StartPort: number;
	readonly EndPort: number;
}
export interface MasterSlaveBackendServers {
	readonly ServerType?: string | undefined;
	readonly ServerId: string;
	readonly Port: number;
	readonly Weight: number;
}
export interface RuleList {
	readonly VServerGroupId: string;
	readonly Domain?: string | undefined;
	readonly Url?: string | undefined;
	readonly RuleName: string;
}
export default {
	AccessControl: AccessControl,
	BackendServerAttachment: BackendServerAttachment,
	BackendServerToVServerGroupAddition: BackendServerToVServerGroupAddition,
	Certificate: Certificate,
	DomainExtension: DomainExtension,
	Listener: Listener,
	LoadBalancer: LoadBalancer,
	LoadBalancerClone: LoadBalancerClone,
	MasterSlaveServerGroup: MasterSlaveServerGroup,
	Rule: Rule,
	VServerGroup: VServerGroup,
};
