import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class InstanceGroups extends GdmResource<InstanceGroupsComponentInputs> implements InstanceGroupsComponentOutputs {
	constructor(entity: ADKEntity, options: InstanceGroupsComponentInputs) {
		super(entity, options.name, "compute.beta.InstanceGroups", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly fingerprint?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly network?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly size?: number | undefined;
	public readonly subnetwork?: string | undefined;
	public readonly zone?: string | undefined;
}
export interface InstanceGroupsComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly fingerprint?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly network?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly size?: number | undefined;
	readonly subnetwork?: string | undefined;
	readonly zone?: string | undefined;
}
export interface InstanceGroupsComponentInputs {
	readonly description?: string | undefined;
	readonly name: string;
	readonly namedPorts?: NamedPort[] | undefined;
	readonly requestId?: string | undefined;
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
	readonly size?: number | undefined;
	readonly subnetwork?: string | undefined;
	readonly zone?: string | undefined;
}
export interface NamedPort {
	readonly name?: string | undefined;
	readonly port?: number | undefined;
}
export default {
	InstanceGroups: InstanceGroups,
};
