import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class RegionHealthCheckServices
	extends GdmResource<RegionHealthCheckServicesComponentInputs>
	implements RegionHealthCheckServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: RegionHealthCheckServicesComponentInputs) {
		super(entity, options.name, "compute.beta.RegionHealthCheckServices", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
}
export interface RegionHealthCheckServicesComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly selfLink?: string;
}
export interface RegionHealthCheckServicesComponentInputs {
	readonly description?: string;
	readonly fingerprint?: string;
	readonly healthChecks?: string[];
	readonly healthStatusAggregationPolicy?: string;
	readonly healthStatusAggregationStrategy?: string;
	readonly name: string;
	readonly networkEndpointGroups?: string[];
	readonly notificationEndpoints?: string[];
	readonly requestId?: string;
}
export interface HealthCheckService {
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly fingerprint?: string;
	readonly healthChecks?: string[];
	readonly healthStatusAggregationPolicy?: string;
	readonly healthStatusAggregationStrategy?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly networkEndpointGroups?: string[];
	readonly notificationEndpoints?: string[];
	readonly region?: string;
	readonly selfLink?: string;
}
export default {
	RegionHealthCheckServices: RegionHealthCheckServices,
};
