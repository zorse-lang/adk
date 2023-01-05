import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class privateLinkHubs
	extends ArmResource<privateLinkHubsComponentInputs>
	implements privateLinkHubsComponentOutputs
{
	constructor(entity: ADKEntity, options: privateLinkHubsComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/privateLinkHubs", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/privateLinkHubs";
}
export interface privateLinkHubsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/privateLinkHubs";
}
export interface privateLinkHubsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: PrivateLinkHubProperties;
	readonly tags?: TrackedResourceTags;
}
export class privateLinkHubs_privateLinkResources
	extends ArmResource<privateLinkHubs_privateLinkResourcesComponentInputs>
	implements privateLinkHubs_privateLinkResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: privateLinkHubs_privateLinkResourcesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Synapse/privateLinkHubs/privateLinkResources",
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/privateLinkHubs/privateLinkResources";
}
export interface privateLinkHubs_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/privateLinkHubs/privateLinkResources";
}
export interface privateLinkHubs_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties;
}
export class workspaces extends ArmResource<workspacesComponentInputs> implements workspacesComponentOutputs {
	constructor(entity: ADKEntity, options: workspacesComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces";
}
export interface workspacesComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces";
}
export interface workspacesComponentInputs {
	readonly identity?: ManagedIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties?: WorkspaceProperties;
	readonly tags?: TrackedResourceTags;
}
export class workspaces_administrators
	extends ArmResource<workspaces_administratorsComponentInputs>
	implements workspaces_administratorsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_administratorsComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/administrators", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/administrators";
}
export interface workspaces_administratorsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/administrators";
}
export interface workspaces_administratorsComponentInputs {
	readonly name: string;
	readonly properties?: AadAdminProperties;
}
export class workspaces_auditingSettings
	extends ArmResource<workspaces_auditingSettingsComponentInputs>
	implements workspaces_auditingSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_auditingSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/auditingSettings", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/auditingSettings";
}
export interface workspaces_auditingSettingsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/auditingSettings";
}
export interface workspaces_auditingSettingsComponentInputs {
	readonly name: string;
	readonly properties?: ServerBlobAuditingPolicyProperties;
}
export class workspaces_azureADOnlyAuthentications
	extends ArmResource<workspaces_azureADOnlyAuthenticationsComponentInputs>
	implements workspaces_azureADOnlyAuthenticationsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_azureADOnlyAuthenticationsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Synapse/workspaces/azureADOnlyAuthentications",
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/azureADOnlyAuthentications";
}
export interface workspaces_azureADOnlyAuthenticationsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/azureADOnlyAuthentications";
}
export interface workspaces_azureADOnlyAuthenticationsComponentInputs {
	readonly name: string;
	readonly properties?: AzureADOnlyAuthenticationProperties;
}
export class workspaces_bigDataPools
	extends ArmResource<workspaces_bigDataPoolsComponentInputs>
	implements workspaces_bigDataPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_bigDataPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/bigDataPools", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/bigDataPools";
}
export interface workspaces_bigDataPoolsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/bigDataPools";
}
export interface workspaces_bigDataPoolsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: BigDataPoolResourceProperties;
	readonly tags?: TrackedResourceTags;
}
export class workspaces_dedicatedSQLminimalTlsSettings
	extends ArmResource<workspaces_dedicatedSQLminimalTlsSettingsComponentInputs>
	implements workspaces_dedicatedSQLminimalTlsSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_dedicatedSQLminimalTlsSettingsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Synapse/workspaces/dedicatedSQLminimalTlsSettings",
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/dedicatedSQLminimalTlsSettings";
}
export interface workspaces_dedicatedSQLminimalTlsSettingsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/dedicatedSQLminimalTlsSettings";
}
export interface workspaces_dedicatedSQLminimalTlsSettingsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: DedicatedSQLminimalTlsSettingsProperties;
}
export class workspaces_encryptionProtector
	extends ArmResource<workspaces_encryptionProtectorComponentInputs>
	implements workspaces_encryptionProtectorComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_encryptionProtectorComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/encryptionProtector", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/encryptionProtector";
}
export interface workspaces_encryptionProtectorComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/encryptionProtector";
}
export interface workspaces_encryptionProtectorComponentInputs {
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: EncryptionProtectorProperties;
}
export class workspaces_extendedAuditingSettings
	extends ArmResource<workspaces_extendedAuditingSettingsComponentInputs>
	implements workspaces_extendedAuditingSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_extendedAuditingSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/extendedAuditingSettings", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/extendedAuditingSettings";
}
export interface workspaces_extendedAuditingSettingsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/extendedAuditingSettings";
}
export interface workspaces_extendedAuditingSettingsComponentInputs {
	readonly name: string;
	readonly properties?: ExtendedServerBlobAuditingPolicyProperties;
}
export class workspaces_firewallRules
	extends ArmResource<workspaces_firewallRulesComponentInputs>
	implements workspaces_firewallRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_firewallRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/firewallRules", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/firewallRules";
}
export interface workspaces_firewallRulesComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/firewallRules";
}
export interface workspaces_firewallRulesComponentInputs {
	readonly name: string;
	readonly properties?: IpFirewallRuleProperties;
}
export class workspaces_integrationRuntimes
	extends ArmResource<workspaces_integrationRuntimesComponentInputs>
	implements workspaces_integrationRuntimesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_integrationRuntimesComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/integrationRuntimes", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/integrationRuntimes";
}
export interface workspaces_integrationRuntimesComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/integrationRuntimes";
}
export interface workspaces_integrationRuntimesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties: IntegrationRuntime;
}
export class workspaces_keys
	extends ArmResource<workspaces_keysComponentInputs>
	implements workspaces_keysComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_keysComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/keys", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/keys";
}
export interface workspaces_keysComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/keys";
}
export interface workspaces_keysComponentInputs {
	readonly name: string;
	readonly properties?: KeyProperties;
}
export class workspaces_kustoPools
	extends ArmResource<workspaces_kustoPoolsComponentInputs>
	implements workspaces_kustoPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_kustoPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/kustoPools", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/kustoPools";
}
export interface workspaces_kustoPoolsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/kustoPools";
}
export interface workspaces_kustoPoolsComponentInputs {
	readonly etag?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: KustoPoolProperties;
	readonly sku: AzureSku;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class workspaces_kustoPools_attachedDatabaseConfigurations
	extends ArmResource<workspaces_kustoPools_attachedDatabaseConfigurationsComponentInputs>
	implements workspaces_kustoPools_attachedDatabaseConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_kustoPools_attachedDatabaseConfigurationsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Synapse/workspaces/kustoPools/attachedDatabaseConfigurations",
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/kustoPools/attachedDatabaseConfigurations";
}
export interface workspaces_kustoPools_attachedDatabaseConfigurationsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/kustoPools/attachedDatabaseConfigurations";
}
export interface workspaces_kustoPools_attachedDatabaseConfigurationsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: AttachedDatabaseConfigurationProperties;
	readonly systemData?: SystemData;
}
export class workspaces_kustoPools_databases_ReadOnlyFollowing
	extends ArmResource<workspaces_kustoPools_databases_ReadOnlyFollowingComponentInputs>
	implements workspaces_kustoPools_databases_ReadOnlyFollowingComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_kustoPools_databases_ReadOnlyFollowingComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/kustoPools/databases", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/kustoPools/databases";
}
export interface workspaces_kustoPools_databases_ReadOnlyFollowingComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/kustoPools/databases";
}
export interface workspaces_kustoPools_databases_ReadOnlyFollowingComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "ReadOnlyFollowing";
	readonly properties?: ReadOnlyFollowingDatabaseProperties;
}
export class workspaces_kustoPools_databases_ReadWrite
	extends ArmResource<workspaces_kustoPools_databases_ReadWriteComponentInputs>
	implements workspaces_kustoPools_databases_ReadWriteComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_kustoPools_databases_ReadWriteComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/kustoPools/databases", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/kustoPools/databases";
}
export interface workspaces_kustoPools_databases_ReadWriteComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/kustoPools/databases";
}
export interface workspaces_kustoPools_databases_ReadWriteComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "ReadWrite";
	readonly properties?: ReadWriteDatabaseProperties;
}
export class workspaces_kustoPools_databases_dataConnections_EventGrid
	extends ArmResource<workspaces_kustoPools_databases_dataConnections_EventGridComponentInputs>
	implements workspaces_kustoPools_databases_dataConnections_EventGridComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_kustoPools_databases_dataConnections_EventGridComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Synapse/workspaces/kustoPools/databases/dataConnections",
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/kustoPools/databases/dataConnections";
}
export interface workspaces_kustoPools_databases_dataConnections_EventGridComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/kustoPools/databases/dataConnections";
}
export interface workspaces_kustoPools_databases_dataConnections_EventGridComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "EventGrid";
	readonly properties?: EventGridConnectionProperties;
}
export class workspaces_kustoPools_databases_dataConnections_EventHub
	extends ArmResource<workspaces_kustoPools_databases_dataConnections_EventHubComponentInputs>
	implements workspaces_kustoPools_databases_dataConnections_EventHubComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_kustoPools_databases_dataConnections_EventHubComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Synapse/workspaces/kustoPools/databases/dataConnections",
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/kustoPools/databases/dataConnections";
}
export interface workspaces_kustoPools_databases_dataConnections_EventHubComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/kustoPools/databases/dataConnections";
}
export interface workspaces_kustoPools_databases_dataConnections_EventHubComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "EventHub";
	readonly properties?: EventHubConnectionProperties;
}
export class workspaces_kustoPools_databases_dataConnections_IotHub
	extends ArmResource<workspaces_kustoPools_databases_dataConnections_IotHubComponentInputs>
	implements workspaces_kustoPools_databases_dataConnections_IotHubComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_kustoPools_databases_dataConnections_IotHubComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Synapse/workspaces/kustoPools/databases/dataConnections",
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/kustoPools/databases/dataConnections";
}
export interface workspaces_kustoPools_databases_dataConnections_IotHubComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/kustoPools/databases/dataConnections";
}
export interface workspaces_kustoPools_databases_dataConnections_IotHubComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "IotHub";
	readonly properties?: IotHubConnectionProperties;
}
export class workspaces_kustoPools_databases_principalAssignments
	extends ArmResource<workspaces_kustoPools_databases_principalAssignmentsComponentInputs>
	implements workspaces_kustoPools_databases_principalAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_kustoPools_databases_principalAssignmentsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Synapse/workspaces/kustoPools/databases/principalAssignments",
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/kustoPools/databases/principalAssignments";
}
export interface workspaces_kustoPools_databases_principalAssignmentsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/kustoPools/databases/principalAssignments";
}
export interface workspaces_kustoPools_databases_principalAssignmentsComponentInputs {
	readonly name: string;
	readonly properties?: DatabasePrincipalProperties;
	readonly systemData?: SystemData;
}
export class workspaces_kustoPools_principalAssignments
	extends ArmResource<workspaces_kustoPools_principalAssignmentsComponentInputs>
	implements workspaces_kustoPools_principalAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_kustoPools_principalAssignmentsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Synapse/workspaces/kustoPools/principalAssignments",
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/kustoPools/principalAssignments";
}
export interface workspaces_kustoPools_principalAssignmentsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/kustoPools/principalAssignments";
}
export interface workspaces_kustoPools_principalAssignmentsComponentInputs {
	readonly name: string;
	readonly properties?: ClusterPrincipalProperties;
	readonly systemData?: SystemData;
}
export class workspaces_libraries
	extends ArmResource<workspaces_librariesComponentInputs>
	implements workspaces_librariesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_librariesComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/libraries", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/libraries";
}
export interface workspaces_librariesComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/libraries";
}
export interface workspaces_librariesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: LibraryInfo;
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
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/managedIdentitySqlControlSettings";
}
export interface workspaces_managedIdentitySqlControlSettingsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/managedIdentitySqlControlSettings";
}
export interface workspaces_managedIdentitySqlControlSettingsComponentInputs {
	readonly name: string;
	readonly properties?: ManagedIdentitySqlControlSettingsModelProperties;
}
export class workspaces_privateEndpointConnections
	extends ArmResource<workspaces_privateEndpointConnectionsComponentInputs>
	implements workspaces_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Synapse/workspaces/privateEndpointConnections",
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/privateEndpointConnections";
}
export interface workspaces_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/privateEndpointConnections";
}
export interface workspaces_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
}
export class workspaces_privateLinkResources
	extends ArmResource<workspaces_privateLinkResourcesComponentInputs>
	implements workspaces_privateLinkResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_privateLinkResourcesComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/privateLinkResources", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/privateLinkResources";
}
export interface workspaces_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/privateLinkResources";
}
export interface workspaces_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties;
}
export class workspaces_recoverableSqlPools
	extends ArmResource<workspaces_recoverableSqlPoolsComponentInputs>
	implements workspaces_recoverableSqlPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_recoverableSqlPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/recoverableSqlPools", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/recoverableSqlPools";
}
export interface workspaces_recoverableSqlPoolsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/recoverableSqlPools";
}
export interface workspaces_recoverableSqlPoolsComponentInputs {
	readonly name: string;
	readonly properties?: RecoverableSqlPoolProperties;
}
export class workspaces_restorableDroppedSqlPools
	extends ArmResource<workspaces_restorableDroppedSqlPoolsComponentInputs>
	implements workspaces_restorableDroppedSqlPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_restorableDroppedSqlPoolsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Synapse/workspaces/restorableDroppedSqlPools",
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/restorableDroppedSqlPools";
}
export interface workspaces_restorableDroppedSqlPoolsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/restorableDroppedSqlPools";
}
export interface workspaces_restorableDroppedSqlPoolsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: RestorableDroppedSqlPoolProperties;
}
export class workspaces_securityAlertPolicies
	extends ArmResource<workspaces_securityAlertPoliciesComponentInputs>
	implements workspaces_securityAlertPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_securityAlertPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/securityAlertPolicies", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/securityAlertPolicies";
}
export interface workspaces_securityAlertPoliciesComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/securityAlertPolicies";
}
export interface workspaces_securityAlertPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: ServerSecurityAlertPolicyProperties;
}
export class workspaces_sparkconfigurations
	extends ArmResource<workspaces_sparkconfigurationsComponentInputs>
	implements workspaces_sparkconfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sparkconfigurationsComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/sparkconfigurations", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sparkconfigurations";
}
export interface workspaces_sparkconfigurationsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sparkconfigurations";
}
export interface workspaces_sparkconfigurationsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: SparkConfigurationInfo;
}
export class workspaces_sqlAdministrators
	extends ArmResource<workspaces_sqlAdministratorsComponentInputs>
	implements workspaces_sqlAdministratorsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sqlAdministratorsComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/sqlAdministrators", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlAdministrators";
}
export interface workspaces_sqlAdministratorsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlAdministrators";
}
export interface workspaces_sqlAdministratorsComponentInputs {
	readonly name: string;
	readonly properties?: AadAdminProperties;
}
export class workspaces_sqlPools
	extends ArmResource<workspaces_sqlPoolsComponentInputs>
	implements workspaces_sqlPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sqlPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/sqlPools", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools";
}
export interface workspaces_sqlPoolsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools";
}
export interface workspaces_sqlPoolsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: SqlPoolResourceProperties;
	readonly sku?: Sku;
	readonly tags?: TrackedResourceTags;
}
export class workspaces_sqlPools_auditingSettings
	extends ArmResource<workspaces_sqlPools_auditingSettingsComponentInputs>
	implements workspaces_sqlPools_auditingSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sqlPools_auditingSettingsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Synapse/workspaces/sqlPools/auditingSettings",
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/auditingSettings";
}
export interface workspaces_sqlPools_auditingSettingsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/auditingSettings";
}
export interface workspaces_sqlPools_auditingSettingsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: SqlPoolBlobAuditingPolicyProperties;
}
export class workspaces_sqlPools_connectionPolicies
	extends ArmResource<workspaces_sqlPools_connectionPoliciesComponentInputs>
	implements workspaces_sqlPools_connectionPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sqlPools_connectionPoliciesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Synapse/workspaces/sqlPools/connectionPolicies",
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/connectionPolicies";
}
export interface workspaces_sqlPools_connectionPoliciesComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/connectionPolicies";
}
export interface workspaces_sqlPools_connectionPoliciesComponentInputs {
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: SqlPoolConnectionPolicyProperties;
}
export class workspaces_sqlPools_dataMaskingPolicies
	extends ArmResource<workspaces_sqlPools_dataMaskingPoliciesComponentInputs>
	implements workspaces_sqlPools_dataMaskingPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sqlPools_dataMaskingPoliciesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies",
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies";
}
export interface workspaces_sqlPools_dataMaskingPoliciesComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies";
}
export interface workspaces_sqlPools_dataMaskingPoliciesComponentInputs {
	readonly kind?: string;
	readonly location?: string;
	readonly managedBy?: string;
	readonly name: string;
	readonly properties?: DataMaskingPolicyProperties;
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
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies/rules";
}
export interface workspaces_sqlPools_dataMaskingPolicies_rulesComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies/rules";
}
export interface workspaces_sqlPools_dataMaskingPolicies_rulesComponentInputs {
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: DataMaskingRuleProperties;
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
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/dataWarehouseUserActivities";
}
export interface workspaces_sqlPools_dataWarehouseUserActivitiesComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/dataWarehouseUserActivities";
}
export interface workspaces_sqlPools_dataWarehouseUserActivitiesComponentInputs {
	readonly name: string;
	readonly properties?: DataWarehouseUserActivitiesProperties;
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
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/extendedAuditingSettings";
}
export interface workspaces_sqlPools_extendedAuditingSettingsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/extendedAuditingSettings";
}
export interface workspaces_sqlPools_extendedAuditingSettingsComponentInputs {
	readonly name: string;
	readonly properties?: ExtendedSqlPoolBlobAuditingPolicyProperties;
}
export class workspaces_sqlPools_geoBackupPolicies
	extends ArmResource<workspaces_sqlPools_geoBackupPoliciesComponentInputs>
	implements workspaces_sqlPools_geoBackupPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sqlPools_geoBackupPoliciesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Synapse/workspaces/sqlPools/geoBackupPolicies",
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/geoBackupPolicies";
}
export interface workspaces_sqlPools_geoBackupPoliciesComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/geoBackupPolicies";
}
export interface workspaces_sqlPools_geoBackupPoliciesComponentInputs {
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties: GeoBackupPolicyProperties;
}
export class workspaces_sqlPools_metadataSync
	extends ArmResource<workspaces_sqlPools_metadataSyncComponentInputs>
	implements workspaces_sqlPools_metadataSyncComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sqlPools_metadataSyncComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/sqlPools/metadataSync", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/metadataSync";
}
export interface workspaces_sqlPools_metadataSyncComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/metadataSync";
}
export interface workspaces_sqlPools_metadataSyncComponentInputs {
	readonly name: string;
	readonly properties?: MetadataSyncConfigProperties;
}
export class workspaces_sqlPools_operationResults
	extends ArmResource<workspaces_sqlPools_operationResultsComponentInputs>
	implements workspaces_sqlPools_operationResultsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sqlPools_operationResultsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Synapse/workspaces/sqlPools/operationResults",
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/operationResults";
}
export interface workspaces_sqlPools_operationResultsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/operationResults";
}
export interface workspaces_sqlPools_operationResultsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: SqlPoolResourceProperties;
	readonly sku?: Sku;
	readonly tags?: TrackedResourceTags;
}
export class workspaces_sqlPools_replicationLinks
	extends ArmResource<workspaces_sqlPools_replicationLinksComponentInputs>
	implements workspaces_sqlPools_replicationLinksComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sqlPools_replicationLinksComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Synapse/workspaces/sqlPools/replicationLinks",
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/replicationLinks";
}
export interface workspaces_sqlPools_replicationLinksComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/replicationLinks";
}
export interface workspaces_sqlPools_replicationLinksComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: ReplicationLinkProperties;
}
export class workspaces_sqlPools_restorePoints
	extends ArmResource<workspaces_sqlPools_restorePointsComponentInputs>
	implements workspaces_sqlPools_restorePointsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sqlPools_restorePointsComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/sqlPools/restorePoints", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/restorePoints";
}
export interface workspaces_sqlPools_restorePointsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/restorePoints";
}
export interface workspaces_sqlPools_restorePointsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: RestorePointProperties;
}
export class workspaces_sqlPools_schemas
	extends ArmResource<workspaces_sqlPools_schemasComponentInputs>
	implements workspaces_sqlPools_schemasComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sqlPools_schemasComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/sqlPools/schemas", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/schemas";
}
export interface workspaces_sqlPools_schemasComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
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
		super(entity, options.name, "Microsoft.Synapse/workspaces/sqlPools/schemas/tables", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/schemas/tables";
}
export interface workspaces_sqlPools_schemas_tablesComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
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
		super(
			entity,
			options.name,
			"Microsoft.Synapse/workspaces/sqlPools/schemas/tables/columns",
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/schemas/tables/columns";
}
export interface workspaces_sqlPools_schemas_tables_columnsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/schemas/tables/columns";
}
export interface workspaces_sqlPools_schemas_tables_columnsComponentInputs {
	readonly name: string;
	readonly properties?: SqlPoolColumnProperties;
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
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/schemas/tables/columns/sensitivityLabels";
}
export interface workspaces_sqlPools_schemas_tables_columns_sensitivityLabelsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/schemas/tables/columns/sensitivityLabels";
}
export interface workspaces_sqlPools_schemas_tables_columns_sensitivityLabelsComponentInputs {
	readonly managedBy?: string;
	readonly name: string;
	readonly properties?: SensitivityLabelProperties;
}
export class workspaces_sqlPools_securityAlertPolicies
	extends ArmResource<workspaces_sqlPools_securityAlertPoliciesComponentInputs>
	implements workspaces_sqlPools_securityAlertPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sqlPools_securityAlertPoliciesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Synapse/workspaces/sqlPools/securityAlertPolicies",
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/securityAlertPolicies";
}
export interface workspaces_sqlPools_securityAlertPoliciesComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/securityAlertPolicies";
}
export interface workspaces_sqlPools_securityAlertPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: SecurityAlertPolicyProperties;
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
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/transparentDataEncryption";
}
export interface workspaces_sqlPools_transparentDataEncryptionComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/transparentDataEncryption";
}
export interface workspaces_sqlPools_transparentDataEncryptionComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: TransparentDataEncryptionProperties;
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
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments";
}
export interface workspaces_sqlPools_vulnerabilityAssessmentsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments";
}
export interface workspaces_sqlPools_vulnerabilityAssessmentsComponentInputs {
	readonly name: string;
	readonly properties?: SqlPoolVulnerabilityAssessmentProperties;
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
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments/rules/baselines";
}
export interface workspaces_sqlPools_vulnerabilityAssessments_rules_baselinesComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments/rules/baselines";
}
export interface workspaces_sqlPools_vulnerabilityAssessments_rules_baselinesComponentInputs {
	readonly name: string;
	readonly properties?: SqlPoolVulnerabilityAssessmentRuleBaselineProperties;
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
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments/scans";
}
export interface workspaces_sqlPools_vulnerabilityAssessments_scansComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments/scans";
}
export interface workspaces_sqlPools_vulnerabilityAssessments_scansComponentInputs {
	readonly name: string;
	readonly properties?: VulnerabilityAssessmentScanRecordProperties;
}
export class workspaces_sqlPools_workloadGroups
	extends ArmResource<workspaces_sqlPools_workloadGroupsComponentInputs>
	implements workspaces_sqlPools_workloadGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_sqlPools_workloadGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/sqlPools/workloadGroups", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/workloadGroups";
}
export interface workspaces_sqlPools_workloadGroupsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/workloadGroups";
}
export interface workspaces_sqlPools_workloadGroupsComponentInputs {
	readonly name: string;
	readonly properties?: WorkloadGroupProperties;
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
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/sqlPools/workloadGroups/workloadClassifiers";
}
export interface workspaces_sqlPools_workloadGroups_workloadClassifiersComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/sqlPools/workloadGroups/workloadClassifiers";
}
export interface workspaces_sqlPools_workloadGroups_workloadClassifiersComponentInputs {
	readonly name: string;
	readonly properties?: WorkloadClassifierProperties;
}
export class workspaces_trustedServiceByPassConfiguration
	extends ArmResource<workspaces_trustedServiceByPassConfigurationComponentInputs>
	implements workspaces_trustedServiceByPassConfigurationComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_trustedServiceByPassConfigurationComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Synapse/workspaces/trustedServiceByPassConfiguration",
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/trustedServiceByPassConfiguration";
}
export interface workspaces_trustedServiceByPassConfigurationComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/trustedServiceByPassConfiguration";
}
export interface workspaces_trustedServiceByPassConfigurationComponentInputs {
	readonly name: string;
}
export class workspaces_vulnerabilityAssessments
	extends ArmResource<workspaces_vulnerabilityAssessmentsComponentInputs>
	implements workspaces_vulnerabilityAssessmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_vulnerabilityAssessmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Synapse/workspaces/vulnerabilityAssessments", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Synapse/workspaces/vulnerabilityAssessments";
}
export interface workspaces_vulnerabilityAssessmentsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Synapse/workspaces/vulnerabilityAssessments";
}
export interface workspaces_vulnerabilityAssessmentsComponentInputs {
	readonly name: string;
	readonly properties?: ServerVulnerabilityAssessmentProperties;
}
export function listAuthKeys(resource: workspaces_integrationRuntimes): IntegrationRuntimeAuthKeys {
	if (resource.apiVersion !== "2021-06-01-preview") {
		throw new Error(`listAuthKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Synapse/workspaces/integrationRuntimes") {
		throw new Error(`listAuthKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listFollowerDatabases(resource: workspaces_kustoPools): FollowerDatabaseListResult {
	if (resource.apiVersion !== "2021-06-01-preview") {
		throw new Error(`listFollowerDatabases is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Synapse/workspaces/kustoPools") {
		throw new Error(`listFollowerDatabases is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listLanguageExtensions(resource: workspaces_kustoPools): LanguageExtensionsList {
	if (resource.apiVersion !== "2021-06-01-preview") {
		throw new Error(`listLanguageExtensions is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Synapse/workspaces/kustoPools") {
		throw new Error(`listLanguageExtensions is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AadAdminProperties {
	readonly administratorType?: string;
	readonly login?: string;
	readonly sid?: string;
	readonly tenantId?: string;
}
export interface AttachedDatabaseConfigurationProperties {
	readonly attachedDatabaseNames?: string[];
	readonly clusterResourceId: string;
	readonly databaseName: string;
	readonly defaultPrincipalsModificationKind: "None" | "Replace" | "Union";
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded";
	readonly tableLevelSharingProperties?: TableLevelSharingProperties;
}
export interface AutoPauseProperties {
	readonly delayInMinutes?: number;
	readonly enabled?: boolean;
}
export interface AutoScaleProperties {
	readonly enabled?: boolean;
	readonly maxNodeCount?: number;
	readonly minNodeCount?: number;
}
export interface AzureADOnlyAuthenticationProperties {
	readonly azureADOnlyAuthentication: boolean;
	readonly creationDate?: string;
	readonly state?: "Consistent" | "InConsistent" | "Updating";
}
export interface AzureSku {
	readonly capacity?: number;
	readonly name: "Compute optimized" | "Storage optimized";
	readonly size: "Extra small" | "Large" | "Medium" | "Small";
}
export interface BigDataPoolResourceProperties {
	readonly autoPause?: AutoPauseProperties;
	readonly autoScale?: AutoScaleProperties;
	readonly cacheSize?: number;
	readonly creationDate?: string;
	readonly customLibraries?: LibraryInfo[];
	readonly defaultSparkLogFolder?: string;
	readonly dynamicExecutorAllocation?: DynamicExecutorAllocation;
	readonly isAutotuneEnabled?: boolean;
	readonly isComputeIsolationEnabled?: boolean;
	readonly lastSucceededTimestamp?: string;
	readonly libraryRequirements?: LibraryRequirements;
	readonly nodeCount?: number;
	readonly nodeSize?: "Large" | "Medium" | "None" | "Small" | "XLarge" | "XXLarge" | "XXXLarge";
	readonly nodeSizeFamily?: "HardwareAcceleratedFPGA" | "HardwareAcceleratedGPU" | "MemoryOptimized" | "None";
	readonly provisioningState?: string;
	readonly sessionLevelPackagesEnabled?: boolean;
	readonly sparkConfigProperties?: SparkConfigProperties;
	readonly sparkEventsFolder?: string;
	readonly sparkVersion?: string;
}
export interface ClusterPrincipalProperties {
	readonly aadObjectId?: string;
	readonly principalId: string;
	readonly principalName?: string;
	readonly principalType: "App" | "Group" | "User";
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded";
	readonly role: "AllDatabasesAdmin" | "AllDatabasesViewer";
	readonly tenantId?: string;
	readonly tenantName?: string;
}
export interface CmdkeySetupTypeProperties {
	readonly password: SecretBase;
	readonly targetName: any;
	readonly userName: any;
}
export interface CspWorkspaceAdminProperties {
	readonly initialWorkspaceAdminObjectId?: string;
}
export interface CustomerManagedKeyDetails {
	readonly kekIdentity?: KekIdentityProperties;
	readonly key?: WorkspaceKeyDetails;
	readonly status?: string;
}
export interface CustomSetupBase {}
export interface DatabasePrincipalProperties {
	readonly aadObjectId?: string;
	readonly principalId: string;
	readonly principalName?: string;
	readonly principalType: "App" | "Group" | "User";
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded";
	readonly role: "Admin" | "Ingestor" | "Monitor" | "UnrestrictedViewer" | "User" | "Viewer";
	readonly tenantId?: string;
	readonly tenantName?: string;
}
export interface DatabaseStatistics {
	readonly size?: number;
}
export interface DataLakeStorageAccountDetails {
	readonly accountUrl?: string;
	readonly createManagedPrivateEndpoint?: boolean;
	readonly filesystem?: string;
	readonly resourceId?: string;
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
export interface DataWarehouseUserActivitiesProperties {
	readonly activeQueriesCount?: number;
}
export interface DedicatedSQLminimalTlsSettingsProperties {
	readonly minimalTlsVersion?: string;
}
export interface DynamicExecutorAllocation {
	readonly enabled?: boolean;
	readonly maxExecutors?: number;
	readonly minExecutors?: number;
}
export interface EncryptionDetails {
	readonly cmk?: CustomerManagedKeyDetails;
	readonly doubleEncryptionEnabled?: boolean;
}
export interface EncryptionProtectorProperties {
	readonly serverKeyName?: string;
	readonly serverKeyType: "AzureKeyVault" | "ServiceManaged";
	readonly subregion?: string;
	readonly thumbprint?: string;
	readonly uri?: string;
}
export interface EntityReference {
	readonly referenceName?: string;
	readonly type?: "IntegrationRuntimeReference" | "LinkedServiceReference";
}
export interface EnvironmentVariableSetupTypeProperties {
	readonly variableName: string;
	readonly variableValue: string;
}
export interface EventGridConnectionProperties {
	readonly blobStorageEventType?: "Microsoft.Storage.BlobCreated" | "Microsoft.Storage.BlobRenamed";
	readonly consumerGroup: string;
	readonly dataFormat?:
		| "APACHEAVRO"
		| "AVRO"
		| "CSV"
		| "JSON"
		| "MULTIJSON"
		| "ORC"
		| "PARQUET"
		| "PSV"
		| "RAW"
		| "SCSV"
		| "SINGLEJSON"
		| "SOHSV"
		| "TSV"
		| "TSVE"
		| "TXT"
		| "W3CLOGFILE";
	readonly eventHubResourceId: string;
	readonly ignoreFirstRecord?: boolean;
	readonly mappingRuleName?: string;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded";
	readonly storageAccountResourceId: string;
	readonly tableName?: string;
}
export interface EventHubConnectionProperties {
	readonly compression?: "GZip" | "None";
	readonly consumerGroup: string;
	readonly dataFormat?:
		| "APACHEAVRO"
		| "AVRO"
		| "CSV"
		| "JSON"
		| "MULTIJSON"
		| "ORC"
		| "PARQUET"
		| "PSV"
		| "RAW"
		| "SCSV"
		| "SINGLEJSON"
		| "SOHSV"
		| "TSV"
		| "TSVE"
		| "TXT"
		| "W3CLOGFILE";
	readonly eventHubResourceId: string;
	readonly eventSystemProperties?: string[];
	readonly managedIdentityResourceId?: string;
	readonly mappingRuleName?: string;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded";
	readonly tableName?: string;
}
export interface ExtendedServerBlobAuditingPolicyProperties {
	readonly auditActionsAndGroups?: string[];
}
export interface ExtendedSqlPoolBlobAuditingPolicyProperties {
	readonly auditActionsAndGroups?: string[];
}
export interface FollowerDatabaseDefinition {
	readonly attachedDatabaseConfigurationName: string;
	readonly clusterResourceId: string;
	readonly databaseName?: string;
}
export interface FollowerDatabaseListResult {
	readonly value?: FollowerDatabaseDefinition[];
}
export interface GeoBackupPolicyProperties {
	readonly state: "Disabled";
	readonly storageType?: string;
}
export interface IntegrationRuntime {
	readonly description?: string;
}
export interface IntegrationRuntimeAuthKeys {
	readonly authKey1?: string;
	readonly authKey2?: string;
}
export interface IntegrationRuntimeComputeProperties {
	readonly dataFlowProperties?: IntegrationRuntimeDataFlowProperties;
	readonly location?: string;
	readonly maxParallelExecutionsPerNode?: number;
	readonly nodeSize?: string;
	readonly numberOfNodes?: number;
	readonly vNetProperties?: IntegrationRuntimeVNetProperties;
	readonly [key: string]: any;
}
export interface IntegrationRuntimeCustomSetupScriptProperties {
	readonly blobContainerUri?: string;
	readonly sasToken?: SecureString;
}
export interface IntegrationRuntimeDataFlowProperties {
	readonly cleanup?: boolean;
	readonly computeType?: "ComputeOptimized" | "General" | "MemoryOptimized";
	readonly coreCount?: number;
	readonly timeToLive?: number;
	readonly [key: string]: any;
}
export interface IntegrationRuntimeDataProxyProperties {
	readonly connectVia?: EntityReference;
	readonly path?: string;
	readonly stagingLinkedService?: EntityReference;
}
export interface IntegrationRuntimeSsisCatalogInfo {
	readonly catalogAdminPassword?: SecureString;
	readonly catalogAdminUserName?: string;
	readonly catalogPricingTier?: "Basic" | "Premium" | "PremiumRS" | "Standard";
	readonly catalogServerEndpoint?: string;
	readonly [key: string]: any;
}
export interface IntegrationRuntimeSsisProperties {
	readonly catalogInfo?: IntegrationRuntimeSsisCatalogInfo;
	readonly customSetupScriptProperties?: IntegrationRuntimeCustomSetupScriptProperties;
	readonly dataProxyProperties?: IntegrationRuntimeDataProxyProperties;
	readonly edition?: "Enterprise" | "Standard";
	readonly expressCustomSetupProperties?: CustomSetupBase[];
	readonly licenseType?: "BasePrice" | "LicenseIncluded";
	readonly [key: string]: any;
}
export interface IntegrationRuntimeVNetProperties {
	readonly publicIPs?: string[];
	readonly subnet?: string;
	readonly subnetId?: string;
	readonly vNetId?: string;
	readonly [key: string]: any;
}
export interface IotHubConnectionProperties {
	readonly consumerGroup: string;
	readonly dataFormat?:
		| "APACHEAVRO"
		| "AVRO"
		| "CSV"
		| "JSON"
		| "MULTIJSON"
		| "ORC"
		| "PARQUET"
		| "PSV"
		| "RAW"
		| "SCSV"
		| "SINGLEJSON"
		| "SOHSV"
		| "TSV"
		| "TSVE"
		| "TXT"
		| "W3CLOGFILE";
	readonly eventSystemProperties?: string[];
	readonly iotHubResourceId: string;
	readonly mappingRuleName?: string;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded";
	readonly sharedAccessPolicyName: string;
	readonly tableName?: string;
}
export interface IpFirewallRuleProperties {
	readonly endIpAddress?: string;
	readonly provisioningState?: "DeleteError" | "Deleting" | "Failed" | "Provisioning" | "Succeeded";
	readonly startIpAddress?: string;
}
export interface KekIdentityProperties {
	readonly userAssignedIdentity?: string;
	readonly useSystemAssignedIdentity?: any;
}
export interface KeyProperties {
	readonly isActiveCMK?: boolean;
	readonly keyVaultUrl?: string;
}
export interface KustoPoolProperties {
	readonly dataIngestionUri?: string;
	readonly enablePurge?: boolean;
	readonly enableStreamingIngest?: boolean;
	readonly languageExtensions?: LanguageExtensionsList;
	readonly optimizedAutoscale?: OptimizedAutoscale;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded";
	readonly state?:
		| "Creating"
		| "Deleted"
		| "Deleting"
		| "Running"
		| "Starting"
		| "Stopped"
		| "Stopping"
		| "Unavailable"
		| "Updating";
	readonly stateReason?: string;
	readonly uri?: string;
	readonly workspaceUID?: string;
}
export interface LanguageExtension {
	readonly languageExtensionName?: "PYTHON" | "R";
}
export interface LanguageExtensionsList {
	readonly value?: LanguageExtension[];
}
export interface LibraryInfo {
	readonly containerName?: string;
	readonly creatorId?: string;
	readonly name?: string;
	readonly path?: string;
	readonly provisioningStatus?: string;
	readonly type?: string;
	readonly uploadedTimestamp?: string;
}
export interface LibraryRequirements {
	readonly content?: string;
	readonly filename?: string;
	readonly time?: string;
}
export interface LicensedComponentSetupTypeProperties {
	readonly componentName: string;
	readonly licenseKey?: SecretBase;
}
export interface LinkedIntegrationRuntimeType {}
export interface ManagedIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned";
	readonly userAssignedIdentities?: UserAssignedManagedIdentities;
}
export interface ManagedIdentitySqlControlSettingsModelProperties {
	readonly grantSqlControlToManagedIdentity?: ManagedIdentitySqlControlSettingsModelPropertiesGrantSqlControlToManagedIdentity;
}
export interface ManagedIdentitySqlControlSettingsModelPropertiesGrantSqlControlToManagedIdentity {
	readonly actualState?: "Disabled" | "Disabling" | "Enabled" | "Enabling" | "Unknown";
	readonly desiredState?: "Disabled" | "Enabled";
}
export interface ManagedIntegrationRuntimeManagedVirtualNetworkReference {
	readonly id?: string;
	readonly referenceName?: string;
	readonly type?: string;
}
export interface ManagedIntegrationRuntimeTypeProperties {
	readonly computeProperties?: IntegrationRuntimeComputeProperties;
	readonly ssisProperties?: IntegrationRuntimeSsisProperties;
}
export interface ManagedVirtualNetworkSettings {
	readonly allowedAadTenantIdsForLinking?: string[];
	readonly linkedAccessCheckOnTargetResource?: boolean;
	readonly preventDataExfiltration?: boolean;
}
export interface MetadataSyncConfigProperties {
	readonly enabled?: boolean;
	readonly syncIntervalInMinutes?: number;
}
export interface OptimizedAutoscale {
	readonly isEnabled: boolean;
	readonly maximum: number;
	readonly minimum: number;
	readonly version: number;
}
export interface PrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointConnection {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly type?: string;
}
export interface PrivateEndpointConnectionForPrivateLinkHubBasic {
	readonly id?: string;
	readonly properties?: PrivateEndpointConnectionProperties;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
	readonly provisioningState?: string;
}
export interface PrivateLinkHubProperties {
	readonly privateEndpointConnections?: PrivateEndpointConnectionForPrivateLinkHubBasic[];
	readonly provisioningState?: string;
}
export interface PrivateLinkResourceProperties {
	readonly groupId?: string;
	readonly requiredMembers?: string[];
	readonly requiredZoneNames?: string[];
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: string;
}
export interface PurviewConfiguration {
	readonly purviewResourceId?: string;
}
export interface ReadOnlyFollowingDatabaseProperties {
	readonly attachedDatabaseConfigurationName?: string;
	readonly hotCachePeriod?: string;
	readonly leaderClusterResourceId?: string;
	readonly principalsModificationKind?: "None" | "Replace" | "Union";
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded";
	readonly softDeletePeriod?: string;
	readonly statistics?: DatabaseStatistics;
}
export interface ReadWriteDatabaseProperties {
	readonly hotCachePeriod?: string;
	readonly isFollowed?: boolean;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded";
	readonly softDeletePeriod?: string;
	readonly statistics?: DatabaseStatistics;
}
export interface RecoverableSqlPoolProperties {
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
export interface RestorableDroppedSqlPoolProperties {
	readonly creationDate?: string;
	readonly databaseName?: string;
	readonly deletionDate?: string;
	readonly earliestRestoreDate?: string;
	readonly edition?: string;
	readonly elasticPoolName?: string;
	readonly maxSizeBytes?: string;
	readonly serviceLevelObjective?: string;
}
export interface RestorePointProperties {
	readonly earliestRestoreDate?: string;
	readonly restorePointCreationDate?: string;
	readonly restorePointLabel?: string;
	readonly restorePointType?: "CONTINUOUS";
}
export interface SecretBase {}
export interface SecureString {
	readonly type: string;
	readonly value: string;
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
export interface SelfHostedIntegrationRuntimeTypeProperties {
	readonly linkedInfo?: LinkedIntegrationRuntimeType;
}
export interface SensitivityLabelProperties {
	readonly columnName?: string;
	readonly informationType?: string;
	readonly informationTypeId?: string;
	readonly isDisabled?: boolean;
	readonly labelId?: string;
	readonly labelName?: string;
	readonly rank?: "Critical" | "High" | "Low" | "Medium";
	readonly schemaName?: string;
	readonly tableName?: string;
}
export interface ServerBlobAuditingPolicyProperties {
	readonly auditActionsAndGroups?: string[];
}
export interface ServerSecurityAlertPolicyProperties {
	readonly creationTime?: string;
	readonly disabledAlerts?: string[];
	readonly emailAccountAdmins?: boolean;
	readonly emailAddresses?: string[];
	readonly retentionDays?: number;
	readonly state: "Disabled" | "Enabled";
	readonly storageAccountAccessKey?: string;
	readonly storageEndpoint?: string;
}
export interface ServerVulnerabilityAssessmentProperties {
	readonly recurringScans?: VulnerabilityAssessmentRecurringScansProperties;
	readonly storageAccountAccessKey?: string;
	readonly storageContainerPath: string;
	readonly storageContainerSasKey?: string;
}
export interface Sku {
	readonly capacity?: number;
	readonly name?: string;
	readonly tier?: string;
}
export interface SparkConfigProperties {
	readonly configurationType?: "Artifact" | "File";
	readonly content?: string;
	readonly filename?: string;
	readonly time?: string;
}
export interface SparkConfigurationInfo {
	readonly annotations?: string[];
	readonly configMergeRule?: SparkConfigurationInfoConfigMergeRule;
	readonly configs: SparkConfigurationInfoConfigs;
	readonly created?: string;
	readonly createdBy?: string;
	readonly description?: string;
	readonly notes?: string;
}
export interface SparkConfigurationInfoConfigMergeRule {
	readonly [key: string]: string;
}
export interface SparkConfigurationInfoConfigs {
	readonly [key: string]: string;
}
export interface SqlPoolBlobAuditingPolicyProperties {
	readonly auditActionsAndGroups?: string[];
}
export interface SqlPoolColumnProperties {
	readonly columnType?:
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
		| "xml";
	readonly isComputed?: boolean;
}
export interface SqlPoolConnectionPolicyProperties {
	readonly proxyDnsName?: string;
	readonly proxyPort?: string;
	readonly redirectionState?: string;
	readonly securityEnabledAccess?: string;
	readonly state?: string;
	readonly useServerDefault?: string;
	readonly visibility?: string;
}
export interface SqlPoolResourceProperties {
	readonly collation?: string;
	readonly createMode?: "Default" | "PointInTimeRestore" | "Recovery" | "Restore";
}
export interface SqlPoolVulnerabilityAssessmentProperties {
	readonly recurringScans?: VulnerabilityAssessmentRecurringScansProperties;
	readonly storageAccountAccessKey?: string;
	readonly storageContainerPath?: string;
	readonly storageContainerSasKey?: string;
}
export interface SqlPoolVulnerabilityAssessmentRuleBaselineItem {
	readonly result: string[];
}
export interface SqlPoolVulnerabilityAssessmentRuleBaselineProperties {
	readonly baselineResults: SqlPoolVulnerabilityAssessmentRuleBaselineItem[];
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TableLevelSharingProperties {
	readonly externalTablesToExclude?: string[];
	readonly externalTablesToInclude?: string[];
	readonly materializedViewsToExclude?: string[];
	readonly materializedViewsToInclude?: string[];
	readonly tablesToExclude?: string[];
	readonly tablesToInclude?: string[];
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface TransparentDataEncryptionProperties {
	readonly status?: "Disabled";
}
export interface UserAssignedManagedIdentities {
	readonly [key: string]: UserAssignedManagedIdentity;
}
export interface UserAssignedManagedIdentity {
	readonly clientId?: string;
	readonly principalId?: string;
}
export interface VirtualNetworkProfile {
	readonly computeSubnetId?: string;
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
export interface WorkloadClassifierProperties {
	readonly context?: string;
	readonly endTime?: string;
	readonly importance?: string;
	readonly label?: string;
	readonly memberName: string;
	readonly startTime?: string;
}
export interface WorkloadGroupProperties {
	readonly importance?: string;
	readonly maxResourcePercent: number;
	readonly maxResourcePercentPerRequest?: number;
	readonly minResourcePercent: number;
	readonly minResourcePercentPerRequest: number;
	readonly queryExecutionTimeout?: number;
}
export interface WorkspaceKeyDetails {
	readonly keyVaultUrl?: string;
	readonly name?: string;
}
export interface WorkspaceProperties {
	readonly adlaResourceId?: string;
	readonly azureADOnlyAuthentication?: boolean;
	readonly connectivityEndpoints?: WorkspacePropertiesConnectivityEndpoints;
	readonly cspWorkspaceAdminProperties?: CspWorkspaceAdminProperties;
	readonly defaultDataLakeStorage?: DataLakeStorageAccountDetails;
	readonly encryption?: EncryptionDetails;
	readonly extraProperties?: WorkspacePropertiesExtraProperties;
	readonly managedResourceGroupName?: string;
	readonly managedVirtualNetwork?: string;
	readonly managedVirtualNetworkSettings?: ManagedVirtualNetworkSettings;
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly provisioningState?: string;
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
	readonly purviewConfiguration?: PurviewConfiguration;
	readonly settings?: WorkspacePropertiesSettings;
	readonly sqlAdministratorLogin?: string;
	readonly sqlAdministratorLoginPassword?: string;
	readonly trustedServiceBypassEnabled?: boolean;
	readonly virtualNetworkProfile?: VirtualNetworkProfile;
	readonly workspaceRepositoryConfiguration?: WorkspaceRepositoryConfiguration;
	readonly workspaceUID?: string;
}
export interface WorkspacePropertiesConnectivityEndpoints {
	readonly [key: string]: string;
}
export interface WorkspacePropertiesExtraProperties {
	readonly [key: string]: any;
}
export interface WorkspacePropertiesSettings {
	readonly [key: string]: any;
}
export interface WorkspaceRepositoryConfiguration {
	readonly accountName?: string;
	readonly collaborationBranch?: string;
	readonly hostName?: string;
	readonly lastCommitId?: string;
	readonly projectName?: string;
	readonly repositoryName?: string;
	readonly rootFolder?: string;
	readonly tenantId?: string;
	readonly type?: string;
}
export type workspaces_kustoPools_databases =
	| workspaces_kustoPools_databases_ReadOnlyFollowing
	| workspaces_kustoPools_databases_ReadWrite;
export type workspaces_kustoPools_databases_dataConnections =
	| workspaces_kustoPools_databases_dataConnections_EventGrid
	| workspaces_kustoPools_databases_dataConnections_EventHub
	| workspaces_kustoPools_databases_dataConnections_IotHub;
export default {
	privateLinkHubs: privateLinkHubs,
	"privateLinkHubs/privateLinkResources": privateLinkHubs_privateLinkResources,
	workspaces: workspaces,
	"workspaces/administrators": workspaces_administrators,
	"workspaces/auditingSettings": workspaces_auditingSettings,
	"workspaces/azureADOnlyAuthentications": workspaces_azureADOnlyAuthentications,
	"workspaces/bigDataPools": workspaces_bigDataPools,
	"workspaces/dedicatedSQLminimalTlsSettings": workspaces_dedicatedSQLminimalTlsSettings,
	"workspaces/encryptionProtector": workspaces_encryptionProtector,
	"workspaces/extendedAuditingSettings": workspaces_extendedAuditingSettings,
	"workspaces/firewallRules": workspaces_firewallRules,
	"workspaces/integrationRuntimes": workspaces_integrationRuntimes,
	"workspaces/keys": workspaces_keys,
	"workspaces/kustoPools": workspaces_kustoPools,
	"workspaces/kustoPools/attachedDatabaseConfigurations": workspaces_kustoPools_attachedDatabaseConfigurations,
	"workspaces/kustoPools/databases/ReadOnlyFollowing": workspaces_kustoPools_databases_ReadOnlyFollowing,
	"workspaces/kustoPools/databases/ReadWrite": workspaces_kustoPools_databases_ReadWrite,
	"workspaces/kustoPools/databases/dataConnections/EventGrid":
		workspaces_kustoPools_databases_dataConnections_EventGrid,
	"workspaces/kustoPools/databases/dataConnections/EventHub": workspaces_kustoPools_databases_dataConnections_EventHub,
	"workspaces/kustoPools/databases/dataConnections/IotHub": workspaces_kustoPools_databases_dataConnections_IotHub,
	"workspaces/kustoPools/databases/principalAssignments": workspaces_kustoPools_databases_principalAssignments,
	"workspaces/kustoPools/principalAssignments": workspaces_kustoPools_principalAssignments,
	"workspaces/libraries": workspaces_libraries,
	"workspaces/managedIdentitySqlControlSettings": workspaces_managedIdentitySqlControlSettings,
	"workspaces/privateEndpointConnections": workspaces_privateEndpointConnections,
	"workspaces/privateLinkResources": workspaces_privateLinkResources,
	"workspaces/recoverableSqlPools": workspaces_recoverableSqlPools,
	"workspaces/restorableDroppedSqlPools": workspaces_restorableDroppedSqlPools,
	"workspaces/securityAlertPolicies": workspaces_securityAlertPolicies,
	"workspaces/sparkconfigurations": workspaces_sparkconfigurations,
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
	"workspaces/sqlPools/operationResults": workspaces_sqlPools_operationResults,
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
	"workspaces/trustedServiceByPassConfiguration": workspaces_trustedServiceByPassConfiguration,
	"workspaces/vulnerabilityAssessments": workspaces_vulnerabilityAssessments,
};
