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
	readonly identity?: UserAssignedServiceIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: MonitorProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly identity?: UserAssignedServiceIdentity | undefined;
	readonly name: string;
	readonly properties?: ProviderInstanceProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly identity?: PhpWorkloadResourceIdentity | undefined;
	readonly kind: "WordPress";
	readonly location: string;
	readonly name: string;
	readonly properties?: PhpWorkloadResourceProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: WordpressInstanceResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly identity?: UserAssignedServiceIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: SAPVirtualInstanceProperties;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: SAPApplicationServerProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: SAPCentralServerProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: SAPDatabaseProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface ApplicationServerConfiguration {
	readonly instanceCount: number;
	readonly subnetId: string;
	readonly virtualMachineConfiguration: VirtualMachineConfiguration;
}
export interface BackupProfile {
	readonly backupEnabled: "Disabled" | "Enabled";
	readonly vaultResourceId?: string | undefined;
}
export interface CacheProfile {
	readonly cacheResourceId?: string | undefined;
	readonly capacity: number;
	readonly family: "C" | "P";
	readonly name?: string | undefined;
	readonly skuName: string;
}
export interface CentralServerConfiguration {
	readonly instanceCount: number;
	readonly subnetId: string;
	readonly virtualMachineConfiguration: VirtualMachineConfiguration;
}
export interface CentralServerVmDetails {
	readonly type?: ("ASCS" | "ERS" | "ERSInactive" | "Primary" | "Secondary" | "Standby" | "Unknown") | undefined;
	readonly virtualMachineId?: string | undefined;
}
export interface DatabaseConfiguration {
	readonly databaseType?: ("DB2" | "HANA") | undefined;
	readonly instanceCount: number;
	readonly subnetId: string;
	readonly virtualMachineConfiguration: VirtualMachineConfiguration;
}
export interface DatabaseProfile {
	readonly backupRetentionDays?: number | undefined;
	readonly haEnabled?: ("Disabled" | "Enabled") | undefined;
	readonly serverName?: string | undefined;
	readonly serverResourceId?: string | undefined;
	readonly sku: string;
	readonly sslEnforcementEnabled?: ("Disabled" | "Enabled") | undefined;
	readonly storageInGB?: number | undefined;
	readonly storageIops?: number | undefined;
	readonly storageSku?: string | undefined;
	readonly tier: "Burstable" | "GeneralPurpose";
	readonly type: "MySql";
	readonly version?: string | undefined;
}
export interface DatabaseVmDetails {
	readonly status?: ("Offline" | "PartiallyRunning" | "Running" | "Starting" | "Stopping" | "Unavailable") | undefined;
	readonly virtualMachineId?: string | undefined;
}
export interface DeployerVmPackages {
	readonly storageAccountId?: string | undefined;
	readonly url?: string | undefined;
}
export interface DiskInfo {
	readonly sizeInGB?: number | undefined;
	readonly storageType: "Premium_LRS" | "StandardSSD_LRS";
}
export interface EnqueueReplicationServerProperties {
	readonly ersVersion?: ("EnqueueReplicator1" | "EnqueueReplicator2") | undefined;
	readonly health?: ("Degraded" | "Healthy" | "Unhealthy" | "Unknown") | undefined;
	readonly hostname?: string | undefined;
	readonly instanceNo?: string | undefined;
	readonly ipAddress?: string | undefined;
	readonly kernelPatch?: string | undefined;
	readonly kernelVersion?: string | undefined;
}
export interface EnqueueServerProperties {
	readonly health?: ("Degraded" | "Healthy" | "Unhealthy" | "Unknown") | undefined;
	readonly hostname?: string | undefined;
	readonly ipAddress?: string | undefined;
	readonly port?: number | undefined;
}
export interface Error {
	readonly code?: string | undefined;
	readonly details?: Error[] | undefined;
	readonly innerError?: ErrorInnerError | undefined;
	readonly message?: string | undefined;
	readonly target?: string | undefined;
}
export interface ErrorDefinition {
	readonly code?: string | undefined;
	readonly details?: ErrorDefinition[] | undefined;
	readonly message?: string | undefined;
}
export interface ErrorInnerError {
	readonly innerError?: Error | undefined;
}
export interface FileshareProfile {
	readonly shareName?: string | undefined;
	readonly shareSizeInGB?: number | undefined;
	readonly shareType: "AzureFiles" | "NfsOnController";
	readonly storageResourceId?: string | undefined;
	readonly storageType: "Premium_LRS" | "Standard_GRS" | "Standard_LRS" | "Standard_ZRS";
}
export interface GatewayServerProperties {
	readonly health?: ("Degraded" | "Healthy" | "Unhealthy" | "Unknown") | undefined;
	readonly port?: number | undefined;
}
export interface HighAvailabilityConfiguration {
	readonly highAvailabilityType: "AvailabilitySet" | "AvailabilityZone";
}
export interface HighAvailabilitySoftwareConfiguration {
	readonly fencingClientId: string;
	readonly fencingClientPassword: string;
}
export interface ImageReference {
	readonly exactVersion?: string | undefined;
	readonly offer?: string | undefined;
	readonly publisher?: string | undefined;
	readonly sharedGalleryImageId?: string | undefined;
	readonly sku?: string | undefined;
	readonly version?: string | undefined;
}
export interface InfrastructureConfiguration {
	readonly appResourceGroup: string;
}
export interface ManagedRGConfiguration {
	readonly name?: string | undefined;
}
export interface MessageServerProperties {
	readonly health?: ("Degraded" | "Healthy" | "Unhealthy" | "Unknown") | undefined;
	readonly hostname?: string | undefined;
	readonly httpPort?: number | undefined;
	readonly httpsPort?: number | undefined;
	readonly internalMsPort?: number | undefined;
	readonly ipAddress?: string | undefined;
	readonly msPort?: number | undefined;
}
export interface MonitorProperties {
	readonly appLocation?: string | undefined;
	readonly errors?: MonitorPropertiesErrors | undefined;
	readonly logAnalyticsWorkspaceArmId?: string | undefined;
	readonly managedResourceGroupConfiguration?: ManagedRGConfiguration | undefined;
	readonly monitorSubnet?: string | undefined;
	readonly msiArmId?: string | undefined;
	readonly provisioningState?:
		| ("Accepted" | "Creating" | "Deleting" | "Failed" | "Migrating" | "Succeeded" | "Updating")
		| undefined;
	readonly routingPreference?: ("Default" | "RouteAll") | undefined;
	readonly storageAccountArmId?: string | undefined;
	readonly zoneRedundancyPreference?: string | undefined;
}
export interface MonitorPropertiesErrors {
	readonly code?: string | undefined;
	readonly details?: Error[] | undefined;
	readonly innerError?: ErrorInnerError | undefined;
	readonly message?: string | undefined;
	readonly target?: string | undefined;
}
export interface NetworkConfiguration {
	readonly isSecondaryIpEnabled?: boolean | undefined;
}
export interface NetworkProfile {
	readonly azureFrontDoorEnabled?: ("Disabled" | "Enabled") | undefined;
	readonly azureFrontDoorResourceId?: string | undefined;
	readonly capacity?: number | undefined;
	readonly frontEndPublicIpResourceId?: string | undefined;
	readonly loadBalancerResourceId?: string | undefined;
	readonly loadBalancerSku?: string | undefined;
	readonly loadBalancerTier?: string | undefined;
	readonly loadBalancerType: "ApplicationGateway" | "LoadBalancer";
	readonly outboundPublicIpResourceIds?: string[] | undefined;
	readonly vNetResourceId?: string | undefined;
}
export interface NodeProfile {
	readonly dataDisks?: DiskInfo[] | undefined;
	readonly name?: string | undefined;
	readonly nodeResourceIds?: string[] | undefined;
	readonly nodeSku: string;
	readonly osDisk: DiskInfo;
	readonly osImage: OsImageProfile;
}
export interface OSConfiguration {}
export interface OsImageProfile {
	readonly offer?: "UbuntuServer" | undefined;
	readonly publisher?: "Canonical" | undefined;
	readonly sku?: ("16.04-LTS" | "18.04-LTS") | undefined;
	readonly version?: "latest" | undefined;
}
export interface OSProfile {
	readonly adminPassword?: string | undefined;
	readonly adminUsername?: string | undefined;
	readonly osConfiguration?: OSConfiguration | undefined;
}
export interface OsSapConfiguration {
	readonly deployerVmPackages?: DeployerVmPackages | undefined;
	readonly sapFqdn?: string | undefined;
}
export interface PhpProfile {
	readonly version: "7.2" | "7.3" | "7.4";
}
export interface PhpWorkloadResourceIdentity {
	readonly type: "None" | "UserAssigned";
	readonly userAssignedIdentities?: UserAssignedIdentities | undefined;
}
export interface PhpWorkloadResourceProperties {
	readonly adminUserProfile: UserProfile;
	readonly appLocation: string;
	readonly backupProfile?: BackupProfile | undefined;
	readonly cacheProfile?: CacheProfile | undefined;
	readonly controllerProfile: NodeProfile;
	readonly databaseProfile: DatabaseProfile;
	readonly fileshareProfile?: FileshareProfile | undefined;
	readonly managedResourceGroupConfiguration?: ManagedRGConfiguration | undefined;
	readonly networkProfile?: NetworkProfile | undefined;
	readonly phpProfile?: PhpProfile | undefined;
	readonly provisioningState?:
		| ("Accepted" | "Canceled" | "Created" | "Deleting" | "Failed" | "NotSpecified" | "Provisioning" | "Succeeded")
		| undefined;
	readonly searchProfile?: SearchProfile | undefined;
	readonly siteProfile?: SiteProfile | undefined;
	readonly webNodesProfile: VmssNodesProfile;
}
export interface ProviderInstanceProperties {
	readonly errors?: ProviderInstancePropertiesErrors | undefined;
	readonly providerSettings?: ProviderSpecificProperties | undefined;
	readonly provisioningState?:
		| ("Accepted" | "Creating" | "Deleting" | "Failed" | "Migrating" | "Succeeded" | "Updating")
		| undefined;
}
export interface ProviderInstancePropertiesErrors {
	readonly code?: string | undefined;
	readonly details?: Error[] | undefined;
	readonly innerError?: ErrorInnerError | undefined;
	readonly message?: string | undefined;
	readonly target?: string | undefined;
}
export interface ProviderSpecificProperties {}
export interface SAPApplicationServerProperties {
	readonly errors?: SAPVirtualInstanceError | undefined;
	readonly gatewayPort?: number | undefined;
	readonly health?: ("Degraded" | "Healthy" | "Unhealthy" | "Unknown") | undefined;
	readonly hostname?: string | undefined;
	readonly icmHttpPort?: number | undefined;
	readonly icmHttpsPort?: number | undefined;
	readonly instanceNo?: string | undefined;
	readonly ipAddress?: string | undefined;
	readonly kernelPatch?: string | undefined;
	readonly kernelVersion?: string | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly status?: ("Offline" | "PartiallyRunning" | "Running" | "Starting" | "Stopping" | "Unavailable") | undefined;
	readonly subnet?: string | undefined;
	readonly virtualMachineId?: string | undefined;
}
export interface SAPCentralServerProperties {
	readonly enqueueReplicationServerProperties?: EnqueueReplicationServerProperties | undefined;
	readonly enqueueServerProperties?: EnqueueServerProperties | undefined;
	readonly errors?: SAPVirtualInstanceError | undefined;
	readonly gatewayServerProperties?: GatewayServerProperties | undefined;
	readonly health?: ("Degraded" | "Healthy" | "Unhealthy" | "Unknown") | undefined;
	readonly instanceNo?: string | undefined;
	readonly kernelPatch?: string | undefined;
	readonly kernelVersion?: string | undefined;
	readonly messageServerProperties?: MessageServerProperties | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly status?: ("Offline" | "PartiallyRunning" | "Running" | "Starting" | "Stopping" | "Unavailable") | undefined;
	readonly subnet?: string | undefined;
	readonly vmDetails?: CentralServerVmDetails[] | undefined;
}
export interface SAPConfiguration {}
export interface SAPDatabaseProperties {
	readonly databaseSid?: string | undefined;
	readonly databaseType?: string | undefined;
	readonly errors?: SAPVirtualInstanceError | undefined;
	readonly ipAddress?: string | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly status?: ("Offline" | "PartiallyRunning" | "Running" | "Starting" | "Stopping" | "Unavailable") | undefined;
	readonly subnet?: string | undefined;
	readonly vmDetails?: DatabaseVmDetails[] | undefined;
}
export interface SAPVirtualInstanceError {
	readonly properties?: ErrorDefinition | undefined;
}
export interface SAPVirtualInstanceProperties {
	readonly configuration: SAPConfiguration;
	readonly environment: "NonProd" | "Prod";
	readonly errors?: SAPVirtualInstanceError | undefined;
	readonly health?: ("Degraded" | "Healthy" | "Unhealthy" | "Unknown") | undefined;
	readonly managedResourceGroupConfiguration?: ManagedRGConfiguration | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly sapProduct: "ECC" | "Other" | "S4HANA";
	readonly state?:
		| (
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
				| "SoftwareInstallationPending"
		  )
		| undefined;
	readonly status?: ("Offline" | "PartiallyRunning" | "Running" | "Starting" | "Stopping" | "Unavailable") | undefined;
}
export interface SearchProfile {
	readonly dataDisks?: DiskInfo[] | undefined;
	readonly name?: string | undefined;
	readonly nodeResourceIds?: string[] | undefined;
	readonly nodeSku: string;
	readonly osDisk: DiskInfo;
	readonly osImage: OsImageProfile;
	readonly searchType: "Elastic";
}
export interface SiteProfile {
	readonly domainName?: string | undefined;
}
export interface Sku {
	readonly capacity?: number | undefined;
	readonly family?: string | undefined;
	readonly name: string;
	readonly size?: string | undefined;
	readonly tier?: ("Basic" | "Free" | "Premium") | undefined;
}
export interface SoftwareConfiguration {}
export interface SshConfiguration {
	readonly publicKeys?: SshPublicKey[] | undefined;
}
export interface SshKeyPair {
	readonly privateKey?: string | undefined;
	readonly publicKey?: string | undefined;
}
export interface SshPublicKey {
	readonly keyData?: string | undefined;
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
export interface UserAssignedIdentities {
	readonly "[ key: string ]"?: UserAssignedIdentity | undefined;
}
export interface UserAssignedIdentity {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export interface UserAssignedServiceIdentity {
	readonly type: "None" | "UserAssigned";
	readonly userAssignedIdentities?: UserAssignedIdentities | undefined;
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
	readonly autoScaleMaxCount?: number | undefined;
	readonly autoScaleMinCount?: number | undefined;
	readonly dataDisks?: DiskInfo[] | undefined;
	readonly name?: string | undefined;
	readonly nodeResourceIds?: string[] | undefined;
	readonly nodeSku: string;
	readonly osDisk: DiskInfo;
	readonly osImage: OsImageProfile;
}
export interface WordpressInstanceResourceProperties {
	readonly databaseName?: string | undefined;
	readonly databaseUser?: string | undefined;
	readonly provisioningState?:
		| ("Accepted" | "Canceled" | "Created" | "Failed" | "Installing" | "NotSpecified" | "Succeeded")
		| undefined;
	readonly siteUrl?: string | undefined;
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
