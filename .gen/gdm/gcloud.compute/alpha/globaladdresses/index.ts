import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class GlobalAddresses
	extends GdmResource<GlobalAddressesComponentInputs>
	implements GlobalAddressesComponentOutputs
{
	constructor(entity: ADKEntity, options: GlobalAddressesComponentInputs) {
		super(entity, options.name, "compute.alpha.GlobalAddresses", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly selfLinkWithId?: string | undefined;
	public readonly status?: string | undefined;
	public readonly users?: string[] | undefined;
}
export interface GlobalAddressesComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly status?: string | undefined;
	readonly users?: string[] | undefined;
}
export interface GlobalAddressesComponentInputs {
	readonly address?: string | undefined;
	readonly addressType?: string | undefined;
	readonly description?: string | undefined;
	readonly ipv6EndpointType?: string | undefined;
	readonly ipVersion?: string | undefined;
	readonly labelFingerprint?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name: string;
	readonly network?: string | undefined;
	readonly networkTier?: string | undefined;
	readonly prefixLength?: number | undefined;
	readonly purpose?: string | undefined;
	readonly requestId?: string | undefined;
	readonly subnetwork?: string | undefined;
	readonly type: string;
}
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
export default {
	GlobalAddresses: GlobalAddresses,
};
