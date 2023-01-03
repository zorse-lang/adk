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
	readonly identity?: DigitalTwinsIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: DigitalTwinsProperties | undefined;
	readonly tags?: DigitalTwinsResourceTags | undefined;
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
	readonly id?: string | undefined;
}
export interface ConnectionPropertiesPrivateLinkServiceConnectionState {
	readonly actionsRequired?: string | undefined;
	readonly description: string;
	readonly status: "Approved" | "Disconnected" | "Pending" | "Rejected";
}
export interface DigitalTwinsEndpointResourceProperties {
	readonly authenticationType?: ("IdentityBased" | "KeyBased") | undefined;
	readonly createdTime?: string | undefined;
	readonly deadLetterSecret?: string | undefined;
	readonly deadLetterUri?: string | undefined;
	readonly provisioningState?:
		| (
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
				| "Warning"
		  )
		| undefined;
}
export interface DigitalTwinsIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned") | undefined;
}
export interface DigitalTwinsProperties {
	readonly createdTime?: string | undefined;
	readonly hostName?: string | undefined;
	readonly lastUpdatedTime?: string | undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly provisioningState?:
		| (
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
				| "Warning"
		  )
		| undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
}
export interface DigitalTwinsResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface PrivateEndpointConnection {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties: PrivateEndpointConnectionProperties;
	readonly type?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly groupIds?: string[] | undefined;
	readonly privateEndpoint?: ConnectionPropertiesPrivateEndpoint | undefined;
	readonly privateLinkServiceConnectionState?: ConnectionPropertiesPrivateLinkServiceConnectionState | undefined;
	readonly provisioningState?: ("Approved" | "Disconnected" | "Pending" | "Rejected") | undefined;
}
export default {
	digitalTwinsInstances: digitalTwinsInstances,
	"digitalTwinsInstances/endpoints": digitalTwinsInstances_endpoints,
	"digitalTwinsInstances/privateEndpointConnections": digitalTwinsInstances_privateEndpointConnections,
};
