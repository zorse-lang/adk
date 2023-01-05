import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class OrganizationsLocationsBucketsLinks
	extends GdmResource<OrganizationsLocationsBucketsLinksComponentInputs>
	implements OrganizationsLocationsBucketsLinksComponentOutputs
{
	constructor(entity: ADKEntity, options: OrganizationsLocationsBucketsLinksComponentInputs) {
		super(entity, options.name, "logging.v2.OrganizationsLocationsBucketsLinks", options);
	}
	public readonly createTime?: string;
	public readonly lifecycleState?: string;
}
export interface OrganizationsLocationsBucketsLinksComponentOutputs {
	readonly createTime?: string;
	readonly lifecycleState?: string;
}
export interface OrganizationsLocationsBucketsLinksComponentInputs {
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
	OrganizationsLocationsBucketsLinks: OrganizationsLocationsBucketsLinks,
};
