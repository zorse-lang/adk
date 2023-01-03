import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class InstanceTemplates
	extends GdmResource<InstanceTemplatesComponentInputs>
	implements InstanceTemplatesComponentOutputs
{
	constructor(entity: ADKEntity, options: InstanceTemplatesComponentInputs) {
		super(entity, options.name, "compute.alpha.InstanceTemplates", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly selfLinkWithId?: string | undefined;
}
export interface InstanceTemplatesComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
}
export interface InstanceTemplatesComponentInputs {
	readonly description?: string | undefined;
	readonly name: string;
	readonly requestId?: string | undefined;
	readonly sourceInstance?: string | undefined;
	readonly sourceInstanceParams?: SourceInstanceParams | undefined;
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
	readonly publicDnsName?: string | undefined;
	readonly publicPtrDomainName?: string | undefined;
	readonly securityPolicy?: string | undefined;
	readonly setPublicDns?: boolean | undefined;
	readonly setPublicPtr?: boolean | undefined;
	readonly type?: string | undefined;
}
export interface AdvancedMachineFeatures {
	readonly enableNestedVirtualization?: boolean | undefined;
	readonly enableUefiNetworking?: boolean | undefined;
	readonly numaNodeCount?: number | undefined;
	readonly performanceMonitoringUnit?: string | undefined;
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
	readonly savedState?: string | undefined;
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
	readonly interface?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly licenseCodes?: string[] | undefined;
	readonly licenses?: string[] | undefined;
	readonly multiWriter?: boolean | undefined;
	readonly onUpdateAction?: string | undefined;
	readonly provisionedIops?: string | undefined;
	readonly provisionedThroughput?: string | undefined;
	readonly replicaZones?: string[] | undefined;
	readonly resourceManagerTags?: { [P in string]: string } | undefined;
	readonly resourcePolicies?: string[] | undefined;
	readonly sourceImage?: string | undefined;
	readonly sourceImageEncryptionKey?: CustomerEncryptionKey | undefined;
	readonly sourceInstantSnapshot?: string | undefined;
	readonly sourceSnapshot?: string | undefined;
	readonly sourceSnapshotEncryptionKey?: CustomerEncryptionKey | undefined;
}
export interface ConfidentialInstanceConfig {
	readonly confidentialInstanceType?: string | undefined;
	readonly enableConfidentialCompute?: boolean | undefined;
}
export interface CustomerEncryptionKey {
	readonly kmsKeyName?: string | undefined;
	readonly kmsKeyServiceAccount?: string | undefined;
	readonly rawKey?: string | undefined;
	readonly rsaEncryptedKey?: string | undefined;
	readonly sha256?: string | undefined;
}
export interface DiskInstantiationConfig {
	readonly autoDelete?: boolean | undefined;
	readonly customImage?: string | undefined;
	readonly deviceName?: string | undefined;
	readonly instantiateFrom?: string | undefined;
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
	readonly secureTags?: string[] | undefined;
	readonly serviceAccounts?: ServiceAccount[] | undefined;
	readonly shieldedInstanceConfig?: ShieldedInstanceConfig | undefined;
	readonly shieldedVmConfig?: ShieldedVmConfig | undefined;
	readonly tags?: Tags | undefined;
}
export interface InstanceTemplate {
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: InstanceProperties | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly sourceInstance?: string | undefined;
	readonly sourceInstanceParams?: SourceInstanceParams | undefined;
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
	readonly networkAttachment?: string | undefined;
	readonly networkIP?: string | undefined;
	readonly nicType?: string | undefined;
	readonly queueCount?: number | undefined;
	readonly stackType?: string | undefined;
	readonly subinterfaces?: NetworkInterfaceSubInterface[] | undefined;
	readonly subnetwork?: string | undefined;
}
export interface NetworkInterfaceSubInterface {
	readonly ipAddress?: string | undefined;
	readonly ipAllocationMode?: string | undefined;
	readonly subnetwork?: string | undefined;
	readonly vlan?: number | undefined;
}
export interface NetworkPerformanceConfig {
	readonly externalIpEgressBandwidthTier?: string | undefined;
	readonly totalEgressBandwidthTier?: string | undefined;
}
export interface ReservationAffinity {
	readonly consumeReservationType?: string | undefined;
	readonly key?: string | undefined;
	readonly values?: string[] | undefined;
}
export interface Scheduling {
	readonly automaticRestart?: boolean | undefined;
	readonly availabilityDomain?: number | undefined;
	readonly currentCpus?: number | undefined;
	readonly currentMemoryMb?: string | undefined;
	readonly hostErrorTimeoutSeconds?: number | undefined;
	readonly instanceTerminationAction?: string | undefined;
	readonly latencyTolerant?: boolean | undefined;
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
export interface SourceInstanceParams {
	readonly diskConfigs?: DiskInstantiationConfig[] | undefined;
}
export interface Tags {
	readonly fingerprint?: string | undefined;
	readonly items?: string[] | undefined;
}
export default {
	InstanceTemplates: InstanceTemplates,
};
