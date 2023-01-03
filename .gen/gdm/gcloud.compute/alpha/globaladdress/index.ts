import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export interface Address {
	readonly address?: string | undefined;
	readonly addressType?: string | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly id?: string | undefined;
	readonly ipv6EndpointType?: string | undefined;
	readonly ipVersion?: string | undefined;
	readonly kind?: string | undefined;
	readonly labelFingerprint?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name?: string | undefined;
	readonly network?: string | undefined;
	readonly networkTier?: string | undefined;
	readonly prefixLength?: number | undefined;
	readonly purpose?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly status?: string | undefined;
	readonly subnetwork?: string | undefined;
	readonly users?: string[] | undefined;
}
export default {};
