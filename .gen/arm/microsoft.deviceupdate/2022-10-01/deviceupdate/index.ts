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
	readonly identity?: ManagedServiceIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: AccountProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly eTag?: string | undefined;
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProxyProperties | undefined;
	readonly remotePrivateEndpoint?: RemotePrivateEndpoint | undefined;
	readonly status?: string | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: GroupInformationProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface AccountProperties {
	readonly hostName?: string | undefined;
	readonly locations?: Location[] | undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly provisioningState?: ("Accepted" | "Canceled" | "Creating" | "Deleted" | "Failed" | "Succeeded") | undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
	readonly sku?: ("Free" | "Standard") | undefined;
}
export interface ConnectionDetails {
	readonly groupId?: string | undefined;
	readonly id?: string | undefined;
	readonly linkIdentifier?: string | undefined;
	readonly memberName?: string | undefined;
	readonly privateIpAddress?: string | undefined;
}
export interface DiagnosticStorageProperties {
	readonly authenticationType: "KeyBased";
	readonly connectionString?: string | undefined;
	readonly resourceId: string;
}
export interface GroupConnectivityInformation {
	readonly customerVisibleFqdns?: string[] | undefined;
	readonly groupId?: string | undefined;
	readonly internalFqdn?: string | undefined;
	readonly memberName?: string | undefined;
	readonly privateLinkServiceArmRegion?: string | undefined;
	readonly redirectMapId?: string | undefined;
}
export interface GroupInformationProperties {
	readonly groupId?: string | undefined;
	readonly provisioningState?: ("Canceled" | "Failed" | "Succeeded") | undefined;
	readonly requiredMembers?: string[] | undefined;
	readonly requiredZoneNames?: string[] | undefined;
}
export interface InstanceProperties {
	readonly accountName?: string | undefined;
	readonly diagnosticStorageProperties?: DiagnosticStorageProperties | undefined;
	readonly enableDiagnostics?: boolean | undefined;
	readonly iotHubs?: IotHubSettings[] | undefined;
	readonly provisioningState?: ("Accepted" | "Canceled" | "Creating" | "Deleted" | "Failed" | "Succeeded") | undefined;
}
export interface IotHubSettings {
	readonly resourceId: string;
}
export interface Location {
	readonly name?: string | undefined;
	readonly role?: ("Failover" | "Primary") | undefined;
}
export interface ManagedServiceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type: "None" | "SystemAssigned" | "SystemAssigned,UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: UserAssignedIdentities | undefined;
}
export interface PrivateEndpoint {
	readonly id?: string | undefined;
}
export interface PrivateEndpointConnection {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData | undefined;
	readonly type?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly groupIds?: string[] | undefined;
	readonly privateEndpoint?: PrivateEndpoint | undefined;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded") | undefined;
}
export interface PrivateEndpointConnectionProxyProperties {
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded") | undefined;
}
export interface PrivateLinkServiceConnection {
	readonly groupIds?: string[] | undefined;
	readonly name?: string | undefined;
	readonly requestMessage?: string | undefined;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string | undefined;
	readonly description?: string | undefined;
	readonly status?: ("Approved" | "Pending" | "Rejected") | undefined;
}
export interface PrivateLinkServiceProxy {
	readonly groupConnectivityInformation?: GroupConnectivityInformation[] | undefined;
	readonly id?: string | undefined;
	readonly remotePrivateEndpointConnection?: PrivateLinkServiceProxyRemotePrivateEndpointConnection | undefined;
	readonly remotePrivateLinkServiceConnectionState?: PrivateLinkServiceConnectionState | undefined;
}
export interface PrivateLinkServiceProxyRemotePrivateEndpointConnection {
	readonly id?: string | undefined;
}
export interface RemotePrivateEndpoint {
	readonly connectionDetails?: ConnectionDetails[] | undefined;
	readonly id?: string | undefined;
	readonly immutableResourceId?: string | undefined;
	readonly immutableSubscriptionId?: string | undefined;
	readonly location?: string | undefined;
	readonly manualPrivateLinkServiceConnections?: PrivateLinkServiceConnection[] | undefined;
	readonly privateLinkServiceConnections?: PrivateLinkServiceConnection[] | undefined;
	readonly privateLinkServiceProxies?: PrivateLinkServiceProxy[] | undefined;
	readonly vnetTrafficTag?: string | undefined;
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
export interface UserAssignedIdentities {
	readonly "[ key: string ]"?: UserAssignedIdentity | undefined;
}
export interface UserAssignedIdentity {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export default {
	accounts: accounts,
	"accounts/instances": accounts_instances,
	"accounts/privateEndpointConnectionProxies": accounts_privateEndpointConnectionProxies,
	"accounts/privateEndpointConnections": accounts_privateEndpointConnections,
	"accounts/privateLinkResources": accounts_privateLinkResources,
};
