import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class dataBoxEdgeDevices
	extends ArmResource<dataBoxEdgeDevicesComponentInputs>
	implements dataBoxEdgeDevicesComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevicesComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices", "2019-07-01", options);
	}
	public readonly apiVersion: "2019-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices";
}
export interface dataBoxEdgeDevicesComponentOutputs {
	readonly apiVersion: "2019-07-01";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices";
}
export interface dataBoxEdgeDevicesComponentInputs {
	readonly etag?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: DataBoxEdgeDeviceProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: DataBoxEdgeDeviceTags | undefined;
}
export class dataBoxEdgeDevices_alerts
	extends ArmResource<dataBoxEdgeDevices_alertsComponentInputs>
	implements dataBoxEdgeDevices_alertsComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_alertsComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/alerts", "2019-07-01", options);
	}
	public readonly apiVersion: "2019-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/alerts";
}
export interface dataBoxEdgeDevices_alertsComponentOutputs {
	readonly apiVersion: "2019-07-01";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/alerts";
}
export interface dataBoxEdgeDevices_alertsComponentInputs {
	readonly name: string;
	readonly properties?: AlertProperties | undefined;
}
export class dataBoxEdgeDevices_bandwidthSchedules
	extends ArmResource<dataBoxEdgeDevices_bandwidthSchedulesComponentInputs>
	implements dataBoxEdgeDevices_bandwidthSchedulesComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_bandwidthSchedulesComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/bandwidthSchedules", "2019-07-01", options);
	}
	public readonly apiVersion: "2019-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/bandwidthSchedules";
}
export interface dataBoxEdgeDevices_bandwidthSchedulesComponentOutputs {
	readonly apiVersion: "2019-07-01";
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
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/networkSettings", "2019-07-01", options);
	}
	public readonly apiVersion: "2019-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/networkSettings";
}
export interface dataBoxEdgeDevices_networkSettingsComponentOutputs {
	readonly apiVersion: "2019-07-01";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/networkSettings";
}
export interface dataBoxEdgeDevices_networkSettingsComponentInputs {
	readonly name: string;
	readonly properties?: NetworkSettingsProperties | undefined;
}
export class dataBoxEdgeDevices_orders
	extends ArmResource<dataBoxEdgeDevices_ordersComponentInputs>
	implements dataBoxEdgeDevices_ordersComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_ordersComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/orders", "2019-07-01", options);
	}
	public readonly apiVersion: "2019-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/orders";
}
export interface dataBoxEdgeDevices_ordersComponentOutputs {
	readonly apiVersion: "2019-07-01";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/orders";
}
export interface dataBoxEdgeDevices_ordersComponentInputs {
	readonly name: string;
	readonly properties?: OrderProperties | undefined;
}
export class dataBoxEdgeDevices_roles_IOT
	extends ArmResource<dataBoxEdgeDevices_roles_IOTComponentInputs>
	implements dataBoxEdgeDevices_roles_IOTComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_roles_IOTComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles", "2019-07-01", options);
	}
	public readonly apiVersion: "2019-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles";
}
export interface dataBoxEdgeDevices_roles_IOTComponentOutputs {
	readonly apiVersion: "2019-07-01";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles";
}
export interface dataBoxEdgeDevices_roles_IOTComponentInputs {
	readonly name: string;
	readonly kind: "IOT";
	readonly properties?: IoTRoleProperties | undefined;
}
export class dataBoxEdgeDevices_shares
	extends ArmResource<dataBoxEdgeDevices_sharesComponentInputs>
	implements dataBoxEdgeDevices_sharesComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_sharesComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/shares", "2019-07-01", options);
	}
	public readonly apiVersion: "2019-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/shares";
}
export interface dataBoxEdgeDevices_sharesComponentOutputs {
	readonly apiVersion: "2019-07-01";
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
			"2019-07-01",
			options,
		);
	}
	public readonly apiVersion: "2019-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccountCredentials";
}
export interface dataBoxEdgeDevices_storageAccountCredentialsComponentOutputs {
	readonly apiVersion: "2019-07-01";
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
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers", "2019-07-01", options);
	}
	public readonly apiVersion: "2019-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers";
}
export interface dataBoxEdgeDevices_triggers_FileEventComponentOutputs {
	readonly apiVersion: "2019-07-01";
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
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers", "2019-07-01", options);
	}
	public readonly apiVersion: "2019-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers";
}
export interface dataBoxEdgeDevices_triggers_PeriodicTimerEventComponentOutputs {
	readonly apiVersion: "2019-07-01";
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
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/updateSummary", "2019-07-01", options);
	}
	public readonly apiVersion: "2019-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/updateSummary";
}
export interface dataBoxEdgeDevices_updateSummaryComponentOutputs {
	readonly apiVersion: "2019-07-01";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/updateSummary";
}
export interface dataBoxEdgeDevices_updateSummaryComponentInputs {
	readonly name: string;
	readonly properties?: UpdateSummaryProperties | undefined;
}
export class dataBoxEdgeDevices_users
	extends ArmResource<dataBoxEdgeDevices_usersComponentInputs>
	implements dataBoxEdgeDevices_usersComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_usersComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/users", "2019-07-01", options);
	}
	public readonly apiVersion: "2019-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/users";
}
export interface dataBoxEdgeDevices_usersComponentOutputs {
	readonly apiVersion: "2019-07-01";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/users";
}
export interface dataBoxEdgeDevices_usersComponentInputs {
	readonly name: string;
	readonly properties: UserProperties;
}
export interface Address {
	readonly addressLine1: string;
	readonly addressLine2?: string | undefined;
	readonly addressLine3?: string | undefined;
	readonly city: string;
	readonly country: string;
	readonly postalCode: string;
	readonly state: string;
}
export interface AlertErrorDetails {
	readonly errorCode?: string | undefined;
	readonly errorMessage?: string | undefined;
	readonly occurrences?: number | undefined;
}
export interface AlertProperties {
	readonly alertType?: string | undefined;
	readonly appearedAtDateTime?: string | undefined;
	readonly detailedInformation?: AlertPropertiesDetailedInformation | undefined;
	readonly errorDetails?: AlertErrorDetails | undefined;
	readonly recommendation?: string | undefined;
	readonly severity?: ("Critical" | "Informational" | "Warning") | undefined;
	readonly title?: string | undefined;
}
export interface AlertPropertiesDetailedInformation {
	readonly "[ key: string ]"?: string | undefined;
}
export interface AsymmetricEncryptedSecret {
	readonly encryptionAlgorithm: "AES256" | "None" | "RSAES_PKCS1_v_1_5";
	readonly encryptionCertThumbprint?: string | undefined;
	readonly value: string;
}
export interface Authentication {
	readonly symmetricKey?: SymmetricKey | undefined;
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
	readonly configuredRoleTypes?: ("ASA" | "Cognitive" | "Functions" | "IOT"[]) | undefined;
	readonly culture?: string | undefined;
	readonly dataBoxEdgeDeviceStatus?:
		| (
				| "Disconnected"
				| "Maintenance"
				| "NeedsAttention"
				| "Offline"
				| "Online"
				| "PartiallyDisconnected"
				| "ReadyToSetup"
		  )
		| undefined;
	readonly description?: string | undefined;
	readonly deviceHcsVersion?: string | undefined;
	readonly deviceLocalCapacity?: number | undefined;
	readonly deviceModel?: string | undefined;
	readonly deviceSoftwareVersion?: string | undefined;
	readonly deviceType?: "DataBoxEdgeDevice" | undefined;
	readonly friendlyName?: string | undefined;
	readonly modelDescription?: string | undefined;
	readonly nodeCount?: number | undefined;
	readonly serialNumber?: string | undefined;
	readonly timeZone?: string | undefined;
}
export interface DataBoxEdgeDeviceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface FileSourceInfo {
	readonly shareId: string;
}
export interface FileTriggerProperties {
	readonly customContextTag?: string | undefined;
	readonly sinkInfo: RoleSinkInfo;
	readonly sourceInfo: FileSourceInfo;
}
export interface IoTDeviceInfo {
	readonly authentication?: Authentication | undefined;
	readonly deviceId: string;
	readonly ioTHostHub: string;
	readonly ioTHostHubId?: string | undefined;
}
export interface IoTRoleProperties {
	readonly hostPlatform: "Linux" | "Windows";
	readonly ioTDeviceDetails: IoTDeviceInfo;
	readonly ioTEdgeDeviceDetails: IoTDeviceInfo;
	readonly roleStatus: "Disabled" | "Enabled";
	readonly shareMappings?: MountPointMap[] | undefined;
}
export interface Ipv4Config {
	readonly gateway?: string | undefined;
	readonly ipAddress?: string | undefined;
	readonly subnet?: string | undefined;
}
export interface Ipv6Config {
	readonly gateway?: string | undefined;
	readonly ipAddress?: string | undefined;
	readonly prefixLength?: number | undefined;
}
export interface MountPointMap {
	readonly mountPoint?: string | undefined;
	readonly roleId?: string | undefined;
	readonly roleType?: ("ASA" | "Cognitive" | "Functions" | "IOT") | undefined;
	readonly shareId: string;
}
export interface NetworkAdapter {
	readonly adapterId?: string | undefined;
	readonly adapterPosition?: NetworkAdapterPosition | undefined;
	readonly dhcpStatus?: ("Disabled" | "Enabled") | undefined;
	readonly dnsServers?: string[] | undefined;
	readonly index?: number | undefined;
	readonly ipv4Configuration?: Ipv4Config | undefined;
	readonly ipv6Configuration?: Ipv6Config | undefined;
	readonly ipv6LinkLocalAddress?: string | undefined;
	readonly label?: string | undefined;
	readonly linkSpeed?: number | undefined;
	readonly macAddress?: string | undefined;
	readonly networkAdapterName?: string | undefined;
	readonly nodeId?: string | undefined;
	readonly rdmaStatus?: ("Capable" | "Incapable") | undefined;
	readonly status?: ("Active" | "Inactive") | undefined;
}
export interface NetworkAdapterPosition {
	readonly networkGroup?: ("NonRDMA" | "None" | "RDMA") | undefined;
	readonly port?: number | undefined;
}
export interface NetworkSettingsProperties {
	readonly networkAdapters?: NetworkAdapter[] | undefined;
}
export interface OrderProperties {
	readonly contactInformation: ContactDetails;
	readonly currentStatus?: OrderStatus | undefined;
	readonly deliveryTrackingInfo?: TrackingInfo[] | undefined;
	readonly orderHistory?: OrderStatus[] | undefined;
	readonly returnTrackingInfo?: TrackingInfo[] | undefined;
	readonly serialNumber?: string | undefined;
	readonly shippingAddress: Address;
}
export interface OrderStatus {
	readonly comments?: string | undefined;
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
	readonly updateDateTime?: string | undefined;
}
export interface PeriodicTimerProperties {
	readonly customContextTag?: string | undefined;
	readonly sinkInfo: RoleSinkInfo;
	readonly sourceInfo: PeriodicTimerSourceInfo;
}
export interface PeriodicTimerSourceInfo {
	readonly schedule: string;
	readonly startTime: string;
	readonly topic?: string | undefined;
}
export interface RefreshDetails {
	readonly errorManifestFile?: string | undefined;
	readonly inProgressRefreshJobId?: string | undefined;
	readonly lastCompletedRefreshJobTimeInUTC?: string | undefined;
	readonly lastJob?: string | undefined;
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
	readonly azureContainerInfo?: AzureContainerInfo | undefined;
	readonly clientAccessRights?: ClientAccessRight[] | undefined;
	readonly dataPolicy?: ("Cloud" | "Local") | undefined;
	readonly description?: string | undefined;
	readonly monitoringStatus: "Disabled" | "Enabled";
	readonly refreshDetails?: RefreshDetails | undefined;
	readonly shareMappings?: MountPointMap[] | undefined;
	readonly shareStatus: "NeedsAttention" | "OK" | "Offline" | "Unknown" | "Updating";
	readonly userAccessRights?: UserAccessRight[] | undefined;
}
export interface Sku {
	readonly name?: ("Edge" | "Gateway") | undefined;
	readonly tier?: "Standard" | undefined;
}
export interface StorageAccountCredentialProperties {
	readonly accountKey?: AsymmetricEncryptedSecret | undefined;
	readonly accountType: "BlobStorage" | "GeneralPurposeStorage";
	readonly alias: string;
	readonly blobDomainName?: string | undefined;
	readonly connectionString?: string | undefined;
	readonly sslStatus: "Disabled" | "Enabled";
	readonly storageAccountId?: string | undefined;
	readonly userName?: string | undefined;
}
export interface SymmetricKey {
	readonly connectionString?: AsymmetricEncryptedSecret | undefined;
}
export interface TrackingInfo {
	readonly carrierName?: string | undefined;
	readonly serialNumber?: string | undefined;
	readonly trackingId?: string | undefined;
	readonly trackingUrl?: string | undefined;
}
export interface UpdateSummaryProperties {
	readonly deviceLastScannedDateTime?: string | undefined;
	readonly deviceVersionNumber?: string | undefined;
	readonly friendlyDeviceVersionName?: string | undefined;
	readonly inProgressDownloadJobId?: string | undefined;
	readonly inProgressDownloadJobStartedDateTime?: string | undefined;
	readonly inProgressInstallJobId?: string | undefined;
	readonly inProgressInstallJobStartedDateTime?: string | undefined;
	readonly lastCompletedDownloadJobDateTime?: string | undefined;
	readonly lastCompletedInstallJobDateTime?: string | undefined;
	readonly lastCompletedScanJobDateTime?: string | undefined;
	readonly ongoingUpdateOperation?: ("Download" | "Install" | "None" | "Scan") | undefined;
	readonly rebootBehavior?: ("NeverReboots" | "RequestReboot" | "RequiresReboot") | undefined;
	readonly totalNumberOfUpdatesAvailable?: number | undefined;
	readonly totalNumberOfUpdatesPendingDownload?: number | undefined;
	readonly totalNumberOfUpdatesPendingInstall?: number | undefined;
	readonly totalUpdateSizeInBytes?: number | undefined;
	readonly updateTitles?: string[] | undefined;
}
export interface UserAccessRight {
	readonly accessType: "Change" | "Custom" | "Read";
	readonly userId: string;
}
export interface UserProperties {
	readonly encryptedPassword?: AsymmetricEncryptedSecret | undefined;
	readonly shareAccessRights?: ShareAccessRight[] | undefined;
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
