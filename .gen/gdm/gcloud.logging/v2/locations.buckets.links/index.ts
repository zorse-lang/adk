import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class LocationsBucketsLinks
	extends GdmResource<LocationsBucketsLinksComponentInputs>
	implements LocationsBucketsLinksComponentOutputs
{
	constructor(entity: ADKEntity, options: LocationsBucketsLinksComponentInputs) {
		super(entity, options.name, "logging.v2.LocationsBucketsLinks", options);
	}
	public readonly createTime?: string | undefined;
	public readonly lifecycleState?: string | undefined;
}
export interface LocationsBucketsLinksComponentOutputs {
	readonly createTime?: string | undefined;
	readonly lifecycleState?: string | undefined;
}
export interface LocationsBucketsLinksComponentInputs {
	readonly bigqueryDataset?: BigQueryDataset | undefined;
	readonly description?: string | undefined;
	readonly linkId: string;
	readonly name: string;
	readonly parent: string;
	readonly type: string;
}
export interface BigQueryDataset {
	readonly datasetId?: string | undefined;
}
export interface Link {
	readonly bigqueryDataset?: BigQueryDataset | undefined;
	readonly createTime?: string | undefined;
	readonly description?: string | undefined;
	readonly lifecycleState?: string | undefined;
	readonly name?: string | undefined;
}
export default {
	LocationsBucketsLinks: LocationsBucketsLinks,
};
