import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class digitalTwinsInstances
	extends ArmResource<digitalTwinsInstancesComponentInputs>
	implements digitalTwinsInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: digitalTwinsInstancesComponentInputs) {
		super(entity, options.name, "Microsoft.DigitalTwins/digitalTwinsInstances", "2022-10-31", options);
	}
	public readonly apiVersion: "2022-10-31";
	public readonly id: string;
	public readonly type: "Microsoft.DigitalTwins/digitalTwinsInstances";
}
export interface digitalTwinsInstancesComponentOutputs {
	readonly apiVersion: "2022-10-31";
	readonly id: string;
	readonly type: "Microsoft.DigitalTwins/digitalTwinsInstances";
}
export interface digitalTwinsInstancesComponentInputs {
	readonly identity?: DigitalTwinsIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties?: DigitalTwinsProperties;
	readonly systemData?: SystemData;
	readonly tags?: DigitalTwinsResourceTags;
}
export class digitalTwinsInstances_endpoints
	extends ArmResource<digitalTwinsInstances_endpointsComponentInputs>
	implements digitalTwinsInstances_endpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: digitalTwinsInstances_endpointsComponentInputs) {
		super(entity, options.name, "Microsoft.DigitalTwins/digitalTwinsInstances/endpoints", "2022-10-31", options);
	}
	public readonly apiVersion: "2022-10-31";
	public readonly id: string;
	public readonly type: "Microsoft.DigitalTwins/digitalTwinsInstances/endpoints";
}
export interface digitalTwinsInstances_endpointsComponentOutputs {
	readonly apiVersion: "2022-10-31";
	readonly id: string;
	readonly type: "Microsoft.DigitalTwins/digitalTwinsInstances/endpoints";
}
export interface digitalTwinsInstances_endpointsComponentInputs {
	readonly name: string;
	readonly properties: DigitalTwinsEndpointResourceProperties;
	readonly systemData?: SystemData;
}
export class digitalTwinsInstances_privateEndpointConnections
	extends ArmResource<digitalTwinsInstances_privateEndpointConnectionsComponentInputs>
	implements digitalTwinsInstances_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: digitalTwinsInstances_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DigitalTwins/digitalTwinsInstances/privateEndpointConnections",
			"2022-10-31",
			options,
		);
	}
	public readonly apiVersion: "2022-10-31";
	public readonly id: string;
	public readonly type: "Microsoft.DigitalTwins/digitalTwinsInstances/privateEndpointConnections";
}
export interface digitalTwinsInstances_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2022-10-31";
	readonly id: string;
	readonly type: "Microsoft.DigitalTwins/digitalTwinsInstances/privateEndpointConnections";
}
export interface digitalTwinsInstances_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties: ConnectionProperties;
	readonly systemData?: SystemData;
}
export class digitalTwinsInstances_timeSeriesDatabaseConnections
	extends ArmResource<digitalTwinsInstances_timeSeriesDatabaseConnectionsComponentInputs>
	implements digitalTwinsInstances_timeSeriesDatabaseConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: digitalTwinsInstances_timeSeriesDatabaseConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DigitalTwins/digitalTwinsInstances/timeSeriesDatabaseConnections",
			"2022-10-31",
			options,
		);
	}
	public readonly apiVersion: "2022-10-31";
	public readonly id: string;
	public readonly type: "Microsoft.DigitalTwins/digitalTwinsInstances/timeSeriesDatabaseConnections";
}
export interface digitalTwinsInstances_timeSeriesDatabaseConnectionsComponentOutputs {
	readonly apiVersion: "2022-10-31";
	readonly id: string;
	readonly type: "Microsoft.DigitalTwins/digitalTwinsInstances/timeSeriesDatabaseConnections";
}
export interface digitalTwinsInstances_timeSeriesDatabaseConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: TimeSeriesDatabaseConnectionProperties;
	readonly systemData?: SystemData;
}
export interface ConnectionProperties {
	readonly groupIds?: string[];
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState?: ConnectionPropertiesPrivateLinkServiceConnectionState;
	readonly provisioningState?: "Approved" | "Disconnected" | "Pending" | "Rejected";
}
export interface ConnectionPropertiesPrivateLinkServiceConnectionState {
	readonly actionsRequired?: string;
	readonly description: string;
	readonly status: "Approved" | "Disconnected" | "Pending" | "Rejected";
}
export interface DigitalTwinsEndpointResourceProperties {
	readonly authenticationType?: "IdentityBased" | "KeyBased";
	readonly createdTime?: string;
	readonly deadLetterSecret?: string;
	readonly deadLetterUri?: string;
	readonly identity?: ManagedIdentityReference;
	readonly provisioningState?:
		| "Canceled"
		| "Deleted"
		| "Deleting"
		| "Disabled"
		| "Failed"
		| "Moving"
		| "Provisioning"
		| "Restoring"
		| "Succeeded"
		| "Suspending"
		| "Updating"
		| "Warning";
}
export interface DigitalTwinsIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned" | "SystemAssigned,UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: DigitalTwinsIdentityUserAssignedIdentities;
}
export interface DigitalTwinsIdentityUserAssignedIdentities {
	readonly [key: string]: UserAssignedIdentity;
}
export interface DigitalTwinsProperties {
	readonly createdTime?: string;
	readonly hostName?: string;
	readonly lastUpdatedTime?: string;
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly provisioningState?:
		| "Canceled"
		| "Deleted"
		| "Deleting"
		| "Failed"
		| "Moving"
		| "Provisioning"
		| "Restoring"
		| "Succeeded"
		| "Suspending"
		| "Updating"
		| "Warning";
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
}
export interface DigitalTwinsResourceTags {
	readonly [key: string]: string;
}
export interface ManagedIdentityReference {
	readonly type?: "SystemAssigned" | "UserAssigned";
	readonly userAssignedIdentity?: string;
}
export interface PrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointConnection {
	readonly id?: string;
	readonly name?: string;
	readonly properties: ConnectionProperties;
	readonly systemData?: SystemData;
	readonly type?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TimeSeriesDatabaseConnectionProperties {
	readonly identity?: ManagedIdentityReference;
	readonly provisioningState?:
		| "Canceled"
		| "Deleted"
		| "Deleting"
		| "Disabled"
		| "Failed"
		| "Moving"
		| "Provisioning"
		| "Restoring"
		| "Succeeded"
		| "Suspending"
		| "Updating"
		| "Warning";
}
export interface UserAssignedIdentity {
	readonly clientId?: string;
	readonly principalId?: string;
}
export default {
	digitalTwinsInstances: digitalTwinsInstances,
	"digitalTwinsInstances/endpoints": digitalTwinsInstances_endpoints,
	"digitalTwinsInstances/privateEndpointConnections": digitalTwinsInstances_privateEndpointConnections,
	"digitalTwinsInstances/timeSeriesDatabaseConnections": digitalTwinsInstances_timeSeriesDatabaseConnections,
};
