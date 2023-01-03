import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class FoldersLocationsBucketsLinks
	extends GdmResource<FoldersLocationsBucketsLinksComponentInputs>
	implements FoldersLocationsBucketsLinksComponentOutputs
{
	constructor(entity: ADKEntity, options: FoldersLocationsBucketsLinksComponentInputs) {
		super(entity, options.name, "logging.v2.FoldersLocationsBucketsLinks", options);
	}
	public readonly createTime?: string | undefined;
	public readonly lifecycleState?: string | undefined;
}
export interface FoldersLocationsBucketsLinksComponentOutputs {
	readonly createTime?: string | undefined;
	readonly lifecycleState?: string | undefined;
}
export interface FoldersLocationsBucketsLinksComponentInputs {
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
	FoldersLocationsBucketsLinks: FoldersLocationsBucketsLinks,
};
