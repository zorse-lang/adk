import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Address extends GdmResource<AddressComponentInputs> implements AddressComponentOutputs {
	constructor(entity: ADKEntity, options: AddressComponentInputs) {
		super(entity, options.name, "compute.beta.address", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
	public readonly status?: string;
	public readonly users?: string[];
}
export interface AddressComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly status?: string;
	readonly users?: string[];
}
export interface AddressComponentInputs {
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
	readonly subnetwork?: string;
}
export default {
	Address: Address,
};
