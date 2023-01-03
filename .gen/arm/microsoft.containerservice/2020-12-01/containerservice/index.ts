import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class managedClusters
	extends ArmResource<managedClustersComponentInputs>
	implements managedClustersComponentOutputs
{
	constructor(entity: ADKEntity, options: managedClustersComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerService/managedClusters", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerService/managedClusters";
}
export interface managedClustersComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ContainerService/managedClusters";
}
export interface managedClustersComponentInputs {
	readonly identity?: ManagedClusterIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: ManagedClusterProperties | undefined;
	readonly sku?: ManagedClusterSKU | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class managedClusters_agentPools
	extends ArmResource<managedClusters_agentPoolsComponentInputs>
	implements managedClusters_agentPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: managedClusters_agentPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerService/managedClusters/agentPools", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerService/managedClusters/agentPools";
}
export interface managedClusters_agentPoolsComponentOutputs {
	readonly apiVersion: "2020-12-01";
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
			"2020-12-01",
			options,
		);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerService/managedClusters/maintenanceConfigurations";
}
export interface managedClusters_maintenanceConfigurationsComponentOutputs {
	readonly apiVersion: "2020-12-01";
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
			"2020-12-01",
			options,
		);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerService/managedClusters/privateEndpointConnections";
}
export interface managedClusters_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ContainerService/managedClusters/privateEndpointConnections";
}
export interface managedClusters_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
}
export function listClusterAdminCredential(resource: managedClusters): CredentialResults {
	if (resource.apiVersion !== "2020-12-01") {
		throw new Error(`listClusterAdminCredential is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ContainerService/managedClusters") {
		throw new Error(`listClusterAdminCredential is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listClusterMonitoringUserCredential(resource: managedClusters): CredentialResults {
	if (resource.apiVersion !== "2020-12-01") {
		throw new Error(`listClusterMonitoringUserCredential is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ContainerService/managedClusters") {
		throw new Error(`listClusterMonitoringUserCredential is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listClusterUserCredential(resource: managedClusters): CredentialResults {
	if (resource.apiVersion !== "2020-12-01") {
		throw new Error(`listClusterUserCredential is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ContainerService/managedClusters") {
		throw new Error(`listClusterUserCredential is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listCredential(resource: ArmResource): ManagedClusterAccessProfile {
	if (resource.apiVersion !== "2020-12-01") {
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
export interface CloudError {
	readonly error?: CloudErrorBody | undefined;
}
export interface CloudErrorBody {
	readonly code?: string | undefined;
	readonly details?: CloudErrorBody[] | undefined;
	readonly message?: string | undefined;
	readonly target?: string | undefined;
}
export interface Components1Umhcm8SchemasManagedclusteridentityPropertiesUserassignedidentitiesAdditionalproperties {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export interface ComponentsQit0EtSchemasManagedclusterpropertiesPropertiesIdentityprofileAdditionalproperties {
	readonly clientId?: string | undefined;
	readonly objectId?: string | undefined;
	readonly resourceId?: string | undefined;
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
	readonly networkMode?: ("bridge" | "transparent") | undefined;
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
	readonly enableEncryptionAtHost?: boolean | undefined;
	readonly enableNodePublicIP?: boolean | undefined;
	readonly kubeletConfig?: KubeletConfig | undefined;
	readonly kubeletDiskType?: "OS" | undefined;
	readonly linuxOSConfig?: LinuxOSConfig | undefined;
	readonly maxCount?: number | undefined;
	readonly maxPods?: number | undefined;
	readonly minCount?: number | undefined;
	readonly mode?: ("System" | "User") | undefined;
	readonly name: string;
	readonly nodeImageVersion?: string | undefined;
	readonly nodeLabels?: ManagedClusterAgentPoolProfilePropertiesNodeLabels | undefined;
	readonly nodeTaints?: string[] | undefined;
	readonly orchestratorVersion?: string | undefined;
	readonly osDiskSizeGB?: number | undefined;
	readonly osDiskType?: ("Ephemeral" | "Managed") | undefined;
	readonly osType?: ("Linux" | "Windows") | undefined;
	readonly podSubnetID?: string | undefined;
	readonly powerState?: PowerState | undefined;
	readonly provisioningState?: string | undefined;
	readonly proximityPlacementGroupID?: string | undefined;
	readonly scaleSetEvictionPolicy?: ("Deallocate" | "Delete") | undefined;
	readonly scaleSetPriority?: ("Regular" | "Spot") | undefined;
	readonly spotMaxPrice?: number | undefined;
	readonly tags?: ManagedClusterAgentPoolProfilePropertiesTags | undefined;
	readonly type?: ("AvailabilitySet" | "VirtualMachineScaleSets") | undefined;
	readonly upgradeSettings?: AgentPoolUpgradeSettings | undefined;
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
	readonly enableEncryptionAtHost?: boolean | undefined;
	readonly enableNodePublicIP?: boolean | undefined;
	readonly kubeletConfig?: KubeletConfig | undefined;
	readonly kubeletDiskType?: "OS" | undefined;
	readonly linuxOSConfig?: LinuxOSConfig | undefined;
	readonly maxCount?: number | undefined;
	readonly maxPods?: number | undefined;
	readonly minCount?: number | undefined;
	readonly mode?: ("System" | "User") | undefined;
	readonly nodeImageVersion?: string | undefined;
	readonly nodeLabels?: ManagedClusterAgentPoolProfilePropertiesNodeLabels | undefined;
	readonly nodeTaints?: string[] | undefined;
	readonly orchestratorVersion?: string | undefined;
	readonly osDiskSizeGB?: number | undefined;
	readonly osDiskType?: ("Ephemeral" | "Managed") | undefined;
	readonly osType?: ("Linux" | "Windows") | undefined;
	readonly podSubnetID?: string | undefined;
	readonly powerState?: PowerState | undefined;
	readonly provisioningState?: string | undefined;
	readonly proximityPlacementGroupID?: string | undefined;
	readonly scaleSetEvictionPolicy?: ("Deallocate" | "Delete") | undefined;
	readonly scaleSetPriority?: ("Regular" | "Spot") | undefined;
	readonly spotMaxPrice?: number | undefined;
	readonly tags?: ManagedClusterAgentPoolProfilePropertiesTags | undefined;
	readonly type?: ("AvailabilitySet" | "VirtualMachineScaleSets") | undefined;
	readonly upgradeSettings?: AgentPoolUpgradeSettings | undefined;
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
	readonly privateDNSZone?: string | undefined;
}
export interface ManagedClusterAutoUpgradeProfile {
	readonly upgradeChannel?: ("none" | "patch" | "rapid" | "stable") | undefined;
}
export interface ManagedClusterIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned") | undefined;
	readonly userAssignedIdentities?: ManagedClusterIdentityUserAssignedIdentities | undefined;
}
export interface ManagedClusterIdentityUserAssignedIdentities {
	readonly "[ key: string ]"?:
		| Components1Umhcm8SchemasManagedclusteridentityPropertiesUserassignedidentitiesAdditionalproperties
		| undefined;
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
export interface ManagedClusterPodIdentity {
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
	readonly enabled?: boolean | undefined;
	readonly userAssignedIdentities?: ManagedClusterPodIdentity[] | undefined;
	readonly userAssignedIdentityExceptions?: ManagedClusterPodIdentityException[] | undefined;
}
export interface ManagedClusterPodIdentityProvisioningInfo {
	readonly error?: CloudError | undefined;
}
export interface ManagedClusterProperties {
	readonly aadProfile?: ManagedClusterAADProfile | undefined;
	readonly addonProfiles?: ManagedClusterPropertiesAddonProfiles | undefined;
	readonly agentPoolProfiles?: ManagedClusterAgentPoolProfile[] | undefined;
	readonly apiServerAccessProfile?: ManagedClusterAPIServerAccessProfile | undefined;
	readonly autoScalerProfile?: ManagedClusterPropertiesAutoScalerProfile | undefined;
	readonly autoUpgradeProfile?: ManagedClusterAutoUpgradeProfile | undefined;
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
	readonly podIdentityProfile?: ManagedClusterPodIdentityProfile | undefined;
	readonly powerState?: PowerState | undefined;
	readonly privateFQDN?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly servicePrincipalProfile?: ManagedClusterServicePrincipalProfile | undefined;
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
	readonly "[ key: string ]"?:
		| ComponentsQit0EtSchemasManagedclusterpropertiesPropertiesIdentityprofileAdditionalproperties
		| undefined;
}
export interface ManagedClusterServicePrincipalProfile {
	readonly clientId: string;
	readonly secret?: string | undefined;
}
export interface ManagedClusterSKU {
	readonly name?: "Basic" | undefined;
	readonly tier?: ("Free" | "Paid") | undefined;
}
export interface ManagedClusterWindowsProfile {
	readonly adminPassword?: string | undefined;
	readonly adminUsername: string;
	readonly licenseType?: ("None" | "Windows_Server") | undefined;
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
export interface PrivateLinkServiceConnectionState {
	readonly description?: string | undefined;
	readonly status?: ("Approved" | "Disconnected" | "Pending" | "Rejected") | undefined;
}
export interface ResourceReference {
	readonly id?: string | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
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
export interface UserAssignedIdentity {
	readonly clientId?: string | undefined;
	readonly objectId?: string | undefined;
	readonly resourceId?: string | undefined;
}
export default {
	managedClusters: managedClusters,
	"managedClusters/agentPools": managedClusters_agentPools,
	"managedClusters/maintenanceConfigurations": managedClusters_maintenanceConfigurations,
	"managedClusters/privateEndpointConnections": managedClusters_privateEndpointConnections,
};
