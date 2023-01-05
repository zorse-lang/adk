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
	readonly identity?: CacheIdentity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: CacheProperties;
	readonly sku?: CacheSku;
	readonly systemData?: SystemData;
	readonly tags?: any;
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
	readonly location?: string;
	readonly name: string;
	readonly properties?: StorageTargetProperties;
	readonly systemData?: SystemData;
}
export interface CacheEncryptionSettings {
	readonly keyEncryptionKey?: KeyVaultKeyReference;
}
export interface CacheHealth {
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
	readonly type?: "None";
}
export interface CacheNetworkSettings {
	readonly mtu?: number;
	readonly utilityAddresses?: string[];
}
export interface CacheProperties {
	readonly cacheSizeGB?: number;
	readonly encryptionSettings?: CacheEncryptionSettings;
	readonly health?: CacheHealth;
	readonly mountAddresses?: string[];
	readonly networkSettings?: CacheNetworkSettings;
	readonly provisioningState?: "Cancelled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly securitySettings?: CacheSecuritySettings;
	readonly subnet?: string;
	readonly upgradeStatus?: CacheUpgradeStatus;
}
export interface CacheSecuritySettings {
	readonly rootSquash?: boolean;
}
export interface CacheSku {
	readonly name?: string;
}
export interface CacheUpgradeStatus {
	readonly currentFirmwareVersion?: string;
	readonly firmwareUpdateDeadline?: string;
	readonly firmwareUpdateStatus?: "available" | "unavailable";
	readonly lastFirmwareUpdate?: string;
	readonly pendingFirmwareVersion?: string;
}
export interface ClfsTarget {
	readonly target?: string;
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
	readonly nfsExport?: string;
	readonly targetPath?: string;
}
export interface Nfs3Target {
	readonly target?: string;
	readonly usageModel?: string;
}
export interface StorageTargetProperties {
	readonly clfs?: ClfsTarget;
	readonly junctions?: NamespaceJunction[];
	readonly nfs3?: Nfs3Target;
	readonly provisioningState?: "Cancelled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
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
	readonly unknownMap?: UnknownProperties;
}
export default {
	caches: caches,
	"caches/storageTargets": caches_storageTargets,
};
