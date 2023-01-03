import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Address extends GdmResource<AddressComponentInputs> implements AddressComponentOutputs {
	constructor(entity: ADKEntity, options: AddressComponentInputs) {
		super(entity, options.name, "compute.v1.address", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly status?: string | undefined;
	public readonly users?: string[] | undefined;
}
export interface AddressComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly status?: string | undefined;
	readonly users?: string[] | undefined;
}
export interface AddressComponentInputs {
	readonly address?: string | undefined;
	readonly addressType?: string | undefined;
	readonly description?: string | undefined;
	readonly ipv6EndpointType?: string | undefined;
	readonly ipVersion?: string | undefined;
	readonly name: string;
	readonly network?: string | undefined;
	readonly networkTier?: string | undefined;
	readonly prefixLength?: number | undefined;
	readonly purpose?: string | undefined;
	readonly subnetwork?: string | undefined;
	readonly type: string;
}
export default {
	Address: Address,
};
