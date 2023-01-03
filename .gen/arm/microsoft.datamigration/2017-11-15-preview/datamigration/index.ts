import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class services extends ArmResource<servicesComponentInputs> implements servicesComponentOutputs {
	constructor(entity: ADKEntity, options: servicesComponentInputs) {
		super(entity, options.name, "Microsoft.DataMigration/services", "2017-11-15-preview", options);
	}
	public readonly apiVersion: "2017-11-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataMigration/services";
}
export interface servicesComponentOutputs {
	readonly apiVersion: "2017-11-15-preview";
	readonly id: string;
	readonly type: "Microsoft.DataMigration/services";
}
export interface servicesComponentInputs {
	readonly etag?: string | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: DataMigrationServiceProperties | undefined;
	readonly sku?: ServiceSku | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class services_projects
	extends ArmResource<services_projectsComponentInputs>
	implements services_projectsComponentOutputs
{
	constructor(entity: ADKEntity, options: services_projectsComponentInputs) {
		super(entity, options.name, "Microsoft.DataMigration/services/projects", "2017-11-15-preview", options);
	}
	public readonly apiVersion: "2017-11-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataMigration/services/projects";
}
export interface services_projectsComponentOutputs {
	readonly apiVersion: "2017-11-15-preview";
	readonly id: string;
	readonly type: "Microsoft.DataMigration/services/projects";
}
export interface services_projectsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ProjectProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class services_projects_tasks
	extends ArmResource<services_projects_tasksComponentInputs>
	implements services_projects_tasksComponentOutputs
{
	constructor(entity: ADKEntity, options: services_projects_tasksComponentInputs) {
		super(entity, options.name, "Microsoft.DataMigration/services/projects/tasks", "2017-11-15-preview", options);
	}
	public readonly apiVersion: "2017-11-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataMigration/services/projects/tasks";
}
export interface services_projects_tasksComponentOutputs {
	readonly apiVersion: "2017-11-15-preview";
	readonly id: string;
	readonly type: "Microsoft.DataMigration/services/projects/tasks";
}
export interface services_projects_tasksComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: ProjectTaskProperties | undefined;
}
export interface ConnectionInfo {
	readonly password?: string | undefined;
	readonly userName?: string | undefined;
}
export interface ConnectToSourceSqlServerTaskInput {
	readonly checkPermissionsGroup?: "Default" | undefined;
	readonly sourceConnectionInfo: SqlConnectionInfo;
}
export interface ConnectToSourceSqlServerTaskOutput {
	readonly id?: string | undefined;
}
export interface ConnectToTargetSqlDbTaskInput {
	readonly targetConnectionInfo: SqlConnectionInfo;
}
export interface ConnectToTargetSqlDbTaskOutput {
	readonly databases?: string | undefined;
	readonly id?: string | undefined;
	readonly targetServerBrandVersion?: string | undefined;
	readonly targetServerVersion?: string | undefined;
}
export interface DatabaseFileInfo {
	readonly databaseName?: string | undefined;
	readonly fileType?: ("Filestream" | "Fulltext" | "Log" | "NotSupported") | undefined;
	readonly id?: string | undefined;
	readonly logicalName?: string | undefined;
	readonly physicalFullName?: string | undefined;
	readonly restoreFullName?: string | undefined;
	readonly sizeMB?: number | undefined;
}
export interface DatabaseInfo {
	readonly sourceDatabaseName: string;
}
export interface DataMigrationServiceProperties {
	readonly provisioningState?:
		| (
				| "Accepted"
				| "Deleting"
				| "Deploying"
				| "Failed"
				| "FailedToStart"
				| "FailedToStop"
				| "Starting"
				| "Stopped"
				| "Stopping"
		  )
		| undefined;
	readonly publicKey?: string | undefined;
	readonly virtualSubnetId: string;
}
export interface GetUserTablesSqlTaskInput {
	readonly connectionInfo: SqlConnectionInfo;
	readonly selectedDatabases: string[];
}
export interface GetUserTablesSqlTaskOutput {
	readonly databasesToTables?: string | undefined;
	readonly id?: string | undefined;
	readonly validationErrors?: ReportableException[] | undefined;
}
export interface MigrateSqlServerSqlDbDatabaseInput {
	readonly makeSourceDbReadOnly?: boolean | undefined;
	readonly name?: string | undefined;
	readonly tableMap?: MigrateSqlServerSqlDbDatabaseInputTableMap | undefined;
	readonly targetDatabaseName?: string | undefined;
}
export interface MigrateSqlServerSqlDbDatabaseInputTableMap {
	readonly "[ key: string ]"?: string | undefined;
}
export interface MigrateSqlServerSqlDbTaskInput {
	readonly selectedDatabases: MigrateSqlServerSqlDbDatabaseInput[];
	readonly sourceConnectionInfo: SqlConnectionInfo;
	readonly targetConnectionInfo: SqlConnectionInfo;
	readonly validationOptions?: MigrationValidationOptions | undefined;
}
export interface MigrateSqlServerSqlDbTaskOutput {
	readonly id?: string | undefined;
}
export interface MigrationReportResult {
	readonly id?: string | undefined;
	readonly reportUrl?: string | undefined;
}
export interface MigrationValidationOptions {
	readonly enableDataIntegrityValidation?: boolean | undefined;
	readonly enableQueryAnalysisValidation?: boolean | undefined;
	readonly enableSchemaValidation?: boolean | undefined;
}
export interface ODataError {
	readonly code?: string | undefined;
	readonly details?: ODataError[] | undefined;
	readonly message?: string | undefined;
}
export interface ProjectProperties {
	readonly creationTime?: string | undefined;
	readonly databasesInfo?: DatabaseInfo[] | undefined;
	readonly provisioningState?: "Deleting" | undefined;
	readonly sourceConnectionInfo?: ConnectionInfo | undefined;
	readonly sourcePlatform: "SQL";
	readonly targetConnectionInfo?: ConnectionInfo | undefined;
	readonly targetPlatform: "SQLDB";
}
export interface ProjectTaskProperties {
	readonly errors?: ODataError[] | undefined;
	readonly state?:
		| ("Canceled" | "Failed" | "FailedInputValidation" | "Faulted" | "Queued" | "Running" | "Succeeded")
		| undefined;
}
export interface ReportableException {
	readonly filePath?: string | undefined;
	readonly hResult?: number | undefined;
	readonly lineNumber?: string | undefined;
	readonly message?: string | undefined;
	readonly stackTrace?: string | undefined;
}
export interface ServiceSku {
	readonly capacity?: number | undefined;
	readonly family?: string | undefined;
	readonly name?: string | undefined;
	readonly size?: string | undefined;
	readonly tier?: string | undefined;
}
export interface SqlConnectionInfo {
	readonly additionalSettings?: string | undefined;
	readonly authentication?:
		| ("ActiveDirectoryIntegrated" | "ActiveDirectoryPassword" | "None" | "SqlAuthentication")
		| undefined;
	readonly dataSource: string;
	readonly encryptConnection?: boolean | undefined;
	readonly password?: string | undefined;
	readonly trustServerCertificate?: boolean | undefined;
	readonly type: string;
	readonly userName?: string | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	services: services,
	"services/projects": services_projects,
	"services/projects/tasks": services_projects_tasks,
};
