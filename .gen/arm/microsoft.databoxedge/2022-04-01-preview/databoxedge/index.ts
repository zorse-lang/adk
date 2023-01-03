import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class dataBoxEdgeDevices
	extends ArmResource<dataBoxEdgeDevicesComponentInputs>
	implements dataBoxEdgeDevicesComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevicesComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices", "2022-04-01-preview", options);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices";
}
export interface dataBoxEdgeDevicesComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices";
}
export interface dataBoxEdgeDevicesComponentInputs {
	readonly etag?: string | undefined;
	readonly identity?: ResourceIdentity | undefined;
	readonly kind?: ("AzureDataBoxGateway" | "AzureModularDataCentre" | "AzureStackEdge" | "AzureStackHub") | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: DataBoxEdgeDeviceProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: DataBoxEdgeDeviceTags | undefined;
}
export class dataBoxEdgeDevices_alerts
	extends ArmResource<dataBoxEdgeDevices_alertsComponentInputs>
	implements dataBoxEdgeDevices_alertsComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_alertsComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/alerts", "2022-04-01-preview", options);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/alerts";
}
export interface dataBoxEdgeDevices_alertsComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/alerts";
}
export interface dataBoxEdgeDevices_alertsComponentInputs {
	readonly name: string;
	readonly properties?: AlertProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class dataBoxEdgeDevices_bandwidthSchedules
	extends ArmResource<dataBoxEdgeDevices_bandwidthSchedulesComponentInputs>
	implements dataBoxEdgeDevices_bandwidthSchedulesComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_bandwidthSchedulesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DataBoxEdge/dataBoxEdgeDevices/bandwidthSchedules",
			"2022-04-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/bandwidthSchedules";
}
export interface dataBoxEdgeDevices_bandwidthSchedulesComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/bandwidthSchedules";
}
export interface dataBoxEdgeDevices_bandwidthSchedulesComponentInputs {
	readonly name: string;
	readonly properties: BandwidthScheduleProperties;
	readonly systemData?: SystemData | undefined;
}
export class dataBoxEdgeDevices_deviceCapacityInfo
	extends ArmResource<dataBoxEdgeDevices_deviceCapacityInfoComponentInputs>
	implements dataBoxEdgeDevices_deviceCapacityInfoComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_deviceCapacityInfoComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DataBoxEdge/dataBoxEdgeDevices/deviceCapacityInfo",
			"2022-04-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/deviceCapacityInfo";
}
export interface dataBoxEdgeDevices_deviceCapacityInfoComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/deviceCapacityInfo";
}
export interface dataBoxEdgeDevices_deviceCapacityInfoComponentInputs {
	readonly name: string;
	readonly properties?: DeviceCapacityInfoProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class dataBoxEdgeDevices_diagnosticProactiveLogCollectionSettings
	extends ArmResource<dataBoxEdgeDevices_diagnosticProactiveLogCollectionSettingsComponentInputs>
	implements dataBoxEdgeDevices_diagnosticProactiveLogCollectionSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_diagnosticProactiveLogCollectionSettingsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DataBoxEdge/dataBoxEdgeDevices/diagnosticProactiveLogCollectionSettings",
			"2022-04-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/diagnosticProactiveLogCollectionSettings";
}
export interface dataBoxEdgeDevices_diagnosticProactiveLogCollectionSettingsComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/diagnosticProactiveLogCollectionSettings";
}
export interface dataBoxEdgeDevices_diagnosticProactiveLogCollectionSettingsComponentInputs {
	readonly name: string;
	readonly properties: ProactiveLogCollectionSettingsProperties;
	readonly systemData?: SystemData | undefined;
}
export class dataBoxEdgeDevices_diagnosticRemoteSupportSettings
	extends ArmResource<dataBoxEdgeDevices_diagnosticRemoteSupportSettingsComponentInputs>
	implements dataBoxEdgeDevices_diagnosticRemoteSupportSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_diagnosticRemoteSupportSettingsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DataBoxEdge/dataBoxEdgeDevices/diagnosticRemoteSupportSettings",
			"2022-04-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/diagnosticRemoteSupportSettings";
}
export interface dataBoxEdgeDevices_diagnosticRemoteSupportSettingsComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/diagnosticRemoteSupportSettings";
}
export interface dataBoxEdgeDevices_diagnosticRemoteSupportSettingsComponentInputs {
	readonly name: string;
	readonly properties: DiagnosticRemoteSupportSettingsProperties;
	readonly systemData?: SystemData | undefined;
}
export class dataBoxEdgeDevices_networkSettings
	extends ArmResource<dataBoxEdgeDevices_networkSettingsComponentInputs>
	implements dataBoxEdgeDevices_networkSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_networkSettingsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DataBoxEdge/dataBoxEdgeDevices/networkSettings",
			"2022-04-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/networkSettings";
}
export interface dataBoxEdgeDevices_networkSettingsComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/networkSettings";
}
export interface dataBoxEdgeDevices_networkSettingsComponentInputs {
	readonly name: string;
	readonly properties?: NetworkSettingsProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class dataBoxEdgeDevices_orders
	extends ArmResource<dataBoxEdgeDevices_ordersComponentInputs>
	implements dataBoxEdgeDevices_ordersComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_ordersComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/orders", "2022-04-01-preview", options);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/orders";
}
export interface dataBoxEdgeDevices_ordersComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/orders";
}
export interface dataBoxEdgeDevices_ordersComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: OrderProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class dataBoxEdgeDevices_roles_CloudEdgeManagement
	extends ArmResource<dataBoxEdgeDevices_roles_CloudEdgeManagementComponentInputs>
	implements dataBoxEdgeDevices_roles_CloudEdgeManagementComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_roles_CloudEdgeManagementComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles", "2022-04-01-preview", options);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles";
}
export interface dataBoxEdgeDevices_roles_CloudEdgeManagementComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles";
}
export interface dataBoxEdgeDevices_roles_CloudEdgeManagementComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "CloudEdgeManagement";
	readonly properties?: CloudEdgeManagementRoleProperties | undefined;
}
export class dataBoxEdgeDevices_roles_IOT
	extends ArmResource<dataBoxEdgeDevices_roles_IOTComponentInputs>
	implements dataBoxEdgeDevices_roles_IOTComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_roles_IOTComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles", "2022-04-01-preview", options);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles";
}
export interface dataBoxEdgeDevices_roles_IOTComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles";
}
export interface dataBoxEdgeDevices_roles_IOTComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "IOT";
	readonly properties?: IoTRoleProperties | undefined;
}
export class dataBoxEdgeDevices_roles_Kubernetes
	extends ArmResource<dataBoxEdgeDevices_roles_KubernetesComponentInputs>
	implements dataBoxEdgeDevices_roles_KubernetesComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_roles_KubernetesComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles", "2022-04-01-preview", options);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles";
}
export interface dataBoxEdgeDevices_roles_KubernetesComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles";
}
export interface dataBoxEdgeDevices_roles_KubernetesComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "Kubernetes";
	readonly properties?: KubernetesRoleProperties | undefined;
}
export class dataBoxEdgeDevices_roles_MEC
	extends ArmResource<dataBoxEdgeDevices_roles_MECComponentInputs>
	implements dataBoxEdgeDevices_roles_MECComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_roles_MECComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles", "2022-04-01-preview", options);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles";
}
export interface dataBoxEdgeDevices_roles_MECComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles";
}
export interface dataBoxEdgeDevices_roles_MECComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "MEC";
	readonly properties?: MECRoleProperties | undefined;
}
export class dataBoxEdgeDevices_roles_addons_ArcForKubernetes
	extends ArmResource<dataBoxEdgeDevices_roles_addons_ArcForKubernetesComponentInputs>
	implements dataBoxEdgeDevices_roles_addons_ArcForKubernetesComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_roles_addons_ArcForKubernetesComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles/addons", "2022-04-01-preview", options);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles/addons";
}
export interface dataBoxEdgeDevices_roles_addons_ArcForKubernetesComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles/addons";
}
export interface dataBoxEdgeDevices_roles_addons_ArcForKubernetesComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "ArcForKubernetes";
	readonly properties: ArcAddonProperties;
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
			"2022-04-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles/monitoringConfig";
}
export interface dataBoxEdgeDevices_roles_monitoringConfigComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles/monitoringConfig";
}
export interface dataBoxEdgeDevices_roles_monitoringConfigComponentInputs {
	readonly name: string;
	readonly properties: MonitoringMetricConfigurationProperties;
	readonly systemData?: SystemData | undefined;
}
export class dataBoxEdgeDevices_shares
	extends ArmResource<dataBoxEdgeDevices_sharesComponentInputs>
	implements dataBoxEdgeDevices_sharesComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_sharesComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/shares", "2022-04-01-preview", options);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/shares";
}
export interface dataBoxEdgeDevices_sharesComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/shares";
}
export interface dataBoxEdgeDevices_sharesComponentInputs {
	readonly name: string;
	readonly properties: ShareProperties;
	readonly systemData?: SystemData | undefined;
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
			"2022-04-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccountCredentials";
}
export interface dataBoxEdgeDevices_storageAccountCredentialsComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccountCredentials";
}
export interface dataBoxEdgeDevices_storageAccountCredentialsComponentInputs {
	readonly name: string;
	readonly properties: StorageAccountCredentialProperties;
	readonly systemData?: SystemData | undefined;
}
export class dataBoxEdgeDevices_storageAccounts
	extends ArmResource<dataBoxEdgeDevices_storageAccountsComponentInputs>
	implements dataBoxEdgeDevices_storageAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_storageAccountsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccounts",
			"2022-04-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccounts";
}
export interface dataBoxEdgeDevices_storageAccountsComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccounts";
}
export interface dataBoxEdgeDevices_storageAccountsComponentInputs {
	readonly name: string;
	readonly properties: StorageAccountProperties;
	readonly systemData?: SystemData | undefined;
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
			"2022-04-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccounts/containers";
}
export interface dataBoxEdgeDevices_storageAccounts_containersComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccounts/containers";
}
export interface dataBoxEdgeDevices_storageAccounts_containersComponentInputs {
	readonly name: string;
	readonly properties: ContainerProperties;
	readonly systemData?: SystemData | undefined;
}
export class dataBoxEdgeDevices_triggers_FileEvent
	extends ArmResource<dataBoxEdgeDevices_triggers_FileEventComponentInputs>
	implements dataBoxEdgeDevices_triggers_FileEventComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_triggers_FileEventComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers", "2022-04-01-preview", options);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers";
}
export interface dataBoxEdgeDevices_triggers_FileEventComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers";
}
export interface dataBoxEdgeDevices_triggers_FileEventComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "FileEvent";
	readonly properties: FileTriggerProperties;
}
export class dataBoxEdgeDevices_triggers_PeriodicTimerEvent
	extends ArmResource<dataBoxEdgeDevices_triggers_PeriodicTimerEventComponentInputs>
	implements dataBoxEdgeDevices_triggers_PeriodicTimerEventComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_triggers_PeriodicTimerEventComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers", "2022-04-01-preview", options);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers";
}
export interface dataBoxEdgeDevices_triggers_PeriodicTimerEventComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers";
}
export interface dataBoxEdgeDevices_triggers_PeriodicTimerEventComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "PeriodicTimerEvent";
	readonly properties: PeriodicTimerProperties;
}
export class dataBoxEdgeDevices_updateSummary
	extends ArmResource<dataBoxEdgeDevices_updateSummaryComponentInputs>
	implements dataBoxEdgeDevices_updateSummaryComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_updateSummaryComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DataBoxEdge/dataBoxEdgeDevices/updateSummary",
			"2022-04-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/updateSummary";
}
export interface dataBoxEdgeDevices_updateSummaryComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/updateSummary";
}
export interface dataBoxEdgeDevices_updateSummaryComponentInputs {
	readonly name: string;
	readonly properties?: UpdateSummaryProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class dataBoxEdgeDevices_users
	extends ArmResource<dataBoxEdgeDevices_usersComponentInputs>
	implements dataBoxEdgeDevices_usersComponentOutputs
{
	constructor(entity: ADKEntity, options: dataBoxEdgeDevices_usersComponentInputs) {
		super(entity, options.name, "Microsoft.DataBoxEdge/dataBoxEdgeDevices/users", "2022-04-01-preview", options);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/users";
}
export interface dataBoxEdgeDevices_usersComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataBoxEdge/dataBoxEdgeDevices/users";
}
export interface dataBoxEdgeDevices_usersComponentInputs {
	readonly name: string;
	readonly properties: UserProperties;
	readonly systemData?: SystemData | undefined;
}
export function listDCAccessCode(resource: dataBoxEdgeDevices_orders): DCAccessCode {
	if (resource.apiVersion !== "2022-04-01-preview") {
		throw new Error(`listDCAccessCode is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.DataBoxEdge/dataBoxEdgeDevices/orders") {
		throw new Error(`listDCAccessCode is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface Address {
	readonly addressLine1?: string | undefined;
	readonly addressLine2?: string | undefined;
	readonly addressLine3?: string | undefined;
	readonly city?: string | undefined;
	readonly country: string;
	readonly postalCode?: string | undefined;
	readonly state?: string | undefined;
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
export interface ArcAddonProperties {
	readonly hostPlatform?: ("Linux" | "Windows") | undefined;
	readonly hostPlatformType?: ("KubernetesCluster" | "LinuxVM") | undefined;
	readonly provisioningState?:
		| ("Created" | "Creating" | "Deleting" | "Failed" | "Invalid" | "Reconfiguring" | "Updating")
		| undefined;
	readonly resourceGroupName: string;
	readonly resourceLocation: string;
	readonly resourceName: string;
	readonly subscriptionId: string;
	readonly version?: string | undefined;
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
export interface CloudEdgeManagementRoleProperties {
	readonly edgeProfile?: EdgeProfile | undefined;
	readonly localManagementStatus?: ("Disabled" | "Enabled") | undefined;
	readonly roleStatus: "Disabled" | "Enabled";
}
export interface ClusterCapacityViewData {
	readonly fqdn?: string | undefined;
	readonly gpuCapacity?: ClusterGpuCapacity | undefined;
	readonly lastRefreshedTime?: string | undefined;
	readonly memoryCapacity?: ClusterMemoryCapacity | undefined;
	readonly totalProvisionedNonHpnCores?: number | undefined;
}
export interface ClusterGpuCapacity {
	readonly gpuFreeUnitsCount?: number | undefined;
	readonly gpuReservedForFailoverUnitsCount?: number | undefined;
	readonly gpuTotalUnitsCount?: number | undefined;
	readonly gpuType?: string | undefined;
	readonly gpuUsedUnitsCount?: number | undefined;
}
export interface ClusterMemoryCapacity {
	readonly clusterFailoverMemoryMb?: number | undefined;
	readonly clusterFragmentationMemoryMb?: number | undefined;
	readonly clusterFreeMemoryMb?: number | undefined;
	readonly clusterHypervReserveMemoryMb?: number | undefined;
	readonly clusterInfraVmMemoryMb?: number | undefined;
	readonly clusterMemoryUsedByVmsMb?: number | undefined;
	readonly clusterNonFailoverVmMb?: number | undefined;
	readonly clusterTotalMemoryMb?: number | undefined;
	readonly clusterUsedMemoryMb?: number | undefined;
}
export interface ClusterStorageViewData {
	readonly clusterFreeStorageMb?: number | undefined;
	readonly clusterTotalStorageMb?: number | undefined;
}
export interface CniConfig {
	readonly componentType?: ("CNI" | "Cluster" | "Etcd" | "Invalid" | "LoadBalancer" | "Node") | undefined;
	readonly podSubnet?: string | undefined;
	readonly serviceSubnet?: string | undefined;
	readonly type?: string | undefined;
	readonly version?: string | undefined;
}
export interface ComputeResource {
	readonly memoryInGB: number;
	readonly processorCount: number;
}
export interface ComputeVersionInformation {
	readonly azureArcVersion?: string | undefined;
	readonly iotEdgeVersion?: string | undefined;
	readonly kubernetesVersion?: string | undefined;
}
export interface ContactDetails {
	readonly companyName: string;
	readonly contactPerson: string;
	readonly emailList: string[];
	readonly phone: string;
}
export interface ContainerProperties {
	readonly containerStatus?: ("NeedsAttention" | "OK" | "Offline" | "Unknown" | "Updating") | undefined;
	readonly createdDateTime?: string | undefined;
	readonly dataFormat: "AzureFile" | "BlockBlob" | "PageBlob";
	readonly refreshDetails?: RefreshDetails | undefined;
}
export interface DataBoxEdgeDeviceProperties {
	readonly computeVersionInformation?: ComputeVersionInformation | undefined;
	readonly configuredRoleTypes?:
		| ("ASA" | "CloudEdgeManagement" | "Cognitive" | "Functions" | "IOT" | "Kubernetes" | "MEC"[])
		| undefined;
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
	readonly dataResidency?: DataResidency | undefined;
	readonly description?: string | undefined;
	readonly deviceHcsVersion?: string | undefined;
	readonly deviceLocalCapacity?: number | undefined;
	readonly deviceModel?: string | undefined;
	readonly deviceSoftwareVersion?: string | undefined;
	readonly deviceType?: "DataBoxEdgeDevice" | undefined;
	readonly edgeProfile?: EdgeProfile | undefined;
	readonly friendlyName?: string | undefined;
	readonly kubernetesPlatform?: string | undefined;
	readonly modelDescription?: string | undefined;
	readonly nodeCount?: number | undefined;
	readonly resourceMoveDetails?: ResourceMoveDetails | undefined;
	readonly serialNumber?: string | undefined;
	readonly systemData?: SystemData | undefined;
	readonly timeZone?: string | undefined;
}
export interface DataBoxEdgeDeviceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface DataResidency {
	readonly type?: ("GeoZoneReplication" | "ZoneReplication") | undefined;
}
export interface DCAccessCode {
	readonly properties?: DCAccessCodeProperties | undefined;
}
export interface DCAccessCodeProperties {
	readonly authCode?: string | undefined;
}
export interface DeviceCapacityInfoProperties {
	readonly clusterComputeCapacityInfo?: ClusterCapacityViewData | undefined;
	readonly clusterStorageCapacityInfo?: ClusterStorageViewData | undefined;
	readonly nodeCapacityInfos?: DeviceCapacityInfoPropertiesNodeCapacityInfos | undefined;
	readonly timeStamp?: string | undefined;
}
export interface DeviceCapacityInfoPropertiesNodeCapacityInfos {
	readonly "[ key: string ]"?: HostCapacity | undefined;
}
export interface DiagnosticRemoteSupportSettingsProperties {
	readonly remoteSupportSettingsList?: RemoteSupportSettings[] | undefined;
}
export interface EdgeProfile {
	readonly subscription?: EdgeProfileSubscription | undefined;
}
export interface EdgeProfileSubscription {
	readonly id?: string | undefined;
	readonly properties?: SubscriptionProperties | undefined;
	readonly registrationDate?: string | undefined;
	readonly registrationId?: string | undefined;
	readonly state?: ("Deleted" | "Registered" | "Suspended" | "Unregistered" | "Warned") | undefined;
	readonly subscriptionId?: string | undefined;
}
export interface EtcdInfo {
	readonly componentType?: ("CNI" | "Cluster" | "Etcd" | "Invalid" | "LoadBalancer" | "Node") | undefined;
	readonly type?: string | undefined;
	readonly version?: string | undefined;
}
export interface FileSourceInfo {
	readonly shareId: string;
}
export interface FileTriggerProperties {
	readonly customContextTag?: string | undefined;
	readonly sinkInfo: RoleSinkInfo;
	readonly sourceInfo: FileSourceInfo;
}
export interface HostCapacity {
	readonly availableGpuCount?: number | undefined;
	readonly effectiveAvailableMemoryMbOnHost?: number | undefined;
	readonly gpuType?: string | undefined;
	readonly hostName?: string | undefined;
	readonly numaNodesData?: NumaNodeData[] | undefined;
	readonly vmUsedMemory?: HostCapacityVmUsedMemory | undefined;
}
export interface HostCapacityVmUsedMemory {
	readonly "[ key: string ]"?: VmMemory | undefined;
}
export interface ImageRepositoryCredential {
	readonly imageRepositoryUrl: string;
	readonly password?: AsymmetricEncryptedSecret | undefined;
	readonly userName: string;
}
export interface IoTDeviceInfo {
	readonly authentication?: Authentication | undefined;
	readonly deviceId: string;
	readonly ioTHostHub: string;
	readonly ioTHostHubId?: string | undefined;
}
export interface IoTEdgeAgentInfo {
	readonly imageName: string;
	readonly imageRepository?: ImageRepositoryCredential | undefined;
	readonly tag: string;
}
export interface IoTRoleProperties {
	readonly computeResource?: ComputeResource | undefined;
	readonly hostPlatform: "Linux" | "Windows";
	readonly hostPlatformType?: ("KubernetesCluster" | "LinuxVM") | undefined;
	readonly ioTDeviceDetails: IoTDeviceInfo;
	readonly ioTEdgeAgentInfo?: IoTEdgeAgentInfo | undefined;
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
export interface KubernetesClusterInfo {
	readonly componentType?: ("CNI" | "Cluster" | "Etcd" | "Invalid" | "LoadBalancer" | "Node") | undefined;
	readonly etcdInfo?: EtcdInfo | undefined;
	readonly nodes?: NodeInfo[] | undefined;
	readonly version: string;
}
export interface KubernetesIPConfiguration {
	readonly ipAddress?: string | undefined;
	readonly port?: string | undefined;
}
export interface KubernetesRoleCompute {
	readonly hugePage1G?: number | undefined;
	readonly hugePage2M?: number | undefined;
	readonly memoryInBytes?: number | undefined;
	readonly processorCount?: number | undefined;
	readonly vmProfile: string;
}
export interface KubernetesRoleNetwork {
	readonly cniConfig?: CniConfig | undefined;
	readonly loadBalancerConfig?: LoadBalancerConfig | undefined;
}
export interface KubernetesRoleProperties {
	readonly hostPlatform: "Linux" | "Windows";
	readonly hostPlatformType?: ("KubernetesCluster" | "LinuxVM") | undefined;
	readonly kubernetesClusterInfo: KubernetesClusterInfo;
	readonly kubernetesRoleResources: KubernetesRoleResources;
	readonly provisioningState?:
		| ("Created" | "Creating" | "Deleting" | "Failed" | "Invalid" | "Reconfiguring" | "Updating")
		| undefined;
	readonly roleStatus: "Disabled" | "Enabled";
}
export interface KubernetesRoleResources {
	readonly compute: KubernetesRoleCompute;
	readonly network?: KubernetesRoleNetwork | undefined;
	readonly storage?: KubernetesRoleStorage | undefined;
}
export interface KubernetesRoleStorage {
	readonly endpoints?: MountPointMap[] | undefined;
	readonly storageClasses?: KubernetesRoleStorageClassInfo[] | undefined;
}
export interface KubernetesRoleStorageClassInfo {
	readonly name?: string | undefined;
	readonly posixCompliant?: ("Disabled" | "Enabled" | "Invalid") | undefined;
	readonly type?: string | undefined;
}
export interface LoadBalancerConfig {
	readonly componentType?: ("CNI" | "Cluster" | "Etcd" | "Invalid" | "LoadBalancer" | "Node") | undefined;
	readonly type?: string | undefined;
	readonly version?: string | undefined;
}
export interface MECRoleProperties {
	readonly connectionString?: AsymmetricEncryptedSecret | undefined;
	readonly controllerEndpoint?: string | undefined;
	readonly resourceUniqueId?: string | undefined;
	readonly roleStatus: "Disabled" | "Enabled";
}
export interface MetricConfiguration {
	readonly counterSets: MetricCounterSet[];
	readonly mdmAccount?: string | undefined;
	readonly metricNameSpace?: string | undefined;
	readonly resourceId: string;
}
export interface MetricCounter {
	readonly additionalDimensions?: MetricDimension[] | undefined;
	readonly dimensionFilter?: MetricDimension[] | undefined;
	readonly instance?: string | undefined;
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
	readonly mountPoint?: string | undefined;
	readonly mountType?: ("HostPath" | "Volume") | undefined;
	readonly roleId?: string | undefined;
	readonly roleType?:
		| ("ASA" | "CloudEdgeManagement" | "Cognitive" | "Functions" | "IOT" | "Kubernetes" | "MEC")
		| undefined;
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
export interface NodeInfo {
	readonly componentType?: ("CNI" | "Cluster" | "Etcd" | "Invalid" | "LoadBalancer" | "Node") | undefined;
	readonly ipConfiguration?: KubernetesIPConfiguration[] | undefined;
	readonly name?: string | undefined;
	readonly type?: ("ControlPlane" | "Invalid" | "ManagementCluster" | "Master" | "NodePool" | "Worker") | undefined;
}
export interface NumaNodeData {
	readonly effectiveAvailableMemoryInMb?: number | undefined;
	readonly freeVCpuIndexesForHpn?: number[] | undefined;
	readonly logicalCoreCountPerCore?: number | undefined;
	readonly numaNodeIndex?: number | undefined;
	readonly totalMemoryInMb?: number | undefined;
	readonly vCpuIndexesForHpn?: number[] | undefined;
	readonly vCpuIndexesForRoot?: number[] | undefined;
}
export interface OrderProperties {
	readonly contactInformation?: ContactDetails | undefined;
	readonly currentStatus?: OrderStatus | undefined;
	readonly deliveryTrackingInfo?: TrackingInfo[] | undefined;
	readonly orderHistory?: OrderStatus[] | undefined;
	readonly orderId?: string | undefined;
	readonly returnTrackingInfo?: TrackingInfo[] | undefined;
	readonly serialNumber?: string | undefined;
	readonly shipmentType?: ("NotApplicable" | "SelfPickup" | "ShippedToCustomer") | undefined;
	readonly shippingAddress?: Address | undefined;
}
export interface OrderStatus {
	readonly additionalOrderDetails?: OrderStatusAdditionalOrderDetails | undefined;
	readonly comments?: string | undefined;
	readonly status:
		| "Arriving"
		| "AwaitingDrop"
		| "AwaitingFulfillment"
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
	readonly trackingInformation?: TrackingInfo | undefined;
	readonly updateDateTime?: string | undefined;
}
export interface OrderStatusAdditionalOrderDetails {
	readonly "[ key: string ]"?: string | undefined;
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
export interface ProactiveLogCollectionSettingsProperties {
	readonly userConsent: "Disabled" | "Enabled";
}
export interface RefreshDetails {
	readonly errorManifestFile?: string | undefined;
	readonly inProgressRefreshJobId?: string | undefined;
	readonly lastCompletedRefreshJobTimeInUTC?: string | undefined;
	readonly lastJob?: string | undefined;
}
export interface RemoteSupportSettings {
	readonly accessLevel?: ("FullAccess" | "None" | "ReadOnly" | "ReadWrite") | undefined;
	readonly expirationTimeStampInUTC?: string | undefined;
	readonly remoteApplicationType?: ("AllApplications" | "LocalUI" | "Powershell" | "WAC") | undefined;
}
export interface ResourceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned" | "UserAssigned") | undefined;
}
export interface ResourceMoveDetails {
	readonly operationInProgress?: ("None" | "ResourceMoveFailed" | "ResourceMoveInProgress") | undefined;
	readonly operationInProgressLockTimeoutInUTC?: string | undefined;
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
	readonly name?:
		| (
				| "EP2_128_1T4_Mx1_W"
				| "EP2_128_GPU1_Mx1_W"
				| "EP2_256_2T4_W"
				| "EP2_256_GPU2_Mx1"
				| "EP2_64_1VPU_W"
				| "EP2_64_Mx1_W"
				| "Edge"
				| "EdgeMR_Mini"
				| "EdgeMR_TCP"
				| "EdgePR_Base"
				| "EdgePR_Base_UPS"
				| "EdgeP_Base"
				| "EdgeP_High"
				| "GPU"
				| "Gateway"
				| "Management"
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
				| "TMA"
		  )
		| undefined;
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
export interface StorageAccountProperties {
	readonly blobEndpoint?: string | undefined;
	readonly containerCount?: number | undefined;
	readonly dataPolicy: "Cloud" | "Local";
	readonly description?: string | undefined;
	readonly storageAccountCredentialId?: string | undefined;
	readonly storageAccountStatus?: ("NeedsAttention" | "OK" | "Offline" | "Unknown" | "Updating") | undefined;
}
export interface SubscriptionProperties {
	readonly locationPlacementId?: string | undefined;
	readonly quotaId?: string | undefined;
	readonly registeredFeatures?: SubscriptionRegisteredFeatures[] | undefined;
	readonly serializedDetails?: string | undefined;
	readonly tenantId?: string | undefined;
}
export interface SubscriptionRegisteredFeatures {
	readonly name?: string | undefined;
	readonly state?: string | undefined;
}
export interface SymmetricKey {
	readonly connectionString?: AsymmetricEncryptedSecret | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TrackingInfo {
	readonly carrierName?: string | undefined;
	readonly serialNumber?: string | undefined;
	readonly trackingId?: string | undefined;
	readonly trackingUrl?: string | undefined;
}
export interface UpdateDetails {
	readonly estimatedInstallTimeInMins?: number | undefined;
	readonly friendlyVersionNumber?: string | undefined;
	readonly installationImpact?: ("DeviceRebooted" | "KubernetesWorkloadsDown" | "None") | undefined;
	readonly rebootBehavior?: ("NeverReboots" | "RequestReboot" | "RequiresReboot") | undefined;
	readonly status?:
		| ("DownloadCompleted" | "DownloadPending" | "DownloadStarted" | "InstallCompleted" | "InstallStarted")
		| undefined;
	readonly targetVersion?: string | undefined;
	readonly updateSize?: number | undefined;
	readonly updateTitle?: string | undefined;
	readonly updateType?: ("Firmware" | "Kubernetes" | "Software") | undefined;
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
	readonly lastCompletedDownloadJobId?: string | undefined;
	readonly lastCompletedInstallJobDateTime?: string | undefined;
	readonly lastCompletedInstallJobId?: string | undefined;
	readonly lastCompletedScanJobDateTime?: string | undefined;
	readonly lastDownloadJobStatus?:
		| ("Canceled" | "Failed" | "Invalid" | "Paused" | "Running" | "Scheduled" | "Succeeded")
		| undefined;
	readonly lastInstallJobStatus?:
		| ("Canceled" | "Failed" | "Invalid" | "Paused" | "Running" | "Scheduled" | "Succeeded")
		| undefined;
	readonly lastSuccessfulInstallJobDateTime?: string | undefined;
	readonly lastSuccessfulScanJobTime?: string | undefined;
	readonly ongoingUpdateOperation?: ("Download" | "Install" | "None" | "Scan") | undefined;
	readonly rebootBehavior?: ("NeverReboots" | "RequestReboot" | "RequiresReboot") | undefined;
	readonly totalNumberOfUpdatesAvailable?: number | undefined;
	readonly totalNumberOfUpdatesPendingDownload?: number | undefined;
	readonly totalNumberOfUpdatesPendingInstall?: number | undefined;
	readonly totalTimeInMinutes?: number | undefined;
	readonly totalUpdateSizeInBytes?: number | undefined;
	readonly updates?: UpdateDetails[] | undefined;
	readonly updateTitles?: string[] | undefined;
}
export interface UserAccessRight {
	readonly accessType: "Change" | "Custom" | "Read";
	readonly userId: string;
}
export interface UserProperties {
	readonly encryptedPassword?: AsymmetricEncryptedSecret | undefined;
	readonly shareAccessRights?: ShareAccessRight[] | undefined;
	readonly userType: "ARM" | "LocalManagement" | "Share";
}
export interface VmMemory {
	readonly currentMemoryUsageMB?: number | undefined;
	readonly startupMemoryMB?: number | undefined;
}
export type dataBoxEdgeDevices_roles =
	| dataBoxEdgeDevices_roles_CloudEdgeManagement
	| dataBoxEdgeDevices_roles_IOT
	| dataBoxEdgeDevices_roles_Kubernetes
	| dataBoxEdgeDevices_roles_MEC;
export type dataBoxEdgeDevices_roles_addons = dataBoxEdgeDevices_roles_addons_ArcForKubernetes;
export type dataBoxEdgeDevices_triggers =
	| dataBoxEdgeDevices_triggers_FileEvent
	| dataBoxEdgeDevices_triggers_PeriodicTimerEvent;
export default {
	dataBoxEdgeDevices: dataBoxEdgeDevices,
	"dataBoxEdgeDevices/alerts": dataBoxEdgeDevices_alerts,
	"dataBoxEdgeDevices/bandwidthSchedules": dataBoxEdgeDevices_bandwidthSchedules,
	"dataBoxEdgeDevices/deviceCapacityInfo": dataBoxEdgeDevices_deviceCapacityInfo,
	"dataBoxEdgeDevices/diagnosticProactiveLogCollectionSettings":
		dataBoxEdgeDevices_diagnosticProactiveLogCollectionSettings,
	"dataBoxEdgeDevices/diagnosticRemoteSupportSettings": dataBoxEdgeDevices_diagnosticRemoteSupportSettings,
	"dataBoxEdgeDevices/networkSettings": dataBoxEdgeDevices_networkSettings,
	"dataBoxEdgeDevices/orders": dataBoxEdgeDevices_orders,
	"dataBoxEdgeDevices/roles/CloudEdgeManagement": dataBoxEdgeDevices_roles_CloudEdgeManagement,
	"dataBoxEdgeDevices/roles/IOT": dataBoxEdgeDevices_roles_IOT,
	"dataBoxEdgeDevices/roles/Kubernetes": dataBoxEdgeDevices_roles_Kubernetes,
	"dataBoxEdgeDevices/roles/MEC": dataBoxEdgeDevices_roles_MEC,
	"dataBoxEdgeDevices/roles/addons/ArcForKubernetes": dataBoxEdgeDevices_roles_addons_ArcForKubernetes,
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
