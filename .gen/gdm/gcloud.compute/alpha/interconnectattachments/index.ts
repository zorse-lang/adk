import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class InterconnectAttachments
	extends GdmResource<InterconnectAttachmentsComponentInputs>
	implements InterconnectAttachmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: InterconnectAttachmentsComponentInputs) {
		super(entity, options.name, "compute.alpha.InterconnectAttachments", options);
	}
	public readonly bandwidth?: string | undefined;
	public readonly cloudRouterIpAddress?: string | undefined;
	public readonly cloudRouterIpv6Address?: string | undefined;
	public readonly configurationConstraints?: InterconnectAttachmentConfigurationConstraints | undefined;
	public readonly creationTimestamp?: string | undefined;
	public readonly customerRouterIpAddress?: string | undefined;
	public readonly customerRouterIpv6Address?: string | undefined;
	public readonly dataplaneVersion?: number | undefined;
	public readonly googleReferenceId?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly operationalStatus?: string | undefined;
	public readonly pairingKey?: string | undefined;
	public readonly partnerAsn?: string | undefined;
	public readonly partnerMetadata?: InterconnectAttachmentPartnerMetadata | undefined;
	public readonly privateInterconnectInfo?: InterconnectAttachmentPrivateInfo | undefined;
	public readonly region?: string | undefined;
	public readonly remoteService?: string | undefined;
	public readonly satisfiesPzs?: boolean | undefined;
	public readonly selfLink?: string | undefined;
	public readonly selfLinkWithId?: string | undefined;
	public readonly state?: string | undefined;
}
export interface InterconnectAttachmentsComponentOutputs {
	readonly bandwidth?: string | undefined;
	readonly cloudRouterIpAddress?: string | undefined;
	readonly cloudRouterIpv6Address?: string | undefined;
	readonly configurationConstraints?: InterconnectAttachmentConfigurationConstraints | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly customerRouterIpAddress?: string | undefined;
	readonly customerRouterIpv6Address?: string | undefined;
	readonly dataplaneVersion?: number | undefined;
	readonly googleReferenceId?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly operationalStatus?: string | undefined;
	readonly pairingKey?: string | undefined;
	readonly partnerAsn?: string | undefined;
	readonly partnerMetadata?: InterconnectAttachmentPartnerMetadata | undefined;
	readonly privateInterconnectInfo?: InterconnectAttachmentPrivateInfo | undefined;
	readonly region?: string | undefined;
	readonly remoteService?: string | undefined;
	readonly satisfiesPzs?: boolean | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly state?: string | undefined;
}
export interface InterconnectAttachmentsComponentInputs {
	readonly adminEnabled?: boolean | undefined;
	readonly candidateIpv6Subnets?: string[] | undefined;
	readonly candidateSubnets?: string[] | undefined;
	readonly cloudRouterIpv6InterfaceId?: string | undefined;
	readonly customerRouterIpv6InterfaceId?: string | undefined;
	readonly description?: string | undefined;
	readonly edgeAvailabilityDomain?: string | undefined;
	readonly encryption?: string | undefined;
	readonly interconnect?: string | undefined;
	readonly ipsecInternalAddresses?: string[] | undefined;
	readonly labelFingerprint?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly mtu?: number | undefined;
	readonly name: string;
	readonly requestId?: string | undefined;
	readonly router?: string | undefined;
	readonly stackType?: string | undefined;
	readonly subnetLength?: number | undefined;
	readonly type: string;
	readonly validateOnly?: boolean | undefined;
	readonly vlanTag8021q?: number | undefined;
}
export interface InterconnectAttachment {
	readonly adminEnabled?: boolean | undefined;
	readonly bandwidth?: string | undefined;
	readonly candidateIpv6Subnets?: string[] | undefined;
	readonly candidateSubnets?: string[] | undefined;
	readonly cloudRouterIpAddress?: string | undefined;
	readonly cloudRouterIpv6Address?: string | undefined;
	readonly cloudRouterIpv6InterfaceId?: string | undefined;
	readonly configurationConstraints?: InterconnectAttachmentConfigurationConstraints | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly customerRouterIpAddress?: string | undefined;
	readonly customerRouterIpv6Address?: string | undefined;
	readonly customerRouterIpv6InterfaceId?: string | undefined;
	readonly dataplaneVersion?: number | undefined;
	readonly description?: string | undefined;
	readonly edgeAvailabilityDomain?: string | undefined;
	readonly encryption?: string | undefined;
	readonly googleReferenceId?: string | undefined;
	readonly id?: string | undefined;
	readonly interconnect?: string | undefined;
	readonly ipsecInternalAddresses?: string[] | undefined;
	readonly kind?: string | undefined;
	readonly labelFingerprint?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly mtu?: number | undefined;
	readonly name?: string | undefined;
	readonly operationalStatus?: string | undefined;
	readonly pairingKey?: string | undefined;
	readonly partnerAsn?: string | undefined;
	readonly partnerMetadata?: InterconnectAttachmentPartnerMetadata | undefined;
	readonly privateInterconnectInfo?: InterconnectAttachmentPrivateInfo | undefined;
	readonly region?: string | undefined;
	readonly remoteService?: string | undefined;
	readonly router?: string | undefined;
	readonly satisfiesPzs?: boolean | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly stackType?: string | undefined;
	readonly state?: string | undefined;
	readonly subnetLength?: number | undefined;
	readonly type?: string | undefined;
	readonly vlanTag8021q?: number | undefined;
}
export interface InterconnectAttachmentConfigurationConstraints {
	readonly bgpMd5?: string | undefined;
	readonly bgpPeerAsnRanges?: InterconnectAttachmentConfigurationConstraintsBgpPeerASNRange[] | undefined;
}
export interface InterconnectAttachmentConfigurationConstraintsBgpPeerASNRange {
	readonly max?: number | undefined;
	readonly min?: number | undefined;
}
export interface InterconnectAttachmentPartnerMetadata {
	readonly interconnectName?: string | undefined;
	readonly partnerName?: string | undefined;
	readonly portalUrl?: string | undefined;
}
export interface InterconnectAttachmentPrivateInfo {
	readonly tag8021q?: number | undefined;
}
export default {
	InterconnectAttachments: InterconnectAttachments,
};
