import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class managedClusters
	extends ArmResource<managedClustersComponentInputs>
	implements managedClustersComponentOutputs
{
	constructor(entity: ADKEntity, options: managedClustersComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerService/managedClusters", "2019-06-01", options);
	}
	public readonly apiVersion: "2019-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerService/managedClusters";
}
export interface managedClustersComponentOutputs {
	readonly apiVersion: "2019-06-01";
	readonly id: string;
	readonly type: "Microsoft.ContainerService/managedClusters";
}
export interface managedClustersComponentInputs {
	readonly identity?: ManagedClusterIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties?: ManagedClusterProperties;
	readonly tags?: ResourceTags;
}
export class managedClusters_agentPools
	extends ArmResource<managedClusters_agentPoolsComponentInputs>
	implements managedClusters_agentPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: managedClusters_agentPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerService/managedClusters/agentPools", "2019-06-01", options);
	}
	public readonly apiVersion: "2019-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerService/managedClusters/agentPools";
}
export interface managedClusters_agentPoolsComponentOutputs {
	readonly apiVersion: "2019-06-01";
	readonly id: string;
	readonly type: "Microsoft.ContainerService/managedClusters/agentPools";
}
export interface managedClusters_agentPoolsComponentInputs {
	readonly name: string;
	readonly properties?: ManagedClusterAgentPoolProfileProperties;
}
export function listClusterAdminCredential(resource: managedClusters): CredentialResults {
	if (resource.apiVersion !== "2019-06-01") {
		throw new Error(`listClusterAdminCredential is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ContainerService/managedClusters") {
		throw new Error(`listClusterAdminCredential is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listClusterUserCredential(resource: managedClusters): CredentialResults {
	if (resource.apiVersion !== "2019-06-01") {
		throw new Error(`listClusterUserCredential is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ContainerService/managedClusters") {
		throw new Error(`listClusterUserCredential is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listCredential(resource: ArmResource): ManagedClusterAccessProfile {
	if (resource.apiVersion !== "2019-06-01") {
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
export interface ContainerServiceLinuxProfile {
	readonly adminUsername: string;
	readonly ssh: ContainerServiceSshConfiguration;
}
export interface ContainerServiceNetworkProfile {
	readonly dnsServiceIP?: string;
	readonly dockerBridgeCidr?: string;
	readonly loadBalancerSku?: "basic" | "standard";
	readonly networkPlugin?: "azure" | "kubenet";
	readonly networkPolicy?: "azure" | "calico";
	readonly podCidr?: string;
	readonly serviceCidr?: string;
}
export interface ContainerServiceSshConfiguration {
	readonly publicKeys: ContainerServiceSshPublicKey[];
}
export interface ContainerServiceSshPublicKey {
	readonly keyData: string;
}
export interface CredentialResult {
	readonly name?: string;
	readonly value?: any;
}
export interface CredentialResults {
	readonly kubeconfigs?: CredentialResult[];
}
export interface ManagedClusterAADProfile {
	readonly clientAppID: string;
	readonly serverAppID: string;
	readonly serverAppSecret?: string;
	readonly tenantID?: string;
}
export interface ManagedClusterAccessProfile {
	readonly id?: string;
	readonly location: string;
	readonly name?: string;
	readonly properties?: AccessProfile;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface ManagedClusterAddonProfile {
	readonly config?: ManagedClusterAddonProfileConfig;
	readonly enabled: boolean;
}
export interface ManagedClusterAddonProfileConfig {
	readonly [key: string]: string;
}
export interface ManagedClusterAgentPoolProfile {
	readonly availabilityZones?: string[];
	readonly count?: number;
	readonly enableAutoScaling?: boolean;
	readonly enableNodePublicIP?: boolean;
	readonly maxCount?: number;
	readonly maxPods?: number;
	readonly minCount?: number;
	readonly name: string;
	readonly nodeTaints?: string[];
	readonly orchestratorVersion?: string;
	readonly osDiskSizeGB?: number;
	readonly osType?: "Linux" | "Windows";
	readonly provisioningState?: string;
	readonly scaleSetEvictionPolicy?: "Deallocate" | "Delete";
	readonly scaleSetPriority?: "Low" | "Regular";
	readonly type?: "AvailabilitySet" | "VirtualMachineScaleSets";
	readonly vmSize?:
		| "Standard_A1"
		| "Standard_A10"
		| "Standard_A11"
		| "Standard_A1_v2"
		| "Standard_A2"
		| "Standard_A2_v2"
		| "Standard_A2m_v2"
		| "Standard_A3"
		| "Standard_A4"
		| "Standard_A4_v2"
		| "Standard_A4m_v2"
		| "Standard_A5"
		| "Standard_A6"
		| "Standard_A7"
		| "Standard_A8"
		| "Standard_A8_v2"
		| "Standard_A8m_v2"
		| "Standard_A9"
		| "Standard_B2ms"
		| "Standard_B2s"
		| "Standard_B4ms"
		| "Standard_B8ms"
		| "Standard_D1"
		| "Standard_D11"
		| "Standard_D11_v2"
		| "Standard_D11_v2_Promo"
		| "Standard_D12"
		| "Standard_D12_v2"
		| "Standard_D12_v2_Promo"
		| "Standard_D13"
		| "Standard_D13_v2"
		| "Standard_D13_v2_Promo"
		| "Standard_D14"
		| "Standard_D14_v2"
		| "Standard_D14_v2_Promo"
		| "Standard_D15_v2"
		| "Standard_D16_v3"
		| "Standard_D16s_v3"
		| "Standard_D1_v2"
		| "Standard_D2"
		| "Standard_D2_v2"
		| "Standard_D2_v2_Promo"
		| "Standard_D2_v3"
		| "Standard_D2s_v3"
		| "Standard_D3"
		| "Standard_D32_v3"
		| "Standard_D32s_v3"
		| "Standard_D3_v2"
		| "Standard_D3_v2_Promo"
		| "Standard_D4"
		| "Standard_D4_v2"
		| "Standard_D4_v2_Promo"
		| "Standard_D4_v3"
		| "Standard_D4s_v3"
		| "Standard_D5_v2"
		| "Standard_D5_v2_Promo"
		| "Standard_D64_v3"
		| "Standard_D64s_v3"
		| "Standard_D8_v3"
		| "Standard_D8s_v3"
		| "Standard_DS1"
		| "Standard_DS11"
		| "Standard_DS11_v2"
		| "Standard_DS11_v2_Promo"
		| "Standard_DS12"
		| "Standard_DS12_v2"
		| "Standard_DS12_v2_Promo"
		| "Standard_DS13"
		| "Standard_DS13-2_v2"
		| "Standard_DS13-4_v2"
		| "Standard_DS13_v2"
		| "Standard_DS13_v2_Promo"
		| "Standard_DS14"
		| "Standard_DS14-4_v2"
		| "Standard_DS14-8_v2"
		| "Standard_DS14_v2"
		| "Standard_DS14_v2_Promo"
		| "Standard_DS15_v2"
		| "Standard_DS1_v2"
		| "Standard_DS2"
		| "Standard_DS2_v2"
		| "Standard_DS2_v2_Promo"
		| "Standard_DS3"
		| "Standard_DS3_v2"
		| "Standard_DS3_v2_Promo"
		| "Standard_DS4"
		| "Standard_DS4_v2"
		| "Standard_DS4_v2_Promo"
		| "Standard_DS5_v2"
		| "Standard_DS5_v2_Promo"
		| "Standard_E16_v3"
		| "Standard_E16s_v3"
		| "Standard_E2_v3"
		| "Standard_E2s_v3"
		| "Standard_E32-16s_v3"
		| "Standard_E32-8s_v3"
		| "Standard_E32_v3"
		| "Standard_E32s_v3"
		| "Standard_E4_v3"
		| "Standard_E4s_v3"
		| "Standard_E64-16s_v3"
		| "Standard_E64-32s_v3"
		| "Standard_E64_v3"
		| "Standard_E64s_v3"
		| "Standard_E8_v3"
		| "Standard_E8s_v3"
		| "Standard_F1"
		| "Standard_F16"
		| "Standard_F16s"
		| "Standard_F16s_v2"
		| "Standard_F1s"
		| "Standard_F2"
		| "Standard_F2s"
		| "Standard_F2s_v2"
		| "Standard_F32s_v2"
		| "Standard_F4"
		| "Standard_F4s"
		| "Standard_F4s_v2"
		| "Standard_F64s_v2"
		| "Standard_F72s_v2"
		| "Standard_F8"
		| "Standard_F8s"
		| "Standard_F8s_v2"
		| "Standard_G1"
		| "Standard_G2"
		| "Standard_G3"
		| "Standard_G4"
		| "Standard_G5"
		| "Standard_GS1"
		| "Standard_GS2"
		| "Standard_GS3"
		| "Standard_GS4"
		| "Standard_GS4-4"
		| "Standard_GS4-8"
		| "Standard_GS5"
		| "Standard_GS5-16"
		| "Standard_GS5-8"
		| "Standard_H16"
		| "Standard_H16m"
		| "Standard_H16mr"
		| "Standard_H16r"
		| "Standard_H8"
		| "Standard_H8m"
		| "Standard_L16s"
		| "Standard_L32s"
		| "Standard_L4s"
		| "Standard_L8s"
		| "Standard_M128-32ms"
		| "Standard_M128-64ms"
		| "Standard_M128ms"
		| "Standard_M128s"
		| "Standard_M64-16ms"
		| "Standard_M64-32ms"
		| "Standard_M64ms"
		| "Standard_M64s"
		| "Standard_NC12"
		| "Standard_NC12s_v2"
		| "Standard_NC12s_v3"
		| "Standard_NC24"
		| "Standard_NC24r"
		| "Standard_NC24rs_v2"
		| "Standard_NC24rs_v3"
		| "Standard_NC24s_v2"
		| "Standard_NC24s_v3"
		| "Standard_NC6"
		| "Standard_NC6s_v2"
		| "Standard_NC6s_v3"
		| "Standard_ND12s"
		| "Standard_ND24rs"
		| "Standard_ND24s"
		| "Standard_ND6s"
		| "Standard_NV12"
		| "Standard_NV24"
		| "Standard_NV6";
	readonly vnetSubnetID?: string;
}
export interface ManagedClusterAgentPoolProfileProperties {
	readonly availabilityZones?: string[];
	readonly count?: number;
	readonly enableAutoScaling?: boolean;
	readonly enableNodePublicIP?: boolean;
	readonly maxCount?: number;
	readonly maxPods?: number;
	readonly minCount?: number;
	readonly nodeTaints?: string[];
	readonly orchestratorVersion?: string;
	readonly osDiskSizeGB?: number;
	readonly osType?: "Linux" | "Windows";
	readonly provisioningState?: string;
	readonly scaleSetEvictionPolicy?: "Deallocate" | "Delete";
	readonly scaleSetPriority?: "Low" | "Regular";
	readonly type?: "AvailabilitySet" | "VirtualMachineScaleSets";
	readonly vmSize?:
		| "Standard_A1"
		| "Standard_A10"
		| "Standard_A11"
		| "Standard_A1_v2"
		| "Standard_A2"
		| "Standard_A2_v2"
		| "Standard_A2m_v2"
		| "Standard_A3"
		| "Standard_A4"
		| "Standard_A4_v2"
		| "Standard_A4m_v2"
		| "Standard_A5"
		| "Standard_A6"
		| "Standard_A7"
		| "Standard_A8"
		| "Standard_A8_v2"
		| "Standard_A8m_v2"
		| "Standard_A9"
		| "Standard_B2ms"
		| "Standard_B2s"
		| "Standard_B4ms"
		| "Standard_B8ms"
		| "Standard_D1"
		| "Standard_D11"
		| "Standard_D11_v2"
		| "Standard_D11_v2_Promo"
		| "Standard_D12"
		| "Standard_D12_v2"
		| "Standard_D12_v2_Promo"
		| "Standard_D13"
		| "Standard_D13_v2"
		| "Standard_D13_v2_Promo"
		| "Standard_D14"
		| "Standard_D14_v2"
		| "Standard_D14_v2_Promo"
		| "Standard_D15_v2"
		| "Standard_D16_v3"
		| "Standard_D16s_v3"
		| "Standard_D1_v2"
		| "Standard_D2"
		| "Standard_D2_v2"
		| "Standard_D2_v2_Promo"
		| "Standard_D2_v3"
		| "Standard_D2s_v3"
		| "Standard_D3"
		| "Standard_D32_v3"
		| "Standard_D32s_v3"
		| "Standard_D3_v2"
		| "Standard_D3_v2_Promo"
		| "Standard_D4"
		| "Standard_D4_v2"
		| "Standard_D4_v2_Promo"
		| "Standard_D4_v3"
		| "Standard_D4s_v3"
		| "Standard_D5_v2"
		| "Standard_D5_v2_Promo"
		| "Standard_D64_v3"
		| "Standard_D64s_v3"
		| "Standard_D8_v3"
		| "Standard_D8s_v3"
		| "Standard_DS1"
		| "Standard_DS11"
		| "Standard_DS11_v2"
		| "Standard_DS11_v2_Promo"
		| "Standard_DS12"
		| "Standard_DS12_v2"
		| "Standard_DS12_v2_Promo"
		| "Standard_DS13"
		| "Standard_DS13-2_v2"
		| "Standard_DS13-4_v2"
		| "Standard_DS13_v2"
		| "Standard_DS13_v2_Promo"
		| "Standard_DS14"
		| "Standard_DS14-4_v2"
		| "Standard_DS14-8_v2"
		| "Standard_DS14_v2"
		| "Standard_DS14_v2_Promo"
		| "Standard_DS15_v2"
		| "Standard_DS1_v2"
		| "Standard_DS2"
		| "Standard_DS2_v2"
		| "Standard_DS2_v2_Promo"
		| "Standard_DS3"
		| "Standard_DS3_v2"
		| "Standard_DS3_v2_Promo"
		| "Standard_DS4"
		| "Standard_DS4_v2"
		| "Standard_DS4_v2_Promo"
		| "Standard_DS5_v2"
		| "Standard_DS5_v2_Promo"
		| "Standard_E16_v3"
		| "Standard_E16s_v3"
		| "Standard_E2_v3"
		| "Standard_E2s_v3"
		| "Standard_E32-16s_v3"
		| "Standard_E32-8s_v3"
		| "Standard_E32_v3"
		| "Standard_E32s_v3"
		| "Standard_E4_v3"
		| "Standard_E4s_v3"
		| "Standard_E64-16s_v3"
		| "Standard_E64-32s_v3"
		| "Standard_E64_v3"
		| "Standard_E64s_v3"
		| "Standard_E8_v3"
		| "Standard_E8s_v3"
		| "Standard_F1"
		| "Standard_F16"
		| "Standard_F16s"
		| "Standard_F16s_v2"
		| "Standard_F1s"
		| "Standard_F2"
		| "Standard_F2s"
		| "Standard_F2s_v2"
		| "Standard_F32s_v2"
		| "Standard_F4"
		| "Standard_F4s"
		| "Standard_F4s_v2"
		| "Standard_F64s_v2"
		| "Standard_F72s_v2"
		| "Standard_F8"
		| "Standard_F8s"
		| "Standard_F8s_v2"
		| "Standard_G1"
		| "Standard_G2"
		| "Standard_G3"
		| "Standard_G4"
		| "Standard_G5"
		| "Standard_GS1"
		| "Standard_GS2"
		| "Standard_GS3"
		| "Standard_GS4"
		| "Standard_GS4-4"
		| "Standard_GS4-8"
		| "Standard_GS5"
		| "Standard_GS5-16"
		| "Standard_GS5-8"
		| "Standard_H16"
		| "Standard_H16m"
		| "Standard_H16mr"
		| "Standard_H16r"
		| "Standard_H8"
		| "Standard_H8m"
		| "Standard_L16s"
		| "Standard_L32s"
		| "Standard_L4s"
		| "Standard_L8s"
		| "Standard_M128-32ms"
		| "Standard_M128-64ms"
		| "Standard_M128ms"
		| "Standard_M128s"
		| "Standard_M64-16ms"
		| "Standard_M64-32ms"
		| "Standard_M64ms"
		| "Standard_M64s"
		| "Standard_NC12"
		| "Standard_NC12s_v2"
		| "Standard_NC12s_v3"
		| "Standard_NC24"
		| "Standard_NC24r"
		| "Standard_NC24rs_v2"
		| "Standard_NC24rs_v3"
		| "Standard_NC24s_v2"
		| "Standard_NC24s_v3"
		| "Standard_NC6"
		| "Standard_NC6s_v2"
		| "Standard_NC6s_v3"
		| "Standard_ND12s"
		| "Standard_ND24rs"
		| "Standard_ND24s"
		| "Standard_ND6s"
		| "Standard_NV12"
		| "Standard_NV24"
		| "Standard_NV6";
	readonly vnetSubnetID?: string;
}
export interface ManagedClusterIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None";
}
export interface ManagedClusterProperties {
	readonly aadProfile?: ManagedClusterAADProfile;
	readonly addonProfiles?: ManagedClusterPropertiesAddonProfiles;
	readonly agentPoolProfiles?: ManagedClusterAgentPoolProfile[];
	readonly apiServerAuthorizedIPRanges?: string[];
	readonly dnsPrefix?: string;
	readonly enablePodSecurityPolicy?: boolean;
	readonly enableRBAC?: boolean;
	readonly fqdn?: string;
	readonly kubernetesVersion?: string;
	readonly linuxProfile?: ContainerServiceLinuxProfile;
	readonly maxAgentPools?: number;
	readonly networkProfile?: ContainerServiceNetworkProfile;
	readonly nodeResourceGroup?: string;
	readonly provisioningState?: string;
	readonly servicePrincipalProfile?: ManagedClusterServicePrincipalProfile;
	readonly windowsProfile?: ManagedClusterWindowsProfile;
}
export interface ManagedClusterPropertiesAddonProfiles {
	readonly [key: string]: ManagedClusterAddonProfile;
}
export interface ManagedClusterServicePrincipalProfile {
	readonly clientId: string;
	readonly secret?: string;
}
export interface ManagedClusterWindowsProfile {
	readonly adminPassword?: string;
	readonly adminUsername: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export default {
	managedClusters: managedClusters,
	"managedClusters/agentPools": managedClusters_agentPools,
};
