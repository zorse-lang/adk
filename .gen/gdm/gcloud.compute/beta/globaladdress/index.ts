import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export interface Address {
	readonly address?: string;
	readonly addressType?: string;
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly id?: string;
	readonly ipv6EndpointType?: string;
	readonly ipVersion?: string;
	readonly kind?: string;
	readonly labelFingerprint?: string;
	readonly labels?: { [P in string]: string };
	readonly name?: string;
	readonly network?: string;
	readonly networkTier?: string;
	readonly prefixLength?: number;
	readonly purpose?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly status?: string;
	readonly subnetwork?: string;
	readonly users?: string[];
}
export default {};
