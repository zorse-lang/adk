import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class storageAccounts
	extends ArmResource<storageAccountsComponentInputs>
	implements storageAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts", "2015-05-01-preview", options);
	}
	public readonly apiVersion: "2015-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts";
}
export interface storageAccountsComponentOutputs {
	readonly apiVersion: "2015-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts";
}
export interface storageAccountsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: StorageAccountPropertiesCreateParametersOrStorageAccountProperties;
	readonly tags?: ResourceTags;
}
export function listKeys(resource: storageAccounts): StorageAccountKeys {
	if (resource.apiVersion !== "2015-05-01-preview") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Storage/storageAccounts") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface CustomDomain {
	readonly name?: string;
	readonly useSubDomainName?: boolean;
}
export interface Endpoints {
	readonly blob?: string;
	readonly queue?: string;
	readonly table?: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface StorageAccountKeys {
	readonly key1?: string;
	readonly key2?: string;
}
export interface StorageAccountPropertiesCreateParametersOrStorageAccountProperties {
	readonly accountType?: "Premium_LRS" | "Standard_GRS" | "Standard_LRS" | "Standard_RAGRS";
	readonly creationTime?: string;
	readonly customDomain?: CustomDomain;
	readonly lastGeoFailoverTime?: string;
	readonly primaryEndpoints?: Endpoints;
	readonly primaryLocation?: string;
	readonly provisioningState?: "Creating" | "ResolvingDNS";
	readonly secondaryEndpoints?: Endpoints;
	readonly secondaryLocation?: string;
	readonly statusOfPrimary?: "Available";
	readonly statusOfSecondary?: "Available";
}
export default {
	storageAccounts: storageAccounts,
};
