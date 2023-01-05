import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class storageAccounts
	extends ArmResource<storageAccountsComponentInputs>
	implements storageAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts", "2018-07-01", options);
	}
	public readonly apiVersion: "2018-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts";
}
export interface storageAccountsComponentOutputs {
	readonly apiVersion: "2018-07-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts";
}
export interface storageAccountsComponentInputs {
	readonly identity?: Identity;
	readonly kind: "BlobStorage" | "BlockBlobStorage" | "FileStorage" | "Storage";
	readonly location: string;
	readonly name: string;
	readonly properties?: StorageAccountPropertiesCreateParametersOrStorageAccountProperties;
	readonly sku: Sku;
	readonly tags?: StorageAccountCreateParametersTags;
}
export class storageAccounts_blobServices
	extends ArmResource<storageAccounts_blobServicesComponentInputs>
	implements storageAccounts_blobServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccounts_blobServicesComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts/blobServices", "2018-07-01", options);
	}
	public readonly apiVersion: "2018-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/blobServices";
}
export interface storageAccounts_blobServicesComponentOutputs {
	readonly apiVersion: "2018-07-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts/blobServices";
}
export interface storageAccounts_blobServicesComponentInputs {
	readonly name: string;
	readonly properties?: BlobServicePropertiesProperties;
}
export class storageAccounts_blobServices_containers
	extends ArmResource<storageAccounts_blobServices_containersComponentInputs>
	implements storageAccounts_blobServices_containersComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccounts_blobServices_containersComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts/blobServices/containers", "2018-07-01", options);
	}
	public readonly apiVersion: "2018-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/blobServices/containers";
}
export interface storageAccounts_blobServices_containersComponentOutputs {
	readonly apiVersion: "2018-07-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts/blobServices/containers";
}
export interface storageAccounts_blobServices_containersComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: ContainerProperties;
}
export class storageAccounts_blobServices_containers_immutabilityPolicies
	extends ArmResource<storageAccounts_blobServices_containers_immutabilityPoliciesComponentInputs>
	implements storageAccounts_blobServices_containers_immutabilityPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccounts_blobServices_containers_immutabilityPoliciesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies",
			"2018-07-01",
			options,
		);
	}
	public readonly apiVersion: "2018-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies";
}
export interface storageAccounts_blobServices_containers_immutabilityPoliciesComponentOutputs {
	readonly apiVersion: "2018-07-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies";
}
export interface storageAccounts_blobServices_containers_immutabilityPoliciesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties: ImmutabilityPolicyProperty;
}
export function listAccountSas(resource: storageAccounts, input: AccountSasParameters): ListAccountSasResponse {
	if (resource.apiVersion !== "2018-07-01") {
		throw new Error(`listAccountSas is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Storage/storageAccounts") {
		throw new Error(`listAccountSas is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listKeys(resource: storageAccounts): StorageAccountListKeysResult {
	if (resource.apiVersion !== "2018-07-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Storage/storageAccounts") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listServiceSas(resource: storageAccounts, input: ServiceSasParameters): ListServiceSasResponse {
	if (resource.apiVersion !== "2018-07-01") {
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
export interface BlobServicePropertiesProperties {
	readonly cors?: CorsRules;
	readonly defaultServiceVersion?: string;
	readonly deleteRetentionPolicy?: DeleteRetentionPolicy;
}
export interface ContainerProperties {
	readonly hasImmutabilityPolicy?: boolean;
	readonly hasLegalHold?: boolean;
	readonly immutabilityPolicy?: ImmutabilityPolicyProperties;
	readonly lastModifiedTime?: string;
	readonly leaseDuration?: "Fixed" | "Infinite";
	readonly leaseState?: "Available" | "Breaking" | "Broken" | "Expired" | "Leased";
	readonly leaseStatus?: "Locked" | "Unlocked";
	readonly legalHold?: LegalHoldProperties;
	readonly metadata?: ContainerPropertiesMetadata;
	readonly publicAccess?: "Blob" | "Container";
}
export interface ContainerPropertiesMetadata {
	readonly [key: string]: string;
}
export interface CorsRule {
	readonly allowedHeaders: string[];
	readonly allowedMethods: "DELETE" | "GET" | "HEAD" | "MERGE" | "OPTIONS" | "POST" | "PUT"[];
	readonly allowedOrigins: string[];
	readonly exposedHeaders: string[];
	readonly maxAgeInSeconds: number;
}
export interface CorsRules {
	readonly corsRules?: CorsRule[];
}
export interface CustomDomain {
	readonly name: string;
	readonly useSubDomainName?: boolean;
}
export interface DeleteRetentionPolicy {
	readonly days?: number;
	readonly enabled?: boolean;
}
export interface Encryption {
	readonly keySource: "Microsoft.Keyvault" | "Microsoft.Storage";
	readonly keyvaultproperties?: KeyVaultProperties;
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
	readonly dfs?: string;
	readonly file?: string;
	readonly queue?: string;
	readonly table?: string;
	readonly web?: string;
}
export interface GeoReplicationStats {
	readonly canFailover?: boolean;
	readonly lastSyncTime?: string;
	readonly status?: "Bootstrap" | "Live" | "Unavailable";
}
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type: "SystemAssigned";
}
export interface ImmutabilityPolicyProperties {
	readonly etag?: string;
	readonly properties?: ImmutabilityPolicyProperty;
	readonly updateHistory?: UpdateHistoryProperty[];
}
export interface ImmutabilityPolicyProperty {
	readonly immutabilityPeriodSinceCreationInDays: number;
	readonly state?: "Locked" | "Unlocked";
}
export interface IPRule {
	readonly action?: "Allow";
	readonly value: string;
}
export interface KeyVaultProperties {
	readonly keyname?: string;
	readonly keyvaulturi?: string;
	readonly keyversion?: string;
}
export interface LegalHoldProperties {
	readonly hasLegalHold?: boolean;
	readonly tags?: TagProperty[];
}
export interface ListAccountSasResponse {
	readonly accountSasToken?: string;
}
export interface ListServiceSasResponse {
	readonly serviceSasToken?: string;
}
export interface NetworkRuleSet {
	readonly bypass?: "AzureServices" | "Logging" | "Metrics" | "None";
	readonly defaultAction: "Allow";
	readonly ipRules?: IPRule[];
	readonly virtualNetworkRules?: VirtualNetworkRule[];
}
export interface Restriction {
	readonly reasonCode?: "NotAvailableForSubscription" | "QuotaId";
	readonly type?: string;
	readonly values?: string[];
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
	readonly signedResource?: "b" | "c" | "f" | "s";
	readonly signedStart?: string;
	readonly startPk?: string;
	readonly startRk?: string;
}
export interface Sku {
	readonly capabilities?: SKUCapability[];
	readonly kind?: "BlobStorage" | "BlockBlobStorage" | "FileStorage" | "Storage";
	readonly locations?: string[];
	readonly name: "Premium_LRS" | "Premium_ZRS" | "Standard_GRS" | "Standard_LRS" | "Standard_RAGRS";
	readonly resourceType?: string;
	readonly restrictions?: Restriction[];
	readonly tier?: "Premium";
}
export interface SKUCapability {
	readonly name?: string;
	readonly value?: string;
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
	readonly azureFilesAadIntegration?: boolean;
	readonly creationTime?: string;
	readonly customDomain?: CustomDomain;
	readonly encryption?: Encryption;
	readonly failoverInProgress?: boolean;
	readonly geoReplicationStats?: GeoReplicationStats;
	readonly isHnsEnabled?: boolean;
	readonly lastGeoFailoverTime?: string;
	readonly networkAcls?: NetworkRuleSet;
	readonly primaryEndpoints?: Endpoints;
	readonly primaryLocation?: string;
	readonly provisioningState?: "Creating" | "ResolvingDNS";
	readonly secondaryEndpoints?: Endpoints;
	readonly secondaryLocation?: string;
	readonly statusOfPrimary?: "available";
	readonly statusOfSecondary?: "available";
	readonly supportsHttpsTrafficOnly?: boolean;
}
export interface TagProperty {
	readonly objectIdentifier?: string;
	readonly tag?: string;
	readonly tenantId?: string;
	readonly timestamp?: string;
	readonly upn?: string;
}
export interface UpdateHistoryProperty {
	readonly immutabilityPeriodSinceCreationInDays?: number;
	readonly objectIdentifier?: string;
	readonly tenantId?: string;
	readonly timestamp?: string;
	readonly update?: "extend" | "lock" | "put";
	readonly upn?: string;
}
export interface VirtualNetworkRule {
	readonly action?: "Allow";
	readonly id: string;
	readonly state?: "deprovisioning" | "failed" | "networkSourceDeleted" | "provisioning";
}
export default {
	storageAccounts: storageAccounts,
	"storageAccounts/blobServices": storageAccounts_blobServices,
	"storageAccounts/blobServices/containers": storageAccounts_blobServices_containers,
	"storageAccounts/blobServices/containers/immutabilityPolicies":
		storageAccounts_blobServices_containers_immutabilityPolicies,
};
