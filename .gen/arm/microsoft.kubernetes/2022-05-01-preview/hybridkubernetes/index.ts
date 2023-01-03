import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class connectedClusters
	extends ArmResource<connectedClustersComponentInputs>
	implements connectedClustersComponentOutputs
{
	constructor(entity: ADKEntity, options: connectedClustersComponentInputs) {
		super(entity, options.name, "Microsoft.Kubernetes/connectedClusters", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Kubernetes/connectedClusters";
}
export interface connectedClustersComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Kubernetes/connectedClusters";
}
export interface connectedClustersComponentInputs {
	readonly identity: ConnectedClusterIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties: ConnectedClusterProperties;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export function listClusterUserCredential(
	resource: connectedClusters,
	input: ListClusterUserCredentialProperties,
): CredentialResults {
	if (resource.apiVersion !== "2022-05-01-preview") {
		throw new Error(`listClusterUserCredential is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Kubernetes/connectedClusters") {
		throw new Error(`listClusterUserCredential is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ConnectedClusterIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type: "None";
}
export interface ConnectedClusterProperties {
	readonly agentPublicKeyCertificate: string;
	readonly agentVersion?: string | undefined;
	readonly connectivityStatus?: ("Connected" | "Connecting" | "Expired" | "Offline") | undefined;
	readonly distribution?: string | undefined;
	readonly infrastructure?: string | undefined;
	readonly kubernetesVersion?: string | undefined;
	readonly lastConnectivityTime?: string | undefined;
	readonly managedIdentityCertificateExpirationTime?: string | undefined;
	readonly offering?: string | undefined;
	readonly privateLinkScopeResourceId?: string | undefined;
	readonly privateLinkState?: ("Disabled" | "Enabled") | undefined;
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
export interface ListClusterUserCredentialProperties {
	readonly authenticationMethod: "AAD" | "Token";
	readonly clientProxy: boolean;
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
export default {
	connectedClusters: connectedClusters,
};
