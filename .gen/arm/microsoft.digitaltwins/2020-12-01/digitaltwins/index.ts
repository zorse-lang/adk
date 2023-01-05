import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class digitalTwinsInstances
	extends ArmResource<digitalTwinsInstancesComponentInputs>
	implements digitalTwinsInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: digitalTwinsInstancesComponentInputs) {
		super(entity, options.name, "Microsoft.DigitalTwins/digitalTwinsInstances", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.DigitalTwins/digitalTwinsInstances";
}
export interface digitalTwinsInstancesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.DigitalTwins/digitalTwinsInstances";
}
export interface digitalTwinsInstancesComponentInputs {
	readonly identity?: DigitalTwinsIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties?: DigitalTwinsProperties;
	readonly tags?: DigitalTwinsResourceTags;
}
export class digitalTwinsInstances_endpoints
	extends ArmResource<digitalTwinsInstances_endpointsComponentInputs>
	implements digitalTwinsInstances_endpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: digitalTwinsInstances_endpointsComponentInputs) {
		super(entity, options.name, "Microsoft.DigitalTwins/digitalTwinsInstances/endpoints", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.DigitalTwins/digitalTwinsInstances/endpoints";
}
export interface digitalTwinsInstances_endpointsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.DigitalTwins/digitalTwinsInstances/endpoints";
}
export interface digitalTwinsInstances_endpointsComponentInputs {
	readonly name: string;
	readonly properties: DigitalTwinsEndpointResourceProperties;
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
			"2020-12-01",
			options,
		);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.DigitalTwins/digitalTwinsInstances/privateEndpointConnections";
}
export interface digitalTwinsInstances_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.DigitalTwins/digitalTwinsInstances/privateEndpointConnections";
}
export interface digitalTwinsInstances_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties: PrivateEndpointConnectionProperties;
}
export interface ConnectionPropertiesPrivateEndpoint {
	readonly id?: string;
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
		| "Warning";
}
export interface DigitalTwinsIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned";
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
export interface PrivateEndpointConnection {
	readonly id?: string;
	readonly name?: string;
	readonly properties: PrivateEndpointConnectionProperties;
	readonly type?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly groupIds?: string[];
	readonly privateEndpoint?: ConnectionPropertiesPrivateEndpoint;
	readonly privateLinkServiceConnectionState?: ConnectionPropertiesPrivateLinkServiceConnectionState;
	readonly provisioningState?: "Approved" | "Disconnected" | "Pending" | "Rejected";
}
export default {
	digitalTwinsInstances: digitalTwinsInstances,
	"digitalTwinsInstances/endpoints": digitalTwinsInstances_endpoints,
	"digitalTwinsInstances/privateEndpointConnections": digitalTwinsInstances_privateEndpointConnections,
};
