import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class InterconnectAttachments
	extends GdmResource<InterconnectAttachmentsComponentInputs>
	implements InterconnectAttachmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: InterconnectAttachmentsComponentInputs) {
		super(entity, options.name, "compute.alpha.InterconnectAttachments", options);
	}
	public readonly bandwidth?: string;
	public readonly cloudRouterIpAddress?: string;
	public readonly cloudRouterIpv6Address?: string;
	public readonly configurationConstraints?: InterconnectAttachmentConfigurationConstraints;
	public readonly creationTimestamp?: string;
	public readonly customerRouterIpAddress?: string;
	public readonly customerRouterIpv6Address?: string;
	public readonly dataplaneVersion?: number;
	public readonly googleReferenceId?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly operationalStatus?: string;
	public readonly pairingKey?: string;
	public readonly partnerAsn?: string;
	public readonly partnerMetadata?: InterconnectAttachmentPartnerMetadata;
	public readonly privateInterconnectInfo?: InterconnectAttachmentPrivateInfo;
	public readonly region?: string;
	public readonly remoteService?: string;
	public readonly satisfiesPzs?: boolean;
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
	public readonly state?: string;
}
export interface InterconnectAttachmentsComponentOutputs {
	readonly bandwidth?: string;
	readonly cloudRouterIpAddress?: string;
	readonly cloudRouterIpv6Address?: string;
	readonly configurationConstraints?: InterconnectAttachmentConfigurationConstraints;
	readonly creationTimestamp?: string;
	readonly customerRouterIpAddress?: string;
	readonly customerRouterIpv6Address?: string;
	readonly dataplaneVersion?: number;
	readonly googleReferenceId?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly operationalStatus?: string;
	readonly pairingKey?: string;
	readonly partnerAsn?: string;
	readonly partnerMetadata?: InterconnectAttachmentPartnerMetadata;
	readonly privateInterconnectInfo?: InterconnectAttachmentPrivateInfo;
	readonly region?: string;
	readonly remoteService?: string;
	readonly satisfiesPzs?: boolean;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly state?: string;
}
export interface InterconnectAttachmentsComponentInputs {
	readonly adminEnabled?: boolean;
	readonly candidateIpv6Subnets?: string[];
	readonly candidateSubnets?: string[];
	readonly cloudRouterIpv6InterfaceId?: string;
	readonly customerRouterIpv6InterfaceId?: string;
	readonly description?: string;
	readonly edgeAvailabilityDomain?: string;
	readonly encryption?: string;
	readonly interconnect?: string;
	readonly ipsecInternalAddresses?: string[];
	readonly labelFingerprint?: string;
	readonly labels?: { [P in string]: string };
	readonly mtu?: number;
	readonly name: string;
	readonly requestId?: string;
	readonly router?: string;
	readonly stackType?: string;
	readonly subnetLength?: number;
	readonly validateOnly?: boolean;
	readonly vlanTag8021q?: number;
}
export interface InterconnectAttachment {
	readonly adminEnabled?: boolean;
	readonly bandwidth?: string;
	readonly candidateIpv6Subnets?: string[];
	readonly candidateSubnets?: string[];
	readonly cloudRouterIpAddress?: string;
	readonly cloudRouterIpv6Address?: string;
	readonly cloudRouterIpv6InterfaceId?: string;
	readonly configurationConstraints?: InterconnectAttachmentConfigurationConstraints;
	readonly creationTimestamp?: string;
	readonly customerRouterIpAddress?: string;
	readonly customerRouterIpv6Address?: string;
	readonly customerRouterIpv6InterfaceId?: string;
	readonly dataplaneVersion?: number;
	readonly description?: string;
	readonly edgeAvailabilityDomain?: string;
	readonly encryption?: string;
	readonly googleReferenceId?: string;
	readonly id?: string;
	readonly interconnect?: string;
	readonly ipsecInternalAddresses?: string[];
	readonly kind?: string;
	readonly labelFingerprint?: string;
	readonly labels?: { [P in string]: string };
	readonly mtu?: number;
	readonly name?: string;
	readonly operationalStatus?: string;
	readonly pairingKey?: string;
	readonly partnerAsn?: string;
	readonly partnerMetadata?: InterconnectAttachmentPartnerMetadata;
	readonly privateInterconnectInfo?: InterconnectAttachmentPrivateInfo;
	readonly region?: string;
	readonly remoteService?: string;
	readonly router?: string;
	readonly satisfiesPzs?: boolean;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly stackType?: string;
	readonly state?: string;
	readonly subnetLength?: number;
	readonly type?: string;
	readonly vlanTag8021q?: number;
}
export interface InterconnectAttachmentConfigurationConstraints {
	readonly bgpMd5?: string;
	readonly bgpPeerAsnRanges?: InterconnectAttachmentConfigurationConstraintsBgpPeerASNRange[];
}
export interface InterconnectAttachmentConfigurationConstraintsBgpPeerASNRange {
	readonly max?: number;
	readonly min?: number;
}
export interface InterconnectAttachmentPartnerMetadata {
	readonly interconnectName?: string;
	readonly partnerName?: string;
	readonly portalUrl?: string;
}
export interface InterconnectAttachmentPrivateInfo {
	readonly tag8021q?: number;
}
export default {
	InterconnectAttachments: InterconnectAttachments,
};
