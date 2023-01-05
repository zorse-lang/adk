import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Routers extends GdmResource<RoutersComponentInputs> implements RoutersComponentOutputs {
	constructor(entity: ADKEntity, options: RoutersComponentInputs) {
		super(entity, options.name, "compute.alpha.Routers", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
}
export interface RoutersComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
}
export interface RoutersComponentInputs {
	readonly bgp?: RouterBgp;
	readonly bgpPeers?: RouterBgpPeer[];
	readonly description?: string;
	readonly encryptedInterconnectRouter?: boolean;
	readonly interfaces?: RouterInterface[];
	readonly md5AuthenticationKeys?: RouterMd5AuthenticationKey[];
	readonly name: string;
	readonly nats?: RouterNat[];
	readonly network?: string;
	readonly requestId?: string;
}
export interface Router {
	readonly bgp?: RouterBgp;
	readonly bgpPeers?: RouterBgpPeer[];
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly encryptedInterconnectRouter?: boolean;
	readonly id?: string;
	readonly interfaces?: RouterInterface[];
	readonly kind?: string;
	readonly md5AuthenticationKeys?: RouterMd5AuthenticationKey[];
	readonly name?: string;
	readonly nats?: RouterNat[];
	readonly network?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
}
export interface RouterAdvertisedIpRange {
	readonly description?: string;
	readonly range?: string;
}
export interface RouterBgp {
	readonly advertisedGroups?: string[];
	readonly advertisedIpRanges?: RouterAdvertisedIpRange[];
	readonly advertiseMode?: string;
	readonly asn?: number;
	readonly keepaliveInterval?: number;
}
export interface RouterBgpPeer {
	readonly advertisedGroups?: string[];
	readonly advertisedIpRanges?: RouterAdvertisedIpRange[];
	readonly advertisedRoutePriority?: number;
	readonly advertiseMode?: string;
	readonly bfd?: RouterBgpPeerBfd;
	readonly enable?: string;
	readonly enableIpv6?: boolean;
	readonly interfaceName?: string;
	readonly ipAddress?: string;
	readonly ipv6NexthopAddress?: string;
	readonly managementType?: string;
	readonly md5AuthenticationKeyName?: string;
	readonly name?: string;
	readonly peerAsn?: number;
	readonly peerIpAddress?: string;
	readonly peerIpv6NexthopAddress?: string;
	readonly routerApplianceInstance?: string;
}
export interface RouterBgpPeerBfd {
	readonly minReceiveInterval?: number;
	readonly minTransmitInterval?: number;
	readonly mode?: string;
	readonly multiplier?: number;
	readonly packetMode?: string;
	readonly sessionInitializationMode?: string;
	readonly slowTimerInterval?: number;
}
export interface RouterInterface {
	readonly ipRange?: string;
	readonly linkedInterconnectAttachment?: string;
	readonly linkedVpnTunnel?: string;
	readonly managementType?: string;
	readonly name?: string;
	readonly privateIpAddress?: string;
	readonly redundantInterface?: string;
	readonly subnetwork?: string;
}
export interface RouterMd5AuthenticationKey {
	readonly key?: string;
	readonly name?: string;
}
export interface RouterNat {
	readonly autoNetworkTier?: string;
	readonly drainNatIps?: string[];
	readonly enableDynamicPortAllocation?: boolean;
	readonly enableEndpointIndependentMapping?: boolean;
	readonly endpointTypes?: string[];
	readonly icmpIdleTimeoutSec?: number;
	readonly logConfig?: RouterNatLogConfig;
	readonly maxPortsPerVm?: number;
	readonly minPortsPerVm?: number;
	readonly name?: string;
	readonly natIpAllocateOption?: string;
	readonly natIps?: string[];
	readonly rules?: RouterNatRule[];
	readonly sourceSubnetworkIpRangesToNat?: string;
	readonly subnetworks?: RouterNatSubnetworkToNat[];
	readonly tcpEstablishedIdleTimeoutSec?: number;
	readonly tcpTimeWaitTimeoutSec?: number;
	readonly tcpTransitoryIdleTimeoutSec?: number;
	readonly type?: string;
	readonly udpIdleTimeoutSec?: number;
}
export interface RouterNatLogConfig {
	readonly enable?: boolean;
	readonly filter?: string;
}
export interface RouterNatRule {
	readonly action?: RouterNatRuleAction;
	readonly description?: string;
	readonly match?: string;
	readonly ruleNumber?: number;
}
export interface RouterNatRuleAction {
	readonly sourceNatActiveIps?: string[];
	readonly sourceNatActiveRanges?: string[];
	readonly sourceNatDrainIps?: string[];
	readonly sourceNatDrainRanges?: string[];
}
export interface RouterNatSubnetworkToNat {
	readonly name?: string;
	readonly secondaryIpRangeNames?: string[];
	readonly sourceIpRangesToNat?: string[];
}
export default {
	Routers: Routers,
};
