import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class clusters extends ArmResource<clustersComponentInputs> implements clustersComponentOutputs {
	constructor(entity: ADKEntity, options: clustersComponentInputs) {
		super(entity, options.name, "Microsoft.Kusto/clusters", "2020-09-18", options);
	}
	public readonly apiVersion: "2020-09-18";
	public readonly id: string;
	public readonly type: "Microsoft.Kusto/clusters";
}
export interface clustersComponentOutputs {
	readonly apiVersion: "2020-09-18";
	readonly id: string;
	readonly type: "Microsoft.Kusto/clusters";
}
export interface clustersComponentInputs {
	readonly identity?: Identity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: ClusterProperties | undefined;
	readonly sku: AzureSku;
	readonly tags?: TrackedResourceTags | undefined;
	readonly zones?: string[] | undefined;
}
export class clusters_attachedDatabaseConfigurations
	extends ArmResource<clusters_attachedDatabaseConfigurationsComponentInputs>
	implements clusters_attachedDatabaseConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_attachedDatabaseConfigurationsComponentInputs) {
		super(entity, options.name, "Microsoft.Kusto/clusters/attachedDatabaseConfigurations", "2020-09-18", options);
	}
	public readonly apiVersion: "2020-09-18";
	public readonly id: string;
	public readonly type: "Microsoft.Kusto/clusters/attachedDatabaseConfigurations";
}
export interface clusters_attachedDatabaseConfigurationsComponentOutputs {
	readonly apiVersion: "2020-09-18";
	readonly id: string;
	readonly type: "Microsoft.Kusto/clusters/attachedDatabaseConfigurations";
}
export interface clusters_attachedDatabaseConfigurationsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: AttachedDatabaseConfigurationProperties | undefined;
}
export class clusters_databases_ReadOnlyFollowing
	extends ArmResource<clusters_databases_ReadOnlyFollowingComponentInputs>
	implements clusters_databases_ReadOnlyFollowingComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_databases_ReadOnlyFollowingComponentInputs) {
		super(entity, options.name, "Microsoft.Kusto/clusters/databases", "2020-09-18", options);
	}
	public readonly apiVersion: "2020-09-18";
	public readonly id: string;
	public readonly type: "Microsoft.Kusto/clusters/databases";
}
export interface clusters_databases_ReadOnlyFollowingComponentOutputs {
	readonly apiVersion: "2020-09-18";
	readonly id: string;
	readonly type: "Microsoft.Kusto/clusters/databases";
}
export interface clusters_databases_ReadOnlyFollowingComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly kind: "ReadOnlyFollowing";
	readonly properties?: ReadOnlyFollowingDatabaseProperties | undefined;
}
export class clusters_databases_ReadWrite
	extends ArmResource<clusters_databases_ReadWriteComponentInputs>
	implements clusters_databases_ReadWriteComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_databases_ReadWriteComponentInputs) {
		super(entity, options.name, "Microsoft.Kusto/clusters/databases", "2020-09-18", options);
	}
	public readonly apiVersion: "2020-09-18";
	public readonly id: string;
	public readonly type: "Microsoft.Kusto/clusters/databases";
}
export interface clusters_databases_ReadWriteComponentOutputs {
	readonly apiVersion: "2020-09-18";
	readonly id: string;
	readonly type: "Microsoft.Kusto/clusters/databases";
}
export interface clusters_databases_ReadWriteComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly kind: "ReadWrite";
	readonly properties?: ReadWriteDatabaseProperties | undefined;
}
export class clusters_databases_dataConnections_EventGrid
	extends ArmResource<clusters_databases_dataConnections_EventGridComponentInputs>
	implements clusters_databases_dataConnections_EventGridComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_databases_dataConnections_EventGridComponentInputs) {
		super(entity, options.name, "Microsoft.Kusto/clusters/databases/dataConnections", "2020-09-18", options);
	}
	public readonly apiVersion: "2020-09-18";
	public readonly id: string;
	public readonly type: "Microsoft.Kusto/clusters/databases/dataConnections";
}
export interface clusters_databases_dataConnections_EventGridComponentOutputs {
	readonly apiVersion: "2020-09-18";
	readonly id: string;
	readonly type: "Microsoft.Kusto/clusters/databases/dataConnections";
}
export interface clusters_databases_dataConnections_EventGridComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly kind: "EventGrid";
	readonly properties?: EventGridConnectionProperties | undefined;
}
export class clusters_databases_dataConnections_EventHub
	extends ArmResource<clusters_databases_dataConnections_EventHubComponentInputs>
	implements clusters_databases_dataConnections_EventHubComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_databases_dataConnections_EventHubComponentInputs) {
		super(entity, options.name, "Microsoft.Kusto/clusters/databases/dataConnections", "2020-09-18", options);
	}
	public readonly apiVersion: "2020-09-18";
	public readonly id: string;
	public readonly type: "Microsoft.Kusto/clusters/databases/dataConnections";
}
export interface clusters_databases_dataConnections_EventHubComponentOutputs {
	readonly apiVersion: "2020-09-18";
	readonly id: string;
	readonly type: "Microsoft.Kusto/clusters/databases/dataConnections";
}
export interface clusters_databases_dataConnections_EventHubComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly kind: "EventHub";
	readonly properties?: EventHubConnectionProperties | undefined;
}
export class clusters_databases_dataConnections_IotHub
	extends ArmResource<clusters_databases_dataConnections_IotHubComponentInputs>
	implements clusters_databases_dataConnections_IotHubComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_databases_dataConnections_IotHubComponentInputs) {
		super(entity, options.name, "Microsoft.Kusto/clusters/databases/dataConnections", "2020-09-18", options);
	}
	public readonly apiVersion: "2020-09-18";
	public readonly id: string;
	public readonly type: "Microsoft.Kusto/clusters/databases/dataConnections";
}
export interface clusters_databases_dataConnections_IotHubComponentOutputs {
	readonly apiVersion: "2020-09-18";
	readonly id: string;
	readonly type: "Microsoft.Kusto/clusters/databases/dataConnections";
}
export interface clusters_databases_dataConnections_IotHubComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly kind: "IotHub";
	readonly properties?: IotHubConnectionProperties | undefined;
}
export class clusters_databases_principalAssignments
	extends ArmResource<clusters_databases_principalAssignmentsComponentInputs>
	implements clusters_databases_principalAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_databases_principalAssignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Kusto/clusters/databases/principalAssignments", "2020-09-18", options);
	}
	public readonly apiVersion: "2020-09-18";
	public readonly id: string;
	public readonly type: "Microsoft.Kusto/clusters/databases/principalAssignments";
}
export interface clusters_databases_principalAssignmentsComponentOutputs {
	readonly apiVersion: "2020-09-18";
	readonly id: string;
	readonly type: "Microsoft.Kusto/clusters/databases/principalAssignments";
}
export interface clusters_databases_principalAssignmentsComponentInputs {
	readonly name: string;
	readonly properties?: DatabasePrincipalProperties | undefined;
}
export class clusters_principalAssignments
	extends ArmResource<clusters_principalAssignmentsComponentInputs>
	implements clusters_principalAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_principalAssignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Kusto/clusters/principalAssignments", "2020-09-18", options);
	}
	public readonly apiVersion: "2020-09-18";
	public readonly id: string;
	public readonly type: "Microsoft.Kusto/clusters/principalAssignments";
}
export interface clusters_principalAssignmentsComponentOutputs {
	readonly apiVersion: "2020-09-18";
	readonly id: string;
	readonly type: "Microsoft.Kusto/clusters/principalAssignments";
}
export interface clusters_principalAssignmentsComponentInputs {
	readonly name: string;
	readonly properties?: ClusterPrincipalProperties | undefined;
}
export function listFollowerDatabases(resource: clusters): FollowerDatabaseListResult {
	if (resource.apiVersion !== "2020-09-18") {
		throw new Error(`listFollowerDatabases is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Kusto/clusters") {
		throw new Error(`listFollowerDatabases is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listLanguageExtensions(resource: clusters): LanguageExtensionsList {
	if (resource.apiVersion !== "2020-09-18") {
		throw new Error(`listLanguageExtensions is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Kusto/clusters") {
		throw new Error(`listLanguageExtensions is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listPrincipals(resource: ArmResource): DatabasePrincipalListResult {
	if (resource.apiVersion !== "2020-09-18") {
		throw new Error(`listPrincipals is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Kusto/clusters/databases") {
		throw new Error(`listPrincipals is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AttachedDatabaseConfigurationProperties {
	readonly attachedDatabaseNames?: string[] | undefined;
	readonly clusterResourceId: string;
	readonly databaseName: string;
	readonly defaultPrincipalsModificationKind: "None" | "Replace" | "Union";
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded") | undefined;
}
export interface AzureSku {
	readonly capacity?: number | undefined;
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
		| "Standard_E8a_v4"
		| "Standard_E8as_v4+1TB_PS"
		| "Standard_E8as_v4+2TB_PS"
		| "Standard_L16s"
		| "Standard_L4s"
		| "Standard_L8s";
	readonly tier: "Basic" | "Standard";
}
export interface ClusterPrincipalProperties {
	readonly principalId: string;
	readonly principalName?: string | undefined;
	readonly principalType: "App" | "Group" | "User";
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded") | undefined;
	readonly role: "AllDatabasesAdmin" | "AllDatabasesViewer";
	readonly tenantId?: string | undefined;
	readonly tenantName?: string | undefined;
}
export interface ClusterProperties {
	readonly dataIngestionUri?: string | undefined;
	readonly enableDiskEncryption?: boolean | undefined;
	readonly enableDoubleEncryption?: boolean | undefined;
	readonly enablePurge?: boolean | undefined;
	readonly enableStreamingIngest?: boolean | undefined;
	readonly engineType?: ("V2" | "V3") | undefined;
	readonly keyVaultProperties?: KeyVaultProperties | undefined;
	readonly languageExtensions?: LanguageExtensionsList | undefined;
	readonly optimizedAutoscale?: OptimizedAutoscale | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded") | undefined;
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
	readonly trustedExternalTenants?: TrustedExternalTenant[] | undefined;
	readonly uri?: string | undefined;
	readonly virtualNetworkConfiguration?: VirtualNetworkConfiguration | undefined;
}
export interface ComponentsSgqdofSchemasIdentityPropertiesUserassignedidentitiesAdditionalproperties {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export interface DatabasePrincipal {
	readonly appId?: string | undefined;
	readonly email?: string | undefined;
	readonly fqn?: string | undefined;
	readonly name: string;
	readonly role: "Admin" | "Ingestor" | "Monitor" | "UnrestrictedViewers" | "User" | "Viewer";
	readonly tenantName?: string | undefined;
	readonly type: "App" | "Group" | "User";
}
export interface DatabasePrincipalListResult {
	readonly value?: DatabasePrincipal[] | undefined;
}
export interface DatabasePrincipalProperties {
	readonly principalId: string;
	readonly principalName?: string | undefined;
	readonly principalType: "App" | "Group" | "User";
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded") | undefined;
	readonly role: "Admin" | "Ingestor" | "Monitor" | "UnrestrictedViewers" | "User" | "Viewer";
	readonly tenantId?: string | undefined;
	readonly tenantName?: string | undefined;
}
export interface DatabaseStatistics {
	readonly size?: number | undefined;
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
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded") | undefined;
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
	readonly mappingRuleName?: string | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded") | undefined;
	readonly tableName?: string | undefined;
}
export interface FollowerDatabaseDefinition {
	readonly attachedDatabaseConfigurationName: string;
	readonly clusterResourceId: string;
	readonly databaseName?: string | undefined;
}
export interface FollowerDatabaseListResult {
	readonly value?: FollowerDatabaseDefinition[] | undefined;
}
export interface Identity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type: "None" | "SystemAssigned" | "SystemAssigned, UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: IdentityUserAssignedIdentities | undefined;
}
export interface IdentityUserAssignedIdentities {
	readonly "[ key: string ]"?:
		| ComponentsSgqdofSchemasIdentityPropertiesUserassignedidentitiesAdditionalproperties
		| undefined;
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
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded") | undefined;
	readonly sharedAccessPolicyName: string;
	readonly tableName?: string | undefined;
}
export interface KeyVaultProperties {
	readonly keyName: string;
	readonly keyVaultUri: string;
	readonly keyVersion?: string | undefined;
	readonly userIdentity?: string | undefined;
}
export interface LanguageExtension {
	readonly languageExtensionName?: ("PYTHON" | "R") | undefined;
}
export interface LanguageExtensionsList {
	readonly value?: LanguageExtension[] | undefined;
}
export interface OptimizedAutoscale {
	readonly isEnabled: boolean;
	readonly maximum: number;
	readonly minimum: number;
	readonly version: number;
}
export interface ReadOnlyFollowingDatabaseProperties {
	readonly attachedDatabaseConfigurationName?: string | undefined;
	readonly hotCachePeriod?: string | undefined;
	readonly leaderClusterResourceId?: string | undefined;
	readonly principalsModificationKind?: ("None" | "Replace" | "Union") | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded") | undefined;
	readonly softDeletePeriod?: string | undefined;
	readonly statistics?: DatabaseStatistics | undefined;
}
export interface ReadWriteDatabaseProperties {
	readonly hotCachePeriod?: string | undefined;
	readonly isFollowed?: boolean | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded") | undefined;
	readonly softDeletePeriod?: string | undefined;
	readonly statistics?: DatabaseStatistics | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface TrustedExternalTenant {
	readonly value?: string | undefined;
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
	"clusters/principalAssignments": clusters_principalAssignments,
};
