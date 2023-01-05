import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class clusters extends ArmResource<clustersComponentInputs> implements clustersComponentOutputs {
	constructor(entity: ADKEntity, options: clustersComponentInputs) {
		super(entity, options.name, "Microsoft.OperationalInsights/clusters", "2020-10-01", options);
	}
	public readonly apiVersion: "2020-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/clusters";
}
export interface clustersComponentOutputs {
	readonly apiVersion: "2020-10-01";
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
		super(entity, options.name, "Microsoft.OperationalInsights/workspaces", "2020-10-01", options);
	}
	public readonly apiVersion: "2020-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/workspaces";
}
export interface workspacesComponentOutputs {
	readonly apiVersion: "2020-10-01";
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
export class workspaces_tables
	extends ArmResource<workspaces_tablesComponentInputs>
	implements workspaces_tablesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_tablesComponentInputs) {
		super(entity, options.name, "Microsoft.OperationalInsights/workspaces/tables", "2020-10-01", options);
	}
	public readonly apiVersion: "2020-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/workspaces/tables";
}
export interface workspaces_tablesComponentOutputs {
	readonly apiVersion: "2020-10-01";
	readonly id: string;
	readonly type: "Microsoft.OperationalInsights/workspaces/tables";
}
export interface workspaces_tablesComponentInputs {
	readonly name: string;
	readonly properties?: TableProperties;
}
export interface AssociatedWorkspace {
	readonly associateDate?: string;
	readonly resourceId?: string;
	readonly workspaceId?: string;
	readonly workspaceName?: string;
}
export interface CapacityReservationProperties {
	readonly lastSkuUpdate?: string;
	readonly minCapacity?: number;
}
export interface ClusterProperties {
	readonly associatedWorkspaces?: AssociatedWorkspace[];
	readonly billingType?: "Cluster" | "Workspaces";
	readonly capacityReservationProperties?: CapacityReservationProperties;
	readonly clusterId?: string;
	readonly createdDate?: string;
	readonly isAvailabilityZonesEnabled?: boolean;
	readonly isDoubleEncryptionEnabled?: boolean;
	readonly keyVaultProperties?: KeyVaultProperties;
	readonly lastModifiedDate?: string;
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
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type: "None" | "SystemAssigned";
	readonly userAssignedIdentities?: IdentityUserAssignedIdentities;
}
export interface IdentityUserAssignedIdentities {
	readonly [key: string]: UserIdentityProperties;
}
export interface KeyVaultProperties {
	readonly keyName?: string;
	readonly keyRsaSize?: number;
	readonly keyVaultUri?: string;
	readonly keyVersion?: string;
}
export interface PrivateLinkScopedResource {
	readonly resourceId?: string;
	readonly scopeId?: string;
}
export interface TableProperties {
	readonly isTroubleshootEnabled?: boolean;
	readonly isTroubleshootingAllowed?: boolean;
	readonly lastTroubleshootDate?: string;
	readonly retentionInDays?: number;
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
	clusters: clusters,
	workspaces: workspaces,
	"workspaces/tables": workspaces_tables,
};
