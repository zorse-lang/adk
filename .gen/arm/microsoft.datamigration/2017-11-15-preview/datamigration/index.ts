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
	readonly etag?: string;
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: DataMigrationServiceProperties;
	readonly sku?: ServiceSku;
	readonly tags?: TrackedResourceTags;
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
	readonly properties?: ProjectProperties;
	readonly tags?: TrackedResourceTags;
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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: ProjectTaskProperties;
}
export interface ConnectionInfo {
	readonly password?: string;
	readonly userName?: string;
}
export interface ConnectToSourceSqlServerTaskInput {
	readonly checkPermissionsGroup?: "Default";
	readonly sourceConnectionInfo: SqlConnectionInfo;
}
export interface ConnectToSourceSqlServerTaskOutput {
	readonly id?: string;
}
export interface ConnectToTargetSqlDbTaskInput {
	readonly targetConnectionInfo: SqlConnectionInfo;
}
export interface ConnectToTargetSqlDbTaskOutput {
	readonly databases?: string;
	readonly id?: string;
	readonly targetServerBrandVersion?: string;
	readonly targetServerVersion?: string;
}
export interface DatabaseFileInfo {
	readonly databaseName?: string;
	readonly fileType?: "Filestream" | "Fulltext" | "Log" | "NotSupported";
	readonly id?: string;
	readonly logicalName?: string;
	readonly physicalFullName?: string;
	readonly restoreFullName?: string;
	readonly sizeMB?: number;
}
export interface DatabaseInfo {
	readonly sourceDatabaseName: string;
}
export interface DataMigrationServiceProperties {
	readonly provisioningState?:
		| "Accepted"
		| "Deleting"
		| "Deploying"
		| "Failed"
		| "FailedToStart"
		| "FailedToStop"
		| "Starting"
		| "Stopped"
		| "Stopping";
	readonly publicKey?: string;
	readonly virtualSubnetId: string;
}
export interface GetUserTablesSqlTaskInput {
	readonly connectionInfo: SqlConnectionInfo;
	readonly selectedDatabases: string[];
}
export interface GetUserTablesSqlTaskOutput {
	readonly databasesToTables?: string;
	readonly id?: string;
	readonly validationErrors?: ReportableException[];
}
export interface MigrateSqlServerSqlDbDatabaseInput {
	readonly makeSourceDbReadOnly?: boolean;
	readonly name?: string;
	readonly tableMap?: MigrateSqlServerSqlDbDatabaseInputTableMap;
	readonly targetDatabaseName?: string;
}
export interface MigrateSqlServerSqlDbDatabaseInputTableMap {
	readonly [key: string]: string;
}
export interface MigrateSqlServerSqlDbTaskInput {
	readonly selectedDatabases: MigrateSqlServerSqlDbDatabaseInput[];
	readonly sourceConnectionInfo: SqlConnectionInfo;
	readonly targetConnectionInfo: SqlConnectionInfo;
	readonly validationOptions?: MigrationValidationOptions;
}
export interface MigrateSqlServerSqlDbTaskOutput {
	readonly id?: string;
}
export interface MigrationReportResult {
	readonly id?: string;
	readonly reportUrl?: string;
}
export interface MigrationValidationOptions {
	readonly enableDataIntegrityValidation?: boolean;
	readonly enableQueryAnalysisValidation?: boolean;
	readonly enableSchemaValidation?: boolean;
}
export interface ODataError {
	readonly code?: string;
	readonly details?: ODataError[];
	readonly message?: string;
}
export interface ProjectProperties {
	readonly creationTime?: string;
	readonly databasesInfo?: DatabaseInfo[];
	readonly provisioningState?: "Deleting";
	readonly sourceConnectionInfo?: ConnectionInfo;
	readonly sourcePlatform: "SQL";
	readonly targetConnectionInfo?: ConnectionInfo;
	readonly targetPlatform: "SQLDB";
}
export interface ProjectTaskProperties {
	readonly errors?: ODataError[];
	readonly state?: "Canceled" | "Failed" | "FailedInputValidation" | "Faulted" | "Queued" | "Running" | "Succeeded";
}
export interface ReportableException {
	readonly filePath?: string;
	readonly hResult?: number;
	readonly lineNumber?: string;
	readonly message?: string;
	readonly stackTrace?: string;
}
export interface ServiceSku {
	readonly capacity?: number;
	readonly family?: string;
	readonly name?: string;
	readonly size?: string;
	readonly tier?: string;
}
export interface SqlConnectionInfo {
	readonly additionalSettings?: string;
	readonly authentication?: "ActiveDirectoryIntegrated" | "ActiveDirectoryPassword" | "None" | "SqlAuthentication";
	readonly dataSource: string;
	readonly encryptConnection?: boolean;
	readonly password?: string;
	readonly trustServerCertificate?: boolean;
	readonly type: string;
	readonly userName?: string;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export default {
	services: services,
	"services/projects": services_projects,
	"services/projects/tasks": services_projects_tasks,
};
