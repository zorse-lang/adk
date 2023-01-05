import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class BillingAccountsLocationsBucketsViewsLogs
	extends GdmResource<BillingAccountsLocationsBucketsViewsLogsComponentInputs>
	implements BillingAccountsLocationsBucketsViewsLogsComponentOutputs
{
	constructor(entity: ADKEntity, options: BillingAccountsLocationsBucketsViewsLogsComponentInputs) {
		super(entity, options.name, "logging.v2.BillingAccountsLocationsBucketsViewsLogs", options);
	}
}
export interface BillingAccountsLocationsBucketsViewsLogsComponentOutputs {}
export interface BillingAccountsLocationsBucketsViewsLogsComponentInputs {
	readonly name: string;
}
export default {
	BillingAccountsLocationsBucketsViewsLogs: BillingAccountsLocationsBucketsViewsLogs,
};
