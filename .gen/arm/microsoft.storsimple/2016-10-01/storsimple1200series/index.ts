import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class managers extends ArmResource<managersComponentInputs> implements managersComponentOutputs {
	constructor(entity: ADKEntity, options: managersComponentInputs) {
		super(entity, options.name, "Microsoft.StorSimple/managers", "2016-10-01", options);
	}
	public readonly apiVersion: "2016-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorSimple/managers";
}
export interface managersComponentOutputs {
	readonly apiVersion: "2016-10-01";
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
		super(entity, options.name, "Microsoft.StorSimple/managers/accessControlRecords", "2016-10-01", options);
	}
	public readonly apiVersion: "2016-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorSimple/managers/accessControlRecords";
}
export interface managers_accessControlRecordsComponentOutputs {
	readonly apiVersion: "2016-10-01";
	readonly id: string;
	readonly type: "Microsoft.StorSimple/managers/accessControlRecords";
}
export interface managers_accessControlRecordsComponentInputs {
	readonly name: string;
	readonly properties: AccessControlRecordProperties;
}
export class managers_certificates
	extends ArmResource<managers_certificatesComponentInputs>
	implements managers_certificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: managers_certificatesComponentInputs) {
		super(entity, options.name, "Microsoft.StorSimple/managers/certificates", "2016-10-01", options);
	}
	public readonly apiVersion: "2016-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorSimple/managers/certificates";
}
export interface managers_certificatesComponentOutputs {
	readonly apiVersion: "2016-10-01";
	readonly id: string;
	readonly type: "Microsoft.StorSimple/managers/certificates";
}
export interface managers_certificatesComponentInputs {
	readonly contractVersion?:
		| "InvalidVersion"
		| "V2011_09"
		| "V2012_02"
		| "V2012_05"
		| "V2012_12"
		| "V2013_04"
		| "V2013_10"
		| "V2013_11"
		| "V2014_04"
		| "V2014_06"
		| "V2014_07"
		| "V2014_09"
		| "V2014_10"
		| "V2014_12"
		| "V2015_01"
		| "V2015_02"
		| "V2015_04"
		| "V2015_05"
		| "V2015_06"
		| "V2015_07"
		| "V2015_08"
		| "V2015_10"
		| "V2015_12"
		| "V2016_01"
		| "V2016_02"
		| "V2016_04"
		| "V2016_05"
		| "V2016_07";
	readonly name: string;
	readonly properties: RawCertificateData;
}
export class managers_devices_alertSettings
	extends ArmResource<managers_devices_alertSettingsComponentInputs>
	implements managers_devices_alertSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: managers_devices_alertSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.StorSimple/managers/devices/alertSettings", "2016-10-01", options);
	}
	public readonly apiVersion: "2016-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorSimple/managers/devices/alertSettings";
}
export interface managers_devices_alertSettingsComponentOutputs {
	readonly apiVersion: "2016-10-01";
	readonly id: string;
	readonly type: "Microsoft.StorSimple/managers/devices/alertSettings";
}
export interface managers_devices_alertSettingsComponentInputs {
	readonly name: string;
	readonly properties: AlertSettingsProperties;
}
export class managers_devices_backupScheduleGroups
	extends ArmResource<managers_devices_backupScheduleGroupsComponentInputs>
	implements managers_devices_backupScheduleGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: managers_devices_backupScheduleGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.StorSimple/managers/devices/backupScheduleGroups", "2016-10-01", options);
	}
	public readonly apiVersion: "2016-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorSimple/managers/devices/backupScheduleGroups";
}
export interface managers_devices_backupScheduleGroupsComponentOutputs {
	readonly apiVersion: "2016-10-01";
	readonly id: string;
	readonly type: "Microsoft.StorSimple/managers/devices/backupScheduleGroups";
}
export interface managers_devices_backupScheduleGroupsComponentInputs {
	readonly name: string;
	readonly properties: BackupScheduleGroupProperties;
}
export class managers_devices_chapSettings
	extends ArmResource<managers_devices_chapSettingsComponentInputs>
	implements managers_devices_chapSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: managers_devices_chapSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.StorSimple/managers/devices/chapSettings", "2016-10-01", options);
	}
	public readonly apiVersion: "2016-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorSimple/managers/devices/chapSettings";
}
export interface managers_devices_chapSettingsComponentOutputs {
	readonly apiVersion: "2016-10-01";
	readonly id: string;
	readonly type: "Microsoft.StorSimple/managers/devices/chapSettings";
}
export interface managers_devices_chapSettingsComponentInputs {
	readonly name: string;
	readonly properties: ChapProperties;
}
export class managers_devices_fileservers
	extends ArmResource<managers_devices_fileserversComponentInputs>
	implements managers_devices_fileserversComponentOutputs
{
	constructor(entity: ADKEntity, options: managers_devices_fileserversComponentInputs) {
		super(entity, options.name, "Microsoft.StorSimple/managers/devices/fileservers", "2016-10-01", options);
	}
	public readonly apiVersion: "2016-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorSimple/managers/devices/fileservers";
}
export interface managers_devices_fileserversComponentOutputs {
	readonly apiVersion: "2016-10-01";
	readonly id: string;
	readonly type: "Microsoft.StorSimple/managers/devices/fileservers";
}
export interface managers_devices_fileserversComponentInputs {
	readonly name: string;
	readonly properties: FileServerProperties;
}
export class managers_devices_fileservers_shares
	extends ArmResource<managers_devices_fileservers_sharesComponentInputs>
	implements managers_devices_fileservers_sharesComponentOutputs
{
	constructor(entity: ADKEntity, options: managers_devices_fileservers_sharesComponentInputs) {
		super(entity, options.name, "Microsoft.StorSimple/managers/devices/fileservers/shares", "2016-10-01", options);
	}
	public readonly apiVersion: "2016-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorSimple/managers/devices/fileservers/shares";
}
export interface managers_devices_fileservers_sharesComponentOutputs {
	readonly apiVersion: "2016-10-01";
	readonly id: string;
	readonly type: "Microsoft.StorSimple/managers/devices/fileservers/shares";
}
export interface managers_devices_fileservers_sharesComponentInputs {
	readonly name: string;
	readonly properties: FileShareProperties;
}
export class managers_devices_iscsiservers
	extends ArmResource<managers_devices_iscsiserversComponentInputs>
	implements managers_devices_iscsiserversComponentOutputs
{
	constructor(entity: ADKEntity, options: managers_devices_iscsiserversComponentInputs) {
		super(entity, options.name, "Microsoft.StorSimple/managers/devices/iscsiservers", "2016-10-01", options);
	}
	public readonly apiVersion: "2016-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorSimple/managers/devices/iscsiservers";
}
export interface managers_devices_iscsiserversComponentOutputs {
	readonly apiVersion: "2016-10-01";
	readonly id: string;
	readonly type: "Microsoft.StorSimple/managers/devices/iscsiservers";
}
export interface managers_devices_iscsiserversComponentInputs {
	readonly name: string;
	readonly properties: IscsiServerProperties;
}
export class managers_devices_iscsiservers_disks
	extends ArmResource<managers_devices_iscsiservers_disksComponentInputs>
	implements managers_devices_iscsiservers_disksComponentOutputs
{
	constructor(entity: ADKEntity, options: managers_devices_iscsiservers_disksComponentInputs) {
		super(entity, options.name, "Microsoft.StorSimple/managers/devices/iscsiservers/disks", "2016-10-01", options);
	}
	public readonly apiVersion: "2016-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorSimple/managers/devices/iscsiservers/disks";
}
export interface managers_devices_iscsiservers_disksComponentOutputs {
	readonly apiVersion: "2016-10-01";
	readonly id: string;
	readonly type: "Microsoft.StorSimple/managers/devices/iscsiservers/disks";
}
export interface managers_devices_iscsiservers_disksComponentInputs {
	readonly name: string;
	readonly properties: IscsiDiskProperties;
}
export class managers_extendedInformation
	extends ArmResource<managers_extendedInformationComponentInputs>
	implements managers_extendedInformationComponentOutputs
{
	constructor(entity: ADKEntity, options: managers_extendedInformationComponentInputs) {
		super(entity, options.name, "Microsoft.StorSimple/managers/extendedInformation", "2016-10-01", options);
	}
	public readonly apiVersion: "2016-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorSimple/managers/extendedInformation";
}
export interface managers_extendedInformationComponentOutputs {
	readonly apiVersion: "2016-10-01";
	readonly id: string;
	readonly type: "Microsoft.StorSimple/managers/extendedInformation";
}
export interface managers_extendedInformationComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties: ManagerExtendedInfoProperties;
}
export class managers_storageAccountCredentials
	extends ArmResource<managers_storageAccountCredentialsComponentInputs>
	implements managers_storageAccountCredentialsComponentOutputs
{
	constructor(entity: ADKEntity, options: managers_storageAccountCredentialsComponentInputs) {
		super(entity, options.name, "Microsoft.StorSimple/managers/storageAccountCredentials", "2016-10-01", options);
	}
	public readonly apiVersion: "2016-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorSimple/managers/storageAccountCredentials";
}
export interface managers_storageAccountCredentialsComponentOutputs {
	readonly apiVersion: "2016-10-01";
	readonly id: string;
	readonly type: "Microsoft.StorSimple/managers/storageAccountCredentials";
}
export interface managers_storageAccountCredentialsComponentInputs {
	readonly name: string;
	readonly properties: StorageAccountCredentialProperties;
}
export class managers_storageDomains
	extends ArmResource<managers_storageDomainsComponentInputs>
	implements managers_storageDomainsComponentOutputs
{
	constructor(entity: ADKEntity, options: managers_storageDomainsComponentInputs) {
		super(entity, options.name, "Microsoft.StorSimple/managers/storageDomains", "2016-10-01", options);
	}
	public readonly apiVersion: "2016-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorSimple/managers/storageDomains";
}
export interface managers_storageDomainsComponentOutputs {
	readonly apiVersion: "2016-10-01";
	readonly id: string;
	readonly type: "Microsoft.StorSimple/managers/storageDomains";
}
export interface managers_storageDomainsComponentInputs {
	readonly name: string;
	readonly properties: StorageDomainProperties;
}
export interface AccessControlRecordProperties {
	readonly initiatorName: string;
}
export interface AlertSettingsProperties {
	readonly additionalRecipientEmailList?: string[];
	readonly alertNotificationCulture: string;
	readonly emailNotification: "Disabled";
	readonly notificationToServiceOwners: "Disabled";
}
export interface AsymmetricEncryptedSecret {
	readonly encryptionAlgorithm: "AES256" | "None";
	readonly encryptionCertificateThumbprint?: string;
	readonly value: string;
}
export interface BackupScheduleGroupProperties {
	readonly startTime: Time;
}
export interface ChapProperties {
	readonly password: AsymmetricEncryptedSecret;
}
export interface FileServerProperties {
	readonly backupScheduleGroupId: string;
	readonly description?: string;
	readonly domainName: string;
	readonly storageDomainId: string;
}
export interface FileShareProperties {
	readonly adminUser: string;
	readonly dataPolicy: "Cloud" | "Invalid" | "Local";
	readonly description?: string;
	readonly localUsedCapacityInBytes?: number;
	readonly monitoringStatus: "Disabled";
	readonly provisionedCapacityInBytes: number;
	readonly shareStatus: "Offline";
	readonly usedCapacityInBytes?: number;
}
export interface IscsiDiskProperties {
	readonly accessControlRecords: string[];
	readonly dataPolicy: "Cloud" | "Invalid" | "Local";
	readonly description?: string;
	readonly diskStatus: "Offline";
	readonly localUsedCapacityInBytes?: number;
	readonly monitoringStatus: "Disabled";
	readonly provisionedCapacityInBytes: number;
	readonly usedCapacityInBytes?: number;
}
export interface IscsiServerProperties {
	readonly backupScheduleGroupId: string;
	readonly chapId?: string;
	readonly description?: string;
	readonly reverseChapId?: string;
	readonly storageDomainId: string;
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
export interface RawCertificateData {
	readonly authType?: "AccessControlService" | "AzureActiveDirectory";
	readonly certificate: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface StorageAccountCredentialProperties {
	readonly accessKey?: AsymmetricEncryptedSecret;
	readonly cloudType: "Azure" | "HP" | "OpenStack" | "S3";
	readonly enableSSL: "Disabled";
	readonly endPoint: string;
	readonly location?: string;
	readonly login: string;
}
export interface StorageDomainProperties {
	readonly encryptionKey?: AsymmetricEncryptedSecret;
	readonly encryptionStatus: "Disabled";
	readonly storageAccountCredentialIds: string[];
}
export interface Time {
	readonly hour: number;
	readonly minute: number;
}
export default {
	managers: managers,
	"managers/accessControlRecords": managers_accessControlRecords,
	"managers/certificates": managers_certificates,
	"managers/devices/alertSettings": managers_devices_alertSettings,
	"managers/devices/backupScheduleGroups": managers_devices_backupScheduleGroups,
	"managers/devices/chapSettings": managers_devices_chapSettings,
	"managers/devices/fileservers": managers_devices_fileservers,
	"managers/devices/fileservers/shares": managers_devices_fileservers_shares,
	"managers/devices/iscsiservers": managers_devices_iscsiservers,
	"managers/devices/iscsiservers/disks": managers_devices_iscsiservers_disks,
	"managers/extendedInformation": managers_extendedInformation,
	"managers/storageAccountCredentials": managers_storageAccountCredentials,
	"managers/storageDomains": managers_storageDomains,
};
