import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class storageAccounts
	extends ArmResource<storageAccountsComponentInputs>
	implements storageAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts";
}
export interface storageAccountsComponentOutputs {
	readonly apiVersion: "2018-11-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts";
}
export interface storageAccountsComponentInputs {
	readonly identity?: Identity | undefined;
	readonly kind: "BlobStorage" | "BlockBlobStorage" | "FileStorage" | "Storage";
	readonly location: string;
	readonly name: string;
	readonly properties?: StorageAccountPropertiesCreateParametersOrStorageAccountProperties | undefined;
	readonly sku: Sku;
	readonly tags?: StorageAccountCreateParametersTags | undefined;
}
export class storageAccounts_blobServices
	extends ArmResource<storageAccounts_blobServicesComponentInputs>
	implements storageAccounts_blobServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccounts_blobServicesComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts/blobServices", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/blobServices";
}
export interface storageAccounts_blobServicesComponentOutputs {
	readonly apiVersion: "2018-11-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts/blobServices";
}
export interface storageAccounts_blobServicesComponentInputs {
	readonly name: string;
	readonly properties?: BlobServicePropertiesProperties | undefined;
}
export class storageAccounts_blobServices_containers
	extends ArmResource<storageAccounts_blobServices_containersComponentInputs>
	implements storageAccounts_blobServices_containersComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccounts_blobServices_containersComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts/blobServices/containers", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/blobServices/containers";
}
export interface storageAccounts_blobServices_containersComponentOutputs {
	readonly apiVersion: "2018-11-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts/blobServices/containers";
}
export interface storageAccounts_blobServices_containersComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: ContainerProperties | undefined;
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
			"2018-11-01",
			options,
		);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies";
}
export interface storageAccounts_blobServices_containers_immutabilityPoliciesComponentOutputs {
	readonly apiVersion: "2018-11-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies";
}
export interface storageAccounts_blobServices_containers_immutabilityPoliciesComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties: ImmutabilityPolicyProperty;
}
export class storageAccounts_managementPolicies
	extends ArmResource<storageAccounts_managementPoliciesComponentInputs>
	implements storageAccounts_managementPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccounts_managementPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts/managementPolicies", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/managementPolicies";
}
export interface storageAccounts_managementPoliciesComponentOutputs {
	readonly apiVersion: "2018-11-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts/managementPolicies";
}
export interface storageAccounts_managementPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: ManagementPolicyProperties | undefined;
}
export function listAccountSas(resource: storageAccounts, input: AccountSasParameters): ListAccountSasResponse {
	if (resource.apiVersion !== "2018-11-01") {
		throw new Error(`listAccountSas is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Storage/storageAccounts") {
		throw new Error(`listAccountSas is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listKeys(resource: storageAccounts): StorageAccountListKeysResult {
	if (resource.apiVersion !== "2018-11-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Storage/storageAccounts") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listServiceSas(resource: storageAccounts, input: ServiceSasParameters): ListServiceSasResponse {
	if (resource.apiVersion !== "2018-11-01") {
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
export interface BlobServicePropertiesProperties {
	readonly cors?: CorsRules | undefined;
	readonly defaultServiceVersion?: string | undefined;
	readonly deleteRetentionPolicy?: DeleteRetentionPolicy | undefined;
}
export interface ContainerProperties {
	readonly hasImmutabilityPolicy?: boolean | undefined;
	readonly hasLegalHold?: boolean | undefined;
	readonly immutabilityPolicy?: ImmutabilityPolicyProperties | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly leaseDuration?: ("Fixed" | "Infinite") | undefined;
	readonly leaseState?: ("Available" | "Breaking" | "Broken" | "Expired" | "Leased") | undefined;
	readonly leaseStatus?: ("Locked" | "Unlocked") | undefined;
	readonly legalHold?: LegalHoldProperties | undefined;
	readonly metadata?: ContainerPropertiesMetadata | undefined;
	readonly publicAccess?: ("Blob" | "Container") | undefined;
}
export interface ContainerPropertiesMetadata {
	readonly "[ key: string ]"?: string | undefined;
}
export interface CorsRule {
	readonly allowedHeaders: string[];
	readonly allowedMethods: "DELETE" | "GET" | "HEAD" | "MERGE" | "OPTIONS" | "POST" | "PUT"[];
	readonly allowedOrigins: string[];
	readonly exposedHeaders: string[];
	readonly maxAgeInSeconds: number;
}
export interface CorsRules {
	readonly corsRules?: CorsRule[] | undefined;
}
export interface CustomDomain {
	readonly name: string;
	readonly useSubDomainName?: boolean | undefined;
}
export interface DateAfterCreation {
	readonly daysAfterCreationGreaterThan: number;
}
export interface DateAfterModification {
	readonly daysAfterModificationGreaterThan: number;
}
export interface DeleteRetentionPolicy {
	readonly days?: number | undefined;
	readonly enabled?: boolean | undefined;
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
	readonly dfs?: string | undefined;
	readonly file?: string | undefined;
	readonly queue?: string | undefined;
	readonly table?: string | undefined;
	readonly web?: string | undefined;
}
export interface GeoReplicationStats {
	readonly canFailover?: boolean | undefined;
	readonly lastSyncTime?: string | undefined;
	readonly status?: ("Bootstrap" | "Live" | "Unavailable") | undefined;
}
export interface Identity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type: "SystemAssigned";
}
export interface ImmutabilityPolicyProperties {
	readonly etag?: string | undefined;
	readonly properties?: ImmutabilityPolicyProperty | undefined;
	readonly updateHistory?: UpdateHistoryProperty[] | undefined;
}
export interface ImmutabilityPolicyProperty {
	readonly immutabilityPeriodSinceCreationInDays: number;
	readonly state?: ("Locked" | "Unlocked") | undefined;
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
export interface LegalHoldProperties {
	readonly hasLegalHold?: boolean | undefined;
	readonly tags?: TagProperty[] | undefined;
}
export interface ListAccountSasResponse {
	readonly accountSasToken?: string | undefined;
}
export interface ListServiceSasResponse {
	readonly serviceSasToken?: string | undefined;
}
export interface ManagementPolicyAction {
	readonly baseBlob?: ManagementPolicyBaseBlob | undefined;
	readonly snapshot?: ManagementPolicySnapShot | undefined;
}
export interface ManagementPolicyBaseBlob {
	readonly delete?: DateAfterModification | undefined;
	readonly tierToArchive?: DateAfterModification | undefined;
	readonly tierToCool?: DateAfterModification | undefined;
}
export interface ManagementPolicyDefinition {
	readonly actions: ManagementPolicyAction;
	readonly filters?: ManagementPolicyFilter | undefined;
}
export interface ManagementPolicyFilter {
	readonly blobTypes: string[];
	readonly prefixMatch?: string[] | undefined;
}
export interface ManagementPolicyProperties {
	readonly lastModifiedTime?: string | undefined;
	readonly policy: ManagementPolicySchema;
}
export interface ManagementPolicyRule {
	readonly definition: ManagementPolicyDefinition;
	readonly enabled?: boolean | undefined;
	readonly name: string;
	readonly type: "Lifecycle";
}
export interface ManagementPolicySchema {
	readonly rules: ManagementPolicyRule[];
}
export interface ManagementPolicySnapShot {
	readonly delete?: DateAfterCreation | undefined;
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
	readonly signedResource?: ("b" | "c" | "f" | "s") | undefined;
	readonly signedStart?: string | undefined;
	readonly startPk?: string | undefined;
	readonly startRk?: string | undefined;
}
export interface Sku {
	readonly capabilities?: SKUCapability[] | undefined;
	readonly kind?: ("BlobStorage" | "BlockBlobStorage" | "FileStorage" | "Storage") | undefined;
	readonly locations?: string[] | undefined;
	readonly name: "Premium_LRS" | "Premium_ZRS" | "Standard_GRS" | "Standard_LRS" | "Standard_RAGRS";
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
	readonly azureFilesAadIntegration?: boolean | undefined;
	readonly creationTime?: string | undefined;
	readonly customDomain?: CustomDomain | undefined;
	readonly encryption?: Encryption | undefined;
	readonly failoverInProgress?: boolean | undefined;
	readonly geoReplicationStats?: GeoReplicationStats | undefined;
	readonly isHnsEnabled?: boolean | undefined;
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
export interface TagProperty {
	readonly objectIdentifier?: string | undefined;
	readonly tag?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly timestamp?: string | undefined;
	readonly upn?: string | undefined;
}
export interface UpdateHistoryProperty {
	readonly immutabilityPeriodSinceCreationInDays?: number | undefined;
	readonly objectIdentifier?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly timestamp?: string | undefined;
	readonly update?: ("extend" | "lock" | "put") | undefined;
	readonly upn?: string | undefined;
}
export interface VirtualNetworkRule {
	readonly action?: "Allow" | undefined;
	readonly id: string;
	readonly state?: ("deprovisioning" | "failed" | "networkSourceDeleted" | "provisioning") | undefined;
}
export default {
	storageAccounts: storageAccounts,
	"storageAccounts/blobServices": storageAccounts_blobServices,
	"storageAccounts/blobServices/containers": storageAccounts_blobServices_containers,
	"storageAccounts/blobServices/containers/immutabilityPolicies":
		storageAccounts_blobServices_containers_immutabilityPolicies,
	"storageAccounts/managementPolicies": storageAccounts_managementPolicies,
};
