import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class configurationStores
	extends ArmResource<configurationStoresComponentInputs>
	implements configurationStoresComponentOutputs
{
	constructor(entity: ADKEntity, options: configurationStoresComponentInputs) {
		super(entity, options.name, "Microsoft.AppConfiguration/configurationStores", "2022-05-01", options);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.AppConfiguration/configurationStores";
}
export interface configurationStoresComponentOutputs {
	readonly apiVersion: "2022-05-01";
	readonly id: string;
	readonly type: "Microsoft.AppConfiguration/configurationStores";
}
export interface configurationStoresComponentInputs {
	readonly identity?: ResourceIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties?: ConfigurationStoreProperties;
	readonly sku: Sku;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class configurationStores_keyValues
	extends ArmResource<configurationStores_keyValuesComponentInputs>
	implements configurationStores_keyValuesComponentOutputs
{
	constructor(entity: ADKEntity, options: configurationStores_keyValuesComponentInputs) {
		super(entity, options.name, "Microsoft.AppConfiguration/configurationStores/keyValues", "2022-05-01", options);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.AppConfiguration/configurationStores/keyValues";
}
export interface configurationStores_keyValuesComponentOutputs {
	readonly apiVersion: "2022-05-01";
	readonly id: string;
	readonly type: "Microsoft.AppConfiguration/configurationStores/keyValues";
}
export interface configurationStores_keyValuesComponentInputs {
	readonly name: string;
	readonly properties?: KeyValueProperties;
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
			"2022-05-01",
			options,
		);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.AppConfiguration/configurationStores/privateEndpointConnections";
}
export interface configurationStores_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2022-05-01";
	readonly id: string;
	readonly type: "Microsoft.AppConfiguration/configurationStores/privateEndpointConnections";
}
export interface configurationStores_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
}
export function listKeys(resource: configurationStores): ApiKeyListResult {
	if (resource.apiVersion !== "2022-05-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.AppConfiguration/configurationStores") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
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
	readonly createMode?: "Default";
	readonly creationDate?: string;
	readonly disableLocalAuth?: boolean;
	readonly enablePurgeProtection?: boolean;
	readonly encryption?: EncryptionProperties;
	readonly endpoint?: string;
	readonly privateEndpointConnections?: PrivateEndpointConnectionReference[];
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
	readonly softDeleteRetentionInDays?: number;
}
export interface EncryptionProperties {
	readonly keyVaultProperties?: KeyVaultProperties;
}
export interface KeyValueProperties {
	readonly contentType?: string;
	readonly eTag?: string;
	readonly key?: string;
	readonly label?: string;
	readonly lastModified?: string;
	readonly locked?: boolean;
	readonly tags?: KeyValuePropertiesTags;
	readonly value?: string;
}
export interface KeyValuePropertiesTags {
	readonly [key: string]: string;
}
export interface KeyVaultProperties {
	readonly identityClientId?: string;
	readonly keyIdentifier?: string;
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
export interface Sku {
	readonly name: string;
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
export interface UserIdentity {
	readonly clientId?: string;
	readonly principalId?: string;
}
export default {
	configurationStores: configurationStores,
	"configurationStores/keyValues": configurationStores_keyValues,
	"configurationStores/privateEndpointConnections": configurationStores_privateEndpointConnections,
};
