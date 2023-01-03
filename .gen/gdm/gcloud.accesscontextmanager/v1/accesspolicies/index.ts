import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class AccessPolicies extends GdmResource<AccessPoliciesComponentInputs> implements AccessPoliciesComponentOutputs {
	constructor(entity: ADKEntity, options: AccessPoliciesComponentInputs) {
		super(entity, options.name, "accesscontextmanager.v1.AccessPolicies", options);
	}
	public readonly etag?: string | undefined;
}
export interface AccessPoliciesComponentOutputs {
	readonly etag?: string | undefined;
}
export interface AccessPoliciesComponentInputs {
	readonly name: string;
	readonly parent: string;
	readonly scopes?: string[] | undefined;
	readonly title: string;
	readonly type: string;
}
export interface AccessPolicy {
	readonly etag?: string | undefined;
	readonly name?: string | undefined;
	readonly parent: string;
	readonly scopes?: string[] | undefined;
	readonly title: string;
}
export default {
	AccessPolicies: AccessPolicies,
};
