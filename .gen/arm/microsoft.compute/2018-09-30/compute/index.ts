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
	readonly managedBy?: string;
	readonly name: string;
	readonly properties?: DiskProperties;
	readonly sku?: DiskSku;
	readonly tags?: ResourceTags;
	readonly zones?: string[];
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
	readonly managedBy?: string;
	readonly name: string;
	readonly properties?: SnapshotProperties;
	readonly sku?: SnapshotSku;
	readonly tags?: ResourceTags;
}
export interface CreationData {
	readonly createOption: "Attach" | "Copy" | "Empty" | "FromImage" | "Import" | "Restore" | "Upload";
	readonly imageReference?: ImageDiskReference;
	readonly sourceResourceId?: string;
	readonly sourceUri?: string;
	readonly storageAccountId?: string;
}
export interface DiskProperties {
	readonly creationData: CreationData;
	readonly diskIOPSReadWrite?: number;
	readonly diskMBpsReadWrite?: number;
	readonly diskSizeGB?: number;
	readonly diskState?: "ActiveSAS" | "ActiveUpload" | "Attached" | "ReadyToUpload" | "Reserved" | "Unattached";
	readonly encryptionSettingsCollection?: EncryptionSettingsCollection;
	readonly hyperVGeneration?: "V1" | "V2";
	readonly osType?: "Linux";
	readonly provisioningState?: string;
	readonly timeCreated?: string;
}
export interface DiskSku {
	readonly name?: "Premium_LRS" | "StandardSSD_LRS" | "Standard_LRS" | "UltraSSD_LRS";
	readonly tier?: string;
}
export interface EncryptionSettingsCollection {
	readonly enabled: boolean;
	readonly encryptionSettings?: EncryptionSettingsElement[];
}
export interface EncryptionSettingsElement {
	readonly diskEncryptionKey?: KeyVaultAndSecretReference;
	readonly keyEncryptionKey?: KeyVaultAndKeyReference;
}
export interface ImageDiskReference {
	readonly id: string;
	readonly lun?: number;
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
	readonly [key: string]: string;
}
export interface SnapshotProperties {
	readonly creationData: CreationData;
	readonly diskSizeGB?: number;
	readonly encryptionSettingsCollection?: EncryptionSettingsCollection;
	readonly hyperVGeneration?: "V1" | "V2";
	readonly osType?: "Linux";
	readonly provisioningState?: string;
	readonly timeCreated?: string;
}
export interface SnapshotSku {
	readonly name?: "Premium_LRS" | "Standard_LRS" | "Standard_ZRS";
	readonly tier?: string;
}
export interface SourceVault {
	readonly id?: string;
}
export default {
	disks: disks,
	snapshots: snapshots,
};
