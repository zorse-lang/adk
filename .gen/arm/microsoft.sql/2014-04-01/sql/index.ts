import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class servers extends ArmResource<serversComponentInputs> implements serversComponentOutputs {
	constructor(entity: ADKEntity, options: serversComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers", "2014-04-01", options);
	}
	public readonly apiVersion: "2014-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers";
}
export interface serversComponentOutputs {
	readonly apiVersion: "2014-04-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers";
}
export interface serversComponentInputs {
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
		super(entity, options.name, "Microsoft.Sql/servers/administrators", "2014-04-01", options);
	}
	public readonly apiVersion: "2014-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/administrators";
}
export interface servers_administratorsComponentOutputs {
	readonly apiVersion: "2014-04-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/administrators";
}
export interface servers_administratorsComponentInputs {
	readonly name: string;
	readonly properties?: ServerAdministratorProperties;
}
export class servers_advisors
	extends ArmResource<servers_advisorsComponentInputs>
	implements servers_advisorsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_advisorsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/advisors", "2014-04-01", options);
	}
	public readonly apiVersion: "2014-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/advisors";
}
export interface servers_advisorsComponentOutputs {
	readonly apiVersion: "2014-04-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/advisors";
}
export interface servers_advisorsComponentInputs {
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: AdvisorProperties;
}
export class servers_auditingPolicies
	extends ArmResource<servers_auditingPoliciesComponentInputs>
	implements servers_auditingPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_auditingPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/auditingPolicies", "2014-04-01", options);
	}
	public readonly apiVersion: "2014-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/auditingPolicies";
}
export interface servers_auditingPoliciesComponentOutputs {
	readonly apiVersion: "2014-04-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/auditingPolicies";
}
export interface servers_auditingPoliciesComponentInputs {
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ServerTableAuditingPolicyProperties;
}
export class servers_communicationLinks
	extends ArmResource<servers_communicationLinksComponentInputs>
	implements servers_communicationLinksComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_communicationLinksComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/communicationLinks", "2014-04-01", options);
	}
	public readonly apiVersion: "2014-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/communicationLinks";
}
export interface servers_communicationLinksComponentOutputs {
	readonly apiVersion: "2014-04-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/communicationLinks";
}
export interface servers_communicationLinksComponentInputs {
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ServerCommunicationLinkProperties;
}
export class servers_connectionPolicies
	extends ArmResource<servers_connectionPoliciesComponentInputs>
	implements servers_connectionPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_connectionPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/connectionPolicies", "2014-04-01", options);
	}
	public readonly apiVersion: "2014-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/connectionPolicies";
}
export interface servers_connectionPoliciesComponentOutputs {
	readonly apiVersion: "2014-04-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/connectionPolicies";
}
export interface servers_connectionPoliciesComponentInputs {
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ServerConnectionPolicyProperties;
}
export class servers_databases
	extends ArmResource<servers_databasesComponentInputs>
	implements servers_databasesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databasesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases", "2014-04-01", options);
	}
	public readonly apiVersion: "2014-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases";
}
export interface servers_databasesComponentOutputs {
	readonly apiVersion: "2014-04-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases";
}
export interface servers_databasesComponentInputs {
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: DatabaseProperties;
	readonly tags?: TrackedResourceTags;
}
export class servers_databases_advisors
	extends ArmResource<servers_databases_advisorsComponentInputs>
	implements servers_databases_advisorsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_advisorsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/advisors", "2014-04-01", options);
	}
	public readonly apiVersion: "2014-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/advisors";
}
export interface servers_databases_advisorsComponentOutputs {
	readonly apiVersion: "2014-04-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/advisors";
}
export interface servers_databases_advisorsComponentInputs {
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: AdvisorProperties;
}
export class servers_databases_auditingPolicies
	extends ArmResource<servers_databases_auditingPoliciesComponentInputs>
	implements servers_databases_auditingPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_auditingPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/auditingPolicies", "2014-04-01", options);
	}
	public readonly apiVersion: "2014-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/auditingPolicies";
}
export interface servers_databases_auditingPoliciesComponentOutputs {
	readonly apiVersion: "2014-04-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/auditingPolicies";
}
export interface servers_databases_auditingPoliciesComponentInputs {
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: DatabaseTableAuditingPolicyProperties;
}
export class servers_databases_connectionPolicies
	extends ArmResource<servers_databases_connectionPoliciesComponentInputs>
	implements servers_databases_connectionPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_connectionPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/connectionPolicies", "2014-04-01", options);
	}
	public readonly apiVersion: "2014-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/connectionPolicies";
}
export interface servers_databases_connectionPoliciesComponentOutputs {
	readonly apiVersion: "2014-04-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/connectionPolicies";
}
export interface servers_databases_connectionPoliciesComponentInputs {
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: DatabaseConnectionPolicyProperties;
}
export class servers_databases_dataMaskingPolicies
	extends ArmResource<servers_databases_dataMaskingPoliciesComponentInputs>
	implements servers_databases_dataMaskingPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_dataMaskingPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/dataMaskingPolicies", "2014-04-01", options);
	}
	public readonly apiVersion: "2014-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/dataMaskingPolicies";
}
export interface servers_databases_dataMaskingPoliciesComponentOutputs {
	readonly apiVersion: "2014-04-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/dataMaskingPolicies";
}
export interface servers_databases_dataMaskingPoliciesComponentInputs {
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: DataMaskingPolicyProperties;
}
export class servers_databases_dataMaskingPolicies_rules
	extends ArmResource<servers_databases_dataMaskingPolicies_rulesComponentInputs>
	implements servers_databases_dataMaskingPolicies_rulesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_dataMaskingPolicies_rulesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/dataMaskingPolicies/rules", "2014-04-01", options);
	}
	public readonly apiVersion: "2014-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/dataMaskingPolicies/rules";
}
export interface servers_databases_dataMaskingPolicies_rulesComponentOutputs {
	readonly apiVersion: "2014-04-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/dataMaskingPolicies/rules";
}
export interface servers_databases_dataMaskingPolicies_rulesComponentInputs {
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: DataMaskingRuleProperties;
}
export class servers_databases_extensions
	extends ArmResource<servers_databases_extensionsComponentInputs>
	implements servers_databases_extensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_extensionsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/extensions", "2014-04-01", options);
	}
	public readonly apiVersion: "2014-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/extensions";
}
export interface servers_databases_extensionsComponentOutputs {
	readonly apiVersion: "2014-04-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/extensions";
}
export interface servers_databases_extensionsComponentInputs {
	readonly name: string;
	readonly properties?: ImportExtensionProperties;
}
export class servers_databases_geoBackupPolicies
	extends ArmResource<servers_databases_geoBackupPoliciesComponentInputs>
	implements servers_databases_geoBackupPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_geoBackupPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/geoBackupPolicies", "2014-04-01", options);
	}
	public readonly apiVersion: "2014-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/geoBackupPolicies";
}
export interface servers_databases_geoBackupPoliciesComponentOutputs {
	readonly apiVersion: "2014-04-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/geoBackupPolicies";
}
export interface servers_databases_geoBackupPoliciesComponentInputs {
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties: GeoBackupPolicyProperties;
}
export class servers_databases_replicationLinks
	extends ArmResource<servers_databases_replicationLinksComponentInputs>
	implements servers_databases_replicationLinksComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_replicationLinksComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/replicationLinks", "2014-04-01", options);
	}
	public readonly apiVersion: "2014-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/replicationLinks";
}
export interface servers_databases_replicationLinksComponentOutputs {
	readonly apiVersion: "2014-04-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/replicationLinks";
}
export interface servers_databases_replicationLinksComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: ReplicationLinkProperties;
}
export class servers_databases_securityAlertPolicies
	extends ArmResource<servers_databases_securityAlertPoliciesComponentInputs>
	implements servers_databases_securityAlertPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_securityAlertPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/securityAlertPolicies", "2014-04-01", options);
	}
	public readonly apiVersion: "2014-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/securityAlertPolicies";
}
export interface servers_databases_securityAlertPoliciesComponentOutputs {
	readonly apiVersion: "2014-04-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/securityAlertPolicies";
}
export interface servers_databases_securityAlertPoliciesComponentInputs {
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: DatabaseSecurityAlertPolicyProperties;
}
export class servers_databases_serviceTierAdvisors
	extends ArmResource<servers_databases_serviceTierAdvisorsComponentInputs>
	implements servers_databases_serviceTierAdvisorsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_serviceTierAdvisorsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/serviceTierAdvisors", "2014-04-01", options);
	}
	public readonly apiVersion: "2014-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/serviceTierAdvisors";
}
export interface servers_databases_serviceTierAdvisorsComponentOutputs {
	readonly apiVersion: "2014-04-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/serviceTierAdvisors";
}
export interface servers_databases_serviceTierAdvisorsComponentInputs {
	readonly name: string;
	readonly properties?: ServiceTierAdvisorProperties;
}
export class servers_databases_transparentDataEncryption
	extends ArmResource<servers_databases_transparentDataEncryptionComponentInputs>
	implements servers_databases_transparentDataEncryptionComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_transparentDataEncryptionComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/transparentDataEncryption", "2014-04-01", options);
	}
	public readonly apiVersion: "2014-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/transparentDataEncryption";
}
export interface servers_databases_transparentDataEncryptionComponentOutputs {
	readonly apiVersion: "2014-04-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/transparentDataEncryption";
}
export interface servers_databases_transparentDataEncryptionComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: TransparentDataEncryptionProperties;
}
export class servers_disasterRecoveryConfiguration
	extends ArmResource<servers_disasterRecoveryConfigurationComponentInputs>
	implements servers_disasterRecoveryConfigurationComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_disasterRecoveryConfigurationComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/disasterRecoveryConfiguration", "2014-04-01", options);
	}
	public readonly apiVersion: "2014-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/disasterRecoveryConfiguration";
}
export interface servers_disasterRecoveryConfigurationComponentOutputs {
	readonly apiVersion: "2014-04-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/disasterRecoveryConfiguration";
}
export interface servers_disasterRecoveryConfigurationComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: DisasterRecoveryConfigurationProperties;
}
export class servers_elasticPools
	extends ArmResource<servers_elasticPoolsComponentInputs>
	implements servers_elasticPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_elasticPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/elasticPools", "2014-04-01", options);
	}
	public readonly apiVersion: "2014-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/elasticPools";
}
export interface servers_elasticPoolsComponentOutputs {
	readonly apiVersion: "2014-04-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/elasticPools";
}
export interface servers_elasticPoolsComponentInputs {
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: ElasticPoolProperties;
	readonly tags?: TrackedResourceTags;
}
export class servers_elasticPools_databases
	extends ArmResource<servers_elasticPools_databasesComponentInputs>
	implements servers_elasticPools_databasesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_elasticPools_databasesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/elasticPools/databases", "2014-04-01", options);
	}
	public readonly apiVersion: "2014-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/elasticPools/databases";
}
export interface servers_elasticPools_databasesComponentOutputs {
	readonly apiVersion: "2014-04-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/elasticPools/databases";
}
export interface servers_elasticPools_databasesComponentInputs {
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: DatabaseProperties;
	readonly tags?: TrackedResourceTags;
}
export class servers_firewallRules
	extends ArmResource<servers_firewallRulesComponentInputs>
	implements servers_firewallRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_firewallRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/firewallRules", "2014-04-01", options);
	}
	public readonly apiVersion: "2014-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/firewallRules";
}
export interface servers_firewallRulesComponentOutputs {
	readonly apiVersion: "2014-04-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/firewallRules";
}
export interface servers_firewallRulesComponentInputs {
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: FirewallRuleProperties;
}
export class servers_recommendedElasticPools
	extends ArmResource<servers_recommendedElasticPoolsComponentInputs>
	implements servers_recommendedElasticPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_recommendedElasticPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/recommendedElasticPools", "2014-04-01", options);
	}
	public readonly apiVersion: "2014-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/recommendedElasticPools";
}
export interface servers_recommendedElasticPoolsComponentOutputs {
	readonly apiVersion: "2014-04-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/recommendedElasticPools";
}
export interface servers_recommendedElasticPoolsComponentInputs {
	readonly name: string;
	readonly properties?: RecommendedElasticPoolPropertiesAutoGenerated;
}
export class servers_recommendedElasticPools_databases
	extends ArmResource<servers_recommendedElasticPools_databasesComponentInputs>
	implements servers_recommendedElasticPools_databasesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_recommendedElasticPools_databasesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/recommendedElasticPools/databases", "2014-04-01", options);
	}
	public readonly apiVersion: "2014-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/recommendedElasticPools/databases";
}
export interface servers_recommendedElasticPools_databasesComponentOutputs {
	readonly apiVersion: "2014-04-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/recommendedElasticPools/databases";
}
export interface servers_recommendedElasticPools_databasesComponentInputs {
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: DatabaseProperties;
	readonly tags?: TrackedResourceTags;
}
export class servers_recoverableDatabases
	extends ArmResource<servers_recoverableDatabasesComponentInputs>
	implements servers_recoverableDatabasesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_recoverableDatabasesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/recoverableDatabases", "2014-04-01", options);
	}
	public readonly apiVersion: "2014-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/recoverableDatabases";
}
export interface servers_recoverableDatabasesComponentOutputs {
	readonly apiVersion: "2014-04-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/recoverableDatabases";
}
export interface servers_recoverableDatabasesComponentInputs {
	readonly name: string;
	readonly properties?: RecoverableDatabaseProperties;
}
export class servers_restorableDroppedDatabases
	extends ArmResource<servers_restorableDroppedDatabasesComponentInputs>
	implements servers_restorableDroppedDatabasesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_restorableDroppedDatabasesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/restorableDroppedDatabases", "2014-04-01", options);
	}
	public readonly apiVersion: "2014-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/restorableDroppedDatabases";
}
export interface servers_restorableDroppedDatabasesComponentOutputs {
	readonly apiVersion: "2014-04-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/restorableDroppedDatabases";
}
export interface servers_restorableDroppedDatabasesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: RestorableDroppedDatabaseProperties;
}
export class servers_serviceObjectives
	extends ArmResource<servers_serviceObjectivesComponentInputs>
	implements servers_serviceObjectivesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_serviceObjectivesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/serviceObjectives", "2014-04-01", options);
	}
	public readonly apiVersion: "2014-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/serviceObjectives";
}
export interface servers_serviceObjectivesComponentOutputs {
	readonly apiVersion: "2014-04-01";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/serviceObjectives";
}
export interface servers_serviceObjectivesComponentInputs {
	readonly name: string;
	readonly properties?: ServiceObjectiveProperties;
}
export interface AdvisorProperties {
	readonly advisorStatus?: "GA" | "LimitedPublicPreview" | "PrivatePreview";
	readonly autoExecuteValue: "Default" | "Disabled";
	readonly lastChecked?: string;
	readonly recommendationsStatus?: string;
}
export interface Database {
	readonly id?: string;
	readonly kind?: string;
	readonly location: string;
	readonly name?: string;
	readonly properties?: DatabaseProperties;
	readonly tags?: TrackedResourceTags;
	readonly type?: string;
}
export interface DatabaseConnectionPolicyProperties {
	readonly proxyDnsName?: string;
	readonly proxyPort?: string;
	readonly redirectionState?: string;
	readonly securityEnabledAccess?: string;
	readonly state?: string;
	readonly useServerDefault?: string;
	readonly visibility?: string;
}
export interface DatabaseProperties {
	readonly collation?: string;
	readonly containmentState?: number;
	readonly createMode?:
		| "Copy"
		| "Default"
		| "NonReadableSecondary"
		| "OnlineSecondary"
		| "PointInTimeRestore"
		| "Recovery"
		| "Restore"
		| "RestoreLongTermRetentionBackup";
}
export interface DatabaseSecurityAlertPolicyProperties {
	readonly disabledAlerts?: string;
	readonly emailAccountAdmins?: "Disabled";
	readonly emailAddresses?: string;
	readonly retentionDays?: number;
	readonly state: "Disabled" | "Enabled";
	readonly storageAccountAccessKey?: string;
	readonly storageEndpoint?: string;
	readonly useServerDefault?: "Disabled";
}
export interface DatabaseTableAuditingPolicyProperties {
	readonly auditingState?: string;
	readonly auditLogsTableName?: string;
	readonly eventTypesToAudit?: string;
	readonly fullAuditLogsTableName?: string;
	readonly retentionDays?: string;
	readonly storageAccountKey?: string;
	readonly storageAccountName?: string;
	readonly storageAccountResourceGroupName?: string;
	readonly storageAccountSecondaryKey?: string;
	readonly storageAccountSubscriptionId?: string;
	readonly storageTableEndpoint?: string;
	readonly useServerDefault?: string;
}
export interface DataMaskingPolicyProperties {
	readonly applicationPrincipals?: string;
	readonly dataMaskingState: "Disabled";
	readonly exemptPrincipals?: string;
	readonly maskingLevel?: string;
}
export interface DataMaskingRuleProperties {
	readonly aliasName?: string;
	readonly columnName: string;
	readonly id?: string;
	readonly maskingFunction: "CCN" | "Default" | "Email" | "Number" | "SSN";
	readonly numberFrom?: string;
	readonly numberTo?: string;
	readonly prefixSize?: string;
	readonly replacementString?: string;
	readonly ruleState?: "Disabled";
	readonly schemaName: string;
	readonly suffixSize?: string;
	readonly tableName: string;
}
export interface DisasterRecoveryConfigurationProperties {
	readonly autoFailover: "Off" | "On";
	readonly failoverPolicy: "Automatic" | "Manual";
	readonly logicalServerName?: string;
	readonly partnerLogicalServerName?: string;
	readonly partnerServerId: string;
	readonly role?: "None" | "Primary" | "Secondary";
	readonly status?: "Creating" | "Dropping" | "FailingOver" | "Ready";
}
export interface ElasticPoolProperties {
	readonly creationDate?: string;
	readonly databaseDtuMax?: number;
	readonly databaseDtuMin?: number;
	readonly dtu?: number;
	readonly edition?: "Basic" | "BusinessCritical" | "GeneralPurpose" | "Premium" | "Standard";
	readonly state?: "Creating" | "Disabled" | "Ready";
	readonly storageMB?: number;
	readonly zoneRedundant?: boolean;
}
export interface FirewallRuleProperties {
	readonly endIpAddress: string;
	readonly startIpAddress: string;
}
export interface GeoBackupPolicyProperties {
	readonly state: "Disabled";
	readonly storageType?: string;
}
export interface ImportExtensionProperties {
	readonly administratorLogin: string;
	readonly administratorLoginPassword: string;
	readonly authenticationType?: "ADPassword";
	readonly operationMode: "Import";
	readonly storageKey: string;
	readonly storageKeyType: "SharedAccessKey";
	readonly storageUri: string;
}
export interface OperationImpact {
	readonly changeValueAbsolute?: number;
	readonly changeValueRelative?: number;
	readonly name?: string;
	readonly unit?: string;
}
export interface RecommendedElasticPoolMetric {
	readonly dateTime?: string;
	readonly dtu?: number;
	readonly sizeGB?: number;
}
export interface RecommendedElasticPoolPropertiesAutoGenerated {
	readonly databaseDtuMax?: number;
	readonly databaseDtuMin?: number;
	readonly databaseEdition?: "Basic" | "BusinessCritical" | "GeneralPurpose" | "Premium" | "Standard";
	readonly databases?: Database[];
	readonly dtu?: number;
	readonly maxObservedDtu?: number;
	readonly maxObservedStorageMB?: number;
	readonly metrics?: RecommendedElasticPoolMetric[];
	readonly observationPeriodEnd?: string;
	readonly observationPeriodStart?: string;
	readonly storageMB?: number;
}
export interface RecommendedIndex {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: RecommendedIndexProperties;
	readonly type?: string;
}
export interface RecommendedIndexProperties {
	readonly action?: "Create" | "Drop";
	readonly columns?: string[];
	readonly created?: string;
	readonly estimatedImpact?: OperationImpact[];
	readonly includedColumns?: string[];
	readonly indexScript?: string;
	readonly indexType?: "CLUSTERED COLUMNSTORE" | "CLUSTERED" | "COLUMNSTORE";
	readonly lastModified?: string;
	readonly reportedImpact?: OperationImpact[];
	readonly schema?: string;
	readonly state?:
		| "Active"
		| "Blocked"
		| "Executing"
		| "Expired"
		| "Ignored"
		| "Pending Revert"
		| "Pending"
		| "Reverted"
		| "Reverting"
		| "Success";
	readonly table?: string;
}
export interface RecoverableDatabaseProperties {
	readonly edition?: string;
	readonly elasticPoolName?: string;
	readonly lastAvailableBackupDate?: string;
	readonly serviceLevelObjective?: string;
}
export interface ReplicationLinkProperties {
	readonly isTerminationAllowed?: boolean;
	readonly partnerDatabase?: string;
	readonly partnerLocation?: string;
	readonly partnerRole?: "Copy" | "NonReadableSecondary" | "Primary" | "Secondary";
	readonly partnerServer?: string;
	readonly percentComplete?: number;
	readonly replicationMode?: string;
	readonly replicationState?: "CATCH_UP" | "PENDING" | "SEEDING" | "SUSPENDED";
	readonly role?: "Copy" | "NonReadableSecondary" | "Primary" | "Secondary";
	readonly startTime?: string;
}
export interface RestorableDroppedDatabaseProperties {
	readonly creationDate?: string;
	readonly databaseName?: string;
	readonly deletionDate?: string;
	readonly earliestRestoreDate?: string;
	readonly edition?: string;
	readonly elasticPoolName?: string;
	readonly maxSizeBytes?: string;
	readonly serviceLevelObjective?: string;
}
export interface ServerAdministratorProperties {
	readonly administratorType: "ActiveDirectory";
	readonly login: string;
	readonly sid: string;
	readonly tenantId: string;
}
export interface ServerCommunicationLinkProperties {
	readonly partnerServer: string;
	readonly state?: string;
}
export interface ServerConnectionPolicyProperties {
	readonly connectionType: "Default" | "Proxy";
}
export interface ServerProperties {
	readonly administratorLogin?: string;
	readonly administratorLoginPassword?: string;
	readonly externalAdministratorLogin?: string;
	readonly externalAdministratorSid?: string;
	readonly fullyQualifiedDomainName?: string;
	readonly state?: "Disabled";
	readonly version?: "12.0" | "2.0";
}
export interface ServerTableAuditingPolicyProperties {
	readonly auditingState?: string;
	readonly auditLogsTableName?: string;
	readonly eventTypesToAudit?: string;
	readonly fullAuditLogsTableName?: string;
	readonly retentionDays?: string;
	readonly storageAccountKey?: string;
	readonly storageAccountName?: string;
	readonly storageAccountResourceGroupName?: string;
	readonly storageAccountSecondaryKey?: string;
	readonly storageAccountSubscriptionId?: string;
	readonly storageTableEndpoint?: string;
}
export interface ServiceObjectiveProperties {
	readonly description?: string;
	readonly enabled?: boolean;
	readonly isDefault?: boolean;
	readonly isSystem?: boolean;
	readonly serviceObjectiveName?: string;
}
export interface ServiceTierAdvisor {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ServiceTierAdvisorProperties;
	readonly type?: string;
}
export interface ServiceTierAdvisorProperties {
	readonly activeTimeRatio?: number;
	readonly avgDtu?: number;
	readonly confidence?: number;
	readonly currentServiceLevelObjective?: string;
	readonly currentServiceLevelObjectiveId?: string;
	readonly databaseSizeBasedRecommendationServiceLevelObjective?: string;
	readonly databaseSizeBasedRecommendationServiceLevelObjectiveId?: string;
	readonly disasterPlanBasedRecommendationServiceLevelObjective?: string;
	readonly disasterPlanBasedRecommendationServiceLevelObjectiveId?: string;
	readonly maxDtu?: number;
	readonly maxSizeInGB?: number;
	readonly minDtu?: number;
	readonly observationPeriodEnd?: string;
	readonly observationPeriodStart?: string;
	readonly overallRecommendationServiceLevelObjective?: string;
	readonly overallRecommendationServiceLevelObjectiveId?: string;
	readonly serviceLevelObjectiveUsageMetrics?: SloUsageMetric[];
	readonly usageBasedRecommendationServiceLevelObjective?: string;
	readonly usageBasedRecommendationServiceLevelObjectiveId?: string;
}
export interface SloUsageMetric {
	readonly inRangeTimeRatio?: number;
	readonly serviceLevelObjective?:
		| "Basic"
		| "DS100"
		| "DS1000"
		| "DS1200"
		| "DS1500"
		| "DS200"
		| "DS2000"
		| "DS300"
		| "DS400"
		| "DS500"
		| "DS600"
		| "DW100"
		| "DW1000"
		| "DW10000c"
		| "DW1000c"
		| "DW1200"
		| "DW1500"
		| "DW15000c"
		| "DW1500c"
		| "DW200"
		| "DW2000"
		| "DW2000c"
		| "DW2500c"
		| "DW300"
		| "DW3000"
		| "DW30000c"
		| "DW3000c"
		| "DW400"
		| "DW500"
		| "DW5000c"
		| "DW600"
		| "DW6000"
		| "DW6000c"
		| "DW7500c"
		| "ElasticPool"
		| "Free"
		| "P1"
		| "P11"
		| "P15"
		| "P2"
		| "P3"
		| "P4"
		| "P6"
		| "PRS1"
		| "PRS2"
		| "PRS4"
		| "PRS6"
		| "S0"
		| "S1"
		| "S12"
		| "S2"
		| "S3"
		| "S4"
		| "S6"
		| "S7"
		| "S9"
		| "System"
		| "System0"
		| "System1"
		| "System2"
		| "System2L"
		| "System3"
		| "System3L"
		| "System4"
		| "System4L";
	readonly serviceLevelObjectiveId?: string;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface TransparentDataEncryption {
	readonly id?: string;
	readonly location?: string;
	readonly name?: string;
	readonly properties?: TransparentDataEncryptionProperties;
	readonly type?: string;
}
export interface TransparentDataEncryptionProperties {
	readonly status?: "Disabled";
}
export default {
	servers: servers,
	"servers/administrators": servers_administrators,
	"servers/advisors": servers_advisors,
	"servers/auditingPolicies": servers_auditingPolicies,
	"servers/communicationLinks": servers_communicationLinks,
	"servers/connectionPolicies": servers_connectionPolicies,
	"servers/databases": servers_databases,
	"servers/databases/advisors": servers_databases_advisors,
	"servers/databases/auditingPolicies": servers_databases_auditingPolicies,
	"servers/databases/connectionPolicies": servers_databases_connectionPolicies,
	"servers/databases/dataMaskingPolicies": servers_databases_dataMaskingPolicies,
	"servers/databases/dataMaskingPolicies/rules": servers_databases_dataMaskingPolicies_rules,
	"servers/databases/extensions": servers_databases_extensions,
	"servers/databases/geoBackupPolicies": servers_databases_geoBackupPolicies,
	"servers/databases/replicationLinks": servers_databases_replicationLinks,
	"servers/databases/securityAlertPolicies": servers_databases_securityAlertPolicies,
	"servers/databases/serviceTierAdvisors": servers_databases_serviceTierAdvisors,
	"servers/databases/transparentDataEncryption": servers_databases_transparentDataEncryption,
	"servers/disasterRecoveryConfiguration": servers_disasterRecoveryConfiguration,
	"servers/elasticPools": servers_elasticPools,
	"servers/elasticPools/databases": servers_elasticPools_databases,
	"servers/firewallRules": servers_firewallRules,
	"servers/recommendedElasticPools": servers_recommendedElasticPools,
	"servers/recommendedElasticPools/databases": servers_recommendedElasticPools_databases,
	"servers/recoverableDatabases": servers_recoverableDatabases,
	"servers/restorableDroppedDatabases": servers_restorableDroppedDatabases,
	"servers/serviceObjectives": servers_serviceObjectives,
};
