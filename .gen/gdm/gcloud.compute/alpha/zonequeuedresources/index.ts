import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ZoneQueuedResources
	extends GdmResource<ZoneQueuedResourcesComponentInputs>
	implements ZoneQueuedResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: ZoneQueuedResourcesComponentInputs) {
		super(entity, options.name, "compute.alpha.ZoneQueuedResources", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
	public readonly state?: string;
	public readonly status?: QueuedResourceStatus;
	public readonly zone?: string;
}
export interface ZoneQueuedResourcesComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly state?: string;
	readonly status?: QueuedResourceStatus;
	readonly zone?: string;
}
export interface ZoneQueuedResourcesComponentInputs {
	readonly bulkInsertInstanceResource?: BulkInsertInstanceResource;
	readonly description?: string;
	readonly name: string;
	readonly queuingPolicy?: QueuingPolicy;
	readonly requestId?: string;
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
	readonly publicDnsName?: string;
	readonly publicPtrDomainName?: string;
	readonly securityPolicy?: string;
	readonly setPublicDns?: boolean;
	readonly setPublicPtr?: boolean;
	readonly type?: string;
}
export interface AdvancedMachineFeatures {
	readonly enableNestedVirtualization?: boolean;
	readonly enableUefiNetworking?: boolean;
	readonly numaNodeCount?: number;
	readonly performanceMonitoringUnit?: string;
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
	readonly savedState?: string;
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
	readonly interface?: string;
	readonly labels?: { [P in string]: string };
	readonly licenseCodes?: string[];
	readonly licenses?: string[];
	readonly multiWriter?: boolean;
	readonly onUpdateAction?: string;
	readonly provisionedIops?: string;
	readonly provisionedThroughput?: string;
	readonly replicaZones?: string[];
	readonly resourceManagerTags?: { [P in string]: string };
	readonly resourcePolicies?: string[];
	readonly sourceImage?: string;
	readonly sourceImageEncryptionKey?: CustomerEncryptionKey;
	readonly sourceInstantSnapshot?: string;
	readonly sourceSnapshot?: string;
	readonly sourceSnapshotEncryptionKey?: CustomerEncryptionKey;
}
export interface BulkInsertInstanceResource {
	readonly count?: string;
	readonly instance?: Instance;
	readonly instanceProperties?: InstanceProperties;
	readonly locationPolicy?: LocationPolicy;
	readonly minCount?: string;
	readonly namePattern?: string;
	readonly perInstanceProperties?: { [P in string]: BulkInsertInstanceResourcePerInstanceProperties };
	readonly sourceInstanceTemplate?: string;
}
export interface BulkInsertInstanceResourcePerInstanceProperties {
	readonly name?: string;
}
export interface ConfidentialInstanceConfig {
	readonly confidentialInstanceType?: string;
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
export interface ErrorInfo {
	readonly domain?: string;
	readonly metadatas?: { [P in string]: string };
	readonly reason?: string;
}
export interface FileContentBuffer {
	readonly content?: string;
	readonly fileType?: string;
}
export interface GuestOsFeature {
	readonly type?: string;
}
export interface Help {
	readonly links?: HelpLink[];
}
export interface HelpLink {
	readonly description?: string;
	readonly url?: string;
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
	readonly preservedStateSizeGb?: string;
	readonly privateIpv6GoogleAccess?: string;
	readonly reservationAffinity?: ReservationAffinity;
	readonly resourcePolicies?: string[];
	readonly resourceStatus?: ResourceStatus;
	readonly satisfiesPzs?: boolean;
	readonly scheduling?: Scheduling;
	readonly secureTags?: string[];
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
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
	readonly upcomingMaintenance?: UpcomingMaintenance;
	readonly zone?: string;
}
export interface InstanceParams {
	readonly resourceManagerTags?: { [P in string]: string };
}
export interface InstanceProperties {
	readonly advancedMachineFeatures?: AdvancedMachineFeatures;
	readonly canIpForward?: boolean;
	readonly confidentialInstanceConfig?: ConfidentialInstanceConfig;
	readonly description?: string;
	readonly disks?: AttachedDisk[];
	readonly displayDevice?: DisplayDevice;
	readonly guestAccelerators?: AcceleratorConfig[];
	readonly keyRevocationActionType?: string;
	readonly labels?: { [P in string]: string };
	readonly machineType?: string;
	readonly metadata?: Metadata;
	readonly minCpuPlatform?: string;
	readonly networkInterfaces?: NetworkInterface[];
	readonly networkPerformanceConfig?: NetworkPerformanceConfig;
	readonly postKeyRevocationActionType?: string;
	readonly privateIpv6GoogleAccess?: string;
	readonly reservationAffinity?: ReservationAffinity;
	readonly resourceManagerTags?: { [P in string]: string };
	readonly resourcePolicies?: string[];
	readonly scheduling?: Scheduling;
	readonly secureTags?: string[];
	readonly serviceAccounts?: ServiceAccount[];
	readonly shieldedInstanceConfig?: ShieldedInstanceConfig;
	readonly shieldedVmConfig?: ShieldedVmConfig;
	readonly tags?: Tags;
}
export interface LocalizedMessage {
	readonly locale?: string;
	readonly message?: string;
}
export interface LocationPolicy {
	readonly locations?: { [P in string]: LocationPolicyLocation };
	readonly targetShape?: string;
}
export interface LocationPolicyLocation {
	readonly constraints?: LocationPolicyLocationConstraints;
	readonly names?: string[];
	readonly preference?: string;
}
export interface LocationPolicyLocationConstraints {
	readonly maxCount?: number;
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
	readonly networkAttachment?: string;
	readonly networkIP?: string;
	readonly nicType?: string;
	readonly queueCount?: number;
	readonly stackType?: string;
	readonly subinterfaces?: NetworkInterfaceSubInterface[];
	readonly subnetwork?: string;
}
export interface NetworkInterfaceSubInterface {
	readonly ipAddress?: string;
	readonly ipAllocationMode?: string;
	readonly subnetwork?: string;
	readonly vlan?: number;
}
export interface NetworkPerformanceConfig {
	readonly externalIpEgressBandwidthTier?: string;
	readonly totalEgressBandwidthTier?: string;
}
export interface QueuedResource {
	readonly bulkInsertInstanceResource?: BulkInsertInstanceResource;
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly queuingPolicy?: QueuingPolicy;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly state?: string;
	readonly status?: QueuedResourceStatus;
	readonly zone?: string;
}
export interface QueuedResourceStatus {
	readonly failedData?: QueuedResourceStatusFailedData;
	readonly provisioningOperations?: string[];
	readonly queuingPolicy?: QueuingPolicy;
}
export interface QueuedResourceStatusFailedData {
	readonly error?: {
		errors?: Array<{
			code?: string;
			errorDetails?: Array<{
				errorInfo?: ErrorInfo;
				help?: Help;
				localizedMessage?: LocalizedMessage;
				quotaInfo?: QuotaExceededInfo;
			}>;
			location?: string;
			message?: string;
		}>;
	};
}
export interface QueuingPolicy {
	readonly validUntilDuration?: Duration;
	readonly validUntilTime?: string;
}
export interface QuotaExceededInfo {
	readonly dimensions?: { [P in string]: string };
	readonly limit?: number;
	readonly limitName?: string;
	readonly metricName?: string;
}
export interface ReservationAffinity {
	readonly consumeReservationType?: string;
	readonly key?: string;
	readonly values?: string[];
}
export interface ResourceStatus {
	readonly physicalHost?: string;
	readonly scheduling?: ResourceStatusScheduling;
	readonly upcomingMaintenance?: ResourceStatusUpcomingMaintenance;
}
export interface ResourceStatusScheduling {
	readonly availabilityDomain?: number;
	readonly terminationTimestamp?: string;
}
export interface ResourceStatusUpcomingMaintenance {
	readonly canReschedule?: boolean;
}
export interface Scheduling {
	readonly automaticRestart?: boolean;
	readonly availabilityDomain?: number;
	readonly currentCpus?: number;
	readonly currentMemoryMb?: string;
	readonly hostErrorTimeoutSeconds?: number;
	readonly instanceTerminationAction?: string;
	readonly latencyTolerant?: boolean;
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
export interface UpcomingMaintenance {
	readonly canReschedule?: boolean;
	readonly date?: string;
	readonly startTimeWindow?: UpcomingMaintenanceTimeWindow;
	readonly time?: string;
	readonly type?: string;
}
export interface UpcomingMaintenanceTimeWindow {
	readonly earliest?: string;
	readonly latest?: string;
}
export default {
	ZoneQueuedResources: ZoneQueuedResources,
};
