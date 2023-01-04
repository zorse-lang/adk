import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Subnetwork extends GdmResource<SubnetworkComponentInputs> implements SubnetworkComponentOutputs {
	constructor(entity: ADKEntity, options: SubnetworkComponentInputs) {
		super(entity, options.name, "compute.v1.subnetwork", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly gatewayAddress?: string | undefined;
	public readonly id?: string | undefined;
	public readonly internalIpv6Prefix?: string | undefined;
	public readonly ipv6CidrRange?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly state?: string | undefined;
}
export interface SubnetworkComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly gatewayAddress?: string | undefined;
	readonly id?: string | undefined;
	readonly internalIpv6Prefix?: string | undefined;
	readonly ipv6CidrRange?: string | undefined;
	readonly kind?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly state?: string | undefined;
}
export interface SubnetworkComponentInputs {
	readonly description?: string | undefined;
	readonly enableFlowLogs?: boolean | undefined;
	readonly externalIpv6Prefix?: string | undefined;
	readonly fingerprint?: string | undefined;
	readonly ipCidrRange?: string | undefined;
	readonly ipv6AccessType?: string | undefined;
	readonly logConfig?: SubnetworkLogConfig | undefined;
	readonly name: string;
	readonly network?: string | undefined;
	readonly privateIpGoogleAccess?: boolean | undefined;
	readonly privateIpv6GoogleAccess?: string | undefined;
	readonly purpose?: string | undefined;
	readonly region?: string | undefined;
	readonly role?: string | undefined;
	readonly secondaryIpRanges?: SubnetworkSecondaryRange[] | undefined;
	readonly stackType?: string | undefined;
	readonly type: string;
}
export interface SubnetworkLogConfig {
	readonly aggregationInterval?: string | undefined;
	readonly enable?: boolean | undefined;
	readonly filterExpr?: string | undefined;
	readonly flowSampling?: number | undefined;
	readonly metadata?: string | undefined;
	readonly metadataFields?: string[] | undefined;
}
export interface SubnetworkSecondaryRange {
	readonly ipCidrRange?: string | undefined;
	readonly rangeName?: string | undefined;
}
export default {
	Subnetwork: Subnetwork,
};