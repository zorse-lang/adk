import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class AccessPoliciesAuthorizedOrgsDescs
	extends GdmResource<AccessPoliciesAuthorizedOrgsDescsComponentInputs>
	implements AccessPoliciesAuthorizedOrgsDescsComponentOutputs
{
	constructor(entity: ADKEntity, options: AccessPoliciesAuthorizedOrgsDescsComponentInputs) {
		super(entity, options.name, "accesscontextmanager.v1.AccessPoliciesAuthorizedOrgsDescs", options);
	}
}
export interface AccessPoliciesAuthorizedOrgsDescsComponentOutputs {}
export interface AccessPoliciesAuthorizedOrgsDescsComponentInputs {
	readonly assetType?: string;
	readonly authorizationDirection?: string;
	readonly authorizationType?: string;
	readonly name: string;
	readonly orgs?: string[];
	readonly parent: string;
}
export interface AuthorizedOrgsDesc {
	readonly assetType?: string;
	readonly authorizationDirection?: string;
	readonly authorizationType?: string;
	readonly name?: string;
	readonly orgs?: string[];
}
export default {
	AccessPoliciesAuthorizedOrgsDescs: AccessPoliciesAuthorizedOrgsDescs,
};
