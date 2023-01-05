import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class openShiftManagedClusters
	extends ArmResource<openShiftManagedClustersComponentInputs>
	implements openShiftManagedClustersComponentOutputs
{
	constructor(entity: ADKEntity, options: openShiftManagedClustersComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerService/openShiftManagedClusters", "2019-10-27-preview", options);
	}
	public readonly apiVersion: "2019-10-27-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerService/openShiftManagedClusters";
}
export interface openShiftManagedClustersComponentOutputs {
	readonly apiVersion: "2019-10-27-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerService/openShiftManagedClusters";
}
export interface openShiftManagedClustersComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly plan?: PurchasePlan;
	readonly properties?: OpenShiftManagedClusterProperties;
	readonly tags?: ResourceTags;
}
export interface NetworkProfile {
	readonly managementSubnetCidr?: string;
	readonly vnetCidr?: string;
	readonly vnetId?: string;
}
export interface OpenShiftAPIProperties {
	readonly privateApiServer?: boolean;
}
export interface OpenShiftManagedClusterAgentPoolProfile {
	readonly count: number;
	readonly name: string;
	readonly osType?: "Linux" | "Windows";
	readonly role?: "compute" | "infra";
	readonly subnetCidr?: string;
	readonly vmSize:
		| "Standard_D16s_v3"
		| "Standard_D2s_v3"
		| "Standard_D32s_v3"
		| "Standard_D4s_v3"
		| "Standard_D64s_v3"
		| "Standard_D8s_v3"
		| "Standard_DS12_v2"
		| "Standard_DS13_v2"
		| "Standard_DS14_v2"
		| "Standard_DS15_v2"
		| "Standard_DS4_v2"
		| "Standard_DS5_v2"
		| "Standard_E16s_v3"
		| "Standard_E20s_v3"
		| "Standard_E32s_v3"
		| "Standard_E4s_v3"
		| "Standard_E64s_v3"
		| "Standard_E8s_v3"
		| "Standard_F16s"
		| "Standard_F16s_v2"
		| "Standard_F32s_v2"
		| "Standard_F64s_v2"
		| "Standard_F72s_v2"
		| "Standard_F8s"
		| "Standard_F8s_v2"
		| "Standard_GS2"
		| "Standard_GS3"
		| "Standard_GS4"
		| "Standard_GS5"
		| "Standard_L16s"
		| "Standard_L32s"
		| "Standard_L4s"
		| "Standard_L8s";
}
export interface OpenShiftManagedClusterAuthProfile {
	readonly identityProviders?: OpenShiftManagedClusterIdentityProvider[];
}
export interface OpenShiftManagedClusterBaseIdentityProvider {}
export interface OpenShiftManagedClusterIdentityProvider {
	readonly name?: string;
	readonly provider?: OpenShiftManagedClusterBaseIdentityProvider;
}
export interface OpenShiftManagedClusterMasterPoolProfile {
	readonly apiProperties?: OpenShiftAPIProperties;
	readonly count: number;
	readonly subnetCidr?: string;
	readonly vmSize:
		| "Standard_D16s_v3"
		| "Standard_D2s_v3"
		| "Standard_D32s_v3"
		| "Standard_D4s_v3"
		| "Standard_D64s_v3"
		| "Standard_D8s_v3"
		| "Standard_DS12_v2"
		| "Standard_DS13_v2"
		| "Standard_DS14_v2"
		| "Standard_DS15_v2"
		| "Standard_DS4_v2"
		| "Standard_DS5_v2"
		| "Standard_E16s_v3"
		| "Standard_E20s_v3"
		| "Standard_E32s_v3"
		| "Standard_E4s_v3"
		| "Standard_E64s_v3"
		| "Standard_E8s_v3"
		| "Standard_F16s"
		| "Standard_F16s_v2"
		| "Standard_F32s_v2"
		| "Standard_F64s_v2"
		| "Standard_F72s_v2"
		| "Standard_F8s"
		| "Standard_F8s_v2"
		| "Standard_GS2"
		| "Standard_GS3"
		| "Standard_GS4"
		| "Standard_GS5"
		| "Standard_L16s"
		| "Standard_L32s"
		| "Standard_L4s"
		| "Standard_L8s";
}
export interface OpenShiftManagedClusterMonitorProfile {
	readonly enabled?: boolean;
	readonly workspaceResourceID?: string;
}
export interface OpenShiftManagedClusterProperties {
	readonly agentPoolProfiles?: OpenShiftManagedClusterAgentPoolProfile[];
	readonly authProfile?: OpenShiftManagedClusterAuthProfile;
	readonly clusterVersion?: string;
	readonly fqdn?: string;
	readonly masterPoolProfile?: OpenShiftManagedClusterMasterPoolProfile;
	readonly monitorProfile?: OpenShiftManagedClusterMonitorProfile;
	readonly networkProfile?: NetworkProfile;
	readonly openShiftVersion: string;
	readonly provisioningState?: string;
	readonly publicHostname?: string;
	readonly refreshCluster?: boolean;
	readonly routerProfiles?: OpenShiftRouterProfile[];
}
export interface OpenShiftRouterProfile {
	readonly fqdn?: string;
	readonly name?: string;
	readonly publicSubdomain?: string;
}
export interface PurchasePlan {
	readonly name?: string;
	readonly product?: string;
	readonly promotionCode?: string;
	readonly publisher?: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export default {
	openShiftManagedClusters: openShiftManagedClusters,
};
