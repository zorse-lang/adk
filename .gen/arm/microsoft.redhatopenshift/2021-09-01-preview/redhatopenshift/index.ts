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
	readonly properties?: OpenShiftClusterProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly diskEncryptionSetId?: string | undefined;
	readonly encryptionAtHost?: ("Disabled" | "Enabled") | undefined;
	readonly subnetId?: string | undefined;
	readonly vmSize?:
		| (
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
				| "Standard_M128ms"
		  )
		| undefined;
}
export interface NetworkProfile {
	readonly podCidr?: string | undefined;
	readonly serviceCidr?: string | undefined;
	readonly softwareDefinedNetwork?: ("OVNKubernetes" | "OpenShiftSDN") | undefined;
}
export interface OpenShiftClusterAdminKubeconfig {
	readonly kubeconfig?: string | undefined;
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
export interface WorkerProfile {
	readonly count?: number | undefined;
	readonly diskEncryptionSetId?: string | undefined;
	readonly diskSizeGB?: number | undefined;
	readonly encryptionAtHost?: ("Disabled" | "Enabled") | undefined;
	readonly name?: string | undefined;
	readonly subnetId?: string | undefined;
	readonly vmSize?:
		| (
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
				| "Standard_M128ms"
		  )
		| undefined;
}
export default {
	openShiftClusters: openShiftClusters,
};
