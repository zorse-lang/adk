import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class configurationStores
	extends ArmResource<configurationStoresComponentInputs>
	implements configurationStoresComponentOutputs
{
	constructor(entity: ADKEntity, options: configurationStoresComponentInputs) {
		super(entity, options.name, "Microsoft.AppConfiguration/configurationStores", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.AppConfiguration/configurationStores";
}
export interface configurationStoresComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.AppConfiguration/configurationStores";
}
export interface configurationStoresComponentInputs {
	readonly identity?: ResourceIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: ConfigurationStoreProperties | undefined;
	readonly sku: Sku;
	readonly tags?: ResourceTags | undefined;
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
			"2020-06-01",
			options,
		);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.AppConfiguration/configurationStores/privateEndpointConnections";
}
export interface configurationStores_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.AppConfiguration/configurationStores/privateEndpointConnections";
}
export interface configurationStores_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
}
export function listKeys(resource: configurationStores): ApiKeyListResult {
	if (resource.apiVersion !== "2020-06-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.AppConfiguration/configurationStores") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listKeyValue(resource: configurationStores, input: ListKeyValueParameters): KeyValue {
	if (resource.apiVersion !== "2020-06-01") {
		throw new Error(`listKeyValue is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.AppConfiguration/configurationStores") {
		throw new Error(`listKeyValue is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ApiKey {
	readonly connectionString?: string | undefined;
	readonly id?: string | undefined;
	readonly lastModified?: string | undefined;
	readonly name?: string | undefined;
	readonly readOnly?: boolean | undefined;
	readonly value?: string | undefined;
}
export interface ApiKeyListResult {
	readonly nextLink?: string | undefined;
	readonly value?: ApiKey[] | undefined;
}
export interface ConfigurationStoreProperties {
	readonly creationDate?: string | undefined;
	readonly encryption?: EncryptionProperties | undefined;
	readonly endpoint?: string | undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnectionReference[] | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
}
export interface EncryptionProperties {
	readonly keyVaultProperties?: KeyVaultProperties | undefined;
}
export interface KeyValue {
	readonly contentType?: string | undefined;
	readonly eTag?: string | undefined;
	readonly key?: string | undefined;
	readonly label?: string | undefined;
	readonly lastModified?: string | undefined;
	readonly locked?: boolean | undefined;
	readonly tags?: KeyValueTags | undefined;
	readonly value?: string | undefined;
}
export interface KeyValueTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface KeyVaultProperties {
	readonly identityClientId?: string | undefined;
	readonly keyIdentifier?: string | undefined;
}
export interface ListKeyValueParameters {
	readonly key: string;
	readonly label?: string | undefined;
}
export interface PrivateEndpoint {
	readonly id?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint | undefined;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface PrivateEndpointConnectionReference {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly type?: string | undefined;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: ("None" | "Recreate") | undefined;
	readonly description?: string | undefined;
	readonly status?: ("Approved" | "Disconnected" | "Pending" | "Rejected") | undefined;
}
export interface ResourceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned" | "SystemAssigned, UserAssigned" | "UserAssigned") | undefined;
	readonly userAssignedIdentities?: ResourceIdentityUserAssignedIdentities | undefined;
}
export interface ResourceIdentityUserAssignedIdentities {
	readonly "[ key: string ]"?: UserIdentity | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Sku {
	readonly name: string;
}
export interface UserIdentity {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export default {
	configurationStores: configurationStores,
	"configurationStores/privateEndpointConnections": configurationStores_privateEndpointConnections,
};