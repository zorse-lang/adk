import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class FoldersLocationsBucketsLinks
	extends GdmResource<FoldersLocationsBucketsLinksComponentInputs>
	implements FoldersLocationsBucketsLinksComponentOutputs
{
	constructor(entity: ADKEntity, options: FoldersLocationsBucketsLinksComponentInputs) {
		super(entity, options.name, "logging.v2.FoldersLocationsBucketsLinks", options);
	}
	public readonly createTime?: string;
	public readonly lifecycleState?: string;
}
export interface FoldersLocationsBucketsLinksComponentOutputs {
	readonly createTime?: string;
	readonly lifecycleState?: string;
}
export interface FoldersLocationsBucketsLinksComponentInputs {
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
	FoldersLocationsBucketsLinks: FoldersLocationsBucketsLinks,
};
