import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Users extends GdmResource<UsersComponentInputs> implements UsersComponentOutputs {
	constructor(entity: ADKEntity, options: UsersComponentInputs) {
		super(entity, options.name, "sqladmin.v1beta4.Users", options);
	}
}
export interface UsersComponentOutputs {}
export interface UsersComponentInputs {
	readonly etag?: string | undefined;
	readonly host?: string | undefined;
	readonly instance: string;
	readonly kind?: string | undefined;
	readonly name: string;
	readonly password?: string | undefined;
	readonly type: string;
}
export interface User {
	readonly etag?: string | undefined;
	readonly host?: string | undefined;
	readonly instance?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly password?: string | undefined;
	readonly project?: string | undefined;
}
export default {
	Users: Users,
};
