import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class BillingAccountsLogs
	extends GdmResource<BillingAccountsLogsComponentInputs>
	implements BillingAccountsLogsComponentOutputs
{
	constructor(entity: ADKEntity, options: BillingAccountsLogsComponentInputs) {
		super(entity, options.name, "logging.v2.BillingAccountsLogs", options);
	}
}
export interface BillingAccountsLogsComponentOutputs {}
export interface BillingAccountsLogsComponentInputs {
	readonly type: string;
	readonly name: string;
}
export default {
	BillingAccountsLogs: BillingAccountsLogs,
};
