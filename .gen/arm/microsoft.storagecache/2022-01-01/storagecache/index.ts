import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class caches extends ArmResource<cachesComponentInputs> implements cachesComponentOutputs {
	constructor(entity: ADKEntity, options: cachesComponentInputs) {
		super(entity, options.name, "Microsoft.StorageCache/caches", "2022-01-01", options);
	}
	public readonly apiVersion: "2022-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorageCache/caches";
}
export interface cachesComponentOutputs {
	readonly apiVersion: "2022-01-01";
	readonly id: string;
	readonly type: "Microsoft.StorageCache/caches";
}
export interface cachesComponentInputs {
	readonly identity?: CacheIdentity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: CacheProperties;
	readonly sku?: CacheSku;
	readonly systemData?: SystemData;
	readonly tags?: CacheTags;
}
export class caches_storageTargets
	extends ArmResource<caches_storageTargetsComponentInputs>
	implements caches_storageTargetsComponentOutputs
{
	constructor(entity: ADKEntity, options: caches_storageTargetsComponentInputs) {
		super(entity, options.name, "Microsoft.StorageCache/caches/storageTargets", "2022-01-01", options);
	}
	public readonly apiVersion: "2022-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorageCache/caches/storageTargets";
}
export interface caches_storageTargetsComponentOutputs {
	readonly apiVersion: "2022-01-01";
	readonly id: string;
	readonly type: "Microsoft.StorageCache/caches/storageTargets";
}
export interface caches_storageTargetsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: StorageTargetProperties;
	readonly systemData?: SystemData;
}
export interface BlobNfsTarget {
	readonly target?: string;
	readonly usageModel?: string;
}
export interface CacheActiveDirectorySettings {
	readonly cacheNetBiosName: string;
	readonly credentials?: CacheActiveDirectorySettingsCredentials;
	readonly domainJoined?: "Error" | "No" | "Yes";
	readonly domainName: string;
	readonly domainNetBiosName: string;
	readonly primaryDnsIpAddress: string;
	readonly secondaryDnsIpAddress?: string;
}
export interface CacheActiveDirectorySettingsCredentials {
	readonly password: string;
	readonly username: string;
}
export interface CacheDirectorySettings {
	readonly activeDirectory?: CacheActiveDirectorySettings;
	readonly usernameDownload?: CacheUsernameDownloadSettings;
}
export interface CacheEncryptionSettings {
	readonly keyEncryptionKey?: KeyVaultKeyReference;
	readonly rotationToLatestKeyVersionEnabled?: boolean;
}
export interface CacheHealth {
	readonly conditions?: Condition[];
	readonly state?:
		| "Degraded"
		| "Down"
		| "Flushing"
		| "Healthy"
		| "Stopped"
		| "Stopping"
		| "Transitioning"
		| "Unknown"
		| "Upgrading";
	readonly statusDescription?: string;
}
export interface CacheIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned" | "SystemAssigned, UserAssigned";
	readonly userAssignedIdentities?: CacheIdentityUserAssignedIdentities;
}
export interface CacheIdentityUserAssignedIdentities {
	readonly [key: string]: UserAssignedIdentitiesValue;
}
export interface CacheNetworkSettings {
	readonly dnsSearchDomain?: string;
	readonly dnsServers?: string[];
	readonly mtu?: number;
	readonly ntpServer?: string;
	readonly utilityAddresses?: string[];
}
export interface CacheProperties {
	readonly cacheSizeGB?: number;
	readonly directoryServicesSettings?: CacheDirectorySettings;
	readonly encryptionSettings?: CacheEncryptionSettings;
	readonly health?: CacheHealth;
	readonly mountAddresses?: string[];
	readonly networkSettings?: CacheNetworkSettings;
	readonly provisioningState?: "Cancelled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly securitySettings?: CacheSecuritySettings;
	readonly subnet?: string;
	readonly upgradeStatus?: CacheUpgradeStatus;
	readonly zones?: string[];
}
export interface CacheSecuritySettings {
	readonly accessPolicies?: NfsAccessPolicy[];
}
export interface CacheSku {
	readonly name?: string;
}
export interface CacheTags {
	readonly [key: string]: string;
}
export interface CacheUpgradeStatus {
	readonly currentFirmwareVersion?: string;
	readonly firmwareUpdateDeadline?: string;
	readonly firmwareUpdateStatus?: "available" | "unavailable";
	readonly lastFirmwareUpdate?: string;
	readonly pendingFirmwareVersion?: string;
}
export interface CacheUsernameDownloadSettings {
	readonly autoDownloadCertificate?: boolean;
	readonly caCertificateURI?: string;
	readonly credentials?: CacheUsernameDownloadSettingsCredentials;
	readonly encryptLdapConnection?: boolean;
	readonly extendedGroups?: boolean;
	readonly groupFileURI?: string;
	readonly ldapBaseDN?: string;
	readonly ldapServer?: string;
	readonly requireValidCertificate?: boolean;
	readonly userFileURI?: string;
	readonly usernameDownloaded?: "Error" | "No" | "Yes";
	readonly usernameSource?: "AD" | "File" | "LDAP" | "None";
}
export interface CacheUsernameDownloadSettingsCredentials {
	readonly bindDn?: string;
	readonly bindPassword?: string;
}
export interface ClfsTarget {
	readonly target?: string;
}
export interface Condition {
	readonly message?: string;
	readonly timestamp?: string;
}
export interface KeyVaultKeyReference {
	readonly keyUrl: string;
	readonly sourceVault: KeyVaultKeyReferenceSourceVault;
}
export interface KeyVaultKeyReferenceSourceVault {
	readonly id?: string;
}
export interface NamespaceJunction {
	readonly namespacePath?: string;
	readonly nfsAccessPolicy?: string;
	readonly nfsExport?: string;
	readonly targetPath?: string;
}
export interface Nfs3Target {
	readonly target?: string;
	readonly usageModel?: string;
}
export interface NfsAccessPolicy {
	readonly accessRules: NfsAccessRule[];
	readonly name: string;
}
export interface NfsAccessRule {
	readonly access: "no" | "ro" | "rw";
	readonly anonymousGID?: string;
	readonly anonymousUID?: string;
	readonly filter?: string;
	readonly rootSquash?: boolean;
	readonly scope: "default" | "host" | "network";
	readonly submountAccess?: boolean;
	readonly suid?: boolean;
}
export interface StorageTargetProperties {
	readonly blobNfs?: BlobNfsTarget;
	readonly clfs?: ClfsTarget;
	readonly junctions?: NamespaceJunction[];
	readonly nfs3?: Nfs3Target;
	readonly provisioningState?: "Cancelled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly state?: "Busy" | "Flushing" | "Ready" | "Suspended";
	readonly targetType: "blobNfs" | "clfs" | "nfs3" | "unknown";
	readonly unknown?: UnknownTarget;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface UnknownProperties {
	readonly [key: string]: string;
}
export interface UnknownTarget {
	readonly attributes?: UnknownProperties;
}
export interface UserAssignedIdentitiesValue {
	readonly clientId?: string;
	readonly principalId?: string;
}
export default {
	caches: caches,
	"caches/storageTargets": caches_storageTargets,
};
