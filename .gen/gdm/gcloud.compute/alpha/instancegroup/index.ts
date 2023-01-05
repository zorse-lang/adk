import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class InstanceGroup extends GdmResource<InstanceGroupComponentInputs> implements InstanceGroupComponentOutputs {
	constructor(entity: ADKEntity, options: InstanceGroupComponentInputs) {
		super(entity, options.name, "compute.alpha.instanceGroup", options);
	}
	public readonly creationTimestamp?: string;
	public readonly fingerprint?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly network?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
	public readonly size?: number;
	public readonly subnetwork?: string;
	public readonly zone?: string;
}
export interface InstanceGroupComponentOutputs {
	readonly creationTimestamp?: string;
	readonly fingerprint?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly network?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly size?: number;
	readonly subnetwork?: string;
	readonly zone?: string;
}
export interface InstanceGroupComponentInputs {
	readonly description?: string;
	readonly name: string;
	readonly namedPorts?: NamedPort[];
}
export interface NamedPort {
	readonly name?: string;
	readonly port?: number;
}
export default {
	InstanceGroup: InstanceGroup,
};
