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
	readonly assetType?: string | undefined;
	readonly authorizationDirection?: string | undefined;
	readonly authorizationType?: string | undefined;
	readonly name: string;
	readonly orgs?: string[] | undefined;
	readonly parent: string;
	readonly type: string;
}
export interface AuthorizedOrgsDesc {
	readonly assetType?: string | undefined;
	readonly authorizationDirection?: string | undefined;
	readonly authorizationType?: string | undefined;
	readonly name?: string | undefined;
	readonly orgs?: string[] | undefined;
}
export default {
	AccessPoliciesAuthorizedOrgsDescs: AccessPoliciesAuthorizedOrgsDescs,
};
