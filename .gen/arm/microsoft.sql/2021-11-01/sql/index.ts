import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class instancePools extends ArmResource<instancePoolsComponentInputs> implements instancePoolsComponentOutputs {
	constructor(entity: ADKEntity, options: instancePoolsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/instancePools", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/instancePools";
}
export interface instancePoolsComponentOutputs {
	readonly apiVersion: "2021-11-01";
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
export class locations_deletedServers
	extends ArmResource<locations_deletedServersComponentInputs>
	implements locations_deletedServersComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_deletedServersComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/locations/deletedServers", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/locations/deletedServers";
}
export interface locations_deletedServersComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/locations/deletedServers";
}
export interface locations_deletedServersComponentInputs {
	readonly name: string;
	readonly properties?: DeletedServerProperties | undefined;
}
export class locations_instanceFailoverGroups
	extends ArmResource<locations_instanceFailoverGroupsComponentInputs>
	implements locations_instanceFailoverGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_instanceFailoverGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/locations/instanceFailoverGroups", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/locations/instanceFailoverGroups";
}
export interface locations_instanceFailoverGroupsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/locations/instanceFailoverGroups";
}
export interface locations_instanceFailoverGroupsComponentInputs {
	readonly name: string;
	readonly properties?: InstanceFailoverGroupProperties | undefined;
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
			"2021-11-01",
			options,
		);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/locations/longTermRetentionManagedInstances/longTermRetentionDatabases/longTermRetentionManagedInstanceBackups";
}
export interface locations_longTermRetentionManagedInstances_longTermRetentionDatabases_longTermRetentionManagedInstanceBackupsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/locations/longTermRetentionManagedInstances/longTermRetentionDatabases/longTermRetentionManagedInstanceBackups";
}
export interface locations_longTermRetentionManagedInstances_longTermRetentionDatabases_longTermRetentionManagedInstanceBackupsComponentInputs {
	readonly name: string;
	readonly properties?: ManagedInstanceLongTermRetentionBackupProperties | undefined;
}
export class locations_longTermRetentionServers_longTermRetentionDatabases_longTermRetentionBackups
	extends ArmResource<locations_longTermRetentionServers_longTermRetentionDatabases_longTermRetentionBackupsComponentInputs>
	implements locations_longTermRetentionServers_longTermRetentionDatabases_longTermRetentionBackupsComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: locations_longTermRetentionServers_longTermRetentionDatabases_longTermRetentionBackupsComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.Sql/locations/longTermRetentionServers/longTermRetentionDatabases/longTermRetentionBackups",
			"2021-11-01",
			options,
		);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/locations/longTermRetentionServers/longTermRetentionDatabases/longTermRetentionBackups";
}
export interface locations_longTermRetentionServers_longTermRetentionDatabases_longTermRetentionBackupsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/locations/longTermRetentionServers/longTermRetentionDatabases/longTermRetentionBackups";
}
export interface locations_longTermRetentionServers_longTermRetentionDatabases_longTermRetentionBackupsComponentInputs {
	readonly name: string;
	readonly properties?: LongTermRetentionBackupProperties | undefined;
}
export class locations_serverTrustGroups
	extends ArmResource<locations_serverTrustGroupsComponentInputs>
	implements locations_serverTrustGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_serverTrustGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/locations/serverTrustGroups", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/locations/serverTrustGroups";
}
export interface locations_serverTrustGroupsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/locations/serverTrustGroups";
}
export interface locations_serverTrustGroupsComponentInputs {
	readonly name: string;
	readonly properties?: ServerTrustGroupProperties | undefined;
}
export class locations_timeZones
	extends ArmResource<locations_timeZonesComponentInputs>
	implements locations_timeZonesComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_timeZonesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/locations/timeZones", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/locations/timeZones";
}
export interface locations_timeZonesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/locations/timeZones";
}
export interface locations_timeZonesComponentInputs {
	readonly name: string;
	readonly properties?: TimeZoneProperties | undefined;
}
export class locations_usages
	extends ArmResource<locations_usagesComponentInputs>
	implements locations_usagesComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_usagesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/locations/usages", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/locations/usages";
}
export interface locations_usagesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/locations/usages";
}
export interface locations_usagesComponentInputs {
	readonly name: string;
	readonly properties?: SubscriptionUsageProperties | undefined;
}
export class managedInstances
	extends ArmResource<managedInstancesComponentInputs>
	implements managedInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstancesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/managedInstances", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances";
}
export interface managedInstancesComponentOutputs {
	readonly apiVersion: "2021-11-01";
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
export class managedInstances_administrators
	extends ArmResource<managedInstances_administratorsComponentInputs>
	implements managedInstances_administratorsComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_administratorsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/managedInstances/administrators", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/administrators";
}
export interface managedInstances_administratorsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/administrators";
}
export interface managedInstances_administratorsComponentInputs {
	readonly name: string;
	readonly properties?: ManagedInstanceAdministratorProperties | undefined;
}
export class managedInstances_azureADOnlyAuthentications
	extends ArmResource<managedInstances_azureADOnlyAuthenticationsComponentInputs>
	implements managedInstances_azureADOnlyAuthenticationsComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_azureADOnlyAuthenticationsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/managedInstances/azureADOnlyAuthentications", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/azureADOnlyAuthentications";
}
export interface managedInstances_azureADOnlyAuthenticationsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/azureADOnlyAuthentications";
}
export interface managedInstances_azureADOnlyAuthenticationsComponentInputs {
	readonly name: string;
	readonly properties?: ManagedInstanceAzureADOnlyAuthProperties | undefined;
}
export class managedInstances_databases
	extends ArmResource<managedInstances_databasesComponentInputs>
	implements managedInstances_databasesComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_databasesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/managedInstances/databases", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/databases";
}
export interface managedInstances_databasesComponentOutputs {
	readonly apiVersion: "2021-11-01";
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
			"2021-11-01",
			options,
		);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/databases/backupLongTermRetentionPolicies";
}
export interface managedInstances_databases_backupLongTermRetentionPoliciesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/databases/backupLongTermRetentionPolicies";
}
export interface managedInstances_databases_backupLongTermRetentionPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: BaseLongTermRetentionPolicyProperties | undefined;
}
export class managedInstances_databases_backupShortTermRetentionPolicies
	extends ArmResource<managedInstances_databases_backupShortTermRetentionPoliciesComponentInputs>
	implements managedInstances_databases_backupShortTermRetentionPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_databases_backupShortTermRetentionPoliciesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Sql/managedInstances/databases/backupShortTermRetentionPolicies",
			"2021-11-01",
			options,
		);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/databases/backupShortTermRetentionPolicies";
}
export interface managedInstances_databases_backupShortTermRetentionPoliciesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/databases/backupShortTermRetentionPolicies";
}
export interface managedInstances_databases_backupShortTermRetentionPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: ManagedBackupShortTermRetentionPolicyProperties | undefined;
}
export class managedInstances_databases_queries
	extends ArmResource<managedInstances_databases_queriesComponentInputs>
	implements managedInstances_databases_queriesComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_databases_queriesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/managedInstances/databases/queries", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/databases/queries";
}
export interface managedInstances_databases_queriesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/databases/queries";
}
export interface managedInstances_databases_queriesComponentInputs {
	readonly name: string;
	readonly properties?: QueryProperties | undefined;
}
export class managedInstances_databases_restoreDetails
	extends ArmResource<managedInstances_databases_restoreDetailsComponentInputs>
	implements managedInstances_databases_restoreDetailsComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_databases_restoreDetailsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/managedInstances/databases/restoreDetails", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/databases/restoreDetails";
}
export interface managedInstances_databases_restoreDetailsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/databases/restoreDetails";
}
export interface managedInstances_databases_restoreDetailsComponentInputs {
	readonly name: string;
	readonly properties?: ManagedDatabaseRestoreDetailsProperties | undefined;
}
export class managedInstances_databases_schemas
	extends ArmResource<managedInstances_databases_schemasComponentInputs>
	implements managedInstances_databases_schemasComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_databases_schemasComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/managedInstances/databases/schemas", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/databases/schemas";
}
export interface managedInstances_databases_schemasComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/databases/schemas";
}
export interface managedInstances_databases_schemasComponentInputs {
	readonly name: string;
}
export class managedInstances_databases_schemas_tables
	extends ArmResource<managedInstances_databases_schemas_tablesComponentInputs>
	implements managedInstances_databases_schemas_tablesComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_databases_schemas_tablesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/managedInstances/databases/schemas/tables", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/databases/schemas/tables";
}
export interface managedInstances_databases_schemas_tablesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/databases/schemas/tables";
}
export interface managedInstances_databases_schemas_tablesComponentInputs {
	readonly name: string;
	readonly properties?: DatabaseTableProperties | undefined;
}
export class managedInstances_databases_schemas_tables_columns
	extends ArmResource<managedInstances_databases_schemas_tables_columnsComponentInputs>
	implements managedInstances_databases_schemas_tables_columnsComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_databases_schemas_tables_columnsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Sql/managedInstances/databases/schemas/tables/columns",
			"2021-11-01",
			options,
		);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/databases/schemas/tables/columns";
}
export interface managedInstances_databases_schemas_tables_columnsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/databases/schemas/tables/columns";
}
export interface managedInstances_databases_schemas_tables_columnsComponentInputs {
	readonly name: string;
	readonly properties?: DatabaseColumnProperties | undefined;
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
			"2021-11-01",
			options,
		);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/databases/schemas/tables/columns/sensitivityLabels";
}
export interface managedInstances_databases_schemas_tables_columns_sensitivityLabelsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/databases/schemas/tables/columns/sensitivityLabels";
}
export interface managedInstances_databases_schemas_tables_columns_sensitivityLabelsComponentInputs {
	readonly managedBy?: string | undefined;
	readonly name: string;
	readonly properties?: SensitivityLabelProperties | undefined;
}
export class managedInstances_databases_securityAlertPolicies
	extends ArmResource<managedInstances_databases_securityAlertPoliciesComponentInputs>
	implements managedInstances_databases_securityAlertPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_databases_securityAlertPoliciesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Sql/managedInstances/databases/securityAlertPolicies",
			"2021-11-01",
			options,
		);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/databases/securityAlertPolicies";
}
export interface managedInstances_databases_securityAlertPoliciesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/databases/securityAlertPolicies";
}
export interface managedInstances_databases_securityAlertPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: SecurityAlertPolicyProperties | undefined;
}
export class managedInstances_databases_transparentDataEncryption
	extends ArmResource<managedInstances_databases_transparentDataEncryptionComponentInputs>
	implements managedInstances_databases_transparentDataEncryptionComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_databases_transparentDataEncryptionComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Sql/managedInstances/databases/transparentDataEncryption",
			"2021-11-01",
			options,
		);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/databases/transparentDataEncryption";
}
export interface managedInstances_databases_transparentDataEncryptionComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/databases/transparentDataEncryption";
}
export interface managedInstances_databases_transparentDataEncryptionComponentInputs {
	readonly name: string;
	readonly properties?: ManagedTransparentDataEncryptionProperties | undefined;
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
			"2021-11-01",
			options,
		);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments";
}
export interface managedInstances_databases_vulnerabilityAssessmentsComponentOutputs {
	readonly apiVersion: "2021-11-01";
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
			"2021-11-01",
			options,
		);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments/rules/baselines";
}
export interface managedInstances_databases_vulnerabilityAssessments_rules_baselinesComponentOutputs {
	readonly apiVersion: "2021-11-01";
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
			"2021-11-01",
			options,
		);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments/scans";
}
export interface managedInstances_databases_vulnerabilityAssessments_scansComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments/scans";
}
export interface managedInstances_databases_vulnerabilityAssessments_scansComponentInputs {
	readonly name: string;
	readonly properties?: VulnerabilityAssessmentScanRecordProperties | undefined;
}
export class managedInstances_distributedAvailabilityGroups
	extends ArmResource<managedInstances_distributedAvailabilityGroupsComponentInputs>
	implements managedInstances_distributedAvailabilityGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_distributedAvailabilityGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/managedInstances/distributedAvailabilityGroups", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/distributedAvailabilityGroups";
}
export interface managedInstances_distributedAvailabilityGroupsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/distributedAvailabilityGroups";
}
export interface managedInstances_distributedAvailabilityGroupsComponentInputs {
	readonly name: string;
	readonly properties?: DistributedAvailabilityGroupProperties | undefined;
}
export class managedInstances_dnsAliases
	extends ArmResource<managedInstances_dnsAliasesComponentInputs>
	implements managedInstances_dnsAliasesComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_dnsAliasesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/managedInstances/dnsAliases", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/dnsAliases";
}
export interface managedInstances_dnsAliasesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/dnsAliases";
}
export interface managedInstances_dnsAliasesComponentInputs {
	readonly createDnsRecord?: boolean | undefined;
	readonly name: string;
	readonly properties?: ManagedServerDnsAliasProperties | undefined;
}
export class managedInstances_encryptionProtector
	extends ArmResource<managedInstances_encryptionProtectorComponentInputs>
	implements managedInstances_encryptionProtectorComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_encryptionProtectorComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/managedInstances/encryptionProtector", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/encryptionProtector";
}
export interface managedInstances_encryptionProtectorComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/encryptionProtector";
}
export interface managedInstances_encryptionProtectorComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: ManagedInstanceEncryptionProtectorProperties | undefined;
}
export class managedInstances_endpointCertificates
	extends ArmResource<managedInstances_endpointCertificatesComponentInputs>
	implements managedInstances_endpointCertificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_endpointCertificatesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/managedInstances/endpointCertificates", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/endpointCertificates";
}
export interface managedInstances_endpointCertificatesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/endpointCertificates";
}
export interface managedInstances_endpointCertificatesComponentInputs {
	readonly name: string;
	readonly properties?: EndpointCertificateProperties | undefined;
}
export class managedInstances_keys
	extends ArmResource<managedInstances_keysComponentInputs>
	implements managedInstances_keysComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_keysComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/managedInstances/keys", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/keys";
}
export interface managedInstances_keysComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/keys";
}
export interface managedInstances_keysComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: ManagedInstanceKeyProperties | undefined;
}
export class managedInstances_operations
	extends ArmResource<managedInstances_operationsComponentInputs>
	implements managedInstances_operationsComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_operationsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/managedInstances/operations", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/operations";
}
export interface managedInstances_operationsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/operations";
}
export interface managedInstances_operationsComponentInputs {
	readonly name: string;
	readonly properties?: ManagedInstanceOperationProperties | undefined;
}
export class managedInstances_privateEndpointConnections
	extends ArmResource<managedInstances_privateEndpointConnectionsComponentInputs>
	implements managedInstances_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/managedInstances/privateEndpointConnections", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/privateEndpointConnections";
}
export interface managedInstances_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/privateEndpointConnections";
}
export interface managedInstances_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: ManagedInstancePrivateEndpointConnectionProperties | undefined;
}
export class managedInstances_privateLinkResources
	extends ArmResource<managedInstances_privateLinkResourcesComponentInputs>
	implements managedInstances_privateLinkResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_privateLinkResourcesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/managedInstances/privateLinkResources", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/privateLinkResources";
}
export interface managedInstances_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/privateLinkResources";
}
export interface managedInstances_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: ManagedInstancePrivateLinkProperties | undefined;
}
export class managedInstances_recoverableDatabases
	extends ArmResource<managedInstances_recoverableDatabasesComponentInputs>
	implements managedInstances_recoverableDatabasesComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_recoverableDatabasesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/managedInstances/recoverableDatabases", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/recoverableDatabases";
}
export interface managedInstances_recoverableDatabasesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/recoverableDatabases";
}
export interface managedInstances_recoverableDatabasesComponentInputs {
	readonly name: string;
	readonly properties?: RecoverableManagedDatabaseProperties | undefined;
}
export class managedInstances_restorableDroppedDatabases
	extends ArmResource<managedInstances_restorableDroppedDatabasesComponentInputs>
	implements managedInstances_restorableDroppedDatabasesComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_restorableDroppedDatabasesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/managedInstances/restorableDroppedDatabases", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/restorableDroppedDatabases";
}
export interface managedInstances_restorableDroppedDatabasesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/restorableDroppedDatabases";
}
export interface managedInstances_restorableDroppedDatabasesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: RestorableDroppedManagedDatabaseProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class managedInstances_restorableDroppedDatabases_backupShortTermRetentionPolicies
	extends ArmResource<managedInstances_restorableDroppedDatabases_backupShortTermRetentionPoliciesComponentInputs>
	implements managedInstances_restorableDroppedDatabases_backupShortTermRetentionPoliciesComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: managedInstances_restorableDroppedDatabases_backupShortTermRetentionPoliciesComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.Sql/managedInstances/restorableDroppedDatabases/backupShortTermRetentionPolicies",
			"2021-11-01",
			options,
		);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/restorableDroppedDatabases/backupShortTermRetentionPolicies";
}
export interface managedInstances_restorableDroppedDatabases_backupShortTermRetentionPoliciesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/restorableDroppedDatabases/backupShortTermRetentionPolicies";
}
export interface managedInstances_restorableDroppedDatabases_backupShortTermRetentionPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: ManagedBackupShortTermRetentionPolicyProperties | undefined;
}
export class managedInstances_securityAlertPolicies
	extends ArmResource<managedInstances_securityAlertPoliciesComponentInputs>
	implements managedInstances_securityAlertPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_securityAlertPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/managedInstances/securityAlertPolicies", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/securityAlertPolicies";
}
export interface managedInstances_securityAlertPoliciesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/securityAlertPolicies";
}
export interface managedInstances_securityAlertPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: SecurityAlertsPolicyProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class managedInstances_serverTrustCertificates
	extends ArmResource<managedInstances_serverTrustCertificatesComponentInputs>
	implements managedInstances_serverTrustCertificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_serverTrustCertificatesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/managedInstances/serverTrustCertificates", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/serverTrustCertificates";
}
export interface managedInstances_serverTrustCertificatesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/serverTrustCertificates";
}
export interface managedInstances_serverTrustCertificatesComponentInputs {
	readonly name: string;
	readonly properties?: ServerTrustCertificateProperties | undefined;
}
export class managedInstances_sqlAgent
	extends ArmResource<managedInstances_sqlAgentComponentInputs>
	implements managedInstances_sqlAgentComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_sqlAgentComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/managedInstances/sqlAgent", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/sqlAgent";
}
export interface managedInstances_sqlAgentComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/sqlAgent";
}
export interface managedInstances_sqlAgentComponentInputs {
	readonly name: string;
	readonly properties?: SqlAgentConfigurationProperties | undefined;
}
export class managedInstances_vulnerabilityAssessments
	extends ArmResource<managedInstances_vulnerabilityAssessmentsComponentInputs>
	implements managedInstances_vulnerabilityAssessmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_vulnerabilityAssessmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/managedInstances/vulnerabilityAssessments", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/vulnerabilityAssessments";
}
export interface managedInstances_vulnerabilityAssessmentsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/vulnerabilityAssessments";
}
export interface managedInstances_vulnerabilityAssessmentsComponentInputs {
	readonly name: string;
	readonly properties?: ManagedInstanceVulnerabilityAssessmentProperties | undefined;
}
export class servers extends ArmResource<serversComponentInputs> implements serversComponentOutputs {
	constructor(entity: ADKEntity, options: serversComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers";
}
export interface serversComponentOutputs {
	readonly apiVersion: "2021-11-01";
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
		super(entity, options.name, "Microsoft.Sql/servers/administrators", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/administrators";
}
export interface servers_administratorsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/administrators";
}
export interface servers_administratorsComponentInputs {
	readonly name: string;
	readonly properties?: AdministratorProperties | undefined;
}
export class servers_advancedThreatProtectionSettings
	extends ArmResource<servers_advancedThreatProtectionSettingsComponentInputs>
	implements servers_advancedThreatProtectionSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_advancedThreatProtectionSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/advancedThreatProtectionSettings", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/advancedThreatProtectionSettings";
}
export interface servers_advancedThreatProtectionSettingsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/advancedThreatProtectionSettings";
}
export interface servers_advancedThreatProtectionSettingsComponentInputs {
	readonly name: string;
	readonly properties?: AdvancedThreatProtectionProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class servers_advisors
	extends ArmResource<servers_advisorsComponentInputs>
	implements servers_advisorsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_advisorsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/advisors", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/advisors";
}
export interface servers_advisorsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/advisors";
}
export interface servers_advisorsComponentInputs {
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: AdvisorProperties | undefined;
}
export class servers_auditingSettings
	extends ArmResource<servers_auditingSettingsComponentInputs>
	implements servers_auditingSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_auditingSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/auditingSettings", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/auditingSettings";
}
export interface servers_auditingSettingsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/auditingSettings";
}
export interface servers_auditingSettingsComponentInputs {
	readonly name: string;
	readonly properties?: ServerBlobAuditingPolicyProperties | undefined;
}
export class servers_automaticTuning
	extends ArmResource<servers_automaticTuningComponentInputs>
	implements servers_automaticTuningComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_automaticTuningComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/automaticTuning", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/automaticTuning";
}
export interface servers_automaticTuningComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/automaticTuning";
}
export interface servers_automaticTuningComponentInputs {
	readonly name: string;
	readonly properties?: AutomaticTuningServerProperties | undefined;
}
export class servers_azureADOnlyAuthentications
	extends ArmResource<servers_azureADOnlyAuthenticationsComponentInputs>
	implements servers_azureADOnlyAuthenticationsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_azureADOnlyAuthenticationsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/azureADOnlyAuthentications", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/azureADOnlyAuthentications";
}
export interface servers_azureADOnlyAuthenticationsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/azureADOnlyAuthentications";
}
export interface servers_azureADOnlyAuthenticationsComponentInputs {
	readonly name: string;
	readonly properties?: AzureADOnlyAuthProperties | undefined;
}
export class servers_connectionPolicies
	extends ArmResource<servers_connectionPoliciesComponentInputs>
	implements servers_connectionPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_connectionPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/connectionPolicies", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/connectionPolicies";
}
export interface servers_connectionPoliciesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/connectionPolicies";
}
export interface servers_connectionPoliciesComponentInputs {
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ServerConnectionPolicyProperties | undefined;
}
export class servers_databases
	extends ArmResource<servers_databasesComponentInputs>
	implements servers_databasesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databasesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
}
export interface servers_databasesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
}
export interface servers_databasesComponentInputs {
	readonly identity?: DatabaseIdentity | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly managedBy?: string | undefined;
	readonly name: string;
	readonly properties?: DatabaseProperties | undefined;
	readonly sku?: Sku | undefined;
}
export class servers_databases_advancedThreatProtectionSettings
	extends ArmResource<servers_databases_advancedThreatProtectionSettingsComponentInputs>
	implements servers_databases_advancedThreatProtectionSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_advancedThreatProtectionSettingsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Sql/servers/databases/advancedThreatProtectionSettings",
			"2021-11-01",
			options,
		);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/advancedThreatProtectionSettings";
}
export interface servers_databases_advancedThreatProtectionSettingsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/advancedThreatProtectionSettings";
}
export interface servers_databases_advancedThreatProtectionSettingsComponentInputs {
	readonly name: string;
	readonly properties?: AdvancedThreatProtectionProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class servers_databases_advisors
	extends ArmResource<servers_databases_advisorsComponentInputs>
	implements servers_databases_advisorsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_advisorsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/advisors", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/advisors";
}
export interface servers_databases_advisorsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/advisors";
}
export interface servers_databases_advisorsComponentInputs {
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: AdvisorProperties | undefined;
}
export class servers_databases_advisors_recommendedActions
	extends ArmResource<servers_databases_advisors_recommendedActionsComponentInputs>
	implements servers_databases_advisors_recommendedActionsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_advisors_recommendedActionsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/advisors/recommendedActions", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/advisors/recommendedActions";
}
export interface servers_databases_advisors_recommendedActionsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/advisors/recommendedActions";
}
export interface servers_databases_advisors_recommendedActionsComponentInputs {
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: RecommendedActionProperties | undefined;
}
export class servers_databases_auditingSettings
	extends ArmResource<servers_databases_auditingSettingsComponentInputs>
	implements servers_databases_auditingSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_auditingSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/auditingSettings", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/auditingSettings";
}
export interface servers_databases_auditingSettingsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/auditingSettings";
}
export interface servers_databases_auditingSettingsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: DatabaseBlobAuditingPolicyProperties | undefined;
}
export class servers_databases_automaticTuning
	extends ArmResource<servers_databases_automaticTuningComponentInputs>
	implements servers_databases_automaticTuningComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_automaticTuningComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/automaticTuning", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/automaticTuning";
}
export interface servers_databases_automaticTuningComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/automaticTuning";
}
export interface servers_databases_automaticTuningComponentInputs {
	readonly name: string;
	readonly properties?: DatabaseAutomaticTuningProperties | undefined;
}
export class servers_databases_backupLongTermRetentionPolicies
	extends ArmResource<servers_databases_backupLongTermRetentionPoliciesComponentInputs>
	implements servers_databases_backupLongTermRetentionPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_backupLongTermRetentionPoliciesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Sql/servers/databases/backupLongTermRetentionPolicies",
			"2021-11-01",
			options,
		);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/backupLongTermRetentionPolicies";
}
export interface servers_databases_backupLongTermRetentionPoliciesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/backupLongTermRetentionPolicies";
}
export interface servers_databases_backupLongTermRetentionPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: BaseLongTermRetentionPolicyProperties | undefined;
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
			"2021-11-01",
			options,
		);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/backupShortTermRetentionPolicies";
}
export interface servers_databases_backupShortTermRetentionPoliciesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/backupShortTermRetentionPolicies";
}
export interface servers_databases_backupShortTermRetentionPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: BackupShortTermRetentionPolicyProperties | undefined;
}
export class servers_databases_dataMaskingPolicies
	extends ArmResource<servers_databases_dataMaskingPoliciesComponentInputs>
	implements servers_databases_dataMaskingPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_dataMaskingPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/dataMaskingPolicies", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/dataMaskingPolicies";
}
export interface servers_databases_dataMaskingPoliciesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/dataMaskingPolicies";
}
export interface servers_databases_dataMaskingPoliciesComponentInputs {
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: DataMaskingPolicyProperties | undefined;
}
export class servers_databases_dataMaskingPolicies_rules
	extends ArmResource<servers_databases_dataMaskingPolicies_rulesComponentInputs>
	implements servers_databases_dataMaskingPolicies_rulesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_dataMaskingPolicies_rulesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/dataMaskingPolicies/rules", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/dataMaskingPolicies/rules";
}
export interface servers_databases_dataMaskingPolicies_rulesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/dataMaskingPolicies/rules";
}
export interface servers_databases_dataMaskingPolicies_rulesComponentInputs {
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: DataMaskingRuleProperties | undefined;
}
export class servers_databases_dataWarehouseUserActivities
	extends ArmResource<servers_databases_dataWarehouseUserActivitiesComponentInputs>
	implements servers_databases_dataWarehouseUserActivitiesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_dataWarehouseUserActivitiesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/dataWarehouseUserActivities", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/dataWarehouseUserActivities";
}
export interface servers_databases_dataWarehouseUserActivitiesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/dataWarehouseUserActivities";
}
export interface servers_databases_dataWarehouseUserActivitiesComponentInputs {
	readonly name: string;
	readonly properties?: DataWarehouseUserActivitiesProperties | undefined;
}
export class servers_databases_extendedAuditingSettings
	extends ArmResource<servers_databases_extendedAuditingSettingsComponentInputs>
	implements servers_databases_extendedAuditingSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_extendedAuditingSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/extendedAuditingSettings", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/extendedAuditingSettings";
}
export interface servers_databases_extendedAuditingSettingsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/extendedAuditingSettings";
}
export interface servers_databases_extendedAuditingSettingsComponentInputs {
	readonly name: string;
	readonly properties?: ExtendedDatabaseBlobAuditingPolicyProperties | undefined;
}
export class servers_databases_extensions
	extends ArmResource<servers_databases_extensionsComponentInputs>
	implements servers_databases_extensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_extensionsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/extensions", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/extensions";
}
export interface servers_databases_extensionsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/extensions";
}
export interface servers_databases_extensionsComponentInputs {
	readonly name: string;
	readonly properties?: DatabaseExtensionsProperties | undefined;
}
export class servers_databases_geoBackupPolicies
	extends ArmResource<servers_databases_geoBackupPoliciesComponentInputs>
	implements servers_databases_geoBackupPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_geoBackupPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/geoBackupPolicies", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/geoBackupPolicies";
}
export interface servers_databases_geoBackupPoliciesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/geoBackupPolicies";
}
export interface servers_databases_geoBackupPoliciesComponentInputs {
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: GeoBackupPolicyProperties | undefined;
}
export class servers_databases_ledgerDigestUploads
	extends ArmResource<servers_databases_ledgerDigestUploadsComponentInputs>
	implements servers_databases_ledgerDigestUploadsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_ledgerDigestUploadsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/ledgerDigestUploads", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/ledgerDigestUploads";
}
export interface servers_databases_ledgerDigestUploadsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/ledgerDigestUploads";
}
export interface servers_databases_ledgerDigestUploadsComponentInputs {
	readonly name: string;
	readonly properties?: LedgerDigestUploadsProperties | undefined;
}
export class servers_databases_replicationLinks
	extends ArmResource<servers_databases_replicationLinksComponentInputs>
	implements servers_databases_replicationLinksComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_replicationLinksComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/replicationLinks", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/replicationLinks";
}
export interface servers_databases_replicationLinksComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/replicationLinks";
}
export interface servers_databases_replicationLinksComponentInputs {
	readonly name: string;
	readonly properties?: ReplicationLinkProperties | undefined;
}
export class servers_databases_restorePoints
	extends ArmResource<servers_databases_restorePointsComponentInputs>
	implements servers_databases_restorePointsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_restorePointsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/restorePoints", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/restorePoints";
}
export interface servers_databases_restorePointsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/restorePoints";
}
export interface servers_databases_restorePointsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: RestorePointProperties | undefined;
}
export class servers_databases_schemas
	extends ArmResource<servers_databases_schemasComponentInputs>
	implements servers_databases_schemasComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_schemasComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/schemas", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/schemas";
}
export interface servers_databases_schemasComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/schemas";
}
export interface servers_databases_schemasComponentInputs {
	readonly name: string;
}
export class servers_databases_schemas_tables
	extends ArmResource<servers_databases_schemas_tablesComponentInputs>
	implements servers_databases_schemas_tablesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_schemas_tablesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/schemas/tables", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/schemas/tables";
}
export interface servers_databases_schemas_tablesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/schemas/tables";
}
export interface servers_databases_schemas_tablesComponentInputs {
	readonly name: string;
	readonly properties?: DatabaseTableProperties | undefined;
}
export class servers_databases_schemas_tables_columns
	extends ArmResource<servers_databases_schemas_tables_columnsComponentInputs>
	implements servers_databases_schemas_tables_columnsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_schemas_tables_columnsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/schemas/tables/columns", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/schemas/tables/columns";
}
export interface servers_databases_schemas_tables_columnsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/schemas/tables/columns";
}
export interface servers_databases_schemas_tables_columnsComponentInputs {
	readonly name: string;
	readonly properties?: DatabaseColumnProperties | undefined;
}
export class servers_databases_schemas_tables_columns_sensitivityLabels
	extends ArmResource<servers_databases_schemas_tables_columns_sensitivityLabelsComponentInputs>
	implements servers_databases_schemas_tables_columns_sensitivityLabelsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_schemas_tables_columns_sensitivityLabelsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Sql/servers/databases/schemas/tables/columns/sensitivityLabels",
			"2021-11-01",
			options,
		);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/schemas/tables/columns/sensitivityLabels";
}
export interface servers_databases_schemas_tables_columns_sensitivityLabelsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/schemas/tables/columns/sensitivityLabels";
}
export interface servers_databases_schemas_tables_columns_sensitivityLabelsComponentInputs {
	readonly managedBy?: string | undefined;
	readonly name: string;
	readonly properties?: SensitivityLabelProperties | undefined;
}
export class servers_databases_securityAlertPolicies
	extends ArmResource<servers_databases_securityAlertPoliciesComponentInputs>
	implements servers_databases_securityAlertPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_securityAlertPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/securityAlertPolicies", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/securityAlertPolicies";
}
export interface servers_databases_securityAlertPoliciesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/securityAlertPolicies";
}
export interface servers_databases_securityAlertPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: SecurityAlertsPolicyProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class servers_databases_syncGroups
	extends ArmResource<servers_databases_syncGroupsComponentInputs>
	implements servers_databases_syncGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_syncGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/syncGroups", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/syncGroups";
}
export interface servers_databases_syncGroupsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/syncGroups";
}
export interface servers_databases_syncGroupsComponentInputs {
	readonly name: string;
	readonly properties?: SyncGroupProperties | undefined;
	readonly sku?: Sku | undefined;
}
export class servers_databases_syncGroups_syncMembers
	extends ArmResource<servers_databases_syncGroups_syncMembersComponentInputs>
	implements servers_databases_syncGroups_syncMembersComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_syncGroups_syncMembersComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/syncGroups/syncMembers", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/syncGroups/syncMembers";
}
export interface servers_databases_syncGroups_syncMembersComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/syncGroups/syncMembers";
}
export interface servers_databases_syncGroups_syncMembersComponentInputs {
	readonly name: string;
	readonly properties?: SyncMemberProperties | undefined;
}
export class servers_databases_transparentDataEncryption
	extends ArmResource<servers_databases_transparentDataEncryptionComponentInputs>
	implements servers_databases_transparentDataEncryptionComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_transparentDataEncryptionComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/transparentDataEncryption", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/transparentDataEncryption";
}
export interface servers_databases_transparentDataEncryptionComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/transparentDataEncryption";
}
export interface servers_databases_transparentDataEncryptionComponentInputs {
	readonly name: string;
	readonly properties?: TransparentDataEncryptionProperties | undefined;
}
export class servers_databases_vulnerabilityAssessments
	extends ArmResource<servers_databases_vulnerabilityAssessmentsComponentInputs>
	implements servers_databases_vulnerabilityAssessmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_vulnerabilityAssessmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/vulnerabilityAssessments", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/vulnerabilityAssessments";
}
export interface servers_databases_vulnerabilityAssessmentsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/vulnerabilityAssessments";
}
export interface servers_databases_vulnerabilityAssessmentsComponentInputs {
	readonly name: string;
	readonly properties?: DatabaseVulnerabilityAssessmentProperties | undefined;
}
export class servers_databases_vulnerabilityAssessments_rules_baselines
	extends ArmResource<servers_databases_vulnerabilityAssessments_rules_baselinesComponentInputs>
	implements servers_databases_vulnerabilityAssessments_rules_baselinesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_vulnerabilityAssessments_rules_baselinesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Sql/servers/databases/vulnerabilityAssessments/rules/baselines",
			"2021-11-01",
			options,
		);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/vulnerabilityAssessments/rules/baselines";
}
export interface servers_databases_vulnerabilityAssessments_rules_baselinesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/vulnerabilityAssessments/rules/baselines";
}
export interface servers_databases_vulnerabilityAssessments_rules_baselinesComponentInputs {
	readonly name: string;
	readonly properties?: DatabaseVulnerabilityAssessmentRuleBaselineProperties | undefined;
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
			"2021-11-01",
			options,
		);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/vulnerabilityAssessments/scans";
}
export interface servers_databases_vulnerabilityAssessments_scansComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/vulnerabilityAssessments/scans";
}
export interface servers_databases_vulnerabilityAssessments_scansComponentInputs {
	readonly name: string;
	readonly properties?: VulnerabilityAssessmentScanRecordProperties | undefined;
}
export class servers_databases_workloadGroups
	extends ArmResource<servers_databases_workloadGroupsComponentInputs>
	implements servers_databases_workloadGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_workloadGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/workloadGroups", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/workloadGroups";
}
export interface servers_databases_workloadGroupsComponentOutputs {
	readonly apiVersion: "2021-11-01";
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
			"2021-11-01",
			options,
		);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/workloadGroups/workloadClassifiers";
}
export interface servers_databases_workloadGroups_workloadClassifiersComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/workloadGroups/workloadClassifiers";
}
export interface servers_databases_workloadGroups_workloadClassifiersComponentInputs {
	readonly name: string;
	readonly properties?: WorkloadClassifierProperties | undefined;
}
export class servers_devOpsAuditingSettings
	extends ArmResource<servers_devOpsAuditingSettingsComponentInputs>
	implements servers_devOpsAuditingSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_devOpsAuditingSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/devOpsAuditingSettings", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/devOpsAuditingSettings";
}
export interface servers_devOpsAuditingSettingsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/devOpsAuditingSettings";
}
export interface servers_devOpsAuditingSettingsComponentInputs {
	readonly name: string;
	readonly properties?: ServerDevOpsAuditSettingsProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class servers_dnsAliases
	extends ArmResource<servers_dnsAliasesComponentInputs>
	implements servers_dnsAliasesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_dnsAliasesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/dnsAliases", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/dnsAliases";
}
export interface servers_dnsAliasesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/dnsAliases";
}
export interface servers_dnsAliasesComponentInputs {
	readonly name: string;
	readonly properties?: ServerDnsAliasProperties | undefined;
}
export class servers_elasticPools
	extends ArmResource<servers_elasticPoolsComponentInputs>
	implements servers_elasticPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_elasticPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/elasticPools", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
}
export interface servers_elasticPoolsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
}
export interface servers_elasticPoolsComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: ElasticPoolProperties | undefined;
	readonly sku?: Sku | undefined;
}
export class servers_encryptionProtector
	extends ArmResource<servers_encryptionProtectorComponentInputs>
	implements servers_encryptionProtectorComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_encryptionProtectorComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/encryptionProtector", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/encryptionProtector";
}
export interface servers_encryptionProtectorComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/encryptionProtector";
}
export interface servers_encryptionProtectorComponentInputs {
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: EncryptionProtectorProperties | undefined;
}
export class servers_extendedAuditingSettings
	extends ArmResource<servers_extendedAuditingSettingsComponentInputs>
	implements servers_extendedAuditingSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_extendedAuditingSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/extendedAuditingSettings", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/extendedAuditingSettings";
}
export interface servers_extendedAuditingSettingsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/extendedAuditingSettings";
}
export interface servers_extendedAuditingSettingsComponentInputs {
	readonly name: string;
	readonly properties?: ExtendedServerBlobAuditingPolicyProperties | undefined;
}
export class servers_failoverGroups
	extends ArmResource<servers_failoverGroupsComponentInputs>
	implements servers_failoverGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_failoverGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/failoverGroups", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/failoverGroups";
}
export interface servers_failoverGroupsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/failoverGroups";
}
export interface servers_failoverGroupsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: FailoverGroupProperties | undefined;
	readonly tags?: FailoverGroupTags | undefined;
}
export class servers_firewallRules
	extends ArmResource<servers_firewallRulesComponentInputs>
	implements servers_firewallRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_firewallRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/firewallRules", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/firewallRules";
}
export interface servers_firewallRulesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/firewallRules";
}
export interface servers_firewallRulesComponentInputs {
	readonly name: string;
	readonly properties?: ServerFirewallRuleProperties | undefined;
}
export class servers_ipv6FirewallRules
	extends ArmResource<servers_ipv6FirewallRulesComponentInputs>
	implements servers_ipv6FirewallRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_ipv6FirewallRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/ipv6FirewallRules", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/ipv6FirewallRules";
}
export interface servers_ipv6FirewallRulesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/ipv6FirewallRules";
}
export interface servers_ipv6FirewallRulesComponentInputs {
	readonly name: string;
	readonly properties?: IPv6ServerFirewallRuleProperties | undefined;
}
export class servers_jobAgents
	extends ArmResource<servers_jobAgentsComponentInputs>
	implements servers_jobAgentsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_jobAgentsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/jobAgents", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/jobAgents";
}
export interface servers_jobAgentsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/jobAgents";
}
export interface servers_jobAgentsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: JobAgentProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class servers_jobAgents_credentials
	extends ArmResource<servers_jobAgents_credentialsComponentInputs>
	implements servers_jobAgents_credentialsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_jobAgents_credentialsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/jobAgents/credentials", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/jobAgents/credentials";
}
export interface servers_jobAgents_credentialsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/jobAgents/credentials";
}
export interface servers_jobAgents_credentialsComponentInputs {
	readonly name: string;
	readonly properties?: JobCredentialProperties | undefined;
}
export class servers_jobAgents_jobs
	extends ArmResource<servers_jobAgents_jobsComponentInputs>
	implements servers_jobAgents_jobsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_jobAgents_jobsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/jobAgents/jobs", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/jobAgents/jobs";
}
export interface servers_jobAgents_jobsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/jobAgents/jobs";
}
export interface servers_jobAgents_jobsComponentInputs {
	readonly name: string;
	readonly properties?: JobProperties | undefined;
}
export class servers_jobAgents_jobs_executions
	extends ArmResource<servers_jobAgents_jobs_executionsComponentInputs>
	implements servers_jobAgents_jobs_executionsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_jobAgents_jobs_executionsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/jobAgents/jobs/executions", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/jobAgents/jobs/executions";
}
export interface servers_jobAgents_jobs_executionsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/jobAgents/jobs/executions";
}
export interface servers_jobAgents_jobs_executionsComponentInputs {
	readonly name: string;
	readonly properties?: JobExecutionProperties | undefined;
}
export class servers_jobAgents_jobs_executions_steps
	extends ArmResource<servers_jobAgents_jobs_executions_stepsComponentInputs>
	implements servers_jobAgents_jobs_executions_stepsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_jobAgents_jobs_executions_stepsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/jobAgents/jobs/executions/steps", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/jobAgents/jobs/executions/steps";
}
export interface servers_jobAgents_jobs_executions_stepsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/jobAgents/jobs/executions/steps";
}
export interface servers_jobAgents_jobs_executions_stepsComponentInputs {
	readonly name: string;
	readonly properties?: JobExecutionProperties | undefined;
}
export class servers_jobAgents_jobs_executions_steps_targets
	extends ArmResource<servers_jobAgents_jobs_executions_steps_targetsComponentInputs>
	implements servers_jobAgents_jobs_executions_steps_targetsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_jobAgents_jobs_executions_steps_targetsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/jobAgents/jobs/executions/steps/targets", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/jobAgents/jobs/executions/steps/targets";
}
export interface servers_jobAgents_jobs_executions_steps_targetsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/jobAgents/jobs/executions/steps/targets";
}
export interface servers_jobAgents_jobs_executions_steps_targetsComponentInputs {
	readonly name: string;
	readonly properties?: JobExecutionProperties | undefined;
}
export class servers_jobAgents_jobs_steps
	extends ArmResource<servers_jobAgents_jobs_stepsComponentInputs>
	implements servers_jobAgents_jobs_stepsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_jobAgents_jobs_stepsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/jobAgents/jobs/steps", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/jobAgents/jobs/steps";
}
export interface servers_jobAgents_jobs_stepsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/jobAgents/jobs/steps";
}
export interface servers_jobAgents_jobs_stepsComponentInputs {
	readonly name: string;
	readonly properties?: JobStepProperties | undefined;
}
export class servers_jobAgents_jobs_versions
	extends ArmResource<servers_jobAgents_jobs_versionsComponentInputs>
	implements servers_jobAgents_jobs_versionsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_jobAgents_jobs_versionsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/jobAgents/jobs/versions", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/jobAgents/jobs/versions";
}
export interface servers_jobAgents_jobs_versionsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/jobAgents/jobs/versions";
}
export interface servers_jobAgents_jobs_versionsComponentInputs {
	readonly name: string;
}
export class servers_jobAgents_jobs_versions_steps
	extends ArmResource<servers_jobAgents_jobs_versions_stepsComponentInputs>
	implements servers_jobAgents_jobs_versions_stepsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_jobAgents_jobs_versions_stepsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/jobAgents/jobs/versions/steps", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/jobAgents/jobs/versions/steps";
}
export interface servers_jobAgents_jobs_versions_stepsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/jobAgents/jobs/versions/steps";
}
export interface servers_jobAgents_jobs_versions_stepsComponentInputs {
	readonly name: string;
	readonly properties?: JobStepProperties | undefined;
}
export class servers_jobAgents_targetGroups
	extends ArmResource<servers_jobAgents_targetGroupsComponentInputs>
	implements servers_jobAgents_targetGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_jobAgents_targetGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/jobAgents/targetGroups", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/jobAgents/targetGroups";
}
export interface servers_jobAgents_targetGroupsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/jobAgents/targetGroups";
}
export interface servers_jobAgents_targetGroupsComponentInputs {
	readonly name: string;
	readonly properties?: JobTargetGroupProperties | undefined;
}
export class servers_keys extends ArmResource<servers_keysComponentInputs> implements servers_keysComponentOutputs {
	constructor(entity: ADKEntity, options: servers_keysComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/keys", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/keys";
}
export interface servers_keysComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/keys";
}
export interface servers_keysComponentInputs {
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ServerKeyProperties | undefined;
}
export class servers_outboundFirewallRules
	extends ArmResource<servers_outboundFirewallRulesComponentInputs>
	implements servers_outboundFirewallRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_outboundFirewallRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/outboundFirewallRules", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/outboundFirewallRules";
}
export interface servers_outboundFirewallRulesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/outboundFirewallRules";
}
export interface servers_outboundFirewallRulesComponentInputs {
	readonly name: string;
	readonly properties?: OutboundFirewallRuleProperties | undefined;
}
export class servers_privateEndpointConnections
	extends ArmResource<servers_privateEndpointConnectionsComponentInputs>
	implements servers_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/privateEndpointConnections", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/privateEndpointConnections";
}
export interface servers_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-11-01";
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
		super(entity, options.name, "Microsoft.Sql/servers/privateLinkResources", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/privateLinkResources";
}
export interface servers_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/privateLinkResources";
}
export interface servers_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties | undefined;
}
export class servers_recoverableDatabases
	extends ArmResource<servers_recoverableDatabasesComponentInputs>
	implements servers_recoverableDatabasesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_recoverableDatabasesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/recoverableDatabases", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/recoverableDatabases";
}
export interface servers_recoverableDatabasesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/recoverableDatabases";
}
export interface servers_recoverableDatabasesComponentInputs {
	readonly name: string;
	readonly properties?: RecoverableDatabaseProperties | undefined;
}
export class servers_restorableDroppedDatabases
	extends ArmResource<servers_restorableDroppedDatabasesComponentInputs>
	implements servers_restorableDroppedDatabasesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_restorableDroppedDatabasesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/restorableDroppedDatabases", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/restorableDroppedDatabases";
}
export interface servers_restorableDroppedDatabasesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/restorableDroppedDatabases";
}
export interface servers_restorableDroppedDatabasesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: RestorableDroppedDatabaseProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: RestorableDroppedDatabaseTags | undefined;
}
export class servers_securityAlertPolicies
	extends ArmResource<servers_securityAlertPoliciesComponentInputs>
	implements servers_securityAlertPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_securityAlertPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/securityAlertPolicies", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/securityAlertPolicies";
}
export interface servers_securityAlertPoliciesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/securityAlertPolicies";
}
export interface servers_securityAlertPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: SecurityAlertsPolicyProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class servers_syncAgents
	extends ArmResource<servers_syncAgentsComponentInputs>
	implements servers_syncAgentsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_syncAgentsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/syncAgents", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/syncAgents";
}
export interface servers_syncAgentsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/syncAgents";
}
export interface servers_syncAgentsComponentInputs {
	readonly name: string;
	readonly properties?: SyncAgentProperties | undefined;
}
export class servers_virtualNetworkRules
	extends ArmResource<servers_virtualNetworkRulesComponentInputs>
	implements servers_virtualNetworkRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_virtualNetworkRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/virtualNetworkRules", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/virtualNetworkRules";
}
export interface servers_virtualNetworkRulesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/virtualNetworkRules";
}
export interface servers_virtualNetworkRulesComponentInputs {
	readonly name: string;
	readonly properties?: VirtualNetworkRuleProperties | undefined;
}
export class servers_vulnerabilityAssessments
	extends ArmResource<servers_vulnerabilityAssessmentsComponentInputs>
	implements servers_vulnerabilityAssessmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_vulnerabilityAssessmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/vulnerabilityAssessments", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/vulnerabilityAssessments";
}
export interface servers_vulnerabilityAssessmentsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/vulnerabilityAssessments";
}
export interface servers_vulnerabilityAssessmentsComponentInputs {
	readonly name: string;
	readonly properties?: ServerVulnerabilityAssessmentProperties | undefined;
}
export class virtualClusters
	extends ArmResource<virtualClustersComponentInputs>
	implements virtualClustersComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualClustersComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/virtualClusters", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/virtualClusters";
}
export interface virtualClustersComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/virtualClusters";
}
export interface virtualClustersComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: VirtualClusterProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface AdministratorProperties {
	readonly administratorType: "ActiveDirectory";
	readonly azureADOnlyAuthentication?: boolean | undefined;
	readonly login: string;
	readonly sid: string;
	readonly tenantId?: string | undefined;
}
export interface AdvancedThreatProtectionProperties {
	readonly creationTime?: string | undefined;
	readonly state: "Disabled" | "Enabled";
}
export interface AdvisorProperties {
	readonly advisorStatus?: ("GA" | "LimitedPublicPreview" | "PrivatePreview") | undefined;
	readonly autoExecuteStatus: "Default" | "Disabled";
	readonly autoExecuteStatusInheritedFrom?: ("Database" | "Default" | "ElasticPool" | "Server") | undefined;
	readonly lastChecked?: string | undefined;
	readonly recommendationsStatus?: string | undefined;
	readonly recommendedActions?: RecommendedAction[] | undefined;
}
export interface AutomaticTuningOptions {
	readonly actualState?: "Off" | undefined;
	readonly desiredState?: ("Default" | "Off") | undefined;
	readonly reasonCode?: number | undefined;
	readonly reasonDesc?:
		| ("AutoConfigured" | "Default" | "Disabled" | "InheritedFromServer" | "NotSupported" | "QueryStoreOff")
		| undefined;
}
export interface AutomaticTuningServerOptions {
	readonly actualState?: "Off" | undefined;
	readonly desiredState?: ("Default" | "Off") | undefined;
	readonly reasonCode?: number | undefined;
	readonly reasonDesc?: ("AutoConfigured" | "Default") | undefined;
}
export interface AutomaticTuningServerProperties {
	readonly actualState?: ("Auto" | "Custom") | undefined;
	readonly desiredState?: ("Auto" | "Custom") | undefined;
	readonly options?: AutomaticTuningServerPropertiesOptions | undefined;
}
export interface AutomaticTuningServerPropertiesOptions {
	readonly "[ key: string ]"?: AutomaticTuningServerOptions | undefined;
}
export interface AzureADOnlyAuthProperties {
	readonly azureADOnlyAuthentication: boolean;
}
export interface BackupShortTermRetentionPolicyProperties {
	readonly diffBackupIntervalInHours?: number | undefined;
	readonly retentionDays?: number | undefined;
}
export interface BaseLongTermRetentionPolicyProperties {
	readonly monthlyRetention?: string | undefined;
	readonly weeklyRetention?: string | undefined;
	readonly weekOfYear?: number | undefined;
	readonly yearlyRetention?: string | undefined;
}
export interface DatabaseAutomaticTuningProperties {
	readonly actualState?: ("Auto" | "Custom" | "Inherit") | undefined;
	readonly desiredState?: ("Auto" | "Custom" | "Inherit") | undefined;
	readonly options?: DatabaseAutomaticTuningPropertiesOptions | undefined;
}
export interface DatabaseAutomaticTuningPropertiesOptions {
	readonly "[ key: string ]"?: AutomaticTuningOptions | undefined;
}
export interface DatabaseBlobAuditingPolicyProperties {
	readonly auditActionsAndGroups?: string[] | undefined;
}
export interface DatabaseColumnProperties {
	readonly columnType?:
		| (
				| "bigint"
				| "binary"
				| "bit"
				| "char"
				| "date"
				| "datetime"
				| "datetime2"
				| "datetimeoffset"
				| "decimal"
				| "float"
				| "geography"
				| "geometry"
				| "hierarchyid"
				| "image"
				| "int"
				| "money"
				| "nchar"
				| "ntext"
				| "numeric"
				| "nvarchar"
				| "real"
				| "smalldatetime"
				| "smallint"
				| "smallmoney"
				| "sql_variant"
				| "sysname"
				| "text"
				| "time"
				| "timestamp"
				| "tinyint"
				| "uniqueidentifier"
				| "varbinary"
				| "varchar"
				| "xml"
		  )
		| undefined;
	readonly isComputed?: boolean | undefined;
	readonly memoryOptimized?: boolean | undefined;
	readonly temporalType?: ("HistoryTable" | "NonTemporalTable" | "SystemVersionedTemporalTable") | undefined;
}
export interface DatabaseExtensionsProperties {
	readonly administratorLogin?: string | undefined;
	readonly administratorLoginPassword?: string | undefined;
	readonly authenticationType?: string | undefined;
	readonly databaseEdition?: string | undefined;
	readonly maxSizeBytes?: string | undefined;
	readonly networkIsolation?: NetworkIsolationSettings | undefined;
	readonly operationMode: "Export" | "Import" | "PolybaseImport";
	readonly serviceObjectiveName?: string | undefined;
	readonly storageKey: string;
	readonly storageKeyType: "SharedAccessKey" | "StorageAccessKey";
	readonly storageUri: string;
}
export interface DatabaseIdentity {
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "UserAssigned") | undefined;
	readonly userAssignedIdentities?: DatabaseIdentityUserAssignedIdentities | undefined;
}
export interface DatabaseIdentityUserAssignedIdentities {
	readonly "[ key: string ]"?: DatabaseUserIdentity | undefined;
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
export interface DatabaseTableProperties {
	readonly memoryOptimized?: boolean | undefined;
	readonly temporalType?: ("HistoryTable" | "NonTemporalTable" | "SystemVersionedTemporalTable") | undefined;
}
export interface DatabaseUserIdentity {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
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
export interface DataMaskingPolicyProperties {
	readonly applicationPrincipals?: string | undefined;
	readonly dataMaskingState: "Disabled";
	readonly exemptPrincipals?: string | undefined;
	readonly maskingLevel?: string | undefined;
}
export interface DataMaskingRuleProperties {
	readonly aliasName?: string | undefined;
	readonly columnName: string;
	readonly id?: string | undefined;
	readonly maskingFunction: "CCN" | "Default" | "Email" | "Number" | "SSN";
	readonly numberFrom?: string | undefined;
	readonly numberTo?: string | undefined;
	readonly prefixSize?: string | undefined;
	readonly replacementString?: string | undefined;
	readonly ruleState?: "Disabled" | undefined;
	readonly schemaName: string;
	readonly suffixSize?: string | undefined;
	readonly tableName: string;
}
export interface DataWarehouseUserActivitiesProperties {
	readonly activeQueriesCount?: number | undefined;
}
export interface DeletedServerProperties {
	readonly deletionTime?: string | undefined;
	readonly fullyQualifiedDomainName?: string | undefined;
	readonly originalId?: string | undefined;
	readonly version?: string | undefined;
}
export interface DistributedAvailabilityGroupProperties {
	readonly distributedAvailabilityGroupId?: string | undefined;
	readonly lastHardenedLsn?: string | undefined;
	readonly linkState?: string | undefined;
	readonly primaryAvailabilityGroupName?: string | undefined;
	readonly replicationMode?: ("Async" | "Sync") | undefined;
	readonly secondaryAvailabilityGroupName?: string | undefined;
	readonly sourceEndpoint?: string | undefined;
	readonly sourceReplicaId?: string | undefined;
	readonly targetDatabase?: string | undefined;
	readonly targetReplicaId?: string | undefined;
}
export interface ElasticPoolPerDatabaseSettings {
	readonly maxCapacity?: number | undefined;
	readonly minCapacity?: number | undefined;
}
export interface ElasticPoolProperties {
	readonly creationDate?: string | undefined;
	readonly highAvailabilityReplicaCount?: number | undefined;
	readonly licenseType?: ("BasePrice" | "LicenseIncluded") | undefined;
	readonly maintenanceConfigurationId?: string | undefined;
	readonly maxSizeBytes?: number | undefined;
	readonly minCapacity?: number | undefined;
	readonly perDatabaseSettings?: ElasticPoolPerDatabaseSettings | undefined;
	readonly state?: ("Creating" | "Disabled" | "Ready") | undefined;
	readonly zoneRedundant?: boolean | undefined;
}
export interface EncryptionProtectorProperties {
	readonly autoRotationEnabled?: boolean | undefined;
	readonly serverKeyName?: string | undefined;
	readonly serverKeyType: "AzureKeyVault" | "ServiceManaged";
	readonly subregion?: string | undefined;
	readonly thumbprint?: string | undefined;
	readonly uri?: string | undefined;
}
export interface EndpointCertificateProperties {
	readonly publicBlob?: string | undefined;
}
export interface ExtendedDatabaseBlobAuditingPolicyProperties {
	readonly auditActionsAndGroups?: string[] | undefined;
}
export interface ExtendedServerBlobAuditingPolicyProperties {
	readonly auditActionsAndGroups?: string[] | undefined;
}
export interface FailoverGroupProperties {
	readonly databases?: string[] | undefined;
	readonly partnerServers: PartnerInfo[];
	readonly readOnlyEndpoint?: FailoverGroupReadOnlyEndpoint | undefined;
	readonly readWriteEndpoint: FailoverGroupReadWriteEndpoint;
	readonly replicationRole?: ("Primary" | "Secondary") | undefined;
	readonly replicationState?: string | undefined;
}
export interface FailoverGroupReadOnlyEndpoint {
	readonly failoverPolicy?: ("Disabled" | "Enabled") | undefined;
}
export interface FailoverGroupReadWriteEndpoint {
	readonly failoverPolicy: "Automatic" | "Manual";
	readonly failoverWithDataLossGracePeriodMinutes?: number | undefined;
}
export interface FailoverGroupTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface GeoBackupPolicyProperties {
	readonly state: "Disabled";
	readonly storageType?: string | undefined;
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
export interface InstancePoolProperties {
	readonly licenseType: "BasePrice" | "LicenseIncluded";
	readonly subnetId: string;
	readonly vCores: number;
}
export interface IPv6ServerFirewallRuleProperties {
	readonly endIPv6Address?: string | undefined;
	readonly startIPv6Address?: string | undefined;
}
export interface JobAgentProperties {
	readonly databaseId: string;
	readonly state?: ("Creating" | "Deleting" | "Disabled" | "Ready" | "Updating") | undefined;
}
export interface JobCredentialProperties {
	readonly password: string;
	readonly username: string;
}
export interface JobExecutionProperties {
	readonly createTime?: string | undefined;
	readonly currentAttempts?: number | undefined;
	readonly currentAttemptStartTime?: string | undefined;
	readonly endTime?: string | undefined;
	readonly jobExecutionId?: string | undefined;
	readonly jobVersion?: number | undefined;
	readonly lastMessage?: string | undefined;
	readonly lifecycle?:
		| (
				| "Canceled"
				| "Created"
				| "Failed"
				| "InProgress"
				| "Skipped"
				| "Succeeded"
				| "SucceededWithSkipped"
				| "TimedOut"
				| "WaitingForChildJobExecutions"
				| "WaitingForRetry"
		  )
		| undefined;
	readonly provisioningState?: ("Canceled" | "Created" | "Failed" | "InProgress" | "Succeeded") | undefined;
	readonly startTime?: string | undefined;
	readonly stepId?: number | undefined;
	readonly stepName?: string | undefined;
	readonly target?: JobExecutionTarget | undefined;
}
export interface JobExecutionTarget {
	readonly databaseName?: string | undefined;
	readonly serverName?: string | undefined;
	readonly type?: ("SqlDatabase" | "SqlElasticPool" | "SqlServer" | "SqlShardMap" | "TargetGroup") | undefined;
}
export interface JobProperties {
	readonly description?: string | undefined;
	readonly schedule?: JobSchedule | undefined;
	readonly version?: number | undefined;
}
export interface JobSchedule {
	readonly enabled?: boolean | undefined;
	readonly endTime?: string | undefined;
	readonly interval?: string | undefined;
	readonly startTime?: string | undefined;
	readonly type?: "Once" | undefined;
}
export interface JobStepAction {
	readonly source?: "Inline" | undefined;
	readonly type?: "TSql" | undefined;
	readonly value: string;
}
export interface JobStepExecutionOptions {
	readonly initialRetryIntervalSeconds?: number | undefined;
	readonly maximumRetryIntervalSeconds?: number | undefined;
	readonly retryAttempts?: number | undefined;
	readonly retryIntervalBackoffMultiplier?: number | undefined;
	readonly timeoutSeconds?: number | undefined;
}
export interface JobStepOutput {
	readonly credential: string;
	readonly databaseName: string;
	readonly resourceGroupName?: string | undefined;
	readonly schemaName?: string | undefined;
	readonly serverName: string;
	readonly subscriptionId?: string | undefined;
	readonly tableName: string;
	readonly type?: "SqlDatabase" | undefined;
}
export interface JobStepProperties {
	readonly action: JobStepAction;
	readonly credential: string;
	readonly executionOptions?: JobStepExecutionOptions | undefined;
	readonly output?: JobStepOutput | undefined;
	readonly stepId?: number | undefined;
	readonly targetGroup: string;
}
export interface JobTarget {
	readonly databaseName?: string | undefined;
	readonly elasticPoolName?: string | undefined;
	readonly membershipType?: "Exclude" | undefined;
	readonly refreshCredential?: string | undefined;
	readonly serverName?: string | undefined;
	readonly shardMapName?: string | undefined;
	readonly type: "SqlDatabase" | "SqlElasticPool" | "SqlServer" | "SqlShardMap" | "TargetGroup";
}
export interface JobTargetGroupProperties {
	readonly members: JobTarget[];
}
export interface LedgerDigestUploadsProperties {
	readonly digestStorageEndpoint?: string | undefined;
	readonly state?: "Disabled" | undefined;
}
export interface LongTermRetentionBackupProperties {
	readonly backupExpirationTime?: string | undefined;
	readonly backupStorageRedundancy?: ("Geo" | "GeoZone" | "Local" | "Zone") | undefined;
	readonly backupTime?: string | undefined;
	readonly databaseDeletionTime?: string | undefined;
	readonly databaseName?: string | undefined;
	readonly requestedBackupStorageRedundancy?: ("Geo" | "GeoZone" | "Local" | "Zone") | undefined;
	readonly serverCreateTime?: string | undefined;
	readonly serverName?: string | undefined;
}
export interface ManagedBackupShortTermRetentionPolicyProperties {
	readonly retentionDays?: number | undefined;
}
export interface ManagedDatabaseProperties {
	readonly autoCompleteRestore?: boolean | undefined;
	readonly catalogCollation?: ("DATABASE_DEFAULT" | "SQL_Latin1_General_CP1_CI_AS") | undefined;
	readonly collation?: string | undefined;
	readonly createMode?:
		| ("Default" | "PointInTimeRestore" | "Recovery" | "RestoreExternalBackup" | "RestoreLongTermRetentionBackup")
		| undefined;
	readonly creationDate?: string | undefined;
	readonly defaultSecondaryLocation?: string | undefined;
	readonly earliestRestorePoint?: string | undefined;
	readonly failoverGroupId?: string | undefined;
	readonly lastBackupName?: string | undefined;
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
export interface ManagedInstanceAdministratorProperties {
	readonly administratorType: "ActiveDirectory";
	readonly login: string;
	readonly sid: string;
	readonly tenantId?: string | undefined;
}
export interface ManagedInstanceAzureADOnlyAuthProperties {
	readonly azureADOnlyAuthentication: boolean;
}
export interface ManagedInstanceEncryptionProtectorProperties {
	readonly autoRotationEnabled?: boolean | undefined;
	readonly serverKeyName?: string | undefined;
	readonly serverKeyType: "AzureKeyVault" | "ServiceManaged";
	readonly thumbprint?: string | undefined;
	readonly uri?: string | undefined;
}
export interface ManagedInstanceExternalAdministrator {
	readonly administratorType?: "ActiveDirectory" | undefined;
	readonly azureADOnlyAuthentication?: boolean | undefined;
	readonly login?: string | undefined;
	readonly principalType?: ("Application" | "Group" | "User") | undefined;
	readonly sid?: string | undefined;
	readonly tenantId?: string | undefined;
}
export interface ManagedInstanceKeyProperties {
	readonly autoRotationEnabled?: boolean | undefined;
	readonly creationDate?: string | undefined;
	readonly serverKeyType: "AzureKeyVault" | "ServiceManaged";
	readonly thumbprint?: string | undefined;
	readonly uri?: string | undefined;
}
export interface ManagedInstanceLongTermRetentionBackupProperties {
	readonly backupExpirationTime?: string | undefined;
	readonly backupStorageRedundancy?: ("Geo" | "GeoZone" | "Local" | "Zone") | undefined;
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
	readonly stepsList?: UpsertManagedServerOperationStepWithEstimatesAndDuration[] | undefined;
	readonly totalSteps?: string | undefined;
}
export interface ManagedInstancePairInfo {
	readonly partnerManagedInstanceId?: string | undefined;
	readonly primaryManagedInstanceId?: string | undefined;
}
export interface ManagedInstancePecProperty {
	readonly id?: string | undefined;
	readonly properties?: ManagedInstancePrivateEndpointConnectionProperties | undefined;
}
export interface ManagedInstancePrivateEndpointConnectionProperties {
	readonly privateEndpoint?: ManagedInstancePrivateEndpointProperty | undefined;
	readonly privateLinkServiceConnectionState?: ManagedInstancePrivateLinkServiceConnectionStateProperty | undefined;
	readonly provisioningState?: string | undefined;
}
export interface ManagedInstancePrivateEndpointProperty {
	readonly id?: string | undefined;
}
export interface ManagedInstancePrivateLinkProperties {
	readonly groupId?: string | undefined;
	readonly requiredMembers?: string[] | undefined;
	readonly requiredZoneNames?: string[] | undefined;
}
export interface ManagedInstancePrivateLinkServiceConnectionStateProperty {
	readonly actionsRequired?: string | undefined;
	readonly description: string;
	readonly status: string;
}
export interface ManagedInstanceProperties {
	readonly administratorLogin?: string | undefined;
	readonly administratorLoginPassword?: string | undefined;
	readonly administrators?: ManagedInstanceExternalAdministrator | undefined;
	readonly collation?: string | undefined;
	readonly currentBackupStorageRedundancy?: ("Geo" | "GeoZone" | "Local" | "Zone") | undefined;
	readonly dnsZone?: string | undefined;
	readonly dnsZonePartner?: string | undefined;
	readonly fullyQualifiedDomainName?: string | undefined;
	readonly instancePoolId?: string | undefined;
	readonly keyId?: string | undefined;
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
export interface ManagedServerDnsAliasProperties {
	readonly azureDnsRecord?: string | undefined;
	readonly publicAzureDnsRecord?: string | undefined;
}
export interface ManagedTransparentDataEncryptionProperties {
	readonly state: "Disabled";
}
export interface NetworkIsolationSettings {
	readonly sqlServerResourceId?: string | undefined;
	readonly storageAccountResourceId?: string | undefined;
}
export interface OutboundFirewallRuleProperties {
	readonly provisioningState?: string | undefined;
}
export interface PartnerInfo {
	readonly id: string;
	readonly location?: string | undefined;
	readonly replicationRole?: ("Primary" | "Secondary") | undefined;
}
export interface PartnerRegionInfo {
	readonly location?: string | undefined;
	readonly replicationRole?: ("Primary" | "Secondary") | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly groupIds?: string[] | undefined;
	readonly privateEndpoint?: PrivateEndpointProperty | undefined;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateProperty | undefined;
	readonly provisioningState?: ("Approving" | "Dropping" | "Failed" | "Ready" | "Rejecting") | undefined;
}
export interface PrivateEndpointProperty {
	readonly id?: string | undefined;
}
export interface PrivateLinkResourceProperties {
	readonly groupId?: string | undefined;
	readonly requiredMembers?: string[] | undefined;
	readonly requiredZoneNames?: string[] | undefined;
}
export interface PrivateLinkServiceConnectionStateProperty {
	readonly actionsRequired?: "None" | undefined;
	readonly description: string;
	readonly status: "Approved" | "Disconnected" | "Pending" | "Rejected";
}
export interface QueryProperties {
	readonly queryText?: string | undefined;
}
export interface RecommendedAction {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: RecommendedActionProperties | undefined;
	readonly type?: string | undefined;
}
export interface RecommendedActionErrorInfo {
	readonly errorCode?: string | undefined;
	readonly isRetryable?: "No" | undefined;
}
export interface RecommendedActionImpactRecord {
	readonly absoluteValue?: number | undefined;
	readonly changeValueAbsolute?: number | undefined;
	readonly changeValueRelative?: number | undefined;
	readonly dimensionName?: string | undefined;
	readonly unit?: string | undefined;
}
export interface RecommendedActionImplementationInfo {
	readonly method?: "AzurePowerShell" | undefined;
	readonly script?: string | undefined;
}
export interface RecommendedActionMetricInfo {
	readonly metricName?: string | undefined;
	readonly startTime?: string | undefined;
	readonly timeGrain?: string | undefined;
	readonly unit?: string | undefined;
	readonly value?: number | undefined;
}
export interface RecommendedActionProperties {
	readonly details?: RecommendedActionPropertiesDetails | undefined;
	readonly errorDetails?: RecommendedActionErrorInfo | undefined;
	readonly estimatedImpact?: RecommendedActionImpactRecord[] | undefined;
	readonly executeActionDuration?: string | undefined;
	readonly executeActionInitiatedBy?: "System" | undefined;
	readonly executeActionInitiatedTime?: string | undefined;
	readonly executeActionStartTime?: string | undefined;
	readonly implementationDetails?: RecommendedActionImplementationInfo | undefined;
	readonly isArchivedAction?: boolean | undefined;
	readonly isExecutableAction?: boolean | undefined;
	readonly isRevertableAction?: boolean | undefined;
	readonly lastRefresh?: string | undefined;
	readonly linkedObjects?: string[] | undefined;
	readonly observedImpact?: RecommendedActionImpactRecord[] | undefined;
	readonly recommendationReason?: string | undefined;
	readonly revertActionDuration?: string | undefined;
	readonly revertActionInitiatedBy?: "System" | undefined;
	readonly revertActionInitiatedTime?: string | undefined;
	readonly revertActionStartTime?: string | undefined;
	readonly score?: number | undefined;
	readonly state: RecommendedActionStateInfo;
	readonly timeSeries?: RecommendedActionMetricInfo[] | undefined;
	readonly validSince?: string | undefined;
}
export interface RecommendedActionPropertiesDetails {
	readonly "[ key: string ]"?: any | undefined;
}
export interface RecommendedActionStateInfo {
	readonly actionInitiatedBy?: "System" | undefined;
	readonly currentValue:
		| "Active"
		| "Error"
		| "Executing"
		| "Expired"
		| "Ignored"
		| "Monitoring"
		| "Pending"
		| "PendingRevert"
		| "Resolved"
		| "RevertCancelled"
		| "Reverted"
		| "Reverting"
		| "Success"
		| "Verifying";
	readonly lastModified?: string | undefined;
}
export interface RecoverableDatabaseProperties {
	readonly edition?: string | undefined;
	readonly elasticPoolName?: string | undefined;
	readonly lastAvailableBackupDate?: string | undefined;
	readonly serviceLevelObjective?: string | undefined;
}
export interface RecoverableManagedDatabaseProperties {
	readonly lastAvailableBackupDate?: string | undefined;
}
export interface ReplicationLinkProperties {
	readonly isTerminationAllowed?: boolean | undefined;
	readonly linkType?: ("GEO" | "NAMED" | "STANDBY") | undefined;
	readonly partnerDatabase?: string | undefined;
	readonly partnerLocation?: string | undefined;
	readonly partnerRole?: ("Copy" | "NonReadableSecondary" | "Primary" | "Secondary") | undefined;
	readonly partnerServer?: string | undefined;
	readonly percentComplete?: number | undefined;
	readonly replicationMode?: string | undefined;
	readonly replicationState?: ("CATCH_UP" | "PENDING" | "SEEDING" | "SUSPENDED") | undefined;
	readonly role?: ("Copy" | "NonReadableSecondary" | "Primary" | "Secondary") | undefined;
	readonly startTime?: string | undefined;
}
export interface ResourceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned" | "SystemAssigned,UserAssigned" | "UserAssigned") | undefined;
	readonly userAssignedIdentities?: ResourceIdentityUserAssignedIdentities | undefined;
}
export interface ResourceIdentityUserAssignedIdentities {
	readonly "[ key: string ]"?: UserIdentity | undefined;
}
export interface RestorableDroppedDatabaseProperties {
	readonly backupStorageRedundancy?: ("Geo" | "GeoZone" | "Local" | "Zone") | undefined;
	readonly creationDate?: string | undefined;
	readonly databaseName?: string | undefined;
	readonly deletionDate?: string | undefined;
	readonly earliestRestoreDate?: string | undefined;
	readonly maxSizeBytes?: number | undefined;
}
export interface RestorableDroppedDatabaseTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface RestorableDroppedManagedDatabaseProperties {
	readonly creationDate?: string | undefined;
	readonly databaseName?: string | undefined;
	readonly deletionDate?: string | undefined;
	readonly earliestRestoreDate?: string | undefined;
}
export interface RestorePointProperties {
	readonly earliestRestoreDate?: string | undefined;
	readonly restorePointCreationDate?: string | undefined;
	readonly restorePointLabel?: string | undefined;
	readonly restorePointType?: "CONTINUOUS" | undefined;
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
export interface SecurityAlertsPolicyProperties {
	readonly creationTime?: string | undefined;
	readonly disabledAlerts?: string[] | undefined;
	readonly emailAccountAdmins?: boolean | undefined;
	readonly emailAddresses?: string[] | undefined;
	readonly retentionDays?: number | undefined;
	readonly state: "Disabled";
	readonly storageAccountAccessKey?: string | undefined;
	readonly storageEndpoint?: string | undefined;
}
export interface SensitivityLabelProperties {
	readonly columnName?: string | undefined;
	readonly informationType?: string | undefined;
	readonly informationTypeId?: string | undefined;
	readonly isDisabled?: boolean | undefined;
	readonly labelId?: string | undefined;
	readonly labelName?: string | undefined;
	readonly rank?: ("Critical" | "High" | "Low" | "Medium") | undefined;
	readonly schemaName?: string | undefined;
	readonly tableName?: string | undefined;
}
export interface ServerBlobAuditingPolicyProperties {
	readonly auditActionsAndGroups?: string[] | undefined;
}
export interface ServerConnectionPolicyProperties {
	readonly connectionType: "Default" | "Proxy" | "Redirect";
}
export interface ServerDevOpsAuditSettingsProperties {
	readonly isAzureMonitorTargetEnabled?: boolean | undefined;
}
export interface ServerDnsAliasProperties {
	readonly azureDnsRecord?: string | undefined;
}
export interface ServerExternalAdministrator {
	readonly administratorType?: "ActiveDirectory" | undefined;
	readonly azureADOnlyAuthentication?: boolean | undefined;
	readonly login?: string | undefined;
	readonly principalType?: ("Application" | "Group" | "User") | undefined;
	readonly sid?: string | undefined;
	readonly tenantId?: string | undefined;
}
export interface ServerFirewallRuleProperties {
	readonly endIpAddress?: string | undefined;
	readonly startIpAddress?: string | undefined;
}
export interface ServerInfo {
	readonly serverId: string;
}
export interface ServerKeyProperties {
	readonly autoRotationEnabled?: boolean | undefined;
	readonly creationDate?: string | undefined;
	readonly serverKeyType: "AzureKeyVault" | "ServiceManaged";
	readonly subregion?: string | undefined;
	readonly thumbprint?: string | undefined;
	readonly uri?: string | undefined;
}
export interface ServerPrivateEndpointConnection {
	readonly id?: string | undefined;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
}
export interface ServerProperties {
	readonly administratorLogin?: string | undefined;
	readonly administratorLoginPassword?: string | undefined;
	readonly administrators?: ServerExternalAdministrator | undefined;
	readonly federatedClientId?: string | undefined;
	readonly fullyQualifiedDomainName?: string | undefined;
	readonly keyId?: string | undefined;
	readonly minimalTlsVersion?: string | undefined;
	readonly primaryUserAssignedIdentityId?: string | undefined;
	readonly privateEndpointConnections?: ServerPrivateEndpointConnection[] | undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
	readonly restrictOutboundNetworkAccess?: ("Disabled" | "Enabled") | undefined;
	readonly state?: string | undefined;
	readonly version?: string | undefined;
	readonly workspaceFeature?: ("Connected" | "Disconnected") | undefined;
}
export interface ServerTrustCertificateProperties {
	readonly certificateName?: string | undefined;
	readonly publicBlob?: string | undefined;
	readonly thumbprint?: string | undefined;
}
export interface ServerTrustGroupProperties {
	readonly groupMembers: ServerInfo[];
	readonly trustScopes: "GlobalTransactions" | "ServiceBroker"[];
}
export interface ServerVulnerabilityAssessmentProperties {
	readonly recurringScans?: VulnerabilityAssessmentRecurringScansProperties | undefined;
	readonly storageAccountAccessKey?: string | undefined;
	readonly storageContainerPath: string;
	readonly storageContainerSasKey?: string | undefined;
}
export interface ServicePrincipal {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned") | undefined;
}
export interface Sku {
	readonly capacity?: number | undefined;
	readonly family?: string | undefined;
	readonly name: string;
	readonly size?: string | undefined;
	readonly tier?: string | undefined;
}
export interface SqlAgentConfigurationProperties {
	readonly state?: ("Disabled" | "Enabled") | undefined;
}
export interface SubscriptionUsageProperties {
	readonly currentValue?: number | undefined;
	readonly displayName?: string | undefined;
	readonly limit?: number | undefined;
	readonly unit?: string | undefined;
}
export interface SyncAgentProperties {
	readonly expiryTime?: string | undefined;
	readonly isUpToDate?: boolean | undefined;
	readonly lastAliveTime?: string | undefined;
	readonly name?: string | undefined;
	readonly state?: ("NeverConnected" | "Offline" | "Online") | undefined;
	readonly syncDatabaseId?: string | undefined;
	readonly version?: string | undefined;
}
export interface SyncGroupProperties {
	readonly conflictLoggingRetentionInDays?: number | undefined;
	readonly conflictResolutionPolicy?: ("HubWin" | "MemberWin") | undefined;
	readonly enableConflictLogging?: boolean | undefined;
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
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TimeZoneProperties {
	readonly displayName?: string | undefined;
	readonly timeZoneId?: string | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface TransparentDataEncryptionProperties {
	readonly state: "Disabled";
}
export interface UpsertManagedServerOperationParameters {
	readonly family?: string | undefined;
	readonly storageSizeInGB?: number | undefined;
	readonly tier?: string | undefined;
	readonly vCores?: number | undefined;
}
export interface UpsertManagedServerOperationStepWithEstimatesAndDuration {
	readonly name?: string | undefined;
	readonly order?: number | undefined;
	readonly status?: ("Canceled" | "Completed" | "Failed" | "InProgress" | "NotStarted" | "SlowedDown") | undefined;
	readonly stepEndTime?: string | undefined;
	readonly stepStartTime?: string | undefined;
	readonly timeElapsed?: string | undefined;
}
export interface UserIdentity {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export interface VirtualClusterProperties {
	readonly childResources?: string[] | undefined;
	readonly family?: string | undefined;
	readonly maintenanceConfigurationId?: string | undefined;
	readonly subnetId?: string | undefined;
}
export interface VirtualNetworkRuleProperties {
	readonly ignoreMissingVnetServiceEndpoint?: boolean | undefined;
	readonly state?: ("Deleting" | "Failed" | "InProgress" | "Initializing" | "Ready" | "Unknown") | undefined;
	readonly virtualNetworkSubnetId: string;
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
	instancePools: instancePools,
	"locations/deletedServers": locations_deletedServers,
	"locations/instanceFailoverGroups": locations_instanceFailoverGroups,
	"locations/longTermRetentionManagedInstances/longTermRetentionDatabases/longTermRetentionManagedInstanceBackups":
		locations_longTermRetentionManagedInstances_longTermRetentionDatabases_longTermRetentionManagedInstanceBackups,
	"locations/longTermRetentionServers/longTermRetentionDatabases/longTermRetentionBackups":
		locations_longTermRetentionServers_longTermRetentionDatabases_longTermRetentionBackups,
	"locations/serverTrustGroups": locations_serverTrustGroups,
	"locations/timeZones": locations_timeZones,
	"locations/usages": locations_usages,
	managedInstances: managedInstances,
	"managedInstances/administrators": managedInstances_administrators,
	"managedInstances/azureADOnlyAuthentications": managedInstances_azureADOnlyAuthentications,
	"managedInstances/databases": managedInstances_databases,
	"managedInstances/databases/backupLongTermRetentionPolicies":
		managedInstances_databases_backupLongTermRetentionPolicies,
	"managedInstances/databases/backupShortTermRetentionPolicies":
		managedInstances_databases_backupShortTermRetentionPolicies,
	"managedInstances/databases/queries": managedInstances_databases_queries,
	"managedInstances/databases/restoreDetails": managedInstances_databases_restoreDetails,
	"managedInstances/databases/schemas": managedInstances_databases_schemas,
	"managedInstances/databases/schemas/tables": managedInstances_databases_schemas_tables,
	"managedInstances/databases/schemas/tables/columns": managedInstances_databases_schemas_tables_columns,
	"managedInstances/databases/schemas/tables/columns/sensitivityLabels":
		managedInstances_databases_schemas_tables_columns_sensitivityLabels,
	"managedInstances/databases/securityAlertPolicies": managedInstances_databases_securityAlertPolicies,
	"managedInstances/databases/transparentDataEncryption": managedInstances_databases_transparentDataEncryption,
	"managedInstances/databases/vulnerabilityAssessments": managedInstances_databases_vulnerabilityAssessments,
	"managedInstances/databases/vulnerabilityAssessments/rules/baselines":
		managedInstances_databases_vulnerabilityAssessments_rules_baselines,
	"managedInstances/databases/vulnerabilityAssessments/scans":
		managedInstances_databases_vulnerabilityAssessments_scans,
	"managedInstances/distributedAvailabilityGroups": managedInstances_distributedAvailabilityGroups,
	"managedInstances/dnsAliases": managedInstances_dnsAliases,
	"managedInstances/encryptionProtector": managedInstances_encryptionProtector,
	"managedInstances/endpointCertificates": managedInstances_endpointCertificates,
	"managedInstances/keys": managedInstances_keys,
	"managedInstances/operations": managedInstances_operations,
	"managedInstances/privateEndpointConnections": managedInstances_privateEndpointConnections,
	"managedInstances/privateLinkResources": managedInstances_privateLinkResources,
	"managedInstances/recoverableDatabases": managedInstances_recoverableDatabases,
	"managedInstances/restorableDroppedDatabases": managedInstances_restorableDroppedDatabases,
	"managedInstances/restorableDroppedDatabases/backupShortTermRetentionPolicies":
		managedInstances_restorableDroppedDatabases_backupShortTermRetentionPolicies,
	"managedInstances/securityAlertPolicies": managedInstances_securityAlertPolicies,
	"managedInstances/serverTrustCertificates": managedInstances_serverTrustCertificates,
	"managedInstances/sqlAgent": managedInstances_sqlAgent,
	"managedInstances/vulnerabilityAssessments": managedInstances_vulnerabilityAssessments,
	servers: servers,
	"servers/administrators": servers_administrators,
	"servers/advancedThreatProtectionSettings": servers_advancedThreatProtectionSettings,
	"servers/advisors": servers_advisors,
	"servers/auditingSettings": servers_auditingSettings,
	"servers/automaticTuning": servers_automaticTuning,
	"servers/azureADOnlyAuthentications": servers_azureADOnlyAuthentications,
	"servers/connectionPolicies": servers_connectionPolicies,
	"servers/databases": servers_databases,
	"servers/databases/advancedThreatProtectionSettings": servers_databases_advancedThreatProtectionSettings,
	"servers/databases/advisors": servers_databases_advisors,
	"servers/databases/advisors/recommendedActions": servers_databases_advisors_recommendedActions,
	"servers/databases/auditingSettings": servers_databases_auditingSettings,
	"servers/databases/automaticTuning": servers_databases_automaticTuning,
	"servers/databases/backupLongTermRetentionPolicies": servers_databases_backupLongTermRetentionPolicies,
	"servers/databases/backupShortTermRetentionPolicies": servers_databases_backupShortTermRetentionPolicies,
	"servers/databases/dataMaskingPolicies": servers_databases_dataMaskingPolicies,
	"servers/databases/dataMaskingPolicies/rules": servers_databases_dataMaskingPolicies_rules,
	"servers/databases/dataWarehouseUserActivities": servers_databases_dataWarehouseUserActivities,
	"servers/databases/extendedAuditingSettings": servers_databases_extendedAuditingSettings,
	"servers/databases/extensions": servers_databases_extensions,
	"servers/databases/geoBackupPolicies": servers_databases_geoBackupPolicies,
	"servers/databases/ledgerDigestUploads": servers_databases_ledgerDigestUploads,
	"servers/databases/replicationLinks": servers_databases_replicationLinks,
	"servers/databases/restorePoints": servers_databases_restorePoints,
	"servers/databases/schemas": servers_databases_schemas,
	"servers/databases/schemas/tables": servers_databases_schemas_tables,
	"servers/databases/schemas/tables/columns": servers_databases_schemas_tables_columns,
	"servers/databases/schemas/tables/columns/sensitivityLabels":
		servers_databases_schemas_tables_columns_sensitivityLabels,
	"servers/databases/securityAlertPolicies": servers_databases_securityAlertPolicies,
	"servers/databases/syncGroups": servers_databases_syncGroups,
	"servers/databases/syncGroups/syncMembers": servers_databases_syncGroups_syncMembers,
	"servers/databases/transparentDataEncryption": servers_databases_transparentDataEncryption,
	"servers/databases/vulnerabilityAssessments": servers_databases_vulnerabilityAssessments,
	"servers/databases/vulnerabilityAssessments/rules/baselines":
		servers_databases_vulnerabilityAssessments_rules_baselines,
	"servers/databases/vulnerabilityAssessments/scans": servers_databases_vulnerabilityAssessments_scans,
	"servers/databases/workloadGroups": servers_databases_workloadGroups,
	"servers/databases/workloadGroups/workloadClassifiers": servers_databases_workloadGroups_workloadClassifiers,
	"servers/devOpsAuditingSettings": servers_devOpsAuditingSettings,
	"servers/dnsAliases": servers_dnsAliases,
	"servers/elasticPools": servers_elasticPools,
	"servers/encryptionProtector": servers_encryptionProtector,
	"servers/extendedAuditingSettings": servers_extendedAuditingSettings,
	"servers/failoverGroups": servers_failoverGroups,
	"servers/firewallRules": servers_firewallRules,
	"servers/ipv6FirewallRules": servers_ipv6FirewallRules,
	"servers/jobAgents": servers_jobAgents,
	"servers/jobAgents/credentials": servers_jobAgents_credentials,
	"servers/jobAgents/jobs": servers_jobAgents_jobs,
	"servers/jobAgents/jobs/executions": servers_jobAgents_jobs_executions,
	"servers/jobAgents/jobs/executions/steps": servers_jobAgents_jobs_executions_steps,
	"servers/jobAgents/jobs/executions/steps/targets": servers_jobAgents_jobs_executions_steps_targets,
	"servers/jobAgents/jobs/steps": servers_jobAgents_jobs_steps,
	"servers/jobAgents/jobs/versions": servers_jobAgents_jobs_versions,
	"servers/jobAgents/jobs/versions/steps": servers_jobAgents_jobs_versions_steps,
	"servers/jobAgents/targetGroups": servers_jobAgents_targetGroups,
	"servers/keys": servers_keys,
	"servers/outboundFirewallRules": servers_outboundFirewallRules,
	"servers/privateEndpointConnections": servers_privateEndpointConnections,
	"servers/privateLinkResources": servers_privateLinkResources,
	"servers/recoverableDatabases": servers_recoverableDatabases,
	"servers/restorableDroppedDatabases": servers_restorableDroppedDatabases,
	"servers/securityAlertPolicies": servers_securityAlertPolicies,
	"servers/syncAgents": servers_syncAgents,
	"servers/virtualNetworkRules": servers_virtualNetworkRules,
	"servers/vulnerabilityAssessments": servers_vulnerabilityAssessments,
	virtualClusters: virtualClusters,
};
