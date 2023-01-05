import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class diskAccesses extends ArmResource<diskAccessesComponentInputs> implements diskAccessesComponentOutputs {
	constructor(entity: ADKEntity, options: diskAccessesComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/diskAccesses", "2021-08-01", options);
	}
	public readonly apiVersion: "2021-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/diskAccesses";
}
export interface diskAccessesComponentOutputs {
	readonly apiVersion: "2021-08-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/diskAccesses";
}
export interface diskAccessesComponentInputs {
	readonly extendedLocation?: ExtendedLocation;
	readonly location: string;
	readonly name: string;
	readonly properties?: DiskAccessProperties;
	readonly tags?: ResourceTags;
}
export class diskAccesses_privateEndpointConnections
	extends ArmResource<diskAccesses_privateEndpointConnectionsComponentInputs>
	implements diskAccesses_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: diskAccesses_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/diskAccesses/privateEndpointConnections", "2021-08-01", options);
	}
	public readonly apiVersion: "2021-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/diskAccesses/privateEndpointConnections";
}
export interface diskAccesses_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-08-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/diskAccesses/privateEndpointConnections";
}
export interface diskAccesses_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
}
export class diskEncryptionSets
	extends ArmResource<diskEncryptionSetsComponentInputs>
	implements diskEncryptionSetsComponentOutputs
{
	constructor(entity: ADKEntity, options: diskEncryptionSetsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/diskEncryptionSets", "2021-08-01", options);
	}
	public readonly apiVersion: "2021-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/diskEncryptionSets";
}
export interface diskEncryptionSetsComponentOutputs {
	readonly apiVersion: "2021-08-01";
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
		super(entity, options.name, "Microsoft.Compute/disks", "2021-08-01", options);
	}
	public readonly apiVersion: "2021-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/disks";
}
export interface disksComponentOutputs {
	readonly apiVersion: "2021-08-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/disks";
}
export interface disksComponentInputs {
	readonly extendedLocation?: ExtendedLocation;
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
		super(entity, options.name, "Microsoft.Compute/snapshots", "2021-08-01", options);
	}
	public readonly apiVersion: "2021-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/snapshots";
}
export interface snapshotsComponentOutputs {
	readonly apiVersion: "2021-08-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/snapshots";
}
export interface snapshotsComponentInputs {
	readonly extendedLocation?: ExtendedLocation;
	readonly location: string;
	readonly managedBy?: string;
	readonly name: string;
	readonly properties?: SnapshotProperties;
	readonly sku?: SnapshotSku;
	readonly tags?: ResourceTags;
}
export interface ApiError {
	readonly code?: string;
	readonly details?: ApiErrorBase[];
	readonly innererror?: InnerError;
	readonly message?: string;
	readonly target?: string;
}
export interface ApiErrorBase {
	readonly code?: string;
	readonly message?: string;
	readonly target?: string;
}
export interface CreationData {
	readonly createOption:
		| "Attach"
		| "Copy"
		| "CopyStart"
		| "Empty"
		| "FromImage"
		| "Import"
		| "ImportSecure"
		| "Restore"
		| "Upload"
		| "UploadPreparedSecure";
	readonly galleryImageReference?: ImageDiskReference;
	readonly imageReference?: ImageDiskReference;
	readonly logicalSectorSize?: number;
	readonly securityDataUri?: string;
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
	readonly burstingEnabled?: boolean;
	readonly completionPercent?: number;
	readonly creationData: CreationData;
	readonly diskAccessId?: string;
	readonly diskIOPSReadOnly?: number;
	readonly diskIOPSReadWrite?: number;
	readonly diskMBpsReadOnly?: number;
	readonly diskMBpsReadWrite?: number;
	readonly diskSizeBytes?: number;
	readonly diskSizeGB?: number;
	readonly diskState?:
		| "ActiveSAS"
		| "ActiveSASFrozen"
		| "ActiveUpload"
		| "Attached"
		| "Frozen"
		| "ReadyToUpload"
		| "Reserved"
		| "Unattached";
	readonly encryption?: Encryption;
	readonly encryptionSettingsCollection?: EncryptionSettingsCollection;
	readonly hyperVGeneration?: "V1" | "V2";
	readonly maxShares?: number;
	readonly networkAccessPolicy?: "AllowAll" | "AllowPrivate" | "DenyAll";
	readonly osType?: "Linux";
	readonly propertyUpdatesInProgress?: PropertyUpdatesInProgress;
	readonly provisioningState?: string;
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
	readonly purchasePlan?: PurchasePlan;
	readonly securityProfile?: DiskSecurityProfile;
	readonly shareInfo?: ShareInfoElement[];
	readonly supportedCapabilities?: SupportedCapabilities;
	readonly supportsHibernation?: boolean;
	readonly tier?: string;
	readonly timeCreated?: string;
	readonly uniqueId?: string;
}
export interface DiskSecurityProfile {
	readonly secureVMDiskEncryptionSetId?: string;
	readonly securityType?:
		| "ConfidentialVM_DiskEncryptedWithCustomerKey"
		| "ConfidentialVM_DiskEncryptedWithPlatformKey"
		| "ConfidentialVM_VMGuestStateOnlyEncryptedWithPlatformKey"
		| "TrustedLaunch";
}
export interface DiskSku {
	readonly name?:
		| "Premium_LRS"
		| "Premium_ZRS"
		| "StandardSSD_LRS"
		| "StandardSSD_ZRS"
		| "Standard_LRS"
		| "UltraSSD_LRS";
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
	readonly type?: "None" | "SystemAssigned";
}
export interface EncryptionSetProperties {
	readonly activeKey?: KeyForDiskEncryptionSet;
	readonly autoKeyRotationError?: ApiError;
	readonly encryptionType?:
		| "ConfidentialVmEncryptedWithCustomerKey"
		| "EncryptionAtRestWithCustomerKey"
		| "EncryptionAtRestWithPlatformAndCustomerKeys";
	readonly lastKeyRotationTimestamp?: string;
	readonly previousKeys?: KeyForDiskEncryptionSet[];
	readonly provisioningState?: string;
	readonly rotationToLatestKeyVersionEnabled?: boolean;
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
export interface ExtendedLocation {
	readonly name?: string;
	readonly type?: "EdgeZone";
}
export interface ImageDiskReference {
	readonly id: string;
	readonly lun?: number;
}
export interface InnerError {
	readonly errordetail?: string;
	readonly exceptiontype?: string;
}
export interface KeyForDiskEncryptionSet {
	readonly keyUrl: string;
	readonly sourceVault?: SourceVault;
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
export interface PropertyUpdatesInProgress {
	readonly targetTier?: string;
}
export interface PurchasePlan {
	readonly name: string;
	readonly product: string;
	readonly promotionCode?: string;
	readonly publisher: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface ShareInfoElement {
	readonly vmUri?: string;
}
export interface SnapshotProperties {
	readonly completionPercent?: number;
	readonly creationData: CreationData;
	readonly diskAccessId?: string;
	readonly diskSizeBytes?: number;
	readonly diskSizeGB?: number;
	readonly diskState?:
		| "ActiveSAS"
		| "ActiveSASFrozen"
		| "ActiveUpload"
		| "Attached"
		| "Frozen"
		| "ReadyToUpload"
		| "Reserved"
		| "Unattached";
	readonly encryption?: Encryption;
	readonly encryptionSettingsCollection?: EncryptionSettingsCollection;
	readonly hyperVGeneration?: "V1" | "V2";
	readonly incremental?: boolean;
	readonly networkAccessPolicy?: "AllowAll" | "AllowPrivate" | "DenyAll";
	readonly osType?: "Linux";
	readonly provisioningState?: string;
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
	readonly purchasePlan?: PurchasePlan;
	readonly securityProfile?: DiskSecurityProfile;
	readonly supportedCapabilities?: SupportedCapabilities;
	readonly supportsHibernation?: boolean;
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
export interface SupportedCapabilities {
	readonly acceleratedNetwork?: boolean;
}
export default {
	diskAccesses: diskAccesses,
	"diskAccesses/privateEndpointConnections": diskAccesses_privateEndpointConnections,
	diskEncryptionSets: diskEncryptionSets,
	disks: disks,
	snapshots: snapshots,
};
