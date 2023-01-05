import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class openShiftClusters
	extends ArmResource<openShiftClustersComponentInputs>
	implements openShiftClustersComponentOutputs
{
	constructor(entity: ADKEntity, options: openShiftClustersComponentInputs) {
		super(entity, options.name, "Microsoft.RedHatOpenShift/openShiftClusters", "2021-09-01-preview", options);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.RedHatOpenShift/openShiftClusters";
}
export interface openShiftClustersComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.RedHatOpenShift/openShiftClusters";
}
export interface openShiftClustersComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: OpenShiftClusterProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export function listAdminCredentials(resource: openShiftClusters): OpenShiftClusterAdminKubeconfig {
	if (resource.apiVersion !== "2021-09-01-preview") {
		throw new Error(`listAdminCredentials is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.RedHatOpenShift/openShiftClusters") {
		throw new Error(`listAdminCredentials is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listCredentials(resource: openShiftClusters): OpenShiftClusterCredentials {
	if (resource.apiVersion !== "2021-09-01-preview") {
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
	readonly diskEncryptionSetId?: string;
	readonly encryptionAtHost?: "Disabled" | "Enabled";
	readonly subnetId?: string;
	readonly vmSize?:
		| "Standard_D16as_v4"
		| "Standard_D16s_v3"
		| "Standard_D2s_v3"
		| "Standard_D32as_v4"
		| "Standard_D32s_v3"
		| "Standard_D4as_v4"
		| "Standard_D4s_v3"
		| "Standard_D8as_v4"
		| "Standard_D8s_v3"
		| "Standard_E16s_v3"
		| "Standard_E32s_v3"
		| "Standard_E4s_v3"
		| "Standard_E64i_v3"
		| "Standard_E64is_v3"
		| "Standard_E8s_v3"
		| "Standard_F16s_v2"
		| "Standard_F32s_v2"
		| "Standard_F4s_v2"
		| "Standard_F72s_v2"
		| "Standard_F8s_v2"
		| "Standard_G5"
		| "Standard_GS5"
		| "Standard_M128ms";
}
export interface NetworkProfile {
	readonly podCidr?: string;
	readonly serviceCidr?: string;
	readonly softwareDefinedNetwork?: "OVNKubernetes" | "OpenShiftSDN";
}
export interface OpenShiftClusterAdminKubeconfig {
	readonly kubeconfig?: string;
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
export interface WorkerProfile {
	readonly count?: number;
	readonly diskEncryptionSetId?: string;
	readonly diskSizeGB?: number;
	readonly encryptionAtHost?: "Disabled" | "Enabled";
	readonly name?: string;
	readonly subnetId?: string;
	readonly vmSize?:
		| "Standard_D16as_v4"
		| "Standard_D16s_v3"
		| "Standard_D2s_v3"
		| "Standard_D32as_v4"
		| "Standard_D32s_v3"
		| "Standard_D4as_v4"
		| "Standard_D4s_v3"
		| "Standard_D8as_v4"
		| "Standard_D8s_v3"
		| "Standard_E16s_v3"
		| "Standard_E32s_v3"
		| "Standard_E4s_v3"
		| "Standard_E64i_v3"
		| "Standard_E64is_v3"
		| "Standard_E8s_v3"
		| "Standard_F16s_v2"
		| "Standard_F32s_v2"
		| "Standard_F4s_v2"
		| "Standard_F72s_v2"
		| "Standard_F8s_v2"
		| "Standard_G5"
		| "Standard_GS5"
		| "Standard_M128ms";
}
export default {
	openShiftClusters: openShiftClusters,
};
