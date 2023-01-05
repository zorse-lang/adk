import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

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
			"2017-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2017-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/locations/longTermRetentionServers/longTermRetentionDatabases/longTermRetentionBackups";
}
export interface locations_longTermRetentionServers_longTermRetentionDatabases_longTermRetentionBackupsComponentOutputs {
	readonly apiVersion: "2017-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/locations/longTermRetentionServers/longTermRetentionDatabases/longTermRetentionBackups";
}
export interface locations_longTermRetentionServers_longTermRetentionDatabases_longTermRetentionBackupsComponentInputs {
	readonly name: string;
	readonly properties?: LongTermRetentionBackupProperties;
}
export class managedInstances_administrators
	extends ArmResource<managedInstances_administratorsComponentInputs>
	implements managedInstances_administratorsComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_administratorsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/managedInstances/administrators", "2017-03-01-preview", options);
	}
	public readonly apiVersion: "2017-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/administrators";
}
export interface managedInstances_administratorsComponentOutputs {
	readonly apiVersion: "2017-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/administrators";
}
export interface managedInstances_administratorsComponentInputs {
	readonly name: string;
	readonly properties?: ManagedInstanceAdministratorProperties;
}
export class managedInstances_databases
	extends ArmResource<managedInstances_databasesComponentInputs>
	implements managedInstances_databasesComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_databasesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/managedInstances/databases", "2017-03-01-preview", options);
	}
	public readonly apiVersion: "2017-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/databases";
}
export interface managedInstances_databasesComponentOutputs {
	readonly apiVersion: "2017-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/databases";
}
export interface managedInstances_databasesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ManagedDatabaseProperties;
	readonly tags?: TrackedResourceTags;
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
			"2017-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2017-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/databases/backupShortTermRetentionPolicies";
}
export interface managedInstances_databases_backupShortTermRetentionPoliciesComponentOutputs {
	readonly apiVersion: "2017-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/databases/backupShortTermRetentionPolicies";
}
export interface managedInstances_databases_backupShortTermRetentionPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: ManagedBackupShortTermRetentionPolicyProperties;
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
			"2017-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2017-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/databases/securityAlertPolicies";
}
export interface managedInstances_databases_securityAlertPoliciesComponentOutputs {
	readonly apiVersion: "2017-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/databases/securityAlertPolicies";
}
export interface managedInstances_databases_securityAlertPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: SecurityAlertPolicyProperties;
}
export class managedInstances_restorableDroppedDatabases
	extends ArmResource<managedInstances_restorableDroppedDatabasesComponentInputs>
	implements managedInstances_restorableDroppedDatabasesComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_restorableDroppedDatabasesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Sql/managedInstances/restorableDroppedDatabases",
			"2017-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2017-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/restorableDroppedDatabases";
}
export interface managedInstances_restorableDroppedDatabasesComponentOutputs {
	readonly apiVersion: "2017-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/restorableDroppedDatabases";
}
export interface managedInstances_restorableDroppedDatabasesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: RestorableDroppedManagedDatabaseProperties;
	readonly tags?: TrackedResourceTags;
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
			"2017-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2017-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/restorableDroppedDatabases/backupShortTermRetentionPolicies";
}
export interface managedInstances_restorableDroppedDatabases_backupShortTermRetentionPoliciesComponentOutputs {
	readonly apiVersion: "2017-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/restorableDroppedDatabases/backupShortTermRetentionPolicies";
}
export interface managedInstances_restorableDroppedDatabases_backupShortTermRetentionPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: ManagedBackupShortTermRetentionPolicyProperties;
}
export class managedInstances_securityAlertPolicies
	extends ArmResource<managedInstances_securityAlertPoliciesComponentInputs>
	implements managedInstances_securityAlertPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstances_securityAlertPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/managedInstances/securityAlertPolicies", "2017-03-01-preview", options);
	}
	public readonly apiVersion: "2017-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances/securityAlertPolicies";
}
export interface managedInstances_securityAlertPoliciesComponentOutputs {
	readonly apiVersion: "2017-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances/securityAlertPolicies";
}
export interface managedInstances_securityAlertPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: SecurityAlertPolicyProperties;
}
export class servers_auditingSettings
	extends ArmResource<servers_auditingSettingsComponentInputs>
	implements servers_auditingSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_auditingSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/auditingSettings", "2017-03-01-preview", options);
	}
	public readonly apiVersion: "2017-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/auditingSettings";
}
export interface servers_auditingSettingsComponentOutputs {
	readonly apiVersion: "2017-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/auditingSettings";
}
export interface servers_auditingSettingsComponentInputs {
	readonly name: string;
	readonly properties?: ServerBlobAuditingPolicyProperties;
}
export class servers_automaticTuning
	extends ArmResource<servers_automaticTuningComponentInputs>
	implements servers_automaticTuningComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_automaticTuningComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/automaticTuning", "2017-03-01-preview", options);
	}
	public readonly apiVersion: "2017-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/automaticTuning";
}
export interface servers_automaticTuningComponentOutputs {
	readonly apiVersion: "2017-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/automaticTuning";
}
export interface servers_automaticTuningComponentInputs {
	readonly name: string;
	readonly properties?: AutomaticTuningServerProperties;
}
export class servers_databases
	extends ArmResource<servers_databasesComponentInputs>
	implements servers_databasesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databasesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases", "2017-03-01-preview", options);
	}
	public readonly apiVersion: "2017-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases";
}
export interface servers_databasesComponentOutputs {
	readonly apiVersion: "2017-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases";
}
export interface servers_databasesComponentInputs {
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: DatabaseProperties;
	readonly sku?: Sku;
	readonly tags?: TrackedResourceTags;
}
export class servers_databases_auditingSettings
	extends ArmResource<servers_databases_auditingSettingsComponentInputs>
	implements servers_databases_auditingSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_auditingSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/auditingSettings", "2017-03-01-preview", options);
	}
	public readonly apiVersion: "2017-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/auditingSettings";
}
export interface servers_databases_auditingSettingsComponentOutputs {
	readonly apiVersion: "2017-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/auditingSettings";
}
export interface servers_databases_auditingSettingsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: DatabaseBlobAuditingPolicyProperties;
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
			"2017-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2017-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/backupLongTermRetentionPolicies";
}
export interface servers_databases_backupLongTermRetentionPoliciesComponentOutputs {
	readonly apiVersion: "2017-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/backupLongTermRetentionPolicies";
}
export interface servers_databases_backupLongTermRetentionPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: LongTermRetentionPolicyProperties;
}
export class servers_databases_dataWarehouseUserActivities
	extends ArmResource<servers_databases_dataWarehouseUserActivitiesComponentInputs>
	implements servers_databases_dataWarehouseUserActivitiesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_dataWarehouseUserActivitiesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Sql/servers/databases/dataWarehouseUserActivities",
			"2017-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2017-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/dataWarehouseUserActivities";
}
export interface servers_databases_dataWarehouseUserActivitiesComponentOutputs {
	readonly apiVersion: "2017-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/dataWarehouseUserActivities";
}
export interface servers_databases_dataWarehouseUserActivitiesComponentInputs {
	readonly name: string;
	readonly properties?: DataWarehouseUserActivitiesProperties;
}
export class servers_databases_extendedAuditingSettings
	extends ArmResource<servers_databases_extendedAuditingSettingsComponentInputs>
	implements servers_databases_extendedAuditingSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_extendedAuditingSettingsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Sql/servers/databases/extendedAuditingSettings",
			"2017-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2017-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/extendedAuditingSettings";
}
export interface servers_databases_extendedAuditingSettingsComponentOutputs {
	readonly apiVersion: "2017-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/extendedAuditingSettings";
}
export interface servers_databases_extendedAuditingSettingsComponentInputs {
	readonly name: string;
	readonly properties?: ExtendedDatabaseBlobAuditingPolicyProperties;
}
export class servers_databases_restorePoints
	extends ArmResource<servers_databases_restorePointsComponentInputs>
	implements servers_databases_restorePointsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_restorePointsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/restorePoints", "2017-03-01-preview", options);
	}
	public readonly apiVersion: "2017-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/restorePoints";
}
export interface servers_databases_restorePointsComponentOutputs {
	readonly apiVersion: "2017-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/restorePoints";
}
export interface servers_databases_restorePointsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: RestorePointProperties;
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
			"2017-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2017-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/schemas/tables/columns/sensitivityLabels";
}
export interface servers_databases_schemas_tables_columns_sensitivityLabelsComponentOutputs {
	readonly apiVersion: "2017-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/schemas/tables/columns/sensitivityLabels";
}
export interface servers_databases_schemas_tables_columns_sensitivityLabelsComponentInputs {
	readonly name: string;
	readonly properties?: SensitivityLabelProperties;
}
export class servers_databases_vulnerabilityAssessments
	extends ArmResource<servers_databases_vulnerabilityAssessmentsComponentInputs>
	implements servers_databases_vulnerabilityAssessmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_vulnerabilityAssessmentsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Sql/servers/databases/vulnerabilityAssessments",
			"2017-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2017-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/vulnerabilityAssessments";
}
export interface servers_databases_vulnerabilityAssessmentsComponentOutputs {
	readonly apiVersion: "2017-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/vulnerabilityAssessments";
}
export interface servers_databases_vulnerabilityAssessmentsComponentInputs {
	readonly name: string;
	readonly properties?: DatabaseVulnerabilityAssessmentProperties;
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
			"2017-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2017-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/vulnerabilityAssessments/rules/baselines";
}
export interface servers_databases_vulnerabilityAssessments_rules_baselinesComponentOutputs {
	readonly apiVersion: "2017-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/vulnerabilityAssessments/rules/baselines";
}
export interface servers_databases_vulnerabilityAssessments_rules_baselinesComponentInputs {
	readonly name: string;
	readonly properties?: DatabaseVulnerabilityAssessmentRuleBaselineProperties;
}
export class servers_dnsAliases
	extends ArmResource<servers_dnsAliasesComponentInputs>
	implements servers_dnsAliasesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_dnsAliasesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/dnsAliases", "2017-03-01-preview", options);
	}
	public readonly apiVersion: "2017-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/dnsAliases";
}
export interface servers_dnsAliasesComponentOutputs {
	readonly apiVersion: "2017-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/dnsAliases";
}
export interface servers_dnsAliasesComponentInputs {
	readonly name: string;
	readonly properties?: ServerDnsAliasProperties;
}
export class servers_extendedAuditingSettings
	extends ArmResource<servers_extendedAuditingSettingsComponentInputs>
	implements servers_extendedAuditingSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_extendedAuditingSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/extendedAuditingSettings", "2017-03-01-preview", options);
	}
	public readonly apiVersion: "2017-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/extendedAuditingSettings";
}
export interface servers_extendedAuditingSettingsComponentOutputs {
	readonly apiVersion: "2017-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/extendedAuditingSettings";
}
export interface servers_extendedAuditingSettingsComponentInputs {
	readonly name: string;
	readonly properties?: ExtendedServerBlobAuditingPolicyProperties;
}
export class servers_jobAgents
	extends ArmResource<servers_jobAgentsComponentInputs>
	implements servers_jobAgentsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_jobAgentsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/jobAgents", "2017-03-01-preview", options);
	}
	public readonly apiVersion: "2017-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/jobAgents";
}
export interface servers_jobAgentsComponentOutputs {
	readonly apiVersion: "2017-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/jobAgents";
}
export interface servers_jobAgentsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: JobAgentProperties;
	readonly sku?: Sku;
	readonly tags?: TrackedResourceTags;
}
export class servers_jobAgents_credentials
	extends ArmResource<servers_jobAgents_credentialsComponentInputs>
	implements servers_jobAgents_credentialsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_jobAgents_credentialsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/jobAgents/credentials", "2017-03-01-preview", options);
	}
	public readonly apiVersion: "2017-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/jobAgents/credentials";
}
export interface servers_jobAgents_credentialsComponentOutputs {
	readonly apiVersion: "2017-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/jobAgents/credentials";
}
export interface servers_jobAgents_credentialsComponentInputs {
	readonly name: string;
	readonly properties?: JobCredentialProperties;
}
export class servers_jobAgents_jobs
	extends ArmResource<servers_jobAgents_jobsComponentInputs>
	implements servers_jobAgents_jobsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_jobAgents_jobsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/jobAgents/jobs", "2017-03-01-preview", options);
	}
	public readonly apiVersion: "2017-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/jobAgents/jobs";
}
export interface servers_jobAgents_jobsComponentOutputs {
	readonly apiVersion: "2017-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/jobAgents/jobs";
}
export interface servers_jobAgents_jobsComponentInputs {
	readonly name: string;
	readonly properties?: JobProperties;
}
export class servers_jobAgents_jobs_executions
	extends ArmResource<servers_jobAgents_jobs_executionsComponentInputs>
	implements servers_jobAgents_jobs_executionsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_jobAgents_jobs_executionsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/jobAgents/jobs/executions", "2017-03-01-preview", options);
	}
	public readonly apiVersion: "2017-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/jobAgents/jobs/executions";
}
export interface servers_jobAgents_jobs_executionsComponentOutputs {
	readonly apiVersion: "2017-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/jobAgents/jobs/executions";
}
export interface servers_jobAgents_jobs_executionsComponentInputs {
	readonly name: string;
	readonly properties?: JobExecutionProperties;
}
export class servers_jobAgents_jobs_executions_steps
	extends ArmResource<servers_jobAgents_jobs_executions_stepsComponentInputs>
	implements servers_jobAgents_jobs_executions_stepsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_jobAgents_jobs_executions_stepsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/jobAgents/jobs/executions/steps", "2017-03-01-preview", options);
	}
	public readonly apiVersion: "2017-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/jobAgents/jobs/executions/steps";
}
export interface servers_jobAgents_jobs_executions_stepsComponentOutputs {
	readonly apiVersion: "2017-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/jobAgents/jobs/executions/steps";
}
export interface servers_jobAgents_jobs_executions_stepsComponentInputs {
	readonly name: string;
	readonly properties?: JobExecutionProperties;
}
export class servers_jobAgents_jobs_executions_steps_targets
	extends ArmResource<servers_jobAgents_jobs_executions_steps_targetsComponentInputs>
	implements servers_jobAgents_jobs_executions_steps_targetsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_jobAgents_jobs_executions_steps_targetsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Sql/servers/jobAgents/jobs/executions/steps/targets",
			"2017-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2017-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/jobAgents/jobs/executions/steps/targets";
}
export interface servers_jobAgents_jobs_executions_steps_targetsComponentOutputs {
	readonly apiVersion: "2017-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/jobAgents/jobs/executions/steps/targets";
}
export interface servers_jobAgents_jobs_executions_steps_targetsComponentInputs {
	readonly name: string;
	readonly properties?: JobExecutionProperties;
}
export class servers_jobAgents_jobs_steps
	extends ArmResource<servers_jobAgents_jobs_stepsComponentInputs>
	implements servers_jobAgents_jobs_stepsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_jobAgents_jobs_stepsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/jobAgents/jobs/steps", "2017-03-01-preview", options);
	}
	public readonly apiVersion: "2017-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/jobAgents/jobs/steps";
}
export interface servers_jobAgents_jobs_stepsComponentOutputs {
	readonly apiVersion: "2017-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/jobAgents/jobs/steps";
}
export interface servers_jobAgents_jobs_stepsComponentInputs {
	readonly name: string;
	readonly properties?: JobStepProperties;
}
export class servers_jobAgents_jobs_versions
	extends ArmResource<servers_jobAgents_jobs_versionsComponentInputs>
	implements servers_jobAgents_jobs_versionsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_jobAgents_jobs_versionsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/jobAgents/jobs/versions", "2017-03-01-preview", options);
	}
	public readonly apiVersion: "2017-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/jobAgents/jobs/versions";
}
export interface servers_jobAgents_jobs_versionsComponentOutputs {
	readonly apiVersion: "2017-03-01-preview";
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
		super(entity, options.name, "Microsoft.Sql/servers/jobAgents/jobs/versions/steps", "2017-03-01-preview", options);
	}
	public readonly apiVersion: "2017-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/jobAgents/jobs/versions/steps";
}
export interface servers_jobAgents_jobs_versions_stepsComponentOutputs {
	readonly apiVersion: "2017-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/jobAgents/jobs/versions/steps";
}
export interface servers_jobAgents_jobs_versions_stepsComponentInputs {
	readonly name: string;
	readonly properties?: JobStepProperties;
}
export class servers_jobAgents_targetGroups
	extends ArmResource<servers_jobAgents_targetGroupsComponentInputs>
	implements servers_jobAgents_targetGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_jobAgents_targetGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/jobAgents/targetGroups", "2017-03-01-preview", options);
	}
	public readonly apiVersion: "2017-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/jobAgents/targetGroups";
}
export interface servers_jobAgents_targetGroupsComponentOutputs {
	readonly apiVersion: "2017-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/jobAgents/targetGroups";
}
export interface servers_jobAgents_targetGroupsComponentInputs {
	readonly name: string;
	readonly properties?: JobTargetGroupProperties;
}
export class servers_securityAlertPolicies
	extends ArmResource<servers_securityAlertPoliciesComponentInputs>
	implements servers_securityAlertPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_securityAlertPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/securityAlertPolicies", "2017-03-01-preview", options);
	}
	public readonly apiVersion: "2017-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/securityAlertPolicies";
}
export interface servers_securityAlertPoliciesComponentOutputs {
	readonly apiVersion: "2017-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/securityAlertPolicies";
}
export interface servers_securityAlertPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: SecurityAlertPolicyProperties;
}
export interface AutomaticTuningServerOptions {
	readonly actualState?: "Off";
	readonly desiredState?: "Default" | "Off";
	readonly reasonCode?: number;
	readonly reasonDesc?: "AutoConfigured" | "Default";
}
export interface AutomaticTuningServerProperties {
	readonly actualState?: "Auto" | "Custom";
	readonly desiredState?: "Auto" | "Custom";
	readonly options?: AutomaticTuningServerPropertiesOptions;
}
export interface AutomaticTuningServerPropertiesOptions {
	readonly [key: string]: AutomaticTuningServerOptions;
}
export interface DatabaseBlobAuditingPolicyProperties {
	readonly auditActionsAndGroups?: string[];
}
export interface DatabaseProperties {
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
export interface DataWarehouseUserActivitiesProperties {
	readonly activeQueriesCount?: number;
}
export interface ExtendedDatabaseBlobAuditingPolicyProperties {
	readonly auditActionsAndGroups?: string[];
}
export interface ExtendedServerBlobAuditingPolicyProperties {
	readonly auditActionsAndGroups?: string[];
}
export interface JobAgentProperties {
	readonly databaseId: string;
	readonly state?: "Creating" | "Deleting" | "Disabled" | "Ready" | "Updating";
}
export interface JobCredentialProperties {
	readonly password: string;
	readonly username: string;
}
export interface JobExecutionProperties {
	readonly createTime?: string;
	readonly currentAttempts?: number;
	readonly currentAttemptStartTime?: string;
	readonly endTime?: string;
	readonly jobExecutionId?: string;
	readonly jobVersion?: number;
	readonly lastMessage?: string;
	readonly lifecycle?:
		| "Canceled"
		| "Created"
		| "Failed"
		| "InProgress"
		| "Skipped"
		| "Succeeded"
		| "SucceededWithSkipped"
		| "TimedOut"
		| "WaitingForChildJobExecutions"
		| "WaitingForRetry";
	readonly provisioningState?: "Canceled" | "Created" | "Failed" | "InProgress" | "Succeeded";
	readonly startTime?: string;
	readonly stepId?: number;
	readonly stepName?: string;
	readonly target?: JobExecutionTarget;
}
export interface JobExecutionTarget {
	readonly databaseName?: string;
	readonly serverName?: string;
	readonly type?: "SqlDatabase" | "SqlElasticPool" | "SqlServer" | "SqlShardMap" | "TargetGroup";
}
export interface JobProperties {
	readonly description?: string;
	readonly schedule?: JobSchedule;
	readonly version?: number;
}
export interface JobSchedule {
	readonly enabled?: boolean;
	readonly endTime?: string;
	readonly interval?: string;
	readonly startTime?: string;
	readonly type?: "Once";
}
export interface JobStepAction {
	readonly source?: "Inline";
	readonly type?: "TSql";
	readonly value: string;
}
export interface JobStepExecutionOptions {
	readonly initialRetryIntervalSeconds?: number;
	readonly maximumRetryIntervalSeconds?: number;
	readonly retryAttempts?: number;
	readonly retryIntervalBackoffMultiplier?: number;
	readonly timeoutSeconds?: number;
}
export interface JobStepOutput {
	readonly credential: string;
	readonly databaseName: string;
	readonly resourceGroupName?: string;
	readonly schemaName?: string;
	readonly serverName: string;
	readonly subscriptionId?: string;
	readonly tableName: string;
	readonly type?: "SqlDatabase";
}
export interface JobStepProperties {
	readonly action: JobStepAction;
	readonly credential: string;
	readonly executionOptions?: JobStepExecutionOptions;
	readonly output?: JobStepOutput;
	readonly stepId?: number;
	readonly targetGroup: string;
}
export interface JobTarget {
	readonly databaseName?: string;
	readonly elasticPoolName?: string;
	readonly membershipType?: "Exclude";
	readonly refreshCredential?: string;
	readonly serverName?: string;
	readonly shardMapName?: string;
	readonly type: "SqlDatabase" | "SqlElasticPool" | "SqlServer" | "SqlShardMap" | "TargetGroup";
}
export interface JobTargetGroupProperties {
	readonly members: JobTarget[];
}
export interface LongTermRetentionBackupProperties {
	readonly backupExpirationTime?: string;
	readonly backupTime?: string;
	readonly databaseDeletionTime?: string;
	readonly databaseName?: string;
	readonly serverCreateTime?: string;
	readonly serverName?: string;
}
export interface LongTermRetentionPolicyProperties {
	readonly monthlyRetention?: string;
	readonly weeklyRetention?: string;
	readonly weekOfYear?: number;
	readonly yearlyRetention?: string;
}
export interface ManagedBackupShortTermRetentionPolicyProperties {
	readonly retentionDays?: number;
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
export interface ManagedInstanceAdministratorProperties {
	readonly administratorType: "ActiveDirectory";
	readonly login: string;
	readonly sid: string;
	readonly tenantId?: string;
}
export interface RestorableDroppedManagedDatabaseProperties {
	readonly creationDate?: string;
	readonly databaseName?: string;
	readonly deletionDate?: string;
	readonly earliestRestoreDate?: string;
}
export interface RestorePointProperties {
	readonly earliestRestoreDate?: string;
	readonly restorePointCreationDate?: string;
	readonly restorePointLabel?: string;
	readonly restorePointType?: "CONTINUOUS";
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
export interface ServerBlobAuditingPolicyProperties {
	readonly auditActionsAndGroups?: string[];
}
export interface ServerDnsAliasProperties {
	readonly azureDnsRecord?: string;
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
export default {
	"locations/longTermRetentionServers/longTermRetentionDatabases/longTermRetentionBackups":
		locations_longTermRetentionServers_longTermRetentionDatabases_longTermRetentionBackups,
	"managedInstances/administrators": managedInstances_administrators,
	"managedInstances/databases": managedInstances_databases,
	"managedInstances/databases/backupShortTermRetentionPolicies":
		managedInstances_databases_backupShortTermRetentionPolicies,
	"managedInstances/databases/securityAlertPolicies": managedInstances_databases_securityAlertPolicies,
	"managedInstances/restorableDroppedDatabases": managedInstances_restorableDroppedDatabases,
	"managedInstances/restorableDroppedDatabases/backupShortTermRetentionPolicies":
		managedInstances_restorableDroppedDatabases_backupShortTermRetentionPolicies,
	"managedInstances/securityAlertPolicies": managedInstances_securityAlertPolicies,
	"servers/auditingSettings": servers_auditingSettings,
	"servers/automaticTuning": servers_automaticTuning,
	"servers/databases": servers_databases,
	"servers/databases/auditingSettings": servers_databases_auditingSettings,
	"servers/databases/backupLongTermRetentionPolicies": servers_databases_backupLongTermRetentionPolicies,
	"servers/databases/dataWarehouseUserActivities": servers_databases_dataWarehouseUserActivities,
	"servers/databases/extendedAuditingSettings": servers_databases_extendedAuditingSettings,
	"servers/databases/restorePoints": servers_databases_restorePoints,
	"servers/databases/schemas/tables/columns/sensitivityLabels":
		servers_databases_schemas_tables_columns_sensitivityLabels,
	"servers/databases/vulnerabilityAssessments": servers_databases_vulnerabilityAssessments,
	"servers/databases/vulnerabilityAssessments/rules/baselines":
		servers_databases_vulnerabilityAssessments_rules_baselines,
	"servers/dnsAliases": servers_dnsAliases,
	"servers/extendedAuditingSettings": servers_extendedAuditingSettings,
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
	"servers/securityAlertPolicies": servers_securityAlertPolicies,
};
