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
	readonly identity?: ManagedIdentity;
	readonly kind?: "RawWebSockets" | "SignalR";
	readonly location?: string;
	readonly name: string;
	readonly properties?: SignalRProperties;
	readonly sku?: ResourceSku;
	readonly tags?: TrackedResourceTags;
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
	readonly properties?: PrivateEndpointConnectionProperties;
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
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: ManagedIdentityUserAssignedIdentities;
}
export interface ManagedIdentitySettings {
	readonly resource?: string;
}
export interface ManagedIdentityUserAssignedIdentities {
	readonly [key: string]: UserAssignedIdentityProperty;
}
export interface NetworkACL {
	readonly allow?: "ClientConnection" | "RESTAPI" | "ServerConnection"[];
	readonly deny?: "ClientConnection" | "RESTAPI" | "ServerConnection"[];
}
export interface PrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointACL {
	readonly allow?: "ClientConnection" | "RESTAPI" | "ServerConnection"[];
	readonly deny?: "ClientConnection" | "RESTAPI" | "ServerConnection"[];
	readonly name: string;
}
export interface PrivateEndpointConnection {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly type?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
	readonly provisioningState?:
		| "Canceled"
		| "Creating"
		| "Deleting"
		| "Failed"
		| "Moving"
		| "Running"
		| "Succeeded"
		| "Unknown"
		| "Updating";
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: "Approved" | "Disconnected" | "Pending" | "Rejected";
}
export interface ResourceSku {
	readonly capacity?: number;
}
export interface ServerlessUpstreamSettings {
	readonly templates?: UpstreamTemplate[];
}
export interface SignalRCorsSettings {
	readonly allowedOrigins?: string[];
}
export interface SignalRFeature {
	readonly flag: "EnableConnectivityLogs" | "EnableMessagingLogs" | "ServiceMode";
}
export interface SignalRFeatureProperties {
	readonly [key: string]: string;
}
export interface SignalRKeys {
	readonly primaryConnectionString?: string;
	readonly primaryKey?: string;
	readonly secondaryConnectionString?: string;
	readonly secondaryKey?: string;
}
export interface SignalRNetworkACLs {
	readonly defaultAction?: "Allow" | "Deny";
	readonly privateEndpoints?: PrivateEndpointACL[];
	readonly publicNetwork?: NetworkACL;
}
export interface SignalRProperties {
	readonly cors?: SignalRCorsSettings;
	readonly externalIP?: string;
	readonly features?: SignalRFeature[];
}
export interface SignalRTlsSettings {
	readonly clientCertEnabled?: boolean;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface UpstreamAuthSettings {
	readonly managedIdentity?: ManagedIdentitySettings;
	readonly type?: "ManagedIdentity" | "None";
}
export interface UpstreamTemplate {
	readonly auth?: UpstreamAuthSettings;
	readonly categoryPattern?: string;
	readonly eventPattern?: string;
	readonly hubPattern?: string;
	readonly urlTemplate: string;
}
export interface UserAssignedIdentityProperty {
	readonly clientId?: string;
	readonly principalId?: string;
}
export default {
	signalR: signalR,
	"signalR/privateEndpointConnections": signalR_privateEndpointConnections,
};
