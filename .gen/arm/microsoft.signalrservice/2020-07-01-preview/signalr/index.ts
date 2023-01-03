import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class signalR extends ArmResource<signalRComponentInputs> implements signalRComponentOutputs {
	constructor(entity: ADKEntity, options: signalRComponentInputs) {
		super(entity, options.name, "Microsoft.SignalRService/signalR", "2020-07-01-preview", options);
	}
	public readonly apiVersion: "2020-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SignalRService/signalR";
}
export interface signalRComponentOutputs {
	readonly apiVersion: "2020-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SignalRService/signalR";
}
export interface signalRComponentInputs {
	readonly identity?: ManagedIdentity | undefined;
	readonly kind?: ("RawWebSockets" | "SignalR") | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: SignalRProperties | undefined;
	readonly sku?: ResourceSku | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class signalR_privateEndpointConnections
	extends ArmResource<signalR_privateEndpointConnectionsComponentInputs>
	implements signalR_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: signalR_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.SignalRService/signalR/privateEndpointConnections",
			"2020-07-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SignalRService/signalR/privateEndpointConnections";
}
export interface signalR_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2020-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SignalRService/signalR/privateEndpointConnections";
}
export interface signalR_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
}
export function listKeys(resource: signalR): SignalRKeys {
	if (resource.apiVersion !== "2020-07-01-preview") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.SignalRService/signalR") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ManagedIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned" | "UserAssigned") | undefined;
	readonly userAssignedIdentities?: ManagedIdentityUserAssignedIdentities | undefined;
}
export interface ManagedIdentitySettings {
	readonly resource?: string | undefined;
}
export interface ManagedIdentityUserAssignedIdentities {
	readonly "[ key: string ]"?: UserAssignedIdentityProperty | undefined;
}
export interface NetworkACL {
	readonly allow?: ("ClientConnection" | "RESTAPI" | "ServerConnection"[]) | undefined;
	readonly deny?: ("ClientConnection" | "RESTAPI" | "ServerConnection"[]) | undefined;
}
export interface PrivateEndpoint {
	readonly id?: string | undefined;
}
export interface PrivateEndpointACL {
	readonly allow?: ("ClientConnection" | "RESTAPI" | "ServerConnection"[]) | undefined;
	readonly deny?: ("ClientConnection" | "RESTAPI" | "ServerConnection"[]) | undefined;
	readonly name: string;
}
export interface PrivateEndpointConnection {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly type?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint | undefined;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState | undefined;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded" | "Unknown" | "Updating")
		| undefined;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string | undefined;
	readonly description?: string | undefined;
	readonly status?: ("Approved" | "Disconnected" | "Pending" | "Rejected") | undefined;
}
export interface ResourceSku {
	readonly capacity?: number | undefined;
}
export interface ServerlessUpstreamSettings {
	readonly templates?: UpstreamTemplate[] | undefined;
}
export interface SignalRCorsSettings {
	readonly allowedOrigins?: string[] | undefined;
}
export interface SignalRFeature {
	readonly flag: "EnableConnectivityLogs" | "EnableMessagingLogs" | "ServiceMode";
}
export interface SignalRFeatureProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SignalRKeys {
	readonly primaryConnectionString?: string | undefined;
	readonly primaryKey?: string | undefined;
	readonly secondaryConnectionString?: string | undefined;
	readonly secondaryKey?: string | undefined;
}
export interface SignalRNetworkACLs {
	readonly defaultAction?: ("Allow" | "Deny") | undefined;
	readonly privateEndpoints?: PrivateEndpointACL[] | undefined;
	readonly publicNetwork?: NetworkACL | undefined;
}
export interface SignalRProperties {
	readonly cors?: SignalRCorsSettings | undefined;
	readonly externalIP?: string | undefined;
	readonly features?: SignalRFeature[] | undefined;
}
export interface SignalRTlsSettings {
	readonly clientCertEnabled?: boolean | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface UpstreamAuthSettings {
	readonly managedIdentity?: ManagedIdentitySettings | undefined;
	readonly type?: ("ManagedIdentity" | "None") | undefined;
}
export interface UpstreamTemplate {
	readonly auth?: UpstreamAuthSettings | undefined;
	readonly categoryPattern?: string | undefined;
	readonly eventPattern?: string | undefined;
	readonly hubPattern?: string | undefined;
	readonly urlTemplate: string;
}
export interface UserAssignedIdentityProperty {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export default {
	signalR: signalR,
	"signalR/privateEndpointConnections": signalR_privateEndpointConnections,
};
