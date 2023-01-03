import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class privateLinkHubs
	extends ArmResource<privateLinkHubsComponentInputs>
	implements privateLinkHubsComponentOutputs
{
	constructor(entity: ADKEntity, options: privateLinkHubsComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/privateLinkHubs", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/privateLinkHubs";
}
export interface privateLinkHubsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/privateLinkHubs";
}
export interface privateLinkHubsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: PrivateLinkHubProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class privateLinkHubs_privateLinkResources
	extends ArmResource<privateLinkHubs_privateLinkResourcesComponentInputs>
	implements privateLinkHubs_privateLinkResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: privateLinkHubs_privateLinkResourcesComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/privateLinkHubs/privateLinkResources", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/privateLinkHubs/privateLinkResources";
}
export interface privateLinkHubs_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/privateLinkHubs/privateLinkResources";
}
export interface privateLinkHubs_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties | undefined;
}
export class workspaces extends ArmResource<workspacesComponentInputs> implements workspacesComponentOutputs {
	constructor(entity: ADKEntity, options: workspacesComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces";
}
export interface workspacesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces";
}
export interface workspacesComponentInputs {
	readonly identity?: ManagedIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: WorkspaceProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class workspaces_administrators
	extends ArmResource<workspaces_administratorsComponentInputs>
	implements workspaces_administratorsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_administratorsComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/administrators", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/administrators";
}
export interface workspaces_administratorsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/administrators";
}
export interface workspaces_administratorsComponentInputs {
	readonly name: string;
	readonly properties?: AadAdminProperties | undefined;
}
export class workspaces_auditingSettings
	extends ArmResource<workspaces_auditingSettingsComponentInputs>
	implements workspaces_auditingSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_auditingSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/auditingSettings", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/auditingSettings";
}
export interface workspaces_auditingSettingsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/auditingSettings";
}
export interface workspaces_auditingSettingsComponentInputs {
	readonly name: string;
	readonly properties?: ServerBlobAuditingPolicyProperties | undefined;
}
export class workspaces_bigDataPools
	extends ArmResource<workspaces_bigDataPoolsComponentInputs>
	implements workspaces_bigDataPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_bigDataPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/bigDataPools", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/bigDataPools";
}
export interface workspaces_bigDataPoolsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/bigDataPools";
}
export interface workspaces_bigDataPoolsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: BigDataPoolResourceProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class workspaces_encryptionProtector
	extends ArmResource<workspaces_encryptionProtectorComponentInputs>
	implements workspaces_encryptionProtectorComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_encryptionProtectorComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/encryptionProtector", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/encryptionProtector";
}
export interface workspaces_encryptionProtectorComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/encryptionProtector";
}
export interface workspaces_encryptionProtectorComponentInputs {
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: EncryptionProtectorProperties | undefined;
}
export class workspaces_extendedAuditingSettings
	extends ArmResource<workspaces_extendedAuditingSettingsComponentInputs>
	implements workspaces_extendedAuditingSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_extendedAuditingSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/extendedAuditingSettings", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/extendedAuditingSettings";
}
export interface workspaces_extendedAuditingSettingsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/extendedAuditingSettings";
}
export interface workspaces_extendedAuditingSettingsComponentInputs {
	readonly name: string;
	readonly properties?: ExtendedServerBlobAuditingPolicyProperties | undefined;
}
export class workspaces_firewallRules
	extends ArmResource<workspaces_firewallRulesComponentInputs>
	implements workspaces_firewallRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_firewallRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/firewallRules", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/firewallRules";
}
export interface workspaces_firewallRulesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/firewallRules";
}
export interface workspaces_firewallRulesComponentInputs {
	readonly name: string;
	readonly properties?: IpFirewallRuleProperties | undefined;
}
export class workspaces_integrationRuntimes
	extends ArmResource<workspaces_integrationRuntimesComponentInputs>
	implements workspaces_integrationRuntimesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_integrationRuntimesComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/integrationRuntimes", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/integrationRuntimes";
}
export interface workspaces_integrationRuntimesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/integrationRuntimes";
}
export interface workspaces_integrationRuntimesComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties: IntegrationRuntime;
}
export class workspaces_keys
	extends ArmResource<workspaces_keysComponentInputs>
	implements workspaces_keysComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_keysComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/keys", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/keys";
}
export interface workspaces_keysComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/keys";
}
export interface workspaces_keysComponentInputs {
	readonly name: string;
	readonly properties?: KeyProperties | undefined;
}
export class workspaces_libraries
	extends ArmResource<workspaces_librariesComponentInputs>
	implements workspaces_librariesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_librariesComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/libraries", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/libraries";
}
export interface workspaces_librariesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/libraries";
}
export interface workspaces_librariesComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: LibraryInfo | undefined;
}
export class workspaces_managedIdentitySqlControlSettings
	extends ArmResource<workspaces_managedIdentitySqlControlSettingsComponentInputs>
	implements workspaces_managedIdentitySqlControlSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_managedIdentitySqlControlSettingsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Synapse/workspaces/managedIdentitySqlControlSettings",
			"2021-05-01",
			options,
		);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/managedIdentitySqlControlSettings";
}
export interface workspaces_managedIdentitySqlControlSettingsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/managedIdentitySqlControlSettings";
}
export interface workspaces_managedIdentitySqlControlSettingsComponentInputs {
	readonly name: string;
	readonly properties?: ManagedIdentitySqlControlSettingsModelProperties | undefined;
}
export class workspaces_privateEndpointConnections
	extends ArmResource<workspaces_privateEndpointConnectionsComponentInputs>
	implements workspaces_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/privateEndpointConnections", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/privateEndpointConnections";
}
export interface workspaces_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/privateEndpointConnections";
}
export interface workspaces_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
}
export class workspaces_privateLinkResources
	extends ArmResource<workspaces_privateLinkResourcesComponentInputs>
	implements workspaces_privateLinkResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_privateLinkResourcesComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/privateLinkResources", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/privateLinkResources";
}
export interface workspaces_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/privateLinkResources";
}
export interface workspaces_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties | undefined;
}
export class workspaces_recoverableSqlPools
	extends ArmResource<workspaces_recoverableSqlPoolsComponentInputs>
	implements workspaces_recoverableSqlPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_recoverableSqlPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/recoverableSqlPools", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/recoverableSqlPools";
}
export interface workspaces_recoverableSqlPoolsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/recoverableSqlPools";
}
export interface workspaces_recoverableSqlPoolsComponentInputs {
	readonly name: string;
	readonly properties?: RecoverableSqlPoolProperties | undefined;
}
export class workspaces_restorableDroppedSqlPools
	extends ArmResource<workspaces_restorableDroppedSqlPoolsComponentInputs>
	implements workspaces_restorableDroppedSqlPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_restorableDroppedSqlPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/restorableDroppedSqlPools", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/restorableDroppedSqlPools";
}
export interface workspaces_restorableDroppedSqlPoolsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/restorableDroppedSqlPools";
}
export interface workspaces_restorableDroppedSqlPoolsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: RestorableDroppedSqlPoolProperties | undefined;
}
export class workspaces_securityAlertPolicies
	extends ArmResource<workspaces_securityAlertPoliciesComponentInputs>
	implements workspaces_securityAlertPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_securityAlertPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/securityAlertPolicies", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/securityAlertPolicies";
}
export interface workspaces_securityAlertPoliciesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/securityAlertPolicies";
}
export interface workspaces_securityAlertPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: ServerSecurityAlertPolicyProperties | undefined;
}
export class workspaces_sqlAdministrators
	extends ArmResource<workspaces_sqlAdministratorsComponentInputs>
	implements workspaces_sqlAdministratorsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sqlAdministratorsComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/sqlAdministrators", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlAdministrators";
}
export interface workspaces_sqlAdministratorsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlAdministrators";
}
export interface workspaces_sqlAdministratorsComponentInputs {
	readonly name: string;
	readonly properties?: AadAdminProperties | undefined;
}
export class workspaces_sqlPools
	extends ArmResource<workspaces_sqlPoolsComponentInputs>
	implements workspaces_sqlPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sqlPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/sqlPools", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools";
}
export interface workspaces_sqlPoolsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools";
}
export interface workspaces_sqlPoolsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: SqlPoolResourceProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class workspaces_sqlPools_auditingSettings
	extends ArmResource<workspaces_sqlPools_auditingSettingsComponentInputs>
	implements workspaces_sqlPools_auditingSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sqlPools_auditingSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/sqlPools/auditingSettings", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/auditingSettings";
}
export interface workspaces_sqlPools_auditingSettingsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/auditingSettings";
}
export interface workspaces_sqlPools_auditingSettingsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: SqlPoolBlobAuditingPolicyProperties | undefined;
}
export class workspaces_sqlPools_connectionPolicies
	extends ArmResource<workspaces_sqlPools_connectionPoliciesComponentInputs>
	implements workspaces_sqlPools_connectionPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sqlPools_connectionPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/sqlPools/connectionPolicies", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/connectionPolicies";
}
export interface workspaces_sqlPools_connectionPoliciesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/connectionPolicies";
}
export interface workspaces_sqlPools_connectionPoliciesComponentInputs {
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: SqlPoolConnectionPolicyProperties | undefined;
}
export class workspaces_sqlPools_dataMaskingPolicies
	extends ArmResource<workspaces_sqlPools_dataMaskingPoliciesComponentInputs>
	implements workspaces_sqlPools_dataMaskingPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sqlPools_dataMaskingPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies";
}
export interface workspaces_sqlPools_dataMaskingPoliciesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies";
}
export interface workspaces_sqlPools_dataMaskingPoliciesComponentInputs {
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly managedBy?: string | undefined;
	readonly name: string;
	readonly properties?: DataMaskingPolicyProperties | undefined;
}
export class workspaces_sqlPools_dataMaskingPolicies_rules
	extends ArmResource<workspaces_sqlPools_dataMaskingPolicies_rulesComponentInputs>
	implements workspaces_sqlPools_dataMaskingPolicies_rulesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sqlPools_dataMaskingPolicies_rulesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies/rules",
			"2021-05-01",
			options,
		);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies/rules";
}
export interface workspaces_sqlPools_dataMaskingPolicies_rulesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies/rules";
}
export interface workspaces_sqlPools_dataMaskingPolicies_rulesComponentInputs {
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: DataMaskingRuleProperties | undefined;
}
export class workspaces_sqlPools_dataWarehouseUserActivities
	extends ArmResource<workspaces_sqlPools_dataWarehouseUserActivitiesComponentInputs>
	implements workspaces_sqlPools_dataWarehouseUserActivitiesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sqlPools_dataWarehouseUserActivitiesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Synapse/workspaces/sqlPools/dataWarehouseUserActivities",
			"2021-05-01",
			options,
		);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/dataWarehouseUserActivities";
}
export interface workspaces_sqlPools_dataWarehouseUserActivitiesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/dataWarehouseUserActivities";
}
export interface workspaces_sqlPools_dataWarehouseUserActivitiesComponentInputs {
	readonly name: string;
	readonly properties?: DataWarehouseUserActivitiesProperties | undefined;
}
export class workspaces_sqlPools_extendedAuditingSettings
	extends ArmResource<workspaces_sqlPools_extendedAuditingSettingsComponentInputs>
	implements workspaces_sqlPools_extendedAuditingSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sqlPools_extendedAuditingSettingsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Synapse/workspaces/sqlPools/extendedAuditingSettings",
			"2021-05-01",
			options,
		);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/extendedAuditingSettings";
}
export interface workspaces_sqlPools_extendedAuditingSettingsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/extendedAuditingSettings";
}
export interface workspaces_sqlPools_extendedAuditingSettingsComponentInputs {
	readonly name: string;
	readonly properties?: ExtendedSqlPoolBlobAuditingPolicyProperties | undefined;
}
export class workspaces_sqlPools_geoBackupPolicies
	extends ArmResource<workspaces_sqlPools_geoBackupPoliciesComponentInputs>
	implements workspaces_sqlPools_geoBackupPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sqlPools_geoBackupPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/sqlPools/geoBackupPolicies", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/geoBackupPolicies";
}
export interface workspaces_sqlPools_geoBackupPoliciesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/geoBackupPolicies";
}
export interface workspaces_sqlPools_geoBackupPoliciesComponentInputs {
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: GeoBackupPolicyProperties;
}
export class workspaces_sqlPools_metadataSync
	extends ArmResource<workspaces_sqlPools_metadataSyncComponentInputs>
	implements workspaces_sqlPools_metadataSyncComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sqlPools_metadataSyncComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/sqlPools/metadataSync", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/metadataSync";
}
export interface workspaces_sqlPools_metadataSyncComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/metadataSync";
}
export interface workspaces_sqlPools_metadataSyncComponentInputs {
	readonly name: string;
	readonly properties?: MetadataSyncConfigProperties | undefined;
}
export class workspaces_sqlPools_replicationLinks
	extends ArmResource<workspaces_sqlPools_replicationLinksComponentInputs>
	implements workspaces_sqlPools_replicationLinksComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sqlPools_replicationLinksComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/sqlPools/replicationLinks", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/replicationLinks";
}
export interface workspaces_sqlPools_replicationLinksComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/replicationLinks";
}
export interface workspaces_sqlPools_replicationLinksComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ReplicationLinkProperties | undefined;
}
export class workspaces_sqlPools_restorePoints
	extends ArmResource<workspaces_sqlPools_restorePointsComponentInputs>
	implements workspaces_sqlPools_restorePointsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sqlPools_restorePointsComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/sqlPools/restorePoints", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/restorePoints";
}
export interface workspaces_sqlPools_restorePointsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/restorePoints";
}
export interface workspaces_sqlPools_restorePointsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: RestorePointProperties | undefined;
}
export class workspaces_sqlPools_schemas
	extends ArmResource<workspaces_sqlPools_schemasComponentInputs>
	implements workspaces_sqlPools_schemasComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sqlPools_schemasComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/sqlPools/schemas", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/schemas";
}
export interface workspaces_sqlPools_schemasComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/schemas";
}
export interface workspaces_sqlPools_schemasComponentInputs {
	readonly name: string;
}
export class workspaces_sqlPools_schemas_tables
	extends ArmResource<workspaces_sqlPools_schemas_tablesComponentInputs>
	implements workspaces_sqlPools_schemas_tablesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sqlPools_schemas_tablesComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/sqlPools/schemas/tables", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/schemas/tables";
}
export interface workspaces_sqlPools_schemas_tablesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/schemas/tables";
}
export interface workspaces_sqlPools_schemas_tablesComponentInputs {
	readonly name: string;
}
export class workspaces_sqlPools_schemas_tables_columns
	extends ArmResource<workspaces_sqlPools_schemas_tables_columnsComponentInputs>
	implements workspaces_sqlPools_schemas_tables_columnsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sqlPools_schemas_tables_columnsComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/sqlPools/schemas/tables/columns", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/schemas/tables/columns";
}
export interface workspaces_sqlPools_schemas_tables_columnsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/schemas/tables/columns";
}
export interface workspaces_sqlPools_schemas_tables_columnsComponentInputs {
	readonly name: string;
	readonly properties?: SqlPoolColumnProperties | undefined;
}
export class workspaces_sqlPools_schemas_tables_columns_sensitivityLabels
	extends ArmResource<workspaces_sqlPools_schemas_tables_columns_sensitivityLabelsComponentInputs>
	implements workspaces_sqlPools_schemas_tables_columns_sensitivityLabelsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sqlPools_schemas_tables_columns_sensitivityLabelsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Synapse/workspaces/sqlPools/schemas/tables/columns/sensitivityLabels",
			"2021-05-01",
			options,
		);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/schemas/tables/columns/sensitivityLabels";
}
export interface workspaces_sqlPools_schemas_tables_columns_sensitivityLabelsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/schemas/tables/columns/sensitivityLabels";
}
export interface workspaces_sqlPools_schemas_tables_columns_sensitivityLabelsComponentInputs {
	readonly managedBy?: string | undefined;
	readonly name: string;
	readonly properties?: SensitivityLabelProperties | undefined;
}
export class workspaces_sqlPools_securityAlertPolicies
	extends ArmResource<workspaces_sqlPools_securityAlertPoliciesComponentInputs>
	implements workspaces_sqlPools_securityAlertPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sqlPools_securityAlertPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/sqlPools/securityAlertPolicies", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/securityAlertPolicies";
}
export interface workspaces_sqlPools_securityAlertPoliciesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/securityAlertPolicies";
}
export interface workspaces_sqlPools_securityAlertPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: SecurityAlertPolicyProperties | undefined;
}
export class workspaces_sqlPools_transparentDataEncryption
	extends ArmResource<workspaces_sqlPools_transparentDataEncryptionComponentInputs>
	implements workspaces_sqlPools_transparentDataEncryptionComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sqlPools_transparentDataEncryptionComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Synapse/workspaces/sqlPools/transparentDataEncryption",
			"2021-05-01",
			options,
		);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/transparentDataEncryption";
}
export interface workspaces_sqlPools_transparentDataEncryptionComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/transparentDataEncryption";
}
export interface workspaces_sqlPools_transparentDataEncryptionComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: TransparentDataEncryptionProperties | undefined;
}
export class workspaces_sqlPools_vulnerabilityAssessments
	extends ArmResource<workspaces_sqlPools_vulnerabilityAssessmentsComponentInputs>
	implements workspaces_sqlPools_vulnerabilityAssessmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sqlPools_vulnerabilityAssessmentsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments",
			"2021-05-01",
			options,
		);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments";
}
export interface workspaces_sqlPools_vulnerabilityAssessmentsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments";
}
export interface workspaces_sqlPools_vulnerabilityAssessmentsComponentInputs {
	readonly name: string;
	readonly properties?: SqlPoolVulnerabilityAssessmentProperties | undefined;
}
export class workspaces_sqlPools_vulnerabilityAssessments_rules_baselines
	extends ArmResource<workspaces_sqlPools_vulnerabilityAssessments_rules_baselinesComponentInputs>
	implements workspaces_sqlPools_vulnerabilityAssessments_rules_baselinesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sqlPools_vulnerabilityAssessments_rules_baselinesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments/rules/baselines",
			"2021-05-01",
			options,
		);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments/rules/baselines";
}
export interface workspaces_sqlPools_vulnerabilityAssessments_rules_baselinesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments/rules/baselines";
}
export interface workspaces_sqlPools_vulnerabilityAssessments_rules_baselinesComponentInputs {
	readonly name: string;
	readonly properties?: SqlPoolVulnerabilityAssessmentRuleBaselineProperties | undefined;
}
export class workspaces_sqlPools_vulnerabilityAssessments_scans
	extends ArmResource<workspaces_sqlPools_vulnerabilityAssessments_scansComponentInputs>
	implements workspaces_sqlPools_vulnerabilityAssessments_scansComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sqlPools_vulnerabilityAssessments_scansComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments/scans",
			"2021-05-01",
			options,
		);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments/scans";
}
export interface workspaces_sqlPools_vulnerabilityAssessments_scansComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments/scans";
}
export interface workspaces_sqlPools_vulnerabilityAssessments_scansComponentInputs {
	readonly name: string;
	readonly properties?: VulnerabilityAssessmentScanRecordProperties | undefined;
}
export class workspaces_sqlPools_workloadGroups
	extends ArmResource<workspaces_sqlPools_workloadGroupsComponentInputs>
	implements workspaces_sqlPools_workloadGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sqlPools_workloadGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/sqlPools/workloadGroups", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/workloadGroups";
}
export interface workspaces_sqlPools_workloadGroupsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/workloadGroups";
}
export interface workspaces_sqlPools_workloadGroupsComponentInputs {
	readonly name: string;
	readonly properties?: WorkloadGroupProperties | undefined;
}
export class workspaces_sqlPools_workloadGroups_workloadClassifiers
	extends ArmResource<workspaces_sqlPools_workloadGroups_workloadClassifiersComponentInputs>
	implements workspaces_sqlPools_workloadGroups_workloadClassifiersComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sqlPools_workloadGroups_workloadClassifiersComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Synapse/workspaces/sqlPools/workloadGroups/workloadClassifiers",
			"2021-05-01",
			options,
		);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/workloadGroups/workloadClassifiers";
}
export interface workspaces_sqlPools_workloadGroups_workloadClassifiersComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/workloadGroups/workloadClassifiers";
}
export interface workspaces_sqlPools_workloadGroups_workloadClassifiersComponentInputs {
	readonly name: string;
	readonly properties?: WorkloadClassifierProperties | undefined;
}
export class workspaces_vulnerabilityAssessments
	extends ArmResource<workspaces_vulnerabilityAssessmentsComponentInputs>
	implements workspaces_vulnerabilityAssessmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_vulnerabilityAssessmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/vulnerabilityAssessments", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/vulnerabilityAssessments";
}
export interface workspaces_vulnerabilityAssessmentsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/vulnerabilityAssessments";
}
export interface workspaces_vulnerabilityAssessmentsComponentInputs {
	readonly name: string;
	readonly properties?: ServerVulnerabilityAssessmentProperties | undefined;
}
export function listAuthKeys(resource: workspaces_integrationRuntimes): IntegrationRuntimeAuthKeys {
	if (resource.apiVersion !== "2021-05-01") {
		throw new Error(`listAuthKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Synapse/workspaces/integrationRuntimes") {
		throw new Error(`listAuthKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AadAdminProperties {
	readonly administratorType?: string | undefined;
	readonly login?: string | undefined;
	readonly sid?: string | undefined;
	readonly tenantId?: string | undefined;
}
export interface AutoPauseProperties {
	readonly delayInMinutes?: number | undefined;
	readonly enabled?: boolean | undefined;
}
export interface AutoScaleProperties {
	readonly enabled?: boolean | undefined;
	readonly maxNodeCount?: number | undefined;
	readonly minNodeCount?: number | undefined;
}
export interface BigDataPoolResourceProperties {
	readonly autoPause?: AutoPauseProperties | undefined;
	readonly autoScale?: AutoScaleProperties | undefined;
	readonly cacheSize?: number | undefined;
	readonly creationDate?: string | undefined;
	readonly customLibraries?: LibraryInfo[] | undefined;
	readonly defaultSparkLogFolder?: string | undefined;
	readonly dynamicExecutorAllocation?: DynamicExecutorAllocation | undefined;
	readonly isComputeIsolationEnabled?: boolean | undefined;
	readonly lastSucceededTimestamp?: string | undefined;
	readonly libraryRequirements?: LibraryRequirements | undefined;
	readonly nodeCount?: number | undefined;
	readonly nodeSize?: ("Large" | "Medium" | "None" | "Small" | "XLarge" | "XXLarge" | "XXXLarge") | undefined;
	readonly nodeSizeFamily?:
		| ("HardwareAcceleratedFPGA" | "HardwareAcceleratedGPU" | "MemoryOptimized" | "None")
		| undefined;
	readonly provisioningState?: string | undefined;
	readonly sessionLevelPackagesEnabled?: boolean | undefined;
	readonly sparkConfigProperties?: LibraryRequirements | undefined;
	readonly sparkEventsFolder?: string | undefined;
	readonly sparkVersion?: string | undefined;
}
export interface CmdkeySetupTypeProperties {
	readonly password: SecretBase;
	readonly targetName: any;
	readonly userName: any;
}
export interface CspWorkspaceAdminProperties {
	readonly initialWorkspaceAdminObjectId?: string | undefined;
}
export interface CustomerManagedKeyDetails {
	readonly kekIdentity?: KekIdentityProperties | undefined;
	readonly key?: WorkspaceKeyDetails | undefined;
	readonly status?: string | undefined;
}
export interface CustomSetupBase {}
export interface DataLakeStorageAccountDetails {
	readonly accountUrl?: string | undefined;
	readonly filesystem?: string | undefined;
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
export interface DynamicExecutorAllocation {
	readonly enabled?: boolean | undefined;
}
export interface EncryptionDetails {
	readonly cmk?: CustomerManagedKeyDetails | undefined;
	readonly doubleEncryptionEnabled?: boolean | undefined;
}
export interface EncryptionProtectorProperties {
	readonly serverKeyName?: string | undefined;
	readonly serverKeyType: "AzureKeyVault" | "ServiceManaged";
	readonly subregion?: string | undefined;
	readonly thumbprint?: string | undefined;
	readonly uri?: string | undefined;
}
export interface EntityReference {
	readonly referenceName?: string | undefined;
	readonly type?: ("IntegrationRuntimeReference" | "LinkedServiceReference") | undefined;
}
export interface EnvironmentVariableSetupTypeProperties {
	readonly variableName: string;
	readonly variableValue: string;
}
export interface ExtendedServerBlobAuditingPolicyProperties {
	readonly auditActionsAndGroups?: string[] | undefined;
}
export interface ExtendedSqlPoolBlobAuditingPolicyProperties {
	readonly auditActionsAndGroups?: string[] | undefined;
}
export interface GeoBackupPolicyProperties {
	readonly state: "Disabled";
	readonly storageType?: string | undefined;
}
export interface IntegrationRuntime {
	readonly description?: string | undefined;
}
export interface IntegrationRuntimeAuthKeys {
	readonly authKey1?: string | undefined;
	readonly authKey2?: string | undefined;
}
export interface IntegrationRuntimeComputeProperties {
	readonly dataFlowProperties?: IntegrationRuntimeDataFlowProperties | undefined;
	readonly location?: string | undefined;
	readonly maxParallelExecutionsPerNode?: number | undefined;
	readonly nodeSize?: string | undefined;
	readonly numberOfNodes?: number | undefined;
	readonly vNetProperties?: IntegrationRuntimeVNetProperties | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface IntegrationRuntimeCustomSetupScriptProperties {
	readonly blobContainerUri?: string | undefined;
	readonly sasToken?: SecureString | undefined;
}
export interface IntegrationRuntimeDataFlowProperties {
	readonly computeType?: ("ComputeOptimized" | "General" | "MemoryOptimized") | undefined;
	readonly coreCount?: number | undefined;
	readonly timeToLive?: number | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface IntegrationRuntimeDataProxyProperties {
	readonly connectVia?: EntityReference | undefined;
	readonly path?: string | undefined;
	readonly stagingLinkedService?: EntityReference | undefined;
}
export interface IntegrationRuntimeSsisCatalogInfo {
	readonly catalogAdminPassword?: SecureString | undefined;
	readonly catalogAdminUserName?: string | undefined;
	readonly catalogPricingTier?: ("Basic" | "Premium" | "PremiumRS" | "Standard") | undefined;
	readonly catalogServerEndpoint?: string | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface IntegrationRuntimeSsisProperties {
	readonly catalogInfo?: IntegrationRuntimeSsisCatalogInfo | undefined;
	readonly customSetupScriptProperties?: IntegrationRuntimeCustomSetupScriptProperties | undefined;
	readonly dataProxyProperties?: IntegrationRuntimeDataProxyProperties | undefined;
	readonly edition?: ("Enterprise" | "Standard") | undefined;
	readonly expressCustomSetupProperties?: CustomSetupBase[] | undefined;
	readonly licenseType?: ("BasePrice" | "LicenseIncluded") | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface IntegrationRuntimeVNetProperties {
	readonly publicIPs?: string[] | undefined;
	readonly subnet?: string | undefined;
	readonly subnetId?: string | undefined;
	readonly vNetId?: string | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface IpFirewallRuleProperties {
	readonly endIpAddress?: string | undefined;
	readonly provisioningState?: ("DeleteError" | "Deleting" | "Failed" | "Provisioning" | "Succeeded") | undefined;
	readonly startIpAddress?: string | undefined;
}
export interface KekIdentityProperties {
	readonly userAssignedIdentity?: string | undefined;
	readonly useSystemAssignedIdentity?: any | undefined;
}
export interface KeyProperties {
	readonly isActiveCMK?: boolean | undefined;
	readonly keyVaultUrl?: string | undefined;
}
export interface LibraryInfo {
	readonly containerName?: string | undefined;
	readonly creatorId?: string | undefined;
	readonly name?: string | undefined;
	readonly path?: string | undefined;
	readonly provisioningStatus?: string | undefined;
	readonly type?: string | undefined;
	readonly uploadedTimestamp?: string | undefined;
}
export interface LibraryRequirements {
	readonly content?: string | undefined;
	readonly filename?: string | undefined;
	readonly time?: string | undefined;
}
export interface LicensedComponentSetupTypeProperties {
	readonly componentName: string;
	readonly licenseKey?: SecretBase | undefined;
}
export interface LinkedIntegrationRuntimeType {}
export interface ManagedIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned") | undefined;
	readonly userAssignedIdentities?: UserAssignedManagedIdentities | undefined;
}
export interface ManagedIdentitySqlControlSettingsModelProperties {
	readonly grantSqlControlToManagedIdentity?:
		| ManagedIdentitySqlControlSettingsModelPropertiesGrantSqlControlToManagedIdentity
		| undefined;
}
export interface ManagedIdentitySqlControlSettingsModelPropertiesGrantSqlControlToManagedIdentity {
	readonly actualState?: ("Disabled" | "Disabling" | "Enabled" | "Enabling" | "Unknown") | undefined;
	readonly desiredState?: ("Disabled" | "Enabled") | undefined;
}
export interface ManagedIntegrationRuntimeTypeProperties {
	readonly computeProperties?: IntegrationRuntimeComputeProperties | undefined;
	readonly ssisProperties?: IntegrationRuntimeSsisProperties | undefined;
}
export interface ManagedVirtualNetworkSettings {
	readonly allowedAadTenantIdsForLinking?: string[] | undefined;
	readonly linkedAccessCheckOnTargetResource?: boolean | undefined;
	readonly preventDataExfiltration?: boolean | undefined;
}
export interface MetadataSyncConfigProperties {
	readonly enabled?: boolean | undefined;
	readonly syncIntervalInMinutes?: number | undefined;
}
export interface PrivateEndpoint {
	readonly id?: string | undefined;
}
export interface PrivateEndpointConnection {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly type?: string | undefined;
}
export interface PrivateEndpointConnectionForPrivateLinkHubBasic {
	readonly id?: string | undefined;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint | undefined;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState | undefined;
	readonly provisioningState?: string | undefined;
}
export interface PrivateLinkHubProperties {
	readonly privateEndpointConnections?: PrivateEndpointConnectionForPrivateLinkHubBasic[] | undefined;
	readonly provisioningState?: string | undefined;
}
export interface PrivateLinkResourceProperties {
	readonly groupId?: string | undefined;
	readonly requiredMembers?: string[] | undefined;
	readonly requiredZoneNames?: string[] | undefined;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string | undefined;
	readonly description?: string | undefined;
	readonly status?: string | undefined;
}
export interface PurviewConfiguration {
	readonly purviewResourceId?: string | undefined;
}
export interface RecoverableSqlPoolProperties {
	readonly edition?: string | undefined;
	readonly elasticPoolName?: string | undefined;
	readonly lastAvailableBackupDate?: string | undefined;
	readonly serviceLevelObjective?: string | undefined;
}
export interface ReplicationLinkProperties {
	readonly isTerminationAllowed?: boolean | undefined;
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
export interface RestorableDroppedSqlPoolProperties {
	readonly creationDate?: string | undefined;
	readonly databaseName?: string | undefined;
	readonly deletionDate?: string | undefined;
	readonly earliestRestoreDate?: string | undefined;
	readonly edition?: string | undefined;
	readonly elasticPoolName?: string | undefined;
	readonly maxSizeBytes?: string | undefined;
	readonly serviceLevelObjective?: string | undefined;
}
export interface RestorePointProperties {
	readonly earliestRestoreDate?: string | undefined;
	readonly restorePointCreationDate?: string | undefined;
	readonly restorePointLabel?: string | undefined;
	readonly restorePointType?: "CONTINUOUS" | undefined;
}
export interface SecretBase {}
export interface SecureString {
	readonly type: string;
	readonly value: string;
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
export interface SelfHostedIntegrationRuntimeTypeProperties {
	readonly linkedInfo?: LinkedIntegrationRuntimeType | undefined;
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
export interface ServerSecurityAlertPolicyProperties {
	readonly creationTime?: string | undefined;
	readonly disabledAlerts?: string[] | undefined;
	readonly emailAccountAdmins?: boolean | undefined;
	readonly emailAddresses?: string[] | undefined;
	readonly retentionDays?: number | undefined;
	readonly state: "Disabled" | "Enabled";
	readonly storageAccountAccessKey?: string | undefined;
	readonly storageEndpoint?: string | undefined;
}
export interface ServerVulnerabilityAssessmentProperties {
	readonly recurringScans?: VulnerabilityAssessmentRecurringScansProperties | undefined;
	readonly storageAccountAccessKey?: string | undefined;
	readonly storageContainerPath: string;
	readonly storageContainerSasKey?: string | undefined;
}
export interface Sku {
	readonly capacity?: number | undefined;
	readonly name?: string | undefined;
	readonly tier?: string | undefined;
}
export interface SqlPoolBlobAuditingPolicyProperties {
	readonly auditActionsAndGroups?: string[] | undefined;
}
export interface SqlPoolColumnProperties {
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
}
export interface SqlPoolConnectionPolicyProperties {
	readonly proxyDnsName?: string | undefined;
	readonly proxyPort?: string | undefined;
	readonly redirectionState?: string | undefined;
	readonly securityEnabledAccess?: string | undefined;
	readonly state?: string | undefined;
	readonly useServerDefault?: string | undefined;
	readonly visibility?: string | undefined;
}
export interface SqlPoolResourceProperties {
	readonly collation?: string | undefined;
	readonly createMode?: ("Default" | "PointInTimeRestore" | "Recovery" | "Restore") | undefined;
}
export interface SqlPoolVulnerabilityAssessmentProperties {
	readonly recurringScans?: VulnerabilityAssessmentRecurringScansProperties | undefined;
	readonly storageAccountAccessKey?: string | undefined;
	readonly storageContainerPath?: string | undefined;
	readonly storageContainerSasKey?: string | undefined;
}
export interface SqlPoolVulnerabilityAssessmentRuleBaselineItem {
	readonly result: string[];
}
export interface SqlPoolVulnerabilityAssessmentRuleBaselineProperties {
	readonly baselineResults: SqlPoolVulnerabilityAssessmentRuleBaselineItem[];
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface TransparentDataEncryptionProperties {
	readonly status?: "Disabled" | undefined;
}
export interface UserAssignedManagedIdentities {
	readonly "[ key: string ]"?: UserAssignedManagedIdentity | undefined;
}
export interface UserAssignedManagedIdentity {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export interface VirtualNetworkProfile {
	readonly computeSubnetId?: string | undefined;
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
export interface WorkspaceKeyDetails {
	readonly keyVaultUrl?: string | undefined;
	readonly name?: string | undefined;
}
export interface WorkspaceProperties {
	readonly adlaResourceId?: string | undefined;
	readonly connectivityEndpoints?: WorkspacePropertiesConnectivityEndpoints | undefined;
	readonly cspWorkspaceAdminProperties?: CspWorkspaceAdminProperties | undefined;
	readonly defaultDataLakeStorage?: DataLakeStorageAccountDetails | undefined;
	readonly encryption?: EncryptionDetails | undefined;
	readonly extraProperties?: WorkspacePropertiesExtraProperties | undefined;
	readonly managedResourceGroupName?: string | undefined;
	readonly managedVirtualNetwork?: string | undefined;
	readonly managedVirtualNetworkSettings?: ManagedVirtualNetworkSettings | undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
	readonly purviewConfiguration?: PurviewConfiguration | undefined;
	readonly sqlAdministratorLogin?: string | undefined;
	readonly sqlAdministratorLoginPassword?: string | undefined;
	readonly virtualNetworkProfile?: VirtualNetworkProfile | undefined;
	readonly workspaceRepositoryConfiguration?: WorkspaceRepositoryConfiguration | undefined;
	readonly workspaceUID?: string | undefined;
}
export interface WorkspacePropertiesConnectivityEndpoints {
	readonly "[ key: string ]"?: string | undefined;
}
export interface WorkspacePropertiesExtraProperties {
	readonly "[ key: string ]"?: any | undefined;
}
export interface WorkspaceRepositoryConfiguration {
	readonly accountName?: string | undefined;
	readonly collaborationBranch?: string | undefined;
	readonly hostName?: string | undefined;
	readonly lastCommitId?: string | undefined;
	readonly projectName?: string | undefined;
	readonly repositoryName?: string | undefined;
	readonly rootFolder?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: string | undefined;
}
export default {
	privateLinkHubs: privateLinkHubs,
	"privateLinkHubs/privateLinkResources": privateLinkHubs_privateLinkResources,
	workspaces: workspaces,
	"workspaces/administrators": workspaces_administrators,
	"workspaces/auditingSettings": workspaces_auditingSettings,
	"workspaces/bigDataPools": workspaces_bigDataPools,
	"workspaces/encryptionProtector": workspaces_encryptionProtector,
	"workspaces/extendedAuditingSettings": workspaces_extendedAuditingSettings,
	"workspaces/firewallRules": workspaces_firewallRules,
	"workspaces/integrationRuntimes": workspaces_integrationRuntimes,
	"workspaces/keys": workspaces_keys,
	"workspaces/libraries": workspaces_libraries,
	"workspaces/managedIdentitySqlControlSettings": workspaces_managedIdentitySqlControlSettings,
	"workspaces/privateEndpointConnections": workspaces_privateEndpointConnections,
	"workspaces/privateLinkResources": workspaces_privateLinkResources,
	"workspaces/recoverableSqlPools": workspaces_recoverableSqlPools,
	"workspaces/restorableDroppedSqlPools": workspaces_restorableDroppedSqlPools,
	"workspaces/securityAlertPolicies": workspaces_securityAlertPolicies,
	"workspaces/sqlAdministrators": workspaces_sqlAdministrators,
	"workspaces/sqlPools": workspaces_sqlPools,
	"workspaces/sqlPools/auditingSettings": workspaces_sqlPools_auditingSettings,
	"workspaces/sqlPools/connectionPolicies": workspaces_sqlPools_connectionPolicies,
	"workspaces/sqlPools/dataMaskingPolicies": workspaces_sqlPools_dataMaskingPolicies,
	"workspaces/sqlPools/dataMaskingPolicies/rules": workspaces_sqlPools_dataMaskingPolicies_rules,
	"workspaces/sqlPools/dataWarehouseUserActivities": workspaces_sqlPools_dataWarehouseUserActivities,
	"workspaces/sqlPools/extendedAuditingSettings": workspaces_sqlPools_extendedAuditingSettings,
	"workspaces/sqlPools/geoBackupPolicies": workspaces_sqlPools_geoBackupPolicies,
	"workspaces/sqlPools/metadataSync": workspaces_sqlPools_metadataSync,
	"workspaces/sqlPools/replicationLinks": workspaces_sqlPools_replicationLinks,
	"workspaces/sqlPools/restorePoints": workspaces_sqlPools_restorePoints,
	"workspaces/sqlPools/schemas": workspaces_sqlPools_schemas,
	"workspaces/sqlPools/schemas/tables": workspaces_sqlPools_schemas_tables,
	"workspaces/sqlPools/schemas/tables/columns": workspaces_sqlPools_schemas_tables_columns,
	"workspaces/sqlPools/schemas/tables/columns/sensitivityLabels":
		workspaces_sqlPools_schemas_tables_columns_sensitivityLabels,
	"workspaces/sqlPools/securityAlertPolicies": workspaces_sqlPools_securityAlertPolicies,
	"workspaces/sqlPools/transparentDataEncryption": workspaces_sqlPools_transparentDataEncryption,
	"workspaces/sqlPools/vulnerabilityAssessments": workspaces_sqlPools_vulnerabilityAssessments,
	"workspaces/sqlPools/vulnerabilityAssessments/rules/baselines":
		workspaces_sqlPools_vulnerabilityAssessments_rules_baselines,
	"workspaces/sqlPools/vulnerabilityAssessments/scans": workspaces_sqlPools_vulnerabilityAssessments_scans,
	"workspaces/sqlPools/workloadGroups": workspaces_sqlPools_workloadGroups,
	"workspaces/sqlPools/workloadGroups/workloadClassifiers": workspaces_sqlPools_workloadGroups_workloadClassifiers,
	"workspaces/vulnerabilityAssessments": workspaces_vulnerabilityAssessments,
};
