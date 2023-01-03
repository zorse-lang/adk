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
	readonly properties?: ProjectProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: ProjectTaskProperties | undefined;
}
export interface AzureActiveDirectoryApp {
	readonly appKey: string;
	readonly applicationId: string;
	readonly tenantId: string;
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
	readonly sasUri: string;
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
		| ("Default" | "MigrationFromMySQLToAzureDBForMySQL" | "MigrationFromSqlServerToAzureDB")
		| undefined;
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
		| ("Default" | "MigrationFromMySQLToAzureDBForMySQL" | "MigrationFromSqlServerToAzureDB")
		| undefined;
	readonly collectAgentJobs?: boolean | undefined;
	readonly collectLogins?: boolean | undefined;
	readonly sourceConnectionInfo: SqlConnectionInfo;
}
export interface ConnectToSourceSqlServerTaskOutput {
	readonly id?: string | undefined;
}
export interface ConnectToTargetAzureDbForMySqlTaskInput {
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
export interface ConnectToTargetSqlDbSyncTaskInput {
	readonly sourceConnectionInfo: SqlConnectionInfo;
	readonly targetConnectionInfo: SqlConnectionInfo;
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
	readonly targetConnectionInfo: SqlConnectionInfo;
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
export interface DataIntegrityValidationResult {
	readonly failedObjects?: DataIntegrityValidationResultFailedObjects | undefined;
	readonly validationErrors?: ValidationError | undefined;
}
export interface DataIntegrityValidationResultFailedObjects {
	readonly "[ key: string ]"?: string | undefined;
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
				| "Succeeded"
		  )
		| undefined;
	readonly publicKey?: string | undefined;
	readonly virtualSubnetId: string;
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
	readonly selectedDatabases: string[];
}
export interface GetUserTablesSqlTaskOutput {
	readonly databasesToTables?: string | undefined;
	readonly id?: string | undefined;
	readonly validationErrors?: ReportableException[] | undefined;
}
export interface MigrateMISyncCompleteCommandInput {
	readonly sourceDatabaseName: string;
}
export interface MigrateMISyncCompleteCommandOutput {
	readonly errors?: ReportableException[] | undefined;
}
export interface MigrateMySqlAzureDbForMySqlSyncDatabaseInput {
	readonly migrationSetting?: MigrateMySqlAzureDbForMySqlSyncDatabaseInputMigrationSetting | undefined;
	readonly name?: string | undefined;
	readonly sourceSetting?: MigrateMySqlAzureDbForMySqlSyncDatabaseInputSourceSetting | undefined;
	readonly targetDatabaseName?: string | undefined;
	readonly targetSetting?: MigrateMySqlAzureDbForMySqlSyncDatabaseInputTargetSetting | undefined;
}
export interface MigrateMySqlAzureDbForMySqlSyncDatabaseInputMigrationSetting {
	readonly "[ key: string ]"?: string | undefined;
}
export interface MigrateMySqlAzureDbForMySqlSyncDatabaseInputSourceSetting {
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
export interface MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInput {
	readonly migrationSetting?: MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputMigrationSetting | undefined;
	readonly name?: string | undefined;
	readonly sourceSetting?: MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputSourceSetting | undefined;
	readonly targetDatabaseName?: string | undefined;
	readonly targetSetting?: MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputTargetSetting | undefined;
}
export interface MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputMigrationSetting {
	readonly "[ key: string ]"?: string | undefined;
}
export interface MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputSourceSetting {
	readonly "[ key: string ]"?: string | undefined;
}
export interface MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInputTargetSetting {
	readonly "[ key: string ]"?: string | undefined;
}
export interface MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInput {
	readonly selectedDatabases: MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInput[];
	readonly sourceConnectionInfo: PostgreSqlConnectionInfo;
	readonly targetConnectionInfo: PostgreSqlConnectionInfo;
}
export interface MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutput {
	readonly id?: string | undefined;
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
	readonly selectedDatabases: MigrateSqlServerSqlDbDatabaseInput[];
	readonly sourceConnectionInfo: SqlConnectionInfo;
	readonly targetConnectionInfo: SqlConnectionInfo;
	readonly validationOptions?: MigrationValidationOptions | undefined;
}
export interface MigrateSqlServerSqlDbTaskOutput {
	readonly id?: string | undefined;
}
export interface MigrateSqlServerSqlDbTaskOutputValidationResultSummaryResults {
	readonly "[ key: string ]"?: MigrationValidationDatabaseSummaryResult | undefined;
}
export interface MigrateSqlServerSqlMIDatabaseInput {
	readonly backupFilePaths?: string[] | undefined;
	readonly backupFileShare?: FileShare | undefined;
	readonly name: string;
	readonly restoreDatabaseName: string;
}
export interface MigrateSqlServerSqlMISyncTaskInput {
	readonly azureApp: AzureActiveDirectoryApp;
	readonly backupFileShare?: FileShare | undefined;
	readonly selectedDatabases: MigrateSqlServerSqlMIDatabaseInput[];
	readonly sourceConnectionInfo: SqlConnectionInfo;
	readonly storageResourceId: string;
	readonly targetConnectionInfo: MiSqlConnectionInfo;
}
export interface MigrateSqlServerSqlMISyncTaskOutput {
	readonly id?: string | undefined;
}
export interface MigrateSqlServerSqlMITaskInput {
	readonly backupBlobShare: BlobShare;
	readonly backupFileShare?: FileShare | undefined;
	readonly backupMode?: ("CreateBackup" | "ExistingBackup") | undefined;
	readonly selectedAgentJobs?: string[] | undefined;
	readonly selectedDatabases: MigrateSqlServerSqlMIDatabaseInput[];
	readonly selectedLogins?: string[] | undefined;
	readonly sourceConnectionInfo: SqlConnectionInfo;
	readonly targetConnectionInfo: SqlConnectionInfo;
}
export interface MigrateSqlServerSqlMITaskOutput {
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
export interface MiSqlConnectionInfo {
	readonly managedInstanceResourceId: string;
	readonly password?: string | undefined;
	readonly type: string;
	readonly userName?: string | undefined;
}
export interface MySqlConnectionInfo {
	readonly password?: string | undefined;
	readonly port: number;
	readonly serverName: string;
	readonly type: string;
	readonly userName?: string | undefined;
}
export interface ODataError {
	readonly code?: string | undefined;
	readonly details?: ODataError[] | undefined;
	readonly message?: string | undefined;
}
export interface OrphanedUserInfo {
	readonly databaseName?: string | undefined;
	readonly name?: string | undefined;
}
export interface PostgreSqlConnectionInfo {
	readonly databaseName?: string | undefined;
	readonly password?: string | undefined;
	readonly port: number;
	readonly serverName: string;
	readonly type: string;
	readonly userName?: string | undefined;
}
export interface ProjectProperties {
	readonly creationTime?: string | undefined;
	readonly databasesInfo?: DatabaseInfo[] | undefined;
	readonly provisioningState?: ("Deleting" | "Succeeded") | undefined;
	readonly sourceConnectionInfo?: ConnectionInfo | undefined;
	readonly sourcePlatform: "SQL" | "Unknown";
	readonly targetConnectionInfo?: ConnectionInfo | undefined;
	readonly targetPlatform: "SQLDB" | "Unknown";
}
export interface ProjectTaskProperties {
	readonly commands?: CommandProperties[] | undefined;
	readonly errors?: ODataError[] | undefined;
	readonly state?:
		| ("Canceled" | "Failed" | "FailedInputValidation" | "Faulted" | "Queued" | "Running" | "Succeeded" | "Unknown")
		| undefined;
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
export interface SqlConnectionInfo {
	readonly additionalSettings?: string | undefined;
	readonly authentication?:
		| ("ActiveDirectoryIntegrated" | "ActiveDirectoryPassword" | "None" | "SqlAuthentication" | "WindowsAuthentication")
		| undefined;
	readonly dataSource: string;
	readonly encryptConnection?: boolean | undefined;
	readonly password?: string | undefined;
	readonly platform?: "SqlOnPrem" | undefined;
	readonly trustServerCertificate?: boolean | undefined;
	readonly type: string;
	readonly userName?: string | undefined;
}
export interface SyncMigrationDatabaseErrorEvent {
	readonly eventText?: string | undefined;
	readonly eventTypeString?: string | undefined;
	readonly timestampString?: string | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
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
	services: services,
	"services/projects": services_projects,
	"services/projects/tasks": services_projects_tasks,
};
