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
	readonly identity?: Identity | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: AccountProperties | undefined;
	readonly sku?: AccountSku | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
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
	readonly atlasKafkaPrimaryEndpoint?: string | undefined;
	readonly atlasKafkaSecondaryEndpoint?: string | undefined;
}
export interface AccountProperties {
	readonly cloudConnectors?: CloudConnectors | undefined;
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByObjectId?: string | undefined;
	readonly endpoints?: AccountPropertiesEndpoints | undefined;
	readonly friendlyName?: string | undefined;
	readonly managedResourceGroupName?: string | undefined;
	readonly managedResources?: AccountPropertiesManagedResources | undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly provisioningState?:
		| (
				| "Canceled"
				| "Creating"
				| "Deleting"
				| "Failed"
				| "Moving"
				| "SoftDeleted"
				| "SoftDeleting"
				| "Succeeded"
				| "Unknown"
		  )
		| undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled" | "NotSpecified") | undefined;
	readonly systemData?: AccountPropertiesSystemData | undefined;
}
export interface AccountPropertiesEndpoints {
	readonly catalog?: string | undefined;
	readonly guardian?: string | undefined;
	readonly scan?: string | undefined;
}
export interface AccountPropertiesManagedResources {
	readonly eventHubNamespace?: string | undefined;
	readonly resourceGroup?: string | undefined;
	readonly storageAccount?: string | undefined;
}
export interface AccountPropertiesSystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface AccountSku {
	readonly capacity?: number | undefined;
	readonly name?: "Standard" | undefined;
}
export interface CloudConnectors {
	readonly awsExternalId?: string | undefined;
}
export interface Identity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: "SystemAssigned" | undefined;
}
export interface PrivateEndpoint {
	readonly id?: string | undefined;
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
	readonly provisioningState?: string | undefined;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string | undefined;
	readonly description?: string | undefined;
	readonly status?: ("Approved" | "Disconnected" | "Pending" | "Rejected" | "Unknown") | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	accounts: accounts,
	"accounts/privateEndpointConnections": accounts_privateEndpointConnections,
};
