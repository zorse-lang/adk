import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class dataBoxEdgeDevices
	extends ArmResource<dataBoxEdgeDevicesComponentInputs>
	implements dataBoxEdgeDevicesComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevicesComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices";
}
export interface dataBoxEdgeDevicesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices";
}
export interface dataBoxEdgeDevicesComponentInputs {
	readonly etag?: string;
	readonly identity?: ResourceIdentity;
	readonly kind?: "AzureDataBoxGateway" | "AzureModularDataCentre" | "AzureStackEdge" | "AzureStackHub";
	readonly location: string;
	readonly name: string;
	readonly properties?: DataBoxEdgeDeviceProperties;
	readonly sku?: Sku;
	readonly systemData?: SystemData;
	readonly tags?: DataBoxEdgeDeviceTags;
}
export class dataBoxEdgeDevices_alerts
	extends ArmResource<dataBoxEdgeDevices_alertsComponentInputs>
	implements dataBoxEdgeDevices_alertsComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_alertsComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/alerts", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/alerts";
}
export interface dataBoxEdgeDevices_alertsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/alerts";
}
export interface dataBoxEdgeDevices_alertsComponentInputs {
	readonly name: string;
	readonly properties?: AlertProperties;
	readonly systemData?: SystemData;
}
export class dataBoxEdgeDevices_bandwidthSchedules
	extends ArmResource<dataBoxEdgeDevices_bandwidthSchedulesComponentInputs>
	implements dataBoxEdgeDevices_bandwidthSchedulesComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_bandwidthSchedulesComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/bandwidthSchedules", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/bandwidthSchedules";
}
export interface dataBoxEdgeDevices_bandwidthSchedulesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/bandwidthSchedules";
}
export interface dataBoxEdgeDevices_bandwidthSchedulesComponentInputs {
	readonly name: string;
	readonly properties: BandwidthScheduleProperties;
	readonly systemData?: SystemData;
}
export class dataBoxEdgeDevices_networkSettings
	extends ArmResource<dataBoxEdgeDevices_networkSettingsComponentInputs>
	implements dataBoxEdgeDevices_networkSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_networkSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/networkSettings", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/networkSettings";
}
export interface dataBoxEdgeDevices_networkSettingsComponentOutputs {
	readonly apiVersion: "2020-12-01";
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
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/orders", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/orders";
}
export interface dataBoxEdgeDevices_ordersComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/orders";
}
export interface dataBoxEdgeDevices_ordersComponentInputs {
	readonly name: string;
	readonly properties?: OrderProperties;
}
export class dataBoxEdgeDevices_roles_CloudEdgeManagement
	extends ArmResource<dataBoxEdgeDevices_roles_CloudEdgeManagementComponentInputs>
	implements dataBoxEdgeDevices_roles_CloudEdgeManagementComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_roles_CloudEdgeManagementComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles";
}
export interface dataBoxEdgeDevices_roles_CloudEdgeManagementComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles";
}
export interface dataBoxEdgeDevices_roles_CloudEdgeManagementComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "CloudEdgeManagement";
	readonly properties?: CloudEdgeManagementRoleProperties;
}
export class dataBoxEdgeDevices_roles_IOT
	extends ArmResource<dataBoxEdgeDevices_roles_IOTComponentInputs>
	implements dataBoxEdgeDevices_roles_IOTComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_roles_IOTComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles";
}
export interface dataBoxEdgeDevices_roles_IOTComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles";
}
export interface dataBoxEdgeDevices_roles_IOTComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "IOT";
	readonly properties?: IoTRoleProperties;
}
export class dataBoxEdgeDevices_roles_Kubernetes
	extends ArmResource<dataBoxEdgeDevices_roles_KubernetesComponentInputs>
	implements dataBoxEdgeDevices_roles_KubernetesComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_roles_KubernetesComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles";
}
export interface dataBoxEdgeDevices_roles_KubernetesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles";
}
export interface dataBoxEdgeDevices_roles_KubernetesComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "Kubernetes";
	readonly properties?: KubernetesRoleProperties;
}
export class dataBoxEdgeDevices_roles_MEC
	extends ArmResource<dataBoxEdgeDevices_roles_MECComponentInputs>
	implements dataBoxEdgeDevices_roles_MECComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_roles_MECComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles";
}
export interface dataBoxEdgeDevices_roles_MECComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles";
}
export interface dataBoxEdgeDevices_roles_MECComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "MEC";
	readonly properties?: MECRoleProperties;
}
export class dataBoxEdgeDevices_roles_addons_ArcForKubernetes
	extends ArmResource<dataBoxEdgeDevices_roles_addons_ArcForKubernetesComponentInputs>
	implements dataBoxEdgeDevices_roles_addons_ArcForKubernetesComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_roles_addons_ArcForKubernetesComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles/addons", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles/addons";
}
export interface dataBoxEdgeDevices_roles_addons_ArcForKubernetesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles/addons";
}
export interface dataBoxEdgeDevices_roles_addons_ArcForKubernetesComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "ArcForKubernetes";
	readonly properties: ArcAddonProperties;
}
export class dataBoxEdgeDevices_roles_addons_IotEdge
	extends ArmResource<dataBoxEdgeDevices_roles_addons_IotEdgeComponentInputs>
	implements dataBoxEdgeDevices_roles_addons_IotEdgeComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_roles_addons_IotEdgeComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles/addons", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles/addons";
}
export interface dataBoxEdgeDevices_roles_addons_IotEdgeComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles/addons";
}
export interface dataBoxEdgeDevices_roles_addons_IotEdgeComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "IotEdge";
	readonly properties: IoTAddonProperties;
}
export class dataBoxEdgeDevices_roles_monitoringConfig
	extends ArmResource<dataBoxEdgeDevices_roles_monitoringConfigComponentInputs>
	implements dataBoxEdgeDevices_roles_monitoringConfigComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_roles_monitoringConfigComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles/monitoringConfig",
			"2020-12-01",
			options,
		);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles/monitoringConfig";
}
export interface dataBoxEdgeDevices_roles_monitoringConfigComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles/monitoringConfig";
}
export interface dataBoxEdgeDevices_roles_monitoringConfigComponentInputs {
	readonly name: string;
	readonly properties: MonitoringMetricConfigurationProperties;
}
export class dataBoxEdgeDevices_shares
	extends ArmResource<dataBoxEdgeDevices_sharesComponentInputs>
	implements dataBoxEdgeDevices_sharesComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_sharesComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/shares", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/shares";
}
export interface dataBoxEdgeDevices_sharesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/shares";
}
export interface dataBoxEdgeDevices_sharesComponentInputs {
	readonly name: string;
	readonly properties: ShareProperties;
	readonly systemData?: SystemData;
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
			"2020-12-01",
			options,
		);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccountCredentials";
}
export interface dataBoxEdgeDevices_storageAccountCredentialsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccountCredentials";
}
export interface dataBoxEdgeDevices_storageAccountCredentialsComponentInputs {
	readonly name: string;
	readonly properties: StorageAccountCredentialProperties;
	readonly systemData?: SystemData;
}
export class dataBoxEdgeDevices_storageAccounts
	extends ArmResource<dataBoxEdgeDevices_storageAccountsComponentInputs>
	implements dataBoxEdgeDevices_storageAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_storageAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccounts", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccounts";
}
export interface dataBoxEdgeDevices_storageAccountsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccounts";
}
export interface dataBoxEdgeDevices_storageAccountsComponentInputs {
	readonly name: string;
	readonly properties: StorageAccountProperties;
	readonly systemData?: SystemData;
}
export class dataBoxEdgeDevices_storageAccounts_containers
	extends ArmResource<dataBoxEdgeDevices_storageAccounts_containersComponentInputs>
	implements dataBoxEdgeDevices_storageAccounts_containersComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_storageAccounts_containersComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccounts/containers",
			"2020-12-01",
			options,
		);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccounts/containers";
}
export interface dataBoxEdgeDevices_storageAccounts_containersComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccounts/containers";
}
export interface dataBoxEdgeDevices_storageAccounts_containersComponentInputs {
	readonly name: string;
	readonly properties: ContainerProperties;
	readonly systemData?: SystemData;
}
export class dataBoxEdgeDevices_triggers_FileEvent
	extends ArmResource<dataBoxEdgeDevices_triggers_FileEventComponentInputs>
	implements dataBoxEdgeDevices_triggers_FileEventComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_triggers_FileEventComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers";
}
export interface dataBoxEdgeDevices_triggers_FileEventComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers";
}
export interface dataBoxEdgeDevices_triggers_FileEventComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "FileEvent";
	readonly properties: FileTriggerProperties;
}
export class dataBoxEdgeDevices_triggers_PeriodicTimerEvent
	extends ArmResource<dataBoxEdgeDevices_triggers_PeriodicTimerEventComponentInputs>
	implements dataBoxEdgeDevices_triggers_PeriodicTimerEventComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_triggers_PeriodicTimerEventComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers";
}
export interface dataBoxEdgeDevices_triggers_PeriodicTimerEventComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers";
}
export interface dataBoxEdgeDevices_triggers_PeriodicTimerEventComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "PeriodicTimerEvent";
	readonly properties: PeriodicTimerProperties;
}
export class dataBoxEdgeDevices_updateSummary
	extends ArmResource<dataBoxEdgeDevices_updateSummaryComponentInputs>
	implements dataBoxEdgeDevices_updateSummaryComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_updateSummaryComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/updateSummary", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/updateSummary";
}
export interface dataBoxEdgeDevices_updateSummaryComponentOutputs {
	readonly apiVersion: "2020-12-01";
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
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/users", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/users";
}
export interface dataBoxEdgeDevices_usersComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/users";
}
export interface dataBoxEdgeDevices_usersComponentInputs {
	readonly name: string;
	readonly properties: UserProperties;
	readonly systemData?: SystemData;
}
export function listDCAccessCode(resource: dataBoxEdgeDevices_orders): DCAccessCode {
	if (resource.apiVersion !== "2020-12-01") {
		throw new Error(`listDCAccessCode is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.DataBoxEdge/dataBoxEdgeDevices/orders") {
		throw new Error(`listDCAccessCode is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface Address {
	readonly addressLine1?: string;
	readonly addressLine2?: string;
	readonly addressLine3?: string;
	readonly city?: string;
	readonly country: string;
	readonly postalCode?: string;
	readonly state?: string;
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
export interface ArcAddonProperties {
	readonly hostPlatform?: "Linux" | "Windows";
	readonly hostPlatformType?: "KubernetesCluster" | "LinuxVM";
	readonly provisioningState?:
		| "Created"
		| "Creating"
		| "Deleting"
		| "Failed"
		| "Invalid"
		| "Reconfiguring"
		| "Updating";
	readonly resourceGroupName: string;
	readonly resourceLocation: string;
	readonly resourceName: string;
	readonly subscriptionId: string;
	readonly version?: string;
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
export interface CloudEdgeManagementRoleProperties {
	readonly edgeProfile?: EdgeProfile;
	readonly localManagementStatus?: "Disabled" | "Enabled";
	readonly roleStatus: "Disabled" | "Enabled";
}
export interface CniConfig {
	readonly podSubnet?: string;
	readonly serviceSubnet?: string;
	readonly type?: string;
	readonly version?: string;
}
export interface ComputeResource {
	readonly memoryInGB: number;
	readonly processorCount: number;
}
export interface ContactDetails {
	readonly companyName: string;
	readonly contactPerson: string;
	readonly emailList: string[];
	readonly phone: string;
}
export interface ContainerProperties {
	readonly containerStatus?: "NeedsAttention" | "OK" | "Offline" | "Unknown" | "Updating";
	readonly createdDateTime?: string;
	readonly dataFormat: "AzureFile" | "BlockBlob" | "PageBlob";
	readonly refreshDetails?: RefreshDetails;
}
export interface DataBoxEdgeDeviceProperties {
	readonly configuredRoleTypes?:
		| "ASA"
		| "CloudEdgeManagement"
		| "Cognitive"
		| "Functions"
		| "IOT"
		| "Kubernetes"
		| "MEC"[];
	readonly culture?: string;
	readonly dataBoxEdgeDeviceStatus?:
		| "Disconnected"
		| "Maintenance"
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
	readonly edgeProfile?: EdgeProfile;
	readonly friendlyName?: string;
	readonly modelDescription?: string;
	readonly nodeCount?: number;
	readonly resourceMoveDetails?: ResourceMoveDetails;
	readonly serialNumber?: string;
	readonly timeZone?: string;
}
export interface DataBoxEdgeDeviceTags {
	readonly [key: string]: string;
}
export interface DCAccessCode {
	readonly properties?: DCAccessCodeProperties;
}
export interface DCAccessCodeProperties {
	readonly authCode?: string;
}
export interface EdgeProfile {
	readonly subscription?: EdgeProfileSubscription;
}
export interface EdgeProfileSubscription {
	readonly id?: string;
	readonly properties?: SubscriptionProperties;
	readonly registrationDate?: string;
	readonly registrationId?: string;
	readonly state?: "Deleted" | "Registered" | "Suspended" | "Unregistered" | "Warned";
	readonly subscriptionId?: string;
}
export interface EtcdInfo {
	readonly type?: string;
	readonly version?: string;
}
export interface FileSourceInfo {
	readonly shareId: string;
}
export interface FileTriggerProperties {
	readonly customContextTag?: string;
	readonly sinkInfo: RoleSinkInfo;
	readonly sourceInfo: FileSourceInfo;
}
export interface ImageRepositoryCredential {
	readonly imageRepositoryUrl: string;
	readonly password?: AsymmetricEncryptedSecret;
	readonly userName: string;
}
export interface IoTAddonProperties {
	readonly hostPlatform?: "Linux" | "Windows";
	readonly hostPlatformType?: "KubernetesCluster" | "LinuxVM";
	readonly ioTDeviceDetails: IoTDeviceInfo;
	readonly ioTEdgeDeviceDetails: IoTDeviceInfo;
	readonly provisioningState?:
		| "Created"
		| "Creating"
		| "Deleting"
		| "Failed"
		| "Invalid"
		| "Reconfiguring"
		| "Updating";
	readonly version?: string;
}
export interface IoTDeviceInfo {
	readonly authentication?: Authentication;
	readonly deviceId: string;
	readonly ioTHostHub: string;
	readonly ioTHostHubId?: string;
}
export interface IoTEdgeAgentInfo {
	readonly imageName: string;
	readonly imageRepository?: ImageRepositoryCredential;
	readonly tag: string;
}
export interface IoTRoleProperties {
	readonly computeResource?: ComputeResource;
	readonly hostPlatform: "Linux" | "Windows";
	readonly hostPlatformType?: "KubernetesCluster" | "LinuxVM";
	readonly ioTDeviceDetails: IoTDeviceInfo;
	readonly ioTEdgeAgentInfo?: IoTEdgeAgentInfo;
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
export interface KubernetesClusterInfo {
	readonly etcdInfo?: EtcdInfo;
	readonly nodes?: NodeInfo[];
	readonly version: string;
}
export interface KubernetesIPConfiguration {
	readonly ipAddress?: string;
	readonly port?: string;
}
export interface KubernetesRoleCompute {
	readonly memoryInBytes?: number;
	readonly processorCount?: number;
	readonly vmProfile: string;
}
export interface KubernetesRoleNetwork {
	readonly cniConfig?: CniConfig;
	readonly loadBalancerConfig?: LoadBalancerConfig;
}
export interface KubernetesRoleProperties {
	readonly hostPlatform: "Linux" | "Windows";
	readonly hostPlatformType?: "KubernetesCluster" | "LinuxVM";
	readonly kubernetesClusterInfo: KubernetesClusterInfo;
	readonly kubernetesRoleResources: KubernetesRoleResources;
	readonly provisioningState?:
		| "Created"
		| "Creating"
		| "Deleting"
		| "Failed"
		| "Invalid"
		| "Reconfiguring"
		| "Updating";
	readonly roleStatus: "Disabled" | "Enabled";
}
export interface KubernetesRoleResources {
	readonly compute: KubernetesRoleCompute;
	readonly network?: KubernetesRoleNetwork;
	readonly storage?: KubernetesRoleStorage;
}
export interface KubernetesRoleStorage {
	readonly endpoints?: MountPointMap[];
	readonly storageClasses?: KubernetesRoleStorageClassInfo[];
}
export interface KubernetesRoleStorageClassInfo {
	readonly name?: string;
	readonly posixCompliant?: "Disabled" | "Enabled" | "Invalid";
	readonly type?: string;
}
export interface LoadBalancerConfig {
	readonly type?: string;
	readonly version?: string;
}
export interface MECRoleProperties {
	readonly connectionString?: AsymmetricEncryptedSecret;
	readonly roleStatus: "Disabled" | "Enabled";
}
export interface MetricConfiguration {
	readonly counterSets: MetricCounterSet[];
	readonly mdmAccount?: string;
	readonly metricNameSpace?: string;
	readonly resourceId: string;
}
export interface MetricCounter {
	readonly additionalDimensions?: MetricDimension[];
	readonly dimensionFilter?: MetricDimension[];
	readonly instance?: string;
	readonly name: string;
}
export interface MetricCounterSet {
	readonly counters: MetricCounter[];
}
export interface MetricDimension {
	readonly sourceName: string;
	readonly sourceType: string;
}
export interface MonitoringMetricConfigurationProperties {
	readonly metricConfigurations: MetricConfiguration[];
}
export interface MountPointMap {
	readonly mountPoint?: string;
	readonly mountType?: "HostPath" | "Volume";
	readonly roleId?: string;
	readonly roleType?: "ASA" | "CloudEdgeManagement" | "Cognitive" | "Functions" | "IOT" | "Kubernetes" | "MEC";
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
export interface NodeInfo {
	readonly ipConfiguration?: KubernetesIPConfiguration[];
	readonly name?: string;
	readonly type?: "Invalid" | "Master" | "Worker";
}
export interface OrderProperties {
	readonly contactInformation: ContactDetails;
	readonly currentStatus?: OrderStatus;
	readonly deliveryTrackingInfo?: TrackingInfo[];
	readonly orderHistory?: OrderStatus[];
	readonly returnTrackingInfo?: TrackingInfo[];
	readonly serialNumber?: string;
	readonly shipmentType?: "NotApplicable" | "SelfPickup" | "ShippedToCustomer";
	readonly shippingAddress?: Address;
}
export interface OrderStatus {
	readonly additionalOrderDetails?: OrderStatusAdditionalOrderDetails;
	readonly comments?: string;
	readonly status:
		| "Arriving"
		| "AwaitingDrop"
		| "AwaitingFulfilment"
		| "AwaitingPickup"
		| "AwaitingPreparation"
		| "AwaitingReturnShipment"
		| "AwaitingShipment"
		| "CollectedAtMicrosoft"
		| "Declined"
		| "Delivered"
		| "LostDevice"
		| "PickupCompleted"
		| "ReplacementRequested"
		| "ReturnInitiated"
		| "Shipped"
		| "ShippedBack"
		| "Untracked";
	readonly trackingInformation?: TrackingInfo;
	readonly updateDateTime?: string;
}
export interface OrderStatusAdditionalOrderDetails {
	readonly [key: string]: string;
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
export interface ResourceIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned" | "UserAssigned";
}
export interface ResourceMoveDetails {
	readonly operationInProgress?: "None" | "ResourceMoveFailed" | "ResourceMoveInProgress";
	readonly operationInProgressLockTimeoutInUTC?: string;
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
	readonly shareStatus: "NeedsAttention" | "OK" | "Offline" | "Unknown" | "Updating";
	readonly userAccessRights?: UserAccessRight[];
}
export interface Sku {
	readonly name?:
		| "Edge"
		| "EdgeMR_Mini"
		| "EdgePR_Base"
		| "EdgePR_Base_UPS"
		| "EdgeP_Base"
		| "EdgeP_High"
		| "GPU"
		| "Gateway"
		| "RCA_Large"
		| "RCA_Small"
		| "RDC"
		| "TCA_Large"
		| "TCA_Small"
		| "TDC"
		| "TEA_1Node"
		| "TEA_1Node_Heater"
		| "TEA_1Node_UPS"
		| "TEA_1Node_UPS_Heater"
		| "TEA_4Node_Heater"
		| "TEA_4Node_UPS_Heater"
		| "TMA";
	readonly tier?: "Standard";
}
export interface StorageAccountCredentialProperties {
	readonly accountKey?: AsymmetricEncryptedSecret;
	readonly accountType: "BlobStorage" | "GeneralPurposeStorage";
	readonly alias: string;
	readonly blobDomainName?: string;
	readonly connectionString?: string;
	readonly sslStatus: "Disabled" | "Enabled";
	readonly storageAccountId?: string;
	readonly userName?: string;
}
export interface StorageAccountProperties {
	readonly blobEndpoint?: string;
	readonly containerCount?: number;
	readonly dataPolicy: "Cloud" | "Local";
	readonly description?: string;
	readonly storageAccountCredentialId?: string;
	readonly storageAccountStatus?: "NeedsAttention" | "OK" | "Offline" | "Unknown" | "Updating";
}
export interface SubscriptionProperties {
	readonly locationPlacementId?: string;
	readonly quotaId?: string;
	readonly registeredFeatures?: SubscriptionRegisteredFeatures[];
	readonly serializedDetails?: string;
	readonly tenantId?: string;
}
export interface SubscriptionRegisteredFeatures {
	readonly name?: string;
	readonly state?: string;
}
export interface SymmetricKey {
	readonly connectionString?: AsymmetricEncryptedSecret;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
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
	readonly userType: "ARM" | "LocalManagement" | "Share";
}
export type dataBoxEdgeDevices_roles =
	| dataBoxEdgeDevices_roles_CloudEdgeManagement
	| dataBoxEdgeDevices_roles_IOT
	| dataBoxEdgeDevices_roles_Kubernetes
	| dataBoxEdgeDevices_roles_MEC;
export type dataBoxEdgeDevices_roles_addons =
	| dataBoxEdgeDevices_roles_addons_ArcForKubernetes
	| dataBoxEdgeDevices_roles_addons_IotEdge;
export type dataBoxEdgeDevices_triggers =
	| dataBoxEdgeDevices_triggers_FileEvent
	| dataBoxEdgeDevices_triggers_PeriodicTimerEvent;
export default {
	dataBoxEdgeDevices: dataBoxEdgeDevices,
	"dataBoxEdgeDevices/alerts": dataBoxEdgeDevices_alerts,
	"dataBoxEdgeDevices/bandwidthSchedules": dataBoxEdgeDevices_bandwidthSchedules,
	"dataBoxEdgeDevices/networkSettings": dataBoxEdgeDevices_networkSettings,
	"dataBoxEdgeDevices/orders": dataBoxEdgeDevices_orders,
	"dataBoxEdgeDevices/roles/CloudEdgeManagement": dataBoxEdgeDevices_roles_CloudEdgeManagement,
	"dataBoxEdgeDevices/roles/IOT": dataBoxEdgeDevices_roles_IOT,
	"dataBoxEdgeDevices/roles/Kubernetes": dataBoxEdgeDevices_roles_Kubernetes,
	"dataBoxEdgeDevices/roles/MEC": dataBoxEdgeDevices_roles_MEC,
	"dataBoxEdgeDevices/roles/addons/ArcForKubernetes": dataBoxEdgeDevices_roles_addons_ArcForKubernetes,
	"dataBoxEdgeDevices/roles/addons/IotEdge": dataBoxEdgeDevices_roles_addons_IotEdge,
	"dataBoxEdgeDevices/roles/monitoringConfig": dataBoxEdgeDevices_roles_monitoringConfig,
	"dataBoxEdgeDevices/shares": dataBoxEdgeDevices_shares,
	"dataBoxEdgeDevices/storageAccountCredentials": dataBoxEdgeDevices_storageAccountCredentials,
	"dataBoxEdgeDevices/storageAccounts": dataBoxEdgeDevices_storageAccounts,
	"dataBoxEdgeDevices/storageAccounts/containers": dataBoxEdgeDevices_storageAccounts_containers,
	"dataBoxEdgeDevices/triggers/FileEvent": dataBoxEdgeDevices_triggers_FileEvent,
	"dataBoxEdgeDevices/triggers/PeriodicTimerEvent": dataBoxEdgeDevices_triggers_PeriodicTimerEvent,
	"dataBoxEdgeDevices/updateSummary": dataBoxEdgeDevices_updateSummary,
	"dataBoxEdgeDevices/users": dataBoxEdgeDevices_users,
};
