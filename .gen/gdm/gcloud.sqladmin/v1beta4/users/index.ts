import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Users extends GdmResource<UsersComponentInputs> implements UsersComponentOutputs {
	constructor(entity: ADKEntity, options: UsersComponentInputs) {
		super(entity, options.name, "sqladmin.v1beta4.Users", options);
	}
}
export interface UsersComponentOutputs {}
export interface UsersComponentInputs {
	readonly etag?: string;
	readonly host?: string;
	readonly instance: string;
	readonly kind?: string;
	readonly name: string;
	readonly password?: string;
}
export interface User {
	readonly etag?: string;
	readonly host?: string;
	readonly instance?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly password?: string;
	readonly project?: string;
}
export default {
	Users: Users,
};
