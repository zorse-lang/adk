import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class storageAccounts
	extends ArmResource<storageAccountsComponentInputs>
	implements storageAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts", "2019-06-01", options);
	}
	public readonly apiVersion: "2019-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts";
}
export interface storageAccountsComponentOutputs {
	readonly apiVersion: "2019-06-01";
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
		super(entity, options.name, "Microsoft.Storage/storageAccounts/blobServices", "2019-06-01", options);
	}
	public readonly apiVersion: "2019-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/blobServices";
}
export interface storageAccounts_blobServicesComponentOutputs {
	readonly apiVersion: "2019-06-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts/blobServices";
}
export interface storageAccounts_blobServicesComponentInputs {
	readonly name: string;
	readonly properties?: BlobServicePropertiesProperties;
	readonly sku?: Sku;
}
export class storageAccounts_blobServices_containers
	extends ArmResource<storageAccounts_blobServices_containersComponentInputs>
	implements storageAccounts_blobServices_containersComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccounts_blobServices_containersComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts/blobServices/containers", "2019-06-01", options);
	}
	public readonly apiVersion: "2019-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/blobServices/containers";
}
export interface storageAccounts_blobServices_containersComponentOutputs {
	readonly apiVersion: "2019-06-01";
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
			"2019-06-01",
			options,
		);
	}
	public readonly apiVersion: "2019-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies";
}
export interface storageAccounts_blobServices_containers_immutabilityPoliciesComponentOutputs {
	readonly apiVersion: "2019-06-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies";
}
export interface storageAccounts_blobServices_containers_immutabilityPoliciesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties: ImmutabilityPolicyProperty;
}
export class storageAccounts_encryptionScopes
	extends ArmResource<storageAccounts_encryptionScopesComponentInputs>
	implements storageAccounts_encryptionScopesComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccounts_encryptionScopesComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts/encryptionScopes", "2019-06-01", options);
	}
	public readonly apiVersion: "2019-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/encryptionScopes";
}
export interface storageAccounts_encryptionScopesComponentOutputs {
	readonly apiVersion: "2019-06-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts/encryptionScopes";
}
export interface storageAccounts_encryptionScopesComponentInputs {
	readonly name: string;
	readonly properties?: EncryptionScopeProperties;
}
export class storageAccounts_fileServices
	extends ArmResource<storageAccounts_fileServicesComponentInputs>
	implements storageAccounts_fileServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccounts_fileServicesComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts/fileServices", "2019-06-01", options);
	}
	public readonly apiVersion: "2019-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/fileServices";
}
export interface storageAccounts_fileServicesComponentOutputs {
	readonly apiVersion: "2019-06-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts/fileServices";
}
export interface storageAccounts_fileServicesComponentInputs {
	readonly name: string;
	readonly properties?: FileServicePropertiesProperties;
	readonly sku?: Sku;
}
export class storageAccounts_fileServices_shares
	extends ArmResource<storageAccounts_fileServices_sharesComponentInputs>
	implements storageAccounts_fileServices_sharesComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccounts_fileServices_sharesComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts/fileServices/shares", "2019-06-01", options);
	}
	public readonly apiVersion: "2019-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/fileServices/shares";
}
export interface storageAccounts_fileServices_sharesComponentOutputs {
	readonly apiVersion: "2019-06-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts/fileServices/shares";
}
export interface storageAccounts_fileServices_sharesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: FileShareProperties;
}
export class storageAccounts_inventoryPolicies
	extends ArmResource<storageAccounts_inventoryPoliciesComponentInputs>
	implements storageAccounts_inventoryPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccounts_inventoryPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts/inventoryPolicies", "2019-06-01", options);
	}
	public readonly apiVersion: "2019-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/inventoryPolicies";
}
export interface storageAccounts_inventoryPoliciesComponentOutputs {
	readonly apiVersion: "2019-06-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts/inventoryPolicies";
}
export interface storageAccounts_inventoryPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: BlobInventoryPolicyProperties;
	readonly systemData?: SystemData;
}
export class storageAccounts_managementPolicies
	extends ArmResource<storageAccounts_managementPoliciesComponentInputs>
	implements storageAccounts_managementPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccounts_managementPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts/managementPolicies", "2019-06-01", options);
	}
	public readonly apiVersion: "2019-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/managementPolicies";
}
export interface storageAccounts_managementPoliciesComponentOutputs {
	readonly apiVersion: "2019-06-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts/managementPolicies";
}
export interface storageAccounts_managementPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: ManagementPolicyProperties;
}
export class storageAccounts_objectReplicationPolicies
	extends ArmResource<storageAccounts_objectReplicationPoliciesComponentInputs>
	implements storageAccounts_objectReplicationPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccounts_objectReplicationPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts/objectReplicationPolicies", "2019-06-01", options);
	}
	public readonly apiVersion: "2019-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/objectReplicationPolicies";
}
export interface storageAccounts_objectReplicationPoliciesComponentOutputs {
	readonly apiVersion: "2019-06-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts/objectReplicationPolicies";
}
export interface storageAccounts_objectReplicationPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: ObjectReplicationPolicyProperties;
}
export class storageAccounts_privateEndpointConnections
	extends ArmResource<storageAccounts_privateEndpointConnectionsComponentInputs>
	implements storageAccounts_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccounts_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts/privateEndpointConnections", "2019-06-01", options);
	}
	public readonly apiVersion: "2019-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/privateEndpointConnections";
}
export interface storageAccounts_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2019-06-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts/privateEndpointConnections";
}
export interface storageAccounts_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
}
export class storageAccounts_queueServices
	extends ArmResource<storageAccounts_queueServicesComponentInputs>
	implements storageAccounts_queueServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccounts_queueServicesComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts/queueServices", "2019-06-01", options);
	}
	public readonly apiVersion: "2019-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/queueServices";
}
export interface storageAccounts_queueServicesComponentOutputs {
	readonly apiVersion: "2019-06-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts/queueServices";
}
export interface storageAccounts_queueServicesComponentInputs {
	readonly name: string;
	readonly properties?: QueueServicePropertiesProperties;
}
export class storageAccounts_queueServices_queues
	extends ArmResource<storageAccounts_queueServices_queuesComponentInputs>
	implements storageAccounts_queueServices_queuesComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccounts_queueServices_queuesComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts/queueServices/queues", "2019-06-01", options);
	}
	public readonly apiVersion: "2019-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/queueServices/queues";
}
export interface storageAccounts_queueServices_queuesComponentOutputs {
	readonly apiVersion: "2019-06-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts/queueServices/queues";
}
export interface storageAccounts_queueServices_queuesComponentInputs {
	readonly name: string;
	readonly properties?: QueueProperties;
}
export class storageAccounts_tableServices
	extends ArmResource<storageAccounts_tableServicesComponentInputs>
	implements storageAccounts_tableServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccounts_tableServicesComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts/tableServices", "2019-06-01", options);
	}
	public readonly apiVersion: "2019-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/tableServices";
}
export interface storageAccounts_tableServicesComponentOutputs {
	readonly apiVersion: "2019-06-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts/tableServices";
}
export interface storageAccounts_tableServicesComponentInputs {
	readonly name: string;
	readonly properties?: TableServicePropertiesProperties;
}
export class storageAccounts_tableServices_tables
	extends ArmResource<storageAccounts_tableServices_tablesComponentInputs>
	implements storageAccounts_tableServices_tablesComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccounts_tableServices_tablesComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts/tableServices/tables", "2019-06-01", options);
	}
	public readonly apiVersion: "2019-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/tableServices/tables";
}
export interface storageAccounts_tableServices_tablesComponentOutputs {
	readonly apiVersion: "2019-06-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts/tableServices/tables";
}
export interface storageAccounts_tableServices_tablesComponentInputs {
	readonly name: string;
	readonly properties?: TableProperties;
}
export function listAccountSas(resource: storageAccounts, input: AccountSasParameters): ListAccountSasResponse {
	if (resource.apiVersion !== "2019-06-01") {
		throw new Error(`listAccountSas is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Storage/storageAccounts") {
		throw new Error(`listAccountSas is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listKeys(resource: storageAccounts): StorageAccountListKeysResult {
	if (resource.apiVersion !== "2019-06-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Storage/storageAccounts") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listServiceSas(resource: storageAccounts, input: ServiceSasParameters): ListServiceSasResponse {
	if (resource.apiVersion !== "2019-06-01") {
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
export interface BlobInventoryPolicyDefinition {
	readonly filters: BlobInventoryPolicyFilter;
}
export interface BlobInventoryPolicyFilter {
	readonly blobTypes: string[];
	readonly includeBlobVersions?: boolean;
	readonly includeSnapshots?: boolean;
	readonly prefixMatch?: string[];
}
export interface BlobInventoryPolicyProperties {
	readonly lastModifiedTime?: string;
	readonly policy: BlobInventoryPolicySchema;
}
export interface BlobInventoryPolicyRule {
	readonly definition: BlobInventoryPolicyDefinition;
	readonly enabled: boolean;
	readonly name: string;
}
export interface BlobInventoryPolicySchema {
	readonly destination: string;
	readonly enabled: boolean;
	readonly rules: BlobInventoryPolicyRule[];
	readonly type: "Inventory";
}
export interface BlobRestoreParameters {
	readonly blobRanges: BlobRestoreRange[];
	readonly timeToRestore: string;
}
export interface BlobRestoreRange {
	readonly endRange: string;
	readonly startRange: string;
}
export interface BlobRestoreStatus {
	readonly failureReason?: string;
	readonly parameters?: BlobRestoreParameters;
	readonly restoreId?: string;
	readonly status?: "Complete" | "Failed" | "InProgress";
}
export interface BlobServicePropertiesProperties {
	readonly automaticSnapshotPolicyEnabled?: boolean;
	readonly changeFeed?: ChangeFeed;
	readonly containerDeleteRetentionPolicy?: DeleteRetentionPolicy;
	readonly cors?: CorsRules;
	readonly defaultServiceVersion?: string;
	readonly deleteRetentionPolicy?: DeleteRetentionPolicy;
	readonly isVersioningEnabled?: boolean;
	readonly lastAccessTimeTrackingPolicy?: LastAccessTimeTrackingPolicy;
	readonly restorePolicy?: RestorePolicyProperties;
}
export interface ChangeFeed {
	readonly enabled?: boolean;
	readonly retentionInDays?: number;
}
export interface ContainerProperties {
	readonly defaultEncryptionScope?: string;
	readonly deleted?: boolean;
	readonly deletedTime?: string;
	readonly denyEncryptionScopeOverride?: boolean;
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
	readonly remainingRetentionDays?: number;
	readonly version?: string;
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
	readonly daysAfterLastAccessTimeGreaterThan?: number;
	readonly daysAfterModificationGreaterThan?: number;
}
export interface DeleteRetentionPolicy {
	readonly days?: number;
	readonly enabled?: boolean;
}
export interface Encryption {
	readonly keySource: "Microsoft.Keyvault" | "Microsoft.Storage";
	readonly keyvaultproperties?: KeyVaultProperties;
	readonly requireInfrastructureEncryption?: boolean;
	readonly services?: EncryptionServices;
}
export interface EncryptionScopeKeyVaultProperties {
	readonly keyUri?: string;
}
export interface EncryptionScopeProperties {
	readonly creationTime?: string;
	readonly keyVaultProperties?: EncryptionScopeKeyVaultProperties;
	readonly lastModifiedTime?: string;
	readonly source?: "Microsoft.KeyVault" | "Microsoft.Storage";
	readonly state?: "Disabled" | "Enabled";
}
export interface EncryptionService {
	readonly enabled?: boolean;
	readonly keyType?: "Account" | "Service";
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
	readonly internetEndpoints?: StorageAccountInternetEndpoints;
	readonly microsoftEndpoints?: StorageAccountMicrosoftEndpoints;
	readonly queue?: string;
	readonly table?: string;
	readonly web?: string;
}
export interface FileServicePropertiesProperties {
	readonly cors?: CorsRules;
	readonly shareDeleteRetentionPolicy?: DeleteRetentionPolicy;
}
export interface FileShareProperties {
	readonly accessTier?: "Cool" | "Hot" | "Premium" | "TransactionOptimized";
	readonly accessTierChangeTime?: string;
	readonly accessTierStatus?: string;
	readonly deleted?: boolean;
	readonly deletedTime?: string;
	readonly enabledProtocols?: "NFS" | "SMB";
	readonly lastModifiedTime?: string;
	readonly metadata?: FileSharePropertiesMetadata;
	readonly remainingRetentionDays?: number;
	readonly rootSquash?: "AllSquash" | "NoRootSquash" | "RootSquash";
	readonly shareQuota?: number;
	readonly shareUsageBytes?: number;
	readonly version?: string;
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
	readonly allowProtectedAppendWrites?: boolean;
	readonly immutabilityPeriodSinceCreationInDays?: number;
	readonly state?: "Locked" | "Unlocked";
}
export interface IPRule {
	readonly action?: "Allow";
	readonly value: string;
}
export interface KeyVaultProperties {
	readonly currentVersionedKeyIdentifier?: string;
	readonly keyname?: string;
	readonly keyvaulturi?: string;
	readonly keyversion?: string;
	readonly lastKeyRotationTimestamp?: string;
}
export interface LastAccessTimeTrackingPolicy {
	readonly blobType?: string[];
	readonly enable: boolean;
	readonly name?: "AccessTimeTracking";
	readonly trackingGranularityInDays?: number;
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
	readonly version?: ManagementPolicyVersion;
}
export interface ManagementPolicyBaseBlob {
	readonly delete?: DateAfterModification;
	readonly enableAutoTierToHotFromCool?: boolean;
	readonly tierToArchive?: DateAfterModification;
	readonly tierToCool?: DateAfterModification;
}
export interface ManagementPolicyDefinition {
	readonly actions: ManagementPolicyAction;
	readonly filters?: ManagementPolicyFilter;
}
export interface ManagementPolicyFilter {
	readonly blobIndexMatch?: TagFilter[];
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
	readonly tierToArchive?: DateAfterCreation;
	readonly tierToCool?: DateAfterCreation;
}
export interface ManagementPolicyVersion {
	readonly delete?: DateAfterCreation;
	readonly tierToArchive?: DateAfterCreation;
	readonly tierToCool?: DateAfterCreation;
}
export interface NetworkRuleSet {
	readonly bypass?: "AzureServices" | "Logging" | "Metrics" | "None";
	readonly defaultAction: "Allow";
	readonly ipRules?: IPRule[];
	readonly virtualNetworkRules?: VirtualNetworkRule[];
}
export interface ObjectReplicationPolicyFilter {
	readonly minCreationTime?: string;
	readonly prefixMatch?: string[];
}
export interface ObjectReplicationPolicyProperties {
	readonly destinationAccount: string;
	readonly enabledTime?: string;
	readonly policyId?: string;
	readonly rules?: ObjectReplicationPolicyRule[];
	readonly sourceAccount: string;
}
export interface ObjectReplicationPolicyRule {
	readonly destinationContainer: string;
	readonly filters?: ObjectReplicationPolicyFilter;
	readonly ruleId?: string;
	readonly sourceContainer: string;
}
export interface PrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointConnection {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly type?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded";
}
export interface PrivateLinkServiceConnectionState {
	readonly actionRequired?: string;
	readonly description?: string;
	readonly status?: "Approved" | "Pending" | "Rejected";
}
export interface QueueProperties {
	readonly approximateMessageCount?: number;
	readonly metadata?: QueuePropertiesMetadata;
}
export interface QueuePropertiesMetadata {
	readonly [key: string]: string;
}
export interface QueueServicePropertiesProperties {
	readonly cors?: CorsRules;
}
export interface RestorePolicyProperties {
	readonly days?: number;
	readonly enabled: boolean;
	readonly lastEnabledTime?: string;
	readonly minRestoreTime?: string;
}
export interface RoutingPreference {
	readonly publishInternetEndpoints?: boolean;
	readonly publishMicrosoftEndpoints?: boolean;
	readonly routingChoice?: "InternetRouting" | "MicrosoftRouting";
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
	readonly name:
		| "Premium_LRS"
		| "Premium_ZRS"
		| "Standard_GRS"
		| "Standard_GZRS"
		| "Standard_LRS"
		| "Standard_RAGRS"
		| "Standard_RAGZRS"
		| "Standard_ZRS";
	readonly tier?: "Premium";
}
export interface StorageAccountCreateParametersTags {
	readonly [key: string]: string;
}
export interface StorageAccountInternetEndpoints {
	readonly blob?: string;
	readonly dfs?: string;
	readonly file?: string;
	readonly web?: string;
}
export interface StorageAccountKey {
	readonly keyName?: string;
	readonly permissions?: "Full";
	readonly value?: string;
}
export interface StorageAccountListKeysResult {
	readonly keys?: StorageAccountKey[];
}
export interface StorageAccountMicrosoftEndpoints {
	readonly blob?: string;
	readonly dfs?: string;
	readonly file?: string;
	readonly queue?: string;
	readonly table?: string;
	readonly web?: string;
}
export interface StorageAccountPropertiesCreateParametersOrStorageAccountProperties {
	readonly accessTier?: "Cool";
	readonly allowBlobPublicAccess?: boolean;
	readonly allowSharedKeyAccess?: boolean;
	readonly azureFilesIdentityBasedAuthentication?: AzureFilesIdentityBasedAuthentication;
	readonly blobRestoreStatus?: BlobRestoreStatus;
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
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly provisioningState?: "Creating" | "ResolvingDNS";
	readonly routingPreference?: RoutingPreference;
	readonly secondaryEndpoints?: Endpoints;
	readonly secondaryLocation?: string;
	readonly statusOfPrimary?: "available";
	readonly statusOfSecondary?: "available";
	readonly supportsHttpsTrafficOnly?: boolean;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TableProperties {
	readonly tableName?: string;
}
export interface TableServicePropertiesProperties {
	readonly cors?: CorsRules;
}
export interface TagFilter {
	readonly name: string;
	readonly op: string;
	readonly value: string;
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
	"storageAccounts/encryptionScopes": storageAccounts_encryptionScopes,
	"storageAccounts/fileServices": storageAccounts_fileServices,
	"storageAccounts/fileServices/shares": storageAccounts_fileServices_shares,
	"storageAccounts/inventoryPolicies": storageAccounts_inventoryPolicies,
	"storageAccounts/managementPolicies": storageAccounts_managementPolicies,
	"storageAccounts/objectReplicationPolicies": storageAccounts_objectReplicationPolicies,
	"storageAccounts/privateEndpointConnections": storageAccounts_privateEndpointConnections,
	"storageAccounts/queueServices": storageAccounts_queueServices,
	"storageAccounts/queueServices/queues": storageAccounts_queueServices_queues,
	"storageAccounts/tableServices": storageAccounts_tableServices,
	"storageAccounts/tableServices/tables": storageAccounts_tableServices_tables,
};
