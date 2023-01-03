import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class NetworkEdgeSecurityServices
	extends GdmResource<NetworkEdgeSecurityServicesComponentInputs>
	implements NetworkEdgeSecurityServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: NetworkEdgeSecurityServicesComponentInputs) {
		super(entity, options.name, "compute.alpha.NetworkEdgeSecurityServices", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly selfLinkWithId?: string | undefined;
}
export interface NetworkEdgeSecurityServicesComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
}
export interface NetworkEdgeSecurityServicesComponentInputs {
	readonly description?: string | undefined;
	readonly fingerprint?: string | undefined;
	readonly name: string;
	readonly requestId?: string | undefined;
	readonly securityPolicy?: string | undefined;
	readonly validateOnly?: boolean | undefined;
	readonly type: string;
}
export interface NetworkEdgeSecurityService {
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly fingerprint?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly region?: string | undefined;
	readonly securityPolicy?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
}
export default {
	NetworkEdgeSecurityServices: NetworkEdgeSecurityServices,
};
