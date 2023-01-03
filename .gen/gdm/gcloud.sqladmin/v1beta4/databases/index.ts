import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Databases extends GdmResource<DatabasesComponentInputs> implements DatabasesComponentOutputs {
	constructor(entity: ADKEntity, options: DatabasesComponentInputs) {
		super(entity, options.name, "sqladmin.v1beta4.Databases", options);
	}
}
export interface DatabasesComponentOutputs {}
export interface DatabasesComponentInputs {
	readonly charset?: string | undefined;
	readonly collation?: string | undefined;
	readonly etag?: string | undefined;
	readonly instance?: string | undefined;
	readonly kind?: string | undefined;
	readonly name: string;
	readonly project?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly type: string;
}
export interface Database {
	readonly charset?: string | undefined;
	readonly collation?: string | undefined;
	readonly etag?: string | undefined;
	readonly instance?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly project?: string | undefined;
	readonly selfLink?: string | undefined;
}
export default {
	Databases: Databases,
};
