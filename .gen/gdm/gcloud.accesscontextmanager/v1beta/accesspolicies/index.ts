import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class AccessPolicies extends GdmResource<AccessPoliciesComponentInputs> implements AccessPoliciesComponentOutputs {
	constructor(entity: ADKEntity, options: AccessPoliciesComponentInputs) {
		super(entity, options.name, "accesscontextmanager.v1beta.AccessPolicies", options);
	}
	public readonly createTime?: string;
	public readonly etag?: string;
	public readonly updateTime?: string;
}
export interface AccessPoliciesComponentOutputs {
	readonly createTime?: string;
	readonly etag?: string;
	readonly updateTime?: string;
}
export interface AccessPoliciesComponentInputs {
	readonly name: string;
	readonly parent: string;
	readonly scopes?: string[];
	readonly title: string;
}
export interface AccessPolicy {
	readonly createTime?: string;
	readonly etag?: string;
	readonly name?: string;
	readonly parent: string;
	readonly scopes?: string[];
	readonly title: string;
	readonly updateTime?: string;
}
export default {
	AccessPolicies: AccessPolicies,
};
