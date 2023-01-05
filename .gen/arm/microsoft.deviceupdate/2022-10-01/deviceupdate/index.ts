import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class accounts extends ArmResource<accountsComponentInputs> implements accountsComponentOutputs {
	constructor(entity: ADKEntity, options: accountsComponentInputs) {
		super(entity, options.name, "Microsoft.DeviceUpdate/accounts", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.DeviceUpdate/accounts";
}
export interface accountsComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.DeviceUpdate/accounts";
}
export interface accountsComponentInputs {
	readonly identity?: ManagedServiceIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties?: AccountProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class accounts_instances
	extends ArmResource<accounts_instancesComponentInputs>
	implements accounts_instancesComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_instancesComponentInputs) {
		super(entity, options.name, "Microsoft.DeviceUpdate/accounts/instances", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.DeviceUpdate/accounts/instances";
}
export interface accounts_instancesComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.DeviceUpdate/accounts/instances";
}
export interface accounts_instancesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: InstanceProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class accounts_privateEndpointConnectionProxies
	extends ArmResource<accounts_privateEndpointConnectionProxiesComponentInputs>
	implements accounts_privateEndpointConnectionProxiesComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_privateEndpointConnectionProxiesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DeviceUpdate/accounts/privateEndpointConnectionProxies",
			"2022-10-01",
			options,
		);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.DeviceUpdate/accounts/privateEndpointConnectionProxies";
}
export interface accounts_privateEndpointConnectionProxiesComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.DeviceUpdate/accounts/privateEndpointConnectionProxies";
}
export interface accounts_privateEndpointConnectionProxiesComponentInputs {
	readonly eTag?: string;
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProxyProperties;
	readonly remotePrivateEndpoint?: RemotePrivateEndpoint;
	readonly status?: string;
	readonly systemData?: SystemData;
}
export class accounts_privateEndpointConnections
	extends ArmResource<accounts_privateEndpointConnectionsComponentInputs>
	implements accounts_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.DeviceUpdate/accounts/privateEndpointConnections", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.DeviceUpdate/accounts/privateEndpointConnections";
}
export interface accounts_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.DeviceUpdate/accounts/privateEndpointConnections";
}
export interface accounts_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
}
export class accounts_privateLinkResources
	extends ArmResource<accounts_privateLinkResourcesComponentInputs>
	implements accounts_privateLinkResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_privateLinkResourcesComponentInputs) {
		super(entity, options.name, "Microsoft.DeviceUpdate/accounts/privateLinkResources", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.DeviceUpdate/accounts/privateLinkResources";
}
export interface accounts_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.DeviceUpdate/accounts/privateLinkResources";
}
export interface accounts_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: GroupInformationProperties;
	readonly systemData?: SystemData;
}
export interface AccountProperties {
	readonly hostName?: string;
	readonly locations?: Location[];
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly provisioningState?: "Accepted" | "Canceled" | "Creating" | "Deleted" | "Failed" | "Succeeded";
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
	readonly sku?: "Free" | "Standard";
}
export interface ConnectionDetails {
	readonly groupId?: string;
	readonly id?: string;
	readonly linkIdentifier?: string;
	readonly memberName?: string;
	readonly privateIpAddress?: string;
}
export interface DiagnosticStorageProperties {
	readonly authenticationType: "KeyBased";
	readonly connectionString?: string;
	readonly resourceId: string;
}
export interface GroupConnectivityInformation {
	readonly customerVisibleFqdns?: string[];
	readonly groupId?: string;
	readonly internalFqdn?: string;
	readonly memberName?: string;
	readonly privateLinkServiceArmRegion?: string;
	readonly redirectMapId?: string;
}
export interface GroupInformationProperties {
	readonly groupId?: string;
	readonly provisioningState?: "Canceled" | "Failed" | "Succeeded";
	readonly requiredMembers?: string[];
	readonly requiredZoneNames?: string[];
}
export interface InstanceProperties {
	readonly accountName?: string;
	readonly diagnosticStorageProperties?: DiagnosticStorageProperties;
	readonly enableDiagnostics?: boolean;
	readonly iotHubs?: IotHubSettings[];
	readonly provisioningState?: "Accepted" | "Canceled" | "Creating" | "Deleted" | "Failed" | "Succeeded";
}
export interface IotHubSettings {
	readonly resourceId: string;
}
export interface Location {
	readonly name?: string;
	readonly role?: "Failover" | "Primary";
}
export interface ManagedServiceIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type: "None" | "SystemAssigned" | "SystemAssigned,UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: UserAssignedIdentities;
}
export interface PrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointConnection {
	readonly id?: string;
	readonly name?: string;
	readonly properties: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
	readonly type?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly groupIds?: string[];
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded";
}
export interface PrivateEndpointConnectionProxyProperties {
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded";
}
export interface PrivateLinkServiceConnection {
	readonly groupIds?: string[];
	readonly name?: string;
	readonly requestMessage?: string;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: "Approved" | "Pending" | "Rejected";
}
export interface PrivateLinkServiceProxy {
	readonly groupConnectivityInformation?: GroupConnectivityInformation[];
	readonly id?: string;
	readonly remotePrivateEndpointConnection?: PrivateLinkServiceProxyRemotePrivateEndpointConnection;
	readonly remotePrivateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
}
export interface PrivateLinkServiceProxyRemotePrivateEndpointConnection {
	readonly id?: string;
}
export interface RemotePrivateEndpoint {
	readonly connectionDetails?: ConnectionDetails[];
	readonly id?: string;
	readonly immutableResourceId?: string;
	readonly immutableSubscriptionId?: string;
	readonly location?: string;
	readonly manualPrivateLinkServiceConnections?: PrivateLinkServiceConnection[];
	readonly privateLinkServiceConnections?: PrivateLinkServiceConnection[];
	readonly privateLinkServiceProxies?: PrivateLinkServiceProxy[];
	readonly vnetTrafficTag?: string;
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
export interface UserAssignedIdentities {
	readonly [key: string]: UserAssignedIdentity;
}
export interface UserAssignedIdentity {
	readonly clientId?: string;
	readonly principalId?: string;
}
export default {
	accounts: accounts,
	"accounts/instances": accounts_instances,
	"accounts/privateEndpointConnectionProxies": accounts_privateEndpointConnectionProxies,
	"accounts/privateEndpointConnections": accounts_privateEndpointConnections,
	"accounts/privateLinkResources": accounts_privateLinkResources,
};
