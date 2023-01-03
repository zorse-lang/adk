import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class InterconnectRemoteLocations
	extends GdmResource<InterconnectRemoteLocationsComponentInputs>
	implements InterconnectRemoteLocationsComponentOutputs
{
	constructor(entity: ADKEntity, options: InterconnectRemoteLocationsComponentInputs) {
		super(entity, options.name, "compute.alpha.InterconnectRemoteLocations", options);
	}
	public readonly address?: string | undefined;
	public readonly attachmentConfigurationConstraints?: InterconnectAttachmentConfigurationConstraints | undefined;
	public readonly city?: string | undefined;
	public readonly constraints?: InterconnectRemoteLocationConstraints | undefined;
	public readonly continent?: string | undefined;
	public readonly creationTimestamp?: string | undefined;
	public readonly description?: string | undefined;
	public readonly facilityProvider?: string | undefined;
	public readonly facilityProviderFacilityId?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly lacp?: string | undefined;
	public readonly maxLagSize100Gbps?: number | undefined;
	public readonly peeringdbFacilityId?: string | undefined;
	public readonly permittedConnections?: InterconnectRemoteLocationPermittedConnections[] | undefined;
	public readonly remoteService?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly selfLinkWithId?: string | undefined;
	public readonly status?: string | undefined;
}
export interface InterconnectRemoteLocationsComponentOutputs {
	readonly address?: string | undefined;
	readonly attachmentConfigurationConstraints?: InterconnectAttachmentConfigurationConstraints | undefined;
	readonly city?: string | undefined;
	readonly constraints?: InterconnectRemoteLocationConstraints | undefined;
	readonly continent?: string | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly facilityProvider?: string | undefined;
	readonly facilityProviderFacilityId?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly lacp?: string | undefined;
	readonly maxLagSize100Gbps?: number | undefined;
	readonly peeringdbFacilityId?: string | undefined;
	readonly permittedConnections?: InterconnectRemoteLocationPermittedConnections[] | undefined;
	readonly remoteService?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly status?: string | undefined;
}
export interface InterconnectRemoteLocationsComponentInputs {
	readonly name: string;
	readonly type: string;
}
export interface InterconnectAttachmentConfigurationConstraints {
	readonly bgpMd5?: string | undefined;
	readonly bgpPeerAsnRanges?: InterconnectAttachmentConfigurationConstraintsBgpPeerASNRange[] | undefined;
}
export interface InterconnectAttachmentConfigurationConstraintsBgpPeerASNRange {
	readonly max?: number | undefined;
	readonly min?: number | undefined;
}
export interface InterconnectRemoteLocation {
	readonly address?: string | undefined;
	readonly attachmentConfigurationConstraints?: InterconnectAttachmentConfigurationConstraints | undefined;
	readonly city?: string | undefined;
	readonly constraints?: InterconnectRemoteLocationConstraints | undefined;
	readonly continent?: string | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly facilityProvider?: string | undefined;
	readonly facilityProviderFacilityId?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly lacp?: string | undefined;
	readonly maxLagSize100Gbps?: number | undefined;
	readonly name?: string | undefined;
	readonly peeringdbFacilityId?: string | undefined;
	readonly permittedConnections?: InterconnectRemoteLocationPermittedConnections[] | undefined;
	readonly remoteService?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly status?: string | undefined;
}
export interface InterconnectRemoteLocationConstraints {
	readonly portPairRemoteLocation?: string | undefined;
	readonly portPairVlan?: string | undefined;
	readonly subnetLengthRange?: InterconnectRemoteLocationConstraintsSubnetLengthRange | undefined;
}
export interface InterconnectRemoteLocationConstraintsSubnetLengthRange {
	readonly max?: number | undefined;
	readonly min?: number | undefined;
}
export interface InterconnectRemoteLocationPermittedConnections {
	readonly interconnectLocation?: string | undefined;
}
export default {
	InterconnectRemoteLocations: InterconnectRemoteLocations,
};
