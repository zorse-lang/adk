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
	readonly properties?: PrivateLinkHubProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: PrivateLinkResourceProperties | undefined;
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
	readonly properties?: AadAdminProperties | undefined;
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
	readonly properties?: ServerBlobAuditingPolicyProperties | undefined;
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
	readonly properties?: AzureADOnlyAuthenticationProperties | undefined;
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
	readonly properties?: BigDataPoolResourceProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: DedicatedSQLminimalTlsSettingsProperties | undefined;
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
	readonly properties?: ExtendedServerBlobAuditingPolicyProperties | undefined;
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
	readonly properties?: IpFirewallRuleProperties | undefined;
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
	readonly etag?: string | undefined;
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
	readonly properties?: KeyProperties | undefined;
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
	readonly etag?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: KustoPoolProperties | undefined;
	readonly sku: AzureSku;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: AttachedDatabaseConfigurationProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "ReadOnlyFollowing";
	readonly properties?: ReadOnlyFollowingDatabaseProperties | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "ReadWrite";
	readonly properties?: ReadWriteDatabaseProperties | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "EventGrid";
	readonly properties?: EventGridConnectionProperties | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "EventHub";
	readonly properties?: EventHubConnectionProperties | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "IotHub";
	readonly properties?: IotHubConnectionProperties | undefined;
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
	readonly properties?: DatabasePrincipalProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: ClusterPrincipalProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: ManagedIdentitySqlControlSettingsModelProperties | undefined;
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
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
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
	readonly properties?: PrivateLinkResourceProperties | undefined;
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
	readonly properties?: RecoverableSqlPoolProperties | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: RestorableDroppedSqlPoolProperties | undefined;
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
	readonly properties?: ServerSecurityAlertPolicyProperties | undefined;
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
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: SparkConfigurationInfo | undefined;
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
	readonly properties?: AadAdminProperties | undefined;
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
	readonly properties?: SqlPoolResourceProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: SqlPoolBlobAuditingPolicyProperties | undefined;
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
	readonly properties?: ExtendedSqlPoolBlobAuditingPolicyProperties | undefined;
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
	readonly properties?: MetadataSyncConfigProperties | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: SqlPoolResourceProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ReplicationLinkProperties | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: RestorePointProperties | undefined;
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
	readonly managedBy?: string | undefined;
	readonly name: string;
	readonly properties?: SensitivityLabelProperties | undefined;
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
	readonly properties?: VulnerabilityAssessmentScanRecordProperties | undefined;
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
	readonly properties?: WorkloadClassifierProperties | undefined;
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
	readonly properties?: ServerVulnerabilityAssessmentProperties | undefined;
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
	readonly administratorType?: string | undefined;
	readonly login?: string | undefined;
	readonly sid?: string | undefined;
	readonly tenantId?: string | undefined;
}
export interface AttachedDatabaseConfigurationProperties {
	readonly attachedDatabaseNames?: string[] | undefined;
	readonly clusterResourceId: string;
	readonly databaseName: string;
	readonly defaultPrincipalsModificationKind: "None" | "Replace" | "Union";
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded")
		| undefined;
	readonly tableLevelSharingProperties?: TableLevelSharingProperties | undefined;
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
export interface AzureADOnlyAuthenticationProperties {
	readonly azureADOnlyAuthentication: boolean;
	readonly creationDate?: string | undefined;
	readonly state?: ("Consistent" | "InConsistent" | "Updating") | undefined;
}
export interface AzureSku {
	readonly capacity?: number | undefined;
	readonly name: "Compute optimized" | "Storage optimized";
	readonly size: "Extra small" | "Large" | "Medium" | "Small";
}
export interface BigDataPoolResourceProperties {
	readonly autoPause?: AutoPauseProperties | undefined;
	readonly autoScale?: AutoScaleProperties | undefined;
	readonly cacheSize?: number | undefined;
	readonly creationDate?: string | undefined;
	readonly customLibraries?: LibraryInfo[] | undefined;
	readonly defaultSparkLogFolder?: string | undefined;
	readonly dynamicExecutorAllocation?: DynamicExecutorAllocation | undefined;
	readonly isAutotuneEnabled?: boolean | undefined;
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
	readonly sparkConfigProperties?: SparkConfigProperties | undefined;
	readonly sparkEventsFolder?: string | undefined;
	readonly sparkVersion?: string | undefined;
}
export interface ClusterPrincipalProperties {
	readonly aadObjectId?: string | undefined;
	readonly principalId: string;
	readonly principalName?: string | undefined;
	readonly principalType: "App" | "Group" | "User";
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded")
		| undefined;
	readonly role: "AllDatabasesAdmin" | "AllDatabasesViewer";
	readonly tenantId?: string | undefined;
	readonly tenantName?: string | undefined;
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
export interface DatabasePrincipalProperties {
	readonly aadObjectId?: string | undefined;
	readonly principalId: string;
	readonly principalName?: string | undefined;
	readonly principalType: "App" | "Group" | "User";
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded")
		| undefined;
	readonly role: "Admin" | "Ingestor" | "Monitor" | "UnrestrictedViewer" | "User" | "Viewer";
	readonly tenantId?: string | undefined;
	readonly tenantName?: string | undefined;
}
export interface DatabaseStatistics {
	readonly size?: number | undefined;
}
export interface DataLakeStorageAccountDetails {
	readonly accountUrl?: string | undefined;
	readonly createManagedPrivateEndpoint?: boolean | undefined;
	readonly filesystem?: string | undefined;
	readonly resourceId?: string | undefined;
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
export interface DedicatedSQLminimalTlsSettingsProperties {
	readonly minimalTlsVersion?: string | undefined;
}
export interface DynamicExecutorAllocation {
	readonly enabled?: boolean | undefined;
	readonly maxExecutors?: number | undefined;
	readonly minExecutors?: number | undefined;
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
export interface EventGridConnectionProperties {
	readonly blobStorageEventType?: ("Microsoft.Storage.BlobCreated" | "Microsoft.Storage.BlobRenamed") | undefined;
	readonly consumerGroup: string;
	readonly dataFormat?:
		| (
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
				| "W3CLOGFILE"
		  )
		| undefined;
	readonly eventHubResourceId: string;
	readonly ignoreFirstRecord?: boolean | undefined;
	readonly mappingRuleName?: string | undefined;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded")
		| undefined;
	readonly storageAccountResourceId: string;
	readonly tableName?: string | undefined;
}
export interface EventHubConnectionProperties {
	readonly compression?: ("GZip" | "None") | undefined;
	readonly consumerGroup: string;
	readonly dataFormat?:
		| (
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
				| "W3CLOGFILE"
		  )
		| undefined;
	readonly eventHubResourceId: string;
	readonly eventSystemProperties?: string[] | undefined;
	readonly managedIdentityResourceId?: string | undefined;
	readonly mappingRuleName?: string | undefined;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded")
		| undefined;
	readonly tableName?: string | undefined;
}
export interface ExtendedServerBlobAuditingPolicyProperties {
	readonly auditActionsAndGroups?: string[] | undefined;
}
export interface ExtendedSqlPoolBlobAuditingPolicyProperties {
	readonly auditActionsAndGroups?: string[] | undefined;
}
export interface FollowerDatabaseDefinition {
	readonly attachedDatabaseConfigurationName: string;
	readonly clusterResourceId: string;
	readonly databaseName?: string | undefined;
}
export interface FollowerDatabaseListResult {
	readonly value?: FollowerDatabaseDefinition[] | undefined;
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
	readonly cleanup?: boolean | undefined;
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
export interface IotHubConnectionProperties {
	readonly consumerGroup: string;
	readonly dataFormat?:
		| (
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
				| "W3CLOGFILE"
		  )
		| undefined;
	readonly eventSystemProperties?: string[] | undefined;
	readonly iotHubResourceId: string;
	readonly mappingRuleName?: string | undefined;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded")
		| undefined;
	readonly sharedAccessPolicyName: string;
	readonly tableName?: string | undefined;
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
export interface KustoPoolProperties {
	readonly dataIngestionUri?: string | undefined;
	readonly enablePurge?: boolean | undefined;
	readonly enableStreamingIngest?: boolean | undefined;
	readonly languageExtensions?: LanguageExtensionsList | undefined;
	readonly optimizedAutoscale?: OptimizedAutoscale | undefined;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded")
		| undefined;
	readonly state?:
		| (
				| "Creating"
				| "Deleted"
				| "Deleting"
				| "Running"
				| "Starting"
				| "Stopped"
				| "Stopping"
				| "Unavailable"
				| "Updating"
		  )
		| undefined;
	readonly stateReason?: string | undefined;
	readonly uri?: string | undefined;
	readonly workspaceUID?: string | undefined;
}
export interface LanguageExtension {
	readonly languageExtensionName?: ("PYTHON" | "R") | undefined;
}
export interface LanguageExtensionsList {
	readonly value?: LanguageExtension[] | undefined;
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
export interface ManagedIntegrationRuntimeManagedVirtualNetworkReference {
	readonly id?: string | undefined;
	readonly referenceName?: string | undefined;
	readonly type?: string | undefined;
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
export interface OptimizedAutoscale {
	readonly isEnabled: boolean;
	readonly maximum: number;
	readonly minimum: number;
	readonly version: number;
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
export interface ReadOnlyFollowingDatabaseProperties {
	readonly attachedDatabaseConfigurationName?: string | undefined;
	readonly hotCachePeriod?: string | undefined;
	readonly leaderClusterResourceId?: string | undefined;
	readonly principalsModificationKind?: ("None" | "Replace" | "Union") | undefined;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded")
		| undefined;
	readonly softDeletePeriod?: string | undefined;
	readonly statistics?: DatabaseStatistics | undefined;
}
export interface ReadWriteDatabaseProperties {
	readonly hotCachePeriod?: string | undefined;
	readonly isFollowed?: boolean | undefined;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded")
		| undefined;
	readonly softDeletePeriod?: string | undefined;
	readonly statistics?: DatabaseStatistics | undefined;
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
export interface SparkConfigProperties {
	readonly configurationType?: ("Artifact" | "File") | undefined;
	readonly content?: string | undefined;
	readonly filename?: string | undefined;
	readonly time?: string | undefined;
}
export interface SparkConfigurationInfo {
	readonly annotations?: string[] | undefined;
	readonly configMergeRule?: SparkConfigurationInfoConfigMergeRule | undefined;
	readonly configs: SparkConfigurationInfoConfigs;
	readonly created?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly description?: string | undefined;
	readonly notes?: string | undefined;
}
export interface SparkConfigurationInfoConfigMergeRule {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SparkConfigurationInfoConfigs {
	readonly "[ key: string ]"?: string | undefined;
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
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TableLevelSharingProperties {
	readonly externalTablesToExclude?: string[] | undefined;
	readonly externalTablesToInclude?: string[] | undefined;
	readonly materializedViewsToExclude?: string[] | undefined;
	readonly materializedViewsToInclude?: string[] | undefined;
	readonly tablesToExclude?: string[] | undefined;
	readonly tablesToInclude?: string[] | undefined;
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
	readonly azureADOnlyAuthentication?: boolean | undefined;
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
	readonly settings?: WorkspacePropertiesSettings | undefined;
	readonly sqlAdministratorLogin?: string | undefined;
	readonly sqlAdministratorLoginPassword?: string | undefined;
	readonly trustedServiceBypassEnabled?: boolean | undefined;
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
export interface WorkspacePropertiesSettings {
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