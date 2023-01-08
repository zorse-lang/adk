import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Instances extends GdmResource<InstancesComponentInputs> implements InstancesComponentOutputs {
	constructor(entity: ADKEntity, options: InstancesComponentInputs) {
		super(entity, options.name, "compute.beta.Instances", options);
	}
	public readonly cpuPlatform?: string;
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly lastStartTimestamp?: string;
	public readonly lastStopTimestamp?: string;
	public readonly lastSuspendedTimestamp?: string;
	public readonly resourceStatus?: ResourceStatus;
	public readonly satisfiesPzs?: boolean;
	public readonly selfLink?: string;
	public readonly startRestricted?: boolean;
	public readonly status?: string;
	public readonly statusMessage?: string;
	public readonly zone?: string;
}
export interface InstancesComponentOutputs {
	readonly cpuPlatform?: string;
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly lastStartTimestamp?: string;
	readonly lastStopTimestamp?: string;
	readonly lastSuspendedTimestamp?: string;
	readonly resourceStatus?: ResourceStatus;
	readonly satisfiesPzs?: boolean;
	readonly selfLink?: string;
	readonly startRestricted?: boolean;
	readonly status?: string;
	readonly statusMessage?: string;
	readonly zone?: string;
}
export interface InstancesComponentInputs {
	readonly advancedMachineFeatures?: AdvancedMachineFeatures;
	readonly canIpForward?: boolean;
	readonly confidentialInstanceConfig?: ConfidentialInstanceConfig;
	readonly deletionProtection?: boolean;
	readonly description?: string;
	readonly disks?: AttachedDisk[];
	readonly displayDevice?: DisplayDevice;
	readonly eraseWindowsVssSignature?: boolean;
	readonly fingerprint?: string;
	readonly guestAccelerators?: AcceleratorConfig[];
	readonly hostname?: string;
	readonly instanceEncryptionKey?: CustomerEncryptionKey;
	readonly keyRevocationActionType?: string;
	readonly labelFingerprint?: string;
	readonly labels?: { [P in string]: string };
	readonly machineType?: string;
	readonly metadata?: Metadata;
	readonly minCpuPlatform?: string;
	readonly mostDisruptiveAllowedAction?: string;
	readonly name: string;
	readonly networkInterfaces?: NetworkInterface[];
	readonly networkPerformanceConfig?: NetworkPerformanceConfig;
	readonly params?: InstanceParams;
	readonly postKeyRevocationActionType?: string;
	readonly privateIpv6GoogleAccess?: string;
	readonly requestId?: string;
	readonly reservationAffinity?: ReservationAffinity;
	readonly resourcePolicies?: string[];
	readonly scheduling?: Scheduling;
	readonly serviceAccounts?: ServiceAccount[];
	readonly shieldedInstanceConfig?: ShieldedInstanceConfig;
	readonly shieldedInstanceIntegrityPolicy?: ShieldedInstanceIntegrityPolicy;
	readonly shieldedVmConfig?: ShieldedVmConfig;
	readonly shieldedVmIntegrityPolicy?: ShieldedVmIntegrityPolicy;
	readonly sourceInstanceTemplate?: string;
	readonly sourceMachineImage?: string;
	readonly sourceMachineImageEncryptionKey?: CustomerEncryptionKey;
	readonly tags?: Tags;
}
export interface AcceleratorConfig {
	readonly acceleratorCount?: number;
	readonly acceleratorType?: string;
}
export interface AccessConfig {
	readonly externalIpv6?: string;
	readonly externalIpv6PrefixLength?: number;
	readonly kind?: string;
	readonly name?: string;
	readonly natIP?: string;
	readonly networkTier?: string;
	readonly publicPtrDomainName?: string;
	readonly setPublicPtr?: boolean;
	readonly type?: string;
}
export interface AdvancedMachineFeatures {
	readonly enableNestedVirtualization?: boolean;
	readonly enableUefiNetworking?: boolean;
	readonly threadsPerCore?: number;
	readonly visibleCoreCount?: number;
}
export interface AliasIpRange {
	readonly ipCidrRange?: string;
	readonly subnetworkRangeName?: string;
}
export interface AttachedDisk {
	readonly architecture?: string;
	readonly autoDelete?: boolean;
	readonly boot?: boolean;
	readonly deviceName?: string;
	readonly diskEncryptionKey?: CustomerEncryptionKey;
	readonly diskSizeGb?: string;
	readonly forceAttach?: boolean;
	readonly guestOsFeatures?: GuestOsFeature[];
	readonly index?: number;
	readonly initializeParams?: AttachedDiskInitializeParams;
	readonly interface?: string;
	readonly kind?: string;
	readonly licenses?: string[];
	readonly locked?: boolean;
	readonly mode?: string;
	readonly shieldedInstanceInitialState?: InitialStateConfig;
	readonly source?: string;
	readonly type?: string;
	readonly userLicenses?: string[];
}
export interface AttachedDiskInitializeParams {
	readonly architecture?: string;
	readonly description?: string;
	readonly diskName?: string;
	readonly diskSizeGb?: string;
	readonly diskType?: string;
	readonly guestOsFeatures?: GuestOsFeature[];
	readonly labels?: { [P in string]: string };
	readonly licenses?: string[];
	readonly multiWriter?: boolean;
	readonly onUpdateAction?: string;
	readonly provisionedIops?: string;
	readonly resourceManagerTags?: { [P in string]: string };
	readonly resourcePolicies?: string[];
	readonly sourceImage?: string;
	readonly sourceImageEncryptionKey?: CustomerEncryptionKey;
	readonly sourceSnapshot?: string;
	readonly sourceSnapshotEncryptionKey?: CustomerEncryptionKey;
}
export interface ConfidentialInstanceConfig {
	readonly enableConfidentialCompute?: boolean;
}
export interface CustomerEncryptionKey {
	readonly kmsKeyName?: string;
	readonly kmsKeyServiceAccount?: string;
	readonly rawKey?: string;
	readonly rsaEncryptedKey?: string;
	readonly sha256?: string;
}
export interface DisplayDevice {
	readonly enableDisplay?: boolean;
}
export interface Duration {
	readonly nanos?: number;
	readonly seconds?: string;
}
export interface FileContentBuffer {
	readonly content?: string;
	readonly fileType?: string;
}
export interface GuestOsFeature {
	readonly type?: string;
}
export interface InitialStateConfig {
	readonly dbs?: FileContentBuffer[];
	readonly dbxs?: FileContentBuffer[];
	readonly keks?: FileContentBuffer[];
	readonly pk?: FileContentBuffer;
}
export interface Instance {
	readonly advancedMachineFeatures?: AdvancedMachineFeatures;
	readonly canIpForward?: boolean;
	readonly confidentialInstanceConfig?: ConfidentialInstanceConfig;
	readonly cpuPlatform?: string;
	readonly creationTimestamp?: string;
	readonly deletionProtection?: boolean;
	readonly description?: string;
	readonly disks?: AttachedDisk[];
	readonly displayDevice?: DisplayDevice;
	readonly eraseWindowsVssSignature?: boolean;
	readonly fingerprint?: string;
	readonly guestAccelerators?: AcceleratorConfig[];
	readonly hostname?: string;
	readonly id?: string;
	readonly instanceEncryptionKey?: CustomerEncryptionKey;
	readonly keyRevocationActionType?: string;
	readonly kind?: string;
	readonly labelFingerprint?: string;
	readonly labels?: { [P in string]: string };
	readonly lastStartTimestamp?: string;
	readonly lastStopTimestamp?: string;
	readonly lastSuspendedTimestamp?: string;
	readonly machineType?: string;
	readonly metadata?: Metadata;
	readonly minCpuPlatform?: string;
	readonly name?: string;
	readonly networkInterfaces?: NetworkInterface[];
	readonly networkPerformanceConfig?: NetworkPerformanceConfig;
	readonly params?: InstanceParams;
	readonly postKeyRevocationActionType?: string;
	readonly privateIpv6GoogleAccess?: string;
	readonly reservationAffinity?: ReservationAffinity;
	readonly resourcePolicies?: string[];
	readonly resourceStatus?: ResourceStatus;
	readonly satisfiesPzs?: boolean;
	readonly scheduling?: Scheduling;
	readonly selfLink?: string;
	readonly serviceAccounts?: ServiceAccount[];
	readonly shieldedInstanceConfig?: ShieldedInstanceConfig;
	readonly shieldedInstanceIntegrityPolicy?: ShieldedInstanceIntegrityPolicy;
	readonly shieldedVmConfig?: ShieldedVmConfig;
	readonly shieldedVmIntegrityPolicy?: ShieldedVmIntegrityPolicy;
	readonly sourceMachineImage?: string;
	readonly sourceMachineImageEncryptionKey?: CustomerEncryptionKey;
	readonly startRestricted?: boolean;
	readonly status?: string;
	readonly statusMessage?: string;
	readonly tags?: Tags;
	readonly zone?: string;
}
export interface InstanceParams {
	readonly resourceManagerTags?: { [P in string]: string };
}
export interface Metadata {
	readonly fingerprint?: string;
	readonly items?: Array<{ key?: string; value?: string }>;
	readonly kind?: string;
}
export interface NetworkInterface {
	readonly accessConfigs?: AccessConfig[];
	readonly aliasIpRanges?: AliasIpRange[];
	readonly fingerprint?: string;
	readonly internalIpv6PrefixLength?: number;
	readonly ipv6AccessConfigs?: AccessConfig[];
	readonly ipv6AccessType?: string;
	readonly ipv6Address?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly network?: string;
	readonly networkIP?: string;
	readonly nicType?: string;
	readonly queueCount?: number;
	readonly stackType?: string;
	readonly subnetwork?: string;
}
export interface NetworkPerformanceConfig {
	readonly totalEgressBandwidthTier?: string;
}
export interface ReservationAffinity {
	readonly consumeReservationType?: string;
	readonly key?: string;
	readonly values?: string[];
}
export interface ResourceStatus {
	readonly physicalHost?: string;
	readonly scheduling?: ResourceStatusScheduling;
}
export interface ResourceStatusScheduling {
	readonly terminationTimestamp?: string;
}
export interface Scheduling {
	readonly automaticRestart?: boolean;
	readonly hostErrorTimeoutSeconds?: number;
	readonly instanceTerminationAction?: string;
	readonly locationHint?: string;
	readonly maintenanceFreezeDurationHours?: number;
	readonly maintenanceInterval?: string;
	readonly maxRunDuration?: Duration;
	readonly minNodeCpus?: number;
	readonly nodeAffinities?: SchedulingNodeAffinity[];
	readonly onHostMaintenance?: string;
	readonly preemptible?: boolean;
	readonly provisioningModel?: string;
	readonly terminationTime?: string;
}
export interface SchedulingNodeAffinity {
	readonly key?: string;
	readonly operator?: string;
	readonly values?: string[];
}
export interface ServiceAccount {
	readonly email?: string;
	readonly scopes?: string[];
}
export interface ShieldedInstanceConfig {
	readonly enableIntegrityMonitoring?: boolean;
	readonly enableSecureBoot?: boolean;
	readonly enableVtpm?: boolean;
}
export interface ShieldedInstanceIntegrityPolicy {
	readonly updateAutoLearnPolicy?: boolean;
}
export interface ShieldedVmConfig {
	readonly enableIntegrityMonitoring?: boolean;
	readonly enableSecureBoot?: boolean;
	readonly enableVtpm?: boolean;
}
export interface ShieldedVmIntegrityPolicy {
	readonly updateAutoLearnPolicy?: boolean;
}
export interface Tags {
	readonly fingerprint?: string;
	readonly items?: string[];
}
export default {
	Instances: Instances,
};