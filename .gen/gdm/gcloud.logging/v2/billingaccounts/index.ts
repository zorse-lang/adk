import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class BillingAccounts
	extends GdmResource<BillingAccountsComponentInputs>
	implements BillingAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: BillingAccountsComponentInputs) {
		super(entity, options.name, "logging.v2.BillingAccounts", options);
	}
}
export interface BillingAccountsComponentOutputs {}
export interface BillingAccountsComponentInputs {
	readonly name: string;
}
export default {
	BillingAccounts: BillingAccounts,
};
