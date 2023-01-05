import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class clusters extends ArmResource<clustersComponentInputs> implements clustersComponentOutputs {
	constructor(entity: ADKEntity, options: clustersComponentInputs) {
		super(entity, options.name, "Microsoft.OperationalInsights/clusters", "2020-08-01", options);
	}
	public readonly apiVersion: "2020-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/clusters";
}
export interface clustersComponentOutputs {
	readonly apiVersion: "2020-08-01";
	readonly id: string;
	readonly type: "Microsoft.OperationalInsights/clusters";
}
export interface clustersComponentInputs {
	readonly identity?: Identity;
	readonly location: string;
	readonly name: string;
	readonly properties?: ClusterProperties;
	readonly sku?: ClusterSku;
	readonly tags?: TrackedResourceTags;
}
export class workspaces extends ArmResource<workspacesComponentInputs> implements workspacesComponentOutputs {
	constructor(entity: ADKEntity, options: workspacesComponentInputs) {
		super(entity, options.name, "Microsoft.OperationalInsights/workspaces", "2020-08-01", options);
	}
	public readonly apiVersion: "2020-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/workspaces";
}
export interface workspacesComponentOutputs {
	readonly apiVersion: "2020-08-01";
	readonly id: string;
	readonly type: "Microsoft.OperationalInsights/workspaces";
}
export interface workspacesComponentInputs {
	readonly eTag?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: WorkspaceProperties;
	readonly tags?: TrackedResourceTags;
}
export class workspaces_dataExports
	extends ArmResource<workspaces_dataExportsComponentInputs>
	implements workspaces_dataExportsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_dataExportsComponentInputs) {
		super(entity, options.name, "Microsoft.OperationalInsights/workspaces/dataExports", "2020-08-01", options);
	}
	public readonly apiVersion: "2020-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/workspaces/dataExports";
}
export interface workspaces_dataExportsComponentOutputs {
	readonly apiVersion: "2020-08-01";
	readonly id: string;
	readonly type: "Microsoft.OperationalInsights/workspaces/dataExports";
}
export interface workspaces_dataExportsComponentInputs {
	readonly name: string;
	readonly properties?: DataExportProperties;
}
export class workspaces_dataSources
	extends ArmResource<workspaces_dataSourcesComponentInputs>
	implements workspaces_dataSourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_dataSourcesComponentInputs) {
		super(entity, options.name, "Microsoft.OperationalInsights/workspaces/dataSources", "2020-08-01", options);
	}
	public readonly apiVersion: "2020-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/workspaces/dataSources";
}
export interface workspaces_dataSourcesComponentOutputs {
	readonly apiVersion: "2020-08-01";
	readonly id: string;
	readonly type: "Microsoft.OperationalInsights/workspaces/dataSources";
}
export interface workspaces_dataSourcesComponentInputs {
	readonly etag?: string;
	readonly kind:
		| "ApplicationInsights"
		| "AzureActivityLog"
		| "AzureAuditLog"
		| "ChangeTrackingContentLocation"
		| "ChangeTrackingCustomPath"
		| "ChangeTrackingDataTypeConfiguration"
		| "ChangeTrackingDefaultRegistry"
		| "ChangeTrackingLinuxPath"
		| "ChangeTrackingPath"
		| "ChangeTrackingRegistry"
		| "ChangeTrackingServices"
		| "CustomLog"
		| "CustomLogCollection"
		| "DnsAnalytics"
		| "GenericDataSource"
		| "IISLogs"
		| "ImportComputerGroup"
		| "Itsm"
		| "LinuxChangeTrackingPath"
		| "LinuxPerformanceCollection"
		| "LinuxPerformanceObject"
		| "LinuxSyslog"
		| "LinuxSyslogCollection"
		| "NetworkMonitoring"
		| "Office365"
		| "SecurityCenterSecurityWindowsBaselineConfiguration"
		| "SecurityEventCollectionConfiguration"
		| "SecurityInsightsSecurityEventCollectionConfiguration"
		| "SecurityWindowsBaselineConfiguration"
		| "SqlDataClassification"
		| "WindowsEvent"
		| "WindowsPerformanceCounter"
		| "WindowsTelemetry";
	readonly name: string;
	readonly properties: any;
	readonly tags?: DataSourceTags;
}
export class workspaces_linkedServices
	extends ArmResource<workspaces_linkedServicesComponentInputs>
	implements workspaces_linkedServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_linkedServicesComponentInputs) {
		super(entity, options.name, "Microsoft.OperationalInsights/workspaces/linkedServices", "2020-08-01", options);
	}
	public readonly apiVersion: "2020-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/workspaces/linkedServices";
}
export interface workspaces_linkedServicesComponentOutputs {
	readonly apiVersion: "2020-08-01";
	readonly id: string;
	readonly type: "Microsoft.OperationalInsights/workspaces/linkedServices";
}
export interface workspaces_linkedServicesComponentInputs {
	readonly name: string;
	readonly properties: LinkedServiceProperties;
	readonly tags?: LinkedServiceTags;
}
export class workspaces_linkedStorageAccounts
	extends ArmResource<workspaces_linkedStorageAccountsComponentInputs>
	implements workspaces_linkedStorageAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_linkedStorageAccountsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.OperationalInsights/workspaces/linkedStorageAccounts",
			"2020-08-01",
			options,
		);
	}
	public readonly apiVersion: "2020-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/workspaces/linkedStorageAccounts";
}
export interface workspaces_linkedStorageAccountsComponentOutputs {
	readonly apiVersion: "2020-08-01";
	readonly id: string;
	readonly type: "Microsoft.OperationalInsights/workspaces/linkedStorageAccounts";
}
export interface workspaces_linkedStorageAccountsComponentInputs {
	readonly name: string;
	readonly properties: LinkedStorageAccountsProperties;
}
export class workspaces_savedSearches
	extends ArmResource<workspaces_savedSearchesComponentInputs>
	implements workspaces_savedSearchesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_savedSearchesComponentInputs) {
		super(entity, options.name, "Microsoft.OperationalInsights/workspaces/savedSearches", "2020-08-01", options);
	}
	public readonly apiVersion: "2020-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/workspaces/savedSearches";
}
export interface workspaces_savedSearchesComponentOutputs {
	readonly apiVersion: "2020-08-01";
	readonly id: string;
	readonly type: "Microsoft.OperationalInsights/workspaces/savedSearches";
}
export interface workspaces_savedSearchesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties: SavedSearchProperties;
}
export class workspaces_storageInsightConfigs
	extends ArmResource<workspaces_storageInsightConfigsComponentInputs>
	implements workspaces_storageInsightConfigsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_storageInsightConfigsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.OperationalInsights/workspaces/storageInsightConfigs",
			"2020-08-01",
			options,
		);
	}
	public readonly apiVersion: "2020-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/workspaces/storageInsightConfigs";
}
export interface workspaces_storageInsightConfigsComponentOutputs {
	readonly apiVersion: "2020-08-01";
	readonly id: string;
	readonly type: "Microsoft.OperationalInsights/workspaces/storageInsightConfigs";
}
export interface workspaces_storageInsightConfigsComponentInputs {
	readonly eTag?: string;
	readonly name: string;
	readonly properties?: StorageInsightProperties;
	readonly tags?: StorageInsightTags;
}
export class workspaces_tables
	extends ArmResource<workspaces_tablesComponentInputs>
	implements workspaces_tablesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_tablesComponentInputs) {
		super(entity, options.name, "Microsoft.OperationalInsights/workspaces/tables", "2020-08-01", options);
	}
	public readonly apiVersion: "2020-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/workspaces/tables";
}
export interface workspaces_tablesComponentOutputs {
	readonly apiVersion: "2020-08-01";
	readonly id: string;
	readonly type: "Microsoft.OperationalInsights/workspaces/tables";
}
export interface workspaces_tablesComponentInputs {
	readonly name: string;
	readonly properties?: TableProperties;
}
export interface ClusterProperties {
	readonly clusterId?: string;
	readonly keyVaultProperties?: KeyVaultProperties;
	readonly nextLink?: string;
	readonly provisioningState?:
		| "Canceled"
		| "Creating"
		| "Deleting"
		| "Failed"
		| "ProvisioningAccount"
		| "Succeeded"
		| "Updating";
}
export interface ClusterSku {
	readonly capacity?: number;
	readonly name?: "CapacityReservation";
}
export interface DataExportProperties {
	readonly createdDate?: string;
	readonly dataExportId?: string;
	readonly destination?: Destination;
	readonly enable?: boolean;
	readonly lastModifiedDate?: string;
	readonly tableNames: string[];
}
export interface DataSourceTags {
	readonly [key: string]: string;
}
export interface Destination {
	readonly metaData?: DestinationMetaData;
	readonly resourceId: string;
	readonly type?: "EventHub" | "StorageAccount";
}
export interface DestinationMetaData {
	readonly eventHubName?: string;
}
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type: "None";
}
export interface KeyVaultProperties {
	readonly keyName?: string;
	readonly keyVaultUri?: string;
	readonly keyVersion?: string;
}
export interface LinkedServiceProperties {
	readonly provisioningState?: "Deleting" | "ProvisioningAccount" | "Succeeded" | "Updating";
	readonly resourceId?: string;
	readonly writeAccessResourceId?: string;
}
export interface LinkedServiceTags {
	readonly [key: string]: string;
}
export interface LinkedStorageAccountsProperties {
	readonly dataSourceType?: "Alerts" | "AzureWatson" | "CustomLogs" | "Ingestion";
	readonly storageAccountIds?: string[];
}
export interface PrivateLinkScopedResource {
	readonly resourceId?: string;
	readonly scopeId?: string;
}
export interface SavedSearchProperties {
	readonly category: string;
	readonly displayName: string;
	readonly functionAlias?: string;
	readonly functionParameters?: string;
	readonly query: string;
	readonly tags?: Tag[];
	readonly version?: number;
}
export interface StorageAccount {
	readonly id: string;
	readonly key: string;
}
export interface StorageInsightProperties {
	readonly containers?: string[];
	readonly status?: StorageInsightStatus;
	readonly storageAccount: StorageAccount;
	readonly tables?: string[];
}
export interface StorageInsightStatus {
	readonly description?: string;
	readonly state: "ERROR" | "OK";
}
export interface StorageInsightTags {
	readonly [key: string]: string;
}
export interface TableProperties {
	readonly retentionInDays?: number;
}
export interface Tag {
	readonly name: string;
	readonly value: string;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface WorkspaceCapping {
	readonly dailyQuotaGb?: number;
	readonly dataIngestionStatus?:
		| "ApproachingQuota"
		| "ForceOff"
		| "ForceOn"
		| "OverQuota"
		| "RespectQuota"
		| "SubscriptionSuspended";
	readonly quotaNextResetTime?: string;
}
export interface WorkspaceFeatures {
	readonly [key: string]: any;
}
export interface WorkspaceProperties {
	readonly createdDate?: string;
	readonly customerId?: string;
	readonly features?: WorkspaceFeatures;
	readonly forceCmkForQuery?: boolean;
	readonly modifiedDate?: string;
	readonly privateLinkScopedResources?: PrivateLinkScopedResource[];
	readonly provisioningState?:
		| "Canceled"
		| "Creating"
		| "Deleting"
		| "Failed"
		| "ProvisioningAccount"
		| "Succeeded"
		| "Updating";
	readonly publicNetworkAccessForIngestion?: "Disabled" | "Enabled";
	readonly publicNetworkAccessForQuery?: "Disabled" | "Enabled";
	readonly retentionInDays?: number;
	readonly sku?: WorkspaceSku;
	readonly workspaceCapping?: WorkspaceCapping;
}
export interface WorkspaceSku {
	readonly capacityReservationLevel?: number;
	readonly lastSkuUpdate?: string;
	readonly maxCapacityReservationLevel?: number;
	readonly name:
		| "CapacityReservation"
		| "Free"
		| "LACluster"
		| "PerGB2018"
		| "PerNode"
		| "Premium"
		| "Standalone"
		| "Standard";
}
export default {
	clusters: clusters,
	workspaces: workspaces,
	"workspaces/dataExports": workspaces_dataExports,
	"workspaces/dataSources": workspaces_dataSources,
	"workspaces/linkedServices": workspaces_linkedServices,
	"workspaces/linkedStorageAccounts": workspaces_linkedStorageAccounts,
	"workspaces/savedSearches": workspaces_savedSearches,
	"workspaces/storageInsightConfigs": workspaces_storageInsightConfigs,
	"workspaces/tables": workspaces_tables,
};
