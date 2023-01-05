import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class dataBoxEdgeDevices
	extends ArmResource<dataBoxEdgeDevicesComponentInputs>
	implements dataBoxEdgeDevicesComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevicesComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices", "2019-03-01", options);
	}
	public readonly apiVersion: "2019-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices";
}
export interface dataBoxEdgeDevicesComponentOutputs {
	readonly apiVersion: "2019-03-01";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices";
}
export interface dataBoxEdgeDevicesComponentInputs {
	readonly etag?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: DataBoxEdgeDeviceProperties;
	readonly sku?: Sku;
	readonly tags?: DataBoxEdgeDeviceTags;
}
export class dataBoxEdgeDevices_alerts
	extends ArmResource<dataBoxEdgeDevices_alertsComponentInputs>
	implements dataBoxEdgeDevices_alertsComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_alertsComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/alerts", "2019-03-01", options);
	}
	public readonly apiVersion: "2019-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/alerts";
}
export interface dataBoxEdgeDevices_alertsComponentOutputs {
	readonly apiVersion: "2019-03-01";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/alerts";
}
export interface dataBoxEdgeDevices_alertsComponentInputs {
	readonly name: string;
	readonly properties?: AlertProperties;
}
export class dataBoxEdgeDevices_bandwidthSchedules
	extends ArmResource<dataBoxEdgeDevices_bandwidthSchedulesComponentInputs>
	implements dataBoxEdgeDevices_bandwidthSchedulesComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_bandwidthSchedulesComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/bandwidthSchedules", "2019-03-01", options);
	}
	public readonly apiVersion: "2019-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/bandwidthSchedules";
}
export interface dataBoxEdgeDevices_bandwidthSchedulesComponentOutputs {
	readonly apiVersion: "2019-03-01";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/bandwidthSchedules";
}
export interface dataBoxEdgeDevices_bandwidthSchedulesComponentInputs {
	readonly name: string;
	readonly properties: BandwidthScheduleProperties;
}
export class dataBoxEdgeDevices_networkSettings
	extends ArmResource<dataBoxEdgeDevices_networkSettingsComponentInputs>
	implements dataBoxEdgeDevices_networkSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_networkSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/networkSettings", "2019-03-01", options);
	}
	public readonly apiVersion: "2019-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/networkSettings";
}
export interface dataBoxEdgeDevices_networkSettingsComponentOutputs {
	readonly apiVersion: "2019-03-01";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/networkSettings";
}
export interface dataBoxEdgeDevices_networkSettingsComponentInputs {
	readonly name: string;
	readonly properties?: NetworkSettingsProperties;
}
export class dataBoxEdgeDevices_orders
	extends ArmResource<dataBoxEdgeDevices_ordersComponentInputs>
	implements dataBoxEdgeDevices_ordersComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_ordersComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/orders", "2019-03-01", options);
	}
	public readonly apiVersion: "2019-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/orders";
}
export interface dataBoxEdgeDevices_ordersComponentOutputs {
	readonly apiVersion: "2019-03-01";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/orders";
}
export interface dataBoxEdgeDevices_ordersComponentInputs {
	readonly name: string;
	readonly properties?: OrderProperties;
}
export class dataBoxEdgeDevices_roles_IOT
	extends ArmResource<dataBoxEdgeDevices_roles_IOTComponentInputs>
	implements dataBoxEdgeDevices_roles_IOTComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_roles_IOTComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles", "2019-03-01", options);
	}
	public readonly apiVersion: "2019-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles";
}
export interface dataBoxEdgeDevices_roles_IOTComponentOutputs {
	readonly apiVersion: "2019-03-01";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles";
}
export interface dataBoxEdgeDevices_roles_IOTComponentInputs {
	readonly name: string;
	readonly kind: "IOT";
	readonly properties?: IoTRoleProperties;
}
export class dataBoxEdgeDevices_shares
	extends ArmResource<dataBoxEdgeDevices_sharesComponentInputs>
	implements dataBoxEdgeDevices_sharesComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_sharesComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/shares", "2019-03-01", options);
	}
	public readonly apiVersion: "2019-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/shares";
}
export interface dataBoxEdgeDevices_sharesComponentOutputs {
	readonly apiVersion: "2019-03-01";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/shares";
}
export interface dataBoxEdgeDevices_sharesComponentInputs {
	readonly name: string;
	readonly properties: ShareProperties;
}
export class dataBoxEdgeDevices_storageAccountCredentials
	extends ArmResource<dataBoxEdgeDevices_storageAccountCredentialsComponentInputs>
	implements dataBoxEdgeDevices_storageAccountCredentialsComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_storageAccountCredentialsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccountCredentials",
			"2019-03-01",
			options,
		);
	}
	public readonly apiVersion: "2019-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccountCredentials";
}
export interface dataBoxEdgeDevices_storageAccountCredentialsComponentOutputs {
	readonly apiVersion: "2019-03-01";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccountCredentials";
}
export interface dataBoxEdgeDevices_storageAccountCredentialsComponentInputs {
	readonly name: string;
	readonly properties: StorageAccountCredentialProperties;
}
export class dataBoxEdgeDevices_triggers_FileEvent
	extends ArmResource<dataBoxEdgeDevices_triggers_FileEventComponentInputs>
	implements dataBoxEdgeDevices_triggers_FileEventComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_triggers_FileEventComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers", "2019-03-01", options);
	}
	public readonly apiVersion: "2019-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers";
}
export interface dataBoxEdgeDevices_triggers_FileEventComponentOutputs {
	readonly apiVersion: "2019-03-01";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers";
}
export interface dataBoxEdgeDevices_triggers_FileEventComponentInputs {
	readonly name: string;
	readonly kind: "FileEvent";
	readonly properties: FileTriggerProperties;
}
export class dataBoxEdgeDevices_triggers_PeriodicTimerEvent
	extends ArmResource<dataBoxEdgeDevices_triggers_PeriodicTimerEventComponentInputs>
	implements dataBoxEdgeDevices_triggers_PeriodicTimerEventComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_triggers_PeriodicTimerEventComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers", "2019-03-01", options);
	}
	public readonly apiVersion: "2019-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers";
}
export interface dataBoxEdgeDevices_triggers_PeriodicTimerEventComponentOutputs {
	readonly apiVersion: "2019-03-01";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers";
}
export interface dataBoxEdgeDevices_triggers_PeriodicTimerEventComponentInputs {
	readonly name: string;
	readonly kind: "PeriodicTimerEvent";
	readonly properties: PeriodicTimerProperties;
}
export class dataBoxEdgeDevices_updateSummary
	extends ArmResource<dataBoxEdgeDevices_updateSummaryComponentInputs>
	implements dataBoxEdgeDevices_updateSummaryComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_updateSummaryComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/updateSummary", "2019-03-01", options);
	}
	public readonly apiVersion: "2019-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/updateSummary";
}
export interface dataBoxEdgeDevices_updateSummaryComponentOutputs {
	readonly apiVersion: "2019-03-01";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/updateSummary";
}
export interface dataBoxEdgeDevices_updateSummaryComponentInputs {
	readonly name: string;
	readonly properties?: UpdateSummaryProperties;
}
export class dataBoxEdgeDevices_users
	extends ArmResource<dataBoxEdgeDevices_usersComponentInputs>
	implements dataBoxEdgeDevices_usersComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_usersComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/users", "2019-03-01", options);
	}
	public readonly apiVersion: "2019-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/users";
}
export interface dataBoxEdgeDevices_usersComponentOutputs {
	readonly apiVersion: "2019-03-01";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/users";
}
export interface dataBoxEdgeDevices_usersComponentInputs {
	readonly name: string;
	readonly properties: UserProperties;
}
export interface Address {
	readonly addressLine1: string;
	readonly addressLine2?: string;
	readonly addressLine3?: string;
	readonly city: string;
	readonly country: string;
	readonly postalCode: string;
	readonly state: string;
}
export interface AlertErrorDetails {
	readonly errorCode?: string;
	readonly errorMessage?: string;
	readonly occurrences?: number;
}
export interface AlertProperties {
	readonly alertType?: string;
	readonly appearedAtDateTime?: string;
	readonly detailedInformation?: AlertPropertiesDetailedInformation;
	readonly errorDetails?: AlertErrorDetails;
	readonly recommendation?: string;
	readonly severity?: "Critical" | "Informational" | "Warning";
	readonly title?: string;
}
export interface AlertPropertiesDetailedInformation {
	readonly [key: string]: string;
}
export interface AsymmetricEncryptedSecret {
	readonly encryptionAlgorithm: "AES256" | "None" | "RSAES_PKCS1_v_1_5";
	readonly encryptionCertThumbprint?: string;
	readonly value: string;
}
export interface Authentication {
	readonly symmetricKey?: SymmetricKey;
}
export interface AzureContainerInfo {
	readonly containerName: string;
	readonly dataFormat: "AzureFile" | "BlockBlob" | "PageBlob";
	readonly storageAccountCredentialId: string;
}
export interface BandwidthScheduleProperties {
	readonly days: "Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday" | "Wednesday"[];
	readonly rateInMbps: number;
	readonly start: string;
	readonly stop: string;
}
export interface ClientAccessRight {
	readonly accessPermission: "NoAccess" | "ReadOnly" | "ReadWrite";
	readonly client: string;
}
export interface ContactDetails {
	readonly companyName: string;
	readonly contactPerson: string;
	readonly emailList: string[];
	readonly phone: string;
}
export interface DataBoxEdgeDeviceProperties {
	readonly configuredRoleTypes?: "ASA" | "Cognitive" | "Functions" | "IOT"[];
	readonly culture?: string;
	readonly dataBoxEdgeDeviceStatus?:
		| "Disconnected"
		| "NeedsAttention"
		| "Offline"
		| "Online"
		| "PartiallyDisconnected"
		| "ReadyToSetup";
	readonly description?: string;
	readonly deviceHcsVersion?: string;
	readonly deviceLocalCapacity?: number;
	readonly deviceModel?: string;
	readonly deviceSoftwareVersion?: string;
	readonly deviceType?: "DataBoxEdgeDevice";
	readonly friendlyName?: string;
	readonly modelDescription?: string;
	readonly serialNumber?: string;
	readonly timeZone?: string;
}
export interface DataBoxEdgeDeviceTags {
	readonly [key: string]: string;
}
export interface FileSourceInfo {
	readonly shareId: string;
}
export interface FileTriggerProperties {
	readonly customContextTag?: string;
	readonly sinkInfo: RoleSinkInfo;
	readonly sourceInfo: FileSourceInfo;
}
export interface IoTDeviceInfo {
	readonly authentication?: Authentication;
	readonly deviceId: string;
	readonly ioTHostHub: string;
}
export interface IoTRoleProperties {
	readonly hostPlatform: "Linux" | "Windows";
	readonly ioTDeviceDetails: IoTDeviceInfo;
	readonly ioTEdgeDeviceDetails: IoTDeviceInfo;
	readonly roleStatus: "Disabled" | "Enabled";
	readonly shareMappings?: MountPointMap[];
}
export interface Ipv4Config {
	readonly gateway?: string;
	readonly ipAddress?: string;
	readonly subnet?: string;
}
export interface Ipv6Config {
	readonly gateway?: string;
	readonly ipAddress?: string;
	readonly prefixLength?: number;
}
export interface MountPointMap {
	readonly mountPoint?: string;
	readonly roleId?: string;
	readonly roleType?: "ASA" | "Cognitive" | "Functions" | "IOT";
	readonly shareId: string;
}
export interface NetworkAdapter {
	readonly adapterId?: string;
	readonly adapterPosition?: NetworkAdapterPosition;
	readonly dhcpStatus?: "Disabled" | "Enabled";
	readonly dnsServers?: string[];
	readonly index?: number;
	readonly ipv4Configuration?: Ipv4Config;
	readonly ipv6Configuration?: Ipv6Config;
	readonly ipv6LinkLocalAddress?: string;
	readonly label?: string;
	readonly linkSpeed?: number;
	readonly macAddress?: string;
	readonly networkAdapterName?: string;
	readonly nodeId?: string;
	readonly rdmaStatus?: "Capable" | "Incapable";
	readonly status?: "Active" | "Inactive";
}
export interface NetworkAdapterPosition {
	readonly networkGroup?: "NonRDMA" | "None" | "RDMA";
	readonly port?: number;
}
export interface NetworkSettingsProperties {
	readonly networkAdapters?: NetworkAdapter[];
}
export interface OrderProperties {
	readonly contactInformation: ContactDetails;
	readonly currentStatus?: OrderStatus;
	readonly deliveryTrackingInfo?: TrackingInfo[];
	readonly orderHistory?: OrderStatus[];
	readonly returnTrackingInfo?: TrackingInfo[];
	readonly serialNumber?: string;
	readonly shippingAddress: Address;
}
export interface OrderStatus {
	readonly comments?: string;
	readonly status:
		| "Arriving"
		| "AwaitingFulfilment"
		| "AwaitingPreparation"
		| "AwaitingReturnShipment"
		| "AwaitingShipment"
		| "CollectedAtMicrosoft"
		| "Declined"
		| "Delivered"
		| "LostDevice"
		| "ReplacementRequested"
		| "ReturnInitiated"
		| "Shipped"
		| "ShippedBack"
		| "Untracked";
	readonly updateDateTime?: string;
}
export interface PeriodicTimerProperties {
	readonly customContextTag?: string;
	readonly sinkInfo: RoleSinkInfo;
	readonly sourceInfo: PeriodicTimerSourceInfo;
}
export interface PeriodicTimerSourceInfo {
	readonly schedule: string;
	readonly startTime: string;
	readonly topic?: string;
}
export interface RefreshDetails {
	readonly errorManifestFile?: string;
	readonly inProgressRefreshJobId?: string;
	readonly lastCompletedRefreshJobTimeInUTC?: string;
	readonly lastJob?: string;
}
export interface RoleSinkInfo {
	readonly roleId: string;
}
export interface ShareAccessRight {
	readonly accessType: "Change" | "Custom" | "Read";
	readonly shareId: string;
}
export interface ShareProperties {
	readonly accessProtocol: "NFS" | "SMB";
	readonly azureContainerInfo?: AzureContainerInfo;
	readonly clientAccessRights?: ClientAccessRight[];
	readonly dataPolicy?: "Cloud" | "Local";
	readonly description?: string;
	readonly monitoringStatus: "Disabled" | "Enabled";
	readonly refreshDetails?: RefreshDetails;
	readonly shareMappings?: MountPointMap[];
	readonly shareStatus: "Offline" | "Online";
	readonly userAccessRights?: UserAccessRight[];
}
export interface Sku {
	readonly name?: "Edge" | "Gateway";
	readonly tier?: "Standard";
}
export interface StorageAccountCredentialProperties {
	readonly accountKey?: AsymmetricEncryptedSecret;
	readonly accountType: "BlobStorage" | "GeneralPurposeStorage";
	readonly alias: string;
	readonly blobDomainName?: string;
	readonly connectionString?: string;
	readonly sslStatus: "Disabled" | "Enabled";
	readonly userName?: string;
}
export interface SymmetricKey {
	readonly connectionString?: AsymmetricEncryptedSecret;
}
export interface TrackingInfo {
	readonly carrierName?: string;
	readonly serialNumber?: string;
	readonly trackingId?: string;
	readonly trackingUrl?: string;
}
export interface UpdateSummaryProperties {
	readonly deviceLastScannedDateTime?: string;
	readonly deviceVersionNumber?: string;
	readonly friendlyDeviceVersionName?: string;
	readonly inProgressDownloadJobId?: string;
	readonly inProgressDownloadJobStartedDateTime?: string;
	readonly inProgressInstallJobId?: string;
	readonly inProgressInstallJobStartedDateTime?: string;
	readonly lastCompletedDownloadJobDateTime?: string;
	readonly lastCompletedInstallJobDateTime?: string;
	readonly lastCompletedScanJobDateTime?: string;
	readonly ongoingUpdateOperation?: "Download" | "Install" | "None" | "Scan";
	readonly rebootBehavior?: "NeverReboots" | "RequestReboot" | "RequiresReboot";
	readonly totalNumberOfUpdatesAvailable?: number;
	readonly totalNumberOfUpdatesPendingDownload?: number;
	readonly totalNumberOfUpdatesPendingInstall?: number;
	readonly totalUpdateSizeInBytes?: number;
	readonly updateTitles?: string[];
}
export interface UserAccessRight {
	readonly accessType: "Change" | "Custom" | "Read";
	readonly userId: string;
}
export interface UserProperties {
	readonly encryptedPassword?: AsymmetricEncryptedSecret;
	readonly shareAccessRights?: ShareAccessRight[];
}
export type dataBoxEdgeDevices_roles = dataBoxEdgeDevices_roles_IOT;
export type dataBoxEdgeDevices_triggers =
	| dataBoxEdgeDevices_triggers_FileEvent
	| dataBoxEdgeDevices_triggers_PeriodicTimerEvent;
export default {
	dataBoxEdgeDevices: dataBoxEdgeDevices,
	"dataBoxEdgeDevices/alerts": dataBoxEdgeDevices_alerts,
	"dataBoxEdgeDevices/bandwidthSchedules": dataBoxEdgeDevices_bandwidthSchedules,
	"dataBoxEdgeDevices/networkSettings": dataBoxEdgeDevices_networkSettings,
	"dataBoxEdgeDevices/orders": dataBoxEdgeDevices_orders,
	"dataBoxEdgeDevices/roles/IOT": dataBoxEdgeDevices_roles_IOT,
	"dataBoxEdgeDevices/shares": dataBoxEdgeDevices_shares,
	"dataBoxEdgeDevices/storageAccountCredentials": dataBoxEdgeDevices_storageAccountCredentials,
	"dataBoxEdgeDevices/triggers/FileEvent": dataBoxEdgeDevices_triggers_FileEvent,
	"dataBoxEdgeDevices/triggers/PeriodicTimerEvent": dataBoxEdgeDevices_triggers_PeriodicTimerEvent,
	"dataBoxEdgeDevices/updateSummary": dataBoxEdgeDevices_updateSummary,
	"dataBoxEdgeDevices/users": dataBoxEdgeDevices_users,
};
