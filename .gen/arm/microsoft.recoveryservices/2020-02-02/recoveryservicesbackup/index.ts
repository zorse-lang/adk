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
	readonly eTag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: PrivateEndpointConnection | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface PrivateEndpoint {
	readonly id?: string | undefined;
}
export interface PrivateEndpointConnection {
	readonly privateEndpoint?: PrivateEndpoint | undefined;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Pending" | "Succeeded") | undefined;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionRequired?: string | undefined;
	readonly description?: string | undefined;
	readonly status?: ("Approved" | "Disconnected" | "Pending" | "Rejected") | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	"vaults/privateEndpointConnections": vaults_privateEndpointConnections,
};
