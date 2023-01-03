import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Routers extends GdmResource<RoutersComponentInputs> implements RoutersComponentOutputs {
	constructor(entity: ADKEntity, options: RoutersComponentInputs) {
		super(entity, options.name, "compute.v1.Routers", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
}
export interface RoutersComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
}
export interface RoutersComponentInputs {
	readonly bgp?: RouterBgp | undefined;
	readonly bgpPeers?: RouterBgpPeer[] | undefined;
	readonly description?: string | undefined;
	readonly encryptedInterconnectRouter?: boolean | undefined;
	readonly interfaces?: RouterInterface[] | undefined;
	readonly md5AuthenticationKeys?: RouterMd5AuthenticationKey[] | undefined;
	readonly name: string;
	readonly nats?: RouterNat[] | undefined;
	readonly network?: string | undefined;
	readonly requestId?: string | undefined;
	readonly type: string;
}
export interface Router {
	readonly bgp?: RouterBgp | undefined;
	readonly bgpPeers?: RouterBgpPeer[] | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly encryptedInterconnectRouter?: boolean | undefined;
	readonly id?: string | undefined;
	readonly interfaces?: RouterInterface[] | undefined;
	readonly kind?: string | undefined;
	readonly md5AuthenticationKeys?: RouterMd5AuthenticationKey[] | undefined;
	readonly name?: string | undefined;
	readonly nats?: RouterNat[] | undefined;
	readonly network?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
}
export interface RouterAdvertisedIpRange {
	readonly description?: string | undefined;
	readonly range?: string | undefined;
}
export interface RouterBgp {
	readonly advertisedGroups?: string[] | undefined;
	readonly advertisedIpRanges?: RouterAdvertisedIpRange[] | undefined;
	readonly advertiseMode?: string | undefined;
	readonly asn?: number | undefined;
	readonly keepaliveInterval?: number | undefined;
}
export interface RouterBgpPeer {
	readonly advertisedGroups?: string[] | undefined;
	readonly advertisedIpRanges?: RouterAdvertisedIpRange[] | undefined;
	readonly advertisedRoutePriority?: number | undefined;
	readonly advertiseMode?: string | undefined;
	readonly bfd?: RouterBgpPeerBfd | undefined;
	readonly enable?: string | undefined;
	readonly enableIpv6?: boolean | undefined;
	readonly interfaceName?: string | undefined;
	readonly ipAddress?: string | undefined;
	readonly ipv6NexthopAddress?: string | undefined;
	readonly managementType?: string | undefined;
	readonly md5AuthenticationKeyName?: string | undefined;
	readonly name?: string | undefined;
	readonly peerAsn?: number | undefined;
	readonly peerIpAddress?: string | undefined;
	readonly peerIpv6NexthopAddress?: string | undefined;
	readonly routerApplianceInstance?: string | undefined;
}
export interface RouterBgpPeerBfd {
	readonly minReceiveInterval?: number | undefined;
	readonly minTransmitInterval?: number | undefined;
	readonly multiplier?: number | undefined;
	readonly sessionInitializationMode?: string | undefined;
}
export interface RouterInterface {
	readonly ipRange?: string | undefined;
	readonly linkedInterconnectAttachment?: string | undefined;
	readonly linkedVpnTunnel?: string | undefined;
	readonly managementType?: string | undefined;
	readonly name?: string | undefined;
	readonly privateIpAddress?: string | undefined;
	readonly redundantInterface?: string | undefined;
	readonly subnetwork?: string | undefined;
}
export interface RouterMd5AuthenticationKey {
	readonly key?: string | undefined;
	readonly name?: string | undefined;
}
export interface RouterNat {
	readonly drainNatIps?: string[] | undefined;
	readonly enableDynamicPortAllocation?: boolean | undefined;
	readonly enableEndpointIndependentMapping?: boolean | undefined;
	readonly endpointTypes?: string[] | undefined;
	readonly icmpIdleTimeoutSec?: number | undefined;
	readonly logConfig?: RouterNatLogConfig | undefined;
	readonly maxPortsPerVm?: number | undefined;
	readonly minPortsPerVm?: number | undefined;
	readonly name?: string | undefined;
	readonly natIpAllocateOption?: string | undefined;
	readonly natIps?: string[] | undefined;
	readonly rules?: RouterNatRule[] | undefined;
	readonly sourceSubnetworkIpRangesToNat?: string | undefined;
	readonly subnetworks?: RouterNatSubnetworkToNat[] | undefined;
	readonly tcpEstablishedIdleTimeoutSec?: number | undefined;
	readonly tcpTimeWaitTimeoutSec?: number | undefined;
	readonly tcpTransitoryIdleTimeoutSec?: number | undefined;
	readonly udpIdleTimeoutSec?: number | undefined;
}
export interface RouterNatLogConfig {
	readonly enable?: boolean | undefined;
	readonly filter?: string | undefined;
}
export interface RouterNatRule {
	readonly action?: RouterNatRuleAction | undefined;
	readonly description?: string | undefined;
	readonly match?: string | undefined;
	readonly ruleNumber?: number | undefined;
}
export interface RouterNatRuleAction {
	readonly sourceNatActiveIps?: string[] | undefined;
	readonly sourceNatDrainIps?: string[] | undefined;
}
export interface RouterNatSubnetworkToNat {
	readonly name?: string | undefined;
	readonly secondaryIpRangeNames?: string[] | undefined;
	readonly sourceIpRangesToNat?: string[] | undefined;
}
export default {
	Routers: Routers,
};
