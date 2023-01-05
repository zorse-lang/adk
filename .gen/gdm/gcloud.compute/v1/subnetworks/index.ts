import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Subnetworks extends GdmResource<SubnetworksComponentInputs> implements SubnetworksComponentOutputs {
	constructor(entity: ADKEntity, options: SubnetworksComponentInputs) {
		super(entity, options.name, "compute.v1.Subnetworks", options);
	}
	public readonly creationTimestamp?: string;
	public readonly gatewayAddress?: string;
	public readonly id?: string;
	public readonly internalIpv6Prefix?: string;
	public readonly ipv6CidrRange?: string;
	public readonly kind?: string;
	public readonly selfLink?: string;
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
	readonly state?: string;
}
export interface SubnetworksComponentInputs {
	readonly description?: string;
	readonly enableFlowLogs?: boolean;
	readonly externalIpv6Prefix?: string;
	readonly fingerprint?: string;
	readonly ipCidrRange?: string;
	readonly ipv6AccessType?: string;
	readonly logConfig?: SubnetworkLogConfig;
	readonly name: string;
	readonly network?: string;
	readonly privateIpGoogleAccess?: boolean;
	readonly privateIpv6GoogleAccess?: string;
	readonly purpose?: string;
	readonly region?: string;
	readonly requestId?: string;
	readonly role?: string;
	readonly secondaryIpRanges?: SubnetworkSecondaryRange[];
	readonly stackType?: string;
}
export interface Subnetwork {
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly enableFlowLogs?: boolean;
	readonly externalIpv6Prefix?: string;
	readonly fingerprint?: string;
	readonly gatewayAddress?: string;
	readonly id?: string;
	readonly internalIpv6Prefix?: string;
	readonly ipCidrRange?: string;
	readonly ipv6AccessType?: string;
	readonly ipv6CidrRange?: string;
	readonly kind?: string;
	readonly logConfig?: SubnetworkLogConfig;
	readonly name?: string;
	readonly network?: string;
	readonly privateIpGoogleAccess?: boolean;
	readonly privateIpv6GoogleAccess?: string;
	readonly purpose?: string;
	readonly region?: string;
	readonly role?: string;
	readonly secondaryIpRanges?: SubnetworkSecondaryRange[];
	readonly selfLink?: string;
	readonly stackType?: string;
	readonly state?: string;
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
}
export default {
	Subnetworks: Subnetworks,
};
