import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Roles extends GdmResource<RolesComponentInputs> implements RolesComponentOutputs {
	constructor(entity: ADKEntity, options: RolesComponentInputs) {
		super(entity, options.name, "iam.v1.Roles", options);
	}
}
export interface RolesComponentOutputs {}
export interface RolesComponentInputs {
	readonly deleted?: boolean;
	readonly description?: string;
	readonly etag?: string;
	readonly includedPermissions?: string[];
	readonly name: string;
	readonly stage?: string;
	readonly title?: string;
}
export interface Role {
	readonly deleted?: boolean;
	readonly description?: string;
	readonly etag?: string;
	readonly includedPermissions?: string[];
	readonly name?: string;
	readonly stage?: string;
	readonly title?: string;
}
export default {
	Roles: Roles,
};
