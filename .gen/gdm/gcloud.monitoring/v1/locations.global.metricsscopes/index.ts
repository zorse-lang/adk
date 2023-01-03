import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class LocationsGlobalMetricsScopes
	extends GdmResource<LocationsGlobalMetricsScopesComponentInputs>
	implements LocationsGlobalMetricsScopesComponentOutputs
{
	constructor(entity: ADKEntity, options: LocationsGlobalMetricsScopesComponentInputs) {
		super(entity, options.name, "monitoring.v1.LocationsGlobalMetricsScopes", options);
	}
	public readonly createTime?: string | undefined;
	public readonly monitoredProjects?: MonitoredProject[] | undefined;
	public readonly updateTime?: string | undefined;
}
export interface LocationsGlobalMetricsScopesComponentOutputs {
	readonly createTime?: string | undefined;
	readonly monitoredProjects?: MonitoredProject[] | undefined;
	readonly updateTime?: string | undefined;
}
export interface LocationsGlobalMetricsScopesComponentInputs {
	readonly name: string;
	readonly type: string;
}
export interface MetricsScope {
	readonly createTime?: string | undefined;
	readonly monitoredProjects?: MonitoredProject[] | undefined;
	readonly name?: string | undefined;
	readonly updateTime?: string | undefined;
}
export interface MonitoredProject {
	readonly createTime?: string | undefined;
	readonly name?: string | undefined;
}
export default {
	LocationsGlobalMetricsScopes: LocationsGlobalMetricsScopes,
};
