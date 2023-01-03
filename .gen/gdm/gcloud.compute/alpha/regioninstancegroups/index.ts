import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class RegionInstanceGroups
	extends GdmResource<RegionInstanceGroupsComponentInputs>
	implements RegionInstanceGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: RegionInstanceGroupsComponentInputs) {
		super(entity, options.name, "compute.alpha.RegionInstanceGroups", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly fingerprint?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly network?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly selfLinkWithId?: string | undefined;
	public readonly size?: number | undefined;
	public readonly subnetwork?: string | undefined;
	public readonly zone?: string | undefined;
}
export interface RegionInstanceGroupsComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly fingerprint?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly network?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly size?: number | undefined;
	readonly subnetwork?: string | undefined;
	readonly zone?: string | undefined;
}
export interface RegionInstanceGroupsComponentInputs {
	readonly description?: string | undefined;
	readonly name: string;
	readonly namedPorts?: NamedPort[] | undefined;
	readonly type: string;
}
export interface InstanceGroup {
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly fingerprint?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly namedPorts?: NamedPort[] | undefined;
	readonly network?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly size?: number | undefined;
	readonly subnetwork?: string | undefined;
	readonly zone?: string | undefined;
}
export interface NamedPort {
	readonly name?: string | undefined;
	readonly port?: number | undefined;
}
export default {
	RegionInstanceGroups: RegionInstanceGroups,
};
