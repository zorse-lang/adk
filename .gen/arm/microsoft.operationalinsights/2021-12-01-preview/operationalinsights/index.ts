import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class workspaces extends ArmResource<workspacesComponentInputs> implements workspacesComponentOutputs {
	constructor(entity: ADKEntity, options: workspacesComponentInputs) {
		super(entity, options.name, "Microsoft.OperationalInsights/workspaces", "2021-12-01-preview", options);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/workspaces";
}
export interface workspacesComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.OperationalInsights/workspaces";
}
export interface workspacesComponentInputs {
	readonly eTag?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: WorkspaceProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class workspaces_tables
	extends ArmResource<workspaces_tablesComponentInputs>
	implements workspaces_tablesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_tablesComponentInputs) {
		super(entity, options.name, "Microsoft.OperationalInsights/workspaces/tables", "2021-12-01-preview", options);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/workspaces/tables";
}
export interface workspaces_tablesComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.OperationalInsights/workspaces/tables";
}
export interface workspaces_tablesComponentInputs {
	readonly name: string;
	readonly properties?: TableProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface Column {
	readonly dataTypeHint?: ("armPath" | "guid" | "ip" | "uri") | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly isDefaultDisplay?: boolean | undefined;
	readonly isHidden?: boolean | undefined;
	readonly name?: string | undefined;
	readonly type?: ("boolean" | "dateTime" | "dynamic" | "guid" | "int" | "long" | "real" | "string") | undefined;
}
export interface PrivateLinkScopedResource {
	readonly resourceId?: string | undefined;
	readonly scopeId?: string | undefined;
}
export interface RestoredLogs {
	readonly endRestoreTime?: string | undefined;
	readonly sourceTable?: string | undefined;
	readonly startRestoreTime?: string | undefined;
}
export interface ResultStatistics {
	readonly ingestedRecords?: number | undefined;
	readonly progress?: number | undefined;
}
export interface Schema {
	readonly categories?: string[] | undefined;
	readonly columns?: Column[] | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly labels?: string[] | undefined;
	readonly name?: string | undefined;
	readonly restoredLogs?: RestoredLogs | undefined;
	readonly searchResults?: SearchResults | undefined;
	readonly solutions?: string[] | undefined;
	readonly source?: ("customer" | "microsoft") | undefined;
	readonly standardColumns?: Column[] | undefined;
	readonly tableSubType?: ("any" | "Classic" | "DataCollectionRuleBased") | undefined;
	readonly tableType?: ("CustomLog" | "Microsoft" | "RestoredLogs" | "SearchResults") | undefined;
}
export interface SearchResults {
	readonly description?: string | undefined;
	readonly endSearchTime?: string | undefined;
	readonly limit?: number | undefined;
	readonly query?: string | undefined;
	readonly sourceTable?: string | undefined;
	readonly startSearchTime?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TableProperties {
	readonly archiveRetentionInDays?: number | undefined;
	readonly lastPlanModifiedDate?: string | undefined;
	readonly plan?: ("Analytics" | "Basic") | undefined;
	readonly provisioningState?: ("InProgress" | "Succeeded" | "Updating") | undefined;
	readonly restoredLogs?: RestoredLogs | undefined;
	readonly resultStatistics?: ResultStatistics | undefined;
	readonly retentionInDays?: number | undefined;
	readonly schema?: Schema | undefined;
	readonly searchResults?: SearchResults | undefined;
	readonly totalRetentionInDays?: number | undefined;
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
export interface WorkspaceFeatures {
	readonly clusterResourceId?: string | undefined;
	readonly disableLocalAuth?: boolean | undefined;
	readonly enableDataExport?: boolean | undefined;
	readonly enableLogAccessUsingOnlyResourcePermissions?: boolean | undefined;
	readonly immediatePurgeDataOn30Days?: boolean | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface WorkspaceProperties {
	readonly createdDate?: string | undefined;
	readonly customerId?: string | undefined;
	readonly defaultDataCollectionRuleResourceId?: string | undefined;
	readonly features?: WorkspaceFeatures | undefined;
	readonly forceCmkForQuery?: boolean | undefined;
	readonly modifiedDate?: string | undefined;
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
	workspaces: workspaces,
	"workspaces/tables": workspaces_tables,
};
