import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class NetworkEdgeSecurityServices
	extends GdmResource<NetworkEdgeSecurityServicesComponentInputs>
	implements NetworkEdgeSecurityServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: NetworkEdgeSecurityServicesComponentInputs) {
		super(entity, options.name, "compute.beta.NetworkEdgeSecurityServices", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
}
export interface NetworkEdgeSecurityServicesComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
}
export interface NetworkEdgeSecurityServicesComponentInputs {
	readonly description?: string;
	readonly fingerprint?: string;
	readonly name: string;
	readonly requestId?: string;
	readonly securityPolicy?: string;
	readonly validateOnly?: boolean;
}
export interface NetworkEdgeSecurityService {
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly fingerprint?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly region?: string;
	readonly securityPolicy?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
}
export default {
	NetworkEdgeSecurityServices: NetworkEdgeSecurityServices,
};
