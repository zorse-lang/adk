import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class diskAccesses extends ArmResource<diskAccessesComponentInputs> implements diskAccessesComponentOutputs {
	constructor(entity: ADKEntity, options: diskAccessesComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/diskAccesses", "2020-05-01", options);
	}
	public readonly apiVersion: "2020-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/diskAccesses";
}
export interface diskAccessesComponentOutputs {
	readonly apiVersion: "2020-05-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/diskAccesses";
}
export interface diskAccessesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: DiskAccessProperties;
	readonly tags?: ResourceTags;
}
export class diskEncryptionSets
	extends ArmResource<diskEncryptionSetsComponentInputs>
	implements diskEncryptionSetsComponentOutputs
{
	constructor(entity: ADKEntity, options: diskEncryptionSetsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/diskEncryptionSets", "2020-05-01", options);
	}
	public readonly apiVersion: "2020-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/diskEncryptionSets";
}
export interface diskEncryptionSetsComponentOutputs {
	readonly apiVersion: "2020-05-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/diskEncryptionSets";
}
export interface diskEncryptionSetsComponentInputs {
	readonly identity?: EncryptionSetIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties?: EncryptionSetProperties;
	readonly tags?: ResourceTags;
}
export class disks extends ArmResource<disksComponentInputs> implements disksComponentOutputs {
	constructor(entity: ADKEntity, options: disksComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/disks", "2020-05-01", options);
	}
	public readonly apiVersion: "2020-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/disks";
}
export interface disksComponentOutputs {
	readonly apiVersion: "2020-05-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/disks";
}
export interface disksComponentInputs {
	readonly location: string;
	readonly managedBy?: string;
	readonly managedByExtended?: string[];
	readonly name: string;
	readonly properties?: DiskProperties;
	readonly sku?: DiskSku;
	readonly tags?: ResourceTags;
	readonly zones?: string[];
}
export class snapshots extends ArmResource<snapshotsComponentInputs> implements snapshotsComponentOutputs {
	constructor(entity: ADKEntity, options: snapshotsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/snapshots", "2020-05-01", options);
	}
	public readonly apiVersion: "2020-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/snapshots";
}
export interface snapshotsComponentOutputs {
	readonly apiVersion: "2020-05-01";
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
	readonly galleryImageReference?: ImageDiskReference;
	readonly imageReference?: ImageDiskReference;
	readonly sourceResourceId?: string;
	readonly sourceUniqueId?: string;
	readonly sourceUri?: string;
	readonly storageAccountId?: string;
	readonly uploadSizeBytes?: number;
}
export interface DiskAccessProperties {
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly provisioningState?: string;
	readonly timeCreated?: string;
}
export interface DiskProperties {
	readonly creationData: CreationData;
	readonly diskAccessId?: string;
	readonly diskIOPSReadOnly?: number;
	readonly diskIOPSReadWrite?: number;
	readonly diskMBpsReadOnly?: number;
	readonly diskMBpsReadWrite?: number;
	readonly diskSizeBytes?: number;
	readonly diskSizeGB?: number;
	readonly diskState?: "ActiveSAS" | "ActiveUpload" | "Attached" | "ReadyToUpload" | "Reserved" | "Unattached";
	readonly encryption?: Encryption;
	readonly encryptionSettingsCollection?: EncryptionSettingsCollection;
	readonly hyperVGeneration?: "V1" | "V2";
	readonly maxShares?: number;
	readonly networkAccessPolicy?: "AllowAll" | "AllowPrivate" | "DenyAll";
	readonly osType?: "Linux";
	readonly provisioningState?: string;
	readonly shareInfo?: ShareInfoElement[];
	readonly timeCreated?: string;
	readonly uniqueId?: string;
}
export interface DiskSku {
	readonly name?: "Premium_LRS" | "StandardSSD_LRS" | "Standard_LRS" | "UltraSSD_LRS";
	readonly tier?: string;
}
export interface Encryption {
	readonly diskEncryptionSetId?: string;
	readonly type?:
		| "EncryptionAtRestWithCustomerKey"
		| "EncryptionAtRestWithPlatformAndCustomerKeys"
		| "EncryptionAtRestWithPlatformKey";
}
export interface EncryptionSetIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "SystemAssigned";
}
export interface EncryptionSetProperties {
	readonly activeKey?: KeyVaultAndKeyReference;
	readonly encryptionType?:
		| "EncryptionAtRestWithCustomerKey"
		| "EncryptionAtRestWithPlatformAndCustomerKeys"
		| "EncryptionAtRestWithPlatformKey";
	readonly previousKeys?: KeyVaultAndKeyReference[];
	readonly provisioningState?: string;
}
export interface EncryptionSettingsCollection {
	readonly enabled: boolean;
	readonly encryptionSettings?: EncryptionSettingsElement[];
	readonly encryptionSettingsVersion?: string;
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
export interface PrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointConnection {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly type?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded";
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: "Approved" | "Pending" | "Rejected";
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface ShareInfoElement {
	readonly vmUri?: string;
}
export interface SnapshotProperties {
	readonly creationData: CreationData;
	readonly diskAccessId?: string;
	readonly diskSizeBytes?: number;
	readonly diskSizeGB?: number;
	readonly encryption?: Encryption;
	readonly encryptionSettingsCollection?: EncryptionSettingsCollection;
	readonly hyperVGeneration?: "V1" | "V2";
	readonly incremental?: boolean;
	readonly networkAccessPolicy?: "AllowAll" | "AllowPrivate" | "DenyAll";
	readonly osType?: "Linux";
	readonly provisioningState?: string;
	readonly timeCreated?: string;
	readonly uniqueId?: string;
}
export interface SnapshotSku {
	readonly name?: "Premium_LRS" | "Standard_LRS" | "Standard_ZRS";
	readonly tier?: string;
}
export interface SourceVault {
	readonly id?: string;
}
export default {
	diskAccesses: diskAccesses,
	diskEncryptionSets: diskEncryptionSets,
	disks: disks,
	snapshots: snapshots,
};
