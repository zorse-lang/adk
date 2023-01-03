import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class MachineImages extends GdmResource<MachineImagesComponentInputs> implements MachineImagesComponentOutputs {
	constructor(entity: ADKEntity, options: MachineImagesComponentInputs) {
		super(entity, options.name, "compute.beta.MachineImages", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly instanceProperties?: InstanceProperties | undefined;
	public readonly kind?: string | undefined;
	public readonly satisfiesPzs?: boolean | undefined;
	public readonly selfLink?: string | undefined;
	public readonly sourceInstanceProperties?: SourceInstanceProperties | undefined;
	public readonly status?: string | undefined;
	public readonly totalStorageBytes?: string | undefined;
}
export interface MachineImagesComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly instanceProperties?: InstanceProperties | undefined;
	readonly kind?: string | undefined;
	readonly satisfiesPzs?: boolean | undefined;
	readonly selfLink?: string | undefined;
	readonly sourceInstanceProperties?: SourceInstanceProperties | undefined;
	readonly status?: string | undefined;
	readonly totalStorageBytes?: string | undefined;
}
export interface MachineImagesComponentInputs {
	readonly description?: string | undefined;
	readonly guestFlush?: boolean | undefined;
	readonly machineImageEncryptionKey?: CustomerEncryptionKey | undefined;
	readonly name: string;
	readonly requestId?: string | undefined;
	readonly savedDisks?: SavedDisk[] | undefined;
	readonly sourceDiskEncryptionKeys?: SourceDiskEncryptionKey[] | undefined;
	readonly sourceInstance?: string | undefined;
	readonly storageLocations?: string[] | undefined;
	readonly type: string;
}
export interface AcceleratorConfig {
	readonly acceleratorCount?: number | undefined;
	readonly acceleratorType?: string | undefined;
}
export interface AccessConfig {
	readonly externalIpv6?: string | undefined;
	readonly externalIpv6PrefixLength?: number | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly natIP?: string | undefined;
	readonly networkTier?: string | undefined;
	readonly publicPtrDomainName?: string | undefined;
	readonly setPublicPtr?: boolean | undefined;
	readonly type?: string | undefined;
}
export interface AdvancedMachineFeatures {
	readonly enableNestedVirtualization?: boolean | undefined;
	readonly enableUefiNetworking?: boolean | undefined;
	readonly threadsPerCore?: number | undefined;
	readonly visibleCoreCount?: number | undefined;
}
export interface AliasIpRange {
	readonly ipCidrRange?: string | undefined;
	readonly subnetworkRangeName?: string | undefined;
}
export interface AttachedDisk {
	readonly architecture?: string | undefined;
	readonly autoDelete?: boolean | undefined;
	readonly boot?: boolean | undefined;
	readonly deviceName?: string | undefined;
	readonly diskEncryptionKey?: CustomerEncryptionKey | undefined;
	readonly diskSizeGb?: string | undefined;
	readonly forceAttach?: boolean | undefined;
	readonly guestOsFeatures?: GuestOsFeature[] | undefined;
	readonly index?: number | undefined;
	readonly initializeParams?: AttachedDiskInitializeParams | undefined;
	readonly interface?: string | undefined;
	readonly kind?: string | undefined;
	readonly licenses?: string[] | undefined;
	readonly locked?: boolean | undefined;
	readonly mode?: string | undefined;
	readonly shieldedInstanceInitialState?: InitialStateConfig | undefined;
	readonly source?: string | undefined;
	readonly type?: string | undefined;
	readonly userLicenses?: string[] | undefined;
}
export interface AttachedDiskInitializeParams {
	readonly architecture?: string | undefined;
	readonly description?: string | undefined;
	readonly diskName?: string | undefined;
	readonly diskSizeGb?: string | undefined;
	readonly diskType?: string | undefined;
	readonly guestOsFeatures?: GuestOsFeature[] | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly licenses?: string[] | undefined;
	readonly multiWriter?: boolean | undefined;
	readonly onUpdateAction?: string | undefined;
	readonly provisionedIops?: string | undefined;
	readonly resourceManagerTags?: { [P in string]: string } | undefined;
	readonly resourcePolicies?: string[] | undefined;
	readonly sourceImage?: string | undefined;
	readonly sourceImageEncryptionKey?: CustomerEncryptionKey | undefined;
	readonly sourceSnapshot?: string | undefined;
	readonly sourceSnapshotEncryptionKey?: CustomerEncryptionKey | undefined;
}
export interface ConfidentialInstanceConfig {
	readonly enableConfidentialCompute?: boolean | undefined;
}
export interface CustomerEncryptionKey {
	readonly kmsKeyName?: string | undefined;
	readonly kmsKeyServiceAccount?: string | undefined;
	readonly rawKey?: string | undefined;
	readonly rsaEncryptedKey?: string | undefined;
	readonly sha256?: string | undefined;
}
export interface DisplayDevice {
	readonly enableDisplay?: boolean | undefined;
}
export interface Duration {
	readonly nanos?: number | undefined;
	readonly seconds?: string | undefined;
}
export interface FileContentBuffer {
	readonly content?: string | undefined;
	readonly fileType?: string | undefined;
}
export interface GuestOsFeature {
	readonly type?: string | undefined;
}
export interface InitialStateConfig {
	readonly dbs?: FileContentBuffer[] | undefined;
	readonly dbxs?: FileContentBuffer[] | undefined;
	readonly keks?: FileContentBuffer[] | undefined;
	readonly pk?: FileContentBuffer | undefined;
}
export interface InstanceProperties {
	readonly advancedMachineFeatures?: AdvancedMachineFeatures | undefined;
	readonly canIpForward?: boolean | undefined;
	readonly confidentialInstanceConfig?: ConfidentialInstanceConfig | undefined;
	readonly description?: string | undefined;
	readonly disks?: AttachedDisk[] | undefined;
	readonly displayDevice?: DisplayDevice | undefined;
	readonly guestAccelerators?: AcceleratorConfig[] | undefined;
	readonly keyRevocationActionType?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly machineType?: string | undefined;
	readonly metadata?: Metadata | undefined;
	readonly minCpuPlatform?: string | undefined;
	readonly networkInterfaces?: NetworkInterface[] | undefined;
	readonly networkPerformanceConfig?: NetworkPerformanceConfig | undefined;
	readonly postKeyRevocationActionType?: string | undefined;
	readonly privateIpv6GoogleAccess?: string | undefined;
	readonly reservationAffinity?: ReservationAffinity | undefined;
	readonly resourceManagerTags?: { [P in string]: string } | undefined;
	readonly resourcePolicies?: string[] | undefined;
	readonly scheduling?: Scheduling | undefined;
	readonly serviceAccounts?: ServiceAccount[] | undefined;
	readonly shieldedInstanceConfig?: ShieldedInstanceConfig | undefined;
	readonly shieldedVmConfig?: ShieldedVmConfig | undefined;
	readonly tags?: Tags | undefined;
}
export interface MachineImage {
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly guestFlush?: boolean | undefined;
	readonly id?: string | undefined;
	readonly instanceProperties?: InstanceProperties | undefined;
	readonly kind?: string | undefined;
	readonly machineImageEncryptionKey?: CustomerEncryptionKey | undefined;
	readonly name?: string | undefined;
	readonly satisfiesPzs?: boolean | undefined;
	readonly savedDisks?: SavedDisk[] | undefined;
	readonly selfLink?: string | undefined;
	readonly sourceDiskEncryptionKeys?: SourceDiskEncryptionKey[] | undefined;
	readonly sourceInstance?: string | undefined;
	readonly sourceInstanceProperties?: SourceInstanceProperties | undefined;
	readonly status?: string | undefined;
	readonly storageLocations?: string[] | undefined;
	readonly totalStorageBytes?: string | undefined;
}
export interface Metadata {
	readonly fingerprint?: string | undefined;
	readonly items?: Array<{ key?: string; value?: string }> | undefined;
	readonly kind?: string | undefined;
}
export interface NetworkInterface {
	readonly accessConfigs?: AccessConfig[] | undefined;
	readonly aliasIpRanges?: AliasIpRange[] | undefined;
	readonly fingerprint?: string | undefined;
	readonly internalIpv6PrefixLength?: number | undefined;
	readonly ipv6AccessConfigs?: AccessConfig[] | undefined;
	readonly ipv6AccessType?: string | undefined;
	readonly ipv6Address?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly network?: string | undefined;
	readonly networkIP?: string | undefined;
	readonly nicType?: string | undefined;
	readonly queueCount?: number | undefined;
	readonly stackType?: string | undefined;
	readonly subnetwork?: string | undefined;
}
export interface NetworkPerformanceConfig {
	readonly totalEgressBandwidthTier?: string | undefined;
}
export interface ReservationAffinity {
	readonly consumeReservationType?: string | undefined;
	readonly key?: string | undefined;
	readonly values?: string[] | undefined;
}
export interface SavedAttachedDisk {
	readonly autoDelete?: boolean | undefined;
	readonly boot?: boolean | undefined;
	readonly deviceName?: string | undefined;
	readonly diskEncryptionKey?: CustomerEncryptionKey | undefined;
	readonly diskSizeGb?: string | undefined;
	readonly diskType?: string | undefined;
	readonly guestOsFeatures?: GuestOsFeature[] | undefined;
	readonly index?: number | undefined;
	readonly interface?: string | undefined;
	readonly kind?: string | undefined;
	readonly licenses?: string[] | undefined;
	readonly mode?: string | undefined;
	readonly source?: string | undefined;
	readonly storageBytes?: string | undefined;
	readonly storageBytesStatus?: string | undefined;
	readonly type?: string | undefined;
}
export interface SavedDisk {
	readonly architecture?: string | undefined;
	readonly kind?: string | undefined;
	readonly sourceDisk?: string | undefined;
	readonly storageBytes?: string | undefined;
	readonly storageBytesStatus?: string | undefined;
}
export interface Scheduling {
	readonly automaticRestart?: boolean | undefined;
	readonly hostErrorTimeoutSeconds?: number | undefined;
	readonly instanceTerminationAction?: string | undefined;
	readonly locationHint?: string | undefined;
	readonly maintenanceFreezeDurationHours?: number | undefined;
	readonly maintenanceInterval?: string | undefined;
	readonly maxRunDuration?: Duration | undefined;
	readonly minNodeCpus?: number | undefined;
	readonly nodeAffinities?: SchedulingNodeAffinity[] | undefined;
	readonly onHostMaintenance?: string | undefined;
	readonly preemptible?: boolean | undefined;
	readonly provisioningModel?: string | undefined;
	readonly terminationTime?: string | undefined;
}
export interface SchedulingNodeAffinity {
	readonly key?: string | undefined;
	readonly operator?: string | undefined;
	readonly values?: string[] | undefined;
}
export interface ServiceAccount {
	readonly email?: string | undefined;
	readonly scopes?: string[] | undefined;
}
export interface ShieldedInstanceConfig {
	readonly enableIntegrityMonitoring?: boolean | undefined;
	readonly enableSecureBoot?: boolean | undefined;
	readonly enableVtpm?: boolean | undefined;
}
export interface ShieldedVmConfig {
	readonly enableIntegrityMonitoring?: boolean | undefined;
	readonly enableSecureBoot?: boolean | undefined;
	readonly enableVtpm?: boolean | undefined;
}
export interface SourceDiskEncryptionKey {
	readonly diskEncryptionKey?: CustomerEncryptionKey | undefined;
	readonly sourceDisk?: string | undefined;
}
export interface SourceInstanceProperties {
	readonly canIpForward?: boolean | undefined;
	readonly deletionProtection?: boolean | undefined;
	readonly description?: string | undefined;
	readonly disks?: SavedAttachedDisk[] | undefined;
	readonly guestAccelerators?: AcceleratorConfig[] | undefined;
	readonly keyRevocationActionType?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly machineType?: string | undefined;
	readonly metadata?: Metadata | undefined;
	readonly minCpuPlatform?: string | undefined;
	readonly networkInterfaces?: NetworkInterface[] | undefined;
	readonly postKeyRevocationActionType?: string | undefined;
	readonly scheduling?: Scheduling | undefined;
	readonly serviceAccounts?: ServiceAccount[] | undefined;
	readonly tags?: Tags | undefined;
}
export interface Tags {
	readonly fingerprint?: string | undefined;
	readonly items?: string[] | undefined;
}
export default {
	MachineImages: MachineImages,
};
