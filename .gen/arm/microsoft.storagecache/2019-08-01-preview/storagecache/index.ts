import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class caches extends ArmResource<cachesComponentInputs> implements cachesComponentOutputs {
	constructor(entity: ADKEntity, options: cachesComponentInputs) {
		super(entity, options.name, "Microsoft.StorageCache/caches", "2019-08-01-preview", options);
	}
	public readonly apiVersion: "2019-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.StorageCache/caches";
}
export interface cachesComponentOutputs {
	readonly apiVersion: "2019-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.StorageCache/caches";
}
export interface cachesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: CacheProperties | undefined;
	readonly sku?: CacheSku | undefined;
	readonly tags?: any | undefined;
}
export class caches_storageTargets
	extends ArmResource<caches_storageTargetsComponentInputs>
	implements caches_storageTargetsComponentOutputs
{
	constructor(entity: ADKEntity, options: caches_storageTargetsComponentInputs) {
		super(entity, options.name, "Microsoft.StorageCache/caches/storageTargets", "2019-08-01-preview", options);
	}
	public readonly apiVersion: "2019-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.StorageCache/caches/storageTargets";
}
export interface caches_storageTargetsComponentOutputs {
	readonly apiVersion: "2019-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.StorageCache/caches/storageTargets";
}
export interface caches_storageTargetsComponentInputs {
	readonly name: string;
	readonly properties?: StorageTargetProperties | undefined;
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
export interface CacheProperties {
	readonly cacheSizeGB?: number | undefined;
	readonly health?: CacheHealth | undefined;
	readonly mountAddresses?: string[] | undefined;
	readonly provisioningState?:
		| ("Cancelled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating")
		| undefined;
	readonly subnet?: string | undefined;
	readonly upgradeStatus?: CacheUpgradeStatus | undefined;
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
	readonly targetType?: ("clfs" | "nfs3" | "unknown") | undefined;
	readonly unknown?: UnknownTarget | undefined;
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
