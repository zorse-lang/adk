import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Networks extends GdmResource<NetworksComponentInputs> implements NetworksComponentOutputs {
	constructor(entity: ADKEntity, options: NetworksComponentInputs) {
		super(entity, options.name, "compute.v1.Networks", options);
	}
	public readonly creationTimestamp?: string;
	public readonly firewallPolicy?: string;
	public readonly gatewayIPv4?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly peerings?: NetworkPeering[];
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
	public readonly subnetworks?: string[];
}
export interface NetworksComponentOutputs {
	readonly creationTimestamp?: string;
	readonly firewallPolicy?: string;
	readonly gatewayIPv4?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly peerings?: NetworkPeering[];
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly subnetworks?: string[];
}
export interface NetworksComponentInputs {
	readonly autoCreateSubnetworks?: boolean;
	readonly description?: string;
	readonly enableUlaInternalIpv6?: boolean;
	readonly internalIpv6Range?: string;
	readonly IPv4Range?: string;
	readonly mtu?: number;
	readonly name: string;
	readonly networkFirewallPolicyEnforcementOrder?: string;
	readonly requestId?: string;
	readonly routingConfig?: NetworkRoutingConfig;
}
export interface Network {
	readonly autoCreateSubnetworks?: boolean;
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly enableUlaInternalIpv6?: boolean;
	readonly firewallPolicy?: string;
	readonly gatewayIPv4?: string;
	readonly id?: string;
	readonly internalIpv6Range?: string;
	readonly IPv4Range?: string;
	readonly kind?: string;
	readonly mtu?: number;
	readonly name?: string;
	readonly networkFirewallPolicyEnforcementOrder?: string;
	readonly peerings?: NetworkPeering[];
	readonly routingConfig?: NetworkRoutingConfig;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly subnetworks?: string[];
}
export interface NetworkPeering {
	readonly autoCreateRoutes?: boolean;
	readonly exchangeSubnetRoutes?: boolean;
	readonly exportCustomRoutes?: boolean;
	readonly exportSubnetRoutesWithPublicIp?: boolean;
	readonly importCustomRoutes?: boolean;
	readonly importSubnetRoutesWithPublicIp?: boolean;
	readonly name?: string;
	readonly network?: string;
	readonly peerMtu?: number;
	readonly stackType?: string;
	readonly state?: string;
	readonly stateDetails?: string;
}
export interface NetworkRoutingConfig {
	readonly routingMode?: string;
}
export default {
	Networks: Networks,
};
