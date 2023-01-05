import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class InstanceGroups extends GdmResource<InstanceGroupsComponentInputs> implements InstanceGroupsComponentOutputs {
	constructor(entity: ADKEntity, options: InstanceGroupsComponentInputs) {
		super(entity, options.name, "compute.beta.InstanceGroups", options);
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
export interface InstanceGroupsComponentOutputs {
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
export interface InstanceGroupsComponentInputs {
	readonly description?: string;
	readonly name: string;
	readonly namedPorts?: NamedPort[];
	readonly requestId?: string;
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
	InstanceGroups: InstanceGroups,
};
