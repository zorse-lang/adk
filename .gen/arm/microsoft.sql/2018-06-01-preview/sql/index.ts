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
	readonly properties?: InstancePoolProperties;
	readonly sku?: Sku;
	readonly tags?: TrackedResourceTags;
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
	readonly properties?: ManagedInstanceLongTermRetentionBackupProperties;
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
	readonly identity?: ResourceIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties?: ManagedInstanceProperties;
	readonly sku?: Sku;
	readonly tags?: TrackedResourceTags;
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
	readonly properties?: ManagedDatabaseProperties;
	readonly tags?: TrackedResourceTags;
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
	readonly properties?: BaseLongTermRetentionPolicyProperties;
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
	readonly properties?: ManagedDatabaseRestoreDetailsProperties;
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
	readonly properties?: SensitivityLabelProperties;
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
	readonly properties?: ManagedInstanceOperationProperties;
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
	readonly properties?: ManagedInstanceVulnerabilityAssessmentProperties;
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
	readonly properties?: AdministratorProperties;
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
	readonly properties?: SecurityAlertPolicyProperties;
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
	readonly properties?: PrivateEndpointConnectionProperties;
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
	readonly properties?: PrivateLinkResourceProperties;
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
	readonly properties?: ServerVulnerabilityAssessmentProperties;
}
export interface AdministratorProperties {
	readonly administratorType: "ActiveDirectory";
	readonly login: string;
	readonly sid: string;
	readonly tenantId?: string;
}
export interface BaseLongTermRetentionPolicyProperties {
	readonly monthlyRetention?: string;
	readonly weeklyRetention?: string;
	readonly weekOfYear?: number;
	readonly yearlyRetention?: string;
}
export interface InstancePoolProperties {
	readonly licenseType: "BasePrice" | "LicenseIncluded";
	readonly subnetId: string;
	readonly vCores: number;
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
export interface ManagedInstanceLongTermRetentionBackupProperties {
	readonly backupExpirationTime?: string;
	readonly backupTime?: string;
	readonly databaseDeletionTime?: string;
	readonly databaseName?: string;
	readonly managedInstanceCreateTime?: string;
	readonly managedInstanceName?: string;
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
export interface ManagedInstanceProperties {
	readonly administratorLogin?: string;
	readonly administratorLoginPassword?: string;
	readonly collation?: string;
	readonly dnsZone?: string;
	readonly dnsZonePartner?: string;
	readonly fullyQualifiedDomainName?: string;
	readonly instancePoolId?: string;
	readonly licenseType?: "BasePrice" | "LicenseIncluded";
	readonly maintenanceConfigurationId?: string;
	readonly managedInstanceCreateMode?: "Default" | "PointInTimeRestore";
}
export interface ManagedInstanceVulnerabilityAssessmentProperties {
	readonly recurringScans?: VulnerabilityAssessmentRecurringScansProperties;
	readonly storageAccountAccessKey?: string;
	readonly storageContainerPath: string;
	readonly storageContainerSasKey?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpointProperty;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateProperty;
	readonly provisioningState?: string;
}
export interface PrivateEndpointProperty {
	readonly id?: string;
}
export interface PrivateLinkResourceProperties {
	readonly groupId?: string;
	readonly requiredMembers?: string[];
}
export interface PrivateLinkServiceConnectionStateProperty {
	readonly actionsRequired?: string;
	readonly description: string;
	readonly status: string;
}
export interface ResourceIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned" | "SystemAssigned,UserAssigned" | "UserAssigned";
}
export interface SecurityAlertPolicyProperties {
	readonly creationTime?: string;
	readonly disabledAlerts?: string[];
	readonly emailAccountAdmins?: boolean;
	readonly emailAddresses?: string[];
	readonly retentionDays?: number;
	readonly state: "Disabled" | "Enabled";
	readonly storageAccountAccessKey?: string;
	readonly storageEndpoint?: string;
}
export interface SensitivityLabelProperties {
	readonly informationType?: string;
	readonly informationTypeId?: string;
	readonly isDisabled?: boolean;
	readonly labelId?: string;
	readonly labelName?: string;
	readonly rank?: "Critical" | "High" | "Low" | "Medium";
}
export interface ServerVulnerabilityAssessmentProperties {
	readonly recurringScans?: VulnerabilityAssessmentRecurringScansProperties;
	readonly storageAccountAccessKey?: string;
	readonly storageContainerPath: string;
	readonly storageContainerSasKey?: string;
}
export interface Sku {
	readonly capacity?: number;
	readonly family?: string;
	readonly name: string;
	readonly size?: string;
	readonly tier?: string;
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
export interface VulnerabilityAssessmentRecurringScansProperties {
	readonly emails?: string[];
	readonly emailSubscriptionAdmins?: boolean;
	readonly isEnabled?: boolean;
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
