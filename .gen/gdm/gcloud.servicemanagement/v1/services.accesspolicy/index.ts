import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ServicesAccessPolicy
	extends GdmResource<ServicesAccessPolicyComponentInputs>
	implements ServicesAccessPolicyComponentOutputs
{
	constructor(entity: ADKEntity, options: ServicesAccessPolicyComponentInputs) {
		super(entity, options.name, "servicemanagement.v1.ServicesAccessPolicy", options);
	}
}
export interface ServicesAccessPolicyComponentOutputs {}
export interface ServicesAccessPolicyComponentInputs {
	readonly name: string;
}
export default {
	ServicesAccessPolicy: ServicesAccessPolicy,
};
