import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class monitors extends ArmResource<monitorsComponentInputs> implements monitorsComponentOutputs {
	constructor(entity: ADKEntity, options: monitorsComponentInputs) {
		super(entity, options.name, "Microsoft.Workloads/monitors", "2021-12-01-preview", options);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Workloads/monitors";
}
export interface monitorsComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Workloads/monitors";
}
export interface monitorsComponentInputs {
	readonly identity?: UserAssignedServiceIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties?: MonitorProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class monitors_providerInstances
	extends ArmResource<monitors_providerInstancesComponentInputs>
	implements monitors_providerInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: monitors_providerInstancesComponentInputs) {
		super(entity, options.name, "Microsoft.Workloads/monitors/providerInstances", "2021-12-01-preview", options);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Workloads/monitors/providerInstances";
}
export interface monitors_providerInstancesComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Workloads/monitors/providerInstances";
}
export interface monitors_providerInstancesComponentInputs {
	readonly identity?: UserAssignedServiceIdentity;
	readonly name: string;
	readonly properties?: ProviderInstanceProperties;
	readonly systemData?: SystemData;
}
export class phpWorkloads extends ArmResource<phpWorkloadsComponentInputs> implements phpWorkloadsComponentOutputs {
	constructor(entity: ADKEntity, options: phpWorkloadsComponentInputs) {
		super(entity, options.name, "Microsoft.Workloads/phpWorkloads", "2021-12-01-preview", options);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Workloads/phpWorkloads";
}
export interface phpWorkloadsComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Workloads/phpWorkloads";
}
export interface phpWorkloadsComponentInputs {
	readonly identity?: PhpWorkloadResourceIdentity;
	readonly kind: "WordPress";
	readonly location: string;
	readonly name: string;
	readonly properties?: PhpWorkloadResourceProperties;
	readonly sku?: Sku;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class phpWorkloads_wordpressInstances
	extends ArmResource<phpWorkloads_wordpressInstancesComponentInputs>
	implements phpWorkloads_wordpressInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: phpWorkloads_wordpressInstancesComponentInputs) {
		super(entity, options.name, "Microsoft.Workloads/phpWorkloads/wordpressInstances", "2021-12-01-preview", options);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Workloads/phpWorkloads/wordpressInstances";
}
export interface phpWorkloads_wordpressInstancesComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Workloads/phpWorkloads/wordpressInstances";
}
export interface phpWorkloads_wordpressInstancesComponentInputs {
	readonly name: string;
	readonly properties?: WordpressInstanceResourceProperties;
	readonly systemData?: SystemData;
}
export class sapVirtualInstances
	extends ArmResource<sapVirtualInstancesComponentInputs>
	implements sapVirtualInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: sapVirtualInstancesComponentInputs) {
		super(entity, options.name, "Microsoft.Workloads/sapVirtualInstances", "2021-12-01-preview", options);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Workloads/sapVirtualInstances";
}
export interface sapVirtualInstancesComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Workloads/sapVirtualInstances";
}
export interface sapVirtualInstancesComponentInputs {
	readonly identity?: UserAssignedServiceIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties: SAPVirtualInstanceProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class sapVirtualInstances_applicationInstances
	extends ArmResource<sapVirtualInstances_applicationInstancesComponentInputs>
	implements sapVirtualInstances_applicationInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: sapVirtualInstances_applicationInstancesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Workloads/sapVirtualInstances/applicationInstances",
			"2021-12-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Workloads/sapVirtualInstances/applicationInstances";
}
export interface sapVirtualInstances_applicationInstancesComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Workloads/sapVirtualInstances/applicationInstances";
}
export interface sapVirtualInstances_applicationInstancesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: SAPApplicationServerProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class sapVirtualInstances_centralInstances
	extends ArmResource<sapVirtualInstances_centralInstancesComponentInputs>
	implements sapVirtualInstances_centralInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: sapVirtualInstances_centralInstancesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Workloads/sapVirtualInstances/centralInstances",
			"2021-12-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Workloads/sapVirtualInstances/centralInstances";
}
export interface sapVirtualInstances_centralInstancesComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Workloads/sapVirtualInstances/centralInstances";
}
export interface sapVirtualInstances_centralInstancesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: SAPCentralServerProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class sapVirtualInstances_databaseInstances
	extends ArmResource<sapVirtualInstances_databaseInstancesComponentInputs>
	implements sapVirtualInstances_databaseInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: sapVirtualInstances_databaseInstancesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Workloads/sapVirtualInstances/databaseInstances",
			"2021-12-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Workloads/sapVirtualInstances/databaseInstances";
}
export interface sapVirtualInstances_databaseInstancesComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Workloads/sapVirtualInstances/databaseInstances";
}
export interface sapVirtualInstances_databaseInstancesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: SAPDatabaseProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export interface ApplicationServerConfiguration {
	readonly instanceCount: number;
	readonly subnetId: string;
	readonly virtualMachineConfiguration: VirtualMachineConfiguration;
}
export interface BackupProfile {
	readonly backupEnabled: "Disabled" | "Enabled";
	readonly vaultResourceId?: string;
}
export interface CacheProfile {
	readonly cacheResourceId?: string;
	readonly capacity: number;
	readonly family: "C" | "P";
	readonly name?: string;
	readonly skuName: string;
}
export interface CentralServerConfiguration {
	readonly instanceCount: number;
	readonly subnetId: string;
	readonly virtualMachineConfiguration: VirtualMachineConfiguration;
}
export interface CentralServerVmDetails {
	readonly type?: "ASCS" | "ERS" | "ERSInactive" | "Primary" | "Secondary" | "Standby" | "Unknown";
	readonly virtualMachineId?: string;
}
export interface DatabaseConfiguration {
	readonly databaseType?: "DB2" | "HANA";
	readonly instanceCount: number;
	readonly subnetId: string;
	readonly virtualMachineConfiguration: VirtualMachineConfiguration;
}
export interface DatabaseProfile {
	readonly backupRetentionDays?: number;
	readonly haEnabled?: "Disabled" | "Enabled";
	readonly serverName?: string;
	readonly serverResourceId?: string;
	readonly sku: string;
	readonly sslEnforcementEnabled?: "Disabled" | "Enabled";
	readonly storageInGB?: number;
	readonly storageIops?: number;
	readonly storageSku?: string;
	readonly tier: "Burstable" | "GeneralPurpose";
	readonly type: "MySql";
	readonly version?: string;
}
export interface DatabaseVmDetails {
	readonly status?: "Offline" | "PartiallyRunning" | "Running" | "Starting" | "Stopping" | "Unavailable";
	readonly virtualMachineId?: string;
}
export interface DeployerVmPackages {
	readonly storageAccountId?: string;
	readonly url?: string;
}
export interface DiskInfo {
	readonly sizeInGB?: number;
	readonly storageType: "Premium_LRS" | "StandardSSD_LRS";
}
export interface EnqueueReplicationServerProperties {
	readonly ersVersion?: "EnqueueReplicator1" | "EnqueueReplicator2";
	readonly health?: "Degraded" | "Healthy" | "Unhealthy" | "Unknown";
	readonly hostname?: string;
	readonly instanceNo?: string;
	readonly ipAddress?: string;
	readonly kernelPatch?: string;
	readonly kernelVersion?: string;
}
export interface EnqueueServerProperties {
	readonly health?: "Degraded" | "Healthy" | "Unhealthy" | "Unknown";
	readonly hostname?: string;
	readonly ipAddress?: string;
	readonly port?: number;
}
export interface Error {
	readonly code?: string;
	readonly details?: Error[];
	readonly innerError?: ErrorInnerError;
	readonly message?: string;
	readonly target?: string;
}
export interface ErrorDefinition {
	readonly code?: string;
	readonly details?: ErrorDefinition[];
	readonly message?: string;
}
export interface ErrorInnerError {
	readonly innerError?: Error;
}
export interface FileshareProfile {
	readonly shareName?: string;
	readonly shareSizeInGB?: number;
	readonly shareType: "AzureFiles" | "NfsOnController";
	readonly storageResourceId?: string;
	readonly storageType: "Premium_LRS" | "Standard_GRS" | "Standard_LRS" | "Standard_ZRS";
}
export interface GatewayServerProperties {
	readonly health?: "Degraded" | "Healthy" | "Unhealthy" | "Unknown";
	readonly port?: number;
}
export interface HighAvailabilityConfiguration {
	readonly highAvailabilityType: "AvailabilitySet" | "AvailabilityZone";
}
export interface HighAvailabilitySoftwareConfiguration {
	readonly fencingClientId: string;
	readonly fencingClientPassword: string;
}
export interface ImageReference {
	readonly exactVersion?: string;
	readonly offer?: string;
	readonly publisher?: string;
	readonly sharedGalleryImageId?: string;
	readonly sku?: string;
	readonly version?: string;
}
export interface InfrastructureConfiguration {
	readonly appResourceGroup: string;
}
export interface ManagedRGConfiguration {
	readonly name?: string;
}
export interface MessageServerProperties {
	readonly health?: "Degraded" | "Healthy" | "Unhealthy" | "Unknown";
	readonly hostname?: string;
	readonly httpPort?: number;
	readonly httpsPort?: number;
	readonly internalMsPort?: number;
	readonly ipAddress?: string;
	readonly msPort?: number;
}
export interface MonitorProperties {
	readonly appLocation?: string;
	readonly errors?: MonitorPropertiesErrors;
	readonly logAnalyticsWorkspaceArmId?: string;
	readonly managedResourceGroupConfiguration?: ManagedRGConfiguration;
	readonly monitorSubnet?: string;
	readonly msiArmId?: string;
	readonly provisioningState?: "Accepted" | "Creating" | "Deleting" | "Failed" | "Migrating" | "Succeeded" | "Updating";
	readonly routingPreference?: "Default" | "RouteAll";
	readonly storageAccountArmId?: string;
	readonly zoneRedundancyPreference?: string;
}
export interface MonitorPropertiesErrors {
	readonly code?: string;
	readonly details?: Error[];
	readonly innerError?: ErrorInnerError;
	readonly message?: string;
	readonly target?: string;
}
export interface NetworkConfiguration {
	readonly isSecondaryIpEnabled?: boolean;
}
export interface NetworkProfile {
	readonly azureFrontDoorEnabled?: "Disabled" | "Enabled";
	readonly azureFrontDoorResourceId?: string;
	readonly capacity?: number;
	readonly frontEndPublicIpResourceId?: string;
	readonly loadBalancerResourceId?: string;
	readonly loadBalancerSku?: string;
	readonly loadBalancerTier?: string;
	readonly loadBalancerType: "ApplicationGateway" | "LoadBalancer";
	readonly outboundPublicIpResourceIds?: string[];
	readonly vNetResourceId?: string;
}
export interface NodeProfile {
	readonly dataDisks?: DiskInfo[];
	readonly name?: string;
	readonly nodeResourceIds?: string[];
	readonly nodeSku: string;
	readonly osDisk: DiskInfo;
	readonly osImage: OsImageProfile;
}
export interface OSConfiguration {}
export interface OsImageProfile {
	readonly offer?: "UbuntuServer";
	readonly publisher?: "Canonical";
	readonly sku?: "16.04-LTS" | "18.04-LTS";
	readonly version?: "latest";
}
export interface OSProfile {
	readonly adminPassword?: string;
	readonly adminUsername?: string;
	readonly osConfiguration?: OSConfiguration;
}
export interface OsSapConfiguration {
	readonly deployerVmPackages?: DeployerVmPackages;
	readonly sapFqdn?: string;
}
export interface PhpProfile {
	readonly version: "7.2" | "7.3" | "7.4";
}
export interface PhpWorkloadResourceIdentity {
	readonly type: "None" | "UserAssigned";
	readonly userAssignedIdentities?: UserAssignedIdentities;
}
export interface PhpWorkloadResourceProperties {
	readonly adminUserProfile: UserProfile;
	readonly appLocation: string;
	readonly backupProfile?: BackupProfile;
	readonly cacheProfile?: CacheProfile;
	readonly controllerProfile: NodeProfile;
	readonly databaseProfile: DatabaseProfile;
	readonly fileshareProfile?: FileshareProfile;
	readonly managedResourceGroupConfiguration?: ManagedRGConfiguration;
	readonly networkProfile?: NetworkProfile;
	readonly phpProfile?: PhpProfile;
	readonly provisioningState?:
		| "Accepted"
		| "Canceled"
		| "Created"
		| "Deleting"
		| "Failed"
		| "NotSpecified"
		| "Provisioning"
		| "Succeeded";
	readonly searchProfile?: SearchProfile;
	readonly siteProfile?: SiteProfile;
	readonly webNodesProfile: VmssNodesProfile;
}
export interface ProviderInstanceProperties {
	readonly errors?: ProviderInstancePropertiesErrors;
	readonly providerSettings?: ProviderSpecificProperties;
	readonly provisioningState?: "Accepted" | "Creating" | "Deleting" | "Failed" | "Migrating" | "Succeeded" | "Updating";
}
export interface ProviderInstancePropertiesErrors {
	readonly code?: string;
	readonly details?: Error[];
	readonly innerError?: ErrorInnerError;
	readonly message?: string;
	readonly target?: string;
}
export interface ProviderSpecificProperties {}
export interface SAPApplicationServerProperties {
	readonly errors?: SAPVirtualInstanceError;
	readonly gatewayPort?: number;
	readonly health?: "Degraded" | "Healthy" | "Unhealthy" | "Unknown";
	readonly hostname?: string;
	readonly icmHttpPort?: number;
	readonly icmHttpsPort?: number;
	readonly instanceNo?: string;
	readonly ipAddress?: string;
	readonly kernelPatch?: string;
	readonly kernelVersion?: string;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly status?: "Offline" | "PartiallyRunning" | "Running" | "Starting" | "Stopping" | "Unavailable";
	readonly subnet?: string;
	readonly virtualMachineId?: string;
}
export interface SAPCentralServerProperties {
	readonly enqueueReplicationServerProperties?: EnqueueReplicationServerProperties;
	readonly enqueueServerProperties?: EnqueueServerProperties;
	readonly errors?: SAPVirtualInstanceError;
	readonly gatewayServerProperties?: GatewayServerProperties;
	readonly health?: "Degraded" | "Healthy" | "Unhealthy" | "Unknown";
	readonly instanceNo?: string;
	readonly kernelPatch?: string;
	readonly kernelVersion?: string;
	readonly messageServerProperties?: MessageServerProperties;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly status?: "Offline" | "PartiallyRunning" | "Running" | "Starting" | "Stopping" | "Unavailable";
	readonly subnet?: string;
	readonly vmDetails?: CentralServerVmDetails[];
}
export interface SAPConfiguration {}
export interface SAPDatabaseProperties {
	readonly databaseSid?: string;
	readonly databaseType?: string;
	readonly errors?: SAPVirtualInstanceError;
	readonly ipAddress?: string;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly status?: "Offline" | "PartiallyRunning" | "Running" | "Starting" | "Stopping" | "Unavailable";
	readonly subnet?: string;
	readonly vmDetails?: DatabaseVmDetails[];
}
export interface SAPVirtualInstanceError {
	readonly properties?: ErrorDefinition;
}
export interface SAPVirtualInstanceProperties {
	readonly configuration: SAPConfiguration;
	readonly environment: "NonProd" | "Prod";
	readonly errors?: SAPVirtualInstanceError;
	readonly health?: "Degraded" | "Healthy" | "Unhealthy" | "Unknown";
	readonly managedResourceGroupConfiguration?: ManagedRGConfiguration;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly sapProduct: "ECC" | "Other" | "S4HANA";
	readonly state?:
		| "DiscoveryFailed"
		| "DiscoveryInProgress"
		| "DiscoveryPending"
		| "InfrastructureDeploymentFailed"
		| "InfrastructureDeploymentInProgress"
		| "InfrastructureDeploymentPending"
		| "RegistrationComplete"
		| "SoftwareDetectionFailed"
		| "SoftwareDetectionInProgress"
		| "SoftwareInstallationFailed"
		| "SoftwareInstallationInProgress"
		| "SoftwareInstallationPending";
	readonly status?: "Offline" | "PartiallyRunning" | "Running" | "Starting" | "Stopping" | "Unavailable";
}
export interface SearchProfile {
	readonly dataDisks?: DiskInfo[];
	readonly name?: string;
	readonly nodeResourceIds?: string[];
	readonly nodeSku: string;
	readonly osDisk: DiskInfo;
	readonly osImage: OsImageProfile;
	readonly searchType: "Elastic";
}
export interface SiteProfile {
	readonly domainName?: string;
}
export interface Sku {
	readonly capacity?: number;
	readonly family?: string;
	readonly name: string;
	readonly size?: string;
	readonly tier?: "Basic" | "Free" | "Premium";
}
export interface SoftwareConfiguration {}
export interface SshConfiguration {
	readonly publicKeys?: SshPublicKey[];
}
export interface SshKeyPair {
	readonly privateKey?: string;
	readonly publicKey?: string;
}
export interface SshPublicKey {
	readonly keyData?: string;
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
export interface UserAssignedIdentities {
	readonly [key: string]: UserAssignedIdentity;
}
export interface UserAssignedIdentity {
	readonly clientId?: string;
	readonly principalId?: string;
}
export interface UserAssignedServiceIdentity {
	readonly type: "None" | "UserAssigned";
	readonly userAssignedIdentities?: UserAssignedIdentities;
}
export interface UserProfile {
	readonly sshPublicKey: string;
	readonly userName: string;
}
export interface VirtualMachineConfiguration {
	readonly imageReference: ImageReference;
	readonly osProfile: OSProfile;
	readonly vmSize: string;
}
export interface VmssNodesProfile {
	readonly autoScaleMaxCount?: number;
	readonly autoScaleMinCount?: number;
	readonly dataDisks?: DiskInfo[];
	readonly name?: string;
	readonly nodeResourceIds?: string[];
	readonly nodeSku: string;
	readonly osDisk: DiskInfo;
	readonly osImage: OsImageProfile;
}
export interface WordpressInstanceResourceProperties {
	readonly databaseName?: string;
	readonly databaseUser?: string;
	readonly provisioningState?:
		| "Accepted"
		| "Canceled"
		| "Created"
		| "Failed"
		| "Installing"
		| "NotSpecified"
		| "Succeeded";
	readonly siteUrl?: string;
	readonly version: "5.4" | "5.4.1" | "5.4.2" | "5.4.3";
}
export default {
	monitors: monitors,
	"monitors/providerInstances": monitors_providerInstances,
	phpWorkloads: phpWorkloads,
	"phpWorkloads/wordpressInstances": phpWorkloads_wordpressInstances,
	sapVirtualInstances: sapVirtualInstances,
	"sapVirtualInstances/applicationInstances": sapVirtualInstances_applicationInstances,
	"sapVirtualInstances/centralInstances": sapVirtualInstances_centralInstances,
	"sapVirtualInstances/databaseInstances": sapVirtualInstances_databaseInstances,
};
