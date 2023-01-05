import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class RegionInstanceGroups
	extends GdmResource<RegionInstanceGroupsComponentInputs>
	implements RegionInstanceGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: RegionInstanceGroupsComponentInputs) {
		super(entity, options.name, "compute.beta.RegionInstanceGroups", options);
	}
	public readonly creationTimestamp?: string;
	public readonly fingerprint?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly network?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
	public readonly size?: number;
	public readonly subnetwork?: string;
	public readonly zone?: string;
}
export interface RegionInstanceGroupsComponentOutputs {
	readonly creationTimestamp?: string;
	readonly fingerprint?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly network?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly size?: number;
	readonly subnetwork?: string;
	readonly zone?: string;
}
export interface RegionInstanceGroupsComponentInputs {
	readonly description?: string;
	readonly name: string;
	readonly namedPorts?: NamedPort[];
}
export interface InstanceGroup {
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly fingerprint?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly namedPorts?: NamedPort[];
	readonly network?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly size?: number;
	readonly subnetwork?: string;
	readonly zone?: string;
}
export interface NamedPort {
	readonly name?: string;
	readonly port?: number;
}
export default {
	RegionInstanceGroups: RegionInstanceGroups,
};
