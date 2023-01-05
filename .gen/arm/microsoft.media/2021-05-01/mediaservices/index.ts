import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class mediaservices extends ArmResource<mediaservicesComponentInputs> implements mediaservicesComponentOutputs {
	constructor(entity: ADKEntity, options: mediaservicesComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaservices", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaservices";
}
export interface mediaservicesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaservices";
}
export interface mediaservicesComponentInputs {
	readonly identity?: MediaServiceIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties?: MediaServiceProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class mediaservices_privateEndpointConnections
	extends ArmResource<mediaservices_privateEndpointConnectionsComponentInputs>
	implements mediaservices_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaservices_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaservices/privateEndpointConnections", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaservices/privateEndpointConnections";
}
export interface mediaservices_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaservices/privateEndpointConnections";
}
export interface mediaservices_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
}
export class mediaservices_privateLinkResources
	extends ArmResource<mediaservices_privateLinkResourcesComponentInputs>
	implements mediaservices_privateLinkResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaservices_privateLinkResourcesComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaservices/privateLinkResources", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaservices/privateLinkResources";
}
export interface mediaservices_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaservices/privateLinkResources";
}
export interface mediaservices_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties;
}
export function listEdgePolicies(resource: mediaservices, input: ListEdgePoliciesInput): EdgePolicies {
	if (resource.apiVersion !== "2021-05-01") {
		throw new Error(`listEdgePolicies is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Media/mediaservices") {
		throw new Error(`listEdgePolicies is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AccessControl {
	readonly defaultAction?: "Allow" | "Deny";
	readonly ipAllowList?: string[];
}
export interface AccountEncryption {
	readonly keyVaultProperties?: KeyVaultProperties;
	readonly type: "CustomerKey" | "SystemKey";
}
export interface EdgePolicies {
	readonly usageDataCollectionPolicy?: EdgeUsageDataCollectionPolicy;
}
export interface EdgeUsageDataCollectionPolicy {
	readonly dataCollectionFrequency?: string;
	readonly dataReportingFrequency?: string;
	readonly eventHubDetails?: EdgeUsageDataEventHub;
	readonly maxAllowedUnreportedUsageDuration?: string;
}
export interface EdgeUsageDataEventHub {
	readonly name?: string;
	readonly namespace?: string;
	readonly token?: string;
}
export interface KeyDelivery {
	readonly accessControl?: AccessControl;
}
export interface KeyVaultProperties {
	readonly currentKeyIdentifier?: string;
	readonly keyIdentifier?: string;
}
export interface ListEdgePoliciesInput {
	readonly deviceId?: string;
}
export interface MediaServiceIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type: "None" | "SystemAssigned";
}
export interface MediaServiceProperties {
	readonly encryption?: AccountEncryption;
	readonly keyDelivery?: KeyDelivery;
	readonly mediaServiceId?: string;
	readonly storageAccounts?: StorageAccount[];
	readonly storageAuthentication?: "ManagedIdentity" | "System";
}
export interface PrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded";
}
export interface PrivateLinkResourceProperties {
	readonly groupId?: string;
	readonly requiredMembers?: string[];
	readonly requiredZoneNames?: string[];
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: "Approved" | "Pending" | "Rejected";
}
export interface StorageAccount {
	readonly id?: string;
	readonly type: "Primary" | "Secondary";
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
	mediaservices: mediaservices,
	"mediaservices/privateEndpointConnections": mediaservices_privateEndpointConnections,
	"mediaservices/privateLinkResources": mediaservices_privateLinkResources,
};
