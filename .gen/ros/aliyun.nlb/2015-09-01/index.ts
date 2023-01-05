import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Listener extends RosResource<ListenerComponentInputs> implements ListenerComponentOutputs {
	constructor(entity: ADKEntity, options: ListenerComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::NLB::Listener", options);
	}
	public readonly ListenerId: any;
}
export interface ListenerComponentOutputs {
	readonly ListenerId: any;
}
export interface ListenerComponentInputs {
	readonly ListenerProtocol: string;
	readonly LoadBalancerId: string;
	readonly ServerGroupId: string;
	readonly AlpnEnabled?: boolean | undefined;
	readonly AlpnPolicy?: string | undefined;
	readonly CaCertificateIds?: string[] | undefined;
	readonly CaEnabled?: boolean | undefined;
	readonly CertificateIds?: string[] | undefined;
	readonly Cps?: number | undefined;
	readonly Enable?: boolean | undefined;
	readonly EndPort?: number | undefined;
	readonly IdleTimeout?: number | undefined;
	readonly ListenerDescription?: string | undefined;
	readonly ListenerPort?: any | number;
	readonly Mss?: number | undefined;
	readonly ProxyProtocolEnabled?: boolean | undefined;
	readonly SecSensorEnabled?: boolean | undefined;
	readonly SecurityPolicyId?: string | undefined;
	readonly StartPort?: number | undefined;
	readonly LogicalId: string;
}
export class LoadBalancer extends RosResource<LoadBalancerComponentInputs> implements LoadBalancerComponentOutputs {
	constructor(entity: ADKEntity, options: LoadBalancerComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::NLB::LoadBalancer", options);
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
	readonly VpcId: any | string;
	readonly ZoneMappings: ZoneMappings[] | any;
	readonly AddressIpVersion?: any | string;
	readonly BandwidthPackageId?: string | undefined;
	readonly CrossZoneEnabled?: boolean | undefined;
	readonly LoadBalancerBillingConfig?: LoadBalancerBillingConfig | undefined;
	readonly LoadBalancerName?: string | undefined;
	readonly LoadBalancerType?: any | string;
	readonly ResourceGroupId?: string | undefined;
	readonly TrafficAffinityEnabled?: boolean | undefined;
	readonly LogicalId: string;
}
export class ServerGroup extends RosResource<ServerGroupComponentInputs> implements ServerGroupComponentOutputs {
	constructor(entity: ADKEntity, options: ServerGroupComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::NLB::ServerGroup", options);
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
	readonly AddressIPVersion?: string | undefined;
	readonly ConnectionDrainEnabled?: boolean | undefined;
	readonly ConnectionDrainTimeout?: number | undefined;
	readonly PersistenceEnabled?: boolean | undefined;
	readonly PersistenceTimeout?: number | undefined;
	readonly PreserveClientIpEnabled?: boolean | undefined;
	readonly Protocol?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly Scheduler?: string | undefined;
	readonly ServerGroupType?: string | undefined;
	readonly Servers?: Servers[] | undefined;
	readonly LogicalId: string;
}
export interface LoadBalancerBillingConfig {
	readonly PayType?: string | undefined;
}
export interface ZoneMappings {
	readonly ZoneId: string;
	readonly VSwitchId: string;
	readonly AllocationId?: string | undefined;
	readonly PrivateIPv4Address?: string | undefined;
}
export interface HealthCheckConfig {
	readonly HealthCheckInterval?: number | undefined;
	readonly HealthCheckUrl?: string | undefined;
	readonly HealthCheckConnectPort?: number | undefined;
	readonly UnhealthyThreshold?: number | undefined;
	readonly HttpCheckMethod: string;
	readonly HealthyThreshold?: number | undefined;
	readonly HealthCheckConnectTimeout?: number | undefined;
	readonly HealthCheckDomain?: string | undefined;
	readonly HealthCheckEnabled?: boolean | undefined;
	readonly HealthCheckHttpCode?: string[] | undefined;
	readonly HealthCheckType?: string | undefined;
}
export interface Servers {
	readonly ServerType: string;
	readonly Description?: string | undefined;
	readonly ServerId: string;
	readonly ServerIp?: string | undefined;
	readonly Port: number;
	readonly Weight?: number | undefined;
}
export default {
	Listener: Listener,
	LoadBalancer: LoadBalancer,
	ServerGroup: ServerGroup,
};
