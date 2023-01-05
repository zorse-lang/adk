import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class databaseMigrations
	extends ArmResource<databaseMigrationsComponentInputs>
	implements databaseMigrationsComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseMigrationsComponentInputs) {
		super(entity, options.name, "Microsoft.DataMigration/databaseMigrations", "2022-03-30-preview", options);
	}
	public readonly apiVersion: "2022-03-30-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataMigration/databaseMigrations";
}
export interface databaseMigrationsComponentOutputs {
	readonly apiVersion: "2022-03-30-preview";
	readonly id: string;
	readonly type: "Microsoft.DataMigration/databaseMigrations";
}
export interface databaseMigrationsComponentInputs {
	readonly name: string;
	readonly properties?: DatabaseMigrationPropertiesSqlDb;
	readonly systemData?: SystemData;
}
export class services extends ArmResource<servicesComponentInputs> implements servicesComponentOutputs {
	constructor(entity: ADKEntity, options: servicesComponentInputs) {
		super(entity, options.name, "Microsoft.DataMigration/services", "2022-03-30-preview", options);
	}
	public readonly apiVersion: "2022-03-30-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataMigration/services";
}
export interface servicesComponentOutputs {
	readonly apiVersion: "2022-03-30-preview";
	readonly id: string;
	readonly type: "Microsoft.DataMigration/services";
}
export interface servicesComponentInputs {
	readonly etag?: string;
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: DataMigrationServiceProperties;
	readonly sku?: ServiceSku;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class services_projects
	extends ArmResource<services_projectsComponentInputs>
	implements services_projectsComponentOutputs
{
	constructor(entity: ADKEntity, options: services_projectsComponentInputs) {
		super(entity, options.name, "Microsoft.DataMigration/services/projects", "2022-03-30-preview", options);
	}
	public readonly apiVersion: "2022-03-30-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataMigration/services/projects";
}
export interface services_projectsComponentOutputs {
	readonly apiVersion: "2022-03-30-preview";
	readonly id: string;
	readonly type: "Microsoft.DataMigration/services/projects";
}
export interface services_projectsComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ProjectProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class services_projects_files
	extends ArmResource<services_projects_filesComponentInputs>
	implements services_projects_filesComponentOutputs
{
	constructor(entity: ADKEntity, options: services_projects_filesComponentInputs) {
		super(entity, options.name, "Microsoft.DataMigration/services/projects/files", "2022-03-30-preview", options);
	}
	public readonly apiVersion: "2022-03-30-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataMigration/services/projects/files";
}
export interface services_projects_filesComponentOutputs {
	readonly apiVersion: "2022-03-30-preview";
	readonly id: string;
	readonly type: "Microsoft.DataMigration/services/projects/files";
}
export interface services_projects_filesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: ProjectFileProperties;
	readonly systemData?: SystemData;
}
export class services_projects_tasks
	extends ArmResource<services_projects_tasksComponentInputs>
	implements services_projects_tasksComponentOutputs
{
	constructor(entity: ADKEntity, options: services_projects_tasksComponentInputs) {
		super(entity, options.name, "Microsoft.DataMigration/services/projects/tasks", "2022-03-30-preview", options);
	}
	public readonly apiVersion: "2022-03-30-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataMigration/services/projects/tasks";
}
export interface services_projects_tasksComponentOutputs {
	readonly apiVersion: "2022-03-30-preview";
	readonly id: string;
	readonly type: "Microsoft.DataMigration/services/projects/tasks";
}
export interface services_projects_tasksComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: ProjectTaskProperties;
	readonly systemData?: SystemData;
}
export class services_serviceTasks
	extends ArmResource<services_serviceTasksComponentInputs>
	implements services_serviceTasksComponentOutputs
{
	constructor(entity: ADKEntity, options: services_serviceTasksComponentInputs) {
		super(entity, options.name, "Microsoft.DataMigration/services/serviceTasks", "2022-03-30-preview", options);
	}
	public readonly apiVersion: "2022-03-30-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataMigration/services/serviceTasks";
}
export interface services_serviceTasksComponentOutputs {
	readonly apiVersion: "2022-03-30-preview";
	readonly id: string;
	readonly type: "Microsoft.DataMigration/services/serviceTasks";
}
export interface services_serviceTasksComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: ProjectTaskProperties;
	readonly systemData?: SystemData;
}
export class sqlMigrationServices
	extends ArmResource<sqlMigrationServicesComponentInputs>
	implements sqlMigrationServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: sqlMigrationServicesComponentInputs) {
		super(entity, options.name, "Microsoft.DataMigration/sqlMigrationServices", "2022-03-30-preview", options);
	}
	public readonly apiVersion: "2022-03-30-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataMigration/sqlMigrationServices";
}
export interface sqlMigrationServicesComponentOutputs {
	readonly apiVersion: "2022-03-30-preview";
	readonly id: string;
	readonly type: "Microsoft.DataMigration/sqlMigrationServices";
}
export interface sqlMigrationServicesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: SqlMigrationServiceProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export function listAuthKeys(resource: sqlMigrationServices): AuthenticationKeys {
	if (resource.apiVersion !== "2022-03-30-preview") {
		throw new Error(`listAuthKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.DataMigration/sqlMigrationServices") {
		throw new Error(`listAuthKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listMonitoringData(resource: sqlMigrationServices): IntegrationRuntimeMonitoringData {
	if (resource.apiVersion !== "2022-03-30-preview") {
		throw new Error(`listMonitoringData is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.DataMigration/sqlMigrationServices") {
		throw new Error(`listMonitoringData is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AuthenticationKeys {
	readonly authKey1?: string;
	readonly authKey2?: string;
}
export interface AzureActiveDirectoryApp {
	readonly appKey?: string;
	readonly applicationId?: string;
	readonly ignoreAzurePermissions?: boolean;
	readonly tenantId?: string;
}
export interface BackupFileInfo {
	readonly familySequenceNumber?: number;
	readonly fileLocation?: string;
	readonly status?: "Arrived" | "Cancelled" | "Queued" | "Restored" | "Restoring" | "Uploaded" | "Uploading";
}
export interface BackupSetInfo {
	readonly backupFinishedDate?: string;
	readonly backupSetId?: string;
	readonly backupStartDate?: string;
	readonly backupType?:
		| "Database"
		| "DifferentialDatabase"
		| "DifferentialFile"
		| "DifferentialPartial"
		| "File"
		| "Partial"
		| "TransactionLog";
	readonly databaseName?: string;
	readonly firstLsn?: string;
	readonly isBackupRestored?: boolean;
	readonly lastLsn?: string;
	readonly lastModifiedTime?: string;
	readonly listOfBackupFiles?: BackupFileInfo[];
}
export interface BlobShare {
	readonly sasUri?: string;
}
export interface CheckOCIDriverTaskInput {
	readonly serverVersion?: string;
}
export interface CheckOCIDriverTaskOutput {
	readonly installedDriver?: OracleOCIDriverInfo;
	readonly validationErrors?: ReportableException[];
}
export interface CommandProperties {
	readonly errors?: ODataError[];
	readonly state?: "Accepted" | "Failed" | "Running" | "Succeeded" | "Unknown";
}
export interface ConnectionInfo {
	readonly password?: string;
	readonly userName?: string;
}
export interface ConnectToSourceMySqlTaskInput {
	readonly checkPermissionsGroup?:
		| "Default"
		| "MigrationFromMySQLToAzureDBForMySQL"
		| "MigrationFromSqlServerToAzureDB"
		| "MigrationFromSqlServerToAzureMI";
	readonly isOfflineMigration?: boolean;
	readonly sourceConnectionInfo: MySqlConnectionInfo;
	readonly targetPlatform?: "AzureDbForMySQL" | "SqlServer";
}
export interface ConnectToSourceNonSqlTaskOutput {
	readonly databases?: string[];
	readonly id?: string;
	readonly serverProperties?: ServerProperties;
	readonly sourceServerBrandVersion?: string;
	readonly validationErrors?: ReportableException[];
}
export interface ConnectToSourceOracleSyncTaskInput {
	readonly sourceConnectionInfo: OracleConnectionInfo;
}
export interface ConnectToSourceOracleSyncTaskOutput {
	readonly databases?: string[];
	readonly sourceServerBrandVersion?: string;
	readonly sourceServerVersion?: string;
	readonly validationErrors?: ReportableException[];
}
export interface ConnectToSourcePostgreSqlSyncTaskInput {
	readonly sourceConnectionInfo: PostgreSqlConnectionInfo;
}
export interface ConnectToSourcePostgreSqlSyncTaskOutput {
	readonly databases?: string[];
	readonly id?: string;
	readonly sourceServerBrandVersion?: string;
	readonly sourceServerVersion?: string;
	readonly validationErrors?: ReportableException[];
}
export interface ConnectToSourceSqlServerTaskInput {
	readonly checkPermissionsGroup?:
		| "Default"
		| "MigrationFromMySQLToAzureDBForMySQL"
		| "MigrationFromSqlServerToAzureDB"
		| "MigrationFromSqlServerToAzureMI";
	readonly collectAgentJobs?: boolean;
	readonly collectDatabases?: boolean;
	readonly collectLogins?: boolean;
	readonly collectTdeCertificateInfo?: boolean;
	readonly encryptedKeyForSecureFields?: string;
	readonly sourceConnectionInfo: SqlConnectionInfo;
	readonly validateSsisCatalogOnly?: boolean;
}
export interface ConnectToSourceSqlServerTaskOutput {
	readonly id?: string;
}
export interface ConnectToTargetAzureDbForMySqlTaskInput {
	readonly isOfflineMigration?: boolean;
	readonly sourceConnectionInfo: MySqlConnectionInfo;
	readonly targetConnectionInfo: MySqlConnectionInfo;
}
export interface ConnectToTargetAzureDbForMySqlTaskOutput {
	readonly databases?: string[];
	readonly id?: string;
	readonly serverVersion?: string;
	readonly targetServerBrandVersion?: string;
	readonly validationErrors?: ReportableException[];
}
export interface ConnectToTargetAzureDbForPostgreSqlSyncTaskInput {
	readonly sourceConnectionInfo: PostgreSqlConnectionInfo;
	readonly targetConnectionInfo: PostgreSqlConnectionInfo;
}
export interface ConnectToTargetAzureDbForPostgreSqlSyncTaskOutput {
	readonly databases?: string[];
	readonly id?: string;
	readonly targetServerBrandVersion?: string;
	readonly targetServerVersion?: string;
	readonly validationErrors?: ReportableException[];
}
export interface ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskInput {
	readonly targetConnectionInfo: PostgreSqlConnectionInfo;
}
export interface ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskOutput {
	readonly databases?: string[];
	readonly databaseSchemaMap?: ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskOutputDatabaseSchemaMapItem[];
	readonly targetServerBrandVersion?: string;
	readonly targetServerVersion?: string;
	readonly validationErrors?: ReportableException[];
}
export interface ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskOutputDatabaseSchemaMapItem {
	readonly database?: string;
	readonly schemas?: string[];
}
export interface ConnectToTargetSqlDbSyncTaskInput {
	readonly sourceConnectionInfo: SqlConnectionInfo;
	readonly targetConnectionInfo: SqlConnectionInfo;
}
export interface ConnectToTargetSqlDbTaskInput {
	readonly queryObjectCounts?: boolean;
	readonly targetConnectionInfo: SqlConnectionInfo;
}
export interface ConnectToTargetSqlDbTaskOutput {
	readonly databases?: string;
	readonly id?: string;
	readonly targetServerBrandVersion?: string;
	readonly targetServerVersion?: string;
}
export interface ConnectToTargetSqlMISyncTaskInput {
	readonly azureApp: AzureActiveDirectoryApp;
	readonly targetConnectionInfo: MiSqlConnectionInfo;
}
export interface ConnectToTargetSqlMISyncTaskOutput {
	readonly targetServerBrandVersion?: string;
	readonly targetServerVersion?: string;
	readonly validationErrors?: ReportableException[];
}
export interface ConnectToTargetSqlMITaskInput {
	readonly collectAgentJobs?: boolean;
	readonly collectLogins?: boolean;
	readonly targetConnectionInfo: SqlConnectionInfo;
	readonly validateSsisCatalogOnly?: boolean;
}
export interface ConnectToTargetSqlMITaskOutput {
	readonly agentJobs?: string[];
	readonly id?: string;
	readonly logins?: string[];
	readonly targetServerBrandVersion?: string;
	readonly targetServerVersion?: string;
	readonly validationErrors?: ReportableException[];
}
export interface CopyProgressDetails {
	readonly copyDuration?: number;
	readonly copyStart?: string;
	readonly copyThroughput?: number;
	readonly dataRead?: number;
	readonly dataWritten?: number;
	readonly parallelCopyType?: string;
	readonly rowsCopied?: number;
	readonly rowsRead?: number;
	readonly status?: string;
	readonly tableName?: string;
	readonly usedParallelCopies?: number;
}
export interface DatabaseBackupInfo {
	readonly backupFiles?: string[];
	readonly backupFinishDate?: string;
	readonly backupType?:
		| "Database"
		| "DifferentialDatabase"
		| "DifferentialFile"
		| "DifferentialPartial"
		| "File"
		| "Partial"
		| "TransactionLog";
	readonly databaseName?: string;
	readonly familyCount?: number;
	readonly isCompressed?: boolean;
	readonly isDamaged?: boolean;
	readonly position?: number;
}
export interface DatabaseFileInfo {
	readonly databaseName?: string;
	readonly fileType?: "Filestream" | "Fulltext" | "Log" | "NotSupported" | "Rows";
	readonly id?: string;
	readonly logicalName?: string;
	readonly physicalFullName?: string;
	readonly restoreFullName?: string;
	readonly sizeMB?: number;
}
export interface DatabaseInfo {
	readonly sourceDatabaseName: string;
}
export interface DatabaseMigrationPropertiesSqlDb {
	readonly endedOn?: string;
	readonly kind: "SqlDb" | "SqlMi" | "SqlVm";
	readonly migrationFailureError?: ErrorInfo;
	readonly migrationOperationId?: string;
	readonly migrationService?: string;
	readonly migrationStatus?: string;
	readonly migrationStatusDetails?: SqlDbMigrationStatusDetails;
	readonly offlineConfiguration?: SqlDbOfflineConfiguration;
	readonly provisioningError?: string;
	readonly provisioningState?: string;
	readonly scope?: string;
	readonly sourceDatabaseName?: string;
	readonly sourceServerName?: string;
	readonly sourceSqlConnection?: SqlConnectionInformation;
	readonly startedOn?: string;
	readonly tableList?: string[];
	readonly targetDatabaseCollation?: string;
	readonly targetSqlConnection?: SqlConnectionInformation;
}
export interface DatabaseTable {
	readonly hasRows?: boolean;
	readonly name?: string;
}
export interface DataIntegrityValidationResult {
	readonly failedObjects?: DataIntegrityValidationResultFailedObjects;
	readonly validationErrors?: ValidationError;
}
export interface DataIntegrityValidationResultFailedObjects {
	readonly [key: string]: string;
}
export interface DataMigrationServiceProperties {
	readonly autoStopDelay?: string;
	readonly deleteResourcesOnStop?: boolean;
	readonly provisioningState?:
		| "Accepted"
		| "Deleting"
		| "Deploying"
		| "Failed"
		| "FailedToStart"
		| "FailedToStop"
		| "Starting"
		| "Stopped"
		| "Stopping"
		| "Succeeded";
	readonly publicKey?: string;
	readonly virtualNicId?: string;
	readonly virtualSubnetId?: string;
}
export interface ErrorInfo {
	readonly code?: string;
	readonly message?: string;
}
export interface ExecutionStatistics {
	readonly cpuTimeMs?: number;
	readonly elapsedTimeMs?: number;
	readonly executionCount?: number;
	readonly hasErrors?: boolean;
	readonly sqlErrors?: string[];
	readonly waitStats?: ExecutionStatisticsWaitStats;
}
export interface ExecutionStatisticsWaitStats {
	readonly [key: string]: WaitStatistics;
}
export interface FileShare {
	readonly password?: string;
	readonly path: string;
	readonly userName?: string;
}
export interface GetTdeCertificatesSqlTaskInput {
	readonly backupFileShare: FileShare;
	readonly connectionInfo: SqlConnectionInfo;
	readonly selectedCertificates: SelectedCertificateInput[];
}
export interface GetTdeCertificatesSqlTaskOutput {
	readonly base64EncodedCertificates?: string;
	readonly validationErrors?: ReportableException[];
}
export interface GetUserTablesMySqlTaskInput {
	readonly connectionInfo: MySqlConnectionInfo;
	readonly selectedDatabases: string[];
}
export interface GetUserTablesMySqlTaskOutput {
	readonly databasesToTables?: string;
	readonly id?: string;
	readonly validationErrors?: ReportableException[];
}
export interface GetUserTablesOracleTaskInput {
	readonly connectionInfo: OracleConnectionInfo;
	readonly selectedSchemas: string[];
}
export interface GetUserTablesOracleTaskOutput {
	readonly schemaName?: string;
	readonly tables?: DatabaseTable[];
	readonly validationErrors?: ReportableException[];
}
export interface GetUserTablesPostgreSqlTaskInput {
	readonly connectionInfo: PostgreSqlConnectionInfo;
	readonly selectedDatabases: string[];
}
export interface GetUserTablesPostgreSqlTaskOutput {
	readonly databaseName?: string;
	readonly tables?: DatabaseTable[];
	readonly validationErrors?: ReportableException[];
}
export interface GetUserTablesSqlSyncTaskInput {
	readonly selectedSourceDatabases: string[];
	readonly selectedTargetDatabases: string[];
	readonly sourceConnectionInfo: SqlConnectionInfo;
	readonly targetConnectionInfo: SqlConnectionInfo;
}
export interface GetUserTablesSqlSyncTaskOutput {
	readonly databasesToSourceTables?: string;
	readonly databasesToTargetTables?: string;
	readonly tableValidationErrors?: string;
	readonly validationErrors?: ReportableException[];
}
export interface GetUserTablesSqlTaskInput {
	readonly connectionInfo: SqlConnectionInfo;
	readonly encryptedKeyForSecureFields?: string;
	readonly selectedDatabases: string[];
}
export interface GetUserTablesSqlTaskOutput {
	readonly databasesToTables?: string;
	readonly id?: string;
	readonly validationErrors?: ReportableException[];
}
export interface InstallOCIDriverTaskInput {
	readonly driverPackageName?: string;
}
export interface InstallOCIDriverTaskOutput {
	readonly validationErrors?: ReportableException[];
}
export interface IntegrationRuntimeMonitoringData {
	readonly name?: string;
	readonly nodes?: NodeMonitoringData[];
}
export interface MigrateMISyncCompleteCommandInput {
	readonly sourceDatabaseName: string;
}
export interface MigrateMISyncCompleteCommandOutput {
	readonly errors?: ReportableException[];
}
export interface MigrateMySqlAzureDbForMySqlOfflineDatabaseInput {
	readonly name?: string;
	readonly tableMap?: MigrateMySqlAzureDbForMySqlOfflineDatabaseInputTableMap;
	readonly targetDatabaseName?: string;
}
export interface MigrateMySqlAzureDbForMySqlOfflineDatabaseInputTableMap {
	readonly [key: string]: string;
}
export interface MigrateMySqlAzureDbForMySqlOfflineTaskInput {
	readonly encryptedKeyForSecureFields?: string;
	readonly makeSourceServerReadOnly?: boolean;
	readonly optionalAgentSettings?: MigrateMySqlAzureDbForMySqlOfflineTaskInputOptionalAgentSettings;
	readonly selectedDatabases: MigrateMySqlAzureDbForMySqlOfflineDatabaseInput[];
	readonly sourceConnectionInfo: MySqlConnectionInfo;
	readonly startedOn?: string;
	readonly targetConnectionInfo: MySqlConnectionInfo;
}
export interface MigrateMySqlAzureDbForMySqlOfflineTaskInputOptionalAgentSettings {
	readonly [key: string]: string;
}
export interface MigrateMySqlAzureDbForMySqlOfflineTaskOutput {
	readonly id?: string;
}
export interface MigrateMySqlAzureDbForMySqlSyncDatabaseInput {
	readonly migrationSetting?: MigrateMySqlAzureDbForMySqlSyncDatabaseInputMigrationSetting;
	readonly name?: string;
	readonly sourceSetting?: MigrateMySqlAzureDbForMySqlSyncDatabaseInputSourceSetting;
	readonly tableMap?: MigrateMySqlAzureDbForMySqlSyncDatabaseInputTableMap;
	readonly targetDatabaseName?: string;
	readonly targetSetting?: MigrateMySqlAzureDbForMySqlSyncDatabaseInputTargetSetting;
}
export interface MigrateMySqlAzureDbForMySqlSyncDatabaseInputMigrationSetting {
	readonly [key: string]: string;
}
export interface MigrateMySqlAzureDbForMySqlSyncDatabaseInputSourceSetting {
	readonly [key: string]: string;
}
export interface MigrateMySqlAzureDbForMySqlSyncDatabaseInputTableMap {
	readonly [key: string]: string;
}
export interface MigrateMySqlAzureDbForMySqlSyncDatabaseInputTargetSetting {
	readonly [key: string]: string;
}
export interface MigrateMySqlAzureDbForMySqlSyncTaskInput {
	readonly selectedDatabases: MigrateMySqlAzureDbForMySqlSyncDatabaseInput[];
	readonly sourceConnectionInfo: MySqlConnectionInfo;
	readonly targetConnectionInfo: MySqlConnectionInfo;
}
export interface MigrateMySqlAzureDbForMySqlSyncTaskOutput {
	readonly id?: string;
}
export interface MigrateOracleAzureDbPostgreSqlSyncDatabaseInput {
	readonly caseManipulation?: string;
	readonly migrationSetting?: MigrateOracleAzureDbPostgreSqlSyncDatabaseInputMigrationSetting;
	readonly name?: string;
	readonly schemaName?: string;
	readonly sourceSetting?: MigrateOracleAzureDbPostgreSqlSyncDatabaseInputSourceSetting;
	readonly tableMap?: MigrateOracleAzureDbPostgreSqlSyncDatabaseInputTableMap;
	readonly targetDatabaseName?: string;
	readonly targetSetting?: MigrateOracleAzureDbPostgreSqlSyncDatabaseInputTargetSetting;
}
export interface MigrateOracleAzureDbPostgreSqlSyncDatabaseInputMigrationSetting {
	readonly [key: string]: string;
}
export interface MigrateOracleAzureDbPostgreSqlSyncDatabaseInputSourceSetting {
	readonly [key: string]: string;
}
export interface MigrateOracleAzureDbPostgreSqlSyncDatabaseInputTableMap {
	readonly [key: string]: string;
}
export interface MigrateOracleAzureDbPostgreSqlSyncDatabaseInputTargetSetting {
	readonly [key: string]: string;
}
export interface MigrateOracleAzureDbPostgreSqlSyncTaskInput {
	readonly selectedDatabases: MigrateOracleAzureDbPostgreSqlSyncDatabaseInput[];
	readonly sourceConnectionInfo: OracleConnectionInfo;
	readonly targetConnectionInfo: PostgreSqlConnectionInfo;
}
export interface MigrateOracleAzureDbPostgreSqlSyncTaskOutput {
	readonly id?: string;
}
export interface MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInput {
	readonly id?: string;
	readonly migrationSetting?: MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputMigrationSetting;
	readonly name?: string;
	readonly selectedTables?: MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseTableInput[];
	readonly sourceSetting?: MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputSourceSetting;
	readonly targetDatabaseName?: string;
	readonly targetSetting?: MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputTargetSetting;
}
export interface MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputMigrationSetting {
	readonly [key: string]: any;
}
export interface MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputSourceSetting {
	readonly [key: string]: string;
}
export interface MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputTargetSetting {
	readonly [key: string]: string;
}
export interface MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseTableInput {
	readonly name?: string;
}
export interface MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInput {
	readonly encryptedKeyForSecureFields?: string;
	readonly selectedDatabases: MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInput[];
	readonly sourceConnectionInfo: PostgreSqlConnectionInfo;
	readonly startedOn?: string;
	readonly targetConnectionInfo: PostgreSqlConnectionInfo;
}
export interface MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutput {
	readonly id?: string;
}
export interface MigrateSchemaSqlServerSqlDbDatabaseInput {
	readonly id?: string;
	readonly name?: string;
	readonly schemaSetting?: SchemaMigrationSetting;
	readonly targetDatabaseName?: string;
}
export interface MigrateSchemaSqlServerSqlDbTaskInput {
	readonly encryptedKeyForSecureFields?: string;
	readonly selectedDatabases: MigrateSchemaSqlServerSqlDbDatabaseInput[];
	readonly sourceConnectionInfo: SqlConnectionInfo;
	readonly startedOn?: string;
	readonly targetConnectionInfo: SqlConnectionInfo;
}
export interface MigrateSchemaSqlServerSqlDbTaskOutput {
	readonly id?: string;
}
export interface MigrateSqlServerSqlDbDatabaseInput {
	readonly id?: string;
	readonly makeSourceDbReadOnly?: boolean;
	readonly name?: string;
	readonly schemaSetting?: any;
	readonly tableMap?: MigrateSqlServerSqlDbDatabaseInputTableMap;
	readonly targetDatabaseName?: string;
}
export interface MigrateSqlServerSqlDbDatabaseInputTableMap {
	readonly [key: string]: string;
}
export interface MigrateSqlServerSqlDbSyncDatabaseInput {
	readonly id?: string;
	readonly migrationSetting?: MigrateSqlServerSqlDbSyncDatabaseInputMigrationSetting;
	readonly name?: string;
	readonly schemaName?: string;
	readonly sourceSetting?: MigrateSqlServerSqlDbSyncDatabaseInputSourceSetting;
	readonly tableMap?: MigrateSqlServerSqlDbSyncDatabaseInputTableMap;
	readonly targetDatabaseName?: string;
	readonly targetSetting?: MigrateSqlServerSqlDbSyncDatabaseInputTargetSetting;
}
export interface MigrateSqlServerSqlDbSyncDatabaseInputMigrationSetting {
	readonly [key: string]: string;
}
export interface MigrateSqlServerSqlDbSyncDatabaseInputSourceSetting {
	readonly [key: string]: string;
}
export interface MigrateSqlServerSqlDbSyncDatabaseInputTableMap {
	readonly [key: string]: string;
}
export interface MigrateSqlServerSqlDbSyncDatabaseInputTargetSetting {
	readonly [key: string]: string;
}
export interface MigrateSqlServerSqlDbSyncTaskInput {
	readonly selectedDatabases: MigrateSqlServerSqlDbSyncDatabaseInput[];
	readonly sourceConnectionInfo: SqlConnectionInfo;
	readonly targetConnectionInfo: SqlConnectionInfo;
	readonly validationOptions?: MigrationValidationOptions;
}
export interface MigrateSqlServerSqlDbSyncTaskOutput {
	readonly id?: string;
}
export interface MigrateSqlServerSqlDbTaskInput {
	readonly encryptedKeyForSecureFields?: string;
	readonly selectedDatabases: MigrateSqlServerSqlDbDatabaseInput[];
	readonly sourceConnectionInfo: SqlConnectionInfo;
	readonly startedOn?: string;
	readonly targetConnectionInfo: SqlConnectionInfo;
	readonly validationOptions?: MigrationValidationOptions;
}
export interface MigrateSqlServerSqlDbTaskOutput {
	readonly id?: string;
}
export interface MigrateSqlServerSqlMIDatabaseInput {
	readonly backupFilePaths?: string[];
	readonly backupFileShare?: FileShare;
	readonly id?: string;
	readonly name: string;
	readonly restoreDatabaseName: string;
}
export interface MigrateSqlServerSqlMISyncTaskInput {
	readonly azureApp: AzureActiveDirectoryApp;
	readonly backupFileShare?: FileShare;
	readonly numberOfParallelDatabaseMigrations?: number;
	readonly selectedDatabases: MigrateSqlServerSqlMIDatabaseInput[];
	readonly sourceConnectionInfo: SqlConnectionInfo;
	readonly storageResourceId: string;
	readonly targetConnectionInfo: MiSqlConnectionInfo;
}
export interface MigrateSqlServerSqlMISyncTaskOutput {
	readonly id?: string;
}
export interface MigrateSqlServerSqlMITaskInput {
	readonly aadDomainName?: string;
	readonly backupBlobShare: BlobShare;
	readonly backupFileShare?: FileShare;
	readonly backupMode?: "CreateBackup" | "ExistingBackup";
	readonly encryptedKeyForSecureFields?: string;
	readonly selectedAgentJobs?: string[];
	readonly selectedDatabases: MigrateSqlServerSqlMIDatabaseInput[];
	readonly selectedLogins?: string[];
	readonly sourceConnectionInfo: SqlConnectionInfo;
	readonly startedOn?: string;
	readonly targetConnectionInfo: SqlConnectionInfo;
}
export interface MigrateSqlServerSqlMITaskOutput {
	readonly id?: string;
}
export interface MigrateSsisTaskInput {
	readonly sourceConnectionInfo: SqlConnectionInfo;
	readonly ssisMigrationInfo: SsisMigrationInfo;
	readonly targetConnectionInfo: SqlConnectionInfo;
}
export interface MigrateSsisTaskOutput {
	readonly id?: string;
}
export interface MigrateSyncCompleteCommandInput {
	readonly commitTimeStamp?: string;
	readonly databaseName: string;
}
export interface MigrateSyncCompleteCommandOutput {
	readonly errors?: ReportableException[];
	readonly id?: string;
}
export interface MigrationEligibilityInfo {
	readonly isEligibleForMigration?: boolean;
	readonly validationMessages?: string[];
}
export interface MigrationReportResult {
	readonly id?: string;
	readonly reportUrl?: string;
}
export interface MigrationValidationDatabaseSummaryResult {
	readonly endedOn?: string;
	readonly id?: string;
	readonly migrationId?: string;
	readonly sourceDatabaseName?: string;
	readonly startedOn?: string;
	readonly status?:
		| "Completed"
		| "CompletedWithIssues"
		| "Default"
		| "Failed"
		| "InProgress"
		| "Initialized"
		| "NotStarted"
		| "Stopped";
	readonly targetDatabaseName?: string;
}
export interface MigrationValidationOptions {
	readonly enableDataIntegrityValidation?: boolean;
	readonly enableQueryAnalysisValidation?: boolean;
	readonly enableSchemaValidation?: boolean;
}
export interface MigrationValidationResult {
	readonly id?: string;
	readonly migrationId?: string;
	readonly status?:
		| "Completed"
		| "CompletedWithIssues"
		| "Default"
		| "Failed"
		| "InProgress"
		| "Initialized"
		| "NotStarted"
		| "Stopped";
	readonly summaryResults?: MigrationValidationResultSummaryResults;
}
export interface MigrationValidationResultSummaryResults {
	readonly [key: string]: MigrationValidationDatabaseSummaryResult;
}
export interface MiSqlConnectionInfo {
	readonly managedInstanceResourceId: string;
	readonly password?: string;
	readonly type: string;
	readonly userName?: string;
}
export interface MongoDbClusterInfo {
	readonly databases: MongoDbDatabaseInfo[];
	readonly supportsSharding: boolean;
	readonly type: "BlobContainer" | "CosmosDb" | "MongoDb";
	readonly version: string;
}
export interface MongoDbCollectionInfo {
	readonly averageDocumentSize: number;
	readonly databaseName: string;
	readonly dataSize: number;
	readonly documentCount: number;
	readonly isCapped: boolean;
	readonly isSystemCollection: boolean;
	readonly isView: boolean;
	readonly name: string;
	readonly qualifiedName: string;
	readonly shardKey?: MongoDbShardKeyInfo;
	readonly supportsSharding: boolean;
	readonly viewOf?: string;
}
export interface MongoDbCollectionProgress {
	readonly bytesCopied: number;
	readonly documentsCopied: number;
	readonly elapsedTime: string;
	readonly errors: MongoDbProgressErrors;
	readonly eventsPending: number;
	readonly eventsReplayed: number;
	readonly lastEventTime?: string;
	readonly lastReplayTime?: string;
	readonly name?: string;
	readonly qualifiedName?: string;
	readonly resultType: "Collection" | "Database" | "Migration";
	readonly state:
		| "Canceled"
		| "Complete"
		| "Copying"
		| "Failed"
		| "Finalizing"
		| "InitialReplay"
		| "Initializing"
		| "NotStarted"
		| "Replaying"
		| "Restarting"
		| "ValidatingInput";
	readonly totalBytes: number;
	readonly totalDocuments: number;
}
export interface MongoDbCollectionSettings {
	readonly canDelete?: boolean;
	readonly shardKey?: MongoDbShardKeySetting;
	readonly targetRUs?: number;
}
export interface MongoDbCommandInput {
	readonly objectName?: string;
}
export interface MongoDbConnectionInfo {
	readonly additionalSettings?: string;
	readonly authentication?:
		| "ActiveDirectoryIntegrated"
		| "ActiveDirectoryPassword"
		| "None"
		| "SqlAuthentication"
		| "WindowsAuthentication";
	readonly connectionString: string;
	readonly dataSource?: string;
	readonly encryptConnection?: boolean;
	readonly enforceSSL?: boolean;
	readonly password?: string;
	readonly port?: number;
	readonly serverBrandVersion?: string;
	readonly serverName?: string;
	readonly serverVersion?: string;
	readonly trustServerCertificate?: boolean;
	readonly type: string;
	readonly userName?: string;
}
export interface MongoDbDatabaseInfo {
	readonly averageDocumentSize: number;
	readonly collections: MongoDbCollectionInfo[];
	readonly dataSize: number;
	readonly documentCount: number;
	readonly name: string;
	readonly qualifiedName: string;
	readonly supportsSharding: boolean;
}
export interface MongoDbDatabaseProgress {
	readonly bytesCopied: number;
	readonly collections?: MongoDbDatabaseProgressCollections;
	readonly documentsCopied: number;
	readonly elapsedTime: string;
	readonly errors: MongoDbProgressErrors;
	readonly eventsPending: number;
	readonly eventsReplayed: number;
	readonly lastEventTime?: string;
	readonly lastReplayTime?: string;
	readonly name?: string;
	readonly qualifiedName?: string;
	readonly resultType: "Collection" | "Database" | "Migration";
	readonly state:
		| "Canceled"
		| "Complete"
		| "Copying"
		| "Failed"
		| "Finalizing"
		| "InitialReplay"
		| "Initializing"
		| "NotStarted"
		| "Replaying"
		| "Restarting"
		| "ValidatingInput";
	readonly totalBytes: number;
	readonly totalDocuments: number;
}
export interface MongoDbDatabaseProgressCollections {
	readonly [key: string]: MongoDbCollectionProgress;
}
export interface MongoDbDatabaseSettings {
	readonly collections: MongoDbDatabaseSettingsCollections;
	readonly targetRUs?: number;
}
export interface MongoDbDatabaseSettingsCollections {
	readonly [key: string]: MongoDbCollectionSettings;
}
export interface MongoDbError {
	readonly code?: string;
	readonly count?: number;
	readonly message?: string;
	readonly type?: "Error" | "ValidationError" | "Warning";
}
export interface MongoDbFinishCommandInput {
	readonly immediate: boolean;
	readonly objectName?: string;
}
export interface MongoDbMigrationProgress {
	readonly bytesCopied: number;
	readonly databases?: MongoDbMigrationProgressDatabases;
	readonly documentsCopied: number;
	readonly elapsedTime: string;
	readonly errors: MongoDbProgressErrors;
	readonly eventsPending: number;
	readonly eventsReplayed: number;
	readonly lastEventTime?: string;
	readonly lastReplayTime?: string;
	readonly name?: string;
	readonly qualifiedName?: string;
	readonly resultType: "Collection" | "Database" | "Migration";
	readonly state:
		| "Canceled"
		| "Complete"
		| "Copying"
		| "Failed"
		| "Finalizing"
		| "InitialReplay"
		| "Initializing"
		| "NotStarted"
		| "Replaying"
		| "Restarting"
		| "ValidatingInput";
	readonly totalBytes: number;
	readonly totalDocuments: number;
}
export interface MongoDbMigrationProgressDatabases {
	readonly [key: string]: MongoDbDatabaseProgress;
}
export interface MongoDbMigrationSettings {
	readonly boostRUs?: number;
	readonly databases: MongoDbMigrationSettingsDatabases;
	readonly replication?: "Continuous" | "Disabled" | "OneTime";
	readonly source: MongoDbConnectionInfo;
	readonly target: MongoDbConnectionInfo;
	readonly throttling?: MongoDbThrottlingSettings;
}
export interface MongoDbMigrationSettingsDatabases {
	readonly [key: string]: MongoDbDatabaseSettings;
}
export interface MongoDbProgress {
	readonly bytesCopied: number;
	readonly documentsCopied: number;
	readonly elapsedTime: string;
	readonly errors: MongoDbProgressErrors;
	readonly eventsPending: number;
	readonly eventsReplayed: number;
	readonly lastEventTime?: string;
	readonly lastReplayTime?: string;
	readonly name?: string;
	readonly qualifiedName?: string;
	readonly state:
		| "Canceled"
		| "Complete"
		| "Copying"
		| "Failed"
		| "Finalizing"
		| "InitialReplay"
		| "Initializing"
		| "NotStarted"
		| "Replaying"
		| "Restarting"
		| "ValidatingInput";
	readonly totalBytes: number;
	readonly totalDocuments: number;
}
export interface MongoDbProgressErrors {
	readonly [key: string]: MongoDbError;
}
export interface MongoDbShardKeyField {
	readonly name: string;
	readonly order: "Forward" | "Hashed" | "Reverse";
}
export interface MongoDbShardKeyInfo {
	readonly fields: MongoDbShardKeyField[];
	readonly isUnique: boolean;
}
export interface MongoDbShardKeySetting {
	readonly fields: MongoDbShardKeyField[];
	readonly isUnique?: boolean;
}
export interface MongoDbThrottlingSettings {
	readonly maxParallelism?: number;
	readonly minFreeCpu?: number;
	readonly minFreeMemoryMb?: number;
}
export interface MySqlConnectionInfo {
	readonly additionalSettings?: string;
	readonly authentication?:
		| "ActiveDirectoryIntegrated"
		| "ActiveDirectoryPassword"
		| "None"
		| "SqlAuthentication"
		| "WindowsAuthentication";
	readonly dataSource?: string;
	readonly encryptConnection?: boolean;
	readonly password?: string;
	readonly port: number;
	readonly serverName: string;
	readonly type: string;
	readonly userName?: string;
}
export interface NodeMonitoringData {
	readonly additionalProperties?: NodeMonitoringDataAdditionalProperties;
	readonly availableMemoryInMB?: number;
	readonly concurrentJobsLimit?: number;
	readonly concurrentJobsRunning?: number;
	readonly cpuUtilization?: number;
	readonly maxConcurrentJobs?: number;
	readonly nodeName?: string;
	readonly receivedBytes?: number;
	readonly sentBytes?: number;
}
export interface NodeMonitoringDataAdditionalProperties {
	readonly [key: string]: any;
}
export interface ODataError {
	readonly code?: string;
	readonly details?: ODataError[];
	readonly message?: string;
}
export interface OracleConnectionInfo {
	readonly authentication?:
		| "ActiveDirectoryIntegrated"
		| "ActiveDirectoryPassword"
		| "None"
		| "SqlAuthentication"
		| "WindowsAuthentication";
	readonly dataSource: string;
	readonly password?: string;
	readonly port?: number;
	readonly serverName?: string;
	readonly serverVersion?: string;
	readonly type: string;
	readonly userName?: string;
}
export interface OracleOCIDriverInfo {
	readonly archiveChecksum?: string;
	readonly assemblyVersion?: string;
	readonly driverName?: string;
	readonly driverSize?: string;
	readonly oracleChecksum?: string;
	readonly supportedOracleVersions?: string[];
}
export interface OrphanedUserInfo {
	readonly databaseName?: string;
	readonly name?: string;
}
export interface PostgreSqlConnectionInfo {
	readonly additionalSettings?: string;
	readonly authentication?:
		| "ActiveDirectoryIntegrated"
		| "ActiveDirectoryPassword"
		| "None"
		| "SqlAuthentication"
		| "WindowsAuthentication";
	readonly databaseName?: string;
	readonly dataSource?: string;
	readonly encryptConnection?: boolean;
	readonly password?: string;
	readonly port: number;
	readonly serverBrandVersion?: string;
	readonly serverName: string;
	readonly serverVersion?: string;
	readonly trustServerCertificate?: boolean;
	readonly type: string;
	readonly userName?: string;
}
export interface ProjectFileProperties {
	readonly extension?: string;
	readonly filePath?: string;
	readonly lastModified?: string;
	readonly mediaType?: string;
	readonly size?: number;
}
export interface ProjectProperties {
	readonly azureAuthenticationInfo?: AzureActiveDirectoryApp;
	readonly creationTime?: string;
	readonly databasesInfo?: DatabaseInfo[];
	readonly provisioningState?: "Deleting" | "Succeeded";
	readonly sourceConnectionInfo?: ConnectionInfo;
	readonly sourcePlatform: "MongoDb" | "MySQL" | "PostgreSql" | "SQL" | "Unknown";
	readonly targetConnectionInfo?: ConnectionInfo;
	readonly targetPlatform: "AzureDbForMySql" | "AzureDbForPostgreSql" | "MongoDb" | "SQLDB" | "SQLMI" | "Unknown";
}
export interface ProjectTaskProperties {
	readonly clientData?: ProjectTaskPropertiesClientData;
	readonly commands?: CommandProperties[];
	readonly errors?: ODataError[];
	readonly state?:
		| "Canceled"
		| "Failed"
		| "FailedInputValidation"
		| "Faulted"
		| "Queued"
		| "Running"
		| "Succeeded"
		| "Unknown";
}
export interface ProjectTaskPropertiesClientData {
	readonly [key: string]: string;
}
export interface QueryAnalysisValidationResult {
	readonly queryResults?: QueryExecutionResult;
	readonly validationErrors?: ValidationError;
}
export interface QueryExecutionResult {
	readonly queryText?: string;
	readonly sourceResult?: ExecutionStatistics;
	readonly statementsInBatch?: number;
	readonly targetResult?: ExecutionStatistics;
}
export interface ReportableException {
	readonly actionableMessage?: string;
	readonly filePath?: string;
	readonly hResult?: number;
	readonly lineNumber?: string;
	readonly message?: string;
	readonly stackTrace?: string;
}
export interface SchemaComparisonValidationResult {
	readonly schemaDifferences?: SchemaComparisonValidationResultType;
	readonly sourceDatabaseObjectCount?: SchemaComparisonValidationResultSourceDatabaseObjectCount;
	readonly targetDatabaseObjectCount?: SchemaComparisonValidationResultTargetDatabaseObjectCount;
	readonly validationErrors?: ValidationError;
}
export interface SchemaComparisonValidationResultSourceDatabaseObjectCount {
	readonly [key: string]: number;
}
export interface SchemaComparisonValidationResultTargetDatabaseObjectCount {
	readonly [key: string]: number;
}
export interface SchemaComparisonValidationResultType {
	readonly objectName?: string;
	readonly objectType?: "Function" | "StoredProcedures" | "Table" | "User" | "View";
	readonly updateAction?: "AddedOnTarget" | "ChangedOnTarget" | "DeletedOnTarget";
}
export interface SchemaMigrationSetting {
	readonly fileId?: string;
	readonly fileName?: string;
	readonly schemaOption?: "ExtractFromSource" | "None" | "UseStorageFile";
}
export interface SelectedCertificateInput {
	readonly certificateName: string;
	readonly password: string;
}
export interface ServerProperties {
	readonly serverDatabaseCount?: number;
	readonly serverEdition?: string;
	readonly serverName?: string;
	readonly serverOperatingSystemVersion?: string;
	readonly serverPlatform?: string;
	readonly serverVersion?: string;
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
	readonly authentication?:
		| "ActiveDirectoryIntegrated"
		| "ActiveDirectoryPassword"
		| "None"
		| "SqlAuthentication"
		| "WindowsAuthentication";
	readonly dataSource: string;
	readonly encryptConnection?: boolean;
	readonly password?: string;
	readonly platform?: "SqlOnPrem";
	readonly port?: number;
	readonly resourceId?: string;
	readonly serverBrandVersion?: string;
	readonly serverName?: string;
	readonly serverVersion?: string;
	readonly trustServerCertificate?: boolean;
	readonly type: string;
	readonly userName?: string;
}
export interface SqlConnectionInformation {
	readonly authentication?: string;
	readonly dataSource?: string;
	readonly encryptConnection?: boolean;
	readonly password?: string;
	readonly trustServerCertificate?: boolean;
	readonly userName?: string;
}
export interface SqlDbMigrationStatusDetails {
	readonly listOfCopyProgressDetails?: CopyProgressDetails[];
	readonly migrationState?: string;
	readonly sqlDataCopyErrors?: string[];
}
export interface SqlDbOfflineConfiguration {
	readonly offline?: boolean;
}
export interface SqlMigrationServiceProperties {
	readonly integrationRuntimeState?: string;
	readonly provisioningState?: string;
}
export interface SsisMigrationInfo {
	readonly environmentOverwriteOption?: "Ignore" | "Overwrite";
	readonly projectOverwriteOption?: "Ignore" | "Overwrite";
	readonly ssisStoreType?: "SsisCatalog";
}
export interface SyncMigrationDatabaseErrorEvent {
	readonly eventText?: string;
	readonly eventTypeString?: string;
	readonly timestampString?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface UploadOCIDriverTaskInput {
	readonly driverShare?: FileShare;
}
export interface UploadOCIDriverTaskOutput {
	readonly driverPackageName?: string;
	readonly validationErrors?: ReportableException[];
}
export interface ValidateMigrationInputSqlServerSqlMISyncTaskInput {
	readonly azureApp: AzureActiveDirectoryApp;
	readonly backupFileShare?: FileShare;
	readonly selectedDatabases: MigrateSqlServerSqlMIDatabaseInput[];
	readonly sourceConnectionInfo: SqlConnectionInfo;
	readonly storageResourceId: string;
	readonly targetConnectionInfo: MiSqlConnectionInfo;
}
export interface ValidateMigrationInputSqlServerSqlMISyncTaskOutput {
	readonly id?: string;
	readonly name?: string;
	readonly validationErrors?: ReportableException[];
}
export interface ValidateMigrationInputSqlServerSqlMITaskInput {
	readonly backupBlobShare: BlobShare;
	readonly backupFileShare?: FileShare;
	readonly backupMode?: "CreateBackup" | "ExistingBackup";
	readonly selectedDatabases: MigrateSqlServerSqlMIDatabaseInput[];
	readonly selectedLogins?: string[];
	readonly sourceConnectionInfo: SqlConnectionInfo;
	readonly targetConnectionInfo: SqlConnectionInfo;
}
export interface ValidateMigrationInputSqlServerSqlMITaskOutput {
	readonly backupFolderErrors?: ReportableException[];
	readonly backupShareCredentialsErrors?: ReportableException[];
	readonly backupStorageAccountErrors?: ReportableException[];
	readonly databaseBackupInfo?: DatabaseBackupInfo;
	readonly existingBackupErrors?: ReportableException[];
	readonly id?: string;
	readonly name?: string;
	readonly restoreDatabaseNameErrors?: ReportableException[];
}
export interface ValidateOracleAzureDbPostgreSqlSyncTaskOutput {
	readonly validationErrors?: ReportableException[];
}
export interface ValidateSyncMigrationInputSqlServerTaskInput {
	readonly selectedDatabases: MigrateSqlServerSqlDbSyncDatabaseInput[];
	readonly sourceConnectionInfo: SqlConnectionInfo;
	readonly targetConnectionInfo: SqlConnectionInfo;
}
export interface ValidateSyncMigrationInputSqlServerTaskOutput {
	readonly id?: string;
	readonly name?: string;
	readonly validationErrors?: ReportableException[];
}
export interface ValidationError {
	readonly severity?: "Error" | "Message" | "Warning";
	readonly text?: string;
}
export interface WaitStatistics {
	readonly waitCount?: number;
	readonly waitTimeMs?: number;
	readonly waitType?: string;
}
export default {
	databaseMigrations: databaseMigrations,
	services: services,
	"services/projects": services_projects,
	"services/projects/files": services_projects_files,
	"services/projects/tasks": services_projects_tasks,
	"services/serviceTasks": services_serviceTasks,
	sqlMigrationServices: sqlMigrationServices,
};
