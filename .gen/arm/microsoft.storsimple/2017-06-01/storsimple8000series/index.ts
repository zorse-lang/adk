import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class managers extends ArmResource<managersComponentInputs> implements managersComponentOutputs {
	constructor(entity: ADKEntity, options: managersComponentInputs) {
		super(entity, options.name, "Microsoft.StorSimple/managers", "2017-06-01", options);
	}
	public readonly apiVersion: "2017-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorSimple/managers";
}
export interface managersComponentOutputs {
	readonly apiVersion: "2017-06-01";
	readonly id: string;
	readonly type: "Microsoft.StorSimple/managers";
}
export interface managersComponentInputs {
	readonly etag?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: ManagerProperties;
	readonly tags?: ResourceTags;
}
export class managers_accessControlRecords
	extends ArmResource<managers_accessControlRecordsComponentInputs>
	implements managers_accessControlRecordsComponentOutputs
{
	constructor(entity: ADKEntity, options: managers_accessControlRecordsComponentInputs) {
		super(entity, options.name, "Microsoft.StorSimple/managers/accessControlRecords", "2017-06-01", options);
	}
	public readonly apiVersion: "2017-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorSimple/managers/accessControlRecords";
}
export interface managers_accessControlRecordsComponentOutputs {
	readonly apiVersion: "2017-06-01";
	readonly id: string;
	readonly type: "Microsoft.StorSimple/managers/accessControlRecords";
}
export interface managers_accessControlRecordsComponentInputs {
	readonly kind?: "Series8000";
	readonly name: string;
	readonly properties: AccessControlRecordProperties;
}
export class managers_bandwidthSettings
	extends ArmResource<managers_bandwidthSettingsComponentInputs>
	implements managers_bandwidthSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: managers_bandwidthSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.StorSimple/managers/bandwidthSettings", "2017-06-01", options);
	}
	public readonly apiVersion: "2017-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorSimple/managers/bandwidthSettings";
}
export interface managers_bandwidthSettingsComponentOutputs {
	readonly apiVersion: "2017-06-01";
	readonly id: string;
	readonly type: "Microsoft.StorSimple/managers/bandwidthSettings";
}
export interface managers_bandwidthSettingsComponentInputs {
	readonly kind?: "Series8000";
	readonly name: string;
	readonly properties: BandwidthRateSettingProperties;
}
export class managers_devices_alertSettings
	extends ArmResource<managers_devices_alertSettingsComponentInputs>
	implements managers_devices_alertSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: managers_devices_alertSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.StorSimple/managers/devices/alertSettings", "2017-06-01", options);
	}
	public readonly apiVersion: "2017-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorSimple/managers/devices/alertSettings";
}
export interface managers_devices_alertSettingsComponentOutputs {
	readonly apiVersion: "2017-06-01";
	readonly id: string;
	readonly type: "Microsoft.StorSimple/managers/devices/alertSettings";
}
export interface managers_devices_alertSettingsComponentInputs {
	readonly kind?: "Series8000";
	readonly name: string;
	readonly properties: AlertNotificationProperties;
}
export class managers_devices_backupPolicies
	extends ArmResource<managers_devices_backupPoliciesComponentInputs>
	implements managers_devices_backupPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: managers_devices_backupPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.StorSimple/managers/devices/backupPolicies", "2017-06-01", options);
	}
	public readonly apiVersion: "2017-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorSimple/managers/devices/backupPolicies";
}
export interface managers_devices_backupPoliciesComponentOutputs {
	readonly apiVersion: "2017-06-01";
	readonly id: string;
	readonly type: "Microsoft.StorSimple/managers/devices/backupPolicies";
}
export interface managers_devices_backupPoliciesComponentInputs {
	readonly kind?: "Series8000";
	readonly name: string;
	readonly properties: BackupPolicyProperties;
}
export class managers_devices_backupPolicies_schedules
	extends ArmResource<managers_devices_backupPolicies_schedulesComponentInputs>
	implements managers_devices_backupPolicies_schedulesComponentOutputs
{
	constructor(entity: ADKEntity, options: managers_devices_backupPolicies_schedulesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.StorSimple/managers/devices/backupPolicies/schedules",
			"2017-06-01",
			options,
		);
	}
	public readonly apiVersion: "2017-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorSimple/managers/devices/backupPolicies/schedules";
}
export interface managers_devices_backupPolicies_schedulesComponentOutputs {
	readonly apiVersion: "2017-06-01";
	readonly id: string;
	readonly type: "Microsoft.StorSimple/managers/devices/backupPolicies/schedules";
}
export interface managers_devices_backupPolicies_schedulesComponentInputs {
	readonly kind?: "Series8000";
	readonly name: string;
	readonly properties: BackupScheduleProperties;
}
export class managers_devices_timeSettings
	extends ArmResource<managers_devices_timeSettingsComponentInputs>
	implements managers_devices_timeSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: managers_devices_timeSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.StorSimple/managers/devices/timeSettings", "2017-06-01", options);
	}
	public readonly apiVersion: "2017-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorSimple/managers/devices/timeSettings";
}
export interface managers_devices_timeSettingsComponentOutputs {
	readonly apiVersion: "2017-06-01";
	readonly id: string;
	readonly type: "Microsoft.StorSimple/managers/devices/timeSettings";
}
export interface managers_devices_timeSettingsComponentInputs {
	readonly kind?: "Series8000";
	readonly name: string;
	readonly properties: TimeSettingsProperties;
}
export class managers_devices_volumeContainers
	extends ArmResource<managers_devices_volumeContainersComponentInputs>
	implements managers_devices_volumeContainersComponentOutputs
{
	constructor(entity: ADKEntity, options: managers_devices_volumeContainersComponentInputs) {
		super(entity, options.name, "Microsoft.StorSimple/managers/devices/volumeContainers", "2017-06-01", options);
	}
	public readonly apiVersion: "2017-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorSimple/managers/devices/volumeContainers";
}
export interface managers_devices_volumeContainersComponentOutputs {
	readonly apiVersion: "2017-06-01";
	readonly id: string;
	readonly type: "Microsoft.StorSimple/managers/devices/volumeContainers";
}
export interface managers_devices_volumeContainersComponentInputs {
	readonly kind?: "Series8000";
	readonly name: string;
	readonly properties: VolumeContainerProperties;
}
export class managers_devices_volumeContainers_volumes
	extends ArmResource<managers_devices_volumeContainers_volumesComponentInputs>
	implements managers_devices_volumeContainers_volumesComponentOutputs
{
	constructor(entity: ADKEntity, options: managers_devices_volumeContainers_volumesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.StorSimple/managers/devices/volumeContainers/volumes",
			"2017-06-01",
			options,
		);
	}
	public readonly apiVersion: "2017-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorSimple/managers/devices/volumeContainers/volumes";
}
export interface managers_devices_volumeContainers_volumesComponentOutputs {
	readonly apiVersion: "2017-06-01";
	readonly id: string;
	readonly type: "Microsoft.StorSimple/managers/devices/volumeContainers/volumes";
}
export interface managers_devices_volumeContainers_volumesComponentInputs {
	readonly kind?: "Series8000";
	readonly name: string;
	readonly properties: VolumeProperties;
}
export class managers_extendedInformation
	extends ArmResource<managers_extendedInformationComponentInputs>
	implements managers_extendedInformationComponentOutputs
{
	constructor(entity: ADKEntity, options: managers_extendedInformationComponentInputs) {
		super(entity, options.name, "Microsoft.StorSimple/managers/extendedInformation", "2017-06-01", options);
	}
	public readonly apiVersion: "2017-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorSimple/managers/extendedInformation";
}
export interface managers_extendedInformationComponentOutputs {
	readonly apiVersion: "2017-06-01";
	readonly id: string;
	readonly type: "Microsoft.StorSimple/managers/extendedInformation";
}
export interface managers_extendedInformationComponentInputs {
	readonly etag?: string;
	readonly kind?: "Series8000";
	readonly name: string;
	readonly properties?: ManagerExtendedInfoProperties;
}
export class managers_storageAccountCredentials
	extends ArmResource<managers_storageAccountCredentialsComponentInputs>
	implements managers_storageAccountCredentialsComponentOutputs
{
	constructor(entity: ADKEntity, options: managers_storageAccountCredentialsComponentInputs) {
		super(entity, options.name, "Microsoft.StorSimple/managers/storageAccountCredentials", "2017-06-01", options);
	}
	public readonly apiVersion: "2017-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorSimple/managers/storageAccountCredentials";
}
export interface managers_storageAccountCredentialsComponentOutputs {
	readonly apiVersion: "2017-06-01";
	readonly id: string;
	readonly type: "Microsoft.StorSimple/managers/storageAccountCredentials";
}
export interface managers_storageAccountCredentialsComponentInputs {
	readonly kind?: "Series8000";
	readonly name: string;
	readonly properties: StorageAccountCredentialProperties;
}
export function listActivationKey(resource: managers): Key {
	if (resource.apiVersion !== "2017-06-01") {
		throw new Error(`listActivationKey is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.StorSimple/managers") {
		throw new Error(`listActivationKey is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listFailoverSets(resource: ArmResource): FailoverSetsList {
	if (resource.apiVersion !== "2017-06-01") {
		throw new Error(`listFailoverSets is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.StorSimple/managers/devices") {
		throw new Error(`listFailoverSets is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listFailoverTargets(resource: ArmResource, input: ListFailoverTargetsRequest): FailoverTargetsList {
	if (resource.apiVersion !== "2017-06-01") {
		throw new Error(`listFailoverTargets is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.StorSimple/managers/devices") {
		throw new Error(`listFailoverTargets is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listPublicEncryptionKey(resource: managers): SymmetricEncryptedSecret {
	if (resource.apiVersion !== "2017-06-01") {
		throw new Error(`listPublicEncryptionKey is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.StorSimple/managers") {
		throw new Error(`listPublicEncryptionKey is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AccessControlRecordProperties {
	readonly initiatorName: string;
	readonly volumeCount?: number;
}
export interface AlertNotificationProperties {
	readonly additionalRecipientEmailList?: string[];
	readonly alertNotificationCulture?: string;
	readonly emailNotification: "Disabled";
	readonly notificationToServiceOwners?: "Disabled";
}
export interface AsymmetricEncryptedSecret {
	readonly encryptionAlgorithm: "AES256" | "None";
	readonly encryptionCertThumbprint?: string;
	readonly value: string;
}
export interface BackupPolicyProperties {
	readonly backupPolicyCreationType?: "BySSM";
	readonly lastBackupTime?: string;
	readonly nextBackupTime?: string;
	readonly scheduledBackupStatus?: "Disabled";
	readonly schedulesCount?: number;
	readonly ssmHostName?: string;
	readonly volumeIds: string[];
}
export interface BackupScheduleProperties {
	readonly backupType: "CloudSnapshot";
	readonly lastSuccessfulRun?: string;
	readonly retentionCount: number;
	readonly scheduleRecurrence: ScheduleRecurrence;
	readonly scheduleStatus: "Disabled";
	readonly startTime: string;
}
export interface BandwidthRateSettingProperties {
	readonly schedules: BandwidthSchedule[];
	readonly volumeCount?: number;
}
export interface BandwidthSchedule {
	readonly days: "Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday"[];
	readonly rateInMbps: number;
	readonly start: Time;
	readonly stop: Time;
}
export interface FailoverSet {
	readonly eligibilityResult?: FailoverSetEligibilityResult;
	readonly volumeContainers?: VolumeContainerFailoverMetadata[];
}
export interface FailoverSetEligibilityResult {
	readonly errorMessage?: string;
	readonly isEligibleForFailover?: boolean;
}
export interface FailoverSetsList {
	readonly value?: FailoverSet[];
}
export interface FailoverTarget {
	readonly availableLocalStorageInBytes?: number;
	readonly availableTieredStorageInBytes?: number;
	readonly dataContainersCount?: number;
	readonly deviceId?: string;
	readonly deviceLocation?: string;
	readonly deviceSoftwareVersion?: string;
	readonly deviceStatus?:
		| "Creating"
		| "Deactivated"
		| "Deactivating"
		| "Deleted"
		| "MaintenanceMode"
		| "Offline"
		| "Online"
		| "Provisioning"
		| "ReadyToSetup"
		| "RequiresAttention";
	readonly eligibilityResult?: TargetEligibilityResult;
	readonly friendlyDeviceSoftwareVersion?: string;
	readonly modelDescription?: string;
	readonly volumesCount?: number;
}
export interface FailoverTargetsList {
	readonly value?: FailoverTarget[];
}
export interface Key {
	readonly activationKey: string;
}
export interface ListFailoverTargetsRequest {
	readonly volumeContainers?: string[];
}
export interface ManagerExtendedInfoProperties {
	readonly algorithm: string;
	readonly encryptionKey?: string;
	readonly encryptionKeyThumbprint?: string;
	readonly integrityKey: string;
	readonly portalCertificateThumbprint?: string;
	readonly version?: string;
}
export interface ManagerIntrinsicSettings {
	readonly type: "GardaV1";
}
export interface ManagerProperties {
	readonly cisIntrinsicSettings?: ManagerIntrinsicSettings;
	readonly provisioningState?: string;
	readonly sku?: ManagerSku;
}
export interface ManagerSku {
	readonly name: "Standard";
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface ScheduleRecurrence {
	readonly recurrenceType: "Daily" | "Hourly" | "Minutes";
	readonly recurrenceValue: number;
	readonly weeklyDaysList?: "Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday"[];
}
export interface StorageAccountCredentialProperties {
	readonly accessKey?: AsymmetricEncryptedSecret;
	readonly endPoint: string;
	readonly sslStatus: "Disabled";
	readonly volumesCount?: number;
}
export interface SymmetricEncryptedSecret {
	readonly encryptionAlgorithm: "AES256" | "None";
	readonly value: string;
	readonly valueCertificateThumbprint?: string;
}
export interface TargetEligibilityErrorMessage {
	readonly message?: string;
	readonly resolution?: string;
	readonly resultCode?:
		| "LocalToTieredVolumesConversionWarning"
		| "TargetAndSourceCannotBeSameError"
		| "TargetInsufficientCapacityError"
		| "TargetInsufficientLocalVolumeMemoryError"
		| "TargetInsufficientTieredVolumeMemoryError"
		| "TargetIsNotOnlineError";
}
export interface TargetEligibilityResult {
	readonly eligibilityStatus?: "Eligible";
	readonly messages?: TargetEligibilityErrorMessage[];
}
export interface Time {
	readonly hours: number;
	readonly minutes: number;
	readonly seconds: number;
}
export interface TimeSettingsProperties {
	readonly primaryTimeServer?: string;
	readonly secondaryTimeServer?: string[];
	readonly timeZone: string;
}
export interface VolumeContainerFailoverMetadata {
	readonly volumeContainerId?: string;
	readonly volumes?: VolumeFailoverMetadata[];
}
export interface VolumeContainerProperties {
	readonly bandWidthRateInMbps?: number;
	readonly bandwidthSettingId?: string;
	readonly encryptionKey?: AsymmetricEncryptedSecret;
	readonly encryptionStatus?: "Disabled";
	readonly ownerShipStatus?: "NotOwned";
	readonly storageAccountCredentialId: string;
	readonly totalCloudStorageUsageInBytes?: number;
	readonly volumeCount?: number;
}
export interface VolumeFailoverMetadata {
	readonly backupCreatedDate?: string;
	readonly backupElementId?: string;
	readonly backupId?: string;
	readonly backupPolicyId?: string;
	readonly sizeInBytes?: number;
	readonly volumeId?: string;
	readonly volumeType?: "Archival" | "LocallyPinned";
}
export interface VolumeProperties {
	readonly accessControlRecordIds: string[];
	readonly backupPolicyIds?: string[];
	readonly backupStatus?: "Disabled";
	readonly monitoringStatus: "Disabled";
	readonly operationStatus?: "Deleting" | "None" | "Restoring";
	readonly sizeInBytes: number;
	readonly volumeContainerId?: string;
	readonly volumeStatus: "Offline";
	readonly volumeType: "Archival" | "LocallyPinned";
}
export default {
	managers: managers,
	"managers/accessControlRecords": managers_accessControlRecords,
	"managers/bandwidthSettings": managers_bandwidthSettings,
	"managers/devices/alertSettings": managers_devices_alertSettings,
	"managers/devices/backupPolicies": managers_devices_backupPolicies,
	"managers/devices/backupPolicies/schedules": managers_devices_backupPolicies_schedules,
	"managers/devices/timeSettings": managers_devices_timeSettings,
	"managers/devices/volumeContainers": managers_devices_volumeContainers,
	"managers/devices/volumeContainers/volumes": managers_devices_volumeContainers_volumes,
	"managers/extendedInformation": managers_extendedInformation,
	"managers/storageAccountCredentials": managers_storageAccountCredentials,
};
