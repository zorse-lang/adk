import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class caches extends ArmResource<cachesComponentInputs> implements cachesComponentOutputs {
	constructor(entity: ADKEntity, options: cachesComponentInputs) {
		super(entity, options.name, "Microsoft.StorageCache/caches", "2019-11-01", options);
	}
	public readonly apiVersion: "2019-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorageCache/caches";
}
export interface cachesComponentOutputs {
	readonly apiVersion: "2019-11-01";
	readonly id: string;
	readonly type: "Microsoft.StorageCache/caches";
}
export interface cachesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: CacheProperties;
	readonly sku?: CacheSku;
	readonly tags?: any;
}
export class caches_storageTargets
	extends ArmResource<caches_storageTargetsComponentInputs>
	implements caches_storageTargetsComponentOutputs
{
	constructor(entity: ADKEntity, options: caches_storageTargetsComponentInputs) {
		super(entity, options.name, "Microsoft.StorageCache/caches/storageTargets", "2019-11-01", options);
	}
	public readonly apiVersion: "2019-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorageCache/caches/storageTargets";
}
export interface caches_storageTargetsComponentOutputs {
	readonly apiVersion: "2019-11-01";
	readonly id: string;
	readonly type: "Microsoft.StorageCache/caches/storageTargets";
}
export interface caches_storageTargetsComponentInputs {
	readonly name: string;
	readonly properties?: StorageTargetProperties;
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
export interface CacheProperties {
	readonly cacheSizeGB?: number;
	readonly health?: CacheHealth;
	readonly mountAddresses?: string[];
	readonly provisioningState?: "Cancelled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly subnet?: string;
	readonly upgradeStatus?: CacheUpgradeStatus;
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
	readonly targetType?: "clfs" | "nfs3" | "unknown";
	readonly unknown?: UnknownTarget;
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
