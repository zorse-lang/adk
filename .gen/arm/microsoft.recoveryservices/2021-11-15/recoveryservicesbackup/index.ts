import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class vaults_backupstorageconfig
	extends ArmResource<vaults_backupstorageconfigComponentInputs>
	implements vaults_backupstorageconfigComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_backupstorageconfigComponentInputs) {
		super(entity, options.name, "Microsoft.RecoveryServices/vaults/backupstorageconfig", "2021-11-15", options);
	}
	public readonly apiVersion: "2021-11-15";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/backupstorageconfig";
}
export interface vaults_backupstorageconfigComponentOutputs {
	readonly apiVersion: "2021-11-15";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/backupstorageconfig";
}
export interface vaults_backupstorageconfigComponentInputs {
	readonly eTag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: BackupResourceConfig;
	readonly tags?: ResourceTags;
}
export interface BackupResourceConfig {
	readonly crossRegionRestoreFlag?: boolean;
	readonly storageModelType?:
		| "GeoRedundant"
		| "Invalid"
		| "LocallyRedundant"
		| "ReadAccessGeoZoneRedundant"
		| "ZoneRedundant";
	readonly storageType?:
		| "GeoRedundant"
		| "Invalid"
		| "LocallyRedundant"
		| "ReadAccessGeoZoneRedundant"
		| "ZoneRedundant";
	readonly storageTypeState?: "Invalid" | "Locked" | "Unlocked";
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export default {
	"vaults/backupstorageconfig": vaults_backupstorageconfig,
};
