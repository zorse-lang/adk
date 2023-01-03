import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class AccessPolicies extends GdmResource<AccessPoliciesComponentInputs> implements AccessPoliciesComponentOutputs {
	constructor(entity: ADKEntity, options: AccessPoliciesComponentInputs) {
		super(entity, options.name, "accesscontextmanager.v1beta.AccessPolicies", options);
	}
	public readonly createTime?: string | undefined;
	public readonly etag?: string | undefined;
	public readonly updateTime?: string | undefined;
}
export interface AccessPoliciesComponentOutputs {
	readonly createTime?: string | undefined;
	readonly etag?: string | undefined;
	readonly updateTime?: string | undefined;
}
export interface AccessPoliciesComponentInputs {
	readonly name: string;
	readonly parent: string;
	readonly scopes?: string[] | undefined;
	readonly title: string;
	readonly type: string;
}
export interface AccessPolicy {
	readonly createTime?: string | undefined;
	readonly etag?: string | undefined;
	readonly name?: string | undefined;
	readonly parent: string;
	readonly scopes?: string[] | undefined;
	readonly title: string;
	readonly updateTime?: string | undefined;
}
export default {
	AccessPolicies: AccessPolicies,
};
