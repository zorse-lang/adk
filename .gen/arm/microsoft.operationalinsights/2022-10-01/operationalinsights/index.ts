import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class workspaces extends ArmResource<workspacesComponentInputs> implements workspacesComponentOutputs {
	constructor(entity: ADKEntity, options: workspacesComponentInputs) {
		super(entity, options.name, "Microsoft.OperationalInsights/workspaces", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/workspaces";
}
export interface workspacesComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.OperationalInsights/workspaces";
}
export interface workspacesComponentInputs {
	readonly etag?: string;
	readonly identity?: Identity;
	readonly location: string;
	readonly name: string;
	readonly properties?: WorkspaceProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class workspaces_tables
	extends ArmResource<workspaces_tablesComponentInputs>
	implements workspaces_tablesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_tablesComponentInputs) {
		super(entity, options.name, "Microsoft.OperationalInsights/workspaces/tables", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/workspaces/tables";
}
export interface workspaces_tablesComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.OperationalInsights/workspaces/tables";
}
export interface workspaces_tablesComponentInputs {
	readonly name: string;
	readonly properties?: TableProperties;
	readonly systemData?: SystemData;
}
export interface Column {
	readonly dataTypeHint?: "armPath" | "guid" | "ip" | "uri";
	readonly description?: string;
	readonly displayName?: string;
	readonly isDefaultDisplay?: boolean;
	readonly isHidden?: boolean;
	readonly name?: string;
	readonly type?: "boolean" | "dateTime" | "dynamic" | "guid" | "int" | "long" | "real" | "string";
}
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type: "None" | "SystemAssigned";
	readonly userAssignedIdentities?: IdentityUserAssignedIdentities;
}
export interface IdentityUserAssignedIdentities {
	readonly [key: string]: UserIdentityProperties;
}
export interface PrivateLinkScopedResource {
	readonly resourceId?: string;
	readonly scopeId?: string;
}
export interface RestoredLogs {
	readonly azureAsyncOperationId?: string;
	readonly endRestoreTime?: string;
	readonly sourceTable?: string;
	readonly startRestoreTime?: string;
}
export interface ResultStatistics {
	readonly ingestedRecords?: number;
	readonly progress?: number;
	readonly scannedGb?: number;
}
export interface Schema {
	readonly categories?: string[];
	readonly columns?: Column[];
	readonly description?: string;
	readonly displayName?: string;
	readonly labels?: string[];
	readonly name?: string;
	readonly solutions?: string[];
	readonly source?: "customer" | "microsoft";
	readonly standardColumns?: Column[];
	readonly tableSubType?: "any" | "Classic" | "DataCollectionRuleBased";
	readonly tableType?: "CustomLog" | "Microsoft" | "RestoredLogs" | "SearchResults";
}
export interface SearchResults {
	readonly azureAsyncOperationId?: string;
	readonly description?: string;
	readonly endSearchTime?: string;
	readonly limit?: number;
	readonly query?: string;
	readonly sourceTable?: string;
	readonly startSearchTime?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TableProperties {
	readonly archiveRetentionInDays?: number;
	readonly lastPlanModifiedDate?: string;
	readonly plan?: "Analytics" | "Basic";
	readonly provisioningState?: "InProgress" | "Succeeded" | "Updating";
	readonly restoredLogs?: RestoredLogs;
	readonly resultStatistics?: ResultStatistics;
	readonly retentionInDays?: number;
	readonly retentionInDaysAsDefault?: boolean;
	readonly schema?: Schema;
	readonly searchResults?: SearchResults;
	readonly totalRetentionInDays?: number;
	readonly totalRetentionInDaysAsDefault?: boolean;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface UserIdentityProperties {
	readonly clientId?: string;
	readonly principalId?: string;
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
	readonly clusterResourceId?: string;
	readonly disableLocalAuth?: boolean;
	readonly enableDataExport?: boolean;
	readonly enableLogAccessUsingOnlyResourcePermissions?: boolean;
	readonly immediatePurgeDataOn30Days?: boolean;
	readonly [key: string]: any;
}
export interface WorkspaceProperties {
	readonly createdDate?: string;
	readonly customerId?: string;
	readonly defaultDataCollectionRuleResourceId?: string;
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
