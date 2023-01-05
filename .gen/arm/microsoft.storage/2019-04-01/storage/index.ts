import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class storageAccounts
	extends ArmResource<storageAccountsComponentInputs>
	implements storageAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts";
}
export interface storageAccountsComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts";
}
export interface storageAccountsComponentInputs {
	readonly identity?: Identity;
	readonly kind: "BlobStorage" | "BlockBlobStorage" | "FileStorage" | "Storage" | "StorageV2";
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
		super(entity, options.name, "Microsoft.Storage/storageAccounts/blobServices", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/blobServices";
}
export interface storageAccounts_blobServicesComponentOutputs {
	readonly apiVersion: "2019-04-01";
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
		super(entity, options.name, "Microsoft.Storage/storageAccounts/blobServices/containers", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/blobServices/containers";
}
export interface storageAccounts_blobServices_containersComponentOutputs {
	readonly apiVersion: "2019-04-01";
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
			"2019-04-01",
			options,
		);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies";
}
export interface storageAccounts_blobServices_containers_immutabilityPoliciesComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies";
}
export interface storageAccounts_blobServices_containers_immutabilityPoliciesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties: ImmutabilityPolicyProperty;
}
export class storageAccounts_fileServices
	extends ArmResource<storageAccounts_fileServicesComponentInputs>
	implements storageAccounts_fileServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccounts_fileServicesComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts/fileServices", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/fileServices";
}
export interface storageAccounts_fileServicesComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts/fileServices";
}
export interface storageAccounts_fileServicesComponentInputs {
	readonly name: string;
	readonly properties?: FileServicePropertiesProperties;
}
export class storageAccounts_fileServices_shares
	extends ArmResource<storageAccounts_fileServices_sharesComponentInputs>
	implements storageAccounts_fileServices_sharesComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccounts_fileServices_sharesComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts/fileServices/shares", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/fileServices/shares";
}
export interface storageAccounts_fileServices_sharesComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts/fileServices/shares";
}
export interface storageAccounts_fileServices_sharesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: FileShareProperties;
}
export class storageAccounts_managementPolicies
	extends ArmResource<storageAccounts_managementPoliciesComponentInputs>
	implements storageAccounts_managementPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccounts_managementPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts/managementPolicies", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/managementPolicies";
}
export interface storageAccounts_managementPoliciesComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts/managementPolicies";
}
export interface storageAccounts_managementPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: ManagementPolicyProperties;
}
export function listAccountSas(resource: storageAccounts, input: AccountSasParameters): ListAccountSasResponse {
	if (resource.apiVersion !== "2019-04-01") {
		throw new Error(`listAccountSas is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Storage/storageAccounts") {
		throw new Error(`listAccountSas is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listKeys(resource: storageAccounts): StorageAccountListKeysResult {
	if (resource.apiVersion !== "2019-04-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Storage/storageAccounts") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listServiceSas(resource: storageAccounts, input: ServiceSasParameters): ListServiceSasResponse {
	if (resource.apiVersion !== "2019-04-01") {
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
export interface ActiveDirectoryProperties {
	readonly azureStorageSid: string;
	readonly domainGuid: string;
	readonly domainName: string;
	readonly domainSid: string;
	readonly forestName: string;
	readonly netBiosDomainName: string;
}
export interface AzureFilesIdentityBasedAuthentication {
	readonly activeDirectoryProperties?: ActiveDirectoryProperties;
	readonly directoryServiceOptions: "AADDS" | "AD" | "None";
}
export interface BlobServicePropertiesProperties {
	readonly automaticSnapshotPolicyEnabled?: boolean;
	readonly changeFeed?: ChangeFeed;
	readonly cors?: CorsRules;
	readonly defaultServiceVersion?: string;
	readonly deleteRetentionPolicy?: DeleteRetentionPolicy;
}
export interface ChangeFeed {
	readonly enabled?: boolean;
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
export interface DateAfterCreation {
	readonly daysAfterCreationGreaterThan: number;
}
export interface DateAfterModification {
	readonly daysAfterModificationGreaterThan: number;
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
export interface FileServicePropertiesProperties {
	readonly cors?: CorsRules;
}
export interface FileShareProperties {
	readonly lastModifiedTime?: string;
	readonly metadata?: FileSharePropertiesMetadata;
	readonly shareQuota?: number;
}
export interface FileSharePropertiesMetadata {
	readonly [key: string]: string;
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
export interface ManagementPolicyAction {
	readonly baseBlob?: ManagementPolicyBaseBlob;
	readonly snapshot?: ManagementPolicySnapShot;
}
export interface ManagementPolicyBaseBlob {
	readonly delete?: DateAfterModification;
	readonly tierToArchive?: DateAfterModification;
	readonly tierToCool?: DateAfterModification;
}
export interface ManagementPolicyDefinition {
	readonly actions: ManagementPolicyAction;
	readonly filters?: ManagementPolicyFilter;
}
export interface ManagementPolicyFilter {
	readonly blobTypes: string[];
	readonly prefixMatch?: string[];
}
export interface ManagementPolicyProperties {
	readonly lastModifiedTime?: string;
	readonly policy: ManagementPolicySchema;
}
export interface ManagementPolicyRule {
	readonly definition: ManagementPolicyDefinition;
	readonly enabled?: boolean;
	readonly name: string;
	readonly type: "Lifecycle";
}
export interface ManagementPolicySchema {
	readonly rules: ManagementPolicyRule[];
}
export interface ManagementPolicySnapShot {
	readonly delete?: DateAfterCreation;
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
	readonly kind?: "BlobStorage" | "BlockBlobStorage" | "FileStorage" | "Storage" | "StorageV2";
	readonly locations?: string[];
	readonly name:
		| "Premium_LRS"
		| "Premium_ZRS"
		| "Standard_GRS"
		| "Standard_GZRS"
		| "Standard_LRS"
		| "Standard_RAGRS"
		| "Standard_RAGZRS"
		| "Standard_ZRS";
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
	readonly allowBlobPublicAccess?: boolean;
	readonly allowSharedKeyAccess?: boolean;
	readonly azureFilesIdentityBasedAuthentication?: AzureFilesIdentityBasedAuthentication;
	readonly creationTime?: string;
	readonly customDomain?: CustomDomain;
	readonly encryption?: Encryption;
	readonly failoverInProgress?: boolean;
	readonly geoReplicationStats?: GeoReplicationStats;
	readonly isHnsEnabled?: boolean;
	readonly largeFileSharesState?: "Disabled" | "Enabled";
	readonly lastGeoFailoverTime?: string;
	readonly minimumTlsVersion?: "TLS1_0" | "TLS1_1" | "TLS1_2";
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
	"storageAccounts/fileServices": storageAccounts_fileServices,
	"storageAccounts/fileServices/shares": storageAccounts_fileServices_shares,
	"storageAccounts/managementPolicies": storageAccounts_managementPolicies,
};
