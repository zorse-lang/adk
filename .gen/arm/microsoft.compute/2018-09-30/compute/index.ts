import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class disks extends ArmResource<disksComponentInputs> implements disksComponentOutputs {
	constructor(entity: ADKEntity, options: disksComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/disks", "2018-09-30", options);
	}
	public readonly apiVersion: "2018-09-30";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/disks";
}
export interface disksComponentOutputs {
	readonly apiVersion: "2018-09-30";
	readonly id: string;
	readonly type: "Microsoft.Compute/disks";
}
export interface disksComponentInputs {
	readonly location: string;
	readonly managedBy?: string | undefined;
	readonly name: string;
	readonly properties?: DiskProperties | undefined;
	readonly sku?: DiskSku | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly zones?: string[] | undefined;
}
export class snapshots extends ArmResource<snapshotsComponentInputs> implements snapshotsComponentOutputs {
	constructor(entity: ADKEntity, options: snapshotsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/snapshots", "2018-09-30", options);
	}
	public readonly apiVersion: "2018-09-30";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/snapshots";
}
export interface snapshotsComponentOutputs {
	readonly apiVersion: "2018-09-30";
	readonly id: string;
	readonly type: "Microsoft.Compute/snapshots";
}
export interface snapshotsComponentInputs {
	readonly location: string;
	readonly managedBy?: string | undefined;
	readonly name: string;
	readonly properties?: SnapshotProperties | undefined;
	readonly sku?: SnapshotSku | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface CreationData {
	readonly createOption: "Attach" | "Copy" | "Empty" | "FromImage" | "Import" | "Restore" | "Upload";
	readonly imageReference?: ImageDiskReference | undefined;
	readonly sourceResourceId?: string | undefined;
	readonly sourceUri?: string | undefined;
	readonly storageAccountId?: string | undefined;
}
export interface DiskProperties {
	readonly creationData: CreationData;
	readonly diskIOPSReadWrite?: number | undefined;
	readonly diskMBpsReadWrite?: number | undefined;
	readonly diskSizeGB?: number | undefined;
	readonly diskState?:
		| ("ActiveSAS" | "ActiveUpload" | "Attached" | "ReadyToUpload" | "Reserved" | "Unattached")
		| undefined;
	readonly encryptionSettingsCollection?: EncryptionSettingsCollection | undefined;
	readonly hyperVGeneration?: ("V1" | "V2") | undefined;
	readonly osType?: "Linux" | undefined;
	readonly provisioningState?: string | undefined;
	readonly timeCreated?: string | undefined;
}
export interface DiskSku {
	readonly name?: ("Premium_LRS" | "StandardSSD_LRS" | "Standard_LRS" | "UltraSSD_LRS") | undefined;
	readonly tier?: string | undefined;
}
export interface EncryptionSettingsCollection {
	readonly enabled: boolean;
	readonly encryptionSettings?: EncryptionSettingsElement[] | undefined;
}
export interface EncryptionSettingsElement {
	readonly diskEncryptionKey?: KeyVaultAndSecretReference | undefined;
	readonly keyEncryptionKey?: KeyVaultAndKeyReference | undefined;
}
export interface ImageDiskReference {
	readonly id: string;
	readonly lun?: number | undefined;
}
export interface KeyVaultAndKeyReference {
	readonly keyUrl: string;
	readonly sourceVault: SourceVault;
}
export interface KeyVaultAndSecretReference {
	readonly secretUrl: string;
	readonly sourceVault: SourceVault;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SnapshotProperties {
	readonly creationData: CreationData;
	readonly diskSizeGB?: number | undefined;
	readonly encryptionSettingsCollection?: EncryptionSettingsCollection | undefined;
	readonly hyperVGeneration?: ("V1" | "V2") | undefined;
	readonly osType?: "Linux" | undefined;
	readonly provisioningState?: string | undefined;
	readonly timeCreated?: string | undefined;
}
export interface SnapshotSku {
	readonly name?: ("Premium_LRS" | "Standard_LRS" | "Standard_ZRS") | undefined;
	readonly tier?: string | undefined;
}
export interface SourceVault {
	readonly id?: string | undefined;
}
export default {
	disks: disks,
	snapshots: snapshots,
};
