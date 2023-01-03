import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class caches extends ArmResource<cachesComponentInputs> implements cachesComponentOutputs {
	constructor(entity: ADKEntity, options: cachesComponentInputs) {
		super(entity, options.name, "Microsoft.StorageCache/caches", "2020-03-01", options);
	}
	public readonly apiVersion: "2020-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorageCache/caches";
}
export interface cachesComponentOutputs {
	readonly apiVersion: "2020-03-01";
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
	readonly tags?: any | undefined;
}
export class caches_storageTargets
	extends ArmResource<caches_storageTargetsComponentInputs>
	implements caches_storageTargetsComponentOutputs
{
	constructor(entity: ADKEntity, options: caches_storageTargetsComponentInputs) {
		super(entity, options.name, "Microsoft.StorageCache/caches/storageTargets", "2020-03-01", options);
	}
	public readonly apiVersion: "2020-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorageCache/caches/storageTargets";
}
export interface caches_storageTargetsComponentOutputs {
	readonly apiVersion: "2020-03-01";
	readonly id: string;
	readonly type: "Microsoft.StorageCache/caches/storageTargets";
}
export interface caches_storageTargetsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: StorageTargetProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface CacheEncryptionSettings {
	readonly keyEncryptionKey?: KeyVaultKeyReference | undefined;
}
export interface CacheHealth {
	readonly state?:
		| (
				| "Degraded"
				| "Down"
				| "Flushing"
				| "Healthy"
				| "Stopped"
				| "Stopping"
				| "Transitioning"
				| "Unknown"
				| "Upgrading"
		  )
		| undefined;
	readonly statusDescription?: string | undefined;
}
export interface CacheIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: "None" | undefined;
}
export interface CacheNetworkSettings {
	readonly mtu?: number | undefined;
	readonly utilityAddresses?: string[] | undefined;
}
export interface CacheProperties {
	readonly cacheSizeGB?: number | undefined;
	readonly encryptionSettings?: CacheEncryptionSettings | undefined;
	readonly health?: CacheHealth | undefined;
	readonly mountAddresses?: string[] | undefined;
	readonly networkSettings?: CacheNetworkSettings | undefined;
	readonly provisioningState?:
		| ("Cancelled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating")
		| undefined;
	readonly securitySettings?: CacheSecuritySettings | undefined;
	readonly subnet?: string | undefined;
	readonly upgradeStatus?: CacheUpgradeStatus | undefined;
}
export interface CacheSecuritySettings {
	readonly rootSquash?: boolean | undefined;
}
export interface CacheSku {
	readonly name?: string | undefined;
}
export interface CacheUpgradeStatus {
	readonly currentFirmwareVersion?: string | undefined;
	readonly firmwareUpdateDeadline?: string | undefined;
	readonly firmwareUpdateStatus?: ("available" | "unavailable") | undefined;
	readonly lastFirmwareUpdate?: string | undefined;
	readonly pendingFirmwareVersion?: string | undefined;
}
export interface ClfsTarget {
	readonly target?: string | undefined;
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
	readonly nfsExport?: string | undefined;
	readonly targetPath?: string | undefined;
}
export interface Nfs3Target {
	readonly target?: string | undefined;
	readonly usageModel?: string | undefined;
}
export interface StorageTargetProperties {
	readonly clfs?: ClfsTarget | undefined;
	readonly junctions?: NamespaceJunction[] | undefined;
	readonly nfs3?: Nfs3Target | undefined;
	readonly provisioningState?:
		| ("Cancelled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating")
		| undefined;
	readonly unknown?: UnknownTarget | undefined;
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
	readonly unknownMap?: UnknownProperties | undefined;
}
export default {
	caches: caches,
	"caches/storageTargets": caches_storageTargets,
};
