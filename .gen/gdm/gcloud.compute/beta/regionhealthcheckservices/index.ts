import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class RegionHealthCheckServices
	extends GdmResource<RegionHealthCheckServicesComponentInputs>
	implements RegionHealthCheckServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: RegionHealthCheckServicesComponentInputs) {
		super(entity, options.name, "compute.beta.RegionHealthCheckServices", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
}
export interface RegionHealthCheckServicesComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
}
export interface RegionHealthCheckServicesComponentInputs {
	readonly description?: string | undefined;
	readonly fingerprint?: string | undefined;
	readonly healthChecks?: string[] | undefined;
	readonly healthStatusAggregationPolicy?: string | undefined;
	readonly healthStatusAggregationStrategy?: string | undefined;
	readonly name: string;
	readonly networkEndpointGroups?: string[] | undefined;
	readonly notificationEndpoints?: string[] | undefined;
	readonly requestId?: string | undefined;
	readonly type: string;
}
export interface HealthCheckService {
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly fingerprint?: string | undefined;
	readonly healthChecks?: string[] | undefined;
	readonly healthStatusAggregationPolicy?: string | undefined;
	readonly healthStatusAggregationStrategy?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly networkEndpointGroups?: string[] | undefined;
	readonly notificationEndpoints?: string[] | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
}
export default {
	RegionHealthCheckServices: RegionHealthCheckServices,
};
