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
	readonly identity?: MediaServiceIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: MediaServiceProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
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
	readonly properties?: PrivateLinkResourceProperties | undefined;
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
	readonly defaultAction?: ("Allow" | "Deny") | undefined;
	readonly ipAllowList?: string[] | undefined;
}
export interface AccountEncryption {
	readonly keyVaultProperties?: KeyVaultProperties | undefined;
	readonly type: "CustomerKey" | "SystemKey";
}
export interface EdgePolicies {
	readonly usageDataCollectionPolicy?: EdgeUsageDataCollectionPolicy | undefined;
}
export interface EdgeUsageDataCollectionPolicy {
	readonly dataCollectionFrequency?: string | undefined;
	readonly dataReportingFrequency?: string | undefined;
	readonly eventHubDetails?: EdgeUsageDataEventHub | undefined;
	readonly maxAllowedUnreportedUsageDuration?: string | undefined;
}
export interface EdgeUsageDataEventHub {
	readonly name?: string | undefined;
	readonly namespace?: string | undefined;
	readonly token?: string | undefined;
}
export interface KeyDelivery {
	readonly accessControl?: AccessControl | undefined;
}
export interface KeyVaultProperties {
	readonly currentKeyIdentifier?: string | undefined;
	readonly keyIdentifier?: string | undefined;
}
export interface ListEdgePoliciesInput {
	readonly deviceId?: string | undefined;
}
export interface MediaServiceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type: "None" | "SystemAssigned";
}
export interface MediaServiceProperties {
	readonly encryption?: AccountEncryption | undefined;
	readonly keyDelivery?: KeyDelivery | undefined;
	readonly mediaServiceId?: string | undefined;
	readonly storageAccounts?: StorageAccount[] | undefined;
	readonly storageAuthentication?: ("ManagedIdentity" | "System") | undefined;
}
export interface PrivateEndpoint {
	readonly id?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint | undefined;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded") | undefined;
}
export interface PrivateLinkResourceProperties {
	readonly groupId?: string | undefined;
	readonly requiredMembers?: string[] | undefined;
	readonly requiredZoneNames?: string[] | undefined;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string | undefined;
	readonly description?: string | undefined;
	readonly status?: ("Approved" | "Pending" | "Rejected") | undefined;
}
export interface StorageAccount {
	readonly id?: string | undefined;
	readonly type: "Primary" | "Secondary";
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
	mediaservices: mediaservices,
	"mediaservices/privateEndpointConnections": mediaservices_privateEndpointConnections,
	"mediaservices/privateLinkResources": mediaservices_privateLinkResources,
};
