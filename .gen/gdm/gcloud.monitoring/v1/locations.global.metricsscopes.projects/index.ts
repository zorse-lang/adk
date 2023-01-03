import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class LocationsGlobalMetricsScopesProjects
	extends GdmResource<LocationsGlobalMetricsScopesProjectsComponentInputs>
	implements LocationsGlobalMetricsScopesProjectsComponentOutputs
{
	constructor(entity: ADKEntity, options: LocationsGlobalMetricsScopesProjectsComponentInputs) {
		super(entity, options.name, "monitoring.v1.LocationsGlobalMetricsScopesProjects", options);
	}
}
export interface LocationsGlobalMetricsScopesProjectsComponentOutputs {}
export interface LocationsGlobalMetricsScopesProjectsComponentInputs {
	readonly name: string;
	readonly parent: string;
	readonly type: string;
}
export interface MonitoredProject {
	readonly name?: string | undefined;
}
export default {
	LocationsGlobalMetricsScopesProjects: LocationsGlobalMetricsScopesProjects,
};
