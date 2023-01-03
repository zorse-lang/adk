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
	readonly properties?: ManagedDatabaseProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: ManagedDatabaseRestoreDetailsProperties | undefined;
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
	readonly properties?: ManagedInstanceOperationProperties | undefined;
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
	readonly identity?: ResourceIdentity | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: ServerProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: AdministratorProperties | undefined;
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
	readonly kind?: string | undefined;
	readonly location: string;
	readonly managedBy?: string | undefined;
	readonly name: string;
	readonly properties?: DatabaseProperties | undefined;
	readonly sku?: Sku | undefined;
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
	readonly properties?: SyncGroupProperties | undefined;
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
	readonly properties?: SyncMemberProperties | undefined;
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
	readonly properties?: WorkloadGroupProperties | undefined;
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
	readonly properties?: WorkloadClassifierProperties | undefined;
}
export interface AdministratorProperties {
	readonly administratorType: "ActiveDirectory";
	readonly azureADOnlyAuthentication?: boolean | undefined;
	readonly login: string;
	readonly sid: string;
	readonly tenantId?: string | undefined;
}
export interface DatabaseProperties {
	readonly autoPauseDelay?: number | undefined;
	readonly catalogCollation?: ("DATABASE_DEFAULT" | "SQL_Latin1_General_CP1_CI_AS") | undefined;
	readonly collation?: string | undefined;
	readonly createMode?:
		| (
				| "Copy"
				| "Default"
				| "OnlineSecondary"
				| "PointInTimeRestore"
				| "Recovery"
				| "Restore"
				| "RestoreExternalBackup"
				| "RestoreExternalBackupSecondary"
				| "RestoreLongTermRetentionBackup"
				| "Secondary"
		  )
		| undefined;
}
export interface ManagedDatabaseProperties {
	readonly catalogCollation?: ("DATABASE_DEFAULT" | "SQL_Latin1_General_CP1_CI_AS") | undefined;
	readonly collation?: string | undefined;
	readonly createMode?:
		| ("Default" | "PointInTimeRestore" | "Recovery" | "RestoreExternalBackup" | "RestoreLongTermRetentionBackup")
		| undefined;
	readonly creationDate?: string | undefined;
	readonly defaultSecondaryLocation?: string | undefined;
	readonly earliestRestorePoint?: string | undefined;
	readonly failoverGroupId?: string | undefined;
	readonly longTermRetentionBackupResourceId?: string | undefined;
	readonly recoverableDatabaseId?: string | undefined;
	readonly restorableDroppedDatabaseId?: string | undefined;
	readonly restorePointInTime?: string | undefined;
	readonly sourceDatabaseId?: string | undefined;
	readonly status?:
		| ("Creating" | "Inaccessible" | "Offline" | "Online" | "Restoring" | "Shutdown" | "Updating")
		| undefined;
	readonly storageContainerSasToken?: string | undefined;
	readonly storageContainerUri?: string | undefined;
}
export interface ManagedDatabaseRestoreDetailsProperties {
	readonly blockReason?: string | undefined;
	readonly currentRestoringFileName?: string | undefined;
	readonly lastRestoredFileName?: string | undefined;
	readonly lastRestoredFileTime?: string | undefined;
	readonly lastUploadedFileName?: string | undefined;
	readonly lastUploadedFileTime?: string | undefined;
	readonly numberOfFilesDetected?: number | undefined;
	readonly percentCompleted?: number | undefined;
	readonly status?: string | undefined;
	readonly unrestorableFiles?: string[] | undefined;
}
export interface ManagedInstanceOperationParametersPair {
	readonly currentParameters?: UpsertManagedServerOperationParameters | undefined;
	readonly requestedParameters?: UpsertManagedServerOperationParameters | undefined;
}
export interface ManagedInstanceOperationProperties {
	readonly description?: string | undefined;
	readonly errorCode?: number | undefined;
	readonly errorDescription?: string | undefined;
	readonly errorSeverity?: number | undefined;
	readonly estimatedCompletionTime?: string | undefined;
	readonly isCancellable?: boolean | undefined;
	readonly isUserError?: boolean | undefined;
	readonly managedInstanceName?: string | undefined;
	readonly operation?: string | undefined;
	readonly operationFriendlyName?: string | undefined;
	readonly operationParameters?: ManagedInstanceOperationParametersPair | undefined;
	readonly operationSteps?: ManagedInstanceOperationSteps | undefined;
	readonly percentComplete?: number | undefined;
	readonly startTime?: string | undefined;
	readonly state?: ("CancelInProgress" | "Cancelled" | "Failed" | "InProgress" | "Pending" | "Succeeded") | undefined;
}
export interface ManagedInstanceOperationSteps {
	readonly currentStep?: number | undefined;
	readonly stepsList?: UpsertManagedServerOperationStep[] | undefined;
	readonly totalSteps?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpointProperty | undefined;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateProperty | undefined;
	readonly provisioningState?: ("Approving" | "Dropping" | "Failed" | "Ready" | "Rejecting") | undefined;
}
export interface PrivateEndpointProperty {
	readonly id?: string | undefined;
}
export interface PrivateLinkServiceConnectionStateProperty {
	readonly actionsRequired?: "None" | undefined;
	readonly description: string;
	readonly status: "Approved" | "Disconnected" | "Pending" | "Rejected";
}
export interface ResourceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned" | "SystemAssigned,UserAssigned" | "UserAssigned") | undefined;
}
export interface ServerPrivateEndpointConnection {
	readonly id?: string | undefined;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
}
export interface ServerProperties {
	readonly administratorLogin?: string | undefined;
	readonly administratorLoginPassword?: string | undefined;
	readonly fullyQualifiedDomainName?: string | undefined;
	readonly minimalTlsVersion?: string | undefined;
	readonly privateEndpointConnections?: ServerPrivateEndpointConnection[] | undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
	readonly state?: string | undefined;
	readonly version?: string | undefined;
}
export interface Sku {
	readonly capacity?: number | undefined;
	readonly family?: string | undefined;
	readonly name: string;
	readonly size?: string | undefined;
	readonly tier?: string | undefined;
}
export interface SyncGroupProperties {
	readonly conflictResolutionPolicy?: ("HubWin" | "MemberWin") | undefined;
	readonly hubDatabasePassword?: string | undefined;
	readonly hubDatabaseUserName?: string | undefined;
	readonly interval?: number | undefined;
	readonly lastSyncTime?: string | undefined;
	readonly privateEndpointName?: string | undefined;
	readonly schema?: SyncGroupSchema | undefined;
	readonly syncDatabaseId?: string | undefined;
	readonly syncState?: ("Error" | "Good" | "NotReady" | "Progressing" | "Warning") | undefined;
	readonly usePrivateLinkConnection?: boolean | undefined;
}
export interface SyncGroupSchema {
	readonly masterSyncMemberName?: string | undefined;
	readonly tables?: SyncGroupSchemaTable[] | undefined;
}
export interface SyncGroupSchemaTable {
	readonly columns?: SyncGroupSchemaTableColumn[] | undefined;
	readonly quotedName?: string | undefined;
}
export interface SyncGroupSchemaTableColumn {
	readonly dataSize?: string | undefined;
	readonly dataType?: string | undefined;
	readonly quotedName?: string | undefined;
}
export interface SyncMemberProperties {
	readonly databaseName?: string | undefined;
	readonly databaseType?: ("AzureSqlDatabase" | "SqlServerDatabase") | undefined;
	readonly password?: string | undefined;
	readonly privateEndpointName?: string | undefined;
	readonly serverName?: string | undefined;
	readonly sqlServerDatabaseId?: string | undefined;
	readonly syncAgentId?: string | undefined;
	readonly syncDirection?: ("Bidirectional" | "OneWayHubToMember" | "OneWayMemberToHub") | undefined;
	readonly syncMemberAzureDatabaseResourceId?: string | undefined;
	readonly syncState?:
		| (
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
				| "UnReprovisioned"
		  )
		| undefined;
	readonly usePrivateLinkConnection?: boolean | undefined;
	readonly userName?: string | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface UpsertManagedServerOperationParameters {
	readonly family?: string | undefined;
	readonly storageSizeInGB?: number | undefined;
	readonly tier?: string | undefined;
	readonly vCores?: number | undefined;
}
export interface UpsertManagedServerOperationStep {
	readonly name?: string | undefined;
	readonly order?: number | undefined;
	readonly status?: ("Canceled" | "Completed" | "Failed" | "InProgress" | "NotStarted" | "SlowedDown") | undefined;
}
export interface WorkloadClassifierProperties {
	readonly context?: string | undefined;
	readonly endTime?: string | undefined;
	readonly importance?: string | undefined;
	readonly label?: string | undefined;
	readonly memberName: string;
	readonly startTime?: string | undefined;
}
export interface WorkloadGroupProperties {
	readonly importance?: string | undefined;
	readonly maxResourcePercent: number;
	readonly maxResourcePercentPerRequest?: number | undefined;
	readonly minResourcePercent: number;
	readonly minResourcePercentPerRequest: number;
	readonly queryExecutionTimeout?: number | undefined;
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
