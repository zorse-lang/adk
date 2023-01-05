import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class managedInstances_databases
	extends ArmResource<managedInstances_databasesComponentInputs>
	implements managedInstances_databasesComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_databasesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/managedInstances/databases", "2019-06-01-preview", options);
	}
	public readonly apiVersion: "2019-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/databases";
}
export interface managedInstances_databasesComponentOutputs {
	readonly apiVersion: "2019-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/databases";
}
export interface managedInstances_databasesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ManagedDatabaseProperties;
	readonly tags?: TrackedResourceTags;
}
export class managedInstances_databases_restoreDetails
	extends ArmResource<managedInstances_databases_restoreDetailsComponentInputs>
	implements managedInstances_databases_restoreDetailsComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_databases_restoreDetailsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Sql/managedInstances/databases/restoreDetails",
			"2019-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/databases/restoreDetails";
}
export interface managedInstances_databases_restoreDetailsComponentOutputs {
	readonly apiVersion: "2019-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/databases/restoreDetails";
}
export interface managedInstances_databases_restoreDetailsComponentInputs {
	readonly name: string;
	readonly properties?: ManagedDatabaseRestoreDetailsProperties;
}
export class managedInstances_operations
	extends ArmResource<managedInstances_operationsComponentInputs>
	implements managedInstances_operationsComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_operationsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/managedInstances/operations", "2019-06-01-preview", options);
	}
	public readonly apiVersion: "2019-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/operations";
}
export interface managedInstances_operationsComponentOutputs {
	readonly apiVersion: "2019-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/operations";
}
export interface managedInstances_operationsComponentInputs {
	readonly name: string;
	readonly properties?: ManagedInstanceOperationProperties;
}
export class servers extends ArmResource<serversComponentInputs> implements serversComponentOutputs {
	constructor(entity: ADKEntity, options: serversComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers", "2019-06-01-preview", options);
	}
	public readonly apiVersion: "2019-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers";
}
export interface serversComponentOutputs {
	readonly apiVersion: "2019-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers";
}
export interface serversComponentInputs {
	readonly identity?: ResourceIdentity;
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: ServerProperties;
	readonly tags?: TrackedResourceTags;
}
export class servers_administrators
	extends ArmResource<servers_administratorsComponentInputs>
	implements servers_administratorsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_administratorsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/administrators", "2019-06-01-preview", options);
	}
	public readonly apiVersion: "2019-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/administrators";
}
export interface servers_administratorsComponentOutputs {
	readonly apiVersion: "2019-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/administrators";
}
export interface servers_administratorsComponentInputs {
	readonly name: string;
	readonly properties?: AdministratorProperties;
}
export class servers_databases
	extends ArmResource<servers_databasesComponentInputs>
	implements servers_databasesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databasesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases", "2019-06-01-preview", options);
	}
	public readonly apiVersion: "2019-06-01-preview";
	public readonly id: string;
}
export interface servers_databasesComponentOutputs {
	readonly apiVersion: "2019-06-01-preview";
	readonly id: string;
}
export interface servers_databasesComponentInputs {
	readonly kind?: string;
	readonly location: string;
	readonly managedBy?: string;
	readonly name: string;
	readonly properties?: DatabaseProperties;
	readonly sku?: Sku;
}
export class servers_databases_syncGroups
	extends ArmResource<servers_databases_syncGroupsComponentInputs>
	implements servers_databases_syncGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_syncGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/syncGroups", "2019-06-01-preview", options);
	}
	public readonly apiVersion: "2019-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/syncGroups";
}
export interface servers_databases_syncGroupsComponentOutputs {
	readonly apiVersion: "2019-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/syncGroups";
}
export interface servers_databases_syncGroupsComponentInputs {
	readonly name: string;
	readonly properties?: SyncGroupProperties;
}
export class servers_databases_syncGroups_syncMembers
	extends ArmResource<servers_databases_syncGroups_syncMembersComponentInputs>
	implements servers_databases_syncGroups_syncMembersComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_syncGroups_syncMembersComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Sql/servers/databases/syncGroups/syncMembers",
			"2019-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/syncGroups/syncMembers";
}
export interface servers_databases_syncGroups_syncMembersComponentOutputs {
	readonly apiVersion: "2019-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/syncGroups/syncMembers";
}
export interface servers_databases_syncGroups_syncMembersComponentInputs {
	readonly name: string;
	readonly properties?: SyncMemberProperties;
}
export class servers_databases_workloadGroups
	extends ArmResource<servers_databases_workloadGroupsComponentInputs>
	implements servers_databases_workloadGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_workloadGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/workloadGroups", "2019-06-01-preview", options);
	}
	public readonly apiVersion: "2019-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/workloadGroups";
}
export interface servers_databases_workloadGroupsComponentOutputs {
	readonly apiVersion: "2019-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/workloadGroups";
}
export interface servers_databases_workloadGroupsComponentInputs {
	readonly name: string;
	readonly properties?: WorkloadGroupProperties;
}
export class servers_databases_workloadGroups_workloadClassifiers
	extends ArmResource<servers_databases_workloadGroups_workloadClassifiersComponentInputs>
	implements servers_databases_workloadGroups_workloadClassifiersComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_workloadGroups_workloadClassifiersComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Sql/servers/databases/workloadGroups/workloadClassifiers",
			"2019-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/workloadGroups/workloadClassifiers";
}
export interface servers_databases_workloadGroups_workloadClassifiersComponentOutputs {
	readonly apiVersion: "2019-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/workloadGroups/workloadClassifiers";
}
export interface servers_databases_workloadGroups_workloadClassifiersComponentInputs {
	readonly name: string;
	readonly properties?: WorkloadClassifierProperties;
}
export interface AdministratorProperties {
	readonly administratorType: "ActiveDirectory";
	readonly azureADOnlyAuthentication?: boolean;
	readonly login: string;
	readonly sid: string;
	readonly tenantId?: string;
}
export interface DatabaseProperties {
	readonly autoPauseDelay?: number;
	readonly catalogCollation?: "DATABASE_DEFAULT" | "SQL_Latin1_General_CP1_CI_AS";
	readonly collation?: string;
	readonly createMode?:
		| "Copy"
		| "Default"
		| "OnlineSecondary"
		| "PointInTimeRestore"
		| "Recovery"
		| "Restore"
		| "RestoreExternalBackup"
		| "RestoreExternalBackupSecondary"
		| "RestoreLongTermRetentionBackup"
		| "Secondary";
}
export interface ManagedDatabaseProperties {
	readonly catalogCollation?: "DATABASE_DEFAULT" | "SQL_Latin1_General_CP1_CI_AS";
	readonly collation?: string;
	readonly createMode?:
		| "Default"
		| "PointInTimeRestore"
		| "Recovery"
		| "RestoreExternalBackup"
		| "RestoreLongTermRetentionBackup";
	readonly creationDate?: string;
	readonly defaultSecondaryLocation?: string;
	readonly earliestRestorePoint?: string;
	readonly failoverGroupId?: string;
	readonly longTermRetentionBackupResourceId?: string;
	readonly recoverableDatabaseId?: string;
	readonly restorableDroppedDatabaseId?: string;
	readonly restorePointInTime?: string;
	readonly sourceDatabaseId?: string;
	readonly status?: "Creating" | "Inaccessible" | "Offline" | "Online" | "Restoring" | "Shutdown" | "Updating";
	readonly storageContainerSasToken?: string;
	readonly storageContainerUri?: string;
}
export interface ManagedDatabaseRestoreDetailsProperties {
	readonly blockReason?: string;
	readonly currentRestoringFileName?: string;
	readonly lastRestoredFileName?: string;
	readonly lastRestoredFileTime?: string;
	readonly lastUploadedFileName?: string;
	readonly lastUploadedFileTime?: string;
	readonly numberOfFilesDetected?: number;
	readonly percentCompleted?: number;
	readonly status?: string;
	readonly unrestorableFiles?: string[];
}
export interface ManagedInstanceOperationParametersPair {
	readonly currentParameters?: UpsertManagedServerOperationParameters;
	readonly requestedParameters?: UpsertManagedServerOperationParameters;
}
export interface ManagedInstanceOperationProperties {
	readonly description?: string;
	readonly errorCode?: number;
	readonly errorDescription?: string;
	readonly errorSeverity?: number;
	readonly estimatedCompletionTime?: string;
	readonly isCancellable?: boolean;
	readonly isUserError?: boolean;
	readonly managedInstanceName?: string;
	readonly operation?: string;
	readonly operationFriendlyName?: string;
	readonly operationParameters?: ManagedInstanceOperationParametersPair;
	readonly operationSteps?: ManagedInstanceOperationSteps;
	readonly percentComplete?: number;
	readonly startTime?: string;
	readonly state?: "CancelInProgress" | "Cancelled" | "Failed" | "InProgress" | "Pending" | "Succeeded";
}
export interface ManagedInstanceOperationSteps {
	readonly currentStep?: number;
	readonly stepsList?: UpsertManagedServerOperationStep[];
	readonly totalSteps?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpointProperty;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateProperty;
	readonly provisioningState?: "Approving" | "Dropping" | "Failed" | "Ready" | "Rejecting";
}
export interface PrivateEndpointProperty {
	readonly id?: string;
}
export interface PrivateLinkServiceConnectionStateProperty {
	readonly actionsRequired?: "None";
	readonly description: string;
	readonly status: "Approved" | "Disconnected" | "Pending" | "Rejected";
}
export interface ResourceIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned" | "SystemAssigned,UserAssigned" | "UserAssigned";
}
export interface ServerPrivateEndpointConnection {
	readonly id?: string;
	readonly properties?: PrivateEndpointConnectionProperties;
}
export interface ServerProperties {
	readonly administratorLogin?: string;
	readonly administratorLoginPassword?: string;
	readonly fullyQualifiedDomainName?: string;
	readonly minimalTlsVersion?: string;
	readonly privateEndpointConnections?: ServerPrivateEndpointConnection[];
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
	readonly state?: string;
	readonly version?: string;
}
export interface Sku {
	readonly capacity?: number;
	readonly family?: string;
	readonly name: string;
	readonly size?: string;
	readonly tier?: string;
}
export interface SyncGroupProperties {
	readonly conflictResolutionPolicy?: "HubWin" | "MemberWin";
	readonly hubDatabasePassword?: string;
	readonly hubDatabaseUserName?: string;
	readonly interval?: number;
	readonly lastSyncTime?: string;
	readonly privateEndpointName?: string;
	readonly schema?: SyncGroupSchema;
	readonly syncDatabaseId?: string;
	readonly syncState?: "Error" | "Good" | "NotReady" | "Progressing" | "Warning";
	readonly usePrivateLinkConnection?: boolean;
}
export interface SyncGroupSchema {
	readonly masterSyncMemberName?: string;
	readonly tables?: SyncGroupSchemaTable[];
}
export interface SyncGroupSchemaTable {
	readonly columns?: SyncGroupSchemaTableColumn[];
	readonly quotedName?: string;
}
export interface SyncGroupSchemaTableColumn {
	readonly dataSize?: string;
	readonly dataType?: string;
	readonly quotedName?: string;
}
export interface SyncMemberProperties {
	readonly databaseName?: string;
	readonly databaseType?: "AzureSqlDatabase" | "SqlServerDatabase";
	readonly password?: string;
	readonly privateEndpointName?: string;
	readonly serverName?: string;
	readonly sqlServerDatabaseId?: string;
	readonly syncAgentId?: string;
	readonly syncDirection?: "Bidirectional" | "OneWayHubToMember" | "OneWayMemberToHub";
	readonly syncMemberAzureDatabaseResourceId?: string;
	readonly syncState?:
		| "DeProvisionFailed"
		| "DeProvisioned"
		| "DeProvisioning"
		| "DisabledBackupRestore"
		| "DisabledTombstoneCleanup"
		| "ProvisionFailed"
		| "Provisioned"
		| "Provisioning"
		| "ReprovisionFailed"
		| "Reprovisioning"
		| "SyncCancelled"
		| "SyncCancelling"
		| "SyncFailed"
		| "SyncInProgress"
		| "SyncSucceeded"
		| "SyncSucceededWithWarnings"
		| "UnProvisioned"
		| "UnReprovisioned";
	readonly usePrivateLinkConnection?: boolean;
	readonly userName?: string;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface UpsertManagedServerOperationParameters {
	readonly family?: string;
	readonly storageSizeInGB?: number;
	readonly tier?: string;
	readonly vCores?: number;
}
export interface UpsertManagedServerOperationStep {
	readonly name?: string;
	readonly order?: number;
	readonly status?: "Canceled" | "Completed" | "Failed" | "InProgress" | "NotStarted" | "SlowedDown";
}
export interface WorkloadClassifierProperties {
	readonly context?: string;
	readonly endTime?: string;
	readonly importance?: string;
	readonly label?: string;
	readonly memberName: string;
	readonly startTime?: string;
}
export interface WorkloadGroupProperties {
	readonly importance?: string;
	readonly maxResourcePercent: number;
	readonly maxResourcePercentPerRequest?: number;
	readonly minResourcePercent: number;
	readonly minResourcePercentPerRequest: number;
	readonly queryExecutionTimeout?: number;
}
export default {
	"managedInstances/databases": managedInstances_databases,
	"managedInstances/databases/restoreDetails": managedInstances_databases_restoreDetails,
	"managedInstances/operations": managedInstances_operations,
	servers: servers,
	"servers/administrators": servers_administrators,
	"servers/databases": servers_databases,
	"servers/databases/syncGroups": servers_databases_syncGroups,
	"servers/databases/syncGroups/syncMembers": servers_databases_syncGroups_syncMembers,
	"servers/databases/workloadGroups": servers_databases_workloadGroups,
	"servers/databases/workloadGroups/workloadClassifiers": servers_databases_workloadGroups_workloadClassifiers,
};
