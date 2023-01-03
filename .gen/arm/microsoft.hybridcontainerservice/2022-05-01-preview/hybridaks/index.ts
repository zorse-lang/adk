import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class provisionedClusters
	extends ArmResource<provisionedClustersComponentInputs>
	implements provisionedClustersComponentOutputs
{
	constructor(entity: ADKEntity, options: provisionedClustersComponentInputs) {
		super(entity, options.name, "Microsoft.HybridContainerService/provisionedClusters", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HybridContainerService/provisionedClusters";
}
export interface provisionedClustersComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.HybridContainerService/provisionedClusters";
}
export interface provisionedClustersComponentInputs {
	readonly extendedLocation?:
		| ProvisionedClustersExtendedLocationOrProvisionedClustersResponseExtendedLocation
		| undefined;
	readonly identity?: ProvisionedClusterIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: ProvisionedClustersAllPropertiesOrProvisionedClustersResponseProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class provisionedClusters_agentPools
	extends ArmResource<provisionedClusters_agentPoolsComponentInputs>
	implements provisionedClusters_agentPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: provisionedClusters_agentPoolsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.HybridContainerService/provisionedClusters/agentPools",
			"2022-05-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HybridContainerService/provisionedClusters/agentPools";
}
export interface provisionedClusters_agentPoolsComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.HybridContainerService/provisionedClusters/agentPools";
}
export interface provisionedClusters_agentPoolsComponentInputs {
	readonly extendedLocation?: AgentPoolExtendedLocation | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: AgentPoolProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: AgentPoolTags | undefined;
}
export class provisionedClusters_hybridIdentityMetadata
	extends ArmResource<provisionedClusters_hybridIdentityMetadataComponentInputs>
	implements provisionedClusters_hybridIdentityMetadataComponentOutputs
{
	constructor(entity: ADKEntity, options: provisionedClusters_hybridIdentityMetadataComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.HybridContainerService/provisionedClusters/hybridIdentityMetadata",
			"2022-05-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HybridContainerService/provisionedClusters/hybridIdentityMetadata";
}
export interface provisionedClusters_hybridIdentityMetadataComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.HybridContainerService/provisionedClusters/hybridIdentityMetadata";
}
export interface provisionedClusters_hybridIdentityMetadataComponentInputs {
	readonly name: string;
	readonly properties: HybridIdentityMetadataProperties;
	readonly systemData?: SystemData | undefined;
}
export class storageSpaces extends ArmResource<storageSpacesComponentInputs> implements storageSpacesComponentOutputs {
	constructor(entity: ADKEntity, options: storageSpacesComponentInputs) {
		super(entity, options.name, "Microsoft.HybridContainerService/storageSpaces", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HybridContainerService/storageSpaces";
}
export interface storageSpacesComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.HybridContainerService/storageSpaces";
}
export interface storageSpacesComponentInputs {
	readonly extendedLocation?: StorageSpacesExtendedLocation | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: StorageSpacesProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class virtualNetworks
	extends ArmResource<virtualNetworksComponentInputs>
	implements virtualNetworksComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualNetworksComponentInputs) {
		super(entity, options.name, "Microsoft.HybridContainerService/virtualNetworks", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HybridContainerService/virtualNetworks";
}
export interface virtualNetworksComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.HybridContainerService/virtualNetworks";
}
export interface virtualNetworksComponentInputs {
	readonly extendedLocation?: VirtualNetworksExtendedLocation | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: VirtualNetworksProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface AADProfileOrAADProfileResponse {
	readonly adminGroupObjectIDs?: string[] | undefined;
	readonly clientAppID?: string | undefined;
	readonly enableAzureRbac?: boolean | undefined;
	readonly managed?: boolean | undefined;
	readonly serverAppID?: string | undefined;
	readonly serverAppSecret?: string | undefined;
	readonly tenantID?: string | undefined;
}
export interface AddonProfiles {
	readonly config?: AddonProfilesConfig | undefined;
	readonly enabled?: boolean | undefined;
}
export interface AddonProfilesConfig {
	readonly "[ key: string ]"?: string | undefined;
}
export interface AddonStatus {
	readonly errorMessage?: string | undefined;
	readonly phase?: string | undefined;
	readonly ready?: boolean | undefined;
}
export interface AgentPoolExtendedLocation {
	readonly name?: string | undefined;
	readonly type?: string | undefined;
}
export interface AgentPoolProfileNodeLabels {
	readonly "[ key: string ]"?: string | undefined;
}
export interface AgentPoolProperties {
	readonly availabilityZones?: string[] | undefined;
	readonly cloudProviderProfile?: CloudProviderProfile | undefined;
	readonly count?: number | undefined;
	readonly maxCount?: number | undefined;
	readonly maxPods?: number | undefined;
	readonly minCount?: number | undefined;
	readonly mode?: ("LB" | "System" | "User") | undefined;
	readonly nodeImageVersion?: string | undefined;
	readonly nodeLabels?: AgentPoolProfileNodeLabels | undefined;
	readonly nodeTaints?: string[] | undefined;
	readonly osType?: ("Linux" | "Windows") | undefined;
	readonly provisioningState?: ("Canceled" | "Deleting" | "Failed" | "InProgress" | "Succeeded") | undefined;
	readonly status?: AgentPoolProvisioningStatusStatus | undefined;
	readonly vmSize?: string | undefined;
}
export interface AgentPoolProvisioningStatusError {
	readonly code?: string | undefined;
	readonly message?: string | undefined;
}
export interface AgentPoolProvisioningStatusStatus {
	readonly errorMessage?: string | undefined;
	readonly provisioningStatus?: AgentPoolProvisioningStatusStatusProvisioningStatus | undefined;
	readonly readyReplicas?: number | undefined;
	readonly replicas?: number | undefined;
}
export interface AgentPoolProvisioningStatusStatusProvisioningStatus {
	readonly error?: AgentPoolProvisioningStatusError | undefined;
	readonly operationId?: string | undefined;
	readonly phase?: string | undefined;
	readonly status?: string | undefined;
}
export interface AgentPoolTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ArcAgentProfile {
	readonly agentAutoUpgrade?: ("Disabled" | "Enabled") | undefined;
	readonly agentVersion?: string | undefined;
}
export interface ArcAgentStatus {
	readonly agentVersion?: string | undefined;
	readonly coreCount?: number | undefined;
	readonly deploymentState?:
		| ("deleting" | "failed" | "pending" | "provisioned" | "provisioning" | "upgrading")
		| undefined;
	readonly errorMessage?: string | undefined;
	readonly lastConnectivityTime?: string | undefined;
	readonly managedIdentityCertificateExpirationTime?: string | undefined;
	readonly onboardingPublicKey?: string | undefined;
}
export interface CloudProviderProfile {
	readonly infraNetworkProfile?: CloudProviderProfileInfraNetworkProfile | undefined;
	readonly infraStorageProfile?: CloudProviderProfileInfraStorageProfile | undefined;
}
export interface CloudProviderProfileInfraNetworkProfile {
	readonly vnetSubnetIds?: string[] | undefined;
}
export interface CloudProviderProfileInfraStorageProfile {
	readonly storageSpaceIds?: string[] | undefined;
}
export interface ControlPlaneEndpointProfileControlPlaneEndpoint {
	readonly hostIP?: string | undefined;
	readonly port?: string | undefined;
}
export interface ControlPlaneProfile {
	readonly availabilityZones?: string[] | undefined;
	readonly cloudProviderProfile?: CloudProviderProfile | undefined;
	readonly controlPlaneEndpoint?: ControlPlaneEndpointProfileControlPlaneEndpoint | undefined;
	readonly count?: number | undefined;
	readonly linuxProfile?: LinuxProfileProperties | undefined;
	readonly maxCount?: number | undefined;
	readonly maxPods?: number | undefined;
	readonly minCount?: number | undefined;
	readonly mode?: ("LB" | "System" | "User") | undefined;
	readonly name?: string | undefined;
	readonly nodeImageVersion?: string | undefined;
	readonly nodeLabels?: AgentPoolProfileNodeLabels | undefined;
	readonly nodeTaints?: string[] | undefined;
	readonly osType?: ("Linux" | "Windows") | undefined;
	readonly vmSize?: string | undefined;
}
export interface HttpProxyConfigOrHttpProxyConfigResponse {
	readonly httpProxy?: string | undefined;
	readonly httpsProxy?: string | undefined;
	readonly noProxy?: string[] | undefined;
	readonly password?: string | undefined;
	readonly trustedCa?: string | undefined;
	readonly username?: string | undefined;
}
export interface HybridIdentityMetadataProperties {
	readonly identity?: ProvisionedClusterIdentity | undefined;
	readonly provisioningState?: string | undefined;
	readonly publicKey?: string | undefined;
	readonly resourceUid?: string | undefined;
}
export interface LinuxProfileProperties {
	readonly adminUsername?: string | undefined;
	readonly ssh?: LinuxProfilePropertiesSsh | undefined;
}
export interface LinuxProfilePropertiesSsh {
	readonly publicKeys?: LinuxProfilePropertiesSshPublicKeysItem[] | undefined;
}
export interface LinuxProfilePropertiesSshPublicKeysItem {
	readonly keyData?: string | undefined;
}
export interface LoadBalancerProfile {
	readonly availabilityZones?: string[] | undefined;
	readonly cloudProviderProfile?: CloudProviderProfile | undefined;
	readonly count?: number | undefined;
	readonly linuxProfile?: LinuxProfileProperties | undefined;
	readonly maxCount?: number | undefined;
	readonly maxPods?: number | undefined;
	readonly minCount?: number | undefined;
	readonly mode?: ("LB" | "System" | "User") | undefined;
	readonly name?: string | undefined;
	readonly nodeImageVersion?: string | undefined;
	readonly nodeLabels?: AgentPoolProfileNodeLabels | undefined;
	readonly nodeTaints?: string[] | undefined;
	readonly osType?: ("Linux" | "Windows") | undefined;
	readonly vmSize?: string | undefined;
}
export interface NamedAgentPoolProfile {
	readonly availabilityZones?: string[] | undefined;
	readonly cloudProviderProfile?: CloudProviderProfile | undefined;
	readonly count?: number | undefined;
	readonly maxCount?: number | undefined;
	readonly maxPods?: number | undefined;
	readonly minCount?: number | undefined;
	readonly mode?: ("LB" | "System" | "User") | undefined;
	readonly name?: string | undefined;
	readonly nodeImageVersion?: string | undefined;
	readonly nodeLabels?: AgentPoolProfileNodeLabels | undefined;
	readonly nodeTaints?: string[] | undefined;
	readonly osType?: ("Linux" | "Windows") | undefined;
	readonly vmSize?: string | undefined;
}
export interface NetworkProfile {
	readonly dnsServiceIP?: string | undefined;
	readonly loadBalancerProfile?: LoadBalancerProfile | undefined;
	readonly loadBalancerSku?: ("stacked-kube-vip" | "stacked-metallb" | "unmanaged" | "unstacked-haproxy") | undefined;
	readonly networkPolicy?: ("calico" | "flannel") | undefined;
	readonly podCidr?: string | undefined;
	readonly podCidrs?: string[] | undefined;
	readonly serviceCidr?: string | undefined;
	readonly serviceCidrs?: string[] | undefined;
}
export interface ProvisionedClusterIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type: "None";
}
export interface ProvisionedClustersAllPropertiesOrProvisionedClustersResponseProperties {
	readonly aadProfile?: AADProfileOrAADProfileResponse | undefined;
	readonly addonProfiles?: ProvisionedClustersCommonPropertiesAddonProfiles | undefined;
	readonly agentPoolProfiles?: NamedAgentPoolProfile[] | undefined;
	readonly cloudProviderProfile?: CloudProviderProfile | undefined;
	readonly controlPlane?: ControlPlaneProfile | undefined;
	readonly enableRbac?: boolean | undefined;
	readonly features?: ProvisionedClustersCommonPropertiesFeatures | undefined;
	readonly httpProxyConfig?: HttpProxyConfigOrHttpProxyConfigResponse | undefined;
	readonly kubernetesVersion?: string | undefined;
	readonly linuxProfile?: LinuxProfileProperties | undefined;
	readonly networkProfile?: NetworkProfile | undefined;
	readonly nodeResourceGroup?: string | undefined;
	readonly provisioningState?:
		| ("Accepted" | "Canceled" | "Created" | "Deleting" | "Failed" | "InProgress" | "Succeeded" | "Updating")
		| undefined;
	readonly status?: ProvisionedClustersCommonPropertiesStatus | undefined;
	readonly windowsProfile?: WindowsProfileOrWindowsProfileResponse | undefined;
}
export interface ProvisionedClustersCommonPropertiesAddonProfiles {
	readonly "[ key: string ]"?: AddonProfiles | undefined;
}
export interface ProvisionedClustersCommonPropertiesFeatures {
	readonly arcAgentProfile?: ArcAgentProfile | undefined;
}
export interface ProvisionedClustersCommonPropertiesStatus {
	readonly addonStatus?: ProvisionedClustersCommonPropertiesStatusAddonStatus | undefined;
	readonly errorMessage?: string | undefined;
	readonly featuresStatus?: ProvisionedClustersCommonPropertiesStatusFeaturesStatus | undefined;
	readonly provisioningStatus?: ProvisionedClustersCommonPropertiesStatusProvisioningStatus | undefined;
}
export interface ProvisionedClustersCommonPropertiesStatusAddonStatus {
	readonly "[ key: string ]"?: AddonStatus | undefined;
}
export interface ProvisionedClustersCommonPropertiesStatusFeaturesStatus {
	readonly arcAgentStatus?: ArcAgentStatus | undefined;
}
export interface ProvisionedClustersCommonPropertiesStatusProvisioningStatus {
	readonly error?: ProvisionedClustersCommonPropertiesStatusProvisioningStatusError | undefined;
	readonly operationId?: string | undefined;
	readonly phase?: string | undefined;
	readonly status?: string | undefined;
}
export interface ProvisionedClustersCommonPropertiesStatusProvisioningStatusError {
	readonly code?: string | undefined;
	readonly message?: string | undefined;
}
export interface ProvisionedClustersExtendedLocationOrProvisionedClustersResponseExtendedLocation {
	readonly name?: string | undefined;
	readonly type?: string | undefined;
}
export interface StorageSpacesExtendedLocation {
	readonly name?: string | undefined;
	readonly type?: string | undefined;
}
export interface StorageSpacesProperties {
	readonly hciStorageProfile?: StorageSpacesPropertiesHciStorageProfile | undefined;
	readonly provisioningState?:
		| ("Accepted" | "Canceled" | "Created" | "Deleting" | "Failed" | "InProgress" | "Succeeded" | "Updating")
		| undefined;
	readonly status?: StorageSpacesPropertiesStatus | undefined;
	readonly vmwareStorageProfile?: StorageSpacesPropertiesVmwareStorageProfile | undefined;
}
export interface StorageSpacesPropertiesHciStorageProfile {
	readonly mocGroup?: string | undefined;
	readonly mocLocation?: string | undefined;
	readonly mocStorageContainer?: string | undefined;
}
export interface StorageSpacesPropertiesStatus {
	readonly provisioningStatus?: StorageSpacesPropertiesStatusProvisioningStatus | undefined;
}
export interface StorageSpacesPropertiesStatusProvisioningStatus {
	readonly error?: StorageSpacesPropertiesStatusProvisioningStatusError | undefined;
	readonly operationId?: string | undefined;
	readonly phase?: string | undefined;
	readonly status?: string | undefined;
}
export interface StorageSpacesPropertiesStatusProvisioningStatusError {
	readonly code?: string | undefined;
	readonly message?: string | undefined;
}
export interface StorageSpacesPropertiesVmwareStorageProfile {
	readonly datacenter?: string | undefined;
	readonly datastore?: string | undefined;
	readonly folder?: string | undefined;
	readonly resourcePool?: string | undefined;
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
export interface VirtualNetworksExtendedLocation {
	readonly name?: string | undefined;
	readonly type?: string | undefined;
}
export interface VirtualNetworksProperties {
	readonly dhcpServers?: string[] | undefined;
	readonly dnsServers?: string[] | undefined;
	readonly gateway?: string | undefined;
	readonly infraVnetProfile?: VirtualNetworksPropertiesInfraVnetProfile | undefined;
	readonly ipAddressPrefix?: string | undefined;
	readonly provisioningState?:
		| ("Accepted" | "Canceled" | "Created" | "Deleting" | "Failed" | "InProgress" | "Succeeded" | "Updating")
		| undefined;
	readonly status?: VirtualNetworksPropertiesStatus | undefined;
	readonly vipPool?: VirtualNetworksPropertiesVipPoolItem[] | undefined;
	readonly vlanID?: string | undefined;
	readonly vmipPool?: VirtualNetworksPropertiesVmipPoolItem[] | undefined;
}
export interface VirtualNetworksPropertiesInfraVnetProfile {
	readonly hci?: VirtualNetworksPropertiesInfraVnetProfileHci | undefined;
	readonly kubevirt?: VirtualNetworksPropertiesInfraVnetProfileKubevirt | undefined;
	readonly vmware?: VirtualNetworksPropertiesInfraVnetProfileVmware | undefined;
}
export interface VirtualNetworksPropertiesInfraVnetProfileHci {
	readonly mocGroup?: string | undefined;
	readonly mocLocation?: string | undefined;
	readonly mocVnetName?: string | undefined;
}
export interface VirtualNetworksPropertiesInfraVnetProfileKubevirt {
	readonly vnetName?: string | undefined;
}
export interface VirtualNetworksPropertiesInfraVnetProfileVmware {
	readonly segmentName?: string | undefined;
}
export interface VirtualNetworksPropertiesStatus {
	readonly provisioningStatus?: VirtualNetworksPropertiesStatusProvisioningStatus | undefined;
}
export interface VirtualNetworksPropertiesStatusProvisioningStatus {
	readonly error?: VirtualNetworksPropertiesStatusProvisioningStatusError | undefined;
	readonly operationId?: string | undefined;
	readonly phase?: string | undefined;
	readonly status?: string | undefined;
}
export interface VirtualNetworksPropertiesStatusProvisioningStatusError {
	readonly code?: string | undefined;
	readonly message?: string | undefined;
}
export interface VirtualNetworksPropertiesVipPoolItem {
	readonly endIP?: string | undefined;
	readonly startIP?: string | undefined;
}
export interface VirtualNetworksPropertiesVmipPoolItem {
	readonly endIP?: string | undefined;
	readonly startIP?: string | undefined;
}
export interface WindowsProfileOrWindowsProfileResponse {
	readonly adminPassword?: string | undefined;
	readonly adminUsername?: string | undefined;
	readonly enableCsiProxy?: boolean | undefined;
	readonly licenseType?: ("None" | "Windows_Server") | undefined;
}
export default {
	provisionedClusters: provisionedClusters,
	"provisionedClusters/agentPools": provisionedClusters_agentPools,
	"provisionedClusters/hybridIdentityMetadata": provisionedClusters_hybridIdentityMetadata,
	storageSpaces: storageSpaces,
	virtualNetworks: virtualNetworks,
};
