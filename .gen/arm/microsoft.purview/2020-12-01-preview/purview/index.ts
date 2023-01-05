import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class accounts extends ArmResource<accountsComponentInputs> implements accountsComponentOutputs {
	constructor(entity: ADKEntity, options: accountsComponentInputs) {
		super(entity, options.name, "Microsoft.Purview/accounts", "2020-12-01-preview", options);
	}
	public readonly apiVersion: "2020-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Purview/accounts";
}
export interface accountsComponentOutputs {
	readonly apiVersion: "2020-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Purview/accounts";
}
export interface accountsComponentInputs {
	readonly identity?: Identity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: AccountProperties;
	readonly sku?: AccountSku;
	readonly tags?: TrackedResourceTags;
}
export class accounts_privateEndpointConnections
	extends ArmResource<accounts_privateEndpointConnectionsComponentInputs>
	implements accounts_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Purview/accounts/privateEndpointConnections", "2020-12-01-preview", options);
	}
	public readonly apiVersion: "2020-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Purview/accounts/privateEndpointConnections";
}
export interface accounts_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2020-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Purview/accounts/privateEndpointConnections";
}
export interface accounts_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
}
export function listkeys(resource: accounts): AccessKeys {
	if (resource.apiVersion !== "2020-12-01-preview") {
		throw new Error(`listkeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Purview/accounts") {
		throw new Error(`listkeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AccessKeys {
	readonly atlasKafkaPrimaryEndpoint?: string;
	readonly atlasKafkaSecondaryEndpoint?: string;
}
export interface AccountProperties {
	readonly cloudConnectors?: CloudConnectors;
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByObjectId?: string;
	readonly endpoints?: AccountPropertiesEndpoints;
	readonly friendlyName?: string;
	readonly managedResourceGroupName?: string;
	readonly managedResources?: AccountPropertiesManagedResources;
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly provisioningState?:
		| "Canceled"
		| "Creating"
		| "Deleting"
		| "Failed"
		| "Moving"
		| "SoftDeleted"
		| "SoftDeleting"
		| "Succeeded"
		| "Unknown";
	readonly publicNetworkAccess?: "Disabled" | "Enabled" | "NotSpecified";
	readonly systemData?: AccountPropertiesSystemData;
}
export interface AccountPropertiesEndpoints {
	readonly catalog?: string;
	readonly guardian?: string;
	readonly scan?: string;
}
export interface AccountPropertiesManagedResources {
	readonly eventHubNamespace?: string;
	readonly resourceGroup?: string;
	readonly storageAccount?: string;
}
export interface AccountPropertiesSystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface AccountSku {
	readonly capacity?: number;
	readonly name?: "Standard";
}
export interface CloudConnectors {
	readonly awsExternalId?: string;
}
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "SystemAssigned";
}
export interface PrivateEndpoint {
	readonly id?: string;
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
	readonly provisioningState?: string;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: "Approved" | "Disconnected" | "Pending" | "Rejected" | "Unknown";
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export default {
	accounts: accounts,
	"accounts/privateEndpointConnections": accounts_privateEndpointConnections,
};
