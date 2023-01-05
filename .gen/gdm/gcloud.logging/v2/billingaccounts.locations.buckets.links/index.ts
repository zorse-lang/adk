import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class BillingAccountsLocationsBucketsLinks
	extends GdmResource<BillingAccountsLocationsBucketsLinksComponentInputs>
	implements BillingAccountsLocationsBucketsLinksComponentOutputs
{
	constructor(entity: ADKEntity, options: BillingAccountsLocationsBucketsLinksComponentInputs) {
		super(entity, options.name, "logging.v2.BillingAccountsLocationsBucketsLinks", options);
	}
	public readonly createTime?: string;
	public readonly lifecycleState?: string;
}
export interface BillingAccountsLocationsBucketsLinksComponentOutputs {
	readonly createTime?: string;
	readonly lifecycleState?: string;
}
export interface BillingAccountsLocationsBucketsLinksComponentInputs {
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
	BillingAccountsLocationsBucketsLinks: BillingAccountsLocationsBucketsLinks,
};
