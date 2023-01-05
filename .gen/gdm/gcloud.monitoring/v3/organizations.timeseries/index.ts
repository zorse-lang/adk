import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class OrganizationsTimeSeries
	extends GdmResource<OrganizationsTimeSeriesComponentInputs>
	implements OrganizationsTimeSeriesComponentOutputs
{
	constructor(entity: ADKEntity, options: OrganizationsTimeSeriesComponentInputs) {
		super(entity, options.name, "monitoring.v3.OrganizationsTimeSeries", options);
	}
}
export interface OrganizationsTimeSeriesComponentOutputs {}
export interface OrganizationsTimeSeriesComponentInputs {
	readonly name: string;
}
export default {
	OrganizationsTimeSeries: OrganizationsTimeSeries,
};
