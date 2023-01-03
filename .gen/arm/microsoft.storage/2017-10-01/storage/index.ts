import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class storageAccounts
	extends ArmResource<storageAccountsComponentInputs>
	implements storageAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts", "2017-10-01", options);
	}
	public readonly apiVersion: "2017-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts";
}
export interface storageAccountsComponentOutputs {
	readonly apiVersion: "2017-10-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts";
}
export interface storageAccountsComponentInputs {
	readonly identity?: Identity | undefined;
	readonly kind: "BlobStorage" | "Storage";
	readonly location: string;
	readonly name: string;
	readonly properties?: StorageAccountPropertiesCreateParametersOrStorageAccountProperties | undefined;
	readonly sku: Sku;
	readonly tags?: StorageAccountCreateParametersTags | undefined;
}
export function listAccountSas(resource: storageAccounts, input: AccountSasParameters): ListAccountSasResponse {
	if (resource.apiVersion !== "2017-10-01") {
		throw new Error(`listAccountSas is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Storage/storageAccounts") {
		throw new Error(`listAccountSas is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listKeys(resource: storageAccounts): StorageAccountListKeysResult {
	if (resource.apiVersion !== "2017-10-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Storage/storageAccounts") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listServiceSas(resource: storageAccounts, input: ServiceSasParameters): ListServiceSasResponse {
	if (resource.apiVersion !== "2017-10-01") {
		throw new Error(`listServiceSas is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Storage/storageAccounts") {
		throw new Error(`listServiceSas is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AccountSasParameters {
	readonly keyToSign?: string | undefined;
	readonly signedExpiry: string;
	readonly signedIp?: string | undefined;
	readonly signedPermission: "a" | "c" | "d" | "l" | "p" | "r" | "u" | "w";
	readonly signedProtocol?: "https" | undefined;
	readonly signedResourceTypes: "c" | "o" | "s";
	readonly signedServices: "b" | "f" | "q" | "t";
	readonly signedStart?: string | undefined;
}
export interface CustomDomain {
	readonly name: string;
	readonly useSubDomainName?: boolean | undefined;
}
export interface Encryption {
	readonly keySource: "Microsoft.Keyvault" | "Microsoft.Storage";
	readonly keyvaultproperties?: KeyVaultProperties | undefined;
	readonly services?: EncryptionServices | undefined;
}
export interface EncryptionService {
	readonly enabled?: boolean | undefined;
	readonly lastEnabledTime?: string | undefined;
}
export interface EncryptionServices {
	readonly blob?: EncryptionService | undefined;
	readonly file?: EncryptionService | undefined;
	readonly queue?: EncryptionService | undefined;
	readonly table?: EncryptionService | undefined;
}
export interface Endpoints {
	readonly blob?: string | undefined;
	readonly file?: string | undefined;
	readonly queue?: string | undefined;
	readonly table?: string | undefined;
}
export interface Identity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type: "SystemAssigned";
}
export interface IPRule {
	readonly action?: "Allow" | undefined;
	readonly value: string;
}
export interface KeyVaultProperties {
	readonly keyname?: string | undefined;
	readonly keyvaulturi?: string | undefined;
	readonly keyversion?: string | undefined;
}
export interface ListAccountSasResponse {
	readonly accountSasToken?: string | undefined;
}
export interface ListServiceSasResponse {
	readonly serviceSasToken?: string | undefined;
}
export interface NetworkRuleSet {
	readonly bypass?: ("AzureServices" | "Logging" | "Metrics" | "None") | undefined;
	readonly defaultAction: "Allow";
	readonly ipRules?: IPRule[] | undefined;
	readonly virtualNetworkRules?: VirtualNetworkRule[] | undefined;
}
export interface Restriction {
	readonly reasonCode?: ("NotAvailableForSubscription" | "QuotaId") | undefined;
	readonly type?: string | undefined;
	readonly values?: string[] | undefined;
}
export interface ServiceSasParameters {
	readonly canonicalizedResource: string;
	readonly endPk?: string | undefined;
	readonly endRk?: string | undefined;
	readonly keyToSign?: string | undefined;
	readonly rscc?: string | undefined;
	readonly rscd?: string | undefined;
	readonly rsce?: string | undefined;
	readonly rscl?: string | undefined;
	readonly rsct?: string | undefined;
	readonly signedExpiry?: string | undefined;
	readonly signedIdentifier?: string | undefined;
	readonly signedIp?: string | undefined;
	readonly signedPermission?: ("a" | "c" | "d" | "l" | "p" | "r" | "u" | "w") | undefined;
	readonly signedProtocol?: "https" | undefined;
	readonly signedResource: "b" | "c" | "f" | "s";
	readonly signedStart?: string | undefined;
	readonly startPk?: string | undefined;
	readonly startRk?: string | undefined;
}
export interface Sku {
	readonly capabilities?: SKUCapability[] | undefined;
	readonly kind?: ("BlobStorage" | "Storage") | undefined;
	readonly locations?: string[] | undefined;
	readonly name: "Premium_LRS" | "Standard_GRS" | "Standard_LRS" | "Standard_RAGRS";
	readonly resourceType?: string | undefined;
	readonly restrictions?: Restriction[] | undefined;
	readonly tier?: "Premium" | undefined;
}
export interface SKUCapability {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface StorageAccountCreateParametersTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface StorageAccountKey {
	readonly keyName?: string | undefined;
	readonly permissions?: "Full" | undefined;
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
	readonly networkAcls?: NetworkRuleSet | undefined;
	readonly primaryEndpoints?: Endpoints | undefined;
	readonly primaryLocation?: string | undefined;
	readonly provisioningState?: ("Creating" | "ResolvingDNS") | undefined;
	readonly secondaryEndpoints?: Endpoints | undefined;
	readonly secondaryLocation?: string | undefined;
	readonly statusOfPrimary?: "available" | undefined;
	readonly statusOfSecondary?: "available" | undefined;
	readonly supportsHttpsTrafficOnly?: boolean | undefined;
}
export interface VirtualNetworkRule {
	readonly action?: "Allow" | undefined;
	readonly id: string;
	readonly state?: ("deprovisioning" | "failed" | "networkSourceDeleted" | "provisioning") | undefined;
}
export default {
	storageAccounts: storageAccounts,
};
