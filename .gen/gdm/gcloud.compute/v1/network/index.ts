import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Network extends GdmResource<NetworkComponentInputs> implements NetworkComponentOutputs {
	constructor(entity: ADKEntity, options: NetworkComponentInputs) {
		super(entity, options.name, "compute.v1.network", options);
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
export interface NetworkComponentOutputs {
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
export interface NetworkComponentInputs {
	readonly autoCreateSubnetworks?: boolean;
	readonly description?: string;
	readonly enableUlaInternalIpv6?: boolean;
	readonly internalIpv6Range?: string;
	readonly IPv4Range?: string;
	readonly mtu?: number;
	readonly name: string;
	readonly networkFirewallPolicyEnforcementOrder?: string;
	readonly routingConfig?: NetworkRoutingConfig;
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
	Network: Network,
};
