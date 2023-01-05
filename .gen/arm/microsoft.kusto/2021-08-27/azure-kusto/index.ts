import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class clusters extends ArmResource<clustersComponentInputs> implements clustersComponentOutputs {
	constructor(entity: ADKEntity, options: clustersComponentInputs) {
		super(entity, options.name, "Microsoft.Kusto/clusters", "2021-08-27", options);
	}
	public readonly apiVersion: "2021-08-27";
	public readonly id: string;
	public readonly type: "Microsoft.Kusto/clusters";
}
export interface clustersComponentOutputs {
	readonly apiVersion: "2021-08-27";
	readonly id: string;
	readonly type: "Microsoft.Kusto/clusters";
}
export interface clustersComponentInputs {
	readonly etag?: string;
	readonly identity?: Identity;
	readonly location: string;
	readonly name: string;
	readonly properties?: ClusterProperties;
	readonly sku: AzureSku;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
	readonly zones?: string[];
}
export class clusters_attachedDatabaseConfigurations
	extends ArmResource<clusters_attachedDatabaseConfigurationsComponentInputs>
	implements clusters_attachedDatabaseConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_attachedDatabaseConfigurationsComponentInputs) {
		super(entity, options.name, "Microsoft.Kusto/clusters/attachedDatabaseConfigurations", "2021-08-27", options);
	}
	public readonly apiVersion: "2021-08-27";
	public readonly id: string;
	public readonly type: "Microsoft.Kusto/clusters/attachedDatabaseConfigurations";
}
export interface clusters_attachedDatabaseConfigurationsComponentOutputs {
	readonly apiVersion: "2021-08-27";
	readonly id: string;
	readonly type: "Microsoft.Kusto/clusters/attachedDatabaseConfigurations";
}
export interface clusters_attachedDatabaseConfigurationsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: AttachedDatabaseConfigurationProperties;
}
export class clusters_databases_ReadOnlyFollowing
	extends ArmResource<clusters_databases_ReadOnlyFollowingComponentInputs>
	implements clusters_databases_ReadOnlyFollowingComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_databases_ReadOnlyFollowingComponentInputs) {
		super(entity, options.name, "Microsoft.Kusto/clusters/databases", "2021-08-27", options);
	}
	public readonly apiVersion: "2021-08-27";
	public readonly id: string;
	public readonly type: "Microsoft.Kusto/clusters/databases";
}
export interface clusters_databases_ReadOnlyFollowingComponentOutputs {
	readonly apiVersion: "2021-08-27";
	readonly id: string;
	readonly type: "Microsoft.Kusto/clusters/databases";
}
export interface clusters_databases_ReadOnlyFollowingComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly kind: "ReadOnlyFollowing";
	readonly properties?: ReadOnlyFollowingDatabaseProperties;
}
export class clusters_databases_ReadWrite
	extends ArmResource<clusters_databases_ReadWriteComponentInputs>
	implements clusters_databases_ReadWriteComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_databases_ReadWriteComponentInputs) {
		super(entity, options.name, "Microsoft.Kusto/clusters/databases", "2021-08-27", options);
	}
	public readonly apiVersion: "2021-08-27";
	public readonly id: string;
	public readonly type: "Microsoft.Kusto/clusters/databases";
}
export interface clusters_databases_ReadWriteComponentOutputs {
	readonly apiVersion: "2021-08-27";
	readonly id: string;
	readonly type: "Microsoft.Kusto/clusters/databases";
}
export interface clusters_databases_ReadWriteComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly kind: "ReadWrite";
	readonly properties?: ReadWriteDatabaseProperties;
}
export class clusters_databases_dataConnections_EventGrid
	extends ArmResource<clusters_databases_dataConnections_EventGridComponentInputs>
	implements clusters_databases_dataConnections_EventGridComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_databases_dataConnections_EventGridComponentInputs) {
		super(entity, options.name, "Microsoft.Kusto/clusters/databases/dataConnections", "2021-08-27", options);
	}
	public readonly apiVersion: "2021-08-27";
	public readonly id: string;
	public readonly type: "Microsoft.Kusto/clusters/databases/dataConnections";
}
export interface clusters_databases_dataConnections_EventGridComponentOutputs {
	readonly apiVersion: "2021-08-27";
	readonly id: string;
	readonly type: "Microsoft.Kusto/clusters/databases/dataConnections";
}
export interface clusters_databases_dataConnections_EventGridComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly kind: "EventGrid";
	readonly properties?: EventGridConnectionProperties;
}
export class clusters_databases_dataConnections_EventHub
	extends ArmResource<clusters_databases_dataConnections_EventHubComponentInputs>
	implements clusters_databases_dataConnections_EventHubComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_databases_dataConnections_EventHubComponentInputs) {
		super(entity, options.name, "Microsoft.Kusto/clusters/databases/dataConnections", "2021-08-27", options);
	}
	public readonly apiVersion: "2021-08-27";
	public readonly id: string;
	public readonly type: "Microsoft.Kusto/clusters/databases/dataConnections";
}
export interface clusters_databases_dataConnections_EventHubComponentOutputs {
	readonly apiVersion: "2021-08-27";
	readonly id: string;
	readonly type: "Microsoft.Kusto/clusters/databases/dataConnections";
}
export interface clusters_databases_dataConnections_EventHubComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly kind: "EventHub";
	readonly properties?: EventHubConnectionProperties;
}
export class clusters_databases_dataConnections_IotHub
	extends ArmResource<clusters_databases_dataConnections_IotHubComponentInputs>
	implements clusters_databases_dataConnections_IotHubComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_databases_dataConnections_IotHubComponentInputs) {
		super(entity, options.name, "Microsoft.Kusto/clusters/databases/dataConnections", "2021-08-27", options);
	}
	public readonly apiVersion: "2021-08-27";
	public readonly id: string;
	public readonly type: "Microsoft.Kusto/clusters/databases/dataConnections";
}
export interface clusters_databases_dataConnections_IotHubComponentOutputs {
	readonly apiVersion: "2021-08-27";
	readonly id: string;
	readonly type: "Microsoft.Kusto/clusters/databases/dataConnections";
}
export interface clusters_databases_dataConnections_IotHubComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly kind: "IotHub";
	readonly properties?: IotHubConnectionProperties;
}
export class clusters_databases_principalAssignments
	extends ArmResource<clusters_databases_principalAssignmentsComponentInputs>
	implements clusters_databases_principalAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_databases_principalAssignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Kusto/clusters/databases/principalAssignments", "2021-08-27", options);
	}
	public readonly apiVersion: "2021-08-27";
	public readonly id: string;
	public readonly type: "Microsoft.Kusto/clusters/databases/principalAssignments";
}
export interface clusters_databases_principalAssignmentsComponentOutputs {
	readonly apiVersion: "2021-08-27";
	readonly id: string;
	readonly type: "Microsoft.Kusto/clusters/databases/principalAssignments";
}
export interface clusters_databases_principalAssignmentsComponentInputs {
	readonly name: string;
	readonly properties?: DatabasePrincipalProperties;
}
export class clusters_databases_scripts
	extends ArmResource<clusters_databases_scriptsComponentInputs>
	implements clusters_databases_scriptsComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_databases_scriptsComponentInputs) {
		super(entity, options.name, "Microsoft.Kusto/clusters/databases/scripts", "2021-08-27", options);
	}
	public readonly apiVersion: "2021-08-27";
	public readonly id: string;
	public readonly type: "Microsoft.Kusto/clusters/databases/scripts";
}
export interface clusters_databases_scriptsComponentOutputs {
	readonly apiVersion: "2021-08-27";
	readonly id: string;
	readonly type: "Microsoft.Kusto/clusters/databases/scripts";
}
export interface clusters_databases_scriptsComponentInputs {
	readonly name: string;
	readonly properties?: ScriptProperties;
	readonly systemData?: SystemData;
}
export class clusters_managedPrivateEndpoints
	extends ArmResource<clusters_managedPrivateEndpointsComponentInputs>
	implements clusters_managedPrivateEndpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_managedPrivateEndpointsComponentInputs) {
		super(entity, options.name, "Microsoft.Kusto/clusters/managedPrivateEndpoints", "2021-08-27", options);
	}
	public readonly apiVersion: "2021-08-27";
	public readonly id: string;
	public readonly type: "Microsoft.Kusto/clusters/managedPrivateEndpoints";
}
export interface clusters_managedPrivateEndpointsComponentOutputs {
	readonly apiVersion: "2021-08-27";
	readonly id: string;
	readonly type: "Microsoft.Kusto/clusters/managedPrivateEndpoints";
}
export interface clusters_managedPrivateEndpointsComponentInputs {
	readonly name: string;
	readonly properties?: ManagedPrivateEndpointProperties;
	readonly systemData?: SystemData;
}
export class clusters_principalAssignments
	extends ArmResource<clusters_principalAssignmentsComponentInputs>
	implements clusters_principalAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_principalAssignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Kusto/clusters/principalAssignments", "2021-08-27", options);
	}
	public readonly apiVersion: "2021-08-27";
	public readonly id: string;
	public readonly type: "Microsoft.Kusto/clusters/principalAssignments";
}
export interface clusters_principalAssignmentsComponentOutputs {
	readonly apiVersion: "2021-08-27";
	readonly id: string;
	readonly type: "Microsoft.Kusto/clusters/principalAssignments";
}
export interface clusters_principalAssignmentsComponentInputs {
	readonly name: string;
	readonly properties?: ClusterPrincipalProperties;
}
export class clusters_privateEndpointConnections
	extends ArmResource<clusters_privateEndpointConnectionsComponentInputs>
	implements clusters_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Kusto/clusters/privateEndpointConnections", "2021-08-27", options);
	}
	public readonly apiVersion: "2021-08-27";
	public readonly id: string;
	public readonly type: "Microsoft.Kusto/clusters/privateEndpointConnections";
}
export interface clusters_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-08-27";
	readonly id: string;
	readonly type: "Microsoft.Kusto/clusters/privateEndpointConnections";
}
export interface clusters_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
}
export class clusters_privateLinkResources
	extends ArmResource<clusters_privateLinkResourcesComponentInputs>
	implements clusters_privateLinkResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_privateLinkResourcesComponentInputs) {
		super(entity, options.name, "Microsoft.Kusto/clusters/privateLinkResources", "2021-08-27", options);
	}
	public readonly apiVersion: "2021-08-27";
	public readonly id: string;
	public readonly type: "Microsoft.Kusto/clusters/privateLinkResources";
}
export interface clusters_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2021-08-27";
	readonly id: string;
	readonly type: "Microsoft.Kusto/clusters/privateLinkResources";
}
export interface clusters_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties;
	readonly systemData?: SystemData;
}
export function listFollowerDatabases(resource: clusters): FollowerDatabaseListResult {
	if (resource.apiVersion !== "2021-08-27") {
		throw new Error(`listFollowerDatabases is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Kusto/clusters") {
		throw new Error(`listFollowerDatabases is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listLanguageExtensions(resource: clusters): LanguageExtensionsList {
	if (resource.apiVersion !== "2021-08-27") {
		throw new Error(`listLanguageExtensions is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Kusto/clusters") {
		throw new Error(`listLanguageExtensions is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listPrincipals(resource: ArmResource): DatabasePrincipalListResult {
	if (resource.apiVersion !== "2021-08-27") {
		throw new Error(`listPrincipals is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Kusto/clusters/databases") {
		throw new Error(`listPrincipals is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AcceptedAudiences {
	readonly value?: string;
}
export interface AttachedDatabaseConfigurationProperties {
	readonly attachedDatabaseNames?: string[];
	readonly clusterResourceId: string;
	readonly databaseName: string;
	readonly defaultPrincipalsModificationKind: "None" | "Replace" | "Union";
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded";
	readonly tableLevelSharingProperties?: TableLevelSharingProperties;
}
export interface AzureSku {
	readonly capacity?: number;
	readonly name:
		| "Dev(No SLA)_Standard_D11_v2"
		| "Dev(No SLA)_Standard_E2a_v4"
		| "Standard_D11_v2"
		| "Standard_D12_v2"
		| "Standard_D13_v2"
		| "Standard_D14_v2"
		| "Standard_DS13_v2+1TB_PS"
		| "Standard_DS13_v2+2TB_PS"
		| "Standard_DS14_v2+3TB_PS"
		| "Standard_DS14_v2+4TB_PS"
		| "Standard_E16a_v4"
		| "Standard_E16as_v4+3TB_PS"
		| "Standard_E16as_v4+4TB_PS"
		| "Standard_E2a_v4"
		| "Standard_E4a_v4"
		| "Standard_E64i_v3"
		| "Standard_E80ids_v4"
		| "Standard_E8a_v4"
		| "Standard_E8as_v4+1TB_PS"
		| "Standard_E8as_v4+2TB_PS"
		| "Standard_L16s"
		| "Standard_L16s_v2"
		| "Standard_L4s"
		| "Standard_L8s"
		| "Standard_L8s_v2";
	readonly tier: "Basic" | "Standard";
}
export interface ClusterPrincipalProperties {
	readonly principalId: string;
	readonly principalName?: string;
	readonly principalType: "App" | "Group" | "User";
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded";
	readonly role: "AllDatabasesAdmin" | "AllDatabasesViewer";
	readonly tenantId?: string;
	readonly tenantName?: string;
}
export interface ClusterProperties {
	readonly acceptedAudiences?: AcceptedAudiences[];
	readonly allowedFqdnList?: string[];
	readonly allowedIpRangeList?: string[];
	readonly dataIngestionUri?: string;
	readonly enableAutoStop?: boolean;
	readonly enableDiskEncryption?: boolean;
	readonly enableDoubleEncryption?: boolean;
	readonly enablePurge?: boolean;
	readonly enableStreamingIngest?: boolean;
	readonly engineType?: "V2" | "V3";
	readonly keyVaultProperties?: KeyVaultProperties;
	readonly languageExtensions?: LanguageExtensionsList;
	readonly optimizedAutoscale?: OptimizedAutoscale;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded";
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
	readonly restrictOutboundNetworkAccess?: "Disabled" | "Enabled";
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
	readonly trustedExternalTenants?: TrustedExternalTenant[];
	readonly uri?: string;
	readonly virtualNetworkConfiguration?: VirtualNetworkConfiguration;
}
export interface ComponentsSgqdofSchemasIdentityPropertiesUserassignedidentitiesAdditionalproperties {
	readonly clientId?: string;
	readonly principalId?: string;
}
export interface DatabasePrincipal {
	readonly appId?: string;
	readonly email?: string;
	readonly fqn?: string;
	readonly name: string;
	readonly role: "Admin" | "Ingestor" | "Monitor" | "UnrestrictedViewer" | "User" | "Viewer";
	readonly tenantName?: string;
	readonly type: "App" | "Group" | "User";
}
export interface DatabasePrincipalListResult {
	readonly value?: DatabasePrincipal[];
}
export interface DatabasePrincipalProperties {
	readonly principalId: string;
	readonly principalName?: string;
	readonly principalType: "App" | "Group" | "User";
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded";
	readonly role: "Admin" | "Ingestor" | "Monitor" | "UnrestrictedViewer" | "User" | "Viewer";
	readonly tenantId?: string;
	readonly tenantName?: string;
}
export interface DatabaseStatistics {
	readonly size?: number;
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
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded";
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
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded";
	readonly tableName?: string;
}
export interface FollowerDatabaseDefinition {
	readonly attachedDatabaseConfigurationName: string;
	readonly clusterResourceId: string;
	readonly databaseName?: string;
}
export interface FollowerDatabaseListResult {
	readonly value?: FollowerDatabaseDefinition[];
}
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type: "None" | "SystemAssigned" | "SystemAssigned, UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: IdentityUserAssignedIdentities;
}
export interface IdentityUserAssignedIdentities {
	readonly [key: string]: ComponentsSgqdofSchemasIdentityPropertiesUserassignedidentitiesAdditionalproperties;
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
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded";
	readonly sharedAccessPolicyName: string;
	readonly tableName?: string;
}
export interface KeyVaultProperties {
	readonly keyName?: string;
	readonly keyVaultUri?: string;
	readonly keyVersion?: string;
	readonly userIdentity?: string;
}
export interface LanguageExtension {
	readonly languageExtensionName?: "PYTHON" | "R";
}
export interface LanguageExtensionsList {
	readonly value?: LanguageExtension[];
}
export interface ManagedPrivateEndpointProperties {
	readonly groupId: string;
	readonly privateLinkResourceId: string;
	readonly privateLinkResourceRegion?: string;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded";
	readonly requestMessage?: string;
}
export interface OptimizedAutoscale {
	readonly isEnabled: boolean;
	readonly maximum: number;
	readonly minimum: number;
	readonly version: number;
}
export interface PrivateEndpointConnectionProperties {
	readonly groupId?: string;
	readonly privateEndpoint?: PrivateEndpointProperty;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionStateProperty;
	readonly provisioningState?: string;
}
export interface PrivateEndpointProperty {
	readonly id?: string;
}
export interface PrivateLinkResourceProperties {
	readonly groupId?: string;
	readonly requiredMembers?: string[];
	readonly requiredZoneNames?: string[];
}
export interface PrivateLinkServiceConnectionStateProperty {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: string;
}
export interface ReadOnlyFollowingDatabaseProperties {
	readonly attachedDatabaseConfigurationName?: string;
	readonly hotCachePeriod?: string;
	readonly leaderClusterResourceId?: string;
	readonly principalsModificationKind?: "None" | "Replace" | "Union";
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded";
	readonly softDeletePeriod?: string;
	readonly statistics?: DatabaseStatistics;
}
export interface ReadWriteDatabaseProperties {
	readonly hotCachePeriod?: string;
	readonly isFollowed?: boolean;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded";
	readonly softDeletePeriod?: string;
	readonly statistics?: DatabaseStatistics;
}
export interface ScriptProperties {
	readonly continueOnErrors?: boolean;
	readonly forceUpdateTag?: string;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded";
	readonly scriptUrl: string;
	readonly scriptUrlSasToken: string;
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
export interface TrustedExternalTenant {
	readonly value?: string;
}
export interface VirtualNetworkConfiguration {
	readonly dataManagementPublicIpId: string;
	readonly enginePublicIpId: string;
	readonly subnetId: string;
}
export type clusters_databases = clusters_databases_ReadOnlyFollowing | clusters_databases_ReadWrite;
export type clusters_databases_dataConnections =
	| clusters_databases_dataConnections_EventGrid
	| clusters_databases_dataConnections_EventHub
	| clusters_databases_dataConnections_IotHub;
export default {
	clusters: clusters,
	"clusters/attachedDatabaseConfigurations": clusters_attachedDatabaseConfigurations,
	"clusters/databases/ReadOnlyFollowing": clusters_databases_ReadOnlyFollowing,
	"clusters/databases/ReadWrite": clusters_databases_ReadWrite,
	"clusters/databases/dataConnections/EventGrid": clusters_databases_dataConnections_EventGrid,
	"clusters/databases/dataConnections/EventHub": clusters_databases_dataConnections_EventHub,
	"clusters/databases/dataConnections/IotHub": clusters_databases_dataConnections_IotHub,
	"clusters/databases/principalAssignments": clusters_databases_principalAssignments,
	"clusters/databases/scripts": clusters_databases_scripts,
	"clusters/managedPrivateEndpoints": clusters_managedPrivateEndpoints,
	"clusters/principalAssignments": clusters_principalAssignments,
	"clusters/privateEndpointConnections": clusters_privateEndpointConnections,
	"clusters/privateLinkResources": clusters_privateLinkResources,
};
