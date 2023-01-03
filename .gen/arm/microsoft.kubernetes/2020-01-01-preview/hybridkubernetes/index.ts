import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class connectedClusters
	extends ArmResource<connectedClustersComponentInputs>
	implements connectedClustersComponentOutputs
{
	constructor(entity: ADKEntity, options: connectedClustersComponentInputs) {
		super(entity, options.name, "Microsoft.Kubernetes/connectedClusters", "2020-01-01-preview", options);
	}
	public readonly apiVersion: "2020-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Kubernetes/connectedClusters";
}
export interface connectedClustersComponentOutputs {
	readonly apiVersion: "2020-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Kubernetes/connectedClusters";
}
export interface connectedClustersComponentInputs {
	readonly identity: ConnectedClusterIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties: ConnectedClusterProperties;
	readonly tags?: TrackedResourceTags | undefined;
}
export function listClusterUserCredentials(
	resource: connectedClusters,
	input: AuthenticationDetails,
): CredentialResults {
	if (resource.apiVersion !== "2020-01-01-preview") {
		throw new Error(`listClusterUserCredentials is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Kubernetes/connectedClusters") {
		throw new Error(`listClusterUserCredentials is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AuthenticationDetails {
	readonly authenticationMethod: "Token";
	readonly value: AuthenticationDetailsValue;
}
export interface AuthenticationDetailsValue {
	readonly token?: string | undefined;
}
export interface ConnectedClusterAADProfile {
	readonly clientAppId: string;
	readonly serverAppId: string;
	readonly tenantId: string;
}
export interface ConnectedClusterIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type: "None";
}
export interface ConnectedClusterProperties {
	readonly aadProfile: ConnectedClusterAADProfile;
	readonly agentPublicKeyCertificate: string;
	readonly agentVersion?: string | undefined;
	readonly connectivityStatus?: ("Connected" | "Connecting" | "Expired" | "Offline") | undefined;
	readonly distribution?: string | undefined;
	readonly infrastructure?: string | undefined;
	readonly kubernetesVersion?: string | undefined;
	readonly lastConnectivityTime?: string | undefined;
	readonly managedIdentityCertificateExpirationTime?: string | undefined;
	readonly offering?: string | undefined;
	readonly provisioningState?:
		| ("Accepted" | "Canceled" | "Deleting" | "Failed" | "Provisioning" | "Succeeded" | "Updating")
		| undefined;
	readonly totalCoreCount?: number | undefined;
	readonly totalNodeCount?: number | undefined;
}
export interface CredentialResult {
	readonly name?: string | undefined;
	readonly value?: any | undefined;
}
export interface CredentialResults {
	readonly hybridConnectionConfig?: HybridConnectionConfig | undefined;
	readonly kubeconfigs?: CredentialResult[] | undefined;
}
export interface HybridConnectionConfig {
	readonly expirationTime?: number | undefined;
	readonly hybridConnectionName?: string | undefined;
	readonly relay?: string | undefined;
	readonly token?: string | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	connectedClusters: connectedClusters,
};
