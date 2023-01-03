import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class locations_deletedAccounts
	extends ArmResource<locations_deletedAccountsComponentInputs>
	implements locations_deletedAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_deletedAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/locations/deletedAccounts", "2021-01-01", options);
	}
	public readonly apiVersion: "2021-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/locations/deletedAccounts";
}
export interface locations_deletedAccountsComponentOutputs {
	readonly apiVersion: "2021-01-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/locations/deletedAccounts";
}
export interface locations_deletedAccountsComponentInputs {
	readonly name: string;
	readonly properties?: DeletedAccountProperties | undefined;
}
export class storageAccounts
	extends ArmResource<storageAccountsComponentInputs>
	implements storageAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts", "2021-01-01", options);
	}
	public readonly apiVersion: "2021-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts";
}
export interface storageAccountsComponentOutputs {
	readonly apiVersion: "2021-01-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts";
}
export interface storageAccountsComponentInputs {
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly identity?: Identity | undefined;
	readonly kind: "BlobStorage" | "BlockBlobStorage" | "FileStorage" | "Storage" | "StorageV2";
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
		super(entity, options.name, "Microsoft.Storage/storageAccounts/blobServices", "2021-01-01", options);
	}
	public readonly apiVersion: "2021-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/blobServices";
}
export interface storageAccounts_blobServicesComponentOutputs {
	readonly apiVersion: "2021-01-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts/blobServices";
}
export interface storageAccounts_blobServicesComponentInputs {
	readonly name: string;
	readonly properties?: BlobServicePropertiesProperties | undefined;
	readonly sku?: Sku | undefined;
}
export class storageAccounts_blobServices_containers
	extends ArmResource<storageAccounts_blobServices_containersComponentInputs>
	implements storageAccounts_blobServices_containersComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccounts_blobServices_containersComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts/blobServices/containers", "2021-01-01", options);
	}
	public readonly apiVersion: "2021-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/blobServices/containers";
}
export interface storageAccounts_blobServices_containersComponentOutputs {
	readonly apiVersion: "2021-01-01";
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
			"2021-01-01",
			options,
		);
	}
	public readonly apiVersion: "2021-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies";
}
export interface storageAccounts_blobServices_containers_immutabilityPoliciesComponentOutputs {
	readonly apiVersion: "2021-01-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies";
}
export interface storageAccounts_blobServices_containers_immutabilityPoliciesComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties: ImmutabilityPolicyProperty;
}
export class storageAccounts_encryptionScopes
	extends ArmResource<storageAccounts_encryptionScopesComponentInputs>
	implements storageAccounts_encryptionScopesComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccounts_encryptionScopesComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts/encryptionScopes", "2021-01-01", options);
	}
	public readonly apiVersion: "2021-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/encryptionScopes";
}
export interface storageAccounts_encryptionScopesComponentOutputs {
	readonly apiVersion: "2021-01-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts/encryptionScopes";
}
export interface storageAccounts_encryptionScopesComponentInputs {
	readonly name: string;
	readonly properties?: EncryptionScopeProperties | undefined;
}
export class storageAccounts_fileServices
	extends ArmResource<storageAccounts_fileServicesComponentInputs>
	implements storageAccounts_fileServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccounts_fileServicesComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts/fileServices", "2021-01-01", options);
	}
	public readonly apiVersion: "2021-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/fileServices";
}
export interface storageAccounts_fileServicesComponentOutputs {
	readonly apiVersion: "2021-01-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts/fileServices";
}
export interface storageAccounts_fileServicesComponentInputs {
	readonly name: string;
	readonly properties?: FileServicePropertiesProperties | undefined;
	readonly sku?: Sku | undefined;
}
export class storageAccounts_fileServices_shares
	extends ArmResource<storageAccounts_fileServices_sharesComponentInputs>
	implements storageAccounts_fileServices_sharesComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccounts_fileServices_sharesComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts/fileServices/shares", "2021-01-01", options);
	}
	public readonly apiVersion: "2021-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/fileServices/shares";
}
export interface storageAccounts_fileServices_sharesComponentOutputs {
	readonly apiVersion: "2021-01-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts/fileServices/shares";
}
export interface storageAccounts_fileServices_sharesComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: FileShareProperties | undefined;
}
export class storageAccounts_inventoryPolicies
	extends ArmResource<storageAccounts_inventoryPoliciesComponentInputs>
	implements storageAccounts_inventoryPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccounts_inventoryPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts/inventoryPolicies", "2021-01-01", options);
	}
	public readonly apiVersion: "2021-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/inventoryPolicies";
}
export interface storageAccounts_inventoryPoliciesComponentOutputs {
	readonly apiVersion: "2021-01-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts/inventoryPolicies";
}
export interface storageAccounts_inventoryPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: BlobInventoryPolicyProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class storageAccounts_managementPolicies
	extends ArmResource<storageAccounts_managementPoliciesComponentInputs>
	implements storageAccounts_managementPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccounts_managementPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts/managementPolicies", "2021-01-01", options);
	}
	public readonly apiVersion: "2021-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/managementPolicies";
}
export interface storageAccounts_managementPoliciesComponentOutputs {
	readonly apiVersion: "2021-01-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts/managementPolicies";
}
export interface storageAccounts_managementPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: ManagementPolicyProperties | undefined;
}
export class storageAccounts_objectReplicationPolicies
	extends ArmResource<storageAccounts_objectReplicationPoliciesComponentInputs>
	implements storageAccounts_objectReplicationPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccounts_objectReplicationPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts/objectReplicationPolicies", "2021-01-01", options);
	}
	public readonly apiVersion: "2021-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/objectReplicationPolicies";
}
export interface storageAccounts_objectReplicationPoliciesComponentOutputs {
	readonly apiVersion: "2021-01-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts/objectReplicationPolicies";
}
export interface storageAccounts_objectReplicationPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: ObjectReplicationPolicyProperties | undefined;
}
export class storageAccounts_privateEndpointConnections
	extends ArmResource<storageAccounts_privateEndpointConnectionsComponentInputs>
	implements storageAccounts_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccounts_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts/privateEndpointConnections", "2021-01-01", options);
	}
	public readonly apiVersion: "2021-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/privateEndpointConnections";
}
export interface storageAccounts_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-01-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts/privateEndpointConnections";
}
export interface storageAccounts_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
}
export class storageAccounts_queueServices
	extends ArmResource<storageAccounts_queueServicesComponentInputs>
	implements storageAccounts_queueServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccounts_queueServicesComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts/queueServices", "2021-01-01", options);
	}
	public readonly apiVersion: "2021-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/queueServices";
}
export interface storageAccounts_queueServicesComponentOutputs {
	readonly apiVersion: "2021-01-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts/queueServices";
}
export interface storageAccounts_queueServicesComponentInputs {
	readonly name: string;
	readonly properties?: QueueServicePropertiesProperties | undefined;
}
export class storageAccounts_queueServices_queues
	extends ArmResource<storageAccounts_queueServices_queuesComponentInputs>
	implements storageAccounts_queueServices_queuesComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccounts_queueServices_queuesComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts/queueServices/queues", "2021-01-01", options);
	}
	public readonly apiVersion: "2021-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/queueServices/queues";
}
export interface storageAccounts_queueServices_queuesComponentOutputs {
	readonly apiVersion: "2021-01-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts/queueServices/queues";
}
export interface storageAccounts_queueServices_queuesComponentInputs {
	readonly name: string;
	readonly properties?: QueueProperties | undefined;
}
export class storageAccounts_tableServices
	extends ArmResource<storageAccounts_tableServicesComponentInputs>
	implements storageAccounts_tableServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccounts_tableServicesComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts/tableServices", "2021-01-01", options);
	}
	public readonly apiVersion: "2021-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/tableServices";
}
export interface storageAccounts_tableServicesComponentOutputs {
	readonly apiVersion: "2021-01-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts/tableServices";
}
export interface storageAccounts_tableServicesComponentInputs {
	readonly name: string;
	readonly properties?: TableServicePropertiesProperties | undefined;
}
export class storageAccounts_tableServices_tables
	extends ArmResource<storageAccounts_tableServices_tablesComponentInputs>
	implements storageAccounts_tableServices_tablesComponentOutputs
{
	constructor(entity: ADKEntity, options: storageAccounts_tableServices_tablesComponentInputs) {
		super(entity, options.name, "Microsoft.Storage/storageAccounts/tableServices/tables", "2021-01-01", options);
	}
	public readonly apiVersion: "2021-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Storage/storageAccounts/tableServices/tables";
}
export interface storageAccounts_tableServices_tablesComponentOutputs {
	readonly apiVersion: "2021-01-01";
	readonly id: string;
	readonly type: "Microsoft.Storage/storageAccounts/tableServices/tables";
}
export interface storageAccounts_tableServices_tablesComponentInputs {
	readonly name: string;
	readonly properties?: TableProperties | undefined;
}
export function listAccountSas(resource: storageAccounts, input: AccountSasParameters): ListAccountSasResponse {
	if (resource.apiVersion !== "2021-01-01") {
		throw new Error(`listAccountSas is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Storage/storageAccounts") {
		throw new Error(`listAccountSas is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listKeys(resource: storageAccounts): StorageAccountListKeysResult {
	if (resource.apiVersion !== "2021-01-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Storage/storageAccounts") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listServiceSas(resource: storageAccounts, input: ServiceSasParameters): ListServiceSasResponse {
	if (resource.apiVersion !== "2021-01-01") {
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
export interface ActiveDirectoryProperties {
	readonly azureStorageSid: string;
	readonly domainGuid: string;
	readonly domainName: string;
	readonly domainSid: string;
	readonly forestName: string;
	readonly netBiosDomainName: string;
}
export interface AzureFilesIdentityBasedAuthentication {
	readonly activeDirectoryProperties?: ActiveDirectoryProperties | undefined;
	readonly directoryServiceOptions: "AADDS" | "AD" | "None";
}
export interface BlobInventoryPolicyDefinition {
	readonly filters: BlobInventoryPolicyFilter;
}
export interface BlobInventoryPolicyFilter {
	readonly blobTypes: string[];
	readonly includeBlobVersions?: boolean | undefined;
	readonly includeSnapshots?: boolean | undefined;
	readonly prefixMatch?: string[] | undefined;
}
export interface BlobInventoryPolicyProperties {
	readonly lastModifiedTime?: string | undefined;
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
	readonly failureReason?: string | undefined;
	readonly parameters?: BlobRestoreParameters | undefined;
	readonly restoreId?: string | undefined;
	readonly status?: ("Complete" | "Failed" | "InProgress") | undefined;
}
export interface BlobServicePropertiesProperties {
	readonly automaticSnapshotPolicyEnabled?: boolean | undefined;
	readonly changeFeed?: ChangeFeed | undefined;
	readonly containerDeleteRetentionPolicy?: DeleteRetentionPolicy | undefined;
	readonly cors?: CorsRules | undefined;
	readonly defaultServiceVersion?: string | undefined;
	readonly deleteRetentionPolicy?: DeleteRetentionPolicy | undefined;
	readonly isVersioningEnabled?: boolean | undefined;
	readonly lastAccessTimeTrackingPolicy?: LastAccessTimeTrackingPolicy | undefined;
	readonly restorePolicy?: RestorePolicyProperties | undefined;
}
export interface ChangeFeed {
	readonly enabled?: boolean | undefined;
	readonly retentionInDays?: number | undefined;
}
export interface ContainerProperties {
	readonly defaultEncryptionScope?: string | undefined;
	readonly deleted?: boolean | undefined;
	readonly deletedTime?: string | undefined;
	readonly denyEncryptionScopeOverride?: boolean | undefined;
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
	readonly remainingRetentionDays?: number | undefined;
	readonly version?: string | undefined;
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
	readonly daysAfterLastAccessTimeGreaterThan?: number | undefined;
	readonly daysAfterModificationGreaterThan?: number | undefined;
}
export interface DeletedAccountProperties {
	readonly creationTime?: string | undefined;
	readonly deletionTime?: string | undefined;
	readonly location?: string | undefined;
	readonly restoreReference?: string | undefined;
	readonly storageAccountResourceId?: string | undefined;
}
export interface DeleteRetentionPolicy {
	readonly days?: number | undefined;
	readonly enabled?: boolean | undefined;
}
export interface Encryption {
	readonly identity?: EncryptionIdentity | undefined;
	readonly keySource: "Microsoft.Keyvault" | "Microsoft.Storage";
	readonly keyvaultproperties?: KeyVaultProperties | undefined;
	readonly requireInfrastructureEncryption?: boolean | undefined;
	readonly services?: EncryptionServices | undefined;
}
export interface EncryptionIdentity {
	readonly userAssignedIdentity?: string | undefined;
}
export interface EncryptionScopeKeyVaultProperties {
	readonly currentVersionedKeyIdentifier?: string | undefined;
	readonly keyUri?: string | undefined;
	readonly lastKeyRotationTimestamp?: string | undefined;
}
export interface EncryptionScopeProperties {
	readonly creationTime?: string | undefined;
	readonly keyVaultProperties?: EncryptionScopeKeyVaultProperties | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly requireInfrastructureEncryption?: boolean | undefined;
	readonly source?: ("Microsoft.KeyVault" | "Microsoft.Storage") | undefined;
	readonly state?: ("Disabled" | "Enabled") | undefined;
}
export interface EncryptionService {
	readonly enabled?: boolean | undefined;
	readonly keyType?: ("Account" | "Service") | undefined;
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
	readonly internetEndpoints?: StorageAccountInternetEndpoints | undefined;
	readonly microsoftEndpoints?: StorageAccountMicrosoftEndpoints | undefined;
	readonly queue?: string | undefined;
	readonly table?: string | undefined;
	readonly web?: string | undefined;
}
export interface ExtendedLocation {
	readonly name?: string | undefined;
	readonly type?: "EdgeZone" | undefined;
}
export interface FileServicePropertiesProperties {
	readonly cors?: CorsRules | undefined;
	readonly protocolSettings?: ProtocolSettings | undefined;
	readonly shareDeleteRetentionPolicy?: DeleteRetentionPolicy | undefined;
}
export interface FileShareProperties {
	readonly accessTier?: ("Cool" | "Hot" | "Premium" | "TransactionOptimized") | undefined;
	readonly accessTierChangeTime?: string | undefined;
	readonly accessTierStatus?: string | undefined;
	readonly deleted?: boolean | undefined;
	readonly deletedTime?: string | undefined;
	readonly enabledProtocols?: ("NFS" | "SMB") | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly metadata?: FileSharePropertiesMetadata | undefined;
	readonly remainingRetentionDays?: number | undefined;
	readonly rootSquash?: ("AllSquash" | "NoRootSquash" | "RootSquash") | undefined;
	readonly shareQuota?: number | undefined;
	readonly shareUsageBytes?: number | undefined;
	readonly snapshotTime?: string | undefined;
	readonly version?: string | undefined;
}
export interface FileSharePropertiesMetadata {
	readonly "[ key: string ]"?: string | undefined;
}
export interface GeoReplicationStats {
	readonly canFailover?: boolean | undefined;
	readonly lastSyncTime?: string | undefined;
	readonly status?: ("Bootstrap" | "Live" | "Unavailable") | undefined;
}
export interface Identity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type: "None" | "SystemAssigned" | "SystemAssigned,UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: IdentityUserAssignedIdentities | undefined;
}
export interface IdentityUserAssignedIdentities {
	readonly "[ key: string ]"?: UserAssignedIdentity | undefined;
}
export interface ImmutabilityPolicyProperties {
	readonly etag?: string | undefined;
	readonly properties?: ImmutabilityPolicyProperty | undefined;
	readonly updateHistory?: UpdateHistoryProperty[] | undefined;
}
export interface ImmutabilityPolicyProperty {
	readonly allowProtectedAppendWrites?: boolean | undefined;
	readonly immutabilityPeriodSinceCreationInDays?: number | undefined;
	readonly state?: ("Locked" | "Unlocked") | undefined;
}
export interface IPRule {
	readonly action?: "Allow" | undefined;
	readonly value: string;
}
export interface KeyVaultProperties {
	readonly currentVersionedKeyIdentifier?: string | undefined;
	readonly keyname?: string | undefined;
	readonly keyvaulturi?: string | undefined;
	readonly keyversion?: string | undefined;
	readonly lastKeyRotationTimestamp?: string | undefined;
}
export interface LastAccessTimeTrackingPolicy {
	readonly blobType?: string[] | undefined;
	readonly enable: boolean;
	readonly name?: "AccessTimeTracking" | undefined;
	readonly trackingGranularityInDays?: number | undefined;
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
	readonly version?: ManagementPolicyVersion | undefined;
}
export interface ManagementPolicyBaseBlob {
	readonly delete?: DateAfterModification | undefined;
	readonly enableAutoTierToHotFromCool?: boolean | undefined;
	readonly tierToArchive?: DateAfterModification | undefined;
	readonly tierToCool?: DateAfterModification | undefined;
}
export interface ManagementPolicyDefinition {
	readonly actions: ManagementPolicyAction;
	readonly filters?: ManagementPolicyFilter | undefined;
}
export interface ManagementPolicyFilter {
	readonly blobIndexMatch?: TagFilter[] | undefined;
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
	readonly tierToArchive?: DateAfterCreation | undefined;
	readonly tierToCool?: DateAfterCreation | undefined;
}
export interface ManagementPolicyVersion {
	readonly delete?: DateAfterCreation | undefined;
	readonly tierToArchive?: DateAfterCreation | undefined;
	readonly tierToCool?: DateAfterCreation | undefined;
}
export interface Multichannel {
	readonly enabled?: boolean | undefined;
}
export interface NetworkRuleSet {
	readonly bypass?: ("AzureServices" | "Logging" | "Metrics" | "None") | undefined;
	readonly defaultAction: "Allow";
	readonly ipRules?: IPRule[] | undefined;
	readonly resourceAccessRules?: ResourceAccessRule[] | undefined;
	readonly virtualNetworkRules?: VirtualNetworkRule[] | undefined;
}
export interface ObjectReplicationPolicyFilter {
	readonly minCreationTime?: string | undefined;
	readonly prefixMatch?: string[] | undefined;
}
export interface ObjectReplicationPolicyProperties {
	readonly destinationAccount: string;
	readonly enabledTime?: string | undefined;
	readonly policyId?: string | undefined;
	readonly rules?: ObjectReplicationPolicyRule[] | undefined;
	readonly sourceAccount: string;
}
export interface ObjectReplicationPolicyRule {
	readonly destinationContainer: string;
	readonly filters?: ObjectReplicationPolicyFilter | undefined;
	readonly ruleId?: string | undefined;
	readonly sourceContainer: string;
}
export interface PrivateEndpoint {
	readonly id?: string | undefined;
}
export interface PrivateEndpointConnection {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly type?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint | undefined;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded") | undefined;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionRequired?: string | undefined;
	readonly description?: string | undefined;
	readonly status?: ("Approved" | "Pending" | "Rejected") | undefined;
}
export interface ProtocolSettings {
	readonly smb?: SmbSetting | undefined;
}
export interface QueueProperties {
	readonly approximateMessageCount?: number | undefined;
	readonly metadata?: QueuePropertiesMetadata | undefined;
}
export interface QueuePropertiesMetadata {
	readonly "[ key: string ]"?: string | undefined;
}
export interface QueueServicePropertiesProperties {
	readonly cors?: CorsRules | undefined;
}
export interface ResourceAccessRule {
	readonly resourceId?: string | undefined;
	readonly tenantId?: string | undefined;
}
export interface RestorePolicyProperties {
	readonly days?: number | undefined;
	readonly enabled: boolean;
	readonly lastEnabledTime?: string | undefined;
	readonly minRestoreTime?: string | undefined;
}
export interface RoutingPreference {
	readonly publishInternetEndpoints?: boolean | undefined;
	readonly publishMicrosoftEndpoints?: boolean | undefined;
	readonly routingChoice?: ("InternetRouting" | "MicrosoftRouting") | undefined;
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
	readonly name:
		| "Premium_LRS"
		| "Premium_ZRS"
		| "Standard_GRS"
		| "Standard_GZRS"
		| "Standard_LRS"
		| "Standard_RAGRS"
		| "Standard_RAGZRS"
		| "Standard_ZRS";
	readonly tier?: "Premium" | undefined;
}
export interface SmbSetting {
	readonly authenticationMethods?: string | undefined;
	readonly channelEncryption?: string | undefined;
	readonly kerberosTicketEncryption?: string | undefined;
	readonly multichannel?: Multichannel | undefined;
	readonly versions?: string | undefined;
}
export interface StorageAccountCreateParametersTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface StorageAccountInternetEndpoints {
	readonly blob?: string | undefined;
	readonly dfs?: string | undefined;
	readonly file?: string | undefined;
	readonly web?: string | undefined;
}
export interface StorageAccountKey {
	readonly keyName?: string | undefined;
	readonly permissions?: "Full" | undefined;
	readonly value?: string | undefined;
}
export interface StorageAccountListKeysResult {
	readonly keys?: StorageAccountKey[] | undefined;
}
export interface StorageAccountMicrosoftEndpoints {
	readonly blob?: string | undefined;
	readonly dfs?: string | undefined;
	readonly file?: string | undefined;
	readonly queue?: string | undefined;
	readonly table?: string | undefined;
	readonly web?: string | undefined;
}
export interface StorageAccountPropertiesCreateParametersOrStorageAccountProperties {
	readonly accessTier?: "Cool" | undefined;
	readonly allowBlobPublicAccess?: boolean | undefined;
	readonly allowSharedKeyAccess?: boolean | undefined;
	readonly azureFilesIdentityBasedAuthentication?: AzureFilesIdentityBasedAuthentication | undefined;
	readonly blobRestoreStatus?: BlobRestoreStatus | undefined;
	readonly creationTime?: string | undefined;
	readonly customDomain?: CustomDomain | undefined;
	readonly encryption?: Encryption | undefined;
	readonly failoverInProgress?: boolean | undefined;
	readonly geoReplicationStats?: GeoReplicationStats | undefined;
	readonly isHnsEnabled?: boolean | undefined;
	readonly isNfsV3Enabled?: boolean | undefined;
	readonly largeFileSharesState?: ("Disabled" | "Enabled") | undefined;
	readonly lastGeoFailoverTime?: string | undefined;
	readonly minimumTlsVersion?: ("TLS1_0" | "TLS1_1" | "TLS1_2") | undefined;
	readonly networkAcls?: NetworkRuleSet | undefined;
	readonly primaryEndpoints?: Endpoints | undefined;
	readonly primaryLocation?: string | undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly provisioningState?: ("Creating" | "ResolvingDNS") | undefined;
	readonly routingPreference?: RoutingPreference | undefined;
	readonly secondaryEndpoints?: Endpoints | undefined;
	readonly secondaryLocation?: string | undefined;
	readonly statusOfPrimary?: "available" | undefined;
	readonly statusOfSecondary?: "available" | undefined;
	readonly supportsHttpsTrafficOnly?: boolean | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TableProperties {
	readonly tableName?: string | undefined;
}
export interface TableServicePropertiesProperties {
	readonly cors?: CorsRules | undefined;
}
export interface TagFilter {
	readonly name: string;
	readonly op: string;
	readonly value: string;
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
export interface UserAssignedIdentity {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export interface VirtualNetworkRule {
	readonly action?: "Allow" | undefined;
	readonly id: string;
	readonly state?: ("deprovisioning" | "failed" | "networkSourceDeleted" | "provisioning" | "succeeded") | undefined;
}
export default {
	"locations/deletedAccounts": locations_deletedAccounts,
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
