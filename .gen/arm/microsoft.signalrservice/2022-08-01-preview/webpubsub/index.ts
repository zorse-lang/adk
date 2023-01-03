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
	readonly identity?: ManagedIdentity | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: WebPubSubProperties | undefined;
	readonly sku?: ResourceSku | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly systemData?: SystemData | undefined;
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
	readonly systemData?: SystemData | undefined;
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
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: SharedPrivateLinkResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly keyVaultSecretVersion?: string | undefined;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded" | "Unknown" | "Updating")
		| undefined;
}
export interface CustomDomainProperties {
	readonly customCertificate: ResourceReference;
	readonly domainName: string;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded" | "Unknown" | "Updating")
		| undefined;
}
export interface EventHandler {
	readonly auth?: UpstreamAuthSettings | undefined;
	readonly systemEvents?: string[] | undefined;
	readonly urlTemplate: string;
	readonly userEventPattern?: string | undefined;
}
export interface EventListener {
	readonly endpoint: EventListenerEndpoint;
	readonly filter: EventListenerFilter;
}
export interface EventListenerEndpoint {}
export interface EventListenerFilter {}
export interface LiveTraceCategory {
	readonly enabled?: string | undefined;
	readonly name?: string | undefined;
}
export interface LiveTraceConfiguration {
	readonly categories?: LiveTraceCategory[] | undefined;
	readonly enabled?: string | undefined;
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
	readonly allow?: ("ClientConnection" | "RESTAPI" | "ServerConnection" | "Trace"[]) | undefined;
	readonly deny?: ("ClientConnection" | "RESTAPI" | "ServerConnection" | "Trace"[]) | undefined;
}
export interface PrivateEndpoint {
	readonly id?: string | undefined;
}
export interface PrivateEndpointACL {
	readonly allow?: ("ClientConnection" | "RESTAPI" | "ServerConnection" | "Trace"[]) | undefined;
	readonly deny?: ("ClientConnection" | "RESTAPI" | "ServerConnection" | "Trace"[]) | undefined;
	readonly name: string;
}
export interface PrivateEndpointConnection {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly type?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly groupIds?: string[] | undefined;
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
export interface ResourceLogCategory {
	readonly enabled?: string | undefined;
	readonly name?: string | undefined;
}
export interface ResourceLogConfiguration {
	readonly categories?: ResourceLogCategory[] | undefined;
}
export interface ResourceReference {
	readonly id?: string | undefined;
}
export interface ResourceSku {
	readonly capacity?: number | undefined;
}
export interface SharedPrivateLinkResource {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: SharedPrivateLinkResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly type?: string | undefined;
}
export interface SharedPrivateLinkResourceProperties {
	readonly groupId: string;
	readonly privateLinkResourceId: string;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded" | "Unknown" | "Updating")
		| undefined;
	readonly requestMessage?: string | undefined;
	readonly status?: ("Approved" | "Disconnected" | "Pending" | "Rejected" | "Timeout") | undefined;
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
export interface UpstreamAuthSettings {
	readonly managedIdentity?: ManagedIdentitySettings | undefined;
	readonly type?: ("ManagedIdentity" | "None") | undefined;
}
export interface UserAssignedIdentityProperty {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export interface WebPubSubHubProperties {
	readonly anonymousConnectPolicy?: string | undefined;
	readonly eventHandlers?: EventHandler[] | undefined;
	readonly eventListeners?: EventListener[] | undefined;
}
export interface WebPubSubKeys {
	readonly primaryConnectionString?: string | undefined;
	readonly primaryKey?: string | undefined;
	readonly secondaryConnectionString?: string | undefined;
	readonly secondaryKey?: string | undefined;
}
export interface WebPubSubNetworkACLs {
	readonly defaultAction?: ("Allow" | "Deny") | undefined;
	readonly privateEndpoints?: PrivateEndpointACL[] | undefined;
	readonly publicNetwork?: NetworkACL | undefined;
}
export interface WebPubSubProperties {
	readonly disableAadAuth?: boolean | undefined;
	readonly disableLocalAuth?: boolean | undefined;
	readonly externalIP?: string | undefined;
	readonly hostName?: string | undefined;
	readonly hostNamePrefix?: string | undefined;
	readonly liveTraceConfiguration?: LiveTraceConfiguration | undefined;
	readonly networkACLs?: WebPubSubNetworkACLs | undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded" | "Unknown" | "Updating")
		| undefined;
	readonly publicNetworkAccess?: string | undefined;
	readonly publicPort?: number | undefined;
	readonly resourceLogConfiguration?: ResourceLogConfiguration | undefined;
	readonly serverPort?: number | undefined;
	readonly sharedPrivateLinkResources?: SharedPrivateLinkResource[] | undefined;
	readonly tls?: WebPubSubTlsSettings | undefined;
	readonly version?: string | undefined;
}
export interface WebPubSubTlsSettings {
	readonly clientCertEnabled?: boolean | undefined;
}
export default {
	webPubSub: webPubSub,
	"webPubSub/customCertificates": webPubSub_customCertificates,
	"webPubSub/customDomains": webPubSub_customDomains,
	"webPubSub/hubs": webPubSub_hubs,
	"webPubSub/privateEndpointConnections": webPubSub_privateEndpointConnections,
	"webPubSub/sharedPrivateLinkResources": webPubSub_sharedPrivateLinkResources,
};
