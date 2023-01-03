import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class openShiftClusters
	extends ArmResource<openShiftClustersComponentInputs>
	implements openShiftClustersComponentOutputs
{
	constructor(entity: ADKEntity, options: openShiftClustersComponentInputs) {
		super(entity, options.name, "Microsoft.RedHatOpenShift/openShiftClusters", "2020-04-30", options);
	}
	public readonly apiVersion: "2020-04-30";
	public readonly id: string;
	public readonly type: "Microsoft.RedHatOpenShift/openShiftClusters";
}
export interface openShiftClustersComponentOutputs {
	readonly apiVersion: "2020-04-30";
	readonly id: string;
	readonly type: "Microsoft.RedHatOpenShift/openShiftClusters";
}
export interface openShiftClustersComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: OpenShiftClusterProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export function listCredentials(resource: openShiftClusters): OpenShiftClusterCredentials {
	if (resource.apiVersion !== "2020-04-30") {
		throw new Error(`listCredentials is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.RedHatOpenShift/openShiftClusters") {
		throw new Error(`listCredentials is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface APIServerProfile {
	readonly ip?: string | undefined;
	readonly url?: string | undefined;
	readonly visibility?: ("Private" | "Public") | undefined;
}
export interface ClusterProfile {
	readonly domain?: string | undefined;
	readonly pullSecret?: string | undefined;
	readonly resourceGroupId?: string | undefined;
	readonly version?: string | undefined;
}
export interface ConsoleProfile {
	readonly url?: string | undefined;
}
export interface IngressProfile {
	readonly ip?: string | undefined;
	readonly name?: string | undefined;
	readonly visibility?: ("Private" | "Public") | undefined;
}
export interface MasterProfile {
	readonly subnetId?: string | undefined;
	readonly vmSize?: ("Standard_D2s_v3" | "Standard_D4s_v3" | "Standard_D8s_v3") | undefined;
}
export interface NetworkProfile {
	readonly podCidr?: string | undefined;
	readonly serviceCidr?: string | undefined;
}
export interface OpenShiftClusterCredentials {
	readonly kubeadminPassword?: string | undefined;
	readonly kubeadminUsername?: string | undefined;
}
export interface OpenShiftClusterProperties {
	readonly apiserverProfile?: APIServerProfile | undefined;
	readonly clusterProfile?: ClusterProfile | undefined;
	readonly consoleProfile?: ConsoleProfile | undefined;
	readonly ingressProfiles?: IngressProfile[] | undefined;
	readonly masterProfile?: MasterProfile | undefined;
	readonly networkProfile?: NetworkProfile | undefined;
	readonly provisioningState?:
		| ("AdminUpdating" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating")
		| undefined;
	readonly servicePrincipalProfile?: ServicePrincipalProfile | undefined;
	readonly workerProfiles?: WorkerProfile[] | undefined;
}
export interface ServicePrincipalProfile {
	readonly clientId?: string | undefined;
	readonly clientSecret?: string | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface WorkerProfile {
	readonly count?: number | undefined;
	readonly diskSizeGB?: number | undefined;
	readonly name?: string | undefined;
	readonly subnetId?: string | undefined;
	readonly vmSize?: ("Standard_D2s_v3" | "Standard_D4s_v3" | "Standard_D8s_v3") | undefined;
}
export default {
	openShiftClusters: openShiftClusters,
};
