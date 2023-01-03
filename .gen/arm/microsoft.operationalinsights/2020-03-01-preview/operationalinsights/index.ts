import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class clusters extends ArmResource<clustersComponentInputs> implements clustersComponentOutputs {
	constructor(entity: ADKEntity, options: clustersComponentInputs) {
		super(entity, options.name, "Microsoft.OperationalInsights/clusters", "2020-03-01-preview", options);
	}
	public readonly apiVersion: "2020-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/clusters";
}
export interface clustersComponentOutputs {
	readonly apiVersion: "2020-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.OperationalInsights/clusters";
}
export interface clustersComponentInputs {
	readonly identity?: Identity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: ClusterProperties | undefined;
	readonly sku?: ClusterSku | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class workspaces extends ArmResource<workspacesComponentInputs> implements workspacesComponentOutputs {
	constructor(entity: ADKEntity, options: workspacesComponentInputs) {
		super(entity, options.name, "Microsoft.OperationalInsights/workspaces", "2020-03-01-preview", options);
	}
	public readonly apiVersion: "2020-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/workspaces";
}
export interface workspacesComponentOutputs {
	readonly apiVersion: "2020-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.OperationalInsights/workspaces";
}
export interface workspacesComponentInputs {
	readonly eTag?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: WorkspaceProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class workspaces_dataCollectorLogs
	extends ArmResource<workspaces_dataCollectorLogsComponentInputs>
	implements workspaces_dataCollectorLogsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_dataCollectorLogsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.OperationalInsights/workspaces/dataCollectorLogs",
			"2020-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/workspaces/dataCollectorLogs";
}
export interface workspaces_dataCollectorLogsComponentOutputs {
	readonly apiVersion: "2020-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.OperationalInsights/workspaces/dataCollectorLogs";
}
export interface workspaces_dataCollectorLogsComponentInputs {
	readonly name: string;
	readonly properties?: DataCollectorLogProperties | undefined;
}
export class workspaces_dataExports
	extends ArmResource<workspaces_dataExportsComponentInputs>
	implements workspaces_dataExportsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_dataExportsComponentInputs) {
		super(entity, options.name, "Microsoft.OperationalInsights/workspaces/dataExports", "2020-03-01-preview", options);
	}
	public readonly apiVersion: "2020-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/workspaces/dataExports";
}
export interface workspaces_dataExportsComponentOutputs {
	readonly apiVersion: "2020-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.OperationalInsights/workspaces/dataExports";
}
export interface workspaces_dataExportsComponentInputs {
	readonly name: string;
	readonly properties?: DataExportProperties | undefined;
}
export class workspaces_dataSources
	extends ArmResource<workspaces_dataSourcesComponentInputs>
	implements workspaces_dataSourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_dataSourcesComponentInputs) {
		super(entity, options.name, "Microsoft.OperationalInsights/workspaces/dataSources", "2020-03-01-preview", options);
	}
	public readonly apiVersion: "2020-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/workspaces/dataSources";
}
export interface workspaces_dataSourcesComponentOutputs {
	readonly apiVersion: "2020-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.OperationalInsights/workspaces/dataSources";
}
export interface workspaces_dataSourcesComponentInputs {
	readonly etag?: string | undefined;
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
	readonly tags?: DataSourceTags | undefined;
}
export class workspaces_linkedServices
	extends ArmResource<workspaces_linkedServicesComponentInputs>
	implements workspaces_linkedServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_linkedServicesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.OperationalInsights/workspaces/linkedServices",
			"2020-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/workspaces/linkedServices";
}
export interface workspaces_linkedServicesComponentOutputs {
	readonly apiVersion: "2020-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.OperationalInsights/workspaces/linkedServices";
}
export interface workspaces_linkedServicesComponentInputs {
	readonly name: string;
	readonly properties: LinkedServiceProperties;
	readonly tags?: LinkedServiceTags | undefined;
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
			"2020-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/workspaces/linkedStorageAccounts";
}
export interface workspaces_linkedStorageAccountsComponentOutputs {
	readonly apiVersion: "2020-03-01-preview";
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
		super(
			entity,
			options.name,
			"Microsoft.OperationalInsights/workspaces/savedSearches",
			"2020-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/workspaces/savedSearches";
}
export interface workspaces_savedSearchesComponentOutputs {
	readonly apiVersion: "2020-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.OperationalInsights/workspaces/savedSearches";
}
export interface workspaces_savedSearchesComponentInputs {
	readonly etag?: string | undefined;
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
			"2020-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/workspaces/storageInsightConfigs";
}
export interface workspaces_storageInsightConfigsComponentOutputs {
	readonly apiVersion: "2020-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.OperationalInsights/workspaces/storageInsightConfigs";
}
export interface workspaces_storageInsightConfigsComponentInputs {
	readonly eTag?: string | undefined;
	readonly name: string;
	readonly properties?: StorageInsightProperties | undefined;
	readonly tags?: StorageInsightTags | undefined;
}
export class workspaces_tables
	extends ArmResource<workspaces_tablesComponentInputs>
	implements workspaces_tablesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_tablesComponentInputs) {
		super(entity, options.name, "Microsoft.OperationalInsights/workspaces/tables", "2020-03-01-preview", options);
	}
	public readonly apiVersion: "2020-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/workspaces/tables";
}
export interface workspaces_tablesComponentOutputs {
	readonly apiVersion: "2020-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.OperationalInsights/workspaces/tables";
}
export interface workspaces_tablesComponentInputs {
	readonly name: string;
	readonly properties?: TableProperties | undefined;
}
export interface ClusterProperties {
	readonly clusterId?: string | undefined;
	readonly keyVaultProperties?: KeyVaultProperties | undefined;
	readonly nextLink?: string | undefined;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "ProvisioningAccount" | "Succeeded" | "Updating")
		| undefined;
}
export interface ClusterSku {
	readonly capacity?: number | undefined;
	readonly name?: "CapacityReservation" | undefined;
}
export interface DataCollectorLogProperties {
	readonly name?: string | undefined;
}
export interface DataExportProperties {
	readonly createdDate?: string | undefined;
	readonly dataExportId?: string | undefined;
	readonly destination?: Destination | undefined;
	readonly enable?: boolean | undefined;
	readonly lastModifiedDate?: string | undefined;
	readonly tableNames: string[];
}
export interface DataSourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Destination {
	readonly metaData?: DestinationMetaData | undefined;
	readonly resourceId: string;
	readonly type?: ("EventHub" | "StorageAccount") | undefined;
}
export interface DestinationMetaData {
	readonly eventHubName?: string | undefined;
}
export interface Identity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type: "None";
}
export interface KeyVaultProperties {
	readonly keyName?: string | undefined;
	readonly keyVaultUri?: string | undefined;
	readonly keyVersion?: string | undefined;
}
export interface LinkedServiceProperties {
	readonly provisioningState?: ("Deleting" | "ProvisioningAccount" | "Succeeded" | "Updating") | undefined;
	readonly resourceId?: string | undefined;
	readonly writeAccessResourceId?: string | undefined;
}
export interface LinkedServiceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface LinkedStorageAccountsProperties {
	readonly dataSourceType?: ("Alerts" | "AzureWatson" | "CustomLogs" | "Ingestion") | undefined;
	readonly storageAccountIds?: string[] | undefined;
}
export interface PrivateLinkScopedResource {
	readonly resourceId?: string | undefined;
	readonly scopeId?: string | undefined;
}
export interface SavedSearchProperties {
	readonly category: string;
	readonly displayName: string;
	readonly functionAlias?: string | undefined;
	readonly functionParameters?: string | undefined;
	readonly query: string;
	readonly tags?: Tag[] | undefined;
	readonly version?: number | undefined;
}
export interface StorageAccount {
	readonly id: string;
	readonly key: string;
}
export interface StorageInsightProperties {
	readonly containers?: string[] | undefined;
	readonly status?: StorageInsightStatus | undefined;
	readonly storageAccount: StorageAccount;
	readonly tables?: string[] | undefined;
}
export interface StorageInsightStatus {
	readonly description?: string | undefined;
	readonly state: "ERROR" | "OK";
}
export interface StorageInsightTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface TableProperties {
	readonly retentionInDays?: number | undefined;
}
export interface Tag {
	readonly name: string;
	readonly value: string;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface WorkspaceCapping {
	readonly dailyQuotaGb?: number | undefined;
	readonly dataIngestionStatus?:
		| ("ApproachingQuota" | "ForceOff" | "ForceOn" | "OverQuota" | "RespectQuota" | "SubscriptionSuspended")
		| undefined;
	readonly quotaNextResetTime?: string | undefined;
}
export interface WorkspaceProperties {
	readonly customerId?: string | undefined;
	readonly privateLinkScopedResources?: PrivateLinkScopedResource[] | undefined;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "ProvisioningAccount" | "Succeeded" | "Updating")
		| undefined;
	readonly publicNetworkAccessForIngestion?: ("Disabled" | "Enabled") | undefined;
	readonly publicNetworkAccessForQuery?: ("Disabled" | "Enabled") | undefined;
	readonly retentionInDays?: number | undefined;
	readonly sku?: WorkspaceSku | undefined;
	readonly workspaceCapping?: WorkspaceCapping | undefined;
}
export interface WorkspaceSku {
	readonly capacityReservationLevel?: number | undefined;
	readonly lastSkuUpdate?: string | undefined;
	readonly maxCapacityReservationLevel?: number | undefined;
	readonly name: "CapacityReservation" | "Free" | "PerGB2018" | "PerNode" | "Premium" | "Standalone" | "Standard";
}
export default {
	clusters: clusters,
	workspaces: workspaces,
	"workspaces/dataCollectorLogs": workspaces_dataCollectorLogs,
	"workspaces/dataExports": workspaces_dataExports,
	"workspaces/dataSources": workspaces_dataSources,
	"workspaces/linkedServices": workspaces_linkedServices,
	"workspaces/linkedStorageAccounts": workspaces_linkedStorageAccounts,
	"workspaces/savedSearches": workspaces_savedSearches,
	"workspaces/storageInsightConfigs": workspaces_storageInsightConfigs,
	"workspaces/tables": workspaces_tables,
};
