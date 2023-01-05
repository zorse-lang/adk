import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class connectedClusters
	extends ArmResource<connectedClustersComponentInputs>
	implements connectedClustersComponentOutputs
{
	constructor(entity: ADKEntity, options: connectedClustersComponentInputs) {
		super(entity, options.name, "Microsoft.Kubernetes/connectedClusters", "2021-03-01", options);
	}
	public readonly apiVersion: "2021-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Kubernetes/connectedClusters";
}
export interface connectedClustersComponentOutputs {
	readonly apiVersion: "2021-03-01";
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
export interface ConnectedClusterIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type: "None";
}
export interface ConnectedClusterProperties {
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
