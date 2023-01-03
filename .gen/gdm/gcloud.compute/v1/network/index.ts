import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Network extends GdmResource<NetworkComponentInputs> implements NetworkComponentOutputs {
	constructor(entity: ADKEntity, options: NetworkComponentInputs) {
		super(entity, options.name, "compute.v1.network", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly firewallPolicy?: string | undefined;
	public readonly gatewayIPv4?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly peerings?: NetworkPeering[] | undefined;
	public readonly selfLink?: string | undefined;
	public readonly selfLinkWithId?: string | undefined;
	public readonly subnetworks?: string[] | undefined;
}
export interface NetworkComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly firewallPolicy?: string | undefined;
	readonly gatewayIPv4?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly peerings?: NetworkPeering[] | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly subnetworks?: string[] | undefined;
}
export interface NetworkComponentInputs {
	readonly autoCreateSubnetworks?: boolean | undefined;
	readonly description?: string | undefined;
	readonly enableUlaInternalIpv6?: boolean | undefined;
	readonly internalIpv6Range?: string | undefined;
	readonly IPv4Range?: string | undefined;
	readonly mtu?: number | undefined;
	readonly name: string;
	readonly networkFirewallPolicyEnforcementOrder?: string | undefined;
	readonly routingConfig?: NetworkRoutingConfig | undefined;
	readonly type: string;
}
export interface NetworkPeering {
	readonly autoCreateRoutes?: boolean | undefined;
	readonly exchangeSubnetRoutes?: boolean | undefined;
	readonly exportCustomRoutes?: boolean | undefined;
	readonly exportSubnetRoutesWithPublicIp?: boolean | undefined;
	readonly importCustomRoutes?: boolean | undefined;
	readonly importSubnetRoutesWithPublicIp?: boolean | undefined;
	readonly name?: string | undefined;
	readonly network?: string | undefined;
	readonly peerMtu?: number | undefined;
	readonly stackType?: string | undefined;
	readonly state?: string | undefined;
	readonly stateDetails?: string | undefined;
}
export interface NetworkRoutingConfig {
	readonly routingMode?: string | undefined;
}
export default {
	Network: Network,
};
