import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class connectedClusters
	extends ArmResource<connectedClustersComponentInputs>
	implements connectedClustersComponentOutputs
{
	constructor(entity: ADKEntity, options: connectedClustersComponentInputs) {
		super(entity, options.name, "Microsoft.Kubernetes/connectedClusters", "2022-10-01-preview", options);
	}
	public readonly apiVersion: "2022-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Kubernetes/connectedClusters";
}
export interface connectedClustersComponentOutputs {
	readonly apiVersion: "2022-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Kubernetes/connectedClusters";
}
export interface connectedClustersComponentInputs {
	readonly identity: ConnectedClusterIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties: ConnectedClusterProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export function listClusterUserCredential(
	resource: connectedClusters,
	input: ListClusterUserCredentialProperties,
): CredentialResults {
	if (resource.apiVersion !== "2022-10-01-preview") {
		throw new Error(`listClusterUserCredential is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Kubernetes/connectedClusters") {
		throw new Error(`listClusterUserCredential is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ConnectedClusterIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type: "None";
}
export interface ConnectedClusterProperties {
	readonly agentPublicKeyCertificate: string;
	readonly agentVersion?: string;
	readonly azureHybridBenefit?: "False" | "NotApplicable" | "True";
	readonly connectivityStatus?: "Connected" | "Connecting" | "Expired" | "Offline";
	readonly distribution?: string;
	readonly distributionVersion?: string;
	readonly infrastructure?: string;
	readonly kubernetesVersion?: string;
	readonly lastConnectivityTime?: string;
	readonly managedIdentityCertificateExpirationTime?: string;
	readonly miscellaneousProperties?: ConnectedClusterPropertiesMiscellaneousProperties;
	readonly offering?: string;
	readonly privateLinkScopeResourceId?: string;
	readonly privateLinkState?: "Disabled" | "Enabled";
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
export interface ConnectedClusterPropertiesMiscellaneousProperties {
	readonly [key: string]: string;
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
export interface ListClusterUserCredentialProperties {
	readonly authenticationMethod: "AAD" | "Token";
	readonly clientProxy: boolean;
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
export default {
	connectedClusters: connectedClusters,
};
