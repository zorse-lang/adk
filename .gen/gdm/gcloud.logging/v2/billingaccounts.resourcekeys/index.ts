import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class BillingAccountsResourceKeys
	extends GdmResource<BillingAccountsResourceKeysComponentInputs>
	implements BillingAccountsResourceKeysComponentOutputs
{
	constructor(entity: ADKEntity, options: BillingAccountsResourceKeysComponentInputs) {
		super(entity, options.name, "logging.v2.BillingAccountsResourceKeys", options);
	}
}
export interface BillingAccountsResourceKeysComponentOutputs {}
export interface BillingAccountsResourceKeysComponentInputs {
	readonly type: string;
	readonly name: string;
}
export default {
	BillingAccountsResourceKeys: BillingAccountsResourceKeys,
};
