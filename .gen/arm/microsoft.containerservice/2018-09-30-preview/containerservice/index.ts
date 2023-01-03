import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class openShiftManagedClusters
	extends ArmResource<openShiftManagedClustersComponentInputs>
	implements openShiftManagedClustersComponentOutputs
{
	constructor(entity: ADKEntity, options: openShiftManagedClustersComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerService/openShiftManagedClusters", "2018-09-30-preview", options);
	}
	public readonly apiVersion: "2018-09-30-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerService/openShiftManagedClusters";
}
export interface openShiftManagedClustersComponentOutputs {
	readonly apiVersion: "2018-09-30-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerService/openShiftManagedClusters";
}
export interface openShiftManagedClustersComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly plan?: PurchasePlan | undefined;
	readonly properties?: OpenShiftManagedClusterProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface NetworkProfile {
	readonly peerVnetId?: string | undefined;
	readonly vnetCidr?: string | undefined;
}
export interface OpenShiftManagedClusterAgentPoolProfile {
	readonly count: number;
	readonly name: string;
	readonly osType?: ("Linux" | "Windows") | undefined;
	readonly role?: ("compute" | "infra") | undefined;
	readonly subnetCidr?: string | undefined;
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
	readonly identityProviders?: OpenShiftManagedClusterIdentityProvider[] | undefined;
}
export interface OpenShiftManagedClusterBaseIdentityProvider {}
export interface OpenShiftManagedClusterIdentityProvider {
	readonly name?: string | undefined;
	readonly provider?: OpenShiftManagedClusterBaseIdentityProvider | undefined;
}
export interface OpenShiftManagedClusterMasterPoolProfile {
	readonly count: number;
	readonly name?: string | undefined;
	readonly osType?: ("Linux" | "Windows") | undefined;
	readonly subnetCidr?: string | undefined;
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
export interface OpenShiftManagedClusterProperties {
	readonly agentPoolProfiles?: OpenShiftManagedClusterAgentPoolProfile[] | undefined;
	readonly authProfile?: OpenShiftManagedClusterAuthProfile | undefined;
	readonly fqdn?: string | undefined;
	readonly masterPoolProfile?: OpenShiftManagedClusterMasterPoolProfile | undefined;
	readonly networkProfile?: NetworkProfile | undefined;
	readonly openShiftVersion: string;
	readonly provisioningState?: string | undefined;
	readonly publicHostname?: string | undefined;
	readonly routerProfiles?: OpenShiftRouterProfile[] | undefined;
}
export interface OpenShiftRouterProfile {
	readonly fqdn?: string | undefined;
	readonly name?: string | undefined;
	readonly publicSubdomain?: string | undefined;
}
export interface PurchasePlan {
	readonly name?: string | undefined;
	readonly product?: string | undefined;
	readonly promotionCode?: string | undefined;
	readonly publisher?: string | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	openShiftManagedClusters: openShiftManagedClusters,
};
