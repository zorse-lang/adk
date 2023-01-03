import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class BillingAccountsResourceTypesValues
	extends GdmResource<BillingAccountsResourceTypesValuesComponentInputs>
	implements BillingAccountsResourceTypesValuesComponentOutputs
{
	constructor(entity: ADKEntity, options: BillingAccountsResourceTypesValuesComponentInputs) {
		super(entity, options.name, "logging.v2.BillingAccountsResourceTypesValues", options);
	}
}
export interface BillingAccountsResourceTypesValuesComponentOutputs {}
export interface BillingAccountsResourceTypesValuesComponentInputs {
	readonly type: string;
	readonly name: string;
}
export default {
	BillingAccountsResourceTypesValues: BillingAccountsResourceTypesValues,
};
