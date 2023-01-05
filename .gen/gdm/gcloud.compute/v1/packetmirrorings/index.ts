import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class PacketMirrorings
	extends GdmResource<PacketMirroringsComponentInputs>
	implements PacketMirroringsComponentOutputs
{
	constructor(entity: ADKEntity, options: PacketMirroringsComponentInputs) {
		super(entity, options.name, "compute.v1.PacketMirrorings", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
}
export interface PacketMirroringsComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly selfLink?: string;
}
export interface PacketMirroringsComponentInputs {
	readonly collectorIlb?: PacketMirroringForwardingRuleInfo;
	readonly description?: string;
	readonly enable?: string;
	readonly filter?: PacketMirroringFilter;
	readonly mirroredResources?: PacketMirroringMirroredResourceInfo;
	readonly name: string;
	readonly network?: PacketMirroringNetworkInfo;
	readonly priority?: number;
	readonly requestId?: string;
}
export interface PacketMirroring {
	readonly collectorIlb?: PacketMirroringForwardingRuleInfo;
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly enable?: string;
	readonly filter?: PacketMirroringFilter;
	readonly id?: string;
	readonly kind?: string;
	readonly mirroredResources?: PacketMirroringMirroredResourceInfo;
	readonly name?: string;
	readonly network?: PacketMirroringNetworkInfo;
	readonly priority?: number;
	readonly region?: string;
	readonly selfLink?: string;
}
export interface PacketMirroringFilter {
	readonly cidrRanges?: string[];
	readonly direction?: string;
	readonly IPProtocols?: string[];
}
export interface PacketMirroringForwardingRuleInfo {
	readonly canonicalUrl?: string;
	readonly url?: string;
}
export interface PacketMirroringMirroredResourceInfo {
	readonly instances?: PacketMirroringMirroredResourceInfoInstanceInfo[];
	readonly subnetworks?: PacketMirroringMirroredResourceInfoSubnetInfo[];
	readonly tags?: string[];
}
export interface PacketMirroringMirroredResourceInfoInstanceInfo {
	readonly canonicalUrl?: string;
	readonly url?: string;
}
export interface PacketMirroringMirroredResourceInfoSubnetInfo {
	readonly canonicalUrl?: string;
	readonly url?: string;
}
export interface PacketMirroringNetworkInfo {
	readonly canonicalUrl?: string;
	readonly url?: string;
}
export default {
	PacketMirrorings: PacketMirrorings,
};
