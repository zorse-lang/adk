import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Instance extends GdmResource<InstanceComponentInputs> implements InstanceComponentOutputs {
	constructor(entity: ADKEntity, options: InstanceComponentInputs) {
		super(entity, options.name, "compute.v1.instance", options);
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
export interface InstanceComponentOutputs {
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
export interface InstanceComponentInputs {
	readonly advancedMachineFeatures?: AdvancedMachineFeatures;
	readonly canIpForward?: boolean;
	readonly confidentialInstanceConfig?: ConfidentialInstanceConfig;
	readonly deletionProtection?: boolean;
	readonly description?: string;
	readonly disks?: AttachedDisk[];
	readonly displayDevice?: DisplayDevice;
	readonly fingerprint?: string;
	readonly guestAccelerators?: AcceleratorConfig[];
	readonly hostname?: string;
	readonly keyRevocationActionType?: string;
	readonly labelFingerprint?: string;
	readonly labels?: { [P in string]: string };
	readonly machineType?: string;
	readonly metadata?: Metadata;
	readonly minCpuPlatform?: string;
	readonly name: string;
	readonly networkInterfaces?: NetworkInterface[];
	readonly networkPerformanceConfig?: NetworkPerformanceConfig;
	readonly params?: InstanceParams;
	readonly privateIpv6GoogleAccess?: string;
	readonly reservationAffinity?: ReservationAffinity;
	readonly resourcePolicies?: string[];
	readonly scheduling?: Scheduling;
	readonly serviceAccounts?: ServiceAccount[];
	readonly shieldedInstanceConfig?: ShieldedInstanceConfig;
	readonly shieldedInstanceIntegrityPolicy?: ShieldedInstanceIntegrityPolicy;
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
	readonly mode?: string;
	readonly shieldedInstanceInitialState?: InitialStateConfig;
	readonly source?: string;
	readonly type?: string;
}
export interface AttachedDiskInitializeParams {
	readonly architecture?: string;
	readonly description?: string;
	readonly diskName?: string;
	readonly diskSizeGb?: string;
	readonly diskType?: string;
	readonly labels?: { [P in string]: string };
	readonly licenses?: string[];
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
}
export interface Scheduling {
	readonly automaticRestart?: boolean;
	readonly instanceTerminationAction?: string;
	readonly locationHint?: string;
	readonly minNodeCpus?: number;
	readonly nodeAffinities?: SchedulingNodeAffinity[];
	readonly onHostMaintenance?: string;
	readonly preemptible?: boolean;
	readonly provisioningModel?: string;
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
export interface Tags {
	readonly fingerprint?: string;
	readonly items?: string[];
}
export default {
	Instance: Instance,
};
