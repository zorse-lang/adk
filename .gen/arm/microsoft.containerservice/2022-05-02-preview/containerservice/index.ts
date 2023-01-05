import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class managedClusters
	extends ArmResource<managedClustersComponentInputs>
	implements managedClustersComponentOutputs
{
	constructor(entity: ADKEntity, options: managedClustersComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerService/managedClusters", "2022-05-02-preview", options);
	}
	public readonly apiVersion: "2022-05-02-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerService/managedClusters";
}
export interface managedClustersComponentOutputs {
	readonly apiVersion: "2022-05-02-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerService/managedClusters";
}
export interface managedClustersComponentInputs {
	readonly extendedLocation?: ExtendedLocation;
	readonly identity?: ManagedClusterIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties?: ManagedClusterProperties;
	readonly sku?: ManagedClusterSKU;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class managedClusters_agentPools
	extends ArmResource<managedClusters_agentPoolsComponentInputs>
	implements managedClusters_agentPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: managedClusters_agentPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerService/managedClusters/agentPools", "2022-05-02-preview", options);
	}
	public readonly apiVersion: "2022-05-02-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerService/managedClusters/agentPools";
}
export interface managedClusters_agentPoolsComponentOutputs {
	readonly apiVersion: "2022-05-02-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerService/managedClusters/agentPools";
}
export interface managedClusters_agentPoolsComponentInputs {
	readonly name: string;
	readonly properties?: ManagedClusterAgentPoolProfileProperties;
}
export class managedClusters_maintenanceConfigurations
	extends ArmResource<managedClusters_maintenanceConfigurationsComponentInputs>
	implements managedClusters_maintenanceConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: managedClusters_maintenanceConfigurationsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ContainerService/managedClusters/maintenanceConfigurations",
			"2022-05-02-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-05-02-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerService/managedClusters/maintenanceConfigurations";
}
export interface managedClusters_maintenanceConfigurationsComponentOutputs {
	readonly apiVersion: "2022-05-02-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerService/managedClusters/maintenanceConfigurations";
}
export interface managedClusters_maintenanceConfigurationsComponentInputs {
	readonly name: string;
	readonly properties?: MaintenanceConfigurationProperties;
	readonly systemData?: SystemData;
}
export class managedClusters_privateEndpointConnections
	extends ArmResource<managedClusters_privateEndpointConnectionsComponentInputs>
	implements managedClusters_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: managedClusters_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ContainerService/managedClusters/privateEndpointConnections",
			"2022-05-02-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-05-02-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerService/managedClusters/privateEndpointConnections";
}
export interface managedClusters_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2022-05-02-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerService/managedClusters/privateEndpointConnections";
}
export interface managedClusters_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
}
export class managedClusters_trustedAccessRoleBindings
	extends ArmResource<managedClusters_trustedAccessRoleBindingsComponentInputs>
	implements managedClusters_trustedAccessRoleBindingsComponentOutputs
{
	constructor(entity: ADKEntity, options: managedClusters_trustedAccessRoleBindingsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ContainerService/managedClusters/trustedAccessRoleBindings",
			"2022-05-02-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-05-02-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerService/managedClusters/trustedAccessRoleBindings";
}
export interface managedClusters_trustedAccessRoleBindingsComponentOutputs {
	readonly apiVersion: "2022-05-02-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerService/managedClusters/trustedAccessRoleBindings";
}
export interface managedClusters_trustedAccessRoleBindingsComponentInputs {
	readonly name: string;
	readonly properties: TrustedAccessRoleBindingProperties;
	readonly systemData?: SystemData;
}
export class managedclustersnapshots
	extends ArmResource<managedclustersnapshotsComponentInputs>
	implements managedclustersnapshotsComponentOutputs
{
	constructor(entity: ADKEntity, options: managedclustersnapshotsComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerService/managedclustersnapshots", "2022-05-02-preview", options);
	}
	public readonly apiVersion: "2022-05-02-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerService/managedclustersnapshots";
}
export interface managedclustersnapshotsComponentOutputs {
	readonly apiVersion: "2022-05-02-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerService/managedclustersnapshots";
}
export interface managedclustersnapshotsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ManagedClusterSnapshotProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class snapshots extends ArmResource<snapshotsComponentInputs> implements snapshotsComponentOutputs {
	constructor(entity: ADKEntity, options: snapshotsComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerService/snapshots", "2022-05-02-preview", options);
	}
	public readonly apiVersion: "2022-05-02-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerService/snapshots";
}
export interface snapshotsComponentOutputs {
	readonly apiVersion: "2022-05-02-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerService/snapshots";
}
export interface snapshotsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: SnapshotProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export function listClusterAdminCredential(resource: managedClusters): CredentialResults {
	if (resource.apiVersion !== "2022-05-02-preview") {
		throw new Error(`listClusterAdminCredential is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ContainerService/managedClusters") {
		throw new Error(`listClusterAdminCredential is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listClusterMonitoringUserCredential(resource: managedClusters): CredentialResults {
	if (resource.apiVersion !== "2022-05-02-preview") {
		throw new Error(`listClusterMonitoringUserCredential is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ContainerService/managedClusters") {
		throw new Error(`listClusterMonitoringUserCredential is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listClusterUserCredential(resource: managedClusters): CredentialResults {
	if (resource.apiVersion !== "2022-05-02-preview") {
		throw new Error(`listClusterUserCredential is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ContainerService/managedClusters") {
		throw new Error(`listClusterUserCredential is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listCredential(resource: ArmResource): ManagedClusterAccessProfile {
	if (resource.apiVersion !== "2022-05-02-preview") {
		throw new Error(`listCredential is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ContainerService/managedClusters/accessProfiles") {
		throw new Error(`listCredential is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AccessProfile {
	readonly kubeConfig?: any;
}
export interface AgentPoolUpgradeSettings {
	readonly maxSurge?: string;
}
export interface AzureKeyVaultKms {
	readonly enabled?: boolean;
	readonly keyId?: string;
	readonly keyVaultNetworkAccess?: "Private" | "Public";
	readonly keyVaultResourceId?: string;
}
export interface ContainerServiceLinuxProfile {
	readonly adminUsername: string;
	readonly ssh: ContainerServiceSshConfiguration;
}
export interface ContainerServiceNetworkProfile {
	readonly dnsServiceIP?: string;
	readonly dockerBridgeCidr?: string;
	readonly ipFamilies?: "IPv4" | "IPv6"[];
	readonly loadBalancerProfile?: ManagedClusterLoadBalancerProfile;
	readonly loadBalancerSku?: "basic" | "standard";
	readonly natGatewayProfile?: ManagedClusterNATGatewayProfile;
	readonly networkMode?: "bridge" | "transparent";
	readonly networkPlugin?: "azure" | "kubenet" | "none";
	readonly networkPluginMode?: "Overlay";
	readonly networkPolicy?: "azure" | "calico";
	readonly outboundType?: "loadBalancer" | "managedNATGateway" | "userAssignedNATGateway" | "userDefinedRouting";
	readonly podCidr?: string;
	readonly podCidrs?: string[];
	readonly serviceCidr?: string;
	readonly serviceCidrs?: string[];
}
export interface ContainerServiceSshConfiguration {
	readonly publicKeys: ContainerServiceSshPublicKey[];
}
export interface ContainerServiceSshPublicKey {
	readonly keyData: string;
}
export interface CreationData {
	readonly sourceResourceId?: string;
}
export interface CredentialResult {
	readonly name?: string;
	readonly value?: any;
}
export interface CredentialResults {
	readonly kubeconfigs?: CredentialResult[];
}
export interface ExtendedLocation {
	readonly name?: string;
	readonly type?: "EdgeZone";
}
export interface KubeletConfig {
	readonly allowedUnsafeSysctls?: string[];
	readonly containerLogMaxFiles?: number;
	readonly containerLogMaxSizeMB?: number;
	readonly cpuCfsQuota?: boolean;
	readonly cpuCfsQuotaPeriod?: string;
	readonly cpuManagerPolicy?: string;
	readonly failSwapOn?: boolean;
	readonly imageGcHighThreshold?: number;
	readonly imageGcLowThreshold?: number;
	readonly podMaxPids?: number;
	readonly topologyManagerPolicy?: string;
}
export interface LinuxOSConfig {
	readonly swapFileSizeMB?: number;
	readonly sysctls?: SysctlConfig;
	readonly transparentHugePageDefrag?: string;
	readonly transparentHugePageEnabled?: string;
}
export interface MaintenanceConfigurationProperties {
	readonly notAllowedTime?: TimeSpan[];
	readonly timeInWeek?: TimeInWeek[];
}
export interface ManagedClusterAADProfile {
	readonly adminGroupObjectIDs?: string[];
	readonly clientAppID?: string;
	readonly enableAzureRBAC?: boolean;
	readonly managed?: boolean;
	readonly serverAppID?: string;
	readonly serverAppSecret?: string;
	readonly tenantID?: string;
}
export interface ManagedClusterAccessProfile {
	readonly id?: string;
	readonly location: string;
	readonly name?: string;
	readonly properties?: AccessProfile;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
	readonly type?: string;
}
export interface ManagedClusterAddonProfile {
	readonly config?: ManagedClusterAddonProfileConfig;
	readonly enabled: boolean;
	readonly identity?: ManagedClusterAddonProfileIdentity;
}
export interface ManagedClusterAddonProfileConfig {
	readonly [key: string]: string;
}
export interface ManagedClusterAddonProfileIdentity {
	readonly clientId?: string;
	readonly objectId?: string;
	readonly resourceId?: string;
}
export interface ManagedClusterAgentPoolProfile {
	readonly availabilityZones?: string[];
	readonly capacityReservationGroupID?: string;
	readonly count?: number;
	readonly creationData?: CreationData;
	readonly currentOrchestratorVersion?: string;
	readonly enableAutoScaling?: boolean;
	readonly enableCustomCATrust?: boolean;
	readonly enableEncryptionAtHost?: boolean;
	readonly enableFIPS?: boolean;
	readonly enableNodePublicIP?: boolean;
	readonly enableUltraSSD?: boolean;
	readonly gpuInstanceProfile?: "MIG1g" | "MIG2g" | "MIG3g" | "MIG4g" | "MIG7g";
	readonly hostGroupID?: string;
	readonly kubeletConfig?: KubeletConfig;
	readonly kubeletDiskType?: "OS" | "Temporary";
	readonly linuxOSConfig?: LinuxOSConfig;
	readonly maxCount?: number;
	readonly maxPods?: number;
	readonly messageOfTheDay?: string;
	readonly minCount?: number;
	readonly mode?: "System" | "User";
	readonly name: string;
	readonly nodeImageVersion?: string;
	readonly nodeLabels?: ManagedClusterAgentPoolProfilePropertiesNodeLabels;
	readonly nodePublicIPPrefixID?: string;
	readonly nodeTaints?: string[];
	readonly orchestratorVersion?: string;
	readonly osDiskSizeGB?: number;
	readonly osDiskType?: "Ephemeral" | "Managed";
	readonly osSKU?: "CBLMariner" | "Ubuntu" | "Windows2019" | "Windows2022";
	readonly osType?: "Linux" | "Windows";
	readonly podSubnetID?: string;
	readonly powerState?: PowerState;
	readonly provisioningState?: string;
	readonly proximityPlacementGroupID?: string;
	readonly scaleDownMode?: "Deallocate" | "Delete";
	readonly scaleSetEvictionPolicy?: "Deallocate" | "Delete";
	readonly scaleSetPriority?: "Regular" | "Spot";
	readonly spotMaxPrice?: number;
	readonly tags?: ManagedClusterAgentPoolProfilePropertiesTags;
	readonly type?: "AvailabilitySet" | "VirtualMachineScaleSets";
	readonly upgradeSettings?: AgentPoolUpgradeSettings;
	readonly vmSize?: string;
	readonly vnetSubnetID?: string;
	readonly workloadRuntime?: "OCIContainer" | "WasmWasi";
}
export interface ManagedClusterAgentPoolProfileProperties {
	readonly availabilityZones?: string[];
	readonly capacityReservationGroupID?: string;
	readonly count?: number;
	readonly creationData?: CreationData;
	readonly currentOrchestratorVersion?: string;
	readonly enableAutoScaling?: boolean;
	readonly enableCustomCATrust?: boolean;
	readonly enableEncryptionAtHost?: boolean;
	readonly enableFIPS?: boolean;
	readonly enableNodePublicIP?: boolean;
	readonly enableUltraSSD?: boolean;
	readonly gpuInstanceProfile?: "MIG1g" | "MIG2g" | "MIG3g" | "MIG4g" | "MIG7g";
	readonly hostGroupID?: string;
	readonly kubeletConfig?: KubeletConfig;
	readonly kubeletDiskType?: "OS" | "Temporary";
	readonly linuxOSConfig?: LinuxOSConfig;
	readonly maxCount?: number;
	readonly maxPods?: number;
	readonly messageOfTheDay?: string;
	readonly minCount?: number;
	readonly mode?: "System" | "User";
	readonly nodeImageVersion?: string;
	readonly nodeLabels?: ManagedClusterAgentPoolProfilePropertiesNodeLabels;
	readonly nodePublicIPPrefixID?: string;
	readonly nodeTaints?: string[];
	readonly orchestratorVersion?: string;
	readonly osDiskSizeGB?: number;
	readonly osDiskType?: "Ephemeral" | "Managed";
	readonly osSKU?: "CBLMariner" | "Ubuntu" | "Windows2019" | "Windows2022";
	readonly osType?: "Linux" | "Windows";
	readonly podSubnetID?: string;
	readonly powerState?: PowerState;
	readonly provisioningState?: string;
	readonly proximityPlacementGroupID?: string;
	readonly scaleDownMode?: "Deallocate" | "Delete";
	readonly scaleSetEvictionPolicy?: "Deallocate" | "Delete";
	readonly scaleSetPriority?: "Regular" | "Spot";
	readonly spotMaxPrice?: number;
	readonly tags?: ManagedClusterAgentPoolProfilePropertiesTags;
	readonly type?: "AvailabilitySet" | "VirtualMachineScaleSets";
	readonly upgradeSettings?: AgentPoolUpgradeSettings;
	readonly vmSize?: string;
	readonly vnetSubnetID?: string;
	readonly workloadRuntime?: "OCIContainer" | "WasmWasi";
}
export interface ManagedClusterAgentPoolProfilePropertiesNodeLabels {
	readonly [key: string]: string;
}
export interface ManagedClusterAgentPoolProfilePropertiesTags {
	readonly [key: string]: string;
}
export interface ManagedClusterAPIServerAccessProfile {
	readonly authorizedIPRanges?: string[];
	readonly disableRunCommand?: boolean;
	readonly enablePrivateCluster?: boolean;
	readonly enablePrivateClusterPublicFQDN?: boolean;
	readonly enableVnetIntegration?: boolean;
	readonly privateDNSZone?: string;
	readonly subnetId?: string;
}
export interface ManagedClusterAutoUpgradeProfile {
	readonly upgradeChannel?: "node-image" | "none" | "patch" | "rapid" | "stable";
}
export interface ManagedClusterHttpProxyConfig {
	readonly effectiveNoProxy?: string[];
	readonly httpProxy?: string;
	readonly httpsProxy?: string;
	readonly noProxy?: string[];
	readonly trustedCa?: string;
}
export interface ManagedClusterIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned";
	readonly userAssignedIdentities?: ManagedClusterIdentityUserAssignedIdentities;
}
export interface ManagedClusterIdentityUserAssignedIdentities {
	readonly [key: string]: ManagedServiceIdentityUserAssignedIdentitiesValue;
}
export interface ManagedClusterIngressProfile {
	readonly webAppRouting?: ManagedClusterIngressProfileWebAppRouting;
}
export interface ManagedClusterIngressProfileWebAppRouting {
	readonly dnsZoneResourceId?: string;
	readonly enabled?: boolean;
}
export interface ManagedClusterLoadBalancerProfile {
	readonly allocatedOutboundPorts?: number;
	readonly effectiveOutboundIPs?: ResourceReference[];
	readonly enableMultipleStandardLoadBalancers?: boolean;
	readonly idleTimeoutInMinutes?: number;
	readonly managedOutboundIPs?: ManagedClusterLoadBalancerProfileManagedOutboundIPs;
	readonly outboundIPPrefixes?: ManagedClusterLoadBalancerProfileOutboundIPPrefixes;
	readonly outboundIPs?: ManagedClusterLoadBalancerProfileOutboundIPs;
}
export interface ManagedClusterLoadBalancerProfileManagedOutboundIPs {
	readonly count?: number;
	readonly countIPv6?: number;
}
export interface ManagedClusterLoadBalancerProfileOutboundIPPrefixes {
	readonly publicIPPrefixes?: ResourceReference[];
}
export interface ManagedClusterLoadBalancerProfileOutboundIPs {
	readonly publicIPs?: ResourceReference[];
}
export interface ManagedClusterManagedOutboundIPProfile {
	readonly count?: number;
}
export interface ManagedClusterNATGatewayProfile {
	readonly effectiveOutboundIPs?: ResourceReference[];
	readonly idleTimeoutInMinutes?: number;
	readonly managedOutboundIPProfile?: ManagedClusterManagedOutboundIPProfile;
}
export interface ManagedClusterOidcIssuerProfile {
	readonly enabled?: boolean;
	readonly issuerURL?: string;
}
export interface ManagedClusterPodIdentity {
	readonly bindingSelector?: string;
	readonly identity: UserAssignedIdentity;
	readonly name: string;
	readonly namespace: string;
	readonly provisioningInfo?: ManagedClusterPodIdentityProvisioningInfo;
	readonly provisioningState?: "Assigned" | "Deleting" | "Failed" | "Updating";
}
export interface ManagedClusterPodIdentityException {
	readonly name: string;
	readonly namespace: string;
	readonly podLabels: ManagedClusterPodIdentityExceptionPodLabels;
}
export interface ManagedClusterPodIdentityExceptionPodLabels {
	readonly [key: string]: string;
}
export interface ManagedClusterPodIdentityProfile {
	readonly allowNetworkPluginKubenet?: boolean;
	readonly enabled?: boolean;
	readonly userAssignedIdentities?: ManagedClusterPodIdentity[];
	readonly userAssignedIdentityExceptions?: ManagedClusterPodIdentityException[];
}
export interface ManagedClusterPodIdentityProvisioningError {
	readonly error?: ManagedClusterPodIdentityProvisioningErrorBody;
}
export interface ManagedClusterPodIdentityProvisioningErrorBody {
	readonly code?: string;
	readonly details?: ManagedClusterPodIdentityProvisioningErrorBody[];
	readonly message?: string;
	readonly target?: string;
}
export interface ManagedClusterPodIdentityProvisioningInfo {
	readonly error?: ManagedClusterPodIdentityProvisioningError;
}
export interface ManagedClusterProperties {
	readonly aadProfile?: ManagedClusterAADProfile;
	readonly addonProfiles?: ManagedClusterPropertiesAddonProfiles;
	readonly agentPoolProfiles?: ManagedClusterAgentPoolProfile[];
	readonly apiServerAccessProfile?: ManagedClusterAPIServerAccessProfile;
	readonly autoScalerProfile?: ManagedClusterPropertiesAutoScalerProfile;
	readonly autoUpgradeProfile?: ManagedClusterAutoUpgradeProfile;
	readonly azurePortalFQDN?: string;
	readonly creationData?: CreationData;
	readonly currentKubernetesVersion?: string;
	readonly disableLocalAccounts?: boolean;
	readonly diskEncryptionSetID?: string;
	readonly dnsPrefix?: string;
	readonly enableNamespaceResources?: boolean;
	readonly enablePodSecurityPolicy?: boolean;
	readonly enableRBAC?: boolean;
	readonly fqdn?: string;
	readonly fqdnSubdomain?: string;
	readonly httpProxyConfig?: ManagedClusterHttpProxyConfig;
	readonly identityProfile?: ManagedClusterPropertiesIdentityProfile;
	readonly ingressProfile?: ManagedClusterIngressProfile;
	readonly kubernetesVersion?: string;
	readonly linuxProfile?: ContainerServiceLinuxProfile;
	readonly maxAgentPools?: number;
	readonly networkProfile?: ContainerServiceNetworkProfile;
	readonly nodeResourceGroup?: string;
	readonly oidcIssuerProfile?: ManagedClusterOidcIssuerProfile;
	readonly podIdentityProfile?: ManagedClusterPodIdentityProfile;
	readonly powerState?: PowerState;
	readonly privateFQDN?: string;
	readonly privateLinkResources?: PrivateLinkResource[];
	readonly provisioningState?: string;
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
	readonly securityProfile?: ManagedClusterSecurityProfile;
	readonly servicePrincipalProfile?: ManagedClusterServicePrincipalProfile;
	readonly storageProfile?: ManagedClusterStorageProfile;
	readonly windowsProfile?: ManagedClusterWindowsProfile;
	readonly workloadAutoScalerProfile?: ManagedClusterWorkloadAutoScalerProfile;
}
export interface ManagedClusterPropertiesAddonProfiles {
	readonly [key: string]: ManagedClusterAddonProfile;
}
export interface ManagedClusterPropertiesAutoScalerProfile {
	readonly "balance-similar-node-groups"?: string;
	readonly expander?: "least-waste" | "most-pods" | "priority" | "random";
	readonly "max-empty-bulk-delete"?: string;
	readonly "max-graceful-termination-sec"?: string;
	readonly "max-node-provision-time"?: string;
	readonly "max-total-unready-percentage"?: string;
	readonly "new-pod-scale-up-delay"?: string;
	readonly "ok-total-unready-count"?: string;
	readonly "scale-down-delay-after-add"?: string;
	readonly "scale-down-delay-after-delete"?: string;
	readonly "scale-down-delay-after-failure"?: string;
	readonly "scale-down-unneeded-time"?: string;
	readonly "scale-down-unready-time"?: string;
	readonly "scale-down-utilization-threshold"?: string;
	readonly "scan-interval"?: string;
	readonly "skip-nodes-with-local-storage"?: string;
	readonly "skip-nodes-with-system-pods"?: string;
}
export interface ManagedClusterPropertiesForSnapshot {
	readonly enableRbac?: boolean;
	readonly kubernetesVersion?: string;
	readonly networkProfile?: NetworkProfileForSnapshot;
	readonly sku?: ManagedClusterSKU;
}
export interface ManagedClusterPropertiesIdentityProfile {
	readonly [key: string]: UserAssignedIdentity;
}
export interface ManagedClusterSecurityProfile {
	readonly azureKeyVaultKms?: AzureKeyVaultKms;
	readonly defender?: ManagedClusterSecurityProfileDefender;
	readonly workloadIdentity?: ManagedClusterSecurityProfileWorkloadIdentity;
}
export interface ManagedClusterSecurityProfileDefender {
	readonly logAnalyticsWorkspaceResourceId?: string;
	readonly securityMonitoring?: ManagedClusterSecurityProfileDefenderSecurityMonitoring;
}
export interface ManagedClusterSecurityProfileDefenderSecurityMonitoring {
	readonly enabled?: boolean;
}
export interface ManagedClusterSecurityProfileWorkloadIdentity {
	readonly enabled?: boolean;
}
export interface ManagedClusterServicePrincipalProfile {
	readonly clientId: string;
	readonly secret?: string;
}
export interface ManagedClusterSKU {
	readonly name?: "Basic";
	readonly tier?: "Free" | "Paid";
}
export interface ManagedClusterSnapshotProperties {
	readonly creationData?: CreationData;
	readonly managedClusterPropertiesReadOnly?: ManagedClusterPropertiesForSnapshot;
	readonly snapshotType?: "ManagedCluster" | "NodePool";
}
export interface ManagedClusterStorageProfile {
	readonly blobCSIDriver?: ManagedClusterStorageProfileBlobCSIDriver;
	readonly diskCSIDriver?: ManagedClusterStorageProfileDiskCSIDriver;
	readonly fileCSIDriver?: ManagedClusterStorageProfileFileCSIDriver;
	readonly snapshotController?: ManagedClusterStorageProfileSnapshotController;
}
export interface ManagedClusterStorageProfileBlobCSIDriver {
	readonly enabled?: boolean;
}
export interface ManagedClusterStorageProfileDiskCSIDriver {
	readonly enabled?: boolean;
	readonly version?: string;
}
export interface ManagedClusterStorageProfileFileCSIDriver {
	readonly enabled?: boolean;
}
export interface ManagedClusterStorageProfileSnapshotController {
	readonly enabled?: boolean;
}
export interface ManagedClusterWindowsProfile {
	readonly adminPassword?: string;
	readonly adminUsername: string;
	readonly enableCSIProxy?: boolean;
	readonly gmsaProfile?: WindowsGmsaProfile;
	readonly licenseType?: "None" | "Windows_Server";
}
export interface ManagedClusterWorkloadAutoScalerProfile {
	readonly keda?: ManagedClusterWorkloadAutoScalerProfileKeda;
}
export interface ManagedClusterWorkloadAutoScalerProfileKeda {
	readonly enabled: boolean;
}
export interface ManagedServiceIdentityUserAssignedIdentitiesValue {
	readonly clientId?: string;
	readonly principalId?: string;
}
export interface NetworkProfileForSnapshot {
	readonly loadBalancerSku?: "basic" | "standard";
	readonly networkMode?: "bridge" | "transparent";
	readonly networkPlugin?: "azure" | "kubenet" | "none";
	readonly networkPluginMode?: "Overlay";
	readonly networkPolicy?: "azure" | "calico";
}
export interface PowerState {
	readonly code?: "Running" | "Stopped";
}
export interface PrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded";
}
export interface PrivateLinkResource {
	readonly groupId?: string;
	readonly id?: string;
	readonly name?: string;
	readonly privateLinkServiceID?: string;
	readonly requiredMembers?: string[];
	readonly type?: string;
}
export interface PrivateLinkServiceConnectionState {
	readonly description?: string;
	readonly status?: "Approved" | "Disconnected" | "Pending" | "Rejected";
}
export interface ResourceReference {
	readonly id?: string;
}
export interface SnapshotProperties {
	readonly creationData?: CreationData;
	readonly enableFIPS?: boolean;
	readonly kubernetesVersion?: string;
	readonly nodeImageVersion?: string;
	readonly osSku?: "CBLMariner" | "Ubuntu" | "Windows2019" | "Windows2022";
	readonly osType?: "Linux" | "Windows";
	readonly snapshotType?: "ManagedCluster" | "NodePool";
	readonly vmSize?: string;
}
export interface SysctlConfig {
	readonly fsAioMaxNr?: number;
	readonly fsFileMax?: number;
	readonly fsInotifyMaxUserWatches?: number;
	readonly fsNrOpen?: number;
	readonly kernelThreadsMax?: number;
	readonly netCoreNetdevMaxBacklog?: number;
	readonly netCoreOptmemMax?: number;
	readonly netCoreRmemDefault?: number;
	readonly netCoreRmemMax?: number;
	readonly netCoreSomaxconn?: number;
	readonly netCoreWmemDefault?: number;
	readonly netCoreWmemMax?: number;
	readonly netIpv4IpLocalPortRange?: string;
	readonly netIpv4NeighDefaultGcThresh1?: number;
	readonly netIpv4NeighDefaultGcThresh2?: number;
	readonly netIpv4NeighDefaultGcThresh3?: number;
	readonly netIpv4TcpFinTimeout?: number;
	readonly netIpv4TcpkeepaliveIntvl?: number;
	readonly netIpv4TcpKeepaliveProbes?: number;
	readonly netIpv4TcpKeepaliveTime?: number;
	readonly netIpv4TcpMaxSynBacklog?: number;
	readonly netIpv4TcpMaxTwBuckets?: number;
	readonly netIpv4TcpTwReuse?: boolean;
	readonly netNetfilterNfConntrackBuckets?: number;
	readonly netNetfilterNfConntrackMax?: number;
	readonly vmMaxMapCount?: number;
	readonly vmSwappiness?: number;
	readonly vmVfsCachePressure?: number;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TimeInWeek {
	readonly day?: "Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday" | "Wednesday";
	readonly hourSlots?: number[];
}
export interface TimeSpan {
	readonly end?: string;
	readonly start?: string;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface TrustedAccessRoleBindingProperties {
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly roles: string[];
	readonly sourceResourceId: string;
}
export interface UserAssignedIdentity {
	readonly clientId?: string;
	readonly objectId?: string;
	readonly resourceId?: string;
}
export interface WindowsGmsaProfile {
	readonly dnsServer?: string;
	readonly enabled?: boolean;
	readonly rootDomainName?: string;
}
export default {
	managedClusters: managedClusters,
	"managedClusters/agentPools": managedClusters_agentPools,
	"managedClusters/maintenanceConfigurations": managedClusters_maintenanceConfigurations,
	"managedClusters/privateEndpointConnections": managedClusters_privateEndpointConnections,
	"managedClusters/trustedAccessRoleBindings": managedClusters_trustedAccessRoleBindings,
	managedclustersnapshots: managedclustersnapshots,
	snapshots: snapshots,
};
