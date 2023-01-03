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
	readonly identity?: Identity | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ClusterProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
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
	readonly properties?: DataExportProperties | undefined;
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
	readonly clusterId?: string | undefined;
	readonly keyVaultProperties?: KeyVaultProperties | undefined;
	readonly nextLink?: string | undefined;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "ProvisioningAccount" | "Succeeded")
		| undefined;
}
export interface DataExportProperties {
	readonly createdDate?: string | undefined;
	readonly dataExportId?: string | undefined;
	readonly destination?: Destination | undefined;
	readonly enable?: boolean | undefined;
	readonly lastModifiedDate?: string | undefined;
	readonly tableNames: string[];
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
	readonly resourceId?: string | undefined;
	readonly writeAccessResourceId?: string | undefined;
}
export interface LinkedStorageAccountsProperties {
	readonly dataSourceType?: "AzureWatson" | undefined;
	readonly storageAccountIds?: string[] | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Sku {
	readonly capacity?: number | undefined;
	readonly name?: "CapacityReservation" | undefined;
}
export default {
	clusters: clusters,
	"workspaces/dataExports": workspaces_dataExports,
	"workspaces/linkedServices": workspaces_linkedServices,
	"workspaces/linkedStorageAccounts": workspaces_linkedStorageAccounts,
};
