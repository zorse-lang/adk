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
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: DiskAccessProperties | undefined;
	readonly tags?: ResourceTags | undefined;
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
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
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
	readonly identity?: EncryptionSetIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: EncryptionSetProperties | undefined;
	readonly tags?: ResourceTags | undefined;
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
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly location: string;
	readonly managedBy?: string | undefined;
	readonly managedByExtended?: string[] | undefined;
	readonly name: string;
	readonly properties?: DiskProperties | undefined;
	readonly sku?: DiskSku | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly zones?: string[] | undefined;
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
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly location: string;
	readonly managedBy?: string | undefined;
	readonly name: string;
	readonly properties?: SnapshotProperties | undefined;
	readonly sku?: SnapshotSku | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface ApiError {
	readonly code?: string | undefined;
	readonly details?: ApiErrorBase[] | undefined;
	readonly innererror?: InnerError | undefined;
	readonly message?: string | undefined;
	readonly target?: string | undefined;
}
export interface ApiErrorBase {
	readonly code?: string | undefined;
	readonly message?: string | undefined;
	readonly target?: string | undefined;
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
	readonly galleryImageReference?: ImageDiskReference | undefined;
	readonly imageReference?: ImageDiskReference | undefined;
	readonly logicalSectorSize?: number | undefined;
	readonly securityDataUri?: string | undefined;
	readonly sourceResourceId?: string | undefined;
	readonly sourceUniqueId?: string | undefined;
	readonly sourceUri?: string | undefined;
	readonly storageAccountId?: string | undefined;
	readonly uploadSizeBytes?: number | undefined;
}
export interface DiskAccessProperties {
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly timeCreated?: string | undefined;
}
export interface DiskProperties {
	readonly burstingEnabled?: boolean | undefined;
	readonly completionPercent?: number | undefined;
	readonly creationData: CreationData;
	readonly diskAccessId?: string | undefined;
	readonly diskIOPSReadOnly?: number | undefined;
	readonly diskIOPSReadWrite?: number | undefined;
	readonly diskMBpsReadOnly?: number | undefined;
	readonly diskMBpsReadWrite?: number | undefined;
	readonly diskSizeBytes?: number | undefined;
	readonly diskSizeGB?: number | undefined;
	readonly diskState?:
		| (
				| "ActiveSAS"
				| "ActiveSASFrozen"
				| "ActiveUpload"
				| "Attached"
				| "Frozen"
				| "ReadyToUpload"
				| "Reserved"
				| "Unattached"
		  )
		| undefined;
	readonly encryption?: Encryption | undefined;
	readonly encryptionSettingsCollection?: EncryptionSettingsCollection | undefined;
	readonly hyperVGeneration?: ("V1" | "V2") | undefined;
	readonly maxShares?: number | undefined;
	readonly networkAccessPolicy?: ("AllowAll" | "AllowPrivate" | "DenyAll") | undefined;
	readonly osType?: "Linux" | undefined;
	readonly propertyUpdatesInProgress?: PropertyUpdatesInProgress | undefined;
	readonly provisioningState?: string | undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
	readonly purchasePlan?: PurchasePlan | undefined;
	readonly securityProfile?: DiskSecurityProfile | undefined;
	readonly shareInfo?: ShareInfoElement[] | undefined;
	readonly supportedCapabilities?: SupportedCapabilities | undefined;
	readonly supportsHibernation?: boolean | undefined;
	readonly tier?: string | undefined;
	readonly timeCreated?: string | undefined;
	readonly uniqueId?: string | undefined;
}
export interface DiskSecurityProfile {
	readonly secureVMDiskEncryptionSetId?: string | undefined;
	readonly securityType?:
		| (
				| "ConfidentialVM_DiskEncryptedWithCustomerKey"
				| "ConfidentialVM_DiskEncryptedWithPlatformKey"
				| "ConfidentialVM_VMGuestStateOnlyEncryptedWithPlatformKey"
				| "TrustedLaunch"
		  )
		| undefined;
}
export interface DiskSku {
	readonly name?:
		| ("Premium_LRS" | "Premium_ZRS" | "StandardSSD_LRS" | "StandardSSD_ZRS" | "Standard_LRS" | "UltraSSD_LRS")
		| undefined;
	readonly tier?: string | undefined;
}
export interface Encryption {
	readonly diskEncryptionSetId?: string | undefined;
	readonly type?:
		| (
				| "EncryptionAtRestWithCustomerKey"
				| "EncryptionAtRestWithPlatformAndCustomerKeys"
				| "EncryptionAtRestWithPlatformKey"
		  )
		| undefined;
}
export interface EncryptionSetIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned") | undefined;
}
export interface EncryptionSetProperties {
	readonly activeKey?: KeyForDiskEncryptionSet | undefined;
	readonly autoKeyRotationError?: ApiError | undefined;
	readonly encryptionType?:
		| (
				| "ConfidentialVmEncryptedWithCustomerKey"
				| "EncryptionAtRestWithCustomerKey"
				| "EncryptionAtRestWithPlatformAndCustomerKeys"
		  )
		| undefined;
	readonly lastKeyRotationTimestamp?: string | undefined;
	readonly previousKeys?: KeyForDiskEncryptionSet[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly rotationToLatestKeyVersionEnabled?: boolean | undefined;
}
export interface EncryptionSettingsCollection {
	readonly enabled: boolean;
	readonly encryptionSettings?: EncryptionSettingsElement[] | undefined;
	readonly encryptionSettingsVersion?: string | undefined;
}
export interface EncryptionSettingsElement {
	readonly diskEncryptionKey?: KeyVaultAndSecretReference | undefined;
	readonly keyEncryptionKey?: KeyVaultAndKeyReference | undefined;
}
export interface ExtendedLocation {
	readonly name?: string | undefined;
	readonly type?: "EdgeZone" | undefined;
}
export interface ImageDiskReference {
	readonly id: string;
	readonly lun?: number | undefined;
}
export interface InnerError {
	readonly errordetail?: string | undefined;
	readonly exceptiontype?: string | undefined;
}
export interface KeyForDiskEncryptionSet {
	readonly keyUrl: string;
	readonly sourceVault?: SourceVault | undefined;
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
	readonly id?: string | undefined;
}
export interface PrivateEndpointConnection {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly type?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint | undefined;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded") | undefined;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string | undefined;
	readonly description?: string | undefined;
	readonly status?: ("Approved" | "Pending" | "Rejected") | undefined;
}
export interface PropertyUpdatesInProgress {
	readonly targetTier?: string | undefined;
}
export interface PurchasePlan {
	readonly name: string;
	readonly product: string;
	readonly promotionCode?: string | undefined;
	readonly publisher: string;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ShareInfoElement {
	readonly vmUri?: string | undefined;
}
export interface SnapshotProperties {
	readonly completionPercent?: number | undefined;
	readonly creationData: CreationData;
	readonly diskAccessId?: string | undefined;
	readonly diskSizeBytes?: number | undefined;
	readonly diskSizeGB?: number | undefined;
	readonly diskState?:
		| (
				| "ActiveSAS"
				| "ActiveSASFrozen"
				| "ActiveUpload"
				| "Attached"
				| "Frozen"
				| "ReadyToUpload"
				| "Reserved"
				| "Unattached"
		  )
		| undefined;
	readonly encryption?: Encryption | undefined;
	readonly encryptionSettingsCollection?: EncryptionSettingsCollection | undefined;
	readonly hyperVGeneration?: ("V1" | "V2") | undefined;
	readonly incremental?: boolean | undefined;
	readonly networkAccessPolicy?: ("AllowAll" | "AllowPrivate" | "DenyAll") | undefined;
	readonly osType?: "Linux" | undefined;
	readonly provisioningState?: string | undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
	readonly purchasePlan?: PurchasePlan | undefined;
	readonly securityProfile?: DiskSecurityProfile | undefined;
	readonly supportedCapabilities?: SupportedCapabilities | undefined;
	readonly supportsHibernation?: boolean | undefined;
	readonly timeCreated?: string | undefined;
	readonly uniqueId?: string | undefined;
}
export interface SnapshotSku {
	readonly name?: ("Premium_LRS" | "Standard_LRS" | "Standard_ZRS") | undefined;
	readonly tier?: string | undefined;
}
export interface SourceVault {
	readonly id?: string | undefined;
}
export interface SupportedCapabilities {
	readonly acceleratedNetwork?: boolean | undefined;
}
export default {
	diskAccesses: diskAccesses,
	"diskAccesses/privateEndpointConnections": diskAccesses_privateEndpointConnections,
	diskEncryptionSets: diskEncryptionSets,
	disks: disks,
	snapshots: snapshots,
};
