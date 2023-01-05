import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class webPubSub extends ArmResource<webPubSubComponentInputs> implements webPubSubComponentOutputs {
	constructor(entity: ADKEntity, options: webPubSubComponentInputs) {
		super(entity, options.name, "Microsoft.SignalRService/webPubSub", "2022-08-01-preview", options);
	}
	public readonly apiVersion: "2022-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SignalRService/webPubSub";
}
export interface webPubSubComponentOutputs {
	readonly apiVersion: "2022-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SignalRService/webPubSub";
}
export interface webPubSubComponentInputs {
	readonly identity?: ManagedIdentity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: WebPubSubProperties;
	readonly sku?: ResourceSku;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class webPubSub_customCertificates
	extends ArmResource<webPubSub_customCertificatesComponentInputs>
	implements webPubSub_customCertificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: webPubSub_customCertificatesComponentInputs) {
		super(entity, options.name, "Microsoft.SignalRService/webPubSub/customCertificates", "2022-08-01-preview", options);
	}
	public readonly apiVersion: "2022-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SignalRService/webPubSub/customCertificates";
}
export interface webPubSub_customCertificatesComponentOutputs {
	readonly apiVersion: "2022-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SignalRService/webPubSub/customCertificates";
}
export interface webPubSub_customCertificatesComponentInputs {
	readonly name: string;
	readonly properties: CustomCertificateProperties;
	readonly systemData?: SystemData;
}
export class webPubSub_customDomains
	extends ArmResource<webPubSub_customDomainsComponentInputs>
	implements webPubSub_customDomainsComponentOutputs
{
	constructor(entity: ADKEntity, options: webPubSub_customDomainsComponentInputs) {
		super(entity, options.name, "Microsoft.SignalRService/webPubSub/customDomains", "2022-08-01-preview", options);
	}
	public readonly apiVersion: "2022-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SignalRService/webPubSub/customDomains";
}
export interface webPubSub_customDomainsComponentOutputs {
	readonly apiVersion: "2022-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SignalRService/webPubSub/customDomains";
}
export interface webPubSub_customDomainsComponentInputs {
	readonly name: string;
	readonly properties: CustomDomainProperties;
	readonly systemData?: SystemData;
}
export class webPubSub_hubs extends ArmResource<webPubSub_hubsComponentInputs> implements webPubSub_hubsComponentOutputs {
	constructor(entity: ADKEntity, options: webPubSub_hubsComponentInputs) {
		super(entity, options.name, "Microsoft.SignalRService/webPubSub/hubs", "2022-08-01-preview", options);
	}
	public readonly apiVersion: "2022-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SignalRService/webPubSub/hubs";
}
export interface webPubSub_hubsComponentOutputs {
	readonly apiVersion: "2022-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SignalRService/webPubSub/hubs";
}
export interface webPubSub_hubsComponentInputs {
	readonly name: string;
	readonly properties: WebPubSubHubProperties;
	readonly systemData?: SystemData;
}
export class webPubSub_privateEndpointConnections
	extends ArmResource<webPubSub_privateEndpointConnectionsComponentInputs>
	implements webPubSub_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: webPubSub_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.SignalRService/webPubSub/privateEndpointConnections",
			"2022-08-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SignalRService/webPubSub/privateEndpointConnections";
}
export interface webPubSub_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2022-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SignalRService/webPubSub/privateEndpointConnections";
}
export interface webPubSub_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
}
export class webPubSub_sharedPrivateLinkResources
	extends ArmResource<webPubSub_sharedPrivateLinkResourcesComponentInputs>
	implements webPubSub_sharedPrivateLinkResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: webPubSub_sharedPrivateLinkResourcesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.SignalRService/webPubSub/sharedPrivateLinkResources",
			"2022-08-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SignalRService/webPubSub/sharedPrivateLinkResources";
}
export interface webPubSub_sharedPrivateLinkResourcesComponentOutputs {
	readonly apiVersion: "2022-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SignalRService/webPubSub/sharedPrivateLinkResources";
}
export interface webPubSub_sharedPrivateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: SharedPrivateLinkResourceProperties;
	readonly systemData?: SystemData;
}
export function listKeys(resource: webPubSub): WebPubSubKeys {
	if (resource.apiVersion !== "2022-08-01-preview") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.SignalRService/webPubSub") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface CustomCertificateProperties {
	readonly keyVaultBaseUri: string;
	readonly keyVaultSecretName: string;
	readonly keyVaultSecretVersion?: string;
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
export interface CustomDomainProperties {
	readonly customCertificate: ResourceReference;
	readonly domainName: string;
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
export interface EventHandler {
	readonly auth?: UpstreamAuthSettings;
	readonly systemEvents?: string[];
	readonly urlTemplate: string;
	readonly userEventPattern?: string;
}
export interface EventListener {
	readonly endpoint: EventListenerEndpoint;
	readonly filter: EventListenerFilter;
}
export interface EventListenerEndpoint {}
export interface EventListenerFilter {}
export interface LiveTraceCategory {
	readonly enabled?: string;
	readonly name?: string;
}
export interface LiveTraceConfiguration {
	readonly categories?: LiveTraceCategory[];
	readonly enabled?: string;
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
	readonly allow?: "ClientConnection" | "RESTAPI" | "ServerConnection" | "Trace"[];
	readonly deny?: "ClientConnection" | "RESTAPI" | "ServerConnection" | "Trace"[];
}
export interface PrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointACL {
	readonly allow?: "ClientConnection" | "RESTAPI" | "ServerConnection" | "Trace"[];
	readonly deny?: "ClientConnection" | "RESTAPI" | "ServerConnection" | "Trace"[];
	readonly name: string;
}
export interface PrivateEndpointConnection {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
	readonly type?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly groupIds?: string[];
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
export interface ResourceLogCategory {
	readonly enabled?: string;
	readonly name?: string;
}
export interface ResourceLogConfiguration {
	readonly categories?: ResourceLogCategory[];
}
export interface ResourceReference {
	readonly id?: string;
}
export interface ResourceSku {
	readonly capacity?: number;
}
export interface SharedPrivateLinkResource {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: SharedPrivateLinkResourceProperties;
	readonly systemData?: SystemData;
	readonly type?: string;
}
export interface SharedPrivateLinkResourceProperties {
	readonly groupId: string;
	readonly privateLinkResourceId: string;
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
	readonly requestMessage?: string;
	readonly status?: "Approved" | "Disconnected" | "Pending" | "Rejected" | "Timeout";
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
export interface UpstreamAuthSettings {
	readonly managedIdentity?: ManagedIdentitySettings;
	readonly type?: "ManagedIdentity" | "None";
}
export interface UserAssignedIdentityProperty {
	readonly clientId?: string;
	readonly principalId?: string;
}
export interface WebPubSubHubProperties {
	readonly anonymousConnectPolicy?: string;
	readonly eventHandlers?: EventHandler[];
	readonly eventListeners?: EventListener[];
}
export interface WebPubSubKeys {
	readonly primaryConnectionString?: string;
	readonly primaryKey?: string;
	readonly secondaryConnectionString?: string;
	readonly secondaryKey?: string;
}
export interface WebPubSubNetworkACLs {
	readonly defaultAction?: "Allow" | "Deny";
	readonly privateEndpoints?: PrivateEndpointACL[];
	readonly publicNetwork?: NetworkACL;
}
export interface WebPubSubProperties {
	readonly disableAadAuth?: boolean;
	readonly disableLocalAuth?: boolean;
	readonly externalIP?: string;
	readonly hostName?: string;
	readonly hostNamePrefix?: string;
	readonly liveTraceConfiguration?: LiveTraceConfiguration;
	readonly networkACLs?: WebPubSubNetworkACLs;
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
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
	readonly publicNetworkAccess?: string;
	readonly publicPort?: number;
	readonly resourceLogConfiguration?: ResourceLogConfiguration;
	readonly serverPort?: number;
	readonly sharedPrivateLinkResources?: SharedPrivateLinkResource[];
	readonly tls?: WebPubSubTlsSettings;
	readonly version?: string;
}
export interface WebPubSubTlsSettings {
	readonly clientCertEnabled?: boolean;
}
export default {
	webPubSub: webPubSub,
	"webPubSub/customCertificates": webPubSub_customCertificates,
	"webPubSub/customDomains": webPubSub_customDomains,
	"webPubSub/hubs": webPubSub_hubs,
	"webPubSub/privateEndpointConnections": webPubSub_privateEndpointConnections,
	"webPubSub/sharedPrivateLinkResources": webPubSub_sharedPrivateLinkResources,
};
