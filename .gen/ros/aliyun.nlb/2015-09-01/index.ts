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
	readonly AlpnEnabled?: (boolean | undefined) | undefined;
	readonly AlpnPolicy?: (string | undefined) | undefined;
	readonly CaCertificateIds?: (string[] | undefined) | undefined;
	readonly CaEnabled?: (boolean | undefined) | undefined;
	readonly CertificateIds?: (string[] | undefined) | undefined;
	readonly Cps?: (number | undefined) | undefined;
	readonly Enable?: (boolean | undefined) | undefined;
	readonly EndPort?: (number | undefined) | undefined;
	readonly IdleTimeout?: (number | undefined) | undefined;
	readonly ListenerDescription?: (string | undefined) | undefined;
	readonly ListenerPort?: (any | number) | undefined;
	readonly Mss?: (number | undefined) | undefined;
	readonly ProxyProtocolEnabled?: (boolean | undefined) | undefined;
	readonly SecSensorEnabled?: (boolean | undefined) | undefined;
	readonly SecurityPolicyId?: (string | undefined) | undefined;
	readonly StartPort?: (number | undefined) | undefined;
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
	readonly AddressIpVersion?: (any | string) | undefined;
	readonly BandwidthPackageId?: (string | undefined) | undefined;
	readonly CrossZoneEnabled?: (boolean | undefined) | undefined;
	readonly LoadBalancerBillingConfig?: (LoadBalancerBillingConfig | undefined) | undefined;
	readonly LoadBalancerName?: (string | undefined) | undefined;
	readonly LoadBalancerType?: (any | string) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly TrafficAffinityEnabled?: (boolean | undefined) | undefined;
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
	readonly AddressIPVersion?: (string | undefined) | undefined;
	readonly ConnectionDrainEnabled?: (boolean | undefined) | undefined;
	readonly ConnectionDrainTimeout?: (number | undefined) | undefined;
	readonly PersistenceEnabled?: (boolean | undefined) | undefined;
	readonly PersistenceTimeout?: (number | undefined) | undefined;
	readonly PreserveClientIpEnabled?: (boolean | undefined) | undefined;
	readonly Protocol?: (string | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly Scheduler?: (string | undefined) | undefined;
	readonly ServerGroupType?: (string | undefined) | undefined;
	readonly Servers?: (Servers[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface LoadBalancerBillingConfig {
	readonly PayType?: (string | undefined) | undefined;
}
export interface ZoneMappings {
	readonly ZoneId: string;
	readonly VSwitchId: string;
	readonly AllocationId?: (string | undefined) | undefined;
	readonly PrivateIPv4Address?: (string | undefined) | undefined;
}
export interface HealthCheckConfig {
	readonly HealthCheckInterval?: (number | undefined) | undefined;
	readonly HealthCheckUrl?: (string | undefined) | undefined;
	readonly HealthCheckConnectPort?: (number | undefined) | undefined;
	readonly UnhealthyThreshold?: (number | undefined) | undefined;
	readonly HttpCheckMethod: string;
	readonly HealthyThreshold?: (number | undefined) | undefined;
	readonly HealthCheckConnectTimeout?: (number | undefined) | undefined;
	readonly HealthCheckDomain?: (string | undefined) | undefined;
	readonly HealthCheckEnabled?: (boolean | undefined) | undefined;
	readonly HealthCheckHttpCode?: (string[] | undefined) | undefined;
	readonly HealthCheckType?: (string | undefined) | undefined;
}
export interface Servers {
	readonly ServerType: string;
	readonly Description?: (string | undefined) | undefined;
	readonly ServerId: string;
	readonly ServerIp?: (string | undefined) | undefined;
	readonly Port: number;
	readonly Weight?: (number | undefined) | undefined;
}
export default {
	Listener: Listener,
	LoadBalancer: LoadBalancer,
	ServerGroup: ServerGroup,
};
