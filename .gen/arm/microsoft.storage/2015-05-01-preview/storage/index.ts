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
	readonly properties?: StorageAccountPropertiesCreateParametersOrStorageAccountProperties | undefined;
	readonly tags?: ResourceTags | undefined;
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
	readonly name?: string | undefined;
	readonly useSubDomainName?: boolean | undefined;
}
export interface Endpoints {
	readonly blob?: string | undefined;
	readonly queue?: string | undefined;
	readonly table?: string | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface StorageAccountKeys {
	readonly key1?: string | undefined;
	readonly key2?: string | undefined;
}
export interface StorageAccountPropertiesCreateParametersOrStorageAccountProperties {
	readonly accountType?: ("Premium_LRS" | "Standard_GRS" | "Standard_LRS" | "Standard_RAGRS") | undefined;
	readonly creationTime?: string | undefined;
	readonly customDomain?: CustomDomain | undefined;
	readonly lastGeoFailoverTime?: string | undefined;
	readonly primaryEndpoints?: Endpoints | undefined;
	readonly primaryLocation?: string | undefined;
	readonly provisioningState?: ("Creating" | "ResolvingDNS") | undefined;
	readonly secondaryEndpoints?: Endpoints | undefined;
	readonly secondaryLocation?: string | undefined;
	readonly statusOfPrimary?: "Available" | undefined;
	readonly statusOfSecondary?: "Available" | undefined;
}
export default {
	storageAccounts: storageAccounts,
};
