import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Subnetworks extends GdmResource<SubnetworksComponentInputs> implements SubnetworksComponentOutputs {
	constructor(entity: ADKEntity, options: SubnetworksComponentInputs) {
		super(entity, options.name, "compute.alpha.Subnetworks", options);
	}
	public readonly creationTimestamp?: string;
	public readonly gatewayAddress?: string;
	public readonly id?: string;
	public readonly internalIpv6Prefix?: string;
	public readonly ipv6CidrRange?: string;
	public readonly kind?: string;
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
	public readonly state?: string;
}
export interface SubnetworksComponentOutputs {
	readonly creationTimestamp?: string;
	readonly gatewayAddress?: string;
	readonly id?: string;
	readonly internalIpv6Prefix?: string;
	readonly ipv6CidrRange?: string;
	readonly kind?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly state?: string;
}
export interface SubnetworksComponentInputs {
	readonly aggregationInterval?: string;
	readonly allowSubnetCidrRoutesOverlap?: boolean;
	readonly description?: string;
	readonly enableFlowLogs?: boolean;
	readonly enableL2?: boolean;
	readonly enablePrivateV6Access?: boolean;
	readonly externalIpv6Prefix?: string;
	readonly fingerprint?: string;
	readonly flowSampling?: number;
	readonly ipCidrRange?: string;
	readonly ipv6AccessType?: string;
	readonly logConfig?: SubnetworkLogConfig;
	readonly metadata?: string;
	readonly name: string;
	readonly network?: string;
	readonly privateIpGoogleAccess?: boolean;
	readonly privateIpv6GoogleAccess?: string;
	readonly purpose?: string;
	readonly region?: string;
	readonly requestId?: string;
	readonly reservedInternalRange?: string;
	readonly role?: string;
	readonly secondaryIpRanges?: SubnetworkSecondaryRange[];
	readonly stackType?: string;
	readonly vlans?: number[];
}
export interface Subnetwork {
	readonly aggregationInterval?: string;
	readonly allowSubnetCidrRoutesOverlap?: boolean;
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly enableFlowLogs?: boolean;
	readonly enableL2?: boolean;
	readonly enablePrivateV6Access?: boolean;
	readonly externalIpv6Prefix?: string;
	readonly fingerprint?: string;
	readonly flowSampling?: number;
	readonly gatewayAddress?: string;
	readonly id?: string;
	readonly internalIpv6Prefix?: string;
	readonly ipCidrRange?: string;
	readonly ipv6AccessType?: string;
	readonly ipv6CidrRange?: string;
	readonly kind?: string;
	readonly logConfig?: SubnetworkLogConfig;
	readonly metadata?: string;
	readonly name?: string;
	readonly network?: string;
	readonly privateIpGoogleAccess?: boolean;
	readonly privateIpv6GoogleAccess?: string;
	readonly purpose?: string;
	readonly region?: string;
	readonly reservedInternalRange?: string;
	readonly role?: string;
	readonly secondaryIpRanges?: SubnetworkSecondaryRange[];
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly stackType?: string;
	readonly state?: string;
	readonly vlans?: number[];
}
export interface SubnetworkLogConfig {
	readonly aggregationInterval?: string;
	readonly enable?: boolean;
	readonly filterExpr?: string;
	readonly flowSampling?: number;
	readonly metadata?: string;
	readonly metadataFields?: string[];
}
export interface SubnetworkSecondaryRange {
	readonly ipCidrRange?: string;
	readonly rangeName?: string;
	readonly reservedInternalRange?: string;
}
export default {
	Subnetworks: Subnetworks,
};
