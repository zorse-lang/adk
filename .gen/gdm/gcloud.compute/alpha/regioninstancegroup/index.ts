import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

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
	readonly selfLinkWithId?: string;
	readonly size?: number;
	readonly subnetwork?: string;
	readonly zone?: string;
}
export interface NamedPort {
	readonly name?: string;
	readonly port?: number;
}
export default {};
