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
	readonly tags?: TrackedResourceTags;
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
	readonly token?: string;
}
export interface ConnectedClusterAADProfile {
	readonly clientAppId: string;
	readonly serverAppId: string;
	readonly tenantId: string;
}
export interface ConnectedClusterIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type: "None";
}
export interface ConnectedClusterProperties {
	readonly aadProfile: ConnectedClusterAADProfile;
	readonly agentPublicKeyCertificate: string;
	readonly agentVersion?: string;
	readonly connectivityStatus?: "Connected" | "Connecting" | "Expired" | "Offline";
	readonly distribution?: string;
	readonly infrastructure?: string;
	readonly kubernetesVersion?: string;
	readonly lastConnectivityTime?: string;
	readonly managedIdentityCertificateExpirationTime?: string;
	readonly offering?: string;
	readonly provisioningState?:
		| "Accepted"
		| "Canceled"
		| "Deleting"
		| "Failed"
		| "Provisioning"
		| "Succeeded"
		| "Updating";
	readonly totalCoreCount?: number;
	readonly totalNodeCount?: number;
}
export interface CredentialResult {
	readonly name?: string;
	readonly value?: any;
}
export interface CredentialResults {
	readonly hybridConnectionConfig?: HybridConnectionConfig;
	readonly kubeconfigs?: CredentialResult[];
}
export interface HybridConnectionConfig {
	readonly expirationTime?: number;
	readonly hybridConnectionName?: string;
	readonly relay?: string;
	readonly token?: string;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export default {
	connectedClusters: connectedClusters,
};
