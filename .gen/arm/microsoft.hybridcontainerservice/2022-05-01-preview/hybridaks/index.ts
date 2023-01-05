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
	readonly extendedLocation?: ProvisionedClustersExtendedLocationOrProvisionedClustersResponseExtendedLocation;
	readonly identity?: ProvisionedClusterIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties?: ProvisionedClustersAllPropertiesOrProvisionedClustersResponseProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
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
	readonly extendedLocation?: AgentPoolExtendedLocation;
	readonly location?: string;
	readonly name: string;
	readonly properties?: AgentPoolProperties;
	readonly systemData?: SystemData;
	readonly tags?: AgentPoolTags;
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
	readonly systemData?: SystemData;
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
	readonly extendedLocation?: StorageSpacesExtendedLocation;
	readonly location: string;
	readonly name: string;
	readonly properties?: StorageSpacesProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
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
	readonly extendedLocation?: VirtualNetworksExtendedLocation;
	readonly location: string;
	readonly name: string;
	readonly properties?: VirtualNetworksProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export interface AADProfileOrAADProfileResponse {
	readonly adminGroupObjectIDs?: string[];
	readonly clientAppID?: string;
	readonly enableAzureRbac?: boolean;
	readonly managed?: boolean;
	readonly serverAppID?: string;
	readonly serverAppSecret?: string;
	readonly tenantID?: string;
}
export interface AddonProfiles {
	readonly config?: AddonProfilesConfig;
	readonly enabled?: boolean;
}
export interface AddonProfilesConfig {
	readonly [key: string]: string;
}
export interface AddonStatus {
	readonly errorMessage?: string;
	readonly phase?: string;
	readonly ready?: boolean;
}
export interface AgentPoolExtendedLocation {
	readonly name?: string;
	readonly type?: string;
}
export interface AgentPoolProfileNodeLabels {
	readonly [key: string]: string;
}
export interface AgentPoolProperties {
	readonly availabilityZones?: string[];
	readonly cloudProviderProfile?: CloudProviderProfile;
	readonly count?: number;
	readonly maxCount?: number;
	readonly maxPods?: number;
	readonly minCount?: number;
	readonly mode?: "LB" | "System" | "User";
	readonly nodeImageVersion?: string;
	readonly nodeLabels?: AgentPoolProfileNodeLabels;
	readonly nodeTaints?: string[];
	readonly osType?: "Linux" | "Windows";
	readonly provisioningState?: "Canceled" | "Deleting" | "Failed" | "InProgress" | "Succeeded";
	readonly status?: AgentPoolProvisioningStatusStatus;
	readonly vmSize?: string;
}
export interface AgentPoolProvisioningStatusError {
	readonly code?: string;
	readonly message?: string;
}
export interface AgentPoolProvisioningStatusStatus {
	readonly errorMessage?: string;
	readonly provisioningStatus?: AgentPoolProvisioningStatusStatusProvisioningStatus;
	readonly readyReplicas?: number;
	readonly replicas?: number;
}
export interface AgentPoolProvisioningStatusStatusProvisioningStatus {
	readonly error?: AgentPoolProvisioningStatusError;
	readonly operationId?: string;
	readonly phase?: string;
	readonly status?: string;
}
export interface AgentPoolTags {
	readonly [key: string]: string;
}
export interface ArcAgentProfile {
	readonly agentAutoUpgrade?: "Disabled" | "Enabled";
	readonly agentVersion?: string;
}
export interface ArcAgentStatus {
	readonly agentVersion?: string;
	readonly coreCount?: number;
	readonly deploymentState?: "deleting" | "failed" | "pending" | "provisioned" | "provisioning" | "upgrading";
	readonly errorMessage?: string;
	readonly lastConnectivityTime?: string;
	readonly managedIdentityCertificateExpirationTime?: string;
	readonly onboardingPublicKey?: string;
}
export interface CloudProviderProfile {
	readonly infraNetworkProfile?: CloudProviderProfileInfraNetworkProfile;
	readonly infraStorageProfile?: CloudProviderProfileInfraStorageProfile;
}
export interface CloudProviderProfileInfraNetworkProfile {
	readonly vnetSubnetIds?: string[];
}
export interface CloudProviderProfileInfraStorageProfile {
	readonly storageSpaceIds?: string[];
}
export interface ControlPlaneEndpointProfileControlPlaneEndpoint {
	readonly hostIP?: string;
	readonly port?: string;
}
export interface ControlPlaneProfile {
	readonly availabilityZones?: string[];
	readonly cloudProviderProfile?: CloudProviderProfile;
	readonly controlPlaneEndpoint?: ControlPlaneEndpointProfileControlPlaneEndpoint;
	readonly count?: number;
	readonly linuxProfile?: LinuxProfileProperties;
	readonly maxCount?: number;
	readonly maxPods?: number;
	readonly minCount?: number;
	readonly mode?: "LB" | "System" | "User";
	readonly name?: string;
	readonly nodeImageVersion?: string;
	readonly nodeLabels?: AgentPoolProfileNodeLabels;
	readonly nodeTaints?: string[];
	readonly osType?: "Linux" | "Windows";
	readonly vmSize?: string;
}
export interface HttpProxyConfigOrHttpProxyConfigResponse {
	readonly httpProxy?: string;
	readonly httpsProxy?: string;
	readonly noProxy?: string[];
	readonly password?: string;
	readonly trustedCa?: string;
	readonly username?: string;
}
export interface HybridIdentityMetadataProperties {
	readonly identity?: ProvisionedClusterIdentity;
	readonly provisioningState?: string;
	readonly publicKey?: string;
	readonly resourceUid?: string;
}
export interface LinuxProfileProperties {
	readonly adminUsername?: string;
	readonly ssh?: LinuxProfilePropertiesSsh;
}
export interface LinuxProfilePropertiesSsh {
	readonly publicKeys?: LinuxProfilePropertiesSshPublicKeysItem[];
}
export interface LinuxProfilePropertiesSshPublicKeysItem {
	readonly keyData?: string;
}
export interface LoadBalancerProfile {
	readonly availabilityZones?: string[];
	readonly cloudProviderProfile?: CloudProviderProfile;
	readonly count?: number;
	readonly linuxProfile?: LinuxProfileProperties;
	readonly maxCount?: number;
	readonly maxPods?: number;
	readonly minCount?: number;
	readonly mode?: "LB" | "System" | "User";
	readonly name?: string;
	readonly nodeImageVersion?: string;
	readonly nodeLabels?: AgentPoolProfileNodeLabels;
	readonly nodeTaints?: string[];
	readonly osType?: "Linux" | "Windows";
	readonly vmSize?: string;
}
export interface NamedAgentPoolProfile {
	readonly availabilityZones?: string[];
	readonly cloudProviderProfile?: CloudProviderProfile;
	readonly count?: number;
	readonly maxCount?: number;
	readonly maxPods?: number;
	readonly minCount?: number;
	readonly mode?: "LB" | "System" | "User";
	readonly name?: string;
	readonly nodeImageVersion?: string;
	readonly nodeLabels?: AgentPoolProfileNodeLabels;
	readonly nodeTaints?: string[];
	readonly osType?: "Linux" | "Windows";
	readonly vmSize?: string;
}
export interface NetworkProfile {
	readonly dnsServiceIP?: string;
	readonly loadBalancerProfile?: LoadBalancerProfile;
	readonly loadBalancerSku?: "stacked-kube-vip" | "stacked-metallb" | "unmanaged" | "unstacked-haproxy";
	readonly networkPolicy?: "calico" | "flannel";
	readonly podCidr?: string;
	readonly podCidrs?: string[];
	readonly serviceCidr?: string;
	readonly serviceCidrs?: string[];
}
export interface ProvisionedClusterIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type: "None";
}
export interface ProvisionedClustersAllPropertiesOrProvisionedClustersResponseProperties {
	readonly aadProfile?: AADProfileOrAADProfileResponse;
	readonly addonProfiles?: ProvisionedClustersCommonPropertiesAddonProfiles;
	readonly agentPoolProfiles?: NamedAgentPoolProfile[];
	readonly cloudProviderProfile?: CloudProviderProfile;
	readonly controlPlane?: ControlPlaneProfile;
	readonly enableRbac?: boolean;
	readonly features?: ProvisionedClustersCommonPropertiesFeatures;
	readonly httpProxyConfig?: HttpProxyConfigOrHttpProxyConfigResponse;
	readonly kubernetesVersion?: string;
	readonly linuxProfile?: LinuxProfileProperties;
	readonly networkProfile?: NetworkProfile;
	readonly nodeResourceGroup?: string;
	readonly provisioningState?:
		| "Accepted"
		| "Canceled"
		| "Created"
		| "Deleting"
		| "Failed"
		| "InProgress"
		| "Succeeded"
		| "Updating";
	readonly status?: ProvisionedClustersCommonPropertiesStatus;
	readonly windowsProfile?: WindowsProfileOrWindowsProfileResponse;
}
export interface ProvisionedClustersCommonPropertiesAddonProfiles {
	readonly [key: string]: AddonProfiles;
}
export interface ProvisionedClustersCommonPropertiesFeatures {
	readonly arcAgentProfile?: ArcAgentProfile;
}
export interface ProvisionedClustersCommonPropertiesStatus {
	readonly addonStatus?: ProvisionedClustersCommonPropertiesStatusAddonStatus;
	readonly errorMessage?: string;
	readonly featuresStatus?: ProvisionedClustersCommonPropertiesStatusFeaturesStatus;
	readonly provisioningStatus?: ProvisionedClustersCommonPropertiesStatusProvisioningStatus;
}
export interface ProvisionedClustersCommonPropertiesStatusAddonStatus {
	readonly [key: string]: AddonStatus;
}
export interface ProvisionedClustersCommonPropertiesStatusFeaturesStatus {
	readonly arcAgentStatus?: ArcAgentStatus;
}
export interface ProvisionedClustersCommonPropertiesStatusProvisioningStatus {
	readonly error?: ProvisionedClustersCommonPropertiesStatusProvisioningStatusError;
	readonly operationId?: string;
	readonly phase?: string;
	readonly status?: string;
}
export interface ProvisionedClustersCommonPropertiesStatusProvisioningStatusError {
	readonly code?: string;
	readonly message?: string;
}
export interface ProvisionedClustersExtendedLocationOrProvisionedClustersResponseExtendedLocation {
	readonly name?: string;
	readonly type?: string;
}
export interface StorageSpacesExtendedLocation {
	readonly name?: string;
	readonly type?: string;
}
export interface StorageSpacesProperties {
	readonly hciStorageProfile?: StorageSpacesPropertiesHciStorageProfile;
	readonly provisioningState?:
		| "Accepted"
		| "Canceled"
		| "Created"
		| "Deleting"
		| "Failed"
		| "InProgress"
		| "Succeeded"
		| "Updating";
	readonly status?: StorageSpacesPropertiesStatus;
	readonly vmwareStorageProfile?: StorageSpacesPropertiesVmwareStorageProfile;
}
export interface StorageSpacesPropertiesHciStorageProfile {
	readonly mocGroup?: string;
	readonly mocLocation?: string;
	readonly mocStorageContainer?: string;
}
export interface StorageSpacesPropertiesStatus {
	readonly provisioningStatus?: StorageSpacesPropertiesStatusProvisioningStatus;
}
export interface StorageSpacesPropertiesStatusProvisioningStatus {
	readonly error?: StorageSpacesPropertiesStatusProvisioningStatusError;
	readonly operationId?: string;
	readonly phase?: string;
	readonly status?: string;
}
export interface StorageSpacesPropertiesStatusProvisioningStatusError {
	readonly code?: string;
	readonly message?: string;
}
export interface StorageSpacesPropertiesVmwareStorageProfile {
	readonly datacenter?: string;
	readonly datastore?: string;
	readonly folder?: string;
	readonly resourcePool?: string;
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
export interface VirtualNetworksExtendedLocation {
	readonly name?: string;
	readonly type?: string;
}
export interface VirtualNetworksProperties {
	readonly dhcpServers?: string[];
	readonly dnsServers?: string[];
	readonly gateway?: string;
	readonly infraVnetProfile?: VirtualNetworksPropertiesInfraVnetProfile;
	readonly ipAddressPrefix?: string;
	readonly provisioningState?:
		| "Accepted"
		| "Canceled"
		| "Created"
		| "Deleting"
		| "Failed"
		| "InProgress"
		| "Succeeded"
		| "Updating";
	readonly status?: VirtualNetworksPropertiesStatus;
	readonly vipPool?: VirtualNetworksPropertiesVipPoolItem[];
	readonly vlanID?: string;
	readonly vmipPool?: VirtualNetworksPropertiesVmipPoolItem[];
}
export interface VirtualNetworksPropertiesInfraVnetProfile {
	readonly hci?: VirtualNetworksPropertiesInfraVnetProfileHci;
	readonly kubevirt?: VirtualNetworksPropertiesInfraVnetProfileKubevirt;
	readonly vmware?: VirtualNetworksPropertiesInfraVnetProfileVmware;
}
export interface VirtualNetworksPropertiesInfraVnetProfileHci {
	readonly mocGroup?: string;
	readonly mocLocation?: string;
	readonly mocVnetName?: string;
}
export interface VirtualNetworksPropertiesInfraVnetProfileKubevirt {
	readonly vnetName?: string;
}
export interface VirtualNetworksPropertiesInfraVnetProfileVmware {
	readonly segmentName?: string;
}
export interface VirtualNetworksPropertiesStatus {
	readonly provisioningStatus?: VirtualNetworksPropertiesStatusProvisioningStatus;
}
export interface VirtualNetworksPropertiesStatusProvisioningStatus {
	readonly error?: VirtualNetworksPropertiesStatusProvisioningStatusError;
	readonly operationId?: string;
	readonly phase?: string;
	readonly status?: string;
}
export interface VirtualNetworksPropertiesStatusProvisioningStatusError {
	readonly code?: string;
	readonly message?: string;
}
export interface VirtualNetworksPropertiesVipPoolItem {
	readonly endIP?: string;
	readonly startIP?: string;
}
export interface VirtualNetworksPropertiesVmipPoolItem {
	readonly endIP?: string;
	readonly startIP?: string;
}
export interface WindowsProfileOrWindowsProfileResponse {
	readonly adminPassword?: string;
	readonly adminUsername?: string;
	readonly enableCsiProxy?: boolean;
	readonly licenseType?: "None" | "Windows_Server";
}
export default {
	provisionedClusters: provisionedClusters,
	"provisionedClusters/agentPools": provisionedClusters_agentPools,
	"provisionedClusters/hybridIdentityMetadata": provisionedClusters_hybridIdentityMetadata,
	storageSpaces: storageSpaces,
	virtualNetworks: virtualNetworks,
};
