import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Roles extends GdmResource<RolesComponentInputs> implements RolesComponentOutputs {
	constructor(entity: ADKEntity, options: RolesComponentInputs) {
		super(entity, options.name, "iam.v1.Roles", options);
	}
}
export interface RolesComponentOutputs {}
export interface RolesComponentInputs {
	readonly deleted?: boolean | undefined;
	readonly description?: string | undefined;
	readonly etag?: string | undefined;
	readonly includedPermissions?: string[] | undefined;
	readonly name: string;
	readonly stage?: string | undefined;
	readonly title?: string | undefined;
	readonly type: string;
}
export interface Role {
	readonly deleted?: boolean | undefined;
	readonly description?: string | undefined;
	readonly etag?: string | undefined;
	readonly includedPermissions?: string[] | undefined;
	readonly name?: string | undefined;
	readonly stage?: string | undefined;
	readonly title?: string | undefined;
}
export default {
	Roles: Roles,
};
