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
	readonly properties?: InstanceFailoverGroupProperties | undefined;
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
	readonly properties?: DatabaseVulnerabilityAssessmentProperties | undefined;
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
	readonly properties?: DatabaseVulnerabilityAssessmentRuleBaselineProperties | undefined;
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
	readonly properties?: VulnerabilityAssessmentScanRecordProperties | undefined;
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
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: ManagedInstanceEncryptionProtectorProperties | undefined;
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
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: ManagedInstanceKeyProperties | undefined;
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
	readonly properties?: RecoverableManagedDatabaseProperties | undefined;
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
	readonly kind?: string | undefined;
	readonly location: string;
	readonly managedBy?: string | undefined;
	readonly name: string;
	readonly properties?: DatabaseProperties | undefined;
	readonly sku?: Sku | undefined;
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
	readonly properties?: BackupShortTermRetentionPolicyProperties | undefined;
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
	readonly properties?: VulnerabilityAssessmentScanRecordProperties | undefined;
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
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: ElasticPoolProperties | undefined;
	readonly sku?: Sku | undefined;
}
export interface BackupShortTermRetentionPolicyProperties {
	readonly retentionDays?: number | undefined;
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
export interface DatabaseVulnerabilityAssessmentProperties {
	readonly recurringScans?: VulnerabilityAssessmentRecurringScansProperties | undefined;
	readonly storageAccountAccessKey?: string | undefined;
	readonly storageContainerPath?: string | undefined;
	readonly storageContainerSasKey?: string | undefined;
}
export interface DatabaseVulnerabilityAssessmentRuleBaselineItem {
	readonly result: string[];
}
export interface DatabaseVulnerabilityAssessmentRuleBaselineProperties {
	readonly baselineResults: DatabaseVulnerabilityAssessmentRuleBaselineItem[];
}
export interface ElasticPoolPerDatabaseSettings {
	readonly maxCapacity?: number | undefined;
	readonly minCapacity?: number | undefined;
}
export interface ElasticPoolProperties {
	readonly creationDate?: string | undefined;
	readonly licenseType?: ("BasePrice" | "LicenseIncluded") | undefined;
	readonly maxSizeBytes?: number | undefined;
	readonly perDatabaseSettings?: ElasticPoolPerDatabaseSettings | undefined;
	readonly state?: ("Creating" | "Disabled" | "Ready") | undefined;
	readonly zoneRedundant?: boolean | undefined;
}
export interface InstanceFailoverGroupProperties {
	readonly managedInstancePairs: ManagedInstancePairInfo[];
	readonly partnerRegions: PartnerRegionInfo[];
	readonly readOnlyEndpoint?: InstanceFailoverGroupReadOnlyEndpoint | undefined;
	readonly readWriteEndpoint: InstanceFailoverGroupReadWriteEndpoint;
	readonly replicationRole?: ("Primary" | "Secondary") | undefined;
	readonly replicationState?: string | undefined;
}
export interface InstanceFailoverGroupReadOnlyEndpoint {
	readonly failoverPolicy?: ("Disabled" | "Enabled") | undefined;
}
export interface InstanceFailoverGroupReadWriteEndpoint {
	readonly failoverPolicy: "Automatic" | "Manual";
	readonly failoverWithDataLossGracePeriodMinutes?: number | undefined;
}
export interface ManagedInstanceEncryptionProtectorProperties {
	readonly serverKeyName?: string | undefined;
	readonly serverKeyType: "AzureKeyVault" | "ServiceManaged";
	readonly thumbprint?: string | undefined;
	readonly uri?: string | undefined;
}
export interface ManagedInstanceKeyProperties {
	readonly creationDate?: string | undefined;
	readonly serverKeyType: "AzureKeyVault" | "ServiceManaged";
	readonly thumbprint?: string | undefined;
	readonly uri?: string | undefined;
}
export interface ManagedInstancePairInfo {
	readonly partnerManagedInstanceId?: string | undefined;
	readonly primaryManagedInstanceId?: string | undefined;
}
export interface PartnerRegionInfo {
	readonly location?: string | undefined;
	readonly replicationRole?: ("Primary" | "Secondary") | undefined;
}
export interface RecoverableManagedDatabaseProperties {
	readonly lastAvailableBackupDate?: string | undefined;
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
export interface VulnerabilityAssessmentRecurringScansProperties {
	readonly emails?: string[] | undefined;
	readonly emailSubscriptionAdmins?: boolean | undefined;
	readonly isEnabled?: boolean | undefined;
}
export interface VulnerabilityAssessmentScanError {
	readonly code?: string | undefined;
	readonly message?: string | undefined;
}
export interface VulnerabilityAssessmentScanRecordProperties {
	readonly endTime?: string | undefined;
	readonly errors?: VulnerabilityAssessmentScanError[] | undefined;
	readonly numberOfFailedSecurityChecks?: number | undefined;
	readonly scanId?: string | undefined;
	readonly startTime?: string | undefined;
	readonly state?: ("Failed" | "FailedToRun" | "InProgress" | "Passed") | undefined;
	readonly storageContainerPath?: string | undefined;
	readonly triggerType?: ("OnDemand" | "Recurring") | undefined;
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
