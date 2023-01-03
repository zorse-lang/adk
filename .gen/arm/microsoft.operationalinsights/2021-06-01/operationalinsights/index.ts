import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class clusters extends ArmResource<clustersComponentInputs> implements clustersComponentOutputs {
	constructor(entity: ADKEntity, options: clustersComponentInputs) {
		super(entity, options.name, "Microsoft.OperationalInsights/clusters", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/clusters";
}
export interface clustersComponentOutputs {
	readonly apiVersion: "2021-06-01";
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
		super(entity, options.name, "Microsoft.OperationalInsights/workspaces", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/workspaces";
}
export interface workspacesComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.OperationalInsights/workspaces";
}
export interface workspacesComponentInputs {
	readonly etag?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: WorkspaceProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface AssociatedWorkspace {
	readonly associateDate?: string | undefined;
	readonly resourceId?: string | undefined;
	readonly workspaceId?: string | undefined;
	readonly workspaceName?: string | undefined;
}
export interface CapacityReservationProperties {
	readonly lastSkuUpdate?: string | undefined;
	readonly minCapacity?: number | undefined;
}
export interface ClusterProperties {
	readonly associatedWorkspaces?: AssociatedWorkspace[] | undefined;
	readonly billingType?: ("Cluster" | "Workspaces") | undefined;
	readonly capacityReservationProperties?: CapacityReservationProperties | undefined;
	readonly clusterId?: string | undefined;
	readonly createdDate?: string | undefined;
	readonly isAvailabilityZonesEnabled?: boolean | undefined;
	readonly isDoubleEncryptionEnabled?: boolean | undefined;
	readonly keyVaultProperties?: KeyVaultProperties | undefined;
	readonly lastModifiedDate?: string | undefined;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "ProvisioningAccount" | "Succeeded" | "Updating")
		| undefined;
}
export interface ClusterSku {
	readonly capacity?: number | undefined;
	readonly name?: "CapacityReservation" | undefined;
}
export interface Identity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type: "None" | "SystemAssigned";
	readonly userAssignedIdentities?: IdentityUserAssignedIdentities | undefined;
}
export interface IdentityUserAssignedIdentities {
	readonly "[ key: string ]"?: UserIdentityProperties | undefined;
}
export interface KeyVaultProperties {
	readonly keyName?: string | undefined;
	readonly keyRsaSize?: number | undefined;
	readonly keyVaultUri?: string | undefined;
	readonly keyVersion?: string | undefined;
}
export interface PrivateLinkScopedResource {
	readonly resourceId?: string | undefined;
	readonly scopeId?: string | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface UserIdentityProperties {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
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
	clusters: clusters,
	workspaces: workspaces,
};
