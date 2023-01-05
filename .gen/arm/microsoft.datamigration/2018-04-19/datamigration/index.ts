import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class services extends ArmResource<servicesComponentInputs> implements servicesComponentOutputs {
	constructor(entity: ADKEntity, options: servicesComponentInputs) {
		super(entity, options.name, "Microsoft.DataMigration/services", "2018-04-19", options);
	}
	public readonly apiVersion: "2018-04-19";
	public readonly id: string;
	public readonly type: "Microsoft.DataMigration/services";
}
export interface servicesComponentOutputs {
	readonly apiVersion: "2018-04-19";
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
		super(entity, options.name, "Microsoft.DataMigration/services/projects", "2018-04-19", options);
	}
	public readonly apiVersion: "2018-04-19";
	public readonly id: string;
	public readonly type: "Microsoft.DataMigration/services/projects";
}
export interface services_projectsComponentOutputs {
	readonly apiVersion: "2018-04-19";
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
		super(entity, options.name, "Microsoft.DataMigration/services/projects/tasks", "2018-04-19", options);
	}
	public readonly apiVersion: "2018-04-19";
	public readonly id: string;
	public readonly type: "Microsoft.DataMigration/services/projects/tasks";
}
export interface services_projects_tasksComponentOutputs {
	readonly apiVersion: "2018-04-19";
	readonly id: string;
	readonly type: "Microsoft.DataMigration/services/projects/tasks";
}
export interface services_projects_tasksComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: ProjectTaskProperties;
}
export interface AzureActiveDirectoryApp {
	readonly appKey: string;
	readonly applicationId: string;
	readonly tenantId: string;
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
	readonly sasUri: string;
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
		| "MigrationFromSqlServerToAzureDB";
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
		| "MigrationFromSqlServerToAzureDB";
	readonly collectAgentJobs?: boolean;
	readonly collectLogins?: boolean;
	readonly sourceConnectionInfo: SqlConnectionInfo;
}
export interface ConnectToSourceSqlServerTaskOutput {
	readonly id?: string;
}
export interface ConnectToTargetAzureDbForMySqlTaskInput {
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
export interface ConnectToTargetSqlDbSyncTaskInput {
	readonly sourceConnectionInfo: SqlConnectionInfo;
	readonly targetConnectionInfo: SqlConnectionInfo;
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
	readonly targetConnectionInfo: SqlConnectionInfo;
}
export interface ConnectToTargetSqlMITaskOutput {
	readonly agentJobs?: string[];
	readonly id?: string;
	readonly logins?: string[];
	readonly targetServerBrandVersion?: string;
	readonly targetServerVersion?: string;
	readonly validationErrors?: ReportableException[];
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
export interface DataIntegrityValidationResult {
	readonly failedObjects?: DataIntegrityValidationResultFailedObjects;
	readonly validationErrors?: ValidationError;
}
export interface DataIntegrityValidationResultFailedObjects {
	readonly [key: string]: string;
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
		| "Stopping"
		| "Succeeded";
	readonly publicKey?: string;
	readonly virtualSubnetId: string;
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
	readonly selectedDatabases: string[];
}
export interface GetUserTablesSqlTaskOutput {
	readonly databasesToTables?: string;
	readonly id?: string;
	readonly validationErrors?: ReportableException[];
}
export interface MigrateMISyncCompleteCommandInput {
	readonly sourceDatabaseName: string;
}
export interface MigrateMISyncCompleteCommandOutput {
	readonly errors?: ReportableException[];
}
export interface MigrateMySqlAzureDbForMySqlSyncDatabaseInput {
	readonly migrationSetting?: MigrateMySqlAzureDbForMySqlSyncDatabaseInputMigrationSetting;
	readonly name?: string;
	readonly sourceSetting?: MigrateMySqlAzureDbForMySqlSyncDatabaseInputSourceSetting;
	readonly targetDatabaseName?: string;
	readonly targetSetting?: MigrateMySqlAzureDbForMySqlSyncDatabaseInputTargetSetting;
}
export interface MigrateMySqlAzureDbForMySqlSyncDatabaseInputMigrationSetting {
	readonly [key: string]: string;
}
export interface MigrateMySqlAzureDbForMySqlSyncDatabaseInputSourceSetting {
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
export interface MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInput {
	readonly migrationSetting?: MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputMigrationSetting;
	readonly name?: string;
	readonly sourceSetting?: MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputSourceSetting;
	readonly targetDatabaseName?: string;
	readonly targetSetting?: MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputTargetSetting;
}
export interface MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputMigrationSetting {
	readonly [key: string]: string;
}
export interface MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputSourceSetting {
	readonly [key: string]: string;
}
export interface MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputTargetSetting {
	readonly [key: string]: string;
}
export interface MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInput {
	readonly selectedDatabases: MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInput[];
	readonly sourceConnectionInfo: PostgreSqlConnectionInfo;
	readonly targetConnectionInfo: PostgreSqlConnectionInfo;
}
export interface MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutput {
	readonly id?: string;
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
	readonly selectedDatabases: MigrateSqlServerSqlDbDatabaseInput[];
	readonly sourceConnectionInfo: SqlConnectionInfo;
	readonly targetConnectionInfo: SqlConnectionInfo;
	readonly validationOptions?: MigrationValidationOptions;
}
export interface MigrateSqlServerSqlDbTaskOutput {
	readonly id?: string;
}
export interface MigrateSqlServerSqlDbTaskOutputValidationResultSummaryResults {
	readonly [key: string]: MigrationValidationDatabaseSummaryResult;
}
export interface MigrateSqlServerSqlMIDatabaseInput {
	readonly backupFilePaths?: string[];
	readonly backupFileShare?: FileShare;
	readonly name: string;
	readonly restoreDatabaseName: string;
}
export interface MigrateSqlServerSqlMISyncTaskInput {
	readonly azureApp: AzureActiveDirectoryApp;
	readonly backupFileShare?: FileShare;
	readonly selectedDatabases: MigrateSqlServerSqlMIDatabaseInput[];
	readonly sourceConnectionInfo: SqlConnectionInfo;
	readonly storageResourceId: string;
	readonly targetConnectionInfo: MiSqlConnectionInfo;
}
export interface MigrateSqlServerSqlMISyncTaskOutput {
	readonly id?: string;
}
export interface MigrateSqlServerSqlMITaskInput {
	readonly backupBlobShare: BlobShare;
	readonly backupFileShare?: FileShare;
	readonly backupMode?: "CreateBackup" | "ExistingBackup";
	readonly selectedAgentJobs?: string[];
	readonly selectedDatabases: MigrateSqlServerSqlMIDatabaseInput[];
	readonly selectedLogins?: string[];
	readonly sourceConnectionInfo: SqlConnectionInfo;
	readonly targetConnectionInfo: SqlConnectionInfo;
}
export interface MigrateSqlServerSqlMITaskOutput {
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
export interface MiSqlConnectionInfo {
	readonly managedInstanceResourceId: string;
	readonly password?: string;
	readonly type: string;
	readonly userName?: string;
}
export interface MySqlConnectionInfo {
	readonly password?: string;
	readonly port: number;
	readonly serverName: string;
	readonly type: string;
	readonly userName?: string;
}
export interface ODataError {
	readonly code?: string;
	readonly details?: ODataError[];
	readonly message?: string;
}
export interface OrphanedUserInfo {
	readonly databaseName?: string;
	readonly name?: string;
}
export interface PostgreSqlConnectionInfo {
	readonly databaseName?: string;
	readonly password?: string;
	readonly port: number;
	readonly serverName: string;
	readonly type: string;
	readonly userName?: string;
}
export interface ProjectProperties {
	readonly creationTime?: string;
	readonly databasesInfo?: DatabaseInfo[];
	readonly provisioningState?: "Deleting" | "Succeeded";
	readonly sourceConnectionInfo?: ConnectionInfo;
	readonly sourcePlatform: "SQL" | "Unknown";
	readonly targetConnectionInfo?: ConnectionInfo;
	readonly targetPlatform: "SQLDB" | "Unknown";
}
export interface ProjectTaskProperties {
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
	readonly trustServerCertificate?: boolean;
	readonly type: string;
	readonly userName?: string;
}
export interface SyncMigrationDatabaseErrorEvent {
	readonly eventText?: string;
	readonly eventTypeString?: string;
	readonly timestampString?: string;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
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
	services: services,
	"services/projects": services_projects,
	"services/projects/tasks": services_projects_tasks,
};
