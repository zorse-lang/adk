import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Database extends GdmResource<DatabaseComponentInputs> implements DatabaseComponentOutputs {
	constructor(entity: ADKEntity, options: DatabaseComponentInputs) {
		super(entity, options.name, "sqladmin.v1beta4.database", options);
	}
}
export interface DatabaseComponentOutputs {}
export interface DatabaseComponentInputs {
	readonly charset?: string | undefined;
	readonly collation?: string | undefined;
	readonly etag?: string | undefined;
	readonly instance?: string | undefined;
	readonly kind?: string | undefined;
	readonly name: string;
	readonly project?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly sqlserverDatabaseDetails?: SqlServerDatabaseDetails | undefined;
	readonly type: string;
}
export interface SqlServerDatabaseDetails {
	readonly compatibilityLevel?: number | undefined;
	readonly recoveryModel?: string | undefined;
}
export default {
	Database: Database,
};
