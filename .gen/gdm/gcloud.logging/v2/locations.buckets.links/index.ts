import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class LocationsBucketsLinks
	extends GdmResource<LocationsBucketsLinksComponentInputs>
	implements LocationsBucketsLinksComponentOutputs
{
	constructor(entity: ADKEntity, options: LocationsBucketsLinksComponentInputs) {
		super(entity, options.name, "logging.v2.LocationsBucketsLinks", options);
	}
	public readonly createTime?: string;
	public readonly lifecycleState?: string;
}
export interface LocationsBucketsLinksComponentOutputs {
	readonly createTime?: string;
	readonly lifecycleState?: string;
}
export interface LocationsBucketsLinksComponentInputs {
	readonly bigqueryDataset?: BigQueryDataset;
	readonly description?: string;
	readonly linkId: string;
	readonly name: string;
	readonly parent: string;
}
export interface BigQueryDataset {
	readonly datasetId?: string;
}
export interface Link {
	readonly bigqueryDataset?: BigQueryDataset;
	readonly createTime?: string;
	readonly description?: string;
	readonly lifecycleState?: string;
	readonly name?: string;
}
export default {
	LocationsBucketsLinks: LocationsBucketsLinks,
};
