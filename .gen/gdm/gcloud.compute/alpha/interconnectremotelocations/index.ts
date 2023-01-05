import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class InterconnectRemoteLocations
	extends GdmResource<InterconnectRemoteLocationsComponentInputs>
	implements InterconnectRemoteLocationsComponentOutputs
{
	constructor(entity: ADKEntity, options: InterconnectRemoteLocationsComponentInputs) {
		super(entity, options.name, "compute.alpha.InterconnectRemoteLocations", options);
	}
	public readonly address?: string;
	public readonly attachmentConfigurationConstraints?: InterconnectAttachmentConfigurationConstraints;
	public readonly city?: string;
	public readonly constraints?: InterconnectRemoteLocationConstraints;
	public readonly continent?: string;
	public readonly creationTimestamp?: string;
	public readonly description?: string;
	public readonly facilityProvider?: string;
	public readonly facilityProviderFacilityId?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly lacp?: string;
	public readonly maxLagSize100Gbps?: number;
	public readonly peeringdbFacilityId?: string;
	public readonly permittedConnections?: InterconnectRemoteLocationPermittedConnections[];
	public readonly remoteService?: string;
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
	public readonly status?: string;
}
export interface InterconnectRemoteLocationsComponentOutputs {
	readonly address?: string;
	readonly attachmentConfigurationConstraints?: InterconnectAttachmentConfigurationConstraints;
	readonly city?: string;
	readonly constraints?: InterconnectRemoteLocationConstraints;
	readonly continent?: string;
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly facilityProvider?: string;
	readonly facilityProviderFacilityId?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly lacp?: string;
	readonly maxLagSize100Gbps?: number;
	readonly peeringdbFacilityId?: string;
	readonly permittedConnections?: InterconnectRemoteLocationPermittedConnections[];
	readonly remoteService?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly status?: string;
}
export interface InterconnectRemoteLocationsComponentInputs {
	readonly name: string;
}
export interface InterconnectAttachmentConfigurationConstraints {
	readonly bgpMd5?: string;
	readonly bgpPeerAsnRanges?: InterconnectAttachmentConfigurationConstraintsBgpPeerASNRange[];
}
export interface InterconnectAttachmentConfigurationConstraintsBgpPeerASNRange {
	readonly max?: number;
	readonly min?: number;
}
export interface InterconnectRemoteLocation {
	readonly address?: string;
	readonly attachmentConfigurationConstraints?: InterconnectAttachmentConfigurationConstraints;
	readonly city?: string;
	readonly constraints?: InterconnectRemoteLocationConstraints;
	readonly continent?: string;
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly facilityProvider?: string;
	readonly facilityProviderFacilityId?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly lacp?: string;
	readonly maxLagSize100Gbps?: number;
	readonly name?: string;
	readonly peeringdbFacilityId?: string;
	readonly permittedConnections?: InterconnectRemoteLocationPermittedConnections[];
	readonly remoteService?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly status?: string;
}
export interface InterconnectRemoteLocationConstraints {
	readonly portPairRemoteLocation?: string;
	readonly portPairVlan?: string;
	readonly subnetLengthRange?: InterconnectRemoteLocationConstraintsSubnetLengthRange;
}
export interface InterconnectRemoteLocationConstraintsSubnetLengthRange {
	readonly max?: number;
	readonly min?: number;
}
export interface InterconnectRemoteLocationPermittedConnections {
	readonly interconnectLocation?: string;
}
export default {
	InterconnectRemoteLocations: InterconnectRemoteLocations,
};
