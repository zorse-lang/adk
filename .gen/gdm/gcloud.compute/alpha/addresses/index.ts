import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Addresses extends GdmResource<AddressesComponentInputs> implements AddressesComponentOutputs {
	constructor(entity: ADKEntity, options: AddressesComponentInputs) {
		super(entity, options.name, "compute.alpha.Addresses", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
	public readonly status?: string;
	public readonly users?: string[];
}
export interface AddressesComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly status?: string;
	readonly users?: string[];
}
export interface AddressesComponentInputs {
	readonly address?: string;
	readonly addressType?: string;
	readonly description?: string;
	readonly ipv6EndpointType?: string;
	readonly ipVersion?: string;
	readonly labelFingerprint?: string;
	readonly labels?: { [P in string]: string };
	readonly name: string;
	readonly network?: string;
	readonly networkTier?: string;
	readonly prefixLength?: number;
	readonly purpose?: string;
	readonly requestId?: string;
	readonly subnetwork?: string;
}
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
	readonly selfLinkWithId?: string;
	readonly status?: string;
	readonly subnetwork?: string;
	readonly users?: string[];
}
export default {
	Addresses: Addresses,
};
