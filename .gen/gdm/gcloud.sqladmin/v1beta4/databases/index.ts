import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Databases extends GdmResource<DatabasesComponentInputs> implements DatabasesComponentOutputs {
	constructor(entity: ADKEntity, options: DatabasesComponentInputs) {
		super(entity, options.name, "sqladmin.v1beta4.Databases", options);
	}
}
export interface DatabasesComponentOutputs {}
export interface DatabasesComponentInputs {
	readonly charset?: string;
	readonly collation?: string;
	readonly etag?: string;
	readonly instance?: string;
	readonly kind?: string;
	readonly name: string;
	readonly project?: string;
	readonly selfLink?: string;
}
export interface Database {
	readonly charset?: string;
	readonly collation?: string;
	readonly etag?: string;
	readonly instance?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly project?: string;
	readonly selfLink?: string;
}
export default {
	Databases: Databases,
};
