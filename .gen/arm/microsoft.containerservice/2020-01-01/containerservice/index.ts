import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class managedClusters
	extends ArmResource<managedClustersComponentInputs>
	implements managedClustersComponentOutputs
{
	constructor(entity: ADKEntity, options: managedClustersComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerService/managedClusters", "2020-01-01", options);
	}
	public readonly apiVersion: "2020-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerService/managedClusters";
}
export interface managedClustersComponentOutputs {
	readonly apiVersion: "2020-01-01";
	readonly id: string;
	readonly type: "Microsoft.ContainerService/managedClusters";
}
export interface managedClustersComponentInputs {
	readonly identity?: ManagedClusterIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: ManagedClusterProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class managedClusters_agentPools
	extends ArmResource<managedClusters_agentPoolsComponentInputs>
	implements managedClusters_agentPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: managedClusters_agentPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerService/managedClusters/agentPools", "2020-01-01", options);
	}
	public readonly apiVersion: "2020-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerService/managedClusters/agentPools";
}
export interface managedClusters_agentPoolsComponentOutputs {
	readonly apiVersion: "2020-01-01";
	readonly id: string;
	readonly type: "Microsoft.ContainerService/managedClusters/agentPools";
}
export interface managedClusters_agentPoolsComponentInputs {
	readonly name: string;
	readonly properties?: ManagedClusterAgentPoolProfileProperties | undefined;
}
export function listClusterAdminCredential(resource: managedClusters): CredentialResults {
	if (resource.apiVersion !== "2020-01-01") {
		throw new Error(`listClusterAdminCredential is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ContainerService/managedClusters") {
		throw new Error(`listClusterAdminCredential is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listClusterMonitoringUserCredential(resource: managedClusters): CredentialResults {
	if (resource.apiVersion !== "2020-01-01") {
		throw new Error(`listClusterMonitoringUserCredential is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ContainerService/managedClusters") {
		throw new Error(`listClusterMonitoringUserCredential is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listClusterUserCredential(resource: managedClusters): CredentialResults {
	if (resource.apiVersion !== "2020-01-01") {
		throw new Error(`listClusterUserCredential is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ContainerService/managedClusters") {
		throw new Error(`listClusterUserCredential is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listCredential(resource: ArmResource): ManagedClusterAccessProfile {
	if (resource.apiVersion !== "2020-01-01") {
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
export interface ContainerServiceLinuxProfile {
	readonly adminUsername: string;
	readonly ssh: ContainerServiceSshConfiguration;
}
export interface ContainerServiceNetworkProfile {
	readonly dnsServiceIP?: string | undefined;
	readonly dockerBridgeCidr?: string | undefined;
	readonly loadBalancerProfile?: ManagedClusterLoadBalancerProfile | undefined;
	readonly loadBalancerSku?: ("basic" | "standard") | undefined;
	readonly networkPlugin?: ("azure" | "kubenet") | undefined;
	readonly networkPolicy?: ("azure" | "calico") | undefined;
	readonly outboundType?: ("loadBalancer" | "userDefinedRouting") | undefined;
	readonly podCidr?: string | undefined;
	readonly serviceCidr?: string | undefined;
}
export interface ContainerServiceSshConfiguration {
	readonly publicKeys: ContainerServiceSshPublicKey[];
}
export interface ContainerServiceSshPublicKey {
	readonly keyData: string;
}
export interface CredentialResult {
	readonly name?: string | undefined;
	readonly value?: any | undefined;
}
export interface CredentialResults {
	readonly kubeconfigs?: CredentialResult[] | undefined;
}
export interface ManagedClusterAADProfile {
	readonly clientAppID: string;
	readonly serverAppID: string;
	readonly serverAppSecret?: string | undefined;
	readonly tenantID?: string | undefined;
}
export interface ManagedClusterAccessProfile {
	readonly id?: string | undefined;
	readonly location: string;
	readonly name?: string | undefined;
	readonly properties?: AccessProfile | undefined;
	readonly tags?: ResourceTags | undefined;
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
	readonly enableAutoScaling?: boolean | undefined;
	readonly enableNodePublicIP?: boolean | undefined;
	readonly maxCount?: number | undefined;
	readonly maxPods?: number | undefined;
	readonly minCount?: number | undefined;
	readonly name: string;
	readonly nodeLabels?: ManagedClusterAgentPoolProfilePropertiesNodeLabels | undefined;
	readonly nodeTaints?: string[] | undefined;
	readonly orchestratorVersion?: string | undefined;
	readonly osDiskSizeGB?: number | undefined;
	readonly osType?: ("Linux" | "Windows") | undefined;
	readonly provisioningState?: string | undefined;
	readonly scaleSetEvictionPolicy?: ("Deallocate" | "Delete") | undefined;
	readonly scaleSetPriority?: ("Low" | "Regular") | undefined;
	readonly tags?: ManagedClusterAgentPoolProfilePropertiesTags | undefined;
	readonly type?: ("AvailabilitySet" | "VirtualMachineScaleSets") | undefined;
	readonly vmSize?:
		| (
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
				| "Standard_NV6"
		  )
		| undefined;
	readonly vnetSubnetID?: string | undefined;
}
export interface ManagedClusterAgentPoolProfileProperties {
	readonly availabilityZones?: string[] | undefined;
	readonly count?: number | undefined;
	readonly enableAutoScaling?: boolean | undefined;
	readonly enableNodePublicIP?: boolean | undefined;
	readonly maxCount?: number | undefined;
	readonly maxPods?: number | undefined;
	readonly minCount?: number | undefined;
	readonly nodeLabels?: ManagedClusterAgentPoolProfilePropertiesNodeLabels | undefined;
	readonly nodeTaints?: string[] | undefined;
	readonly orchestratorVersion?: string | undefined;
	readonly osDiskSizeGB?: number | undefined;
	readonly osType?: ("Linux" | "Windows") | undefined;
	readonly provisioningState?: string | undefined;
	readonly scaleSetEvictionPolicy?: ("Deallocate" | "Delete") | undefined;
	readonly scaleSetPriority?: ("Low" | "Regular") | undefined;
	readonly tags?: ManagedClusterAgentPoolProfilePropertiesTags | undefined;
	readonly type?: ("AvailabilitySet" | "VirtualMachineScaleSets") | undefined;
	readonly vmSize?:
		| (
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
				| "Standard_NV6"
		  )
		| undefined;
	readonly vnetSubnetID?: string | undefined;
}
export interface ManagedClusterAgentPoolProfilePropertiesNodeLabels {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ManagedClusterAgentPoolProfilePropertiesTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ManagedClusterAPIServerAccessProfile {
	readonly authorizedIPRanges?: string[] | undefined;
	readonly enablePrivateCluster?: boolean | undefined;
}
export interface ManagedClusterIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: "None" | undefined;
}
export interface ManagedClusterLoadBalancerProfile {
	readonly allocatedOutboundPorts?: number | undefined;
	readonly effectiveOutboundIPs?: ResourceReference[] | undefined;
	readonly idleTimeoutInMinutes?: number | undefined;
	readonly managedOutboundIPs?: ManagedClusterLoadBalancerProfileManagedOutboundIPs | undefined;
	readonly outboundIPPrefixes?: ManagedClusterLoadBalancerProfileOutboundIPPrefixes | undefined;
	readonly outboundIPs?: ManagedClusterLoadBalancerProfileOutboundIPs | undefined;
}
export interface ManagedClusterLoadBalancerProfileManagedOutboundIPs {
	readonly count?: number | undefined;
}
export interface ManagedClusterLoadBalancerProfileOutboundIPPrefixes {
	readonly publicIPPrefixes?: ResourceReference[] | undefined;
}
export interface ManagedClusterLoadBalancerProfileOutboundIPs {
	readonly publicIPs?: ResourceReference[] | undefined;
}
export interface ManagedClusterProperties {
	readonly aadProfile?: ManagedClusterAADProfile | undefined;
	readonly addonProfiles?: ManagedClusterPropertiesAddonProfiles | undefined;
	readonly agentPoolProfiles?: ManagedClusterAgentPoolProfile[] | undefined;
	readonly apiServerAccessProfile?: ManagedClusterAPIServerAccessProfile | undefined;
	readonly diskEncryptionSetID?: string | undefined;
	readonly dnsPrefix?: string | undefined;
	readonly enablePodSecurityPolicy?: boolean | undefined;
	readonly enableRBAC?: boolean | undefined;
	readonly fqdn?: string | undefined;
	readonly identityProfile?: ManagedClusterPropertiesIdentityProfile | undefined;
	readonly kubernetesVersion?: string | undefined;
	readonly linuxProfile?: ContainerServiceLinuxProfile | undefined;
	readonly maxAgentPools?: number | undefined;
	readonly networkProfile?: ContainerServiceNetworkProfile | undefined;
	readonly nodeResourceGroup?: string | undefined;
	readonly privateFQDN?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly servicePrincipalProfile?: ManagedClusterServicePrincipalProfile | undefined;
	readonly windowsProfile?: ManagedClusterWindowsProfile | undefined;
}
export interface ManagedClusterPropertiesAddonProfiles {
	readonly "[ key: string ]"?: ManagedClusterAddonProfile | undefined;
}
export interface ManagedClusterPropertiesIdentityProfile {
	readonly "[ key: string ]"?: ManagedClusterPropertiesIdentityProfileValue | undefined;
}
export interface ManagedClusterPropertiesIdentityProfileValue {
	readonly clientId?: string | undefined;
	readonly objectId?: string | undefined;
	readonly resourceId?: string | undefined;
}
export interface ManagedClusterServicePrincipalProfile {
	readonly clientId: string;
	readonly secret?: string | undefined;
}
export interface ManagedClusterWindowsProfile {
	readonly adminPassword?: string | undefined;
	readonly adminUsername: string;
}
export interface ResourceReference {
	readonly id?: string | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	managedClusters: managedClusters,
	"managedClusters/agentPools": managedClusters_agentPools,
};
