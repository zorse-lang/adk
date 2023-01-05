import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class storageAccounts
	extends ArmResource<storageAccountsComponentInputs>
	implements storageAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts", "2016-12-01", options);
	}
	public readonly apiVersion: "2016-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts";
}
export interface storageAccountsComponentOutputs {
	readonly apiVersion: "2016-12-01";
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
export function listAccountSas(resource: storageAccounts, input: AccountSasParameters): ListAccountSasResponse {
	if (resource.apiVersion !== "2016-12-01") {
		throw new Error(`listAccountSas is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Storage/storageAccounts") {
		throw new Error(`listAccountSas is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listKeys(resource: storageAccounts): StorageAccountListKeysResult {
	if (resource.apiVersion !== "2016-12-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Storage/storageAccounts") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listServiceSas(resource: storageAccounts, input: ServiceSasParameters): ListServiceSasResponse {
	if (resource.apiVersion !== "2016-12-01") {
		throw new Error(`listServiceSas is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Storage/storageAccounts") {
		throw new Error(`listServiceSas is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AccountSasParameters {
	readonly keyToSign?: string;
	readonly signedExpiry: string;
	readonly signedIp?: string;
	readonly signedPermission: "a" | "c" | "d" | "l" | "p" | "r" | "u" | "w";
	readonly signedProtocol?: "https";
	readonly signedResourceTypes: "c" | "o" | "s";
	readonly signedServices: "b" | "f" | "q" | "t";
	readonly signedStart?: string;
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
	readonly file?: EncryptionService;
	readonly queue?: EncryptionService;
	readonly table?: EncryptionService;
}
export interface Endpoints {
	readonly blob?: string;
	readonly file?: string;
	readonly queue?: string;
	readonly table?: string;
}
export interface ListAccountSasResponse {
	readonly accountSasToken?: string;
}
export interface ListServiceSasResponse {
	readonly serviceSasToken?: string;
}
export interface ServiceSasParameters {
	readonly canonicalizedResource: string;
	readonly endPk?: string;
	readonly endRk?: string;
	readonly keyToSign?: string;
	readonly rscc?: string;
	readonly rscd?: string;
	readonly rsce?: string;
	readonly rscl?: string;
	readonly rsct?: string;
	readonly signedExpiry?: string;
	readonly signedIdentifier?: string;
	readonly signedIp?: string;
	readonly signedPermission?: "a" | "c" | "d" | "l" | "p" | "r" | "u" | "w";
	readonly signedProtocol?: "https";
	readonly signedResource: "b" | "c" | "f" | "s";
	readonly signedStart?: string;
	readonly startPk?: string;
	readonly startRk?: string;
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
	readonly permissions?: "Full";
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
	readonly statusOfPrimary?: "available";
	readonly statusOfSecondary?: "available";
	readonly supportsHttpsTrafficOnly?: boolean;
}
export default {
	storageAccounts: storageAccounts,
};
