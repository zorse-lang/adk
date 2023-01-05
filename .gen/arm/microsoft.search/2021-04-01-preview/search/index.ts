import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class searchServices extends ArmResource<searchServicesComponentInputs> implements searchServicesComponentOutputs {
	constructor(entity: ADKEntity, options: searchServicesComponentInputs) {
		super(entity, options.name, "Microsoft.Search/searchServices", "2021-04-01-preview", options);
	}
	public readonly apiVersion: "2021-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Search/searchServices";
}
export interface searchServicesComponentOutputs {
	readonly apiVersion: "2021-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Search/searchServices";
}
export interface searchServicesComponentInputs {
	readonly identity?: Identity;
	readonly location: string;
	readonly name: string;
	readonly properties?: SearchServiceProperties;
	readonly sku?: Sku;
	readonly tags?: TrackedResourceTags;
}
export class searchServices_privateEndpointConnections
	extends ArmResource<searchServices_privateEndpointConnectionsComponentInputs>
	implements searchServices_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: searchServices_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Search/searchServices/privateEndpointConnections",
			"2021-04-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Search/searchServices/privateEndpointConnections";
}
export interface searchServices_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Search/searchServices/privateEndpointConnections";
}
export interface searchServices_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
}
export class searchServices_sharedPrivateLinkResources
	extends ArmResource<searchServices_sharedPrivateLinkResourcesComponentInputs>
	implements searchServices_sharedPrivateLinkResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: searchServices_sharedPrivateLinkResourcesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Search/searchServices/sharedPrivateLinkResources",
			"2021-04-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Search/searchServices/sharedPrivateLinkResources";
}
export interface searchServices_sharedPrivateLinkResourcesComponentOutputs {
	readonly apiVersion: "2021-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Search/searchServices/sharedPrivateLinkResources";
}
export interface searchServices_sharedPrivateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: SharedPrivateLinkResourceProperties;
}
export function listAdminKeys(resource: searchServices): AdminKeyResult {
	if (resource.apiVersion !== "2021-04-01-preview") {
		throw new Error(`listAdminKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Search/searchServices") {
		throw new Error(`listAdminKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listQueryKeys(resource: searchServices): ListQueryKeysResult {
	if (resource.apiVersion !== "2021-04-01-preview") {
		throw new Error(`listQueryKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Search/searchServices") {
		throw new Error(`listQueryKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AdminKeyResult {
	readonly primaryKey?: string;
	readonly secondaryKey?: string;
}
export interface DataPlaneAadOrApiKeyAuthOption {
	readonly aadAuthFailureMode?: "http401WithBearerChallenge";
}
export interface DataPlaneAuthOptions {
	readonly aadOrApiKey?: DataPlaneAadOrApiKeyAuthOption;
	readonly apiKeyOnly?: any;
}
export interface EncryptionWithCmk {
	readonly encryptionComplianceStatus?: "Compliant";
	readonly enforcement?: "Disabled" | "Enabled";
}
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type: "None" | "SystemAssigned" | "SystemAssigned, UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: UserAssignedManagedIdentities;
}
export interface IpRule {
	readonly value?: string;
}
export interface ListQueryKeysResult {
	readonly nextLink?: string;
	readonly value?: QueryKey[];
}
export interface NetworkRuleSet {
	readonly bypass?: "AzurePortal" | "None";
	readonly ipRules?: IpRule[];
}
export interface PrivateEndpointConnection {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly type?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpointConnectionPropertiesPrivateEndpoint;
	readonly privateLinkServiceConnectionState?: PrivateEndpointConnectionPropertiesPrivateLinkServiceConnectionState;
}
export interface PrivateEndpointConnectionPropertiesPrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointConnectionPropertiesPrivateLinkServiceConnectionState {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: "Approved" | "Disconnected" | "Pending";
}
export interface QueryKey {
	readonly key?: string;
	readonly name?: string;
}
export interface SearchServiceProperties {
	readonly authOptions?: DataPlaneAuthOptions;
	readonly disabledDataExfiltrationOptions?: "All"[];
	readonly disableLocalAuth?: boolean;
	readonly encryptionWithCmk?: EncryptionWithCmk;
	readonly eTag?: string;
	readonly hostingMode?: "default";
	readonly networkRuleSet?: NetworkRuleSet;
	readonly partitionCount?: number;
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly provisioningState?: "failed" | "provisioning";
	readonly publicNetworkAccess?: "disabled" | "enabled";
	readonly replicaCount?: number;
	readonly semanticSearch?: "disabled" | "free" | "standard";
	readonly sharedPrivateLinkResources?: SharedPrivateLinkResource[];
	readonly status?: "degraded" | "deleting" | "disabled" | "error" | "provisioning" | "running";
	readonly statusDetails?: string;
}
export interface SharedPrivateLinkResource {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: SharedPrivateLinkResourceProperties;
	readonly type?: string;
}
export interface SharedPrivateLinkResourceProperties {
	readonly groupId?: string;
	readonly privateLinkResourceId?: string;
	readonly provisioningState?: "Deleting" | "Failed" | "Incomplete" | "Succeeded" | "Updating";
	readonly requestMessage?: string;
	readonly resourceRegion?: string;
	readonly status?: "Approved" | "Disconnected" | "Pending" | "Rejected";
}
export interface Sku {
	readonly name?:
		| "basic"
		| "free"
		| "standard"
		| "standard2"
		| "standard3"
		| "storage_optimized_l1"
		| "storage_optimized_l2";
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface UserAssignedManagedIdentities {
	readonly [key: string]: UserAssignedManagedIdentity;
}
export interface UserAssignedManagedIdentity {
	readonly clientId?: string;
	readonly principalId?: string;
}
export default {
	searchServices: searchServices,
	"searchServices/privateEndpointConnections": searchServices_privateEndpointConnections,
	"searchServices/sharedPrivateLinkResources": searchServices_sharedPrivateLinkResources,
};
