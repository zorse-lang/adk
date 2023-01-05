import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class AccessPolicies extends GdmResource<AccessPoliciesComponentInputs> implements AccessPoliciesComponentOutputs {
	constructor(entity: ADKEntity, options: AccessPoliciesComponentInputs) {
		super(entity, options.name, "accesscontextmanager.v1.AccessPolicies", options);
	}
	public readonly etag?: string;
}
export interface AccessPoliciesComponentOutputs {
	readonly etag?: string;
}
export interface AccessPoliciesComponentInputs {
	readonly name: string;
	readonly parent: string;
	readonly scopes?: string[];
	readonly title: string;
}
export interface AccessPolicy {
	readonly etag?: string;
	readonly name?: string;
	readonly parent: string;
	readonly scopes?: string[];
	readonly title: string;
}
export default {
	AccessPolicies: AccessPolicies,
};
