import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class managedClusters
	extends ArmResource<managedClustersComponentInputs>
	implements managedClustersComponentOutputs
{
	constructor(entity: ADKEntity, options: managedClustersComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerService/managedClusters", "2022-04-01", options);
	}
	public readonly apiVersion: "2022-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerService/managedClusters";
}
export interface managedClustersComponentOutputs {
	readonly apiVersion: "2022-04-01";
	readonly id: string;
	readonly type: "Microsoft.ContainerService/managedClusters";
}
export interface managedClustersComponentInputs {
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly identity?: ManagedClusterIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: ManagedClusterProperties | undefined;
	readonly sku?: ManagedClusterSKU | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class managedClusters_agentPools
	extends ArmResource<managedClusters_agentPoolsComponentInputs>
	implements managedClusters_agentPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: managedClusters_agentPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerService/managedClusters/agentPools", "2022-04-01", options);
	}
	public readonly apiVersion: "2022-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerService/managedClusters/agentPools";
}
export interface managedClusters_agentPoolsComponentOutputs {
	readonly apiVersion: "2022-04-01";
	readonly id: string;
	readonly type: "Microsoft.ContainerService/managedClusters/agentPools";
}
export interface managedClusters_agentPoolsComponentInputs {
	readonly name: string;
	readonly properties?: ManagedClusterAgentPoolProfileProperties | undefined;
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
			"2022-04-01",
			options,
		);
	}
	public readonly apiVersion: "2022-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerService/managedClusters/maintenanceConfigurations";
}
export interface managedClusters_maintenanceConfigurationsComponentOutputs {
	readonly apiVersion: "2022-04-01";
	readonly id: string;
	readonly type: "Microsoft.ContainerService/managedClusters/maintenanceConfigurations";
}
export interface managedClusters_maintenanceConfigurationsComponentInputs {
	readonly name: string;
	readonly properties?: MaintenanceConfigurationProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
			"2022-04-01",
			options,
		);
	}
	public readonly apiVersion: "2022-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerService/managedClusters/privateEndpointConnections";
}
export interface managedClusters_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2022-04-01";
	readonly id: string;
	readonly type: "Microsoft.ContainerService/managedClusters/privateEndpointConnections";
}
export interface managedClusters_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
}
export class snapshots extends ArmResource<snapshotsComponentInputs> implements snapshotsComponentOutputs {
	constructor(entity: ADKEntity, options: snapshotsComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerService/snapshots", "2022-04-01", options);
	}
	public readonly apiVersion: "2022-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerService/snapshots";
}
export interface snapshotsComponentOutputs {
	readonly apiVersion: "2022-04-01";
	readonly id: string;
	readonly type: "Microsoft.ContainerService/snapshots";
}
export interface snapshotsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: SnapshotProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export function listClusterAdminCredential(resource: managedClusters): CredentialResults {
	if (resource.apiVersion !== "2022-04-01") {
		throw new Error(`listClusterAdminCredential is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ContainerService/managedClusters") {
		throw new Error(`listClusterAdminCredential is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listClusterMonitoringUserCredential(resource: managedClusters): CredentialResults {
	if (resource.apiVersion !== "2022-04-01") {
		throw new Error(`listClusterMonitoringUserCredential is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ContainerService/managedClusters") {
		throw new Error(`listClusterMonitoringUserCredential is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listClusterUserCredential(resource: managedClusters): CredentialResults {
	if (resource.apiVersion !== "2022-04-01") {
		throw new Error(`listClusterUserCredential is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ContainerService/managedClusters") {
		throw new Error(`listClusterUserCredential is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listCredential(resource: ArmResource): ManagedClusterAccessProfile {
	if (resource.apiVersion !== "2022-04-01") {
		throw new Error(`listCredential is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ContainerService/managedClusters/accessProfiles") {
		throw new Error(`listCredential is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AccessProfile {
	readonly kubeConfig?: any | undefined;
}
export interface AgentPoolUpgradeSettings {
	readonly maxSurge?: string | undefined;
}
export interface ContainerServiceLinuxProfile {
	readonly adminUsername: string;
	readonly ssh: ContainerServiceSshConfiguration;
}
export interface ContainerServiceNetworkProfile {
	readonly dnsServiceIP?: string | undefined;
	readonly dockerBridgeCidr?: string | undefined;
	readonly ipFamilies?: ("IPv4" | "IPv6"[]) | undefined;
	readonly loadBalancerProfile?: ManagedClusterLoadBalancerProfile | undefined;
	readonly loadBalancerSku?: ("basic" | "standard") | undefined;
	readonly natGatewayProfile?: ManagedClusterNATGatewayProfile | undefined;
	readonly networkMode?: ("bridge" | "transparent") | undefined;
	readonly networkPlugin?: ("azure" | "kubenet") | undefined;
	readonly networkPolicy?: ("azure" | "calico") | undefined;
	readonly outboundType?:
		| ("loadBalancer" | "managedNATGateway" | "userAssignedNATGateway" | "userDefinedRouting")
		| undefined;
	readonly podCidr?: string | undefined;
	readonly podCidrs?: string[] | undefined;
	readonly serviceCidr?: string | undefined;
	readonly serviceCidrs?: string[] | undefined;
}
export interface ContainerServiceSshConfiguration {
	readonly publicKeys: ContainerServiceSshPublicKey[];
}
export interface ContainerServiceSshPublicKey {
	readonly keyData: string;
}
export interface CreationData {
	readonly sourceResourceId?: string | undefined;
}
export interface CredentialResult {
	readonly name?: string | undefined;
	readonly value?: any | undefined;
}
export interface CredentialResults {
	readonly kubeconfigs?: CredentialResult[] | undefined;
}
export interface ExtendedLocation {
	readonly name?: string | undefined;
	readonly type?: "EdgeZone" | undefined;
}
export interface KubeletConfig {
	readonly allowedUnsafeSysctls?: string[] | undefined;
	readonly containerLogMaxFiles?: number | undefined;
	readonly containerLogMaxSizeMB?: number | undefined;
	readonly cpuCfsQuota?: boolean | undefined;
	readonly cpuCfsQuotaPeriod?: string | undefined;
	readonly cpuManagerPolicy?: string | undefined;
	readonly failSwapOn?: boolean | undefined;
	readonly imageGcHighThreshold?: number | undefined;
	readonly imageGcLowThreshold?: number | undefined;
	readonly podMaxPids?: number | undefined;
	readonly topologyManagerPolicy?: string | undefined;
}
export interface LinuxOSConfig {
	readonly swapFileSizeMB?: number | undefined;
	readonly sysctls?: SysctlConfig | undefined;
	readonly transparentHugePageDefrag?: string | undefined;
	readonly transparentHugePageEnabled?: string | undefined;
}
export interface MaintenanceConfigurationProperties {
	readonly notAllowedTime?: TimeSpan[] | undefined;
	readonly timeInWeek?: TimeInWeek[] | undefined;
}
export interface ManagedClusterAADProfile {
	readonly adminGroupObjectIDs?: string[] | undefined;
	readonly clientAppID?: string | undefined;
	readonly enableAzureRBAC?: boolean | undefined;
	readonly managed?: boolean | undefined;
	readonly serverAppID?: string | undefined;
	readonly serverAppSecret?: string | undefined;
	readonly tenantID?: string | undefined;
}
export interface ManagedClusterAccessProfile {
	readonly id?: string | undefined;
	readonly location: string;
	readonly name?: string | undefined;
	readonly properties?: AccessProfile | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface ManagedClusterAddonProfile {
	readonly config?: ManagedClusterAddonProfileConfig | undefined;
	readonly enabled: boolean;
	readonly identity?: ManagedClusterAddonProfileIdentity | undefined;
}
export interface ManagedClusterAddonProfileConfig {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ManagedClusterAddonProfileIdentity {
	readonly clientId?: string | undefined;
	readonly objectId?: string | undefined;
	readonly resourceId?: string | undefined;
}
export interface ManagedClusterAgentPoolProfile {
	readonly availabilityZones?: string[] | undefined;
	readonly count?: number | undefined;
	readonly creationData?: CreationData | undefined;
	readonly currentOrchestratorVersion?: string | undefined;
	readonly enableAutoScaling?: boolean | undefined;
	readonly enableEncryptionAtHost?: boolean | undefined;
	readonly enableFIPS?: boolean | undefined;
	readonly enableNodePublicIP?: boolean | undefined;
	readonly enableUltraSSD?: boolean | undefined;
	readonly gpuInstanceProfile?: ("MIG1g" | "MIG2g" | "MIG3g" | "MIG4g" | "MIG7g") | undefined;
	readonly kubeletConfig?: KubeletConfig | undefined;
	readonly kubeletDiskType?: ("OS" | "Temporary") | undefined;
	readonly linuxOSConfig?: LinuxOSConfig | undefined;
	readonly maxCount?: number | undefined;
	readonly maxPods?: number | undefined;
	readonly minCount?: number | undefined;
	readonly mode?: ("System" | "User") | undefined;
	readonly name: string;
	readonly nodeImageVersion?: string | undefined;
	readonly nodeLabels?: ManagedClusterAgentPoolProfilePropertiesNodeLabels | undefined;
	readonly nodePublicIPPrefixID?: string | undefined;
	readonly nodeTaints?: string[] | undefined;
	readonly orchestratorVersion?: string | undefined;
	readonly osDiskSizeGB?: number | undefined;
	readonly osDiskType?: ("Ephemeral" | "Managed") | undefined;
	readonly osSKU?: ("CBLMariner" | "Ubuntu") | undefined;
	readonly osType?: ("Linux" | "Windows") | undefined;
	readonly podSubnetID?: string | undefined;
	readonly powerState?: PowerState | undefined;
	readonly provisioningState?: string | undefined;
	readonly proximityPlacementGroupID?: string | undefined;
	readonly scaleDownMode?: ("Deallocate" | "Delete") | undefined;
	readonly scaleSetEvictionPolicy?: ("Deallocate" | "Delete") | undefined;
	readonly scaleSetPriority?: ("Regular" | "Spot") | undefined;
	readonly spotMaxPrice?: number | undefined;
	readonly tags?: ManagedClusterAgentPoolProfilePropertiesTags | undefined;
	readonly type?: ("AvailabilitySet" | "VirtualMachineScaleSets") | undefined;
	readonly upgradeSettings?: AgentPoolUpgradeSettings | undefined;
	readonly vmSize?: string | undefined;
	readonly vnetSubnetID?: string | undefined;
	readonly workloadRuntime?: ("OCIContainer" | "WasmWasi") | undefined;
}
export interface ManagedClusterAgentPoolProfileProperties {
	readonly availabilityZones?: string[] | undefined;
	readonly count?: number | undefined;
	readonly creationData?: CreationData | undefined;
	readonly currentOrchestratorVersion?: string | undefined;
	readonly enableAutoScaling?: boolean | undefined;
	readonly enableEncryptionAtHost?: boolean | undefined;
	readonly enableFIPS?: boolean | undefined;
	readonly enableNodePublicIP?: boolean | undefined;
	readonly enableUltraSSD?: boolean | undefined;
	readonly gpuInstanceProfile?: ("MIG1g" | "MIG2g" | "MIG3g" | "MIG4g" | "MIG7g") | undefined;
	readonly kubeletConfig?: KubeletConfig | undefined;
	readonly kubeletDiskType?: ("OS" | "Temporary") | undefined;
	readonly linuxOSConfig?: LinuxOSConfig | undefined;
	readonly maxCount?: number | undefined;
	readonly maxPods?: number | undefined;
	readonly minCount?: number | undefined;
	readonly mode?: ("System" | "User") | undefined;
	readonly nodeImageVersion?: string | undefined;
	readonly nodeLabels?: ManagedClusterAgentPoolProfilePropertiesNodeLabels | undefined;
	readonly nodePublicIPPrefixID?: string | undefined;
	readonly nodeTaints?: string[] | undefined;
	readonly orchestratorVersion?: string | undefined;
	readonly osDiskSizeGB?: number | undefined;
	readonly osDiskType?: ("Ephemeral" | "Managed") | undefined;
	readonly osSKU?: ("CBLMariner" | "Ubuntu") | undefined;
	readonly osType?: ("Linux" | "Windows") | undefined;
	readonly podSubnetID?: string | undefined;
	readonly powerState?: PowerState | undefined;
	readonly provisioningState?: string | undefined;
	readonly proximityPlacementGroupID?: string | undefined;
	readonly scaleDownMode?: ("Deallocate" | "Delete") | undefined;
	readonly scaleSetEvictionPolicy?: ("Deallocate" | "Delete") | undefined;
	readonly scaleSetPriority?: ("Regular" | "Spot") | undefined;
	readonly spotMaxPrice?: number | undefined;
	readonly tags?: ManagedClusterAgentPoolProfilePropertiesTags | undefined;
	readonly type?: ("AvailabilitySet" | "VirtualMachineScaleSets") | undefined;
	readonly upgradeSettings?: AgentPoolUpgradeSettings | undefined;
	readonly vmSize?: string | undefined;
	readonly vnetSubnetID?: string | undefined;
	readonly workloadRuntime?: ("OCIContainer" | "WasmWasi") | undefined;
}
export interface ManagedClusterAgentPoolProfilePropertiesNodeLabels {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ManagedClusterAgentPoolProfilePropertiesTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ManagedClusterAPIServerAccessProfile {
	readonly authorizedIPRanges?: string[] | undefined;
	readonly disableRunCommand?: boolean | undefined;
	readonly enablePrivateCluster?: boolean | undefined;
	readonly enablePrivateClusterPublicFQDN?: boolean | undefined;
	readonly privateDNSZone?: string | undefined;
}
export interface ManagedClusterAutoUpgradeProfile {
	readonly upgradeChannel?: ("node-image" | "none" | "patch" | "rapid" | "stable") | undefined;
}
export interface ManagedClusterHttpProxyConfig {
	readonly httpProxy?: string | undefined;
	readonly httpsProxy?: string | undefined;
	readonly noProxy?: string[] | undefined;
	readonly trustedCa?: string | undefined;
}
export interface ManagedClusterIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned") | undefined;
	readonly userAssignedIdentities?: ManagedClusterIdentityUserAssignedIdentities | undefined;
}
export interface ManagedClusterIdentityUserAssignedIdentities {
	readonly "[ key: string ]"?: ManagedServiceIdentityUserAssignedIdentitiesValue | undefined;
}
export interface ManagedClusterLoadBalancerProfile {
	readonly allocatedOutboundPorts?: number | undefined;
	readonly effectiveOutboundIPs?: ResourceReference[] | undefined;
	readonly enableMultipleStandardLoadBalancers?: boolean | undefined;
	readonly idleTimeoutInMinutes?: number | undefined;
	readonly managedOutboundIPs?: ManagedClusterLoadBalancerProfileManagedOutboundIPs | undefined;
	readonly outboundIPPrefixes?: ManagedClusterLoadBalancerProfileOutboundIPPrefixes | undefined;
	readonly outboundIPs?: ManagedClusterLoadBalancerProfileOutboundIPs | undefined;
}
export interface ManagedClusterLoadBalancerProfileManagedOutboundIPs {
	readonly count?: number | undefined;
	readonly countIPv6?: number | undefined;
}
export interface ManagedClusterLoadBalancerProfileOutboundIPPrefixes {
	readonly publicIPPrefixes?: ResourceReference[] | undefined;
}
export interface ManagedClusterLoadBalancerProfileOutboundIPs {
	readonly publicIPs?: ResourceReference[] | undefined;
}
export interface ManagedClusterManagedOutboundIPProfile {
	readonly count?: number | undefined;
}
export interface ManagedClusterNATGatewayProfile {
	readonly effectiveOutboundIPs?: ResourceReference[] | undefined;
	readonly idleTimeoutInMinutes?: number | undefined;
	readonly managedOutboundIPProfile?: ManagedClusterManagedOutboundIPProfile | undefined;
}
export interface ManagedClusterPodIdentity {
	readonly bindingSelector?: string | undefined;
	readonly identity: UserAssignedIdentity;
	readonly name: string;
	readonly namespace: string;
	readonly provisioningInfo?: ManagedClusterPodIdentityProvisioningInfo | undefined;
	readonly provisioningState?: ("Assigned" | "Deleting" | "Failed" | "Updating") | undefined;
}
export interface ManagedClusterPodIdentityException {
	readonly name: string;
	readonly namespace: string;
	readonly podLabels: ManagedClusterPodIdentityExceptionPodLabels;
}
export interface ManagedClusterPodIdentityExceptionPodLabels {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ManagedClusterPodIdentityProfile {
	readonly allowNetworkPluginKubenet?: boolean | undefined;
	readonly enabled?: boolean | undefined;
	readonly userAssignedIdentities?: ManagedClusterPodIdentity[] | undefined;
	readonly userAssignedIdentityExceptions?: ManagedClusterPodIdentityException[] | undefined;
}
export interface ManagedClusterPodIdentityProvisioningError {
	readonly error?: ManagedClusterPodIdentityProvisioningErrorBody | undefined;
}
export interface ManagedClusterPodIdentityProvisioningErrorBody {
	readonly code?: string | undefined;
	readonly details?: ManagedClusterPodIdentityProvisioningErrorBody[] | undefined;
	readonly message?: string | undefined;
	readonly target?: string | undefined;
}
export interface ManagedClusterPodIdentityProvisioningInfo {
	readonly error?: ManagedClusterPodIdentityProvisioningError | undefined;
}
export interface ManagedClusterProperties {
	readonly aadProfile?: ManagedClusterAADProfile | undefined;
	readonly addonProfiles?: ManagedClusterPropertiesAddonProfiles | undefined;
	readonly agentPoolProfiles?: ManagedClusterAgentPoolProfile[] | undefined;
	readonly apiServerAccessProfile?: ManagedClusterAPIServerAccessProfile | undefined;
	readonly autoScalerProfile?: ManagedClusterPropertiesAutoScalerProfile | undefined;
	readonly autoUpgradeProfile?: ManagedClusterAutoUpgradeProfile | undefined;
	readonly azurePortalFQDN?: string | undefined;
	readonly currentKubernetesVersion?: string | undefined;
	readonly disableLocalAccounts?: boolean | undefined;
	readonly diskEncryptionSetID?: string | undefined;
	readonly dnsPrefix?: string | undefined;
	readonly enablePodSecurityPolicy?: boolean | undefined;
	readonly enableRBAC?: boolean | undefined;
	readonly fqdn?: string | undefined;
	readonly fqdnSubdomain?: string | undefined;
	readonly httpProxyConfig?: ManagedClusterHttpProxyConfig | undefined;
	readonly identityProfile?: ManagedClusterPropertiesIdentityProfile | undefined;
	readonly kubernetesVersion?: string | undefined;
	readonly linuxProfile?: ContainerServiceLinuxProfile | undefined;
	readonly maxAgentPools?: number | undefined;
	readonly networkProfile?: ContainerServiceNetworkProfile | undefined;
	readonly nodeResourceGroup?: string | undefined;
	readonly podIdentityProfile?: ManagedClusterPodIdentityProfile | undefined;
	readonly powerState?: PowerState | undefined;
	readonly privateFQDN?: string | undefined;
	readonly privateLinkResources?: PrivateLinkResource[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
	readonly securityProfile?: ManagedClusterSecurityProfile | undefined;
	readonly servicePrincipalProfile?: ManagedClusterServicePrincipalProfile | undefined;
	readonly storageProfile?: ManagedClusterStorageProfile | undefined;
	readonly windowsProfile?: ManagedClusterWindowsProfile | undefined;
}
export interface ManagedClusterPropertiesAddonProfiles {
	readonly "[ key: string ]"?: ManagedClusterAddonProfile | undefined;
}
export interface ManagedClusterPropertiesAutoScalerProfile {
	readonly "balance-similar-node-groups"?: string | undefined;
	readonly expander?: ("least-waste" | "most-pods" | "priority" | "random") | undefined;
	readonly "max-empty-bulk-delete"?: string | undefined;
	readonly "max-graceful-termination-sec"?: string | undefined;
	readonly "max-node-provision-time"?: string | undefined;
	readonly "max-total-unready-percentage"?: string | undefined;
	readonly "new-pod-scale-up-delay"?: string | undefined;
	readonly "ok-total-unready-count"?: string | undefined;
	readonly "scale-down-delay-after-add"?: string | undefined;
	readonly "scale-down-delay-after-delete"?: string | undefined;
	readonly "scale-down-delay-after-failure"?: string | undefined;
	readonly "scale-down-unneeded-time"?: string | undefined;
	readonly "scale-down-unready-time"?: string | undefined;
	readonly "scale-down-utilization-threshold"?: string | undefined;
	readonly "scan-interval"?: string | undefined;
	readonly "skip-nodes-with-local-storage"?: string | undefined;
	readonly "skip-nodes-with-system-pods"?: string | undefined;
}
export interface ManagedClusterPropertiesIdentityProfile {
	readonly "[ key: string ]"?: UserAssignedIdentity | undefined;
}
export interface ManagedClusterSecurityProfile {
	readonly azureDefender?: ManagedClusterSecurityProfileAzureDefender | undefined;
}
export interface ManagedClusterSecurityProfileAzureDefender {
	readonly enabled?: boolean | undefined;
	readonly logAnalyticsWorkspaceResourceId?: string | undefined;
}
export interface ManagedClusterServicePrincipalProfile {
	readonly clientId: string;
	readonly secret?: string | undefined;
}
export interface ManagedClusterSKU {
	readonly name?: "Basic" | undefined;
	readonly tier?: ("Free" | "Paid") | undefined;
}
export interface ManagedClusterStorageProfile {
	readonly diskCSIDriver?: ManagedClusterStorageProfileDiskCSIDriver | undefined;
	readonly fileCSIDriver?: ManagedClusterStorageProfileFileCSIDriver | undefined;
	readonly snapshotController?: ManagedClusterStorageProfileSnapshotController | undefined;
}
export interface ManagedClusterStorageProfileDiskCSIDriver {
	readonly enabled?: boolean | undefined;
}
export interface ManagedClusterStorageProfileFileCSIDriver {
	readonly enabled?: boolean | undefined;
}
export interface ManagedClusterStorageProfileSnapshotController {
	readonly enabled?: boolean | undefined;
}
export interface ManagedClusterWindowsProfile {
	readonly adminPassword?: string | undefined;
	readonly adminUsername: string;
	readonly enableCSIProxy?: boolean | undefined;
	readonly gmsaProfile?: WindowsGmsaProfile | undefined;
	readonly licenseType?: ("None" | "Windows_Server") | undefined;
}
export interface ManagedServiceIdentityUserAssignedIdentitiesValue {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export interface PowerState {
	readonly code?: ("Running" | "Stopped") | undefined;
}
export interface PrivateEndpoint {
	readonly id?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint | undefined;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded") | undefined;
}
export interface PrivateLinkResource {
	readonly groupId?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly privateLinkServiceID?: string | undefined;
	readonly requiredMembers?: string[] | undefined;
	readonly type?: string | undefined;
}
export interface PrivateLinkServiceConnectionState {
	readonly description?: string | undefined;
	readonly status?: ("Approved" | "Disconnected" | "Pending" | "Rejected") | undefined;
}
export interface ResourceReference {
	readonly id?: string | undefined;
}
export interface SnapshotProperties {
	readonly creationData?: CreationData | undefined;
	readonly enableFIPS?: boolean | undefined;
	readonly kubernetesVersion?: string | undefined;
	readonly nodeImageVersion?: string | undefined;
	readonly osSku?: ("CBLMariner" | "Ubuntu") | undefined;
	readonly osType?: ("Linux" | "Windows") | undefined;
	readonly snapshotType?: "NodePool" | undefined;
	readonly vmSize?: string | undefined;
}
export interface SysctlConfig {
	readonly fsAioMaxNr?: number | undefined;
	readonly fsFileMax?: number | undefined;
	readonly fsInotifyMaxUserWatches?: number | undefined;
	readonly fsNrOpen?: number | undefined;
	readonly kernelThreadsMax?: number | undefined;
	readonly netCoreNetdevMaxBacklog?: number | undefined;
	readonly netCoreOptmemMax?: number | undefined;
	readonly netCoreRmemDefault?: number | undefined;
	readonly netCoreRmemMax?: number | undefined;
	readonly netCoreSomaxconn?: number | undefined;
	readonly netCoreWmemDefault?: number | undefined;
	readonly netCoreWmemMax?: number | undefined;
	readonly netIpv4IpLocalPortRange?: string | undefined;
	readonly netIpv4NeighDefaultGcThresh1?: number | undefined;
	readonly netIpv4NeighDefaultGcThresh2?: number | undefined;
	readonly netIpv4NeighDefaultGcThresh3?: number | undefined;
	readonly netIpv4TcpFinTimeout?: number | undefined;
	readonly netIpv4TcpkeepaliveIntvl?: number | undefined;
	readonly netIpv4TcpKeepaliveProbes?: number | undefined;
	readonly netIpv4TcpKeepaliveTime?: number | undefined;
	readonly netIpv4TcpMaxSynBacklog?: number | undefined;
	readonly netIpv4TcpMaxTwBuckets?: number | undefined;
	readonly netIpv4TcpTwReuse?: boolean | undefined;
	readonly netNetfilterNfConntrackBuckets?: number | undefined;
	readonly netNetfilterNfConntrackMax?: number | undefined;
	readonly vmMaxMapCount?: number | undefined;
	readonly vmSwappiness?: number | undefined;
	readonly vmVfsCachePressure?: number | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TimeInWeek {
	readonly day?: ("Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday" | "Wednesday") | undefined;
	readonly hourSlots?: number[] | undefined;
}
export interface TimeSpan {
	readonly end?: string | undefined;
	readonly start?: string | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface UserAssignedIdentity {
	readonly clientId?: string | undefined;
	readonly objectId?: string | undefined;
	readonly resourceId?: string | undefined;
}
export interface WindowsGmsaProfile {
	readonly dnsServer?: string | undefined;
	readonly enabled?: boolean | undefined;
	readonly rootDomainName?: string | undefined;
}
export default {
	managedClusters: managedClusters,
	"managedClusters/agentPools": managedClusters_agentPools,
	"managedClusters/maintenanceConfigurations": managedClusters_maintenanceConfigurations,
	"managedClusters/privateEndpointConnections": managedClusters_privateEndpointConnections,
	snapshots: snapshots,
};
