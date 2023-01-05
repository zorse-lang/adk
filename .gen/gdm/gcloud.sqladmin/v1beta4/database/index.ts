import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Database extends GdmResource<DatabaseComponentInputs> implements DatabaseComponentOutputs {
	constructor(entity: ADKEntity, options: DatabaseComponentInputs) {
		super(entity, options.name, "sqladmin.v1beta4.database", options);
	}
}
export interface DatabaseComponentOutputs {}
export interface DatabaseComponentInputs {
	readonly charset?: string;
	readonly collation?: string;
	readonly etag?: string;
	readonly instance?: string;
	readonly kind?: string;
	readonly name: string;
	readonly project?: string;
	readonly selfLink?: string;
	readonly sqlserverDatabaseDetails?: SqlServerDatabaseDetails;
}
export interface SqlServerDatabaseDetails {
	readonly compatibilityLevel?: number;
	readonly recoveryModel?: string;
}
export default {
	Database: Database,
};
