import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class clusters extends ArmResource<clustersComponentInputs> implements clustersComponentOutputs {
	constructor(entity: ADKEntity, options: clustersComponentInputs) {
		super(entity, options.name, "Microsoft.OperationalInsights/clusters", "2019-08-01-preview", options);
	}
	public readonly apiVersion: "2019-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/clusters";
}
export interface clustersComponentOutputs {
	readonly apiVersion: "2019-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.OperationalInsights/clusters";
}
export interface clustersComponentInputs {
	readonly identity?: Identity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ClusterProperties;
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
}
export class workspaces_dataExports
	extends ArmResource<workspaces_dataExportsComponentInputs>
	implements workspaces_dataExportsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_dataExportsComponentInputs) {
		super(entity, options.name, "Microsoft.OperationalInsights/workspaces/dataExports", "2019-08-01-preview", options);
	}
	public readonly apiVersion: "2019-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/workspaces/dataExports";
}
export interface workspaces_dataExportsComponentOutputs {
	readonly apiVersion: "2019-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.OperationalInsights/workspaces/dataExports";
}
export interface workspaces_dataExportsComponentInputs {
	readonly name: string;
	readonly properties?: DataExportProperties;
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
			"2019-08-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/workspaces/linkedServices";
}
export interface workspaces_linkedServicesComponentOutputs {
	readonly apiVersion: "2019-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.OperationalInsights/workspaces/linkedServices";
}
export interface workspaces_linkedServicesComponentInputs {
	readonly name: string;
	readonly properties: LinkedServiceProperties;
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
			"2019-08-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/workspaces/linkedStorageAccounts";
}
export interface workspaces_linkedStorageAccountsComponentOutputs {
	readonly apiVersion: "2019-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.OperationalInsights/workspaces/linkedStorageAccounts";
}
export interface workspaces_linkedStorageAccountsComponentInputs {
	readonly name: string;
	readonly properties: LinkedStorageAccountsProperties;
}
export interface ClusterProperties {
	readonly clusterId?: string;
	readonly keyVaultProperties?: KeyVaultProperties;
	readonly nextLink?: string;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "ProvisioningAccount" | "Succeeded";
}
export interface DataExportProperties {
	readonly createdDate?: string;
	readonly dataExportId?: string;
	readonly destination?: Destination;
	readonly enable?: boolean;
	readonly lastModifiedDate?: string;
	readonly tableNames: string[];
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
	readonly resourceId?: string;
	readonly writeAccessResourceId?: string;
}
export interface LinkedStorageAccountsProperties {
	readonly dataSourceType?: "AzureWatson";
	readonly storageAccountIds?: string[];
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface Sku {
	readonly capacity?: number;
	readonly name?: "CapacityReservation";
}
export default {
	clusters: clusters,
	"workspaces/dataExports": workspaces_dataExports,
	"workspaces/linkedServices": workspaces_linkedServices,
	"workspaces/linkedStorageAccounts": workspaces_linkedStorageAccounts,
};
