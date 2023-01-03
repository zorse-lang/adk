import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class configurationStores
	extends ArmResource<configurationStoresComponentInputs>
	implements configurationStoresComponentOutputs
{
	constructor(entity: ADKEntity, options: configurationStoresComponentInputs) {
		super(entity, options.name, "Microsoft.AppConfiguration/configurationStores", "2022-03-01-preview", options);
	}
	public readonly apiVersion: "2022-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppConfiguration/configurationStores";
}
export interface configurationStoresComponentOutputs {
	readonly apiVersion: "2022-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppConfiguration/configurationStores";
}
export interface configurationStoresComponentInputs {
	readonly identity?: ResourceIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: ConfigurationStoreProperties | undefined;
	readonly sku: Sku;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class configurationStores_keyValues
	extends ArmResource<configurationStores_keyValuesComponentInputs>
	implements configurationStores_keyValuesComponentOutputs
{
	constructor(entity: ADKEntity, options: configurationStores_keyValuesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.AppConfiguration/configurationStores/keyValues",
			"2022-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppConfiguration/configurationStores/keyValues";
}
export interface configurationStores_keyValuesComponentOutputs {
	readonly apiVersion: "2022-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppConfiguration/configurationStores/keyValues";
}
export interface configurationStores_keyValuesComponentInputs {
	readonly name: string;
	readonly properties?: KeyValueProperties | undefined;
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
			"2022-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppConfiguration/configurationStores/privateEndpointConnections";
}
export interface configurationStores_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2022-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppConfiguration/configurationStores/privateEndpointConnections";
}
export interface configurationStores_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
}
export class configurationStores_replicas
	extends ArmResource<configurationStores_replicasComponentInputs>
	implements configurationStores_replicasComponentOutputs
{
	constructor(entity: ADKEntity, options: configurationStores_replicasComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.AppConfiguration/configurationStores/replicas",
			"2022-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppConfiguration/configurationStores/replicas";
}
export interface configurationStores_replicasComponentOutputs {
	readonly apiVersion: "2022-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppConfiguration/configurationStores/replicas";
}
export interface configurationStores_replicasComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ReplicaProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export function listKeys(resource: configurationStores): ApiKeyListResult {
	if (resource.apiVersion !== "2022-03-01-preview") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.AppConfiguration/configurationStores") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
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
	readonly createMode?: "Default" | undefined;
	readonly creationDate?: string | undefined;
	readonly disableLocalAuth?: boolean | undefined;
	readonly enablePurgeProtection?: boolean | undefined;
	readonly encryption?: EncryptionProperties | undefined;
	readonly endpoint?: string | undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnectionReference[] | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
	readonly softDeleteRetentionInDays?: number | undefined;
}
export interface EncryptionProperties {
	readonly keyVaultProperties?: KeyVaultProperties | undefined;
}
export interface KeyValueProperties {
	readonly contentType?: string | undefined;
	readonly eTag?: string | undefined;
	readonly key?: string | undefined;
	readonly label?: string | undefined;
	readonly lastModified?: string | undefined;
	readonly locked?: boolean | undefined;
	readonly tags?: KeyValuePropertiesTags | undefined;
	readonly value?: string | undefined;
}
export interface KeyValuePropertiesTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface KeyVaultProperties {
	readonly identityClientId?: string | undefined;
	readonly keyIdentifier?: string | undefined;
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
export interface ReplicaProperties {
	readonly endpoint?: string | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded") | undefined;
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
export interface Sku {
	readonly name: string;
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
export interface UserIdentity {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export default {
	configurationStores: configurationStores,
	"configurationStores/keyValues": configurationStores_keyValues,
	"configurationStores/privateEndpointConnections": configurationStores_privateEndpointConnections,
	"configurationStores/replicas": configurationStores_replicas,
};
