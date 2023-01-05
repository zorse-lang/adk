import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class sqlVirtualMachineGroups
	extends ArmResource<sqlVirtualMachineGroupsComponentInputs>
	implements sqlVirtualMachineGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: sqlVirtualMachineGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups", "2022-02-01", options);
	}
	public readonly apiVersion: "2022-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups";
}
export interface sqlVirtualMachineGroupsComponentOutputs {
	readonly apiVersion: "2022-02-01";
	readonly id: string;
	readonly type: "Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups";
}
export interface sqlVirtualMachineGroupsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: SqlVirtualMachineGroupProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
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
			"2022-02-01",
			options,
		);
	}
	public readonly apiVersion: "2022-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/availabilityGroupListeners";
}
export interface sqlVirtualMachineGroups_availabilityGroupListenersComponentOutputs {
	readonly apiVersion: "2022-02-01";
	readonly id: string;
	readonly type: "Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/availabilityGroupListeners";
}
export interface sqlVirtualMachineGroups_availabilityGroupListenersComponentInputs {
	readonly name: string;
	readonly properties?: AvailabilityGroupListenerProperties;
	readonly systemData?: SystemData;
}
export class sqlVirtualMachines
	extends ArmResource<sqlVirtualMachinesComponentInputs>
	implements sqlVirtualMachinesComponentOutputs
{
	constructor(entity: ADKEntity, options: sqlVirtualMachinesComponentInputs) {
		super(entity, options.name, "Microsoft.SqlVirtualMachine/sqlVirtualMachines", "2022-02-01", options);
	}
	public readonly apiVersion: "2022-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.SqlVirtualMachine/sqlVirtualMachines";
}
export interface sqlVirtualMachinesComponentOutputs {
	readonly apiVersion: "2022-02-01";
	readonly id: string;
	readonly type: "Microsoft.SqlVirtualMachine/sqlVirtualMachines";
}
export interface sqlVirtualMachinesComponentInputs {
	readonly identity?: ResourceIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties?: SqlVirtualMachineProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export interface AdditionalFeaturesServerConfigurations {
	readonly isRServicesEnabled?: boolean;
}
export interface AgConfiguration {
	readonly replicas?: AgReplica[];
}
export interface AgReplica {
	readonly commit?: "ASYNCHRONOUS_COMMIT" | "SYNCHRONOUS_COMMIT";
	readonly failover?: "AUTOMATIC" | "MANUAL";
	readonly readableSecondary?: "ALL" | "NO" | "READ_ONLY";
	readonly role?: "PRIMARY" | "SECONDARY";
	readonly sqlVirtualMachineInstanceId?: string;
}
export interface AssessmentSettings {
	readonly enable?: boolean;
	readonly runImmediately?: boolean;
	readonly schedule?: Schedule;
}
export interface AutoBackupSettings {
	readonly backupScheduleType?: "Automated" | "Manual";
	readonly backupSystemDbs?: boolean;
	readonly daysOfWeek?: "Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday" | "Wednesday"[];
	readonly enable?: boolean;
	readonly enableEncryption?: boolean;
	readonly fullBackupFrequency?: "Daily" | "Weekly";
	readonly fullBackupStartTime?: number;
	readonly fullBackupWindowHours?: number;
	readonly logBackupFrequency?: number;
	readonly password?: string;
	readonly retentionPeriod?: number;
	readonly storageAccessKey?: string;
	readonly storageAccountUrl?: string;
	readonly storageContainerName?: string;
}
export interface AutoPatchingSettings {
	readonly dayOfWeek?: "Everyday" | "Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday";
	readonly enable?: boolean;
	readonly maintenanceWindowDuration?: number;
	readonly maintenanceWindowStartingHour?: number;
}
export interface AvailabilityGroupListenerProperties {
	readonly availabilityGroupConfiguration?: AgConfiguration;
	readonly availabilityGroupName?: string;
	readonly createDefaultAvailabilityGroupIfNotExist?: boolean;
	readonly loadBalancerConfigurations?: LoadBalancerConfiguration[];
	readonly multiSubnetIpConfigurations?: MultiSubnetIpConfiguration[];
	readonly port?: number;
	readonly provisioningState?: string;
}
export interface KeyVaultCredentialSettings {
	readonly azureKeyVaultUrl?: string;
	readonly credentialName?: string;
	readonly enable?: boolean;
	readonly servicePrincipalName?: string;
	readonly servicePrincipalSecret?: string;
}
export interface LoadBalancerConfiguration {
	readonly loadBalancerResourceId?: string;
	readonly privateIpAddress?: PrivateIPAddress;
	readonly probePort?: number;
	readonly publicIpAddressResourceId?: string;
	readonly sqlVirtualMachineInstances?: string[];
}
export interface MultiSubnetIpConfiguration {
	readonly privateIpAddress: PrivateIPAddress;
	readonly sqlVirtualMachineInstance: string;
}
export interface PrivateIPAddress {
	readonly ipAddress?: string;
	readonly subnetResourceId?: string;
}
export interface ResourceIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned";
}
export interface Schedule {
	readonly dayOfWeek?: "Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday";
	readonly enable?: boolean;
	readonly monthlyOccurrence?: number;
	readonly startTime?: string;
	readonly weeklyInterval?: number;
}
export interface ServerConfigurationsManagementSettings {
	readonly additionalFeaturesServerConfigurations?: AdditionalFeaturesServerConfigurations;
	readonly sqlConnectivityUpdateSettings?: SqlConnectivityUpdateSettings;
	readonly sqlInstanceSettings?: SQLInstanceSettings;
	readonly sqlStorageUpdateSettings?: SqlStorageUpdateSettings;
	readonly sqlWorkloadTypeUpdateSettings?: SqlWorkloadTypeUpdateSettings;
}
export interface SqlConnectivityUpdateSettings {
	readonly connectivityType?: "LOCAL" | "PRIVATE" | "PUBLIC";
	readonly port?: number;
	readonly sqlAuthUpdatePassword?: string;
	readonly sqlAuthUpdateUserName?: string;
}
export interface SQLInstanceSettings {
	readonly collation?: string;
	readonly isIfiEnabled?: boolean;
	readonly isLpimEnabled?: boolean;
	readonly isOptimizeForAdHocWorkloadsEnabled?: boolean;
	readonly maxDop?: number;
	readonly maxServerMemoryMB?: number;
	readonly minServerMemoryMB?: number;
}
export interface SQLStorageSettings {
	readonly defaultFilePath?: string;
	readonly luns?: number[];
}
export interface SqlStorageUpdateSettings {
	readonly diskConfigurationType?: "ADD" | "EXTEND" | "NEW";
	readonly diskCount?: number;
	readonly startingDeviceId?: number;
}
export interface SQLTempDbSettings {
	readonly dataFileCount?: number;
	readonly dataFileSize?: number;
	readonly dataGrowth?: number;
	readonly defaultFilePath?: string;
	readonly logFileSize?: number;
	readonly logGrowth?: number;
	readonly luns?: number[];
	readonly persistFolder?: boolean;
	readonly persistFolderPath?: string;
}
export interface SqlVirtualMachineGroupProperties {
	readonly clusterConfiguration?: "Domainful";
	readonly clusterManagerType?: "WSFC";
	readonly provisioningState?: string;
	readonly scaleType?: "HA";
	readonly sqlImageOffer?: string;
	readonly sqlImageSku?: "Developer" | "Enterprise";
	readonly wsfcDomainProfile?: WsfcDomainProfile;
}
export interface SqlVirtualMachineProperties {
	readonly assessmentSettings?: AssessmentSettings;
	readonly autoBackupSettings?: AutoBackupSettings;
	readonly autoPatchingSettings?: AutoPatchingSettings;
	readonly keyVaultCredentialSettings?: KeyVaultCredentialSettings;
	readonly provisioningState?: string;
	readonly serverConfigurationsManagementSettings?: ServerConfigurationsManagementSettings;
	readonly sqlImageOffer?: string;
	readonly sqlImageSku?: "Developer" | "Enterprise" | "Express" | "Standard" | "Web";
	readonly sqlManagement?: "Full" | "LightWeight" | "NoAgent";
	readonly sqlServerLicenseType?: "AHUB" | "DR" | "PAYG";
	readonly sqlVirtualMachineGroupResourceId?: string;
	readonly storageConfigurationSettings?: StorageConfigurationSettings;
	readonly virtualMachineResourceId?: string;
	readonly wsfcDomainCredentials?: WsfcDomainCredentials;
	readonly wsfcStaticIp?: string;
}
export interface SqlWorkloadTypeUpdateSettings {
	readonly sqlWorkloadType?: "DW" | "GENERAL" | "OLTP";
}
export interface StorageConfigurationSettings {
	readonly diskConfigurationType?: "ADD" | "EXTEND" | "NEW";
	readonly sqlDataSettings?: SQLStorageSettings;
	readonly sqlLogSettings?: SQLStorageSettings;
	readonly sqlSystemDbOnDataDisk?: boolean;
	readonly sqlTempDbSettings?: SQLTempDbSettings;
	readonly storageWorkloadType?: "DW" | "GENERAL" | "OLTP";
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface WsfcDomainCredentials {
	readonly clusterBootstrapAccountPassword?: string;
	readonly clusterOperatorAccountPassword?: string;
	readonly sqlServiceAccountPassword?: string;
}
export interface WsfcDomainProfile {
	readonly clusterBootstrapAccount?: string;
	readonly clusterOperatorAccount?: string;
	readonly clusterSubnetType?: "MultiSubnet" | "SingleSubnet";
	readonly domainFqdn?: string;
	readonly fileShareWitnessPath?: string;
	readonly ouPath?: string;
	readonly sqlServiceAccount?: string;
	readonly storageAccountPrimaryKey?: string;
	readonly storageAccountUrl?: string;
}
export default {
	sqlVirtualMachineGroups: sqlVirtualMachineGroups,
	"sqlVirtualMachineGroups/availabilityGroupListeners": sqlVirtualMachineGroups_availabilityGroupListeners,
	sqlVirtualMachines: sqlVirtualMachines,
};
