import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class RowAccessPolicies
	extends GdmResource<RowAccessPoliciesComponentInputs>
	implements RowAccessPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: RowAccessPoliciesComponentInputs) {
		super(entity, options.name, "bigquery.v2.RowAccessPolicies", options);
	}
}
export interface RowAccessPoliciesComponentOutputs {}
export interface RowAccessPoliciesComponentInputs {
	readonly type: string;
	readonly name: string;
}
export default {
	RowAccessPolicies: RowAccessPolicies,
};
