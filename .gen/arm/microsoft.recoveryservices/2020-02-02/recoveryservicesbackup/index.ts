import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class vaults_privateEndpointConnections
	extends ArmResource<vaults_privateEndpointConnectionsComponentInputs>
	implements vaults_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.RecoveryServices/vaults/privateEndpointConnections", "2020-02-02", options);
	}
	public readonly apiVersion: "2020-02-02";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/privateEndpointConnections";
}
export interface vaults_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2020-02-02";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/privateEndpointConnections";
}
export interface vaults_privateEndpointConnectionsComponentInputs {
	readonly eTag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: PrivateEndpointConnection;
	readonly tags?: ResourceTags;
}
export interface PrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointConnection {
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
	readonly provisioningState?: "Deleting" | "Failed" | "Pending" | "Succeeded";
}
export interface PrivateLinkServiceConnectionState {
	readonly actionRequired?: string;
	readonly description?: string;
	readonly status?: "Approved" | "Disconnected" | "Pending" | "Rejected";
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export default {
	"vaults/privateEndpointConnections": vaults_privateEndpointConnections,
};
