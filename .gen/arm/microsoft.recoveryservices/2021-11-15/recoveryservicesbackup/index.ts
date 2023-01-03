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
	readonly eTag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: BackupResourceConfig | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface BackupResourceConfig {
	readonly crossRegionRestoreFlag?: boolean | undefined;
	readonly storageModelType?:
		| ("GeoRedundant" | "Invalid" | "LocallyRedundant" | "ReadAccessGeoZoneRedundant" | "ZoneRedundant")
		| undefined;
	readonly storageType?:
		| ("GeoRedundant" | "Invalid" | "LocallyRedundant" | "ReadAccessGeoZoneRedundant" | "ZoneRedundant")
		| undefined;
	readonly storageTypeState?: ("Invalid" | "Locked" | "Unlocked") | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	"vaults/backupstorageconfig": vaults_backupstorageconfig,
};
