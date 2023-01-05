import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class LocationsGlobalMetricsScopes
	extends GdmResource<LocationsGlobalMetricsScopesComponentInputs>
	implements LocationsGlobalMetricsScopesComponentOutputs
{
	constructor(entity: ADKEntity, options: LocationsGlobalMetricsScopesComponentInputs) {
		super(entity, options.name, "monitoring.v1.LocationsGlobalMetricsScopes", options);
	}
	public readonly createTime?: string;
	public readonly monitoredProjects?: MonitoredProject[];
	public readonly updateTime?: string;
}
export interface LocationsGlobalMetricsScopesComponentOutputs {
	readonly createTime?: string;
	readonly monitoredProjects?: MonitoredProject[];
	readonly updateTime?: string;
}
export interface LocationsGlobalMetricsScopesComponentInputs {
	readonly name: string;
}
export interface MetricsScope {
	readonly createTime?: string;
	readonly monitoredProjects?: MonitoredProject[];
	readonly name?: string;
	readonly updateTime?: string;
}
export interface MonitoredProject {
	readonly createTime?: string;
	readonly name?: string;
}
export default {
	LocationsGlobalMetricsScopes: LocationsGlobalMetricsScopes,
};
