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
	readonly properties?: LongTermRetentionBackupProperties | undefined;
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
	readonly properties?: ManagedInstanceAdministratorProperties | undefined;
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
	readonly properties?: ManagedDatabaseProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: ManagedBackupShortTermRetentionPolicyProperties | undefined;
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
	readonly properties?: SecurityAlertPolicyProperties | undefined;
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
	readonly properties?: ManagedBackupShortTermRetentionPolicyProperties | undefined;
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
	readonly properties?: SecurityAlertPolicyProperties | undefined;
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
	readonly properties?: ServerBlobAuditingPolicyProperties | undefined;
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
	readonly properties?: AutomaticTuningServerProperties | undefined;
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
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: DatabaseProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: DatabaseBlobAuditingPolicyProperties | undefined;
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
	readonly properties?: LongTermRetentionPolicyProperties | undefined;
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
	readonly properties?: DataWarehouseUserActivitiesProperties | undefined;
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
	readonly properties?: ExtendedDatabaseBlobAuditingPolicyProperties | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: RestorePointProperties | undefined;
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
	readonly properties?: SensitivityLabelProperties | undefined;
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
	readonly properties?: DatabaseVulnerabilityAssessmentRuleBaselineProperties | undefined;
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
	readonly properties?: ServerDnsAliasProperties | undefined;
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
	readonly properties?: ExtendedServerBlobAuditingPolicyProperties | undefined;
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
	readonly properties?: JobAgentProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: JobCredentialProperties | undefined;
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
	readonly properties?: JobProperties | undefined;
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
	readonly properties?: JobExecutionProperties | undefined;
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
	readonly properties?: JobExecutionProperties | undefined;
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
	readonly properties?: JobExecutionProperties | undefined;
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
	readonly properties?: JobStepProperties | undefined;
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
	readonly properties?: JobStepProperties | undefined;
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
	readonly properties?: JobTargetGroupProperties | undefined;
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
	readonly properties?: SecurityAlertPolicyProperties | undefined;
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
export interface DatabaseBlobAuditingPolicyProperties {
	readonly auditActionsAndGroups?: string[] | undefined;
}
export interface DatabaseProperties {
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
export interface DataWarehouseUserActivitiesProperties {
	readonly activeQueriesCount?: number | undefined;
}
export interface ExtendedDatabaseBlobAuditingPolicyProperties {
	readonly auditActionsAndGroups?: string[] | undefined;
}
export interface ExtendedServerBlobAuditingPolicyProperties {
	readonly auditActionsAndGroups?: string[] | undefined;
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
export interface LongTermRetentionBackupProperties {
	readonly backupExpirationTime?: string | undefined;
	readonly backupTime?: string | undefined;
	readonly databaseDeletionTime?: string | undefined;
	readonly databaseName?: string | undefined;
	readonly serverCreateTime?: string | undefined;
	readonly serverName?: string | undefined;
}
export interface LongTermRetentionPolicyProperties {
	readonly monthlyRetention?: string | undefined;
	readonly weeklyRetention?: string | undefined;
	readonly weekOfYear?: number | undefined;
	readonly yearlyRetention?: string | undefined;
}
export interface ManagedBackupShortTermRetentionPolicyProperties {
	readonly retentionDays?: number | undefined;
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
export interface ManagedInstanceAdministratorProperties {
	readonly administratorType: "ActiveDirectory";
	readonly login: string;
	readonly sid: string;
	readonly tenantId?: string | undefined;
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
export interface SensitivityLabelProperties {
	readonly informationType?: string | undefined;
	readonly informationTypeId?: string | undefined;
	readonly isDisabled?: boolean | undefined;
	readonly labelId?: string | undefined;
	readonly labelName?: string | undefined;
	readonly rank?: ("Critical" | "High" | "Low" | "Medium") | undefined;
}
export interface ServerBlobAuditingPolicyProperties {
	readonly auditActionsAndGroups?: string[] | undefined;
}
export interface ServerDnsAliasProperties {
	readonly azureDnsRecord?: string | undefined;
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
