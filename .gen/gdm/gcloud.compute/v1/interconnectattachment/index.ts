import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class InterconnectAttachment
	extends GdmResource<InterconnectAttachmentComponentInputs>
	implements InterconnectAttachmentComponentOutputs
{
	constructor(entity: ADKEntity, options: InterconnectAttachmentComponentInputs) {
		super(entity, options.name, "compute.v1.interconnectAttachment", options);
	}
	public readonly bandwidth?: string | undefined;
	public readonly cloudRouterIpAddress?: string | undefined;
	public readonly cloudRouterIpv6Address?: string | undefined;
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
	public readonly satisfiesPzs?: boolean | undefined;
	public readonly selfLink?: string | undefined;
	public readonly state?: string | undefined;
}
export interface InterconnectAttachmentComponentOutputs {
	readonly bandwidth?: string | undefined;
	readonly cloudRouterIpAddress?: string | undefined;
	readonly cloudRouterIpv6Address?: string | undefined;
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
	readonly satisfiesPzs?: boolean | undefined;
	readonly selfLink?: string | undefined;
	readonly state?: string | undefined;
}
export interface InterconnectAttachmentComponentInputs {
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
	readonly mtu?: number | undefined;
	readonly name: string;
	readonly router?: string | undefined;
	readonly stackType?: string | undefined;
	readonly type: string;
	readonly vlanTag8021q?: number | undefined;
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
	InterconnectAttachment: InterconnectAttachment,
};
