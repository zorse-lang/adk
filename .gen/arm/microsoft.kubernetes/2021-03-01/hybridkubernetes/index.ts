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
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly provisioningState?:
		| ("Accepted" | "Canceled" | "Deleting" | "Failed" | "Provisioning" | "Succeeded" | "Updating")
		| undefined;
	readonly totalCoreCount?: number | undefined;
	readonly totalNodeCount?: number | undefined;
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
