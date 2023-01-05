import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class AclRule extends RosResource<AclRuleComponentInputs> implements AclRuleComponentOutputs {
	constructor(entity: ADKEntity, options: AclRuleComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::WAF::AclRule", options);
	}
}
export interface AclRuleComponentOutputs {}
export interface AclRuleComponentInputs {
	readonly Domain: string;
	readonly InstanceId: string;
	readonly Rules: string;
	readonly Region?: string | undefined;
	readonly RuleId?: number | undefined;
	readonly LogicalId: string;
}
export class Domain extends RosResource<DomainComponentInputs> implements DomainComponentOutputs {
	constructor(entity: ADKEntity, options: DomainComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::WAF::Domain", options);
	}
	public readonly Cname: any;
	public readonly Version: any;
}
export interface DomainComponentOutputs {
	readonly Cname: any;
	readonly Version: any;
}
export interface DomainComponentInputs {
	readonly DomainName: any | string;
	readonly InstanceId: any | string;
	readonly IsAccessProduct: any | string;
	readonly SourceIps: any | string[];
	readonly ClusterType?: any | string;
	readonly ConnectionTime?: number | undefined;
	readonly Http2Port?: any | string[];
	readonly HttpPort?: any | string[];
	readonly HttpsPort?: any | string[];
	readonly HttpsRedirect?: any | string;
	readonly HttpToUserIp?: any | string;
	readonly LoadBalancing?: any | string;
	readonly LogHeaders?: LogHeaders[] | any;
	readonly ReadTime?: number | undefined;
	readonly ResourceGroupId?: any | string;
	readonly WriteTime?: number | undefined;
	readonly LogicalId: string;
}
export class DomainConfig extends RosResource<DomainConfigComponentInputs> implements DomainConfigComponentOutputs {
	constructor(entity: ADKEntity, options: DomainConfigComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::WAF::DomainConfig", options);
	}
	public readonly ProtocolType: any;
	public readonly Cname: any;
}
export interface DomainConfigComponentOutputs {
	readonly ProtocolType: any;
	readonly Cname: any;
}
export interface DomainConfigComponentInputs {
	readonly Domain: string;
	readonly InstanceId: string;
	readonly IsAccessProduct: number;
	readonly Protocols: string;
	readonly HttpPort?: string | undefined;
	readonly HttpsPort?: string | undefined;
	readonly HttpsRedirect?: number | undefined;
	readonly HttpToUserIp?: number | undefined;
	readonly LoadBalancing?: number | undefined;
	readonly Region?: string | undefined;
	readonly RsType?: number | undefined;
	readonly SourceIps?: string | undefined;
	readonly LogicalId: string;
}
export class Instance extends RosResource<InstanceComponentInputs> implements InstanceComponentOutputs {
	constructor(entity: ADKEntity, options: InstanceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::WAF::Instance", options);
	}
	public readonly Trial: any;
	public readonly InstanceId: any;
	public readonly InDebt: any;
	public readonly RemainDay: any;
	public readonly EndDate: any;
}
export interface InstanceComponentOutputs {
	readonly Trial: any;
	readonly InstanceId: any;
	readonly InDebt: any;
	readonly RemainDay: any;
	readonly EndDate: any;
}
export interface InstanceComponentInputs {
	readonly BigScreen: string;
	readonly ExclusiveIpPackage: string;
	readonly ExtBandwidth: string;
	readonly ExtDomainPackage: string;
	readonly LogStorage: string;
	readonly LogTime: string;
	readonly PackageCode: string;
	readonly PrefessionalService: string;
	readonly SubscriptionType: any | string;
	readonly WafLog: string;
	readonly Period?: string | undefined;
	readonly RenewalStatus?: string | undefined;
	readonly RenewPeriod?: string | undefined;
	readonly LogicalId: string;
}
export class LogServiceEnable
	extends RosResource<LogServiceEnableComponentInputs>
	implements LogServiceEnableComponentOutputs
{
	constructor(entity: ADKEntity, options: LogServiceEnableComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::WAF::LogServiceEnable", options);
	}
}
export interface LogServiceEnableComponentOutputs {}
export interface LogServiceEnableComponentInputs {
	readonly Domain: any | string;
	readonly InstanceId: any | string;
	readonly LogicalId: string;
}
export class WafSwitch extends RosResource<WafSwitchComponentInputs> implements WafSwitchComponentOutputs {
	constructor(entity: ADKEntity, options: WafSwitchComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::WAF::WafSwitch", options);
	}
}
export interface WafSwitchComponentOutputs {}
export interface WafSwitchComponentInputs {
	readonly Domain: string;
	readonly InstanceId: string;
	readonly ServiceOn: number;
	readonly Region?: string | undefined;
	readonly LogicalId: string;
}
export interface LogHeaders {
	readonly V?: string | undefined;
	readonly K?: string | undefined;
}
export default {
	AclRule: AclRule,
	Domain: Domain,
	DomainConfig: DomainConfig,
	Instance: Instance,
	LogServiceEnable: LogServiceEnable,
	WafSwitch: WafSwitch,
};
