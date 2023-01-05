import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class signalR extends ArmResource<signalRComponentInputs> implements signalRComponentOutputs {
	constructor(entity: ADKEntity, options: signalRComponentInputs) {
		super(entity, options.name, "Microsoft.SignalRService/signalR", "2022-08-01-preview", options);
	}
	public readonly apiVersion: "2022-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SignalRService/signalR";
}
export interface signalRComponentOutputs {
	readonly apiVersion: "2022-08-01-preview";
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
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class signalR_customCertificates
	extends ArmResource<signalR_customCertificatesComponentInputs>
	implements signalR_customCertificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: signalR_customCertificatesComponentInputs) {
		super(entity, options.name, "Microsoft.SignalRService/signalR/customCertificates", "2022-08-01-preview", options);
	}
	public readonly apiVersion: "2022-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SignalRService/signalR/customCertificates";
}
export interface signalR_customCertificatesComponentOutputs {
	readonly apiVersion: "2022-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SignalRService/signalR/customCertificates";
}
export interface signalR_customCertificatesComponentInputs {
	readonly name: string;
	readonly properties: CustomCertificateProperties;
	readonly systemData?: SystemData;
}
export class signalR_customDomains
	extends ArmResource<signalR_customDomainsComponentInputs>
	implements signalR_customDomainsComponentOutputs
{
	constructor(entity: ADKEntity, options: signalR_customDomainsComponentInputs) {
		super(entity, options.name, "Microsoft.SignalRService/signalR/customDomains", "2022-08-01-preview", options);
	}
	public readonly apiVersion: "2022-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SignalRService/signalR/customDomains";
}
export interface signalR_customDomainsComponentOutputs {
	readonly apiVersion: "2022-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SignalRService/signalR/customDomains";
}
export interface signalR_customDomainsComponentInputs {
	readonly name: string;
	readonly properties: CustomDomainProperties;
	readonly systemData?: SystemData;
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
			"2022-08-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SignalRService/signalR/privateEndpointConnections";
}
export interface signalR_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2022-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SignalRService/signalR/privateEndpointConnections";
}
export interface signalR_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
}
export class signalR_sharedPrivateLinkResources
	extends ArmResource<signalR_sharedPrivateLinkResourcesComponentInputs>
	implements signalR_sharedPrivateLinkResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: signalR_sharedPrivateLinkResourcesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.SignalRService/signalR/sharedPrivateLinkResources",
			"2022-08-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SignalRService/signalR/sharedPrivateLinkResources";
}
export interface signalR_sharedPrivateLinkResourcesComponentOutputs {
	readonly apiVersion: "2022-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SignalRService/signalR/sharedPrivateLinkResources";
}
export interface signalR_sharedPrivateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: SharedPrivateLinkResourceProperties;
	readonly systemData?: SystemData;
}
export function listKeys(resource: signalR): SignalRKeys {
	if (resource.apiVersion !== "2022-08-01-preview") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.SignalRService/signalR") {
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
export interface ServerlessSettings {
	readonly connectionTimeoutInSeconds?: number;
}
export interface ServerlessUpstreamSettings {
	readonly templates?: UpstreamTemplate[];
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
export interface SignalRCorsSettings {
	readonly allowedOrigins?: string[];
}
export interface SignalRFeature {
	readonly flag: "EnableConnectivityLogs" | "EnableLiveTrace" | "EnableMessagingLogs" | "ServiceMode";
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
	readonly disableAadAuth?: boolean;
	readonly disableLocalAuth?: boolean;
	readonly externalIP?: string;
	readonly features?: SignalRFeature[];
}
export interface SignalRTlsSettings {
	readonly clientCertEnabled?: boolean;
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
	"signalR/customCertificates": signalR_customCertificates,
	"signalR/customDomains": signalR_customDomains,
	"signalR/privateEndpointConnections": signalR_privateEndpointConnections,
	"signalR/sharedPrivateLinkResources": signalR_sharedPrivateLinkResources,
};
