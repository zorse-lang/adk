import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class sqlVirtualMachineGroups
	extends ArmResource<sqlVirtualMachineGroupsComponentInputs>
	implements sqlVirtualMachineGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: sqlVirtualMachineGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups", "2022-07-01-preview", options);
	}
	public readonly apiVersion: "2022-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups";
}
export interface sqlVirtualMachineGroupsComponentOutputs {
	readonly apiVersion: "2022-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups";
}
export interface sqlVirtualMachineGroupsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: SqlVirtualMachineGroupProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class sqlVirtualMachineGroups_availabilityGroupListeners
	extends ArmResource<sqlVirtualMachineGroups_availabilityGroupListenersComponentInputs>
	implements sqlVirtualMachineGroups_availabilityGroupListenersComponentOutputs
{
	constructor(entity: ADKEntity, options: sqlVirtualMachineGroups_availabilityGroupListenersComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/availabilityGroupListeners",
			"2022-07-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/availabilityGroupListeners";
}
export interface sqlVirtualMachineGroups_availabilityGroupListenersComponentOutputs {
	readonly apiVersion: "2022-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/availabilityGroupListeners";
}
export interface sqlVirtualMachineGroups_availabilityGroupListenersComponentInputs {
	readonly name: string;
	readonly properties?: AvailabilityGroupListenerProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class sqlVirtualMachines
	extends ArmResource<sqlVirtualMachinesComponentInputs>
	implements sqlVirtualMachinesComponentOutputs
{
	constructor(entity: ADKEntity, options: sqlVirtualMachinesComponentInputs) {
		super(entity, options.name, "Microsoft.SqlVirtualMachine/sqlVirtualMachines", "2022-07-01-preview", options);
	}
	public readonly apiVersion: "2022-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SqlVirtualMachine/sqlVirtualMachines";
}
export interface sqlVirtualMachinesComponentOutputs {
	readonly apiVersion: "2022-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SqlVirtualMachine/sqlVirtualMachines";
}
export interface sqlVirtualMachinesComponentInputs {
	readonly identity?: ResourceIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: SqlVirtualMachineProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface AdditionalFeaturesServerConfigurations {
	readonly isRServicesEnabled?: boolean | undefined;
}
export interface AgConfiguration {
	readonly replicas?: AgReplica[] | undefined;
}
export interface AgReplica {
	readonly commit?: ("ASYNCHRONOUS_COMMIT" | "SYNCHRONOUS_COMMIT") | undefined;
	readonly failover?: ("AUTOMATIC" | "MANUAL") | undefined;
	readonly readableSecondary?: ("ALL" | "NO" | "READ_ONLY") | undefined;
	readonly role?: ("PRIMARY" | "SECONDARY") | undefined;
	readonly sqlVirtualMachineInstanceId?: string | undefined;
}
export interface AssessmentSettings {
	readonly enable?: boolean | undefined;
	readonly runImmediately?: boolean | undefined;
	readonly schedule?: Schedule | undefined;
}
export interface AutoBackupSettings {
	readonly backupScheduleType?: ("Automated" | "Manual") | undefined;
	readonly backupSystemDbs?: boolean | undefined;
	readonly daysOfWeek?:
		| ("Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday" | "Wednesday"[])
		| undefined;
	readonly enable?: boolean | undefined;
	readonly enableEncryption?: boolean | undefined;
	readonly fullBackupFrequency?: ("Daily" | "Weekly") | undefined;
	readonly fullBackupStartTime?: number | undefined;
	readonly fullBackupWindowHours?: number | undefined;
	readonly logBackupFrequency?: number | undefined;
	readonly password?: string | undefined;
	readonly retentionPeriod?: number | undefined;
	readonly storageAccessKey?: string | undefined;
	readonly storageAccountUrl?: string | undefined;
	readonly storageContainerName?: string | undefined;
}
export interface AutoPatchingSettings {
	readonly dayOfWeek?: ("Everyday" | "Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday") | undefined;
	readonly enable?: boolean | undefined;
	readonly maintenanceWindowDuration?: number | undefined;
	readonly maintenanceWindowStartingHour?: number | undefined;
}
export interface AvailabilityGroupListenerProperties {
	readonly availabilityGroupConfiguration?: AgConfiguration | undefined;
	readonly availabilityGroupName?: string | undefined;
	readonly createDefaultAvailabilityGroupIfNotExist?: boolean | undefined;
	readonly loadBalancerConfigurations?: LoadBalancerConfiguration[] | undefined;
	readonly multiSubnetIpConfigurations?: MultiSubnetIpConfiguration[] | undefined;
	readonly port?: number | undefined;
	readonly provisioningState?: string | undefined;
}
export interface KeyVaultCredentialSettings {
	readonly azureKeyVaultUrl?: string | undefined;
	readonly credentialName?: string | undefined;
	readonly enable?: boolean | undefined;
	readonly servicePrincipalName?: string | undefined;
	readonly servicePrincipalSecret?: string | undefined;
}
export interface LoadBalancerConfiguration {
	readonly loadBalancerResourceId?: string | undefined;
	readonly privateIpAddress?: PrivateIPAddress | undefined;
	readonly probePort?: number | undefined;
	readonly publicIpAddressResourceId?: string | undefined;
	readonly sqlVirtualMachineInstances?: string[] | undefined;
}
export interface MultiSubnetIpConfiguration {
	readonly privateIpAddress: PrivateIPAddress;
	readonly sqlVirtualMachineInstance: string;
}
export interface PrivateIPAddress {
	readonly ipAddress?: string | undefined;
	readonly subnetResourceId?: string | undefined;
}
export interface ResourceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned") | undefined;
}
export interface Schedule {
	readonly dayOfWeek?: ("Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday") | undefined;
	readonly enable?: boolean | undefined;
	readonly monthlyOccurrence?: number | undefined;
	readonly startTime?: string | undefined;
	readonly weeklyInterval?: number | undefined;
}
export interface ServerConfigurationsManagementSettings {
	readonly additionalFeaturesServerConfigurations?: AdditionalFeaturesServerConfigurations | undefined;
	readonly sqlConnectivityUpdateSettings?: SqlConnectivityUpdateSettings | undefined;
	readonly sqlInstanceSettings?: SQLInstanceSettings | undefined;
	readonly sqlStorageUpdateSettings?: SqlStorageUpdateSettings | undefined;
	readonly sqlWorkloadTypeUpdateSettings?: SqlWorkloadTypeUpdateSettings | undefined;
}
export interface SqlConnectivityUpdateSettings {
	readonly connectivityType?: ("LOCAL" | "PRIVATE" | "PUBLIC") | undefined;
	readonly port?: number | undefined;
	readonly sqlAuthUpdatePassword?: string | undefined;
	readonly sqlAuthUpdateUserName?: string | undefined;
}
export interface SQLInstanceSettings {
	readonly collation?: string | undefined;
	readonly isIfiEnabled?: boolean | undefined;
	readonly isLpimEnabled?: boolean | undefined;
	readonly isOptimizeForAdHocWorkloadsEnabled?: boolean | undefined;
	readonly maxDop?: number | undefined;
	readonly maxServerMemoryMB?: number | undefined;
	readonly minServerMemoryMB?: number | undefined;
}
export interface SQLStorageSettings {
	readonly defaultFilePath?: string | undefined;
	readonly luns?: number[] | undefined;
}
export interface SqlStorageUpdateSettings {
	readonly diskConfigurationType?: ("ADD" | "EXTEND" | "NEW") | undefined;
	readonly diskCount?: number | undefined;
	readonly startingDeviceId?: number | undefined;
}
export interface SQLTempDbSettings {
	readonly dataFileCount?: number | undefined;
	readonly dataFileSize?: number | undefined;
	readonly dataGrowth?: number | undefined;
	readonly defaultFilePath?: string | undefined;
	readonly logFileSize?: number | undefined;
	readonly logGrowth?: number | undefined;
	readonly luns?: number[] | undefined;
	readonly persistFolder?: boolean | undefined;
	readonly persistFolderPath?: string | undefined;
}
export interface SqlVirtualMachineGroupProperties {
	readonly clusterConfiguration?: "Domainful" | undefined;
	readonly clusterManagerType?: "WSFC" | undefined;
	readonly provisioningState?: string | undefined;
	readonly scaleType?: "HA" | undefined;
	readonly sqlImageOffer?: string | undefined;
	readonly sqlImageSku?: ("Developer" | "Enterprise") | undefined;
	readonly wsfcDomainProfile?: WsfcDomainProfile | undefined;
}
export interface SqlVirtualMachineProperties {
	readonly assessmentSettings?: AssessmentSettings | undefined;
	readonly autoBackupSettings?: AutoBackupSettings | undefined;
	readonly autoPatchingSettings?: AutoPatchingSettings | undefined;
	readonly enableAutomaticUpgrade?: boolean | undefined;
	readonly keyVaultCredentialSettings?: KeyVaultCredentialSettings | undefined;
	readonly leastPrivilegeMode?: "Enabled" | undefined;
	readonly provisioningState?: string | undefined;
	readonly serverConfigurationsManagementSettings?: ServerConfigurationsManagementSettings | undefined;
	readonly sqlImageOffer?: string | undefined;
	readonly sqlImageSku?: ("Developer" | "Enterprise" | "Express" | "Standard" | "Web") | undefined;
	readonly sqlManagement?: ("Full" | "LightWeight" | "NoAgent") | undefined;
	readonly sqlServerLicenseType?: ("AHUB" | "DR" | "PAYG") | undefined;
	readonly sqlVirtualMachineGroupResourceId?: string | undefined;
	readonly storageConfigurationSettings?: StorageConfigurationSettings | undefined;
	readonly virtualMachineResourceId?: string | undefined;
	readonly wsfcDomainCredentials?: WsfcDomainCredentials | undefined;
	readonly wsfcStaticIp?: string | undefined;
}
export interface SqlWorkloadTypeUpdateSettings {
	readonly sqlWorkloadType?: ("DW" | "GENERAL" | "OLTP") | undefined;
}
export interface StorageConfigurationSettings {
	readonly diskConfigurationType?: ("ADD" | "EXTEND" | "NEW") | undefined;
	readonly sqlDataSettings?: SQLStorageSettings | undefined;
	readonly sqlLogSettings?: SQLStorageSettings | undefined;
	readonly sqlSystemDbOnDataDisk?: boolean | undefined;
	readonly sqlTempDbSettings?: SQLTempDbSettings | undefined;
	readonly storageWorkloadType?: ("DW" | "GENERAL" | "OLTP") | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface WsfcDomainCredentials {
	readonly clusterBootstrapAccountPassword?: string | undefined;
	readonly clusterOperatorAccountPassword?: string | undefined;
	readonly sqlServiceAccountPassword?: string | undefined;
}
export interface WsfcDomainProfile {
	readonly clusterBootstrapAccount?: string | undefined;
	readonly clusterOperatorAccount?: string | undefined;
	readonly clusterSubnetType?: ("MultiSubnet" | "SingleSubnet") | undefined;
	readonly domainFqdn?: string | undefined;
	readonly fileShareWitnessPath?: string | undefined;
	readonly ouPath?: string | undefined;
	readonly sqlServiceAccount?: string | undefined;
	readonly storageAccountPrimaryKey?: string | undefined;
	readonly storageAccountUrl?: string | undefined;
}
export default {
	sqlVirtualMachineGroups: sqlVirtualMachineGroups,
	"sqlVirtualMachineGroups/availabilityGroupListeners": sqlVirtualMachineGroups_availabilityGroupListeners,
	sqlVirtualMachines: sqlVirtualMachines,
};
