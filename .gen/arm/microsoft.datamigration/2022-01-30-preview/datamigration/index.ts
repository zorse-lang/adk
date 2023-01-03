import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class databaseMigrations
	extends ArmResource<databaseMigrationsComponentInputs>
	implements databaseMigrationsComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseMigrationsComponentInputs) {
		super(entity, options.name, "Microsoft.DataMigration/databaseMigrations", "2022-01-30-preview", options);
	}
	public readonly apiVersion: "2022-01-30-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataMigration/databaseMigrations";
}
export interface databaseMigrationsComponentOutputs {
	readonly apiVersion: "2022-01-30-preview";
	readonly id: string;
	readonly type: "Microsoft.DataMigration/databaseMigrations";
}
export interface databaseMigrationsComponentInputs {
	readonly name: string;
	readonly properties?: DatabaseMigrationPropertiesSqlMi | undefined;
	readonly systemData?: SystemData | undefined;
}
export class services extends ArmResource<servicesComponentInputs> implements servicesComponentOutputs {
	constructor(entity: ADKEntity, options: servicesComponentInputs) {
		super(entity, options.name, "Microsoft.DataMigration/services", "2022-01-30-preview", options);
	}
	public readonly apiVersion: "2022-01-30-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataMigration/services";
}
export interface servicesComponentOutputs {
	readonly apiVersion: "2022-01-30-preview";
	readonly id: string;
	readonly type: "Microsoft.DataMigration/services";
}
export interface servicesComponentInputs {
	readonly etag?: string | undefined;
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: DataMigrationServiceProperties | undefined;
	readonly sku?: ServiceSku | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class services_projects
	extends ArmResource<services_projectsComponentInputs>
	implements services_projectsComponentOutputs
{
	constructor(entity: ADKEntity, options: services_projectsComponentInputs) {
		super(entity, options.name, "Microsoft.DataMigration/services/projects", "2022-01-30-preview", options);
	}
	public readonly apiVersion: "2022-01-30-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataMigration/services/projects";
}
export interface services_projectsComponentOutputs {
	readonly apiVersion: "2022-01-30-preview";
	readonly id: string;
	readonly type: "Microsoft.DataMigration/services/projects";
}
export interface services_projectsComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ProjectProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class services_projects_files
	extends ArmResource<services_projects_filesComponentInputs>
	implements services_projects_filesComponentOutputs
{
	constructor(entity: ADKEntity, options: services_projects_filesComponentInputs) {
		super(entity, options.name, "Microsoft.DataMigration/services/projects/files", "2022-01-30-preview", options);
	}
	public readonly apiVersion: "2022-01-30-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataMigration/services/projects/files";
}
export interface services_projects_filesComponentOutputs {
	readonly apiVersion: "2022-01-30-preview";
	readonly id: string;
	readonly type: "Microsoft.DataMigration/services/projects/files";
}
export interface services_projects_filesComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: ProjectFileProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class services_projects_tasks
	extends ArmResource<services_projects_tasksComponentInputs>
	implements services_projects_tasksComponentOutputs
{
	constructor(entity: ADKEntity, options: services_projects_tasksComponentInputs) {
		super(entity, options.name, "Microsoft.DataMigration/services/projects/tasks", "2022-01-30-preview", options);
	}
	public readonly apiVersion: "2022-01-30-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataMigration/services/projects/tasks";
}
export interface services_projects_tasksComponentOutputs {
	readonly apiVersion: "2022-01-30-preview";
	readonly id: string;
	readonly type: "Microsoft.DataMigration/services/projects/tasks";
}
export interface services_projects_tasksComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: ProjectTaskProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class services_serviceTasks
	extends ArmResource<services_serviceTasksComponentInputs>
	implements services_serviceTasksComponentOutputs
{
	constructor(entity: ADKEntity, options: services_serviceTasksComponentInputs) {
		super(entity, options.name, "Microsoft.DataMigration/services/serviceTasks", "2022-01-30-preview", options);
	}
	public readonly apiVersion: "2022-01-30-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataMigration/services/serviceTasks";
}
export interface services_serviceTasksComponentOutputs {
	readonly apiVersion: "2022-01-30-preview";
	readonly id: string;
	readonly type: "Microsoft.DataMigration/services/serviceTasks";
}
export interface services_serviceTasksComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: ProjectTaskProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class sqlMigrationServices
	extends ArmResource<sqlMigrationServicesComponentInputs>
	implements sqlMigrationServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: sqlMigrationServicesComponentInputs) {
		super(entity, options.name, "Microsoft.DataMigration/sqlMigrationServices", "2022-01-30-preview", options);
	}
	public readonly apiVersion: "2022-01-30-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataMigration/sqlMigrationServices";
}
export interface sqlMigrationServicesComponentOutputs {
	readonly apiVersion: "2022-01-30-preview";
	readonly id: string;
	readonly type: "Microsoft.DataMigration/sqlMigrationServices";
}
export interface sqlMigrationServicesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: SqlMigrationServiceProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export function listAuthKeys(resource: sqlMigrationServices): AuthenticationKeys {
	if (resource.apiVersion !== "2022-01-30-preview") {
		throw new Error(`listAuthKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.DataMigration/sqlMigrationServices") {
		throw new Error(`listAuthKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listMonitoringData(resource: sqlMigrationServices): IntegrationRuntimeMonitoringData {
	if (resource.apiVersion !== "2022-01-30-preview") {
		throw new Error(`listMonitoringData is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.DataMigration/sqlMigrationServices") {
		throw new Error(`listMonitoringData is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AuthenticationKeys {
	readonly authKey1?: string | undefined;
	readonly authKey2?: string | undefined;
}
export interface AzureActiveDirectoryApp {
	readonly appKey: string;
	readonly applicationId: string;
	readonly ignoreAzurePermissions?: boolean | undefined;
	readonly tenantId: string;
}
export interface AzureBlob {
	readonly accountKey?: string | undefined;
	readonly blobContainerName?: string | undefined;
	readonly storageAccountResourceId?: string | undefined;
}
export interface BackupConfiguration {
	readonly sourceLocation?: SourceLocation | undefined;
	readonly targetLocation?: TargetLocation | undefined;
}
export interface BackupFileInfo {
	readonly familySequenceNumber?: number | undefined;
	readonly fileLocation?: string | undefined;
	readonly status?:
		| ("Arrived" | "Cancelled" | "Queued" | "Restored" | "Restoring" | "Uploaded" | "Uploading")
		| undefined;
}
export interface BackupSetInfo {
	readonly backupFinishedDate?: string | undefined;
	readonly backupSetId?: string | undefined;
	readonly backupStartDate?: string | undefined;
	readonly backupType?:
		| (
				| "Database"
				| "DifferentialDatabase"
				| "DifferentialFile"
				| "DifferentialPartial"
				| "File"
				| "Partial"
				| "TransactionLog"
		  )
		| undefined;
	readonly databaseName?: string | undefined;
	readonly firstLsn?: string | undefined;
	readonly isBackupRestored?: boolean | undefined;
	readonly lastLsn?: string | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly listOfBackupFiles?: BackupFileInfo[] | undefined;
}
export interface BlobShare {
	readonly sasUri?: string | undefined;
}
export interface CheckOCIDriverTaskInput {
	readonly serverVersion?: string | undefined;
}
export interface CheckOCIDriverTaskOutput {
	readonly installedDriver?: OracleOCIDriverInfo | undefined;
	readonly validationErrors?: ReportableException[] | undefined;
}
export interface CommandProperties {
	readonly errors?: ODataError[] | undefined;
	readonly state?: ("Accepted" | "Failed" | "Running" | "Succeeded" | "Unknown") | undefined;
}
export interface ConnectionInfo {
	readonly password?: string | undefined;
	readonly userName?: string | undefined;
}
export interface ConnectToSourceMySqlTaskInput {
	readonly checkPermissionsGroup?:
		| (
				| "Default"
				| "MigrationFromMySQLToAzureDBForMySQL"
				| "MigrationFromSqlServerToAzureDB"
				| "MigrationFromSqlServerToAzureMI"
		  )
		| undefined;
	readonly isOfflineMigration?: boolean | undefined;
	readonly sourceConnectionInfo: MySqlConnectionInfo;
	readonly targetPlatform?: ("AzureDbForMySQL" | "SqlServer") | undefined;
}
export interface ConnectToSourceNonSqlTaskOutput {
	readonly databases?: string[] | undefined;
	readonly id?: string | undefined;
	readonly serverProperties?: ServerProperties | undefined;
	readonly sourceServerBrandVersion?: string | undefined;
	readonly validationErrors?: ReportableException[] | undefined;
}
export interface ConnectToSourceOracleSyncTaskInput {
	readonly sourceConnectionInfo: OracleConnectionInfo;
}
export interface ConnectToSourceOracleSyncTaskOutput {
	readonly databases?: string[] | undefined;
	readonly sourceServerBrandVersion?: string | undefined;
	readonly sourceServerVersion?: string | undefined;
	readonly validationErrors?: ReportableException[] | undefined;
}
export interface ConnectToSourcePostgreSqlSyncTaskInput {
	readonly sourceConnectionInfo: PostgreSqlConnectionInfo;
}
export interface ConnectToSourcePostgreSqlSyncTaskOutput {
	readonly databases?: string[] | undefined;
	readonly id?: string | undefined;
	readonly sourceServerBrandVersion?: string | undefined;
	readonly sourceServerVersion?: string | undefined;
	readonly validationErrors?: ReportableException[] | undefined;
}
export interface ConnectToSourceSqlServerTaskInput {
	readonly checkPermissionsGroup?:
		| (
				| "Default"
				| "MigrationFromMySQLToAzureDBForMySQL"
				| "MigrationFromSqlServerToAzureDB"
				| "MigrationFromSqlServerToAzureMI"
		  )
		| undefined;
	readonly collectAgentJobs?: boolean | undefined;
	readonly collectDatabases?: boolean | undefined;
	readonly collectLogins?: boolean | undefined;
	readonly collectTdeCertificateInfo?: boolean | undefined;
	readonly encryptedKeyForSecureFields?: string | undefined;
	readonly sourceConnectionInfo: SqlConnectionInfo;
	readonly validateSsisCatalogOnly?: boolean | undefined;
}
export interface ConnectToSourceSqlServerTaskOutput {
	readonly id?: string | undefined;
}
export interface ConnectToTargetAzureDbForMySqlTaskInput {
	readonly isOfflineMigration?: boolean | undefined;
	readonly sourceConnectionInfo: MySqlConnectionInfo;
	readonly targetConnectionInfo: MySqlConnectionInfo;
}
export interface ConnectToTargetAzureDbForMySqlTaskOutput {
	readonly databases?: string[] | undefined;
	readonly id?: string | undefined;
	readonly serverVersion?: string | undefined;
	readonly targetServerBrandVersion?: string | undefined;
	readonly validationErrors?: ReportableException[] | undefined;
}
export interface ConnectToTargetAzureDbForPostgreSqlSyncTaskInput {
	readonly sourceConnectionInfo: PostgreSqlConnectionInfo;
	readonly targetConnectionInfo: PostgreSqlConnectionInfo;
}
export interface ConnectToTargetAzureDbForPostgreSqlSyncTaskOutput {
	readonly databases?: string[] | undefined;
	readonly id?: string | undefined;
	readonly targetServerBrandVersion?: string | undefined;
	readonly targetServerVersion?: string | undefined;
	readonly validationErrors?: ReportableException[] | undefined;
}
export interface ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskInput {
	readonly targetConnectionInfo: PostgreSqlConnectionInfo;
}
export interface ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskOutput {
	readonly databases?: string[] | undefined;
	readonly databaseSchemaMap?:
		| ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskOutputDatabaseSchemaMapItem[]
		| undefined;
	readonly targetServerBrandVersion?: string | undefined;
	readonly targetServerVersion?: string | undefined;
	readonly validationErrors?: ReportableException[] | undefined;
}
export interface ConnectToTargetOracleAzureDbForPostgreSqlSyncTaskOutputDatabaseSchemaMapItem {
	readonly database?: string | undefined;
	readonly schemas?: string[] | undefined;
}
export interface ConnectToTargetSqlDbSyncTaskInput {
	readonly sourceConnectionInfo: SqlConnectionInfo;
	readonly targetConnectionInfo: SqlConnectionInfo;
}
export interface ConnectToTargetSqlDbTaskInput {
	readonly queryObjectCounts?: boolean | undefined;
	readonly targetConnectionInfo: SqlConnectionInfo;
}
export interface ConnectToTargetSqlDbTaskOutput {
	readonly databases?: string | undefined;
	readonly id?: string | undefined;
	readonly targetServerBrandVersion?: string | undefined;
	readonly targetServerVersion?: string | undefined;
}
export interface ConnectToTargetSqlMISyncTaskInput {
	readonly azureApp: AzureActiveDirectoryApp;
	readonly targetConnectionInfo: MiSqlConnectionInfo;
}
export interface ConnectToTargetSqlMISyncTaskOutput {
	readonly targetServerBrandVersion?: string | undefined;
	readonly targetServerVersion?: string | undefined;
	readonly validationErrors?: ReportableException[] | undefined;
}
export interface ConnectToTargetSqlMITaskInput {
	readonly collectAgentJobs?: boolean | undefined;
	readonly collectLogins?: boolean | undefined;
	readonly targetConnectionInfo: SqlConnectionInfo;
	readonly validateSsisCatalogOnly?: boolean | undefined;
}
export interface ConnectToTargetSqlMITaskOutput {
	readonly agentJobs?: string[] | undefined;
	readonly id?: string | undefined;
	readonly logins?: string[] | undefined;
	readonly targetServerBrandVersion?: string | undefined;
	readonly targetServerVersion?: string | undefined;
	readonly validationErrors?: ReportableException[] | undefined;
}
export interface DatabaseBackupInfo {
	readonly backupFiles?: string[] | undefined;
	readonly backupFinishDate?: string | undefined;
	readonly backupType?:
		| (
				| "Database"
				| "DifferentialDatabase"
				| "DifferentialFile"
				| "DifferentialPartial"
				| "File"
				| "Partial"
				| "TransactionLog"
		  )
		| undefined;
	readonly databaseName?: string | undefined;
	readonly familyCount?: number | undefined;
	readonly isCompressed?: boolean | undefined;
	readonly isDamaged?: boolean | undefined;
	readonly position?: number | undefined;
}
export interface DatabaseFileInfo {
	readonly databaseName?: string | undefined;
	readonly fileType?: ("Filestream" | "Fulltext" | "Log" | "NotSupported" | "Rows") | undefined;
	readonly id?: string | undefined;
	readonly logicalName?: string | undefined;
	readonly physicalFullName?: string | undefined;
	readonly restoreFullName?: string | undefined;
	readonly sizeMB?: number | undefined;
}
export interface DatabaseInfo {
	readonly sourceDatabaseName: string;
}
export interface DatabaseMigrationPropertiesSqlMi {
	readonly backupConfiguration?: BackupConfiguration | undefined;
	readonly endedOn?: string | undefined;
	readonly kind: "SqlMi" | "SqlVm";
	readonly migrationFailureError?: ErrorInfo | undefined;
	readonly migrationOperationId?: string | undefined;
	readonly migrationService?: string | undefined;
	readonly migrationStatus?: string | undefined;
	readonly migrationStatusDetails?: MigrationStatusDetails | undefined;
	readonly offlineConfiguration?: OfflineConfiguration | undefined;
	readonly provisioningError?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly scope?: string | undefined;
	readonly sourceDatabaseName?: string | undefined;
	readonly sourceSqlConnection?: SqlConnectionInformation | undefined;
	readonly startedOn?: string | undefined;
	readonly targetDatabaseCollation?: string | undefined;
}
export interface DatabaseTable {
	readonly hasRows?: boolean | undefined;
	readonly name?: string | undefined;
}
export interface DataIntegrityValidationResult {
	readonly failedObjects?: DataIntegrityValidationResultFailedObjects | undefined;
	readonly validationErrors?: ValidationError | undefined;
}
export interface DataIntegrityValidationResultFailedObjects {
	readonly "[ key: string ]"?: string | undefined;
}
export interface DataMigrationServiceProperties {
	readonly autoStopDelay?: string | undefined;
	readonly deleteResourcesOnStop?: boolean | undefined;
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
				| "Succeeded"
		  )
		| undefined;
	readonly publicKey?: string | undefined;
	readonly virtualNicId?: string | undefined;
	readonly virtualSubnetId?: string | undefined;
}
export interface ErrorInfo {
	readonly code?: string | undefined;
	readonly message?: string | undefined;
}
export interface ExecutionStatistics {
	readonly cpuTimeMs?: number | undefined;
	readonly elapsedTimeMs?: number | undefined;
	readonly executionCount?: number | undefined;
	readonly hasErrors?: boolean | undefined;
	readonly sqlErrors?: string[] | undefined;
	readonly waitStats?: ExecutionStatisticsWaitStats | undefined;
}
export interface ExecutionStatisticsWaitStats {
	readonly "[ key: string ]"?: WaitStatistics | undefined;
}
export interface FileShare {
	readonly password?: string | undefined;
	readonly path: string;
	readonly userName?: string | undefined;
}
export interface GetTdeCertificatesSqlTaskInput {
	readonly backupFileShare: FileShare;
	readonly connectionInfo: SqlConnectionInfo;
	readonly selectedCertificates: SelectedCertificateInput[];
}
export interface GetTdeCertificatesSqlTaskOutput {
	readonly base64EncodedCertificates?: string | undefined;
	readonly validationErrors?: ReportableException[] | undefined;
}
export interface GetUserTablesMySqlTaskInput {
	readonly connectionInfo: MySqlConnectionInfo;
	readonly selectedDatabases: string[];
}
export interface GetUserTablesMySqlTaskOutput {
	readonly databasesToTables?: string | undefined;
	readonly id?: string | undefined;
	readonly validationErrors?: ReportableException[] | undefined;
}
export interface GetUserTablesOracleTaskInput {
	readonly connectionInfo: OracleConnectionInfo;
	readonly selectedSchemas: string[];
}
export interface GetUserTablesOracleTaskOutput {
	readonly schemaName?: string | undefined;
	readonly tables?: DatabaseTable[] | undefined;
	readonly validationErrors?: ReportableException[] | undefined;
}
export interface GetUserTablesPostgreSqlTaskInput {
	readonly connectionInfo: PostgreSqlConnectionInfo;
	readonly selectedDatabases: string[];
}
export interface GetUserTablesPostgreSqlTaskOutput {
	readonly databaseName?: string | undefined;
	readonly tables?: DatabaseTable[] | undefined;
	readonly validationErrors?: ReportableException[] | undefined;
}
export interface GetUserTablesSqlSyncTaskInput {
	readonly selectedSourceDatabases: string[];
	readonly selectedTargetDatabases: string[];
	readonly sourceConnectionInfo: SqlConnectionInfo;
	readonly targetConnectionInfo: SqlConnectionInfo;
}
export interface GetUserTablesSqlSyncTaskOutput {
	readonly databasesToSourceTables?: string | undefined;
	readonly databasesToTargetTables?: string | undefined;
	readonly tableValidationErrors?: string | undefined;
	readonly validationErrors?: ReportableException[] | undefined;
}
export interface GetUserTablesSqlTaskInput {
	readonly connectionInfo: SqlConnectionInfo;
	readonly encryptedKeyForSecureFields?: string | undefined;
	readonly selectedDatabases: string[];
}
export interface GetUserTablesSqlTaskOutput {
	readonly databasesToTables?: string | undefined;
	readonly id?: string | undefined;
	readonly validationErrors?: ReportableException[] | undefined;
}
export interface InstallOCIDriverTaskInput {
	readonly driverPackageName?: string | undefined;
}
export interface InstallOCIDriverTaskOutput {
	readonly validationErrors?: ReportableException[] | undefined;
}
export interface IntegrationRuntimeMonitoringData {
	readonly name?: string | undefined;
	readonly nodes?: NodeMonitoringData[] | undefined;
}
export interface MigrateMISyncCompleteCommandInput {
	readonly sourceDatabaseName: string;
}
export interface MigrateMISyncCompleteCommandOutput {
	readonly errors?: ReportableException[] | undefined;
}
export interface MigrateMySqlAzureDbForMySqlOfflineDatabaseInput {
	readonly name?: string | undefined;
	readonly tableMap?: MigrateMySqlAzureDbForMySqlOfflineDatabaseInputTableMap | undefined;
	readonly targetDatabaseName?: string | undefined;
}
export interface MigrateMySqlAzureDbForMySqlOfflineDatabaseInputTableMap {
	readonly "[ key: string ]"?: string | undefined;
}
export interface MigrateMySqlAzureDbForMySqlOfflineTaskInput {
	readonly encryptedKeyForSecureFields?: string | undefined;
	readonly makeSourceServerReadOnly?: boolean | undefined;
	readonly optionalAgentSettings?: MigrateMySqlAzureDbForMySqlOfflineTaskInputOptionalAgentSettings | undefined;
	readonly selectedDatabases: MigrateMySqlAzureDbForMySqlOfflineDatabaseInput[];
	readonly sourceConnectionInfo: MySqlConnectionInfo;
	readonly startedOn?: string | undefined;
	readonly targetConnectionInfo: MySqlConnectionInfo;
}
export interface MigrateMySqlAzureDbForMySqlOfflineTaskInputOptionalAgentSettings {
	readonly "[ key: string ]"?: string | undefined;
}
export interface MigrateMySqlAzureDbForMySqlOfflineTaskOutput {
	readonly id?: string | undefined;
}
export interface MigrateMySqlAzureDbForMySqlSyncDatabaseInput {
	readonly migrationSetting?: MigrateMySqlAzureDbForMySqlSyncDatabaseInputMigrationSetting | undefined;
	readonly name?: string | undefined;
	readonly sourceSetting?: MigrateMySqlAzureDbForMySqlSyncDatabaseInputSourceSetting | undefined;
	readonly tableMap?: MigrateMySqlAzureDbForMySqlSyncDatabaseInputTableMap | undefined;
	readonly targetDatabaseName?: string | undefined;
	readonly targetSetting?: MigrateMySqlAzureDbForMySqlSyncDatabaseInputTargetSetting | undefined;
}
export interface MigrateMySqlAzureDbForMySqlSyncDatabaseInputMigrationSetting {
	readonly "[ key: string ]"?: string | undefined;
}
export interface MigrateMySqlAzureDbForMySqlSyncDatabaseInputSourceSetting {
	readonly "[ key: string ]"?: string | undefined;
}
export interface MigrateMySqlAzureDbForMySqlSyncDatabaseInputTableMap {
	readonly "[ key: string ]"?: string | undefined;
}
export interface MigrateMySqlAzureDbForMySqlSyncDatabaseInputTargetSetting {
	readonly "[ key: string ]"?: string | undefined;
}
export interface MigrateMySqlAzureDbForMySqlSyncTaskInput {
	readonly selectedDatabases: MigrateMySqlAzureDbForMySqlSyncDatabaseInput[];
	readonly sourceConnectionInfo: MySqlConnectionInfo;
	readonly targetConnectionInfo: MySqlConnectionInfo;
}
export interface MigrateMySqlAzureDbForMySqlSyncTaskOutput {
	readonly id?: string | undefined;
}
export interface MigrateOracleAzureDbPostgreSqlSyncDatabaseInput {
	readonly caseManipulation?: string | undefined;
	readonly migrationSetting?: MigrateOracleAzureDbPostgreSqlSyncDatabaseInputMigrationSetting | undefined;
	readonly name?: string | undefined;
	readonly schemaName?: string | undefined;
	readonly sourceSetting?: MigrateOracleAzureDbPostgreSqlSyncDatabaseInputSourceSetting | undefined;
	readonly tableMap?: MigrateOracleAzureDbPostgreSqlSyncDatabaseInputTableMap | undefined;
	readonly targetDatabaseName?: string | undefined;
	readonly targetSetting?: MigrateOracleAzureDbPostgreSqlSyncDatabaseInputTargetSetting | undefined;
}
export interface MigrateOracleAzureDbPostgreSqlSyncDatabaseInputMigrationSetting {
	readonly "[ key: string ]"?: string | undefined;
}
export interface MigrateOracleAzureDbPostgreSqlSyncDatabaseInputSourceSetting {
	readonly "[ key: string ]"?: string | undefined;
}
export interface MigrateOracleAzureDbPostgreSqlSyncDatabaseInputTableMap {
	readonly "[ key: string ]"?: string | undefined;
}
export interface MigrateOracleAzureDbPostgreSqlSyncDatabaseInputTargetSetting {
	readonly "[ key: string ]"?: string | undefined;
}
export interface MigrateOracleAzureDbPostgreSqlSyncTaskInput {
	readonly selectedDatabases: MigrateOracleAzureDbPostgreSqlSyncDatabaseInput[];
	readonly sourceConnectionInfo: OracleConnectionInfo;
	readonly targetConnectionInfo: PostgreSqlConnectionInfo;
}
export interface MigrateOracleAzureDbPostgreSqlSyncTaskOutput {
	readonly id?: string | undefined;
}
export interface MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInput {
	readonly id?: string | undefined;
	readonly migrationSetting?: MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputMigrationSetting | undefined;
	readonly name?: string | undefined;
	readonly selectedTables?: MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseTableInput[] | undefined;
	readonly sourceSetting?: MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputSourceSetting | undefined;
	readonly targetDatabaseName?: string | undefined;
	readonly targetSetting?: MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputTargetSetting | undefined;
}
export interface MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputMigrationSetting {
	readonly "[ key: string ]"?: any | undefined;
}
export interface MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputSourceSetting {
	readonly "[ key: string ]"?: string | undefined;
}
export interface MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputTargetSetting {
	readonly "[ key: string ]"?: string | undefined;
}
export interface MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseTableInput {
	readonly name?: string | undefined;
}
export interface MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInput {
	readonly encryptedKeyForSecureFields?: string | undefined;
	readonly selectedDatabases: MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInput[];
	readonly sourceConnectionInfo: PostgreSqlConnectionInfo;
	readonly startedOn?: string | undefined;
	readonly targetConnectionInfo: PostgreSqlConnectionInfo;
}
export interface MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutput {
	readonly id?: string | undefined;
}
export interface MigrateSchemaSqlServerSqlDbDatabaseInput {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly schemaSetting?: SchemaMigrationSetting | undefined;
	readonly targetDatabaseName?: string | undefined;
}
export interface MigrateSchemaSqlServerSqlDbTaskInput {
	readonly encryptedKeyForSecureFields?: string | undefined;
	readonly selectedDatabases: MigrateSchemaSqlServerSqlDbDatabaseInput[];
	readonly sourceConnectionInfo: SqlConnectionInfo;
	readonly startedOn?: string | undefined;
	readonly targetConnectionInfo: SqlConnectionInfo;
}
export interface MigrateSchemaSqlServerSqlDbTaskOutput {
	readonly id?: string | undefined;
}
export interface MigrateSqlServerSqlDbDatabaseInput {
	readonly id?: string | undefined;
	readonly makeSourceDbReadOnly?: boolean | undefined;
	readonly name?: string | undefined;
	readonly schemaSetting?: any | undefined;
	readonly tableMap?: MigrateSqlServerSqlDbDatabaseInputTableMap | undefined;
	readonly targetDatabaseName?: string | undefined;
}
export interface MigrateSqlServerSqlDbDatabaseInputTableMap {
	readonly "[ key: string ]"?: string | undefined;
}
export interface MigrateSqlServerSqlDbSyncDatabaseInput {
	readonly id?: string | undefined;
	readonly migrationSetting?: MigrateSqlServerSqlDbSyncDatabaseInputMigrationSetting | undefined;
	readonly name?: string | undefined;
	readonly schemaName?: string | undefined;
	readonly sourceSetting?: MigrateSqlServerSqlDbSyncDatabaseInputSourceSetting | undefined;
	readonly tableMap?: MigrateSqlServerSqlDbSyncDatabaseInputTableMap | undefined;
	readonly targetDatabaseName?: string | undefined;
	readonly targetSetting?: MigrateSqlServerSqlDbSyncDatabaseInputTargetSetting | undefined;
}
export interface MigrateSqlServerSqlDbSyncDatabaseInputMigrationSetting {
	readonly "[ key: string ]"?: string | undefined;
}
export interface MigrateSqlServerSqlDbSyncDatabaseInputSourceSetting {
	readonly "[ key: string ]"?: string | undefined;
}
export interface MigrateSqlServerSqlDbSyncDatabaseInputTableMap {
	readonly "[ key: string ]"?: string | undefined;
}
export interface MigrateSqlServerSqlDbSyncDatabaseInputTargetSetting {
	readonly "[ key: string ]"?: string | undefined;
}
export interface MigrateSqlServerSqlDbSyncTaskInput {
	readonly selectedDatabases: MigrateSqlServerSqlDbSyncDatabaseInput[];
	readonly sourceConnectionInfo: SqlConnectionInfo;
	readonly targetConnectionInfo: SqlConnectionInfo;
	readonly validationOptions?: MigrationValidationOptions | undefined;
}
export interface MigrateSqlServerSqlDbSyncTaskOutput {
	readonly id?: string | undefined;
}
export interface MigrateSqlServerSqlDbTaskInput {
	readonly encryptedKeyForSecureFields?: string | undefined;
	readonly selectedDatabases: MigrateSqlServerSqlDbDatabaseInput[];
	readonly sourceConnectionInfo: SqlConnectionInfo;
	readonly startedOn?: string | undefined;
	readonly targetConnectionInfo: SqlConnectionInfo;
	readonly validationOptions?: MigrationValidationOptions | undefined;
}
export interface MigrateSqlServerSqlDbTaskOutput {
	readonly id?: string | undefined;
}
export interface MigrateSqlServerSqlMIDatabaseInput {
	readonly backupFilePaths?: string[] | undefined;
	readonly backupFileShare?: FileShare | undefined;
	readonly id?: string | undefined;
	readonly name: string;
	readonly restoreDatabaseName: string;
}
export interface MigrateSqlServerSqlMISyncTaskInput {
	readonly azureApp: AzureActiveDirectoryApp;
	readonly backupFileShare?: FileShare | undefined;
	readonly numberOfParallelDatabaseMigrations?: number | undefined;
	readonly selectedDatabases: MigrateSqlServerSqlMIDatabaseInput[];
	readonly sourceConnectionInfo: SqlConnectionInfo;
	readonly storageResourceId: string;
	readonly targetConnectionInfo: MiSqlConnectionInfo;
}
export interface MigrateSqlServerSqlMISyncTaskOutput {
	readonly id?: string | undefined;
}
export interface MigrateSqlServerSqlMITaskInput {
	readonly aadDomainName?: string | undefined;
	readonly backupBlobShare: BlobShare;
	readonly backupFileShare?: FileShare | undefined;
	readonly backupMode?: ("CreateBackup" | "ExistingBackup") | undefined;
	readonly encryptedKeyForSecureFields?: string | undefined;
	readonly selectedAgentJobs?: string[] | undefined;
	readonly selectedDatabases: MigrateSqlServerSqlMIDatabaseInput[];
	readonly selectedLogins?: string[] | undefined;
	readonly sourceConnectionInfo: SqlConnectionInfo;
	readonly startedOn?: string | undefined;
	readonly targetConnectionInfo: SqlConnectionInfo;
}
export interface MigrateSqlServerSqlMITaskOutput {
	readonly id?: string | undefined;
}
export interface MigrateSsisTaskInput {
	readonly sourceConnectionInfo: SqlConnectionInfo;
	readonly ssisMigrationInfo: SsisMigrationInfo;
	readonly targetConnectionInfo: SqlConnectionInfo;
}
export interface MigrateSsisTaskOutput {
	readonly id?: string | undefined;
}
export interface MigrateSyncCompleteCommandInput {
	readonly commitTimeStamp?: string | undefined;
	readonly databaseName: string;
}
export interface MigrateSyncCompleteCommandOutput {
	readonly errors?: ReportableException[] | undefined;
	readonly id?: string | undefined;
}
export interface MigrationEligibilityInfo {
	readonly isEligibleForMigration?: boolean | undefined;
	readonly validationMessages?: string[] | undefined;
}
export interface MigrationReportResult {
	readonly id?: string | undefined;
	readonly reportUrl?: string | undefined;
}
export interface MigrationStatusDetails {
	readonly activeBackupSets?: SqlBackupSetInfo[] | undefined;
	readonly blobContainerName?: string | undefined;
	readonly completeRestoreErrorMessage?: string | undefined;
	readonly currentRestoringFilename?: string | undefined;
	readonly fileUploadBlockingErrors?: string[] | undefined;
	readonly fullBackupSetInfo?: SqlBackupSetInfo | undefined;
	readonly invalidFiles?: string[] | undefined;
	readonly isFullBackupRestored?: boolean | undefined;
	readonly lastRestoredBackupSetInfo?: SqlBackupSetInfo | undefined;
	readonly lastRestoredFilename?: string | undefined;
	readonly migrationState?: string | undefined;
	readonly pendingLogBackupsCount?: number | undefined;
	readonly restoreBlockingReason?: string | undefined;
}
export interface MigrationValidationDatabaseSummaryResult {
	readonly endedOn?: string | undefined;
	readonly id?: string | undefined;
	readonly migrationId?: string | undefined;
	readonly sourceDatabaseName?: string | undefined;
	readonly startedOn?: string | undefined;
	readonly status?:
		| (
				| "Completed"
				| "CompletedWithIssues"
				| "Default"
				| "Failed"
				| "InProgress"
				| "Initialized"
				| "NotStarted"
				| "Stopped"
		  )
		| undefined;
	readonly targetDatabaseName?: string | undefined;
}
export interface MigrationValidationOptions {
	readonly enableDataIntegrityValidation?: boolean | undefined;
	readonly enableQueryAnalysisValidation?: boolean | undefined;
	readonly enableSchemaValidation?: boolean | undefined;
}
export interface MigrationValidationResult {
	readonly id?: string | undefined;
	readonly migrationId?: string | undefined;
	readonly status?:
		| (
				| "Completed"
				| "CompletedWithIssues"
				| "Default"
				| "Failed"
				| "InProgress"
				| "Initialized"
				| "NotStarted"
				| "Stopped"
		  )
		| undefined;
	readonly summaryResults?: MigrationValidationResultSummaryResults | undefined;
}
export interface MigrationValidationResultSummaryResults {
	readonly "[ key: string ]"?: MigrationValidationDatabaseSummaryResult | undefined;
}
export interface MiSqlConnectionInfo {
	readonly managedInstanceResourceId: string;
	readonly password?: string | undefined;
	readonly type: string;
	readonly userName?: string | undefined;
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
	readonly shardKey?: MongoDbShardKeyInfo | undefined;
	readonly supportsSharding: boolean;
	readonly viewOf?: string | undefined;
}
export interface MongoDbCollectionProgress {
	readonly bytesCopied: number;
	readonly documentsCopied: number;
	readonly elapsedTime: string;
	readonly errors: MongoDbProgressErrors;
	readonly eventsPending: number;
	readonly eventsReplayed: number;
	readonly lastEventTime?: string | undefined;
	readonly lastReplayTime?: string | undefined;
	readonly name?: string | undefined;
	readonly qualifiedName?: string | undefined;
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
	readonly canDelete?: boolean | undefined;
	readonly shardKey?: MongoDbShardKeySetting | undefined;
	readonly targetRUs?: number | undefined;
}
export interface MongoDbCommandInput {
	readonly objectName?: string | undefined;
}
export interface MongoDbConnectionInfo {
	readonly additionalSettings?: string | undefined;
	readonly connectionString: string;
	readonly dataSource?: string | undefined;
	readonly encryptConnection?: boolean | undefined;
	readonly enforceSSL?: boolean | undefined;
	readonly password?: string | undefined;
	readonly port?: number | undefined;
	readonly serverBrandVersion?: string | undefined;
	readonly serverVersion?: string | undefined;
	readonly trustServerCertificate?: boolean | undefined;
	readonly type: string;
	readonly userName?: string | undefined;
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
	readonly collections?: MongoDbDatabaseProgressCollections | undefined;
	readonly documentsCopied: number;
	readonly elapsedTime: string;
	readonly errors: MongoDbProgressErrors;
	readonly eventsPending: number;
	readonly eventsReplayed: number;
	readonly lastEventTime?: string | undefined;
	readonly lastReplayTime?: string | undefined;
	readonly name?: string | undefined;
	readonly qualifiedName?: string | undefined;
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
	readonly "[ key: string ]"?: MongoDbCollectionProgress | undefined;
}
export interface MongoDbDatabaseSettings {
	readonly collections: MongoDbDatabaseSettingsCollections;
	readonly targetRUs?: number | undefined;
}
export interface MongoDbDatabaseSettingsCollections {
	readonly "[ key: string ]"?: MongoDbCollectionSettings | undefined;
}
export interface MongoDbError {
	readonly code?: string | undefined;
	readonly count?: number | undefined;
	readonly message?: string | undefined;
	readonly type?: ("Error" | "ValidationError" | "Warning") | undefined;
}
export interface MongoDbFinishCommandInput {
	readonly immediate: boolean;
	readonly objectName?: string | undefined;
}
export interface MongoDbMigrationProgress {
	readonly bytesCopied: number;
	readonly databases?: MongoDbMigrationProgressDatabases | undefined;
	readonly documentsCopied: number;
	readonly elapsedTime: string;
	readonly errors: MongoDbProgressErrors;
	readonly eventsPending: number;
	readonly eventsReplayed: number;
	readonly lastEventTime?: string | undefined;
	readonly lastReplayTime?: string | undefined;
	readonly name?: string | undefined;
	readonly qualifiedName?: string | undefined;
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
	readonly "[ key: string ]"?: MongoDbDatabaseProgress | undefined;
}
export interface MongoDbMigrationSettings {
	readonly boostRUs?: number | undefined;
	readonly databases: MongoDbMigrationSettingsDatabases;
	readonly replication?: ("Continuous" | "Disabled" | "OneTime") | undefined;
	readonly source: MongoDbConnectionInfo;
	readonly target: MongoDbConnectionInfo;
	readonly throttling?: MongoDbThrottlingSettings | undefined;
}
export interface MongoDbMigrationSettingsDatabases {
	readonly "[ key: string ]"?: MongoDbDatabaseSettings | undefined;
}
export interface MongoDbProgress {
	readonly bytesCopied: number;
	readonly documentsCopied: number;
	readonly elapsedTime: string;
	readonly errors: MongoDbProgressErrors;
	readonly eventsPending: number;
	readonly eventsReplayed: number;
	readonly lastEventTime?: string | undefined;
	readonly lastReplayTime?: string | undefined;
	readonly name?: string | undefined;
	readonly qualifiedName?: string | undefined;
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
	readonly "[ key: string ]"?: MongoDbError | undefined;
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
	readonly isUnique?: boolean | undefined;
}
export interface MongoDbThrottlingSettings {
	readonly maxParallelism?: number | undefined;
	readonly minFreeCpu?: number | undefined;
	readonly minFreeMemoryMb?: number | undefined;
}
export interface MySqlConnectionInfo {
	readonly authentication?:
		| ("ActiveDirectoryIntegrated" | "ActiveDirectoryPassword" | "None" | "SqlAuthentication" | "WindowsAuthentication")
		| undefined;
	readonly dataSource?: string | undefined;
	readonly encryptConnection?: boolean | undefined;
	readonly password?: string | undefined;
	readonly port: number;
	readonly serverName: string;
	readonly type: string;
	readonly userName?: string | undefined;
}
export interface NodeMonitoringData {
	readonly additionalProperties?: NodeMonitoringDataAdditionalProperties | undefined;
	readonly availableMemoryInMB?: number | undefined;
	readonly concurrentJobsLimit?: number | undefined;
	readonly concurrentJobsRunning?: number | undefined;
	readonly cpuUtilization?: number | undefined;
	readonly maxConcurrentJobs?: number | undefined;
	readonly nodeName?: string | undefined;
	readonly receivedBytes?: number | undefined;
	readonly sentBytes?: number | undefined;
}
export interface NodeMonitoringDataAdditionalProperties {
	readonly "[ key: string ]"?: any | undefined;
}
export interface ODataError {
	readonly code?: string | undefined;
	readonly details?: ODataError[] | undefined;
	readonly message?: string | undefined;
}
export interface OfflineConfiguration {
	readonly lastBackupName?: string | undefined;
	readonly offline?: boolean | undefined;
}
export interface OracleConnectionInfo {
	readonly dataSource: string;
	readonly password?: string | undefined;
	readonly type: string;
	readonly userName?: string | undefined;
}
export interface OracleOCIDriverInfo {
	readonly archiveChecksum?: string | undefined;
	readonly assemblyVersion?: string | undefined;
	readonly driverName?: string | undefined;
	readonly driverSize?: string | undefined;
	readonly oracleChecksum?: string | undefined;
	readonly supportedOracleVersions?: string[] | undefined;
}
export interface OrphanedUserInfo {
	readonly databaseName?: string | undefined;
	readonly name?: string | undefined;
}
export interface PostgreSqlConnectionInfo {
	readonly additionalSettings?: string | undefined;
	readonly authentication?:
		| ("ActiveDirectoryIntegrated" | "ActiveDirectoryPassword" | "None" | "SqlAuthentication" | "WindowsAuthentication")
		| undefined;
	readonly databaseName?: string | undefined;
	readonly dataSource?: string | undefined;
	readonly encryptConnection?: boolean | undefined;
	readonly password?: string | undefined;
	readonly port: number;
	readonly serverBrandVersion?: string | undefined;
	readonly serverName: string;
	readonly serverVersion?: string | undefined;
	readonly trustServerCertificate?: boolean | undefined;
	readonly type: string;
	readonly userName?: string | undefined;
}
export interface ProjectFileProperties {
	readonly extension?: string | undefined;
	readonly filePath?: string | undefined;
	readonly lastModified?: string | undefined;
	readonly mediaType?: string | undefined;
	readonly size?: number | undefined;
}
export interface ProjectProperties {
	readonly azureAuthenticationInfo?: AzureActiveDirectoryApp | undefined;
	readonly creationTime?: string | undefined;
	readonly databasesInfo?: DatabaseInfo[] | undefined;
	readonly provisioningState?: ("Deleting" | "Succeeded") | undefined;
	readonly sourceConnectionInfo?: ConnectionInfo | undefined;
	readonly sourcePlatform: "MongoDb" | "MySQL" | "PostgreSql" | "SQL" | "Unknown";
	readonly targetConnectionInfo?: ConnectionInfo | undefined;
	readonly targetPlatform: "AzureDbForMySql" | "AzureDbForPostgreSql" | "MongoDb" | "SQLDB" | "SQLMI" | "Unknown";
}
export interface ProjectTaskProperties {
	readonly clientData?: ProjectTaskPropertiesClientData | undefined;
	readonly commands?: CommandProperties[] | undefined;
	readonly errors?: ODataError[] | undefined;
	readonly state?:
		| ("Canceled" | "Failed" | "FailedInputValidation" | "Faulted" | "Queued" | "Running" | "Succeeded" | "Unknown")
		| undefined;
}
export interface ProjectTaskPropertiesClientData {
	readonly "[ key: string ]"?: string | undefined;
}
export interface QueryAnalysisValidationResult {
	readonly queryResults?: QueryExecutionResult | undefined;
	readonly validationErrors?: ValidationError | undefined;
}
export interface QueryExecutionResult {
	readonly queryText?: string | undefined;
	readonly sourceResult?: ExecutionStatistics | undefined;
	readonly statementsInBatch?: number | undefined;
	readonly targetResult?: ExecutionStatistics | undefined;
}
export interface ReportableException {
	readonly actionableMessage?: string | undefined;
	readonly filePath?: string | undefined;
	readonly hResult?: number | undefined;
	readonly lineNumber?: string | undefined;
	readonly message?: string | undefined;
	readonly stackTrace?: string | undefined;
}
export interface SchemaComparisonValidationResult {
	readonly schemaDifferences?: SchemaComparisonValidationResultType | undefined;
	readonly sourceDatabaseObjectCount?: SchemaComparisonValidationResultSourceDatabaseObjectCount | undefined;
	readonly targetDatabaseObjectCount?: SchemaComparisonValidationResultTargetDatabaseObjectCount | undefined;
	readonly validationErrors?: ValidationError | undefined;
}
export interface SchemaComparisonValidationResultSourceDatabaseObjectCount {
	readonly "[ key: string ]"?: number | undefined;
}
export interface SchemaComparisonValidationResultTargetDatabaseObjectCount {
	readonly "[ key: string ]"?: number | undefined;
}
export interface SchemaComparisonValidationResultType {
	readonly objectName?: string | undefined;
	readonly objectType?: ("Function" | "StoredProcedures" | "Table" | "User" | "View") | undefined;
	readonly updateAction?: ("AddedOnTarget" | "ChangedOnTarget" | "DeletedOnTarget") | undefined;
}
export interface SchemaMigrationSetting {
	readonly fileId?: string | undefined;
	readonly fileName?: string | undefined;
	readonly schemaOption?: ("ExtractFromSource" | "None" | "UseStorageFile") | undefined;
}
export interface SelectedCertificateInput {
	readonly certificateName: string;
	readonly password: string;
}
export interface ServerProperties {
	readonly serverDatabaseCount?: number | undefined;
	readonly serverEdition?: string | undefined;
	readonly serverName?: string | undefined;
	readonly serverOperatingSystemVersion?: string | undefined;
	readonly serverPlatform?: string | undefined;
	readonly serverVersion?: string | undefined;
}
export interface ServiceSku {
	readonly capacity?: number | undefined;
	readonly family?: string | undefined;
	readonly name?: string | undefined;
	readonly size?: string | undefined;
	readonly tier?: string | undefined;
}
export interface SourceLocation {
	readonly azureBlob?: AzureBlob | undefined;
	readonly fileShare?: SqlFileShare | undefined;
}
export interface SqlBackupFileInfo {
	readonly copyDuration?: number | undefined;
	readonly copyThroughput?: number | undefined;
	readonly dataRead?: number | undefined;
	readonly dataWritten?: number | undefined;
	readonly familySequenceNumber?: number | undefined;
	readonly fileName?: string | undefined;
	readonly status?: string | undefined;
	readonly totalSize?: number | undefined;
}
export interface SqlBackupSetInfo {
	readonly backupFinishDate?: string | undefined;
	readonly backupSetId?: string | undefined;
	readonly backupStartDate?: string | undefined;
	readonly backupType?: string | undefined;
	readonly familyCount?: number | undefined;
	readonly firstLSN?: string | undefined;
	readonly hasBackupChecksums?: boolean | undefined;
	readonly ignoreReasons?: string[] | undefined;
	readonly isBackupRestored?: boolean | undefined;
	readonly lastLSN?: string | undefined;
	readonly listOfBackupFiles?: SqlBackupFileInfo[] | undefined;
}
export interface SqlConnectionInfo {
	readonly additionalSettings?: string | undefined;
	readonly authentication?:
		| ("ActiveDirectoryIntegrated" | "ActiveDirectoryPassword" | "None" | "SqlAuthentication" | "WindowsAuthentication")
		| undefined;
	readonly dataSource: string;
	readonly encryptConnection?: boolean | undefined;
	readonly password?: string | undefined;
	readonly platform?: "SqlOnPrem" | undefined;
	readonly port?: number | undefined;
	readonly resourceId?: string | undefined;
	readonly serverBrandVersion?: string | undefined;
	readonly serverName?: string | undefined;
	readonly serverVersion?: string | undefined;
	readonly trustServerCertificate?: boolean | undefined;
	readonly type: string;
	readonly userName?: string | undefined;
}
export interface SqlConnectionInformation {
	readonly authentication?: string | undefined;
	readonly dataSource?: string | undefined;
	readonly encryptConnection?: boolean | undefined;
	readonly password?: string | undefined;
	readonly trustServerCertificate?: boolean | undefined;
	readonly userName?: string | undefined;
}
export interface SqlFileShare {
	readonly password?: string | undefined;
	readonly path?: string | undefined;
	readonly username?: string | undefined;
}
export interface SqlMigrationServiceProperties {
	readonly integrationRuntimeState?: string | undefined;
	readonly provisioningState?: string | undefined;
}
export interface SsisMigrationInfo {
	readonly environmentOverwriteOption?: ("Ignore" | "Overwrite") | undefined;
	readonly projectOverwriteOption?: ("Ignore" | "Overwrite") | undefined;
	readonly ssisStoreType?: "SsisCatalog" | undefined;
}
export interface SyncMigrationDatabaseErrorEvent {
	readonly eventText?: string | undefined;
	readonly eventTypeString?: string | undefined;
	readonly timestampString?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TargetLocation {
	readonly accountKey?: string | undefined;
	readonly storageAccountResourceId?: string | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface UploadOCIDriverTaskInput {
	readonly driverShare?: FileShare | undefined;
}
export interface UploadOCIDriverTaskOutput {
	readonly driverPackageName?: string | undefined;
	readonly validationErrors?: ReportableException[] | undefined;
}
export interface ValidateMigrationInputSqlServerSqlMISyncTaskInput {
	readonly azureApp: AzureActiveDirectoryApp;
	readonly backupFileShare?: FileShare | undefined;
	readonly selectedDatabases: MigrateSqlServerSqlMIDatabaseInput[];
	readonly sourceConnectionInfo: SqlConnectionInfo;
	readonly storageResourceId: string;
	readonly targetConnectionInfo: MiSqlConnectionInfo;
}
export interface ValidateMigrationInputSqlServerSqlMISyncTaskOutput {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly validationErrors?: ReportableException[] | undefined;
}
export interface ValidateMigrationInputSqlServerSqlMITaskInput {
	readonly backupBlobShare: BlobShare;
	readonly backupFileShare?: FileShare | undefined;
	readonly backupMode?: ("CreateBackup" | "ExistingBackup") | undefined;
	readonly selectedDatabases: MigrateSqlServerSqlMIDatabaseInput[];
	readonly selectedLogins?: string[] | undefined;
	readonly sourceConnectionInfo: SqlConnectionInfo;
	readonly targetConnectionInfo: SqlConnectionInfo;
}
export interface ValidateMigrationInputSqlServerSqlMITaskOutput {
	readonly backupFolderErrors?: ReportableException[] | undefined;
	readonly backupShareCredentialsErrors?: ReportableException[] | undefined;
	readonly backupStorageAccountErrors?: ReportableException[] | undefined;
	readonly databaseBackupInfo?: DatabaseBackupInfo | undefined;
	readonly existingBackupErrors?: ReportableException[] | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly restoreDatabaseNameErrors?: ReportableException[] | undefined;
}
export interface ValidateOracleAzureDbPostgreSqlSyncTaskOutput {
	readonly validationErrors?: ReportableException[] | undefined;
}
export interface ValidateSyncMigrationInputSqlServerTaskInput {
	readonly selectedDatabases: MigrateSqlServerSqlDbSyncDatabaseInput[];
	readonly sourceConnectionInfo: SqlConnectionInfo;
	readonly targetConnectionInfo: SqlConnectionInfo;
}
export interface ValidateSyncMigrationInputSqlServerTaskOutput {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly validationErrors?: ReportableException[] | undefined;
}
export interface ValidationError {
	readonly severity?: ("Error" | "Message" | "Warning") | undefined;
	readonly text?: string | undefined;
}
export interface WaitStatistics {
	readonly waitCount?: number | undefined;
	readonly waitTimeMs?: number | undefined;
	readonly waitType?: string | undefined;
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
