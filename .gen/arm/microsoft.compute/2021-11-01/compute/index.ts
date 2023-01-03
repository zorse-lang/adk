import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class availabilitySets
	extends ArmResource<availabilitySetsComponentInputs>
	implements availabilitySetsComponentOutputs
{
	constructor(entity: ADKEntity, options: availabilitySetsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/availabilitySets", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/availabilitySets";
}
export interface availabilitySetsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/availabilitySets";
}
export interface availabilitySetsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: AvailabilitySetProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class capacityReservationGroups
	extends ArmResource<capacityReservationGroupsComponentInputs>
	implements capacityReservationGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: capacityReservationGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/capacityReservationGroups", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/capacityReservationGroups";
}
export interface capacityReservationGroupsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/capacityReservationGroups";
}
export interface capacityReservationGroupsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: CapacityReservationGroupProperties | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly zones?: string[] | undefined;
}
export class capacityReservationGroups_capacityReservations
	extends ArmResource<capacityReservationGroups_capacityReservationsComponentInputs>
	implements capacityReservationGroups_capacityReservationsComponentOutputs
{
	constructor(entity: ADKEntity, options: capacityReservationGroups_capacityReservationsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Compute/capacityReservationGroups/capacityReservations",
			"2021-11-01",
			options,
		);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/capacityReservationGroups/capacityReservations";
}
export interface capacityReservationGroups_capacityReservationsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/capacityReservationGroups/capacityReservations";
}
export interface capacityReservationGroups_capacityReservationsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: CapacityReservationProperties | undefined;
	readonly sku: Sku;
	readonly tags?: ResourceTags | undefined;
	readonly zones?: string[] | undefined;
}
export class hostGroups extends ArmResource<hostGroupsComponentInputs> implements hostGroupsComponentOutputs {
	constructor(entity: ADKEntity, options: hostGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/hostGroups", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/hostGroups";
}
export interface hostGroupsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/hostGroups";
}
export interface hostGroupsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: DedicatedHostGroupProperties | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly zones?: string[] | undefined;
}
export class hostGroups_hosts
	extends ArmResource<hostGroups_hostsComponentInputs>
	implements hostGroups_hostsComponentOutputs
{
	constructor(entity: ADKEntity, options: hostGroups_hostsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/hostGroups/hosts", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/hostGroups/hosts";
}
export interface hostGroups_hostsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/hostGroups/hosts";
}
export interface hostGroups_hostsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: DedicatedHostProperties | undefined;
	readonly sku: Sku;
	readonly tags?: ResourceTags | undefined;
}
export class images extends ArmResource<imagesComponentInputs> implements imagesComponentOutputs {
	constructor(entity: ADKEntity, options: imagesComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/images", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/images";
}
export interface imagesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/images";
}
export interface imagesComponentInputs {
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: ImageProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class locations_edgeZones_publishers_artifacttypes_offers_skus_versions
	extends ArmResource<locations_edgeZones_publishers_artifacttypes_offers_skus_versionsComponentInputs>
	implements locations_edgeZones_publishers_artifacttypes_offers_skus_versionsComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: locations_edgeZones_publishers_artifacttypes_offers_skus_versionsComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.Compute/locations/edgeZones/publishers/artifacttypes/offers/skus/versions",
			"2021-11-01",
			options,
		);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/locations/edgeZones/publishers/artifacttypes/offers/skus/versions";
}
export interface locations_edgeZones_publishers_artifacttypes_offers_skus_versionsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/locations/edgeZones/publishers/artifacttypes/offers/skus/versions";
}
export interface locations_edgeZones_publishers_artifacttypes_offers_skus_versionsComponentInputs {
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: VirtualMachineImageProperties | undefined;
	readonly tags?: VirtualMachineImageResourceTags | undefined;
}
export class locations_publishers_artifacttypes_offers_skus_versions
	extends ArmResource<locations_publishers_artifacttypes_offers_skus_versionsComponentInputs>
	implements locations_publishers_artifacttypes_offers_skus_versionsComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_publishers_artifacttypes_offers_skus_versionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Compute/locations/publishers/artifacttypes/offers/skus/versions",
			"2021-11-01",
			options,
		);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/locations/publishers/artifacttypes/offers/skus/versions";
}
export interface locations_publishers_artifacttypes_offers_skus_versionsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/locations/publishers/artifacttypes/offers/skus/versions";
}
export interface locations_publishers_artifacttypes_offers_skus_versionsComponentInputs {
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: VirtualMachineImageProperties | undefined;
	readonly tags?: VirtualMachineImageResourceTags | undefined;
}
export class locations_publishers_artifacttypes_types_versions
	extends ArmResource<locations_publishers_artifacttypes_types_versionsComponentInputs>
	implements locations_publishers_artifacttypes_types_versionsComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_publishers_artifacttypes_types_versionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Compute/locations/publishers/artifacttypes/types/versions",
			"2021-11-01",
			options,
		);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/locations/publishers/artifacttypes/types/versions";
}
export interface locations_publishers_artifacttypes_types_versionsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/locations/publishers/artifacttypes/types/versions";
}
export interface locations_publishers_artifacttypes_types_versionsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: VirtualMachineExtensionImageProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class proximityPlacementGroups
	extends ArmResource<proximityPlacementGroupsComponentInputs>
	implements proximityPlacementGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: proximityPlacementGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/proximityPlacementGroups", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/proximityPlacementGroups";
}
export interface proximityPlacementGroupsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/proximityPlacementGroups";
}
export interface proximityPlacementGroupsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ProximityPlacementGroupProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class restorePointCollections
	extends ArmResource<restorePointCollectionsComponentInputs>
	implements restorePointCollectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: restorePointCollectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/restorePointCollections", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/restorePointCollections";
}
export interface restorePointCollectionsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/restorePointCollections";
}
export interface restorePointCollectionsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: RestorePointCollectionProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class restorePointCollections_restorePoints
	extends ArmResource<restorePointCollections_restorePointsComponentInputs>
	implements restorePointCollections_restorePointsComponentOutputs
{
	constructor(entity: ADKEntity, options: restorePointCollections_restorePointsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/restorePointCollections/restorePoints", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/restorePointCollections/restorePoints";
}
export interface restorePointCollections_restorePointsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/restorePointCollections/restorePoints";
}
export interface restorePointCollections_restorePointsComponentInputs {
	readonly name: string;
	readonly properties?: RestorePointProperties | undefined;
}
export class sshPublicKeys extends ArmResource<sshPublicKeysComponentInputs> implements sshPublicKeysComponentOutputs {
	constructor(entity: ADKEntity, options: sshPublicKeysComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/sshPublicKeys", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/sshPublicKeys";
}
export interface sshPublicKeysComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/sshPublicKeys";
}
export interface sshPublicKeysComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: SshPublicKeyResourceProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class virtualMachines
	extends ArmResource<virtualMachinesComponentInputs>
	implements virtualMachinesComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualMachinesComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/virtualMachines", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/virtualMachines";
}
export interface virtualMachinesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/virtualMachines";
}
export interface virtualMachinesComponentInputs {
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly identity?: VirtualMachineIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly plan?: Plan | undefined;
	readonly properties?: VirtualMachineProperties | undefined;
	readonly resources?: VirtualMachineExtension[] | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly zones?: string[] | undefined;
}
export class virtualMachines_extensions
	extends ArmResource<virtualMachines_extensionsComponentInputs>
	implements virtualMachines_extensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualMachines_extensionsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/virtualMachines/extensions", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/virtualMachines/extensions";
}
export interface virtualMachines_extensionsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/virtualMachines/extensions";
}
export interface virtualMachines_extensionsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: VirtualMachineExtensionProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class virtualMachines_runCommands
	extends ArmResource<virtualMachines_runCommandsComponentInputs>
	implements virtualMachines_runCommandsComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualMachines_runCommandsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/virtualMachines/runCommands", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/virtualMachines/runCommands";
}
export interface virtualMachines_runCommandsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/virtualMachines/runCommands";
}
export interface virtualMachines_runCommandsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: VirtualMachineRunCommandProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class virtualMachineScaleSets
	extends ArmResource<virtualMachineScaleSetsComponentInputs>
	implements virtualMachineScaleSetsComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualMachineScaleSetsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/virtualMachineScaleSets", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/virtualMachineScaleSets";
}
export interface virtualMachineScaleSetsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/virtualMachineScaleSets";
}
export interface virtualMachineScaleSetsComponentInputs {
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly identity?: VirtualMachineScaleSetIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly plan?: Plan | undefined;
	readonly properties?: VirtualMachineScaleSetProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly zones?: string[] | undefined;
}
export class virtualMachineScaleSets_extensions
	extends ArmResource<virtualMachineScaleSets_extensionsComponentInputs>
	implements virtualMachineScaleSets_extensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualMachineScaleSets_extensionsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/virtualMachineScaleSets/extensions", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/virtualMachineScaleSets/extensions";
}
export interface virtualMachineScaleSets_extensionsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/virtualMachineScaleSets/extensions";
}
export interface virtualMachineScaleSets_extensionsComponentInputs {
	readonly name: string;
	readonly properties?: VirtualMachineScaleSetExtensionProperties | undefined;
}
export class virtualMachineScaleSets_rollingUpgrades
	extends ArmResource<virtualMachineScaleSets_rollingUpgradesComponentInputs>
	implements virtualMachineScaleSets_rollingUpgradesComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualMachineScaleSets_rollingUpgradesComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/virtualMachineScaleSets/rollingUpgrades", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/virtualMachineScaleSets/rollingUpgrades";
}
export interface virtualMachineScaleSets_rollingUpgradesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/virtualMachineScaleSets/rollingUpgrades";
}
export interface virtualMachineScaleSets_rollingUpgradesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: RollingUpgradeStatusInfoProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class virtualMachineScaleSets_virtualMachines
	extends ArmResource<virtualMachineScaleSets_virtualMachinesComponentInputs>
	implements virtualMachineScaleSets_virtualMachinesComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualMachineScaleSets_virtualMachinesComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/virtualMachineScaleSets/virtualMachines", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/virtualMachineScaleSets/virtualMachines";
}
export interface virtualMachineScaleSets_virtualMachinesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/virtualMachineScaleSets/virtualMachines";
}
export interface virtualMachineScaleSets_virtualMachinesComponentInputs {
	readonly instanceId?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly plan?: Plan | undefined;
	readonly properties?: VirtualMachineScaleSetVMProperties | undefined;
	readonly resources?: VirtualMachineExtension[] | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly zones?: string[] | undefined;
}
export class virtualMachineScaleSets_virtualMachines_extensions
	extends ArmResource<virtualMachineScaleSets_virtualMachines_extensionsComponentInputs>
	implements virtualMachineScaleSets_virtualMachines_extensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualMachineScaleSets_virtualMachines_extensionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Compute/virtualMachineScaleSets/virtualMachines/extensions",
			"2021-11-01",
			options,
		);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/virtualMachineScaleSets/virtualMachines/extensions";
}
export interface virtualMachineScaleSets_virtualMachines_extensionsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/virtualMachineScaleSets/virtualMachines/extensions";
}
export interface virtualMachineScaleSets_virtualMachines_extensionsComponentInputs {
	readonly name: string;
	readonly properties?: VirtualMachineExtensionProperties | undefined;
}
export class virtualMachineScaleSets_virtualMachines_runCommands
	extends ArmResource<virtualMachineScaleSets_virtualMachines_runCommandsComponentInputs>
	implements virtualMachineScaleSets_virtualMachines_runCommandsComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualMachineScaleSets_virtualMachines_runCommandsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Compute/virtualMachineScaleSets/virtualMachines/runCommands",
			"2021-11-01",
			options,
		);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/virtualMachineScaleSets/virtualMachines/runCommands";
}
export interface virtualMachineScaleSets_virtualMachines_runCommandsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/virtualMachineScaleSets/virtualMachines/runCommands";
}
export interface virtualMachineScaleSets_virtualMachines_runCommandsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: VirtualMachineRunCommandProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface AdditionalCapabilities {
	readonly hibernationEnabled?: boolean | undefined;
	readonly ultraSSDEnabled?: boolean | undefined;
}
export interface AdditionalUnattendContent {
	readonly componentName?: "Microsoft-Windows-Shell-Setup" | undefined;
	readonly content?: string | undefined;
	readonly passName?: "OobeSystem" | undefined;
	readonly settingName?: "AutoLogon" | undefined;
}
export interface ApiEntityReference {
	readonly id?: string | undefined;
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
export interface ApplicationProfile {
	readonly galleryApplications?: VMGalleryApplication[] | undefined;
}
export interface AutomaticOSUpgradePolicy {
	readonly disableAutomaticRollback?: boolean | undefined;
	readonly enableAutomaticOSUpgrade?: boolean | undefined;
}
export interface AutomaticOSUpgradeProperties {
	readonly automaticOSUpgradeSupported: boolean;
}
export interface AutomaticRepairsPolicy {
	readonly enabled?: boolean | undefined;
	readonly gracePeriod?: string | undefined;
	readonly repairAction?: ("Reimage" | "Replace" | "Restart") | undefined;
}
export interface AvailabilitySetProperties {
	readonly platformFaultDomainCount?: number | undefined;
	readonly platformUpdateDomainCount?: number | undefined;
	readonly proximityPlacementGroup?: SubResource | undefined;
	readonly statuses?: InstanceViewStatus[] | undefined;
	readonly virtualMachines?: SubResource[] | undefined;
}
export interface AvailablePatchSummary {
	readonly assessmentActivityId?: string | undefined;
	readonly criticalAndSecurityPatchCount?: number | undefined;
	readonly error?: ApiError | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly otherPatchCount?: number | undefined;
	readonly rebootPending?: boolean | undefined;
	readonly startTime?: string | undefined;
	readonly status?: ("CompletedWithWarnings" | "Failed" | "InProgress" | "Succeeded" | "Unknown") | undefined;
}
export interface BillingProfile {
	readonly maxPrice?: number | undefined;
}
export interface BootDiagnostics {
	readonly enabled?: boolean | undefined;
	readonly storageUri?: string | undefined;
}
export interface BootDiagnosticsInstanceView {
	readonly consoleScreenshotBlobUri?: string | undefined;
	readonly serialConsoleLogBlobUri?: string | undefined;
	readonly status?: InstanceViewStatus | undefined;
}
export interface CapacityReservationGroupInstanceView {
	readonly capacityReservations?: CapacityReservationInstanceViewWithName[] | undefined;
}
export interface CapacityReservationGroupProperties {
	readonly capacityReservations?: SubResourceReadOnly[] | undefined;
	readonly instanceView?: CapacityReservationGroupInstanceView | undefined;
	readonly virtualMachinesAssociated?: SubResourceReadOnly[] | undefined;
}
export interface CapacityReservationInstanceView {
	readonly statuses?: InstanceViewStatus[] | undefined;
	readonly utilizationInfo?: CapacityReservationUtilization | undefined;
}
export interface CapacityReservationInstanceViewWithName {
	readonly name?: string | undefined;
	readonly statuses?: InstanceViewStatus[] | undefined;
	readonly utilizationInfo?: CapacityReservationUtilization | undefined;
}
export interface CapacityReservationProfile {
	readonly capacityReservationGroup?: SubResource | undefined;
}
export interface CapacityReservationProperties {
	readonly instanceView?: CapacityReservationInstanceView | undefined;
	readonly provisioningState?: string | undefined;
	readonly provisioningTime?: string | undefined;
	readonly reservationId?: string | undefined;
	readonly timeCreated?: string | undefined;
	readonly virtualMachinesAssociated?: SubResourceReadOnly[] | undefined;
}
export interface CapacityReservationUtilization {
	readonly virtualMachinesAllocated?: SubResourceReadOnly[] | undefined;
}
export interface DataDisk {
	readonly caching?: ("None" | "ReadOnly") | undefined;
	readonly createOption: "Attach" | "Empty" | "FromImage";
	readonly deleteOption?: ("Delete" | "Detach") | undefined;
	readonly detachOption?: "ForceDetach" | undefined;
	readonly diskIOPSReadWrite?: number | undefined;
	readonly diskMBpsReadWrite?: number | undefined;
	readonly diskSizeGB?: number | undefined;
	readonly image?: VirtualHardDisk | undefined;
	readonly lun: number;
	readonly managedDisk?: ManagedDiskParameters | undefined;
	readonly name?: string | undefined;
	readonly toBeDetached?: boolean | undefined;
	readonly vhd?: VirtualHardDisk | undefined;
	readonly writeAcceleratorEnabled?: boolean | undefined;
}
export interface DataDiskImage {
	readonly lun?: number | undefined;
}
export interface DedicatedHostAllocatableVM {
	readonly count?: number | undefined;
	readonly vmSize?: string | undefined;
}
export interface DedicatedHostAvailableCapacity {
	readonly allocatableVMs?: DedicatedHostAllocatableVM[] | undefined;
}
export interface DedicatedHostGroupInstanceView {
	readonly hosts?: DedicatedHostInstanceViewWithName[] | undefined;
}
export interface DedicatedHostGroupProperties {
	readonly hosts?: SubResourceReadOnly[] | undefined;
	readonly instanceView?: DedicatedHostGroupInstanceView | undefined;
	readonly platformFaultDomainCount: number;
	readonly supportAutomaticPlacement?: boolean | undefined;
}
export interface DedicatedHostInstanceView {
	readonly assetId?: string | undefined;
	readonly availableCapacity?: DedicatedHostAvailableCapacity | undefined;
	readonly statuses?: InstanceViewStatus[] | undefined;
}
export interface DedicatedHostInstanceViewWithName {
	readonly assetId?: string | undefined;
	readonly availableCapacity?: DedicatedHostAvailableCapacity | undefined;
	readonly name?: string | undefined;
	readonly statuses?: InstanceViewStatus[] | undefined;
}
export interface DedicatedHostProperties {
	readonly autoReplaceOnFailure?: boolean | undefined;
	readonly hostId?: string | undefined;
	readonly instanceView?: DedicatedHostInstanceView | undefined;
	readonly licenseType?: ("None" | "Windows_Server_Hybrid") | undefined;
	readonly platformFaultDomain?: number | undefined;
	readonly provisioningState?: string | undefined;
	readonly provisioningTime?: string | undefined;
	readonly timeCreated?: string | undefined;
	readonly virtualMachines?: SubResourceReadOnly[] | undefined;
}
export interface DiagnosticsProfile {
	readonly bootDiagnostics?: BootDiagnostics | undefined;
}
export interface DiffDiskSettings {
	readonly option?: "Local" | undefined;
	readonly placement?: ("CacheDisk" | "ResourceDisk") | undefined;
}
export interface DisallowedConfiguration {
	readonly vmDiskType?: ("None" | "Unmanaged") | undefined;
}
export interface DiskEncryptionSetParameters {
	readonly id?: string | undefined;
}
export interface DiskEncryptionSettings {
	readonly diskEncryptionKey?: KeyVaultSecretReference | undefined;
	readonly enabled?: boolean | undefined;
	readonly keyEncryptionKey?: KeyVaultKeyReference | undefined;
}
export interface DiskInstanceView {
	readonly encryptionSettings?: DiskEncryptionSettings[] | undefined;
	readonly name?: string | undefined;
	readonly statuses?: InstanceViewStatus[] | undefined;
}
export interface DiskRestorePointInstanceView {
	readonly id?: string | undefined;
	readonly replicationStatus?: any | undefined;
}
export interface ExtendedLocation {
	readonly name?: string | undefined;
	readonly type?: "EdgeZone" | undefined;
}
export interface HardwareProfile {
	readonly vmSize?:
		| (
				| "Basic_A0"
				| "Basic_A1"
				| "Basic_A2"
				| "Basic_A3"
				| "Basic_A4"
				| "Standard_A0"
				| "Standard_A1"
				| "Standard_A10"
				| "Standard_A11"
				| "Standard_A1_v2"
				| "Standard_A2"
				| "Standard_A2_v2"
				| "Standard_A2m_v2"
				| "Standard_A3"
				| "Standard_A4"
				| "Standard_A4_v2"
				| "Standard_A4m_v2"
				| "Standard_A5"
				| "Standard_A6"
				| "Standard_A7"
				| "Standard_A8"
				| "Standard_A8_v2"
				| "Standard_A8m_v2"
				| "Standard_A9"
				| "Standard_B1ms"
				| "Standard_B1s"
				| "Standard_B2ms"
				| "Standard_B2s"
				| "Standard_B4ms"
				| "Standard_B8ms"
				| "Standard_D1"
				| "Standard_D11"
				| "Standard_D11_v2"
				| "Standard_D12"
				| "Standard_D12_v2"
				| "Standard_D13"
				| "Standard_D13_v2"
				| "Standard_D14"
				| "Standard_D14_v2"
				| "Standard_D15_v2"
				| "Standard_D16_v3"
				| "Standard_D16s_v3"
				| "Standard_D1_v2"
				| "Standard_D2"
				| "Standard_D2_v2"
				| "Standard_D2_v3"
				| "Standard_D2s_v3"
				| "Standard_D3"
				| "Standard_D32_v3"
				| "Standard_D32s_v3"
				| "Standard_D3_v2"
				| "Standard_D4"
				| "Standard_D4_v2"
				| "Standard_D4_v3"
				| "Standard_D4s_v3"
				| "Standard_D5_v2"
				| "Standard_D64_v3"
				| "Standard_D64s_v3"
				| "Standard_D8_v3"
				| "Standard_D8s_v3"
				| "Standard_DS1"
				| "Standard_DS11"
				| "Standard_DS11_v2"
				| "Standard_DS12"
				| "Standard_DS12_v2"
				| "Standard_DS13"
				| "Standard_DS13-2_v2"
				| "Standard_DS13-4_v2"
				| "Standard_DS13_v2"
				| "Standard_DS14"
				| "Standard_DS14-4_v2"
				| "Standard_DS14-8_v2"
				| "Standard_DS14_v2"
				| "Standard_DS15_v2"
				| "Standard_DS1_v2"
				| "Standard_DS2"
				| "Standard_DS2_v2"
				| "Standard_DS3"
				| "Standard_DS3_v2"
				| "Standard_DS4"
				| "Standard_DS4_v2"
				| "Standard_DS5_v2"
				| "Standard_E16_v3"
				| "Standard_E16s_v3"
				| "Standard_E2_v3"
				| "Standard_E2s_v3"
				| "Standard_E32-16_v3"
				| "Standard_E32-8s_v3"
				| "Standard_E32_v3"
				| "Standard_E32s_v3"
				| "Standard_E4_v3"
				| "Standard_E4s_v3"
				| "Standard_E64-16s_v3"
				| "Standard_E64-32s_v3"
				| "Standard_E64_v3"
				| "Standard_E64s_v3"
				| "Standard_E8_v3"
				| "Standard_E8s_v3"
				| "Standard_F1"
				| "Standard_F16"
				| "Standard_F16s"
				| "Standard_F16s_v2"
				| "Standard_F1s"
				| "Standard_F2"
				| "Standard_F2s"
				| "Standard_F2s_v2"
				| "Standard_F32s_v2"
				| "Standard_F4"
				| "Standard_F4s"
				| "Standard_F4s_v2"
				| "Standard_F64s_v2"
				| "Standard_F72s_v2"
				| "Standard_F8"
				| "Standard_F8s"
				| "Standard_F8s_v2"
				| "Standard_G1"
				| "Standard_G2"
				| "Standard_G3"
				| "Standard_G4"
				| "Standard_G5"
				| "Standard_GS1"
				| "Standard_GS2"
				| "Standard_GS3"
				| "Standard_GS4"
				| "Standard_GS4-4"
				| "Standard_GS4-8"
				| "Standard_GS5"
				| "Standard_GS5-16"
				| "Standard_GS5-8"
				| "Standard_H16"
				| "Standard_H16m"
				| "Standard_H16mr"
				| "Standard_H16r"
				| "Standard_H8"
				| "Standard_H8m"
				| "Standard_L16s"
				| "Standard_L32s"
				| "Standard_L4s"
				| "Standard_L8s"
				| "Standard_M128-32ms"
				| "Standard_M128-64ms"
				| "Standard_M128ms"
				| "Standard_M128s"
				| "Standard_M64-16ms"
				| "Standard_M64-32ms"
				| "Standard_M64ms"
				| "Standard_M64s"
				| "Standard_NC12"
				| "Standard_NC12s_v2"
				| "Standard_NC12s_v3"
				| "Standard_NC24"
				| "Standard_NC24r"
				| "Standard_NC24rs_v2"
				| "Standard_NC24rs_v3"
				| "Standard_NC24s_v2"
				| "Standard_NC24s_v3"
				| "Standard_NC6"
				| "Standard_NC6s_v2"
				| "Standard_NC6s_v3"
				| "Standard_ND12s"
				| "Standard_ND24rs"
				| "Standard_ND24s"
				| "Standard_ND6s"
				| "Standard_NV12"
				| "Standard_NV24"
				| "Standard_NV6"
		  )
		| undefined;
	readonly vmSizeProperties?: VMSizeProperties | undefined;
}
export interface ImageDataDisk {
	readonly blobUri?: string | undefined;
	readonly caching?: ("None" | "ReadOnly") | undefined;
	readonly diskEncryptionSet?: DiskEncryptionSetParameters | undefined;
	readonly diskSizeGB?: number | undefined;
	readonly lun: number;
	readonly managedDisk?: SubResource | undefined;
	readonly snapshot?: SubResource | undefined;
	readonly storageAccountType?:
		| ("Premium_LRS" | "Premium_ZRS" | "StandardSSD_LRS" | "StandardSSD_ZRS" | "Standard_LRS" | "UltraSSD_LRS")
		| undefined;
}
export interface ImageOSDisk {
	readonly blobUri?: string | undefined;
	readonly caching?: ("None" | "ReadOnly") | undefined;
	readonly diskEncryptionSet?: DiskEncryptionSetParameters | undefined;
	readonly diskSizeGB?: number | undefined;
	readonly managedDisk?: SubResource | undefined;
	readonly osState: "Generalized";
	readonly osType: "Linux";
	readonly snapshot?: SubResource | undefined;
	readonly storageAccountType?:
		| ("Premium_LRS" | "Premium_ZRS" | "StandardSSD_LRS" | "StandardSSD_ZRS" | "Standard_LRS" | "UltraSSD_LRS")
		| undefined;
}
export interface ImageProperties {
	readonly hyperVGeneration?: ("V1" | "V2") | undefined;
	readonly provisioningState?: string | undefined;
	readonly sourceVirtualMachine?: SubResource | undefined;
	readonly storageProfile?: ImageStorageProfile | undefined;
}
export interface ImageReference {
	readonly communityGalleryImageId?: string | undefined;
	readonly exactVersion?: string | undefined;
	readonly id?: string | undefined;
	readonly offer?: string | undefined;
	readonly publisher?: string | undefined;
	readonly sharedGalleryImageId?: string | undefined;
	readonly sku?: string | undefined;
	readonly version?: string | undefined;
}
export interface ImageStorageProfile {
	readonly dataDisks?: ImageDataDisk[] | undefined;
	readonly osDisk?: ImageOSDisk | undefined;
	readonly zoneResilient?: boolean | undefined;
}
export interface InnerError {
	readonly errordetail?: string | undefined;
	readonly exceptiontype?: string | undefined;
}
export interface InstanceViewStatus {
	readonly code?: string | undefined;
	readonly displayStatus?: string | undefined;
	readonly level?: ("Error" | "Info") | undefined;
	readonly message?: string | undefined;
	readonly time?: string | undefined;
}
export interface KeyVaultKeyReference {
	readonly keyUrl: string;
	readonly sourceVault: SubResource;
}
export interface KeyVaultSecretReference {
	readonly secretUrl: string;
	readonly sourceVault: SubResource;
}
export interface LastPatchInstallationSummary {
	readonly error?: ApiError | undefined;
	readonly excludedPatchCount?: number | undefined;
	readonly failedPatchCount?: number | undefined;
	readonly installationActivityId?: string | undefined;
	readonly installedPatchCount?: number | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly maintenanceWindowExceeded?: boolean | undefined;
	readonly notSelectedPatchCount?: number | undefined;
	readonly pendingPatchCount?: number | undefined;
	readonly startTime?: string | undefined;
	readonly status?: ("CompletedWithWarnings" | "Failed" | "InProgress" | "Succeeded" | "Unknown") | undefined;
}
export interface LinuxConfiguration {
	readonly disablePasswordAuthentication?: boolean | undefined;
	readonly patchSettings?: LinuxPatchSettings | undefined;
	readonly provisionVMAgent?: boolean | undefined;
	readonly ssh?: SshConfiguration | undefined;
}
export interface LinuxPatchSettings {
	readonly assessmentMode?: ("AutomaticByPlatform" | "ImageDefault") | undefined;
	readonly patchMode?: ("AutomaticByPlatform" | "ImageDefault") | undefined;
}
export interface MaintenanceRedeployStatus {
	readonly isCustomerInitiatedMaintenanceAllowed?: boolean | undefined;
	readonly lastOperationMessage?: string | undefined;
	readonly lastOperationResultCode?: ("MaintenanceAborted" | "MaintenanceCompleted" | "None") | undefined;
	readonly maintenanceWindowEndTime?: string | undefined;
	readonly maintenanceWindowStartTime?: string | undefined;
	readonly preMaintenanceWindowEndTime?: string | undefined;
	readonly preMaintenanceWindowStartTime?: string | undefined;
}
export interface ManagedDiskParameters {
	readonly diskEncryptionSet?: DiskEncryptionSetParameters | undefined;
	readonly id?: string | undefined;
	readonly securityProfile?: VMDiskSecurityProfile | undefined;
	readonly storageAccountType?:
		| ("Premium_LRS" | "Premium_ZRS" | "StandardSSD_LRS" | "StandardSSD_ZRS" | "Standard_LRS" | "UltraSSD_LRS")
		| undefined;
}
export interface NetworkInterfaceReference {
	readonly id?: string | undefined;
	readonly properties?: NetworkInterfaceReferenceProperties | undefined;
}
export interface NetworkInterfaceReferenceProperties {
	readonly deleteOption?: ("Delete" | "Detach") | undefined;
	readonly primary?: boolean | undefined;
}
export interface NetworkProfile {
	readonly networkApiVersion?: "2020-11-01" | undefined;
	readonly networkInterfaceConfigurations?: VirtualMachineNetworkInterfaceConfiguration[] | undefined;
	readonly networkInterfaces?: NetworkInterfaceReference[] | undefined;
}
export interface OSDisk {
	readonly caching?: ("None" | "ReadOnly") | undefined;
	readonly createOption: "Attach" | "Empty" | "FromImage";
	readonly deleteOption?: ("Delete" | "Detach") | undefined;
	readonly diffDiskSettings?: DiffDiskSettings | undefined;
	readonly diskSizeGB?: number | undefined;
	readonly encryptionSettings?: DiskEncryptionSettings | undefined;
	readonly image?: VirtualHardDisk | undefined;
	readonly managedDisk?: ManagedDiskParameters | undefined;
	readonly name?: string | undefined;
	readonly osType?: "Linux" | undefined;
	readonly vhd?: VirtualHardDisk | undefined;
	readonly writeAcceleratorEnabled?: boolean | undefined;
}
export interface OSDiskImage {
	readonly operatingSystem: "Linux";
}
export interface OSProfile {
	readonly adminPassword?: string | undefined;
	readonly adminUsername?: string | undefined;
	readonly allowExtensionOperations?: boolean | undefined;
	readonly computerName?: string | undefined;
	readonly customData?: string | undefined;
	readonly linuxConfiguration?: LinuxConfiguration | undefined;
	readonly requireGuestProvisionSignal?: boolean | undefined;
	readonly secrets?: VaultSecretGroup[] | undefined;
	readonly windowsConfiguration?: WindowsConfiguration | undefined;
}
export interface PatchSettings {
	readonly assessmentMode?: ("AutomaticByPlatform" | "ImageDefault") | undefined;
	readonly enableHotpatching?: boolean | undefined;
	readonly patchMode?: ("AutomaticByOS" | "AutomaticByPlatform" | "Manual") | undefined;
}
export interface Plan {
	readonly name?: string | undefined;
	readonly product?: string | undefined;
	readonly promotionCode?: string | undefined;
	readonly publisher?: string | undefined;
}
export interface ProximityPlacementGroupProperties {
	readonly availabilitySets?: SubResourceWithColocationStatus[] | undefined;
	readonly colocationStatus?: InstanceViewStatus | undefined;
	readonly proximityPlacementGroupType?: ("Standard" | "Ultra") | undefined;
	readonly virtualMachines?: SubResourceWithColocationStatus[] | undefined;
	readonly virtualMachineScaleSets?: SubResourceWithColocationStatus[] | undefined;
}
export interface PublicIPAddressSku {
	readonly name?: ("Basic" | "Standard") | undefined;
	readonly tier?: ("Global" | "Regional") | undefined;
}
export interface PurchasePlan {
	readonly name: string;
	readonly product: string;
	readonly publisher: string;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface RestorePoint {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: RestorePointProperties | undefined;
	readonly type?: string | undefined;
}
export interface RestorePointCollectionProperties {
	readonly provisioningState?: string | undefined;
	readonly restorePointCollectionId?: string | undefined;
	readonly restorePoints?: RestorePoint[] | undefined;
	readonly source?: RestorePointCollectionSourceProperties | undefined;
}
export interface RestorePointCollectionSourceProperties {
	readonly id?: string | undefined;
	readonly location?: string | undefined;
}
export interface RestorePointInstanceView {
	readonly diskRestorePoints?: DiskRestorePointInstanceView[] | undefined;
	readonly statuses?: InstanceViewStatus[] | undefined;
}
export interface RestorePointProperties {
	readonly consistencyMode?: ("ApplicationConsistent" | "CrashConsistent" | "FileSystemConsistent") | undefined;
	readonly excludeDisks?: ApiEntityReference[] | undefined;
	readonly instanceView?: RestorePointInstanceView | undefined;
	readonly provisioningState?: string | undefined;
	readonly sourceMetadata?: RestorePointSourceMetadata | undefined;
	readonly sourceRestorePoint?: ApiEntityReference | undefined;
	readonly timeCreated?: string | undefined;
}
export interface RestorePointSourceMetadata {
	readonly diagnosticsProfile?: DiagnosticsProfile | undefined;
	readonly hardwareProfile?: HardwareProfile | undefined;
	readonly licenseType?: string | undefined;
	readonly location?: string | undefined;
	readonly osProfile?: OSProfile | undefined;
	readonly securityProfile?: SecurityProfile | undefined;
	readonly storageProfile?: RestorePointSourceVMStorageProfile | undefined;
	readonly vmId?: string | undefined;
}
export interface RestorePointSourceVMDataDisk {
	readonly caching?: ("None" | "ReadOnly") | undefined;
	readonly diskRestorePoint?: ApiEntityReference | undefined;
	readonly diskSizeGB?: number | undefined;
	readonly lun?: number | undefined;
	readonly managedDisk?: ManagedDiskParameters | undefined;
	readonly name?: string | undefined;
}
export interface RestorePointSourceVmosDisk {
	readonly caching?: ("None" | "ReadOnly") | undefined;
	readonly diskRestorePoint?: ApiEntityReference | undefined;
	readonly diskSizeGB?: number | undefined;
	readonly encryptionSettings?: DiskEncryptionSettings | undefined;
	readonly managedDisk?: ManagedDiskParameters | undefined;
	readonly name?: string | undefined;
	readonly osType?: ("Linux" | "Windows") | undefined;
}
export interface RestorePointSourceVMStorageProfile {
	readonly dataDisks?: RestorePointSourceVMDataDisk[] | undefined;
	readonly osDisk?: RestorePointSourceVmosDisk | undefined;
}
export interface RollingUpgradePolicy {
	readonly enableCrossZoneUpgrade?: boolean | undefined;
	readonly maxBatchInstancePercent?: number | undefined;
	readonly maxUnhealthyInstancePercent?: number | undefined;
	readonly maxUnhealthyUpgradedInstancePercent?: number | undefined;
	readonly pauseTimeBetweenBatches?: string | undefined;
	readonly prioritizeUnhealthyInstances?: boolean | undefined;
}
export interface RollingUpgradeProgressInfo {
	readonly failedInstanceCount?: number | undefined;
	readonly inProgressInstanceCount?: number | undefined;
	readonly pendingInstanceCount?: number | undefined;
	readonly successfulInstanceCount?: number | undefined;
}
export interface RollingUpgradeRunningStatus {
	readonly code?: ("Cancelled" | "Completed" | "Faulted") | undefined;
	readonly lastAction?: "Cancel" | undefined;
	readonly lastActionTime?: string | undefined;
	readonly startTime?: string | undefined;
}
export interface RollingUpgradeStatusInfoProperties {
	readonly error?: ApiError | undefined;
	readonly policy?: RollingUpgradePolicy | undefined;
	readonly progress?: RollingUpgradeProgressInfo | undefined;
	readonly runningStatus?: RollingUpgradeRunningStatus | undefined;
}
export interface RunCommandInputParameter {
	readonly name: string;
	readonly value: string;
}
export interface ScaleInPolicy {
	readonly forceDeletion?: boolean | undefined;
	readonly rules?: ("Default" | "NewestVM" | "OldestVM"[]) | undefined;
}
export interface ScheduledEventsProfile {
	readonly terminateNotificationProfile?: TerminateNotificationProfile | undefined;
}
export interface SecurityProfile {
	readonly encryptionAtHost?: boolean | undefined;
	readonly securityType?: ("ConfidentialVM" | "TrustedLaunch") | undefined;
	readonly uefiSettings?: UefiSettings | undefined;
}
export interface Sku {
	readonly capacity?: number | undefined;
	readonly name?: string | undefined;
	readonly tier?: string | undefined;
}
export interface SpotRestorePolicy {
	readonly enabled?: boolean | undefined;
	readonly restoreTimeout?: string | undefined;
}
export interface SshConfiguration {
	readonly publicKeys?: SshPublicKey[] | undefined;
}
export interface SshPublicKey {
	readonly keyData?: string | undefined;
	readonly path?: string | undefined;
}
export interface SshPublicKeyResourceProperties {
	readonly publicKey?: string | undefined;
}
export interface StorageProfile {
	readonly dataDisks?: DataDisk[] | undefined;
	readonly imageReference?: ImageReference | undefined;
	readonly osDisk?: OSDisk | undefined;
}
export interface SubResource {
	readonly id?: string | undefined;
}
export interface SubResourceReadOnly {
	readonly id?: string | undefined;
}
export interface SubResourceWithColocationStatus {
	readonly colocationStatus?: InstanceViewStatus | undefined;
	readonly id?: string | undefined;
}
export interface TerminateNotificationProfile {
	readonly enable?: boolean | undefined;
	readonly notBeforeTimeout?: string | undefined;
}
export interface UefiSettings {
	readonly secureBootEnabled?: boolean | undefined;
	readonly vTpmEnabled?: boolean | undefined;
}
export interface UpgradePolicy {
	readonly automaticOSUpgradePolicy?: AutomaticOSUpgradePolicy | undefined;
	readonly mode?: ("Automatic" | "Manual") | undefined;
	readonly rollingUpgradePolicy?: RollingUpgradePolicy | undefined;
}
export interface UserAssignedIdentitiesValue {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export interface VaultCertificate {
	readonly certificateStore?: string | undefined;
	readonly certificateUrl?: string | undefined;
}
export interface VaultSecretGroup {
	readonly sourceVault?: SubResource | undefined;
	readonly vaultCertificates?: VaultCertificate[] | undefined;
}
export interface VirtualHardDisk {
	readonly uri?: string | undefined;
}
export interface VirtualMachineAgentInstanceView {
	readonly extensionHandlers?: VirtualMachineExtensionHandlerInstanceView[] | undefined;
	readonly statuses?: InstanceViewStatus[] | undefined;
	readonly vmAgentVersion?: string | undefined;
}
export interface VirtualMachineExtension {
	readonly id?: string | undefined;
	readonly location: string;
	readonly name?: string | undefined;
	readonly properties?: VirtualMachineExtensionProperties | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface VirtualMachineExtensionHandlerInstanceView {
	readonly status?: InstanceViewStatus | undefined;
	readonly type?: string | undefined;
	readonly typeHandlerVersion?: string | undefined;
}
export interface VirtualMachineExtensionImageProperties {
	readonly computeRole: string;
	readonly handlerSchema: string;
	readonly operatingSystem: string;
	readonly supportsMultipleExtensions?: boolean | undefined;
	readonly vmScaleSetEnabled?: boolean | undefined;
}
export interface VirtualMachineExtensionInstanceView {
	readonly name?: string | undefined;
	readonly statuses?: InstanceViewStatus[] | undefined;
	readonly substatuses?: InstanceViewStatus[] | undefined;
	readonly type?: string | undefined;
	readonly typeHandlerVersion?: string | undefined;
}
export interface VirtualMachineExtensionProperties {
	readonly autoUpgradeMinorVersion?: boolean | undefined;
	readonly enableAutomaticUpgrade?: boolean | undefined;
	readonly forceUpdateTag?: string | undefined;
	readonly instanceView?: VirtualMachineExtensionInstanceView | undefined;
	readonly protectedSettings?: any | undefined;
	readonly protectedSettingsFromKeyVault?: any | undefined;
	readonly provisioningState?: string | undefined;
	readonly publisher?: string | undefined;
	readonly settings?: any | undefined;
	readonly suppressFailures?: boolean | undefined;
	readonly type?: string | undefined;
	readonly typeHandlerVersion?: string | undefined;
}
export interface VirtualMachineHealthStatus {
	readonly status?: InstanceViewStatus | undefined;
}
export interface VirtualMachineIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned" | "SystemAssigned, UserAssigned") | undefined;
	readonly userAssignedIdentities?: VirtualMachineIdentityUserAssignedIdentities | undefined;
}
export interface VirtualMachineIdentityUserAssignedIdentities {
	readonly "[ key: string ]"?: UserAssignedIdentitiesValue | undefined;
}
export interface VirtualMachineImageFeature {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface VirtualMachineImageProperties {
	readonly architecture?: ("Arm64" | "x64") | undefined;
	readonly automaticOSUpgradeProperties?: AutomaticOSUpgradeProperties | undefined;
	readonly dataDiskImages?: DataDiskImage[] | undefined;
	readonly disallowed?: DisallowedConfiguration | undefined;
	readonly features?: VirtualMachineImageFeature[] | undefined;
	readonly hyperVGeneration?: ("V1" | "V2") | undefined;
	readonly osDiskImage?: OSDiskImage | undefined;
	readonly plan?: PurchasePlan | undefined;
}
export interface VirtualMachineImageResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface VirtualMachineInstanceView {
	readonly assignedHost?: string | undefined;
	readonly bootDiagnostics?: BootDiagnosticsInstanceView | undefined;
	readonly computerName?: string | undefined;
	readonly disks?: DiskInstanceView[] | undefined;
	readonly extensions?: VirtualMachineExtensionInstanceView[] | undefined;
	readonly hyperVGeneration?: ("V1" | "V2") | undefined;
	readonly maintenanceRedeployStatus?: MaintenanceRedeployStatus | undefined;
	readonly osName?: string | undefined;
	readonly osVersion?: string | undefined;
	readonly patchStatus?: VirtualMachinePatchStatus | undefined;
	readonly platformFaultDomain?: number | undefined;
	readonly platformUpdateDomain?: number | undefined;
	readonly rdpThumbPrint?: string | undefined;
	readonly statuses?: InstanceViewStatus[] | undefined;
	readonly vmAgent?: VirtualMachineAgentInstanceView | undefined;
	readonly vmHealth?: VirtualMachineHealthStatus | undefined;
}
export interface VirtualMachineIpTag {
	readonly ipTagType?: string | undefined;
	readonly tag?: string | undefined;
}
export interface VirtualMachineNetworkInterfaceConfiguration {
	readonly name: string;
	readonly properties?: VirtualMachineNetworkInterfaceConfigurationProperties | undefined;
}
export interface VirtualMachineNetworkInterfaceConfigurationProperties {
	readonly deleteOption?: ("Delete" | "Detach") | undefined;
	readonly dnsSettings?: VirtualMachineNetworkInterfaceDnsSettingsConfiguration | undefined;
	readonly dscpConfiguration?: SubResource | undefined;
	readonly enableAcceleratedNetworking?: boolean | undefined;
	readonly enableFpga?: boolean | undefined;
	readonly enableIPForwarding?: boolean | undefined;
	readonly ipConfigurations: VirtualMachineNetworkInterfaceIPConfiguration[];
	readonly networkSecurityGroup?: SubResource | undefined;
	readonly primary?: boolean | undefined;
}
export interface VirtualMachineNetworkInterfaceDnsSettingsConfiguration {
	readonly dnsServers?: string[] | undefined;
}
export interface VirtualMachineNetworkInterfaceIPConfiguration {
	readonly name: string;
	readonly properties?: VirtualMachineNetworkInterfaceIPConfigurationProperties | undefined;
}
export interface VirtualMachineNetworkInterfaceIPConfigurationProperties {
	readonly applicationGatewayBackendAddressPools?: SubResource[] | undefined;
	readonly applicationSecurityGroups?: SubResource[] | undefined;
	readonly loadBalancerBackendAddressPools?: SubResource[] | undefined;
	readonly primary?: boolean | undefined;
	readonly privateIPAddressVersion?: ("IPv4" | "IPv6") | undefined;
	readonly publicIPAddressConfiguration?: VirtualMachinePublicIPAddressConfiguration | undefined;
	readonly subnet?: SubResource | undefined;
}
export interface VirtualMachinePatchStatus {
	readonly availablePatchSummary?: AvailablePatchSummary | undefined;
	readonly configurationStatuses?: InstanceViewStatus[] | undefined;
	readonly lastPatchInstallationSummary?: LastPatchInstallationSummary | undefined;
}
export interface VirtualMachineProperties {
	readonly additionalCapabilities?: AdditionalCapabilities | undefined;
	readonly applicationProfile?: ApplicationProfile | undefined;
	readonly availabilitySet?: SubResource | undefined;
	readonly billingProfile?: BillingProfile | undefined;
	readonly capacityReservation?: CapacityReservationProfile | undefined;
	readonly diagnosticsProfile?: DiagnosticsProfile | undefined;
	readonly evictionPolicy?: ("Deallocate" | "Delete") | undefined;
	readonly extensionsTimeBudget?: string | undefined;
	readonly hardwareProfile?: HardwareProfile | undefined;
	readonly host?: SubResource | undefined;
	readonly hostGroup?: SubResource | undefined;
	readonly instanceView?: VirtualMachineInstanceView | undefined;
	readonly licenseType?: string | undefined;
	readonly networkProfile?: NetworkProfile | undefined;
	readonly osProfile?: OSProfile | undefined;
	readonly platformFaultDomain?: number | undefined;
	readonly "Fault domain assignment can be viewed in the Virtual Machine Instance View.Minimum api‐version"?:
		| 2020_12_01
		| undefined;
	readonly priority?: ("Low" | "Regular" | "Spot") | undefined;
	readonly provisioningState?: string | undefined;
	readonly proximityPlacementGroup?: SubResource | undefined;
	readonly scheduledEventsProfile?: ScheduledEventsProfile | undefined;
	readonly securityProfile?: SecurityProfile | undefined;
	readonly storageProfile?: StorageProfile | undefined;
	readonly timeCreated?: string | undefined;
	readonly userData?: string | undefined;
	readonly virtualMachineScaleSet?: SubResource | undefined;
	readonly vmId?: string | undefined;
}
export interface VirtualMachinePublicIPAddressConfiguration {
	readonly name: string;
	readonly properties?: VirtualMachinePublicIPAddressConfigurationProperties | undefined;
	readonly sku?: PublicIPAddressSku | undefined;
}
export interface VirtualMachinePublicIPAddressConfigurationProperties {
	readonly deleteOption?: ("Delete" | "Detach") | undefined;
	readonly dnsSettings?: VirtualMachinePublicIPAddressDnsSettingsConfiguration | undefined;
	readonly idleTimeoutInMinutes?: number | undefined;
	readonly ipTags?: VirtualMachineIpTag[] | undefined;
	readonly publicIPAddressVersion?: ("IPv4" | "IPv6") | undefined;
	readonly publicIPAllocationMethod?: ("Dynamic" | "Static") | undefined;
	readonly publicIPPrefix?: SubResource | undefined;
}
export interface VirtualMachinePublicIPAddressDnsSettingsConfiguration {
	readonly domainNameLabel: string;
}
export interface VirtualMachineRunCommandInstanceView {
	readonly endTime?: string | undefined;
	readonly error?: string | undefined;
	readonly executionMessage?: string | undefined;
	readonly executionState?:
		| ("Canceled" | "Failed" | "Pending" | "Running" | "Succeeded" | "TimedOut" | "Unknown")
		| undefined;
	readonly exitCode?: number | undefined;
	readonly output?: string | undefined;
	readonly startTime?: string | undefined;
	readonly statuses?: InstanceViewStatus[] | undefined;
}
export interface VirtualMachineRunCommandProperties {
	readonly asyncExecution?: boolean | undefined;
	readonly errorBlobUri?: string | undefined;
	readonly instanceView?: VirtualMachineRunCommandInstanceView | undefined;
	readonly outputBlobUri?: string | undefined;
	readonly parameters?: RunCommandInputParameter[] | undefined;
	readonly protectedParameters?: RunCommandInputParameter[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly runAsPassword?: string | undefined;
	readonly runAsUser?: string | undefined;
	readonly source?: VirtualMachineRunCommandScriptSource | undefined;
	readonly timeoutInSeconds?: number | undefined;
}
export interface VirtualMachineRunCommandScriptSource {
	readonly commandId?: string | undefined;
	readonly script?: string | undefined;
	readonly scriptUri?: string | undefined;
}
export interface VirtualMachineScaleSetDataDisk {
	readonly caching?: ("None" | "ReadOnly") | undefined;
	readonly createOption: "Attach" | "Empty" | "FromImage";
	readonly diskIOPSReadWrite?: number | undefined;
	readonly diskMBpsReadWrite?: number | undefined;
	readonly diskSizeGB?: number | undefined;
	readonly lun: number;
	readonly managedDisk?: VirtualMachineScaleSetManagedDiskParameters | undefined;
	readonly name?: string | undefined;
	readonly writeAcceleratorEnabled?: boolean | undefined;
}
export interface VirtualMachineScaleSetExtension {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: VirtualMachineScaleSetExtensionProperties | undefined;
	readonly type?: string | undefined;
}
export interface VirtualMachineScaleSetExtensionProfile {
	readonly extensions?: VirtualMachineScaleSetExtension[] | undefined;
	readonly extensionsTimeBudget?: string | undefined;
}
export interface VirtualMachineScaleSetExtensionProperties {
	readonly autoUpgradeMinorVersion?: boolean | undefined;
	readonly enableAutomaticUpgrade?: boolean | undefined;
	readonly forceUpdateTag?: string | undefined;
	readonly protectedSettings?: any | undefined;
	readonly protectedSettingsFromKeyVault?: any | undefined;
	readonly provisionAfterExtensions?: string[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly publisher?: string | undefined;
	readonly settings?: any | undefined;
	readonly suppressFailures?: boolean | undefined;
	readonly type?: string | undefined;
	readonly typeHandlerVersion?: string | undefined;
}
export interface VirtualMachineScaleSetHardwareProfile {
	readonly vmSizeProperties?: VMSizeProperties | undefined;
}
export interface VirtualMachineScaleSetIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned" | "SystemAssigned, UserAssigned") | undefined;
	readonly userAssignedIdentities?: VirtualMachineScaleSetIdentityUserAssignedIdentities | undefined;
}
export interface VirtualMachineScaleSetIdentityUserAssignedIdentities {
	readonly "[ key: string ]"?: VirtualMachineScaleSetIdentityUserAssignedIdentitiesValue | undefined;
}
export interface VirtualMachineScaleSetIdentityUserAssignedIdentitiesValue {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export interface VirtualMachineScaleSetIPConfiguration {
	readonly id?: string | undefined;
	readonly name: string;
	readonly properties?: VirtualMachineScaleSetIPConfigurationProperties | undefined;
}
export interface VirtualMachineScaleSetIPConfigurationProperties {
	readonly applicationGatewayBackendAddressPools?: SubResource[] | undefined;
	readonly applicationSecurityGroups?: SubResource[] | undefined;
	readonly loadBalancerBackendAddressPools?: SubResource[] | undefined;
	readonly loadBalancerInboundNatPools?: SubResource[] | undefined;
	readonly primary?: boolean | undefined;
	readonly privateIPAddressVersion?: ("IPv4" | "IPv6") | undefined;
	readonly publicIPAddressConfiguration?: VirtualMachineScaleSetPublicIPAddressConfiguration | undefined;
	readonly subnet?: ApiEntityReference | undefined;
}
export interface VirtualMachineScaleSetIpTag {
	readonly ipTagType?: string | undefined;
	readonly tag?: string | undefined;
}
export interface VirtualMachineScaleSetManagedDiskParameters {
	readonly diskEncryptionSet?: DiskEncryptionSetParameters | undefined;
	readonly securityProfile?: VMDiskSecurityProfile | undefined;
	readonly storageAccountType?:
		| ("Premium_LRS" | "Premium_ZRS" | "StandardSSD_LRS" | "StandardSSD_ZRS" | "Standard_LRS" | "UltraSSD_LRS")
		| undefined;
}
export interface VirtualMachineScaleSetNetworkConfiguration {
	readonly id?: string | undefined;
	readonly name: string;
	readonly properties?: VirtualMachineScaleSetNetworkConfigurationProperties | undefined;
}
export interface VirtualMachineScaleSetNetworkConfigurationDnsSettings {
	readonly dnsServers?: string[] | undefined;
}
export interface VirtualMachineScaleSetNetworkConfigurationProperties {
	readonly deleteOption?: ("Delete" | "Detach") | undefined;
	readonly dnsSettings?: VirtualMachineScaleSetNetworkConfigurationDnsSettings | undefined;
	readonly enableAcceleratedNetworking?: boolean | undefined;
	readonly enableFpga?: boolean | undefined;
	readonly enableIPForwarding?: boolean | undefined;
	readonly ipConfigurations: VirtualMachineScaleSetIPConfiguration[];
	readonly networkSecurityGroup?: SubResource | undefined;
	readonly primary?: boolean | undefined;
}
export interface VirtualMachineScaleSetNetworkProfile {
	readonly healthProbe?: ApiEntityReference | undefined;
	readonly networkApiVersion?: "2020-11-01" | undefined;
	readonly networkInterfaceConfigurations?: VirtualMachineScaleSetNetworkConfiguration[] | undefined;
}
export interface VirtualMachineScaleSetOSDisk {
	readonly caching?: ("None" | "ReadOnly") | undefined;
	readonly createOption: "Attach" | "Empty" | "FromImage";
	readonly diffDiskSettings?: DiffDiskSettings | undefined;
	readonly diskSizeGB?: number | undefined;
	readonly image?: VirtualHardDisk | undefined;
	readonly managedDisk?: VirtualMachineScaleSetManagedDiskParameters | undefined;
	readonly name?: string | undefined;
	readonly osType?: "Linux" | undefined;
	readonly vhdContainers?: string[] | undefined;
	readonly writeAcceleratorEnabled?: boolean | undefined;
}
export interface VirtualMachineScaleSetOSProfile {
	readonly adminPassword?: string | undefined;
	readonly adminUsername?: string | undefined;
	readonly allowExtensionOperations?: boolean | undefined;
	readonly computerNamePrefix?: string | undefined;
	readonly customData?: string | undefined;
	readonly linuxConfiguration?: LinuxConfiguration | undefined;
	readonly secrets?: VaultSecretGroup[] | undefined;
	readonly windowsConfiguration?: WindowsConfiguration | undefined;
}
export interface VirtualMachineScaleSetProperties {
	readonly additionalCapabilities?: AdditionalCapabilities | undefined;
	readonly automaticRepairsPolicy?: AutomaticRepairsPolicy | undefined;
	readonly doNotRunExtensionsOnOverprovisionedVMs?: boolean | undefined;
	readonly hostGroup?: SubResource | undefined;
	readonly orchestrationMode?: ("Flexible" | "Uniform") | undefined;
	readonly overprovision?: boolean | undefined;
	readonly platformFaultDomainCount?: number | undefined;
	readonly provisioningState?: string | undefined;
	readonly proximityPlacementGroup?: SubResource | undefined;
	readonly scaleInPolicy?: ScaleInPolicy | undefined;
	readonly singlePlacementGroup?: boolean | undefined;
	readonly spotRestorePolicy?: SpotRestorePolicy | undefined;
	readonly timeCreated?: string | undefined;
	readonly uniqueId?: string | undefined;
	readonly upgradePolicy?: UpgradePolicy | undefined;
	readonly virtualMachineProfile?: VirtualMachineScaleSetVMProfile | undefined;
	readonly zoneBalance?: boolean | undefined;
}
export interface VirtualMachineScaleSetPublicIPAddressConfiguration {
	readonly name: string;
	readonly properties?: VirtualMachineScaleSetPublicIPAddressConfigurationProperties | undefined;
	readonly sku?: PublicIPAddressSku | undefined;
}
export interface VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings {
	readonly domainNameLabel: string;
}
export interface VirtualMachineScaleSetPublicIPAddressConfigurationProperties {
	readonly deleteOption?: ("Delete" | "Detach") | undefined;
	readonly dnsSettings?: VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings | undefined;
	readonly idleTimeoutInMinutes?: number | undefined;
	readonly ipTags?: VirtualMachineScaleSetIpTag[] | undefined;
	readonly publicIPAddressVersion?: ("IPv4" | "IPv6") | undefined;
	readonly publicIPPrefix?: SubResource | undefined;
}
export interface VirtualMachineScaleSetStorageProfile {
	readonly dataDisks?: VirtualMachineScaleSetDataDisk[] | undefined;
	readonly imageReference?: ImageReference | undefined;
	readonly osDisk?: VirtualMachineScaleSetOSDisk | undefined;
}
export interface VirtualMachineScaleSetVMInstanceView {
	readonly assignedHost?: string | undefined;
	readonly bootDiagnostics?: BootDiagnosticsInstanceView | undefined;
	readonly disks?: DiskInstanceView[] | undefined;
	readonly extensions?: VirtualMachineExtensionInstanceView[] | undefined;
	readonly maintenanceRedeployStatus?: MaintenanceRedeployStatus | undefined;
	readonly placementGroupId?: string | undefined;
	readonly platformFaultDomain?: number | undefined;
	readonly platformUpdateDomain?: number | undefined;
	readonly rdpThumbPrint?: string | undefined;
	readonly statuses?: InstanceViewStatus[] | undefined;
	readonly vmAgent?: VirtualMachineAgentInstanceView | undefined;
	readonly vmHealth?: VirtualMachineHealthStatus | undefined;
}
export interface VirtualMachineScaleSetVMNetworkProfileConfiguration {
	readonly networkInterfaceConfigurations?: VirtualMachineScaleSetNetworkConfiguration[] | undefined;
}
export interface VirtualMachineScaleSetVMProfile {
	readonly applicationProfile?: ApplicationProfile | undefined;
	readonly billingProfile?: BillingProfile | undefined;
	readonly capacityReservation?: CapacityReservationProfile | undefined;
	readonly diagnosticsProfile?: DiagnosticsProfile | undefined;
	readonly evictionPolicy?: ("Deallocate" | "Delete") | undefined;
	readonly extensionProfile?: VirtualMachineScaleSetExtensionProfile | undefined;
	readonly hardwareProfile?: VirtualMachineScaleSetHardwareProfile | undefined;
	readonly licenseType?: string | undefined;
	readonly networkProfile?: VirtualMachineScaleSetNetworkProfile | undefined;
	readonly osProfile?: VirtualMachineScaleSetOSProfile | undefined;
	readonly priority?: ("Low" | "Regular" | "Spot") | undefined;
	readonly scheduledEventsProfile?: ScheduledEventsProfile | undefined;
	readonly securityProfile?: SecurityProfile | undefined;
	readonly storageProfile?: VirtualMachineScaleSetStorageProfile | undefined;
	readonly userData?: string | undefined;
}
export interface VirtualMachineScaleSetVMProperties {
	readonly additionalCapabilities?: AdditionalCapabilities | undefined;
	readonly availabilitySet?: SubResource | undefined;
	readonly diagnosticsProfile?: DiagnosticsProfile | undefined;
	readonly hardwareProfile?: HardwareProfile | undefined;
	readonly instanceView?: VirtualMachineScaleSetVMInstanceView | undefined;
	readonly latestModelApplied?: boolean | undefined;
	readonly licenseType?: string | undefined;
	readonly modelDefinitionApplied?: string | undefined;
	readonly networkProfile?: NetworkProfile | undefined;
	readonly networkProfileConfiguration?: VirtualMachineScaleSetVMNetworkProfileConfiguration | undefined;
	readonly osProfile?: OSProfile | undefined;
	readonly protectionPolicy?: VirtualMachineScaleSetVMProtectionPolicy | undefined;
	readonly provisioningState?: string | undefined;
	readonly securityProfile?: SecurityProfile | undefined;
	readonly storageProfile?: StorageProfile | undefined;
	readonly userData?: string | undefined;
	readonly vmId?: string | undefined;
}
export interface VirtualMachineScaleSetVMProtectionPolicy {
	readonly protectFromScaleIn?: boolean | undefined;
	readonly protectFromScaleSetActions?: boolean | undefined;
}
export interface VMDiskSecurityProfile {
	readonly diskEncryptionSet?: DiskEncryptionSetParameters | undefined;
	readonly securityEncryptionType?: ("DiskWithVMGuestState" | "VMGuestStateOnly") | undefined;
}
export interface VMGalleryApplication {
	readonly configurationReference?: string | undefined;
	readonly order?: number | undefined;
	readonly packageReferenceId: string;
	readonly tags?: string | undefined;
}
export interface VMSizeProperties {
	readonly vCPUsAvailable?: number | undefined;
	readonly vCPUsPerCore?: number | undefined;
}
export interface WindowsConfiguration {
	readonly additionalUnattendContent?: AdditionalUnattendContent[] | undefined;
	readonly enableAutomaticUpdates?: boolean | undefined;
	readonly patchSettings?: PatchSettings | undefined;
	readonly provisionVMAgent?: boolean | undefined;
	readonly timeZone?: string | undefined;
	readonly winRM?: WinRMConfiguration | undefined;
}
export interface WinRMConfiguration {
	readonly listeners?: WinRMListener[] | undefined;
}
export interface WinRMListener {
	readonly certificateUrl?: string | undefined;
	readonly protocol?: "Http" | undefined;
}
export default {
	availabilitySets: availabilitySets,
	capacityReservationGroups: capacityReservationGroups,
	"capacityReservationGroups/capacityReservations": capacityReservationGroups_capacityReservations,
	hostGroups: hostGroups,
	"hostGroups/hosts": hostGroups_hosts,
	images: images,
	"locations/edgeZones/publishers/artifacttypes/offers/skus/versions":
		locations_edgeZones_publishers_artifacttypes_offers_skus_versions,
	"locations/publishers/artifacttypes/offers/skus/versions": locations_publishers_artifacttypes_offers_skus_versions,
	"locations/publishers/artifacttypes/types/versions": locations_publishers_artifacttypes_types_versions,
	proximityPlacementGroups: proximityPlacementGroups,
	restorePointCollections: restorePointCollections,
	"restorePointCollections/restorePoints": restorePointCollections_restorePoints,
	sshPublicKeys: sshPublicKeys,
	virtualMachines: virtualMachines,
	"virtualMachines/extensions": virtualMachines_extensions,
	"virtualMachines/runCommands": virtualMachines_runCommands,
	virtualMachineScaleSets: virtualMachineScaleSets,
	"virtualMachineScaleSets/extensions": virtualMachineScaleSets_extensions,
	"virtualMachineScaleSets/rollingUpgrades": virtualMachineScaleSets_rollingUpgrades,
	"virtualMachineScaleSets/virtualMachines": virtualMachineScaleSets_virtualMachines,
	"virtualMachineScaleSets/virtualMachines/extensions": virtualMachineScaleSets_virtualMachines_extensions,
	"virtualMachineScaleSets/virtualMachines/runCommands": virtualMachineScaleSets_virtualMachines_runCommands,
};
