import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class IamPolicies extends GdmResource<IamPoliciesComponentInputs> implements IamPoliciesComponentOutputs {
	constructor(entity: ADKEntity, options: IamPoliciesComponentInputs) {
		super(entity, options.name, "iam.v1.IamPolicies", options);
	}
}
export interface IamPoliciesComponentOutputs {}
export interface IamPoliciesComponentInputs {
	readonly name: string;
}
export default {
	IamPolicies: IamPolicies,
};
