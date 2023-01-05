import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class locations_instanceFailoverGroups
	extends ArmResource<locations_instanceFailoverGroupsComponentInputs>
	implements locations_instanceFailoverGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_instanceFailoverGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/locations/instanceFailoverGroups", "2017-10-01-preview", options);
	}
	public readonly apiVersion: "2017-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/locations/instanceFailoverGroups";
}
export interface locations_instanceFailoverGroupsComponentOutputs {
	readonly apiVersion: "2017-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/locations/instanceFailoverGroups";
}
export interface locations_instanceFailoverGroupsComponentInputs {
	readonly name: string;
	readonly properties?: InstanceFailoverGroupProperties;
}
export class managedInstances_databases_vulnerabilityAssessments
	extends ArmResource<managedInstances_databases_vulnerabilityAssessmentsComponentInputs>
	implements managedInstances_databases_vulnerabilityAssessmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_databases_vulnerabilityAssessmentsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments",
			"2017-10-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2017-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments";
}
export interface managedInstances_databases_vulnerabilityAssessmentsComponentOutputs {
	readonly apiVersion: "2017-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments";
}
export interface managedInstances_databases_vulnerabilityAssessmentsComponentInputs {
	readonly name: string;
	readonly properties?: DatabaseVulnerabilityAssessmentProperties;
}
export class managedInstances_databases_vulnerabilityAssessments_rules_baselines
	extends ArmResource<managedInstances_databases_vulnerabilityAssessments_rules_baselinesComponentInputs>
	implements managedInstances_databases_vulnerabilityAssessments_rules_baselinesComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: managedInstances_databases_vulnerabilityAssessments_rules_baselinesComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments/rules/baselines",
			"2017-10-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2017-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments/rules/baselines";
}
export interface managedInstances_databases_vulnerabilityAssessments_rules_baselinesComponentOutputs {
	readonly apiVersion: "2017-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments/rules/baselines";
}
export interface managedInstances_databases_vulnerabilityAssessments_rules_baselinesComponentInputs {
	readonly name: string;
	readonly properties?: DatabaseVulnerabilityAssessmentRuleBaselineProperties;
}
export class managedInstances_databases_vulnerabilityAssessments_scans
	extends ArmResource<managedInstances_databases_vulnerabilityAssessments_scansComponentInputs>
	implements managedInstances_databases_vulnerabilityAssessments_scansComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_databases_vulnerabilityAssessments_scansComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments/scans",
			"2017-10-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2017-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments/scans";
}
export interface managedInstances_databases_vulnerabilityAssessments_scansComponentOutputs {
	readonly apiVersion: "2017-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments/scans";
}
export interface managedInstances_databases_vulnerabilityAssessments_scansComponentInputs {
	readonly name: string;
	readonly properties?: VulnerabilityAssessmentScanRecordProperties;
}
export class managedInstances_encryptionProtector
	extends ArmResource<managedInstances_encryptionProtectorComponentInputs>
	implements managedInstances_encryptionProtectorComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_encryptionProtectorComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/managedInstances/encryptionProtector", "2017-10-01-preview", options);
	}
	public readonly apiVersion: "2017-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/encryptionProtector";
}
export interface managedInstances_encryptionProtectorComponentOutputs {
	readonly apiVersion: "2017-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/encryptionProtector";
}
export interface managedInstances_encryptionProtectorComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: ManagedInstanceEncryptionProtectorProperties;
}
export class managedInstances_keys
	extends ArmResource<managedInstances_keysComponentInputs>
	implements managedInstances_keysComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_keysComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/managedInstances/keys", "2017-10-01-preview", options);
	}
	public readonly apiVersion: "2017-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/keys";
}
export interface managedInstances_keysComponentOutputs {
	readonly apiVersion: "2017-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/keys";
}
export interface managedInstances_keysComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: ManagedInstanceKeyProperties;
}
export class managedInstances_recoverableDatabases
	extends ArmResource<managedInstances_recoverableDatabasesComponentInputs>
	implements managedInstances_recoverableDatabasesComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_recoverableDatabasesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/managedInstances/recoverableDatabases", "2017-10-01-preview", options);
	}
	public readonly apiVersion: "2017-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/recoverableDatabases";
}
export interface managedInstances_recoverableDatabasesComponentOutputs {
	readonly apiVersion: "2017-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/recoverableDatabases";
}
export interface managedInstances_recoverableDatabasesComponentInputs {
	readonly name: string;
	readonly properties?: RecoverableManagedDatabaseProperties;
}
export class servers_databases
	extends ArmResource<servers_databasesComponentInputs>
	implements servers_databasesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databasesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases", "2017-10-01-preview", options);
	}
	public readonly apiVersion: "2017-10-01-preview";
	public readonly id: string;
}
export interface servers_databasesComponentOutputs {
	readonly apiVersion: "2017-10-01-preview";
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
export class servers_databases_backupShortTermRetentionPolicies
	extends ArmResource<servers_databases_backupShortTermRetentionPoliciesComponentInputs>
	implements servers_databases_backupShortTermRetentionPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_backupShortTermRetentionPoliciesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Sql/servers/databases/backupShortTermRetentionPolicies",
			"2017-10-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2017-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/backupShortTermRetentionPolicies";
}
export interface servers_databases_backupShortTermRetentionPoliciesComponentOutputs {
	readonly apiVersion: "2017-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/backupShortTermRetentionPolicies";
}
export interface servers_databases_backupShortTermRetentionPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: BackupShortTermRetentionPolicyProperties;
}
export class servers_databases_vulnerabilityAssessments_scans
	extends ArmResource<servers_databases_vulnerabilityAssessments_scansComponentInputs>
	implements servers_databases_vulnerabilityAssessments_scansComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_vulnerabilityAssessments_scansComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Sql/servers/databases/vulnerabilityAssessments/scans",
			"2017-10-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2017-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/vulnerabilityAssessments/scans";
}
export interface servers_databases_vulnerabilityAssessments_scansComponentOutputs {
	readonly apiVersion: "2017-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/vulnerabilityAssessments/scans";
}
export interface servers_databases_vulnerabilityAssessments_scansComponentInputs {
	readonly name: string;
	readonly properties?: VulnerabilityAssessmentScanRecordProperties;
}
export class servers_elasticPools
	extends ArmResource<servers_elasticPoolsComponentInputs>
	implements servers_elasticPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_elasticPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/elasticPools", "2017-10-01-preview", options);
	}
	public readonly apiVersion: "2017-10-01-preview";
	public readonly id: string;
}
export interface servers_elasticPoolsComponentOutputs {
	readonly apiVersion: "2017-10-01-preview";
	readonly id: string;
}
export interface servers_elasticPoolsComponentInputs {
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: ElasticPoolProperties;
	readonly sku?: Sku;
}
export interface BackupShortTermRetentionPolicyProperties {
	readonly retentionDays?: number;
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
export interface DatabaseVulnerabilityAssessmentProperties {
	readonly recurringScans?: VulnerabilityAssessmentRecurringScansProperties;
	readonly storageAccountAccessKey?: string;
	readonly storageContainerPath?: string;
	readonly storageContainerSasKey?: string;
}
export interface DatabaseVulnerabilityAssessmentRuleBaselineItem {
	readonly result: string[];
}
export interface DatabaseVulnerabilityAssessmentRuleBaselineProperties {
	readonly baselineResults: DatabaseVulnerabilityAssessmentRuleBaselineItem[];
}
export interface ElasticPoolPerDatabaseSettings {
	readonly maxCapacity?: number;
	readonly minCapacity?: number;
}
export interface ElasticPoolProperties {
	readonly creationDate?: string;
	readonly licenseType?: "BasePrice" | "LicenseIncluded";
	readonly maxSizeBytes?: number;
	readonly perDatabaseSettings?: ElasticPoolPerDatabaseSettings;
	readonly state?: "Creating" | "Disabled" | "Ready";
	readonly zoneRedundant?: boolean;
}
export interface InstanceFailoverGroupProperties {
	readonly managedInstancePairs: ManagedInstancePairInfo[];
	readonly partnerRegions: PartnerRegionInfo[];
	readonly readOnlyEndpoint?: InstanceFailoverGroupReadOnlyEndpoint;
	readonly readWriteEndpoint: InstanceFailoverGroupReadWriteEndpoint;
	readonly replicationRole?: "Primary" | "Secondary";
	readonly replicationState?: string;
}
export interface InstanceFailoverGroupReadOnlyEndpoint {
	readonly failoverPolicy?: "Disabled" | "Enabled";
}
export interface InstanceFailoverGroupReadWriteEndpoint {
	readonly failoverPolicy: "Automatic" | "Manual";
	readonly failoverWithDataLossGracePeriodMinutes?: number;
}
export interface ManagedInstanceEncryptionProtectorProperties {
	readonly serverKeyName?: string;
	readonly serverKeyType: "AzureKeyVault" | "ServiceManaged";
	readonly thumbprint?: string;
	readonly uri?: string;
}
export interface ManagedInstanceKeyProperties {
	readonly creationDate?: string;
	readonly serverKeyType: "AzureKeyVault" | "ServiceManaged";
	readonly thumbprint?: string;
	readonly uri?: string;
}
export interface ManagedInstancePairInfo {
	readonly partnerManagedInstanceId?: string;
	readonly primaryManagedInstanceId?: string;
}
export interface PartnerRegionInfo {
	readonly location?: string;
	readonly replicationRole?: "Primary" | "Secondary";
}
export interface RecoverableManagedDatabaseProperties {
	readonly lastAvailableBackupDate?: string;
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
export interface VulnerabilityAssessmentRecurringScansProperties {
	readonly emails?: string[];
	readonly emailSubscriptionAdmins?: boolean;
	readonly isEnabled?: boolean;
}
export interface VulnerabilityAssessmentScanError {
	readonly code?: string;
	readonly message?: string;
}
export interface VulnerabilityAssessmentScanRecordProperties {
	readonly endTime?: string;
	readonly errors?: VulnerabilityAssessmentScanError[];
	readonly numberOfFailedSecurityChecks?: number;
	readonly scanId?: string;
	readonly startTime?: string;
	readonly state?: "Failed" | "FailedToRun" | "InProgress" | "Passed";
	readonly storageContainerPath?: string;
	readonly triggerType?: "OnDemand" | "Recurring";
}
export default {
	"locations/instanceFailoverGroups": locations_instanceFailoverGroups,
	"managedInstances/databases/vulnerabilityAssessments": managedInstances_databases_vulnerabilityAssessments,
	"managedInstances/databases/vulnerabilityAssessments/rules/baselines":
		managedInstances_databases_vulnerabilityAssessments_rules_baselines,
	"managedInstances/databases/vulnerabilityAssessments/scans":
		managedInstances_databases_vulnerabilityAssessments_scans,
	"managedInstances/encryptionProtector": managedInstances_encryptionProtector,
	"managedInstances/keys": managedInstances_keys,
	"managedInstances/recoverableDatabases": managedInstances_recoverableDatabases,
	"servers/databases": servers_databases,
	"servers/databases/backupShortTermRetentionPolicies": servers_databases_backupShortTermRetentionPolicies,
	"servers/databases/vulnerabilityAssessments/scans": servers_databases_vulnerabilityAssessments_scans,
	"servers/elasticPools": servers_elasticPools,
};
