import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class configurationStores
	extends ArmResource<configurationStoresComponentInputs>
	implements configurationStoresComponentOutputs
{
	constructor(entity: ADKEntity, options: configurationStoresComponentInputs) {
		super(entity, options.name, "Microsoft.AppConfiguration/configurationStores", "2019-11-01-preview", options);
	}
	public readonly apiVersion: "2019-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppConfiguration/configurationStores";
}
export interface configurationStoresComponentOutputs {
	readonly apiVersion: "2019-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppConfiguration/configurationStores";
}
export interface configurationStoresComponentInputs {
	readonly identity?: ResourceIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties?: ConfigurationStoreProperties;
	readonly sku: Sku;
	readonly tags?: ResourceTags;
}
export class configurationStores_privateEndpointConnections
	extends ArmResource<configurationStores_privateEndpointConnectionsComponentInputs>
	implements configurationStores_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: configurationStores_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.AppConfiguration/configurationStores/privateEndpointConnections",
			"2019-11-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppConfiguration/configurationStores/privateEndpointConnections";
}
export interface configurationStores_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2019-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppConfiguration/configurationStores/privateEndpointConnections";
}
export interface configurationStores_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
}
export function listKeys(resource: configurationStores): ApiKeyListResult {
	if (resource.apiVersion !== "2019-11-01-preview") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.AppConfiguration/configurationStores") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listKeyValue(resource: configurationStores, input: ListKeyValueParameters): KeyValue {
	if (resource.apiVersion !== "2019-11-01-preview") {
		throw new Error(`listKeyValue is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.AppConfiguration/configurationStores") {
		throw new Error(`listKeyValue is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ApiKey {
	readonly connectionString?: string;
	readonly id?: string;
	readonly lastModified?: string;
	readonly name?: string;
	readonly readOnly?: boolean;
	readonly value?: string;
}
export interface ApiKeyListResult {
	readonly nextLink?: string;
	readonly value?: ApiKey[];
}
export interface ConfigurationStoreProperties {
	readonly creationDate?: string;
	readonly encryption?: EncryptionProperties;
	readonly endpoint?: string;
	readonly privateEndpointConnections?: PrivateEndpointConnectionReference[];
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
}
export interface EncryptionProperties {
	readonly keyVaultProperties?: KeyVaultProperties;
}
export interface KeyValue {
	readonly contentType?: string;
	readonly eTag?: string;
	readonly key?: string;
	readonly label?: string;
	readonly lastModified?: string;
	readonly locked?: boolean;
	readonly tags?: KeyValueTags;
	readonly value?: string;
}
export interface KeyValueTags {
	readonly [key: string]: string;
}
export interface KeyVaultProperties {
	readonly identityClientId?: string;
	readonly keyIdentifier?: string;
}
export interface ListKeyValueParameters {
	readonly key: string;
	readonly label?: string;
}
export interface PrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface PrivateEndpointConnectionReference {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly type?: string;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: "None" | "Recreate";
	readonly description?: string;
	readonly status?: "Approved" | "Disconnected" | "Pending" | "Rejected";
}
export interface ResourceIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned" | "SystemAssigned, UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: ResourceIdentityUserAssignedIdentities;
}
export interface ResourceIdentityUserAssignedIdentities {
	readonly [key: string]: UserIdentity;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface Sku {
	readonly name: string;
}
export interface UserIdentity {
	readonly clientId?: string;
	readonly principalId?: string;
}
export default {
	configurationStores: configurationStores,
	"configurationStores/privateEndpointConnections": configurationStores_privateEndpointConnections,
};
