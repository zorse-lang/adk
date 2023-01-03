import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class PacketMirrorings
	extends GdmResource<PacketMirroringsComponentInputs>
	implements PacketMirroringsComponentOutputs
{
	constructor(entity: ADKEntity, options: PacketMirroringsComponentInputs) {
		super(entity, options.name, "compute.beta.PacketMirrorings", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
}
export interface PacketMirroringsComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
}
export interface PacketMirroringsComponentInputs {
	readonly collectorIlb?: PacketMirroringForwardingRuleInfo | undefined;
	readonly description?: string | undefined;
	readonly enable?: string | undefined;
	readonly filter?: PacketMirroringFilter | undefined;
	readonly mirroredResources?: PacketMirroringMirroredResourceInfo | undefined;
	readonly name: string;
	readonly network?: PacketMirroringNetworkInfo | undefined;
	readonly priority?: number | undefined;
	readonly requestId?: string | undefined;
	readonly type: string;
}
export interface PacketMirroring {
	readonly collectorIlb?: PacketMirroringForwardingRuleInfo | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly enable?: string | undefined;
	readonly filter?: PacketMirroringFilter | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly mirroredResources?: PacketMirroringMirroredResourceInfo | undefined;
	readonly name?: string | undefined;
	readonly network?: PacketMirroringNetworkInfo | undefined;
	readonly priority?: number | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
}
export interface PacketMirroringFilter {
	readonly cidrRanges?: string[] | undefined;
	readonly direction?: string | undefined;
	readonly IPProtocols?: string[] | undefined;
}
export interface PacketMirroringForwardingRuleInfo {
	readonly canonicalUrl?: string | undefined;
	readonly url?: string | undefined;
}
export interface PacketMirroringMirroredResourceInfo {
	readonly instances?: PacketMirroringMirroredResourceInfoInstanceInfo[] | undefined;
	readonly subnetworks?: PacketMirroringMirroredResourceInfoSubnetInfo[] | undefined;
	readonly tags?: string[] | undefined;
}
export interface PacketMirroringMirroredResourceInfoInstanceInfo {
	readonly canonicalUrl?: string | undefined;
	readonly url?: string | undefined;
}
export interface PacketMirroringMirroredResourceInfoSubnetInfo {
	readonly canonicalUrl?: string | undefined;
	readonly url?: string | undefined;
}
export interface PacketMirroringNetworkInfo {
	readonly canonicalUrl?: string | undefined;
	readonly url?: string | undefined;
}
export default {
	PacketMirrorings: PacketMirrorings,
};
