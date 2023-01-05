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
	readonly properties?: OpenShiftClusterProperties;
	readonly tags?: TrackedResourceTags;
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
	readonly ip?: string;
	readonly url?: string;
	readonly visibility?: "Private" | "Public";
}
export interface ClusterProfile {
	readonly domain?: string;
	readonly pullSecret?: string;
	readonly resourceGroupId?: string;
	readonly version?: string;
}
export interface ConsoleProfile {
	readonly url?: string;
}
export interface IngressProfile {
	readonly ip?: string;
	readonly name?: string;
	readonly visibility?: "Private" | "Public";
}
export interface MasterProfile {
	readonly subnetId?: string;
	readonly vmSize?: "Standard_D2s_v3" | "Standard_D4s_v3" | "Standard_D8s_v3";
}
export interface NetworkProfile {
	readonly podCidr?: string;
	readonly serviceCidr?: string;
}
export interface OpenShiftClusterCredentials {
	readonly kubeadminPassword?: string;
	readonly kubeadminUsername?: string;
}
export interface OpenShiftClusterProperties {
	readonly apiserverProfile?: APIServerProfile;
	readonly clusterProfile?: ClusterProfile;
	readonly consoleProfile?: ConsoleProfile;
	readonly ingressProfiles?: IngressProfile[];
	readonly masterProfile?: MasterProfile;
	readonly networkProfile?: NetworkProfile;
	readonly provisioningState?: "AdminUpdating" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly servicePrincipalProfile?: ServicePrincipalProfile;
	readonly workerProfiles?: WorkerProfile[];
}
export interface ServicePrincipalProfile {
	readonly clientId?: string;
	readonly clientSecret?: string;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface WorkerProfile {
	readonly count?: number;
	readonly diskSizeGB?: number;
	readonly name?: string;
	readonly subnetId?: string;
	readonly vmSize?: "Standard_D2s_v3" | "Standard_D4s_v3" | "Standard_D8s_v3";
}
export default {
	openShiftClusters: openShiftClusters,
};
