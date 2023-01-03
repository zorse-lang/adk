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
	readonly properties?: StorageAccountPropertiesCreateParametersOrStorageAccountProperties | undefined;
	readonly sku: Sku;
	readonly tags?: StorageAccountCreateParametersTags | undefined;
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
	readonly useSubDomainName?: boolean | undefined;
}
export interface Encryption {
	readonly keySource: "Microsoft.Storage";
	readonly services?: EncryptionServices | undefined;
}
export interface EncryptionService {
	readonly enabled?: boolean | undefined;
	readonly lastEnabledTime?: string | undefined;
}
export interface EncryptionServices {
	readonly blob?: EncryptionService | undefined;
}
export interface Endpoints {
	readonly blob?: string | undefined;
	readonly file?: string | undefined;
	readonly queue?: string | undefined;
	readonly table?: string | undefined;
}
export interface Sku {
	readonly name: "Premium_LRS" | "Standard_GRS" | "Standard_LRS" | "Standard_RAGRS";
	readonly tier?: "Premium" | undefined;
}
export interface StorageAccountCreateParametersTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface StorageAccountKey {
	readonly keyName?: string | undefined;
	readonly permissions?: "FULL" | undefined;
	readonly value?: string | undefined;
}
export interface StorageAccountListKeysResult {
	readonly keys?: StorageAccountKey[] | undefined;
}
export interface StorageAccountPropertiesCreateParametersOrStorageAccountProperties {
	readonly accessTier?: "Cool" | undefined;
	readonly creationTime?: string | undefined;
	readonly customDomain?: CustomDomain | undefined;
	readonly encryption?: Encryption | undefined;
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
