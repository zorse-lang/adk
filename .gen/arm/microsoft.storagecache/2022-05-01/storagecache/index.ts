import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class caches extends ArmResource<cachesComponentInputs> implements cachesComponentOutputs {
	constructor(entity: ADKEntity, options: cachesComponentInputs) {
		super(entity, options.name, "Microsoft.StorageCache/caches", "2022-05-01", options);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorageCache/caches";
}
export interface cachesComponentOutputs {
	readonly apiVersion: "2022-05-01";
	readonly id: string;
	readonly type: "Microsoft.StorageCache/caches";
}
export interface cachesComponentInputs {
	readonly identity?: CacheIdentity | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: CacheProperties | undefined;
	readonly sku?: CacheSku | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: CacheTags | undefined;
}
export class caches_storageTargets
	extends ArmResource<caches_storageTargetsComponentInputs>
	implements caches_storageTargetsComponentOutputs
{
	constructor(entity: ADKEntity, options: caches_storageTargetsComponentInputs) {
		super(entity, options.name, "Microsoft.StorageCache/caches/storageTargets", "2022-05-01", options);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorageCache/caches/storageTargets";
}
export interface caches_storageTargetsComponentOutputs {
	readonly apiVersion: "2022-05-01";
	readonly id: string;
	readonly type: "Microsoft.StorageCache/caches/storageTargets";
}
export interface caches_storageTargetsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: StorageTargetProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface BlobNfsTarget {
	readonly target?: string | undefined;
	readonly usageModel?: string | undefined;
}
export interface CacheActiveDirectorySettings {
	readonly cacheNetBiosName: string;
	readonly credentials?: CacheActiveDirectorySettingsCredentials | undefined;
	readonly domainJoined?: ("Error" | "No" | "Yes") | undefined;
	readonly domainName: string;
	readonly domainNetBiosName: string;
	readonly primaryDnsIpAddress: string;
	readonly secondaryDnsIpAddress?: string | undefined;
}
export interface CacheActiveDirectorySettingsCredentials {
	readonly password: string;
	readonly username: string;
}
export interface CacheDirectorySettings {
	readonly activeDirectory?: CacheActiveDirectorySettings | undefined;
	readonly usernameDownload?: CacheUsernameDownloadSettings | undefined;
}
export interface CacheEncryptionSettings {
	readonly keyEncryptionKey?: KeyVaultKeyReference | undefined;
	readonly rotationToLatestKeyVersionEnabled?: boolean | undefined;
}
export interface CacheHealth {
	readonly conditions?: Condition[] | undefined;
	readonly state?:
		| (
				| "Degraded"
				| "Down"
				| "Flushing"
				| "Healthy"
				| "StartFailed"
				| "Stopped"
				| "Stopping"
				| "Transitioning"
				| "Unknown"
				| "UpgradeFailed"
				| "Upgrading"
				| "WaitingForKey"
		  )
		| undefined;
	readonly statusDescription?: string | undefined;
}
export interface CacheIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned" | "SystemAssigned, UserAssigned") | undefined;
	readonly userAssignedIdentities?: CacheIdentityUserAssignedIdentities | undefined;
}
export interface CacheIdentityUserAssignedIdentities {
	readonly "[ key: string ]"?: UserAssignedIdentitiesValue | undefined;
}
export interface CacheNetworkSettings {
	readonly dnsSearchDomain?: string | undefined;
	readonly dnsServers?: string[] | undefined;
	readonly mtu?: number | undefined;
	readonly ntpServer?: string | undefined;
	readonly utilityAddresses?: string[] | undefined;
}
export interface CacheProperties {
	readonly cacheSizeGB?: number | undefined;
	readonly directoryServicesSettings?: CacheDirectorySettings | undefined;
	readonly encryptionSettings?: CacheEncryptionSettings | undefined;
	readonly health?: CacheHealth | undefined;
	readonly mountAddresses?: string[] | undefined;
	readonly networkSettings?: CacheNetworkSettings | undefined;
	readonly primingJobs?: PrimingJob[] | undefined;
	readonly provisioningState?:
		| ("Cancelled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating")
		| undefined;
	readonly securitySettings?: CacheSecuritySettings | undefined;
	readonly spaceAllocation?: StorageTargetSpaceAllocation[] | undefined;
	readonly subnet?: string | undefined;
	readonly upgradeSettings?: CacheUpgradeSettings | undefined;
	readonly upgradeStatus?: CacheUpgradeStatus | undefined;
	readonly zones?: string[] | undefined;
}
export interface CacheSecuritySettings {
	readonly accessPolicies?: NfsAccessPolicy[] | undefined;
}
export interface CacheSku {
	readonly name?: string | undefined;
}
export interface CacheTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface CacheUpgradeSettings {
	readonly scheduledTime?: string | undefined;
	readonly upgradeScheduleEnabled?: boolean | undefined;
}
export interface CacheUpgradeStatus {
	readonly currentFirmwareVersion?: string | undefined;
	readonly firmwareUpdateDeadline?: string | undefined;
	readonly firmwareUpdateStatus?: ("available" | "unavailable") | undefined;
	readonly lastFirmwareUpdate?: string | undefined;
	readonly pendingFirmwareVersion?: string | undefined;
}
export interface CacheUsernameDownloadSettings {
	readonly autoDownloadCertificate?: boolean | undefined;
	readonly caCertificateURI?: string | undefined;
	readonly credentials?: CacheUsernameDownloadSettingsCredentials | undefined;
	readonly encryptLdapConnection?: boolean | undefined;
	readonly extendedGroups?: boolean | undefined;
	readonly groupFileURI?: string | undefined;
	readonly ldapBaseDN?: string | undefined;
	readonly ldapServer?: string | undefined;
	readonly requireValidCertificate?: boolean | undefined;
	readonly userFileURI?: string | undefined;
	readonly usernameDownloaded?: ("Error" | "No" | "Yes") | undefined;
	readonly usernameSource?: ("AD" | "File" | "LDAP" | "None") | undefined;
}
export interface CacheUsernameDownloadSettingsCredentials {
	readonly bindDn?: string | undefined;
	readonly bindPassword?: string | undefined;
}
export interface ClfsTarget {
	readonly target?: string | undefined;
}
export interface Condition {
	readonly message?: string | undefined;
	readonly timestamp?: string | undefined;
}
export interface KeyVaultKeyReference {
	readonly keyUrl: string;
	readonly sourceVault: KeyVaultKeyReferenceSourceVault;
}
export interface KeyVaultKeyReferenceSourceVault {
	readonly id?: string | undefined;
}
export interface NamespaceJunction {
	readonly namespacePath?: string | undefined;
	readonly nfsAccessPolicy?: string | undefined;
	readonly nfsExport?: string | undefined;
	readonly targetPath?: string | undefined;
}
export interface Nfs3Target {
	readonly target?: string | undefined;
	readonly usageModel?: string | undefined;
}
export interface NfsAccessPolicy {
	readonly accessRules: NfsAccessRule[];
	readonly name: string;
}
export interface NfsAccessRule {
	readonly access: "no" | "ro" | "rw";
	readonly anonymousGID?: string | undefined;
	readonly anonymousUID?: string | undefined;
	readonly filter?: string | undefined;
	readonly rootSquash?: boolean | undefined;
	readonly scope: "default" | "host" | "network";
	readonly submountAccess?: boolean | undefined;
	readonly suid?: boolean | undefined;
}
export interface PrimingJob {
	readonly primingJobDetails?: string | undefined;
	readonly primingJobId?: string | undefined;
	readonly primingJobName: string;
	readonly primingJobPercentComplete?: number | undefined;
	readonly primingJobState?: ("Complete" | "Paused" | "Queued" | "Running") | undefined;
	readonly primingJobStatus?: string | undefined;
	readonly primingManifestUrl: string;
}
export interface StorageTargetProperties {
	readonly allocationPercentage?: number | undefined;
	readonly blobNfs?: BlobNfsTarget | undefined;
	readonly clfs?: ClfsTarget | undefined;
	readonly junctions?: NamespaceJunction[] | undefined;
	readonly nfs3?: Nfs3Target | undefined;
	readonly provisioningState?:
		| ("Cancelled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating")
		| undefined;
	readonly state?: ("Busy" | "Flushing" | "Ready" | "Suspended") | undefined;
	readonly targetType: "blobNfs" | "clfs" | "nfs3" | "unknown";
	readonly unknown?: UnknownTarget | undefined;
}
export interface StorageTargetSpaceAllocation {
	readonly allocationPercentage?: number | undefined;
	readonly name?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface UnknownProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface UnknownTarget {
	readonly attributes?: UnknownProperties | undefined;
}
export interface UserAssignedIdentitiesValue {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export default {
	caches: caches,
	"caches/storageTargets": caches_storageTargets,
};
