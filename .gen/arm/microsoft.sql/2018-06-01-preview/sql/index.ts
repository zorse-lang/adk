import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class instancePools extends ArmResource<instancePoolsComponentInputs> implements instancePoolsComponentOutputs {
	constructor(entity: ADKEntity, options: instancePoolsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/instancePools", "2018-06-01-preview", options);
	}
	public readonly apiVersion: "2018-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/instancePools";
}
export interface instancePoolsComponentOutputs {
	readonly apiVersion: "2018-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/instancePools";
}
export interface instancePoolsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: InstancePoolProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class locations_longTermRetentionManagedInstances_longTermRetentionDatabases_longTermRetentionManagedInstanceBackups
	extends ArmResource<locations_longTermRetentionManagedInstances_longTermRetentionDatabases_longTermRetentionManagedInstanceBackupsComponentInputs>
	implements
		locations_longTermRetentionManagedInstances_longTermRetentionDatabases_longTermRetentionManagedInstanceBackupsComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: locations_longTermRetentionManagedInstances_longTermRetentionDatabases_longTermRetentionManagedInstanceBackupsComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.Sql/locations/longTermRetentionManagedInstances/longTermRetentionDatabases/longTermRetentionManagedInstanceBackups",
			"2018-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2018-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/locations/longTermRetentionManagedInstances/longTermRetentionDatabases/longTermRetentionManagedInstanceBackups";
}
export interface locations_longTermRetentionManagedInstances_longTermRetentionDatabases_longTermRetentionManagedInstanceBackupsComponentOutputs {
	readonly apiVersion: "2018-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/locations/longTermRetentionManagedInstances/longTermRetentionDatabases/longTermRetentionManagedInstanceBackups";
}
export interface locations_longTermRetentionManagedInstances_longTermRetentionDatabases_longTermRetentionManagedInstanceBackupsComponentInputs {
	readonly name: string;
	readonly properties?: ManagedInstanceLongTermRetentionBackupProperties | undefined;
}
export class managedInstances
	extends ArmResource<managedInstancesComponentInputs>
	implements managedInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstancesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/managedInstances", "2018-06-01-preview", options);
	}
	public readonly apiVersion: "2018-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances";
}
export interface managedInstancesComponentOutputs {
	readonly apiVersion: "2018-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances";
}
export interface managedInstancesComponentInputs {
	readonly identity?: ResourceIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: ManagedInstanceProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class managedInstances_databases
	extends ArmResource<managedInstances_databasesComponentInputs>
	implements managedInstances_databasesComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_databasesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/managedInstances/databases", "2018-06-01-preview", options);
	}
	public readonly apiVersion: "2018-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/databases";
}
export interface managedInstances_databasesComponentOutputs {
	readonly apiVersion: "2018-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/databases";
}
export interface managedInstances_databasesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ManagedDatabaseProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class managedInstances_databases_backupLongTermRetentionPolicies
	extends ArmResource<managedInstances_databases_backupLongTermRetentionPoliciesComponentInputs>
	implements managedInstances_databases_backupLongTermRetentionPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_databases_backupLongTermRetentionPoliciesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Sql/managedInstances/databases/backupLongTermRetentionPolicies",
			"2018-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2018-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/databases/backupLongTermRetentionPolicies";
}
export interface managedInstances_databases_backupLongTermRetentionPoliciesComponentOutputs {
	readonly apiVersion: "2018-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/databases/backupLongTermRetentionPolicies";
}
export interface managedInstances_databases_backupLongTermRetentionPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: BaseLongTermRetentionPolicyProperties | undefined;
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
			"2018-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2018-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/databases/restoreDetails";
}
export interface managedInstances_databases_restoreDetailsComponentOutputs {
	readonly apiVersion: "2018-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/databases/restoreDetails";
}
export interface managedInstances_databases_restoreDetailsComponentInputs {
	readonly name: string;
	readonly properties?: ManagedDatabaseRestoreDetailsProperties | undefined;
}
export class managedInstances_databases_schemas_tables_columns_sensitivityLabels
	extends ArmResource<managedInstances_databases_schemas_tables_columns_sensitivityLabelsComponentInputs>
	implements managedInstances_databases_schemas_tables_columns_sensitivityLabelsComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: managedInstances_databases_schemas_tables_columns_sensitivityLabelsComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.Sql/managedInstances/databases/schemas/tables/columns/sensitivityLabels",
			"2018-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2018-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/databases/schemas/tables/columns/sensitivityLabels";
}
export interface managedInstances_databases_schemas_tables_columns_sensitivityLabelsComponentOutputs {
	readonly apiVersion: "2018-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/databases/schemas/tables/columns/sensitivityLabels";
}
export interface managedInstances_databases_schemas_tables_columns_sensitivityLabelsComponentInputs {
	readonly name: string;
	readonly properties?: SensitivityLabelProperties | undefined;
}
export class managedInstances_operations
	extends ArmResource<managedInstances_operationsComponentInputs>
	implements managedInstances_operationsComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_operationsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/managedInstances/operations", "2018-06-01-preview", options);
	}
	public readonly apiVersion: "2018-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/operations";
}
export interface managedInstances_operationsComponentOutputs {
	readonly apiVersion: "2018-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/operations";
}
export interface managedInstances_operationsComponentInputs {
	readonly name: string;
	readonly properties?: ManagedInstanceOperationProperties | undefined;
}
export class managedInstances_vulnerabilityAssessments
	extends ArmResource<managedInstances_vulnerabilityAssessmentsComponentInputs>
	implements managedInstances_vulnerabilityAssessmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_vulnerabilityAssessmentsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Sql/managedInstances/vulnerabilityAssessments",
			"2018-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2018-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/vulnerabilityAssessments";
}
export interface managedInstances_vulnerabilityAssessmentsComponentOutputs {
	readonly apiVersion: "2018-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/vulnerabilityAssessments";
}
export interface managedInstances_vulnerabilityAssessmentsComponentInputs {
	readonly name: string;
	readonly properties?: ManagedInstanceVulnerabilityAssessmentProperties | undefined;
}
export class servers_administrators
	extends ArmResource<servers_administratorsComponentInputs>
	implements servers_administratorsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_administratorsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/administrators", "2018-06-01-preview", options);
	}
	public readonly apiVersion: "2018-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/administrators";
}
export interface servers_administratorsComponentOutputs {
	readonly apiVersion: "2018-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/administrators";
}
export interface servers_administratorsComponentInputs {
	readonly name: string;
	readonly properties?: AdministratorProperties | undefined;
}
export class servers_databases_securityAlertPolicies
	extends ArmResource<servers_databases_securityAlertPoliciesComponentInputs>
	implements servers_databases_securityAlertPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_securityAlertPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/securityAlertPolicies", "2018-06-01-preview", options);
	}
	public readonly apiVersion: "2018-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/securityAlertPolicies";
}
export interface servers_databases_securityAlertPoliciesComponentOutputs {
	readonly apiVersion: "2018-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/securityAlertPolicies";
}
export interface servers_databases_securityAlertPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: SecurityAlertPolicyProperties | undefined;
}
export class servers_privateEndpointConnections
	extends ArmResource<servers_privateEndpointConnectionsComponentInputs>
	implements servers_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/privateEndpointConnections", "2018-06-01-preview", options);
	}
	public readonly apiVersion: "2018-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/privateEndpointConnections";
}
export interface servers_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2018-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/privateEndpointConnections";
}
export interface servers_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
}
export class servers_privateLinkResources
	extends ArmResource<servers_privateLinkResourcesComponentInputs>
	implements servers_privateLinkResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_privateLinkResourcesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/privateLinkResources", "2018-06-01-preview", options);
	}
	public readonly apiVersion: "2018-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/privateLinkResources";
}
export interface servers_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2018-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/privateLinkResources";
}
export interface servers_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties | undefined;
}
export class servers_vulnerabilityAssessments
	extends ArmResource<servers_vulnerabilityAssessmentsComponentInputs>
	implements servers_vulnerabilityAssessmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_vulnerabilityAssessmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/vulnerabilityAssessments", "2018-06-01-preview", options);
	}
	public readonly apiVersion: "2018-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/vulnerabilityAssessments";
}
export interface servers_vulnerabilityAssessmentsComponentOutputs {
	readonly apiVersion: "2018-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/vulnerabilityAssessments";
}
export interface servers_vulnerabilityAssessmentsComponentInputs {
	readonly name: string;
	readonly properties?: ServerVulnerabilityAssessmentProperties | undefined;
}
export interface AdministratorProperties {
	readonly administratorType: "ActiveDirectory";
	readonly login: string;
	readonly sid: string;
	readonly tenantId?: string | undefined;
}
export interface BaseLongTermRetentionPolicyProperties {
	readonly monthlyRetention?: string | undefined;
	readonly weeklyRetention?: string | undefined;
	readonly weekOfYear?: number | undefined;
	readonly yearlyRetention?: string | undefined;
}
export interface InstancePoolProperties {
	readonly licenseType: "BasePrice" | "LicenseIncluded";
	readonly subnetId: string;
	readonly vCores: number;
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
export interface ManagedInstanceLongTermRetentionBackupProperties {
	readonly backupExpirationTime?: string | undefined;
	readonly backupTime?: string | undefined;
	readonly databaseDeletionTime?: string | undefined;
	readonly databaseName?: string | undefined;
	readonly managedInstanceCreateTime?: string | undefined;
	readonly managedInstanceName?: string | undefined;
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
export interface ManagedInstanceProperties {
	readonly administratorLogin?: string | undefined;
	readonly administratorLoginPassword?: string | undefined;
	readonly collation?: string | undefined;
	readonly dnsZone?: string | undefined;
	readonly dnsZonePartner?: string | undefined;
	readonly fullyQualifiedDomainName?: string | undefined;
	readonly instancePoolId?: string | undefined;
	readonly licenseType?: ("BasePrice" | "LicenseIncluded") | undefined;
	readonly maintenanceConfigurationId?: string | undefined;
	readonly managedInstanceCreateMode?: ("Default" | "PointInTimeRestore") | undefined;
}
export interface ManagedInstanceVulnerabilityAssessmentProperties {
	readonly recurringScans?: VulnerabilityAssessmentRecurringScansProperties | undefined;
	readonly storageAccountAccessKey?: string | undefined;
	readonly storageContainerPath: string;
	readonly storageContainerSasKey?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpointProperty | undefined;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateProperty | undefined;
	readonly provisioningState?: string | undefined;
}
export interface PrivateEndpointProperty {
	readonly id?: string | undefined;
}
export interface PrivateLinkResourceProperties {
	readonly groupId?: string | undefined;
	readonly requiredMembers?: string[] | undefined;
}
export interface PrivateLinkServiceConnectionStateProperty {
	readonly actionsRequired?: string | undefined;
	readonly description: string;
	readonly status: string;
}
export interface ResourceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned" | "SystemAssigned,UserAssigned" | "UserAssigned") | undefined;
}
export interface SecurityAlertPolicyProperties {
	readonly creationTime?: string | undefined;
	readonly disabledAlerts?: string[] | undefined;
	readonly emailAccountAdmins?: boolean | undefined;
	readonly emailAddresses?: string[] | undefined;
	readonly retentionDays?: number | undefined;
	readonly state: "Disabled" | "Enabled";
	readonly storageAccountAccessKey?: string | undefined;
	readonly storageEndpoint?: string | undefined;
}
export interface SensitivityLabelProperties {
	readonly informationType?: string | undefined;
	readonly informationTypeId?: string | undefined;
	readonly isDisabled?: boolean | undefined;
	readonly labelId?: string | undefined;
	readonly labelName?: string | undefined;
	readonly rank?: ("Critical" | "High" | "Low" | "Medium") | undefined;
}
export interface ServerVulnerabilityAssessmentProperties {
	readonly recurringScans?: VulnerabilityAssessmentRecurringScansProperties | undefined;
	readonly storageAccountAccessKey?: string | undefined;
	readonly storageContainerPath: string;
	readonly storageContainerSasKey?: string | undefined;
}
export interface Sku {
	readonly capacity?: number | undefined;
	readonly family?: string | undefined;
	readonly name: string;
	readonly size?: string | undefined;
	readonly tier?: string | undefined;
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
export interface VulnerabilityAssessmentRecurringScansProperties {
	readonly emails?: string[] | undefined;
	readonly emailSubscriptionAdmins?: boolean | undefined;
	readonly isEnabled?: boolean | undefined;
}
export default {
	instancePools: instancePools,
	"locations/longTermRetentionManagedInstances/longTermRetentionDatabases/longTermRetentionManagedInstanceBackups":
		locations_longTermRetentionManagedInstances_longTermRetentionDatabases_longTermRetentionManagedInstanceBackups,
	managedInstances: managedInstances,
	"managedInstances/databases": managedInstances_databases,
	"managedInstances/databases/backupLongTermRetentionPolicies":
		managedInstances_databases_backupLongTermRetentionPolicies,
	"managedInstances/databases/restoreDetails": managedInstances_databases_restoreDetails,
	"managedInstances/databases/schemas/tables/columns/sensitivityLabels":
		managedInstances_databases_schemas_tables_columns_sensitivityLabels,
	"managedInstances/operations": managedInstances_operations,
	"managedInstances/vulnerabilityAssessments": managedInstances_vulnerabilityAssessments,
	"servers/administrators": servers_administrators,
	"servers/databases/securityAlertPolicies": servers_databases_securityAlertPolicies,
	"servers/privateEndpointConnections": servers_privateEndpointConnections,
	"servers/privateLinkResources": servers_privateLinkResources,
	"servers/vulnerabilityAssessments": servers_vulnerabilityAssessments,
};
