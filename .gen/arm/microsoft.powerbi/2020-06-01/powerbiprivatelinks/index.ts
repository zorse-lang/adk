import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class privateLinkServicesForPowerBI
	extends ArmResource<privateLinkServicesForPowerBIComponentInputs>
	implements privateLinkServicesForPowerBIComponentOutputs
{
	constructor(entity: ADKEntity, options: privateLinkServicesForPowerBIComponentInputs) {
		super(entity, options.name, "Microsoft.PowerBI/privateLinkServicesForPowerBI", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.PowerBI/privateLinkServicesForPowerBI";
}
export interface privateLinkServicesForPowerBIComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.PowerBI/privateLinkServicesForPowerBI";
}
export interface privateLinkServicesForPowerBIComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: TenantProperties;
	readonly systemData?: SystemData;
	readonly tags?: TenantResourceTags;
}
export class privateLinkServicesForPowerBI_privateEndpointConnections
	extends ArmResource<privateLinkServicesForPowerBI_privateEndpointConnectionsComponentInputs>
	implements privateLinkServicesForPowerBI_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: privateLinkServicesForPowerBI_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.PowerBI/privateLinkServicesForPowerBI/privateEndpointConnections",
			"2020-06-01",
			options,
		);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.PowerBI/privateLinkServicesForPowerBI/privateEndpointConnections";
}
export interface privateLinkServicesForPowerBI_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.PowerBI/privateLinkServicesForPowerBI/privateEndpointConnections";
}
export interface privateLinkServicesForPowerBI_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
}
export interface ConnectionState {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: "Approved" | "Disconnected" | "Pending" | "Rejected";
}
export interface PrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointConnection {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
	readonly type?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState?: ConnectionState;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TenantProperties {
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly tenantId?: string;
}
export interface TenantResourceTags {
	readonly [key: string]: string;
}
export default {
	privateLinkServicesForPowerBI: privateLinkServicesForPowerBI,
	"privateLinkServicesForPowerBI/privateEndpointConnections": privateLinkServicesForPowerBI_privateEndpointConnections,
};
