import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

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
export default {};
