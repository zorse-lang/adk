import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class storageAccounts
	extends ArmResource<storageAccountsComponentInputs>
	implements storageAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts", "2016-01-01", options);
	}
	public readonly apiVersion: "2016-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts";
}
export interface storageAccountsComponentOutputs {
	readonly apiVersion: "2016-01-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts";
}
export interface storageAccountsComponentInputs {
	readonly kind: "BlobStorage";
	readonly location: string;
	readonly name: string;
	readonly properties?: StorageAccountPropertiesCreateParametersOrStorageAccountProperties;
	readonly sku: Sku;
	readonly tags?: StorageAccountCreateParametersTags;
}
export function listKeys(resource: storageAccounts): StorageAccountListKeysResult {
	if (resource.apiVersion !== "2016-01-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Storage/storageAccounts") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface CustomDomain {
	readonly name: string;
	readonly useSubDomainName?: boolean;
}
export interface Encryption {
	readonly keySource: "Microsoft.Storage";
	readonly services?: EncryptionServices;
}
export interface EncryptionService {
	readonly enabled?: boolean;
	readonly lastEnabledTime?: string;
}
export interface EncryptionServices {
	readonly blob?: EncryptionService;
}
export interface Endpoints {
	readonly blob?: string;
	readonly file?: string;
	readonly queue?: string;
	readonly table?: string;
}
export interface Sku {
	readonly name: "Premium_LRS" | "Standard_GRS" | "Standard_LRS" | "Standard_RAGRS";
	readonly tier?: "Premium";
}
export interface StorageAccountCreateParametersTags {
	readonly [key: string]: string;
}
export interface StorageAccountKey {
	readonly keyName?: string;
	readonly permissions?: "FULL";
	readonly value?: string;
}
export interface StorageAccountListKeysResult {
	readonly keys?: StorageAccountKey[];
}
export interface StorageAccountPropertiesCreateParametersOrStorageAccountProperties {
	readonly accessTier?: "Cool";
	readonly creationTime?: string;
	readonly customDomain?: CustomDomain;
	readonly encryption?: Encryption;
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
